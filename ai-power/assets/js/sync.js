/* 进度云端同步(可选):默认仅本机 localStorage,不触发任何网络请求。
   配置后,把进度备份到「用户自己的私有 GitHub 仓库」的 Contents 文件:
      progress/<site>.json
   设计原则:
     - Token 只存本机 localStorage(键 aip.sync.v1),绝不写入站点代码/内容。
     - 未配置(无 token/repo)时,schedulePush/pull 直接返回,进度仅本机。
     - 合并策略:按 updatedAt 取较新记录,跨设备不丢数据;prefs 不参与同步(设备相关)。
     - 依赖 AIP.progress() 的 export()/import() 与 onProgressChange 钩子。 */
window.AIP = window.AIP || {};
(function () {
  var SITE = 'aip';                       // 仓库内文件名前缀,各站不同
  var FILE = 'progress/' + SITE + '.json'; // 该站进度在仓库中的路径
  var CFG_KEY = 'aip.sync.v1';             // 同步配置(含 token)的本地存储键

  function getCfg() {
    try { return JSON.parse(localStorage.getItem(CFG_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function setCfg(c) { localStorage.setItem(CFG_KEY, JSON.stringify(c)); }

  // UTF-8 安全的 base64(GitHub Contents API 要求 base64)
  function b64encode(str) { return btoa(unescape(encodeURIComponent(str))); }
  function b64decode(b64) { return decodeURIComponent(escape(atob(b64))); }

  function apiUrl(repo) {
    return 'https://api.github.com/repos/' + repo + '/contents/' + FILE;
  }
  function authHeaders(token, extra) {
    var h = { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + token };
    if (extra) for (var k in extra) h[k] = extra[k];
    return h;
  }

  /* 合并:把云端 remote 并入本地 local,按 updatedAt 取较新记录。
     返回新对象,不修改入参。prefs 被刻意排除(主题/字号是设备相关,不应跨设备覆盖)。 */
  function mergeData(local, remote) {
    var out = JSON.parse(JSON.stringify(local));
    ['read', 'terms', 'mistakes'].forEach(function (sec) {
      var L = local[sec] || {}, R = remote[sec] || {};
      out[sec] = out[sec] || {};
      for (var k in R) {
        if (!L[k]) out[sec][k] = R[k];
        else {
          var lu = L[k].updatedAt || 0, ru = R[k].updatedAt || 0;
          out[sec][k] = (ru >= lu) ? R[k] : L[k]; // 相等时云端优先,方便跨设备纠正
        }
      }
    });
    var ld = (local.activity && local.activity.days) || [];
    var rd = (remote.activity && remote.activity.days) || [];
    var seen = {}, days = [];
    ld.concat(rd).forEach(function (d) { if (!seen[d]) { seen[d] = 1; days.push(d); } });
    days.sort();
    if (days.length > 365) days = days.slice(-365);
    out.activity = out.activity || {};
    out.activity.days = days;
    return out;
  }

  var statusEl = null;
  var LABELS = { off: '未同步', pending: '同步中…', pulling: '拉取中…', synced: '已同步', error: '同步失败' };
  function setStatus(state, detail) {
    AIP._syncState = state;
    if (statusEl) {
      statusEl.dataset.state = state;
      statusEl.textContent = LABELS[state] || state;
      statusEl.title = detail || '';
    }
  }

  function push() {
    var cfg = getCfg();
    if (!cfg.token || !cfg.repo) { setStatus('off'); return Promise.resolve(false); }
    setStatus('pending');
    var data = AIP.progress().export();
    delete data.prefs; // 不同步设备偏好
    var payload = JSON.stringify({ site: SITE, syncedAt: Date.now(), data: data }, null, 2);
    var url = apiUrl(cfg.repo);
    return fetch(url, { headers: authHeaders(cfg.token) })
      .then(function (r) { return r.status === 200 ? r.json() : null; })
      .then(function (meta) {
        var body = {
          message: 'sync ' + SITE + ' ' + new Date().toISOString().slice(0, 19).replace('T', ' '),
          content: b64encode(payload)
        };
        if (meta && meta.sha) body.sha = meta.sha; // 已存在则更新,否则创建
        return fetch(url, {
          method: 'PUT',
          headers: authHeaders(cfg.token, { 'Content-Type': 'application/json' }),
          body: JSON.stringify(body)
        });
      })
      .then(function (r) {
        if (r.ok) { setStatus('synced', '已同步到 ' + cfg.repo); return true; }
        setStatus('error', 'HTTP ' + r.status);
        return false;
      })
      .catch(function (e) { setStatus('error', e.message); return false; });
  }

  function pull() {
    var cfg = getCfg();
    if (!cfg.token || !cfg.repo) { setStatus('off'); return Promise.resolve(false); }
    setStatus('pulling');
    var url = apiUrl(cfg.repo);
    return fetch(url, { headers: authHeaders(cfg.token) })
      .then(function (r) { return r.status === 200 ? r.json() : null; })
      .then(function (meta) {
        if (!meta || !meta.content) { setStatus('off'); return false; }
        var payload;
        try { payload = JSON.parse(b64decode(meta.content)); } catch (e) { setStatus('error', '文件解析失败'); return false; }
        if (!payload.data) { setStatus('off'); return false; }
        var merged = mergeData(AIP.progress().export(), payload.data);
        AIP.progress().import(merged);
        setStatus('synced', '已同步 ' + cfg.repo);
        return true;
      })
      .catch(function (e) { setStatus('error', e.message); return false; });
  }

  var pushTimer = null;
  function schedulePush() {
    var cfg = getCfg();
    if (!cfg.token || !cfg.repo) return; // 未配置:什么都不做,零网络
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { push(); }, 1200);
  }

  function saveCfg(repo, token) {
    var c = getCfg();
    c.repo = (repo || '').trim();
    if (token && token.trim()) c.token = token.trim(); // 仅在提供时更新,避免清空已有 token
    setCfg(c);
  }
  function clearCfg() {
    localStorage.removeItem(CFG_KEY);
    setStatus('off');
  }

  AIP.sync = {
    getCfg: getCfg,
    saveCfg: saveCfg,
    clearCfg: clearCfg,
    push: push,
    pull: pull,
    schedulePush: schedulePush,
    setStatusEl: function (el) { statusEl = el; if (el) setStatus(AIP._syncState || (getCfg().token ? 'pending' : 'off')); }
  };

  // 进度变化时自动(防抖)推送
  AIP.onProgressChange = schedulePush;

  // 页面加载后,若已配置则先拉取云端进度并合并,再让当前视图用最新数据重渲染
  function initOnLoad() {
    var cfg = getCfg();
    setStatus(cfg.token && cfg.repo ? 'pending' : 'off');
    if (!cfg.token || !cfg.repo) return;
    pull().then(function () {
      if (window.location.hash) window.dispatchEvent(new HashChangeEvent('hashchange'));
      else if (AIP.views && AIP.views.home) AIP.views.home();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initOnLoad);
  else initOnLoad();
})();
