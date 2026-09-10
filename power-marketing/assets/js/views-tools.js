/* 工具视图:五件电力营销互动工具(电费清单测算 / 功率因数与无功补偿 / 业扩报装方案 / 需求响应收益 / 客户电费风险评分)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   ⚠️ 全部为本地简化测算,结果仅作理解机制之用,不构成业务办理、收费、结算或合规依据。 */
window.EMK = window.EMK || {};
EMK.views = EMK.views || {};

EMK._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
EMK._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
EMK._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
EMK.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">营销的规则,光看文字不算懂。这五个小工具把课里的口径变成可拨动的数字:<b>一张电费单是怎么加出来的、无功补偿能省多少钱、报装要走到哪一步、需求响应一年能拿回多少、这个客户的电费风险有多高。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>五件工具均为<b>极度简化的教学测算</b>:电价按示例参数代入,不体现各省电价表差异、分时电量结构、需量取值规则、力率调整的完整档位与上下限、基本电费计费方式变更条件、基金附加的具体项目、税费与优惠政策叠加等细节。<b>不作为业务办理、收费、结算、合规或法律依据。</b>实际业务一律以现行有效的价格文件、业务规则与供用电合同约定为准。</p>';
  html += '</div>';

  // 1. 电费清单测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>电费清单测算器</h3>';
  html += '<p class="lab-desc">一张电费单不是一个数乘出来的。选一种计费方式,看电度电费、基本电费、力率调整与基金附加分别加出多少,以及<b>平均电价</b>被拉到了什么水平。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>计费方式<select id="bl-mode" onchange="EMK.calcBill()"><option value="single">单一制(只按电量)</option><option value="cap">两部制 · 按容量</option><option value="dem" selected>两部制 · 按需量</option></select></label>';
  html += '<label>月用电量(kWh)<input type="number" id="bl-kwh" step="100" value="20000" min="0" oninput="EMK.calcBill()"></label>';
  html += '<label>电度电价(元/kWh)<input type="number" id="bl-price" step="0.01" value="0.65" min="0" oninput="EMK.calcBill()"></label>';
  html += '<label>容量或需量(kVA / kW)<input type="number" id="bl-cap" step="10" value="160" min="0" oninput="EMK.calcBill()"></label>';
  html += '<label>基本电费单价(元/kVA·月 或 元/kW·月)<input type="number" id="bl-caprice" step="1" value="30" min="0" oninput="EMK.calcBill()"></label>';
  html += '<label>功率因数<input type="number" id="bl-pf" step="0.01" value="0.85" min="0.1" max="1" oninput="EMK.calcBill()"></label>';
  html += '<label>基金及附加(元/kWh)<input type="number" id="bl-fund" step="0.001" value="0.03" min="0" oninput="EMK.calcBill()"></label>';
  html += '</div>';
  html += '<div id="bl-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 功率因数与无功补偿测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≈</span>功率因数与无功补偿测算器</h3>';
  html += '<p class="lab-desc">功率因数低于考核标准要被加收电费,补上去还能减收。算出<b>需要补多少千乏</b>,以及补偿前后力率调整电费差多少、一年能省回多少。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>有功功率(kW)<input type="number" id="pf-p" step="10" value="800" min="0" oninput="EMK.calcPF()"></label>';
  html += '<label>当前功率因数<input type="number" id="pf-now" step="0.01" value="0.78" min="0.1" max="0.99" oninput="EMK.calcPF()"></label>';
  html += '<label>目标功率因数<input type="number" id="pf-target" step="0.01" value="0.95" min="0.5" max="1" oninput="EMK.calcPF()"></label>';
  html += '<label>考核标准<input type="number" id="pf-std" step="0.01" value="0.90" min="0.7" max="1" oninput="EMK.calcPF()"></label>';
  html += '<label>月电度电费基数(元)<input type="number" id="pf-base" step="1000" value="80000" min="0" oninput="EMK.calcPF()"></label>';
  html += '</div>';
  html += '<div id="pf-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 业扩报装方案测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▣</span>业扩报装方案测算器</h3>';
  html += '<p class="lab-desc">客户报装容量一填,供电电压等级、计量方式、办电环节与<b>各环节时限参考</b>就出来了。体会一件事:容量决定了整个办电的路径。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>报装容量(kW)<input type="number" id="cn-kw" step="10" value="250" min="0" oninput="EMK.calcConnect()"></label>';
  html += '<label>用电类别<select id="cn-type" onchange="EMK.calcConnect()"><option value="res">居民生活</option><option value="com" selected>一般工商业</option><option value="ind">大工业</option></select></label>';
  html += '<label>供电电源<select id="cn-src" onchange="EMK.calcConnect()"><option value="single" selected>单电源</option><option value="dual">双电源(重要客户)</option></select></label>';
  html += '<label>是否需要受电工程<select id="cn-proj" onchange="EMK.calcConnect()"><option value="yes" selected>需要(自有变配电设施)</option><option value="no">不需要(直接低压接电)</option></select></label>';
  html += '</div>';
  html += '<div id="cn-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 需求响应收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊗</span>需求响应收益测算器</h3>';
  html += '<p class="lab-desc">客户手里的可调负荷,在电网需要的时候让出来能拿多少补偿?算单次与全年收益,并和「这部分电本来就该花的钱」做个对比。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可调负荷容量(kW)<input type="number" id="dr-kw" step="50" value="1000" min="0" oninput="EMK.calcDR()"></label>';
  html += '<label>单次响应时长(h)<input type="number" id="dr-h" step="0.5" value="2" min="0" oninput="EMK.calcDR()"></label>';
  html += '<label>实际削减率(%)<input type="number" id="dr-rate" step="5" value="80" min="0" max="100" oninput="EMK.calcDR()"></label>';
  html += '<label>年响应次数(次)<input type="number" id="dr-times" step="1" value="20" min="0" oninput="EMK.calcDR()"></label>';
  html += '<label>补偿标准(元/kWh)<input type="number" id="dr-price" step="0.5" value="4" min="0" oninput="EMK.calcDR()"></label>';
  html += '<label>该时段原电价(元/kWh)<input type="number" id="dr-tariff" step="0.01" value="1.2" min="0" oninput="EMK.calcDR()"></label>';
  html += '</div>';
  html += '<div id="dr-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 客户电费风险评分器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>客户电费风险评分器</h3>';
  html += '<p class="lab-desc">从缴费行为看一个客户的电费风险有多高。输入的每一项都会影响评分,输出风险等级与对应的服务与催收策略建议。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>月均电费(元)<input type="number" id="rk-amt" step="1000" value="50000" min="0" oninput="EMK.calcRisk()"></label>';
  html += '<label>近一年欠费次数(次)<input type="number" id="rk-times" step="1" value="2" min="0" oninput="EMK.calcRisk()"></label>';
  html += '<label>最长欠费天数(天)<input type="number" id="rk-days" step="5" value="35" min="0" oninput="EMK.calcRisk()"></label>';
  html += '<label>按期缴费率(%)<input type="number" id="rk-rate" step="5" value="80" min="0" max="100" oninput="EMK.calcRisk()"></label>';
  html += '<label>客户类型<select id="rk-type" onchange="EMK.calcRisk()"><option value="res">居民</option><option value="com">一般工商业</option><option value="ind" selected>大工业</option><option value="gov">机关事业</option></select></label>';
  html += '<label>经营或景气状况<select id="rk-biz" onchange="EMK.calcRisk()"><option value="good">良好</option><option value="normal" selected>一般</option><option value="bad">偏紧</option></select></label>';
  html += '</div>';
  html += '<div id="rk-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:五件工具均为教学用简化建模,参数取行业常见量级概数,电价与补偿标准为示例值。<b>实际业务必须依据本地现行电价表、业务规则与客户实际情况单独核算</b>,本工具结果不作为业务办理、收费、结算或合规依据。</p>';
  html += '</div>';
  EMK.render(html);
  EMK.calcBill(); EMK.calcPF(); EMK.calcConnect(); EMK.calcDR(); EMK.calcRisk();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. 电费清单 ---- */
EMK.calcBill = function() {
  var el = document.getElementById('bl-result');
  if (!el) return;
  var mode = document.getElementById('bl-mode').value;
  var kwh = EMK._num('bl-kwh'), price = EMK._num('bl-price'), cap = EMK._num('bl-cap');
  var caprice = EMK._num('bl-caprice'), pf = EMK._num('bl-pf'), fund = EMK._num('bl-fund');
  if (kwh === null || price === null || pf === null || pf <= 0 || pf > 1) {
    el.innerHTML = warn('请填写有效的用电量、电度电价与功率因数（功率因数需在 0 与 1 之间）。'); return;
  }

  var energy = kwh * price;
  var basic = (mode === 'single') ? 0 : (cap || 0) * (caprice || 0);
  var std = 0.90;
  var diff = Math.round((std - pf) * 100);
  var adjPct;
  if (diff > 0) adjPct = Math.min(10, diff * 0.5);
  else adjPct = -Math.min(1.1, (-diff) * 0.15);
  var adj = energy * adjPct / 100;
  var fundFee = kwh * (fund || 0);
  var total = energy + basic + adj + fundFee;
  var avg = kwh > 0 ? total / kwh : 0;

  var modeName = mode === 'single' ? '单一制' : (mode === 'cap' ? '两部制 · 按容量' : '两部制 · 按需量');
  var lvl, lvlCls;
  if (adjPct > 0) { lvl = '功率因数偏低，电费被加收'; lvlCls = 'cr-bad'; }
  else if (adjPct < 0) { lvl = '功率因数达标，电费获减收'; lvlCls = 'cr-good'; }
  else { lvl = '功率因数正好在标准线上'; lvlCls = ''; }

  var out = '<table class="cr-table">';
  out += tr('计费方式', modeName, '', '示例参数，非实际电价表');
  out += tr('电度电费', EMK._w(energy, 2) + ' 元', '', EMK._w(kwh, 0) + ' kWh × ' + EMK._fix(price, 2) + ' 元');
  out += tr('基本电费', EMK._w(basic, 2) + ' 元', mode === 'single' ? 'cr-bad' : '',
    mode === 'single' ? '单一制不计基本电费' : EMK._w(cap || 0, 0) + ' × ' + EMK._fix(caprice || 0, 2) + ' 元');
  out += tr('力率调整电费', (adj >= 0 ? '+' : '−') + EMK._w(Math.abs(adj), 2) + ' 元', adj > 0 ? 'cr-bad' : (adj < 0 ? 'cr-good' : ''),
    '功率因数 ' + EMK._fix(pf, 2) + '，调整比例 ' + (adjPct >= 0 ? '+' : '') + EMK._fix(adjPct, 2) + '%');
  out += tr('基金及附加', EMK._w(fundFee, 2) + ' 元', '', EMK._w(kwh, 0) + ' kWh × ' + EMK._fix(fund || 0, 3) + ' 元');
  out += tr('电费合计', EMK._w(total, 2) + ' 元', 'cr-good', '四项相加');
  out += tr('平均电价', EMK._fix(avg, 4) + ' 元/kWh', '', '合计 ÷ 用电量');
  out += tr('力率判读', lvl, lvlCls, '以 ' + EMK._fix(std, 2) + ' 为标准');
  out += '</table>';
  out += '<p class="calc-note">看明白一件事:<b>电度电价乘电量只是账单的一部分。</b>两部制客户的基本电费与用电量无关——用电少的时候，它占总电费的比例反而更高，这就是"负荷率"对平均电价的影响。力率调整的作用是逼客户把无功补上去，减小电网损耗。简化规则:低于标准每 0.01 加收 0.5%，高于标准每 0.01 减收 0.15%，加收上限 10%、减收上限 1.1%。</p>';
  el.innerHTML = out;
};

/* ---- 2. 功率因数与无功补偿 ---- */
EMK.calcPF = function() {
  var el = document.getElementById('pf-result');
  if (!el) return;
  var P = EMK._num('pf-p'), now = EMK._num('pf-now'), target = EMK._num('pf-target');
  var std = EMK._num('pf-std'), base = EMK._num('pf-base');
  if (P === null || P <= 0 || now === null || target === null || now <= 0 || now > 1 || target <= 0 || target > 1) {
    el.innerHTML = warn('请填写有效的有功功率与功率因数（功率因数需在 0 与 1 之间）。'); return;
  }
  if (target <= now) {
    el.innerHTML = warn('目标功率因数需要高于当前值，否则不需要补偿。'); return;
  }

  var tan1 = Math.tan(Math.acos(now));
  var tan2 = Math.tan(Math.acos(target));
  var qc = P * (tan1 - tan2);
  var s1 = P / now, s2 = P / target;

  function adjPct(pf) {
    var d = Math.round((std - pf) * 100);
    if (d > 0) return Math.min(10, d * 0.5);
    return -Math.min(1.1, (-d) * 0.15);
  }
  var before = adjPct(now), after = adjPct(target);
  var saveMonth = (base || 0) * (before - after) / 100;
  var saveYear = saveMonth * 12;

  var out = '<table class="cr-table">';
  out += tr('当前有功功率', EMK._w(P, 1) + ' kW', '', '测算基准');
  out += tr('当前视在功率', EMK._w(s1, 1) + ' kVA', '', '有功 ÷ 功率因数');
  out += tr('补偿后视在功率', EMK._w(s2, 1) + ' kVA', 'cr-good', '可释放变压器容量 ' + EMK._w(s1 - s2, 1) + ' kVA');
  out += tr('需要补偿的无功容量', EMK._w(qc, 1) + ' kvar', 'cr-good', 'P × (tanφ₁ − tanφ₂)，向上取整配置电容器');
  out += tr('当前力率调整比例', (before >= 0 ? '+' : '') + EMK._fix(before, 2) + '%', before > 0 ? 'cr-bad' : '',
    before > 0 ? '低于 ' + EMK._fix(std, 2) + '，被加收' : '高于标准，获减收');
  out += tr('补偿后力率调整比例', (after >= 0 ? '+' : '') + EMK._fix(after, 2) + '%', after > 0 ? 'cr-bad' : 'cr-good', '目标功率因数 ' + EMK._fix(target, 2));
  out += tr('月节省电费(基数 ' + EMK._w(base || 0, 0) + ' 元)', EMK._w(saveMonth, 2) + ' 元', 'cr-good', '力率调整比例的差值 × 电度电费基数');
  out += tr('年节省电费', EMK._w(saveYear, 2) + ' 元', 'cr-good', '按 12 个月估算');
  out += '</table>';
  out += '<p class="calc-note">两点值得记住:<b>一是</b>补无功不只是省钱，还释放了变压器的视在容量——上例中可多带 ' + EMK._w(s1 - s2, 1) + ' kVA 的负荷，这对已经接近满载的客户很实用。<b>二是</b>补偿不是越多越好，过补偿(功率因数超过 1 的容性区)同样会被考核，所以要配自动投切的无功补偿装置，而不是固定电容器堆上去。以上加减比例是教学简化口径，实际按现行《功率因数调整电费办法》与本地实施细则执行。</p>';
  el.innerHTML = out;
};

/* ---- 3. 业扩报装方案 ---- */
EMK.calcConnect = function() {
  var el = document.getElementById('cn-result');
  if (!el) return;
  var kw = EMK._num('cn-kw');
  var type = document.getElementById('cn-type').value;
  var src = document.getElementById('cn-src').value;
  var proj = document.getElementById('cn-proj').value;
  if (kw === null || kw <= 0) { el.innerHTML = warn('请填写有效的报装容量（需大于 0）。'); return; }

  var kva = kw / 0.9;
  var volt, voltNote, metering, steps;
  if (kw <= 100) {
    volt = '低压 220 / 380 V'; voltNote = '小容量直接低压接入';
    metering = '低供低计（低压侧计量）';
    steps = ['申请受理', '现场勘查', '装表接电'];
  } else if (kva <= 8000) {
    volt = '中压 10 kV'; voltNote = '需建设受电变配电设施';
    metering = proj === 'yes' ? '高供高计 或 高供低计（依产权分界）' : '高供低计';
    steps = ['申请受理', '现场勘查', '供电方案答复', '设计审查', '中间检查', '竣工检验', '装表接电'];
  } else {
    volt = '高压 35 kV 及以上'; voltNote = '属大型客户，需专项接入系统论证';
    metering = '高供高计（关口计量 + 考核计量）';
    steps = ['申请受理', '现场勘查', '接入系统论证', '供电方案答复', '设计审查', '中间检查', '竣工检验', '装表接电'];
  }
  if (proj === 'no' && kw <= 100) steps = ['申请受理', '现场勘查', '装表接电'];
  if (src === 'dual') voltNote += '；双电源需明确两路电源的接入点与备用容量';

  var typeName = type === 'res' ? '居民生活' : (type === 'com' ? '一般工商业' : '大工业');
  var out = '<table class="cr-table">';
  out += tr('报装容量', EMK._w(kw, 0) + ' kW', '', '折算视在容量约 ' + EMK._w(kva, 0) + ' kVA（按 0.9 估算）');
  out += tr('客户类别', typeName, '', '影响电价类别、计量与时限要求');
  out += tr('建议供电电压', volt, 'cr-good', voltNote);
  out += tr('计量方式', metering, '', proj === 'yes' ? '有受电工程，按产权分界确定计量点' : '无受电工程');
  out += tr('供电电源', src === 'dual' ? '双电源' : '单电源', src === 'dual' ? 'cr-bad' : '', src === 'dual' ? '重要客户需双电源保障，可靠性与投资要求更高' : '常规单路供电');
  out += tr('办电环节数', steps.length + ' 个', '', steps.join(' → '));
  out += tr('受电工程', proj === 'yes' ? '需要，受理后走设计审查与竣工检验' : '不需要，流程可大幅压缩', proj === 'yes' ? '' : 'cr-good', proj === 'yes' ? '客户自有变配电设施由客户投资建设' : '低压直接接电');
  out += '</table>';
  out += '<p class="calc-note">这张表想说明的是:<b>报装容量决定了整个办电路径</b>。同一个客户，容量差一点、要不要建自己的变配电设施，走的是完全不同的流程，提交的材料、参与的部门、花的时间都不一样。这也是"获得电力"指标为什么盯住<b>环节数与时限</b>——压缩环节比压缩单个环节的时间更有效。各环节的具体时限以现行《供电营业规则》与本地公开的服务承诺为准。</p>';
  el.innerHTML = out;
};

/* ---- 4. 需求响应收益 ---- */
EMK.calcDR = function() {
  var el = document.getElementById('dr-result');
  if (!el) return;
  var kw = EMK._num('dr-kw'), h = EMK._num('dr-h'), rate = EMK._num('dr-rate');
  var times = EMK._num('dr-times'), price = EMK._num('dr-price'), tariff = EMK._num('dr-tariff');
  if (kw === null || kw <= 0 || h === null || h <= 0) {
    el.innerHTML = warn('请填写有效的可调负荷容量与响应时长（均需大于 0）。'); return;
  }

  var cut = kw * h * (rate || 0) / 100;
  var once = cut * (price || 0);
  var year = once * (times || 0);
  var savedTariff = cut * (tariff || 0);
  var totalOnce = once + savedTariff;
  var totalYear = totalOnce * (times || 0);
  var perKw = kw > 0 ? year / kw : 0;
  var hours = (times || 0) * h;

  var lvl, lvlCls;
  if (year >= 50000) { lvl = '收益可观，值得专门设计'; lvlCls = 'cr-good'; }
  else if (year >= 10000) { lvl = '有一定收益，可纳入日常负荷管理'; lvlCls = ''; }
  else { lvl = '收益有限，更适合作为附带动作'; lvlCls = 'cr-bad'; }

  var out = '<table class="cr-table">';
  out += tr('单次削减电量', EMK._w(cut, 0) + ' kWh', 'cr-good', EMK._w(kw, 0) + ' kW × ' + EMK._fix(h, 1) + ' h × ' + EMK._fix(rate || 0, 0) + '%');
  out += tr('单次补偿收益', EMK._w(once, 0) + ' 元', '', EMK._w(cut, 0) + ' kWh × ' + EMK._fix(price || 0, 2) + ' 元/kWh');
  out += tr('单次少花的电费', EMK._w(savedTariff, 0) + ' 元', 'cr-good', '削掉的电量本来要按 ' + EMK._fix(tariff || 0, 2) + ' 元/kWh 付');
  out += tr('单次合计收益', EMK._w(totalOnce, 0) + ' 元', 'cr-good', '补偿 + 少付电费');
  out += tr('全年收益', EMK._w(year, 0) + ' 元', lvlCls, EMK._w(times || 0, 0) + ' 次 × ' + EMK._w(once, 0) + ' 元（仅计补偿部分）');
  out += tr('全年含电费节省合计', EMK._w(totalYear, 0) + ' 元', 'cr-good', '补偿 + 电费节省');
  out += tr('单位容量年收益', EMK._w(perKw, 1) + ' 元/kW', '', '用于横向比较不同客户的可调价值');
  out += tr('全年响应时长', EMK._fix(hours, 1) + ' h', '', EMK._w(times || 0, 0) + ' 次 × ' + EMK._fix(h, 1) + ' h');
  out += tr('收益判读', lvl, lvlCls, '按全年补偿收益分档');
  out += '</table>';
  out += '<p class="calc-note">需求响应的账有两笔，别只算一笔:<b>补偿收益</b>是电网付给客户的，<b>电费节省</b>是客户本来就该花、现在不花了。两笔加起来才是客户真实得到的好处。反过来说，客户能不能参与，取决于它的负荷"能不能挪"——空调、充电桩、工业电炉容易被调用，连续生产线的负荷就难得多。<b>可调节能力本身就是一种资产</b>，这也是需求响应与虚拟电厂商业模式成立的前提。</p>';
  el.innerHTML = out;
};

/* ---- 5. 客户电费风险评分 ---- */
EMK.calcRisk = function() {
  var el = document.getElementById('rk-result');
  if (!el) return;
  var amt = EMK._num('rk-amt'), times = EMK._num('rk-times'), days = EMK._num('rk-days');
  var rate = EMK._num('rk-rate');
  var type = document.getElementById('rk-type').value;
  var biz = document.getElementById('rk-biz').value;
  if (amt === null || times === null || days === null || rate === null) {
    el.innerHTML = warn('请把四项数值填完整。'); return;
  }

  var sTimes = Math.min(25, (times || 0) * 4);
  var sDays = Math.min(25, (days || 0) / 60 * 25);
  var sRate = Math.min(25, (100 - (rate || 0)) / 100 * 25 * 1.6);
  var sAmt = Math.min(15, (amt || 0) / 200000 * 15);
  var typeAdj = type === 'res' ? -3 : (type === 'gov' ? -6 : (type === 'ind' ? 3 : 0));
  var bizAdj = biz === 'good' ? -5 : (biz === 'bad' ? 8 : 0);
  var score = Math.max(0, Math.min(100, sTimes + sDays + sRate + sAmt + 10 + typeAdj + bizAdj));

  var lvl, lvlCls, advice;
  if (score < 30) {
    lvl = '低风险'; lvlCls = 'cr-good';
    advice = '缴费记录良好，按常规账期服务即可。可优先推荐线上自动缴费、电费预存与用能分析等增值服务，把服务关系做深。';
  } else if (score < 55) {
    lvl = '中风险'; lvlCls = '';
    advice = '存在一定欠费倾向。建议在账期前主动提醒、引导签订银行代扣或预存协议，并在欠费发生的第一时间介入沟通，避免形成习惯性拖欠。';
  } else if (score < 75) {
    lvl = '较高风险'; lvlCls = 'cr-bad';
    advice = '欠费行为已较明显。建议收紧账期、明确催缴责任人，评估是否需要调整结算方式（如缩短账期、要求预存或提供担保），并留存完整的催缴与送达记录。';
  } else {
    lvl = '高风险'; lvlCls = 'cr-bad';
    advice = '电费回收风险高。建议列入重点监控名单，提前评估风险敞口，依约采取相应措施，并同步排查是否存在经营困难或计量异常等更深层原因。所有措施须严格依据供用电合同与现行规定执行，不得自行采取不合规手段。';
  }

  var out = '<table class="cr-table">';
  out += tr('欠费次数得分', EMK._fix(sTimes, 1) + ' / 25', sTimes > 12 ? 'cr-bad' : '', EMK._w(times || 0, 0) + ' 次');
  out += tr('最长欠费天数得分', EMK._fix(sDays, 1) + ' / 25', sDays > 12 ? 'cr-bad' : '', EMK._w(days || 0, 0) + ' 天');
  out += tr('缴费及时度得分', EMK._fix(sRate, 1) + ' / 25', sRate > 12 ? 'cr-bad' : '', '按期缴费率 ' + EMK._fix(rate || 0, 0) + '%');
  out += tr('电费规模得分', EMK._fix(sAmt, 1) + ' / 15', '', '月均电费 ' + EMK._w(amt || 0, 0) + ' 元，敞口越大越需关注');
  out += tr('客户类型调整', (typeAdj >= 0 ? '+' : '') + typeAdj, '', type === 'res' ? '居民客户整体风险偏低' : (type === 'gov' ? '机关事业单位付款稳定' : (type === 'ind' ? '大工业受经营波动影响大' : '一般工商业居中')));
  out += tr('经营状况调整', (bizAdj >= 0 ? '+' : '') + bizAdj, bizAdj > 0 ? 'cr-bad' : '', biz === 'good' ? '经营良好' : (biz === 'bad' ? '经营偏紧，需重点关注' : '经营一般'));
  out += tr('风险总分', EMK._fix(score, 1) + ' / 100', lvlCls, '分数越高风险越高');
  out += tr('风险等级', lvl, lvlCls, '分档：低 / 中 / 较高 / 高');
  out += '</table>';
  out += '<p class="calc-note"><b>' + advice + '</b></p>';
  out += '<p class="calc-note">这套评分的意义在于把"凭感觉判断"变成"按维度打分":欠费次数、欠费时长、缴费及时度、电费规模、客户类型与经营状况各占不同权重，任何一项特别突出都会把总分推高。实际业务中还要结合行业特征、历史协商记录与本地政策综合判断，并注意客户信息的合规使用。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
EMK.views.module = function(id) {
  var mod = EMK.modules.find(function(m) { return m.id === id; });
  if (!mod) { EMK.views.home(); return; }
  var P = EMK.progress();
  var lessons = EMK.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + EMK.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + EMK.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = EMK.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + EMK.esc(title) + '</a>';
    else html += '<span class="title">' + EMK.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及电价机制、市场规则、补贴政策或考核标准，正文均已标注政策依据与适用期，<b>内容基线为 2026 年 9 月</b>。请以国家发展改革委、国家能源局及各省主管部门发布的现行规则、办法与交易细则为准。本站不构成投资、交易、报价或法律意见。</p></div>';
  html += '</div>';
  EMK.render(html);
};

/* ===== 术语 ===== */
EMK.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>电力市场名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 节点电价 / 中长期 / 绿证 / CCER / 辅助服务 / 机制电价" oninput="EMK.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(EMK.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与政策文件、市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅规则原文与专业文献。内容基线 2026 年 9 月。</p></div>';
  html += '</div>';
  EMK.render(html);
};
EMK.filterTerms = function(q) {
  var filtered = EMK.terms;
  if (q) { q = q.toLowerCase();
    filtered = EMK.terms.filter(function(t) {
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
    html += '<div class="term-name">' + EMK.esc(t.name) + ' <span class="term-en">' + EMK.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + EMK.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + EMK.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
EMK.views.myTerms = function() {
  var P = EMK.progress(); var collected = [];
  for (var i = 0; i < EMK.terms.length; i++) if (P.hasTerm(EMK.terms[i].id)) collected.push(EMK.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  EMK.render(html);
};

/* ===== 搜索 ===== */
EMK.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 现货 / 节点电价 / 机制电价 / 绿证 / 配额 / 偏差考核" oninput="EMK.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  EMK.render(html);
};
EMK.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = EMK.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + EMK.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + EMK.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
EMK.views.settings = function() {
  var P = EMK.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="EMK.setTheme(\'dark\')">深色 · 电光青金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="EMK.setTheme(\'light\')">浅色 · 电蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="EMK.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="EMK.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="EMK.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = EMK.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/emk-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/emk-progress" value="' + EMK.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + EMK.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + EMK.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + EMK.esc(EMK.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="EMK.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="EMK.clearData()">清除数据</button></div>';
  html += '</div>';
  EMK.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    EMK.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!EMK.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    EMK.sync.pullNow().then(function () { return EMK.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + EMK.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    EMK.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : EMK.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    EMK.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
EMK.setTheme = function(t) { document.documentElement.dataset.theme = t; EMK.progress().setPref('theme', t); EMK.views.settings(); };
EMK.setFontSize = function(s) { document.documentElement.dataset.fs = s; EMK.progress().setPref('fontSize', s); EMK.views.settings(); };
EMK.exportData = function() {
  var data = EMK.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'emk-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
EMK.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('emk.progress.v1');
    window.location.reload();
  }
};
