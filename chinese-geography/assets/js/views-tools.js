/* 工具视图:四个互动工具(横跨五时区 / 胡焕庸线 / 河流流域 / 太阳高度·昼长)+ 术语/搜索/设置/模块 */
window.CG = window.CG || {};
CG.views = CG.views || {};

CG._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
CG._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val cr-good">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}
function utcSign(z) { return (z >= 0 ? '+' + z : '' + z); }
function fmtHM(h) { var m = Math.round(h * 60); return Math.floor(m / 60) + ' 小时 ' + (m % 60) + ' 分'; }
function parseHM(t) { var p = t.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); }
function fmtClock(mins) { mins = ((Math.round(mins) % 1440) + 1440) % 1440; var h = Math.floor(mins / 60), m = mins % 60; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; }

/* ===== 工具总页 ===== */
CG.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">中国地理离不开"算":横跨五时区的时间差、胡焕庸线两侧的人口、一条流域能产多少水、太阳高度与昼夜长短。这四个小工具全部在本地浏览器实时运算,<b>边读边算,把抽象的经纬度和比例变成能上手的数</b>。结果均为概念性估算。</p>';

  // 1. 横跨五时区
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◴</span>横跨五时区:地方时换算</h3>';
  html += '<p class="lab-desc">经度每差 15° 地方时差 1 小时(1° 差 4 分钟)。中国横跨约 73°E—135°E,理论上跨五个时区却统一用北京时间。给出两地经度(东经为正、西经为负),算出地方时差;填入参考时刻还能推算另一地的地方时。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>地1 经度（°，东+西−） <input type="number" id="tz-lon1" placeholder="如 135.5(黑龙江抚远)"></label>';
  html += '<label>地2 经度（°，东+西−） <input type="number" id="tz-lon2" placeholder="如 73.5(新疆帕米尔)"></label>';
  html += '<label>地1 参考时刻（可选 hh:mm） <input type="text" id="tz-time" placeholder="如 12:00(北京时间)"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CG.calcTimezone()">换算</button></div>';
  html += '<div id="tz-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 胡焕庸线
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>胡焕庸线:你在哪半壁</h3>';
  html += '<p class="lab-desc">1935 年胡焕庸画出从黑龙江黑河到云南腾冲的一条线:东南半壁约 43% 国土住着约 94% 的人,西北半壁约 57% 国土仅约 6% 的人。选一座城市,看它落在线的哪一侧。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>选一座城市 <select id="hu-city">' +
          '<option value="">请选择…</option>' +
          '<option value="50.2,127.5,黑河">黑河(黑龙江)</option>' +
          '<option value="24.7,98.5,腾冲">腾冲(云南)</option>' +
          '<option value="45.8,126.5,哈尔滨">哈尔滨</option>' +
          '<option value="41.8,123.4,沈阳">沈阳</option>' +
          '<option value="40.8,111.7,呼和浩特">呼和浩特</option>' +
          '<option value="39.9,116.4,北京">北京</option>' +
          '<option value="39.6,118.2,唐山">唐山</option>' +
          '<option value="36.1,103.8,兰州">兰州</option>' +
          '<option value="36.6,101.8,西宁">西宁</option>' +
          '<option value="34.3,108.9,西安">西安</option>' +
          '<option value="31.2,121.5,上海">上海</option>' +
          '<option value="30.6,114.3,武汉">武汉</option>' +
          '<option value="29.6,106.6,重庆">重庆</option>' +
          '<option value="30.7,104.1,成都">成都</option>' +
          '<option value="29.7,91.1,拉萨">拉萨</option>' +
          '<option value="25.0,102.7,昆明">昆明</option>' +
          '<option value="23.1,113.3,广州">广州</option>' +
          '<option value="20.0,110.3,海口">海口</option>' +
          '<option value="43.8,87.6,乌鲁木齐">乌鲁木齐</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CG.calcHuLine()">判定</button></div>';
  html += '<div id="hu-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 河流流域
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∿</span>河流流域:产水估算</h3>';
  html += '<p class="lab-desc">流域像一个集水盘:降水落到集水面积上,扣除蒸发、下渗(由径流系数代表)后汇成河。给出流域面积、年降水量与径流系数,估算这条河一年能产多少水。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>流域面积（万 km²） <input type="number" id="b-area" placeholder="如 180(长江约 180 万 km²)"></label>';
  html += '<label>年降水量（mm） <input type="number" id="b-rain" placeholder="如 1100"></label>';
  html += '<label>径流系数 <select id="b-coef">' +
          '<option value="0.5">湿润多雨区(约 0.5)</option>' +
          '<option value="0.3" selected>半湿润(约 0.3)</option>' +
          '<option value="0.15">半干旱(约 0.15)</option>' +
          '<option value="0.05">干旱(约 0.05)</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CG.calcBasin()">估算</button></div>';
  html += '<div id="b-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 太阳高度·昼长
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☼</span>正午太阳高度·昼长</h3>';
  html += '<p class="lab-desc">给出纬度和太阳直射点纬度(由节气决定),算出当地正午太阳能升多高、白昼有多长。这解释了四季更替、极昼极夜,以及"为什么夏天哈尔滨比广州天黑得晚"。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>当地纬度（°，北+南−） <input type="number" id="sun-lat" placeholder="如 45.8(哈尔滨) 或 23.1(广州)"></label>';
  html += '<label>节气 / 太阳直射点 <select id="sun-decl">' +
          '<option value="23.44">夏至（直射 +23.4°）</option>' +
          '<option value="0" selected>春分 / 秋分（直射 0°）</option>' +
          '<option value="-23.44">冬至（直射 −23.4°）</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CG.calcSun()">计算</button></div>';
  html += '<div id="sun-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为简化模型与概念性估算(忽略大气折射、椭球差异、夏令时与标准时区等),用于建立直觉,不作精确计算或导航依据。</p>';
  html += '</div>';
  CG.render(html);
};

/* ---- 1. 时区 ---- */
CG.calcTimezone = function() {
  var lon1 = CG._num('tz-lon1'), lon2 = CG._num('tz-lon2');
  var t = document.getElementById('tz-time').value.trim();
  var el = document.getElementById('tz-result');
  if (lon1 === null || lon2 === null) { el.innerHTML = '<div class="calc-warn">请填写两地经度(东经为正、西经为负)</div>'; return; }
  if (Math.abs(lon1) > 180 || Math.abs(lon2) > 180) { el.innerHTML = '<div class="calc-warn">经度应在 −180° 到 180° 之间</div>'; return; }
  var dLon = lon2 - lon1, dh = dLon / 15;
  var z1 = Math.round(lon1 / 15), z2 = Math.round(lon2 / 15);
  var rows = '';
  rows += crRow('两地经度差', CG._fix(Math.abs(dLon), 1) + '°', dLon >= 0 ? '地2在地1以东' : '地2在地1以西');
  rows += crRow('地方时差', fmtHM(Math.abs(dh)), '每 15°=1 小时,每 1°=4 分钟');
  rows += crRow('理论时区', 'UTC' + utcSign(z1) + ' · UTC' + utcSign(z2), '经度 ÷ 15 取整');
  if (/^\d{1,2}:\d{2}$/.test(t)) {
    rows += crRow('地1 为 ' + t + ' 时,地2地方时', fmtClock(parseHM(t) + dh * 60), '地2在' + (dLon >= 0 ? '东,时刻更晚' : '西,时刻更早'));
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">这是按经度算的"地方时"。中国虽横跨约五个理论时区,却统一使用东八区北京时间(120°E),所以全国各地钟表同一时刻、只是日出日落早晚不同。</p>';
};

/* ---- 2. 胡焕庸线 ---- */
CG.calcHuLine = function() {
  var sel = document.getElementById('hu-city').value;
  var el = document.getElementById('hu-result');
  if (!sel) { el.innerHTML = '<div class="calc-warn">请选择一座城市</div>'; return; }
  var p = sel.split(',');
  var lat = parseFloat(p[0]), lon = parseFloat(p[1]), name = p[2];
  // 黑河 A(127.5°E,50.2°N) — 腾冲 B(98.5°E,24.7°N);以经度为 x、纬度为 y 做叉积判定象限
  var ax = 127.5, ay = 50.2, bx = 98.5, by = 24.7;
  var dx = bx - ax, dy = by - ay;
  var px = lon - ax, py = lat - ay;
  var cross = dx * py - dy * px;
  var side, hint;
  if (cross > 0) { side = '东南半壁(人口稠密)'; hint = '黑河—腾冲线东南侧'; }
  else if (cross < 0) { side = '西北半壁(地广人稀)'; hint = '黑河—腾冲线西北侧'; }
  else { side = '正好在线上'; hint = '黑河—腾冲线上'; }
  var rows = '';
  rows += crRow('参考点', name + ' (' + CG._fix(lat, 1) + '°N, ' + CG._fix(lon, 1) + '°E)', '所选城市');
  rows += crRow('判定结果', side, hint);
  rows += crRow('胡焕庸线', '黑河 (50.2°N, 127.5°E) — 腾冲 (24.7°N, 98.5°E)', '1935 年提出');
  rows += crRow('东南半壁', '约 43% 国土 · 约 94% 人口', '人口稠密区');
  rows += crRow('西北半壁', '约 57% 国土 · 约 6% 人口', '地广人稀区');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">用平面近似(经度当 x、纬度当 y)做叉积判东南/西北侧,不计地球曲率;人口比例为经典概括(1935 年提出、格局至今稳定),具体数据以最新统计为准。</p>';
};

/* ---- 3. 河流流域 ---- */
CG.calcBasin = function() {
  var areaWan = CG._num('b-area'), rain = CG._num('b-rain');
  var coef = parseFloat(document.getElementById('b-coef').value);
  var el = document.getElementById('b-result');
  if (areaWan === null || rain === null) { el.innerHTML = '<div class="calc-warn">请填写流域面积与年降水量</div>'; return; }
  if (areaWan <= 0 || rain < 0) { el.innerHTML = '<div class="calc-warn">面积与降水应为正数</div>'; return; }
  var area = areaWan * 1e4;                 // km²
  var grossM3 = area * 1e6 * rain * 1e-3;   // 年降水总量 m³
  var runoffM3 = grossM3 * coef;            // 年径流量 m³
  var runoffYi = runoffM3 / 1e8;            // 亿 m³
  var avgQ = runoffM3 / 31557600;           // m³/s(一年约 31557600 秒)
  var rows = '';
  rows += crRow('集水面积', CG._fix(area, 0) + ' km²', areaWan + ' 万 km²');
  rows += crRow('年降水总量', CG._fix(grossM3 / 1e8, 1) + ' 亿 m³', '面积 × 降水量');
  rows += crRow('年径流量', CG._fix(runoffYi, 1) + ' 亿 m³', '降水总量 × 径流系数 ' + coef);
  rows += crRow('折合平均流量', CG._fix(avgQ, 0) + ' m³/s', '年径流量 ÷ 一年秒数');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">流域像一个集水盘:降水落到集水面积上,扣除蒸发、下渗(由径流系数代表)后汇成河。径流系数湿润区约 0.4—0.6、半湿润约 0.2—0.3、干旱区更低。为简化模型,不计年内分配与年际变化。</p>';
};

/* ---- 4. 太阳高度·昼长 ---- */
CG.calcSun = function() {
  var lat = CG._num('sun-lat');
  var decl = parseFloat(document.getElementById('sun-decl').value);
  var el = document.getElementById('sun-result');
  if (lat === null) { el.innerHTML = '<div class="calc-warn">请填写纬度(北纬为正、南纬为负)</div>'; return; }
  if (Math.abs(lat) > 90) { el.innerHTML = '<div class="calc-warn">纬度应在 −90° 到 90° 之间</div>'; return; }
  var H = 90 - Math.abs(lat - decl);
  var toR = Math.PI / 180;
  var cosH0 = -Math.tan(lat * toR) * Math.tan(decl * toR);
  var daylight, note = '';
  if (cosH0 <= -1) { daylight = 24; note = '极昼(太阳整日不落)'; }
  else if (cosH0 >= 1) { daylight = 0; note = '极夜(太阳整日不升)'; }
  else { daylight = 2 * (Math.acos(cosH0) / toR) / 15; }
  var rows = '';
  rows += crRow('正午太阳高度角', H <= 0 ? '太阳不出地平线' : CG._fix(H, 1) + '°', '90° − |纬度 − 直射点|');
  rows += crRow('昼长', CG._fix(daylight, 1) + ' 小时', note || 'cos H₀ = −tan(纬度)·tan(直射点)');
  if (note) rows += crRow('特殊现象', '—', note);
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">简化天文模型,忽略大气折射、太阳视半径与日地距离变化,为概念性估算。直射点:春/秋分≈0°、夏至≈+23.4°、冬至≈−23.4°。可比较哈尔滨(约 46°N)与广州(约 23°N)的夏至昼长,体会"越往北夏天白天越长"。</p>';
};

/* ===== 模块页 ===== */
CG.views.module = function(id) {
  var mod = CG.modules.find(function(m) { return m.id === id; });
  if (!mod) { CG.views.home(); return; }
  var P = CG.progress();
  var lessons = CG.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + CG.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + CG.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = CG.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + CG.esc(title) + '</a>';
    else html += '<span class="title">' + CG.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  CG.render(html);
};

/* ===== 术语 ===== */
CG.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>中国地理名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 季风 / 三级阶梯 / 胡焕庸线 / 秦岭" oninput="CG.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(CG.terms) + '</div></div>';
  CG.render(html);
};
CG.filterTerms = function(q) {
  var filtered = CG.terms;
  if (q) { q = q.toLowerCase();
    filtered = CG.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || t.en.toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + CG.esc(t.name) + ' <span class="term-en">' + CG.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + CG.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + CG.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
CG.views.myTerms = function() {
  var P = CG.progress(); var collected = [];
  for (var i = 0; i < CG.terms.length; i++) if (P.hasTerm(CG.terms[i].id)) collected.push(CG.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  CG.render(html);
};

/* ===== 搜索 ===== */
CG.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 季风 / 长江 / 胡焕庸线 / 秦岭" oninput="CG.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  CG.render(html);
};
CG.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = CG.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + CG.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + CG.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
CG.views.settings = function() {
  var P = CG.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="CG.setTheme(\'dark\')">深色 · 暗夜绿</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="CG.setTheme(\'light\')">浅色 · 海蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="CG.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="CG.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="CG.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="CG.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="CG.clearData()">清除数据</button></div>';
  html += '</div>';
  CG.render(html);
};
CG.setTheme = function(t) { document.documentElement.dataset.theme = t; CG.progress().setPref('theme', t); CG.views.settings(); };
CG.setFontSize = function(s) { document.documentElement.dataset.fs = s; CG.progress().setPref('fontSize', s); CG.views.settings(); };
CG.exportData = function() {
  var data = CG.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cg-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
CG.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('cg.progress.v1');
    window.location.reload();
  }
};
