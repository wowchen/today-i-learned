/* 工具视图:四个互动工具(时区换算 / 大圆距离 / 比例尺 / 太阳高度·昼长)+ 术语/搜索/设置/模块 */
window.GEO = window.GEO || {};
GEO.views = GEO.views || {};

GEO._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
GEO._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val cr-good">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}
function utcSign(z) { return (z >= 0 ? '+' + z : '' + z); }
function dirName(b) {
  var names = ['正北', '东北', '正东', '东南', '正南', '西南', '正西', '西北', '正北'];
  return names[Math.round(b / 45)];
}
function fmtHM(h) { var m = Math.round(h * 60); return Math.floor(m / 60) + ' 小时 ' + (m % 60) + ' 分'; }
function parseHM(t) { var p = t.split(':'); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); }
function fmtClock(mins) { mins = ((Math.round(mins) % 1440) + 1440) % 1440; var h = Math.floor(mins / 60), m = mins % 60; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; }

/* ===== 工具总页 ===== */
GEO.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">地理离不开"算":定位置、量距离、读地图、看日影。这四个小工具全部在你本地浏览器里实时运算,<b>边读边算,把抽象的经纬度和比例尺变成能上手的数</b>。结果均为概念性估算。</p>';

  // 1. 时区换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◷</span>时区与地方时换算</h3>';
  html += '<p class="lab-desc">经度每差 15° 地方时差 1 小时(1° 差 4 分钟)。给出两地经度(东经为正、西经为负),算出地方时差;填入参考时刻还能推算另一地的地方时。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>地1 经度（°，东+西−） <input type="number" id="tz-lon1" placeholder="如 116.4(北京)"></label>';
  html += '<label>地2 经度（°，东+西−） <input type="number" id="tz-lon2" placeholder="如 -74(纽约)"></label>';
  html += '<label>地1 参考时刻（可选 hh:mm） <input type="text" id="tz-time" placeholder="如 12:00"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="GEO.calcTimezone()">换算</button></div>';
  html += '<div id="tz-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 大圆距离
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊿</span>两点大圆距离</h3>';
  html += '<p class="lab-desc">地球上两点之间沿地表的最短路径叫"大圆"。用半正矢(haversine)公式由经纬度算出距离与初始方位角 —— 这也是洲际航线看着"绕弯"的原因。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>地1 纬度（°，北+南−） <input type="number" id="d-lat1" placeholder="如 39.9"></label>';
  html += '<label>地1 经度（°，东+西−） <input type="number" id="d-lon1" placeholder="如 116.4"></label>';
  html += '<label>地2 纬度（°，北+南−） <input type="number" id="d-lat2" placeholder="如 40.7"></label>';
  html += '<label>地2 经度（°，东+西−） <input type="number" id="d-lon2" placeholder="如 -74"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="GEO.calcDistance()">计算</button></div>';
  html += '<div id="d-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 比例尺换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▦</span>比例尺换算</h3>';
  html += '<p class="lab-desc">比例尺 1:N 表示图上 1 单位等于实地 N 单位。填入分母 N 和"图上距离"或"实地距离"其一,自动换算另一个。比例尺越大(N 越小),范围越小越详细。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>比例尺分母 N（1:N） <input type="number" id="s-n" placeholder="如 50000"></label>';
  html += '<label>图上距离（cm，可选） <input type="number" id="s-map" placeholder="如 6"></label>';
  html += '<label>实地距离（km，可选） <input type="number" id="s-real" placeholder="如 3"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="GEO.calcScale()">换算</button></div>';
  html += '<div id="s-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 太阳高度·昼长
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☼</span>正午太阳高度·昼长</h3>';
  html += '<p class="lab-desc">给出纬度和太阳直射点纬度(由节气决定),算出当地正午太阳能升多高、白昼有多长。这解释了四季更替、极昼极夜与"为什么越往北夏天白天越长"。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>当地纬度（°，北+南−） <input type="number" id="sun-lat" placeholder="如 39.9"></label>';
  html += '<label>节气 / 太阳直射点 <select id="sun-decl">' +
          '<option value="23.44">夏至（直射 +23.4°）</option>' +
          '<option value="0" selected>春分 / 秋分（直射 0°）</option>' +
          '<option value="-23.44">冬至（直射 −23.4°）</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="GEO.calcSun()">计算</button></div>';
  html += '<div id="sun-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为简化模型与概念性估算(忽略大气折射、椭球差异、夏令时与标准时区等),用于建立直觉,不作精确计算或导航依据。</p>';
  html += '</div>';
  GEO.render(html);
};

/* ---- 1. 时区 ---- */
GEO.calcTimezone = function() {
  var lon1 = GEO._num('tz-lon1'), lon2 = GEO._num('tz-lon2');
  var t = document.getElementById('tz-time').value.trim();
  var el = document.getElementById('tz-result');
  if (lon1 === null || lon2 === null) { el.innerHTML = '<div class="calc-warn">请填写两地经度(东经为正、西经为负)</div>'; return; }
  if (Math.abs(lon1) > 180 || Math.abs(lon2) > 180) { el.innerHTML = '<div class="calc-warn">经度应在 −180° 到 180° 之间</div>'; return; }
  var dLon = lon2 - lon1, dh = dLon / 15;
  var z1 = Math.round(lon1 / 15), z2 = Math.round(lon2 / 15);
  var rows = '';
  rows += crRow('两地经度差', GEO._fix(Math.abs(dLon), 1) + '°', dLon >= 0 ? '地2在地1以东' : '地2在地1以西');
  rows += crRow('地方时差', fmtHM(Math.abs(dh)), '每 15°=1 小时,每 1°=4 分钟');
  rows += crRow('理论时区', 'UTC' + utcSign(z1) + ' · UTC' + utcSign(z2), '经度 ÷ 15 取整');
  if (/^\d{1,2}:\d{2}$/.test(t)) {
    rows += crRow('地1 为 ' + t + ' 时,地2地方时', fmtClock(parseHM(t) + dh * 60), '地2在' + (dLon >= 0 ? '东,时刻更晚' : '西,时刻更早'));
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">这是按经度算的"地方时"。各国实际使用统一的标准时区(法定时间),与地方时可能差几十分钟,部分地区还有夏令时。</p>';
};

/* ---- 2. 大圆距离 ---- */
GEO.calcDistance = function() {
  var la1 = GEO._num('d-lat1'), lo1 = GEO._num('d-lon1'), la2 = GEO._num('d-lat2'), lo2 = GEO._num('d-lon2');
  var el = document.getElementById('d-result');
  if (la1 === null || lo1 === null || la2 === null || lo2 === null) { el.innerHTML = '<div class="calc-warn">请完整填写两点的纬度与经度</div>'; return; }
  if (Math.abs(la1) > 90 || Math.abs(la2) > 90) { el.innerHTML = '<div class="calc-warn">纬度应在 −90° 到 90° 之间</div>'; return; }
  var R = 6371, toR = Math.PI / 180;
  var dLa = (la2 - la1) * toR, dLo = (lo2 - lo1) * toR;
  var a = Math.pow(Math.sin(dLa / 2), 2) + Math.cos(la1 * toR) * Math.cos(la2 * toR) * Math.pow(Math.sin(dLo / 2), 2);
  var dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var y = Math.sin(dLo) * Math.cos(la2 * toR);
  var x = Math.cos(la1 * toR) * Math.sin(la2 * toR) - Math.sin(la1 * toR) * Math.cos(la2 * toR) * Math.cos(dLo);
  var brg = (Math.atan2(y, x) / toR + 360) % 360;
  var rows = '';
  rows += crRow('大圆距离', GEO._fix(dist, 1) + ' km', '沿球面的最短路径');
  rows += crRow('约合', GEO._fix(dist / 40075 * 100, 2) + '% 赤道周长', '赤道周长约 40075 km');
  rows += crRow('初始方位角', GEO._fix(brg, 1) + '°', dirName(brg) + '(从地1出发)');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">用 haversine 公式按理想球面计算,与椭球真实值略有出入。大圆是两点间地表最短路径,所以远程航线在平面地图上看着"绕弯"。</p>';
};

/* ---- 3. 比例尺 ---- */
GEO.calcScale = function() {
  var N = GEO._num('s-n'), mapcm = GEO._num('s-map'), realkm = GEO._num('s-real');
  var el = document.getElementById('s-result');
  if (N === null || N <= 0) { el.innerHTML = '<div class="calc-warn">请填写比例尺分母 N(如 1:50000 填 50000)</div>'; return; }
  var rows = crRow('比例尺', '1 : ' + GEO._fix(N, 0), '图上 1 = 实地 ' + GEO._fix(N, 0));
  if (mapcm !== null) {
    var realCm = N * mapcm, km = realCm / 100000;
    rows += crRow('图上 ' + mapcm + ' cm 对应实地', km >= 1 ? GEO._fix(km, 2) + ' km' : GEO._fix(realCm / 100, 1) + ' m', 'N × 图上距离');
  } else if (realkm !== null) {
    rows += crRow('实地 ' + realkm + ' km 对应图上', GEO._fix(realkm * 100000 / N, 2) + ' cm', '实地距离 ÷ N');
  }
  rows += crRow('图上 1 cm =', N / 100000 >= 1 ? GEO._fix(N / 100000, 3) + ' km' : GEO._fix(N / 100, 0) + ' m', '1 cm × N');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">比例尺越大(分母 N 越小),表示的范围越小、内容越详细 —— 1:1万 比 1:100万"大"。</p>';
};

/* ---- 4. 太阳高度·昼长 ---- */
GEO.calcSun = function() {
  var lat = GEO._num('sun-lat');
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
  rows += crRow('正午太阳高度角', H <= 0 ? '太阳不出地平线' : GEO._fix(H, 1) + '°', '90° − |纬度 − 直射点|');
  rows += crRow('昼长', GEO._fix(daylight, 1) + ' 小时', note || 'cos H₀ = −tan(纬度)·tan(直射点)');
  if (note) rows += crRow('特殊现象', '—', note);
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">简化天文模型,忽略大气折射、太阳视半径与日地距离变化,为概念性估算。直射点:春/秋分≈0°、夏至≈+23.4°、冬至≈−23.4°。</p>';
};

/* ===== 模块页 ===== */
GEO.views.module = function(id) {
  var mod = GEO.modules.find(function(m) { return m.id === id; });
  if (!mod) { GEO.views.home(); return; }
  var P = GEO.progress();
  var lessons = GEO.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + GEO.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + GEO.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = GEO.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + GEO.esc(title) + '</a>';
    else html += '<span class="title">' + GEO.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  GEO.render(html);
};

/* ===== 术语 ===== */
GEO.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>地理名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 季风 / 板块 / 经纬度 / 城市化" oninput="GEO.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(GEO.terms) + '</div></div>';
  GEO.render(html);
};
GEO.filterTerms = function(q) {
  var filtered = GEO.terms;
  if (q) { q = q.toLowerCase();
    filtered = GEO.terms.filter(function(t) {
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
    html += '<div class="term-name">' + GEO.esc(t.name) + ' <span class="term-en">' + GEO.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + GEO.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + GEO.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
GEO.views.myTerms = function() {
  var P = GEO.progress(); var collected = [];
  for (var i = 0; i < GEO.terms.length; i++) if (P.hasTerm(GEO.terms[i].id)) collected.push(GEO.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  GEO.render(html);
};

/* ===== 搜索 ===== */
GEO.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 季风 / 洋流 / 城市化 / 板块" oninput="GEO.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  GEO.render(html);
};
GEO.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = GEO.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + GEO.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + GEO.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
GEO.views.settings = function() {
  var P = GEO.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="GEO.setTheme(\'dark\')">深色 · 暗夜绿</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="GEO.setTheme(\'light\')">浅色 · 海蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="GEO.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="GEO.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="GEO.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="GEO.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="GEO.clearData()">清除数据</button></div>';
  html += '</div>';
  GEO.render(html);
};
GEO.setTheme = function(t) { document.documentElement.dataset.theme = t; GEO.progress().setPref('theme', t); GEO.views.settings(); };
GEO.setFontSize = function(s) { document.documentElement.dataset.fs = s; GEO.progress().setPref('fontSize', s); GEO.views.settings(); };
GEO.exportData = function() {
  var data = GEO.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'geo-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
GEO.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('geo.progress.v1');
    window.location.reload();
  }
};
