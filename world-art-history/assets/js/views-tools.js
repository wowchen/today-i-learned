/* 工具视图:世界艺术通史工具(时间轴/艺术家图鉴/流派速查/中外艺术对照)+ 术语本/搜索/设置
   结构移植自世界历史站(WHS->WAH),工具数据改为艺术通史 */
window.WAH = window.WAH || {};
WAH.views = WAH.views || {};

/* ==================== 工具首页 ==================== */
WAH.views.tools = function() {
  var html = '<div class="tools-page">';
  html += '<h2>艺术史工具箱</h2>';
  html += '<p class="calc-intro">四个辅助工具,边读艺术史边查 -- 时间轴建立整体感、图鉴认人、流派速查定框架、中外对照建立东西方坐标。<b>断代与归属存争议处取通说,以现行主流结论为准</b>。</p>';

  html += toolLink('艺术史时间轴', 'T·01', '从史前到当代的时代条带,多文明并行,点节点跳关联课时',
    '<a href="#/timeline" class="calc-btn">打开时间轴</a>');
  html += toolLink('艺术家图鉴', 'T·02', '约 80 位世界艺术史重要艺术家卡片墙,按时代过滤',
    '<a href="#/figures" class="calc-btn">打开图鉴</a>');
  html += toolLink('流派速查', 'T·03', '15 个时代/流派一览:起讫、地域、代表作、关键转折',
    '<a href="#/styles" class="calc-btn">打开速查</a>');
  html += toolLink('中外艺术对照', 'T·04', '同一时间线左看世界、右看同期中国,约 30 个对照节点',
    '<a href="#/cross-ref" class="calc-btn">打开对照表</a>');

  html += '</div>';
  WAH.render(html);
};

function toolLink(title, num, desc, action) {
  return '<div class="calc-card">' +
    '<h3>' + num + ' · ' + title + '</h3>' +
    '<p class="calc-intro" style="margin:0 0 16px;max-width:none">' + desc + '</p>' +
    action + '</div>';
}

/* ==================== 1. 全局时间轴 ==================== */
WAH.views.timeline = function() {
  var mods = WAH.modules;
  var n = mods.length;

  var html = '<div class="tools-page">';
  html += '<h2>时间轴 · 世界艺术通史</h2>';
  html += '<p class="calc-intro">' + n + ' 个时代/流派按先后顺序排列(等宽,非真实年代比例)。点任意一段查看该时代课时。</p>';

  html += '<div class="tl-band">';
  for (var i = 0; i < n; i++) {
    var m = mods[i];
    var yr = m.yearStart + (m.yearEnd ? '–' + m.yearEnd : '');
    html += '<a class="tl-seg" href="#/m/' + m.id + '" style="--brand:var(' + m.color + ')">' +
      '<span class="tl-ord">' + pad(i + 1) + '</span>' +
      '<span class="tl-name">' + WAH.esc(m.shortTitle) + '</span>' +
      '<span class="tl-yr">' + WAH.esc(yr) + '</span>' +
      '</a>';
  }
  html += '</div>';

  html += '<h3 style="margin-top:32px;font-size:.9rem;font-weight:600">时代顺序 · 点模块看详情</h3>';
  html += '<ul class="timeline-list">';
  for (var i2 = 0; i2 < n; i2++) {
    var m2 = mods[i2];
    var yrLabel = m2.yearStart + (m2.yearEnd ? '–' + m2.yearEnd : '');
    html += '<li style="--brand:var(' + m2.color + ')"><div class="yr"><b>' + pad(i2 + 1) + '</b>' + WAH.esc(yrLabel) + '</div>' +
      '<a href="#/m/' + m2.id + '">' + WAH.esc(m2.title) + ' · ' + WAH.esc(m2.era) + '</a></li>';
  }
  html += '</ul>';
  html += '<p class="calc-note">年代为约数,史前与上古断代存争议处取通说。条带为等宽示意,不代表真实年代长度;多个文明在同一时期并行发展。</p>';

  html += '</div>';
  WAH.render(html);
};

/* ==================== 2. 艺术家图鉴 ==================== */
WAH.views.figures = function() {
  var allFigures = window.WAH_FIGURES || [];

  var html = '<div class="tools-page">';
  html += '<h2>艺术家图鉴</h2>';
  html += '<p class="calc-intro">按时代浏览世界艺术史重要艺术家。点击卡片查看生平、代表作与关联课时。</p>';

  html += '<div class="figures-filter" id="fig-filter">';
  html += '<button class="fil-chip active" data-filter="all" onclick="WAH.filterFigures(\'all\')">全部(' + allFigures.length + ')</button>';
  for (var mi = 0; mi < WAH.modules.length; mi++) {
    var m = WAH.modules[mi];
    var cnt = 0;
    for (var j = 0; j < allFigures.length; j++) {
      if (allFigures[j].era === m.id) cnt++;
    }
    if (cnt > 0) {
      html += '<button class="fil-chip" data-filter="' + m.id + '" onclick="WAH.filterFigures(\'' + m.id + '\')">' +
        m.shortTitle + '(' + cnt + ')</button>';
    }
  }
  html += '</div>';

  html += '<div id="fig-grid" class="figures-grid">';
  html += renderFigureGrid(allFigures);
  html += '</div>';
  html += '<div id="fig-detail"></div>';
  html += '</div>';
  WAH.render(html);
};

WAH.filterFigures = function(eraId) {
  var chips = document.querySelectorAll('#fig-filter .fil-chip');
  for (var i = 0; i < chips.length; i++) {
    chips[i].classList.toggle('active', chips[i].getAttribute('data-filter') === eraId);
  }
  var allFigures = window.WAH_FIGURES || [];
  var filtered = eraId === 'all' ? allFigures : allFigures.filter(function(f) { return f.era === eraId; });
  document.getElementById('fig-grid').innerHTML = renderFigureGrid(filtered);
  document.getElementById('fig-detail').innerHTML = '';
};

WAH.showFigureDetail = function(figId) {
  var allFigures = window.WAH_FIGURES || [];
  var f = null;
  for (var i = 0; i < allFigures.length; i++) {
    if (allFigures[i].id === figId) { f = allFigures[i]; break; }
  }
  if (!f) return;
  var mod = null;
  for (var m in WAH.modules) if (WAH.modules[m].id === f.era) mod = WAH.modules[m];

  var html = '<div class="figure-detail">';
  html += '<h3>' + WAH.esc(f.name) + '</h3>';
  html += '<div class="fd-yr">' + WAH.esc(f.born || '?') + ' – ' + WAH.esc(f.died || '?') + ' · ' + (mod ? mod.title : '') + '</div>';
  html += '<div class="fd-tags"><span class="fd-tag">' + WAH.esc(f.role || '') + '</span></div>';
  html += '<div class="fd-line">' + WAH.esc(f.oneliner || '') + '</div>';
  if (f.works && f.works.length > 0) {
    html += '<div class="fd-events"><h4>代表作</h4><ul>';
    for (var w = 0; w < f.works.length; w++) html += '<li>' + WAH.esc(f.works[w]) + '</li>';
    html += '</ul></div>';
  }
  if (f.related_lessons && f.related_lessons.length > 0) {
    html += '<div class="fd-related">关联课时:';
    for (var k = 0; k < f.related_lessons.length; k++) {
      var rid = f.related_lessons[k];
      html += '<a href="#/l/' + rid + '">' + (WAH.lessons[rid] ? WAH.lessons[rid].title : rid) + '</a>';
    }
    html += '</div>';
  }
  html += '<button class="setting-btn" onclick="document.getElementById(\'fig-detail\').innerHTML=\'\'" style="margin-top:14px">关闭</button>';
  html += '</div>';
  document.getElementById('fig-detail').innerHTML = html;
};

function renderFigureGrid(figures) {
  if (figures.length === 0) return '<p class="empty-hint">该分类暂无艺术家收录</p>';
  var html = '';
  for (var i = 0; i < figures.length; i++) {
    var f = figures[i];
    var mod = null;
    for (var m in WAH.modules) if (WAH.modules[m].id === f.era) mod = WAH.modules[m];
    var color = mod ? 'var(' + mod.color + ')' : 'var(--acc)';
    html += '<div class="figure-card" onclick="WAH.showFigureDetail(\'' + f.id + '\')">';
    html += '<div class="fc-head"><span class="fc-name">' + WAH.esc(f.name) + '</span>' +
            '<span class="fc-yr">' + WAH.esc(f.born || '') + '–' + WAH.esc(f.died || '') + '</span></div>';
    html += '<div class="fc-dynasty" style="background:' + color + '">' + (mod ? mod.shortTitle : f.era) + '</div>';
    html += '<div class="fc-role">' + WAH.esc(f.role || '') + '</div>';
    html += '<div class="fc-line">' + WAH.esc(f.oneliner || '') + '</div>';
    html += '</div>';
  }
  return '<div class="figures-grid">' + html + '</div>';
}

/* ==================== 3. 流派速查 ==================== */
WAH.views.styles = function() {
  var html = '<div class="tools-page">';
  html += '<h2>流派速查表</h2>';
  html += '<p class="calc-intro">世界艺术通史 ' + WAH.modules.length + ' 个时代/流派总览。点击名称进入课时列表。</p>';

  html += '<div style="overflow-x:auto">';
  html += '<table class="era-table">';
  html += '<thead><tr>';
  html += '<th>时代 / 流派</th><th>起讫年代</th><th>中心地域</th><th>代表作家/作品</th><th>关键转折</th><th>跨度</th><th>一句话</th>';
  html += '</tr></thead><tbody>';
  for (var i = 0; i < WAH.modules.length; i++) {
    var m = WAH.modules[i];
    html += '<tr style="--brand:var(' + m.color + ')">';
    html += '<td class="col-name"><span class="dot"></span><a href="#/m/' + m.id + '">' + WAH.esc(m.title) + '</a></td>';
    html += '<td class="col-yr">' + WAH.esc(m.yearStart) + (m.yearEnd ? ' – ' + WAH.esc(m.yearEnd) : '') + '</td>';
    html += '<td>' + WAH.esc(m.region || '-') + '</td>';
    html += '<td>' + WAH.esc(m.keyworks || '-') + '</td>';
    html += '<td>' + WAH.esc(m.turning || '-') + '</td>';
    html += '<td>' + WAH.esc(m.span || '-') + '</td>';
    html += '<td class="col-comment">' + WAH.esc(m.oneliner || m.era || '') + '</td>';
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += '</div>';

  html += '<p class="calc-note">年代为通说约数,上古与流派起讫存争议处取主流结论。中心地域、代表作取该时代最具代表者,并非穷举。</p>';
  html += '</div>';
  WAH.render(html);
};

/* ==================== 4. 中外艺术对照 ==================== */
WAH.views.crossRef = function() {
  var html = '<div class="tools-page">';
  html += '<h2>中外艺术对照</h2>';
  html += '<p class="calc-intro">同一条时间线上,左边是世界、右边是同期中国--用来回答"当米开朗基罗画西斯廷天顶时,中国在画什么?"这类问题。可输入关键词过滤。</p>';
  html += '<input type="text" class="search-input" placeholder="过滤:如 文艺复兴 / 宋 / 1500 / 浮世绘" oninput="WAH.filterCross(this.value)">';
  html += '<div id="cross-table">';
  html += renderCrossTable(window.WAH_PARALLEL || []);
  html += '</div>';
  html += '<p class="calc-note">年代为约数,仅取每个时期最具标志性的艺术事件做并列,并非全部同期史实。中国一侧以书画与工艺为主。</p>';
  html += '</div>';
  WAH.render(html);
};

WAH.filterCross = function(q) {
  var rows = window.WAH_PARALLEL || [];
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
  html += '<th>年代</th><th>世界</th><th>中国(同期)</th>';
  html += '</tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    html += '<tr>';
    html += '<td class="col-yr"><b>' + WAH.esc(r.year) + '</b>' + (r.era ? '<br><span style="font-size:.78rem">' + WAH.esc(r.era) + '</span>' : '') + '</td>';
    html += '<td>' + WAH.esc(r.world) + '</td>';
    html += '<td class="col-comment">' + WAH.esc(r.china) + '</td>';
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  return html;
}

/* ==================== 模块页 ==================== */
WAH.views.module = function(id) {
  var mod = null;
  for (var mi = 0; mi < WAH.modules.length; mi++) {
    if (WAH.modules[mi].id === id) { mod = WAH.modules[mi]; break; }
  }
  if (!mod) { WAH.views.home(); return; }
  var P = WAH.progress();

  var lessons = [];
  for (var pi = 0; pi < WAH.path.length; pi++) {
    if (WAH.path[pi].indexOf(id + '/') === 0) lessons.push(WAH.path[pi]);
  }

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + WAH.esc(mod.title) + '</h2>';
  if (mod.era) html += '<div class="module-era">' + WAH.esc(mod.era) + ' · ' + WAH.esc(mod.yearStart) +
    (mod.yearEnd ? ' – ' + WAH.esc(mod.yearEnd) : '') + '</div>';
  html += '<p class="module-desc">' + WAH.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = WAH.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    html += '<li class="' + (read ? 'read' : '') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    html += '<a href="#/l/' + lid + '">' + WAH.esc(title) + '</a>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  WAH.render(html);
};

/* ==================== 术语本 / 搜索 / 设置 ==================== */
WAH.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="WAH.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(WAH.terms);
  html += '</div></div>';
  WAH.render(html);
};

WAH.filterTerms = function(q) {
  var filtered = WAH.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = WAH.terms.filter(function(t) {
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
    html += '<div class="term-name">' + WAH.esc(t.name) + ' <span class="term-en">' + WAH.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + WAH.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + WAH.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

WAH.views.myTerms = function() {
  var P = WAH.progress();
  var collected = [];
  for (var i = 0; i < WAH.terms.length; i++) {
    if (P.hasTerm(WAH.terms[i].id)) collected.push(WAH.terms[i]);
  }
  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  WAH.render(html);
};

WAH.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 文艺复兴 / 透视 / 梵高 / 浮世绘" oninput="WAH.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  WAH.render(html);
};

WAH.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = WAH.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + WAH.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + WAH.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

WAH.views.settings = function() {
  var P = WAH.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="WAH.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="WAH.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="WAH.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="WAH.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="WAH.setFontSize(\'l\')">大</button>';
  html += '</div>';

  /* ── GitHub 进度同步(可选) ── */
  var syncCfg = WAH.sync.config();
  html += '<h3>GitHub 进度同步(可选)</h3>';
  html += '<p class="calc-intro">用一个<b>自己的 private 仓库</b>存放进度(如 you/wah-progress),fine-grained PAT 仅授权该仓库的 Contents 读写。token 只存本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/repo" value="' + WAH.esc(syncCfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + WAH.esc(syncCfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + WAH.esc(syncCfg.token || '') + '"></div>';
  html += '<div class="setting-row"><button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-intro" id="syMsg">' + WAH.esc((WAH.sync && WAH.sync.statusText) || '仅本机') + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="WAH.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="WAH.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  WAH.render(html);

  function syncMsg(text, cls) {
    var el = document.getElementById('syMsg');
    if (!el) return;
    el.textContent = text;
    el.style.color = cls === 'ok' ? 'var(--ok)' : cls === 'bad' ? 'var(--acc)' : '';
  }
  var sySaveEl = document.getElementById('sySave');
  if (sySaveEl) {
    sySaveEl.addEventListener('click', function () {
      WAH.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!WAH.sync.ready()) { syncMsg('仓库和 token 都要填。', 'bad'); return; }
      syncMsg('同步中…');
      WAH.sync.pullNow().then(function () { return WAH.sync.pushNow(); })
        .then(function (ok) { syncMsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + WAH.sync.statusText, ok ? 'ok' : 'bad'); });
    });
  }
  var syPullEl = document.getElementById('syPull');
  if (syPullEl) {
    syPullEl.addEventListener('click', function () {
      syncMsg('拉取中…');
      WAH.sync.pullNow().then(function (ok) { syncMsg(ok ? '已拉取并合并远端进度 ✓' : WAH.sync.statusText, ok ? 'ok' : ''); });
    });
  }
  var syClearEl = document.getElementById('syClear');
  if (syClearEl) {
    syClearEl.addEventListener('click', function () {
      WAH.sync.clearToken();
      document.getElementById('syToken').value = '';
      syncMsg('token 已从本机清除。');
    });
  }
};

WAH.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  WAH.progress().setPref('theme', t);
  WAH.views.settings();
};

WAH.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  WAH.progress().setPref('fontSize', s);
  WAH.views.settings();
};

WAH.exportData = function() {
  var data = WAH.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'wah-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

WAH.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('wah.progress.v1');
    window.location.reload();
  }
};

function pad(n) { return n < 10 ? '0' + n : '' + n; }
