/* 工具视图：术语本、错题本、搜索、设置、计算器 */
window.NPD = window.NPD || {};
NPD.views = NPD.views || {};

/* ===== 交互计算器（IP 子网划分 / 信道容量(奈氏·香农) / 链路可靠度(串·并联)） ===== */
NPD.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>网规计算器</h2>';
  html += '<p class="calc-intro">网络规划设计师案例高频可算项，输入即时计算，配合网络层与 IP、数据通信、可靠性课时使用。所有计算在本地完成。</p>';

  // IP 子网划分（IPv4）
  html += '<div class="calc-card">';
  html += '<h3>IP 子网划分计算器（IPv4）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>IP 地址 <input type="text" id="sub-ip" placeholder="如 192.168.1.130"></label>';
  html += '<label>前缀长度 /CIDR（0–32） <input type="number" id="sub-pre" min="0" max="32" placeholder="如 26"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="NPD.calcSubnet()">计算</button>';
  html += '<div id="sub-result" class="calc-result"></div>';
  html += '</div>';

  // 信道容量（奈奎斯特 / 香农）
  html += '<div class="calc-card">';
  html += '<h3>信道容量计算器（奈奎斯特 / 香农）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>带宽 W（Hz） <input type="number" id="cap-w" placeholder="如 4000"></label>';
  html += '<label>电平数 V（≥2，奈氏） <input type="number" id="cap-v" min="2" placeholder="如 16"></label>';
  html += '<label>信噪比 SNR（dB，香农） <input type="number" id="cap-snr" placeholder="如 30"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="NPD.calcCapacity()">计算</button>';
  html += '<div id="cap-result" class="calc-result"></div>';
  html += '</div>';

  // 链路 / 设备可靠度（串 / 并联）
  html += '<div class="calc-card">';
  html += '<h3>链路 / 设备可靠度计算器（串联 / 并联）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>各链路可靠度 R（逗号分隔，0~1） <input type="text" id="rel-list" placeholder="如 0.9,0.8,0.95"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="NPD.calcReliability()">计算</button>';
  html += '<div id="rel-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  NPD.render(html);
};

// ---- 工具：IPv4 点分十进制 ⇄ 32 位无符号整数 ----
NPD._ip2int = function(s) {
  var m = (s || '').trim().split('.');
  if (m.length !== 4) return null;
  var n = 0;
  for (var i = 0; i < 4; i++) {
    var o = parseInt(m[i], 10);
    if (isNaN(o) || o < 0 || o > 255 || String(o) !== m[i]) return null;
    n = (n * 256 + o) >>> 0;
  }
  return n >>> 0;
};
NPD._int2ip = function(n) {
  n = n >>> 0;
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
};

// IP 子网划分：IP + 前缀 → 网络地址 / 广播 / 掩码 / 可用主机数 / 地址范围
NPD.calcSubnet = function() {
  var ip = NPD._ip2int(document.getElementById('sub-ip').value);
  var pre = parseInt(document.getElementById('sub-pre').value, 10);
  var el = document.getElementById('sub-result');
  if (ip === null) { el.innerHTML = '<div class="calc-warn">请填写合法 IPv4 地址（如 192.168.1.130）</div>'; return; }
  if (isNaN(pre) || pre < 0 || pre > 32) { el.innerHTML = '<div class="calc-warn">前缀长度需为 0–32 的整数</div>'; return; }
  var mask = pre === 0 ? 0 : (0xFFFFFFFF << (32 - pre)) >>> 0;
  var network = (ip & mask) >>> 0;
  var broadcast = (network | (~mask >>> 0)) >>> 0;
  var hostBits = 32 - pre;
  var total = Math.pow(2, hostBits);
  var usable = pre >= 31 ? (pre === 31 ? 2 : 1) : (total - 2);
  var firstH = pre >= 31 ? network : (network + 1) >>> 0;
  var lastH = pre >= 31 ? broadcast : (broadcast - 1) >>> 0;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">网络地址</td><td class="cr-val cr-good">' + NPD._int2ip(network) + '</td><td class="cr-formula">IP & 掩码</td></tr>';
  html += '<tr><td class="cr-name">广播地址</td><td class="cr-val">' + NPD._int2ip(broadcast) + '</td><td class="cr-formula">网络 | ~掩码</td></tr>';
  html += '<tr><td class="cr-name">子网掩码</td><td class="cr-val">/' + pre + ' ' + NPD._int2ip(mask) + '</td><td class="cr-formula">前 ' + pre + ' 位为 1</td></tr>';
  html += '<tr><td class="cr-name">可用主机数</td><td class="cr-val">' + usable + '</td><td class="cr-formula">2^' + hostBits + (pre >= 31 ? '' : ' − 2') + '</td></tr>';
  html += '<tr><td class="cr-name">地址范围</td><td class="cr-val">' + NPD._int2ip(firstH) + ' ~ ' + NPD._int2ip(lastH) + '</td><td class="cr-formula">' + (pre >= 31 ? '点对点/单主机' : '网络+1 ~ 广播−1') + '</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

// 信道容量：带宽 + 电平数(奈氏) + 信噪比dB(香农)，取两者较小为实际极限
NPD.calcCapacity = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var W = v('cap-w'), V = v('cap-v'), snr = v('cap-snr');
  var el = document.getElementById('cap-result');
  if (W === null || W < 0) { el.innerHTML = '<div class="calc-warn">请填写带宽 W（Hz）</div>'; return; }
  var rows = '', cN = null, cS = null;
  if (V !== null && V >= 2) {
    cN = 2 * W * Math.log2(V);
    rows += '<tr><td class="cr-name">奈奎斯特极限</td><td class="cr-val">' + cN.toFixed(2) + ' bps</td><td class="cr-formula">2W·log₂(V) = 2×' + W + '×log₂(' + V + ')</td></tr>';
  }
  if (snr !== null) {
    var sn = Math.pow(10, snr / 10);
    cS = W * Math.log2(1 + sn);
    rows += '<tr><td class="cr-name">香农极限</td><td class="cr-val">' + cS.toFixed(2) + ' bps</td><td class="cr-formula">W·log₂(1+S/N)，S/N=10^(' + snr + '/10)</td></tr>';
  }
  if (cN !== null && cS !== null) {
    var cap = Math.min(cN, cS);
    rows += '<tr><td class="cr-name">实际极限容量</td><td class="cr-val cr-good">' + cap.toFixed(2) + ' bps</td><td class="cr-formula">取两者较小（瓶颈）</td></tr>';
  } else if (cN === null && cS === null) {
    el.innerHTML = '<div class="calc-warn">请至少填写电平数 V 或信噪比 SNR 之一</div>'; return;
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table>';
};

// 链路 / 设备可靠度：串联 ∏Ri，并联 1−∏(1−Ri)
NPD.calcReliability = function() {
  var raw = (document.getElementById('rel-list').value || '').trim();
  var el = document.getElementById('rel-result');
  if (!raw) { el.innerHTML = '<div class="calc-warn">请输入各链路可靠度，逗号分隔</div>'; return; }
  var parts = raw.split(/[，,\s]+/).filter(function(s){ return s !== ''; });
  var rs = [], ok = true;
  for (var i = 0; i < parts.length; i++) {
    var x = parseFloat(parts[i]);
    if (isNaN(x) || x < 0 || x > 1) { ok = false; break; }
    rs.push(x);
  }
  if (!ok || rs.length === 0) { el.innerHTML = '<div class="calc-warn">每个可靠度需为 0~1 之间的数</div>'; return; }
  var series = rs.reduce(function(a, b){ return a * b; }, 1);
  var parallel = 1 - rs.reduce(function(a, b){ return a * (1 - b); }, 1);
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">链路/设备数</td><td class="cr-val">' + rs.length + '</td><td class="cr-formula">R = ' + rs.join(' , ') + '</td></tr>';
  html += '<tr><td class="cr-name">串联可靠度</td><td class="cr-val">' + series.toFixed(4) + '</td><td class="cr-formula">∏Ri（全部正常才通）</td></tr>';
  html += '<tr><td class="cr-name">并联可靠度</td><td class="cr-val cr-good">' + parallel.toFixed(4) + '</td><td class="cr-formula">1−∏(1−Ri)（一条通即可）</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

NPD.views.module = function(id) {
  var mod = NPD.modules.find(function(m) { return m.id === id; });
  if (!mod) { NPD.views.home(); return; }
  var P = NPD.progress();

  var lessons = NPD.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + NPD.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + NPD.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = NPD.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + NPD.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + NPD.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  NPD.render(html);
};

NPD.views.terms = function() {
  var P = NPD.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="NPD.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(NPD.terms);
  html += '</div></div>';
  NPD.render(html);
};

NPD.filterTerms = function(q) {
  var filtered = NPD.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = NPD.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 ||
             t.en.toLowerCase().indexOf(q) !== -1 ||
             t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};

function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + NPD.esc(t.name) + ' <span class="term-en">' + NPD.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + NPD.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + NPD.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

NPD.views.myTerms = function() {
  var P = NPD.progress();
  var collected = [];
  for (var i = 0; i < NPD.terms.length; i++) {
    if (P.hasTerm(NPD.terms[i].id)) collected.push(NPD.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  NPD.render(html);
};

NPD.views.mistakes = function() {
  var P = NPD.progress();
  var mistakes = P.allMistakes();

  var html = '<div class="tools-page">';
  html += '<h2>错题本 (' + mistakes.length + ')</h2>';
  if (mistakes.length === 0) {
    html += '<p class="empty-hint">还没有错题。做题答错后会自动收集到这里。</p>';
  } else {
    html += '<div class="mistake-list">';
    for (var i = 0; i < mistakes.length; i++) {
      var m = mistakes[i];
      html += '<div class="mistake-item">';
      html += '<div class="mistake-q">' + NPD.esc(m.q) + '</div>';
      html += '<div class="mistake-my">你的答案: ' + NPD.esc(m.my) + '</div>';
      html += '<div class="mistake-ans">正确答案: ' + NPD.esc(m.ans) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  NPD.render(html);
};

NPD.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="NPD.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  NPD.render(html);
};

NPD.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = NPD.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + NPD.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + NPD.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

NPD.views.settings = function() {
  var P = NPD.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || 'dark';
  var fs = prefs.fontSize || 'm';
  var cfg = NPD.sync.config();

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="NPD.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="NPD.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="NPD.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="NPD.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="NPD.setFontSize(\'l\')">大</button>';
  html += '</div>';

  html += '<div class="setting-row"><label>GitHub 同步</label></div>';
  html += '<p class="sync-desc">用一个<b>自己的 private 仓库</b>存进度(如 owner/npd-progress),fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/npd-progress" value="' + NPD.esc(cfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + NPD.esc(cfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + NPD.esc(cfg.token || '') + '"></div>';
  html += '<div class="setting-row"><label></label>';
  html += '<button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="sync-desc" id="syMsg">' + NPD.esc(NPD.sync.statusText) + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="NPD.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="NPD.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  NPD.render(html);

  // 同步
  function msg(text, cls) {
    var el = document.getElementById('syMsg');
    if (el) { el.textContent = text; el.className = 'sync-desc ' + (cls || ''); }
  }
  document.getElementById('sySave').addEventListener('click', function () {
    NPD.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!NPD.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
    msg('同步中…');
    NPD.sync.pullNow().then(function () { return NPD.sync.pushNow(); })
      .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + NPD.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    msg('拉取中…');
    NPD.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : NPD.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    NPD.sync.clearToken();
    document.getElementById('syToken').value = '';
    msg('token 已从本机清除。');
  });
};

NPD.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  NPD.progress().setPref('theme', t);
  NPD.views.settings();
};

NPD.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  NPD.progress().setPref('fontSize', s);
  NPD.views.settings();
};

NPD.exportData = function() {
  var data = NPD.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'npd-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

NPD.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('npd.progress.v1');
    window.location.reload();
  }
};
