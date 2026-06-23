/* 工具视图：世界史工具(时间轴/图鉴/文明速查/中外对照) + 术语本/搜索/设置 */
window.WHS = window.WHS || {};
WHS.views = WHS.views || {};

/* ==================== 工具首页 ==================== */
WHS.views.tools = function() {
  var html = '<div class="tools-page">';
  html += '<h2>世界史工具</h2>';
  html += '<p class="calc-intro">四个辅助工具，边读历史边查 —— 时间轴建立整体感、图鉴认人、速查表定框架、中外对照建立东西方坐标。' +
          '<b>学术细节存争议处会标注，以现行通说为准</b>。</p>';

  html += toolLink('时间轴', 'T·01', '公元前 3500 → 今天的时代条带，多文明并行',
    '<a href="#/timeline" class="calc-btn">打开时间轴</a>');
  html += toolLink('人物图鉴', 'T·02', '约 90 位世界历史重要人物卡片墙，按时代与角色过滤',
    '<a href="#/figures" class="calc-btn">打开图鉴</a>');
  html += toolLink('文明速查', 'T·03', '12 个时代/文明一览表：起讫、地域、代表政权、关键转折',
    '<a href="#/civ-table" class="calc-btn">打开速查</a>');
  html += toolLink('中外对照', 'T·04', '同一时间线左看世界、右看中国，约 30 个对照节点',
    '<a href="#/cross-ref" class="calc-btn">打开对照表</a>');

  html += '</div>';
  WHS.render(html);
};

function toolLink(title, num, desc, action) {
  return '<div class="calc-card">' +
    '<h3>' + num + ' · ' + title + '</h3>' +
    '<p class="calc-intro" style="margin:0 0 16px;max-width:none">' + desc + '</p>' +
    action + '</div>';
}

/* ==================== 1. 全局时间轴 ==================== */
WHS.views.timeline = function() {
  var mods = WHS.modules;
  var n = mods.length;

  var html = '<div class="tools-page">';
  html += '<h2>时间轴 · 世界历史</h2>';
  html += '<p class="calc-intro">' + n + ' 个时代/文明按先后顺序排列（等宽，非真实年代比例）。点任意一段查看该时代课时。</p>';

  html += '<div class="tl-band">';
  for (var i = 0; i < n; i++) {
    var m = mods[i];
    var yr = m.yearStart + (m.yearEnd ? '–' + m.yearEnd : '');
    html += '<a class="tl-seg" href="#/m/' + m.id + '" style="--brand:var(' + m.color + ')">' +
      '<span class="tl-ord">' + pad(i + 1) + '</span>' +
      '<span class="tl-name">' + WHS.esc(m.shortTitle) + '</span>' +
      '<span class="tl-yr">' + WHS.esc(yr) + '</span>' +
      '</a>';
  }
  html += '</div>';

  html += '<h3 style="margin-top:32px;font-size:.9rem;font-weight:600">时代顺序 · 点模块看详情</h3>';
  html += '<ul class="timeline-list">';
  for (var i2 = 0; i2 < n; i2++) {
    var m2 = mods[i2];
    var yrLabel = m2.yearStart + (m2.yearEnd ? '–' + m2.yearEnd : '');
    html += '<li style="--brand:var(' + m2.color + ')"><div class="yr"><b>' + pad(i2 + 1) + '</b>' + WHS.esc(yrLabel) + '</div>' +
      '<a href="#/m/' + m2.id + '">' + WHS.esc(m2.title) + ' · ' + WHS.esc(m2.era) + '</a></li>';
  }
  html += '</ul>';
  html += '<p class="calc-note">年代为约数，史前与上古断代存争议处取通说。条带为等宽示意，不代表真实年代长度；多个文明在同一时期并行发展。</p>';

  html += '</div>';
  WHS.render(html);
};

/* ==================== 2. 人物图鉴 ==================== */
WHS.views.figures = function() {
  var allFigures = window.WHS_FIGURES || [];

  var html = '<div class="tools-page">';
  html += '<h2>人物图鉴</h2>';
  html += '<p class="calc-intro">按时代或角色浏览世界历史重要人物。点击卡片查看生平与关联课时。</p>';

  html += '<div class="figures-filter" id="fig-filter">';
  html += '<button class="fil-chip active" data-filter="all" onclick="WHS.filterFigures(\'all\')">全部(' + allFigures.length + ')</button>';
  for (var mi = 0; mi < WHS.modules.length; mi++) {
    var m = WHS.modules[mi];
    var cnt = 0;
    for (var j = 0; j < allFigures.length; j++) {
      if (allFigures[j].dynasty === m.id) cnt++;
    }
    if (cnt > 0) {
      html += '<button class="fil-chip" data-filter="' + m.id + '" onclick="WHS.filterFigures(\'' + m.id + '\')">' +
        m.title + '(' + cnt + ')</button>';
    }
  }
  html += '</div>';

  html += '<div id="fig-grid" class="figures-grid">';
  html += renderFigureGrid(allFigures);
  html += '</div>';
  html += '<div id="fig-detail"></div>';
  html += '</div>';
  WHS.render(html);
};

WHS.filterFigures = function(eraId) {
  var chips = document.querySelectorAll('#fig-filter .fil-chip');
  for (var i = 0; i < chips.length; i++) {
    chips[i].classList.toggle('active', chips[i].getAttribute('data-filter') === eraId);
  }
  var allFigures = window.WHS_FIGURES || [];
  var filtered = eraId === 'all' ? allFigures : allFigures.filter(function(f) { return f.dynasty === eraId; });
  document.getElementById('fig-grid').innerHTML = renderFigureGrid(filtered);
  document.getElementById('fig-detail').innerHTML = '';
};

WHS.showFigureDetail = function(figId) {
  var allFigures = window.WHS_FIGURES || [];
  var f = null;
  for (var i = 0; i < allFigures.length; i++) {
    if (allFigures[i].id === figId) { f = allFigures[i]; break; }
  }
  if (!f) return;
  var mod = null;
  for (var m in WHS.modules) if (WHS.modules[m].id === f.dynasty) mod = WHS.modules[m];

  var html = '<div class="figure-detail">';
  html += '<h3>' + WHS.esc(f.name) + '</h3>';
  html += '<div class="fd-yr">' + WHS.esc(f.born || '?') + ' – ' + WHS.esc(f.died || '?') + ' · ' + (mod ? mod.title : '') + '</div>';
  html += '<div class="fd-tags"><span class="fd-tag">' + WHS.esc(f.role || '') + '</span></div>';
  html += '<div class="fd-line">' + WHS.esc(f.oneliner || '') + '</div>';
  if (f.key_events && f.key_events.length > 0) {
    html += '<div class="fd-events"><h4>关键事件</h4><ul>';
    for (var j = 0; j < f.key_events.length; j++) html += '<li>' + WHS.esc(f.key_events[j]) + '</li>';
    html += '</ul></div>';
  }
  if (f.related_lessons && f.related_lessons.length > 0) {
    html += '<div class="fd-related">关联课时：';
    for (var k = 0; k < f.related_lessons.length; k++) {
      var rid = f.related_lessons[k];
      html += '<a href="#/l/' + rid + '">' + (WHS.lessons[rid] ? WHS.lessons[rid].title : rid) + '</a>';
    }
    html += '</div>';
  }
  html += '<button class="setting-btn" onclick="document.getElementById(\'fig-detail\').innerHTML=\'\'" style="margin-top:14px">关闭</button>';
  html += '</div>';
  document.getElementById('fig-detail').innerHTML = html;
};

function renderFigureGrid(figures) {
  if (figures.length === 0) return '<p class="empty-hint">该分类暂无人物收录</p>';
  var html = '';
  for (var i = 0; i < figures.length; i++) {
    var f = figures[i];
    var mod = null;
    for (var m in WHS.modules) if (WHS.modules[m].id === f.dynasty) mod = WHS.modules[m];
    var color = mod ? 'var(' + mod.color + ')' : 'var(--red)';
    html += '<div class="figure-card" onclick="WHS.showFigureDetail(\'' + f.id + '\')">';
    html += '<div class="fc-head"><span class="fc-name">' + WHS.esc(f.name) + '</span>' +
            '<span class="fc-yr">' + WHS.esc(f.born || '') + '–' + WHS.esc(f.died || '') + '</span></div>';
    html += '<div class="fc-dynasty" style="background:' + color + '">' + (mod ? mod.title : f.dynasty) + '</div>';
    html += '<div class="fc-role">' + WHS.esc(f.role || '') + '</div>';
    html += '<div class="fc-line">' + WHS.esc(f.oneliner || '') + '</div>';
    html += '</div>';
  }
  return '<div class="figures-grid">' + html + '</div>';
}

/* ==================== 3. 文明速查 ==================== */
WHS.views.civTable = function() {
  var html = '<div class="tools-page">';
  html += '<h2>文明速查表</h2>';
  html += '<p class="calc-intro">世界历史 12 个时代/文明总览。点击时代名进入课时列表。</p>';

  html += '<div style="overflow-x:auto">';
  html += '<table class="era-table">';
  html += '<thead><tr>';
  html += '<th>时代 / 文明</th><th>起讫年代</th><th>中心区域</th><th>代表政权</th><th>关键转折</th><th>跨度</th><th>一句话</th>';
  html += '</tr></thead><tbody>';
  for (var i = 0; i < WHS.modules.length; i++) {
    var m = WHS.modules[i];
    html += '<tr style="--brand:var(' + m.color + ')">';
    html += '<td class="col-name"><span class="dot"></span><a href="#/m/' + m.id + '">' + WHS.esc(m.title) + '</a></td>';
    html += '<td class="col-yr">' + WHS.esc(m.yearStart) + (m.yearEnd ? ' – ' + WHS.esc(m.yearEnd) : '') + '</td>';
    html += '<td>' + WHS.esc(m.capital || '—') + '</td>';
    html += '<td>' + WHS.esc(m.founder || '—') + '</td>';
    html += '<td>' + WHS.esc(m.lastRuler || '—') + '</td>';
    html += '<td>' + WHS.esc(m.generations || '—') + '</td>';
    html += '<td class="col-comment">' + WHS.esc(m.oneliner || m.era || '') + '</td>';
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += '</div>';

  html += '<p class="calc-note">年代为通说约数，上古文明断代存争议处取主流结论。中心区域、代表政权取该时代最具代表者，并非穷举。</p>';
  html += '</div>';
  WHS.render(html);
};

/* ==================== 4. 中外对照 ==================== */
WHS.views.crossRef = function() {
  var html = '<div class="tools-page">';
  html += '<h2>中外对照</h2>';
  html += '<p class="calc-intro">同一条时间线上，左边是世界、右边是同期中国——用来回答"当罗马在打布匿战争时，中国在做什么？"这类问题。可输入关键词过滤。</p>';
  html += '<input type="text" class="search-input" placeholder="过滤：如 罗马 / 汉 / 1492 / 文艺复兴" oninput="WHS.filterCross(this.value)">';
  html += '<div id="cross-table">';
  html += renderCrossTable(window.WHS_PARALLEL || []);
  html += '</div>';
  html += '<p class="calc-note">年代为约数，仅取每个时期最具标志性的事件做并列，并非全部同期史实。中国一侧口径与本站合集中的「中国历史」站一致。</p>';
  html += '</div>';
  WHS.render(html);
};

WHS.filterCross = function(q) {
  var rows = window.WHS_PARALLEL || [];
  if (q) {
    q = q.toLowerCase();
    rows = rows.filter(function(r) {
      return (r.era + r.year + r.world + r.china).toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('cross-table');
  if (el) el.innerHTML = renderCrossTable(rows);
};

function renderCrossTable(rows) {
  if (!rows.length) return '<p class="empty-hint">没有匹配的对照节点</p>';
  var html = '<div style="overflow-x:auto"><table class="era-table cross-table"><thead><tr>';
  html += '<th>年代</th><th>世界</th><th>中国（同期）</th>';
  html += '</tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    html += '<tr>';
    html += '<td class="col-yr"><b>' + WHS.esc(r.year) + '</b>' + (r.era ? '<br><span style="font-size:.78rem">' + WHS.esc(r.era) + '</span>' : '') + '</td>';
    html += '<td>' + WHS.esc(r.world) + '</td>';
    html += '<td class="col-comment">' + WHS.esc(r.china) + '</td>';
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  return html;
}

/* ==================== 模块页 ==================== */
WHS.views.module = function(id) {
  var mod = null;
  for (var mi = 0; mi < WHS.modules.length; mi++) {
    if (WHS.modules[mi].id === id) { mod = WHS.modules[mi]; break; }
  }
  if (!mod) { WHS.views.home(); return; }
  var P = WHS.progress();

  var lessons = [];
  for (var pi = 0; pi < WHS.path.length; pi++) {
    if (WHS.path[pi].indexOf(id + '/') === 0) lessons.push(WHS.path[pi]);
  }

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + WHS.esc(mod.title) + '</h2>';
  if (mod.era) html += '<div class="module-era">' + WHS.esc(mod.era) + ' · ' + WHS.esc(mod.yearStart) +
    (mod.yearEnd ? ' – ' + WHS.esc(mod.yearEnd) : '') + '</div>';
  html += '<p class="module-desc">' + WHS.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = WHS.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    html += '<li class="' + (read ? 'read' : '') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    html += '<a href="#/l/' + lid + '">' + WHS.esc(title) + '</a>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  WHS.render(html);
};

/* ==================== 术语本 / 搜索 / 设置 ==================== */
WHS.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="WHS.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(WHS.terms);
  html += '</div></div>';
  WHS.render(html);
};

WHS.filterTerms = function(q) {
  var filtered = WHS.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = WHS.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 ||
             t.en.toLowerCase().indexOf(q) !== -1 ||
             t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('term-list');
  if (el) el.innerHTML = renderTermList(filtered);
};

function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + WHS.esc(t.name) + ' <span class="term-en">' + WHS.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + WHS.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + WHS.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

WHS.views.myTerms = function() {
  var P = WHS.progress();
  var collected = [];
  for (var i = 0; i < WHS.terms.length; i++) {
    if (P.hasTerm(WHS.terms[i].id)) collected.push(WHS.terms[i]);
  }
  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  WHS.render(html);
};

WHS.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="WHS.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  WHS.render(html);
};

WHS.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = WHS.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + WHS.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + WHS.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

WHS.views.settings = function() {
  var P = WHS.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="WHS.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="WHS.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="WHS.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="WHS.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="WHS.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="WHS.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="WHS.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  WHS.render(html);
};

WHS.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  WHS.progress().setPref('theme', t);
  WHS.views.settings();
};

WHS.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  WHS.progress().setPref('fontSize', s);
  WHS.views.settings();
};

WHS.exportData = function() {
  var data = WHS.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'whs-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

WHS.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('whs.progress.v1');
    window.location.reload();
  }
};

function pad(n) { return n < 10 ? '0' + n : '' + n; }
