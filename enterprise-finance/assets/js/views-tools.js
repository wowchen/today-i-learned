/* 工具视图:四件财税互动工具(税负测算 / 价税分离换算 / 项目毛利与回款推演 / 内控与合规自检)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   ⚠️ 全部为本地简化测算,结果仅作理解框架之用,不构成税务或审计意见。 */
window.FIN = window.FIN || {};
FIN.views = FIN.views || {};

FIN._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
FIN._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 万元数值格式化 */
FIN._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
FIN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">财税这件事，光看会不算不算懂。这四个小工具把课里的框架变成可拨动的数字：<b>税率一改，结果立刻不一样</b>。全部在本地浏览器运行，不上传任何数据。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>四件工具均为<b>简化教学测算</b>：未考虑纳税调整、视同销售、进项转出、跨期分摊、地方税种差异与税收协定的复杂情形，也<b>未包含任何筹划安排</b>。结果只用于理解"税怎么来、利润怎么变"，<b>不得作为申报、报价、合同或审计的依据</b>。实际业务请以现行法规与主管税务机关口径为准。</p>';
  html += '</div>';

  // 1. 税负测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">税</span>增值税与企业所得税税负测算器</h3>';
  html += '<p class="lab-desc">输入含税销售额、可抵扣进项与成本费用，看这家企业一个期间要交多少增值税、多少所得税，以及<b>综合税负率</b>是多少。主体类型一换（小微/高新），结果差别很大。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>含税销售额(万元) <input type="number" id="tb-incl" step="1" value="226" min="0" oninput="FIN.calcTax()"></label>';
  html += '<label>适用税率 <select id="tb-rate" onchange="FIN.calcTax()">';
  html += '<option value="0.13" selected>13%（货物等）</option><option value="0.09">9%（建筑/运输等）</option><option value="0.06">6%（现代/生活服务）</option><option value="0.03">3%（小规模征收率）</option>';
  html += '</select></label>';
  html += '<label>可抵扣进项税额(万元) <input type="number" id="tb-input" step="0.1" value="18" min="0" oninput="FIN.calcTax()"></label>';
  html += '<label>不含税成本费用(万元) <input type="number" id="tb-cost" step="1" value="150" min="0" oninput="FIN.calcTax()"></label>';
  html += '<label>纳税主体 <select id="tb-entity" onchange="FIN.calcTax()">';
  html += '<option value="normal" selected>一般企业（25%）</option><option value="small">小型微利企业（实际 5%）</option><option value="hightech">高新技术企业（15%）</option><option value="west">西部鼓励类（15%）</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="tb-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 价税分离换算
  html += '<div class="calc-card">';
  html += '<h3><span class="g">÷</span>价税分离换算器</h3>';
  html += '<p class="lab-desc">合同上写的是含税还是不含税，直接决定你能确认多少收入。输入金额与税率，看四种税率下的不含税收入与税额差多少。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>金额(万元) <input type="number" id="pt-amt" step="1" value="109" min="0" oninput="FIN.calcPriceTax()"></label>';
  html += '<label>该金额是 <select id="pt-mode" onchange="FIN.calcPriceTax()"><option value="incl" selected>含税金额</option><option value="excl">不含税金额</option></select></label>';
  html += '<label>适用税率 <select id="pt-rate" onchange="FIN.calcPriceTax()">';
  html += '<option value="0.13">13%</option><option value="0.09" selected>9%</option><option value="0.06">6%</option><option value="0.03">3%（征收率）</option>';
  html += '</select></label>';
  html += '</div>';
  html += '<div id="pt-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 项目毛利与回款推演
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>项目毛利与回款现金流推演</h3>';
  html += '<p class="lab-desc">很多项目"干完了却不赚钱"，原因是投标时按含税价算毛利、又没算垫资成本。填一份合同条件，看<b>含资金成本的真实毛利</b>还剩多少。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>含税合同额(万元) <input type="number" id="pj-amt" step="1" value="500" min="0" oninput="FIN.calcProject()"></label>';
  html += '<label>适用税率 <select id="pj-rate" onchange="FIN.calcProject()">';
  html += '<option value="0.13">13%</option><option value="0.09" selected>9%（建筑服务等）</option><option value="0.06">6%</option><option value="0.03">3%</option></select></label>';
  html += '<label>不含税直接成本(万元) <input type="number" id="pj-cost" step="1" value="400" min="0" oninput="FIN.calcProject()"></label>';
  html += '<label>工期(月) <input type="number" id="pj-mon" step="1" value="12" min="1" oninput="FIN.calcProject()"></label>';
  html += '<label>预付款 % <input type="number" id="pj-adv" step="1" value="10" min="0" max="100" oninput="FIN.calcProject()"></label>';
  html += '<label>进度款 % <input type="number" id="pj-prog" step="1" value="70" min="0" max="100" oninput="FIN.calcProject()"></label>';
  html += '<label>验收款 % <input type="number" id="pj-acc" step="1" value="15" min="0" max="100" oninput="FIN.calcProject()"></label>';
  html += '<label>质保金 % <input type="number" id="pj-ret" step="1" value="5" min="0" max="100" oninput="FIN.calcProject()"></label>';
  html += '<label>质保期(月) <input type="number" id="pj-retm" step="1" value="24" min="0" oninput="FIN.calcProject()"></label>';
  html += '<label>融资年化成本 % <input type="number" id="pj-fin" step="0.5" value="5" min="0" max="30" oninput="FIN.calcProject()"></label>';
  html += '</div>';
  html += '<div id="pj-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 内控与合规自检
  html += '<div class="calc-card">';
  html += '<h3><span class="g">✓</span>内控与合规自检清单</h3>';
  html += '<p class="lab-desc">勾选你所在单位<b>已经做到</b>的项。带"高"标记的是权重最高、最容易被稽查和审计盯上的控制点。看分数，也看<b>没勾的是哪几条</b>。</p>';
  html += '<div id="ic-list"></div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="FIN.checkControl()">生成自检结果</button><button class="calc-btn" onclick="FIN.resetControl()" style="background:transparent;color:var(--note);border:1px solid var(--line-2)">全部取消</button></div>';
  html += '<div id="ic-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：四件工具均为本地教学测算，不考虑纳税调整、进项转出、地方税种差异等复杂情形，也不含任何筹划安排，结果不作为申报或决策依据。自检清单为启发式检查，不构成内控评价结论。</p>';
  html += '</div>';
  FIN.render(html);
  FIN.calcTax(); FIN.calcPriceTax(); FIN.calcProject(); FIN.renderControlList();
};

/* ---- 1. 税负测算器 ---- */
FIN.calcTax = function() {
  var el = document.getElementById('tb-result');
  if (!el) return;
  var incl = FIN._num('tb-incl'), rate = parseFloat(document.getElementById('tb-rate').value);
  var inputVat = FIN._num('tb-input'), cost = FIN._num('tb-cost');
  var entity = document.getElementById('tb-entity').value;
  if (incl === null || inputVat === null || cost === null || incl < 0 || inputVat < 0 || cost < 0) {
    el.innerHTML = '<div class="calc-warn">请填写非负数值。</div>'; return;
  }
  var ex = incl / (1 + rate);
  var outputVat = ex * rate;
  var vatPay = outputVat - inputVat;
  var credit = 0;
  if (vatPay < 0) { credit = -vatPay; vatPay = 0; }
  /* 附加税费：城建税 7%（市区）+ 教育费附加 3% + 地方教育附加 2% = 12%；
     小型微利企业可享"六税两费"减半 */
  var surRate = 0.12, surHalf = (entity === 'small');
  var surcharge = vatPay * surRate * (surHalf ? 0.5 : 1);
  var profit = ex - cost - surcharge;
  var taxable = profit > 0 ? profit : 0;
  var cit = 0, citLabel = '';
  if (entity === 'small') {
    cit = taxable <= 300 ? taxable * 0.05 : taxable * 0.25;
    citLabel = taxable <= 300 ? '小型微利企业（减按 25% 计入应纳税所得额、20% 税率，实际 5%）' : '应纳税所得额已超 300 万，不再符合小型微利企业条件，按 25% 计';
  } else if (entity === 'hightech') {
    cit = taxable * 0.15; citLabel = '高新技术企业 15%（需经认定且在有效期内）';
  } else if (entity === 'west') {
    cit = taxable * 0.15; citLabel = '西部鼓励类产业企业 15%（2021.1.1—2030.12.31）';
  } else {
    cit = taxable * 0.25; citLabel = '一般企业法定税率 25%';
  }
  var totalTax = vatPay + surcharge + cit;
  var burden = ex > 0 ? totalTax / ex * 100 : 0;
  var margin = ex > 0 ? profit / ex * 100 : 0;

  var rows = '';
  rows += tr('不含税销售额', FIN._w(ex, 2) + ' 万元', '', '含税 ' + FIN._w(incl, 2) + ' ÷ (1 + ' + (rate * 100).toFixed(0) + '%)');
  rows += tr('销项税额', FIN._w(outputVat, 2) + ' 万元', '');
  rows += tr('可抵扣进项税额', FIN._w(inputVat, 2) + ' 万元', '');
  if (credit > 0) {
    rows += tr('应纳增值税', '0 万元（形成留抵 ' + FIN._w(credit, 2) + ' 万元）', 'cr-warn', '可依规定选择结转下期抵扣或申请退还');
  } else {
    rows += tr('应纳增值税', FIN._w(vatPay, 2) + ' 万元', 'cr-warn', '销项 − 进项');
  }
  rows += tr('附加税费', FIN._w(surcharge, 2) + ' 万元', '', '按实缴增值税 × 12%' + (surHalf ? '，小型微利企业"六税两费"减半后' : ''));
  rows += tr('利润总额（简化）', FIN._w(profit, 2) + ' 万元', profit >= 0 ? 'cr-good' : 'cr-bad', '未含纳税调整；利润率 ' + FIN._fix(margin, 1) + '%');
  rows += tr('企业所得税', FIN._w(cit, 2) + ' 万元', '', citLabel);
  rows += tr('税金合计', FIN._w(totalTax, 2) + ' 万元', '');
  rows += tr('综合税负率', FIN._fix(burden, 2) + '%', burden <= 5 ? 'cr-good' : (burden <= 12 ? 'cr-warn' : 'cr-bad'), '税金合计 ÷ 不含税销售额');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">这是<b>极简教学模型</b>：未考虑纳税调整（业务招待费限额、罚款不得扣除、免税收入等）、进项转出、视同销售、地方税种差异与核定征收。<b>真实税负必须以申报表为准。</b>小微优惠需同时满足应纳税所得额不超 300 万、从业人数不超 300 人、资产总额不超 5000 万三个条件（财政部 税务总局公告 2023 年第 12 号，延续至 2027.12.31）。</p>';
};
function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}

/* ---- 2. 价税分离换算 ---- */
FIN.calcPriceTax = function() {
  var el = document.getElementById('pt-result');
  if (!el) return;
  var amt = FIN._num('pt-amt'), rate = parseFloat(document.getElementById('pt-rate').value);
  var mode = document.getElementById('pt-mode').value;
  if (amt === null || amt < 0) { el.innerHTML = '<div class="calc-warn">请填写非负金额。</div>'; return; }
  var ex, incl, tax;
  if (mode === 'incl') { ex = amt / (1 + rate); tax = ex * rate; incl = amt; }
  else { ex = amt; tax = amt * rate; incl = amt * (1 + rate); }

  var rows = '';
  rows += tr('口径', mode === 'incl' ? '输入的是含税金额，需做价税分离' : '输入的是不含税金额，需加上税额');
  rows += tr('不含税金额（可确认收入）', FIN._w(ex, 2) + ' 万元', 'cr-good');
  rows += tr('增值税税额', FIN._w(tax, 2) + ' 万元', 'cr-warn');
  rows += tr('含税总额（客户实际支付）', FIN._w(incl, 2) + ' 万元');
  rows += tr('税额占不含税收入比', FIN._fix(rate * 100, 0) + '%', '', '不含税口径下税额即为税率的直接体现');

  // 同一金额在四档税率下的对照
  var cmp = '<table class="cr-table" style="margin-top:14px"><tr><th>税率/征收率</th><th>' +
    (mode === 'incl' ? '不含税金额(万元)' : '含税总额(万元)') + '</th><th>税额(万元)</th><th>与当前口径差额</th></tr>';
  var rates = [0.13, 0.09, 0.06, 0.03], base = (mode === 'incl' ? ex : incl);
  for (var i = 0; i < rates.length; i++) {
    var r = rates[i], v, t;
    if (mode === 'incl') { v = amt / (1 + r); t = v * r; } else { v = amt * (1 + r); t = amt * r; }
    var diff = v - base;
    cmp += '<tr><td class="cr-name">' + (r * 100).toFixed(0) + '%' + (r === rate ? ' ←当前' : '') + '</td><td>' + FIN._w(v, 2) + '</td><td>' + FIN._w(t, 2) + '</td><td class="' + (Math.abs(diff) < 0.005 ? '' : (diff > 0 ? 'cr-warn' : 'cr-good')) + '">' + (Math.abs(diff) < 0.005 ? '—' : (diff > 0 ? '+' : '') + FIN._w(diff, 2)) + '</td></tr>';
  }
  cmp += '</table>';

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' + cmp +
    '<p class="calc-note"><b>最常犯的错误：把含税价当收入算毛利。</b>含税 109 万、税率 9% 的合同，确认收入只有 100 万；如果按 109 万减成本算毛利率，会系统性高估。另外：同一份合同若含不同税率业务（如设备销售 + 安装服务），应分别核算，否则可能被从高适用税率。税率适用以现行规定与商品服务编码为准。</p>';
};

/* ---- 3. 项目毛利与回款推演 ---- */
FIN.calcProject = function() {
  var el = document.getElementById('pj-result');
  if (!el) return;
  var amt = FIN._num('pj-amt'), rate = parseFloat(document.getElementById('pj-rate').value);
  var cost = FIN._num('pj-cost'), mon = FIN._num('pj-mon'), fin = FIN._num('pj-fin');
  var adv = FIN._num('pj-adv'), prog = FIN._num('pj-prog'), acc = FIN._num('pj-acc'), ret = FIN._num('pj-ret'), retm = FIN._num('pj-retm');
  if ([amt, cost, mon, fin, adv, prog, acc, ret, retm].some(function(v) { return v === null; }) || amt < 0 || cost < 0 || mon < 1) {
    el.innerHTML = '<div class="calc-warn">请完整填写各项参数（工期至少 1 个月）。</div>'; return;
  }
  var sum = adv + prog + acc + ret;
  var warnSum = Math.abs(sum - 100) > 0.51 ? '<div class="calc-warn">付款比例合计为 ' + FIN._fix(sum, 1) + '%，不等于 100%，请核对合同条件。</div>' : '';

  var ex = amt / (1 + rate);
  var vat = ex * rate;
  var gross = ex - cost;
  var grossMargin = ex > 0 ? gross / ex * 100 : 0;
  /* 平均垫资粗算：直接成本按工期均匀投入，平均占用为期中口径（×0.5），
     并以预付款比例扣减前期占用。仅作量级估算。 */
  var advRatio = adv / 100;
  var avgAdvance = cost * (mon / 12) * 0.5 * (1 - advRatio);
  var fundCost = avgAdvance * (fin / 100);
  var realG = gross - fundCost;
  var realMargin = ex > 0 ? realG / ex * 100 : 0;

  var rows = '';
  rows += tr('不含税合同收入', FIN._w(ex, 2) + ' 万元', '', '含税 ' + FIN._w(amt, 2) + ' ÷ (1 + ' + (rate * 100).toFixed(0) + '%)');
  rows += tr('销项税额', FIN._w(vat, 2) + ' 万元', '', '需按期申报，与回款时点无关');
  rows += tr('不含税直接成本', FIN._w(cost, 2) + ' 万元');
  rows += tr('项目毛利', FIN._w(gross, 2) + ' 万元', gross >= 0 ? 'cr-good' : 'cr-bad', '毛利率 ' + FIN._fix(grossMargin, 2) + '%');
  rows += tr('平均垫资估算', FIN._w(avgAdvance, 2) + ' 万元', 'cr-warn', '成本 ' + FIN._w(cost, 2) + ' × (工期 ' + FIN._fix(mon, 0) + ' 月 ÷ 12) × 0.5 × (1 − 预付 ' + FIN._fix(adv, 0) + '%)');
  rows += tr('垫资资金成本', FIN._w(fundCost, 2) + ' 万元', 'cr-warn', '按融资年化 ' + FIN._fix(fin, 1) + '% 估算');
  rows += tr('含资金成本的真实毛利', FIN._w(realG, 2) + ' 万元', realG >= 0 ? (realMargin < 5 ? 'cr-warn' : 'cr-good') : 'cr-bad', '真实毛利率 ' + FIN._fix(realMargin, 2) + '%');

  var verdict;
  if (realMargin < 0) verdict = '亏损：按当前条件，这个项目做完是赔钱的，需重新谈价或压成本';
  else if (realMargin < 5) verdict = '极薄：微利且抗风险能力差，任何延期或成本超支都可能吃掉利润';
  else if (realMargin < 12) verdict = '一般：可做，但要严控工期与成本，避免垫资拉长';
  else verdict = '良好：利润空间可覆盖常见的执行波动';
  rows += tr('判断', verdict, realMargin < 5 ? 'cr-bad' : (realMargin < 12 ? 'cr-warn' : 'cr-good'));

  // 回款节点表
  var pay = '<table class="cr-table" style="margin-top:14px"><tr><th>回款节点</th><th>比例</th><th>金额(含税,万元)</th><th>时点说明</th></tr>';
  pay += '<tr><td class="cr-name">预付款</td><td>' + FIN._fix(adv, 1) + '%</td><td>' + FIN._w(amt * adv / 100, 2) + '</td><td>签约后，用于启动资金</td></tr>';
  pay += '<tr><td class="cr-name">进度款</td><td>' + FIN._fix(prog, 1) + '%</td><td>' + FIN._w(amt * prog / 100, 2) + '</td><td>工期 ' + FIN._fix(mon, 0) + ' 个月内按节点或按月支付</td></tr>';
  pay += '<tr><td class="cr-name">验收款</td><td>' + FIN._fix(acc, 1) + '%</td><td>' + FIN._w(amt * acc / 100, 2) + '</td><td>验收结算后支付，通常仍有账期</td></tr>';
  pay += '<tr><td class="cr-name">质保金</td><td>' + FIN._fix(ret, 1) + '%</td><td>' + FIN._w(amt * ret / 100, 2) + '</td><td>质保期满 ' + FIN._fix(retm, 0) + ' 个月后收回，须设置到期提醒</td></tr>';
  pay += '<tr><td class="cr-name">最长回款周期</td><td>—</td><td>约 ' + FIN._fix(mon + retm, 0) + ' 个月</td><td>工期 + 质保期，期间存在坏账与政策变化风险</td></tr>';
  pay += '</table>';

  el.innerHTML = warnSum + '<table class="cr-table">' + rows + '</table>' + pay +
    '<p class="calc-note">垫资采用"成本均匀投入 × 工期 × 0.5 × (1−预付款比例)"的粗算口径，<b>只用于判断量级与决策取舍</b>，未考虑税款的垫付（开票即可能产生纳税义务）、进度款实际到位延迟、成本超支与汇率等情形。<b>做项目决策时，含资金成本的真实毛利才是真实毛利。</b></p>';
};

/* ---- 4. 内控与合规自检 ---- */
var IC_ITEMS = [
  { grp: '岗位与授权', w: 3, t: '出纳不兼管总账与会计档案', tip: '管钱的不能同时管账，这是不相容岗位分离的底线。' },
  { grp: '岗位与授权', w: 3, t: '采购、验收、付款由不同人负责', tip: '自己买、自己验收、自己报付，等于没有控制。' },
  { grp: '岗位与授权', w: 3, t: '合同签订与用印保管分离', tip: '能签合同的人不能自己走完盖章流程。' },
  { grp: '岗位与授权', w: 3, t: '有书面权限表，明确各金额档的审批层级', tip: '权限不清，审批就是走过场。' },
  { grp: '岗位与授权', w: 3, t: '重大投资、对外担保、关联交易履行集体决策并留痕', tip: '这类事项不能由个人拍板。' },
  { grp: '岗位与授权', w: 2, t: '权限与角色定期复核，人员变动及时收回系统权限', tip: '离职不收回权限是最常见的系统级漏洞。' },
  { grp: '发票与税务', w: 3, t: '采购合同明确发票类型（专票/普票）、税率与开票时点', tip: '报价一样、票种不同，实际成本差一个税额。' },
  { grp: '发票与税务', w: 3, t: '进项抵扣前核对用途，不得抵扣的做进项转出', tip: '用于集体福利、个人消费的进项通常不得抵扣。' },
  { grp: '发票与税务', w: 2, t: '开票前复核票面信息（数电票不能作废，只能红冲）', tip: '开错只能红字冲销，复核比补救便宜得多。' },
  { grp: '发票与税务', w: 2, t: '关注发票总额度，重大业务前提前申请调整', tip: '额度不够会直接影响签约与开票。' },
  { grp: '发票与税务', w: 3, t: '保留"合同—履约—开票—回款"四栏对照表', tip: '一张表同时守住收入确认、开票、回款与三流一致。' },
  { grp: '发票与税务', w: 3, t: '三流一致留痕：代付、代收有协议或授权说明', tip: '主体对不上是稽查最先问的问题。' },
  { grp: '往来与关联方', w: 3, t: '编制完整关联方清单（含董监高及其近亲属控制的企业）', tip: '最容易漏的就是这一层，漏报比交易本身更严重。' },
  { grp: '往来与关联方', w: 3, t: '关联交易有定价依据与审议程序记录', tip: '价格公允、程序合规、信息充分，三者缺一不可。' },
  { grp: '往来与关联方', w: 3, t: '应收账款按账龄管理，超期催收有责任人与记录', tip: '账龄越长，实际回收率越低。' },
  { grp: '往来与关联方', w: 2, t: '质保金单独跟踪并设到期提醒', tip: '最容易被遗忘的一笔钱，纯粹靠管理意识。' },
  { grp: '项目与回款', w: 3, t: '项目成本按项目归集（含外包、差旅与资金成本）', tip: '不归集就算不出真实项目毛利。' },
  { grp: '项目与回款', w: 3, t: '收入确认依据履约义务，区分时点确认与时段确认', tip: '不能凭"客户验收了就一次性确认"的习惯操作。' },
  { grp: '项目与回款', w: 3, t: '投标前测算价税分离后的真实毛利与垫资规模', tip: '按含税价算毛利会系统性高估。' },
  { grp: '项目与回款', w: 3, t: '项目现金流逐月推演，识别最大资金缺口', tip: '合同额大不等于好项目，缺口峰值才算数。' },
  { grp: '审计与整改', w: 2, t: '上期审计问题已固化为资料归档清单', tip: '第二年的审计效率，取决于第一年的归档习惯。' },
  { grp: '审计与整改', w: 2, t: '期末前后交易已整理对照表以支持截止性测试', tip: '跨期确认是利润调节最容易下手的地方。' },
  { grp: '审计与整改', w: 3, t: '内控缺陷有责任人、时限、验证与销号记录', tip: '无法验证的整改措施等于没有措施。' },
  { grp: '审计与整改', w: 2, t: '建立了独立、保密、有反馈的举报渠道', tip: '举报是发现舞弊最有效的渠道，但必须让人敢用。' },
  { grp: '审计与整改', w: 2, t: '每季度做一次财务预警信号复核', tip: '风险很少突然发生，通常是信号被忽略。' }
];
FIN.renderControlList = function() {
  var box = document.getElementById('ic-list');
  if (!box) return;
  var html = '', last = '';
  for (var i = 0; i < IC_ITEMS.length; i++) {
    var it = IC_ITEMS[i];
    if (it.grp !== last) {
      html += '<div class="ic-group">' + it.grp + '</div>';
      last = it.grp;
    }
    html += '<label class="ic-item"><input type="checkbox" id="ic-' + i + '"' + (it.w === 3 ? ' data-w="3"' : ' data-w="2"') + '><span class="ic-box"></span><span class="ic-text">' + FIN.esc(it.t) + (it.w === 3 ? '<em class="ic-hi">高</em>' : '') + '</span></label>';
  }
  box.innerHTML = html;
};
FIN.resetControl = function() {
  for (var i = 0; i < IC_ITEMS.length; i++) { var c = document.getElementById('ic-' + i); if (c) c.checked = false; }
  var el = document.getElementById('ic-result'); if (el) el.innerHTML = '';
};
FIN.checkControl = function() {
  var el = document.getElementById('ic-result');
  if (!el) return;
  var got = 0, all = 0, missHigh = [], missMid = [], done = 0;
  for (var i = 0; i < IC_ITEMS.length; i++) {
    var it = IC_ITEMS[i], c = document.getElementById('ic-' + i);
    all += it.w;
    if (c && c.checked) { got += it.w; done++; }
    else { (it.w === 3 ? missHigh : missMid).push(it); }
  }
  var score = Math.round(got / all * 100);
  var verdict, cls;
  if (score >= 85) { verdict = '稳健：关键控制基本到位，保持并定期复核有效性'; cls = 'cr-good'; }
  else if (score >= 70) { verdict = '基本：主干在，但仍有明显缺口，优先补齐高权重项'; cls = 'cr-warn'; }
  else if (score >= 50) { verdict = '偏弱：关键环节存在空白，建议按高权重项逐条整改'; cls = 'cr-bad'; }
  else { verdict = '高风险：多处关键控制缺失，舞弊与差错都可能长期不被发现'; cls = 'cr-bad'; }

  var rows = '';
  rows += tr('自检得分', score + ' / 100', cls, '按权重计分，高权重项权重为 2');
  rows += tr('已具备', done + ' 项 / 共 ' + IC_ITEMS.length + ' 项');
  rows += tr('总体判断', verdict, cls);

  var miss = '';
  if (missHigh.length) {
    miss += '<p style="font-weight:600;margin:14px 0 6px;color:var(--acc)">高权重缺口（优先整改）</p><ul style="margin:0 0 0 18px;padding:0">';
    for (var a = 0; a < missHigh.length; a++) miss += '<li style="margin-bottom:6px"><b>' + FIN.esc(missHigh[a].t) + '</b><br><span style="color:var(--note)">' + FIN.esc(missHigh[a].tip) + '</span></li>';
    miss += '</ul>';
  }
  if (missMid.length) {
    miss += '<p style="font-weight:600;margin:14px 0 6px;color:var(--note)">其他待完善项</p><ul style="margin:0 0 0 18px;padding:0">';
    for (var b = 0; b < missMid.length; b++) miss += '<li style="margin-bottom:6px">' + FIN.esc(missMid[b].t) + '<br><span style="color:var(--note)">' + FIN.esc(missMid[b].tip) + '</span></li>';
    miss += '</ul>';
  }
  if (!missHigh.length && !missMid.length) miss = '<p style="margin-top:12px">全部具备。建议下一年度复查控制是否仍<b>实际运行</b>，而不只是写进了制度。</p>';

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' + miss +
    '<p class="calc-note">本清单为<b>启发式自检</b>，不是内控评价，也不构成审计意见。真正的验收标准是：把某条控制拿给具体经办人问"这一步谁做、依据是什么"，答得一致才算数。<b>制度写了不等于控制有效。</b></p>';
};

/* ===== 模块页 ===== */
FIN.views.module = function(id) {
  var mod = FIN.modules.find(function(m) { return m.id === id; });
  if (!mod) { FIN.views.home(); return; }
  var P = FIN.progress();
  var lessons = FIN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + FIN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + FIN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = FIN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + FIN.esc(title) + '</a>';
    else html += '<span class="title">' + FIN.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及税率、优惠政策或申报期限，正文均已标注政策依据与适用期，<b>内容基线为 2026 年 9 月</b>。请以现行法规与主管税务机关口径为准。本站不构成税务、审计或法律意见。</p></div>';
  html += '</div>';
  FIN.render(html);
};

/* ===== 术语 ===== */
FIN.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>财税审计名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 增值税 / 数电发票 / 重要性 / 杜邦 / 三流一致" oninput="FIN.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(FIN.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与法律、会计准则中的正式定义可能存在简化差异。涉及具体适用时请查阅法规原文与专业文献。内容基线 2026 年 9 月。</p></div>';
  html += '</div>';
  FIN.render(html);
};
FIN.filterTerms = function(q) {
  var filtered = FIN.terms;
  if (q) { q = q.toLowerCase();
    filtered = FIN.terms.filter(function(t) {
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
    html += '<div class="term-name">' + FIN.esc(t.name) + ' <span class="term-en">' + FIN.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + FIN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + FIN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
FIN.views.myTerms = function() {
  var P = FIN.progress(); var collected = [];
  for (var i = 0; i < FIN.terms.length; i++) if (P.hasTerm(FIN.terms[i].id)) collected.push(FIN.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  FIN.render(html);
};

/* ===== 搜索 ===== */
FIN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 增值税 / 数电发票 / 审计意见 / 三流一致" oninput="FIN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  FIN.render(html);
};
FIN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = FIN.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + FIN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + FIN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
FIN.views.settings = function() {
  var P = FIN.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="FIN.setTheme(\'dark\')">深色 · 墨金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="FIN.setTheme(\'light\')">浅色 · 藏青</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="FIN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="FIN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="FIN.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = FIN.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/fin-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/fin-progress" value="' + FIN.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + FIN.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + FIN.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + FIN.esc(FIN.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="FIN.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="FIN.clearData()">清除数据</button></div>';
  html += '</div>';
  FIN.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    FIN.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!FIN.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    FIN.sync.pullNow().then(function () { return FIN.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + FIN.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    FIN.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : FIN.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    FIN.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
FIN.setTheme = function(t) { document.documentElement.dataset.theme = t; FIN.progress().setPref('theme', t); FIN.views.settings(); };
FIN.setFontSize = function(s) { document.documentElement.dataset.fs = s; FIN.progress().setPref('fontSize', s); FIN.views.settings(); };
FIN.exportData = function() {
  var data = FIN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'fin-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
FIN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('fin.progress.v1');
    window.location.reload();
  }
};
