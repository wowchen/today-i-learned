/* 工具视图:七件 AI 算力基础设施与算电协同互动工具(Token 成本 / PUE 与电费 / 机柜功率密度与散热选型 /
   智算中心选址评分 / 绿电直供经济性 / 算电协同收益 / 算力 TCO)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、采购、投资或合规依据。 */
window.AIC = window.AIC || {};
AIC.views = AIC.views || {};

AIC._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
AIC._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
AIC._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
AIC.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">算力的事,光看架构图不算懂。这七个工具把课里的口径变成可拨动的数字:<b>每百万 token 到底摊多少钱(Token 成本测算)、机房能效从哪省(PUE 与电费测算)、一个柜子该风冷还是液冷(机柜功率密度与散热选型)、这片地适不适合建智算中心(选址评分)、绿电直供划不划算(直供经济性测算)、让算力跟着电走能挣多少(算电协同收益)、整个项目从买到用一共花多少(算力 TCO)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的芯片与互联规格、网络拓扑、供电与制冷方案、电价机制、政策口径与厂商报价等细节。<b>不作为工程设计、采购、投资或合规依据。</b>实际项目须以厂商正式方案、现场条件、现行有效标准与主管部门文件为准。</p>';
  html += '</div>';

  // 1. Token 成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>Token 成本测算器</h3>';
  html += '<p class="lab-desc">算力最常被问的一句是「每百万 token 多少钱」。填入卡数、功耗、采购价与吞吐,看<b>单卡年电费、年折旧、每百万 token 综合成本,以及电费占了几成</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>加速卡数量(张)<input type="number" id="tk-cards" step="8" value="100" min="0" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>单卡功率(kW)<input type="number" id="tk-pw" step="0.1" value="0.7" min="0" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>单卡采购价(万元)<input type="number" id="tk-price" step="1" value="20" min="0" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>折旧年限(年)<input type="number" id="tk-life" step="1" value="3" min="0.1" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>机房 PUE<input type="number" id="tk-pue" step="0.01" value="1.3" min="1" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>电价(元/kWh)<input type="number" id="tk-elec" step="0.05" value="0.6" min="0" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>单卡有效吞吐(token/s)<input type="number" id="tk-tps" step="100" value="1500" min="0" oninput="AIC.calcTokenCost()"></label>';
  html += '<label>卡利用率(%)<input type="number" id="tk-util" step="5" value="60" min="0" max="100" oninput="AIC.calcTokenCost()"></label>';
  html += '</div>';
  html += '<div id="tk-result" class="calc-result"></div>';
  html += '</div>';

  // 2. PUE 与电费测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">%</span>PUE 与电费测算器</h3>';
  html += '<p class="lab-desc">PUE 是机房能效的那把尺子。填入 IT 与制冷、供配电、辅助用电,看<b>PUE 是多少、一年电费多少、制冷占了几成,以及 PUE 每降 0.1 能省多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>IT 设备功率(kW)<input type="number" id="pu-it" step="100" value="5000" min="0" oninput="AIC.calcPue()"></label>';
  html += '<label>制冷功率(kW)<input type="number" id="pu-cool" step="50" value="1300" min="0" oninput="AIC.calcPue()"></label>';
  html += '<label>供配电损耗(kW)<input type="number" id="pu-loss" step="10" value="300" min="0" oninput="AIC.calcPue()"></label>';
  html += '<label>其他辅助用电(kW)<input type="number" id="pu-other" step="10" value="100" min="0" oninput="AIC.calcPue()"></label>';
  html += '<label>电价(元/kWh)<input type="number" id="pu-elec" step="0.05" value="0.6" min="0" oninput="AIC.calcPue()"></label>';
  html += '<label>年运行小时(h)<input type="number" id="pu-hours" step="100" value="8760" min="0" oninput="AIC.calcPue()"></label>';
  html += '</div>';
  html += '<div id="pu-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 机柜功率密度与散热选型器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>机柜功率密度与散热选型器</h3>';
  html += '<p class="lab-desc">一台柜子塞多少张卡,直接决定它是风冷还是液冷。填入单柜配置与机柜数,看<b>单柜功率密度、总 IT 功率,以及该走风冷、冷板还是浸没</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>单柜加速卡数(张)<input type="number" id="rd-cards" step="1" value="8" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '<label>单卡功耗(kW)<input type="number" id="rd-card" step="0.1" value="0.7" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '<label>其他设备功耗(kW/柜)<input type="number" id="rd-other" step="0.1" value="1.5" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '<label>机柜数量(个)<input type="number" id="rd-racks" step="1" value="50" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '<label>风冷单柜上限(kW)<input type="number" id="rd-airmax" step="1" value="20" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '<label>冷板液冷单柜上限(kW)<input type="number" id="rd-cpmax" step="5" value="50" min="0" oninput="AIC.calcRackDensity()"></label>';
  html += '</div>';
  html += '<div id="rd-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 智算中心选址评分器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>智算中心选址评分器</h3>';
  html += '<p class="lab-desc">选址不是只看地价。给电力条件、网络时延、气候、政策电价、人才运维五项打分并配权重,看<b>加权总分、评级,以及哪一项才是短板</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>电力条件评分(1~5)<input type="number" id="ss-p1" step="1" value="5" min="1" max="5" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>　　权重(%)<input type="number" id="ss-w1" step="5" value="30" min="0" max="100" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>网络时延评分(1~5)<input type="number" id="ss-p2" step="1" value="4" min="1" max="5" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>　　权重(%)<input type="number" id="ss-w2" step="5" value="20" min="0" max="100" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>气候条件评分(1~5)<input type="number" id="ss-p3" step="1" value="4" min="1" max="5" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>　　权重(%)<input type="number" id="ss-w3" step="5" value="15" min="0" max="100" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>政策与电价评分(1~5)<input type="number" id="ss-p4" step="1" value="4" min="1" max="5" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>　　权重(%)<input type="number" id="ss-w4" step="5" value="20" min="0" max="100" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>人才与运维评分(1~5)<input type="number" id="ss-p5" step="1" value="3" min="1" max="5" oninput="AIC.calcSiteScore()"></label>';
  html += '<label>　　权重(%)<input type="number" id="ss-w5" step="5" value="15" min="0" max="100" oninput="AIC.calcSiteScore()"></label>';
  html += '</div>';
  html += '<div id="ss-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 绿电直供经济性测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>绿电直供经济性测算器</h3>';
  html += '<p class="lab-desc">新能源电站拉一根专线直接供机房,电价便宜还能减碳。填入年用电、两种电价与专线投资,看<b>年省电费、投资回收期、年减碳量</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年用电量(万kWh)<input type="number" id="gd-load" step="1000" value="30000" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>电网电价(元/kWh)<input type="number" id="gd-grid" step="0.05" value="0.6" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>绿电直供电价(元/kWh)<input type="number" id="gd-green" step="0.05" value="0.4" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>直供比例(%)<input type="number" id="gd-ratio" step="5" value="80" min="0" max="100" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>专线投资(万元)<input type="number" id="gd-invest" step="500" value="5000" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>运营年限(年)<input type="number" id="gd-years" step="1" value="20" min="0.1" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>电网碳因子(tCO2/万kWh)<input type="number" id="gd-cf" step="0.1" value="5.5" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '<label>绿电碳因子(tCO2/万kWh)<input type="number" id="gd-cfg" step="0.1" value="0.5" min="0" oninput="AIC.calcGreenDirect()"></label>';
  html += '</div>';
  html += '<div id="gd-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 算电协同收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌁</span>算电协同收益测算器</h3>';
  html += '<p class="lab-desc">算力负荷能屈能伸,把弹性用起来就是钱。填入可调负荷、可调时长与峰谷价差,看<b>削峰填谷收益、需求响应收益,以及摊到每百万 token 上省了多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可调节算力负荷(kW)<input type="number" id="sy-flex" step="500" value="5000" min="0" oninput="AIC.calcSynergy()"></label>';
  html += '<label>年可调节小时(h)<input type="number" id="sy-hours" step="100" value="1500" min="0" oninput="AIC.calcSynergy()"></label>';
  html += '<label>峰谷价差(元/kWh)<input type="number" id="sy-spread" step="0.05" value="0.6" min="0" oninput="AIC.calcSynergy()"></label>';
  html += '<label>需求响应补偿(元/kW/年)<input type="number" id="sy-dr" step="20" value="200" min="0" oninput="AIC.calcSynergy()"></label>';
  html += '<label>参与率(%)<input type="number" id="sy-rate" step="5" value="70" min="0" max="100" oninput="AIC.calcSynergy()"></label>';
  html += '<label>年 token 产出(亿)<input type="number" id="sy-tokens" step="500" value="5000" min="0" oninput="AIC.calcSynergy()"></label>';
  html += '</div>';
  html += '<div id="sy-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 算力 TCO 测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊹</span>算力 TCO 测算器</h3>';
  html += '<p class="lab-desc">买卡只是开头,电费和运维才是长跑。填入三类投资、年运营与产出,看<b>全周期总拥有成本、资本与运营的占比,以及每百万 token 的 TCO</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>加速卡投资(万元)<input type="number" id="tco-chip" step="500" value="4000" min="0" oninput="AIC.calcTco()"></label>';
  html += '<label>服务器与网络投资(万元)<input type="number" id="tco-srv" step="500" value="2000" min="0" oninput="AIC.calcTco()"></label>';
  html += '<label>机房与供电投资(万元)<input type="number" id="tco-dc" step="500" value="3000" min="0" oninput="AIC.calcTco()"></label>';
  html += '<label>年电费(万元)<input type="number" id="tco-elec" step="100" value="800" min="0" oninput="AIC.calcTco()"></label>';
  html += '<label>年运维费(万元)<input type="number" id="tco-om" step="50" value="200" min="0" oninput="AIC.calcTco()"></label>';
  html += '<label>运营年限(年)<input type="number" id="tco-life" step="1" value="5" min="0.1" oninput="AIC.calcTco()"></label>';
  html += '<label>年 token 产出(亿)<input type="number" id="tco-tokens" step="500" value="5000" min="0" oninput="AIC.calcTco()"></label>';
  html += '</div>';
  html += '<div id="tco-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,参数取行业常见量级概数,单价与比率为示例值。<b>实际项目必须依据芯片与整机规格、机房条件、电价与市场规则单独核算</b>,本工具结果不作为工程设计、采购、投资或合规依据。</p>';
  html += '</div>';
  AIC.render(html);
  AIC.calcTokenCost(); AIC.calcPue(); AIC.calcRackDensity(); AIC.calcSiteScore();
  AIC.calcGreenDirect(); AIC.calcSynergy(); AIC.calcTco();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. Token 成本 ---- */
AIC.calcTokenCost = function() {
  var el = document.getElementById('tk-result');
  if (!el) return;
  var cards = AIC._num('tk-cards'), pw = AIC._num('tk-pw'), price = AIC._num('tk-price');
  var life = AIC._num('tk-life'), pue = AIC._num('tk-pue'), elec = AIC._num('tk-elec');
  var tps = AIC._num('tk-tps'), util = AIC._num('tk-util');
  if (cards === null || pw === null || price === null || life === null || pue === null || elec === null || tps === null || util === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (cards < 0 || pw < 0 || price < 0 || life <= 0 || pue < 1 || elec < 0 || tps < 0 || util < 0 || util > 100) {
    el.innerHTML = warn('参数超出合理范围:PUE 不小于 1,折旧年限需大于 0,利用率在 0~100% 之间。'); return;
  }

  var itKw = cards * pw;                          // IT 功率(kW)
  var totalKw = itKw * pue;                       // 含制冷与损耗的总功率
  var u = util / 100;
  var kwh = totalKw * 8760 * u;                   // 年耗电量(kWh)
  var elecCost = kwh * elec;                      // 年电费(元)
  var dep = cards * price * 10000 / life;         // 年折旧(元)
  var total = elecCost + dep;                     // 年总成本(元)
  var tokens = cards * tps * u * 3600 * 8760;     // 年产出 token 数
  var perM = tokens > 0 ? total / (tokens / 1e6) : 0;
  var elecShare = total > 0 ? elecCost / total * 100 : 0;
  var elecPerM = tokens > 0 ? elecCost / (tokens / 1e6) : 0;
  var depPerM = tokens > 0 ? dep / (tokens / 1e6) : 0;

  var out = '<table class="cr-table">';
  out += tr('IT 功率', AIC._w(itKw, 1) + ' kW', '', AIC._w(cards, 0) + ' 张 × ' + AIC._fix(pw, 2) + ' kW');
  out += tr('含 PUE 总功率', AIC._w(totalKw, 1) + ' kW', '', 'IT 功率 × PUE ' + AIC._fix(pue, 2));
  out += tr('年耗电量', AIC._w(kwh / 10000, 1) + ' 万kWh', '', '总功率 × 8760 h × 利用率 ' + AIC._fix(util, 0) + '%');
  out += tr('年电费', AIC._w(elecCost / 10000, 1) + ' 万元', '', AIC._w(kwh, 0) + ' kWh × ' + AIC._fix(elec, 2) + ' 元/kWh');
  out += tr('年折旧', AIC._w(dep / 10000, 1) + ' 万元', '', '卡数 × 单价 ÷ 折旧年限');
  out += tr('年总成本', AIC._w(total / 10000, 1) + ' 万元', '', '年电费 + 年折旧');
  out += tr('年产出 token', AIC._w(tokens / 1e12, 2) + ' 万亿', '', '卡数 × 吞吐 × 利用率 × 3600 × 8760');
  out += tr('每百万 token 成本', AIC._fix(perM, 2) + ' 元', 'cr-good', '年总成本 ÷ 年 token 数(百万)');
  out += tr('其中电费', AIC._fix(elecPerM, 2) + ' 元/百万token', '', '电费占 ' + AIC._fix(elecShare, 1) + '%');
  out += tr('其中折旧', AIC._fix(depPerM, 2) + ' 元/百万token', '', '折旧占 ' + AIC._fix(100 - elecShare, 1) + '%');
  out += '</table>';
  if (util < 40) {
    out += warn('利用率仅 ' + AIC._fix(util, 0) + '%,卡买来了却大半时间闲着,单 token 成本被折旧摊得很高。提升利用率往往比压电价更有效。');
  }
  if (elecShare > 50) {
    out += warn('电费已占总成本 ' + AIC._fix(elecShare, 1) + '%,机房能效(PUE)与电价成了主要变量,优先想办法降 PUE、找低价电源。');
  }
  out += '<p class="calc-note">这个工具的要点:<b>单 token 成本 = (电费 + 折旧) ÷ 产出 token 数,而分子分母都随利用率变化</b>。利用率低,分母被摊薄得厉害,分母一小,单价就高;利用率高,同样的电费与折旧能摊到更多 token 上。所以降本有两条腿——<b>一是把每 token 的能耗压下去(能效、量化、推理优化),二是把卡的利用率提上来(连续批处理、任务调度、混部)</b>。电费与折旧谁占大头,取决于电价、卡价与年限,可以拨动参数看结构变化。以上为教学口径,未计入网络、机房分摊与运维人力,实际核算须叠加这些项。</p>';
  el.innerHTML = out;
};

/* ---- 2. PUE 与电费 ---- */
AIC.calcPue = function() {
  var el = document.getElementById('pu-result');
  if (!el) return;
  var it = AIC._num('pu-it'), cool = AIC._num('pu-cool'), loss = AIC._num('pu-loss');
  var other = AIC._num('pu-other'), elec = AIC._num('pu-elec'), hours = AIC._num('pu-hours');
  if (it === null || cool === null || loss === null || other === null || elec === null || hours === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (it <= 0) { el.innerHTML = warn('IT 设备功率需大于 0(PUE 的分母是 IT 用电)。'); return; }
  if (cool < 0 || loss < 0 || other < 0 || elec < 0 || hours < 0) { el.innerHTML = warn('数值不能为负。'); return; }

  var overhead = cool + loss + other;
  var totalKw = it + overhead;
  var pue = totalKw / it;
  var kwh = totalKw * hours;
  var cost = kwh * elec;
  var coolShare = totalKw > 0 ? cool / totalKw * 100 : 0;
  var lossShare = totalKw > 0 ? loss / totalKw * 100 : 0;
  var otherShare = totalKw > 0 ? other / totalKw * 100 : 0;
  var itShare = totalKw > 0 ? it / totalKw * 100 : 0;
  var save01 = it * 0.1 * hours * elec;          // PUE 降 0.1 的年节省

  var out = '<table class="cr-table">';
  out += tr('IT 设备用电', AIC._w(it, 0) + ' kW', '', '真正在算的那部分,占 ' + AIC._fix(itShare, 1) + '%');
  out += tr('制冷用电', AIC._w(cool, 0) + ' kW', '', '占 ' + AIC._fix(coolShare, 1) + '%');
  out += tr('供配电损耗', AIC._w(loss, 0) + ' kW', '', '占 ' + AIC._fix(lossShare, 1) + '%');
  out += tr('其他辅助用电', AIC._w(other, 0) + ' kW', '', '占 ' + AIC._fix(otherShare, 1) + '%');
  out += tr('总用电', AIC._w(totalKw, 0) + ' kW', '', 'IT + 制冷 + 损耗 + 其他');
  out += tr('PUE', AIC._fix(pue, 3), pue > 1.5 ? 'cr-bad' : (pue <= 1.25 ? 'cr-good' : ''), '总用电 ÷ IT 用电,越接近 1 越省');
  out += tr('年耗电量', AIC._w(kwh / 10000, 1) + ' 万kWh', '', '总功率 × ' + AIC._w(hours, 0) + ' h');
  out += tr('年电费', AIC._w(cost / 10000, 1) + ' 万元', '', AIC._w(kwh, 0) + ' kWh × ' + AIC._fix(elec, 2) + ' 元/kWh');
  out += tr('PUE 每降 0.1 年节省', AIC._w(save01 / 10000, 1) + ' 万元', 'cr-good', 'IT 功率 × 0.1 × 年小时 × 电价');
  out += '</table>';
  if (pue > 1.5) {
    out += warn('PUE ' + AIC._fix(pue, 2) + ' 偏高,制冷与损耗吃掉了大量电。优先查制冷效率、气流组织与供配电链路,并评估液冷改造。');
  } else if (pue <= 1.25) {
    out += warn('PUE ' + AIC._fix(pue, 2) + ' 已相当好,继续压 PUE 的边际收益会递减,可把精力转向提升 IT 设备的实际利用率。');
  }
  out += '<p class="calc-note">PUE 只衡量「电用在哪」,不衡量「电用得值不值」,这是它的天然短板:<b>一台满负荷的机器 PUE 再低,如果算力闲置也是浪费</b>。所以现在业内更强调把 PUE 与利用率一起看——有的口径甚至用「总用电 ÷ 有效算力产出」来衡量真实效率。此外,PUE 受气候影响很大,同样方案在寒冷地区能靠自然冷却把 PUE 压到很低,在炎热地区则难。以上为教学口径,实际 PUE 须按标准方法在稳定工况下实测。</p>';
  el.innerHTML = out;
};

/* ---- 3. 机柜功率密度与散热选型 ---- */
AIC.calcRackDensity = function() {
  var el = document.getElementById('rd-result');
  if (!el) return;
  var cards = AIC._num('rd-cards'), card = AIC._num('rd-card'), other = AIC._num('rd-other');
  var racks = AIC._num('rd-racks'), airMax = AIC._num('rd-airmax'), cpMax = AIC._num('rd-cpmax');
  if (cards === null || card === null || other === null || racks === null || airMax === null || cpMax === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (cards < 0 || card < 0 || other < 0 || racks < 0 || airMax <= 0 || cpMax <= 0) {
    el.innerHTML = warn('数值不能为负,散热上限需大于 0。'); return;
  }

  var perRack = cards * card + other;            // 单柜功率密度(kW)
  var totalKw = perRack * racks;
  var mode, modeCls, modeNote;
  if (perRack <= airMax) {
    mode = '风冷'; modeCls = 'cr-good'; modeNote = '单柜密度未超风冷上限,常规风冷可覆盖';
  } else if (perRack <= cpMax) {
    mode = '冷板液冷'; modeCls = ''; modeNote = '已超风冷上限,建议冷板液冷(改造量相对小)';
  } else {
    mode = '浸没式液冷'; modeCls = 'cr-bad'; modeNote = '超出冷板上限,需浸没式或更高规格液冷';
  }
  var airRatio = airMax > 0 ? perRack / airMax * 100 : 0;
  var heat = totalKw;                            // 近似全部电能转为热量
  var liquidKw = Math.max(0, perRack - airMax) * racks;  // 超出风冷上限、需要液冷带走的部分
  var airKw = totalKw - liquidKw;

  var out = '<table class="cr-table">';
  out += tr('单柜功率密度', AIC._fix(perRack, 2) + ' kW/柜', perRack > airMax ? 'cr-bad' : 'cr-good', AIC._w(cards, 0) + ' 张 × ' + AIC._fix(card, 2) + ' + 其他 ' + AIC._fix(other, 2) + ' kW');
  out += tr('总 IT 功率', AIC._w(totalKw, 1) + ' kW', '', AIC._w(perRack, 2) + ' kW/柜 × ' + AIC._w(racks, 0) + ' 柜');
  out += tr('风冷上限占用', AIC._fix(airRatio, 0) + ' %', airRatio > 100 ? 'cr-bad' : (airRatio > 80 ? '' : 'cr-good'), '单柜密度 ÷ 风冷上限 ' + AIC._fix(airMax, 1) + ' kW');
  out += tr('推荐散热方式', mode, modeCls, modeNote);
  out += tr('需液冷带走的功率', AIC._w(liquidKw, 1) + ' kW', liquidKw > 0 ? 'cr-bad' : 'cr-good', liquidKw > 0 ? '超出风冷上限的部分,必须由液冷回路承担' : '无需液冷,全部可由风冷带走');
  out += tr('风冷承担功率', AIC._w(airKw, 1) + ' kW', '', '总功率中仍由风冷处理的部分');
  out += tr('需配套冷量(约)', AIC._w(heat, 1) + ' kW', '', '近似认为电能全部转为热量,制冷量需不小于此值');
  out += '</table>';
  if (perRack > cpMax) {
    out += warn('单柜 ' + AIC._fix(perRack, 1) + ' kW 已超出冷板液冷上限,常规冷板方案不够用,须评估浸没式液冷或降低单柜配置。');
  } else if (perRack > airMax) {
    out += warn('单柜 ' + AIC._fix(perRack, 1) + ' kW 超过风冷上限,继续用风冷会热点堆积、降频甚至宕机,应上液冷。');
  }
  out += '<p class="calc-note">AI 机柜的功率密度正在快速抬升,这是液冷从「可选」变成「必选」的直接原因:<b>风冷靠空气带走热量,而空气的比热与导热能力远不如液体,单柜到二十几千瓦就逼近极限</b>。超过之后,要么冷板(把冷板贴到芯片上,液体在板内循环,改造量小、能撑到几十千瓦),要么浸没(整机泡进绝缘液,散热最强但改动大、运维习惯要重建)。选型时别只看散热上限,还要一并考虑:机房楼板承重、供配电是否跟得上、冷量分配单元(CDU)与一次侧冷源的配套。以上为教学口径,实际选型须结合芯片规格、机房条件与厂商方案,并由专业设计确认。</p>';
  el.innerHTML = out;
};

/* ---- 4. 智算中心选址评分 ---- */
AIC.calcSiteScore = function() {
  var el = document.getElementById('ss-result');
  if (!el) return;
  var names = ['电力条件', '网络时延', '气候条件', '政策与电价', '人才与运维'];
  var criteria = [], wsum = 0, valid = true;
  for (var i = 1; i <= 5; i++) {
    var p = AIC._num('ss-p' + i), w = AIC._num('ss-w' + i);
    if (p === null || w === null) { valid = false; break; }
    if (p < 1 || p > 5 || w < 0) { valid = false; break; }
    criteria.push({ name: names[i - 1], p: p, w: w });
    wsum += w;
  }
  if (!valid) { el.innerHTML = warn('请把五项评分(1~5)与权重(不小于 0)填写完整。'); return; }
  if (wsum <= 0) { el.innerHTML = warn('权重之和需大于 0。'); return; }

  var score = 0, weak = criteria[0], weakGap = 999;
  for (var j = 0; j < criteria.length; j++) {
    var c = criteria[j];
    var contrib = c.p * (c.w / wsum);
    c.contrib = contrib;
    score += contrib;
    if (c.p < weak.p || (c.p === weak.p && c.w > weak.w)) weak = c;
    var gap = 5 - c.p;
    if (gap > 0 && gap >= weakGap) { /* keep first */ }
  }
  // 找评分最低项(短板);并列时取权重更高的
  var lowP = 5, lowW = -1;
  for (var k = 0; k < criteria.length; k++) {
    if (criteria[k].p < lowP || (criteria[k].p === lowP && criteria[k].w > lowW)) {
      lowP = criteria[k].p; lowW = criteria[k].w; weak = criteria[k];
    }
  }
  var grade, gcls;
  if (score >= 4.3) { grade = '优 · 适宜建设'; gcls = 'cr-good'; }
  else if (score >= 3.6) { grade = '良 · 基本适宜'; gcls = 'cr-good'; }
  else if (score >= 3.0) { grade = '中 · 需补短板'; gcls = ''; }
  else { grade = '差 · 慎重评估'; gcls = 'cr-bad'; }
  var pct = score / 5 * 100;

  var out = '<table class="cr-table">';
  for (var m = 0; m < criteria.length; m++) {
    var cc = criteria[m];
    out += tr(cc.name, AIC._fix(cc.p, 0) + ' 分',
      cc.p <= 2 ? 'cr-bad' : (cc.p >= 4 ? 'cr-good' : ''),
      '权重 ' + AIC._fix(cc.w, 0) + '%,加权贡献 ' + AIC._fix(cc.contrib, 2) + ' 分');
  }
  out += tr('加权总分', AIC._fix(score, 2) + ' / 5', gcls, '各项评分 × 归一化权重之和');
  out += tr('折算百分制', AIC._fix(pct, 1) + ' 分', gcls, '加权总分 ÷ 5 × 100');
  out += tr('综合评级', grade, gcls, '按总分区间判定');
  out += tr('短板项', weak.name + '(' + AIC._fix(weak.p, 0) + ' 分)', 'cr-bad', '评分最低的一项,权重大时对总分拖累最大');
  out += tr('短板补齐潜在增益', '+' + AIC._fix((5 - weak.p) * (weak.w / wsum), 2) + ' 分', 'cr-good', '把该项由 ' + AIC._fix(weak.p, 0) + ' 分提到 5 分的总分增量');
  out += '</table>';
  if (weak.p <= 3) {
    out += warn('最弱项是「' + weak.name + '」(' + AIC._fix(weak.p, 0) + ' 分,权重 ' + AIC._fix(weak.w, 0) + '%)。选址决策中,单项严重短板常常一票否决,应先评估能否补齐。');
  }
  out += '<p class="calc-note">选址是加权决策,不是简单加总,所以<b>权重怎么定,比评分怎么打更关键</b>:电力和网络是智算中心的命脉,权重通常最高;气候决定能不能多靠自然冷却省电费;政策与电价影响长期成本;人才与运维决定建成后能不能稳住。工具里权重之和不必等于 100,会自动归一化。要提醒的是,评分带主观性,不同人打分可能差很多,实务中应多人独立打分再讨论,并做敏感性分析(看关键项权重变化后结论是否翻转)。以上为教学口径,不作为投资或选址依据。</p>';
  el.innerHTML = out;
};

/* ---- 5. 绿电直供经济性 ---- */
AIC.calcGreenDirect = function() {
  var el = document.getElementById('gd-result');
  if (!el) return;
  var load = AIC._num('gd-load'), grid = AIC._num('gd-grid'), green = AIC._num('gd-green');
  var ratio = AIC._num('gd-ratio'), invest = AIC._num('gd-invest'), years = AIC._num('gd-years');
  var cf = AIC._num('gd-cf'), cfg = AIC._num('gd-cfg');
  if (load === null || grid === null || green === null || ratio === null || invest === null || years === null || cf === null || cfg === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (load < 0 || grid < 0 || green < 0 || ratio < 0 || ratio > 100 || invest < 0 || years <= 0) {
    el.innerHTML = warn('参数超出合理范围:直供比例在 0~100%,运营年限需大于 0。'); return;
  }

  var greenKwh = load * ratio / 100;              // 万kWh
  var savePerKwh = grid - green;                  // 元/kWh
  var yearSave = greenKwh * 10000 * savePerKwh;   // 元
  var payback = yearSave > 0 ? invest / (yearSave / 10000) : Infinity;
  var lifeSave = yearSave * years / 10000;        // 万元
  var net = lifeSave - invest;                    // 万元
  var co2 = greenKwh * (cf - cfg);                // tCO2/年
  var lifeCo2 = co2 * years;

  var out = '<table class="cr-table">';
  out += tr('直供电量', AIC._w(greenKwh / 10000, 2) + ' 亿kWh', '', AIC._w(load, 0) + ' 万kWh × ' + AIC._fix(ratio, 0) + '%');
  out += tr('年省电费', AIC._w(yearSave / 10000, 1) + ' 万元', savePerKwh > 0 ? 'cr-good' : 'cr-bad', '(' + AIC._fix(grid, 2) + ' − ' + AIC._fix(green, 2) + ') 元/kWh × 直供电量');
  out += tr('投资回收期', (isFinite(payback) ? AIC._fix(payback, 2) + ' 年' : '不适用'), payback <= 5 ? 'cr-good' : (payback <= 10 ? '' : 'cr-bad'), '专线投资 ÷ 年省电费');
  out += tr('全周期净收益', (net >= 0 ? '' : '−') + AIC._w(Math.abs(net), 1) + ' 万元', net >= 0 ? 'cr-good' : 'cr-bad', '年省电费 × 运营年限 − 专线投资');
  out += tr('年减碳量', AIC._w(co2 / 10000, 2) + ' 万吨', co2 > 0 ? 'cr-good' : 'cr-bad', '(' + AIC._fix(cf, 1) + ' − ' + AIC._fix(cfg, 1) + ') tCO2/万kWh × 直供电量');
  out += tr('运营期累计减碳', AIC._w(lifeCo2 / 10000, 1) + ' 万吨', 'cr-good', '年减碳量 × 运营年限');
  out += '</table>';
  if (savePerKwh <= 0) {
    out += warn('绿电直供电价不低于电网电价,单看电费并不划算。绿电的价值往往还在碳收益、绿证与政策考核上,需一并考虑。');
  } else if (payback > 10) {
    out += warn('回收期 ' + AIC._fix(payback, 1) + ' 年偏长,专线投资相对电费节省偏高,建议评估分期建设或提高直供比例。');
  }
  out += '<p class="calc-note">绿电直供的钱不只在电费差上:<b>新能源发电边际成本低,直供电价常低于电网;同时用绿电能降碳足迹、拿绿证、满足能效考核,这些在政策趋严时越来越值钱</b>。但直供也有约束——新能源出力靠天,必须配储能或保留电网备用,否则供电可靠性没保障;专线建设涉及线路走廊与接入审批,周期不短。所以判断经济性,既算电费与回收期,也要把储能投资、可靠性成本与碳收益一起纳入。以上为教学口径,碳因子与电价均为示例概数,实际以项目条件与现行政策为准。</p>';
  el.innerHTML = out;
};

/* ---- 6. 算电协同收益 ---- */
AIC.calcSynergy = function() {
  var el = document.getElementById('sy-result');
  if (!el) return;
  var flex = AIC._num('sy-flex'), hours = AIC._num('sy-hours'), spread = AIC._num('sy-spread');
  var dr = AIC._num('sy-dr'), rate = AIC._num('sy-rate'), tokens = AIC._num('sy-tokens');
  if (flex === null || hours === null || spread === null || dr === null || rate === null || tokens === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (flex < 0 || hours < 0 || spread < 0 || dr < 0 || rate < 0 || rate > 100 || tokens < 0) {
    el.innerHTML = warn('参数超出合理范围:参与率在 0~100%。'); return;
  }

  var r = rate / 100;
  var peakValley = flex * hours * spread * r;              // 元/年 (kW × h = kWh, × 元/kWh = 元)
  var drVal = flex * dr * r;                                // 元/年
  var totalVal = peakValley + drVal;                        // 元/年
  var perM = tokens > 0 ? totalVal / (tokens * 1e8 / 1e6) : 0;  // 元/百万token
  var pvShare = totalVal > 0 ? peakValley / totalVal * 100 : 0;
  var drShare = totalVal > 0 ? drVal / totalVal * 100 : 0;

  var out = '<table class="cr-table">';
  out += tr('有效可调负荷', AIC._w(flex * r, 0) + ' kW', '', '可调负荷 × 参与率 ' + AIC._fix(rate, 0) + '%');
  out += tr('削峰填谷年收益', AIC._w(peakValley / 10000, 1) + ' 万元', peakValley > 0 ? 'cr-good' : '', '可调负荷 × 可调小时 × 峰谷价差');
  out += tr('需求响应年收益', AIC._w(drVal / 10000, 1) + ' 万元', drVal > 0 ? 'cr-good' : '', '可调负荷 × 补偿单价 × 参与率');
  out += tr('综合年收益', AIC._w(totalVal / 10000, 1) + ' 万元', totalVal > 0 ? 'cr-good' : 'cr-bad', '削峰填谷 + 需求响应');
  out += tr('收益结构', '削峰 ' + AIC._fix(pvShare, 0) + '% / 响应 ' + AIC._fix(drShare, 0) + '%', '', '两项收益各占多少');
  out += tr('折算到每百万 token', AIC._fix(perM, 3) + ' 元', totalVal > 0 ? 'cr-good' : '', '综合年收益 ÷ 年 token 数(百万)');
  out += tr('单位可调负荷年收益', AIC._w(flex > 0 ? totalVal / (flex * r) : 0, 0) + ' 元/kW', '', '综合年收益 ÷ 有效可调负荷');
  out += '</table>';
  if (rate < 50) {
    out += warn('参与率仅 ' + AIC._fix(rate, 0) + '%,说明真正能灵活调节的负荷有限。提高参与率的关键是让更多任务变成可中断、可延迟的。');
  }
  if (spread <= 0 && dr <= 0) {
    out += warn('峰谷价差与响应补偿都为 0,当前没有可套利的价差空间,收益为 0。');
  }
  out += '<p class="calc-note">算电协同的收益,本质是把算力的「时间弹性」卖给电力系统:<b>可延迟的推理与训练任务,可以安排在电价低谷或绿电富余时段跑,既省电费(削峰填谷),又能响应电网邀约拿补偿(需求响应)</b>。衡量协同好不好,不只看绝对收益,更看「单位可调负荷能挣多少」——它反映这片算力的弹性价值有多高。要注意两点:一是并非所有任务都能延迟,在线推理往往要求即时,真正可调的是离线训练与批处理;二是收益依赖价差与补偿机制,同一套算力在不同电价政策下差别很大。以上为教学口径,实际收益须结合当地电价政策、市场规则与任务特性核算。</p>';
  el.innerHTML = out;
};

/* ---- 7. 算力 TCO ---- */
AIC.calcTco = function() {
  var el = document.getElementById('tco-result');
  if (!el) return;
  var chip = AIC._num('tco-chip'), srv = AIC._num('tco-srv'), dc = AIC._num('tco-dc');
  var elec = AIC._num('tco-elec'), om = AIC._num('tco-om'), life = AIC._num('tco-life'), tokens = AIC._num('tco-tokens');
  if (chip === null || srv === null || dc === null || elec === null || om === null || life === null || tokens === null) {
    el.innerHTML = warn('请把全部参数填写完整。'); return;
  }
  if (chip < 0 || srv < 0 || dc < 0 || elec < 0 || om < 0 || life <= 0 || tokens < 0) {
    el.innerHTML = warn('数值不能为负,运营年限需大于 0。'); return;
  }

  var capex = chip + srv + dc;                 // 万元
  var opexYear = elec + om;                    // 万元/年
  var opex = opexYear * life;                  // 万元
  var tco = capex + opex;                      // 万元
  var capexShare = tco > 0 ? capex / tco * 100 : 0;
  var opexShare = tco > 0 ? opex / tco * 100 : 0;
  var totalTokens = tokens * life;             // 亿
  var perM = totalTokens > 0 ? tco * 10000 / (totalTokens * 1e8 / 1e6) : 0;  // 元/百万token
  var chipShare = capex > 0 ? chip / capex * 100 : 0;
  var elecPerYearPerK = opexYear > 0 ? elec / opexYear * 100 : 0;

  var out = '<table class="cr-table">';
  out += tr('资本支出 CAPEX', AIC._w(capex, 0) + ' 万元', '', '卡 + 服务器与网络 + 机房与供电,占 TCO ' + AIC._fix(capexShare, 1) + '%');
  out += tr('　加速卡', AIC._w(chip, 0) + ' 万元', '', '占 CAPEX ' + AIC._fix(chipShare, 1) + '%');
  out += tr('　服务器与网络', AIC._w(srv, 0) + ' 万元', '', '整机、交换与互联');
  out += tr('　机房与供电', AIC._w(dc, 0) + ' 万元', '', '配电、UPS、制冷与土建分摊');
  out += tr('运营支出 OPEX', AIC._w(opex, 0) + ' 万元', '', AIC._w(opexYear, 0) + ' 万元/年 × ' + AIC._fix(life, 0) + ' 年,占 TCO ' + AIC._fix(opexShare, 1) + '%');
  out += tr('全周期 TCO', AIC._w(tco, 0) + ' 万元', '', 'CAPEX + OPEX');
  out += tr('运营期 token 产出', AIC._w(totalTokens / 10000, 2) + ' 万亿', '', AIC._w(tokens, 0) + ' 亿/年 × ' + AIC._fix(life, 0) + ' 年');
  out += tr('每百万 token TCO', AIC._fix(perM, 2) + ' 元', 'cr-good', 'TCO ÷ 运营期 token 数(百万)');
  out += tr('年电费占运营', AIC._fix(elecPerYearPerK, 0) + ' %', elecPerYearPerK > 70 ? 'cr-bad' : '', '电费 ÷ (电费 + 运维)');
  out += '</table>';
  if (elecPerYearPerK > 70) {
    out += warn('电费占运营支出 ' + AIC._fix(elecPerYearPerK, 0) + '%,是长期成本的主项。降低 PUE、争取低价电源对全周期 TCO 影响很大。');
  }
  if (capexShare < 50) {
    out += warn('运营支出占比已达 ' + AIC._fix(opexShare, 0) + '%,说明这不是「买完就完」的一次性投入,长期运营能力比采购价格更关键。');
  }
  out += '<p class="calc-note">TCO 的意义在于把「买卡」这件事放到全周期里看:<b>加速卡只是 CAPEX 的一部分,运营期的电费与运维会逐年累积,运营年限越长,OPEX 占比越高</b>。很多算力项目立项时只盯着硬件采购价,忽略了电费与运维的长尾,结果投入产出算不平。另外要区分两种口径:一种是「总投入 ÷ 总算力产出」看摊销成本,另一种是「投产时的单位算力投资」看起步门槛,两者用途不同别混用。以上为教学口径,未计融资成本、芯片残值、网络带宽费与软件授权,实际 TCO 须按项目财务模型测算。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
AIC.views.module = function(id) {
  var mod = AIC.modules.find(function(m) { return m.id === id; });
  if (!mod) { AIC.views.home(); return; }
  var P = AIC.progress();
  var lessons = AIC.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + AIC.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + AIC.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = AIC.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + AIC.esc(title) + '</a>';
    else html += '<span class="title">' + AIC.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及芯片与互联标准、能效与政策口径、电价机制或算力市场价格，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>。请以现行有效的国家标准、行业标准、主管部门文件与厂商正式方案为准。本站不构成工程设计、采购、投资或合规依据。</p></div>';
  html += '</div>';
  AIC.render(html);
};

/* ===== 术语 ===== */
AIC.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>算力与算电术语速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 算力 / Token / PUE / 液冷 / 东数西算 / 算电协同 / 超节点" oninput="AIC.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(AIC.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与标准文件、厂商文档中的正式定义可能存在简化差异。涉及具体适用时请查阅标准原文与专业资料。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  AIC.render(html);
};
AIC.filterTerms = function(q) {
  var filtered = AIC.terms;
  if (q) { q = q.toLowerCase();
    filtered = AIC.terms.filter(function(t) {
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
    html += '<div class="term-name">' + AIC.esc(t.name) + ' <span class="term-en">' + AIC.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + AIC.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + AIC.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
AIC.views.myTerms = function() {
  var P = AIC.progress(); var collected = [];
  for (var i = 0; i < AIC.terms.length; i++) if (P.hasTerm(AIC.terms[i].id)) collected.push(AIC.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  AIC.render(html);
};

/* ===== 搜索 ===== */
AIC.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 算力 / 加速卡 / 液冷 / PUE / 东数西算 / 算电协同 / Token 成本" oninput="AIC.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  AIC.render(html);
};
AIC.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AIC.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + AIC.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + AIC.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
AIC.views.settings = function() {
  var P = AIC.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="AIC.setTheme(\'dark\')">深色 · 电光青</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="AIC.setTheme(\'light\')">浅色 · 冷白青</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="AIC.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="AIC.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="AIC.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = AIC.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/aic-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/aic-progress" value="' + AIC.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + AIC.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + AIC.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + AIC.esc(AIC.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="AIC.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="AIC.clearData()">清除数据</button></div>';
  html += '</div>';
  AIC.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    AIC.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!AIC.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    AIC.sync.pullNow().then(function () { return AIC.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + AIC.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    AIC.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : AIC.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    AIC.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
AIC.setTheme = function(t) { document.documentElement.dataset.theme = t; AIC.progress().setPref('theme', t); AIC.views.settings(); };
AIC.setFontSize = function(s) { document.documentElement.dataset.fs = s; AIC.progress().setPref('fontSize', s); AIC.views.settings(); };
AIC.exportData = function() {
  var data = AIC.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'aic-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AIC.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('aic.progress.v1');
    window.location.reload();
  }
};
