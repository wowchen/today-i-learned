/* GitHub 进度同步(ADR-5):fine-grained PAT + 独立 private repo + Contents API。
   流程:启动时 pull→merge;数据变更后 debounce 推送;PUT 遇 409/422(sha 过期)
   则重新 pull→merge→重试。token 仅存本机 localStorage,不入站点仓库。 */
(function () {
  'use strict';
  window.EMS = window.EMS || {};

  var CFG_KEY = 'ems.sync.v1';
  var cfg = loadCfg();
  var pushTimer = null;
  var busy = false;
  var lastSha = null;

  function loadCfg() {
    try { return JSON.parse(localStorage.getItem(CFG_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveCfg() {
    try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch (e) { }
  }
  function ready() { return !!(cfg.token && cfg.repo); }

  function apiUrl() {
    // cfg.repo 形如 "owner/english-progress"
    return 'https://api.github.com/repos/' + cfg.repo + '/contents/' +
      (cfg.path || 'progress.json') + '?ref=' + (cfg.branch || 'main');
  }
  function headers() {
    return {
      'Authorization': 'Bearer ' + cfg.token,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };
  }
  function b64encodeUtf8(s) { return btoa(unescape(encodeURIComponent(s))); }
  function b64decodeUtf8(s) { return decodeURIComponent(escape(atob(s.replace(/\n/g, '')))); }

  function setStatus(text, cls) {
    var el = document.getElementById('syncStatus');
    if (el) { el.textContent = '进度:' + text; el.className = cls || ''; }
    EMS.sync.statusText = text;
  }

  function pull() {
    if (!ready()) return Promise.resolve(false);
    setStatus('同步中…');
    return fetch(apiUrl(), { headers: headers() }).then(function (res) {
      if (res.status === 404) { lastSha = null; return false; }   // 远端还没有文件,首推时创建
      if (!res.ok) throw new Error('GitHub ' + res.status);
      return res.json().then(function (j) {
        lastSha = j.sha;
        EMS.progress.merge(JSON.parse(b64decodeUtf8(j.content)));
        return true;
      });
    });
  }

  function push(retry) {
    if (!ready() || busy) return Promise.resolve(false);
    busy = true;
    setStatus('同步中…');
    var body = {
      message: 'sync progress ' + new Date().toISOString(),
      content: b64encodeUtf8(EMS.progress.exportJson()),
      branch: cfg.branch || 'main'
    };
    if (lastSha) body.sha = lastSha;
    return fetch(apiUrl().split('?')[0], {
      method: 'PUT', headers: headers(), body: JSON.stringify(body)
    }).then(function (res) {
      busy = false;
      if (res.status === 409 || res.status === 422) {
        // sha 过期:另一台设备先写了。拉回合并后重试一次。
        if (retry) throw new Error('conflict-twice');
        return pull().then(function () { return push(true); });
      }
      if (!res.ok) throw new Error('GitHub ' + res.status);
      return res.json().then(function (j) {
        lastSha = j.content && j.content.sha;
        setStatus('已同步 ✓ ' + timeNow(), 'ok');
        return true;
      });
    }).catch(function (err) {
      busy = false;
      setStatus('同步失败(' + err.message + '),数据仍在本机', 'bad');
      return false;
    });
  }

  function timeNow() {
    var d = new Date();
    return d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  }

  EMS.sync = {
    statusText: '仅本机',
    config: function () { return cfg; },
    setConfig: function (c) {
      cfg.token = (c.token || '').trim();
      cfg.repo = (c.repo || '').trim();
      cfg.branch = (c.branch || 'main').trim();
      cfg.path = (c.path || 'progress.json').trim();
      saveCfg();
    },
    clearToken: function () { cfg.token = ''; saveCfg(); setStatus('仅本机'); },
    ready: ready,
    pullNow: function () {
      return pull().then(function (ok) {
        setStatus(ok ? '已同步 ✓ ' + timeNow() : '远端暂无进度文件', ok ? 'ok' : '');
        return ok;
      }).catch(function (err) {
        setStatus('拉取失败(' + err.message + ')', 'bad');
        return false;
      });
    },
    pushNow: function () { return push(false); },
    schedulePush: function () {
      if (!ready()) return;
      clearTimeout(pushTimer);
      pushTimer = setTimeout(function () { push(false); }, 4000);
    },
    boot: function () {
      if (!ready()) { setStatus('仅本机(未配置同步)'); return; }
      pull().then(function (ok) {
        setStatus(ok ? '已同步 ✓ ' + timeNow() : '远端暂无进度文件,首次保存时创建', ok ? 'ok' : '');
      }).catch(function (err) {
        setStatus('拉取失败(' + err.message + '),数据仍在本机', 'bad');
      });
    }
  };
})();
