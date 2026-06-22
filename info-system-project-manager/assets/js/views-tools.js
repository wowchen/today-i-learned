/* 工具视图：术语本、错题本、搜索、设置、计算器 */
window.ISPM = window.ISPM || {};
ISPM.views = ISPM.views || {};

/* ===== 交互计算器（EVM / 三点估算 / 沟通渠道） ===== */
ISPM.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>案例计算器</h2>';
  html += '<p class="calc-intro">输入数据即时计算，配合案例分析专项练习使用。所有计算在本地完成。</p>';

  // EVM 计算器
  html += '<div class="calc-card">';
  html += '<h3>挣值管理 EVM 计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>BAC 完工预算 <input type="number" id="ev-bac" placeholder="如 100"></label>';
  html += '<label>PV 计划价值 <input type="number" id="ev-pv" placeholder="如 40"></label>';
  html += '<label>EV 挣值 <input type="number" id="ev-ev" placeholder="如 30"></label>';
  html += '<label>AC 实际成本 <input type="number" id="ev-ac" placeholder="如 40"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ISPM.calcEVM()">计算</button>';
  html += '<div id="ev-result" class="calc-result"></div>';
  html += '</div>';

  // 三点估算
  html += '<div class="calc-card">';
  html += '<h3>三点估算（PERT）计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>O 乐观值 <input type="number" id="pe-o" placeholder="如 6"></label>';
  html += '<label>M 最可能值 <input type="number" id="pe-m" placeholder="如 9"></label>';
  html += '<label>P 悲观值 <input type="number" id="pe-p" placeholder="如 18"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ISPM.calcPERT()">计算</button>';
  html += '<div id="pe-result" class="calc-result"></div>';
  html += '</div>';

  // 沟通渠道
  html += '<div class="calc-card">';
  html += '<h3>沟通渠道数计算器</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>原人数 n1 <input type="number" id="cc-n1" placeholder="如 5"></label>';
  html += '<label>新人数 n2（可选） <input type="number" id="cc-n2" placeholder="如 8"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ISPM.calcChannels()">计算</button>';
  html += '<div id="cc-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  ISPM.render(html);
};

ISPM.calcEVM = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var BAC = v('ev-bac'), PV = v('ev-pv'), EV = v('ev-ev'), AC = v('ev-ac');
  if (PV === null || EV === null || AC === null) {
    document.getElementById('ev-result').innerHTML = '<div class="calc-warn">请至少填写 PV、EV、AC</div>';
    return;
  }
  var SV = EV - PV, CV = EV - AC;
  var SPI = PV ? EV / PV : null, CPI = AC ? EV / AC : null;
  var rows = '';
  function tag(ok, good, bad){ return '<span class="' + (ok ? 'cr-good' : 'cr-bad') + '">' + (ok ? good : bad) + '</span>'; }
  rows += row('SV 进度偏差', SV.toFixed(2), 'EV−PV', tag(SV >= 0, '进度超前/正常', '进度落后'));
  rows += row('CV 成本偏差', CV.toFixed(2), 'EV−AC', tag(CV >= 0, '成本节约/正常', '成本超支'));
  if (SPI !== null) rows += row('SPI 进度绩效', SPI.toFixed(3), 'EV/PV', tag(SPI >= 1, '超前/正常', '落后'));
  if (CPI !== null) rows += row('CPI 成本绩效', CPI.toFixed(3), 'EV/AC', tag(CPI >= 1, '节约/正常', '超支'));
  if (BAC !== null && CPI) {
    var EAC = BAC / CPI, ETC = EAC - AC, VAC = BAC - EAC;
    rows += row('EAC 完工估算', EAC.toFixed(2), 'BAC/CPI', '按当前绩效预计总成本');
    rows += row('ETC 尚需成本', ETC.toFixed(2), 'EAC−AC', '从现在到完工还需');
    rows += row('VAC 完工偏差', VAC.toFixed(2), 'BAC−EAC', tag(VAC >= 0, '预计节约', '预计超支'));
  }
  document.getElementById('ev-result').innerHTML = '<table class="cr-table">' + rows + '</table>';

  function row(name, val, formula, note){
    return '<tr><td class="cr-name">' + name + '</td><td class="cr-val">' + val + '</td><td class="cr-formula">' + formula + '</td><td>' + note + '</td></tr>';
  }
};

ISPM.calcPERT = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var O = v('pe-o'), M = v('pe-m'), P = v('pe-p');
  if (O === null || M === null || P === null) {
    document.getElementById('pe-result').innerHTML = '<div class="calc-warn">请填写 O、M、P 三个值</div>';
    return;
  }
  var tE = (O + 4 * M + P) / 6;
  var sigma = (P - O) / 6;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">期望工期 tE</td><td class="cr-val">' + tE.toFixed(2) + '</td><td class="cr-formula">(O+4M+P)/6</td></tr>';
  html += '<tr><td class="cr-name">标准差 σ</td><td class="cr-val">' + sigma.toFixed(2) + '</td><td class="cr-formula">(P−O)/6</td></tr>';
  html += '<tr><td class="cr-name">区间 tE±σ</td><td class="cr-val">' + (tE - sigma).toFixed(2) + ' ~ ' + (tE + sigma).toFixed(2) + '</td><td class="cr-formula">68% 置信</td></tr>';
  html += '</table>';
  document.getElementById('pe-result').innerHTML = html;
};

ISPM.calcChannels = function() {
  function v(id){ var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; }
  var n1 = v('cc-n1'), n2 = v('cc-n2');
  if (n1 === null) {
    document.getElementById('cc-result').innerHTML = '<div class="calc-warn">请填写人数</div>';
    return;
  }
  var c1 = n1 * (n1 - 1) / 2;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">' + n1 + ' 人渠道数</td><td class="cr-val">' + c1 + '</td><td class="cr-formula">n(n−1)/2</td></tr>';
  if (n2 !== null) {
    var c2 = n2 * (n2 - 1) / 2;
    html += '<tr><td class="cr-name">' + n2 + ' 人渠道数</td><td class="cr-val">' + c2 + '</td><td class="cr-formula">n(n−1)/2</td></tr>';
    html += '<tr><td class="cr-name">新增渠道数</td><td class="cr-val cr-good">' + (c2 - c1) + '</td><td class="cr-formula">差值</td></tr>';
  }
  html += '</table>';
  document.getElementById('cc-result').innerHTML = html;
};

ISPM.views.module = function(id) {
  var mod = ISPM.modules.find(function(m) { return m.id === id; });
  if (!mod) { ISPM.views.home(); return; }
  var P = ISPM.progress();

  var lessons = ISPM.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + ISPM.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + ISPM.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = ISPM.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + ISPM.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + ISPM.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  ISPM.render(html);
};

ISPM.views.terms = function() {
  var P = ISPM.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="ISPM.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(ISPM.terms);
  html += '</div></div>';
  ISPM.render(html);
};

ISPM.filterTerms = function(q) {
  var filtered = ISPM.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = ISPM.terms.filter(function(t) {
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
    html += '<div class="term-name">' + ISPM.esc(t.name) + ' <span class="term-en">' + ISPM.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + ISPM.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + ISPM.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

ISPM.views.myTerms = function() {
  var P = ISPM.progress();
  var collected = [];
  for (var i = 0; i < ISPM.terms.length; i++) {
    if (P.hasTerm(ISPM.terms[i].id)) collected.push(ISPM.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  ISPM.render(html);
};

ISPM.views.mistakes = function() {
  var P = ISPM.progress();
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
      html += '<div class="mistake-q">' + ISPM.esc(m.q) + '</div>';
      html += '<div class="mistake-my">你的答案: ' + ISPM.esc(m.my) + '</div>';
      html += '<div class="mistake-ans">正确答案: ' + ISPM.esc(m.ans) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  ISPM.render(html);
};

ISPM.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="ISPM.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  ISPM.render(html);
};

ISPM.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ISPM.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + ISPM.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + ISPM.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

ISPM.views.settings = function() {
  var P = ISPM.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || 'dark';
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="ISPM.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="ISPM.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="ISPM.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="ISPM.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="ISPM.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="ISPM.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="ISPM.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  ISPM.render(html);
};

ISPM.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  ISPM.progress().setPref('theme', t);
  ISPM.views.settings();
};

ISPM.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  ISPM.progress().setPref('fontSize', s);
  ISPM.views.settings();
};

ISPM.exportData = function() {
  var data = ISPM.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ispm-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

ISPM.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('ispm.progress.v1');
    window.location.reload();
  }
};
