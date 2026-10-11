/* 工具视图:七件输变电一次设备互动工具(变压器负载率与损耗 / 短路电流与开断能力 /
   避雷器与绝缘配合 / 绝缘子片数与爬距 / 载流量与截面选型 / 导线弧垂与张力 / 设备全寿命成本 LCC)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、设备选型、采购或合规依据。 */
window.PEQ = window.PEQ || {};
PEQ.views = PEQ.views || {};

PEQ._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
PEQ._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
PEQ._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
PEQ.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">一次设备的事,光看铭牌不算懂。这七个小工具把课里的口径变成可拨动的数字:<b>变压器装了多少、带了多少、损耗有多大(负载率与损耗的关系)、短路电流多大、断路器开断能力够不够(开断与动热稳定校核)、避雷器残压和设备绝缘水平配不配(绝缘配合)、这个污区要几片绝缘子(爬距与片数)、这根导线能过多大电流(载流量与截面选型)、线的弧垂和张紧到什么程度(档距、张力与对地距离)、这台设备一辈子的账怎么算(全寿命周期成本)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,采用简化模型,不体现真实的系统阻抗与短路计算程序、设备厂家型式试验数据、污区图与现场污秽度、气象与敷设条件、负荷曲线与运行方式等细节。<b>不作为工程设计、设备选型、投标报价或合规依据。</b>实际项目须以设计文件、厂家资料、现行有效标准与企业技术规定为准。</p>';
  html += '</div>';

  // 1. 变压器负载率与损耗测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>变压器负载率与损耗测算器</h3>';
  html += '<p class="lab-desc">变压器空载就耗电,带载更耗电。填入容量、负载与损耗参数,看<b>负载率是多少、一年损耗多少度电、要花多少电费、效率有多高</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>额定容量(kVA)<input type="number" id="tl-cap" step="1000" value="50000" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>实际负载(有功 MW)<input type="number" id="tl-load" step="1" value="30" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>功率因数<input type="number" id="tl-pf" step="0.01" value="0.95" min="0.01" max="1" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>空载损耗(kW)<input type="number" id="tl-noload" step="5" value="40" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>额定负载损耗(kW)<input type="number" id="tl-loadloss" step="10" value="200" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>年运行小时(h)<input type="number" id="tl-hour" step="100" value="8000" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '<label>电价(元/kWh)<input type="number" id="tl-price" step="0.05" value="0.6" min="0" oninput="PEQ.calcTransformerLoad()"></label>';
  html += '</div>';
  html += '<div id="tl-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 短路电流与开断能力校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>短路电流与开断能力校核器</h3>';
  html += '<p class="lab-desc">短路电流有多大,决定了设备要选多强。填入系统参数与设备能力,看<b>三相短路电流与冲击电流是多少、断路器的开断能力和热稳定够不够</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统标称电压(kV)<input type="number" id="sc-volt" step="10" value="110" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '<label>系统短路容量(MVA)<input type="number" id="sc-cap" step="500" value="5000" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '<label>断路器额定开断电流(kA)<input type="number" id="sc-brk" step="1" value="40" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '<label>短路持续时间(s)<input type="number" id="sc-dur" step="0.1" value="1" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '<label>设备短时耐受电流(kA)<input type="number" id="sc-ith" step="1" value="40" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '<label>设备耐受时间(s)<input type="number" id="sc-tth" step="0.5" value="3" min="0" oninput="PEQ.calcShortCircuit()"></label>';
  html += '</div>';
  html += '<div id="sc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 避雷器与绝缘配合校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>避雷器与绝缘配合校核器</h3>';
  html += '<p class="lab-desc">避雷器把过电压压到多低,设备绝缘就得比它高一截——这一高一低就是「绝缘配合」。填入避雷器残压与设备耐受电压,看<b>配合系数和裕度够不够</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统最高工作电压 Um(kV)<input type="number" id="ic-um" step="1" value="126" min="0" oninput="PEQ.calcInsulationCoord()"></label>';
  html += '<label>避雷器额定电压 Ur(kV)<input type="number" id="ic-ur" step="1" value="102" min="0" oninput="PEQ.calcInsulationCoord()"></label>';
  html += '<label>标称放电电流下残压(kV)<input type="number" id="ic-ures" step="1" value="266" min="0" oninput="PEQ.calcInsulationCoord()"></label>';
  html += '<label>设备雷电冲击耐受电压 BIL(kV)<input type="number" id="ic-bil" step="10" value="480" min="0" oninput="PEQ.calcInsulationCoord()"></label>';
  html += '<label>要求的配合系数(%)<input type="number" id="ic-margin" step="5" value="25" min="0" oninput="PEQ.calcInsulationCoord()"></label>';
  html += '</div>';
  html += '<div id="ic-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 绝缘子片数与爬距校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>绝缘子片数与爬距校核器</h3>';
  html += '<p class="lab-desc">污区越脏,绝缘子串就得越长。填入电压、污区比距与单片参数,看<b>需要几片、实际爬距够不够、海拔高了要加多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统最高工作电压 Um(kV)<input type="number" id="is-um" step="1" value="126" min="0" oninput="PEQ.calcInsulatorString()"></label>';
  html += '<label>污区要求爬电比距(mm/kV)<input type="number" id="is-creep" step="1" value="25" min="0" oninput="PEQ.calcInsulatorString()"></label>';
  html += '<label>单片绝缘子爬距(mm)<input type="number" id="is-per" step="10" value="450" min="0" oninput="PEQ.calcInsulatorString()"></label>';
  html += '<label>单片结构高度(mm)<input type="number" id="is-h" step="5" value="146" min="0" oninput="PEQ.calcInsulatorString()"></label>';
  html += '<label>海拔(m)<input type="number" id="is-alt" step="100" value="1000" min="0" oninput="PEQ.calcInsulatorString()"></label>';
  html += '</div>';
  html += '<div id="is-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 载流量与截面选型器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊟</span>载流量与截面选型器</h3>';
  html += '<p class="lab-desc">同样一根线,夏天和冬天、单根和多根一起敷,能带的电流完全不同。填入负荷与环境条件,看<b>温度修正后需要多大载流量、该选多粗的截面、余量还有多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>导体材质<select id="am-mat" onchange="PEQ.calcAmpacity()"><option value="al" selected>铝芯</option><option value="cu">铜芯</option></select></label>';
  html += '<label>计算负荷电流(A)<input type="number" id="am-load" step="20" value="400" min="0" oninput="PEQ.calcAmpacity()"></label>';
  html += '<label>环境温度(℃)<input type="number" id="am-ta" step="1" value="35" min="-20" oninput="PEQ.calcAmpacity()"></label>';
  html += '<label>导体允许温度(℃)<input type="number" id="am-tc" step="5" value="90" min="1" oninput="PEQ.calcAmpacity()"></label>';
  html += '<label>并列敷设修正系数<input type="number" id="am-par" step="0.05" value="1" min="0.1" max="1" oninput="PEQ.calcAmpacity()"></label>';
  html += '</div>';
  html += '<div id="am-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 导线弧垂与张力测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌁</span>导线弧垂与张力测算器</h3>';
  html += '<p class="lab-desc">档距越大、线拉得越松,弧垂就越大。填入档距、单位重量与张力,看<b>弧垂多少、最低点离地多高、张力占拉断力的比例是否安全</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>档距 L(m)<input type="number" id="st-span" step="20" value="300" min="1" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>导线单位重量(kg/m)<input type="number" id="st-weight" step="0.1" value="1.5" min="0" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>水平张力(kN)<input type="number" id="st-t" step="5" value="30" min="0.1" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>挂点对地高度(m)<input type="number" id="st-h" step="1" value="25" min="0" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>最小对地安全距离(m)<input type="number" id="st-clear" step="0.5" value="7" min="0" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>计算拉断力(kN)<input type="number" id="st-break" step="10" value="120" min="0.1" oninput="PEQ.calcSagTension()"></label>';
  html += '<label>允许张力占比(%)<input type="number" id="st-allow" step="5" value="25" min="1" max="100" oninput="PEQ.calcSagTension()"></label>';
  html += '</div>';
  html += '<div id="st-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 设备全寿命成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◇</span>设备全寿命成本(LCC)测算器</h3>';
  html += '<p class="lab-desc">买得便宜不代表用得便宜。把购置、运维、损耗、故障与退役都折成现值加总,看<b>这台设备一辈子的账是多少、钱主要花在哪一项、年化成本多高</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>购置与安装费(万元)<input type="number" id="lcc-capex" step="50" value="500" min="0" oninput="PEQ.calcLcc()"></label>';
  html += '<label>寿命(年)<input type="number" id="lcc-life" step="5" value="25" min="1" oninput="PEQ.calcLcc()"></label>';
  html += '<label>年运维费(万元/年)<input type="number" id="lcc-om" step="1" value="15" min="0" oninput="PEQ.calcLcc()"></label>';
  html += '<label>年损耗电费(万元/年)<input type="number" id="lcc-loss" step="1" value="30" min="0" oninput="PEQ.calcLcc()"></label>';
  html += '<label>年故障损失期望(万元/年)<input type="number" id="lcc-fail" step="1" value="3" min="0" oninput="PEQ.calcLcc()"></label>';
  html += '<label>折现率(%)<input type="number" id="lcc-rate" step="0.5" value="6" min="0" oninput="PEQ.calcLcc()"></label>';
  html += '<label>退役处置净支出(万元)<input type="number" id="lcc-disc" step="5" value="-20" oninput="PEQ.calcLcc()"></label>';
  html += '</div>';
  html += '<div id="lcc-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取行业常见量级概数,单价、系数与限值为示例值。<b>实际工程必须依据设计文件、系统短路计算、设备厂家型式试验数据、污区图与现行有效标准单独核算</b>,本工具结果不作为工程设计、设备选型、投标报价或合规依据。</p>';
  html += '</div>';
  PEQ.render(html);
  PEQ.calcTransformerLoad(); PEQ.calcShortCircuit(); PEQ.calcInsulationCoord(); PEQ.calcInsulatorString();
  PEQ.calcAmpacity(); PEQ.calcSagTension(); PEQ.calcLcc();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. 变压器负载率与损耗 ---- */
PEQ.calcTransformerLoad = function() {
  var el = document.getElementById('tl-result');
  if (!el) return;
  var cap = PEQ._num('tl-cap'), load = PEQ._num('tl-load'), pf = PEQ._num('tl-pf');
  var noload = PEQ._num('tl-noload'), loadloss = PEQ._num('tl-loadloss');
  var hour = PEQ._num('tl-hour'), price = PEQ._num('tl-price');
  if (cap === null || load === null || pf === null || noload === null || loadloss === null || hour === null || price === null) {
    el.innerHTML = warn('请把容量、负载、功率因数、两个损耗、年运行小时与电价填写完整。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('额定容量须大于 0。'); return; }
  if (load < 0 || noload < 0 || loadloss < 0 || hour < 0 || price < 0) {
    el.innerHTML = warn('负载、损耗、小时数与电价不能为负。'); return;
  }
  if (pf <= 0 || pf > 1) { el.innerHTML = warn('功率因数须在 0 ~ 1 之间(不含 0)。'); return; }

  var s = load / pf;                              // 负载视在功率(MVA)
  var beta = s * 1000 / cap;                      // 负载率
  var cuLoss = beta * beta * loadloss;            // 铜损随负载率平方
  var totalLoss = noload + cuLoss;
  var lossKwh = totalLoss * hour;
  var lossFee = lossKwh * price / 1e4;            // 万元
  var outPow = load * 1000;                       // 输出有功(kW)
  var eff = outPow / (outPow + totalLoss) * 100;
  var lossPct = totalLoss / (outPow + totalLoss) * 100;
  var eco = (loadloss > 0 && noload > 0) ? Math.sqrt(noload / loadloss) : 0;

  function N(v) { return PEQ._w(v, 0) + ' 片'; }
  var bCls = beta > 1 ? 'cr-bad' : (beta < 0.3 ? '' : 'cr-good');
  var out = '<table class="cr-table">';
  out += tr('额定容量', PEQ._w(cap, 0) + ' kVA', '', '= ' + PEQ._fix(cap / 1000, 2) + ' MVA');
  out += tr('负载视在功率', PEQ._fix(s, 2) + ' MVA', '', PEQ._fix(load, 1) + ' MW ÷ 功率因数 ' + PEQ._fix(pf, 2));
  out += tr('负载率', PEQ._fix(beta * 100, 1) + ' %', bCls, '视在功率 ÷ 额定容量');
  out += tr('空载损耗(铁损)', PEQ._fix(noload, 1) + ' kW', '', '与负载无关,一通电就有');
  out += tr('负载损耗(铜损)', PEQ._fix(cuLoss, 1) + ' kW', '', '额定值 ' + PEQ._fix(loadloss, 1) + ' kW × 负载率² (' + PEQ._fix(beta * beta, 4) + ')');
  out += tr('总损耗', PEQ._fix(totalLoss, 1) + ' kW', '', '空载损耗 + 铜损');
  out += tr('年损耗电量', PEQ._w(lossKwh / 1e4, 2) + ' 万kWh', '', PEQ._fix(totalLoss, 1) + ' kW × ' + PEQ._w(hour, 0) + ' h');
  out += tr('年损耗电费', PEQ._w(lossFee, 2) + ' 万元', '', PEQ._w(lossKwh, 0) + ' kWh × ' + PEQ._fix(price, 2) + ' 元/kWh');
  out += tr('运行效率', PEQ._fix(eff, 3) + ' %', eff >= 99 ? 'cr-good' : '', '输出有功 ÷ (输出有功 + 总损耗)');
  out += tr('损耗占比', PEQ._fix(lossPct, 3) + ' %', '', '总损耗 ÷ (输出有功 + 总损耗)');
  out += tr('经济负载率', (eco > 0 ? PEQ._fix(eco * 100, 1) + ' %' : '—'), (eco > 0 && Math.abs(beta - eco) < 0.08) ? 'cr-good' : '', '空载损耗与铜损相等时的负载率,此时损耗占比最优');
  out += '</table>';

  if (beta > 1) {
    out += warn('负载率 ' + PEQ._fix(beta * 100, 1) + ' % 已超额定容量,变压器长期过载将加速绝缘老化、缩短寿命,应倒换负荷或增容。');
  } else if (beta < 0.3) {
    out += warn('负载率仅 ' + PEQ._fix(beta * 100, 1) + ' %,属于「大马拉小车」——空载损耗占比过高,不经济。可考虑并列运行或改用较小容量。');
  }
  if (eco > 0 && beta < eco) {
    out += warn('当前负载率低于经济负载率 ' + PEQ._fix(eco * 100, 1) + ' %,说明空载损耗占了上风;适度提高负载率可让损耗占比下降(但要兼顾备用与检修灵活)。');
  }
  out += '<p class="calc-note">变压器损耗分两块,性质完全不同:<b>空载损耗(铁损)</b>只要通电就有,和带多少负荷无关,由铁芯材料与结构决定;<b>负载损耗(铜损)</b>随负载电流的平方变化——负载率 50 % 时铜损只有额定值的 25 %,满载时才等于额定值。所以「变压器效率最高」的点并不在满载,而在<b>空载损耗恰好等于铜损</b>的那个负载率,这就是所谓「经济负载率」。这也解释了为什么长期轻载运行同样不经济:设备买了不用,空载损耗天天照付。以上为教学口径,实际损耗还须区分额定电压下的空载损耗与对应温度的负载损耗,并以厂家型式试验数据与现行能效标准为准。</p>';
  el.innerHTML = out;
};

/* ---- 2. 短路电流与开断能力 ---- */
PEQ.calcShortCircuit = function() {
  var el = document.getElementById('sc-result');
  if (!el) return;
  var volt = PEQ._num('sc-volt'), scap = PEQ._num('sc-cap'), brk = PEQ._num('sc-brk');
  var dur = PEQ._num('sc-dur'), ith = PEQ._num('sc-ith'), tth = PEQ._num('sc-tth');
  if (volt === null || scap === null || brk === null || dur === null || ith === null || tth === null) {
    el.innerHTML = warn('请把系统电压、短路容量、开断电流、短路持续时间与两项耐受参数填写完整。'); return;
  }
  if (volt <= 0) { el.innerHTML = warn('系统电压须大于 0。'); return; }
  if (scap < 0 || brk < 0 || dur < 0 || ith < 0 || tth < 0) { el.innerHTML = warn('各项参数不能为负。'); return; }

  var ik = scap / (Math.sqrt(3) * volt);          // 三相短路电流(kA)
  var ip = 2.55 * ik;                             // 冲击电流峰值(kA)
  var brkMargin = brk > 0 ? (brk - ik) / brk * 100 : 0;
  var brkOk = ik <= brk;
  var q = ik * ik * dur;                          // 短路热效应(kA²·s)
  var qAllow = ith * ith * tth;
  var thermalOk = q <= qAllow;
  var thermalMargin = qAllow > 0 ? (qAllow - q) / qAllow * 100 : 0;

  var out = '<table class="cr-table">';
  out += tr('系统标称电压', PEQ._fix(volt, 1) + ' kV', '', '三相短路计算用电压');
  out += tr('系统短路容量', PEQ._w(scap, 0) + ' MVA', '', '系统侧等值短路容量');
  out += tr('三相短路电流 Ik', PEQ._fix(ik, 3) + ' kA', '', 'Ik = S ÷ (√3 × U)');
  out += tr('冲击短路电流峰值', PEQ._fix(ip, 3) + ' kA', '', '按 2.55 倍 Ik 估算,用于动稳定校核');
  out += tr('断路器额定开断电流', PEQ._fix(brk, 1) + ' kA', '', '设备能力');
  out += tr('开断能力校核', brkOk ? '合格 · 余量 ' + PEQ._fix(brkMargin, 1) + ' %' : '不合格 · 超出 ' + PEQ._fix(-brkMargin, 1) + ' %', brkOk ? 'cr-good' : 'cr-bad', brkOk ? 'Ik ' + PEQ._fix(ik, 3) + ' kA ≤ 开断电流' : 'Ik ' + PEQ._fix(ik, 3) + ' kA > 开断电流');
  out += tr('短路热效应 Q', PEQ._fix(q, 2) + ' kA²·s', '', 'Ik² × 短路持续时间 ' + PEQ._fix(dur, 2) + ' s');
  out += tr('设备允许热效应', PEQ._fix(qAllow, 2) + ' kA²·s', '', '耐受电流 ' + PEQ._fix(ith, 1) + ' kA 的平方 × 耐受时间 ' + PEQ._fix(tth, 2) + ' s');
  out += tr('热稳定校核', thermalOk ? '合格 · 余量 ' + PEQ._fix(thermalMargin, 1) + ' %' : '不合格 · 超出 ' + PEQ._fix(-thermalMargin, 1) + ' %', thermalOk ? 'cr-good' : 'cr-bad', '热效应 Q ≤ 允许值');
  out += tr('动稳定要求', '峰值耐受 ≥ ' + PEQ._fix(ip, 2) + ' kA', '', '设备额定峰值耐受电流应大于此值');
  out += '</table>';

  if (!brkOk) {
    out += warn('短路电流 ' + PEQ._fix(ik, 3) + ' kA 已超过断路器开断能力 ' + PEQ._fix(brk, 1) + ' kA。<b>开断能力不足的断路器在短路时可能爆炸</b>,必须换开断能力更大的设备,或通过增大系统阻抗(串联电抗器、分列运行、母线分段)把短路电流降下来。');
  }
  if (!thermalOk) {
    out += warn('短路热效应 ' + PEQ._fix(q, 2) + ' kA²·s 超过设备允许值 ' + PEQ._fix(qAllow, 2) + ' kA²·s,导体将过热损坏。缩短保护动作时间(热效应与时间成正比)或提高设备短时耐受电流等级都是可行办法。');
  }
  out += '<p class="calc-note">短路电流是选设备的「压力测试」,它同时提出两件事:<b>一是「断不断得开」(开断能力),二是「扛不扛得住」(动稳定与热稳定)</b>。动稳定看短路电流第一个半波的<b>峰值</b>——巨大的电动力会把母线、开关的导电部分硬生生推开变形;热稳定看电流持续期间的<b>发热量 I²t</b>——导体温度不能超过材料允许值。两者有个共同点:<b>都和短路电流的平方成正比</b>,所以短路容量稍大一点,设备要求就上一个台阶。反过来,降低短路电流的手段也很有讲究:分列运行、母线分段、加装限流电抗器,本质都是「增大电源到故障点的阻抗」。以上为教学口径,实际短路计算须按系统阻抗与运行方式逐点计算,并以设计文件与厂家型式试验数据为准。</p>';
  el.innerHTML = out;
};

/* ---- 3. 避雷器与绝缘配合 ---- */
PEQ.calcInsulationCoord = function() {
  var el = document.getElementById('ic-result');
  if (!el) return;
  var um = PEQ._num('ic-um'), ur = PEQ._num('ic-ur'), ures = PEQ._num('ic-ures');
  var bil = PEQ._num('ic-bil'), margin = PEQ._num('ic-margin');
  if (um === null || ur === null || ures === null || bil === null || margin === null) {
    el.innerHTML = warn('请把最高工作电压、避雷器额定电压、残压、设备耐受电压与要求的配合系数填写完整。'); return;
  }
  if (um <= 0) { el.innerHTML = warn('系统最高工作电压须大于 0。'); return; }
  if (ur < 0 || ures < 0 || bil < 0 || margin < 0) { el.innerHTML = warn('各项电压与配合系数不能为负。'); return; }
  if (ures <= 0) { el.innerHTML = warn('避雷器残压须大于 0,否则无法计算配合。'); return; }

  var urRatio = ur / um;
  var needBil = ures * (1 + margin / 100);
  var realMargin = (bil - ures) / ures * 100;
  var coordRatio = bil / ures;
  var ok = bil >= needBil;
  var urOk = urRatio >= 0.8 && urRatio <= 1.1;
  var urCls = urRatio >= 0.8 && urRatio <= 1.1 ? 'cr-good' : '';

  var out = '<table class="cr-table">';
  out += tr('系统最高工作电压 Um', PEQ._fix(um, 1) + ' kV', '', '设备绝缘水平的基准电压');
  out += tr('避雷器额定电压 Ur', PEQ._fix(ur, 1) + ' kV', '', '避雷器可承受的规定电压');
  out += tr('Ur / Um', PEQ._fix(urRatio, 3), urCls, urOk ? '在 0.8 ~ 1.1 的常见范围内' : '偏离常见范围,需核对系统接地方式');
  out += tr('避雷器残压(保护水平)', PEQ._fix(ures, 1) + ' kV', '', '标称放电电流下的残压,即设备实际承受的保护水平');
  out += tr('要求的配合系数', PEQ._fix(margin, 1) + ' %', '', '工程上通常留 20 % ~ 25 % 以上裕度');
  out += tr('所需设备耐受电压', PEQ._fix(needBil, 1) + ' kV', '', '残压 × (1 + 配合系数)');
  out += tr('设备雷电冲击耐受电压 BIL', PEQ._fix(bil, 1) + ' kV', '', '设备绝缘水平');
  out += tr('实际配合系数', PEQ._fix(coordRatio, 3) + ' 倍', ok ? 'cr-good' : 'cr-bad', 'BIL ÷ 残压');
  out += tr('实际配合裕度', PEQ._fix(realMargin, 1) + ' %', ok ? 'cr-good' : 'cr-bad', '配合是否满足要求');
  out += tr('配合结论', ok ? '合格 · 满足绝缘配合' : '不合格 · 绝缘水平不足', ok ? 'cr-good' : 'cr-bad', ok ? 'BIL ≥ 所需耐受电压' : 'BIL < 所需耐受电压,存在绝缘击穿风险');
  out += '</table>';

  if (!ok) {
    out += warn('设备绝缘水平不足:需要 ' + PEQ._fix(needBil, 1) + ' kV,实际只有 ' + PEQ._fix(bil, 1) + ' kV。<b>要么选残压更低的避雷器,要么提高设备绝缘水平(选更高 BIL 等级的设备)</b>,两者此消彼长。');
  }
  if (!urOk) {
    out += warn('避雷器额定电压与系统最高工作电压之比为 ' + PEQ._fix(urRatio, 3) + ',偏离常见范围。该比值与系统中性点接地方式强相关:中性点有效接地系统可取较低比值,非有效接地系统则需取得更高。');
  }
  if (realMargin > 60) {
    out += warn('配合裕度达 ' + PEQ._fix(realMargin, 1) + ' %,余量很足。但绝缘水平过高往往意味着设备体积、尺寸与造价上升,经济性未必最优。');
  }
  out += '<p class="calc-note">绝缘配合说的是一件很朴素的事:<b>保护装置(避雷器)能把过电压压到多低,设备绝缘就得比它再高出一截</b>。这一「高出一截」就是配合系数,留的是给雷电波传播中的反射、设备老化、避雷器特性分散等不确定因素的余量。所以选型时两者必须一起看:避雷器残压降下来,设备绝缘水平就可以选低一档,设备尺寸与造价随之下降——<b>「好避雷器」省下的是整站设备的绝缘成本</b>。反过来,残压高而绝缘又不足,就是典型的「保护不起作用」。以上为教学口径,实际绝缘配合须按现行标准的分级绝缘水平表与避雷器保护水平逐点核算,并考虑进线段保护与雷电侵入波计算。</p>';
  el.innerHTML = out;
};

/* ---- 4. 绝缘子片数与爬距 ---- */
PEQ.calcInsulatorString = function() {
  var el = document.getElementById('is-result');
  if (!el) return;
  var um = PEQ._num('is-um'), creep = PEQ._num('is-creep'), per = PEQ._num('is-per');
  var h = PEQ._num('is-h'), alt = PEQ._num('is-alt');
  if (um === null || creep === null || per === null || h === null || alt === null) {
    el.innerHTML = warn('请把最高工作电压、爬电比距、单片爬距与结构高度、海拔填写完整。'); return;
  }
  if (um <= 0) { el.innerHTML = warn('系统最高工作电压须大于 0。'); return; }
  if (creep < 0 || h < 0 || alt < 0) { el.innerHTML = warn('爬电比距、结构高度与海拔不能为负。'); return; }
  if (per <= 0) { el.innerHTML = warn('单片绝缘子爬距须大于 0。'); return; }

  var needCreep = um * creep;
  var altFactor = alt > 1000 ? 1 + (alt - 1000) / 100 * 0.01 : 1;
  var needCreepAlt = needCreep * altFactor;
  var nBase = Math.ceil(needCreep / per);
  var nAlt = Math.ceil(needCreepAlt / per);
  var n = nAlt;
  var realCreep = n * per;
  var realRatio = realCreep / um;
  var stringLen = n * h / 1000;
  var extra = n - nBase;

  function N(v) { return PEQ._w(v, 0) + ' 片'; }
  var out = '<table class="cr-table">';
  out += tr('系统最高工作电压 Um', PEQ._fix(um, 1) + ' kV', '', '爬距计算的基准电压');
  out += tr('要求的爬电比距', PEQ._fix(creep, 1) + ' mm/kV', '', '由污区等级决定的统一爬电比距');
  out += tr('需要的最小总爬距', PEQ._w(needCreep, 0) + ' mm', '', PEQ._fix(um, 1) + ' kV × ' + PEQ._fix(creep, 1) + ' mm/kV');
  out += tr('海拔修正系数', PEQ._fix(altFactor, 4), alt > 1000 ? 'cr-bad' : '', alt > 1000 ? '海拔 ' + PEQ._w(alt, 0) + ' m,每升高 100 m 约增补 1 %' : '海拔 ≤ 1000 m,不修正');
  out += tr('修正后需要总爬距', PEQ._w(needCreepAlt, 0) + ' mm', '', '最小总爬距 × 海拔修正系数');
  out += tr('单片绝缘子爬距', PEQ._w(per, 0) + ' mm', '', '绝缘子技术参数');
  out += tr('最小片数(不计海拔)', N(nBase), '', '向上取整');
  out += tr('最小片数(计海拔)', N(nAlt), '', '海拔修正后的取整结果');
  out += tr('建议选用片数', N(n), alt > 1000 ? 'cr-good' : '', extra > 0 ? '较不修正多 ' + extra + ' 片' : '与不修正一致');
  out += tr('实际总爬距', PEQ._w(realCreep, 0) + ' mm', 'cr-good', N(n) + ' × ' + PEQ._w(per, 0) + ' mm');
  out += tr('实际爬电比距', PEQ._fix(realRatio, 1) + ' mm/kV', realRatio >= creep ? 'cr-good' : 'cr-bad', realRatio >= creep ? '满足要求(≥ ' + PEQ._fix(creep, 1) + ')' : '不满足要求');
  out += tr('绝缘子串长度', PEQ._fix(stringLen, 2) + ' m', '', N(n) + ' × ' + PEQ._fix(h, 0) + ' mm,供布置与空气间隙校核参考');
  out += '</table>';

  if (alt > 1000) {
    out += warn('海拔 ' + PEQ._w(alt, 0) + ' m 高于 1000 m,绝缘需按海拔修正增补(按每升高 100 m 约 1 % 估算,此处增加 ' + extra + ' 片)。<b>海拔不仅影响爬距,还影响空气间隙与外绝缘耐受电压,设备选型时须一并核对。</b>');
  }
  if (creep < 20) {
    out += warn('爬电比距 ' + PEQ._fix(creep, 1) + ' mm/kV 偏低,一般对应 0 级或 I 级轻污区。若实际污区更重而按此选型,将面临污闪风险。');
  } else if (creep >= 31) {
    out += warn('爬电比距 ' + PEQ._fix(creep, 1) + ' mm/kV 属重污区要求(III 级及以上)。此时除增加片数外,还可考虑<b>改用复合绝缘子、加装增爬裙或采用防污涂料</b>,往往比单纯堆片数更经济。');
  }
  out += '<p class="calc-note">绝缘子片数这件事,本质是<b>「污区越脏,沿着绝缘子表面绕的路就越要长」</b>。为什么要「绕」?污秽受潮后会在绝缘子表面形成一层导电膜,电流沿表面爬行,爬过的路径越长、单位长度的电压差越小,就越不容易发展成闪络。所以关键指标是<b>爬电比距(爬距 ÷ 最高工作电压)</b>,它把电压与绝缘子几何尺寸联系起来,由污区等级直接规定。海拔修正则是另一层保险:空气稀薄会降低外绝缘耐受能力,高海拔地区必须加片。以上为教学口径,实际选型须按污区分布图(或现场污秽度实测)确定的统一爬电比距计算,并对空气间隙、串长与杆塔受力一并核算。</p>';
  el.innerHTML = out;
};

/* ---- 5. 载流量与截面选型 ---- */
PEQ.calcAmpacity = function() {
  var el = document.getElementById('am-result');
  if (!el) return;
  var mat = document.getElementById('am-mat').value;
  var load = PEQ._num('am-load'), ta = PEQ._num('am-ta'), tc = PEQ._num('am-tc'), par = PEQ._num('am-par');
  if (load === null || ta === null || tc === null || par === null) {
    el.innerHTML = warn('请把负荷电流、环境温度、允许温度与并列修正系数填写完整。'); return;
  }
  if (load < 0) { el.innerHTML = warn('负荷电流不能为负。'); return; }
  if (tc <= ta) { el.innerHTML = warn('导体允许温度须高于环境温度,否则无法散热。'); return; }
  if (par <= 0 || par > 1) { el.innerHTML = warn('并列敷设修正系数须在 0 ~ 1 之间(不含 0)。'); return; }

  var isCu = (mat === 'cu');
  var matName = isCu ? '铜芯' : '铝芯';
  var kt = Math.sqrt((tc - ta) / (tc - 25));       // 温度修正系数(基准 25 ℃)
  var need = load / (kt * par);                    // 需要的基础载流量(A)
  // 简化载流量表(空气中敷设、25 ℃ 基准)
  var SEC = [16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630];
  var AL = [60, 80, 100, 125, 155, 190, 220, 250, 285, 335, 380, 440, 500, 560];
  var CU = [78, 105, 130, 165, 205, 250, 290, 330, 375, 440, 505, 590, 675, 760];
  var TABLE = isCu ? CU : AL;

  var pick = -1, minSec = -1;
  for (var i = 0; i < SEC.length; i++) { if (TABLE[i] >= need) { pick = i; break; } }
  for (var j = 0; j < SEC.length; j++) { if (TABLE[j] >= load) { minSec = j; break; } }

  var out = '<table class="cr-table">';
  out += tr('导体材质', matName, '', '铝芯轻、便宜;铜芯载流量大、耐腐蚀');
  out += tr('计算负荷电流', PEQ._w(load, 0) + ' A', '', '线路或回路的最大持续负荷电流');
  out += tr('环境温度 / 允许温度', PEQ._fix(ta, 0) + ' ℃ / ' + PEQ._fix(tc, 0) + ' ℃', '', '环境温度越高、允许温度余量越小,载流量越低');
  out += tr('温度修正系数 Kt', PEQ._fix(kt, 4), '', '√[(允许温度 − 环境温度) ÷ (允许温度 − 25)]');
  out += tr('并列敷设修正系数', PEQ._fix(par, 3), par < 1 ? 'cr-bad' : '', par < 1 ? '多回路并列散热变差,载流量打折' : '单回路无修正');
  out += tr('需要的基础载流量', PEQ._w(need, 0) + ' A', '', '负荷电流 ÷ Kt ÷ 并列系数');
  out += tr('建议选用截面', (pick >= 0 ? SEC[pick] + ' mm²(' + matName + ')' : '超出表范围'), pick >= 0 ? 'cr-good' : 'cr-bad', pick >= 0 ? '该截面对应基础载流量 ' + TABLE[pick] + ' A' : '需采用更大截面或分裂导线,请按厂家资料核算');
  out += tr('负载率(按所选截面)', (pick >= 0 ? PEQ._fix(load / TABLE[pick] * 100, 1) + ' %' : '—'), (pick >= 0 && load / TABLE[pick] > 0.85) ? 'cr-bad' : 'cr-good', '负荷电流 ÷ 所选截面基础载流量');
  out += tr('不计修正的最小截面', (minSec >= 0 ? SEC[minSec] + ' mm²' : '—'), '', '仅按 25 ℃ 基准考虑,供对比');
  out += tr('修正带来的截面跃升', (pick >= 0 && minSec >= 0 ? (pick - minSec) + ' 档' : '—'), (pick >= 0 && minSec >= 0 && pick > minSec) ? 'cr-bad' : '', (pick >= 0 && minSec >= 0 && pick > minSec) ? '温度与并列修正把截面抬高了 ' + (pick - minSec) + ' 档' : '修正未造成跨档');
  out += '</table>';

  if (pick < 0) {
    out += warn('修正后的载流量需求已超出所选材质常规截面范围。可考虑:改用铜芯、采用双拼(多根并联)导线、改善通风或降低环境温度、或提高导体允许温度等级。');
  } else if (load / TABLE[pick] > 0.9) {
    out += warn('所选截面负载率已达 ' + PEQ._fix(load / TABLE[pick] * 100, 1) + ' %,余量偏薄。载流量受环境温度与敷设影响波动很大,建议至少留 10 % ~ 15 % 余量。');
  }
  if (ta > 40) {
    out += warn('环境温度 ' + PEQ._fix(ta, 0) + ' ℃ 偏高,温度修正系数降至 ' + PEQ._fix(kt, 4) + ',载流量明显下降。<b>高温地区或夏季尖峰时段的载流量瓶颈,常常就出在这里。</b>');
  }
  out += '<p class="calc-note">载流量不是一个固定值,而是一组条件下的结果——同一根线,<b>环境温度高、多回路并列、敷设散热差,能带的电流都要打折</b>。所以工程上先算一个「基础载流量」,再逐项乘以各种修正系数,得到「实际允许载流量」,用它去和负荷电流比较。这里最容易踩的坑是:<b>按额定载流量选截面,却忘了修正</b>——修正后往往要上一个甚至两个截面档次,成本差别不小。另外要明白,载流量受限于「导体温度不能超过绝缘或材料的允许值」,真正的约束是<b>散热</b>:想提高载流量,与其一味加粗,不如改善散热(通风、间距、敷设方式)。截面选定后还须校核电压损失与短路热稳定。以上为教学口径,实际选型须按敷设方式、土壤热阻、并列系数与现行载流量表逐项折算。</p>';
  el.innerHTML = out;
};

/* ---- 6. 导线弧垂与张力 ---- */
PEQ.calcSagTension = function() {
  var el = document.getElementById('st-result');
  if (!el) return;
  var L = PEQ._num('st-span'), w = PEQ._num('st-weight'), T = PEQ._num('st-t');
  var hgt = PEQ._num('st-h'), clr = PEQ._num('st-clear'), brk = PEQ._num('st-break'), allow = PEQ._num('st-allow');
  if (L === null || w === null || T === null || hgt === null || clr === null || brk === null || allow === null) {
    el.innerHTML = warn('请把档距、单位重量、水平张力、挂点高度、安全距离、拉断力与允许张力占比填写完整。'); return;
  }
  if (L <= 0) { el.innerHTML = warn('档距须大于 0。'); return; }
  if (w < 0) { el.innerHTML = warn('导线单位重量不能为负。'); return; }
  if (T <= 0) { el.innerHTML = warn('水平张力须大于 0。'); return; }
  if (brk <= 0) { el.innerHTML = warn('计算拉断力须大于 0。'); return; }
  if (allow <= 0 || allow > 100) { el.innerHTML = warn('允许张力占比须在 0 ~ 100 % 之间(不含 0)。'); return; }

  var wN = w * 9.81;                              // 单位长度重力(N/m)
  var f = wN * L * L / (8 * T * 1000);            // 弧垂(m)
  var sagRatio = f / L * 100;
  var minHeight = hgt - f;
  var clearOk = minHeight >= clr;
  var tensionRatio = T / brk * 100;
  var tensionOk = tensionRatio <= allow;
  var allowT = brk * allow / 100;
  var sagAtAllow = wN * L * L / (8 * allowT * 1000);
  var maxSpan = Math.sqrt(8 * T * 1000 * (hgt - clr) / wN);

  var out = '<table class="cr-table">';
  out += tr('档距 L', PEQ._w(L, 0) + ' m', '', '相邻两基杆塔之间的水平距离');
  out += tr('导线单位重量', PEQ._fix(w, 2) + ' kg/m', '', '= ' + PEQ._fix(wN, 2) + ' N/m');
  out += tr('水平张力 T', PEQ._fix(T, 2) + ' kN', '', '导线承受的水平拉力');
  out += tr('弧垂 f', PEQ._fix(f, 2) + ' m', '', 'f = wL² ÷ (8T)');
  out += tr('弧垂比 f / L', PEQ._fix(sagRatio, 2) + ' %', sagRatio > 5 ? 'cr-bad' : '', '工程上通常控制在几个百分点以内');
  out += tr('挂点对地高度', PEQ._fix(hgt, 1) + ' m', '', '导线悬挂点距地面高度');
  out += tr('最低点对地高度', PEQ._fix(minHeight, 2) + ' m', clearOk ? 'cr-good' : 'cr-bad', '挂点高度 − 弧垂');
  out += tr('要求的最小安全距离', PEQ._fix(clr, 1) + ' m', '', '按电压等级与跨越对象确定');
  out += tr('对地距离校核', clearOk ? '合格 · 余量 ' + PEQ._fix(minHeight - clr, 2) + ' m' : '不合格 · 不足 ' + PEQ._fix(clr - minHeight, 2) + ' m', clearOk ? 'cr-good' : 'cr-bad', clearOk ? '最低点仍高于安全距离' : '弧垂过大,最低点已侵入安全距离');
  out += tr('计算拉断力', PEQ._fix(brk, 1) + ' kN', '', '导线机械强度参数');
  out += tr('张力占拉断力比', PEQ._fix(tensionRatio, 2) + ' %', tensionOk ? 'cr-good' : 'cr-bad', '安全系数 ' + PEQ._fix(brk / T, 2) + ' 倍');
  out += tr('允许最大张力', PEQ._fix(allowT, 2) + ' kN', '', '拉断力 × 允许占比 ' + PEQ._fix(allow, 0) + ' %');
  out += tr('张力校核', tensionOk ? '合格' : '不合格 · 超出 ' + PEQ._fix(tensionRatio - allow, 2) + ' 个百分点', tensionOk ? 'cr-good' : 'cr-bad', tensionOk ? '张力在允许范围内' : '张力过大,存在断线风险');
  out += tr('按允许张力架设的弧垂', PEQ._fix(sagAtAllow, 2) + ' m', '', '把张力降到允许值时的弧垂,通常更大');
  out += tr('满足对地距离的最大档距', ((maxSpan > 0 && isFinite(maxSpan)) ? PEQ._w(maxSpan, 0) + ' m' : '—'), '', '保证最低点仍高于安全距离的档距上限');
  out += '</table>';

  if (!clearOk) {
    out += warn('最低点对地高度 ' + PEQ._fix(minHeight, 2) + ' m 低于要求的安全距离 ' + PEQ._fix(clr, 1) + ' m。<b>应对办法有三条:抬高杆塔(加高挂点)、减小档距、或提高张力把线收紧</b>——三者互相制约,要一起算。');
  }
  if (!tensionOk) {
    out += warn('张力占拉断力比 ' + PEQ._fix(tensionRatio, 2) + ' % 超过允许值 ' + PEQ._fix(allow, 0) + ' %。拉得太紧虽然弧垂小、省杆塔,但<b>断线、振动疲劳与覆冰过载的风险显著上升</b>;放线时应按设计规定的张力控制,而不是「越紧越好」。');
  }
  if (sagRatio > 5) {
    out += warn('弧垂比 ' + PEQ._fix(sagRatio, 2) + ' % 偏大,导线看起来「下垂得厉害」。除了对地距离,过大的弧垂还会增大风偏摆动范围,需校核风偏后的空气间隙。');
  }
  out += '<p class="calc-note">弧垂、张力、档距三者是一条绳上的三个结:<b>档距越大,弧垂按平方增长;张力越大,弧垂越小</b>(f = wL² ÷ 8T)。这个关系解释了架空线路设计的核心取舍——<b>把线拉紧一点,弧垂就小,杆塔可以矮些、档距可以大些,省投资;但拉得越紧,导线机械应力越大,断线与疲劳风险越高</b>。所以规范会规定一个「最大使用张力」(通常取拉断力的某个百分比,本工具默认 25 % 量级),放线时按此控制,而不是凭感觉绷紧。此外还要考虑温度变化引起的弧垂增减、覆冰与大风等气象条件组合、以及导线蠕变。以上为教学口径,实际设计须按导线的机械特性曲线(张力-弧垂-温度曲线)与气象区条件计算,并以现行设计规范为准。</p>';
  el.innerHTML = out;
};

/* ---- 7. 设备全寿命成本 LCC ---- */
PEQ.calcLcc = function() {
  var el = document.getElementById('lcc-result');
  if (!el) return;
  var capex = PEQ._num('lcc-capex'), life = PEQ._num('lcc-life'), om = PEQ._num('lcc-om');
  var loss = PEQ._num('lcc-loss'), fail = PEQ._num('lcc-fail'), rate = PEQ._num('lcc-rate'), disc = PEQ._num('lcc-disc');
  if (capex === null || life === null || om === null || loss === null || fail === null || rate === null || disc === null) {
    el.innerHTML = warn('请把购置费、寿命、年运维费、年损耗电费、年故障损失、折现率与退役处置填写完整。'); return;
  }
  if (capex < 0) { el.innerHTML = warn('购置费不能为负。'); return; }
  if (life <= 0) { el.innerHTML = warn('寿命须大于 0 年。'); return; }
  if (om < 0 || loss < 0 || fail < 0 || rate < 0) { el.innerHTML = warn('年费用与折现率不能为负。'); return; }

  var r = rate / 100, n = life;
  var af = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r;        // 年金现值系数
  var pvOm = om * af, pvLoss = loss * af, pvFail = fail * af;
  var pvDisc = disc / Math.pow(1 + r, n);
  var lcc = capex + pvOm + pvLoss + pvFail + pvDisc;
  var annual = af > 0 ? lcc / af : 0;
  var pct = function(x) { return lcc !== 0 ? x / lcc * 100 : 0; };
  var runShare = pct(pvOm + pvLoss + pvFail);

  var out = '<table class="cr-table">';
  out += tr('购置与安装费(现值)', PEQ._w(capex, 2) + ' 万元', '', '初始投资,即期发生');
  out += tr('寿命 / 折现率', PEQ._fix(life, 0) + ' 年 / ' + PEQ._fix(rate, 1) + ' %', '', '决定未来费用折算到今天的「折扣」');
  out += tr('年金现值系数', PEQ._fix(af, 3), '', '把每年等额支出折算为现值的系数');
  out += tr('年运维费', PEQ._w(om, 2) + ' 万元/年', '', '折算现值 ' + PEQ._w(pvOm, 2) + ' 万元(占 ' + PEQ._fix(pct(pvOm), 1) + ' %)');
  out += tr('年损耗电费', PEQ._w(loss, 2) + ' 万元/年', '', '折算现值 ' + PEQ._w(pvLoss, 2) + ' 万元(占 ' + PEQ._fix(pct(pvLoss), 1) + ' %)');
  out += tr('年故障损失期望', PEQ._w(fail, 2) + ' 万元/年', '', '折算现值 ' + PEQ._w(pvFail, 2) + ' 万元(占 ' + PEQ._fix(pct(pvFail), 1) + ' %)');
  out += tr('退役处置净支出', (disc >= 0 ? '' : '−') + PEQ._w(Math.abs(disc), 2) + ' 万元', disc < 0 ? 'cr-good' : '', '折算现值 ' + (pvDisc >= 0 ? '' : '−') + PEQ._w(Math.abs(pvDisc), 2) + ' 万元(负值表示残值回收)');
  out += tr('全寿命周期成本 LCC', PEQ._w(lcc, 2) + ' 万元', 'cr-good', '各项现值之和');
  out += tr('年均等值成本', PEQ._w(annual, 2) + ' 万元/年', '', 'LCC ÷ 年金现值系数,用于横向比较');
  out += tr('运行期费用占比', PEQ._fix(runShare, 1) + ' %', runShare > 50 ? 'cr-bad' : '', '运维 + 损耗 + 故障,即「买回来之后花的钱」');
  out += tr('购置费占比', PEQ._fix(pct(capex), 1) + ' %', '', '初始投资在总成本中的分量');
  out += '</table>';

  if (runShare > 50) {
    out += warn('<b>运行期费用占了总成本的 ' + PEQ._fix(runShare, 1) + ' %,超过购置费</b>。这说明「买得便宜」不等于「用得便宜」——选型时应把损耗、运维与故障成本一并纳入比选,而不是只比报价。');
  }
  if (pvLoss > capex) {
    out += warn('年损耗电费(折算现值 ' + PEQ._w(pvLoss, 2) + ' 万元)已超过购置费。对变压器、电抗器等长期带电设备,<b>损耗往往才是成本大头</b>,选用低损耗型号虽然贵一点,全寿命上通常更划算。');
  }
  if (rate > 10) {
    out += warn('折现率 ' + PEQ._fix(rate, 1) + ' % 偏高,未来费用折现后变得「不值钱」,这会让决策更偏向压低初始投资——高折现率下「先买便宜的、以后再说」更容易胜出。折现率的选取会显著改变比选结果。');
  }
  out += '<p class="calc-note">LCC 的核心思想只有一句话:<b>把不同时间点花出去的钱,统一折算到「今天」来比较</b>。购置费是今天花的,运维、损耗、故障是未来逐年花的,退役更是几十年后;不折算就加总,等于把「二十年后的一块钱」和「今天的一块钱」当成一样值钱,必然算错。折算用的两个参数很关键:<b>折现率</b>决定未来费用的「打折力度」,<b>寿命</b>决定要折多少年。这也解释了工程上一个常见误区:<b>只比投标报价,不比运行成本</b>。对变压器、电缆这类长期在网设备,低损耗、高可靠带来的运行期节省,常常几年内就能把购置差价赚回来。以上为教学口径,实际 LCC 测算还须计入更细的折现口径、税费、残值与风险量化,并以企业设备管理制度为准。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
PEQ.views.module = function(id) {
  var mod = PEQ.modules.find(function(m) { return m.id === id; });
  if (!mod) { PEQ.views.home(); return; }
  var P = PEQ.progress();
  var lessons = PEQ.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + PEQ.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + PEQ.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = PEQ.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + PEQ.esc(title) + '</a>';
    else html += '<span class="title">' + PEQ.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及设备参数、额定值、试验规程、反措要求或技术标准，正文均已标注口径与适用背景，<b>内容基线为 2026 年 10 月</b>。请以现行有效的国家标准、行业标准、企业技术规定与反事故措施为准。本站不构成工程设计、设备选型、投标报价或合规依据。</p></div>';
  html += '</div>';
  PEQ.render(html);
};

/* ===== 术语 ===== */
PEQ.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>一次设备名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 断路器 / GIS / 套管 / 爬电比距 / 弧垂 / 局部放电 / 全寿命周期成本" oninput="PEQ.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(PEQ.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与标准规范、设备手册中的正式定义可能存在简化差异。涉及具体参数与适用时请查阅标准原文与专业资料。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  PEQ.render(html);
};
PEQ.filterTerms = function(q) {
  var filtered = PEQ.terms;
  if (q) { q = q.toLowerCase();
    filtered = PEQ.terms.filter(function(t) {
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
    html += '<div class="term-name">' + PEQ.esc(t.name) + ' <span class="term-en">' + PEQ.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + PEQ.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + PEQ.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
PEQ.views.myTerms = function() {
  var P = PEQ.progress(); var collected = [];
  for (var i = 0; i < PEQ.terms.length; i++) if (P.hasTerm(PEQ.terms[i].id)) collected.push(PEQ.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  PEQ.render(html);
};

/* ===== 搜索 ===== */
PEQ.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 断路器 / GIS / 套管 / 爬电比距 / 弧垂 / 局部放电 / 全寿命周期成本" oninput="PEQ.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  PEQ.render(html);
};
PEQ.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = PEQ.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + PEQ.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + PEQ.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
PEQ.views.settings = function() {
  var P = PEQ.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="PEQ.setTheme(\'dark\')">深色 · 亮铜</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="PEQ.setTheme(\'light\')">浅色 · 深铜褐</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="PEQ.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="PEQ.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="PEQ.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = PEQ.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/peq-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/peq-progress" value="' + PEQ.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + PEQ.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + PEQ.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + PEQ.esc(PEQ.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="PEQ.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="PEQ.clearData()">清除数据</button></div>';
  html += '</div>';
  PEQ.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    PEQ.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!PEQ.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    PEQ.sync.pullNow().then(function () { return PEQ.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + PEQ.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    PEQ.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : PEQ.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    PEQ.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
PEQ.setTheme = function(t) { document.documentElement.dataset.theme = t; PEQ.progress().setPref('theme', t); PEQ.views.settings(); };
PEQ.setFontSize = function(s) { document.documentElement.dataset.fs = s; PEQ.progress().setPref('fontSize', s); PEQ.views.settings(); };
PEQ.exportData = function() {
  var data = PEQ.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'peq-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
PEQ.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('peq.progress.v1');
    window.location.reload();
  }
};
