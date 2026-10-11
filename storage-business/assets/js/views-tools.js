/* 工具视图:七件储能商业模式互动工具(收益测算 / LCOS 度电成本 / 容量与功率配置 / 辅助服务收益 / 共享储能分摊 / EMC 分成 / 投资回报)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成投资、交易、报价或结算依据。 */
window.ESB = window.ESB || {};
ESB.views = ESB.views || {};

ESB._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
ESB._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
ESB._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
ESB.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">储能这件事,很多账可以先算一算:<b>一年能挣多少、度电成本到底几毛、该配多大容量和功率、靠辅助服务能挣多少、一座共享储能怎么分摊给多个用户、和业主怎么分成、这笔投资几年回本</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:电价、单价、租赁价格与运维成本为便于理解的示例概数,不体现真实的电价政策、市场规则、调用情况与项目财务模型。<b>不作为投资测算、项目决策、报价、财务或结算依据。</b>实际项目须以现行价格文件、真实市场数据与企业台账为准。</p>';
  html += '</div>';

  // 1. 储能收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>储能收益测算器</h3>';
  html += '<p class="lab-desc">一座储能一年能挣多少?填容量、价差与租赁和辅助服务收入,看<b>日套利、年套利、各部分收益与合计,以及摊到每度电的收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>储能容量(MWh)<input type="number" id="sr-cap" step="0.5" value="2" min="0" oninput="ESB.calcStorageRevenue()"></label>';
  html += '<label>循环效率(%)<input type="number" id="sr-eff" step="1" value="88" min="0" max="100" oninput="ESB.calcStorageRevenue()"></label>';
  html += '<label>年运行天数(天)<input type="number" id="sr-days" step="10" value="330" min="0" max="366" oninput="ESB.calcStorageRevenue()"></label>';
  html += '<label>峰谷价差(元/kWh)<input type="number" id="sr-spread" step="0.05" value="0.7" min="0" oninput="ESB.calcStorageRevenue()"></label>';
  html += '<label>年容量租赁收入(万元)<input type="number" id="sr-lease" step="1" value="30" min="0" oninput="ESB.calcStorageRevenue()"></label>';
  html += '<label>年辅助服务收入(万元)<input type="number" id="sr-anc" step="1" value="20" min="0" oninput="ESB.calcStorageRevenue()"></label>';
  html += '</div>';
  html += '<div id="sr-result" class="calc-result"></div>';
  html += '</div>';

  // 2. LCOS 度电成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◧</span>LCOS 度电成本测算器</h3>';
  html += '<p class="lab-desc">这套储能每倒腾一度电到底花多少钱?填单位投资、运维、年限与循环次数,看<b>投资年化、年总成本、LCOS 以及与峰谷价差比是否划算</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>单位投资(元/kWh)<input type="number" id="lc-invest" step="50" value="1200" min="0" oninput="ESB.calcLcos()"></label>';
  html += '<label>年运维成本(元/kWh·年)<input type="number" id="lc-om" step="1" value="25" min="0" oninput="ESB.calcLcos()"></label>';
  html += '<label>项目年限(年)<input type="number" id="lc-life" step="1" value="10" min="1" oninput="ESB.calcLcos()"></label>';
  html += '<label>年循环次数(次)<input type="number" id="lc-cycles" step="10" value="330" min="0" oninput="ESB.calcLcos()"></label>';
  html += '<label>放电深度(%)<input type="number" id="lc-dod" step="5" value="90" min="0" max="100" oninput="ESB.calcLcos()"></label>';
  html += '<label>循环效率(%)<input type="number" id="lc-eff" step="1" value="88" min="0" max="100" oninput="ESB.calcLcos()"></label>';
  html += '<label>折现率(%)<input type="number" id="lc-rate" step="0.5" value="6" min="0" oninput="ESB.calcLcos()"></label>';
  html += '<label>参考峰谷价差(元/kWh)<input type="number" id="lc-spread" step="0.05" value="0.7" min="0" oninput="ESB.calcLcos()"></label>';
  html += '</div>';
  html += '<div id="lc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 储能容量与功率配置测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇥</span>储能容量与功率配置测算器</h3>';
  html += '<p class="lab-desc">想削掉 300 kW 的峰,要配多大电池?填目标削峰功率与时长,看<b>所需功率与容量、需量电费节省、套利收益、合计收益与静态回收期</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>目标削峰功率(kW)<input type="number" id="sz-shave" step="10" value="300" min="0" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>持续时长(h)<input type="number" id="sz-duration" step="0.5" value="2" min="0" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>放电深度(%)<input type="number" id="sz-dod" step="5" value="90" min="0" max="100" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>循环效率(%)<input type="number" id="sz-eff" step="1" value="88" min="0" max="100" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>需量电价(元/kW·月)<input type="number" id="sz-demandprice" step="5" value="40" min="0" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>峰谷价差(元/kWh)<input type="number" id="sz-spread" step="0.05" value="0.7" min="0" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>年运行天数(天)<input type="number" id="sz-days" step="10" value="330" min="0" max="366" oninput="ESB.calcStorageSizing()"></label>';
  html += '<label>单位投资(元/kWh)<input type="number" id="sz-unitcost" step="50" value="1200" min="0" oninput="ESB.calcStorageSizing()"></label>';
  html += '</div>';
  html += '<div id="sz-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 辅助服务收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>辅助服务收益测算器</h3>';
  html += '<p class="lab-desc">让储能去给电网打下手,一年能挣多少?填可调容量、调节里程与考核系数,看<b>容量补偿、里程补偿、考核折减与合计,以及折算到单位容量的收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可调节容量(MW)<input type="number" id="ai-cap" step="1" value="10" min="0" oninput="ESB.calcAncillaryIncome()"></label>';
  html += '<label>年调节里程(万 kWh)<input type="number" id="ai-mileage" step="10" value="500" min="0" oninput="ESB.calcAncillaryIncome()"></label>';
  html += '<label>里程单价(元/kWh)<input type="number" id="ai-mileprice" step="0.05" value="0.5" min="0" oninput="ESB.calcAncillaryIncome()"></label>';
  html += '<label>考核系数<input type="number" id="ai-score" step="0.01" value="0.95" min="0" max="1" oninput="ESB.calcAncillaryIncome()"></label>';
  html += '<label>容量补偿单价(元/kW·年)<input type="number" id="ai-capprice" step="5" value="50" min="0" oninput="ESB.calcAncillaryIncome()"></label>';
  html += '</div>';
  html += '<div id="ai-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 共享储能分摊测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌒</span>共享储能分摊测算器</h3>';
  html += '<p class="lab-desc">一座共享储能租给 5 家用户,账怎么算?填电站容量、投资与租赁价格,看<b>出租率、年租赁收入、年净收益、单户年租金与投资回收期</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>电站容量(MWh)<input type="number" id="sa-cap" step="5" value="100" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '<label>总投资(万元)<input type="number" id="sa-invest" step="500" value="15000" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '<label>用户数(家)<input type="number" id="sa-users" step="1" value="5" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '<label>单户租赁容量(MWh)<input type="number" id="sa-peruser" step="1" value="20" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '<label>容量租赁单价(元/kWh·年)<input type="number" id="sa-leaseprice" step="10" value="250" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '<label>年运维成本(万元)<input type="number" id="sa-om" step="10" value="300" min="0" oninput="ESB.calcSharingAllocation()"></label>';
  html += '</div>';
  html += '<div id="sa-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 工商业 EMC 分成测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≣</span>工商业 EMC 分成测算器</h3>';
  html += '<p class="lab-desc">合同能源管理这种模式,业主和投资方各拿多少?填投资、年收益与分成比例,看<b>业主年收益、投资方年收益、投资方回收期与合同期内双方累计</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>项目投资(万元)<input type="number" id="es-invest" step="5" value="90" min="0" oninput="ESB.calcEmcSplit()"></label>';
  html += '<label>年总收益(万元)<input type="number" id="es-annual" step="1" value="28" min="0" oninput="ESB.calcEmcSplit()"></label>';
  html += '<label>业主分成比例(%)<input type="number" id="es-share" step="5" value="10" min="0" max="100" oninput="ESB.calcEmcSplit()"></label>';
  html += '<label>合同年限(年)<input type="number" id="es-years" step="1" value="10" min="1" oninput="ESB.calcEmcSplit()"></label>';
  html += '<label>年运维成本(万元)<input type="number" id="es-om" step="0.5" value="3" min="0" oninput="ESB.calcEmcSplit()"></label>';
  html += '</div>';
  html += '<div id="es-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 储能投资回报测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>储能投资回报测算器</h3>';
  html += '<p class="lab-desc">这笔投资几年回本、划算不划算?填投资、年净收益与折现率,看<b>静态回收期、NPV、IRR 与累计现金流</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>初始投资(万元)<input type="number" id="ir-invest" step="10" value="500" min="0" oninput="ESB.calcInvestmentReturn()"></label>';
  html += '<label>年净收益(万元)<input type="number" id="ir-annual" step="5" value="90" min="0" oninput="ESB.calcInvestmentReturn()"></label>';
  html += '<label>项目年限(年)<input type="number" id="ir-years" step="1" value="10" min="1" oninput="ESB.calcInvestmentReturn()"></label>';
  html += '<label>折现率(%)<input type="number" id="ir-rate" step="0.5" value="6" min="0" oninput="ESB.calcInvestmentReturn()"></label>';
  html += '<label>期末残值(万元)<input type="number" id="ir-residual" step="5" value="50" min="0" oninput="ESB.calcInvestmentReturn()"></label>';
  html += '</div>';
  html += '<div id="ir-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,单价与比率取行业常见量级概数。<b>实际项目必须依据现行价格文件、真实运行数据与专业财务模型单独核算</b>,本工具结果不作为投资决策、报价、融资或审计依据。</p>';
  html += '</div>';

  ESB.render(html);
  ESB.calcStorageRevenue(); ESB.calcLcos(); ESB.calcStorageSizing(); ESB.calcAncillaryIncome();
  ESB.calcSharingAllocation(); ESB.calcEmcSplit(); ESB.calcInvestmentReturn();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="cr-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 储能收益测算 ---- */
ESB.calcStorageRevenue = function() {
  var cap = ESB._num('sr-cap'), eff = ESB._num('sr-eff'), days = ESB._num('sr-days');
  var spread = ESB._num('sr-spread'), lease = ESB._num('sr-lease'), anc = ESB._num('sr-anc');
  var el = document.getElementById('sr-result');
  if (cap === null || eff === null || days === null || spread === null || lease === null || anc === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var perCycle = cap * 1000 * eff / 100;          // 单次放电电量(kWh)
  var dayArb = perCycle * spread;                 // 日套利(元/日)
  var yearArb = dayArb * days / 10000;            // 年套利(万元)
  var total = yearArb + lease + anc;              // 年收益合计(万元)
  var yearDis = perCycle * days;                  // 年放电量(kWh)
  var perKwh = yearDis > 0 ? total * 10000 / yearDis : 0;   // 度电收益(元/kWh)
  var pct = function(x) { return total > 0 ? x / total * 100 : 0; };
  var rows_ = [];
  rows_.push(tr('单次放电电量', ESB._w(perCycle, 1) + ' kWh', '', '容量 × 1000 × 循环效率 ' + ESB._fix(eff, 0) + '%'));
  rows_.push(tr('日套利收益', ESB._w(dayArb, 1) + ' 元 / 日', 'mid', '放电电量 × 峰谷价差'));
  rows_.push(tr('年套利收益', ESB._w(yearArb, 1) + ' 万元', 'ok cr-good', '占合计 ' + ESB._fix(pct(yearArb), 1) + '%'));
  rows_.push(tr('年容量租赁收入', ESB._w(lease, 1) + ' 万元', '', '占合计 ' + ESB._fix(pct(lease), 1) + '%'));
  rows_.push(tr('年辅助服务收入', ESB._w(anc, 1) + ' 万元', '', '占合计 ' + ESB._fix(pct(anc), 1) + '%'));
  rows_.push(tr('年收益合计', ESB._w(total, 1) + ' 万元', 'ok cr-good', '套利 + 租赁 + 辅助服务'));
  rows_.push(tr('年放电量', ESB._w(yearDis, 0) + ' kWh', '', '单次放电电量 × 年运行天数'));
  rows_.push(tr('度电收益', (yearDis > 0 ? ESB._w(perKwh, 2) + ' 元 / kWh' : '—'), 'mid', '年收益合计 ÷ 年放电量'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:储能的收入是三块拼起来的——<b>峰谷套利</b>(靠价差)、<b>容量租赁</b>(把容量租给需要的人)、<b>辅助服务</b>(给电网调峰调频)。三块的稳定性差别很大:套利收入随电价波动,租赁收入合同相对固定,辅助服务收入则取决于调用频次与考核。<br>别只看合计金额,更要看<b>度电收益</b>这一行:它把不同规模的电站拉到同一把尺子上,直接和「每度电的成本」对比,才是判断这门生意能不能做的起点。容量越大、年运行天数越多,度电收益被摊得越低——前提是这些电量真的能卖出去。</p>';
};

/* ---- 2. LCOS 度电成本 ---- */
ESB.calcLcos = function() {
  var invest = ESB._num('lc-invest'), om = ESB._num('lc-om'), life = ESB._num('lc-life');
  var cycles = ESB._num('lc-cycles'), dod = ESB._num('lc-dod'), eff = ESB._num('lc-eff');
  var rate = ESB._num('lc-rate'), spread = ESB._num('lc-spread');
  var el = document.getElementById('lc-result');
  if (invest === null || om === null || life === null || cycles === null || dod === null || eff === null || rate === null || spread === null) { el.innerHTML = warn('请把八项都填上。'); return; }
  if (life <= 0) { el.innerHTML = warn('项目年限要大于 0 年。'); return; }
  var n = life;
  var r = rate / 100;
  var growth = Math.pow(1 + r, n);
  var crf = r === 0 ? 1 / n : r * growth / (growth - 1);      // 资金回收系数
  var annualDis = dod / 100 * eff / 100 * cycles;             // kWh / kWh·年
  if (annualDis <= 0) { el.innerHTML = warn('放电深度、循环效率与年循环次数至少要有一项大于 0,否则年放电量为 0,无法计算 LCOS。'); return; }
  var annInvest = invest * crf;                               // 投资年化(元/kWh·年)
  var total = annInvest + om;                                 // 年总成本(元/kWh·年)
  var lcos = total / annualDis;                               // 元 / kWh
  var gapv = lcos - spread;
  var okArb = lcos <= spread;
  var rows_ = [];
  rows_.push(tr('资金回收系数 CRF', ESB._fix(crf, 4), '', '折现率 ' + ESB._fix(rate, 1) + '% / ' + ESB._fix(n, 0) + ' 年'));
  rows_.push(tr('投资年化', ESB._w(annInvest, 2) + ' 元 / kWh·年', 'mid', '单位投资 × CRF'));
  rows_.push(tr('年运维成本', ESB._w(om, 2) + ' 元 / kWh·年', '', '含人工、备件与辅助用电'));
  rows_.push(tr('年总成本', ESB._w(total, 2) + ' 元 / kWh·年', 'mid', '投资年化 + 运维'));
  rows_.push(tr('年放电量', ESB._w(annualDis, 2) + ' kWh / kWh·年', '', '放电深度 × 循环效率 × 年循环次数'));
  rows_.push(tr('LCOS 度电成本', ESB._w(lcos, 2) + ' 元 / kWh', okArb ? 'ok cr-good' : 'mid', '年总成本 ÷ 年放电量'));
  rows_.push(tr('参考峰谷价差', ESB._w(spread, 2) + ' 元 / kWh', '', '拿它和 LCOS 直接比'));
  rows_.push(tr('判定', okArb ? '有套利空间' : '仅靠峰谷套利不划算', okArb ? 'ok cr-good' : '', okArb ? 'LCOS 比价差低 ' + ESB._w(Math.abs(gapv), 2) + ' 元 / kWh' : 'LCOS 比价差高 ' + ESB._w(Math.abs(gapv), 2) + ' 元 / kWh'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:LCOS 的分子只有两块——<b>把投资按年摊掉的钱</b>和<b>每年运维花的钱</b>;分母是<b>一年真正充放出来的电量</b>。所以降低 LCOS 的路子很明确:投资降下来、寿命拉长、循环次数提上去、效率与放电深度保持住。<br>注意 CRF 里含折现率:同一个项目,折现率从 6% 提到 10%,投资年化会明显抬高,LCOS 跟着涨——这说明<b>资金成本本身就是储能成本的一部分</b>。<br>最后一步永远是「拿 LCOS 去和峰谷价差比」:低于价差才有套利空间,但也只是空间,真正能不能收到钱,还要看价差出现的时段与调用机会。</p>';
};

/* ---- 3. 容量与功率配置 ---- */
ESB.calcStorageSizing = function() {
  var shave = ESB._num('sz-shave'), dur = ESB._num('sz-duration'), dod = ESB._num('sz-dod');
  var eff = ESB._num('sz-eff'), demandPrice = ESB._num('sz-demandprice'), spread = ESB._num('sz-spread');
  var days = ESB._num('sz-days'), unitcost = ESB._num('sz-unitcost');
  var el = document.getElementById('sz-result');
  if (shave === null || dur === null || dod === null || eff === null || demandPrice === null || spread === null || days === null || unitcost === null) { el.innerHTML = warn('请把八项都填上。'); return; }
  var usable = dod / 100 * eff / 100;
  if (usable <= 0) { el.innerHTML = warn('放电深度与循环效率至少要有一项大于 0,否则算不出所需容量。'); return; }
  var power = shave;                              // 所需功率(kW)
  var capNeed = power * dur / usable;             // 所需容量(kWh)
  var demandSave = power * demandPrice * 12 / 10000;      // 需量年节省(万元)
  var dayDis = power * dur;                               // 日放电量(kWh)
  var yearArb = dayDis * spread * days / 10000;           // 年套利(万元)
  var totalYear = demandSave + yearArb;                   // 合计年收益(万元)
  var invest = capNeed * unitcost / 10000;                // 投资估算(万元)
  var payback = totalYear > 0 ? invest / totalYear : null;
  var rows_ = [];
  rows_.push(tr('所需功率', ESB._w(power, 1) + ' kW', '', '等于目标削峰功率'));
  rows_.push(tr('所需容量', ESB._w(capNeed, 1) + ' kWh', 'mid', '功率 × 时长 ÷ (放电深度 × 循环效率)'));
  rows_.push(tr('需量电费年节省', ESB._w(demandSave, 1) + ' 万元', 'ok cr-good', '削峰功率 × 需量电价 × 12 月'));
  rows_.push(tr('年套利收益', ESB._w(yearArb, 1) + ' 万元', '', '日放电量 × 峰谷价差 × 年运行天数'));
  rows_.push(tr('合计年收益', ESB._w(totalYear, 1) + ' 万元', 'ok cr-good', '需量节省 + 套利'));
  rows_.push(tr('投资估算', ESB._w(invest, 1) + ' 万元', 'mid', '所需容量 × 单位投资'));
  rows_.push(tr('静态回收期', (payback === null ? '—' : ESB._w(payback, 1) + ' 年'), payback !== null && payback <= 6 ? 'ok cr-good' : '', payback === null ? '年收益为 0,无法回收' : '投资估算 ÷ 合计年收益'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:先定功率还是先定容量,取决于你要解决什么问题。<b>削峰是为了降需量电费</b>,所以要按「尖峰负荷高出多少」定功率;而<b>容量 = 功率 × 持续时长 ÷ (放电深度 × 循环效率)</b>——分母这两项容易被忽略,它意味着你要多配约 20% 的容量,才能真的放出想要的电量。<br>这里的两块收益性质不同:需量电费节省每月兑现、几乎无风险(前提是负荷曲线可控);套利收益依赖价差与调用机会,波动更大。回收期算出来偏长,通常不是设备不行,而是<b>当地峰谷价差不够大、或需量电价不够高</b>。</p>';
};

/* ---- 4. 辅助服务收益 ---- */
ESB.calcAncillaryIncome = function() {
  var cap = ESB._num('ai-cap'), mileage = ESB._num('ai-mileage'), milePrice = ESB._num('ai-mileprice');
  var score = ESB._num('ai-score'), capPrice = ESB._num('ai-capprice');
  var el = document.getElementById('ai-result');
  if (cap === null || mileage === null || milePrice === null || score === null || capPrice === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var capComp = cap * 1000 * capPrice / 10000;            // 容量补偿(万元)
  var mileComp = mileage * milePrice * score;             // 里程补偿(万元)
  var mileLoss = mileage * milePrice * (1 - score);       // 考核折减(万元)
  var total = capComp + mileComp;                         // 合计(万元)
  var perKw = cap > 0 ? total * 10000 / (cap * 1000) : 0; // 单位容量年收益(元/kW)
  var scoreOk = score >= 0.9;
  var rows_ = [];
  rows_.push(tr('容量补偿收入', ESB._w(capComp, 1) + ' 万元', 'mid', '可调节容量 × 容量补偿单价'));
  rows_.push(tr('里程补偿收入', ESB._w(mileComp, 1) + ' 万元', 'ok cr-good', '里程 × 里程单价 × 考核系数 ' + ESB._fix(score, 2)));
  rows_.push(tr('考核折减损失', ESB._w(mileLoss, 1) + ' 万元', '', '因考核系数未达 1 而少收的部分'));
  rows_.push(tr('合计年收益', ESB._w(total, 1) + ' 万元', 'ok cr-good', '容量补偿 + 里程补偿'));
  rows_.push(tr('单位容量年收益', (cap > 0 ? ESB._w(perKw, 1) + ' 元 / kW' : '—'), scoreOk ? 'ok cr-good' : 'mid', '合计 ÷ 可调节容量'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:辅助服务收入由两部分组成——<b>容量补偿</b>按「你能提供多少可调节能力」给钱,<b>里程补偿</b>按「你实际被调用了多少次、调节了多少电量」给钱。前者的关键是把可用率与响应速度做扎实,后者取决于调用频次。<br>真正决定到手多少的是<b>考核系数</b>:它没到 1 就按比例打折。别小看那几个百分点——里程收入基数大的电站,考核系数从 0.95 提到 0.99,一年就是实打实的几十万。反过来,响应不及时、调节精度不够,考核扣的钱往往比多挣的更多。<br>这部分收入随市场规则变化最快,测算只能用来理解结构,不能当作收入承诺。</p>';
};

/* ---- 5. 共享储能分摊 ---- */
ESB.calcSharingAllocation = function() {
  var cap = ESB._num('sa-cap'), invest = ESB._num('sa-invest'), users = ESB._num('sa-users');
  var perUser = ESB._num('sa-peruser'), leasePrice = ESB._num('sa-leaseprice'), om = ESB._num('sa-om');
  var el = document.getElementById('sa-result');
  if (cap === null || invest === null || users === null || perUser === null || leasePrice === null || om === null) { el.innerHTML = warn('请把六项都填上。'); return; }
  var leaseCap = users * perUser;                         // 出租容量(MWh)
  var rate = cap > 0 ? leaseCap / cap * 100 : 0;          // 出租率(%)
  var leaseRev = leaseCap * 1000 * leasePrice / 10000;    // 年租赁收入(万元)
  var perRent = perUser * 1000 * leasePrice / 10000;      // 单户年租金(万元)
  var net = leaseRev - om;                                // 年净收益(万元)
  var payback = net > 0 ? invest / net : null;
  var over = leaseCap > cap;
  var rows_ = [];
  rows_.push(tr('出租容量', ESB._w(leaseCap, 1) + ' MWh', '', ESB._w(users, 0) + ' 家 × ' + ESB._w(perUser, 1) + ' MWh'));
  rows_.push(tr('出租率', ESB._fix(rate, 1) + ' %', rate >= 80 ? 'ok cr-good' : 'mid', '出租容量 ÷ 电站容量'));
  rows_.push(tr('年租赁收入', ESB._w(leaseRev, 1) + ' 万元', 'ok cr-good', '出租容量 × 1000 × 租赁单价'));
  rows_.push(tr('单户年租金', ESB._w(perRent, 1) + ' 万元', 'mid', '单户容量 × 1000 × 租赁单价'));
  rows_.push(tr('年运维成本', ESB._w(om, 1) + ' 万元', '', '电站侧统一运维'));
  rows_.push(tr('年净收益', ESB._w(net, 1) + ' 万元', net > 0 ? 'ok cr-good' : 'mid', '租赁收入 − 运维成本'));
  rows_.push(tr('投资回收期', (payback === null ? '—' : ESB._w(payback, 1) + ' 年'), payback !== null && payback <= 8 ? 'ok cr-good' : '', payback === null ? '净收益不为正,无法回收' : '总投资 ÷ 年净收益'));
  var note = '';
  if (over) note += warn('出租容量超过电站容量(' + ESB._w(leaseCap, 1) + ' MWh > ' + ESB._w(cap, 1) + ' MWh),这份预算超卖了,必须削减用户数或单户容量。');
  el.innerHTML = note + tbl(rows_) +
    '<p class="calc-hint">读法:共享储能的核心账是「<b>把一座电站的容量切成几份租出去</b>」,所以最先要盯的是<b>出租率</b>——出租率不足,运维成本照样发生,单 MWh 摊到的成本立刻上升,再高的单价也补不回来。<br>租赁单价通常是按「元/kWh·年」谈的,听起来不高,但它是<b>每年都收</b>的稳定现金流,和靠价差挣的套利收入性质完全不同:前者像收房租,后者像做买卖。多数共享储能项目的可行性,取决于能不能把大部分容量签成长期租约。<br>另外,超卖容量是这类模式的典型风险:合同签的是容量,不是电量,一旦多家用户在同一时段集中调用,物理上放不出来,就会同时违约。</p>';
};

/* ---- 6. 工商业 EMC 分成 ---- */
ESB.calcEmcSplit = function() {
  var invest = ESB._num('es-invest'), annual = ESB._num('es-annual'), share = ESB._num('es-share');
  var years = ESB._num('es-years'), om = ESB._num('es-om');
  var el = document.getElementById('es-result');
  if (invest === null || annual === null || share === null || years === null || om === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var ownerYear = annual * share / 100;                   // 业主年收益(万元)
  var invYear = annual - ownerYear - om;                  // 投资方年收益(万元)
  var payback = invYear > 0 ? invest / invYear : null;
  var invCum = invYear * years;                           // 投资方累计(万元)
  var invNet = invCum - invest;                           // 投资方净收益(万元)
  var ownerCum = ownerYear * years;                       // 业主累计(万元)
  var ownerPct = annual > 0 ? ownerYear / annual * 100 : 0;
  var rows_ = [];
  rows_.push(tr('业主年收益', ESB._w(ownerYear, 1) + ' 万元', 'mid', '占年总收益 ' + ESB._fix(ownerPct, 1) + '%'));
  rows_.push(tr('投资方年收益', ESB._w(invYear, 1) + ' 万元', invYear > 0 ? 'ok cr-good' : 'mid', '年总收益 − 业主分成 − 运维'));
  rows_.push(tr('投资方回收期', (payback === null ? '—' : ESB._w(payback, 1) + ' 年'), payback !== null && payback <= 5 ? 'ok cr-good' : '', payback === null ? '投资方年收益不为正,无法回收' : '项目投资 ÷ 投资方年收益'));
  rows_.push(tr('合同期内投资方累计', ESB._w(invCum, 1) + ' 万元', '', ESB._w(invYear, 1) + ' 万元 × ' + ESB._w(years, 0) + ' 年'));
  rows_.push(tr('合同期内投资方净收益', ESB._w(invNet, 1) + ' 万元', invNet > 0 ? 'ok cr-good' : 'mid', '累计收益 − 项目投资'));
  rows_.push(tr('合同期内业主累计收益', ESB._w(ownerCum, 1) + ' 万元', 'mid', ESB._w(ownerYear, 1) + ' 万元 × ' + ESB._w(years, 0) + ' 年'));
  rows_.push(tr('合同期总收益', ESB._w(invCum + ownerCum, 1) + ' 万元', '', '双方累计之和'));
  var note = '';
  if (invYear <= 0) note += warn('按当前参数,投资方年收益不大于 0(年总收益扣除业主分成与运维后已无剩余),这个分成方案投资方不会接受。');
  el.innerHTML = note + tbl(rows_) +
    '<p class="calc-hint">读法:EMC(合同能源管理)的分配逻辑是「<b>投资方出钱出设备,业主出场地出负荷,省下来的收益按比例分</b>」。所以分成比例不是一个数字,而是一次谈判的结果:<b>业主比例越高,投资方回收期越长</b>,项目越难落地;业主比例太低,业主又没动力配合负荷调度。<br>算账时最容易被漏掉的是<b>运维成本</b>——它通常由投资方承担,先扣掉再谈分成。很多看起来漂亮的「五五分成」,扣完运维和税费后投资方年收益已经所剩无几,这就是上面那条警示的由来。<br>还有一点:合同期内双方累计收益加起来,并不等于各自的「净赚」——投资方要减掉投资,业主一般没有前期投入。到期后设备如何处置、剩余寿命归谁,也应在合同里写明。</p>';
};

/* ---- 7. 储能投资回报 ---- */
ESB.calcInvestmentReturn = function() {
  var invest = ESB._num('ir-invest'), annual = ESB._num('ir-annual'), years = ESB._num('ir-years');
  var rate = ESB._num('ir-rate'), residual = ESB._num('ir-residual');
  var el = document.getElementById('ir-result');
  if (invest === null || annual === null || years === null || rate === null || residual === null) { el.innerHTML = warn('请把五项都填上。'); return; }
  var n = Math.round(years);
  if (n < 1) { el.innerHTML = warn('项目年限至少为 1 年。'); return; }
  var payback = annual > 0 ? invest / annual : null;      // 静态回收期(年)
  var turnYear = payback === null ? null : Math.ceil(payback);
  var r = rate / 100;
  function npvAt(rr) {
    var sum = 0, disc = 1;
    for (var t = 1; t <= n; t++) { disc *= (1 + rr); sum += annual / disc; }
    sum += residual / disc;                               // 末年残值
    return sum - invest;
  }
  var npv = npvAt(r);
  // IRR:二分法,区间 [−0.9, 2],迭代 200 次
  var irr = null, lo = -0.9, hi = 2;
  var flo = npvAt(lo), fhi = npvAt(hi);
  if (flo === 0) irr = lo;
  else if (fhi === 0) irr = hi;
  else if (flo * fhi < 0) {
    for (var i = 0; i < 200; i++) {
      var mid = (lo + hi) / 2, fm = npvAt(mid);
      if (fm === 0) { lo = mid; hi = mid; break; }
      if (flo * fm < 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
    }
    irr = (lo + hi) / 2;
  }
  // 累计现金流
  var cum = -invest, cumRows = '';
  for (var t2 = 1; t2 <= n; t2++) {
    cum += annual;
    if (t2 === n) cum += residual;
  }
  cumRows = ESB._w(cum, 1);
  var okNpv = npv > 0;
  var rows_ = [];
  rows_.push(tr('静态回收期', (payback === null ? '—' : ESB._w(payback, 2) + ' 年'), payback !== null && payback <= n ? 'ok cr-good' : 'mid', payback === null ? '年净收益为 0,无法回收' : '初始投资 ÷ 年净收益'));
  rows_.push(tr('累计现金流转正年份', (turnYear === null ? '—' : '第 ' + turnYear + ' 年'), turnYear !== null && turnYear <= n ? 'ok cr-good' : '', '静态回收期向上取整'));
  rows_.push(tr('NPV 净现值', ESB._w(npv, 1) + ' 万元', okNpv ? 'ok cr-good' : 'mid', '按折现率 ' + ESB._fix(rate, 1) + '%、年限 ' + n + ' 年、残值 ' + ESB._w(residual, 1) + ' 万元'));
  rows_.push(tr('IRR 内部收益率', (irr === null ? '无法求解' : ESB._w(irr * 100, 1) + ' %'), irr !== null && irr * 100 > rate ? 'ok cr-good' : 'mid', irr === null ? '区间两端 NPV 同号,说明现金流始终为正或始终为负' : '使 NPV = 0 的折现率,可与资金成本直接比'));
  rows_.push(tr('合同期末累计现金流', cumRows + ' 万元', cum > 0 ? 'ok cr-good' : 'mid', '含末年残值,未折现'));
  rows_.push(tr('判定', okNpv ? '投资可行' : '按当前参数不可行', okNpv ? 'ok cr-good' : 'mid', okNpv ? 'NPV > 0,项目创造价值' : 'NPV ≤ 0,达不到折现率要求'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:三个指标看三件事——<b>回收期</b>看多久能拿回本金(快慢),<b>NPV</b>看按你要求的回报率折算后是否还有剩余(值不值),<b>IRR</b>看这个项目本身能承受多高的资金成本(韧性)。<br>关键门槛是「<b>IRR 与资金成本比一比</b>」:IRR 高于资金成本,项目才真正创造价值;NPV 则是同一件事的另一种说法——只要折现率取的就是你的资金成本,NPV 为正和 IRR 高于它就是等价结论。<br>注意折现率这个参数:它代表你对「今天的一块值多少钱」的定价,取值越高,NPV 越低。同一笔现金流,换成更高的折现率可能就从「可行」变成「不可行」,所以报 NPV 的时候必须把折现率一起说清楚。<br>还要提醒:这里的年净收益假设了每年都一样。真实项目的收益随电价、调用与运维逐年变化,应由专业财务模型逐年建模,本工具只用来建立直觉。</p>';
};
/* ===== 模块页 ===== */
ESB.views.module = function(id) {
  var mod = ESB.modules.find(function(m) { return m.id === id; });
  if (!mod) { ESB.views.home(); return; }
  var P = ESB.progress();
  var lessons = ESB.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + ESB.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + ESB.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = ESB.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + ESB.esc(title) + '</a>';
    else html += '<span class="title">' + ESB.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及电价机制、辅助服务补偿、容量租赁与补贴政策，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>，请以现行价格文件、市场规则与主管部门文件为准。本站不构成投资测算、项目决策或结算依据。</p></div>';
  html += '</div>';
  ESB.render(html);
};

/* ===== 术语 ===== */
ESB.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>储能商业模式名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 储能 / 峰谷价差 / 需量电费 / LCOS / 容量租赁 / 辅助服务 / 合同能源管理" oninput="ESB.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(ESB.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与政策文件、市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅规则原文与专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  ESB.render(html);
};
ESB.filterTerms = function(q) {
  var filtered = ESB.terms;
  if (q) { q = q.toLowerCase();
    filtered = ESB.terms.filter(function(t) {
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
    html += '<div class="term-name">' + ESB.esc(t.name) + ' <span class="term-en">' + ESB.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + ESB.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + ESB.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
ESB.views.myTerms = function() {
  var P = ESB.progress(); var collected = [];
  for (var i = 0; i < ESB.terms.length; i++) if (P.hasTerm(ESB.terms[i].id)) collected.push(ESB.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  ESB.render(html);
};

/* ===== 搜索 ===== */
ESB.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 储能 / 峰谷价差 / 需量电费 / LCOS / 容量租赁 / 辅助服务 / 合同能源管理" oninput="ESB.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  ESB.render(html);
};
ESB.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ESB.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + ESB.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + ESB.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
ESB.views.settings = function() {
  var P = ESB.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="ESB.setTheme(\'dark\')">深色 · 浅青绿</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="ESB.setTheme(\'light\')">浅色 · 深青绿</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="ESB.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="ESB.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="ESB.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = ESB.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/esb-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/esb-progress" value="' + ESB.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + ESB.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + ESB.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + ESB.esc(ESB.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="ESB.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="ESB.clearData()">清除数据</button></div>';
  html += '</div>';
  ESB.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    ESB.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!ESB.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    ESB.sync.pullNow().then(function () { return ESB.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + ESB.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    ESB.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : ESB.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    ESB.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
ESB.setTheme = function(t) { document.documentElement.dataset.theme = t; ESB.progress().setPref('theme', t); ESB.views.settings(); };
ESB.setFontSize = function(s) { document.documentElement.dataset.fs = s; ESB.progress().setPref('fontSize', s); ESB.views.settings(); };
ESB.exportData = function() {
  var data = ESB.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'esb-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
ESB.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('esb.progress.v1');
    window.location.reload();
  }
};

