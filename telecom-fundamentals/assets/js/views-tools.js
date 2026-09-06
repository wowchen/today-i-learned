/* 工具视图:四个通信互动工具(dBm 换算 / 光链路预算 / 速率等级速查 / 纤芯配色)+ 术语/搜索/设置/模块 */
window.TCM = window.TCM || {};
TCM.views = TCM.views || {};

TCM._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
TCM._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ===== 工具总页 ===== */
TCM.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">光传输离不开"查"与"算":功率换算、链路预算、速率对照、纤芯配色。这四个小工具全部在本地浏览器运行，<b>边学边算，把工程直觉练成肌肉记忆</b>。</p>';

  // 1. dBm 换算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">dB</span>dBm ↔ mW 换算</h3>';
  html += '<p class="lab-desc">dBm 是光功率的对数单位。输入任一侧，另一侧自动算出。锚点：0dBm=1mW，每 +3dB 翻倍、每 −10dB 剩十分之一。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>dBm <input type="number" id="db-val" step="0.1" value="0" oninput="TCM.dbmConv(\'db\')"></label>';
  html += '<label>mW <input type="number" id="mw-val" step="0.001" value="1" oninput="TCM.dbmConv(\'mw\')"></label>';
  html += '</div>';
  html += '<div id="db-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 光链路预算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">λ</span>光链路预算计算器</h3>';
  html += '<p class="lab-desc">收光 = 发光 − 光纤衰耗 − 熔接损耗 − 活动接头损耗。判断：收光 ≥ 灵敏度 + 余量 则链路可靠。经验值：光纤 0.25dB/km@1550、熔接 0.05dB/个、法兰 0.5dB/个、余量 ≥3dB。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>发光功率 dBm <input type="number" id="lb-tx" step="0.1" value="4"></label>';
  html += '<label>距离 km <input type="number" id="lb-km" step="0.1" value="40"></label>';
  html += '<label>衰耗 dB/km <input type="number" id="lb-att" step="0.01" value="0.25"></label>';
  html += '<label>熔接 个 <input type="number" id="lb-splice" step="1" value="10"></label>';
  html += '<label>法兰 个 <input type="number" id="lb-conn" step="1" value="4"></label>';
  html += '<label>灵敏度 dBm <input type="number" id="lb-sens" step="0.1" value="-28"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="TCM.calcLink()">计算链路</button></div>';
  html += '<div id="lb-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 速率等级速查
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≡</span>速率等级速查</h3>';
  html += '<p class="lab-desc">传输网常用速率对照。STM-N 每级 ×4（155M 起），以太网 10 倍跳。选择等级看明细，或输入 Mbps 反查。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>等级 <select id="rt-sel" onchange="TCM.showRate()">';
  var rates = [
    ['E1','E1（2M 专线）',2.048], ['STM-1','STM-1',155.52], ['STM-4','STM-4',622.08],
    ['STM-16','STM-16',2488.32], ['STM-64','STM-64',9953.28],
    ['FE','百兆以太网',100], ['GE','千兆以太网 GE',1000], ['10GE','万兆以太网 10GE',10000],
    ['100GE','100G 以太网',100000], ['λ100G','单波 100G（相干）',100000]
  ];
  for (var i = 0; i < rates.length; i++) html += '<option value="' + i + '"' + (i===3?' selected':'') + '>' + rates[i][1] + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="rt-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 纤芯配色速查
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▦</span>纤芯配色速查</h3>';
  html += '<p class="lab-desc">标准 12 芯色序：蓝橙绿棕灰白红黑黄紫粉青（前 6 全色 + 后 6 本色漂白）。点击任意色块查看序号；输入序号查颜色。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>纤芯序号 <input type="number" id="fc-no" min="1" max="12" step="1" value="1" oninput="TCM.showFiber()"></label>';
  html += '</div>';
  html += '<div id="fc-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：衰耗经验值随光缆批次/波长变化，工程以 OTDR 实测为准；速率表按 ITU-T G.707（SDH）与 IEEE 802.3（以太网）常用口径；纤芯色序为国标全色谱。</p>';
  html += '</div>';
  TCM.render(html);
  TCM.dbmConv('db'); TCM.showRate(); TCM.showFiber();
};

/* ---- 1. dBm 换算 ---- */
TCM.dbmConv = function(srcSide) {
  var dbEl = document.getElementById('db-val'), mwEl = document.getElementById('mw-val');
  if (!dbEl || !mwEl) return;
  if (srcSide === 'db') {
    var db = parseFloat(dbEl.value);
    if (isNaN(db)) return;
    var mw = Math.pow(10, db / 10);
    mwEl.value = mw < 0.001 ? mw.toExponential(3) : Math.round(mw * 1e6) / 1e6;
    document.getElementById('db-result').innerHTML = dbmHint(db);
  } else {
    var m = parseFloat(mwEl.value);
    if (isNaN(m) || m <= 0) return;
    var d = 10 * Math.log10(m);
    dbEl.value = Math.round(d * 100) / 100;
    document.getElementById('db-result').innerHTML = dbmHint(d);
  }
};
function dbmHint(db) {
  var mw = Math.pow(10, db / 10);
  var desc = '';
  if (db >= 0) desc = '强光区——注意接收端可能饱和，必要时加衰减器';
  else if (db >= -15) desc = '常见光模块正常接收区';
  else if (db >= -28) desc = '弱光区——长距链路典型窗口，注意余量';
  else desc = '低于多数模块灵敏度，链路会出误码或中断';
  return '<table class="cr-table">' +
    '<tr><td class="cr-name">dBm</td><td class="cr-val">' + TCM._fix(db, 2) + '</td></tr>' +
    '<tr><td class="cr-name">mW</td><td class="cr-val">' + (mw < 0.001 ? mw.toExponential(3) : TCM._fix(mw, 6)) + '</td></tr>' +
    '<tr><td class="cr-name">区间判断</td><td class="cr-val cr-good">' + desc + '</td></tr>' +
    '</table>';
}

/* ---- 2. 光链路预算 ---- */
TCM.calcLink = function() {
  var tx = TCM._num('lb-tx'), km = TCM._num('lb-km'), att = TCM._num('lb-att');
  var sp = TCM._num('lb-splice'), cn = TCM._num('lb-conn'), sens = TCM._num('lb-sens');
  var el = document.getElementById('lb-result');
  if (tx === null || km === null || att === null || sp === null || cn === null || sens === null) {
    el.innerHTML = '<div class="calc-warn">请把参数填完整。</div>'; return;
  }
  var fiberL = km * att, spliceL = sp * 0.05, connL = cn * 0.5;
  var totalL = fiberL + spliceL + connL;
  var rx = tx - totalL;
  var margin = rx - sens;
  var verdict, cls;
  if (margin >= 3) { verdict = '链路可靠'; cls = 'cr-good'; }
  else if (margin >= 0) { verdict = '余量不足（<3dB），建议整改或换高灵敏度模块'; cls = 'cr-warn'; }
  else { verdict = '不通——收光低于灵敏度，链路无法稳定工作'; cls = 'cr-bad'; }
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">光纤衰耗</td><td class="cr-val">' + TCM._fix(fiberL, 2) + ' dB（' + km + 'km × ' + att + '）</td></tr>' +
    '<tr><td class="cr-name">熔接损耗</td><td class="cr-val">' + TCM._fix(spliceL, 2) + ' dB（' + sp + ' × 0.05）</td></tr>' +
    '<tr><td class="cr-name">活动接头</td><td class="cr-val">' + TCM._fix(connL, 2) + ' dB（' + cn + ' × 0.5）</td></tr>' +
    '<tr><td class="cr-name">总衰耗</td><td class="cr-val">' + TCM._fix(totalL, 2) + ' dB</td></tr>' +
    '<tr><td class="cr-name">预计收光</td><td class="cr-val">' + TCM._fix(rx, 2) + ' dBm</td></tr>' +
    '<tr><td class="cr-name">灵敏度</td><td class="cr-val">' + sens + ' dBm</td></tr>' +
    '<tr><td class="cr-name">余量</td><td class="cr-val ' + cls + '">' + TCM._fix(margin, 2) + ' dB —— ' + verdict + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">工程口径：余量 ≥3dB 合格（考虑光缆老化、接头劣化、温度变化的富余）。实测收光与预算偏差 >2dB 时，优先怀疑脏接头与弯折。</p>';
};

/* ---- 3. 速率等级 ---- */
var RATES = [
  ['E1','E1（2M 专线）',2.048,'30 路 64k 语音 + 信令同步，PCM 复用的最小整车，专网常客'],
  ['STM-1','STM-1',155.52,'SDH 基础速率，可装 63 个 2M，4 倍翻番的起点'],
  ['STM-4','STM-4',622.08,'STM-1 ×4，县级骨干常见配置'],
  ['STM-16','STM-16',2488.32,'STM-1 ×16（2.5G），地市级骨干常见配置'],
  ['STM-64','STM-64',9953.28,'STM-1 ×64（10G），SDH 时代的天花板'],
  ['FE','百兆以太网',100,'接入终端的主力，正在被千兆替代'],
  ['GE','千兆以太网 GE',1000,'企业/家庭宽带的当代标配'],
  ['10GE','万兆以太网 10GE',10000,'数据中心与汇聚互联的主力'],
  ['100GE','100G 以太网',100000,'数据中心骨干与 OTN 客户侧主流'],
  ['λ100G','单波 100G（相干）',100000,'波分系统单波长容量，一根纤可叠几十个波']
];
TCM.showRate = function() {
  var sel = document.getElementById('rt-sel');
  if (!sel) return;
  var r = RATES[parseInt(sel.value)];
  var mbps = r[2];
  var kbps = mbps * 1000;
  var e1eq = mbps >= 2.048 ? Math.floor(mbps / 2.048) : null;
  var stm1eq = mbps >= 155.52 ? (mbps / 155.52).toFixed(1) : null;
  document.getElementById('rt-result').innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">等级</td><td class="cr-val">' + r[1] + '</td></tr>' +
    '<tr><td class="cr-name">速率</td><td class="cr-val cr-good">' + (mbps >= 1000 ? TCM._fix(mbps/1000,2) + ' Gbps' : TCM._fix(mbps,2) + ' Mbps') + '</td></tr>' +
    '<tr><td class="cr-name">≈ kbps</td><td class="cr-val">' + TCM._fix(kbps, 0) + '</td></tr>' +
    (e1eq !== null && e1eq >= 1 ? '<tr><td class="cr-name">≈ E1 数</td><td class="cr-val">' + e1eq + ' 个 2M</td></tr>' : '') +
    (stm1eq !== null ? '<tr><td class="cr-name">≈ STM-1 数</td><td class="cr-val">' + stm1eq + '</td></tr>' : '') +
    '<tr><td class="cr-name">备注</td><td class="cr-val">' + r[3] + '</td></tr>' +
    '</table>';
};

/* ---- 4. 纤芯配色 ---- */
var FIBER_COLORS = [
  ['蓝','#0057b8'],['橙','#f07f13'],['绿','#00a651'],['棕','#8b5a2b'],
  ['灰','#9aa0a6'],['白','#ffffff'],['红','#d0021b'],['黑','#1a1a1a'],
  ['黄','#f8d000'],['紫','#7b3ff2'],['粉','#ff8ac2'],['青(浅绿)','#00c9a7']
];
TCM.showFiber = function() {
  var noEl = document.getElementById('fc-no');
  if (!noEl) return;
  var no = Math.min(12, Math.max(1, parseInt(noEl.value) || 1));
  noEl.value = no;
  var el = document.getElementById('fc-result');
  var strip = '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin:10px 0">';
  for (var i = 0; i < 12; i++) {
    var c = FIBER_COLORS[i];
    var border = (i === 5 || i === 8) ? 'border:1px solid var(--line-2)' : 'border:1px solid var(--line)';
    var hl = (i === no - 1) ? 'transform:scale(1.15);box-shadow:0 0 0 2px var(--acc)' : '';
    strip += '<div title="' + (i+1) + '. ' + c[0] + '" style="width:30px;height:30px;border-radius:50%;background:' + c[1] + ';' + border + ';' + hl + ';transition:transform .15s"></div>';
  }
  strip += '</div>';
  var c = FIBER_COLORS[no - 1];
  el.innerHTML = strip + '<table class="cr-table">' +
    '<tr><td class="cr-name">第 ' + no + ' 芯</td><td class="cr-val"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:' + c[1] + ';border:1px solid var(--line-2);vertical-align:middle;margin-right:6px"></span>' + c[0] + '</td></tr>' +
    '<tr><td class="cr-name">色序口诀</td><td class="cr-val">蓝橙绿棕灰白 · 红黑黄紫粉青</td></tr>' +
    '<tr><td class="cr-name">大于 12 芯</td><td class="cr-val">重复色序按束管区分（先认束管色，再认芯色）</td></tr>' +
    '</table>' +
    '<p class="calc-note">纤芯两头颜色必须一致才对得上——熔接前"对色"是防串芯的第一道关，接错芯等于把 A 的业务送给了 B。</p>';
};

/* ===== 模块页 ===== */
TCM.views.module = function(id) {
  var mod = TCM.modules.find(function(m) { return m.id === id; });
  if (!mod) { TCM.views.home(); return; }
  var P = TCM.progress();
  var lessons = TCM.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + TCM.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + TCM.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = TCM.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + TCM.esc(title) + '</a>';
    else html += '<span class="title">' + TCM.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  TCM.render(html);
};

/* ===== 术语 ===== */
TCM.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>通信光传输名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 光纤 / 波分 / 割接" oninput="TCM.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(TCM.terms) + '</div></div>';
  TCM.render(html);
};
TCM.filterTerms = function(q) {
  var filtered = TCM.terms;
  if (q) { q = q.toLowerCase();
    filtered = TCM.terms.filter(function(t) {
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
    html += '<div class="term-name">' + TCM.esc(t.name) + ' <span class="term-en">' + TCM.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + TCM.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + TCM.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
TCM.views.myTerms = function() {
  var P = TCM.progress(); var collected = [];
  for (var i = 0; i < TCM.terms.length; i++) if (P.hasTerm(TCM.terms[i].id)) collected.push(TCM.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  TCM.render(html);
};

/* ===== 搜索 ===== */
TCM.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 光纤 / 波分 / 割接" oninput="TCM.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  TCM.render(html);
};
TCM.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = TCM.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + TCM.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + TCM.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
TCM.views.settings = function() {
  var P = TCM.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="TCM.setTheme(\'dark\')">深色 · 暖金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="TCM.setTheme(\'light\')">浅色 · 琥珀</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="TCM.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="TCM.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="TCM.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = TCM.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/gtr-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/gtr-progress" value="' + TCM.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + TCM.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + TCM.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + TCM.esc(TCM.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="TCM.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="TCM.clearData()">清除数据</button></div>';
  html += '</div>';
  TCM.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    TCM.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!TCM.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    TCM.sync.pullNow().then(function () { return TCM.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + TCM.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    TCM.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : TCM.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    TCM.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
TCM.setTheme = function(t) { document.documentElement.dataset.theme = t; TCM.progress().setPref('theme', t); TCM.views.settings(); };
TCM.setFontSize = function(s) { document.documentElement.dataset.fs = s; TCM.progress().setPref('fontSize', s); TCM.views.settings(); };
TCM.exportData = function() {
  var data = TCM.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gtr-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
TCM.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('tcm.progress.v1');
    window.location.reload();
  }
};
