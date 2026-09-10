/* 工具视图:五件电力市场互动工具(供需出清模拟 / 峰谷分时电费 / 现货结算演练 / 储能套利测算 / 绿电碳减排)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   ⚠️ 全部为本地简化测算,结果仅作理解机制之用,不构成投资、交易或报价建议。 */
window.EMT = window.EMT || {};
EMT.views = EMT.views || {};

EMT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
EMT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
EMT._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
EMT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">电力市场的规则，光看会背不算懂。这五个小工具把课里的机制变成可拨动的数字：<b>价差一改、偏差一动，收益结构立刻不一样</b>。全部在本地浏览器运行，不上传任何数据。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>五件工具均为<b>极度简化的教学测算</b>：不考虑电网安全约束与阻塞、线路损耗、机组启停与爬坡约束、分时段结算细则差异、考核与分摊规则、税费与融资结构等复杂情形。结果只用于理解"价格怎么形成、钱怎么算出来"，<b>不得作为投资、报价、投标、结算或经营决策的依据</b>。实际业务请以电力交易机构规则、主管部门文件与专业意见为准。</p>';
  html += '</div>';

  // 1. 供需曲线与出清模拟
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇄</span>供需曲线与出清价格模拟器</h3>';
  html += '<p class="lab-desc">按报价从低到高排队，谁先满足需求谁中标，<b>最后一台被选中的机组报价就是全市场的出清价</b>。改动任一机组的报价或需求，看谁被"挤出"、出清价怎么变。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>负荷需求（万千瓦）<input type="number" id="sd-demand" step="10" value="1000" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 A 报价（元/度）<input type="number" id="sd-ap" step="0.01" value="0.25" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 A 容量（万千瓦）<input type="number" id="sd-aq" step="50" value="400" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 B 报价（元/度）<input type="number" id="sd-bp" step="0.01" value="0.30" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 B 容量（万千瓦）<input type="number" id="sd-bq" step="50" value="400" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 C 报价（元/度）<input type="number" id="sd-cp" step="0.01" value="0.35" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 C 容量（万千瓦）<input type="number" id="sd-cq" step="50" value="300" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 D 报价（元/度）<input type="number" id="sd-dp" step="0.01" value="0.42" min="0" oninput="EMT.calcSD()"></label>';
  html += '<label>机组 D 容量（万千瓦）<input type="number" id="sd-dq" step="50" value="300" min="0" oninput="EMT.calcSD()"></label>';
  html += '</div>';
  html += '<div id="sd-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 峰谷分时电费测算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◔</span>峰谷分时电费测算与错峰收益</h3>';
  html += '<p class="lab-desc">高峰贵、低谷便宜，把一部分峰段电量挪到谷段能省多少钱？填一份用电结构，看<b>当前电费、平均单价，以及错峰后的节省幅度</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>月用电量（万度）<input type="number" id="ou-q" step="1" value="200" min="0" oninput="EMT.calcTOU()"></label>';
  html += '<label>峰段电价（元/度）<input type="number" id="ou-p" step="0.01" value="1.05" min="0" oninput="EMT.calcTOU()"></label>';
  html += '<label>平段电价（元/度）<input type="number" id="ou-f" step="0.01" value="0.65" min="0" oninput="EMT.calcTOU()"></label>';
  html += '<label>谷段电价（元/度）<input type="number" id="ou-v" step="0.01" value="0.32" min="0" oninput="EMT.calcTOU()"></label>';
  html += '<label>峰段电量占比（%）<input type="number" id="ou-pr" step="1" value="35" min="0" max="100" oninput="EMT.calcTOU()"></label>';
  html += '<label>谷段电量占比（%）<input type="number" id="ou-vr" step="1" value="30" min="0" max="100" oninput="EMT.calcTOU()"></label>';
  html += '<label>峰段可转移比例（%）<input type="number" id="ou-shift" step="1" value="20" min="0" max="100" oninput="EMT.calcTOU()"></label>';
  html += '</div>';
  html += '<div id="ou-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 现货结算演练
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>现货结算演练（日前 + 实时 + 中长期）</h3>';
  html += '<p class="lab-desc">日前定了计划、实时才是实际。填一组申报与实际数据，看<b>日前收入、偏差按实时价清算、中长期差价补偿</b>三笔钱是怎么加起来的——以及偏差到底值多少钱。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日前申报电量（兆瓦时）<input type="number" id="sp-daq" step="10" value="1000" min="0" oninput="EMT.calcSpot()"></label>';
  html += '<label>日前价格（元/兆瓦时）<input type="number" id="sp-dap" step="10" value="350" min="0" oninput="EMT.calcSpot()"></label>';
  html += '<label>实际发电量（兆瓦时）<input type="number" id="sp-rtq" step="10" value="1200" min="0" oninput="EMT.calcSpot()"></label>';
  html += '<label>实时价格（元/兆瓦时）<input type="number" id="sp-rtp" step="10" value="180" min="0" oninput="EMT.calcSpot()"></label>';
  html += '<label>中长期合同电量（兆瓦时）<input type="number" id="sp-cq" step="10" value="800" min="0" oninput="EMT.calcSpot()"></label>';
  html += '<label>中长期合同价（元/兆瓦时）<input type="number" id="sp-cp" step="10" value="400" min="0" oninput="EMT.calcSpot()"></label>';
  html += '</div>';
  html += '<div id="sp-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 储能套利测算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇅</span>储能峰谷套利收益测算</h3>';
  html += '<p class="lab-desc">低充高放赚价差，但要先扣掉循环效率损耗与运维成本。填一组参数，看<b>单次收益、年净收益、静态回收期</b>，以及容易被高估的那个"年循环次数"。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>储能容量（兆瓦时）<input type="number" id="st-cap" step="10" value="100" min="0" oninput="EMT.calcStorage()"></label>';
  html += '<label>循环效率（%）<input type="number" id="st-eff" step="1" value="88" min="1" max="100" oninput="EMT.calcStorage()"></label>';
  html += '<label>谷段电价（元/度）<input type="number" id="st-v" step="0.01" value="0.30" min="0" oninput="EMT.calcStorage()"></label>';
  html += '<label>峰段电价（元/度）<input type="number" id="st-p" step="0.01" value="1.00" min="0" oninput="EMT.calcStorage()"></label>';
  html += '<label>日循环次数<input type="number" id="st-cyc" step="1" value="1" min="0" oninput="EMT.calcStorage()"></label>';
  html += '<label>年运行天数<input type="number" id="st-days" step="10" value="330" min="0" max="366" oninput="EMT.calcStorage()"></label>';
  html += '<label>单位投资（元/瓦时）<input type="number" id="st-inv" step="0.05" value="1.00" min="0" oninput="EMT.calcStorage()"></label>';
  html += '<label>年运维系数（占投资%）<input type="number" id="st-om" step="0.1" value="1.5" min="0" oninput="EMT.calcStorage()"></label>';
  html += '</div>';
  html += '<div id="st-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 绿电与碳减排测算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">CO₂</span>绿电与碳减排测算</h3>';
  html += '<p class="lab-desc">买绿电要付溢价，但能换来减排量与潜在的碳成本节省。填一组参数，看<b>减了多少碳、溢价花了多少、单位减碳成本是多少</b>——这个数才是和别人比价的正确口径。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年用电量（万度）<input type="number" id="gc-e" step="10" value="5000" min="0" oninput="EMT.calcGreen()"></label>';
  html += '<label>绿电比例（%）<input type="number" id="gc-r" step="1" value="30" min="0" max="100" oninput="EMT.calcGreen()"></label>';
  html += '<label>电网排放因子（吨 CO₂/兆瓦时）<input type="number" id="gc-ef" step="0.01" value="0.50" min="0" oninput="EMT.calcGreen()"></label>';
  html += '<label>绿电溢价（元/度）<input type="number" id="gc-prem" step="0.01" value="0.03" min="0" oninput="EMT.calcGreen()"></label>';
  html += '<label>碳价（元/吨）<input type="number" id="gc-cp" step="1" value="90" min="0" oninput="EMT.calcGreen()"></label>';
  html += '</div>';
  html += '<div id="gc-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：五件工具均为本地教学测算，不含电网安全约束、阻塞与网损、机组启停与爬坡约束、分时段结算细则差异、考核分摊与税费结构等复杂因素，结果不作为投资、报价或结算依据。</p>';
  html += '</div>';
  EMT.render(html);
  EMT.calcSD(); EMT.calcTOU(); EMT.calcSpot(); EMT.calcStorage(); EMT.calcGreen();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}

/* ---- 1. 供需曲线与出清 ---- */
EMT.calcSD = function() {
  var el = document.getElementById('sd-result');
  if (!el) return;
  var demand = EMT._num('sd-demand');
  var units = [
    { n: 'A', p: EMT._num('sd-ap'), q: EMT._num('sd-aq') },
    { n: 'B', p: EMT._num('sd-bp'), q: EMT._num('sd-bq') },
    { n: 'C', p: EMT._num('sd-cp'), q: EMT._num('sd-cq') },
    { n: 'D', p: EMT._num('sd-dp'), q: EMT._num('sd-dq') }
  ];
  if (demand === null || demand <= 0 || units.some(function(u) { return u.p === null || u.q === null || u.p < 0 || u.q < 0; })) {
    el.innerHTML = '<div class="calc-warn">请填写有效的需求与各机组报价、容量（需求需大于 0）。</div>'; return;
  }
  units.sort(function(a, b) { return a.p - b.p; });
  var left = demand, rows = '', marginal = null, cost = 0, awarded = 0;
  for (var i = 0; i < units.length; i++) {
    var u = units[i];
    var win = Math.min(u.q, left);
    left -= win;
    if (win > 0.0001) {
      awarded += win;
      cost += win * u.p;
      if (left <= 0.0001 && !marginal) marginal = u;
    }
    rows += tr('机组 ' + u.n + '（报价 ' + EMT._fix(u.p, 2) + ' 元/度）',
      win > 0.0001 ? EMT._w(win, 0) + ' 万千瓦（中标）' : '未中标',
      win > 0.0001 ? '' : 'cr-bad',
      '容量 ' + EMT._w(u.q, 0) + ' 万千瓦' + (marginal && marginal.n === u.n ? '；边际机组，其报价决定全市场价' : ''));
  }
  var clear = marginal ? marginal.p : null;
  var totalCap = units.reduce(function(s, u) { return s + u.q; }, 0);
  var short = left > 0.0001;
  var avg = awarded > 0 ? cost / awarded : 0;

  var out = '';
  out += tr('出清价格（边际机组报价）', clear === null ? '不适用' : EMT._fix(clear, 2) + ' 元/度', clear === null ? 'cr-bad' : 'cr-good',
    clear === null ? '没有任何机组被选中' : '边际机组 ' + marginal.n + '；统一按此价结算，报价更低的机组获得差额收益');
  out += tr('总中标容量', EMT._w(awarded, 0) + ' 万千瓦' + (short ? '（不足，缺口 ' + EMT._w(left, 0) + ' 万千瓦）' : ''), short ? 'cr-bad' : 'cr-good',
    '系统总装机 ' + EMT._w(totalCap, 0) + ' 万千瓦，负荷需求 ' + EMT._w(demand, 0) + ' 万千瓦');
  out += tr('购电总成本（按 1 小时计）', EMT._w(cost, 2) + ' 万元', '', 'Σ（中标容量 × 各自报价）；1 万千瓦 × 1 小时 = 1 万度');
  out += tr('平均购电价', EMT._fix(avg, 3) + ' 元/度', '', '总成本 ÷ 总中标电量；与出清价比较，可看出低价机组的"节省"');

  var note = '';
  if (short) note = '<p class="calc-note"><b>容量不足：</b>所有机组全开也满足不了需求。现实中这会触发需求响应、拉闸限电或紧急购电——<b>这也是容量机制存在的理由</b>。</p>';
  else if (clear !== null) {
    var saved = (clear - avg) * awarded;
    note = '<p class="calc-note">若按各机组自己的报价分别结算，总成本会是 ' + EMT._w(cost, 2) + ' 万元；统一按边际价结算后总成本为 ' + EMT._w(clear * awarded, 2) + ' 万元。差额 ' + EMT._w(saved, 2) + ' 万元就是低价机组获得的"生产者剩余"——<b>这笔钱正是激励大家报出真实成本的报酬</b>。反过来看：如果边际机组报价抬高 0.01 元/度，全社会购电成本就增加 ' + EMT._w(awarded * 0.01, 2) + ' 万元。</p>';
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table><table class="cr-table" style="margin-top:12px">' + out + '</table>' + note +
    '<p class="calc-note">这是只有 4 台机组的玩具模型。<b>真实出清要同时满足机组技术约束（最小出力、爬坡、启停）与电网安全约束（线路不过载、电压不越限）</b>，还要处理分区或节点差异，因此实际结果可能与"纯经济排序"不同。</p>';
};

/* ---- 2. 峰谷分时电费 ---- */
EMT.calcTOU = function() {
  var el = document.getElementById('ou-result');
  if (!el) return;
  var q = EMT._num('ou-q'), p = EMT._num('ou-p'), f = EMT._num('ou-f'), v = EMT._num('ou-v');
  var pr = EMT._num('ou-pr'), vr = EMT._num('ou-vr'), shift = EMT._num('ou-shift');
  if ([q, p, f, v, pr, vr, shift].some(function(x) { return x === null; }) || q < 0 || pr < 0 || vr < 0 || pr + vr > 100) {
    el.innerHTML = '<div class="calc-warn">请填写有效数值；峰段与谷段占比之和不能超过 100%。</div>'; return;
  }
  var fr = 100 - pr - vr;
  var qp = q * pr / 100, qf = q * fr / 100, qv = q * vr / 100;
  var cost0 = qp * p + qf * f + qv * v;
  var avg0 = q > 0 ? cost0 / q : 0;
  var move = qp * shift / 100;
  var qp2 = qp - move, qv2 = qv + move;
  var cost1 = qp2 * p + qf * f + qv2 * v;
  var save = cost0 - cost1;
  var pct = cost0 > 0 ? save / cost0 * 100 : 0;

  var rows = '';
  rows += tr('峰段电量', EMT._w(qp, 2) + ' 万度', '', '占比 ' + EMT._fix(pr, 1) + '%，电价 ' + EMT._fix(p, 2) + ' 元/度');
  rows += tr('平段电量', EMT._w(qf, 2) + ' 万度', '', '占比 ' + EMT._fix(fr, 1) + '%，电价 ' + EMT._fix(f, 2) + ' 元/度');
  rows += tr('谷段电量', EMT._w(qv, 2) + ' 万度', '', '占比 ' + EMT._fix(vr, 1) + '%，电价 ' + EMT._fix(v, 2) + ' 元/度');
  rows += tr('当前月电费', EMT._w(cost0, 2) + ' 万元', '');
  rows += tr('当前平均单价', EMT._fix(avg0, 3) + ' 元/度', 'cr-warn', '平均单价才是可横向比较的口径，不要只看单一时段电价');
  rows += tr('峰→谷可转移电量', EMT._w(move, 2) + ' 万度', '', '峰段电量 × 可转移比例 ' + EMT._fix(shift, 0) + '%');
  rows += tr('优化后月电费', EMT._w(cost1, 2) + ' 万元', 'cr-good', '峰段减少、谷段等量增加');
  rows += tr('每月节省', EMT._w(save, 2) + ' 万元', save > 0 ? 'cr-good' : 'cr-bad', '降幅 ' + EMT._fix(pct, 2) + '%');
  rows += tr('折合年节省', EMT._w(save * 12, 2) + ' 万元', save > 0 ? 'cr-good' : '', '按月均水平粗略外推 12 个月');
  rows += tr('折算度电节省', EMT._fix(q > 0 ? save / q : 0, 4) + ' 元/度', '', '节省金额 ÷ 总用电量，用来判断值不值得调整工艺');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note"><b>错峰是"零投入降本"里性价比最高的一类</b>，但有三个前提：不影响产品质量、不违反劳动与安全规定、不增加设备损耗。注：近年光伏装机增长使不少省份把<b>午间也划为低谷</b>，"两峰一谷"的时段划分在多地已改变——<b>算之前先确认本省现行时段表</b>。本测算未考虑需量电费（基本电费）变化。</p>';
};

/* ---- 3. 现货结算演练 ---- */
EMT.calcSpot = function() {
  var el = document.getElementById('sp-result');
  if (!el) return;
  var daq = EMT._num('sp-daq'), dap = EMT._num('sp-dap'), rtq = EMT._num('sp-rtq');
  var rtp = EMT._num('sp-rtp'), cq = EMT._num('sp-cq'), cp = EMT._num('sp-cp');
  if ([daq, dap, rtq, rtp, cq, cp].some(function(x) { return x === null; }) || daq < 0 || dap < 0 || rtq < 0 || rtp < 0 || cq < 0 || cp < 0) {
    el.innerHTML = '<div class="calc-warn">请填写有效数值（均需非负）。</div>'; return;
  }
  var daIncome = dap * daq;                       /* 元 */
  var dev = rtq - daq;                            /* 兆瓦时 */
  var rtIncome = rtp * dev;                       /* 元(可为负) */
  var cVol = Math.min(cq, rtq);                   /* 差价按实际可交割电量计 */
  var cfd = (cp - dap) * cVol;                    /* 元(可为负) */
  var total = daIncome + rtIncome + cfd;
  var avg = rtq > 0 ? total / rtq : 0;
  var devCost = rtp * dev;

  var rows = '';
  rows += tr('日前收入', EMT._w(daIncome / 10000, 2) + ' 万元', '', EMT._w(daq, 0) + ' 兆瓦时 × ' + EMT._fix(dap, 0) + ' 元/兆瓦时');
  rows += tr('实际与日前偏差', (dev >= 0 ? '超发 ' : '少发 ') + EMT._w(Math.abs(dev), 0) + ' 兆瓦时', Math.abs(dev) < 0.001 ? 'cr-good' : 'cr-warn',
    Math.abs(dev) < 0.001 ? '申报与实际完全一致，无偏差风险' : '偏差电量按实时价格清算');
  rows += tr('实时偏差结算', (rtIncome >= 0 ? '' : '−') + EMT._w(Math.abs(rtIncome) / 10000, 2) + ' 万元', devCost >= 0 ? 'cr-good' : 'cr-bad',
    '偏差 ' + EMT._w(dev, 0) + ' × 实时价 ' + EMT._fix(rtp, 0) + ' 元/兆瓦时');
  rows += tr('中长期差价补偿', (cfd >= 0 ? '' : '−') + EMT._w(Math.abs(cfd) / 10000, 2) + ' 万元', cfd >= 0 ? 'cr-good' : 'cr-bad',
    '（合同价 ' + EMT._fix(cp, 0) + ' − 日前价 ' + EMT._fix(dap, 0) + '）× 合同电量 ' + EMT._w(cVol, 0) + ' 兆瓦时');
  rows += tr('结算总收入', EMT._w(total / 10000, 2) + ' 万元', total >= 0 ? 'cr-good' : 'cr-bad', '三笔相加');
  rows += tr('平均结算电价', EMT._fix(avg, 1) + ' 元/兆瓦时', '', '总收入 ÷ 实际发电量；这才是可比口径');

  var cmp = '';
  if (Math.abs(dev) > 0.5) {
    var perfect = dap * rtq + cfd + 0;
    var diff = total - perfect;
    cmp = '<p class="calc-note"><b>偏差的代价：</b>若日前申报与实际完全一致（' + EMT._w(rtq, 0) + ' 兆瓦时），收入会是 ' +
      EMT._w(perfect / 10000, 2) + ' 万元；实际因偏差 ' + EMT._w(dev, 0) + ' 兆瓦时，收入变化 ' +
      (diff >= 0 ? '+' : '−') + EMT._w(Math.abs(diff) / 10000, 2) + ' 万元。' +
      (diff < 0 ? '<b>预报偏差直接吃掉了收益</b>——这正是新能源场站提升功率预测精度的经济意义。' : '<b>这次偏差恰好帮了忙（实时价高于日前价）</b>，但靠偏差赚钱不可持续。') + '</p>';
  }
  el.innerHTML = '<table class="cr-table">' + rows + '</table>' + cmp +
    '<p class="calc-note">模型采用"全电量现货出清 + 中长期差价结算"的简化口径，差价以日前价为参考价，未考虑分时段结算、考核费用、辅助服务分摊、输配电价与政府性基金。<b>真实结算单的项目远比这复杂</b>，但三笔钱的逻辑就是这些。</p>';
};

/* ---- 4. 储能峰谷套利 ---- */
EMT.calcStorage = function() {
  var el = document.getElementById('st-result');
  if (!el) return;
  var cap = EMT._num('st-cap'), eff = EMT._num('st-eff'), v = EMT._num('st-v'), p = EMT._num('st-p');
  var cyc = EMT._num('st-cyc'), days = EMT._num('st-days'), inv = EMT._num('st-inv'), om = EMT._num('st-om');
  if ([cap, eff, v, p, cyc, days, inv, om].some(function(x) { return x === null; }) || cap <= 0 || eff <= 0 || eff > 100 || v < 0 || p < 0 || cyc < 0 || days < 0 || days > 366 || inv < 0 || om < 0) {
    el.innerHTML = '<div class="calc-warn">请填写有效数值（容量与效率需大于 0，效率不超过 100%，年运行天数不超过 366）。</div>'; return;
  }
  var chg = cap * 1000;                 /* 单次充电量 kWh */
  var dis = chg * eff / 100;            /* 单次放电量 kWh */
  var gain = dis * p - chg * v;         /* 单次收益 元 */
  var disYear = dis * cyc * days;       /* 年放电量 kWh */
  var revY = gain * cyc * days / 10000; /* 年收益 万元 */
  var capex = cap * 100 * inv;          /* 投资 万元 */
  var omY = capex * om / 100;           /* 年运维 万元 */
  var netY = revY - omY;
  var payback = netY > 0 ? capex / netY : null;
  var lcos = disYear > 0 ? (capex / 10 + omY) * 10000 / disYear : null;  /* 按 10 年寿命摊 */

  var rows = '';
  rows += tr('单次充电量', EMT._w(chg, 0) + ' 度', '', '容量 ' + EMT._w(cap, 0) + ' 兆瓦时 = ' + EMT._w(chg, 0) + ' 度');
  rows += tr('单次放电量', EMT._w(dis, 0) + ' 度', '', '充电量 × 循环效率 ' + EMT._fix(eff, 0) + '%，损耗 ' + EMT._fix(100 - eff, 1) + '%');
  rows += tr('单次充电成本', EMT._w(chg * v / 10000, 4) + ' 万元', '', EMT._w(chg, 0) + ' 度 × ' + EMT._fix(v, 2) + ' 元/度（谷）');
  rows += tr('单次放电收入', EMT._w(dis * p / 10000, 4) + ' 万元', '', EMT._w(dis, 0) + ' 度 × ' + EMT._fix(p, 2) + ' 元/度（峰）');
  rows += tr('单次套利收益', EMT._w(gain / 10000, 4) + ' 万元', gain > 0 ? 'cr-good' : 'cr-bad',
    gain > 0 ? '折算度电净收益 ' + EMT._fix(dis > 0 ? gain / dis : 0, 3) + ' 元/度' : '价差不足以覆盖效率损耗，这种价差下套利不成立');
  rows += tr('年放电量', EMT._w(disYear, 0) + ' 度', '', '单次放电 × ' + EMT._fix(cyc, 0) + ' 次/日 × ' + EMT._fix(days, 0) + ' 天');
  rows += tr('年毛收益', EMT._w(revY, 2) + ' 万元', revY > 0 ? 'cr-good' : 'cr-bad', '单次收益 × 年循环次数');
  rows += tr('总投资', EMT._w(capex, 2) + ' 万元', '', EMT._w(cap, 0) + ' 兆瓦时 × ' + EMT._fix(inv, 2) + ' 元/瓦时');
  rows += tr('年运维成本', EMT._w(omY, 2) + ' 万元', 'cr-warn', '按投资 ' + EMT._fix(om, 1) + '% 计');
  rows += tr('年净收益', EMT._w(netY, 2) + ' 万元', netY > 0 ? 'cr-good' : 'cr-bad', '年毛收益 − 年运维');
  rows += tr('静态回收期', payback === null ? '不适用（年净收益非正）' : EMT._fix(payback, 1) + ' 年', payback === null ? 'cr-bad' : (payback <= 8 ? 'cr-good' : (payback <= 12 ? 'cr-warn' : 'cr-bad')),
    payback === null ? '需重新审视价差、投资或运行次数假设' : '总投资 ÷ 年净收益，未考虑资金时间价值与电池衰减');
  rows += tr('度电成本（按 10 年寿命摊）', lcos === null ? '不适用' : EMT._fix(lcos, 3) + ' 元/度', 'cr-warn',
    '（投资 ÷ 10 + 年运维）÷ 年放电量；低于峰谷价差才有套利空间');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note"><b>最容易被高估的参数是"日循环次数"和"年运行天数"。</b>设计按每天 2 次、全年 365 天算，实际可能因峰谷时段只有一个价差窗口，一年只做到 300 多次——收益直接腰斩。此外本模型未计入电池衰减（容量逐年下降）、辅助服务收益、容量补偿与容量租赁收入，也未考虑需量电费与税费。<b>把这几项单独立成"有/无"两套情景再比一次，才是靠谱的测算。</b></p>';
};

/* ---- 5. 绿电与碳减排 ---- */
EMT.calcGreen = function() {
  var el = document.getElementById('gc-result');
  if (!el) return;
  var e = EMT._num('gc-e'), r = EMT._num('gc-r'), ef = EMT._num('gc-ef'), prem = EMT._num('gc-prem'), cp = EMT._num('gc-cp');
  if ([e, r, ef, prem, cp].some(function(x) { return x === null; }) || e < 0 || r < 0 || r > 100 || ef < 0 || prem < 0 || cp < 0) {
    el.innerHTML = '<div class="calc-warn">请填写有效数值（比例为 0–100%，其余非负）。</div>'; return;
  }
  var gq = e * r / 100;              /* 绿电电量 万度 */
  var mwh = gq * 10;                 /* 兆瓦时 */
  var cut = mwh * ef;                /* 吨 */
  var costW = gq * prem;             /* 万元 */
  var saveW = cut * cp / 10000;      /* 万元 */
  var netW = costW - saveW;
  var unit = cut > 0 ? costW * 10000 / cut : null;

  var rows = '';
  rows += tr('绿电电量', EMT._w(gq, 2) + ' 万度', '', '总用电 ' + EMT._w(e, 0) + ' 万度 × 绿电比例 ' + EMT._fix(r, 1) + '%（≈ ' + EMT._w(mwh, 0) + ' 兆瓦时）');
  rows += tr('对应减碳量', EMT._w(cut, 2) + ' 吨 CO₂', cut > 0 ? 'cr-good' : '', '绿电兆瓦时 × 电网排放因子 ' + EMT._fix(ef, 2) + ' 吨/兆瓦时');
  rows += tr('绿电溢价成本', EMT._w(costW, 2) + ' 万元', 'cr-warn', EMT._w(gq, 2) + ' 万度 × 溢价 ' + EMT._fix(prem, 3) + ' 元/度');
  rows += tr('潜在碳成本节省', EMT._w(saveW, 2) + ' 万元', saveW > 0 ? 'cr-good' : '', '减碳量 × 碳价 ' + EMT._fix(cp, 0) + ' 元/吨（仅在可核算、可抵销时成立）');
  rows += tr('净成本', EMT._w(netW, 2) + ' 万元', netW > 0 ? 'cr-warn' : 'cr-good', netW > 0 ? '溢价支出大于碳成本节省' : '碳成本节省已覆盖溢价支出');
  rows += tr('单位减碳成本', unit === null ? '不适用' : EMT._fix(unit, 1) + ' 元/吨 CO₂', 'cr-warn',
    '溢价成本 ÷ 减碳量；<b>这才是不同减排路径之间可比较的口径</b>（如与节能改造、CCER 采购比价）');
  rows += tr('占用电总成本比例', EMT._fix(e > 0 ? costW / (e * 0.6) * 100 : 0, 2) + '%', '',
    '按 0.6 元/度均价粗估电费基数；用于判断这笔支出对成本的量级');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note"><b>三个必须核实的点：</b>①减排量能不能在碳核算里被认可（排放因子口径、绿证是否已核销）；②绿电溢价能否被客户或市场接受（很多企业的动机是合规与客户准入，不是电价）；③<b>同一份绿色权益只能主张一次</b>——绿电交易、绿证核销与碳减排声明三者必须一致，重复主张会带来合规风险。排放因子取值各地各年不同，请以现行公布的因子与核算规则为准。</p>';
};

/* ===== 模块页 ===== */
EMT.views.module = function(id) {
  var mod = EMT.modules.find(function(m) { return m.id === id; });
  if (!mod) { EMT.views.home(); return; }
  var P = EMT.progress();
  var lessons = EMT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + EMT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + EMT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = EMT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + EMT.esc(title) + '</a>';
    else html += '<span class="title">' + EMT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及电价机制、市场规则、补贴政策或考核标准，正文均已标注政策依据与适用期，<b>内容基线为 2026 年 9 月</b>。请以国家发展改革委、国家能源局及各省主管部门发布的现行规则、办法与交易细则为准。本站不构成投资、交易、报价或法律意见。</p></div>';
  html += '</div>';
  EMT.render(html);
};

/* ===== 术语 ===== */
EMT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>电力市场名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 节点电价 / 中长期 / 绿证 / CCER / 辅助服务 / 机制电价" oninput="EMT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(EMT.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与政策文件、市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅规则原文与专业文献。内容基线 2026 年 9 月。</p></div>';
  html += '</div>';
  EMT.render(html);
};
EMT.filterTerms = function(q) {
  var filtered = EMT.terms;
  if (q) { q = q.toLowerCase();
    filtered = EMT.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || (t.en || '').toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + EMT.esc(t.name) + ' <span class="term-en">' + EMT.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + EMT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + EMT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
EMT.views.myTerms = function() {
  var P = EMT.progress(); var collected = [];
  for (var i = 0; i < EMT.terms.length; i++) if (P.hasTerm(EMT.terms[i].id)) collected.push(EMT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  EMT.render(html);
};

/* ===== 搜索 ===== */
EMT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 现货 / 节点电价 / 机制电价 / 绿证 / 配额 / 偏差考核" oninput="EMT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  EMT.render(html);
};
EMT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = EMT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + EMT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + EMT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
EMT.views.settings = function() {
  var P = EMT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="EMT.setTheme(\'dark\')">深色 · 电光青金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="EMT.setTheme(\'light\')">浅色 · 电蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="EMT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="EMT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="EMT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = EMT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/emt-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/emt-progress" value="' + EMT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + EMT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + EMT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + EMT.esc(EMT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="EMT.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="EMT.clearData()">清除数据</button></div>';
  html += '</div>';
  EMT.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    EMT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!EMT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    EMT.sync.pullNow().then(function () { return EMT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + EMT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    EMT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : EMT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    EMT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
EMT.setTheme = function(t) { document.documentElement.dataset.theme = t; EMT.progress().setPref('theme', t); EMT.views.settings(); };
EMT.setFontSize = function(s) { document.documentElement.dataset.fs = s; EMT.progress().setPref('fontSize', s); EMT.views.settings(); };
EMT.exportData = function() {
  var data = EMT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'emt-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
EMT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('emt.progress.v1');
    window.location.reload();
  }
};
