/* 工具视图：术语本、搜索、设置、经济计算器 */
window.ECON = window.ECON || {};
ECON.views = ECON.views || {};

/* ===== 经济计算器（经济增长·72法则 / 通胀购买力 / 实际利率 / GDP 构成） ===== */
ECON.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>经济计算器</h2>';
  html += '<p class="calc-intro">把课里的概念变成能算的数,配合复利、通胀、利率、GDP 等课时使用。所有计算在本地完成,<b>结果为估算,用于理解概念,不构成投资或决策建议</b>。</p>';

  // 经济增长 · 72 法则
  html += '<div class="calc-card">';
  html += '<h3>经济增长 · 72 法则</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>起始规模(可留空,如 GDP/收入) <input type="number" id="g-p" placeholder="如 100"></label>';
  html += '<label>年增长率（%） <input type="number" id="g-r" placeholder="如 5"></label>';
  html += '<label>年限（年） <input type="number" id="g-y" placeholder="如 14"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ECON.calcGrowth()">计算</button>';
  html += '<div id="g-result" class="calc-result"></div>';
  html += '</div>';

  // 通胀购买力
  html += '<div class="calc-card">';
  html += '<h3>通胀购买力</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>今天的金额（元） <input type="number" id="inf-p" placeholder="如 100000"></label>';
  html += '<label>年通胀率（%） <input type="number" id="inf-r" placeholder="如 3"></label>';
  html += '<label>年限（年） <input type="number" id="inf-y" placeholder="如 20"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ECON.calcInflation()">计算</button>';
  html += '<div id="inf-result" class="calc-result"></div>';
  html += '</div>';

  // 实际利率(费雪)
  html += '<div class="calc-card">';
  html += '<h3>实际利率(费雪方程)</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>名义利率（%,如存款利率） <input type="number" id="rr-n" placeholder="如 2"></label>';
  html += '<label>通胀率（%） <input type="number" id="rr-i" placeholder="如 3"></label>';
  html += '<label>本金(可选,元) <input type="number" id="rr-p" placeholder="如 100000"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ECON.calcRealRate()">计算</button>';
  html += '<div id="rr-result" class="calc-result"></div>';
  html += '</div>';

  // GDP 构成
  html += '<div class="calc-card">';
  html += '<h3>GDP 构成(支出法)</h3>';
  html += '<div class="calc-inputs">';
  html += '<label>消费 C <input type="number" id="gdp-c" placeholder="如 55"></label>';
  html += '<label>投资 I <input type="number" id="gdp-i" placeholder="如 42"></label>';
  html += '<label>政府支出 G <input type="number" id="gdp-g" placeholder="如 16"></label>';
  html += '<label>出口 X <input type="number" id="gdp-x" placeholder="如 20"></label>';
  html += '<label>进口 M <input type="number" id="gdp-m" placeholder="如 18"></label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="ECON.calcGDP()">计算</button>';
  html += '<div id="gdp-result" class="calc-result"></div>';
  html += '</div>';

  html += '</div>';
  ECON.render(html);
};

// ---- 工具 ----
ECON._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
ECON._money = function(n) {
  var neg = n < 0; n = Math.abs(Math.round(n));
  var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−' : '') + '¥' + s;
};
ECON._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

// 经济增长 + 72 法则:期末 = 起始×(1+g)^年
ECON.calcGrowth = function() {
  var p = ECON._num('g-p'); var r = ECON._num('g-r'), y = ECON._num('g-y');
  var el = document.getElementById('g-result');
  if (r === null || y === null || y <= 0) { el.innerHTML = '<div class="calc-warn">请填写年增长率与年限</div>'; return; }
  var base = (p === null) ? 100 : p;
  var mult = Math.pow(1 + r / 100, y);
  var end = base * mult;
  var dbl = r > 0 ? 72 / r : null;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">' + y + ' 年后规模</td><td class="cr-val cr-good">' + (p === null ? ECON._fix(end, 1) + '(起始记为 100)' : ECON._money(end)) + '</td><td class="cr-formula">起始 ×(1+' + r + '%)^' + y + '</td></tr>';
  html += '<tr><td class="cr-name">累计倍数</td><td class="cr-val">' + ECON._fix(mult, 2) + ' ×</td><td class="cr-formula">相当于增长 ' + ECON._fix((mult - 1) * 100, 0) + '%</td></tr>';
  if (dbl) html += '<tr><td class="cr-name">翻倍约需</td><td class="cr-val">' + ECON._fix(dbl, 1) + ' 年</td><td class="cr-formula">72 法则:72 ÷ ' + r + '</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">复利增长是经济增长的核心直觉:每年看似不多的几个百分点,几十年下来差距巨大。假设增速恒定,真实增长会波动。</p>';
  el.innerHTML = html;
};

// 通胀购买力:实际购买力 = 金额 /(1+i)^年;等值未来金额 = 金额×(1+i)^年
ECON.calcInflation = function() {
  var p = ECON._num('inf-p'), r = ECON._num('inf-r'), y = ECON._num('inf-y');
  var el = document.getElementById('inf-result');
  if (p === null || r === null || y === null || y <= 0) { el.innerHTML = '<div class="calc-warn">请填写金额、通胀率与年限</div>'; return; }
  var factor = Math.pow(1 + r / 100, y);
  var realPower = p / factor;
  var futureEq = p * factor;
  var lost = p - realPower;
  var dbl = r > 0 ? 72 / r : null;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">' + y + ' 年后实际购买力</td><td class="cr-val cr-bad">' + ECON._money(realPower) + '</td><td class="cr-formula">' + ECON._money(p) + ' ÷(1+' + r + '%)^' + y + '</td></tr>';
  html += '<tr><td class="cr-name">被通胀磨掉</td><td class="cr-val">' + ECON._money(lost) + '</td><td class="cr-formula">约 ' + ECON._fix((1 - realPower / p) * 100, 0) + '% 购买力</td></tr>';
  html += '<tr><td class="cr-name">届时等值金额</td><td class="cr-val">' + ECON._money(futureEq) + '</td><td class="cr-formula">N 年后需这么多才等于今天</td></tr>';
  if (dbl) html += '<tr><td class="cr-name">物价翻倍约需</td><td class="cr-val">' + ECON._fix(dbl, 1) + ' 年</td><td class="cr-formula">72 法则:72 ÷ ' + r + '</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">这解释了为什么"现金放着不动"也在悄悄缩水。温和通胀是常态,关键看你的钱有没有跑赢它。</p>';
  el.innerHTML = html;
};

// 实际利率:费雪精确 (1+n)/(1+i)-1;近似 n-i
ECON.calcRealRate = function() {
  var n = ECON._num('rr-n'), i = ECON._num('rr-i'), p = ECON._num('rr-p');
  var el = document.getElementById('rr-result');
  if (n === null || i === null) { el.innerHTML = '<div class="calc-warn">请填写名义利率与通胀率</div>'; return; }
  var exact = ((1 + n / 100) / (1 + i / 100) - 1) * 100;
  var approx = n - i;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">实际利率(精确)</td><td class="cr-val ' + (exact >= 0 ? 'cr-good' : 'cr-bad') + '">' + ECON._fix(exact, 2) + '%</td><td class="cr-formula">(1+名义)/(1+通胀) − 1</td></tr>';
  html += '<tr><td class="cr-name">实际利率(近似)</td><td class="cr-val">' + ECON._fix(approx, 2) + '%</td><td class="cr-formula">名义 − 通胀</td></tr>';
  if (p !== null) {
    var realChange = p * exact / 100;
    html += '<tr><td class="cr-name">' + ECON._money(p) + ' 一年后真实增减</td><td class="cr-val ' + (realChange >= 0 ? 'cr-good' : 'cr-bad') + '">' + ECON._money(realChange) + '</td><td class="cr-formula">按购买力计的真实变化</td></tr>';
  }
  html += '</table>';
  var verdict = exact < 0 ? '名义利率跑输通胀,实际利率为负——存款购买力其实在缩水。' : '名义利率跑赢通胀,钱的购买力真实增长。';
  html += '<p class="calc-note">' + verdict + ' 看"利息"要看实际利率,而不是名义数字。</p>';
  el.innerHTML = html;
};

// GDP 支出法:GDP = C + I + G +(X − M)
ECON.calcGDP = function() {
  var c = ECON._num('gdp-c'), i = ECON._num('gdp-i'), g = ECON._num('gdp-g'), x = ECON._num('gdp-x'), m = ECON._num('gdp-m');
  var el = document.getElementById('gdp-result');
  if (c === null || i === null || g === null || x === null || m === null) { el.innerHTML = '<div class="calc-warn">请完整填写 C / I / G / X / M</div>'; return; }
  var nx = x - m;
  var gdp = c + i + g + nx;
  if (gdp === 0) { el.innerHTML = '<div class="calc-warn">合计为 0,无法计算占比</div>'; return; }
  function pct(v) { return ECON._fix(v / gdp * 100, 1) + '%'; }
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">GDP 合计</td><td class="cr-val cr-good">' + ECON._fix(gdp, 1) + '</td><td class="cr-formula">C + I + G +(X − M)</td></tr>';
  html += '<tr><td class="cr-name">消费 C</td><td class="cr-val">' + ECON._fix(c, 1) + '</td><td class="cr-formula">占 ' + pct(c) + '</td></tr>';
  html += '<tr><td class="cr-name">投资 I</td><td class="cr-val">' + ECON._fix(i, 1) + '</td><td class="cr-formula">占 ' + pct(i) + '</td></tr>';
  html += '<tr><td class="cr-name">政府 G</td><td class="cr-val">' + ECON._fix(g, 1) + '</td><td class="cr-formula">占 ' + pct(g) + '</td></tr>';
  html += '<tr><td class="cr-name">净出口 X−M</td><td class="cr-val ' + (nx >= 0 ? 'cr-good' : 'cr-bad') + '">' + ECON._fix(nx, 1) + '</td><td class="cr-formula">占 ' + pct(nx) + '</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">这就是"三驾马车"的支出法视角:消费、投资、政府、净出口共同构成 GDP。不同经济体的结构差异很大。</p>';
  el.innerHTML = html;
};

ECON.views.module = function(id) {
  var mod = ECON.modules.find(function(m) { return m.id === id; });
  if (!mod) { ECON.views.home(); return; }
  var P = ECON.progress();

  var lessons = ECON.path.filter(function(p) { return p.indexOf(id + '/') === 0; });

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + ECON.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + ECON.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = ECON.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) {
      html += '<a href="#/l/' + lid + '">' + ECON.esc(title) + '</a>';
    } else {
      html += '<span class="title">' + ECON.esc(title) + '</span>';
    }
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  ECON.render(html);
};

ECON.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="ECON.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(ECON.terms);
  html += '</div></div>';
  ECON.render(html);
};

ECON.filterTerms = function(q) {
  var filtered = ECON.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = ECON.terms.filter(function(t) {
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
    html += '<div class="term-name">' + ECON.esc(t.name) + ' <span class="term-en">' + ECON.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + ECON.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + ECON.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

ECON.views.myTerms = function() {
  var P = ECON.progress();
  var collected = [];
  for (var i = 0; i < ECON.terms.length; i++) {
    if (P.hasTerm(ECON.terms[i].id)) collected.push(ECON.terms[i]);
  }

  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  ECON.render(html);
};

ECON.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 通胀 / 供需 / GDP / 利率" oninput="ECON.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  ECON.render(html);
};

ECON.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ECON.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + ECON.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + ECON.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

ECON.views.settings = function() {
  var P = ECON.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="ECON.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="ECON.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="ECON.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="ECON.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="ECON.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="ECON.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="ECON.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  ECON.render(html);
};

ECON.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  ECON.progress().setPref('theme', t);
  ECON.views.settings();
};

ECON.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  ECON.progress().setPref('fontSize', s);
  ECON.views.settings();
};

ECON.exportData = function() {
  var data = ECON.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'econ-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

ECON.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('econ.progress.v1');
    window.location.reload();
  }
};
