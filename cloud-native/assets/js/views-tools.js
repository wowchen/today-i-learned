/* 工具视图:四个云上互动工具(可用性停机换算 / 容器资源单位换算 / 副本容量估算 / 云成本估算)+ 术语/搜索/设置/模块 */
window.CCN = window.CCN || {};
CCN.views = CCN.views || {};

CCN._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
CCN._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
CCN._fmt = function(n, d) {
  if (Math.abs(n) >= 10000) return (n / 10000).toFixed(d) + ' 万';
  return CCN._fix(n, d);
};

/* ===== 工具总页 ===== */
CCN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">云上很多决策最终要落到数字上:几个 9 到底停多久、容器要多少核多少 G、峰值来了要几个副本、一个月花多少钱。这四个小工具全部在本地浏览器运行,<b>边学边算,把量级感练出来</b>。</p>';

  // 1. 可用性与停机换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">9</span>可用性与停机时间换算</h3>';
  html += '<p class="lab-desc">左边把"几个 9"换算成实际停机时长;右边按串联关系估算整条链路的合成可用性——组件越多,整体越差。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可用性 % <input type="number" id="av-val" step="0.01" value="99.9" oninput="CCN.calcAvail()"></label>';
  html += '<label>链路组件数 个 <input type="number" id="av-n" step="1" value="5" oninput="CCN.calcAvail()"></label>';
  html += '</div>';
  html += '<div id="av-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 容器资源单位换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">m</span>容器资源单位换算</h3>';
  html += '<p class="lab-desc">CPU 用 m(千分之一核)计量,1000m = 1 核;内存用 1024 进制(Ki/Mi/Gi),和硬盘厂商标的 1000 进制(GB)不是一回事,差约 7%。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>CPU m(毫核) <input type="number" id="cu-cpu" step="50" value="500" oninput="CCN.calcUnit()"></label>';
  html += '<label>内存数值 <input type="number" id="cu-mem" step="0.1" value="4" oninput="CCN.calcUnit()"></label>';
  html += '<label>内存单位 <select id="cu-unit" onchange="CCN.calcUnit()">';
  html += '<option value="Gi">Gi(1024 进制)</option><option value="Mi">Mi(1024 进制)</option>';
  html += '<option value="G">G(1000 进制)</option><option value="M">M(1000 进制)</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="cu-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 副本与容量估算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">n</span>副本与资源估算</h3>';
  html += '<p class="lab-desc">副本数 = 峰值QPS × 安全余量 ÷ (单副本承载 × 目标水位)。目标水位是留给突发与扩容延迟的缓冲,常用 70%。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>峰值 QPS <input type="number" id="cp-qps" step="100" value="8000"></label>';
  html += '<label>单副本承载 QPS <input type="number" id="cp-one" step="50" value="800"></label>';
  html += '<label>安全余量(倍) <input type="number" id="cp-safe" step="0.05" value="1.2"></label>';
  html += '<label>目标水位 % <input type="number" id="cp-level" step="5" value="70"></label>';
  html += '<label>单副本 CPU 请求 核 <input type="number" id="cp-cpu" step="0.1" value="0.5"></label>';
  html += '<label>单副本内存请求 GiB <input type="number" id="cp-mem" step="0.1" value="1"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CCN.calcReplicas()">估算副本数</button></div>';
  html += '<div id="cp-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 云成本估算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>云成本估算</h3>';
  html += '<p class="lab-desc">粗略估算月账单:计算(实例 × 单价 × 折扣)+ 存储 + 流量。包年包月通常比按量便宜三成左右,稳定负载值得换。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>实例数 台 <input type="number" id="co-num" step="1" value="10"></label>';
  html += '<label>单实例月价 元 <input type="number" id="co-price" step="10" value="300"></label>';
  html += '<label>计费折扣(1=按量) <input type="number" id="co-disc" step="0.05" value="0.7"></label>';
  html += '<label>存储 GB <input type="number" id="co-sto" step="10" value="2000"></label>';
  html += '<label>月流量 GB <input type="number" id="co-flow" step="10" value="500"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="CCN.calcCost()">估算月成本</button></div>';
  html += '<div id="co-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:可用性换算按一年 365 天、一月 30 天计;串联合成可用性为 a^n,用于估算链路整体水平,真实系统还要考虑冗余与降级。资源单位换算采用 1Gi=1024Mi。成本为量级参考,实际以云厂商账单为准。</p>';
  html += '</div>';
  CCN.render(html);
  CCN.calcAvail(); CCN.calcUnit();
};

/* ---- 1. 可用性换算 ---- */
CCN.calcAvail = function() {
  var a = CCN._num('av-val'), n = CCN._num('av-n');
  if (a === null || a <= 0 || a >= 100) {
    document.getElementById('av-result').innerHTML = '<div class="calc-warn">可用性请填 0 到 100 之间的数。</div>';
    return;
  }
  var yearMin = 365 * 24 * 60;
  var downMin = yearMin * (1 - a / 100);
  var cls = downMin <= 60 ? 'cr-good' : (downMin <= 600 ? '' : 'cr-bad');
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">可用性</td><td class="cr-val ' + cls + '">' + a + ' %</td></tr>';
  html += '<tr><td class="cr-name">年停机</td><td class="cr-val">' + fmtDur(downMin) + '</td></tr>';
  html += '<tr><td class="cr-name">月停机(按 30 天)</td><td class="cr-val">' + fmtDur(downMin / 12) + '</td></tr>';
  html += '<tr><td class="cr-name">周停机</td><td class="cr-val">' + fmtDur(downMin / 52) + '</td></tr>';
  html += '<tr><td class="cr-name">水平判断</td><td class="cr-val">' + availHint(a) + '</td></tr>';
  if (n !== null && n >= 1) {
    var sysA = Math.pow(a / 100, n) * 100;
    var sysDown = yearMin * (1 - sysA / 100);
    html += '<tr><td class="cr-name">' + n + ' 段串联后</td><td class="cr-val cr-bad">' + CCN._fix(sysA, 3) + ' %（年停机 ' + fmtDur(sysDown) + '）</td></tr>';
  }
  html += '</table>';
  html += '<p class="calc-note">这就是"每加一段依赖就多一份风险"的量化解释:五个 99.9% 的组件串联,整体只剩 99.5% 左右。做冗余与降级的意义,就是把串联尽量变成并联。</p>';
  document.getElementById('av-result').innerHTML = html;
};
function availHint(a) {
  if (a >= 99.999) return '五个 9，只有极核心场景值得追求';
  if (a >= 99.99) return '四个 9，需要多活架构与严格变更管理';
  if (a >= 99.9) return '三个 9，对外业务的主流目标';
  if (a >= 99) return '两个 9，内部系统通常可接受';
  return '低于两个 9，用户能明显感知中断';
}
function fmtDur(min) {
  if (min >= 1440) return CCN._fix(min / 1440, 2) + ' 天';
  if (min >= 60) return CCN._fix(min / 60, 2) + ' 小时';
  if (min >= 1) return CCN._fix(min, 1) + ' 分钟';
  return CCN._fix(min * 60, 0) + ' 秒';
}

/* ---- 2. 资源单位换算 ---- */
CCN.calcUnit = function() {
  var cpu = CCN._num('cu-cpu'), mem = CCN._num('cu-mem');
  var unit = document.getElementById('cu-unit').value;
  var el = document.getElementById('cu-result');
  if (cpu === null || mem === null) { el.innerHTML = '<div class="calc-warn">请把数值填完整。</div>'; return; }
  var cores = cpu / 1000;
  var bytes = mem * (unit === 'Gi' ? Math.pow(1024, 3) : unit === 'Mi' ? Math.pow(1024, 2) : unit === 'G' ? Math.pow(1000, 3) : Math.pow(1000, 2));
  var gib = bytes / Math.pow(1024, 3);
  var gb = bytes / Math.pow(1000, 3);
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">CPU</td><td class="cr-val cr-good">' + cpu + ' m = ' + CCN._fix(cores, 3) + ' 核</td></tr>';
  html += '<tr><td class="cr-name">内存(1024 进制)</td><td class="cr-val">' + CCN._fix(gib, 3) + ' GiB = ' + CCN._fix(gib * 1024, 1) + ' MiB</td></tr>';
  html += '<tr><td class="cr-name">内存(1000 进制)</td><td class="cr-val">' + CCN._fix(gb, 3) + ' GB</td></tr>';
  html += '<tr><td class="cr-name">GB 与 GiB 差异</td><td class="cr-val">同一份内存在 GB 口径下数字更大 ' + CCN._fix(gb - gib, 3) + '（+' + CCN._fix((gb / gib - 1) * 100, 1) + '%）</td></tr>';
  html += '<tr><td class="cr-name">limit 建议</td><td class="cr-val">请求值取常用量，limit 给 1.5 到 2 倍；limit 设太紧会被 OOM 杀掉</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">容器内存限制通常用 Mi 表达(如 512Mi、2Gi),按 1024 进制计算;而云盘与设备标称常用 1000 进制,所以"4GiB 的内存"比"4GB 的盘"略大,这就是 GB 与 GiB 常被混淆的地方。</p>';
  el.innerHTML = html;
};

/* ---- 3. 副本与容量 ---- */
CCN.calcReplicas = function() {
  var qps = CCN._num('cp-qps'), one = CCN._num('cp-one'), safe = CCN._num('cp-safe');
  var level = CCN._num('cp-level'), cpu = CCN._num('cp-cpu'), mem = CCN._num('cp-mem');
  var el = document.getElementById('cp-result');
  if (qps === null || one === null || safe === null || level === null || cpu === null || mem === null || one <= 0 || level <= 0 || level >= 100) {
    el.innerHTML = '<div class="calc-warn">请完整填写：单副本承载需大于 0，目标水位在 0 到 100 之间。</div>';
    return;
  }
  var need = qps * safe;
  var perPod = one * (level / 100);
  var pods = Math.ceil(need / perPod);
  var minPods = Math.max(2, pods);
  var totalCpu = minPods * cpu, totalMem = minPods * mem;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">需承载流量(含余量)</td><td class="cr-val">' + CCN._fmt(need, 0) + ' QPS</td></tr>';
  html += '<tr><td class="cr-name">单副本有效水位</td><td class="cr-val">' + CCN._fix(perPod, 0) + ' QPS（' + one + ' × ' + level + '%）</td></tr>';
  html += '<tr><td class="cr-name">建议副本数</td><td class="cr-val cr-good">' + minPods + ' 个（至少 2 个以保证高可用）</td></tr>';
  html += '<tr><td class="cr-name">资源请求合计</td><td class="cr-val">' + CCN._fix(totalCpu, 1) + ' 核 / ' + CCN._fix(totalMem, 1) + ' GiB</td></tr>';
  html += '<tr><td class="cr-name">HPA 建议</td><td class="cr-val">最小 ' + minPods + '，最大取 2 倍即 ' + minPods * 2 + '，目标 CPU 使用率设 60%~70%</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">两点提醒:副本数要按峰值而非平均流量算;别忘依赖项——应用副本够了,数据库连接数、缓存容量、第三方接口配额也要同步核算,否则瓶颈只是被搬到了下游。</p>';
  el.innerHTML = html;
};

/* ---- 4. 云成本估算 ---- */
CCN.calcCost = function() {
  var num = CCN._num('co-num'), price = CCN._num('co-price'), disc = CCN._num('co-disc');
  var sto = CCN._num('co-sto'), flow = CCN._num('co-flow');
  var el = document.getElementById('co-result');
  if (num === null || price === null || disc === null || sto === null || flow === null) {
    el.innerHTML = '<div class="calc-warn">请把参数填完整。</div>'; return;
  }
  var listPrice = num * price;
  var compute = listPrice * disc;
  var storageFee = sto * 0.3;
  var flowFee = flow * 0.8;
  var monthly = compute + storageFee + flowFee;
  var saved = listPrice - compute;
  var html = '<table class="cr-table">';
  html += '<tr><td class="cr-name">计算(按量原价)</td><td class="cr-val">￥' + CCN._fmt(listPrice, 0) + ' / 月</td></tr>';
  html += '<tr><td class="cr-name">计算(折扣后)</td><td class="cr-val cr-good">￥' + CCN._fmt(compute, 0) + ' / 月</td></tr>';
  html += '<tr><td class="cr-name">存储</td><td class="cr-val">￥' + CCN._fmt(storageFee, 0) + ' / 月（按 ￥0.3/GB）</td></tr>';
  html += '<tr><td class="cr-name">流量</td><td class="cr-val">￥' + CCN._fmt(flowFee, 0) + ' / 月（按 ￥0.8/GB）</td></tr>';
  html += '<tr><td class="cr-name">月合计</td><td class="cr-val cr-good">￥' + CCN._fmt(monthly, 0) + '</td></tr>';
  html += '<tr><td class="cr-name">年合计</td><td class="cr-val">￥' + CCN._fmt(monthly * 12, 0) + '</td></tr>';
  html += '<tr><td class="cr-name">相对按量节省</td><td class="cr-val">￥' + CCN._fmt(saved * 12, 0) + ' / 年</td></tr>';
  html += '</table>';
  html += '<p class="calc-note">成本优化优先看三件事:闲置资源(未挂载的盘、没人用的实例)、规格是否偏大(长期低水位就该降配)、稳定负载是否换成预留或包年。这三项通常能吃掉账单里最明显的水分。</p>';
  el.innerHTML = html;
};

/* ===== 模块页 ===== */
CCN.views.module = function(id) {
  var mod = CCN.modules.find(function(m) { return m.id === id; });
  if (!mod) { CCN.views.home(); return; }
  var P = CCN.progress();
  var lessons = CCN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + CCN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + CCN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = CCN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + CCN.esc(title) + '</a>';
    else html += '<span class="title">' + CCN.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  CCN.render(html);
};

/* ===== 术语 ===== */
CCN.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>云计算与云原生名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 容器 / VPC / 可用性" oninput="CCN.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(CCN.terms) + '</div></div>';
  CCN.render(html);
};
CCN.filterTerms = function(q) {
  var filtered = CCN.terms;
  if (q) { q = q.toLowerCase();
    filtered = CCN.terms.filter(function(t) {
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
    html += '<div class="term-name">' + CCN.esc(t.name) + ' <span class="term-en">' + CCN.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + CCN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + CCN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
CCN.views.myTerms = function() {
  var P = CCN.progress(); var collected = [];
  for (var i = 0; i < CCN.terms.length; i++) if (P.hasTerm(CCN.terms[i].id)) collected.push(CCN.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  CCN.render(html);
};

/* ===== 搜索 ===== */
CCN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 容器 / VPC / 可用性" oninput="CCN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  CCN.render(html);
};
CCN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = CCN.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + CCN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + CCN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
CCN.views.settings = function() {
  var P = CCN.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="CCN.setTheme(\'dark\')">深色 · 深空蓝</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="CCN.setTheme(\'light\')">浅色 · 云白蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="CCN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="CCN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="CCN.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = CCN.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/ccn-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/ccn-progress" value="' + CCN.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + CCN.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + CCN.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + CCN.esc(CCN.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="CCN.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="CCN.clearData()">清除数据</button></div>';
  html += '</div>';
  CCN.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    CCN.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!CCN.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    CCN.sync.pullNow().then(function () { return CCN.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + CCN.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    CCN.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : CCN.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    CCN.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
CCN.setTheme = function(t) { document.documentElement.dataset.theme = t; CCN.progress().setPref('theme', t); CCN.views.settings(); };
CCN.setFontSize = function(s) { document.documentElement.dataset.fs = s; CCN.progress().setPref('fontSize', s); CCN.views.settings(); };
CCN.exportData = function() {
  var data = CCN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ccn-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
CCN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('ccn.progress.v1');
    window.location.reload();
  }
};
