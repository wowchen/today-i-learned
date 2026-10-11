/* 工具视图:七件发电技术互动工具(发电度电成本 / 供电煤耗与碳排放 / 厂用电率与上网电量 /
   风电光伏发电量 / 抽水蓄能效率与收益 / 调峰深度与收益 / 环保排放达标校核)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、采购、招标或合规依据。 */
window.GEN = window.GEN || {};
GEN.views = GEN.views || {};

GEN._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
GEN._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
GEN._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
GEN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">发电的事,光看图不算懂。这七个小工具把课里的口径变成可拨动的数字:<b>度电成本怎么算(投资、燃料、运维各占多少)、烧煤发一度电排多少碳(煤耗与排放强度怎么挂钩)、厂用电吃掉多少电量(厂用率怎么决定上网电量)、风光一年能发多少(利用小时与弃电的影响)、抽水蓄能一趟循环赚不赚(效率与峰谷价差)、机组调峰深一点值不值(调峰深度与补偿收益)、烟气排放达不达标(实测浓度与限值对比)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的机组类型与容量等级、燃料品质与价格、环保设施运行方式、电价机制与市场规则、政策差异与现场条件等细节。<b>不作为工程设计、设备选型、投标报价或合规依据。</b>实际项目须以设计文件、厂商资料、现行有效标准与企业技术规定为准。</p>';
  html += '</div>';

  // 1. 发电度电成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>发电度电成本测算器</h3>';
  html += '<p class="lab-desc">一座电厂发一度电到底要花多少钱?把投资、运维和燃料三笔账折到每度电上,看<b>平准化度电成本(LCOE)是多少、钱主要花在哪一项</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>装机容量(MW)<input type="number" id="lc-cap" step="50" value="1000" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '<label>单位造价(元/kW)<input type="number" id="lc-cost" step="100" value="4000" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '<label>年利用小时(h)<input type="number" id="lc-hours" step="100" value="4500" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '<label>年运维费率(%)<input type="number" id="lc-om" step="0.5" value="2.5" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '<label>折现率 / 资本成本(%)<input type="number" id="lc-rate" step="0.5" value="6" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '<label>运营年限(年)<input type="number" id="lc-years" step="5" value="25" min="1" oninput="GEN.calcLcoe()"></label>';
  html += '<label>燃料成本(元/kWh)<input type="number" id="lc-fuel" step="0.01" value="0.25" min="0" oninput="GEN.calcLcoe()"></label>';
  html += '</div>';
  html += '<div id="lc-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 供电煤耗与碳排放测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>供电煤耗与碳排放测算器</h3>';
  html += '<p class="lab-desc">煤电厂的煤耗和碳排放是一枚硬币的两面。填入发电量与供电煤耗,看<b>一年烧多少标煤、排多少二氧化碳、度电排放强度有多高</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年发电量(亿kWh)<input type="number" id="cc-gen" step="10" value="100" min="0" oninput="GEN.calcCoalCarbon()"></label>';
  html += '<label>供电煤耗(g/kWh)<input type="number" id="cc-coal" step="5" value="300" min="0" oninput="GEN.calcCoalCarbon()"></label>';
  html += '<label>厂用电率(%)<input type="number" id="cc-aux" step="0.5" value="5" min="0" max="100" oninput="GEN.calcCoalCarbon()"></label>';
  html += '<label>标煤碳排放因子(tCO2/tce)<input type="number" id="cc-factor" step="0.01" value="2.66" min="0" oninput="GEN.calcCoalCarbon()"></label>';
  html += '</div>';
  html += '<div id="cc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 厂用电率与上网电量测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>厂用电率与上网电量测算器</h3>';
  html += '<p class="lab-desc">电厂发出来的电不是全部都能上网——风机、水泵、磨煤机自己先要用掉一大块。填入发电量与厂用率,看<b>厂用电吃掉多少、关口上网多少、扣掉送出线损后还能剩多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>发电量(万kWh)<input type="number" id="ar-gen" step="1000" value="100000" min="0" oninput="GEN.calcAuxRate()"></label>';
  html += '<label>综合厂用电率(%)<input type="number" id="ar-aux" step="0.5" value="5.5" min="0" max="100" oninput="GEN.calcAuxRate()"></label>';
  html += '<label>主变及送出线损率(%)<input type="number" id="ar-loss" step="0.5" value="1.5" min="0" max="100" oninput="GEN.calcAuxRate()"></label>';
  html += '</div>';
  html += '<div id="ar-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 风电光伏发电量测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>风电光伏发电量测算器</h3>';
  html += '<p class="lab-desc">同样的装机,风电场和光伏电站一年发的电可能差一半。填入类型与利用小时,看<b>一年能发多少电、等效利用小时与容量系数是多少、弃电又损失了多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>类型<select id="ws-type" onchange="GEN.calcWindSolarOutput()"><option value="wind" selected>风电</option><option value="solar">光伏</option></select></label>';
  html += '<label>装机容量(MW)<input type="number" id="ws-cap" step="10" value="100" min="0" oninput="GEN.calcWindSolarOutput()"></label>';
  html += '<label>年利用小时(毛)(h)<input type="number" id="ws-hours" step="100" value="2200" min="0" oninput="GEN.calcWindSolarOutput()"></label>';
  html += '<label>综合效率 / 可用率(%)<input type="number" id="ws-eff" step="1" value="96" min="0" max="100" oninput="GEN.calcWindSolarOutput()"></label>';
  html += '<label>弃风 / 弃光率(%)<input type="number" id="ws-curtail" step="1" value="3" min="0" max="100" oninput="GEN.calcWindSolarOutput()"></label>';
  html += '</div>';
  html += '<div id="ws-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 抽水蓄能效率与收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊟</span>抽水蓄能效率与收益测算器</h3>';
  html += '<p class="lab-desc">抽水蓄能是电网的「充电宝」:低谷抽水、高峰发电,但这中间要损失一大块电量。填入库容、水头与电价,看<b>一趟循环发多少电、耗多少电、净赚多少,以及多少年能回本</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>单次发电用水量(万m³)<input type="number" id="ps-vol" step="50" value="500" min="0" oninput="GEN.calcPumpedStorage()"></label>';
  html += '<label>平均发电水头(m)<input type="number" id="ps-head" step="20" value="400" min="0" oninput="GEN.calcPumpedStorage()"></label>';
  html += '<label>综合效率(%)<input type="number" id="ps-eff" step="1" value="75" min="1" max="100" oninput="GEN.calcPumpedStorage()"></label>';
  html += '<label>年循环次数<input type="number" id="ps-count" step="20" value="300" min="0" oninput="GEN.calcPumpedStorage()"></label>';
  html += '<label>上网(发电)电价(元/kWh)<input type="number" id="ps-price" step="0.05" value="0.5" min="0" oninput="GEN.calcPumpedStorage()"></label>';
  html += '<label>抽水电价(元/kWh)<input type="number" id="ps-pump" step="0.05" value="0.25" min="0" oninput="GEN.calcPumpedStorage()"></label>';
  html += '</div>';
  html += '<div id="ps-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 调峰深度与收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌁</span>调峰深度与收益测算器</h3>';
  html += '<p class="lab-desc">新能源多了,火电就得给风光「让路」——压低出力就是调峰。填入机组参数与调峰补偿价,看<b>能往下压多少、一年让出多少电量、调峰补偿能补回多少收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>机组容量(MW)<input type="number" id="pk-cap" step="50" value="600" min="0" oninput="GEN.calcPeakingBenefit()"></label>';
  html += '<label>最小技术出力(%额定)<input type="number" id="pk-min" step="5" value="40" min="0" max="100" oninput="GEN.calcPeakingBenefit()"></label>';
  html += '<label>平均调峰出力(%额定)<input type="number" id="pk-avg" step="5" value="55" min="0" max="100" oninput="GEN.calcPeakingBenefit()"></label>';
  html += '<label>年调峰运行小时(h)<input type="number" id="pk-hours" step="50" value="800" min="0" oninput="GEN.calcPeakingBenefit()"></label>';
  html += '<label>调峰补偿价(元/kWh)<input type="number" id="pk-price" step="0.01" value="0.15" min="0" oninput="GEN.calcPeakingBenefit()"></label>';
  html += '</div>';
  html += '<div id="pk-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 环保排放达标校核器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◇</span>环保排放达标校核器</h3>';
  html += '<p class="lab-desc">超低排放到底卡在哪几个数上?填入烟气实测浓度与运行参数,看<b>烟尘、SO₂、NOx 三项分别离限值还有多少余量、全年各排多少吨</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>执行标准<select id="em-std" onchange="GEN.calcEmissionCheck()"><option value="ultra" selected>超低排放(燃煤 10 / 35 / 50)</option><option value="general">一般排放限值(30 / 100 / 100)</option></select></label>';
  html += '<label>烟尘实测(mg/m³)<input type="number" id="em-dust" step="1" value="5" min="0" oninput="GEN.calcEmissionCheck()"></label>';
  html += '<label>SO₂ 实测(mg/m³)<input type="number" id="em-so2" step="1" value="20" min="0" oninput="GEN.calcEmissionCheck()"></label>';
  html += '<label>NOx 实测(mg/m³)<input type="number" id="em-nox" step="1" value="35" min="0" oninput="GEN.calcEmissionCheck()"></label>';
  html += '<label>标态烟气量(万m³/h)<input type="number" id="em-gas" step="10" value="200" min="0" oninput="GEN.calcEmissionCheck()"></label>';
  html += '<label>年运行小时(h)<input type="number" id="em-hours" step="100" value="5000" min="0" oninput="GEN.calcEmissionCheck()"></label>';
  html += '</div>';
  html += '<div id="em-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取行业常见量级概数,单价、费率与限值为示例值。<b>实际项目必须依据设计文件、燃料与烟气实测数据、现行有效标准与政策要求单独核算</b>,本工具结果不作为工程设计、设备选型、投标报价或合规依据。</p>';
  html += '</div>';
  GEN.render(html);
  GEN.calcLcoe(); GEN.calcCoalCarbon(); GEN.calcAuxRate(); GEN.calcWindSolarOutput();
  GEN.calcPumpedStorage(); GEN.calcPeakingBenefit(); GEN.calcEmissionCheck();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. 发电度电成本 ---- */
GEN.calcLcoe = function() {
  var el = document.getElementById('lc-result');
  if (!el) return;
  var cap = GEN._num('lc-cap'), cost = GEN._num('lc-cost'), hours = GEN._num('lc-hours');
  var om = GEN._num('lc-om'), rate = GEN._num('lc-rate'), years = GEN._num('lc-years'), fuel = GEN._num('lc-fuel');
  if (cap === null || cost === null || hours === null || om === null || rate === null || years === null || fuel === null) {
    el.innerHTML = warn('请把装机容量、单位造价、年利用小时、运维费率、折现率、运营年限与燃料成本填写完整。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('装机容量须大于 0。'); return; }
  if (cost < 0 || hours < 0 || om < 0 || rate < 0 || fuel < 0) {
    el.innerHTML = warn('造价、利用小时、费率与燃料成本不能为负。'); return;
  }
  if (years <= 0) { el.innerHTML = warn('运营年限须大于 0 年。'); return; }
  if (hours <= 0) { el.innerHTML = warn('年利用小时须大于 0,否则固定成本无法分摊到电量上。'); return; }

  var capKw = cap * 1000;
  var capex = capKw * cost;                       // 静态总投资(元)
  var r = rate / 100, n = years;
  var crf = r === 0 ? 1 / n : r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);   // 资本回收系数
  var annualCap = capex * crf;                    // 年资本回收(元)
  var annualOm = capex * om / 100;                // 年运维(元)
  var annualGen = capKw * hours;                  // 年发电量(kWh)
  var annualFuel = annualGen * fuel;              // 年燃料成本(元)
  var lcoe = (annualCap + annualOm + annualFuel) / annualGen;    // 元/kWh
  var pCap = annualCap / annualGen, pOm = annualOm / annualGen, pFuel = annualFuel / annualGen;
  var lifeCost = annualCap * n + annualOm * n + annualFuel * n;

  var cls = lcoe > 0.6 ? 'cr-bad' : (lcoe > 0.4 ? '' : 'cr-good');
  var out = '<table class="cr-table">';
  out += tr('装机容量', GEN._w(cap, 0) + ' MW', '', '= ' + GEN._w(capKw, 0) + ' kW');
  out += tr('单位造价', GEN._w(cost, 0) + ' 元/kW', '', '按装机千瓦计的静态投资强度');
  out += tr('静态总投资', GEN._w(capex / 1e8, 2) + ' 亿元', '', GEN._w(capKw, 0) + ' kW × ' + GEN._w(cost, 0) + ' 元/kW');
  out += tr('资本回收系数(CRF)', GEN._fix(crf, 4), '', '折现率 ' + GEN._fix(rate, 1) + ' %、' + GEN._fix(years, 0) + ' 年');
  out += tr('年利用小时', GEN._w(hours, 0) + ' h', '', '年发电量 ÷ 装机容量,反映设备利用程度');
  out += tr('年发电量', GEN._w(annualGen / 1e4, 2) + ' 万kWh', '', '= ' + GEN._w(annualGen / 1e8, 3) + ' 亿kWh');
  out += tr('年均资本回收', GEN._w(annualCap / 1e4, 2) + ' 万元', '', '折算到每度电 ' + GEN._fix(pCap, 4) + ' 元');
  out += tr('年均运维', GEN._w(annualOm / 1e4, 2) + ' 万元', '', '折算到每度电 ' + GEN._fix(pOm, 4) + ' 元');
  out += tr('年均燃料成本', GEN._w(annualFuel / 1e4, 2) + ' 万元', '', '折算到每度电 ' + GEN._fix(pFuel, 4) + ' 元');
  out += tr('平准化度电成本(LCOE)', GEN._fix(lcoe, 4) + ' 元/kWh', cls, '全周期总成本 ÷ 全周期总电量');
  out += tr('成本构成', '资本 ' + GEN._fix(pCap / lcoe * 100, 1) + ' % · 运维 ' + GEN._fix(pOm / lcoe * 100, 1) + ' % · 燃料 ' + GEN._fix(pFuel / lcoe * 100, 1) + ' %', '', '看钱主要花在哪一项');
  out += tr('全周期总成本', GEN._w(lifeCost / 1e8, 2) + ' 亿元', '', '年均成本 × ' + GEN._fix(years, 0) + ' 年,未折现');
  out += '</table>';

  if (fuel > 0.35) {
    out += warn('燃料成本占到 ' + GEN._fix(pFuel / lcoe * 100, 1) + ' %,属于典型的「燃料主导型」机组——度电成本高度随煤价 / 气价波动,电价承受力弱。');
  } else if (pCap / lcoe > 0.7) {
    out += warn('资本回收占到 ' + GEN._fix(pCap / lcoe * 100, 1) + ' %,属于「投资主导型」——如风光核,利用小时越高、折现率越低,度电成本降得越快。');
  }
  if (hours < 2000) {
    out += warn('年利用小时仅 ' + GEN._w(hours, 0) + ' h,固定成本被摊到很少的电量上,LCOE 会显著偏高。这类机组更适合承担调峰、备用等辅助角色。');
  }
  out += '<p class="calc-note">LCOE 的核心思想是<b>把「一次性投资」和「每年花销」统一折算成「每度电多少钱」</b>,这样才能公平比较一座投资大但几乎不烧燃料的核电站、和一座投资小但天天烧煤的煤电厂。折算的关键是折现率(CRF):<b>折现率越高,今天的投资越「贵」,越不利于前期投入大的电源</b>,这也是为什么利率变化会直接改变电源结构的竞争力。要注意 LCOE 只算「成本」,不含系统侧的消纳、调峰、备用等外部成本——风光 LCOE 低,但需要更多灵活性资源配套。以上为教学口径,实际测算还须计入建设期利息、税费、补贴、容量电价与折旧政策等。</p>';
  el.innerHTML = out;
};

/* ---- 2. 供电煤耗与碳排放 ---- */
GEN.calcCoalCarbon = function() {
  var el = document.getElementById('cc-result');
  if (!el) return;
  var gen = GEN._num('cc-gen'), coal = GEN._num('cc-coal'), aux = GEN._num('cc-aux'), factor = GEN._num('cc-factor');
  if (gen === null || coal === null || aux === null || factor === null) {
    el.innerHTML = warn('请把年发电量、供电煤耗、厂用电率与碳排放因子填写完整。'); return;
  }
  if (gen < 0 || coal < 0 || factor < 0) { el.innerHTML = warn('发电量、煤耗与排放因子不能为负。'); return; }
  if (aux < 0 || aux >= 100) { el.innerHTML = warn('厂用电率须在 0 ~ 100 % 之间(不含 100)。'); return; }

  var genKwh = gen * 1e8;                         // 发电量(kWh)
  var auxKwh = genKwh * aux / 100;                // 厂用电量(kWh)
  var netKwh = genKwh - auxKwh;                   // 供电量 / 上网电量(kWh)
  var coalG = netKwh * coal;                      // 年耗标煤(g)
  var coalT = coalG / 1e6;                        // tce
  var co2T = coalT * factor;                      // tCO2
  var genCoal = coal * (1 - aux / 100);           // 发电煤耗(g/kWh)
  var intensity = coalG / genKwh;                 // 发电侧煤耗(g/kWh)
  var co2Intensity = co2T * 1e6 / genKwh;         // 度电碳排放(gCO2/kWh)

  var out = '<table class="cr-table">';
  out += tr('年发电量', GEN._w(gen, 2) + ' 亿kWh', '', '发电侧总电量');
  out += tr('厂用电率', GEN._fix(aux, 2) + ' %', '', '厂内辅机自用电占发电量的比例');
  out += tr('年供电量(上网)', GEN._w(netKwh / 1e8, 3) + ' 亿kWh', '', '发电量 × (1 − 厂用电率)');
  out += tr('发电煤耗', GEN._fix(genCoal, 2) + ' g/kWh', '', '供电煤耗 × (1 − 厂用电率),用于对照机组设计值');
  out += tr('供电煤耗', GEN._w(coal, 1) + ' g/kWh', '', '每供出 1 kWh 电所耗的标准煤');
  out += tr('年耗标煤', GEN._w(coalT / 1e4, 2) + ' 万tce', '', '供电量 × 供电煤耗,约 ' + GEN._w(coalT, 0) + ' t 标准煤');
  out += tr('年 CO₂ 排放', GEN._w(co2T / 1e4, 2) + ' 万tCO₂', '', GEN._w(coalT / 1e4, 2) + ' 万tce × ' + GEN._fix(factor, 2) + ' tCO2/tce');
  out += tr('度电碳排放强度', GEN._w(co2Intensity, 0) + ' gCO₂/kWh', co2Intensity > 900 ? 'cr-bad' : '', 'CO₂ 排放 ÷ 发电量,用于横向对比电源');
  out += tr('年耗标煤(单机口径)', GEN._fix(coalT * 1e6 / netKwh, 1) + ' g/kWh', '', '与供电煤耗一致,互为校核');
  out += '</table>';

  if (coal > 320) {
    out += warn('供电煤耗 ' + GEN._w(coal, 1) + ' g/kWh 高于行业先进水平(超超临界机组普遍低于 290 g/kWh),说明机组参数偏低或运行方式不佳,节能改造空间大。');
  } else if (coal <= 285) {
    out += warn('供电煤耗 ' + GEN._w(coal, 1) + ' g/kWh 已接近超超临界先进水平,再往下压的空间有限,更多要靠提高利用小时与优化运行。');
  }
  if (aux > 8) {
    out += warn('厂用电率 ' + GEN._fix(aux, 2) + ' % 偏高,辅机(风机、水泵、磨煤机、脱硫脱硝)自用电偏大,既吃掉电量也抬高煤耗。');
  }
  out += '<p class="calc-note">记住这条链条:<b>供电煤耗 × 标煤碳排放因子 = 度电碳排放强度</b>。煤电度电碳排放大约在 800 ~ 900 gCO₂/kWh 量级,而气电约为此值的四到五成、风光核几乎为零——这正是「电源结构决定碳排放」的算术基础。<b>降碳有两条路:一是降煤耗(提高蒸汽参数、优化运行、减少厂用电),二是换燃料(煤改气、掺烧生物质、加装 CCUS)</b>。前者是存量机组的日常功课,后者决定长期走向。以上为教学口径,实际核算还须区分发电煤耗与供电煤耗口径、计入含碳量与氧化率,并以现行碳核算指南为准。</p>';
  el.innerHTML = out;
};

/* ---- 3. 厂用电率与上网电量 ---- */
GEN.calcAuxRate = function() {
  var el = document.getElementById('ar-result');
  if (!el) return;
  var gen = GEN._num('ar-gen'), aux = GEN._num('ar-aux'), loss = GEN._num('ar-loss');
  if (gen === null || aux === null || loss === null) {
    el.innerHTML = warn('请把发电量、综合厂用电率与送出线损率填写完整。'); return;
  }
  if (gen <= 0) { el.innerHTML = warn('发电量须大于 0。'); return; }
  if (aux < 0 || aux >= 100 || loss < 0 || loss >= 100) {
    el.innerHTML = warn('厂用电率与线损率须在 0 ~ 100 % 之间(不含 100)。'); return;
  }

  var auxKwh = gen * aux / 100;                   // 厂用电量(万kWh)
  var gross = gen - auxKwh;                       // 关口上网电量(万kWh)
  var lossKwh = gross * loss / 100;               // 送出线损(万kWh)
  var net = gross - lossKwh;                      // 到网/售电电量(万kWh)
  var genPct = 100, auxPct = aux, grossPct = gross / gen * 100, netPct = net / gen * 100;

  var out = '<table class="cr-table">';
  out += tr('发电量(发电侧)', GEN._w(gen, 2) + ' 万kWh', '', '100.0 %');
  out += tr('厂用电量', GEN._w(auxKwh, 2) + ' 万kWh', 'cr-bad', '占发电量 ' + GEN._fix(auxPct, 2) + ' %(综合厂用电率)');
  out += tr('关口上网电量', GEN._w(gross, 2) + ' 万kWh', '', '发电量 − 厂用电量,占 ' + GEN._fix(grossPct, 2) + ' %');
  out += tr('送出线损电量', GEN._w(lossKwh, 2) + ' 万kWh', '', '上网电量 × ' + GEN._fix(loss, 2) + ' %');
  out += tr('到网(售电)电量', GEN._w(net, 2) + ' 万kWh', 'cr-good', '上网电量 − 线损,占发电量 ' + GEN._fix(netPct, 2) + ' %');
  out += tr('发电→售电综合损耗', GEN._fix(100 - netPct, 2) + ' %', '', '厂用电 + 线损,合计损失的发电量比例');
  out += tr('单台机组示例', GEN._fix(gen / 1000, 2) + ' 万kWh/台', '', '按 1000 台等分示意,仅用于理解占比关系');
  out += '</table>';

  if (aux > 8) {
    out += warn('综合厂用电率 ' + GEN._fix(aux, 2) + ' % 偏高。湿冷机组一般在 5 % ~ 7 %,空冷机组可到 8 % ~ 10 %,脱硫脱硝与空冷风机是耗电大户。厂用电每降 1 个百分点,上网电量就能多出约 ' + GEN._w(gen * 0.01, 0) + ' 万kWh。');
  }
  out += '<p class="calc-note">「发电量」和「上网电量」不是一回事:<b>上网电量 = 发电量 × (1 − 综合厂用电率)</b>。厂用电是电厂自己维持运转必须消耗的电(给水泵、循环水泵、风机、磨煤机、脱硫脱硝、照明与控制系统),它不产生任何上网收入,却实实在在占用了发电能力。所以衡量一座电厂的真实效率,要看的不只是「发了多少电」,而是「<b>扣掉自用和线损之后,真正送到用户手里多少电</b>」。这也解释了为什么降低厂用电率是电厂节能降耗的重点方向之一。以上为教学口径,实际统计中综合厂用电率的口径(是否含主变损耗、是否含脱硫脱硝)会因统计规则而不同。</p>';
  el.innerHTML = out;
};

/* ---- 4. 风电光伏发电量 ---- */
GEN.calcWindSolarOutput = function() {
  var el = document.getElementById('ws-result');
  if (!el) return;
  var type = document.getElementById('ws-type').value;
  var cap = GEN._num('ws-cap'), hours = GEN._num('ws-hours');
  var eff = GEN._num('ws-eff'), curt = GEN._num('ws-curtail');
  if (cap === null || hours === null || eff === null || curt === null) {
    el.innerHTML = warn('请把装机容量、年利用小时、综合效率与弃电率填写完整。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('装机容量须大于 0。'); return; }
  if (hours < 0) { el.innerHTML = warn('年利用小时不能为负。'); return; }
  if (eff < 0 || eff > 100) { el.innerHTML = warn('综合效率须在 0 ~ 100 % 之间。'); return; }
  if (curt < 0 || curt >= 100) { el.innerHTML = warn('弃电率须在 0 ~ 100 % 之间(不含 100)。'); return; }

  var isSolar = (type === 'solar');
  var name = isSolar ? '光伏' : '风电';
  var capKw = cap * 1000;
  var theo = capKw * hours;                        // 理论年发电量(按毛利用小时)
  var avail = theo * eff / 100;                    // 扣综合效率后可用发电量
  var net = avail * (1 - curt / 100);              // 上网电量
  var curtKwh = avail - net;                       // 弃电损失
  var equivH = net / capKw;                        // 等效利用小时
  var cf = equivH / 8760;                          // 容量系数
  var daily = net / 365;
  var life = isSolar ? 25 : 20;
  var lifeTotal = net * life;

  var out = '<table class="cr-table">';
  out += tr('类型', name + '电站', '', isSolar ? '光伏:白天发电、出力受辐照与温度影响' : '风电:出力受风速影响、夜间也可发电');
  out += tr('装机容量', GEN._w(cap, 0) + ' MW', '', '= ' + GEN._w(capKw, 0) + ' kW');
  out += tr('毛利用小时', GEN._w(hours, 0) + ' h', '', '未经效率与弃电修正的年利用小时');
  out += tr('理论年发电量', GEN._w(theo / 1e4, 2) + ' 万kWh', '', '装机容量 × 毛利用小时');
  out += tr('综合效率 / 可用率', GEN._fix(eff, 1) + ' %', '', '含设备可用率与厂用电等损耗');
  out += tr('可用发电量', GEN._w(avail / 1e4, 2) + ' 万kWh', '', '理论发电量 × 综合效率');
  out += tr('弃电率', GEN._fix(curt, 1) + ' %', curt > 5 ? 'cr-bad' : '', '因电网消纳不足而被迫放弃的比例');
  out += tr('年上网电量', GEN._w(net / 1e4, 2) + ' 万kWh', 'cr-good', '可用发电量 × (1 − 弃电率)');
  out += tr('弃电损失电量', GEN._w(curtKwh / 1e4, 2) + ' 万kWh', curt > 5 ? 'cr-bad' : '', '本可发出却没能上网的电量');
  out += tr('等效利用小时', GEN._w(equivH, 0) + ' h', '', '上网电量 ÷ 装机容量,是横向比较的关键指标');
  out += tr('容量系数', GEN._fix(cf * 100, 1) + ' %', '', '等效利用小时 ÷ 8760,反映设备利用强度');
  out += tr('日均发电量', GEN._w(daily / 1e4, 3) + ' 万kWh', '', '年上网电量 ÷ 365');
  out += tr(life + ' 年累计上网电量', GEN._w(lifeTotal / 1e8, 2) + ' 亿kWh', '', '按当前水平线性外推,未计衰减与电价变化');
  out += '</table>';

  if (cf < 0.2 && !isSolar) {
    out += warn('容量系数仅 ' + GEN._fix(cf * 100, 1) + ' %,属于风资源一般的场址。风电容量系数通常在 20 % ~ 35 %,海风可达 40 % 以上。');
  }
  if (cf > 0.2 && isSolar) {
    out += warn('光伏容量系数达 ' + GEN._fix(cf * 100, 1) + ' %,明显偏高(我国光伏通常在 12 % ~ 18 %)。请核对毛利用小时是否已包含效率与弃电修正。');
  }
  if (curt > 5) {
    out += warn('弃电率 ' + GEN._fix(curt, 1) + ' % 偏高,说明当地消纳能力不足。弃电直接吞掉发电量,增加储能、参与电力市场或配套负荷是常见应对。');
  }
  out += '<p class="calc-note">风光发电量由三个数决定:<b>装多少(容量)、晒 / 吹多久(资源与利用小时)、以及有多少没能上网(弃电)</b>。风光的「等效利用小时」天然远低于火电——火电可到 4000 ~ 6000 h,风电约 2000 ~ 2500 h,光伏约 1200 ~ 1600 h,所以同样装机容量的年发电量差出一大截;而<b>容量系数</b>正是把这种差异标准化的指标,也是判断一个场址好坏的通用语言。另外要记住,风光出力是「看天吃饭」的随机量,计算年发电量容易,难的是<b>在需要的时候恰好有电</b>——这正是储能与灵活性资源的价值所在。以上为教学口径,实际测算须用场址实测资源数据与专用软件模拟,并计入组件衰减、可利用率与限电曲线。</p>';
  el.innerHTML = out;
};

/* ---- 5. 抽水蓄能效率与收益 ---- */
GEN.calcPumpedStorage = function() {
  var el = document.getElementById('ps-result');
  if (!el) return;
  var vol = GEN._num('ps-vol'), head = GEN._num('ps-head'), eff = GEN._num('ps-eff');
  var count = GEN._num('ps-count'), price = GEN._num('ps-price'), pump = GEN._num('ps-pump');
  if (vol === null || head === null || eff === null || count === null || price === null || pump === null) {
    el.innerHTML = warn('请把用水量、水头、综合效率、年循环次数与两个电价填写完整。'); return;
  }
  if (vol <= 0) { el.innerHTML = warn('单次发电用水量须大于 0。'); return; }
  if (head <= 0) { el.innerHTML = warn('平均发电水头须大于 0。'); return; }
  if (eff <= 0 || eff > 100) { el.innerHTML = warn('综合效率须在 0 ~ 100 % 之间(不含 0)。'); return; }
  if (count < 0 || price < 0 || pump < 0) { el.innerHTML = warn('循环次数与电价不能为负。'); return; }

  var V = vol * 1e4;                               // 单次水量(m³)
  var eta = eff / 100;
  var genKwh = 9.81 * V * head * eta / 3600;       // 单次发电量(kWh)
  var pumpKwh = genKwh / eta;                      // 单次抽水耗电(kWh)
  var lossKwh = pumpKwh - genKwh;                  // 单次效率损失
  var revenue = genKwh * price;                    // 单次售电收入(元)
  var cost = pumpKwh * pump;                       // 单次抽水电费(元)
  var netUnit = revenue - cost;                    // 单次净收益(元)
  var unitMargin = genKwh > 0 ? netUnit / genKwh : 0;   // 度电净收益(元/kWh)
  var yearGen = genKwh * count, yearPump = pumpKwh * count;
  var yearNet = netUnit * count, yearRev = revenue * count, yearCost = cost * count;
  var spread = price - pump;                       // 峰谷价差(元/kWh)

  var cls = unitMargin > 0 ? 'cr-good' : (unitMargin < 0 ? 'cr-bad' : '');
  var out = '<table class="cr-table">';
  out += tr('单次发电用水量', GEN._w(vol, 0) + ' 万m³', '', '= ' + GEN._w(V, 0) + ' m³');
  out += tr('平均发电水头', GEN._w(head, 0) + ' m', '', '上下库有效落差');
  out += tr('综合效率', GEN._fix(eff, 1) + ' %', '', '发电效率 × 抽水效率 × 管路与机组损失,常取 70 % ~ 80 %');
  out += tr('单次发电量', GEN._w(genKwh / 1e4, 2) + ' 万kWh', 'cr-good', '9.81 × 水量 × 水头 × 效率 ÷ 3600');
  out += tr('单次抽水耗电', GEN._w(pumpKwh / 1e4, 2) + ' 万kWh', 'cr-bad', '发电量 ÷ 综合效率,即「充」进去的电');
  out += tr('单次效率损失', GEN._w(lossKwh / 1e4, 2) + ' 万kWh', 'cr-bad', '抽水耗电 − 发电量,约 ' + GEN._fix((1 - eta) * 100, 1) + ' % 的量被损耗');
  out += tr('单次售电收入', GEN._w(revenue / 1e4, 2) + ' 万元', '', GEN._w(genKwh / 1e4, 2) + ' 万kWh × ' + GEN._fix(price, 2) + ' 元/kWh');
  out += tr('单次抽水电费', GEN._w(cost / 1e4, 2) + ' 万元', '', GEN._w(pumpKwh / 1e4, 2) + ' 万kWh × ' + GEN._fix(pump, 2) + ' 元/kWh');
  out += tr('单次净收益', (netUnit >= 0 ? '' : '−') + GEN._w(Math.abs(netUnit) / 1e4, 2) + ' 万元', cls, '售电收入 − 抽水电费');
  out += tr('度电净收益', (unitMargin >= 0 ? '' : '−') + GEN._fix(Math.abs(unitMargin), 4) + ' 元/kWh', cls, '净收益 ÷ 发电量');
  out += tr('峰谷价差', GEN._fix(spread, 3) + ' 元/kWh', spread > 0 ? 'cr-good' : 'cr-bad', '上网电价 − 抽水电价,是抽蓄盈利的根本来源');
  out += tr('年发电量', GEN._w(yearGen / 1e4, 2) + ' 万kWh', '', GEN._w(genKwh / 1e4, 2) + ' 万kWh × ' + GEN._w(count, 0) + ' 次');
  out += tr('年抽水耗电', GEN._w(yearPump / 1e4, 2) + ' 万kWh', '', GEN._w(pumpKwh / 1e4, 2) + ' 万kWh × ' + GEN._w(count, 0) + ' 次');
  out += tr('年净收益', (yearNet >= 0 ? '' : '−') + GEN._w(Math.abs(yearNet) / 1e4, 2) + ' 万元', cls, '单次净收益 × ' + GEN._w(count, 0) + ' 次');
  out += tr('年售电收入', GEN._w(yearRev / 1e4, 2) + ' 万元', '', '年发电量 × 上网电价');
  out += tr('年抽水电费', GEN._w(yearCost / 1e4, 2) + ' 万元', '', '年抽水电量 × 抽水电价');
  out += '</table>';

  if (spread <= 0) {
    out += warn('峰谷价差为 ' + GEN._fix(spread, 3) + ' 元/kWh,小于等于零——抽蓄「低价抽、高价发」的套利逻辑不成立,收益必然为负。抽蓄盈利的前提是<b>上网电价明显高于抽水电价</b>。');
  } else if (unitMargin < 0) {
    out += warn('虽有正价差,但峰谷价差 ' + GEN._fix(spread, 3) + ' 元/kWh 不足以覆盖综合效率损失(仅 ' + GEN._fix(eff, 1) + ' %)。要把净收益做正,价差至少需达到约 ' + GEN._fix(pump * (1 / eta - 1), 3) + ' 元/kWh 以上。');
  }
  if (eff < 70) {
    out += warn('综合效率 ' + GEN._fix(eff, 1) + ' % 偏低,现代抽蓄机组通常在 75 % 上下。效率越低,同样发电量要抽更多的水、花更多的电费。');
  }
  out += '<p class="calc-note">抽水蓄能最反直觉的一点是:<b>它本身就是个「耗电大户」——用 4 度电抽水,只能发回 3 度电</b>,损失的那 1 度就是综合效率的代价。那它为什么还值钱?因为电的价值不在「多少度」,而在「什么时候有」。<b>它在风电光伏大发、电价很低的低谷把电「存」起来,在晚高峰电价高企时放出来卖</b>——赚的是「时间差」而非「数量差」。所以抽蓄的经济性几乎完全取决于两点:一是<b>峰谷价差够不够大</b>,二是<b>能不能拿到容量电价或辅助服务补偿</b>来覆盖固定成本。以上为教学口径,实际收益还须计入容量电价、辅助服务、运行年费与建设投资回收,并以现行电价与市场规则为准。</p>';
  el.innerHTML = out;
};

/* ---- 6. 调峰深度与收益 ---- */
GEN.calcPeakingBenefit = function() {
  var el = document.getElementById('pk-result');
  if (!el) return;
  var cap = GEN._num('pk-cap'), min = GEN._num('pk-min'), avg = GEN._num('pk-avg');
  var hours = GEN._num('pk-hours'), price = GEN._num('pk-price');
  if (cap === null || min === null || avg === null || hours === null || price === null) {
    el.innerHTML = warn('请把机组容量、最小技术出力、平均调峰出力、年调峰小时与补偿价填写完整。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('机组容量须大于 0。'); return; }
  if (min < 0 || min > 100 || avg < 0 || avg > 100) { el.innerHTML = warn('最小技术出力与平均调峰出力须在 0 ~ 100 % 之间。'); return; }
  if (hours < 0 || price < 0) { el.innerHTML = warn('年调峰小时与补偿价不能为负。'); return; }
  if (avg < min) { el.innerHTML = warn('平均调峰出力不应低于最小技术出力(机组压不到那么低)。'); return; }

  var capKw = cap * 1000;
  var depth = 100 - min;                           // 调峰深度(%)
  var downKw = capKw * (1 - min / 100);            // 可下调容量(kW)
  var avgDrop = 1 - avg / 100;                     // 平均下调幅度
  var peakKwh = capKw * avgDrop * hours;           // 年调峰电量(减少的发电量,kWh)
  var benefit = peakKwh * price;                   // 年调峰收益(元)
  var unitBenefit = price;                         // 度电补偿(元/kWh)
  var deepCap = min < 50 ? capKw * (50 - min) / 100 : 0;   // 深度调峰段容量(kW)
  var isDeep = avg < 50;                           // 平均出力落入深度调峰区间

  var out = '<table class="cr-table">';
  out += tr('机组容量', GEN._w(cap, 0) + ' MW', '', '= ' + GEN._w(capKw, 0) + ' kW');
  out += tr('最小技术出力', GEN._fix(min, 0) + ' % 额定', '', '机组能稳定运行的下限出力');
  out += tr('调峰深度', GEN._fix(depth, 0) + ' %', depth >= 60 ? 'cr-good' : '', '= 100 % − 最小技术出力,越深越灵活');
  out += tr('可下调容量', GEN._w(cap * (1 - min / 100), 0) + ' MW', '', '机组容量 × 调峰深度');
  out += tr('平均调峰出力', GEN._fix(avg, 0) + ' % 额定', '', '调峰运行期间的平均出力水平');
  out += tr('平均下调幅度', GEN._fix(avgDrop * 100, 0) + ' %', '', '= 100 % − 平均调峰出力');
  out += tr('年调峰运行小时', GEN._w(hours, 0) + ' h', '', '机组处于调峰工况的时长');
  out += tr('年调峰电量', GEN._w(peakKwh / 1e4, 2) + ' 万kWh', '', '为调峰而「让出」的发电量 = 容量 × 下调幅度 × 小时');
  out += tr('调峰补偿价', GEN._fix(price, 3) + ' 元/kWh', '', '按让出电量计价的补偿标准');
  out += tr('年调峰收益', GEN._w(benefit / 1e4, 2) + ' 万元', benefit > 0 ? 'cr-good' : '', '年调峰电量 × 补偿价');
  out += tr('是否深度调峰', isDeep ? '是(平均出力低于 50 % 额定)' : '否', isDeep ? 'cr-bad' : 'cr-good', '深度调峰区间通常另有更高补偿');
  out += tr('深度调峰段容量', deepCap > 0 ? GEN._w(deepCap / 1000, 1) + ' MW' : '—', '', '最小技术出力低于 50 % 额定时的可深调容量');
  out += tr('度电补偿', GEN._fix(unitBenefit, 4) + ' 元/kWh', '', '每让出 1 kWh 电量所能获得的补偿');
  out += '</table>';

  if (min >= 50) {
    out += warn('最小技术出力 ' + GEN._fix(min, 0) + ' % 偏高(常规煤机多在 30 % ~ 50 %),调峰能力有限。若新能源占比继续上升,需通过灵活性改造(低负荷稳燃、给水泵与风机变频、协调优化)把下限压下去。');
  }
  if (isDeep) {
    out += warn('平均出力已进入深度调峰区间(低于 50 % 额定),此时机组能耗上升、稳燃与环保风险加大,但补偿通常也更高——这正是「灵活性改造」的价值所在。');
  }
  if (price <= 0) {
    out += warn('调峰补偿价为 0,意味着「让出电量」没有任何补偿,机组调峰纯属义务。若长期如此,调峰积极性不足,需靠辅助服务市场或容量电价机制来补偿。');
  }
  out += '<p class="calc-note">调峰的本质是<b>「为一时的灵活性,牺牲一部分发电量」</b>:机组把出力从额定压到 40 %,少发的电就是为风光的波动「腾地方」。所以火电的定位正在从「发电主力」转向「<b>兜底 + 调峰 + 备用</b>」——电量收入下降,靠容量电价和辅助服务补偿来平衡。调峰深度是机组灵活性的核心指标:<b>压得越低,新能源消纳空间越大,但机组低负荷运行时的煤耗、排放与设备损耗也随之上升</b>,这是一笔必须算清楚的账。以上为教学口径,实际补偿标准、认定口径与结算规则以现行辅助服务市场规则与地方政策为准。</p>';
  el.innerHTML = out;
};

/* ---- 7. 环保排放达标校核 ---- */
GEN.calcEmissionCheck = function() {
  var el = document.getElementById('em-result');
  if (!el) return;
  var std = document.getElementById('em-std').value;
  var dust = GEN._num('em-dust'), so2 = GEN._num('em-so2'), nox = GEN._num('em-nox');
  var gas = GEN._num('em-gas'), hours = GEN._num('em-hours');
  if (dust === null || so2 === null || nox === null || gas === null || hours === null) {
    el.innerHTML = warn('请把三项实测浓度、标态烟气量与年运行小时填写完整。'); return;
  }
  if (dust < 0 || so2 < 0 || nox < 0 || gas < 0 || hours < 0) {
    el.innerHTML = warn('浓度、烟气量与运行小时不能为负。'); return;
  }

  var LIM = { ultra: { dust: 10, so2: 35, nox: 50, name: '超低排放(燃煤)' },
              general: { dust: 30, so2: 100, nox: 100, name: '一般排放限值' } };
  var L = LIM[std] || LIM.ultra;
  var gasM3 = gas * 1e4;                            // 标态烟气量(m³/h)

  function row(label, val, lim) {
    var ok = val <= lim;
    var margin = lim - val;
    var pct = lim > 0 ? val / lim * 100 : 0;
    var annual = val * gasM3 * hours / 1e9;         // t
    return tr(label, GEN._fix(val, 1) + ' mg/m³', ok ? 'cr-good' : 'cr-bad',
      '限值 ' + GEN._fix(lim, 0) + ' · 占限值 ' + GEN._fix(pct, 1) + ' % · ' +
      (ok ? '余量 ' + GEN._fix(margin, 1) : '超标 ' + GEN._fix(-margin, 1)) + ' mg/m³ · 年排 ' + GEN._w(annual, 1) + ' t');
  }

  var allOk = dust <= L.dust && so2 <= L.so2 && nox <= L.nox;
  var out = '<table class="cr-table">';
  out += tr('执行标准', L.name, '', '不同标准限值差异很大,先确认执行哪一档');
  out += tr('年运行小时', GEN._w(hours, 0) + ' h', '', '按年运行时长估算全年排放总量');
  out += tr('标态烟气量', GEN._w(gas, 0) + ' 万m³/h', '', '= ' + GEN._w(gasM3, 0) + ' m³/h,用于折算排放总量');
  out += row('烟尘', dust, L.dust);
  out += row('二氧化硫 SO₂', so2, L.so2);
  out += row('氮氧化物 NOx', nox, L.nox);
  out += tr('综合结论', allOk ? '三项全部达标 ✓' : '存在超标项 ✗', allOk ? 'cr-good' : 'cr-bad', allOk ? '实测浓度均在限值之内' : '至少一项超过限值,需查设施与运行');
  out += tr('年排放总量(三项合计)', GEN._w((dust + so2 + nox) * gasM3 * hours / 1e9, 1) + ' t', '', '按实测浓度与烟气量估算,仅供量级参考');
  out += '</table>';

  if (!allOk) {
    var bad = [];
    if (dust > L.dust) bad.push('烟尘(查除尘器:电袋 / 布袋破损、比电阻、清灰周期)');
    if (so2 > L.so2) bad.push('SO₂(查脱硫:石灰石品质、浆液 pH、液气比、旁路)');
    if (nox > L.nox) bad.push('NOx(查脱硝:催化剂活性与堵塞、喷氨均匀性、温度窗口)');
    out += warn('超标项处理方向:' + bad.join(';') + '。');
  } else if (dust > L.dust * 0.8 || so2 > L.so2 * 0.8 || nox > L.nox * 0.8) {
    out += warn('虽已达标,但至少一项占限值 80 % 以上,余量偏薄。烟气量与工况一旦波动(高负荷、煤质变差、催化剂老化)就可能触碰红线,建议留足裕度。');
  }
  out += '<p class="calc-note">超低排放的「三根线」——<b>烟尘 10、SO₂ 35、NOx 50 mg/m³</b>——是燃煤机组环保改造(除尘、脱硫、脱硝)的直接目标。理解这三项要看设备链条:<b>除尘靠电除尘 / 布袋(电袋复合)</b>,<b>脱硫靠湿法石灰石-石膏(炉后)</b>,<b>脱硝靠 SCR(选择性催化还原,喷氨)</b>;而这三套设施的运行状态会随负荷、煤质、催化剂寿命持续漂移,所以「达标」不是一次性验收,而是<b>每天的运行功课</b>。注意不同标准(超低排放 / 一般限值 / 特别排放限值)与不同燃料、不同地区、不同基准氧含量下,限值差异很大,务必先确认执行口径。以上为教学口径,实际达标判定须依据现行排放标准、监测规范与在线监测数据,并以生态环境主管部门的认定为准。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
GEN.views.module = function(id) {
  var mod = GEN.modules.find(function(m) { return m.id === id; });
  if (!mod) { GEN.views.home(); return; }
  var P = GEN.progress();
  var lessons = GEN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + GEN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + GEN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = GEN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + GEN.esc(title) + '</a>';
    else html += '<span class="title">' + GEN.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及机组参数、设计指标、环保限值、电价机制或市场规则，正文均已标注口径与适用背景，<b>内容基线为 2026 年 10 月</b>。请以现行有效的国家标准、行业标准、企业技术规定与主管部门文件为准。本站不构成工程设计、设备选型、投标报价或合规依据。</p></div>';
  html += '</div>';
  GEN.render(html);
};

/* ===== 术语 ===== */
GEN.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>发电技术名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 煤耗 / 汽轮机 / 超超临界 / 调峰 / 抽蓄 / 碳市场 / 度电成本" oninput="GEN.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(GEN.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与标准规范、设备手册中的正式定义可能存在简化差异。涉及具体参数与适用时请查阅标准原文与专业资料。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  GEN.render(html);
};
GEN.filterTerms = function(q) {
  var filtered = GEN.terms;
  if (q) { q = q.toLowerCase();
    filtered = GEN.terms.filter(function(t) {
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
    html += '<div class="term-name">' + GEN.esc(t.name) + ' <span class="term-en">' + GEN.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + GEN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + GEN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
GEN.views.myTerms = function() {
  var P = GEN.progress(); var collected = [];
  for (var i = 0; i < GEN.terms.length; i++) if (P.hasTerm(GEN.terms[i].id)) collected.push(GEN.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  GEN.render(html);
};

/* ===== 搜索 ===== */
GEN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 煤耗 / 超超临界 / 调峰 / 抽蓄 / 碳市场 / 度电成本" oninput="GEN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  GEN.render(html);
};
GEN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = GEN.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + GEN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + GEN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
GEN.views.settings = function() {
  var P = GEN.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="GEN.setTheme(\'dark\')">深色 · 炉火亮橙</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="GEN.setTheme(\'light\')">浅色 · 炉火橙红</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="GEN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="GEN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="GEN.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = GEN.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/gen-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/gen-progress" value="' + GEN.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + GEN.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + GEN.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + GEN.esc(GEN.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="GEN.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="GEN.clearData()">清除数据</button></div>';
  html += '</div>';
  GEN.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    GEN.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!GEN.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    GEN.sync.pullNow().then(function () { return GEN.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + GEN.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    GEN.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : GEN.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    GEN.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
GEN.setTheme = function(t) { document.documentElement.dataset.theme = t; GEN.progress().setPref('theme', t); GEN.views.settings(); };
GEN.setFontSize = function(s) { document.documentElement.dataset.fs = s; GEN.progress().setPref('fontSize', s); GEN.views.settings(); };
GEN.exportData = function() {
  var data = GEN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gen-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
GEN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('gen.progress.v1');
    window.location.reload();
  }
};
