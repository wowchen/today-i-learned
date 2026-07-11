/* 工具视图:模块页 / 发展史时间轴 / 人物图鉴 / 大模型速查 / 中外对照 / 术语 / 收藏 / 搜索 / 设置 */
window.AIX = window.AIX || {};
AIX.views = AIX.views || {};

/* ==================== 模块页 ==================== */
AIX.views.module = function(id) {
  var mod = AIX.modules.find(function(m) { return m.id === id; });
  if (!mod) { AIX.views.home(); return; }
  var P = AIX.progress();
  var esc = AIX.esc;

  var lessons = [];
  for (var i = 0; i < AIX.path.length; i++) if (AIX.path[i].indexOf(id + '/') === 0) lessons.push(AIX.path[i]);

  var ord = mod.order < 10 ? '0' + mod.order : '' + mod.order;
  var h = '<div class="crumb"><a href="#/">首页</a> / 模块 ' + ord + '</div>';
  h += '<h1 class="page">' + esc(mod.title) + '</h1>';
  h += '<p class="meta"><span class="key">' + lessons.length + ' 节</span>　' + esc(mod.desc || '') + '</p>';
  h += '<hr class="rule">';
  h += '<ul class="toc">';
  for (var j = 0; j < lessons.length; j++) {
    var lid = lessons[j];
    var l = AIX.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var n = (j + 1) < 10 ? '0' + (j + 1) : '' + (j + 1);
    h += '<li><span class="ix">' + n + '</span>' +
         '<a class="t" href="#/l/' + lid + '">' + esc(title) + '</a>' +
         '<span class="lead"></span>' +
         '<span class="pg' + (read ? ' done' : '') + '">' + (read ? '已读 ✓' : (l && l.minutes ? l.minutes + ' 分' : '—')) + '</span></li>';
  }
  h += '</ul>';
  AIX.render(h);
};

/* ==================== 发展史时间轴 ==================== */
AIX.views.timeline = function() {
  var data = window.AIX_TIMELINE || [];
  var esc = AIX.esc;
  var h = '<div class="tool-head"><h1 class="page">AI 发展史</h1>' +
    '<p class="sub">从 1950 年图灵之问到今天,把人工智能七十多年里真正改变方向的节点串成一条线。年代为关键事件口径,部分为约数。</p></div>';
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
  h += '<p class="note">说明:断代与"第一个"之类的说法在学界常有不同口径,这里取通行说法,重在让你看清大趋势——寒冬与复兴交替、算力与数据驱动的转折,而非记诵确切年份。</p>';
  AIX.render(h);
};

/* ==================== 人物图鉴 ==================== */
AIX.views.figures = function() {
  var all = window.AIX_FIGURES || [];
  var groups = [];
  for (var i = 0; i < all.length; i++) {
    if (groups.indexOf(all[i].group) === -1) groups.push(all[i].group);
  }
  var esc = AIX.esc;
  var h = '<div class="tool-head"><h1 class="page">人物图鉴</h1>' +
    '<p class="sub">推动 AI 的关键人物,中外并重。点开卡片看他做了什么、为什么重要。</p></div>';
  h += '<div class="chips" id="fig-chips">';
  h += '<button class="chip on" data-g="all" onclick="AIX.filterFigures(\'all\')">全部 (' + all.length + ')</button>';
  for (var g = 0; g < groups.length; g++) {
    var c = all.filter(function(f) { return f.group === groups[g]; }).length;
    h += '<button class="chip" data-g="' + esc(groups[g]) + '" onclick="AIX.filterFigures(\'' + esc(groups[g]) + '\')">' + esc(groups[g]) + ' (' + c + ')</button>';
  }
  h += '</div>';
  h += '<div id="fig-detail"></div>';
  h += '<div id="fig-grid" class="fig-grid">' + figureCards(all) + '</div>';
  AIX.render(h);
};

AIX.filterFigures = function(g) {
  var chips = document.querySelectorAll('#fig-chips .chip');
  for (var i = 0; i < chips.length; i++) chips[i].classList.toggle('on', chips[i].getAttribute('data-g') === g);
  var all = window.AIX_FIGURES || [];
  var list = g === 'all' ? all : all.filter(function(f) { return f.group === g; });
  document.getElementById('fig-grid').innerHTML = figureCards(list);
  document.getElementById('fig-detail').innerHTML = '';
};

AIX.showFigure = function(fid) {
  var all = window.AIX_FIGURES || [];
  var f = null;
  for (var i = 0; i < all.length; i++) if (all[i].id === fid) { f = all[i]; break; }
  if (!f) return;
  var esc = AIX.esc;
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
      h += '<a href="#/l/' + rid + '">' + (AIX.lessons[rid] ? esc(AIX.lessons[rid].title) : rid) + '</a>' + (k < f.related.length - 1 ? ' · ' : '');
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
  var esc = AIX.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var f = list[i];
    var initials = (f.en || f.name).replace(/[^A-Za-z一-龥]/g, '').slice(0, 2).toUpperCase();
    h += '<div class="pcard" onclick="AIX.showFigure(\'' + f.id + '\')">' +
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
AIX.views.cheatsheet = function() {
  var rows = window.AIX_MODELS || [];
  var esc = AIX.esc;
  var h = '<div class="tool-head"><h1 class="page">大模型速查</h1>' +
    '<p class="sub">主流大模型横向对比,帮你建立"谁家、什么定位、开源还是闭源"的框架。模型迭代极快,具体版本与参数请以官方为准;下表为截至 2026 年初的概览口径。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 开源 / 多模态 / OpenAI / 国产" oninput="AIX.filterModels(this.value)">';
  h += '<div id="model-table">' + modelTable(rows) + '</div>';
  h += '<p class="note">说明:大模型领域几乎每月都有新版本,这里只列代表性产品与定位,不追逐最新参数;"开源"多指开放权重(open-weight),许可条款各家不同。</p>';
  AIX.render(h);
};

AIX.filterModels = function(q) {
  var rows = window.AIX_MODELS || [];
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
  var esc = AIX.esc;
  var h = '<table><thead><tr><th>模型</th><th>厂商 / 团队</th><th>定位</th><th>权重</th><th>一句话</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.org) + '</td><td>' + esc(r.kind) + '</td>' +
         '<td>' + esc(r.open) + '</td><td>' + esc(r.note) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 中外 AI 对照 ==================== */
AIX.views.compare = function() {
  var rows = window.AIX_COMPARE || [];
  var esc = AIX.esc;
  var h = '<div class="tool-head"><h1 class="page">中外 AI 对照</h1>' +
    '<p class="sub">同一条时间线上,左边是全球(主要是欧美)的标志性进展,右边是同期中国在做什么——用来建立"那几年东西方各自走到哪一步"的坐标感。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 2017 / 深度学习 / 大模型" oninput="AIX.filterCompare(this.value)">';
  h += '<div id="cmp-table">' + compareTable(rows) + '</div>';
  h += '<p class="note">说明:仅取每个时期最具代表性的事件并列,并非全部同期史实;年代为约数。重在看清节奏差异与追赶,而非排名。</p>';
  AIX.render(h);
};

AIX.filterCompare = function(q) {
  var rows = window.AIX_COMPARE || [];
  if (q) {
    q = q.toLowerCase();
    rows = rows.filter(function(r) { return (r.year + r.world + r.china).toLowerCase().indexOf(q) !== -1; });
  }
  var el = document.getElementById('cmp-table');
  if (el) el.innerHTML = compareTable(rows);
};

function compareTable(rows) {
  if (!rows.length) return '<p class="empty">没有匹配的节点。</p>';
  var esc = AIX.esc;
  var h = '<table><thead><tr><th style="width:5em">年代</th><th>全球</th><th>中国(同期)</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.year) + '</b></td><td>' + esc(r.world) + '</td><td>' + esc(r.china) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 术语表 / 收藏 / 搜索 / 设置 ==================== */
AIX.views.terms = function() {
  var h = '<div class="tool-head"><h1 class="page">术语表</h1>' +
    '<p class="sub">AI 常见术语,大白话解释。课文里点带下划线的词也会弹出同样的卡片。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input placeholder="搜索术语..." oninput="AIX.filterTerms(this.value)"></div>';
  h += '<ul class="terms" id="term-list">' + termItems(AIX.terms) + '</ul>';
  AIX.render(h);
};

AIX.filterTerms = function(q) {
  var list = AIX.terms;
  if (q) {
    q = q.toLowerCase();
    list = AIX.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('term-list');
  if (el) el.innerHTML = termItems(list);
};

function termItems(list) {
  if (!list.length) return '<li class="empty">没有匹配的术语。</li>';
  var esc = AIX.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    h += '<li><span class="term" onclick="AIX.showTermCard(\'' + t.id + '\', this)">' + esc(t.name) + '</span>' +
         '<span class="en">' + esc(t.en || '') + '</span>' +
         '<span class="def">' + esc(t.def) + '</span></li>';
  }
  return h;
}

AIX.views.myTerms = function() {
  var P = AIX.progress();
  var collected = AIX.terms.filter(function(t) { return P.hasTerm(t.id); });
  var h = '<div class="tool-head"><h1 class="page">收藏本</h1>' +
    '<p class="sub">你在课文或术语表里收藏的词,集中在这里复习。</p></div>';
  if (!collected.length) {
    h += '<div class="empty-state"><p>还没有收藏术语。读课文时点带下划线的词,卡片里点"收藏术语"即可。</p>' +
         '<a class="btn" href="#/terms">去术语表看看</a></div>';
  } else {
    h += '<ul class="terms">' + termItems(collected) + '</ul>';
  }
  AIX.render(h);
};

AIX.views.search = function() {
  var h = '<div class="tool-head"><h1 class="page">搜索</h1>' +
    '<p class="sub">搜课时标题、关键词与术语。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input id="sb" placeholder="输入关键词,如 注意力 / RAG / 幻觉" oninput="AIX.doSearch(this.value)" autofocus></div>';
  h += '<div id="search-results"></div>';
  AIX.render(h);
  var sb = document.getElementById('sb');
  if (sb) sb.focus();
};

AIX.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AIX.search(q);
  if (!results.length) { el.innerHTML = '<p class="empty">没有找到匹配内容。</p>'; return; }
  var esc = AIX.esc;
  var h = '';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      var mod = AIX.modules.find(function(m) { return m.id === r.module; });
      h += '<div class="result"><div class="crumb">' + (mod ? esc(mod.shortTitle || mod.title) : '') + '</div>' +
           '<a href="#/l/' + r.id + '">' + esc(r.title) + '</a><span class="tag">课时</span></div>';
    } else {
      h += '<div class="result"><a onclick="AIX.showTermCardById(\'' + r.id + '\')" style="cursor:pointer">' + esc(r.title) + '</a><span class="tag">术语</span></div>';
    }
  }
  el.innerHTML = h;
};

AIX.showTermCardById = function(id) { window.location.hash = '#/terms'; setTimeout(function() { AIX.filterTerms(''); }, 30); };

AIX.views.settings = function() {
  var P = AIX.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var h = '<div class="tool-head"><h1 class="page">设置</h1></div>';
  h += '<div class="card">';
  h += '<div class="set-row"><label>主题</label><div class="seg">' +
       '<button class="' + (theme === 'light' ? 'on' : '') + '" onclick="AIX.setTheme(\'light\')">浅色</button>' +
       '<button class="' + (theme === 'dark' ? 'on' : '') + '" onclick="AIX.setTheme(\'dark\')">深色</button></div></div>';
  h += '<div class="set-row"><label>字号</label><div class="seg">' +
       '<button class="' + (fs === 's' ? 'on' : '') + '" onclick="AIX.setFontSize(\'s\')">小</button>' +
       '<button class="' + (fs === 'm' ? 'on' : '') + '" onclick="AIX.setFontSize(\'m\')">中</button>' +
       '<button class="' + (fs === 'l' ? 'on' : '') + '" onclick="AIX.setFontSize(\'l\')">大</button></div></div>';
  h += '</div>';
  // GitHub 进度同步(可选)
  var gcfg = AIX.sync.config();
  h += '<div class="card">' +
    '<h3>GitHub 进度同步(可选)</h3>' +
    '<p class="note">用一个<b>自己的 private 仓库</b>存进度(如 you/aix-progress),fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>' +
    '<div class="set-row"><label>仓库</label><input id="syRepo" placeholder="owner/aix-progress" value="' + AIX.esc(gcfg.repo || '') + '"></div>' +
    '<div class="set-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + AIX.esc(gcfg.branch || 'main') + '"></div>' +
    '<div class="set-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + AIX.esc(gcfg.token || '') + '"></div>' +
    '<div class="set-row" style="margin-top:14px">' +
    '<button class="set-btn" id="sySave">保存并立即同步</button>' +
    '<button class="set-btn" id="syPull">只拉取一次</button>' +
    '<button class="set-btn danger" id="syClear">清除 token</button></div>' +
    '<p class="note" id="syMsg">' + AIX.esc(AIX.sync.statusText) + '</p>' +
    '</div>';
  h += '<div class="card"><div class="set-row"><label>学习数据</label>' +
       '<button class="set-btn" onclick="AIX.exportData()">导出进度</button>' +
       '<button class="set-btn danger" onclick="AIX.clearData()">清除数据</button></div>' +
       '<p class="note" style="margin-top:4px">进度只存在本机浏览器(localStorage),不上传任何服务器。换设备可用"导出进度"备份。</p></div>';
  AIX.render(h);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    AIX.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!AIX.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中…');
    AIX.sync.pullNow().then(function () { return AIX.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + AIX.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中…');
    AIX.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : AIX.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    AIX.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};

AIX.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  AIX.progress().setPref('theme', t);
  if (AIX.renderShell) AIX.renderShell();
  AIX.views.settings();
};
AIX.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  AIX.progress().setPref('fontSize', s);
  AIX.views.settings();
};
AIX.exportData = function() {
  var data = AIX.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'aix-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AIX.clearData = function() {
  if (confirm('确定清除所有学习进度与收藏吗?此操作不可恢复。')) {
    localStorage.removeItem('aix.progress.v1');
    window.location.reload();
  }
};
