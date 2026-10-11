/* 工具视图:七件电力现货与交易实务互动工具(购电成本与现货占比 / 报价中标与收益 / 偏差考核 / 辅助服务收益 / 容量需求与缺失资金 / 价格预测与敞口成本 / 交易敞口与风险估算)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成投资、交易、报价或结算依据。 */
window.SPOT = window.SPOT || {};
SPOT.views = SPOT.views || {};

SPOT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
SPOT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
SPOT._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
SPOT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">电力现货这件事,很多判断可以先算一算:<b>中长期和现货怎么配比才划算、报什么价能中标又能赚钱、偏差超了要罚多少、提供辅助服务能挣多少、容量补偿应该给多少钱、价格预测不准会让成本偏多少、手里的持仓敞口有多大风险</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:电价、单价、考核标准与市场参数为便于理解的示例概数,不体现真实的出清算法、结算规则、考核细则与市场价格。<b>不作为交易决策、报价、投资测算或结算依据。</b>实际工作须以现行市场规则、结算办法、交易中心公告与企业台账为准。</p>';
  html += '</div>';

  // 1. 购电成本与现货占比测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>购电成本与现货占比测算器</h3>';
  html += '<p class="lab-desc">中长期签多少、现货买多少,一年电费差多少?看<b>中长期与现货各花多少、加权均价、相对全中长期基准省了还是多了、偏差考核又要掏多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>总用电量(万 kWh)<input type="number" id="sc-total" step="100" value="6000" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>现货敞口比例(%)<input type="number" id="sc-ratio" step="1" value="20" min="0" max="100" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>中长期电价(元/kWh)<input type="number" id="sc-mt" step="0.01" value="0.42" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>日前均价(元/kWh)<input type="number" id="sc-da" step="0.01" value="0.38" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>实时均价(元/kWh)<input type="number" id="sc-rt" step="0.01" value="0.45" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>偏差率(%)<input type="number" id="sc-dev" step="1" value="3" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '<label>偏差考核单价(元/kWh)<input type="number" id="sc-pen" step="0.01" value="0.10" min="0" oninput="SPOT.calcSpotCost()"></label>';
  html += '</div>';
  html += '<div id="sc-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 报价中标与收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◧</span>报价中标与收益测算器</h3>';
  html += '<p class="lab-desc">报多少钱才既中标又赚钱?填容量、报价与出清价,看<b>能不能中标、中标多少电量、发多少收入、毛利润与度电毛利</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>机组容量(万 kW)<input type="number" id="br-cap" step="1" value="30" min="0" oninput="SPOT.calcBidRevenue()"></label>';
  html += '<label>可发电小时(h)<input type="number" id="br-hours" step="100" value="4000" min="0" oninput="SPOT.calcBidRevenue()"></label>';
  html += '<label>报价(元/kWh)<input type="number" id="br-bid" step="0.01" value="0.40" min="0" oninput="SPOT.calcBidRevenue()"></label>';
  html += '<label>变动成本(元/kWh)<input type="number" id="br-cost" step="0.01" value="0.30" min="0" oninput="SPOT.calcBidRevenue()"></label>';
  html += '<label>出清价(元/kWh)<input type="number" id="br-clear" step="0.01" value="0.45" min="0" oninput="SPOT.calcBidRevenue()"></label>';
  html += '<label>中标比例(%)<input type="number" id="br-ratio" step="1" value="85" min="0" max="100" oninput="SPOT.calcBidRevenue()"></label>';
  html += '</div>';
  html += '<div id="br-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 偏差考核测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇥</span>偏差考核测算器</h3>';
  html += '<p class="lab-desc">计划 1000 万度实际用了 1060 万度,超了要罚多少钱?填计划、实际与免考核带宽,看<b>偏差量、偏差率、超出带宽的电量与考核费用</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>计划电量(万 kWh)<input type="number" id="dev-plan" step="10" value="1000" min="0" oninput="SPOT.calcDeviation()"></label>';
  html += '<label>实际电量(万 kWh)<input type="number" id="dev-actual" step="10" value="1060" min="0" oninput="SPOT.calcDeviation()"></label>';
  html += '<label>免考核带宽(%)<input type="number" id="dev-band" step="0.5" value="2" min="0" oninput="SPOT.calcDeviation()"></label>';
  html += '<label>考核单价(元/kWh)<input type="number" id="dev-pen" step="0.01" value="0.10" min="0" oninput="SPOT.calcDeviation()"></label>';
  html += '</div>';
  html += '<div id="dev-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 辅助服务收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>辅助服务收益测算器</h3>';
  html += '<p class="lab-desc">机组除了卖电,给电网打下手能挣多少?填可调容量与各市场价格,看<b>容量补偿、调频里程、调峰电量三块收益与合计、各自占比</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可调节容量(万 kW)<input type="number" id="ar-cap" step="1" value="10" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '<label>容量补偿单价(元/kW·年)<input type="number" id="ar-capprice" step="5" value="50" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '<label>年调频调用小时(h)<input type="number" id="ar-hours" step="50" value="500" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '<label>调频里程单价(元/kWh)<input type="number" id="ar-mileage" step="0.01" value="0.30" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '<label>年调峰电量(万 kWh)<input type="number" id="ar-peak" step="100" value="2000" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '<label>调峰单价(元/kWh)<input type="number" id="ar-peakprice" step="0.01" value="0.15" min="0" oninput="SPOT.calcAncillaryRevenue()"></label>';
  html += '</div>';
  html += '<div id="ar-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 容量需求与缺失资金测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌒</span>容量需求与缺失资金测算器</h3>';
  html += '<p class="lab-desc">光靠卖电养不活机组怎么办?填峰荷、固定成本与能量市场参数,看<b>需要多少容量、固定成本能否被能量市场覆盖、缺多少、对应的容量补偿单价是多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年最大负荷(万 kW)<input type="number" id="cn-peak" step="100" value="5000" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '<label>备用率(%)<input type="number" id="cn-reserve" step="1" value="15" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '<label>机组年固定成本(万元/万 kW)<input type="number" id="cn-fixed" step="10" value="300" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '<label>年利用小时(h)<input type="number" id="cn-hours" step="100" value="2500" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '<label>能量市场均价(元/kWh)<input type="number" id="cn-price" step="0.01" value="0.40" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '<label>变动成本(元/kWh)<input type="number" id="cn-varcost" step="0.01" value="0.30" min="0" oninput="SPOT.calcCapacityNeed()"></label>';
  html += '</div>';
  html += '<div id="cn-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 价格预测与敞口成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≣</span>价格预测与敞口成本测算器</h3>';
  html += '<p class="lab-desc">现货价格猜错了,成本会偏多少?填总电量、敞口比例与预测/实际价格,看<b>预测成本、实际成本、成本偏差,以及不同敞口水平下偏差会放大到多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>总用电量(万 kWh)<input type="number" id="pf-total" step="100" value="6000" min="0" oninput="SPOT.calcPriceForecast()"></label>';
  html += '<label>现货敞口比例(%)<input type="number" id="pf-exposure" step="1" value="20" min="0" max="100" oninput="SPOT.calcPriceForecast()"></label>';
  html += '<label>中长期电价(元/kWh)<input type="number" id="pf-mt" step="0.01" value="0.42" min="0" oninput="SPOT.calcPriceForecast()"></label>';
  html += '<label>预测现货价(元/kWh)<input type="number" id="pf-fcast" step="0.01" value="0.40" min="0" oninput="SPOT.calcPriceForecast()"></label>';
  html += '<label>实际现货价(元/kWh)<input type="number" id="pf-actual" step="0.01" value="0.50" min="0" oninput="SPOT.calcPriceForecast()"></label>';
  html += '</div>';
  html += '<div id="pf-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 交易敞口与风险测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>交易敞口与风险测算器</h3>';
  html += '<p class="lab-desc">手里攥着没锁价的电,风险到底多大?填持仓、已锁价与波动率,看<b>敞口电量、敞口货值、单日风险值(简化 VaR)与敞口占比,以及把敞口降下来后风险能小多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>总持仓电量(万 kWh)<input type="number" id="tr-position" step="100" value="5000" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '<label>已锁价电量(万 kWh)<input type="number" id="tr-locked" step="100" value="3500" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '<label>锁价(元/kWh)<input type="number" id="tr-lockprice" step="0.01" value="0.42" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '<label>当前现货价(元/kWh)<input type="number" id="tr-spot" step="0.01" value="0.45" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '<label>现货日波动率(%)<input type="number" id="tr-vol" step="1" value="8" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '<label>置信系数(1.65≈95%,2.33≈99%)<input type="number" id="tr-conf" step="0.01" value="1.65" min="0" oninput="SPOT.calcTradingRisk()"></label>';
  html += '</div>';
  html += '<div id="tr-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,单价与比率取行业常见量级概数。<b>实际工作必须依据现行市场规则、结算细则与真实数据单独核算</b>,本工具结果不作为交易决策、报价、投资测算或合规依据。</p>';
  html += '</div>';

  SPOT.render(html);
  SPOT.calcSpotCost(); SPOT.calcBidRevenue(); SPOT.calcDeviation(); SPOT.calcAncillaryRevenue();
  SPOT.calcCapacityNeed(); SPOT.calcPriceForecast(); SPOT.calcTradingRisk();
};

function tr(name, val, cls, note) {
  var map = { ok: 'cr-good', bad: 'cr-bad', mid: 'cr-warn', warn: 'cr-warn' };
  var c = map[cls] || cls || '';
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + c + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="cr-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 购电成本与现货占比 ---- */
SPOT.calcSpotCost = function() {
  var total = SPOT._num('sc-total'), ratio = SPOT._num('sc-ratio'), mt = SPOT._num('sc-mt');
  var da = SPOT._num('sc-da'), rt = SPOT._num('sc-rt'), dev = SPOT._num('sc-dev'), pen = SPOT._num('sc-pen');
  var el = document.getElementById('sc-result');
  if (!el) return;
  if (total === null || ratio === null || mt === null || da === null || rt === null || dev === null || pen === null) {
    el.innerHTML = warn('请把七项都填上。'); return;
  }
  var spotQty = total * ratio / 100;                    // 万 kWh
  var mtQty = total - spotQty;                          // 万 kWh
  var spotPrice = da * 0.7 + rt * 0.3;                  // 元/kWh
  var spotCost = spotQty * spotPrice;                   // 万元
  var mtCost = mtQty * mt;                              // 万元
  var totalCost = mtCost + spotCost;                    // 万元
  var avgPrice = total > 0 ? totalCost / total : 0;     // 元/kWh
  var base = total * mt;                                // 万元(全中长期基准)
  var diff = totalCost - base;                          // 万元(负数=更省)
  var devCost = total * dev / 100 * pen;                // 万元
  var compCost = totalCost + devCost;                   // 万元
  var compPrice = total > 0 ? compCost / total : 0;     // 元/kWh
  var rows_ = [];
  rows_.push(tr('中长期电量', SPOT._w(mtQty, 2) + ' 万 kWh', '', '占 ' + SPOT._w(100 - ratio, 1) + '%'));
  rows_.push(tr('现货敞口电量', SPOT._w(spotQty, 2) + ' 万 kWh', '', '占 ' + SPOT._w(ratio, 1) + '%'));
  rows_.push(tr('现货综合价', SPOT._w(spotPrice, 4) + ' 元/kWh', '', '日前 ' + SPOT._w(da, 4) + ' × 70% + 实时 ' + SPOT._w(rt, 4) + ' × 30%'));
  rows_.push(tr('中长期成本', SPOT._w(mtCost, 2) + ' 万元', '', SPOT._w(mtQty, 2) + ' 万 kWh × ' + SPOT._w(mt, 4) + ' 元/kWh'));
  rows_.push(tr('现货成本', SPOT._w(spotCost, 2) + ' 万元', '', SPOT._w(spotQty, 2) + ' 万 kWh × ' + SPOT._w(spotPrice, 4) + ' 元/kWh'));
  rows_.push(tr('购电总成本', SPOT._w(totalCost, 2) + ' 万元', 'mid', '中长期成本 + 现货成本'));
  rows_.push(tr('加权均价', SPOT._w(avgPrice, 4) + ' 元/kWh', '', '购电总成本 ÷ 总用电量'));
  rows_.push(tr('全中长期基准', SPOT._w(base, 2) + ' 万元', '', '总用电量 × 中长期电价'));
  rows_.push(tr('相对基准差额',
    (diff > 0 ? '多花 ' + SPOT._w(diff, 2) : (diff < 0 ? '省 ' + SPOT._w(-diff, 2) : '持平')) + ' 万元',
    diff > 0 ? 'bad' : (diff < 0 ? 'ok' : ''), '购电总成本 − 全中长期基准'));
  rows_.push(tr('偏差考核费用', SPOT._w(devCost, 2) + ' 万元', devCost > 0 ? 'bad' : 'ok', '总用电量 × ' + SPOT._w(dev, 1) + '% × ' + SPOT._w(pen, 2) + ' 元/kWh'));
  rows_.push(tr('综合成本(含考核)', SPOT._w(compCost, 2) + ' 万元', 'mid', '购电总成本 + 偏差考核'));
  rows_.push(tr('综合单价', SPOT._w(compPrice, 4) + ' 元/kWh', '', '综合成本 ÷ 总用电量'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:先看「加权均价」和中长期电价谁低——现货敞口越大,均价越跟着现货走,日前实时便宜时它是省钱的来源,贵时就是成本黑洞。再看「相对基准差额」:显示「省 X 万元」说明这个配比优于全中长期采购,显示「多花 X 万元」则说明敞口这一段买贵了。<br>最后两行别漏:偏差考核与电价高低无关,只跟偏差率和考核单价挂钩,是一笔容易被忽略的固定扣分项。</p>';
};

/* ---- 2. 报价中标与收益 ---- */
SPOT.calcBidRevenue = function() {
  var cap = SPOT._num('br-cap'), hours = SPOT._num('br-hours'), bid = SPOT._num('br-bid');
  var cost = SPOT._num('br-cost'), clear = SPOT._num('br-clear'), ratio = SPOT._num('br-ratio');
  var el = document.getElementById('br-result');
  if (!el) return;
  if (cap === null || hours === null || bid === null || cost === null || clear === null || ratio === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  var able = cap * hours;                               // 可发电量(万 kWh)
  var win = bid <= clear;                               // 报价 ≤ 出清价 才中标
  var winQty = win ? able * ratio / 100 : 0;            // 中标电量(万 kWh)
  var revenue = winQty * clear;                         // 万元
  var varCost = winQty * cost;                          // 万元
  var profit = revenue - varCost;                       // 万元
  var unitProfit = winQty > 0 ? profit / winQty : 0;    // 元/kWh
  var rows_ = [];
  rows_.push(tr('可发电量', SPOT._w(able, 2) + ' 万 kWh', '', SPOT._w(cap, 2) + ' 万 kW × ' + SPOT._w(hours, 0) + ' h'));
  rows_.push(tr('报价', SPOT._w(bid, 4) + ' 元/kWh', '', '出清价 ' + SPOT._w(clear, 4) + ' 元/kWh'));
  rows_.push(tr('中标判定', win ? '中标' : '未中标:报价高于出清价', win ? 'ok' : 'bad',
    win ? '报价 ≤ 出清价,进入出清' : '报价 > 出清价,按不中标处理'));
  rows_.push(tr('中标比例', SPOT._w(win ? ratio : 0, 1) + ' %', '', win ? '按中标比例折算电量' : '未中标,不计电量'));
  rows_.push(tr('中标电量', SPOT._w(winQty, 2) + ' 万 kWh', win ? 'mid' : 'bad', '可发电量 × 中标比例'));
  rows_.push(tr('收入', SPOT._w(revenue, 2) + ' 万元', '', '中标电量 × 出清价'));
  rows_.push(tr('变动成本', SPOT._w(varCost, 2) + ' 万元', '', '中标电量 × 变动成本 ' + SPOT._w(cost, 4) + ' 元/kWh'));
  rows_.push(tr('毛利润', SPOT._w(profit, 2) + ' 万元', profit > 0 ? 'ok' : (profit < 0 ? 'bad' : ''), '收入 − 变动成本'));
  rows_.push(tr('度电毛利', SPOT._w(unitProfit, 4) + ' 元/kWh', profit > 0 ? 'ok' : (profit < 0 ? 'bad' : ''),
    winQty > 0 ? '毛利润 ÷ 中标电量' : '未中标,无度电毛利'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:这张表先回答「能不能中」,再回答「中了赚不赚」。<b>能不能中标只看报价 ≤ 出清价</b>,报价越低越容易中;而赚不赚看的是「出清价 − 变动成本」,和你报多少无关——报价只决定中标与否,不决定结算价。<br>这也解释了为什么报价要贴近自己的边际成本:报高了中不了,报低了中了也是按出清价结算、并不会少赚;但在竞争激烈、按报价排序出清时,报高一点可能就被更低的报价挤出局。</p>';
};

/* ---- 3. 偏差考核 ---- */
SPOT.calcDeviation = function() {
  var plan = SPOT._num('dev-plan'), actual = SPOT._num('dev-actual');
  var band = SPOT._num('dev-band'), pen = SPOT._num('dev-pen');
  var el = document.getElementById('dev-result');
  if (!el) return;
  if (plan === null || actual === null || band === null || pen === null) {
    el.innerHTML = warn('请把四项都填上。'); return;
  }
  var diff = actual - plan;                             // 万 kWh
  var rate = plan !== 0 ? diff / plan * 100 : 0;        // %
  var over = Math.max(Math.abs(rate) - band, 0);        // 超出带宽的百分点
  var penQty = plan * over / 100;                       // 考核电量(万 kWh)
  var fee = penQty * pen;                               // 万元
  var dir = diff > 0 ? '正偏差(多用)' : (diff < 0 ? '负偏差(少用)' : '无偏差');
  var rows_ = [];
  rows_.push(tr('计划电量', SPOT._w(plan, 2) + ' 万 kWh'));
  rows_.push(tr('实际电量', SPOT._w(actual, 2) + ' 万 kWh'));
  rows_.push(tr('偏差量', (diff > 0 ? '+' : '') + SPOT._w(diff, 2) + ' 万 kWh', '', dir));
  rows_.push(tr('偏差率', (rate > 0 ? '+' : '') + SPOT._w(rate, 2) + ' %', Math.abs(rate) > band ? 'bad' : 'ok', '偏差量 ÷ 计划电量'));
  rows_.push(tr('免考核带宽', '± ' + SPOT._w(band, 2) + ' %', '', '带宽以内不考核'));
  rows_.push(tr('超出带宽', SPOT._w(over, 2) + ' 个百分点', over > 0 ? 'bad' : 'ok', over > 0 ? '|偏差率| − 免考核带宽' : '在免考核带宽内'));
  rows_.push(tr('考核电量', SPOT._w(penQty, 2) + ' 万 kWh', over > 0 ? 'bad' : 'ok', '计划电量 × 超出带宽百分点'));
  rows_.push(tr('考核费用', SPOT._w(fee, 2) + ' 万元', over > 0 ? 'bad' : 'ok', '考核电量 × 考核单价'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:考核不是「超一点就罚」,而是<b>先把免考核带宽刨掉,只对超出的百分点计费</b>——偏差率 6%、带宽 2%,真正计费的只有 4 个百分点;如果偏差率落在带宽以内,考核费用直接为 0,表里会提示「在免考核带宽内」。<br>方向也要看:<b>实际多于计划是「正偏差(多用)」,少于是「负偏差(少用)」</b>,不少市场对两者的考核单价并不对称。想少掏这笔钱,关键是把内部计量、申报口径与生产计划对齐,并给自己留出带宽余量。</p>';
};

/* ---- 4. 辅助服务收益 ---- */
SPOT.calcAncillaryRevenue = function() {
  var cap = SPOT._num('ar-cap'), capPrice = SPOT._num('ar-capprice'), hours = SPOT._num('ar-hours');
  var mileage = SPOT._num('ar-mileage'), peak = SPOT._num('ar-peak'), peakPrice = SPOT._num('ar-peakprice');
  var el = document.getElementById('ar-result');
  if (!el) return;
  if (cap === null || capPrice === null || hours === null || mileage === null || peak === null || peakPrice === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  // 万 kW × 元/kW = 万元;万 kWh × 元/kWh = 万元
  var r1 = cap * capPrice;                              // 容量补偿收益(万元)
  var r2 = cap * hours * mileage;                       // 调频里程收益(万元)
  var r3 = peak * peakPrice;                            // 调峰收益(万元)
  var total = r1 + r2 + r3;
  var pct = function(x) { return total > 0 ? x / total * 100 : 0; };
  var rows_ = [];
  rows_.push(tr('容量补偿收益', SPOT._w(r1, 2) + ' 万元', 'mid', '可调节容量 × 容量补偿单价,占 ' + SPOT._w(pct(r1), 1) + '%'));
  rows_.push(tr('调频里程收益', SPOT._w(r2, 2) + ' 万元', 'mid', '可调节容量 × 调用小时 × 里程单价,占 ' + SPOT._w(pct(r2), 1) + '%'));
  rows_.push(tr('调峰收益', SPOT._w(r3, 2) + ' 万元', 'mid', '年调峰电量 × 调峰单价,占 ' + SPOT._w(pct(r3), 1) + '%'));
  rows_.push(tr('辅助服务合计', SPOT._w(total, 2) + ' 万元', 'ok', '三块收益之和'));
  rows_.push(tr('折算年利用小时', (cap > 0 ? SPOT._w(hours, 0) + ' h' : '—'), '', '调频调用小时,衡量被调用强度'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:三块收益的成因完全不同——<b>容量补偿</b>买的是「随时待命的能力」,和发多少电无关,只跟可调节容量与补偿单价挂钩;<b>调频里程</b>买的是「动得多快」,按调用小时与里程计价,是可调节容量再乘上调用强度;<b>调峰</b>买的是「低谷多发、高峰压减」的电量,按调峰电量计价。<br>看占比判断这门生意靠什么撑着:如果调频一项独大,那么「不调用就没收益」,机组灵活性本身的价值反而被低估了;有多条腿才算稳。</p>';
};

/* ---- 5. 容量需求与缺失资金 ---- */
SPOT.calcCapacityNeed = function() {
  var peak = SPOT._num('cn-peak'), reserve = SPOT._num('cn-reserve'), fixed = SPOT._num('cn-fixed');
  var hours = SPOT._num('cn-hours'), price = SPOT._num('cn-price'), varCost = SPOT._num('cn-varcost');
  var el = document.getElementById('cn-result');
  if (!el) return;
  if (peak === null || reserve === null || fixed === null || hours === null || price === null || varCost === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  var need = peak * (1 + reserve / 100);                // 需求容量(万 kW)
  var fixedTotal = need * fixed;                        // 固定成本总额(万元)
  var gen = need * hours;                               // 年发电量(万 kWh)
  var unitMargin = price - varCost;                     // 单位能量毛利(元/kWh)
  var energyMargin = gen * unitMargin;                  // 能量市场毛利(万元)
  var short = Math.max(fixedTotal - energyMargin, 0);   // 缺失资金(万元)
  var surplus = Math.max(energyMargin - fixedTotal, 0); // 盈余(万元)
  var capPrice = need > 0 ? short / need : 0;           // 万元/万 kW = 元/kW
  var rows_ = [];
  rows_.push(tr('需求容量', SPOT._w(need, 2) + ' 万 kW', '', '峰荷 × (1 + 备用率 ' + SPOT._w(reserve, 1) + '%)'));
  rows_.push(tr('固定成本总额', SPOT._w(fixedTotal, 2) + ' 万元', '', '需求容量 × ' + SPOT._w(fixed, 2) + ' 万元/万 kW'));
  rows_.push(tr('年发电量', SPOT._w(gen, 2) + ' 万 kWh', '', '需求容量 × 年利用小时 ' + SPOT._w(hours, 0) + ' h'));
  rows_.push(tr('单位能量毛利', SPOT._w(unitMargin, 4) + ' 元/kWh', unitMargin > 0 ? '' : 'bad', '能量市场均价 − 变动成本'));
  rows_.push(tr('能量市场毛利', SPOT._w(energyMargin, 2) + ' 万元', 'mid', '年发电量 × 单位能量毛利'));
  rows_.push(tr('缺失资金', SPOT._w(short, 2) + ' 万元', short > 0 ? 'bad' : 'ok', short > 0 ? '固定成本总额 − 能量市场毛利' : '能量市场收益已能覆盖固定成本'));
  rows_.push(tr('所需容量补偿单价', SPOT._w(capPrice, 2) + ' 元/kW·年', short > 0 ? 'bad' : 'ok',
    '缺失资金 ÷ 需求容量(万元/万 kW,即元/kW)'));
  rows_.push(tr('覆盖情况', short > 0 ? '仍需容量补偿 ' + SPOT._w(short, 2) + ' 万元'
    : '能量市场收益已能覆盖固定成本,盈余 ' + SPOT._w(surplus, 2) + ' 万元',
    short > 0 ? 'bad' : 'ok'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:容量机制要回答的其实是「<b>只靠在能量市场卖电,机组的固定成本收不收得回来</b>」。这里把机组的固定成本单列出来,再拿能量市场的毛利去冲抵:缺口就是需要容量补偿去补的那块。<br>注意最后一行换算——「万元 ÷ 万 kW」正好等于「元/kW」,所以算出来的缺失资金除以需求容量,直接就是每千瓦每年该补多少钱。也可以反过来读:机组年利用小时越低、能量市场均价越便宜,缺失资金越大,需要的容量补偿单价就越高,这正是「尖峰机组靠电量收入养不活、必须靠容量价值补偿」的经济学含义。</p>';
};

/* ---- 6. 价格预测与敞口成本 ---- */
SPOT.calcPriceForecast = function() {
  var total = SPOT._num('pf-total'), exposure = SPOT._num('pf-exposure');
  var mt = SPOT._num('pf-mt'), fcast = SPOT._num('pf-fcast'), actual = SPOT._num('pf-actual');
  var el = document.getElementById('pf-result');
  if (!el) return;
  if (total === null || exposure === null || mt === null || fcast === null || actual === null) {
    el.innerHTML = warn('请把五项都填上。'); return;
  }
  var exQty = total * exposure / 100;                   // 敞口电量(万 kWh)
  var lockQty = total - exQty;                          // 锁价电量(万 kWh)
  var lockCost = lockQty * mt;                          // 锁价部分成本(万元)
  var fCost = lockCost + exQty * fcast;                 // 预测成本(万元)
  var aCost = lockCost + exQty * actual;                // 实际成本(万元)
  var dev = aCost - fCost;                              // 成本偏差(万元)
  var errPct = fcast !== 0 ? (actual - fcast) / fcast * 100 : 0;   // 预测误差率(%)
  var rows_ = [];
  rows_.push(tr('锁价电量', SPOT._w(lockQty, 2) + ' 万 kWh', '', '占 ' + SPOT._w(100 - exposure, 1) + '%'));
  rows_.push(tr('敞口电量', SPOT._w(exQty, 2) + ' 万 kWh', '', '占 ' + SPOT._w(exposure, 1) + '%'));
  rows_.push(tr('预测成本', SPOT._w(fCost, 2) + ' 万元', 'mid', '锁价电量 × 中长期电价 + 敞口电量 × 预测现货价'));
  rows_.push(tr('实际成本', SPOT._w(aCost, 2) + ' 万元', dev > 0 ? 'bad' : (dev < 0 ? 'ok' : ''), '锁价电量 × 中长期电价 + 敞口电量 × 实际现货价'));
  rows_.push(tr('成本偏差', (dev > 0 ? '+' : '') + SPOT._w(dev, 2) + ' 万元', dev > 0 ? 'bad' : (dev < 0 ? 'ok' : ''), dev > 0 ? '实际高于预测(多花)' : (dev < 0 ? '实际低于预测(少花)' : '无偏差')));
  rows_.push(tr('预测误差率', (errPct > 0 ? '+' : '') + SPOT._w(errPct, 2) + ' %', '', '(实际现货价 − 预测现货价) ÷ 预测现货价'));
  var sens = [];
  var exposures = [0, 10, 20, 30];
  var base0 = total * mt;                                // 敞口 0% 的实际成本
  for (var i = 0; i < exposures.length; i++) {
    var e = exposures[i];
    var q = total * e / 100;
    var c = (total - q) * mt + q * actual;
    var d = c - base0;
    sens.push(tr('敞口 ' + SPOT._w(e, 0) + '%', SPOT._w(c, 2) + ' 万元', e === exposure ? 'mid' : '',
      '较敞口 0% 偏差 ' + (d > 0 ? '+' : '') + SPOT._w(d, 2) + ' 万元'));
  }
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note" style="margin-top:16px"><b>敞口敏感性:同样的实际现货价,敞口越大成本偏差越大</b></p>' +
    tbl(sens) +
    '<p class="calc-hint">读法:先看「成本偏差」和「预测误差率」——这两行回答的是同一件事的两种说法:现货价猜低了多少(误差率),以及这个错误把你的总成本抬高了多少(成本偏差)。<br>更关键的是下面那张小表:<b>把同样的实际现货价,分别套在 0% / 10% / 20% / 30% 的敞口上</b>,你会看到成本偏差随着敞口成比例放大——敞口 0% 时完全不受现货价影响,敞口 30% 时偏差被放大 1.5 倍。这就是为什么「预测不准」本身不是最可怕的,<b>在没有判断时暴露过大的敞口才是</b>。</p>';
};

/* ---- 7. 交易敞口与风险 ---- */
SPOT.calcTradingRisk = function() {
  var pos = SPOT._num('tr-position'), locked = SPOT._num('tr-locked'), lockPrice = SPOT._num('tr-lockprice');
  var spot = SPOT._num('tr-spot'), vol = SPOT._num('tr-vol'), conf = SPOT._num('tr-conf');
  var el = document.getElementById('tr-result');
  if (!el) return;
  if (pos === null || locked === null || lockPrice === null || spot === null || vol === null || conf === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (locked > pos) {
    el.innerHTML = warn('已锁价电量不能大于总持仓:已锁价 ' + SPOT._w(locked, 2) + ' 万 kWh,总持仓 ' + SPOT._w(pos, 2) + ' 万 kWh。'); return;
  }
  var ex = Math.max(pos - locked, 0);                   // 敞口电量(万 kWh)
  var exRatio = pos > 0 ? ex / pos * 100 : 0;           // 敞口占比(%)
  var lockCost = locked * lockPrice;                    // 锁价成本(万元)
  var exValue = ex * spot;                              // 敞口货值(万元)
  var risk = exValue * vol / 100 * conf;                // 单日风险值(万元)
  // 对比情形:把敞口压到总持仓的 10%(即锁价比例提到 90%)
  var ex2 = pos * 0.10;
  var locked2 = pos * 0.90;
  var exValue2 = ex2 * spot;
  var lockCost2 = locked2 * lockPrice;
  var risk2 = exValue2 * vol / 100 * conf;
  var cut = risk - risk2;
  var cutPct = risk > 0 ? cut / risk * 100 : 0;
  var rows_ = [];
  rows_.push(tr('总持仓电量', SPOT._w(pos, 2) + ' 万 kWh'));
  rows_.push(tr('已锁价电量', SPOT._w(locked, 2) + ' 万 kWh', '', '锁价 ' + SPOT._w(lockPrice, 4) + ' 元/kWh'));
  rows_.push(tr('敞口电量', SPOT._w(ex, 2) + ' 万 kWh', 'mid', '总持仓 − 已锁价'));
  rows_.push(tr('敞口占比', SPOT._w(exRatio, 2) + ' %', exRatio > 50 ? 'bad' : 'mid', '敞口电量 ÷ 总持仓'));
  rows_.push(tr('锁价成本', SPOT._w(lockCost, 2) + ' 万元', '', '已锁价电量 × 锁价'));
  rows_.push(tr('敞口货值', SPOT._w(exValue, 2) + ' 万元', 'mid', '敞口电量 × 当前现货价 ' + SPOT._w(spot, 4) + ' 元/kWh'));
  rows_.push(tr('单日波动率 / 置信系数', SPOT._w(vol, 2) + ' % / ' + SPOT._w(conf, 2), '', '置信系数 1.65≈95%,2.33≈99%'));
  rows_.push(tr('单日风险值(简化 VaR)', SPOT._w(risk, 2) + ' 万元', risk > 0 ? 'bad' : 'ok', '敞口货值 × 日波动率 × 置信系数'));
  rows_.push(tr('敞口压到 10% 后电量', SPOT._w(ex2, 2) + ' 万 kWh', 'ok', '已锁价电量按总持仓的 90% 计'));
  rows_.push(tr('敞口压到 10% 后风险值', SPOT._w(risk2, 2) + ' 万元', 'ok', '同样波动率与置信系数'));
  rows_.push(tr('风险可减少', SPOT._w(cut, 2) + ' 万元', 'ok', '降低 ' + SPOT._w(cutPct, 2) + ' %'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:「单日风险值」是一个极度简化的 VaR:把敞口货值乘以日波动率,再乘一个置信系数,得到「在给定置信水平下,一天大概最多亏多少」的量级。它不预测方向,只回答「<b>敞口有多大、波动有多狠</b>」。<br>把最后三行连起来看最有意义:敞口占比从 ' + SPOT._w(exRatio, 2) + '% 压到 10%,风险值从 ' + SPOT._w(risk, 2) + ' 万元降到 ' + SPOT._w(risk2, 2) + ' 万元——<b>锁价是最好的降险手段</b>,因为它把不确定性直接换成了确定的成本。但要记得:锁价也是有代价的,如果现货后来一路下跌,锁多的那部分反而会锁住损失,所以「降风险」和「留收益空间」永远是一对取舍。</p>';
};

/* ===== 模块页 ===== */
SPOT.views.module = function(id) {
  var mod = SPOT.modules.find(function(m) { return m.id === id; });
  if (!mod) { SPOT.views.home(); return; }
  var P = SPOT.progress();
  var lessons = SPOT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + SPOT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + SPOT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = SPOT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + SPOT.esc(title) + '</a>';
    else html += '<span class="title">' + SPOT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及市场规则、出清机制、报价限额、结算口径与考核标准,正文均已标注依据与适用期,内容基线为 <b>2026 年 10 月</b>,请以现行市场规则、结算办法与交易中心公告为准。本站不构成交易、报价、投资或结算依据。</p></div>';
  html += '</div>';
  SPOT.render(html);
};

/* ===== 术语 ===== */
SPOT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>电力现货与交易实务名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 现货 / 出清价 / 边际机组 / 报价 / 偏差考核 / 辅助服务 / 容量电价" oninput="SPOT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(SPOT.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与法规文件、标准文本与市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅文件原文与专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  SPOT.render(html);
};
SPOT.filterTerms = function(q) {
  var filtered = SPOT.terms;
  if (q) { q = q.toLowerCase();
    filtered = SPOT.terms.filter(function(t) {
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
    html += '<div class="term-name">' + SPOT.esc(t.name) + ' <span class="term-en">' + SPOT.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + SPOT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + SPOT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
SPOT.views.myTerms = function() {
  var P = SPOT.progress(); var collected = [];
  for (var i = 0; i < SPOT.terms.length; i++) if (P.hasTerm(SPOT.terms[i].id)) collected.push(SPOT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  SPOT.render(html);
};

/* ===== 搜索 ===== */
SPOT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 现货 / 出清价 / 边际机组 / 报价 / 偏差考核 / 辅助服务 / 容量电价" oninput="SPOT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  SPOT.render(html);
};
SPOT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = SPOT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + SPOT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + SPOT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
SPOT.views.settings = function() {
  var P = SPOT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="SPOT.setTheme(\'dark\')">深色 · 亮桃红</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="SPOT.setTheme(\'light\')">浅色 · 绛红</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="SPOT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="SPOT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="SPOT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = SPOT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/spot-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/spot-progress" value="' + SPOT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + SPOT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + SPOT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + SPOT.esc(SPOT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="SPOT.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="SPOT.clearData()">清除数据</button></div>';
  html += '</div>';
  SPOT.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    SPOT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!SPOT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    SPOT.sync.pullNow().then(function () { return SPOT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + SPOT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    SPOT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : SPOT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    SPOT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
SPOT.setTheme = function(t) { document.documentElement.dataset.theme = t; SPOT.progress().setPref('theme', t); SPOT.views.settings(); };
SPOT.setFontSize = function(s) { document.documentElement.dataset.fs = s; SPOT.progress().setPref('fontSize', s); SPOT.views.settings(); };
SPOT.exportData = function() {
  var data = SPOT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'spot-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
SPOT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('spot.progress.v1');
    window.location.reload();
  }
};
