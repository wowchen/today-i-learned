/* 工具视图：历史工具(时间轴/图鉴/速查/年号换算) + 术语本/搜索/设置 */
window.CHS = window.CHS || {};
CHS.views = CHS.views || {};

/* ==================== 工具首页 ==================== */
CHS.views.tools = function() {
  var html = '<div class="tools-page">';
  html += '<h2>历史工具</h2>';
  html += '<p class="calc-intro">四个辅助工具，边读历史边查 —— 时间轴建立整体感、图鉴认人、速查表定框架、年号换算随时查。' +
          '<b>学术细节存争议处会标注，以现行通说为准</b>。</p>';

  html += toolLink('时间轴', 'T·01', '5000 年全局条带 + 单朝代事件流',
    '<a href="#/timeline" class="calc-btn">打开时间轴</a>');
  html += toolLink('人物图鉴', 'T·02', '约 100 位重要人物卡片墙，按朝代与角色过滤',
    '<a href="#/figures" class="calc-btn">打开图鉴</a>');
  html += toolLink('朝代速查', 'T·03', '14 个朝代/时段一览表：起讫、都城、开国君、亡国君',
    '<a href="#/era-table" class="calc-btn">打开速查</a>');
  html += toolLink('年号换算', 'T·04', '公元 → 朝代/年号/皇帝 · 年号 → 公元（约 200 条年号库）',
    '<a href="#/year-convert" class="calc-btn">打开换算器</a>');

  html += '</div>';
  CHS.render(html);
};

function toolLink(title, num, desc, action) {
  return '<div class="calc-card">' +
    '<h3>' + num + ' · ' + title + '</h3>' +
    '<p class="calc-intro" style="margin:0 0 16px;max-width:none">' + desc + '</p>' +
    action + '</div>';
}

/* ==================== 1. 全局时间轴 ==================== */
CHS.views.timeline = function() {
  var W = 860, H = 64;
  var totalYears = 7000; // 前5000 → 2026
  var offset = 5000;    // 0 = 前5000, 7000 = 2026
  function px(yearBCE) {
    // yearBCE: 负值=公元前, 正值=公元
    var absYear = yearBCE <= 0 ? -yearBCE : yearBCE + 1; // 前5000 = 0, 2026 = 7026
    // 但yearBCE是负值比如-2070表示公元前2070 -> absYear = 2070
    // 我们要从公元前5000开始: -5000 -> 0, -2000 -> 3000, 1 -> 5001, 2026 -> 7026
    // 所以 pos = absYear - (-5000) = absYear + 5000 对于负数
    return (yearBCE <= 0 ? (-yearBCE) : (yearBCE + 5001)) / totalYears * W;
  }

  var html = '<div class="tools-page">';
  html += '<h2>时间轴 · 5000 年中国历史</h2>';
  html += '<p class="calc-intro">全局横轴浏览，下方可查看每个朝代内的事件流。</p>';

  // SVG strip
  html += '<svg class="timeline-strip" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';

  // 每个朝代
  var mods = CHS.modules;
  for (var i = 0; i < mods.length; i++) {
    var m = mods[i];
    var start = parseInt(m.yearStartBC || m.yearStart);
    var endStr = m.yearEnd;
    // 将起讫转为整数年份(公元前负数)
    var y0 = start;
    var y1 = parseInt(endStr);
    if (isNaN(y1)) y1 = 2026; // 至今
    var x0 = px(y0), x1 = px(y1);
    var w = Math.max(x1 - x0, 6); // 最小 6px
    html += '<a class="seg" href="#/m/' + m.id + '">' +
      '<rect x="' + x0 + '" y="8" width="' + w + '" height="' + (H - 16) + '" ' +
      'fill="var(' + m.color + ')" rx="0"/>' +
      '<text x="' + (x0 + w/2) + '" y="' + (H/2 + 4) + '" text-anchor="middle">' +
      m.shortTitle + '</text></a>';
  }

  // BC/AD 刻度
  html += '<text x="0" y="' + (H - 2) + '" class="yr-axis">前5000</text>';
  html += '<text x="' + px(0) + '" y="' + (H - 2) + '" class="yr-axis">前1</text>';
  html += '<text x="' + px(1000) + '" y="' + (H - 2) + '" class="yr-axis">1000</text>';
  html += '<text x="' + px(2026) + '" y="' + (H - 2) + '" class="yr-axis">2026</text>';
  html += '</svg>';

  // 下方事件列表(取当前模块第一个或所有)
  html += '<h3 style="margin-top:28px;font-size:.9rem;font-weight:600">朝代顺序 · 点模块看详情</h3>';
  html += '<ul class="timeline-list">';
  for (var i2 = 0; i2 < mods.length; i2++) {
    var m2 = mods[i2];
    var lid = m2.firstLesson || '';
    var yrLabel = m2.yearStart + (m2.yearEnd ? '–' + m2.yearEnd : '');
    html += '<li><div class="yr"><b>' + pad(i2 + 1) + '</b>' + yrLabel + '</div>' +
      '<a href="#/m/' + m2.id + '">' + CHS.esc(m2.title) + ' · ' + CHS.esc(m2.era) + '</a></li>';
  }
  html += '</ul>';
  html += '<p class="calc-note">年代为约数，学界存争议处(如夏商断代)暂取通说。<br>蓝色虚线仅示意时段长度，不精确到年。</p>';

  html += '</div>';
  CHS.render(html);
};

/* ==================== 2. 人物图鉴 ==================== */
CHS.views.figures = function() {
  var allFigures = window.CHS_FIGURES || [];
  var roles = ['全部'];
  var seen = {};
  for (var i = 0; i < allFigures.length; i++) {
    if (allFigures[i].role && !seen[allFigures[i].role]) {
      seen[allFigures[i].role] = true;
      roles.push(allFigures[i].role);
    }
  }

  var html = '<div class="tools-page">';
  html += '<h2>人物图鉴</h2>';
  html += '<p class="calc-intro">按朝代或角色浏览中国历史重要人物。点击卡片查看生平与关联课时。</p>';

  // dynasty filter chips
  html += '<div class="figures-filter" id="fig-filter">';
  html += '<button class="fil-chip active" data-filter="all" onclick="CHS.filterFigures(\'all\')">全部(' + allFigures.length + ')</button>';
  for (var mi = 0; mi < CHS.modules.length; mi++) {
    var m = CHS.modules[mi];
    var cnt = 0;
    for (var j = 0; j < allFigures.length; j++) {
      if (allFigures[j].dynasty === m.id) cnt++;
    }
    if (cnt > 0) {
      html += '<button class="fil-chip" data-filter="' + m.id + '" onclick="CHS.filterFigures(\'' + m.id + '\')">' +
        m.title + '(' + cnt + ')</button>';
    }
  }
  html += '</div>';

  html += '<div id="fig-grid" class="figures-grid">';
  html += renderFigureGrid(allFigures);
  html += '</div>';
  html += '<div id="fig-detail"></div>';
  html += '</div>';
  CHS.render(html);
};

CHS.filterFigures = function(dynastyId) {
  // 更新 chips
  var chips = document.querySelectorAll('#fig-filter .fil-chip');
  for (var i = 0; i < chips.length; i++) {
    chips[i].classList.toggle('active', chips[i].getAttribute('data-filter') === dynastyId);
  }
  var allFigures = window.CHS_FIGURES || [];
  var filtered = dynastyId === 'all' ? allFigures : allFigures.filter(function(f) { return f.dynasty === dynastyId; });
  document.getElementById('fig-grid').innerHTML = renderFigureGrid(filtered);
  document.getElementById('fig-detail').innerHTML = '';
};

CHS.showFigureDetail = function(figId) {
  var allFigures = window.CHS_FIGURES || [];
  var f = null;
  for (var i = 0; i < allFigures.length; i++) {
    if (allFigures[i].id === figId) { f = allFigures[i]; break; }
  }
  if (!f) return;
  var mod = null;
  for (var m in CHS.modules) if (CHS.modules[m].id === f.dynasty) mod = CHS.modules[m];
  var color = mod ? 'var(' + mod.color + ')' : 'var(--red)';

  var html = '<div class="figure-detail">';
  html += '<h3>' + CHS.esc(f.name) + '</h3>';
  html += '<div class="fd-yr">' + CHS.esc(f.born || '?') + ' – ' + CHS.esc(f.died || '?') + ' · ' + (mod ? mod.title : '') + '</div>';
  html += '<div class="fd-tags"><span class="fd-tag">' + CHS.esc(f.role || '') + '</span></div>';
  html += '<div class="fd-line">' + CHS.esc(f.oneliner || '') + '</div>';
  if (f.key_events && f.key_events.length > 0) {
    html += '<div class="fd-events"><h4>关键事件</h4><ul>';
    for (var j = 0; j < f.key_events.length; j++) html += '<li>' + CHS.esc(f.key_events[j]) + '</li>';
    html += '</ul></div>';
  }
  if (f.related_lessons && f.related_lessons.length > 0) {
    html += '<div class="fd-related">关联课时：';
    for (var k = 0; k < f.related_lessons.length; k++) {
      var rid = f.related_lessons[k];
      html += '<a href="#/l/' + rid + '">' + (CHS.lessons[rid] ? CHS.lessons[rid].title : rid) + '</a>';
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
    for (var m in CHS.modules) if (CHS.modules[m].id === f.dynasty) mod = CHS.modules[m];
    var color = mod ? 'var(' + mod.color + ')' : 'var(--red)';
    html += '<div class="figure-card" onclick="CHS.showFigureDetail(\'' + f.id + '\')">';
    html += '<div class="fc-head"><span class="fc-name">' + CHS.esc(f.name) + '</span>' +
            '<span class="fc-yr">' + CHS.esc(f.born || '') + '–' + CHS.esc(f.died || '') + '</span></div>';
    html += '<div class="fc-dynasty" style="background:' + color + '">' + (mod ? mod.title : f.dynasty) + '</div>';
    html += '<div class="fc-role">' + CHS.esc(f.role || '') + '</div>';
    html += '<div class="fc-line">' + CHS.esc(f.oneliner || '') + '</div>';
    html += '</div>';
  }
  return '<div class="figures-grid">' + html + '</div>';
}

/* ==================== 3. 朝代速查 ==================== */
CHS.views.eraTable = function() {
  var html = '<div class="tools-page">';
  html += '<h2>朝代速查表</h2>';
  html += '<p class="calc-intro">中国历史 14 个朝 / 时段总览。点击模块名进入课时列表。</p>';

  html += '<div style="overflow-x:auto">';
  html += '<table class="era-table">';
  html += '<thead><tr>';
  html += '<th>朝代</th><th>起讫年代</th><th>都城</th><th>开国君</th><th>亡国君</th><th>传位</th><th>一句话</th>';
  html += '</tr></thead><tbody>';
  for (var i = 0; i < CHS.modules.length; i++) {
    var m = CHS.modules[i];
    html += '<tr style="--brand:var(' + m.color + ')">';
    html += '<td class="col-name"><span class="dot"></span>' + CHS.esc(m.title) + '</td>';
    html += '<td class="col-yr">' + CHS.esc(m.yearStart) + (m.yearEnd ? ' – ' + CHS.esc(m.yearEnd) : '') + '</td>';
    html += '<td>' + CHS.esc(m.capital || '—') + '</td>';
    html += '<td>' + CHS.esc(m.founder || '—') + '</td>';
    html += '<td>' + CHS.esc(m.lastRuler || '—') + '</td>';
    html += '<td>' + CHS.esc(m.generations || '—') + '</td>';
    html += '<td class="col-comment">' + CHS.esc(m.oneliner || m.era || '') + '</td>';
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += '</div>';

  html += '<p class="calc-note">通说年份，夏商断代争议处取"夏商周断代工程"结论。都城取主要都城。传位为大致代次，含追封/废帝视情况不计。</p>';
  html += '</div>';
  CHS.render(html);
};

/* ==================== 4. 年号换算 ==================== */
CHS.views.yearConvert = function() {
  var html = '<div class="tools-page">';
  html += '<h2>皇帝 / 年号换算器</h2>';
  html += '<p class="calc-intro">输入公元年份 → 查询当年朝代、年号、在位皇帝。反向输入年号 → 推公元年份。</p>';

  html += '<div class="yr-conv-box">';

  // 方向1：公元→年号
  html += '<div class="yr-conv-col">';
  html += '<h4>公元 → 朝代 / 年号</h4>';
  html += '<div class="calc-inputs">';
  html += '<label>输入年份（支持公元前如 -221） <input type="text" id="yr-ad" placeholder="如 629 或 -221"></label>';
  html += '<label>&nbsp;</label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="CHS.yearToEra()">换算</button>';
  html += '<div id="yr-ad-result" class="yr-out empty">输入年份后这里显示结果</div>';
  html += '</div>';

  // 方向2：年号→公元
  html += '<div class="yr-conv-col">';
  html += '<h4>年号 → 公元</h4>';
  html += '<div class="calc-inputs">';
  html += '<label>年号 + 年次（如"贞观三年"） <input type="text" id="yr-nh" placeholder="如 贞观 或 贞观三年"></label>';
  html += '<label>&nbsp;</label>';
  html += '</div>';
  html += '<button class="calc-btn" onclick="CHS.nhToYear()">换算</button>';
  html += '<div id="yr-nh-result" class="yr-out empty">输入年号后这里显示结果</div>';
  html += '</div>';

  html += '</div>'; // yr-conv-box

  html += '<p class="calc-note" style="margin-top:18px">年号库约 200 条主要年号(西汉至宣统)；未收录年号会提示"未收录"。<br>"某某三年"的算法为 start + (N-1) 年，以格换算记录为准。</p>';
  html += '</div>';
  CHS.render(html);
};

CHS.yearToEra = function() {
  var input = document.getElementById('yr-ad').value.trim();
  var el = document.getElementById('yr-ad-result');
  var year = parseInt(input);
  if (isNaN(year)) { el.innerHTML = '<b>请输入有效年份</b>'; return; }
  if (year < -5000 || year > 2030) { el.innerHTML = '<b>年份超出范围（前5000–2030）</b>'; return; }

  // 找对应朝代
  var foundMod = null;
  for (var i = 0; i < CHS.modules.length; i++) {
    var m = CHS.modules[i];
    var start = parseInt(m.yearStartBC || m.yearStart);
    var end = parseInt(m.yearEnd);
    if (isNaN(end)) end = 2026;
    if ((year < 0 && start <= year) || (year >= 0 && start <= year && year <= end)) {
      foundMod = m;
      break;
    }
  }

  // 找年号
  var nianHao = window.CHS_NIANHAO || [];
  var matchedNH = null;
  for (var j = 0; j < nianHao.length; j++) {
    var nh = nianHao[j];
    if (year >= nh.start && year <= nh.end) {
      if (!matchedNH || nh.start > matchedNH.start) matchedNH = nh;
    }
  }

  var lines = [];
  if (foundMod) {
    lines.push('<b>' + foundMod.title + '</b>');
    if (foundMod.era) lines.push(foundMod.era);
  } else {
    lines.push('该年份不在已收录的 14 个时段范围内');
  }

  if (matchedNH) {
    lines.push('年号：<b>' + matchedNH.nh + '</b>（' + matchedNH.emperor + ' · ' + matchedNH.dynasty + '）');
    lines.push('纪年：' + matchedNH.nh + ' ' + (year - matchedNH.start + 1) + ' 年');
  } else {
    if (foundMod) lines.push('该年份无具体年号记录（公元以前或时段内年号未收录）');
  }

  var now = new Date().getFullYear();
  var diff = year <= 0 ? (now + Math.abs(year) - 1) : (now - year);
  lines.push('距今：约 <b>' + diff + '</b> 年');

  el.innerHTML = lines.join('<br>');
  el.className = 'yr-out';
};

CHS.nhToYear = function() {
  var input = document.getElementById('yr-nh').value.trim();
  var el = document.getElementById('yr-nh-result');
  if (!input) { el.innerHTML = '<b>请输入年号</b>'; return; }

  // 解析 "贞观三年" → nh="贞观", yearOffset=2(3-1)
  var match = input.match(/^([^\d]+?)([一二三四五六七八九十\d]+)年?$/);
  var nhName, offset = 0;
  if (match) {
    nhName = match[1];
    var numStr = match[2];
    // 中文数字→阿拉伯
    var cnNum = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10};
    offset = cnNum[numStr] || parseInt(numStr) || 0;
    if (offset > 0) offset -= 1; // "三年" → 2年偏移
  } else {
    nhName = input;
  }

  var nianHao = window.CHS_NIANHAO || [];
  var result = null;
  for (var i = 0; i < nianHao.length; i++) {
    if (nianHao[i].nh === nhName) { result = nianHao[i]; break; }
  }

  if (!result) {
    el.innerHTML = '<b>年号 "' + CHS.esc(nhName) + '" 未收录</b>' +
      '<br>目前约收录 200 条主要年号（西汉至宣统）。可尝试只输入年号名（不加年次）。';
    el.className = 'yr-out';
    return;
  }

  var year = result.start + offset;
  var lines = [];
  lines.push('<b>' + result.nh + '</b>');
  if (offset > 0) lines.push('第 ' + (offset + 1) + ' 年');
  lines.push('朝代：' + result.dynasty + ' · ' + result.emperor);
  lines.push('对应公元：<b>' + year + ' 年</b>');
  if (offset === 0) lines.push('起始于 ' + result.start + ' 年');

  el.innerHTML = lines.join('<br>');
  el.className = 'yr-out';
};

/* ==================== 模块页 ==================== */
CHS.views.module = function(id) {
  var mod = null;
  for (var mi = 0; mi < CHS.modules.length; mi++) {
    if (CHS.modules[mi].id === id) { mod = CHS.modules[mi]; break; }
  }
  if (!mod) { CHS.views.home(); return; }
  var P = CHS.progress();

  var lessons = [];
  for (var pi = 0; pi < CHS.path.length; pi++) {
    if (CHS.path[pi].indexOf(id + '/') === 0) lessons.push(CHS.path[pi]);
  }

  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + CHS.esc(mod.title) + '</h2>';
  if (mod.era) html += '<div class="module-era">' + CHS.esc(mod.era) + ' · ' + CHS.esc(mod.yearStart) +
    (mod.yearEnd ? ' – ' + CHS.esc(mod.yearEnd) : '') + '</div>';
  html += '<p class="module-desc">' + CHS.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i];
    var l = CHS.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid);
    html += '<li class="' + (read ? 'read' : '') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    html += '<a href="#/l/' + lid + '">' + CHS.esc(title) + '</a>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  CHS.render(html);
};

/* ==================== 术语本 / 搜索 / 设置(沿用以太坊) ==================== */
CHS.views.terms = function() {
  var P = CHS.progress();
  var html = '<div class="tools-page">';
  html += '<h2>术语表</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语..." oninput="CHS.filterTerms(this.value)">';
  html += '<div id="term-list">';
  html += renderTermList(CHS.terms);
  html += '</div></div>';
  CHS.render(html);
};

CHS.filterTerms = function(q) {
  var filtered = CHS.terms;
  if (q) {
    q = q.toLowerCase();
    filtered = CHS.terms.filter(function(t) {
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
    html += '<div class="term-name">' + CHS.esc(t.name) + ' <span class="term-en">' + CHS.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + CHS.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + CHS.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

CHS.views.myTerms = function() {
  var P = CHS.progress();
  var collected = [];
  for (var i = 0; i < CHS.terms.length; i++) {
    if (P.hasTerm(CHS.terms[i].id)) collected.push(CHS.terms[i]);
  }
  var html = '<div class="tools-page">';
  html += '<h2>我的术语本 (' + collected.length + ')</h2>';
  if (collected.length === 0) {
    html += '<p class="empty-hint">还没有收藏术语。在课时中点击术语即可收藏。</p>';
  } else {
    html += renderTermList(collected);
  }
  html += '</div>';
  CHS.render(html);
};

CHS.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词..." oninput="CHS.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div>';
  html += '</div>';
  CHS.render(html);
};

CHS.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!el) return;
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = CHS.search(q);
  if (results.length === 0) {
    el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>';
    return;
  }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') {
      html += '<li><a href="#/l/' + r.id + '">' + CHS.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    } else {
      html += '<li><span class="search-term">' + CHS.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
    }
  }
  html += '</ul>';
  el.innerHTML = html;
};

CHS.views.settings = function() {
  var P = CHS.progress();
  var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';

  var html = '<div class="tools-page">';
  html += '<h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="CHS.setTheme(\'dark\')">深色</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="CHS.setTheme(\'light\')">浅色</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="CHS.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="CHS.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="CHS.setFontSize(\'l\')">大</button>';
  html += '</div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="CHS.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="CHS.clearData()">清除数据</button>';
  html += '</div>';
  html += '</div>';
  CHS.render(html);
};

CHS.setTheme = function(t) {
  document.documentElement.dataset.theme = t;
  CHS.progress().setPref('theme', t);
  CHS.views.settings();
};

CHS.setFontSize = function(s) {
  document.documentElement.dataset.fs = s;
  CHS.progress().setPref('fontSize', s);
  CHS.views.settings();
};

CHS.exportData = function() {
  var data = CHS.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'chs-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};

CHS.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('chs.progress.v1');
    window.location.reload();
  }
};

function pad(n) { return n < 10 ? '0' + n : '' + n; }