/* 工具视图:模块页 / 时间轴 / 角色图鉴 / 缩略语速查 / 流程对照 / 术语 / 收藏 / 搜索 / 设置 */
window.HIT = window.HIT || {};
HIT.views = HIT.views || {};

HIT.views.module = function(id) {
  var mod = HIT.modules.find(function(m) { return m.id === id; });
  if (!mod) { HIT.views.home(); return; }
  var P = HIT.progress();
  var esc = HIT.esc;
  var lessons = [];
  for (var i = 0; i < HIT.path.length; i++) if (HIT.path[i].indexOf(id + '/') === 0) lessons.push(HIT.path[i]);
  var ord = mod.order < 10 ? '0' + mod.order : '' + mod.order;
  var h = '<div class="crumb"><a href="#/">首页</a> / 模块 ' + ord + '</div>';
  h += '<h1 class="page">' + esc(mod.title) + '</h1>';
  h += '<p class="meta"><span class="key">' + lessons.length + ' 节</span>　' + esc(mod.desc || '') + '</p>';
  h += '<hr class="rule"><ul class="toc">';
  for (var j = 0; j < lessons.length; j++) {
    var lid = lessons[j], l = HIT.lessons[lid], title = l ? l.title : lid.split('/')[1], read = P.isRead(lid);
    var n = (j + 1) < 10 ? '0' + (j + 1) : '' + (j + 1);
    h += '<li><span class="ix">' + n + '</span><a class="t" href="#/l/' + lid + '">' + esc(title) + '</a>' +
         '<span class="lead"></span><span class="pg' + (read ? ' done' : '') + '">' + (read ? '已读 ✓' : (l && l.minutes ? l.minutes + ' 分' : '—')) + '</span></li>';
  }
  h += '</ul>';
  HIT.render(h);
};

HIT.views.timeline = function() {
  var data = window.HIT_TIMELINE || [], esc = HIT.esc;
  var h = '<div class="tool-head"><h1 class="page">医疗改革与信息化时间轴</h1>' +
    '<p class="sub">从新医改、电子病历评级、DRG/DIP 到数据安全和智慧医院,把政策、业务和信息化建设放在同一条线上看。</p></div><div class="tl">';
  for (var i = 0; i < data.length; i++) {
    var e = data[i];
    h += '<div class="ev"><div class="yr">' + esc(e.year) + '</div><h4>' + esc(e.title) + '</h4><p>' + esc(e.desc) + '</p>';
    if (e.lesson) h += '<a href="#/l/' + e.lesson + '">→ 去这一课</a>';
    h += '</div>';
  }
  h += '</div><p class="note">说明:时间轴为通识口径,部分政策和试点在不同地区有差异。真实项目以正式文件和本地要求为准。</p>';
  HIT.render(h);
};

HIT.views.figures = function() {
  var all = window.HIT_FIGURES || [], groups = [], esc = HIT.esc;
  for (var i = 0; i < all.length; i++) if (groups.indexOf(all[i].group) === -1) groups.push(all[i].group);
  var h = '<div class="tool-head"><h1 class="page">角色/机构图鉴</h1>' +
    '<p class="sub">医疗信息化不是软件独角戏。点开医生、护士、药师、医保办、信息科、监管等角色,看他们在流程里关心什么。</p></div>';
  h += '<div class="chips" id="fig-chips"><button class="chip on" data-g="all" onclick="HIT.filterFigures(\'all\')">全部 (' + all.length + ')</button>';
  for (var g = 0; g < groups.length; g++) {
    var c = all.filter(function(f) { return f.group === groups[g]; }).length;
    h += '<button class="chip" data-g="' + esc(groups[g]) + '" onclick="HIT.filterFigures(\'' + esc(groups[g]) + '\')">' + esc(groups[g]) + ' (' + c + ')</button>';
  }
  h += '</div><div id="fig-detail"></div><div id="fig-grid" class="fig-grid">' + figureCards(all) + '</div>';
  HIT.render(h);
};

HIT.filterFigures = function(g) {
  var chips = document.querySelectorAll('#fig-chips .chip');
  for (var i = 0; i < chips.length; i++) chips[i].classList.toggle('on', chips[i].getAttribute('data-g') === g);
  var all = window.HIT_FIGURES || [];
  var list = g === 'all' ? all : all.filter(function(f) { return f.group === g; });
  document.getElementById('fig-grid').innerHTML = figureCards(list);
  document.getElementById('fig-detail').innerHTML = '';
};

HIT.showFigure = function(fid) {
  var all = window.HIT_FIGURES || [], f = null, esc = HIT.esc;
  for (var i = 0; i < all.length; i++) if (all[i].id === fid) { f = all[i]; break; }
  if (!f) return;
  var h = '<div class="fig-detail"><button class="x" onclick="document.getElementById(\'fig-detail\').innerHTML=\'\'">关闭 ×</button>';
  h += '<h3>' + esc(f.name) + '</h3><div class="sub">' + esc(f.en || '') + ' · ' + esc(f.years || '') + ' · ' + esc(f.role || '') + '</div>';
  h += '<p>' + esc(f.oneliner || '') + '</p>';
  if (f.contributions && f.contributions.length) { h += '<ul>'; for (var j = 0; j < f.contributions.length; j++) h += '<li>' + esc(f.contributions[j]) + '</li>'; h += '</ul>'; }
  if (f.related && f.related.length) { h += '<div class="rel">关联课时:'; for (var k = 0; k < f.related.length; k++) { var rid = f.related[k]; h += '<a href="#/l/' + rid + '">' + (HIT.lessons[rid] ? esc(HIT.lessons[rid].title) : rid) + '</a>' + (k < f.related.length - 1 ? ' · ' : ''); } h += '</div>'; }
  h += '</div>';
  var box = document.getElementById('fig-detail'); box.innerHTML = h; box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

function figureCards(list) {
  if (!list.length) return '<p class="empty">该分类暂无收录。</p>';
  var esc = HIT.esc, h = '';
  for (var i = 0; i < list.length; i++) {
    var f = list[i], initials = (f.en || f.name).replace(/[^A-Za-z一-龥]/g, '').slice(0, 2).toUpperCase();
    h += '<div class="pcard" onclick="HIT.showFigure(\'' + f.id + '\')"><div class="av">' + esc(initials) + '</div>' +
      '<h3>' + esc(f.name) + '</h3><div class="role">' + esc(f.role || '') + '</div><p>' + esc(f.oneliner || '') + '</p><div class="yr">' + esc(f.years || '') + '</div></div>';
  }
  return h;
}

HIT.views.cheatsheet = function() {
  var rows = window.HIT_MODELS || [], esc = HIT.esc;
  var h = '<div class="tool-head"><h1 class="page">医疗信息化缩略语速查</h1>' +
    '<p class="sub">HIS、EMR、LIS、PACS、DRG、FHIR、DICOM……先用一张表建立坐标感,再回到课程里看场景。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 HIS / 医保 / 标准 / 影像" oninput="HIT.filterModels(this.value)">';
  h += '<div id="model-table">' + modelTable(rows) + '</div><p class="note">说明:同一缩写在不同机构可能有不同产品边界,这里按通识口径解释。</p>';
  HIT.render(h);
};
HIT.filterModels = function(q) { var rows = window.HIT_MODELS || []; if (q) { q = q.toLowerCase(); rows = rows.filter(function(r) { return (r.name + r.org + r.kind + r.open + r.note).toLowerCase().indexOf(q) !== -1; }); } var el = document.getElementById('model-table'); if (el) el.innerHTML = modelTable(rows); };
function modelTable(rows) { if (!rows.length) return '<p class="empty">没有匹配的条目。</p>'; var esc = HIT.esc, h = '<table><thead><tr><th>缩写</th><th>中文</th><th>类别</th><th>常见场景</th><th>一句话</th></tr></thead><tbody>'; for (var i = 0; i < rows.length; i++) { var r = rows[i]; h += '<tr><td><b>' + esc(r.name) + '</b></td><td>' + esc(r.org) + '</td><td>' + esc(r.kind) + '</td><td>' + esc(r.open) + '</td><td>' + esc(r.note) + '</td></tr>'; } return h + '</tbody></table>'; }

HIT.views.compare = function() {
  var rows = window.HIT_COMPARE || [];
  var h = '<div class="tool-head"><h1 class="page">传统流程 vs 数字化流程</h1>' +
    '<p class="sub">同一件事,纸质/人工流程怎么做,数字化流程怎么改变它。用对照表看信息化价值。</p></div>';
  h += '<input class="field" style="margin:10px 0" placeholder="过滤:如 病历 / 医保 / 安全 / 区域" oninput="HIT.filterCompare(this.value)">';
  h += '<div id="cmp-table">' + compareTable(rows) + '</div><p class="note">说明:对照表是教学抽象,真实医院会因规模、系统和制度不同而不同。</p>';
  HIT.render(h);
};
HIT.filterCompare = function(q) { var rows = window.HIT_COMPARE || []; if (q) { q = q.toLowerCase(); rows = rows.filter(function(r) { return (r.year + r.world + r.china).toLowerCase().indexOf(q) !== -1; }); } var el = document.getElementById('cmp-table'); if (el) el.innerHTML = compareTable(rows); };
function compareTable(rows) { if (!rows.length) return '<p class="empty">没有匹配的节点。</p>'; var esc = HIT.esc, h = '<table><thead><tr><th style="width:7em">主题</th><th>传统/人工流程</th><th>数字化流程</th></tr></thead><tbody>'; for (var i = 0; i < rows.length; i++) { var r = rows[i]; h += '<tr><td><b>' + esc(r.year) + '</b></td><td>' + esc(r.world) + '</td><td>' + esc(r.china) + '</td></tr>'; } return h + '</tbody></table>'; }

HIT.views.terms = function() { var h = '<div class="tool-head"><h1 class="page">术语表</h1><p class="sub">医疗业务与信息化常见术语,大白话解释。课文里点带下划线的词也会弹出同样的卡片。</p></div>'; h += '<div class="searchbox" style="margin:10px 0"><input placeholder="搜索术语..." oninput="HIT.filterTerms(this.value)"></div>'; h += '<ul class="terms" id="term-list">' + termItems(HIT.terms) + '</ul>'; HIT.render(h); };
HIT.filterTerms = function(q) { var list = HIT.terms; if (q) { q = q.toLowerCase(); list = HIT.terms.filter(function(t) { return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1; }); } var el = document.getElementById('term-list'); if (el) el.innerHTML = termItems(list); };
function termItems(list) { if (!list.length) return '<li class="empty">没有匹配的术语。</li>'; var esc = HIT.esc, h = ''; for (var i = 0; i < list.length; i++) { var t = list[i]; h += '<li><span class="term" onclick="HIT.showTermCard(\'' + t.id + '\', this)">' + esc(t.name) + '</span><span class="en">' + esc(t.en || '') + '</span><span class="def">' + esc(t.def) + '</span></li>'; } return h; }
HIT.views.myTerms = function() { var P = HIT.progress(), collected = HIT.terms.filter(function(t) { return P.hasTerm(t.id); }); var h = '<div class="tool-head"><h1 class="page">收藏本</h1><p class="sub">你在课文或术语表里收藏的词,集中在这里复习。</p></div>'; if (!collected.length) h += '<div class="empty-state"><p>还没有收藏术语。读课文时点带下划线的词,卡片里点"收藏术语"即可。</p><a class="btn" href="#/terms">去术语表看看</a></div>'; else h += '<ul class="terms">' + termItems(collected) + '</ul>'; HIT.render(h); };
HIT.views.search = function() { var h = '<div class="tool-head"><h1 class="page">搜索</h1><p class="sub">搜课时标题、关键词与术语。</p></div>'; h += '<div class="searchbox" style="margin:10px 0"><input id="sb" placeholder="输入关键词,如 HIS / DRG / 电子病历 / FHIR" oninput="HIT.doSearch(this.value)" autofocus></div>'; h += '<div id="search-results"></div>'; HIT.render(h); var sb = document.getElementById('sb'); if (sb) sb.focus(); };
HIT.doSearch = function(q) { var el = document.getElementById('search-results'); if (!el) return; if (!q || q.length < 1) { el.innerHTML = ''; return; } var results = HIT.search(q); if (!results.length) { el.innerHTML = '<p class="empty">没有找到匹配内容。</p>'; return; } var esc = HIT.esc, h = ''; for (var i = 0; i < results.length; i++) { var r = results[i]; if (r.type === 'lesson') { var mod = HIT.modules.find(function(m) { return m.id === r.module; }); h += '<div class="result"><div class="crumb">' + (mod ? esc(mod.shortTitle || mod.title) : '') + '</div><a href="#/l/' + r.id + '">' + esc(r.title) + '</a><span class="tag">课时</span></div>'; } else { h += '<div class="result"><a onclick="HIT.showTermCardById(\'' + r.id + '\')" style="cursor:pointer">' + esc(r.title) + '</a><span class="tag">术语</span></div>'; } } el.innerHTML = h; };
HIT.showTermCardById = function(id) { window.location.hash = '#/terms'; setTimeout(function() { HIT.filterTerms(''); }, 30); };
HIT.views.settings = function() { var P = HIT.progress(), prefs = P.getPrefs(), theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'), fs = prefs.fontSize || 'm'; var cfg = (HIT.sync ? HIT.sync.config() : {}); var h = '<div class="tool-head"><h1 class="page">设置</h1></div><div class="card">'; h += '<div class="set-row"><label>主题</label><div class="seg"><button class="' + (theme === 'light' ? 'on' : '') + '" onclick="HIT.setTheme(\'light\')">浅色</button><button class="' + (theme === 'dark' ? 'on' : '') + '" onclick="HIT.setTheme(\'dark\')">深色</button></div></div>'; h += '<div class="set-row"><label>字号</label><div class="seg"><button class="' + (fs === 's' ? 'on' : '') + '" onclick="HIT.setFontSize(\'s\')">小</button><button class="' + (fs === 'm' ? 'on' : '') + '" onclick="HIT.setFontSize(\'m\')">中</button><button class="' + (fs === 'l' ? 'on' : '') + '" onclick="HIT.setFontSize(\'l\')">大</button></div></div></div>';

  /* ── GitHub 进度同步(可选) ── */
  h += '<div class="card"><h3 class="set-title">GitHub 进度同步(可选)</h3>';
  h += '<p class="note">用一个<b>自己的 private 仓库</b>存进度(如 you/progress),fine-grained PAT 只授权该仓库 Contents 读写、建议设 90 天过期。token 只存在本机浏览器,不会进入站点代码仓库。不配置则进度仅存本机,不影响学习。</p>';
  h += '<div class="set-row"><label>仓库</label><input id="syRepo" class="field" placeholder="owner/progress" value="' + HIT.esc(cfg.repo || '') + '"></div>';
  h += '<div class="set-row"><label>分支</label><input id="syBranch" class="field" placeholder="main" value="' + HIT.esc(cfg.branch || 'main') + '"></div>';
  h += '<div class="set-row"><label>Token</label><input id="syToken" class="field" type="password" placeholder="github_pat_…" value="' + HIT.esc(cfg.token || '') + '"></div>';
  h += '<div class="set-row" style="margin-top:12px"><button class="set-btn" id="sySave">保存并立即同步</button><button class="set-btn" id="syPull">只拉取一次</button><button class="set-btn danger" id="syClear">清除 token</button></div>';
  h += '<p class="note" id="syMsg">' + HIT.esc(HIT.sync ? HIT.sync.statusText : '仅本机') + '</p></div>';

  h += '<div class="card"><div class="set-row"><label>学习数据</label><button class="set-btn" onclick="HIT.exportData()">导出进度</button><button class="set-btn danger" onclick="HIT.clearData()">清除数据</button></div><p class="note" style="margin-top:4px">进度只存在本机浏览器(localStorage),不上传任何服务器。换设备可用"导出进度"备份。</p></div>'; HIT.render(h);

  // 同步按钮接线
  function msg(text, cls) {
    var el = document.getElementById('syMsg');
    if (el) { el.textContent = text; el.className = 'note' + (cls ? ' ' + cls : ''); }
  }
  var sySave = document.getElementById('sySave');
  var syPull = document.getElementById('syPull');
  var syClear = document.getElementById('syClear');
  if (sySave) sySave.addEventListener('click', function () {
    if (!HIT.sync) return;
    HIT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!HIT.sync.ready()) { msg('仓库和 token 都要填。', 'bad'); return; }
    msg('同步中…');
    HIT.sync.pullNow().then(function () { return HIT.sync.pushNow(); })
      .then(function (ok) { msg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败:' + HIT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  if (syPull) syPull.addEventListener('click', function () {
    if (!HIT.sync) return;
    msg('拉取中…');
    HIT.sync.pullNow().then(function (ok) { msg(ok ? '已拉取并合并远端进度 ✓' : HIT.sync.statusText, ok ? 'ok' : ''); });
  });
  if (syClear) syClear.addEventListener('click', function () {
    if (!HIT.sync) return;
    HIT.sync.clearToken();
    var tok = document.getElementById('syToken'); if (tok) tok.value = '';
    msg('token 已从本机清除。');
  });
};
HIT.setTheme = function(t) { document.documentElement.dataset.theme = t; HIT.progress().setPref('theme', t); if (HIT.renderShell) HIT.renderShell(); HIT.views.settings(); };
HIT.setFontSize = function(s) { document.documentElement.dataset.fs = s; HIT.progress().setPref('fontSize', s); HIT.views.settings(); };
HIT.exportData = function() { var data = HIT.progress().export(); var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'hit-progress-' + new Date().toISOString().slice(0, 10) + '.json'; a.click(); };
HIT.clearData = function() { if (confirm('确定清除所有学习进度与收藏吗?此操作不可恢复。')) { localStorage.removeItem('hit.progress.v1'); window.location.reload(); } };
