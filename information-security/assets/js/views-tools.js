/* 工具视图:模块页 / 发展史时间轴 / 人物图鉴 / 大模型速查 / 中外对照 / 术语 / 收藏 / 搜索 / 设置 */
window.ISL = window.ISL || {};
ISL.views = ISL.views || {};

/* ==================== 模块页 ==================== */
ISL.views.module = function(id) {
  var mod = ISL.modules.find(function(m) { return m.id === id; });
  if (!mod) { ISL.views.home(); return; }
  var P = ISL.progress();
  var esc = ISL.esc;

  var lessons = [];
  for (var i = 0; i < ISL.path.length; i++) if (ISL.path[i].indexOf(id + '/') === 0) lessons.push(ISL.path[i]);

  var ord = mod.order < 10 ? '0' + mod.order : '' + mod.order;
  var h = '<div class="crumb"><a href="#/">首页</a> / 模块 ' + ord + '</div>';
  h += '<h1 class="page">' + esc(mod.title) + '</h1>';
  h += '<p class="meta"><span class="key">' + lessons.length + ' 节</span>　' + esc(mod.desc || '') + '</p>';
  h += '<hr class="rule">';
  h += '<ul class="toc">';
  for (var j = 0; j < lessons.length; j++) {
    var lid = lessons[j];
    var l = ISL.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    var n = (j + 1) < 10 ? '0' + (j + 1) : '' + (j + 1);
    h += '<li><span class="ix">' + n + '</span>' +
         '<a class="t" href="#/l/' + lid + '">' + esc(title) + '</a>' +
         '<span class="lead"></span>' +
         '<span class="pg' + (read ? ' done' : '') + '">' + (read ? '已读 ✓' : (l && l.minutes ? l.minutes + ' 分' : '—')) + '</span></li>';
  }
  h += '</ul>';
  ISL.render(h);
};

/* ==================== 发展史时间轴 ==================== */
ISL.views.timeline = function() {
  var data = window.ISL_TIMELINE || [];
  var esc = ISL.esc;
  var h = '<div class="tool-head"><h1 class="page">安全大事记</h1>' +
    '<p class="sub">从 1988 年莫里斯蠕虫到震网、棱镜、勒索软件与大模型时代,把信息安全史上真正改变行业走向的节点串成一条线。年代为关键事件口径,部分为约数。</p></div>';
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
  h += '<p class="note">说明:重大事件的时间、影响范围常有不同口径,这里取通行说法,重在让你看清大趋势——攻防螺旋上升、从单机病毒到国家级 APT、再到数据与 AI 安全,而非记诵确切年份。</p>';
  ISL.render(h);
};

/* ==================== 人物图鉴 ==================== */
ISL.views.figures = function() {
  var all = window.ISL_FIGURES || [];
  var groups = [];
  for (var i = 0; i < all.length; i++) {
    if (groups.indexOf(all[i].group) === -1) groups.push(all[i].group);
  }
  var esc = ISL.esc;
  var h = '<div class="tool-head"><h1 class="page">人物图鉴</h1>' +
    '<p class="sub">推动信息安全与密码学的关键人物。点开卡片看他做了什么、为什么重要。</p></div>';
  h += '<div class="chips" id="fig-chips">';
  h += '<button class="chip on" data-g="all" onclick="ISL.filterFigures(\'all\')">全部 (' + all.length + ')</button>';
  for (var g = 0; g < groups.length; g++) {
    var c = all.filter(function(f) { return f.group === groups[g]; }).length;
    h += '<button class="chip" data-g="' + esc(groups[g]) + '" onclick="ISL.filterFigures(\'' + esc(groups[g]) + '\')">' + esc(groups[g]) + ' (' + c + ')</button>';
  }
  h += '</div>';
  h += '<div id="fig-detail"></div>';
  h += '<div id="fig-grid" class="fig-grid">' + figureCards(all) + '</div>';
  ISL.render(h);
};

ISL.filterFigures = function(g) {
  var chips = document.querySelectorAll('#fig-chips .chip');
  for (var i = 0; i < chips.length; i++) chips[i].classList.toggle('on', chips[i].getAttribute('data-g') === g);
  var all = window.ISL_FIGURES || [];
  var list = g === 'all' ? all : all.filter(function(f) { return f.group === g; });
  document.getElementById('fig-grid').innerHTML = figureCards(list);
  document.getElementById('fig-detail').innerHTML = '';
};

ISL.showFigure = function(fid) {
  var all = window.ISL_FIGURES || [];
  var f = null;
  for (var i = 0; i < all.length; i++) if (all[i].id === fid) { f = all[i]; break; }
  if (!f) return;
  var esc = ISL.esc;
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
      h += '<a href="#/l/' + rid + '">' + (ISL.lessons[rid] ? esc(ISL.lessons[rid].title) : rid) + '</a>' + (k < f.related.length - 1 ? ' · ' : '');
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
  var esc = ISL.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var f = list[i];
    var initials = (f.en || f.name).replace(/[^A-Za-z一-龥]/g, '').slice(0, 2).toUpperCase();
    h += '<div class="pcard" onclick="ISL.showFigure(\'' + f.id + '\')">' +
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
ISL.views.cheatsheet = function() {
  var rows = window.ISL_MODELS || [];
  var esc = ISL.esc;
  var h = '<div class="tool-head"><h1 class="page">威胁速查</h1>' +
    '<p class="sub">常见攻击手法与威胁横向对比,帮你建立"它是什么、打在哪一层、危害多大、怎么防"的框架。攻击手法会演化,这里取通行分类的概览口径。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 钓鱼 / 注入 / 勒索 / 大模型 / 网络层" oninput="ISL.filterModels(this.value)">';
  h += '<div id="model-table">' + modelTable(rows) + '</div>';
  h += '<p class="note">说明:同一种攻击常有多种变体与命名,这里只列代表性手法与典型防御方向,重在建立"威胁—层面—对策"的对应关系,不替代具体场景下的专业评估。</p>';
  ISL.render(h);
};

ISL.filterModels = function(q) {
  var rows = window.ISL_MODELS || [];
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
  var esc = ISL.esc;
  var h = '<table><thead><tr><th>威胁 / 攻击</th><th>类别</th><th>所处层面</th><th>危害</th><th>一句话防御</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.org) + '</td><td>' + esc(r.kind) + '</td>' +
         '<td>' + esc(r.open) + '</td><td>' + esc(r.note) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 中外 AI 对照 ==================== */
ISL.views.compare = function() {
  var rows = window.ISL_COMPARE || [];
  var esc = ISL.esc;
  var h = '<div class="tool-head"><h1 class="page">法规与标准速查</h1>' +
    '<p class="sub">按主题把中国与国际的安全法规/标准并列,帮你建立"这件事在国内看哪部法、在国际看哪个标准"的坐标感。条款会修订,以官方最新文本为准。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 数据 / 个人信息 / 等保 / ISO / GDPR" oninput="ISL.filterCompare(this.value)">';
  h += '<div id="cmp-table">' + compareTable(rows) + '</div>';
  h += '<p class="note">说明:仅取每个主题最具代表性的法规/标准并列,并非全部;名称与适用范围以官方发布为准。重在建立"国内—国际"的对应感,不构成法律意见。</p>';
  ISL.render(h);
};

ISL.filterCompare = function(q) {
  var rows = window.ISL_COMPARE || [];
  if (q) {
    q = q.toLowerCase();
    rows = rows.filter(function(r) { return (r.year + r.world + r.china).toLowerCase().indexOf(q) !== -1; });
  }
  var el = document.getElementById('cmp-table');
  if (el) el.innerHTML = compareTable(rows);
};

function compareTable(rows) {
  if (!rows.length) return '<p class="empty">没有匹配的节点。</p>';
  var esc = ISL.esc;
  var h = '<table><thead><tr><th style="width:8em">主题</th><th>国际(标准/法规)</th><th>中国(标准/法规)</th></tr></thead><tbody>';
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    h += '<tr><td><b>' + esc(r.year) + '</b></td><td>' + esc(r.world) + '</td><td>' + esc(r.china) + '</td></tr>';
  }
  h += '</tbody></table>';
  return h;
}

/* ==================== 术语表 / 收藏 / 搜索 / 设置 ==================== */
ISL.views.terms = function() {
  var h = '<div class="tool-head"><h1 class="page">术语表</h1>' +
    '<p class="sub">信息安全常见术语,大白话解释。课文里点带下划线的词也会弹出同样的卡片。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input placeholder="搜索术语..." oninput="ISL.filterTerms(this.value)"></div>';
  h += '<ul class="terms" id="term-list">' + termItems(ISL.terms) + '</ul>';
  ISL.render(h);
};

ISL.filterTerms = function(q) {
  var list = ISL.terms;
  if (q) {
    q = q.toLowerCase();
    list = ISL.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  var el = document.getElementById('term-list');
  if (el) el.innerHTML = termItems(list);
};

function termItems(list) {
  if (!list.length) return '<li class="empty">没有匹配的术语。</li>';
  var esc = ISL.esc;
  var h = '';
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    h += '<li><span class="term" onclick="ISL.showTermCard(\'' + t.id + '\', this)">' + esc(t.name) + '</span>' +
         '<span class="en">' + esc(t.en || '') + '</span>' +
         '<span class="def">' + esc(t.def) + '</span></li>';
  }
  return h;
}

ISL.views.myTerms = function() {
  var P = ISL.progress();
  var collected = ISL.terms.filter(function(t) { return P.hasTerm(t.id); });
  var h = '<div class="tool-head"><h1 class="page">收藏本</h1>' +
    '<p class="sub">你在课文或术语表里收藏的词,集中在这里复习。</p></div>';
  if (!collected.length) {
    h += '<div class="empty-state"><p>还没有收藏术语。读课文时点带下划线的词,卡片里点"收藏术语"即可。</p>' +
         '<a class="btn" href="#/terms">去术语表看看</a></div>';
  } else {
    h += '<ul class="terms">' + termItems(collected) + '</ul>';
  }
  ISL.render(h);
};

ISL.views.search = function() {
  var h = '<div class="tool-head"><h1 class="page">搜索</h1>' +
    '<p class="sub">搜课时标题、关键词与术语。</p></div>';
  h += '<div class="searchbox" style="margin:10px 0"><input id="sb" placeholder="输入关键词,如 零信任 / 勒索 / 提示词注入 / 等保" oninput="ISL.doSearch(this.value)" autofocus></div>';
  h += '<div id="search-results"></div>';
  ISL.render(h);
  var sb = document.getElementById('sb');
  if (sb) sb.focus();
};

ISL.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ISL.search(q);
  if (!results.length) { el.innerHTML = '<p class="empty">没有找到匹配内容。</p>'; return; }
  var esc = ISL.esc;
  var h = '';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      var mod = ISL.modules.find(function(m) { return m.id === r.module; });
      h += '<div class="result"><div class="crumb">' + (mod ? esc(mod.shortTitle || mod.title) : '') + '</div>' +
           '<a href="#/l/' + r.id + '">' + esc(r.title) + '</a><span class="tag">课时</span></div>';
    } else {
      h += '<div class="result"><a onclick="ISL.showTermCardById(\'' + r.id + '\')" style="cursor:pointer">' + esc(r.title) + '</a><span class="tag">术语</span></div>';
    }
  }
  el.innerHTML = h;
};

ISL.showTermCardById = function(id) { window.location.hash = '#/terms'; setTimeout(function() { ISL.filterTerms(''); }, 30); };

ISL.views.settings = function() {
  var P = ISL.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var cfg = (ISL.sync ? ISL.sync.config() : {});

  var h = '<div class="tool-head"><h1 class="page">设置</h1></div>';
  h += '<div class="card">';
  h += '<div class="set-row"><label>主题</label><div class="seg">' +
       '<button class="' + (theme === 'light' ? 'on' : '') + '" onclick="ISL.setTheme(\'light\')">浅色</button>' +
       '<button class="' + (theme === 'dark' ? 'on' : '') + '" onclick="ISL.setTheme(\'dark\')">深色</button></div></div>';
  h += '<div class="set-row"><label>字号</label><div class="seg">' +
       '<button class="' + (fs === 's' ? 'on' : '') + '" onclick="ISL.setFontSize(\'s\')">小</button>' +
       '<button class="' + (fs === 'm' ? 'on' : '') + '" onclick="ISL.setFontSize(\'m\')">中</button>' +
       '<button class="' + (fs === 'l' ? 'on' : '') + '" onclick="ISL.setFontSize(\'l\')">大</button></div></div>';
  h += '</div>';

  /* ── GitHub 进度同步(可选) ── */
  h += '<div class="card"><h3 class="set-title">GitHub 进度同步(可选)</h3>';
  h += '<p class="note">用一个<b>自己的 private 仓库</b>存进度(如 you/progress),fine-grained PAT 只授权该仓库 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  h += '<div class="set-row"><label>仓库</label><input id="syRepo" class="field" placeholder="owner/progress" value="' + ISL.esc(cfg.repo || '') + '"></div>';
  h += '<div class="set-row"><label>分支</label><input id="syBranch" class="field" placeholder="main" value="' + ISL.esc(cfg.branch || 'main') + '"></div>';
  h += '<div class="set-row"><label>Token</label><input id="syToken" class="field" type="password" placeholder="github_pat_…" value="' + ISL.esc(cfg.token || '') + '"></div>';
  h += '<div class="set-row" style="margin-top:12px"><button class="set-btn" id="sySave">保存并立即同步</button><button class="set-btn" id="syPull">只拉取一次</button><button class="set-btn danger" id="syClear">清除 token</button></div>';
  h += '<p class="note" id="syMsg">' + ISL.esc(ISL.sync ? ISL.sync.statusText : '仅本机') + '</p></div>';

  h += '<div class="card"><div class="set-row"><label>学习数据</label>' +
       '<button class="set-btn" onclick="ISL.exportData()">导出进度</button>' +
       '<button class="set-btn danger" onclick="ISL.clearData()">清除数据</button></div>' +
       '<p class="note" style="margin-top:4px">进度只存在本机浏览器(localStorage),不上传任何服务器。换设备可用"导出进度"备份。</p></div>';
  ISL.render(h);

  // 同步按钮接线
  function msg(text, cls) {
    var el = document.getElementById('syMsg');
    if (el) { el.textContent = text; el.className = 'note' + (cls ? ' ' + cls : ''); }
  }
  var sySave = document.getElementById('sySave');
  var syPull = document.getElementById('syPull');
  var syClear = document.getElementById('syClear');
  if (sySave) sySave.addEventListener('click', function () {
    if (!ISL.sync) return;
    ISL.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!ISL.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
    msg('同步中…');
    ISL.sync.pullNow().then(function () { return ISL.sync.pushNow(); })
      .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + ISL.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  if (syPull) syPull.addEventListener('click', function () {
    if (!ISL.sync) return;
    msg('拉取中…');
    ISL.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : ISL.sync.statusText, ok ? 'ok' : ''); });
  });
  if (syClear) syClear.addEventListener('click', function () {
    if (!ISL.sync) return;
    ISL.sync.clearToken();
    var tok = document.getElementById('syToken'); if (tok) tok.value = '';
    msg('token 已从本机清除。');
  });
};

ISL.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  ISL.progress().setPref('theme', t);
  if (ISL.renderShell) ISL.renderShell();
  ISL.views.settings();
};
ISL.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  ISL.progress().setPref('fontSize', s);
  ISL.views.settings();
};
ISL.exportData = function() {
  var data = ISL.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'isl-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
ISL.clearData = function() {
  if (confirm('确定清除所有学习进度与收藏吗?此操作不可恢复。')) {
    localStorage.removeItem('isl.progress.v1');
    window.location.reload();
  }
};
