/* 工具视图：术语本、错题本、搜索、设置、计算器 */
window.SAN = window.SAN || {};
SAN.views = SAN.views || {};

/* ===== 交互计算器（决策树期望值 / PERT 期望工期 / 系统可靠度） ===== */
SAN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>系分计算器</h2>';
  html += '<p class="calc-intro">系统分析师案例高频可算项，输入即时计算，配合数学与运筹、可靠性课时使用。所有计算在本地完成。</p>';

  // 决策树期望值
  html += '<div class="calc-card">';
  html += '<h3>决策树期望值计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>各方案的"概率×收益"组（每行一个方案，组内空格分隔，如：0.6,500 0.4,-100） <input type="text" id="dt-list" placeholder="如 0.6,500 0.4,-100 | 1,200"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAN.calcDecision()">计算</button>';
  html += '<div id="dt-result" class="calc-result"></div>';
  html += '</div>';

  // PERT 期望工期
  html += '<div class="calc-card">';
  html += '<h3>PERT 三点估算计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>O 乐观 <input type="number" id="pe-o" placeholder="如 6"></label>';
  html += '<label>M 最可能 <input type="number" id="pe-m" placeholder="如 9"></label>';
  html += '<label>P 悲观 <input type="number" id="pe-p" placeholder="如 18"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAN.calcPERT()">计算</button>';
  html += '<div id="pe-result" class="calc-result"></div>';
  html += '</div>';

  // 系统可靠度（串/并联）
  html += '<div class="calc-card">';
  html += '<h3>系统可靠度计算器（串联 / 并联）</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>各子系统可靠度 R（逗号分隔，0~1） <input type="text" id="rel-list" placeholder="如 0.9,0.8,0.95"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="SAN.calcReliability()">计算</button>';
  html += '<div id="rel-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  SAN.render(html);
};

SAN.calcDecision = function() {
  var raw = (document.getElementById('dt-list').value || '').trim();
  var el = document.getElementById('dt-result');
  if (!raw) { el.innerHTML = '<div class="calc-warn">请输入方案，方案间用 | 分隔</div>'; return; }
  var schemes = raw.split('|').map(function(s){ return s.trim(); }).filter(function(s){ return s !== ''; });
  var rows = '', best = null, bestEV = -Infinity, ok = true;
  for (var i = 0; i < schemes.length; i++) {
    var pairs = schemes[i].split(/\s+/).filter(function(s){ return s !== ''; });
    var ev = 0, detail = [];
    for (var j = 0; j < pairs.length; j++) {
      var pr = pairs[j].split(/[，,]/);
      var p = parseFloat(pr[0]), val = parseFloat(pr[1]);
      if (isNaN(p) || isNaN(val)) { ok = false; break; }
      ev += p * val; detail.push(p + '×' + val);
    }
    if (!ok) break;
    if (ev > bestEV) { bestEV = ev; best = i + 1; }
    rows += '<tr><td class="cr-name">方案' + (i + 1) + ' 期望</td><td class="cr-val">' + ev.toFixed(2) + '</td><td class="cr-formula">' + detail.join(' + ') + '</td></tr>';
  }
  if (!ok) { el.innerHTML = '<div class="calc-warn">格式：方案内"概率,收益"用空格分隔，方案间用 |</div>'; return; }
  rows += '<tr><td class="cr-name">最优方案</td><td class="cr-val cr-good">方案' + best + '</td><td class="cr-formula">期望值最大 ' + bestEV.toFixed(2) + '</td></tr>';
  el.innerHTML = '<table class="cr-table">' + rows + '</table>';
};

SAN.calcPERT = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var O = v('pe-o'), M = v('pe-m'), P = v('pe-p');
  var el = document.getElementById('pe-result');
  if (O === null || M === null || P === null) { el.innerHTML = '<div class="calc-warn">请填写 O、M、P 三个值</div>'; return; }
  var te = (O + 4 * M + P) / 6, sigma = (P - O) / 6;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">期望工期 te</td><td class="cr-val cr-good">' + te.toFixed(2) + '</td><td class="cr-formula">(O+4M+P)/6</td></tr>';
  html += '<tr><td class="cr-name">标准差 σ</td><td class="cr-val">' + sigma.toFixed(2) + '</td><td class="cr-formula">(P−O)/6</td></tr>';
  html += '<tr><td class="cr-name">区间 te±σ</td><td class="cr-val">' + (te - sigma).toFixed(2) + ' ~ ' + (te + sigma).toFixed(2) + '</td><td class="cr-formula">约68%置信</td></tr>';
  html += '</table>';
  el.innerHTML = html;
};

SAN.calcReliability = function() {
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

SAN.views.module = function(id) {
  var mod = SAN.modules.find(function(m) { return m.id === id; });
  if (!mod) { SAN.views.home(); return; }
  var P = SAN.progress();

  var lessons = SAN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + SAN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + SAN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = SAN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + SAN.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + SAN.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  SAN.render(html);
};

SAN.views.terms = function() {
  var P = SAN.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="SAN.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(SAN.terms);
  html += '</div></div>';
  SAN.render(html);
};

SAN.filterTerms = function(q) {
  var filtered = SAN.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = SAN.terms.filter(function(t) {
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
    html += '<div class="term-name">' + SAN.esc(t.name) + ' <span class="term-en">' + SAN.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + SAN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + SAN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

SAN.views.myTerms = function() {
  var P = SAN.progress();
  var collected = [];
  for (var i = 0; i < SAN.terms.length; i++) {
    if (P.hasTerm(SAN.terms[i].id)) collected.push(SAN.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  SAN.render(html);
};

SAN.views.mistakes = function() {
  var P = SAN.progress();
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
      html += '<div class="mistake-q">' + SAN.esc(m.q) + '</div>';
      html += '<div class="mistake-my">你的答案: ' + SAN.esc(m.my) + '</div>';
      html += '<div class="mistake-ans">正确答案: ' + SAN.esc(m.ans) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  SAN.render(html);
};

SAN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="SAN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  SAN.render(html);
};

SAN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = SAN.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + SAN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + SAN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

SAN.views.settings = function() {
  var P = SAN.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || 'dark';
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="SAN.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="SAN.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="SAN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="SAN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="SAN.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="SAN.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="SAN.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  SAN.render(html);
};

SAN.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  SAN.progress().setPref('theme', t);
  SAN.views.settings();
};

SAN.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  SAN.progress().setPref('fontSize', s);
  SAN.views.settings();
};

SAN.exportData = function() {
  var data = SAN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'san-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

SAN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('san.progress.v1');
    window.location.reload();
  }
};
