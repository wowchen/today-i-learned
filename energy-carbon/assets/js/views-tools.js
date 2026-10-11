/* 工具视图:七件能源政策与碳市场互动工具(碳排放量 / 配额缺口与履约 / 碳边境调节 CBAM / 绿电与绿证 / 消纳责任权重 / 碳达峰路径 / 减排措施成本排序)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成投资、交易、报价、审计或法律依据。 */
window.ENC = window.ENC || {};
ENC.views = ENC.views || {};

ENC._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
ENC._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
ENC._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
ENC.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">能源政策与碳市场这件事,很多判断可以先算一算:<b>这批活动数据一年排多少碳、配额缺口有多大要花多少钱履约、出口到有碳价的市场会被收多少碳关税、绿电和绿证到底能多挣多少、消纳责任权重还差多少、按现在的增速哪一年能碳达峰、几项减排措施哪项最划算</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:排放因子、碳价、电价、配额比例等参数为便于理解的示例概数,不体现真实的行业核算指南、区域电网因子、配额分配方案、CBAM 实施细则与市场行情。<b>不作为碳核算、履约决策、投资测算、交易报价或合规审计依据。</b>实际工作须以现行核算标准、主管机构规则、真实市场数据与企业台账为准。</p>';
  html += '</div>';

  // 1. 碳排放量测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>碳排放量测算器</h3>';
  html += '<p class="lab-desc">一年到底排了多少碳?填外购电量与燃料消耗,看<b>电力间接排放、燃煤与天然气直接排放、合计排放,以及折算的综合能耗</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>外购电量(万 kWh)<input type="number" id="ce-power" step="100" value="5000" min="0" oninput="ENC.calcEmission()"></label>';
  html += '<label>电网排放因子(tCO₂ / 万 kWh)<input type="number" id="ce-pf" step="0.1" value="5.7" min="0" oninput="ENC.calcEmission()"></label>';
  html += '<label>燃煤消耗(吨标煤)<input type="number" id="ce-coal" step="100" value="10000" min="0" oninput="ENC.calcEmission()"></label>';
  html += '<label>燃煤排放因子(tCO₂ / 吨标煤)<input type="number" id="ce-coalf" step="0.01" value="2.66" min="0" oninput="ENC.calcEmission()"></label>';
  html += '<label>天然气(万 Nm³)<input type="number" id="ce-gas" step="10" value="200" min="0" oninput="ENC.calcEmission()"></label>';
  html += '<label>天然气排放因子(tCO₂ / 万 Nm³)<input type="number" id="ce-gasf" step="0.1" value="21.6" min="0" oninput="ENC.calcEmission()"></label>';
  html += '</div>';
  html += '<div id="ce-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 配额缺口与履约成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◧</span>配额缺口与履约成本测算器</h3>';
  html += '<p class="lab-desc">碳市场履约时,配额够不够、缺口要花多少钱补?填排放量、分配配额与价格,看<b>缺口、可用的抵消量、需购入配额与履约总成本</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年度排放量(万吨 CO₂)<input type="number" id="ca-emission" step="1" value="100" min="0" oninput="ENC.calcAllowance()"></label>';
  html += '<label>免费分配配额(万吨)<input type="number" id="ca-free" step="1" value="92" min="0" oninput="ENC.calcAllowance()"></label>';
  html += '<label>往年结余(万吨,可为负)<input type="number" id="ca-bank" step="1" value="0" oninput="ENC.calcAllowance()"></label>';
  html += '<label>CCER 抵消上限(%)<input type="number" id="ca-offset" step="1" value="5" min="0" max="100" oninput="ENC.calcAllowance()"></label>';
  html += '<label>配额价格(元 / 吨)<input type="number" id="ca-price" step="1" value="90" min="0" oninput="ENC.calcAllowance()"></label>';
  html += '<label>CCER 价格(元 / 吨)<input type="number" id="ca-ccer" step="1" value="70" min="0" oninput="ENC.calcAllowance()"></label>';
  html += '</div>';
  html += '<div id="ca-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 碳边境调节(CBAM)测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇥</span>碳边境调节(CBAM)测算器</h3>';
  html += '<p class="lab-desc">产品出口到有碳价的市场,会被补收多少碳成本?填出口量、产品内含排放与两地碳价,看<b>应缴碳量、净应缴金额与单吨产品碳成本</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>出口量(吨)<input type="number" id="cb-qty" step="1000" value="10000" min="0" oninput="ENC.calcCbam()"></label>';
  html += '<label>单位产品内含排放(tCO₂ / 吨)<input type="number" id="cb-embed" step="0.1" value="1.8" min="0" oninput="ENC.calcCbam()"></label>';
  html += '<label>进口方碳价(元 / 吨)<input type="number" id="cb-import" step="10" value="600" min="0" oninput="ENC.calcCbam()"></label>';
  html += '<label>本国已付碳价(元 / 吨)<input type="number" id="cb-paid" step="10" value="60" min="0" oninput="ENC.calcCbam()"></label>';
  html += '<label>免费配额抵扣比例(%)<input type="number" id="cb-free" step="5" value="40" min="0" max="100" oninput="ENC.calcCbam()"></label>';
  html += '</div>';
  html += '<div id="cb-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 绿电与绿证收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>绿电与绿证收益测算器</h3>';
  html += '<p class="lab-desc">卖绿电比卖普通电多挣多少?填电量、溢价与绿证单价,看<b>基础电费、环境溢价收入、绿证收入与可抵消的排放量</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>绿电交易电量(万 kWh)<input type="number" id="gp-power" step="100" value="5000" min="0" oninput="ENC.calcGreen()"></label>';
  html += '<label>火电基准价(元 / kWh)<input type="number" id="gp-base" step="0.01" value="0.38" min="0" oninput="ENC.calcGreen()"></label>';
  html += '<label>绿电环境溢价(元 / kWh)<input type="number" id="gp-premium" step="0.01" value="0.03" min="0" oninput="ENC.calcGreen()"></label>';
  html += '<label>绿证单价(元 / 张)<input type="number" id="gp-certprice" step="1" value="30" min="0" oninput="ENC.calcGreen()"></label>';
  html += '<label>交易模式<select id="gp-mode" onchange="ENC.calcGreen()"><option value="1" selected>证电合一</option><option value="0">证电分离</option></select></label>';
  html += '</div>';
  html += '<div id="gp-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 消纳责任权重达标测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>消纳责任权重达标测算器</h3>';
  html += '<p class="lab-desc">可再生能源消纳责任压下来,还差多少才达标?填总用电量、责任权重与已落实绿电,看<b>应消纳量、缺口、需补绿证数与达标成本</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>总用电量(亿 kWh)<input type="number" id="rp-total" step="1" value="100" min="0" oninput="ENC.calcRps()"></label>';
  html += '<label>消纳责任权重(%)<input type="number" id="rp-weight" step="1" value="25" min="0" max="100" oninput="ENC.calcRps()"></label>';
  html += '<label>已落实绿电(亿 kWh)<input type="number" id="rp-actual" step="1" value="20" min="0" oninput="ENC.calcRps()"></label>';
  html += '<label>绿证单价(元 / 张)<input type="number" id="rp-price" step="1" value="30" min="0" oninput="ENC.calcRps()"></label>';
  html += '<label>每张绿证对应电量(kWh)<input type="number" id="rp-unit" step="100" value="1000" min="1" oninput="ENC.calcRps()"></label>';
  html += '</div>';
  html += '<div id="rp-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 碳达峰时间与路径测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌒</span>碳达峰时间与路径测算器</h3>';
  html += '<p class="lab-desc">照现在的增速,哪一年能达峰?达峰后降得够不够快?填排放水平与增速,看<b>达峰年、峰值排放量与走向碳中和所需年数</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>当前排放(亿吨 CO₂)<input type="number" id="pk-now" step="1" value="120" min="0.1" oninput="ENC.calcPeak()"></label>';
  html += '<label>年均增长率(%)<input type="number" id="pk-growth" step="0.1" value="1.5" min="0" oninput="ENC.calcPeak()"></label>';
  html += '<label>目标峰值水平(亿吨)<input type="number" id="pk-target" step="1" value="130" min="0.1" oninput="ENC.calcPeak()"></label>';
  html += '<label>达峰后年均降速(%)<input type="number" id="pk-decline" step="0.5" value="3" min="0.1" max="99" oninput="ENC.calcPeak()"></label>';
  html += '<label>基线年(如 2025)<input type="number" id="pk-year" step="1" value="2025" min="2000" oninput="ENC.calcPeak()"></label>';
  html += '<label>碳中和目标年<input type="number" id="pk-netzero" step="1" value="2060" min="2030" oninput="ENC.calcPeak()"></label>';
  html += '</div>';
  html += '<div id="pk-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 减排措施成本排序器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≣</span>减排措施成本排序器</h3>';
  html += '<p class="lab-desc">手上几项减排措施,该先做哪个?填各自年化成本与年减排量,看<b>每项减一吨碳要花多少钱、按成本排序的优先级,以及和碳价比谁更划算</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>措施 A 年化成本(万元 / 年)<input type="number" id="ab-c1" step="1" value="60" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>措施 A 年减排量(tCO₂ / 年)<input type="number" id="ab-r1" step="10" value="2000" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>措施 B 年化成本(万元 / 年)<input type="number" id="ab-c2" step="1" value="30" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>措施 B 年减排量(tCO₂ / 年)<input type="number" id="ab-r2" step="10" value="800" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>措施 C 年化成本(万元 / 年)<input type="number" id="ab-c3" step="1" value="120" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>措施 C 年减排量(tCO₂ / 年)<input type="number" id="ab-r3" step="10" value="3000" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '<label>参考碳价(元 / 吨)<input type="number" id="ab-price" step="10" value="90" min="0" oninput="ENC.calcAbatement()"></label>';
  html += '</div>';
  html += '<div id="ab-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,排放因子、单价与比率取行业常见量级概数。<b>实际工作必须依据现行核算指南、区域电网因子、主管机构规则与真实市场数据单独核算</b>,本工具结果不作为碳核算、履约决策、投资测算、交易报价或合规审计依据。</p>';
  html += '</div>';

  ENC.render(html);
  ENC.calcEmission(); ENC.calcAllowance(); ENC.calcCbam(); ENC.calcGreen();
  ENC.calcRps(); ENC.calcPeak(); ENC.calcAbatement();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="calc-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 碳排放量测算 ---- */
ENC.calcEmission = function() {
  var power = ENC._num('ce-power'), pf = ENC._num('ce-pf');
  var coal = ENC._num('ce-coal'), coalf = ENC._num('ce-coalf');
  var gas = ENC._num('ce-gas'), gasf = ENC._num('ce-gasf');
  var el = document.getElementById('ce-result');
  if (power === null || pf === null || coal === null || coalf === null || gas === null || gasf === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var ePower = power * pf / 10000;            // 万吨 CO₂
  var eCoal = coal * coalf / 10000;           // 万吨
  var eGas = gas * gasf / 10000;              // 万吨
  var total = ePower + eCoal + eGas;          // 万吨
  // 折算综合能耗(吨标煤):电 1.229 tce/万kWh,煤直接为标煤,气 13.3 tce/万Nm³
  var tce = power * 1.229 + coal + gas * 13.3;
  var p1 = total > 0 ? ePower / total * 100 : 0;
  var p2 = total > 0 ? eCoal / total * 100 : 0;
  var p3 = total > 0 ? eGas / total * 100 : 0;
  var rows_ = [];
  rows_.push(tr('电力间接排放', ENC._w(ePower, 2) + ' 万吨 CO₂', '', '占 ' + ENC._fix(p1, 1) + '%'));
  rows_.push(tr('燃煤直接排放', ENC._w(eCoal, 2) + ' 万吨 CO₂', '', '占 ' + ENC._fix(p2, 1) + '%'));
  rows_.push(tr('天然气直接排放', ENC._w(eGas, 2) + ' 万吨 CO₂', '', '占 ' + ENC._fix(p3, 1) + '%'));
  rows_.push(tr('合计排放', ENC._w(total, 2) + ' 万吨 CO₂', 'bad'));
  rows_.push(tr('折算综合能耗', ENC._w(tce / 10000, 2) + ' 万吨标煤', 'mid'));
  rows_.push(tr('单位电量排放强度', power > 0 ? ENC._fix(total * 10000 / power, 2) + ' tCO₂ / 万 kWh' : '—', ''));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:这是核算里最基础的「活动数据 × 排放因子」两列相乘。你填的因子决定了结果量级,所以<b>因子取值比算式本身更重要</b>——电网因子要按区域与年度取现行值,燃料因子要按下位热值折算。<br>注意外购电属于范围二的间接排放,自烧的煤和气属于范围一的直接排放;两者口径不同,对外披露时要分开说。</p>';
};

/* ---- 2. 配额缺口与履约成本 ---- */
ENC.calcAllowance = function() {
  var emis = ENC._num('ca-emission'), free = ENC._num('ca-free'), bank = ENC._num('ca-bank');
  var off = ENC._num('ca-offset'), price = ENC._num('ca-price'), cprice = ENC._num('ca-ccer');
  var el = document.getElementById('ca-result');
  if (emis === null || free === null || bank === null || off === null || price === null || cprice === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var gap = emis - free - bank;                       // 缺口(万吨),可为负
  var offCap = emis * off / 100;                      // 抵消上限用量
  var offUse = gap > 0 ? Math.min(gap, offCap) : 0;
  var buy = Math.max(gap - offUse, 0);
  var costBuy = buy * price;                          // 万元
  var costOff = offUse * cprice;                      // 万元
  var costTotal = costBuy + costOff;
  var cls = gap > 0 ? 'bad' : 'ok';
  var rows_ = [];
  rows_.push(tr('配额缺口', (gap > 0 ? '+' : '') + ENC._w(gap, 2) + ' 万吨', cls, gap > 0 ? '缺口' : '盈余'));
  rows_.push(tr('可用的抵消量上限', ENC._w(offCap, 2) + ' 万吨', '', '按排放量 ' + off + '% 计'));
  rows_.push(tr('实际使用的抵消量', ENC._w(offUse, 2) + ' 万吨', 'mid'));
  rows_.push(tr('需购入配额', ENC._w(buy, 2) + ' 万吨', buy > 0 ? 'bad' : 'ok'));
  rows_.push(tr('购入配额成本', ENC._w(costBuy, 1) + ' 万元', 'bad'));
  rows_.push(tr('购买抵消量成本', ENC._w(costOff, 1) + ' 万元', 'mid'));
  rows_.push(tr('履约总成本', ENC._w(costTotal, 1) + ' 万元', costTotal > 0 ? 'bad' : 'ok'));
  rows_.push(tr('吨排放边际成本', emis > 0 ? ENC._fix(costTotal / emis, 2) + ' 元 / 吨' : '—', ''));
  var hint = gap > 0
    ? '读法:先看抵消量能顶多少。抵消比例通常设有上限(如 5%),不是有缺口就能全用抵消补;上限之内,谁的单价便宜先用谁。缺口越大,碳价每涨一块钱,履约成本放大的倍数越高。'
    : '读法:缺口为负说明配额是富余的,可以选择在市场上卖出,也可以留到以后年度使用(能否结转要看当年规则)。但要注意,富余往往是因为产量或排放下降,下一年度核定配额时可能同步收紧。';
  el.innerHTML = tbl(rows_) + '<p class="calc-hint">' + hint + '<br>另一个容易忽略的点:<b>配额价格与抵消量价格并不总是一起涨</b>。当抵消量政策收紧时,抵消量可能反而涨价,这时候优先买配额可能更划算——两者要一起比价。</p>';
};

/* ---- 3. 碳边境调节(CBAM) ---- */
ENC.calcCbam = function() {
  var qty = ENC._num('cb-qty'), embed = ENC._num('cb-embed');
  var impP = ENC._num('cb-import'), paidP = ENC._num('cb-paid'), freeP = ENC._num('cb-free');
  var el = document.getElementById('cb-result');
  if (qty === null || embed === null || impP === null || paidP === null || freeP === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var totalEmbed = qty * embed;                       // 吨 CO₂
  var chargeBase = totalEmbed * (1 - freeP / 100);    // 应缴碳量(吨)
  var chargeDue = chargeBase * impP / 10000;          // 万元
  var credit = chargeBase * paidP / 10000;            // 万元
  var net = Math.max(chargeDue - credit, 0);          // 万元
  var perTon = qty > 0 ? net * 10000 / qty : 0;       // 元 / 吨产品
  var rows_ = [];
  rows_.push(tr('产品总内含排放', ENC._w(totalEmbed, 1) + ' 吨 CO₂', 'bad'));
  rows_.push(tr('应缴碳量', ENC._w(chargeBase, 1) + ' 吨', '', '已扣免费配额 ' + freeP + '%'));
  rows_.push(tr('进口方应收碳费', ENC._w(chargeDue, 1) + ' 万元', 'bad'));
  rows_.push(tr('本国已付碳价可抵扣', ENC._w(credit, 1) + ' 万元', 'ok'));
  rows_.push(tr('CBAM 净应缴', ENC._w(net, 1) + ' 万元', net > 0 ? 'bad' : 'ok'));
  rows_.push(tr('单吨产品碳成本', ENC._w(perTon, 1) + ' 元 / 吨', 'mid'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:CBAM 的逻辑是「<b>在进口环节把没在本国付过的碳成本补齐</b>」,不是重复收税——所以本国已付的碳价可以抵扣,这也是为什么要建自己的碳市场。<br>免费配额抵扣比例是关键变量:进口方的免费配额会逐年退出,这一项每降一点,净应缴就往上抬一截。降低这项成本的正当办法是<b>真的把产品内含排放降下来、并保留可核查的碳数据</b>,而不是换个说法出口。</p>';
};

/* ---- 4. 绿电与绿证收益 ---- */
ENC.calcGreen = function() {
  var power = ENC._num('gp-power'), base = ENC._num('gp-base'), prem = ENC._num('gp-premium');
  var cp = ENC._num('gp-certprice');
  var unified = document.getElementById('gp-mode').value === '1';
  var el = document.getElementById('gp-result');
  if (power === null || base === null || prem === null || cp === null) { el.innerHTML = warn('请把四项都填上。'); return; }
  var kwh = power * 10000;                 // 万 kWh → kWh
  var baseRev = kwh * base / 10000;        // 万元
  var premRev = kwh * prem / 10000;        // 万元
  var certs = kwh / 1000;                  // 张(1 张 = 1000 kWh)
  var certRev = unified ? 0 : certs * cp / 10000;   // 万元(证电合一时溢价已含证价)
  var totalRev = baseRev + premRev + certRev;
  var offset = power * 5.7 / 10000;        // 万吨 CO₂(万 kWh × 因子 = tCO₂,再折万吨;按示例电网因子 5.7)
  var rows_ = [];
  rows_.push(tr('基础电费', ENC._w(baseRev, 1) + ' 万元'));
  rows_.push(tr('环境溢价收入', ENC._w(premRev, 1) + ' 万元', 'ok'));
  rows_.push(tr('绿证数量', ENC._w(certs / 10000, 2) + ' 万张', '', '1 张 = 1000 kWh'));
  rows_.push(tr('绿证收入', unified ? '并入溢价' : ENC._w(certRev, 1) + ' 万元', unified ? 'mid' : 'ok'));
  rows_.push(tr('合计收入', ENC._w(totalRev, 1) + ' 万元', 'ok'));
  rows_.push(tr('较普通电多挣', ENC._w(premRev + certRev, 1) + ' 万元', 'ok'));
  rows_.push(tr('可抵消排放', ENC._w(offset, 2) + ' 万吨 CO₂', 'mid', '按示例因子 5.7'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:证电合一还是证电分离,决定了溢价和证价是「一起算」还是「分开算」。前者一次成交、凭证随电量走;后者电量与绿证可以卖给不同的人,灵活性高但要注意别重复主张同一份环境属性。<br>要特别小心:<b>同一度绿电的环境属性只能主张一次</b>。既拿了绿电的溢价、又单独把绿证卖出去,就是重复计算,国际采购方查起来会直接不认。</p>';
};

/* ---- 5. 消纳责任权重达标 ---- */
ENC.calcRps = function() {
  var total = ENC._num('rp-total'), weight = ENC._num('rp-weight');
  var actual = ENC._num('rp-actual'), price = ENC._num('rp-price'), unit = ENC._num('rp-unit');
  var el = document.getElementById('rp-result');
  if (total === null || weight === null || actual === null || price === null || unit === null || unit <= 0) { el.innerHTML = warn('请把五项都填上,且每张绿证对应电量要大于 0。'); return; }
  var need = total * weight / 100;              // 亿 kWh
  var gap = Math.max(need - actual, 0);         // 亿 kWh
  var gapKwh = gap * 1e8;                       // kWh
  var certs = gapKwh / unit;                    // 张
  var cost = certs * price / 10000;             // 万元
  var rate = need > 0 ? actual / need * 100 : 100;
  var rows_ = [];
  rows_.push(tr('应消纳可再生能源电量', ENC._w(need, 2) + ' 亿 kWh'));
  rows_.push(tr('已落实绿电', ENC._w(actual, 2) + ' 亿 kWh'));
  rows_.push(tr('达标率', ENC._fix(rate, 1) + ' %', rate >= 100 ? 'ok' : 'bad'));
  rows_.push(tr('缺口电量', ENC._w(gap, 2) + ' 亿 kWh', gap > 0 ? 'bad' : 'ok'));
  rows_.push(tr('需补充绿证', gap > 0 ? ENC._w(certs / 10000, 2) + ' 万张' : '0 张', gap > 0 ? 'bad' : 'ok'));
  rows_.push(tr('达标成本', ENC._w(cost, 1) + ' 万元', gap > 0 ? 'mid' : 'ok'));
  var hint = gap > 0
    ? '读法:权重是按电量摊的,所以用电量越大、缺口越大。补缺口有两条路——<b>买绿电(物理电量带证)</b>或<b>单买绿证</b>。前者能同时改善用电结构与企业形象,后者更灵活、单价通常更低,但只买证不买电在部分考核口径里未必算数,要看清规则。'
    : '读法:已经达标,富余的可再生能源电量或绿证可以考虑对外交易。但要注意权重通常是逐年提高的,今年达标不等于明年不用补,规划时最好留出余量。';
  el.innerHTML = tbl(rows_) + '<p class="calc-hint">' + hint + '<br>另一个常被忽略的点:<b>外购绿电与自发自用绿电在考核中的地位可能不同</b>。企业在算账前,先把「哪些电量能计入本单位的消纳量」这条口径问清楚,否则容易白花钱。</p>';
};

/* ---- 6. 碳达峰时间与路径 ---- */
ENC.calcPeak = function() {
  var now = ENC._num('pk-now'), g = ENC._num('pk-growth'), target = ENC._num('pk-target');
  var d = ENC._num('pk-decline'), baseYear = ENC._num('pk-year'), netzero = ENC._num('pk-netzero');
  var el = document.getElementById('pk-result');
  if (now === null || g === null || target === null || d === null || baseYear === null || netzero === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  if (now <= 0 || target <= 0 || d <= 0 || d >= 100) { el.innerHTML = warn('排放水平与目标峰值要大于 0,降速要在 0~100% 之间。'); return; }
  var lines = [];
  var peakYear = null, yearsToPeak = null;
  if (target <= now) {
    lines.push(tr('达峰判断', '当前排放已不低于目标峰值', 'ok', '可视为已达峰或需立即压降'));
  } else if (g <= 0) {
    lines.push(tr('达峰判断', '按当前增长率无法达峰', 'bad', '增长率为 0 或负时排放不再上升'));
  } else {
    yearsToPeak = Math.log(target / now) / Math.log(1 + g / 100);
    peakYear = Math.round(baseYear + yearsToPeak);
    lines.push(tr('距目标峰值还需年数', ENC._fix(yearsToPeak, 1) + ' 年', 'mid'));
    lines.push(tr('预计达峰年份', String(peakYear) + ' 年', 'bad'));
  }
  var needZero = Math.max(netzero - (peakYear === null ? baseYear : peakYear), 0);
  var yearsToTen = Math.log(0.10) / Math.log(1 - d / 100);   // 从峰值降到峰值 10% 所需年数
  var yearsToFive = Math.log(0.05) / Math.log(1 - d / 100);
  var reachYear10 = (peakYear === null ? baseYear : peakYear) + Math.ceil(yearsToTen);
  lines.push(tr('峰值排放量', ENC._w(target, 2) + ' 亿吨 CO₂', 'mid'));
  lines.push(tr('从峰值降到 10%', ENC._fix(yearsToTen, 1) + ' 年', '', '即到 ' + reachYear10 + ' 年'));
  lines.push(tr('从峰值降到 5%', ENC._fix(yearsToFive, 1) + ' 年'));
  lines.push(tr('距碳中和目标年', ENC._w(needZero, 0) + ' 年', ''));
  var ok = reachYear10 <= netzero;
  lines.push(tr('降速是否够用', ok ? '按当前降速可赶上目标年' : '按当前降速偏慢,需更快下降', ok ? 'ok' : 'bad'));
  el.innerHTML = tbl(lines) +
    '<p class="calc-hint">读法:达峰只是中途站,真正难的是达峰之后那一段。<b>峰值定得越高,后面要降的幅度越大</b>;而降速是复利式的,早一年加速、效果会一路放大。所以政策上往往强调「尽早达峰」和「严格控制峰值水平」两件事一起做。<br>这里用的是指数模型,实际路径会受产业节奏、能源替代速度与技术突破影响,只能用来把握大致方向,不能当作预测。</p>';
};

/* ---- 7. 减排措施成本排序 ---- */
ENC.calcAbatement = function() {
  var c1 = ENC._num('ab-c1'), r1 = ENC._num('ab-r1');
  var c2 = ENC._num('ab-c2'), r2 = ENC._num('ab-r2');
  var c3 = ENC._num('ab-c3'), r3 = ENC._num('ab-r3');
  var ref = ENC._num('ab-price');
  var el = document.getElementById('ab-result');
  if (c1 === null || r1 === null || c2 === null || r2 === null || c3 === null || r3 === null || ref === null) { el.innerHTML = warn('请把七项都填上。'); return; }
  var list = [
    { name: 'A', cost: c1, red: r1 },
    { name: 'B', cost: c2, red: r2 },
    { name: 'C', cost: c3, red: r3 }
  ];
  list.forEach(function(x) { x.unit = x.red > 0 ? x.cost * 10000 / x.red : Infinity; });
  var ranked = list.slice().sort(function(a, b) { return a.unit - b.unit; });
  var totalRed = r1 + r2 + r3;
  var totalCost = c1 + c2 + c3;
  var avg = totalRed > 0 ? totalCost * 10000 / totalRed : 0;
  var rows_ = [];
  for (var i = 0; i < ranked.length; i++) {
    var x = ranked[i];
    var tag = x.unit <= ref ? '划算(低于碳价)' : '偏贵(高于碳价)';
    rows_.push(tr('第 ' + (i + 1) + ' 优 · 措施 ' + x.name, ENC._w(x.unit, 0) + ' 元 / 吨', x.unit <= ref ? 'ok' : 'bad', tag));
  }
  rows_.push(tr('合计年减排量', ENC._w(totalRed, 0) + ' tCO₂ / 年', 'ok'));
  rows_.push(tr('合计年化成本', ENC._w(totalCost, 1) + ' 万元 / 年', 'mid'));
  rows_.push(tr('加权平均减排成本', ENC._w(avg, 0) + ' 元 / 吨', 'mid'));
  rows_.push(tr('参考碳价', ENC._w(ref, 0) + ' 元 / 吨', ''));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:减排成本低于碳价的措施,自己动手比买配额划算,应该先做;高于碳价的,短期内买配额或买抵消量更经济——但这只是当期账。<br><b>别只看平均成本</b>:加权平均会把便宜和贵的措施混在一起,掩盖掉最有价值的那一项。真正有用的排序是「边际成本从低到高」,也就是这张表的顺序。另外,减排措施常有投资不可逆、实施周期长的特点,先排好队比急着全上更重要。</p>';
};
/* ===== 模块页 ===== */
ENC.views.module = function(id) {
  var mod = ENC.modules.find(function(m) { return m.id === id; });
  if (!mod) { ENC.views.home(); return; }
  var P = ENC.progress();
  var lessons = ENC.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + ENC.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + ENC.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = ENC.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + ENC.esc(title) + '</a>';
    else html += '<span class="title">' + ENC.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及法规条文、政策口径、电价机制、碳市场规则或核算标准，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>。请以现行有效的法律、行政法规、部门规章、国家标准(GB)与主管机构发布的现行规则、办法及交易细则为准。本站不构成投资、交易、报价、审计或法律意见。</p></div>';
  html += '</div>';
  ENC.render(html);
};

/* ===== 术语 ===== */
ENC.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>能源政策与碳市场名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 双碳 / 碳配额 / 碳价 / CCER / 绿证 / 排放因子 / CBAM" oninput="ENC.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(ENC.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与法规文件、标准文本与市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅文件原文与专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  ENC.render(html);
};
ENC.filterTerms = function(q) {
  var filtered = ENC.terms;
  if (q) { q = q.toLowerCase();
    filtered = ENC.terms.filter(function(t) {
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
    html += '<div class="term-name">' + ENC.esc(t.name) + ' <span class="term-en">' + ENC.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + ENC.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + ENC.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
ENC.views.myTerms = function() {
  var P = ENC.progress(); var collected = [];
  for (var i = 0; i < ENC.terms.length; i++) if (P.hasTerm(ENC.terms[i].id)) collected.push(ENC.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  ENC.render(html);
};

/* ===== 搜索 ===== */
ENC.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 双碳 / 碳配额 / 碳价 / CCER / 绿证 / 排放因子 / CBAM" oninput="ENC.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  ENC.render(html);
};
ENC.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ENC.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + ENC.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + ENC.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
ENC.views.settings = function() {
  var P = ENC.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="ENC.setTheme(\'dark\')">深色 · 亮叶绿</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="ENC.setTheme(\'light\')">浅色 · 墨绿</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="ENC.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="ENC.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="ENC.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = ENC.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/enc-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/enc-progress" value="' + ENC.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + ENC.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + ENC.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + ENC.esc(ENC.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="ENC.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="ENC.clearData()">清除数据</button></div>';
  html += '</div>';
  ENC.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    ENC.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!ENC.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    ENC.sync.pullNow().then(function () { return ENC.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + ENC.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    ENC.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : ENC.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    ENC.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
ENC.setTheme = function(t) { document.documentElement.dataset.theme = t; ENC.progress().setPref('theme', t); ENC.views.settings(); };
ENC.setFontSize = function(s) { document.documentElement.dataset.fs = s; ENC.progress().setPref('fontSize', s); ENC.views.settings(); };
ENC.exportData = function() {
  var data = ENC.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'enc-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
ENC.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('enc.progress.v1');
    window.location.reload();
  }
};
