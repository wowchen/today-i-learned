/* 工具视图:模块页 / 发展史时间轴 / 人物图鉴 / 大模型速查 / 中外对照 / 术语 / 收藏 / 搜索 / 设置 */
window.PSY = window.PSY || {};
PSY.views = PSY.views || {};

/* ==================== 模块页 ==================== */
PSY.views.module = function(id) {
  var mod = PSY.modules.find(function(m) { return m.id === id; });
  if (!mod) { PSY.views.home(); return; }
  var P = PSY.progress();
  var esc = PSY.esc;

  var lessons = [];
  for (var i = 0; i < PSY.path.length; i++) if (PSY.path[i].indexOf(id + '/') === 0) lessons.push(PSY.path[i]);

  var ord = mod.order < 10 ? '0' + mod.order : '' + mod.order;
  var h = '<div class="crumb"><a href="#/">首页</a> / 模块 ' + ord + '</div>';
  h += '<h1 class="page">' + esc(mod.title) + '</h1>';
  h += '<p class="meta"><span class="key">' + lessons.length + ' 节</span>　' + esc(mod.desc || '') + '</p>';
  h += '<hr class="rule">';
  h += '<ul class="toc">';
  for (var j = 0; j < lessons.length; j++) {
    var lid = lessons[j];
    var l = PSY.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var n = (j + 1) < 10 ? '0' + (j + 1) : '' + (j + 1);
    h += '<li><span class="ix">' + n + '</span>' +
         '<a class="t" href="#/l/' + lid + '">' + esc(title) + '</a>' +
         '<span class="lead"></span>' +
         '<span class="pg' + (read ? ' done' : '') + '">' + (read ? '已读 ✓' : (l && l.minutes ? l.minutes + ' 分' : '—')) + '</span></li>';
  }
  h += '</ul>';
  PSY.render(h);
};

/* ==================== 发展史时间轴 ==================== */
PSY.views.timeline = function() {
  var data = window.PSY_TIMELINE || [];
  var esc = PSY.esc;
  var h = '<div class="tool-head"><h1 class="page">心理学大事记</h1>' +
    '<p class="sub">从 1879 年冯特建立第一个心理学实验室,到行为主义、认知革命与当代,把心理学一百多年里真正改变方向的节点串成一条线。年代为关键事件口径,部分为约数。</p></div>';
  h += '<div class="tl">';
  for (var i = 0; i < data.length; i++) {
    var e = data[i];
    h += '<div class="ev"><div class="yr">' + esc(e.year) + '</div>' +
         '<h4>' + esc(e.title) + '</h4>' +
         '<p>' + esc(e.desc) + '</p>';
    if (e.lesson) h += '<a href="#/l/' + e.lesson + '">→ 去这一课</a>';
    if (e.figure) h += '<a href="#/figures">→ 看相关人物</a>';
    h += '</div>';
  }
  h += '</div>';
  h += '<p class="note">说明:"第一个""创始人"之类的说法在学界常有不同口径,这里取通行说法,重在让你看清大趋势——从内省到实验、从行为主义到认知革命的范式转折,而非记诵确切年份。</p>';
  PSY.render(h);
};

/* ==================== 人物图鉴 ==================== */
PSY.views.figures = function() {
  var all = window.PSY_FIGURES || [];
  var groups = [];
  for (var i = 0; i < all.length; i++) {
    if (groups.indexOf(all[i].group) === -1) groups.push(all[i].group);
  }
  var esc = PSY.esc;
  var h = '<div class="tool-head"><h1 class="page">人物图鉴</h1>' +
    '<p class="sub">塑造了心理学的关键人物。点开卡片看他做了什么、为什么重要。</p></div>';
  h += '<div class="chips" id="fig-chips">';
  h += '<button class="chip on" data-g="all" onclick="PSY.filterFigures(\'all\')">全部 (' + all.length + ')</button>';
  for (var g = 0; g < groups.length; g++) {
    var c = all.filter(function(f) { return f.group === groups[g]; }).length;
    h += '<button class="chip" data-g="' + esc(groups[g]) + '" onclick="PSY.filterFigures(\'' + esc(groups[g]) + '\')">' + esc(groups[g]) + ' (' + c + ')</button>';
  }
  h += '</div>';
  h += '<div id="fig-detail"></div>';
  h += '<div id="fig-grid" class="fig-grid">' + figureCards(all) + '</div>';
  PSY.render(h);
};

PSY.filterFigures = function(g) {
  var chips = document.querySelectorAll('#fig-chips .chip');
  for (var i = 0; i < chips.length; i++) chips[i].classList.toggle('on', chips[i].getAttribute('data-g') === g);
  var all = window.PSY_FIGURES || [];
  var list = g === 'all' ? all : all.filter(function(f) { return f.group === g; });
  document.getElementById('fig-grid').innerHTML = figureCards(list);
  document.getElementById('fig-detail').innerHTML = '';
};

PSY.showFigure = function(fid) {
  var all = window.PSY_FIGURES || [];
  var f = null;
  for (var i = 0; i < all.length; i++) if (all[i].id === fid) { f = all[i]; break; }
  if (!f) return;
  var esc = PSY.esc;
  var h = '<div class="fig-detail"><button class="x" onclick="document.getElementById(\'fig-detail\').innerHTML=\'\'">关闭 ×</button>';
  h += '<h3>' + esc(f.name) + '</h3>';
  h += '<div class="sub">' + esc(f.en || '') + ' · ' + esc(f.years || '') + ' · ' + esc(f.role || '') + '</div>';
  h += '<p>' + esc(f.oneliner || '') + '</p>';
  if (f.contributions && f.contributions.length) {
    h += '<ul>';
    for (var j = 0; j < f.contributions.length; j++) h += '<li>' + esc(f.contributions[j]) + '</li>';
    h += '</ul>';
  }
  if (f.related && f.related.length) {
    h += '<div class="rel">关联课时:';
    for (var k = 0; k < f.related.length; k++) {
      var rid = f.related[k];
      h += '<a href="#/l/' + rid + '">' + (PSY.lessons[rid] ? esc(PSY.lessons[rid].title) : rid) + '</a>' + (k < f.related.length - 1 ? ' · ' : '');
    }
    h += '</div>';
  }
  h += '</div>';
  var box = document.getElementById('fig-detail');
  box.innerHTML = h;
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

function figureCards(list) {
  if (!list.length) return '<p class="empty">该分类暂无收录。</p>';
  var esc = PSY.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var f = list[i];
    var initials = (f.en || f.name).replace(/[^A-Za-z一-龥]/g, '').slice(0, 2).toUpperCase();
    h += '<div class="pcard" onclick="PSY.showFigure(\'' + f.id + '\')">' +
      '<div class="av">' + esc(initials) + '</div>' +
      '<h3>' + esc(f.name) + '</h3>' +
      '<div class="role">' + esc(f.role || '') + '</div>' +
      '<p>' + esc(f.oneliner || '') + '</p>' +
      '<div class="yr">' + esc(f.years || '') + '</div>' +
      '</div>';
  }
  return h;
}

/* ==================== 大模型速查 ==================== */
PSY.views.cheatsheet = function() {
  var rows = window.PSY_MODELS || [];
  var esc = PSY.esc;
  var h = '<div class="tool-head"><h1 class="page">效应速查</h1>' +
    '<p class="sub">常见心理效应与认知偏差横向对比,帮你建立"它是什么、属于哪类、生活里长什么样"的框架。这些是通行的科普归纳,不是诊断标准。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 偏差 / 记忆 / 社会 / 锚定" oninput="PSY.filterModels(this.value)">';
  h += '<div id="model-table">' + modelTable(rows) + '</div>';
  h += '<p class="note">说明:同一效应常有多个名字与边界争议,这里取通行的科普口径,重在认识"人会这样想"的常见模式,便于自我觉察,不替代专业判断。</p>';
  PSY.render(h);
};

PSY.filterModels = function(q) {
  var rows = window.PSY_MODELS || [];
  if (q) {
    q = q.toLowerCase();
    rows = rows.filter(function(r) {
      return (r.name + r.org + r.kind + r.open + r.note).toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('model-table');
  if (el) el.innerHTML = modelTable(rows);
};

function modelTable(rows) {
  if (!rows.length) return '<p class="empty">没有匹配的模型。</p>';
  var esc = PSY.esc;
  var h = '<table><thead><tr><th>效应 / 偏差</th><th>类别</th><th>一句话</th><th>生活例子</th><th>提醒</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.org) + '</td><td>' + esc(r.kind) + '</td>' +
         '<td>' + esc(r.open) + '</td><td>' + esc(r.note) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 中外 AI 对照 ==================== */
PSY.views.compare = function() {
  var rows = window.PSY_COMPARE || [];
  var esc = PSY.esc;
  var h = '<div class="tool-head"><h1 class="page">流派对照</h1>' +
    '<p class="sub">把心理学主要学派并列:它们各自的核心主张、代表人物与贡献——帮你建立"谁主张什么、强调哪一面"的坐标。各派多是互补而非互斥。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 行为 / 认知 / 人本 / 精神分析" oninput="PSY.filterCompare(this.value)">';
  h += '<div id="cmp-table">' + compareTable(rows) + '</div>';
  h += '<p class="note">说明:学派的划分是为理解方便而做的简化,实际彼此交叉、互有影响;重在看清各派"强调什么",而非分高下。</p>';
  PSY.render(h);
};

PSY.filterCompare = function(q) {
  var rows = window.PSY_COMPARE || [];
  if (q) {
    q = q.toLowerCase();
    rows = rows.filter(function(r) { return (r.year + r.world + r.china).toLowerCase().indexOf(q) !== -1; });
  }
  var el = document.getElementById('cmp-table');
  if (el) el.innerHTML = compareTable(rows);
};

function compareTable(rows) {
  if (!rows.length) return '<p class="empty">没有匹配的节点。</p>';
  var esc = PSY.esc;
  var h = '<table><thead><tr><th style="width:8em">流派</th><th>核心主张</th><th>代表人物与贡献</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.year) + '</b></td><td>' + esc(r.world) + '</td><td>' + esc(r.china) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 术语表 / 收藏 / 搜索 / 设置 ==================== */
PSY.views.terms = function() {
  var h = '<div class="tool-head"><h1 class="page">术语表</h1>' +
    '<p class="sub">心理学常见术语,大白话解释。课文里点带下划线的词也会弹出同样的卡片。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input placeholder="搜索术语..." oninput="PSY.filterTerms(this.value)"></div>';
  h += '<ul class="terms" id="term-list">' + termItems(PSY.terms) + '</ul>';
  PSY.render(h);
};

PSY.filterTerms = function(q) {
  var list = PSY.terms;
  if (q) {
    q = q.toLowerCase();
    list = PSY.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('term-list');
  if (el) el.innerHTML = termItems(list);
};

function termItems(list) {
  if (!list.length) return '<li class="empty">没有匹配的术语。</li>';
  var esc = PSY.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    h += '<li><span class="term" onclick="PSY.showTermCard(\'' + t.id + '\', this)">' + esc(t.name) + '</span>' +
         '<span class="en">' + esc(t.en || '') + '</span>' +
         '<span class="def">' + esc(t.def) + '</span></li>';
  }
  return h;
}

PSY.views.myTerms = function() {
  var P = PSY.progress();
  var collected = PSY.terms.filter(function(t) { return P.hasTerm(t.id); });
  var h = '<div class="tool-head"><h1 class="page">收藏本</h1>' +
    '<p class="sub">你在课文或术语表里收藏的词,集中在这里复习。</p></div>';
  if (!collected.length) {
    h += '<div class="empty-state"><p>还没有收藏术语。读课文时点带下划线的词,卡片里点"收藏术语"即可。</p>' +
         '<a class="btn" href="#/terms">去术语表看看</a></div>';
  } else {
    h += '<ul class="terms">' + termItems(collected) + '</ul>';
  }
  PSY.render(h);
};

PSY.views.search = function() {
  var h = '<div class="tool-head"><h1 class="page">搜索</h1>' +
    '<p class="sub">搜课时标题、关键词与术语。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input id="sb" placeholder="输入关键词,如 记忆 / 从众 / 认知偏差 / 依恋" oninput="PSY.doSearch(this.value)" autofocus></div>';
  h += '<div id="search-results"></div>';
  PSY.render(h);
  var sb = document.getElementById('sb');
  if (sb) sb.focus();
};

PSY.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = PSY.search(q);
  if (!results.length) { el.innerHTML = '<p class="empty">没有找到匹配内容。</p>'; return; }
  var esc = PSY.esc;
  var h = '';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      var mod = PSY.modules.find(function(m) { return m.id === r.module; });
      h += '<div class="result"><div class="crumb">' + (mod ? esc(mod.shortTitle || mod.title) : '') + '</div>' +
           '<a href="#/l/' + r.id + '">' + esc(r.title) + '</a><span class="tag">课时</span></div>';
    } else {
      h += '<div class="result"><a onclick="PSY.showTermCardById(\'' + r.id + '\')" style="cursor:pointer">' + esc(r.title) + '</a><span class="tag">术语</span></div>';
    }
  }
  el.innerHTML = h;
};

PSY.showTermCardById = function(id) { window.location.hash = '#/terms'; setTimeout(function() { PSY.filterTerms(''); }, 30); };

PSY.views.settings = function() {
  var P = PSY.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var h = '<div class="tool-head"><h1 class="page">设置</h1></div>';
  h += '<div class="card">';
  h += '<div class="set-row"><label>主题</label><div class="seg">' +
       '<button class="' + (theme === 'light' ? 'on' : '') + '" onclick="PSY.setTheme(\'light\')">浅色</button>' +
       '<button class="' + (theme === 'dark' ? 'on' : '') + '" onclick="PSY.setTheme(\'dark\')">深色</button></div></div>';
  h += '<div class="set-row"><label>字号</label><div class="seg">' +
       '<button class="' + (fs === 's' ? 'on' : '') + '" onclick="PSY.setFontSize(\'s\')">小</button>' +
       '<button class="' + (fs === 'm' ? 'on' : '') + '" onclick="PSY.setFontSize(\'m\')">中</button>' +
       '<button class="' + (fs === 'l' ? 'on' : '') + '" onclick="PSY.setFontSize(\'l\')">大</button></div></div>';
  h += '</div>';
  h += '<div class="card"><div class="set-row"><label>学习数据</label>' +
       '<button class="set-btn" onclick="PSY.exportData()">导出进度</button>' +
       '<button class="set-btn danger" onclick="PSY.clearData()">清除数据</button></div>' +
       '<p class="note" style="margin-top:4px">进度只存在本机浏览器(localStorage),不上传任何服务器。换设备可用"导出进度"备份。</p></div>';
  PSY.render(h);
};

PSY.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  PSY.progress().setPref('theme', t);
  if (PSY.renderShell) PSY.renderShell();
  PSY.views.settings();
};
PSY.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  PSY.progress().setPref('fontSize', s);
  PSY.views.settings();
};
PSY.exportData = function() {
  var data = PSY.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'psy-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
PSY.clearData = function() {
  if (confirm('确定清除所有学习进度与收藏吗?此操作不可恢复。')) {
    localStorage.removeItem('psy.progress.v1');
    window.location.reload();
  }
};
