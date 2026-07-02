/* 工具视图:四个天文互动工具(行星体重秤 / 宇宙距离换算 / 开普勒第三定律 / 史瓦西半径)+ 术语/搜索/设置/模块 */
window.AST = window.AST || {};
AST.views = AST.views || {};

AST._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
AST._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val cr-good">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}
/* 大数友好显示:km 量级过万用科学计数或万/亿 */
function big(n) {
  if (n === 0) return '0';
  var a = Math.abs(n);
  if (a >= 1e9) return n.toExponential(4);
  if (a >= 1e5) return n.toExponential(3);
  if (a >= 1000) return AST._fix(n, 0);
  if (a >= 1) return AST._fix(n, 3);
  if (a >= 0.001) return AST._fix(n, 5);
  return n.toExponential(3);
}

/* ===== 工具总页 ===== */
AST.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">天文离不开"算"与"换":换颗行星体重变了多少、把光年换算成秒差距、由轨道推周期、给一个质量算黑洞半径。这四个小工具全部在本地浏览器实时运算,<b>边读边算,把宇宙的尺度变成能上手的数</b>。结果均为概念性估算,用于建立直觉。</p>';

  // 1. 行星体重秤
  html += '<div class="calc-card">';
  html += '<h3><span class="g">○</span>行星体重秤</h3>';
  html += '<p class="lab-desc">体重由表面重力决定。输入你在地球上的体重,选一个天体,看你在那里的体重是多少——木星上重得多,月球上只有六分之一。这里用各天体表面重力相对地球的比值(教学概数)。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>地球体重（kg） <input type="number" id="pw-w" placeholder="如 65"></label>';
  html += '<label>选一个天体 <select id="pw-body">' +
          '<option value="0.38|水星">水星</option>' +
          '<option value="0.91|金星">金星</option>' +
          '<option value="1.00|地球">地球</option>' +
          '<option value="0.38|火星">火星</option>' +
          '<option value="2.34|木星">木星</option>' +
          '<option value="1.06|土星">土星</option>' +
          '<option value="0.92|天王星">天王星</option>' +
          '<option value="1.19|海王星">海王星</option>' +
          '<option value="0.165|月球">月球</option>' +
          '<option value="27.9|太阳">太阳（表面）</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AST.calcPlanetWeight()">称一称</button></div>';
  html += '<div id="pw-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 宇宙距离换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">↔</span>宇宙距离换算</h3>';
  html += '<p class="lab-desc">宇宙的尺度过大,常用不同单位:天文单位(AU,地日距)、光年(ly,光走一年)、秒差距(pc,视差 1 角秒对应的距离)。输入一个数值并选其单位,换算成其余三者。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>距离数值 <input type="number" id="dc-v" placeholder="如 1 或 4.2"></label>';
  html += '<label>原单位 <select id="dc-u">' +
          '<option value="km">千米 km</option>' +
          '<option value="au" selected>天文单位 AU</option>' +
          '<option value="ly">光年 ly</option>' +
          '<option value="pc">秒差距 pc</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AST.calcDistance()">换算</button></div>';
  html += '<div id="dc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 开普勒第三定律
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∿</span>开普勒第三定律</h3>';
  html += '<p class="lab-desc">轨道半长轴 a 的立方与周期 T 的平方成正比:T² = a³ / M(以太阳质量、AU、年为单位)。输入半长轴与中心天体质量,得出行星公转周期。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>半长轴 a（AU） <input type="number" id="kp-a" placeholder="如 1 或 5.2"></label>';
  html += '<label>中心质量 M（太阳质量） <input type="number" id="kp-m" placeholder="如 1"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AST.calcKepler()">计算周期</button></div>';
  html += '<div id="kp-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 史瓦西半径
  html += '<div class="calc-card">';
  html += '<h3><span class="g">●</span>史瓦西半径</h3>';
  html += '<p class="lab-desc">把一个质量压缩到它的史瓦西半径以内,就会成为黑洞:Rs = 2GM / c²。输入质量(太阳质量或千克),算出对应的史瓦西半径。太阳质量约得 2.95 千米。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>质量数值 <input type="number" id="bh-v" placeholder="如 1 或 10"></label>';
  html += '<label>质量单位 <select id="bh-u">' +
          '<option value="msun" selected>太阳质量 M☉</option>' +
          '<option value="kg">千克 kg</option>' +
          '<option value="earth">地球质量 M⊕</option>' +
          '</select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AST.calcSchwarzschild()">计算半径</button></div>';
  html += '<div id="bh-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为简化模型与概念性估算。重力比值、单位换算取常用教学概数(1 AU ≈ 1.496×10⁸ km,1 ly ≈ 9.461×10¹² km,1 pc ≈ 3.086×10¹³ km ≈ 3.262 ly);开普勒公式适用于中心质量远大于行星的近似;史瓦西半径为不旋转黑洞的球对称解。</p>';
  html += '</div>';
  AST.render(html);
};

/* ---- 1. 行星体重秤 ---- */
AST.calcPlanetWeight = function() {
  var w = AST._num('pw-w');
  var sel = document.getElementById('pw-body').value;
  var el = document.getElementById('pw-result');
  if (w === null) { el.innerHTML = '<div class="calc-warn">请填写地球体重</div>'; return; }
  if (w <= 0) { el.innerHTML = '<div class="calc-warn">体重应为正数</div>'; return; }
  var p = sel.split('|');
  var ratio = parseFloat(p[0]), body = p[1];
  var wBody = w * ratio;
  var rows = '';
  rows += crRow('天体', body, '所选');
  rows += crRow('表面重力比', ratio + ' g⊕', '相对地球');
  rows += crRow('你的体重', AST._fix(wBody, 2) + ' kg', '地球体重 × ' + ratio);
  rows += crRow('相当于地球', (ratio * 100).toFixed(0) + '%', '体重比例');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">体重是质量受重力作用产生的力(F=mg)。同一质量在不同天体表面"重"不同,因为表面重力 g 不同:木星巨大质量带来约 2.34 倍重力,月球只有约 0.165 倍。气态巨行星的"表面"通常指云顶某一压强处。</p>';
};

/* ---- 2. 距离换算 ---- */
AST.calcDistance = function() {
  var v = AST._num('dc-v');
  var u = document.getElementById('dc-u').value;
  var el = document.getElementById('dc-result');
  if (v === null) { el.innerHTML = '<div class="calc-warn">请填写距离数值</div>'; return; }
  if (v < 0) { el.innerHTML = '<div class="calc-warn">距离应为非负数</div>'; return; }
  var AU = 1.496e8, LY = 9.461e12, PC = 3.086e13; // 均以 km 为基准
  var km;
  if (u === 'km') km = v;
  else if (u === 'au') km = v * AU;
  else if (u === 'ly') km = v * LY;
  else km = v * PC;
  var rows = '';
  rows += crRow('千米 km', big(km), '基准');
  rows += crRow('天文单位 AU', big(km / AU), '地日距 ≈ 1.496×10⁸ km');
  rows += crRow('光年 ly', big(km / LY), '光一年 ≈ 9.461×10¹² km');
  rows += crRow('秒差距 pc', big(km / PC), '≈ 3.262 光年');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">天文单位适合太阳系尺度(海王星约 30 AU);光年与秒差距适合恒星与星系尺度(比邻星约 4.24 ly,仙女座星系约 78 万 pc)。秒差距源于视差测距:1 pc 是周年视差恰为 1 角秒的距离。</p>';
};

/* ---- 3. 开普勒第三定律 ---- */
AST.calcKepler = function() {
  var a = AST._num('kp-a'), m = AST._num('kp-m');
  var el = document.getElementById('kp-result');
  if (a === null || m === null) { el.innerHTML = '<div class="calc-warn">请填写半长轴与中心质量</div>'; return; }
  if (a <= 0 || m <= 0) { el.innerHTML = '<div class="calc-warn">数值应为正数</div>'; return; }
  var T = Math.sqrt((a * a * a) / m); // 年
  var rows = '';
  rows += crRow('半长轴 a', AST._fix(a, 3) + ' AU', '输入');
  rows += crRow('中心质量 M', AST._fix(m, 3) + ' M☉', '输入');
  rows += crRow('公转周期 T', big(T) + ' 年', 'T = √(a³/M)');
  if (T < 1) rows += crRow('换算', AST._fix(T * 365.25, 1) + ' 天', '× 365.25');
  else rows += crRow('换算', big(T * 365.25) + ' 天', '× 365.25');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">这是开普勒第三定律在"中心质量远大于行星"近似下的形式:以 AU、太阳质量、年为单位时 T² = a³/M。例如地球(a=1,M=1)得 T=1 年;木星(a≈5.2,M=1)得约 11.9 年。若行星质量不可忽略,公式需加修正项。</p>';
};

/* ---- 4. 史瓦西半径 ---- */
AST.calcSchwarzschild = function() {
  var v = AST._num('bh-v'), u = document.getElementById('bh-u').value;
  var el = document.getElementById('bh-result');
  if (v === null) { el.innerHTML = '<div class="calc-warn">请填写质量</div>'; return; }
  if (v <= 0) { el.innerHTML = '<div class="calc-warn">质量应为正数</div>'; return; }
  var G = 6.674e-11, c = 2.998e8, Msun = 1.989e30, Mearth = 5.972e24;
  var kg;
  if (u === 'msun') kg = v * Msun;
  else if (u === 'kg') kg = v;
  else kg = v * Mearth;
  var rs = 2 * G * kg / (c * c); // 米
  var rows = '';
  rows += crRow('质量', big(kg) + ' kg', u === 'msun' ? v + ' M☉' : (u === 'earth' ? v + ' M⊕' : '输入'));
  rows += crRow('史瓦西半径', big(rs) + ' m', 'Rs = 2GM/c²');
  rows += crRow('换算', big(rs / 1000) + ' km', '÷ 1000');
  if (rs > 1000) rows += crRow('换算', big(rs / 1000) + ' km', '公里级以上');
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">这是不旋转、无电荷黑洞(史瓦西黑洞)的事件视界半径。把太阳压缩到约 2.95 km、把地球压缩到约 8.9 mm,它们就会成为黑洞。质量越大,史瓦西半径成正比增大:百万太阳质量的超大质量黑洞半径约 295 万 km。</p>';
};

/* ===== 模块页 ===== */
AST.views.module = function(id) {
  var mod = AST.modules.find(function(m) { return m.id === id; });
  if (!mod) { AST.views.home(); return; }
  var P = AST.progress();
  var lessons = AST.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + AST.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + AST.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = AST.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + AST.esc(title) + '</a>';
    else html += '<span class="title">' + AST.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  AST.render(html);
};

/* ===== 术语 ===== */
AST.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>天文与宇宙名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 光年 / 红移 / 黑洞" oninput="AST.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(AST.terms) + '</div></div>';
  AST.render(html);
};
AST.filterTerms = function(q) {
  var filtered = AST.terms;
  if (q) { q = q.toLowerCase();
    filtered = AST.terms.filter(function(t) {
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
    html += '<div class="term-name">' + AST.esc(t.name) + ' <span class="term-en">' + AST.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + AST.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + AST.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
AST.views.myTerms = function() {
  var P = AST.progress(); var collected = [];
  for (var i = 0; i < AST.terms.length; i++) if (P.hasTerm(AST.terms[i].id)) collected.push(AST.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  AST.render(html);
};

/* ===== 搜索 ===== */
AST.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 黑洞 / 宇宙膨胀 / 造父变星" oninput="AST.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  AST.render(html);
};
AST.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AST.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + AST.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + AST.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
AST.views.settings = function() {
  var P = AST.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="AST.setTheme(\'dark\')">深色 · 星海金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="AST.setTheme(\'light\')">浅色 · 靛蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="AST.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="AST.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="AST.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="AST.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="AST.clearData()">清除数据</button></div>';
  html += '</div>';
  AST.render(html);
};
AST.setTheme = function(t) { document.documentElement.dataset.theme = t; AST.progress().setPref('theme', t); AST.views.settings(); };
AST.setFontSize = function(s) { document.documentElement.dataset.fs = s; AST.progress().setPref('fontSize', s); AST.views.settings(); };
AST.exportData = function() {
  var data = AST.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ast-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AST.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('ast.progress.v1');
    window.location.reload();
  }
};
