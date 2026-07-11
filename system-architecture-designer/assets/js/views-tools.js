/* 工具视图：术语本、错题本、搜索、设置、计算器 */
window.SAD = window.SAD || {};
SAD.views = SAD.views || {};

/* ===== 交互计算器（系统可靠度 / Amdahl 加速比 / 海明校验位） ===== */
SAD.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>架构计算器</h2>';
  html += '<p class="calc-intro">系统架构高频可算项，输入即时计算，配合案例分析与性能/可靠性课时使用。所有计算在本地完成。</p>';

  // 系统可靠度（串/并联）
  html += '<div class="calc-card">';
  html += '<h3>系统可靠度计算器（串联 / 并联）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>各子系统可靠度 R（逗号分隔，0~1） <input type="text" id="rel-list" placeholder="如 0.9,0.8,0.95"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAD.calcReliability()">计算</button>';
  html += '<div id="rel-result" class="calc-result"></div>';
  html += '</div>';

  // Amdahl 加速比
  html += '<div class="calc-card">';
  html += '<h3>Amdahl 加速比计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>可优化部分占比 p（0~1） <input type="number" id="am-p" placeholder="如 0.6" step="0.01"></label>';
  html += '<label>该部分加速倍数 n <input type="number" id="am-n" placeholder="如 4"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAD.calcAmdahl()">计算</button>';
  html += '<div id="am-result" class="calc-result"></div>';
  html += '</div>';

  // 海明校验位
  html += '<div class="calc-card">';
  html += '<h3>海明码校验位数计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>数据位数 m <input type="number" id="hm-m" placeholder="如 8"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAD.calcHamming()">计算</button>';
  html += '<div id="hm-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  SAD.render(html);
};

SAD.calcReliability = function() {
  var raw = (document.getElementById('rel-list').value || '').trim();
  var el = document.getElementById('rel-result');
  if (!raw) { el.innerHTML = '<div class="calc-warn">请输入各子系统可靠度，逗号分隔</div>'; return; }
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
  html += '<tr><td class="cr-name">子系统数</td><td class="cr-val">' + rs.length + '</td><td class="cr-formula">R = ' + rs.join(' , ') + '</td></tr>';
  html += '<tr><td class="cr-name">串联可靠度</td><td class="cr-val">' + series.toFixed(4) + '</td><td class="cr-formula">∏Ri（全部正常才工作）</td></tr>';
  html += '<tr><td class="cr-name">并联可靠度</td><td class="cr-val cr-good">' + parallel.toFixed(4) + '</td><td class="cr-formula">1−∏(1−Ri)（一个正常即工作）</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SAD.calcAmdahl = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var p = v('am-p'), n = v('am-n');
  var el = document.getElementById('am-result');
  if (p === null || n === null) { el.innerHTML = '<div class="calc-warn">请填写占比 p 与加速倍数 n</div>'; return; }
  if (p < 0 || p > 1 || n <= 0) { el.innerHTML = '<div class="calc-warn">p 需在 0~1，n 需大于 0</div>'; return; }
  var S = 1 / ((1 - p) + p / n);
  var Smax = 1 / (1 - p);
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">整体加速比 S</td><td class="cr-val cr-good">' + S.toFixed(3) + '</td><td class="cr-formula">1 / ((1−p) + p/n)</td></tr>';
  html += '<tr><td class="cr-name">理论上限 S∞</td><td class="cr-val">' + (isFinite(Smax) ? Smax.toFixed(3) : '∞') + '</td><td class="cr-formula">1/(1−p)（n→∞）</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SAD.calcHamming = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var m = v('hm-m');
  var el = document.getElementById('hm-result');
  if (m === null || m < 1 || m % 1 !== 0) { el.innerHTML = '<div class="calc-warn">请输入正整数数据位数 m</div>'; return; }
  var r = 0;
  while (Math.pow(2, r) < m + r + 1) r++;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">最少校验位 r</td><td class="cr-val cr-good">' + r + '</td><td class="cr-formula">满足 2^r ≥ m+r+1 的最小 r</td></tr>';
  html += '<tr><td class="cr-name">码字总长</td><td class="cr-val">' + (m + r) + '</td><td class="cr-formula">m + r 位</td></tr>';
  html += '<tr><td class="cr-name">校验</td><td class="cr-val">2^' + r + '=' + Math.pow(2, r) + ' ≥ ' + (m + r + 1) + '</td><td class="cr-formula">成立</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SAD.views.module = function(id) {
  var mod = SAD.modules.find(function(m) { return m.id === id; });
  if (!mod) { SAD.views.home(); return; }
  var P = SAD.progress();

  var lessons = SAD.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + SAD.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + SAD.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = SAD.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + SAD.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + SAD.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  SAD.render(html);
};

SAD.views.terms = function() {
  var P = SAD.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="SAD.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(SAD.terms);
  html += '</div></div>';
  SAD.render(html);
};

SAD.filterTerms = function(q) {
  var filtered = SAD.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = SAD.terms.filter(function(t) {
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
    html += '<div class="term-name">' + SAD.esc(t.name) + ' <span class="term-en">' + SAD.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + SAD.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + SAD.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

SAD.views.myTerms = function() {
  var P = SAD.progress();
  var collected = [];
  for (var i = 0; i < SAD.terms.length; i++) {
    if (P.hasTerm(SAD.terms[i].id)) collected.push(SAD.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  SAD.render(html);
};

SAD.views.mistakes = function() {
  var P = SAD.progress();
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
      html += '<div class="mistake-q">' + SAD.esc(m.q) + '</div>';
      html += '<div class="mistake-my">你的答案: ' + SAD.esc(m.my) + '</div>';
      html += '<div class="mistake-ans">正确答案: ' + SAD.esc(m.ans) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  SAD.render(html);
};

SAD.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="SAD.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  SAD.render(html);
};

SAD.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = SAD.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + SAD.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + SAD.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

SAD.views.settings = function() {
  var P = SAD.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || 'dark';
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="SAD.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="SAD.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="SAD.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="SAD.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="SAD.setFontSize(\'l\')">大</button>';
  html += '</div>';

  /* ── GitHub 进度同步(可选) ── */
  var syncCfg = SAD.sync.config();
  html += '<h3>GitHub 进度同步（可选）</h3>';
  html += '<p class="calc-intro">用一个<b>自己的 private 仓库</b>存放进度（如 you/sad-progress），fine-grained PAT 仅授权该仓库的 Contents 读写。token 只存本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/repo" value="' + SAD.esc(syncCfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + SAD.esc(syncCfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + SAD.esc(syncCfg.token || '') + '"></div>';
  html += '<div class="setting-row"><button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-intro" id="syMsg">' + SAD.esc((SAD.sync && SAD.sync.statusText) || '仅本机') + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="SAD.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="SAD.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  SAD.render(html);

  // 同步(可选)
  function syncMsg(text, cls) {
    var el = document.getElementById('syMsg');
    if (!el) return;
    el.textContent = text;
    el.style.color = cls === 'ok' ? 'var(--ok)' : cls === 'bad' ? 'var(--bad, var(--red))' : '';
  }
  var sySaveEl = document.getElementById('sySave');
  if (sySaveEl) {
    sySaveEl.addEventListener('click', function () {
      SAD.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!SAD.sync.ready()) { syncMsg('仓库和 token 都要填。', 'bad'); return; }
      syncMsg('同步中…');
      SAD.sync.pullNow().then(function () { return SAD.sync.pushNow(); })
        .then(function (ok) { syncMsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + SAD.sync.statusText, ok ? 'ok' : 'bad'); });
    });
  }
  var syPullEl = document.getElementById('syPull');
  if (syPullEl) {
    syPullEl.addEventListener('click', function () {
      syncMsg('拉取中…');
      SAD.sync.pullNow().then(function (ok) { syncMsg(ok ? '已拉取并合并远端进度 ✓' : SAD.sync.statusText, ok ? 'ok' : ''); });
    });
  }
  var syClearEl = document.getElementById('syClear');
  if (syClearEl) {
    syClearEl.addEventListener('click', function () {
      SAD.sync.clearToken();
      document.getElementById('syToken').value = '';
      syncMsg('token 已从本机清除。');
    });
  }
};

SAD.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  SAD.progress().setPref('theme', t);
  SAD.views.settings();
};

SAD.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  SAD.progress().setPref('fontSize', s);
  SAD.views.settings();
};

SAD.exportData = function() {
  var data = SAD.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sad-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

SAD.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('sad.progress.v1');
    window.location.reload();
  }
};
