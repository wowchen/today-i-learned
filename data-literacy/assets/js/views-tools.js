/* 工具视图:四件数据互动工具(图表选择器 / 指标口径体检 / 样本量计算 / 统计陷阱演示)+ 术语/搜索/设置/模块 */
window.DAT = window.DAT || {};
DAT.views = DAT.views || {};

DAT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
DAT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ===== 工具总页 ===== */
DAT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">数据分析离不开"选对图"与"问对数":这张图该用什么、这个指标口径全不全、这份抽样要多少人、这个结论有没有踩坑。这四个小工具全部在本地浏览器运行，<b>边学边玩，把统计直觉练成肌肉记忆</b>。</p>';

  // 1. 图表类型选择器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◫</span>图表类型选择器</h3>';
  html += '<p class="lab-desc">先想清楚"你要让读者看什么"，再选图。选一个展示意图，看推荐图表、备选方案和这种图最常见的误用。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>展示意图 <select id="cp-sel" onchange="DAT.chartPick()">';
  for (var j = 0; j < CHARTS.length; j++) html += '<option value="' + j + '"' + (j===0?' selected':'') + '>' + CHARTS[j].goal + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="cp-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 指标口径体检
  html += '<div class="calc-card">';
  html += '<h3><span class="g">✎</span>指标口径体检</h3>';
  html += '<p class="lab-desc">把你的指标定义贴进来，按五要素体检：分子、分母、时间窗、去重规则、口径备注。五项齐全的指标，才不容易"同一个词各说各话"。</p>';
  html += '<textarea id="mc-text" class="term-search" style="width:100%;min-height:110px;line-height:1.6">月活跃率 = 当月至少登录 1 次的独立用户数（按用户去重）÷ 当月期初在册用户数 × 100%，按自然月统计，口径备注：试用期账号不计入分母。</textarea>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="DAT.checkMetric()">开始体检</button></div>';
  html += '<div id="mc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 样本量计算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">N</span>样本量计算器</h3>';
  html += '<p class="lab-desc">做问卷调查、满意度测评前先算：置信水平越高、允许误差越小，要的样本越多。填入参数，看这份调查至少需要多少人。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>置信水平 <select id="ss-z" onchange="DAT.calcSample()">';
  html += '<option value="1.645">90%</option><option value="1.96" selected>95%</option><option value="2.576">99%</option>';
  html += '</select></label>';
  html += '<label>允许误差 % <input type="number" id="ss-e" step="0.5" value="5" min="0.5" max="20" oninput="DAT.calcSample()"></label>';
  html += '<label>总体大小(选填) <input type="number" id="ss-n" step="100" value="0" min="0" placeholder="未知填 0" oninput="DAT.calcSample()"></label>';
  html += '</div>';
  html += '<div id="ss-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 统计陷阱演示器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇄</span>统计陷阱演示器</h3>';
  html += '<p class="lab-desc">四个最经典的统计陷阱，每个都用一张具体数字的表格演示：亲眼看结论怎么被"看起来合理的数据"翻转。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>选择陷阱 <select id="td-sel" onchange="DAT.showTrap()">';
  for (var k = 0; k < TRAPS.length; k++) html += '<option value="' + k + '"' + (k === 0 ? ' selected' : '') + '>' + TRAPS[k].name + '</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="td-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：样本量按比例调查的经典公式估算（p 取 0.5 最保守），实际还需考虑回收率与分层设计；陷阱演示数字为教学案例，机制真实、数字虚构。</p>';
  html += '</div>';
  DAT.render(html);
  DAT.chartPick(); DAT.checkMetric(); DAT.calcSample(); DAT.showTrap();
};

/* ---- 1. 图表类型选择器 ---- */
var CHARTS = [
  { goal: '比较大小（类别之间谁多谁少）', pick: '柱状图（类别名太长改用条形图）', alt: '条形图',
    why: '长度是最容易被眼睛精确比较的通道，类别再多也站得住。',
    warn: '别用饼图比大小——人眼对角度差远不如对长度差敏感，5 块以上的饼基本读不出谁大谁小。' },
  { goal: '看趋势（随时间怎么变）', pick: '折线图', alt: '柱状图（数据点少且想强调每期数值时）',
    why: '线段的走向直接映射时间的连续性，涨跌拐点一眼可见。',
    warn: '别过度平滑——移动平均可以加作辅助线，但主线上把波动抹平，就是在替读者做判断。' },
  { goal: '看构成（部分与整体的关系）', pick: '堆叠柱状图（尤其含时间维度时）', alt: '饼图（仅一块整体、且不超过 5 个部分时）',
    why: '堆叠柱既能看每块大小，也能并排比较多个整体的构成差异。',
    warn: '饼图超过 5 块、或者要比较多个整体的构成时果断弃用；3D 饼图在任何场景都别用。' },
  { goal: '看关系（两个变量是否相关）', pick: '散点图', alt: '气泡图（需要展示第三个数值维度时）',
    why: '每个点一个样本，点云的形状、方向、疏密把相关性摊开给你看。',
    warn: '相关不代表因果——散点图只能告诉你"一起变"，不能告诉你"谁导致谁"。' },
  { goal: '看分布（一组数据长什么样）', pick: '直方图', alt: '箱线图（需要标出中位数与离群值时）',
    why: '直方图把连续数据切桶看疏密，集中在哪、偏到哪、有没有双峰一目了然。',
    warn: '直方图不是柱状图——横轴是连续区间不是类别，桶宽一变，形状可能完全不同。' },
  { goal: '看地理（数值在地图上的分布）', pick: '分级填色地图', alt: '符号地图（点大小表示数值时）',
    why: '颜色深浅承载数值，地理模式（区域聚集、边界效应）直观可见。',
    warn: '大面积区域不等于大数值——新疆一个省的色块比上海大得多，必要时配一张按数值排序的条形图辅助。' }
];
DAT.chartPick = function() {
  var sel = document.getElementById('cp-sel');
  if (!sel) return;
  var c = CHARTS[parseInt(sel.value)];
  document.getElementById('cp-result').innerHTML =
    '<table class="cr-table">' +
    '<tr><td class="cr-name">首选</td><td class="cr-val cr-good">' + c.pick + '</td></tr>' +
    '<tr><td class="cr-name">备选</td><td class="cr-val">' + c.alt + '</td></tr>' +
    '<tr><td class="cr-name">为什么</td><td class="cr-val" style="font-weight:400">' + c.why + '</td></tr>' +
    '<tr><td class="cr-name">常见误用</td><td class="cr-val cr-bad" style="font-weight:400">' + c.warn + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">选图三问：读者要在几秒内看出什么？数据是类别、时间还是连续量？要不要支持多组并排比较？三问答完，图基本就定了。</p>';
};

/* ---- 2. 指标口径体检 ---- */
var MC_ITEMS = [
  ['分子', /分子|数的是|统计|计入|累加|求和|登录|下单|成交|点击|至少/, '写清分子数的是什么：什么行为、什么对象、计入条件是什么。'],
  ['分母', /分母|除以|基数|在册|总量|全体|规模|占比|率|÷|除号/, '写清分母以什么为基数：全体是谁、期初还是平均、含不含例外。'],
  ['时间窗', /日|周|月|季|年|近\s*\d+\s*天|自然月|滚动|t\+1|t\+7|时间/, '写清统计时间窗：自然月还是滚动 30 天，截止到几点。'],
  ['去重与主体', /去重|独立|按用户|按人|按单|按设备|uv|唯一|唯一识别/, '写清按什么主体去重：按人、按账号还是按设备，重复行为算几次。'],
  ['口径备注', /口径|备注|说明|定义|规则|不含|不计|剔除|例外/, '补一句口径备注：哪些例外被剔除、与谁对齐，防止两个部门各算各的。']
];
DAT.checkMetric = function() {
  var el = document.getElementById('mc-result');
  var ta = document.getElementById('mc-text');
  if (!el || !ta) return;
  var text = ta.value || '';
  var score = 0, rows = '';
  for (var i = 0; i < MC_ITEMS.length; i++) {
    var it = MC_ITEMS[i];
    var hit = it[1].test(text);
    if (hit) score += 20;
    rows += '<tr><td class="cr-name">' + (hit ? '✓' : '✗') + ' ' + it[0] + '</td>' +
      '<td class="cr-val ' + (hit ? 'cr-good' : 'cr-bad') + '">' + (hit ? '已具备' : '缺失 —— ' + it[2]) + '</td></tr>';
  }
  var verdict, cls;
  if (score >= 80) { verdict = '优秀：口径基本齐了，可以进指标字典'; cls = 'cr-good'; }
  else if (score >= 60) { verdict = '合格：补上缺的要素，能省掉一半扯皮'; cls = 'cr-warn'; }
  else { verdict = '偏弱：这个词现在谁都能有自己的解释'; cls = 'cr-bad'; }
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">体检得分</td><td class="cr-val ' + cls + '">' + score + ' / 100 —— ' + verdict + '</td></tr>' +
    rows + '</table>' +
    '<p class="calc-note">体检是关键词启发式，不是语义理解。真正的验收标准是：把定义发给两个不相干的同事，他们独立算出来的数必须一样。</p>';
};

/* ---- 3. 样本量计算器 ---- */
DAT.calcSample = function() {
  var z = parseFloat((document.getElementById('ss-z') || {}).value || '1.96');
  var e = DAT._num('ss-e'), N = DAT._num('ss-n');
  var el = document.getElementById('ss-result');
  if (e === null || N === null || e <= 0 || e > 20) {
    el.innerHTML = '<div class="calc-warn">请填写 0.5~20 之间的允许误差；总体大小未知填 0。</div>'; return;
  }
  var ev = e / 100;
  var p = 0.5;
  var n0 = z * z * p * (1 - p) / (ev * ev);
  var n = n0;
  var adjLine = '';
  if (N > 0) {
    n = n0 / (1 + (n0 - 1) / N);
    adjLine = '<tr><td class="cr-name">有限总体修正</td><td class="cr-val">总体 ' + Math.round(N).toLocaleString() + '，修正后 ' + Math.ceil(n).toLocaleString() + ' 份</td></tr>';
  }
  var verdict, cls;
  var nf = Math.ceil(n);
  if (nf <= 400) { verdict = '轻量：一两个下午能跑完的调查规模'; cls = 'cr-good'; }
  else if (nf <= 1100) { verdict = '标准：多数商业调查的主流量级'; cls = ''; }
  else { verdict = '重量：需要分批发放、提前规划渠道'; cls = 'cr-warn'; }
  el.innerHTML = '<table class="cr-table">' +
    '<tr><td class="cr-name">置信水平</td><td class="cr-val">' + (z === 1.645 ? '90%' : (z === 1.96 ? '95%' : '99%')) + '（z = ' + z + '）</td></tr>' +
    '<tr><td class="cr-name">允许误差</td><td class="cr-val">±' + e + '%</td></tr>' +
    '<tr><td class="cr-name">理论样本量</td><td class="cr-val cr-warn">' + Math.ceil(n0).toLocaleString() + ' 份</td></tr>' +
    adjLine +
    '<tr><td class="cr-name">至少需要</td><td class="cr-val cr-good">' + nf.toLocaleString() + ' 份有效样本 —— ' + verdict + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">按比例型调查的经典公式估算，p 取 0.5 是最保守取法。注意这是<b>有效样本</b>：如果预计回收率只有 60%，发放量要除以 0.6。误差从 5% 收紧到 3%，样本量要翻近三倍——精度是拿钱堆出来的。</p>';
};
/* ---- 4. 统计陷阱演示器 ---- */
var TRAPS = [
  { name: '幸存者偏差', title: '装甲该加固在哪？——二战飞机的弹孔',
    table: '<tr><th>机翼</th><th>机身</th><th>发动机</th></tr>' +
      '<tr><td>弹孔密集</td><td>弹孔较多</td><td>弹孔很少</td></tr>' +
      '<tr><td class="cr-bad">参谋部：加固机翼</td><td></td><td class="cr-good">统计学家：加固发动机</td></tr>',
    reveal: '能返航的飞机才有统计资格。发动机弹孔少，不是发动机不打中，而是<b>打中发动机的飞机根本没回来</b>。你看到的数据只是"活下来"的那部分——做客户调研、成功学分析、老用户访谈时，先问一句：没回来的那批人在哪？',
    links: [['幸存者偏差', '#/l/pitfalls/01-survivorship'], ['抽样：尝一勺汤', '#/l/stats/04-sampling']] },
  { name: '辛普森悖论', title: '两种药谁更好？——合计结果与分组结果相反',
    table: '<tr><th></th><th>A 药</th><th>B 药</th></tr>' +
      '<tr><td>轻症治愈率</td><td class="cr-good">90%（90/100）</td><td>80%（160/200）</td></tr>' +
      '<tr><td>重症治愈率</td><td class="cr-good">60%（60/100）</td><td>40%（40/100）</td></tr>' +
      '<tr><td>合计治愈率</td><td class="cr-bad">75%（150/200）</td><td class="cr-good">66.7%（200/300）</td></tr>',
    reveal: '分组看，A 药轻症重症<b>都更好</b>；合计看，B 药反而胜出——因为 B 药接的轻症多。结论被"病情轻重"这个混杂变量的分布翻转了。看汇总数据下结论前，先问：有没有该拆开看的维度？',
    links: [['辛普森悖论', '#/l/correlation/04-simpson'], ['细分分析', '#/l/marketing/03-segmentation']] },
  { name: '回归均值', title: '封闭培训真的有效吗？——极端分数的回落',
    table: '<tr><th>学员</th><th>培训前(极端低分)</th><th>培训后</th></tr>' +
      '<tr><td>小王</td><td>38</td><td class="cr-good">61</td></tr>' +
      '<tr><td>小李</td><td>42</td><td class="cr-good">58</td></tr>' +
      '<tr><td>小张</td><td>35</td><td class="cr-good">60</td></tr>' +
      '<tr><td>平均</td><td>38.3</td><td class="cr-good">59.7</td></tr>',
    reveal: '只挑考得最差的人培训，之后分数几乎必然回升——哪怕培训毫无作用。运气（随机波动）是极端的，运气散了分数就回归常态。评价"干预是否有效"，必须有<b>对照组</b>，光看前后对比会高估一切干预。',
    links: [['回归均值', '#/l/pitfalls/02-regression'], ['怎么才算证明了因果', '#/l/correlation/05-causality']] },
  { name: '相关不是因果', title: '冰淇淋销量与溺水人数——一起涨的第三者',
    table: '<tr><th>月份</th><th>冰淇淋销量(万支)</th><th>溺水事故(起)</th></tr>' +
      '<tr><td>1 月</td><td>3</td><td>2</td></tr>' +
      '<tr><td>4 月</td><td>18</td><td>15</td></tr>' +
      '<tr><td>7 月</td><td>45</td><td>38</td></tr>' +
      '<tr><td>10 月</td><td>12</td><td>9</td></tr>',
    reveal: '相关系数高得吓人，但禁冰淇淋不会减少溺水——背后是<b>气温</b>这个第三者同时推高两者。看到强相关，下一步不是下结论，而是找混杂因子：还有谁在同时影响这两个数？',
    links: [['相关不等于因果', '#/l/correlation/01-intro'], ['混杂因子', '#/l/correlation/02-confounder']] }
];
DAT.showTrap = function() {
  var sel = document.getElementById('td-sel');
  if (!sel) return;
  var t = TRAPS[parseInt(sel.value)];
  var linkHtml = '';
  for (var j = 0; j < t.links.length; j++) {
    if (j > 0) linkHtml += ' · ';
    linkHtml += '<a href="' + t.links[j][1] + '" style="color:var(--acc);text-decoration:underline">' + t.links[j][0] + '</a>';
  }
  document.getElementById('td-result').innerHTML =
    '<p style="font-weight:600;margin:6px 0 10px">' + t.title + '</p>' +
    '<table class="cr-table" style="text-align:center">' + t.table + '</table>' +
    '<p style="margin:12px 0 0">' + t.reveal + '</p>' +
    '<p class="calc-note" style="margin-top:10px">相关课程：' + linkHtml + '</p>';
};

/* ===== 模块页 ===== */
DAT.views.module = function(id) {
  var mod = DAT.modules.find(function(m) { return m.id === id; });
  if (!mod) { DAT.views.home(); return; }
  var P = DAT.progress();
  var lessons = DAT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + DAT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + DAT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = DAT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + DAT.esc(title) + '</a>';
    else html += '<span class="title">' + DAT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  DAT.render(html);
};

/* ===== 术语 ===== */
DAT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>数据名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 均值 / 辛普森 / 北极星指标" oninput="DAT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(DAT.terms) + '</div></div>';
  DAT.render(html);
};
DAT.filterTerms = function(q) {
  var filtered = DAT.terms;
  if (q) { q = q.toLowerCase();
    filtered = DAT.terms.filter(function(t) {
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
    html += '<div class="term-name">' + DAT.esc(t.name) + ' <span class="term-en">' + DAT.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + DAT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + DAT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
DAT.views.myTerms = function() {
  var P = DAT.progress(); var collected = [];
  for (var i = 0; i < DAT.terms.length; i++) if (P.hasTerm(DAT.terms[i].id)) collected.push(DAT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  DAT.render(html);
};

/* ===== 搜索 ===== */
DAT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 均值 / 辛普森 / 北极星指标" oninput="DAT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  DAT.render(html);
};
DAT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = DAT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + DAT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + DAT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
DAT.views.settings = function() {
  var P = DAT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="DAT.setTheme(\'dark\')">深色 · 咖夜</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="DAT.setTheme(\'light\')">浅色 · 琥珀</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="DAT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="DAT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="DAT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = DAT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/dat-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/dat-progress" value="' + DAT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + DAT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + DAT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + DAT.esc(DAT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="DAT.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="DAT.clearData()">清除数据</button></div>';
  html += '</div>';
  DAT.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    DAT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!DAT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    DAT.sync.pullNow().then(function () { return DAT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + DAT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    DAT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : DAT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    DAT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
DAT.setTheme = function(t) { document.documentElement.dataset.theme = t; DAT.progress().setPref('theme', t); DAT.views.settings(); };
DAT.setFontSize = function(s) { document.documentElement.dataset.fs = s; DAT.progress().setPref('fontSize', s); DAT.views.settings(); };
DAT.exportData = function() {
  var data = DAT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dat-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
DAT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('dat.progress.v1');
    window.location.reload();
  }
};
