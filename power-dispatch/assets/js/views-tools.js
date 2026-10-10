/* 工具视图:五件电力调度与二次系统互动工具(频率偏差与功率缺额 / AGC 调频备用 / 继电保护定值校核 / 故障切除时间与稳定裕度 / 低频减载轮次配置)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、定值整定或合规依据。 */
window.DSP = window.DSP || {};
DSP.views = DSP.views || {};

DSP._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
DSP._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
DSP._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
DSP.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">二次系统的道理,光看框图不算懂。这七个小工具把课里的口径变成可拨动的数字:<b>一个功率缺额会把频率拉到多少(要不要动低频减载)、调频备用到底要留多少(在线可调容量够不够)、过流保护的定值怎么和灵敏度打架(配合关系长什么样)、上下级保护为什么会有越级跳闸(电流与时间两条配合线谁不满足)、故障切除时间还剩多少稳定裕度(裕度不足往哪优化)、低频减载六轮怎么切才既够用又不过切、新能源大发时有多少电发不出来(消纳空间被什么卡住)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的电网结构、机组特性、负荷模型、稳定计算结果、保护配置与整定原则、现场运行方式与调度机构要求。<b>不作为工程设计、定值整定、采购、招标或合规依据。</b>实际工作须以调度机构正式文件、现行有效标准、经批准的定值单与现场实际为准。</p>';
  html += '</div>';

  // 1. 频率偏差与功率缺额估算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∿</span>频率偏差与功率缺额估算器</h3>';
  html += '<p class="lab-desc">发电机突然少发 800 MW,频率会掉到多少?填系统规模、功率变化量与单位调节功率,看<b>稳态频率、是否触发低频减载、离首轮定值还差多少 MW</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统总负荷(MW)<input type="number" id="fd-load" step="500" value="20000" min="0" oninput="DSP.calcFreqDeficit()"></label>';
  html += '<label>事件类型<select id="fd-type" onchange="DSP.calcFreqDeficit()"><option value="deficit" selected>功率缺额(发电少 / 负荷突增)</option><option value="surplus">功率过剩(发电多 / 负荷突减)</option></select></label>';
  html += '<label>功率变化量(MW)<input type="number" id="fd-loss" step="50" value="800" min="0" oninput="DSP.calcFreqDeficit()"></label>';
  html += '<label>系统单位调节功率 K(MW/Hz)<input type="number" id="fd-k" step="100" value="2000" min="1" oninput="DSP.calcFreqDeficit()"></label>';
  html += '<label>低频减载首轮定值(Hz)<input type="number" id="fd-ufls" step="0.1" value="49.0" min="0" max="50" oninput="DSP.calcFreqDeficit()"></label>';
  html += '</div>';
  html += '<div id="fd-result" class="calc-result"></div>';
  html += '</div>';

  // 2. AGC 调频备用测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">↻</span>AGC 调频备用测算器</h3>';
  html += '<p class="lab-desc">备用留多少才够?事故备用要盖住最大单机跳闸,波动备用要盖住负荷预测偏差。填入规模与调节速率,看<b>备用需求、一次调频能顶多少、AGC 还需要多少在线可调容量</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统总负荷(MW)<input type="number" id="ag-load" step="500" value="20000" min="0" oninput="DSP.calcAgcReserve()"></label>';
  html += '<label>最大单机或单回故障容量(MW)<input type="number" id="ag-n1" step="50" value="600" min="0" oninput="DSP.calcAgcReserve()"></label>';
  html += '<label>事故备用系数(倍)<input type="number" id="ag-factor" step="0.05" value="1.05" min="0" oninput="DSP.calcAgcReserve()"></label>';
  html += '<label>负荷预测偏差率(%)<input type="number" id="ag-err" step="0.5" value="3" min="0" oninput="DSP.calcAgcReserve()"></label>';
  html += '<label>机组调节速率(%Pn / 分钟)<input type="number" id="ag-rate" step="0.5" value="2" min="0.1" oninput="DSP.calcAgcReserve()"></label>';
  html += '<label>频率恢复时间(min)<input type="number" id="ag-time" step="1" value="15" min="1" oninput="DSP.calcAgcReserve()"></label>';
  html += '</div>';
  html += '<div id="ag-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 继电保护定值校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊻</span>继电保护定值校核器(过流保护)</h3>';
  html += '<p class="lab-desc">定值定高了不灵敏,定低了会误动。填入互感器变比、最大负荷电流与末端最小短路电流,看<b>一次定值、二次定值、灵敏系数与时间配合</b>四者是怎么互相牵着走的。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>电流互感器变比(一次/二次)<input type="number" id="rs-ct" step="5" value="40" min="1" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>线路最大负荷电流(A,一次侧)<input type="number" id="rs-load" step="10" value="300" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>可靠系数 Krel<input type="number" id="rs-krel" step="0.05" value="1.25" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>返回系数 Kre<input type="number" id="rs-kre" step="0.05" value="0.85" min="0.1" max="1" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>本线路末端最小短路电流(A,一次侧)<input type="number" id="rs-ik" step="50" value="1200" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>上级保护动作时间(s)<input type="number" id="rs-tup" step="0.1" value="1.0" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>时间级差 Δt(s)<input type="number" id="rs-dt" step="0.1" value="0.3" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '<label>要求灵敏系数 Ksen<input type="number" id="rs-ksreq" step="0.1" value="1.5" min="0" oninput="DSP.calcRelaySetting()"></label>';
  html += '</div>';
  html += '<div id="rs-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 故障切除时间与稳定裕度估算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌛</span>故障切除时间与稳定裕度估算器</h3>';
  html += '<p class="lab-desc">电网能不能扛住一次短路,取决于是不是「在极限切除时间之内把故障切掉」。填入通道、保护与断路器三段耗时,看<b>总切除时间、该故障类型下的极限切除时间,以及还剩多少裕度</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>故障类型<select id="ct-type" onchange="DSP.calcClearTime()"><option value="three" selected>三相短路(最严重)</option><option value="two">两相短路</option><option value="one">单相接地</option></select></label>';
  html += '<label>保护通道时间(ms)<input type="number" id="ct-ch" step="1" value="12" min="0" oninput="DSP.calcClearTime()"></label>';
  html += '<label>保护动作时间(ms)<input type="number" id="ct-prot" step="5" value="40" min="0" oninput="DSP.calcClearTime()"></label>';
  html += '<label>断路器分闸时间(ms)<input type="number" id="ct-brk" step="5" value="60" min="0" oninput="DSP.calcClearTime()"></label>';
  html += '<label>三相故障极限切除时间(ms)<input type="number" id="ct-limit" step="10" value="150" min="1" oninput="DSP.calcClearTime()"></label>';
  html += '</div>';
  html += '<div id="ct-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 低频减载轮次配置器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>低频减载轮次配置器</h3>';
  html += '<p class="lab-desc">低频减载要分轮次切,切少了压不住频率,切多了白停电。填入各轮频率定值与切除比例,看<b>每轮切多少、累计切多少、最严重缺额能不能被覆盖,以及切完之后频率能不能稳在目标之上</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>系统总负荷(MW)<input type="number" id="ul-load" step="500" value="20000" min="0" oninput="DSP.calcUfls()"></label>';
  html += '<label>各轮频率定值(Hz，逗号分隔)<input type="text" id="ul-freq" value="49.0, 48.8, 48.6, 48.4, 48.2, 48.0" oninput="DSP.calcUfls()"></label>';
  html += '<label>各轮切除比例(%，逗号分隔)<input type="text" id="ul-pct" value="4, 4, 4, 4, 4, 4" oninput="DSP.calcUfls()"></label>';
  html += '<label>系统单位调节功率 K(MW/Hz)<input type="number" id="ul-k" step="100" value="2000" min="1" oninput="DSP.calcUfls()"></label>';
  html += '<label>末轮动作后稳态频率不低于(Hz)<input type="number" id="ul-target" step="0.1" value="48.5" min="0" max="50" oninput="DSP.calcUfls()"></label>';
  html += '</div>';
  html += '<div id="ul-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 保护上下级配合校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇋</span>保护上下级配合校核器</h3>';
  html += '<p class="lab-desc">保护要「有选择地动」:该下级动的时候上级不能抢,该上级动的时候下级不能赖。填上下级的电流定值与动作时间,看<b>电流配合系数与时间级差各差多少,是哪一条配合线没满足,以及上级至少要调到多少才配得上</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>下级保护一次定值(A)<input type="number" id="co-lo" step="10" value="400" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>上级保护一次定值(A)<input type="number" id="co-hi" step="10" value="500" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>电流配合系数要求(倍)<input type="number" id="co-k" step="0.05" value="1.1" min="1" oninput="DSP.calcCoordination()"></label>';
  html += '<label>下级保护动作时间(s)<input type="number" id="co-tlo" step="0.1" value="0.3" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>上级保护动作时间(s)<input type="number" id="co-thi" step="0.1" value="0.9" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>时间级差要求(s)<input type="number" id="co-dt" step="0.1" value="0.3" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>上级保护范围末端最小短路电流(A)<input type="number" id="co-ik" step="50" value="900" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '<label>远后备灵敏系数要求<input type="number" id="co-ks" step="0.1" value="1.2" min="0" oninput="DSP.calcCoordination()"></label>';
  html += '</div>';
  html += '<div id="co-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 新能源消纳与弃电测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">☀</span>新能源消纳与弃电测算器</h3>';
  html += '<p class="lab-desc">风光发出来的电,电网得「接得住」才行。填入装机、负荷低谷与调峰能力,看<b>可消纳空间由哪几块凑成、理论发电量里有多少发不出来、弃电率多少,以及要把利用率提到目标还需补多少空间</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>新能源装机容量(MW)<input type="number" id="cu-cap" step="100" value="8000" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>日等效利用小时(h)<input type="number" id="cu-h" step="0.5" value="5" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>系统日最大负荷(MW)<input type="number" id="cu-max" step="500" value="20000" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>系统日最小负荷(MW)<input type="number" id="cu-min" step="500" value="10000" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>常规机组最小技术出力率(%)<input type="number" id="cu-tech" step="5" value="55" min="0" max="100" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>外送通道能力(MW)<input type="number" id="cu-out" step="100" value="1000" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>储能功率(MW)<input type="number" id="cu-sto" step="100" value="500" min="0" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>大发时段时长(h)<input type="number" id="cu-win" step="1" value="6" min="0.1" oninput="DSP.calcCurtailment()"></label>';
  html += '<label>目标利用率(%)<input type="number" id="cu-target" step="1" value="95" min="0" max="100" oninput="DSP.calcCurtailment()"></label>';
  html += '</div>';
  html += '<div id="cu-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取行业常见量级概数,用于演示<b>机制与配合关系</b>。<b>实际工作必须依据调度机构正式文件、经批准的定值单、稳定计算结果、现行有效标准与现场实际运行方式办理</b>,本工具结果不作为工程设计、定值整定、招标或合规依据。</p>';
  html += '</div>';
  DSP.render(html);
  DSP.calcFreqDeficit(); DSP.calcAgcReserve(); DSP.calcRelaySetting(); DSP.calcClearTime(); DSP.calcUfls();
  DSP.calcCoordination(); DSP.calcCurtailment();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
/* 读数辅助:把逗号/中文逗号/空格分隔的数字串解析为数组 */
function numList(s) {
  if (!s) return [];
  return String(s).replace(/[,，、]/g, ' ').split(/\s+/).filter(function(x) { return x.length > 0; })
    .map(function(x) { return parseFloat(x); });
}

/* ---- 1. 频率偏差与功率缺额 ---- */
DSP.calcFreqDeficit = function() {
  var el = document.getElementById('fd-result');
  if (!el) return;
  var load = DSP._num('fd-load'), loss = DSP._num('fd-loss'), K = DSP._num('fd-k'), ufls = DSP._num('fd-ufls');
  var type = document.getElementById('fd-type').value;
  if (load === null || loss === null || K === null || ufls === null) {
    el.innerHTML = warn('请把系统负荷、功率变化量、单位调节功率与首轮定值填写完整。'); return;
  }
  if (load <= 0 || loss < 0 || K <= 0 || ufls <= 0 || ufls >= 50) {
    el.innerHTML = warn('系统负荷、单位调节功率与首轮定值须为正数,首轮定值须小于 50 Hz。'); return;
  }

  var sign = (type === 'deficit') ? -1 : 1;          // 缺额使频率下降
  var df = sign * loss / K;                           // 稳态频率偏差(Hz)
  var f = 50 + df;                                    // 稳态频率(Hz)
  var ratio = loss / load * 100;                      // 变化量占负荷比例
  var fBand = 50 - ufls;                              // 到首轮定值的频率降幅
  var critLoss = K * fBand;                           // 触发首轮减载的临界功率变化量(MW)
  var margin = critLoss - loss;                       // 距首轮的裕度(MW)
  var absDf = Math.abs(df);

  var freqCls = absDf > 0.5 ? 'cr-bad' : (absDf > 0.2 ? '' : 'cr-good');
  var out = '<table class="cr-table">';
  out += tr('稳态频率偏差 Δf', (df >= 0 ? '+' : '−') + DSP._fix(absDf, 3) + ' Hz', freqCls, 'Δf = ' + (sign < 0 ? '−' : '+') + ' 功率变化量 ÷ K');
  out += tr('稳态频率 f', DSP._fix(f, 3) + ' Hz', freqCls, '50 Hz ' + (df >= 0 ? '+' : '−') + ' ' + DSP._fix(absDf, 3) + ' Hz');
  out += tr('功率变化量占负荷比例', DSP._fix(ratio, 2) + ' %', '', DSP._w(loss, 0) + ' MW ÷ ' + DSP._w(load, 0) + ' MW');
  out += tr('触发首轮减载的临界变化量', DSP._w(critLoss, 0) + ' MW', '', 'K × (50 − ' + DSP._fix(ufls, 1) + ') = ' + DSP._w(K, 0) + ' × ' + DSP._fix(fBand, 1));
  out += tr('距首轮定值的裕度', DSP._w(Math.abs(margin), 0) + ' MW', margin > 0 ? 'cr-good' : 'cr-bad', margin > 0 ? '尚未触发首轮' : '已越过头轮定值');
  out += tr('是否触发低频减载', (absDf >= fBand ? '触发' : '不触发'), absDf >= fBand ? 'cr-bad' : 'cr-good', absDf >= fBand ? '稳态频率已低于 ' + DSP._fix(ufls, 1) + ' Hz' : '稳态频率仍高于 ' + DSP._fix(ufls, 1) + ' Hz');
  out += '</table>';

  if (absDf > 0.5) {
    out += warn('频率偏差已达 ' + DSP._fix(absDf, 3) + ' Hz,超出正常运行允许范围(通常 ±0.2 Hz 以内、事故情况下 ±0.5 Hz 以内),属于需要按规程处置的异常工况。');
  } else if (absDf > 0.2) {
    out += warn('频率偏差 ' + DSP._fix(absDf, 3) + ' Hz 已超出正常运行允许范围(约 ±0.2 Hz),但仍在事故允许范围内,需要一次调频与 AGC 尽快把频率拉回。');
  }
  if (type === 'deficit' && absDf >= fBand) {
    out += warn('已越过首轮定值 ' + DSP._fix(ufls, 1) + ' Hz,按低频减载设计逻辑应开始按轮次切除负荷。切除量不足则频率继续下滑,切除过多则造成不必要的停电,这正是轮次与比例要仔细配置的原因。');
  }
  out += '<p class="calc-note">这个工具演示的是最简化的静态关系:<b>频率偏差取决于功率变化量与系统的单位调节功率 K</b>。K 越大(在线机组多、调差系数小、负荷频率特性强),同样的缺额造成的频率降幅越小——这就是为什么大电网「经得起」大机组跳闸。真实过程还要考虑惯量决定的变化速率、一次调频的响应时延、AGC 的二次调整与低频减载的动作顺序。以上为教学口径,实际按现行调度规程与经批准的系统方案执行。</p>';
  el.innerHTML = out;
};

/* ---- 2. AGC 调频备用 ---- */
DSP.calcAgcReserve = function() {
  var el = document.getElementById('ag-result');
  if (!el) return;
  var load = DSP._num('ag-load'), n1 = DSP._num('ag-n1'), factor = DSP._num('ag-factor');
  var err = DSP._num('ag-err'), rate = DSP._num('ag-rate'), time = DSP._num('ag-time');
  if (load === null || n1 === null || factor === null || err === null || rate === null || time === null) {
    el.innerHTML = warn('请把系统负荷、最大单机容量、备用系数、偏差率、调节速率与恢复时间填写完整。'); return;
  }
  if (load <= 0 || n1 < 0 || factor < 0 || err < 0 || rate <= 0 || time <= 0) {
    el.innerHTML = warn('系统负荷、调节速率与恢复时间须为正数,其余不能为负。'); return;
  }

  var R1 = n1 * factor;                 // 事故备用需求(盖住最大单机跳闸)
  var R2 = load * err / 100;            // 负荷波动备用(盖住预测偏差)
  var R = R1 + R2;                      // 备用需求合计
  var resRatio = R / load * 100;        // 备用率
  var K = 2000, dfAllow = 0.2;          // 教学取值:单位调节功率与事故允许频率偏差
  var primary = K * dfAllow;            // 一次调频可支撑的功率缺额(MW)
  var need = Math.max(0, R - primary);  // 一次调频之后仍需 AGC 补足的部分
  var frac = rate / 100 * time;         // 机组在恢复时间内可调整的出力占比
  var pn = frac > 0 ? need / frac : 0;  // 所需在线可调容量(MW)
  var pnRatio = load > 0 ? pn / load * 100 : 0;

  var ratioCls = resRatio > 15 ? 'cr-bad' : (resRatio > 8 ? '' : 'cr-good');
  var out = '<table class="cr-table">';
  out += tr('事故备用需求', DSP._w(R1, 0) + ' MW', '', '最大单机容量 × 备用系数 = ' + DSP._w(n1, 0) + ' × ' + DSP._fix(factor, 2));
  out += tr('负荷波动备用需求', DSP._w(R2, 0) + ' MW', '', '系统负荷 × 预测偏差率 = ' + DSP._w(load, 0) + ' × ' + DSP._fix(err, 2) + '%');
  out += tr('备用需求合计', DSP._w(R, 0) + ' MW', '', '两项相加 = ' + DSP._w(R1, 0) + ' + ' + DSP._w(R2, 0));
  out += tr('备用率', DSP._fix(resRatio, 2) + ' %', ratioCls, '备用合计 ÷ 系统负荷');
  out += tr('一次调频可支撑缺额', DSP._w(primary, 0) + ' MW', '', '教学取值 K = ' + DSP._w(K, 0) + ' MW/Hz × Δf = ' + DSP._fix(dfAllow, 1) + ' Hz');
  out += tr('仍需 AGC 补足的功率', DSP._w(need, 0) + ' MW', '', '备用合计 − 一次调频支撑,不足按 0 计');
  out += tr('机组在恢复时间内的调节能力', DSP._fix(frac * 100, 1) + ' %', '', '调节速率 ' + DSP._fix(rate, 1) + '%/分钟 × ' + DSP._fix(time, 0) + ' 分钟');
  out += tr('所需在线可调容量', DSP._w(pn, 0) + ' MW', pnRatio > 30 ? 'cr-bad' : 'cr-good', '仍需补足功率 ÷ 调节能力');
  out += tr('占系统负荷比例', DSP._fix(pnRatio, 2) + ' %', pnRatio > 30 ? 'cr-bad' : 'cr-good', '所需在线可调容量 ÷ 系统负荷');
  out += '</table>';

  if (pnRatio > 30) {
    out += warn('所需在线可调容量占系统负荷 ' + DSP._fix(pnRatio, 2) + ' %,比例偏高。通常意味着机组调节速率偏低、允许的恢复时间偏短,或备用需求本身就大;实际需靠更多在线机组参与调节、加快调节速率或延长恢复时间来解决。');
  }
  if (resRatio > 15) {
    out += warn('备用率 ' + DSP._fix(resRatio, 2) + ' % 偏高。备用留得多,抗事故能力更强,但要占用可发电量、抬高运行成本,过高的备用率本身并不经济。');
  }
  out += '<p class="calc-note">备用不是「留一笔电」这么简单,它要回答三个问题:<b>够不够(容量)、来不来得及(速率)、谁出这个钱(成本)</b>。事故备用覆盖的是最坏的单点故障,波动备用覆盖的是预测误差,两者性质不同却都要在同一批在线机组上落实,所以在线机组的调节性能往往比备用总量更关键。以上 K 与 Δf 取教学示意值,真实取值须由系统计算与规程确定。</p>';
  el.innerHTML = out;
};

/* ---- 3. 继电保护定值校核(过流) ---- */
DSP.calcRelaySetting = function() {
  var el = document.getElementById('rs-result');
  if (!el) return;
  var ct = DSP._num('rs-ct'), load = DSP._num('rs-load'), krel = DSP._num('rs-krel'), kre = DSP._num('rs-kre');
  var ik = DSP._num('rs-ik'), tup = DSP._num('rs-tup'), dt = DSP._num('rs-dt'), ksreq = DSP._num('rs-ksreq');
  if (ct === null || load === null || krel === null || kre === null || ik === null || tup === null || dt === null || ksreq === null) {
    el.innerHTML = warn('请把互感器变比、最大负荷电流、两个系数、短路电流、时间与灵敏系数要求填写完整。'); return;
  }
  if (ct <= 0 || kre <= 0 || load < 0 || ik < 0 || tup < 0 || dt < 0) {
    el.innerHTML = warn('互感器变比与返回系数须为正数,其余不能为负。'); return;
  }

  var iset1 = krel / kre * load;            // 一次动作电流(A)
  var iset2 = iset1 / ct;                   // 二次动作电流(A)
  var ksen = iset1 > 0 ? ik / iset1 : 0;    // 灵敏系数
  var t = tup + dt;                         // 本保护动作时间(s)
  var pass = ksen >= ksreq;
  var headroom = iset1 - load;              // 定值高出最大负荷电流的部分

  var ksCls = ksen >= 2 ? 'cr-good' : (pass ? '' : 'cr-bad');
  var out = '<table class="cr-table">';
  out += tr('一次动作电流定值', DSP._w(iset1, 1) + ' A', '', 'Krel ÷ Kre × 最大负荷电流 = ' + DSP._fix(krel, 2) + ' ÷ ' + DSP._fix(kre, 2) + ' × ' + DSP._w(load, 0));
  out += tr('折算二次动作电流', DSP._fix(iset2, 2) + ' A', '', '一次定值 ÷ 变比 = ' + DSP._w(iset1, 1) + ' ÷ ' + DSP._fix(ct, 0));
  out += tr('灵敏系数 Ksen', DSP._fix(ksen, 2), ksCls, '末端最小短路电流 ÷ 一次定值 = ' + DSP._w(ik, 0) + ' ÷ ' + DSP._w(iset1, 1));
  out += tr('灵敏系数要求', DSP._fix(ksreq, 2), '', pass ? '当前定值满足要求' : '当前定值不满足要求');
  out += tr('定值高出最大负荷电流', DSP._w(headroom, 1) + ' A', '', DSP._w(iset1, 1) + ' − ' + DSP._w(load, 0) + '，防止正常运行时误动');
  out += tr('本保护动作时间', DSP._fix(t, 2) + ' s', '', '上级时间 + 时间级差 = ' + DSP._fix(tup, 1) + ' + ' + DSP._fix(dt, 2));
  out += tr('与上级的时间级差', DSP._fix(dt, 2) + ' s', dt < 0.3 ? 'cr-bad' : 'cr-good', dt < 0.3 ? '级差偏小,配合可靠性下降' : '级差可保证上级后动');
  out += '</table>';

  if (!pass) {
    out += warn('灵敏系数 ' + DSP._fix(ksen, 2) + ' 低于要求 ' + DSP._fix(ksreq, 2) + ':末端短路时保护可能拒动。这不是「把定值调小」就能解决的——定值调小会与最大负荷电流靠得太近,正常运行就可能误动。<b>本质矛盾是负荷电流与故障电流之间的差距不够大</b>,通常要靠增设其他原理的保护(如距离、差动)或调整保护配置来解决。');
  }
  if (dt < 0.3) {
    out += warn('时间级差 ' + DSP._fix(dt, 2) + ' s 偏小。级差要同时容得下上级保护的动作误差与断路器动作时间,过小会导致越级跳闸,扩大停电范围。');
  }
  out += '<p class="calc-note">这个工具演示的是过流保护定值里最核心的一对矛盾:<b>为了不误动,定值要躲过最大负荷电流(靠 Krel 与 Kre);为了不拒动,定值要低于末端最小短路电流(靠灵敏系数)</b>。这两个要求同时成立,保护才站得住。真实的定值计算还要考虑运行方式变化、互感器误差、上下级配合、变压器接线组别与二次接线系数等一系列因素,<b>必须由专业人员按现场参数计算、经审批后以定值单形式下达</b>,本站工具仅用于理解配合关系。</p>';
  el.innerHTML = out;
};

/* ---- 4. 故障切除时间与稳定裕度 ---- */
DSP.calcClearTime = function() {
  var el = document.getElementById('ct-result');
  if (!el) return;
  var type = document.getElementById('ct-type').value;
  var ch = DSP._num('ct-ch'), prot = DSP._num('ct-prot'), brk = DSP._num('ct-brk'), limit = DSP._num('ct-limit');
  if (ch === null || prot === null || brk === null || limit === null) {
    el.innerHTML = warn('请把通道时间、保护动作时间、断路器分闸时间与极限切除时间填写完整。'); return;
  }
  if (ch < 0 || prot < 0 || brk < 0 || limit <= 0) {
    el.innerHTML = warn('三段耗时不能为负,极限切除时间须为正数。'); return;
  }

  var cfg = {
    three: { name: '三相短路', factor: 1.00, note: '对称短路,对系统冲击最大,极限切除时间最短' },
    two:   { name: '两相短路', factor: 1.15, note: '不对称短路,严重程度低于三相,允许的切除时间略长' },
    one:   { name: '单相接地', factor: 1.35, note: '单相接地,多数情况下严重程度最低,允许的切除时间最长' }
  }[type];

  var total = ch + prot + brk;                 // 总切除时间(ms)
  var lim = limit * cfg.factor;                // 该故障类型下的极限切除时间(ms)
  var marginMs = lim - total;
  var margin = lim > 0 ? marginMs / lim * 100 : 0;

  var mCls = margin < 0 ? 'cr-bad' : (margin < 10 ? 'cr-bad' : (margin < 30 ? '' : 'cr-good'));
  var verdict = margin < 0 ? '已超过极限切除时间,存在失稳风险'
              : (margin < 10 ? '裕度危险'
              : (margin < 30 ? '裕度偏紧' : '裕度充足'));

  var out = '<table class="cr-table">';
  out += tr('故障类型', cfg.name, '', cfg.note);
  out += tr('保护通道时间', DSP._fix(ch, 0) + ' ms', '', '纵联保护两端交换信号所需时间');
  out += tr('保护动作时间', DSP._fix(prot, 0) + ' ms', '', '装置判别到出口的时间');
  out += tr('断路器分闸时间', DSP._fix(brk, 0) + ' ms', '', '收到命令到电弧熄灭的时间');
  out += tr('总切除时间', DSP._fix(total, 0) + ' ms', '', DSP._fix(ch, 0) + ' + ' + DSP._fix(prot, 0) + ' + ' + DSP._fix(brk, 0));
  out += tr('该类型极限切除时间', DSP._fix(lim, 0) + ' ms', '', '三相基准 ' + DSP._fix(limit, 0) + ' ms × 折算系数 ' + DSP._fix(cfg.factor, 2));
  out += tr('剩余裕度', DSP._fix(marginMs, 0) + ' ms', mCls, '极限切除时间 − 总切除时间');
  out += tr('裕度比例', DSP._fix(margin, 1) + ' %', mCls, '剩余裕度 ÷ 极限切除时间');
  out += tr('判断', verdict, mCls, '按教学分级:≥30% 充足、10%~30% 偏紧、<10% 危险、负值失稳');
  out += '</table>';

  if (margin < 0) {
    out += warn('总切除时间 ' + DSP._fix(total, 0) + ' ms 已超过该故障类型的极限切除时间 ' + DSP._fix(lim, 0) + ' ms,按等面积准则这种故障形态下系统可能失去同步。<b>这类情形在真实系统中是不允许出现的</b>,必须通过缩短切除时间或调整运行方式避免。');
  } else if (margin < 10) {
    out += warn('裕度仅 ' + DSP._fix(margin, 1) + ' %,几乎贴着极限切除时间运行。运行方式稍一变严,或保护与断路器动作稍有迟延,就会越过边界。');
  } else if (margin < 30) {
    out += warn('裕度 ' + DSP._fix(margin, 1) + ' % 偏紧。可行但应对运行方式变化与设备状态波动的余地不大。');
  }
  if (margin < 30) {
    out += '<p class="calc-note">裕度不足时,工程上通常从三处找余量:<b>一是缩短保护动作时间</b>(改用全线速动的纵联保护,而不是分段有延时的保护);<b>二是更换动作更快的断路器</b>;三是限制该方式下的潮流。三者对应的时间量级不同——保护往往能省下几十毫秒,断路器省下十几毫秒,而限制潮流则是不动设备就能拿到裕度的办法。</p>';
  }
  out += '<p class="calc-note">这个工具只做「时间账」,把三种故障类型的严重程度差别折算成极限切除时间上的系数。真实的稳定裕度要由稳定计算得出,受电网结构、开机方式、潮流水平、机组与励磁特性等众多因素影响,<b>极限切除时间不是一个固定值</b>,必须针对具体运行方式计算。以上为教学口径,实际以稳定计算结论与调度要求为准。</p>';
  el.innerHTML = out;
};

/* ---- 5. 低频减载轮次配置 ---- */
DSP.calcUfls = function() {
  var el = document.getElementById('ul-result');
  if (!el) return;
  var load = DSP._num('ul-load'), K = DSP._num('ul-k'), target = DSP._num('ul-target');
  var freqs = numList(document.getElementById('ul-freq').value);
  var pcts = numList(document.getElementById('ul-pct').value);
  if (load === null || K === null || target === null) {
    el.innerHTML = warn('请把系统负荷、单位调节功率与目标稳态频率填写完整。'); return;
  }
  if (load <= 0 || K <= 0) { el.innerHTML = warn('系统负荷与单位调节功率须为正数。'); return; }
  if (freqs.length === 0 || pcts.length === 0) { el.innerHTML = warn('至少填一轮频率定值与切除比例。'); return; }
  if (freqs.length !== pcts.length) {
    el.innerHTML = warn('频率定值有 ' + freqs.length + ' 个、切除比例有 ' + pcts.length + ' 个,两者数量必须一致。'); return;
  }
  for (var i = 0; i < freqs.length; i++) {
    if (isNaN(freqs[i]) || isNaN(pcts[i])) { el.innerHTML = warn('第 ' + (i + 1) + ' 轮存在无法识别的数字,请检查分隔符。'); return; }
    if (freqs[i] <= 0 || freqs[i] >= 50 || pcts[i] < 0) { el.innerHTML = warn('第 ' + (i + 1) + ' 轮:频率定值须在 0 ~ 50 Hz 之间,切除比例不能为负。'); return; }
  }

  var rows = '', cum = 0, cumPct = 0, last = null;
  for (var k = 0; k < freqs.length; k++) {
    var cut = load * pcts[k] / 100;              // 该轮切除容量(MW)
    cum += cut; cumPct += pcts[k];
    var deficit = K * (50 - freqs[k]);           // 该轮定值对应的功率缺额(MW)
    rows += '<tr><td class="cr-name">第 ' + (k + 1) + ' 轮</td>' +
            '<td class="cr-val">' + DSP._fix(freqs[k], 1) + ' Hz</td>' +
            '<td class="cr-val">' + DSP._fix(pcts[k], 1) + ' %</td>' +
            '<td class="cr-val">' + DSP._w(cut, 0) + ' MW</td>' +
            '<td class="cr-val">' + DSP._w(cum, 0) + ' MW</td>' +
            '<td class="cr-val">' + DSP._fix(cumPct, 1) + ' %</td>' +
            '<td class="cr-val">' + DSP._w(deficit, 0) + ' MW</td></tr>';
    last = { f: freqs[k], deficit: deficit };
  }

  // 递减校验
  var desc = true;
  for (var m = 1; m < freqs.length; m++) if (freqs[m] >= freqs[m - 1]) desc = false;
  // 频率间隔
  var gaps = [];
  for (var n = 1; n < freqs.length; n++) gaps.push(freqs[n - 1] - freqs[n]);

  var out = '<table class="cr-table cr-wide">';
  out += '<tr><th>轮次</th><th>频率定值</th><th>切除比例</th><th>切除容量</th><th>累计切除</th><th>累计占比</th><th>该轮对应缺额</th></tr>';
  out += rows;
  out += '</table>';

  // 最严重情形:末轮定值对应的功率缺额
  var worst = last ? last.deficit : 0;
  var residual = worst - cum;                    // 末轮全切后剩余缺额(可为负,表示过切)
  var fFinal = 50 - residual / K;                // 残余缺额对应的稳态频率
  var cover = cum >= worst;

  var out2 = '<table class="cr-table">';
  out2 += tr('末轮定值对应功率缺额', DSP._w(worst, 0) + ' MW', '', 'K × (50 − ' + DSP._fix(last ? last.f : 0, 1) + ') = ' + DSP._w(K, 0) + ' × ' + DSP._fix(50 - (last ? last.f : 0), 1));
  out2 += tr('各轮累计切除容量', DSP._w(cum, 0) + ' MW', cover ? 'cr-good' : 'cr-bad', '各轮切除容量之和,占总负荷 ' + DSP._fix(cumPct, 1) + '%');
  out2 += tr('全切后残余缺额', (residual >= 0 ? '' : '过切 ') + DSP._w(Math.abs(residual), 0) + ' MW', residual > 0 ? 'cr-bad' : 'cr-good', residual > 0 ? '切除量不足以覆盖缺额' : '切除量已覆盖缺额');
  out2 += tr('全切后稳态频率估算', DSP._fix(fFinal, 3) + ' Hz', fFinal >= target ? 'cr-good' : 'cr-bad', '50 − 残余缺额 ÷ K');
  out2 += tr('目标稳态频率', DSP._fix(target, 1) + ' Hz', '', fFinal >= target ? '达到目标' : '低于目标');
  out2 += '</table>';

  if (!desc) {
    out += warn('各轮频率定值不是逐轮递减的。低频减载按频率从高到低依次动作,轮次定值必须单调递减,否则会出现轮次越位或永远不动作的情况。');
  }
  if (gaps.length > 0) {
    var minGap = Math.min.apply(null, gaps), maxGap = Math.max.apply(null, gaps);
    if (minGap < 0.15) {
      out += warn('相邻轮次最小频率间隔仅 ' + DSP._fix(minGap, 2) + ' Hz,偏小。间隔太小会让多轮几乎同时动作,一次切除过多负荷;通常希望各轮之间有足够间隔,具体取值以现行规程为准。');
    }
    if (maxGap > 0.4) {
      out += warn('相邻轮次最大频率间隔达 ' + DSP._fix(maxGap, 2) + ' Hz,偏大。间隔过大意味着某一轮切除后、下一轮动作前,频率可能在这段区间内长时间停留甚至继续下滑。');
    }
  }
  if (!cover) {
    out += warn('各轮累计切除容量 ' + DSP._w(cum, 0) + ' MW 小于末轮定值对应的功率缺额 ' + DSP._w(worst, 0) + ' MW,最严重情形下频率仍会低于末轮定值。<b>这是低频减载配置里最需要避免的一种缺陷</b>——切了还不够。');
  } else if (residual < 0 && Math.abs(residual) > load * 0.05) {
    out += warn('过切 ' + DSP._w(Math.abs(residual), 0) + ' MW,超过系统负荷的 5%。切得比需要的多,虽然能保住频率,却会造成本可避免的停电损失;轮次与比例可以再细一些。');
  }
  out += '<p class="calc-note">低频减载的设计思路可以概括成一句话:<b>把负荷切成若干块,频率掉到哪儿就切到哪儿</b>。轮次要够多、间隔要够匀,是为了让切除量跟着缺额逐级匹配——缺额小就少切,缺额大才多切,避免一上来就大范围停电。真实配置还要考虑负荷的频率特性、各轮覆盖的负荷分布、与稳控系统的协调、以及装置动作的时延,<b>具体轮次与比例以现行规程与经批准的系统方案为准</b>。</p>';
  el.innerHTML = out + out2;
};

/* ---- 6. 保护上下级配合校核 ---- */
DSP.calcCoordination = function() {
  var el = document.getElementById('co-result');
  if (!el) return;
  var lo = DSP._num('co-lo'), hi = DSP._num('co-hi'), kreq = DSP._num('co-k');
  var tlo = DSP._num('co-tlo'), thi = DSP._num('co-thi'), dtreq = DSP._num('co-dt');
  var ik = DSP._num('co-ik'), ksreq = DSP._num('co-ks');
  if (lo === null || hi === null || kreq === null || tlo === null || thi === null || dtreq === null || ik === null || ksreq === null) {
    el.innerHTML = warn('请把上下级定值、两个配合要求、两级动作时间与灵敏系数要求填写完整。'); return;
  }
  if (lo <= 0 || hi <= 0) { el.innerHTML = warn('上下级保护的一次定值须大于 0。'); return; }
  if (tlo < 0 || thi < 0 || dtreq < 0 || ik < 0 || ksreq < 0 || kreq < 0) {
    el.innerHTML = warn('动作时间、级差要求、短路电流与系数要求不能为负。'); return;
  }

  var kact = hi / lo;                            // 实际电流配合系数
  var dtact = thi - tlo;                         // 实际时间级差(s)
  var ksen = hi > 0 ? ik / hi : 0;               // 远后备灵敏系数(以末端短路电流对上级定值)
  var kOk = kact >= kreq;
  var tOk = dtact >= dtreq;
  var sOk = ksen >= ksreq;
  var allOk = kOk && tOk && sOk;

  var hiMinByK = lo * kreq;                      // 上级定值下限(电流配合)
  var hiMinByS = ksreq > 0 ? ik / ksreq : 0;     // 上级定值上限(灵敏系数)
  var thiMin = tlo + dtreq;                      // 上级时间下限
  var kMargin = kact - kreq;
  var tMargin = dtact - dtreq;

  var out = '<table class="cr-table">';
  out += tr('下级保护一次定值', DSP._w(lo, 1) + ' A', '', '靠近负荷侧、应先动的这一级');
  out += tr('上级保护一次定值', DSP._w(hi, 1) + ' A', '', '靠近电源侧、应后动的这一级');
  out += tr('实际电流配合系数', DSP._fix(kact, 3), kOk ? 'cr-good' : 'cr-bad', '上级 ÷ 下级 = ' + DSP._w(hi, 1) + ' ÷ ' + DSP._w(lo, 1));
  out += tr('电流配合系数要求', DSP._fix(kreq, 2), '', kOk ? '满足,上级定值足够大' : '不满足,上级定值偏小,可能越级跳闸');
  out += tr('电流配合余量', (kMargin >= 0 ? '+' : '−') + DSP._fix(Math.abs(kMargin), 3), kOk ? 'cr-good' : 'cr-bad', '实际系数 − 要求系数');
  out += tr('下级动作时间', DSP._fix(tlo, 2) + ' s', '', '该级完成切除所需时间');
  out += tr('上级动作时间', DSP._fix(thi, 2) + ' s', '', '该级完成切除所需时间');
  out += tr('实际时间级差', DSP._fix(dtact, 2) + ' s', tOk ? 'cr-good' : 'cr-bad', '上级时间 − 下级时间');
  out += tr('时间级差要求', DSP._fix(dtreq, 2) + ' s', '', tOk ? '满足,上级后动有保障' : '不满足,两级可能同时动作');
  out += tr('远后备灵敏系数', DSP._fix(ksen, 2), sOk ? 'cr-good' : 'cr-bad', '末端最小短路电流 ÷ 上级定值 = ' + DSP._w(ik, 0) + ' ÷ ' + DSP._w(hi, 1));
  out += tr('灵敏系数要求', DSP._fix(ksreq, 2), '', sOk ? '满足' : '不满足,上级对本级末端故障反应不足');
  out += tr('上级定值建议区间', DSP._w(hiMinByK, 1) + ' ~ ' + DSP._w(hiMinByS, 1) + ' A',
    (hiMinByK <= hiMinByS && hi >= hiMinByK && hi <= hiMinByS) ? 'cr-good' : 'cr-bad',
    DSP._w(hiMinByK, 1) + ' A 保配合、' + DSP._w(hiMinByS, 1) + ' A 保灵敏,当前 ' + DSP._w(hi, 1) + ' A');
  out += tr('上级时间下限', DSP._fix(thiMin, 2) + ' s', thi >= thiMin ? 'cr-good' : 'cr-bad', '下级时间 + 级差要求 = ' + DSP._fix(tlo, 2) + ' + ' + DSP._fix(dtreq, 2));
  out += tr('配合结论', allOk ? '选择性满足' : '选择性不满足', allOk ? 'cr-good' : 'cr-bad', '电流、时间、灵敏三项须同时成立');
  out += '</table>';

  if (hiMinByK > hiMinByS) {
    out += warn('这里出现了配合上的<b>死结</b>:保配合需要上级定值不小于 ' + DSP._w(hiMinByK, 1) + ' A,保灵敏又要求它不大于 ' + DSP._w(hiMinByS, 1) + ' A,而前者已大于后者。这说明<b>仅靠过流保护两级配合已经无法同时满足选择性</b>,通常要靠增加其他原理的保护(距离、差动)或改变保护配置来化解。');
  } else {
    if (!kOk) out += warn('电流配合不满足:上级定值 ' + DSP._w(hi, 1) + ' A 相对下级 ' + DSP._w(lo, 1) + ' A 偏小(实际系数 ' + DSP._fix(kact, 3) + ' < 要求 ' + DSP._fix(kreq, 2) + ')。下级保护范围末端故障时,上级可能先动,<b>这就是越级跳闸</b>——停电范围被不必要地扩大。上级定值至少应提到 ' + DSP._w(hiMinByK, 1) + ' A。');
    if (!tOk) out += warn('时间级差不足:两级只差 ' + DSP._fix(dtact, 2) + ' s,小于要求 ' + DSP._fix(dtreq, 2) + ' s。级差要同时容得下上级保护的测量与动作误差、以及断路器的动作时间,过小时两级可能抢动。上级时间至少应退到 ' + DSP._fix(thiMin, 2) + ' s。');
    if (!sOk) out += warn('远后备灵敏度不足:上级保护对下级末端故障的灵敏系数只有 ' + DSP._fix(ksen, 2) + ',低于要求 ' + DSP._fix(ksreq, 2) + '。此时若下级保护拒动,上级也未必能正确切除,失去后备作用。');
  }
  out += '<p class="calc-note">上下级配合要同时守住三条线,缺一条就出问题:<b>一是电流线</b>——上级定值要明显大于下级,否则下级范围里的故障会引发越级;<b>二是时间线</b>——上级要慢一个级差,给下级先动的机会;<b>三是灵敏线</b>——上级定值又不能太大,否则对下级末端故障反应不足,起不到后后备作用。<b>电流线要「大」、灵敏线要「小」,两者一夹,可用的定值区间就出来了</b>;区间为空,说明这级保护光靠过流原理撑不住。真实的配合计算还要考虑运行方式变化、互感器误差、互感器接线方式与二次接线系数等因素,<b>必须由专业人员按现场参数计算、经审批后以定值单形式下达</b>。本工具仅用于理解配合关系。</p>';
  el.innerHTML = out;
};

/* ---- 7. 新能源消纳与弃电 ---- */
DSP.calcCurtailment = function() {
  var el = document.getElementById('cu-result');
  if (!el) return;
  var cap = DSP._num('cu-cap'), eh = DSP._num('cu-h'), mx = DSP._num('cu-max'), mn = DSP._num('cu-min');
  var tech = DSP._num('cu-tech'), outCap = DSP._num('cu-out'), sto = DSP._num('cu-sto');
  var win = DSP._num('cu-win'), target = DSP._num('cu-target');
  if (cap === null || eh === null || mx === null || mn === null || tech === null || outCap === null || sto === null || win === null || target === null) {
    el.innerHTML = warn('请把装机、利用小时、最大与最小负荷、技术出力率、外送、储能、大发时长与目标利用率填写完整。'); return;
  }
  if (cap < 0 || eh < 0 || mx < 0 || mn < 0 || outCap < 0 || sto < 0) {
    el.innerHTML = warn('装机、利用小时、负荷、外送与储能不能为负。'); return;
  }
  if (win <= 0) { el.innerHTML = warn('大发时段时长须大于 0。'); return; }
  if (tech < 0 || tech > 100) { el.innerHTML = warn('常规机组最小技术出力率须在 0 ~ 100 % 之间。'); return; }
  if (target < 0 || target > 100) { el.innerHTML = warn('目标利用率须在 0 ~ 100 % 之间。'); return; }

  var techOut = mn * tech / 100;                       // 常规机组最小技术出力(MW)
  var loadRoom = Math.max(0, mn - techOut);            // 负荷侧消纳空间(MW)
  var room = loadRoom + outCap + sto;                  // 可消纳功率合计(MW)
  var avail = cap * eh * 0.1;                          // 理论日发电量(万kWh),1 MWh = 0.1 万kWh
  var roomE = room * win * 0.1;                        // 可消纳电量(万kWh)
  var curtE = Math.max(0, avail - roomE);              // 弃电电量(万kWh)
  var curtPct = avail > 0 ? curtE / avail * 100 : 0;
  var usePct = 100 - curtPct;
  var needE = avail * target / 100;                    // 目标利用率下所需消纳电量(万kWh)
  var gapE = Math.max(0, needE - roomE);               // 需要增加的可消纳电量(万kWh)
  var gapP = win > 0 ? gapE / win / 0.1 : 0;           // 折算需要增加的可消纳功率(MW)
  var pene = mx > 0 ? cap / mx * 100 : 0;              // 装机占最大负荷比例(渗透率)
  var roomShare = room > 0 ? [loadRoom / room * 100, outCap / room * 100, sto / room * 100] : [0, 0, 0];

  var useCls = usePct >= target ? 'cr-good' : (usePct >= target - 5 ? '' : 'cr-bad');

  var out = '<table class="cr-table">';
  out += tr('新能源装机容量', DSP._w(cap, 0) + ' MW', '', '风光合计');
  out += tr('装机占最大负荷比例', DSP._fix(pene, 1) + ' %', pene > 60 ? 'cr-bad' : '', DSP._w(cap, 0) + ' MW ÷ ' + DSP._w(mx, 0) + ' MW,用于看渗透水平');
  out += tr('理论日发电量', DSP._w(avail, 1) + ' 万kWh', '', DSP._w(cap, 0) + ' MW × ' + DSP._fix(eh, 1) + ' h ÷ 10');
  out += tr('负荷侧消纳空间', DSP._w(loadRoom, 0) + ' MW', '', '日最小负荷 − 常规最小技术出力(' + DSP._w(mn, 0) + ' × ' + DSP._fix(tech, 0) + ' % = ' + DSP._w(techOut, 0) + ' MW),占 ' + DSP._fix(roomShare[0], 1) + ' %');
  out += tr('外送通道空间', DSP._w(outCap, 0) + ' MW', '', '富余电力送出去的能力,占 ' + DSP._fix(roomShare[1], 1) + ' %');
  out += tr('储能充电空间', DSP._w(sto, 0) + ' MW', '', '把大发时段的电存起来,占 ' + DSP._fix(roomShare[2], 1) + ' %');
  out += tr('可消纳功率合计', DSP._w(room, 0) + ' MW', '', '三块相加,大发时段能同时接纳的最大新能源功率');
  out += tr('可消纳电量', DSP._w(roomE, 1) + ' 万kWh', '', DSP._w(room, 0) + ' MW × ' + DSP._fix(win, 1) + ' h ÷ 10');
  out += tr('弃电电量', DSP._w(curtE, 1) + ' 万kWh', curtE > 0 ? 'cr-bad' : 'cr-good', curtE > 0 ? '理论发电量 − 可消纳电量' : '可消纳空间足以全额接纳');
  out += tr('弃电率', DSP._fix(curtPct, 2) + ' %', curtPct > 5 ? 'cr-bad' : (curtPct > 0 ? '' : 'cr-good'), '弃电电量 ÷ 理论发电量');
  out += tr('实际利用率', DSP._fix(usePct, 2) + ' %', useCls, '100 % − 弃电率');
  out += tr('目标利用率', DSP._fix(target, 1) + ' %', '', usePct >= target ? '已达到目标' : '未达到目标');
  out += tr('达到目标还需增加空间', (gapP > 0 ? DSP._w(gapP, 0) + ' MW' : '0 MW'), gapP > 0 ? 'cr-bad' : 'cr-good', gapP > 0 ? '需补的可消纳功率(含对应电量 ' + DSP._w(gapE, 1) + ' 万kWh)' : '现有空间已足够');
  out += '</table>';

  if (curtE > 0 && gapP > 0) {
    out += warn('当前弃电率 ' + DSP._fix(curtPct, 2) + ' %,离目标利用率 ' + DSP._fix(target, 1) + ' % 还差 ' + DSP._w(gapP, 0) + ' MW 的可消纳空间。这 ' + DSP._w(gapP, 0) + ' MW 可以从三处补:<b>压常规机组最小技术出力(深调改造)、扩外送通道、增配储能</b>——三者对应的时间与成本差别很大,深调最快但受机组能力限制,外送最有效但受通道与送端制约,储能最灵活但成本最高。');
  }
  if (pene > 60) {
    out += warn('新能源装机已达最大负荷的 ' + DSP._fix(pene, 1) + ' %。渗透率高到这个程度,「发电装得下」和「电网接得住」就不再是一回事——<b>消纳的瓶颈从电源侧转到了系统调节能力与通道上</b>。');
  }
  if (loadRoom <= 0) {
    out += warn('负荷侧消纳空间已被压到零:常规机组即便压到最小技术出力,也刚好顶满日最小负荷。这说明<b>系统在低谷时段几乎没有给新能源留位置</b>,再多装机也只能弃掉,必须先解决调峰能力。');
  }
  if (curtE === 0) {
    out += '<p class="calc-note">当前参数下可消纳空间足以全额接纳理论发电量,所以没有弃电。但这并不代表系统就宽裕——<b>弃电与否取决于「大发时段的功率平衡」,而不仅仅是「全年电量够不够」</b>。只要在大发那几个小时里,新能源出力峰值超过「负荷 − 常规最小出力 + 外送 + 储能可充」,电就发不出去。因此提高消纳率的着力点,始终是压低谷、扩通道、加储能这三件事。</p>';
  }
  out += '<p class="calc-note">这个工具演示的是「<b>电量对电量</b>」的简化账:<b>理论发电量 = 装机 × 等效利用小时;可消纳电量 = 可消纳功率 × 大发时长</b>,两者的差就是弃电。真实的新能源消纳要按时段做电力平衡(逐小时的负荷、风光出力、机组开机、外送曲线、储能充放),还要叠加电网安全约束(断面稳定极限、电压支撑、调频需求),<b>不是全年电量能对上就没问题</b>。这里的「日最小负荷」代表大发时段的最低负荷水平,是最保守的口径。实际测算须以电力电量平衡计算与调度机构结论为准。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
DSP.views.module = function(id) {
  var mod = DSP.modules.find(function(m) { return m.id === id; });
  if (!mod) { DSP.views.home(); return; }
  var P = DSP.progress();
  var lessons = DSP.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + DSP.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + DSP.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = DSP.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + DSP.esc(title) + '</a>';
    else html += '<span class="title">' + DSP.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及调度规程、继电保护配置与整定、安全稳定控制策略、自动化与通信技术规范、二次安全防护要求，正文均已按「以现行有效文件为准」的口径表述，<b>内容基线为 2026 年 9 月</b>。请以国家与行业标准、企业技术规定、调度机构正式文件及经批准的定值单为准。本站不构成工程设计、定值整定、采购或合规意见。</p></div>';
  html += '</div>';
  DSP.render(html);
};

/* ===== 术语 ===== */
DSP.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>电力调度名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 五级调度 / 继电保护 / 三道防线 / 四遥 / 状态估计 / 安全分区 / 低频减载" oninput="DSP.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(DSP.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与规程、标准中的正式定义可能存在简化差异。涉及具体适用时请查阅现行文件原文与专业文献。内容基线 2026 年 9 月。</p></div>';
  html += '</div>';
  DSP.render(html);
};
DSP.filterTerms = function(q) {
  var filtered = DSP.terms;
  if (q) { q = q.toLowerCase();
    filtered = DSP.terms.filter(function(t) {
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
    html += '<div class="term-name">' + DSP.esc(t.name) + ' <span class="term-en">' + DSP.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + DSP.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + DSP.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
DSP.views.myTerms = function() {
  var P = DSP.progress(); var collected = [];
  for (var i = 0; i < DSP.terms.length; i++) if (P.hasTerm(DSP.terms[i].id)) collected.push(DSP.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  DSP.render(html);
};

/* ===== 搜索 ===== */
DSP.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 继电保护 / 差动 / 稳控 / 状态估计 / 四遥 / 安全分区 / 低频减载" oninput="DSP.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  DSP.render(html);
};
DSP.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = DSP.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + DSP.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + DSP.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
DSP.views.settings = function() {
  var P = DSP.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="DSP.setTheme(\'dark\')">深色 · 紫夜电光</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="DSP.setTheme(\'light\')">浅色 · 冷白电光紫</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="DSP.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="DSP.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="DSP.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = DSP.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/dsp-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/dsp-progress" value="' + DSP.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + DSP.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + DSP.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + DSP.esc(DSP.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="DSP.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="DSP.clearData()">清除数据</button></div>';
  html += '</div>';
  DSP.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    DSP.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!DSP.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    DSP.sync.pullNow().then(function () { return DSP.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + DSP.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    DSP.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : DSP.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    DSP.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
DSP.setTheme = function(t) { document.documentElement.dataset.theme = t; DSP.progress().setPref('theme', t); DSP.views.settings(); };
DSP.setFontSize = function(s) { document.documentElement.dataset.fs = s; DSP.progress().setPref('fontSize', s); DSP.views.settings(); };
DSP.exportData = function() {
  var data = DSP.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dsp-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
DSP.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('dsp.progress.v1');
    window.location.reload();
  }
};
