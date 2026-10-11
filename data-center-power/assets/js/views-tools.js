/* 工具视图:七件数据中心与算电协同互动工具(能耗与 PUE 测算 / 供配电容量与冗余测算 / 制冷负荷测算 / 绿电采购与碳减排测算 / 需求响应收益测算 / 算电协同调节能力测算 / 用电成本测算)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、设备选型、采购、招标、投资或合规依据。 */
window.DTC = window.DTC || {};
DTC.views = DTC.views || {};

DTC._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
DTC._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
DTC._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
DTC.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">算电协同这件事,很多账可以先算一算:<b>这家数据中心的 PUE 到底是多少、供配电要配几台变压器才够又留有余量、制冷吃掉多少电和多少水、买绿电与绿证能减多少碳、参与需求响应一年能拿回多少钱、算力到底能给电网让出多少调节空间、一年的电费又花在哪</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:能耗与 PUE 参数、设备效率、价格与补贴水平都是便于理解的示例概数,不体现真实的设备选型、现场条件、供电方案、制冷方案、电价政策与市场规则。<b>不作为工程设计、设备选型、采购、招标、投资测算或合规依据。</b>实际项目须以现行国家标准与行业规范、厂商方案、主管部门文件与企业实际运行数据为准。</p>';
  html += '</div>';

  // 1. 数据中心能耗与 PUE 测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>数据中心能耗与 PUE 测算器</h3>';
  html += '<p class="lab-desc">这家数据中心一年吃多少电、PUE 是多少?填 IT 设备功率、制冷能耗与供配电损耗,看<b>总用电功率、年耗电量、PUE、单位面积功率密度,以及制冷方式改善后 PUE 能降到多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>IT 设备功率(kW)<input type="number" id="de-it" step="50" value="2000" min="0" oninput="DTC.calcDcEnergy()"></label>';
  html += '<label>制冷能耗(kW)<input type="number" id="de-cool" step="10" value="700" min="0" oninput="DTC.calcDcEnergy()"></label>';
  html += '<label>供配电损耗率(%)<input type="number" id="de-loss" step="1" value="6" min="0" oninput="DTC.calcDcEnergy()"></label>';
  html += '<label>其他用电(照明/办公,kW)<input type="number" id="de-other" step="5" value="60" min="0" oninput="DTC.calcDcEnergy()"></label>';
  html += '<label>设施总面积(㎡)<input type="number" id="de-area" step="500" value="10000" min="0" oninput="DTC.calcDcEnergy()"></label>';
  html += '<label>制冷改善后降幅(%)<input type="number" id="de-opt" step="5" value="30" min="0" max="100" oninput="DTC.calcDcEnergy()"></label>';
  html += '</div>';
  html += '<div id="de-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 供配电容量与冗余测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◧</span>供配电容量与冗余测算器</h3>';
  html += '<p class="lab-desc">要扛住 2000 kW 的 IT 负荷,变压器该怎么配?填功率因数、同时系数与冗余要求,看<b>计算负荷、所需总容量、所需台数与实际配置台数、负载率,以及冗余度是否成立</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>IT 总功率(kW)<input type="number" id="pc-it" step="50" value="2000" min="0" oninput="DTC.calcPowerCapacity()"></label>';
  html += '<label>功率因数<input type="number" id="pc-pf" step="0.01" value="0.9" min="0" max="1" oninput="DTC.calcPowerCapacity()"></label>';
  html += '<label>同时系数<input type="number" id="pc-sim" step="0.05" value="0.9" min="0" max="1" oninput="DTC.calcPowerCapacity()"></label>';
  html += '<label>冗余配置 <select id="pc-red" oninput="DTC.calcPowerCapacity()"><option value="N">N(基本容量)</option><option value="N1" selected>N+1(一台备用)</option><option value="2N">2N(两套互备)</option></select></label>';
  html += '<label>变压器负载率上限(%)<input type="number" id="pc-loadrate" step="5" value="75" min="0" max="100" oninput="DTC.calcPowerCapacity()"></label>';
  html += '<label>单台变压器容量(kVA)<input type="number" id="pc-unit" step="100" value="2000" min="0" oninput="DTC.calcPowerCapacity()"></label>';
  html += '</div>';
  html += '<div id="pc-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 制冷负荷测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇥</span>制冷负荷测算器</h3>';
  html += '<p class="lab-desc">机房里的热,要多少冷量才带得走?填 IT 功率、送风温差与制冷方式,看<b>显热制冷量、总冷负荷、所需送风量与冷冻水流量、制冷能耗估算,以及它对 PUE 的贡献</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>IT 功率(kW)<input type="number" id="cl-it" step="50" value="2000" min="0" oninput="DTC.calcCoolingLoad()"></label>';
  html += '<label>冷通道送风温差(℃)<input type="number" id="cl-dt" step="1" value="12" min="0" oninput="DTC.calcCoolingLoad()"></label>';
  html += '<label>冷却方式 <select id="cl-way" oninput="DTC.calcCoolingLoad()"><option value="air">风冷(直膨/风冷机组)</option><option value="water" selected>水冷(冷冻水机组)</option><option value="liquid">液冷(冷板/浸没)</option></select></label>';
  html += '<label>冷冻水供回水温差(℃)<input type="number" id="cl-dtchw" step="0.5" value="5" min="0" oninput="DTC.calcCoolingLoad()"></label>';
  html += '<label>水泵与冷却塔附加系数<input type="number" id="cl-add" step="0.05" value="1.15" min="0" oninput="DTC.calcCoolingLoad()"></label>';
  html += '</div>';
  html += '<div id="cl-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 绿电采购与碳减排测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>绿电采购与碳减排测算器</h3>';
  html += '<p class="lab-desc">买绿电、买绿证,能减多少碳、要花多少钱?填年用电量、采购比例与排放因子,看<b>绿电电量、绿证数量、采购成本、减排量、剩余排放与碳排强度</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年用电量(万 kWh)<input type="number" id="gp-use" step="100" value="5000" min="0" oninput="DTC.calcGreenPower()"></label>';
  html += '<label>绿电采购比例(%)<input type="number" id="gp-ratio" step="5" value="30" min="0" max="100" oninput="DTC.calcGreenPower()"></label>';
  html += '<label>电网排放因子(kgCO₂/kWh)<input type="number" id="gp-efgrid" step="0.01" value="0.58" min="0" oninput="DTC.calcGreenPower()"></label>';
  html += '<label>绿电排放因子(kgCO₂/kWh)<input type="number" id="gp-efgreen" step="0.01" value="0" min="0" oninput="DTC.calcGreenPower()"></label>';
  html += '<label>绿证单价(元/张)<input type="number" id="gp-price" step="5" value="50" min="0" oninput="DTC.calcGreenPower()"></label>';
  html += '<label>每张绿证对应电量(MWh)<input type="number" id="gp-percert" step="0.5" value="1" min="0" oninput="DTC.calcGreenPower()"></label>';
  html += '</div>';
  html += '<div id="gp-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 需求响应收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≣</span>需求响应收益测算器</h3>';
  html += '<p class="lab-desc">让出 3000 kW 的可削减负荷,一年能拿回多少钱?填可削减负荷、参与次数与补贴标准,看<b>单次与年响应电量、容量收益、电量收益、考核后实际收益与单 kW 年收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可削减负荷(kW)<input type="number" id="dr-kw" step="100" value="3000" min="0" oninput="DTC.calcDrRevenue()"></label>';
  html += '<label>参与次数(次/年)<input type="number" id="dr-times" step="1" value="30" min="0" oninput="DTC.calcDrRevenue()"></label>';
  html += '<label>单次时长(h/次)<input type="number" id="dr-hours" step="0.5" value="2" min="0" oninput="DTC.calcDrRevenue()"></label>';
  html += '<label>度电补贴(元/kWh)<input type="number" id="dr-price" step="0.1" value="1" min="0" oninput="DTC.calcDrRevenue()"></label>';
  html += '<label>容量补贴(元/kW·年)<input type="number" id="dr-capprice" step="10" value="100" min="0" oninput="DTC.calcDrRevenue()"></label>';
  html += '<label>考核系数<input type="number" id="dr-score" step="0.05" value="0.9" min="0" max="1" oninput="DTC.calcDrRevenue()"></label>';
  html += '</div>';
  html += '<div id="dr-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 算电协同调节能力测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌒</span>算电协同调节能力测算器</h3>';
  html += '<p class="lab-desc">算力能给电网让出多大的调节空间?填 IT 总功率、可调负载占比、可调时段与时延容忍度,看<b>可上调与可下调容量、可调电量、等效储能容量、日可调节次数,以及可申报的辅助服务容量</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>IT 总功率(kW)<input type="number" id="sf-it" step="50" value="2000" min="0" oninput="DTC.calcSynergyFlex()"></label>';
  html += '<label>可迁移/可中断负载占比(%)<input type="number" id="sf-share" step="5" value="30" min="0" max="100" oninput="DTC.calcSynergyFlex()"></label>';
  html += '<label>可调节时段长度(h)<input type="number" id="sf-window" step="1" value="4" min="0" oninput="DTC.calcSynergyFlex()"></label>';
  html += '<label>任务时延容忍度 <select id="sf-delay" oninput="DTC.calcSynergyFlex()"><option value="1">严苛(≤ 1 h,在线推理)</option><option value="4" selected>中等(1~4 h,准实时)</option><option value="8">宽松(&gt; 4 h,批处理/训练)</option></select></label>';
  html += '<label>算力功率调节上下限(±%)<input type="number" id="sf-range" step="5" value="20" min="0" max="100" oninput="DTC.calcSynergyFlex()"></label>';
  html += '</div>';
  html += '<div id="sf-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 数据中心用电成本测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>数据中心用电成本测算器</h3>';
  html += '<p class="lab-desc">一年的电费到底花在哪?填峰平谷电量、电价与最大需量,看<b>年电费、综合到户电价、度电成本构成拆分,以及把峰段电量挪到谷段后能省多少</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年用电量(万 kWh)<input type="number" id="dc-use" step="100" value="5000" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>平均电价(元/kWh)<input type="number" id="dc-avg" step="0.01" value="0.6" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>峰段电量占比(%)<input type="number" id="dc-peak-pct" step="5" value="30" min="0" max="100" oninput="DTC.calcDcCost()"></label>';
  html += '<label>峰段电价(元/kWh)<input type="number" id="dc-peak-price" step="0.05" value="1" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>谷段电量占比(%)<input type="number" id="dc-valley-pct" step="5" value="25" min="0" max="100" oninput="DTC.calcDcCost()"></label>';
  html += '<label>谷段电价(元/kWh)<input type="number" id="dc-valley-price" step="0.05" value="0.3" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>最大需量(kW)<input type="number" id="dc-demand" step="500" value="8000" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>需量电价(元/kW·月)<input type="number" id="dc-demand-price" step="5" value="40" min="0" oninput="DTC.calcDcCost()"></label>';
  html += '<label>峰段可转移比例(%)<input type="number" id="dc-shift" step="5" value="20" min="0" max="100" oninput="DTC.calcDcCost()"></label>';
  html += '</div>';
  html += '<div id="dc-cost-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,能耗系数、设备效率、价格与补贴取行业常见量级概数。<b>实际项目必须依据现行国家标准与行业规范、现行电价文件、真实运行数据与专业设计文件单独核算</b>,本工具结果不作为工程设计、设备选型、采购、招标、投资或合规依据。</p>';
  html += '</div>';

  DTC.render(html);
  DTC.calcDcEnergy(); DTC.calcPowerCapacity(); DTC.calcCoolingLoad(); DTC.calcGreenPower();
  DTC.calcDrRevenue(); DTC.calcSynergyFlex(); DTC.calcDcCost();
};

function tr(name, val, cls, note) {
  var map = { ok: 'cr-good', bad: 'cr-bad', mid: 'cr-warn', warn: 'cr-warn' };
  var c = map[cls] || cls || '';
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + c + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="cr-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 数据中心能耗与 PUE ---- */
DTC.calcDcEnergy = function() {
  var it = DTC._num('de-it'), cool = DTC._num('de-cool'), loss = DTC._num('de-loss');
  var other = DTC._num('de-other'), area = DTC._num('de-area'), opt = DTC._num('de-opt');
  var el = document.getElementById('de-result');
  if (!el) return;
  if (it === null || cool === null || loss === null || other === null || area === null || opt === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (it <= 0) { el.innerHTML = warn('IT 设备功率需大于 0,否则无法计算 PUE。'); return; }
  if (cool < 0 || loss < 0 || other < 0 || area < 0 || opt < 0) {
    el.innerHTML = warn('请检查输入:功率、比例与面积都不能为负数。'); return;
  }
  if (loss > 100 || opt > 100) { el.innerHTML = warn('请检查输入:损耗率与改善降幅都应在 0~100% 之间。'); return; }
  var lossKw = it * loss / 100;                  // 供配电损耗(kW)
  var total = it + cool + lossKw + other;        // 总用电功率(kW)
  var pue = total / it;                          // PUE
  var yearWan = total * 8760 / 10000;            // 年耗电量(万 kWh)
  var densIt = area > 0 ? it * 1000 / area : null;      // IT 功率密度(W/㎡)
  var densAll = area > 0 ? total * 1000 / area : null;  // 全站用电密度(W/㎡)
  var cool2 = cool * (1 - opt / 100);
  var total2 = it + cool2 + lossKw + other;
  var pue2 = total2 / it;
  var saveWan = (total - total2) * 8760 / 10000;
  if (!isFinite(total) || !isFinite(pue) || !isFinite(yearWan) || !isFinite(pue2) || !isFinite(saveWan)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var clsPue = pue <= 1.25 ? 'ok' : (pue <= 1.5 ? 'mid' : 'bad');
  var clsPue2 = pue2 <= 1.25 ? 'ok' : (pue2 <= 1.5 ? 'mid' : 'bad');
  var rows_ = [];
  rows_.push(tr('IT 设备功率', DTC._w(it, 1) + ' kW', '', '机房内服务器、存储与网络设备用电'));
  rows_.push(tr('制冷能耗', DTC._w(cool, 1) + ' kW', '', '含冷机、水泵、冷却塔与末端风机'));
  rows_.push(tr('供配电损耗', DTC._w(lossKw, 1) + ' kW', '', 'IT 功率 × ' + DTC._w(loss, 1) + '%(变压器、UPS 与线路损耗)'));
  rows_.push(tr('其他用电', DTC._w(other, 1) + ' kW', '', '照明、办公与安防等'));
  rows_.push(tr('总用电功率', DTC._w(total, 1) + ' kW', 'mid', 'IT + 制冷 + 供配电损耗 + 其他'));
  rows_.push(tr('PUE', DTC._fix(pue, 2), clsPue, '总用电功率 ÷ IT 设备功率'));
  rows_.push(tr('年耗电量', DTC._w(yearWan, 1) + ' 万 kWh', '', '总用电功率 × 8760 h'));
  rows_.push(tr('IT 功率密度', (densIt === null ? '—' : DTC._w(densIt, 1) + ' W/㎡'), '', densIt === null ? '面积为 0,无法计算' : 'IT 设备功率 ÷ 设施总面积'));
  rows_.push(tr('全站用电密度', (densAll === null ? '—' : DTC._w(densAll, 1) + ' W/㎡'), '', densAll === null ? '面积为 0,无法计算' : '总用电功率 ÷ 设施总面积'));
  rows_.push(tr('改善后制冷能耗', DTC._w(cool2, 1) + ' kW', '', '原制冷能耗 ×(1 − ' + DTC._w(opt, 1) + '%)'));
  rows_.push(tr('改善后 PUE', DTC._fix(pue2, 2), clsPue2, '按改善后的制冷能耗重算'));
  rows_.push(tr('PUE 降幅', DTC._fix(pue - pue2, 2), 'ok', '原 PUE ' + DTC._fix(pue, 2) + ' → ' + DTC._fix(pue2, 2)));
  rows_.push(tr('年节电量', DTC._w(saveWan, 1) + ' 万 kWh', 'ok', '(原总功率 − 改善后总功率)× 8760 h'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:PUE = 全站总用电 ÷ IT 用电,所以拉低 PUE 只有两条路——<b>压掉非 IT 用电</b>(制冷与供配电损耗),或者<b>把 IT 利用率提上去</b>。注意这里把供配电损耗按 IT 功率的比例叠加,而制冷能耗在不同制冷方式下差别极大:风冷带走 1 kW 热往往要花 0.3 kW 以上的电,液冷可以低到 0.1 kW 上下。<br>再看「改善后」那几行:制冷能耗降下来,PUE、年耗电量与碳排放会一起等比下降——这就是为什么 PUE 优化几乎等价于节能改造。<br>但别把 PUE 当成唯一指标:低负荷运行时非 IT 用电摊在更小的 IT 负荷上,PUE 反而会变差,所以「PUE 低」必须和「负载率」一起看。</p>';
};

/* ---- 2. 供配电容量与冗余 ---- */
DTC.calcPowerCapacity = function() {
  var it = DTC._num('pc-it'), pf = DTC._num('pc-pf'), sim = DTC._num('pc-sim');
  var lr = DTC._num('pc-loadrate'), unit = DTC._num('pc-unit');
  var sel = document.getElementById('pc-red');
  var el = document.getElementById('pc-result');
  if (!el || !sel) return;
  var red = sel.value;
  if (it === null || pf === null || sim === null || lr === null || unit === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (it <= 0 || unit <= 0) { el.innerHTML = warn('IT 总功率与单台变压器容量都需大于 0。'); return; }
  if (pf <= 0 || pf > 1) { el.innerHTML = warn('功率因数需大于 0 且不超过 1(常见 0.9 左右)。'); return; }
  if (sim <= 0 || sim > 1) { el.innerHTML = warn('同时系数需大于 0 且不超过 1(常见 0.8~0.95)。'); return; }
  if (lr <= 0 || lr > 100) { el.innerHTML = warn('变压器负载率上限需在 0~100% 之间(常见 60%~80%)。'); return; }
  var load = it * sim / pf;                     // 计算负荷(kVA)
  var needCap = load / (lr / 100);              // 所需总容量(kVA)
  var needN = Math.ceil(needCap / unit);        // 负荷所需台数(台)
  if (needN < 1) needN = 1;
  var cfgN, redName, redNote;
  if (red === 'N1') { cfgN = needN + 1; redName = 'N+1'; redNote = '每 ' + needN + ' 台工作、另备 1 台'; }
  else if (red === '2N') { cfgN = needN * 2; redName = '2N'; redNote = '两套容量互为备份'; }
  else { cfgN = needN; redName = 'N'; redNote = '按负荷所需配齐,不留备用'; }
  var cfgCap = cfgN * unit;                     // 配置总容量(kVA)
  var rate = load / cfgCap * 100;               // 实际负载率(%)
  var unitRate = load / (needN * unit) * 100;   // 所需台数下的单台负载率(%)
  var judge, jcls;
  if (red === 'N') {
    judge = '无冗余(N):任一台退出,剩余容量即吃紧'; jcls = 'mid';
  } else if (red === 'N1') {
    judge = ((cfgN - 1) * unit >= load) ? '满足 N+1:失去一台仍可带全部计算负荷' : '不满足 N+1:失去一台后容量不足';
    jcls = ((cfgN - 1) * unit >= load) ? 'ok' : 'bad';
  } else {
    judge = (Math.floor(cfgN / 2) * unit >= load) ? '满足 2N:失去一半台数仍可带全部负荷' : '2N 配置下仍不满足失去一半台数带载';
    jcls = (Math.floor(cfgN / 2) * unit >= load) ? 'ok' : 'bad';
  }
  if (!isFinite(load) || !isFinite(needCap) || !isFinite(cfgCap) || !isFinite(rate)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var rows_ = [];
  rows_.push(tr('计算负荷', DTC._w(load, 1) + ' kVA', 'mid', 'IT 功率 × 同时系数 ÷ 功率因数'));
  rows_.push(tr('所需总容量', DTC._w(needCap, 1) + ' kVA', '', '计算负荷 ÷ 负载率上限 ' + DTC._w(lr, 1) + '%'));
  rows_.push(tr('所需台数', DTC._w(needN, 0) + ' 台', '', '所需总容量 ÷ 单台容量 ' + DTC._w(unit, 0) + ' kVA,向上取整'));
  rows_.push(tr('冗余配置', redName, '', redNote));
  rows_.push(tr('实际配置台数', DTC._w(cfgN, 0) + ' 台', '', '含备用台数'));
  rows_.push(tr('配置总容量', DTC._w(cfgCap, 0) + ' kVA', '', DTC._w(cfgN, 0) + ' 台 × ' + DTC._w(unit, 0) + ' kVA'));
  rows_.push(tr('实际负载率', DTC._fix(rate, 1) + ' %', rate <= lr ? 'ok' : 'bad', '计算负荷 ÷ 配置总容量,设定上限 ' + DTC._w(lr, 1) + '%'));
  rows_.push(tr('单台负载率(按工作台数)', DTC._fix(unitRate, 1) + ' %', unitRate <= lr ? 'ok' : 'mid', '计算负荷 ÷(所需台数 × 单台容量)'));
  rows_.push(tr('冗余度判定', judge, jcls, '失去一台(或一半)后,剩余容量是否仍能带全部计算负荷'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:先看「计算负荷」——它是把 IT 功率按同时系数打折、再除以功率因数之后的视在功率(kVA),这才是变压器真正要扛的量(变压器按 kVA 卖,不是按 kW)。再除以负载率上限,得到「所需总容量」,它把「不能让变压器长期满载」这条工程惯例算了进去。<br>冗余那一行是可靠性视角:N 只够带负荷;N+1 允许多一台备用,任一台故障仍能带全部负荷;2N 是两套互为备份。等级越高投资越大,可用性也越高——数据中心的 Tier 等级与冗余配置基本一一对应。<br>最后看「冗余度判定」:它检验的是「失去若干台之后,剩下的容量还够不够」。若显示不满足,说明当前配置只是刚好凑够负荷,并没有真正的备用能力。</p>';
};

/* ---- 3. 制冷负荷 ---- */
DTC.calcCoolingLoad = function() {
  var it = DTC._num('cl-it'), dt = DTC._num('cl-dt');
  var dtchw = DTC._num('cl-dtchw'), add = DTC._num('cl-add');
  var sel = document.getElementById('cl-way');
  var el = document.getElementById('cl-result');
  if (!el || !sel) return;
  var way = sel.value;
  if (it === null || dt === null || dtchw === null || add === null) {
    el.innerHTML = warn('请把五项都填上。'); return;
  }
  if (it <= 0) { el.innerHTML = warn('IT 功率需大于 0。'); return; }
  if (dt <= 0) { el.innerHTML = warn('冷通道送风温差需大于 0,否则算不出送风量。'); return; }
  if (dtchw <= 0) { el.innerHTML = warn('冷冻水供回水温差需大于 0,否则算不出水流量。'); return; }
  if (add <= 0) { el.innerHTML = warn('水泵与冷却塔附加系数需大于 0(常见 1.1~1.3)。'); return; }
  var sensible = it;                             // 显热制冷量 ≈ IT 功率(kW)
  var total = sensible * add;                    // 总冷负荷(含附加)(kW)
  var airflow = it / (1.2 * 1.005 * dt);         // 所需送风量(m³/s)
  var flow = total * 3600 / (4.18 * 1000 * dtchw);// 所需冷冻水流量(m³/h)
  var cop = way === 'liquid' ? 7 : (way === 'water' ? 5 : 3);
  var wayName = way === 'liquid' ? '液冷(冷板/浸没)' : (way === 'water' ? '水冷(冷冻水机组)' : '风冷(直膨/风冷机组)');
  var coolEnergy = total / cop;                  // 制冷能耗估算(kW)
  var coolShare = coolEnergy / it * 100;         // 制冷能耗占 IT 比(%)
  var puePart = 1 + coolEnergy / it;             // 制冷对 PUE 的贡献
  if (!isFinite(total) || !isFinite(airflow) || !isFinite(flow) || !isFinite(coolEnergy) || !isFinite(puePart)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var rows_ = [];
  rows_.push(tr('冷却方式', wayName, '', '不同方式对应的能效水平差别很大'));
  rows_.push(tr('显热制冷量', DTC._w(sensible, 1) + ' kW', '', 'IT 设备耗电最终基本都转为热量,故数值接近 IT 功率'));
  rows_.push(tr('附加系数', '× ' + DTC._fix(add, 2), '', '考虑围护、新风与输配的附加'));
  rows_.push(tr('总冷负荷(含附加)', DTC._w(total, 1) + ' kW', 'mid', '显热制冷量 × 附加系数'));
  rows_.push(tr('所需送风量', DTC._w(airflow, 1) + ' m³/s', '', 'Q ÷(1.2 kg/m³ × 1.005 kJ/kg·℃ × 送风温差 ' + DTC._w(dt, 1) + '℃)'));
  rows_.push(tr('所需冷冻水流量', DTC._w(flow, 1) + ' m³/h', '', 'Q × 3600 ÷(4.18 × 1000 × 供回水温差 ' + DTC._w(dtchw, 1) + '℃)'));
  rows_.push(tr('制冷方式能效 COP', DTC._fix(cop, 1), 'mid', '取教学用概数,风冷 ≈ 3、水冷 ≈ 5、液冷 ≈ 7'));
  rows_.push(tr('制冷系统能耗估算', DTC._w(coolEnergy, 1) + ' kW', '', '总冷负荷 ÷ COP'));
  rows_.push(tr('制冷占 IT 用电比', DTC._fix(coolShare, 1) + ' %', coolShare > 40 ? 'bad' : (coolShare > 25 ? 'mid' : 'ok'), '制冷能耗 ÷ IT 功率'));
  rows_.push(tr('对应 PUE 贡献', DTC._fix(puePart, 2), puePart <= 1.25 ? 'ok' : (puePart <= 1.4 ? 'mid' : 'bad'), '1 + 制冷能耗 ÷ IT 功率(仅制冷这一块)'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:制冷要带走的热量基本等于 IT 设备消耗的电功率(电最终都变成热),所以「显热制冷量」通常落在 IT 功率附近;真正决定电费的是最后几行——<b>总冷负荷 ÷ 该制冷方式对应的 COP</b> 就是制冷能耗,它再除以 IT 功率,就是 PUE 里制冷那一块的贡献。<br>「送风温差」与「冷冻水供回水温差」看着像小参数,其实决定了<b>风量与水量</b>:温差拉大,同样热量所需的风量水量就减小,风机与水泵的耗电跟着降——这是能效调优里最省钱的一招之一。<br>制冷方式也很关键:风冷 COP 最低、水冷居中、液冷最高,但对功率密度、场地与水质的要求依次提高。液冷场景下送风量一项参考意义有限,主要看冷冻水/CDU 侧的流量与能耗。</p>';
};

/* ---- 4. 绿电采购与碳减排 ---- */
DTC.calcGreenPower = function() {
  var use = DTC._num('gp-use'), ratio = DTC._num('gp-ratio');
  var efgrid = DTC._num('gp-efgrid'), efgreen = DTC._num('gp-efgreen');
  var price = DTC._num('gp-price'), per = DTC._num('gp-percert');
  var el = document.getElementById('gp-result');
  if (!el) return;
  if (use === null || ratio === null || efgrid === null || efgreen === null || price === null || per === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (use <= 0) { el.innerHTML = warn('年用电量需大于 0。'); return; }
  if (ratio < 0 || ratio > 100) { el.innerHTML = warn('绿电采购比例需在 0~100% 之间。'); return; }
  if (per <= 0) { el.innerHTML = warn('每张绿证对应电量需大于 0(常见 1 MWh/张)。'); return; }
  if (efgrid < 0 || efgreen < 0 || price < 0) { el.innerHTML = warn('请检查输入:排放因子与单价都不能为负数。'); return; }
  if (efgreen > efgrid) { el.innerHTML = warn('绿电排放因子不应高于电网排放因子,请检查输入。'); return; }
  var totalKwh = use * 10000;                    // 年用电量(kWh)
  var greenWan = use * ratio / 100;              // 绿电电量(万 kWh)
  var greenKwh = greenWan * 10000;               // 绿电电量(kWh)
  var certs = (greenKwh / 1000) / per;           // 绿证数量(张)
  var cost = certs * price / 10000;              // 采购成本(万元)
  var cutT = greenKwh * (efgrid - efgreen) / 1000;             // 减排量(tCO₂)
  var restKg = (totalKwh - greenKwh) * efgrid + greenKwh * efgreen;  // 剩余排放(kg)
  var restT = restKg / 1000;                     // 剩余排放(tCO₂)
  var intensity = restKg / totalKwh;             // 碳排强度(kgCO₂/kWh)
  var baseCut = totalKwh * efgrid / 1000;        // 未采购前的排放(tCO₂)
  var cutRatio = baseCut > 0 ? cutT / baseCut * 100 : 0;
  if (!isFinite(certs) || !isFinite(cost) || !isFinite(cutT) || !isFinite(restT) || !isFinite(intensity)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var rows_ = [];
  rows_.push(tr('年用电量', DTC._w(use, 1) + ' 万 kWh', '', '折合 ' + DTC._w(totalKwh, 0) + ' kWh'));
  rows_.push(tr('绿电采购比例', DTC._w(ratio, 1) + ' %', '', '按电量口径计算'));
  rows_.push(tr('绿电电量', DTC._w(greenWan, 1) + ' 万 kWh', 'mid', '年用电量 × 采购比例'));
  rows_.push(tr('绿证数量', DTC._w(certs, 0) + ' 张', '', '绿电电量(MWh)÷ 每张对应 ' + DTC._w(per, 2) + ' MWh'));
  rows_.push(tr('采购成本', DTC._w(cost, 2) + ' 万元', '', DTC._w(certs, 0) + ' 张 × ' + DTC._w(price, 2) + ' 元/张'));
  rows_.push(tr('减排量', DTC._w(cutT, 1) + ' tCO₂', 'ok', '绿电电量 ×(电网因子 ' + DTC._fix(efgrid, 3) + ' − 绿电因子 ' + DTC._fix(efgreen, 3) + ')'));
  rows_.push(tr('减排比例', DTC._fix(cutRatio, 1) + ' %', 'ok', '减排量 ÷ 未采购前的排放 ' + DTC._w(baseCut, 1) + ' tCO₂'));
  rows_.push(tr('剩余排放', DTC._w(restT, 1) + ' tCO₂', 'mid', '(总电量 − 绿电电量)× 电网因子 + 绿电电量 × 绿电因子'));
  rows_.push(tr('碳排强度', DTC._fix(intensity, 3) + ' kgCO₂/kWh', '', '剩余排放 ÷ 年用电量,即 ' + DTC._w(intensity * 1000, 0) + ' gCO₂/kWh'));
  rows_.push(tr('未采购时碳排强度', DTC._fix(efgrid, 3) + ' kgCO₂/kWh', 'bad', '等于电网排放因子'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:绿电采购的核心是「<b>用绿电替代电网电,把排放因子从电网水平降到绿电水平</b>」。减排量 = 绿电电量 ×(电网排放因子 − 绿电排放因子),因此同样的采购比例,在电网排放因子更高的地区减得更多。<br>绿证数量按「绿电电量 ÷ 每张对应电量」换算:常见口径是 1 张 = 1 MWh,若采购的证书口径不同,务必核对这一项,否则成本会差一个量级。<br>「碳排强度」这一行(kgCO₂/kWh,乘 1000 就是 gCO₂/kWh)可以和当地政策里的强度要求直接对比;若要在给定强度目标下反推需要买多少绿电,就是这道题的逆运算。<br>最后提醒:绿证与实际消纳的电量在时间、空间上未必一一对应(年度匹配与逐时匹配差别很大),本工具按「电量匹配」的简化口径计算。</p>';
};

/* ---- 5. 需求响应收益 ---- */
DTC.calcDrRevenue = function() {
  var kw = DTC._num('dr-kw'), times = DTC._num('dr-times'), hours = DTC._num('dr-hours');
  var price = DTC._num('dr-price'), capPrice = DTC._num('dr-capprice'), score = DTC._num('dr-score');
  var el = document.getElementById('dr-result');
  if (!el) return;
  if (kw === null || times === null || hours === null || price === null || capPrice === null || score === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (kw <= 0) { el.innerHTML = warn('可削减负荷需大于 0。'); return; }
  if (score < 0 || score > 1) { el.innerHTML = warn('考核系数需在 0~1 之间(0.9 表示打九折)。'); return; }
  if (times < 0 || hours < 0 || price < 0 || capPrice < 0) { el.innerHTML = warn('请检查输入:次数、时长与单价都不能为负数。'); return; }
  var perKwh = kw * hours;                       // 单次响应电量(kWh)
  var yearKwh = perKwh * times;                  // 年响应电量(kWh)
  var yearWan = yearKwh / 10000;                 // 年响应电量(万 kWh)
  var capRev = kw * capPrice / 10000;            // 容量收益(万元)
  var kwhRev = yearKwh * price / 10000;          // 电量收益(万元)
  var gross = capRev + kwhRev;                   // 考核前合计(万元)
  var net = gross * score;                       // 考核后实际收益(万元)
  var perKw = net * 10000 / kw;                  // 单 kW 年收益(元/kW)
  if (!isFinite(perKwh) || !isFinite(yearWan) || !isFinite(capRev) || !isFinite(kwhRev) || !isFinite(net) || !isFinite(perKw)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var rows_ = [];
  rows_.push(tr('单次响应电量', DTC._w(perKwh, 0) + ' kWh', '', '可削减负荷 × 单次时长'));
  rows_.push(tr('年响应电量', DTC._w(yearWan, 1) + ' 万 kWh', 'mid', '单次响应电量 × 参与次数 ' + DTC._w(times, 0) + ' 次'));
  rows_.push(tr('容量收益', DTC._w(capRev, 2) + ' 万元', 'ok', '可削减负荷 × 容量补贴 ' + DTC._w(capPrice, 0) + ' 元/kW·年'));
  rows_.push(tr('电量收益', DTC._w(kwhRev, 2) + ' 万元', 'ok', '年响应电量 × 度电补贴 ' + DTC._w(price, 2) + ' 元/kWh'));
  rows_.push(tr('考核前合计', DTC._w(gross, 2) + ' 万元', 'mid', '容量收益 + 电量收益'));
  rows_.push(tr('考核后实际收益', DTC._w(net, 2) + ' 万元', net > 0 ? 'ok' : 'mid', '合计 × 考核系数 ' + DTC._fix(score, 2)));
  rows_.push(tr('考核折减', DTC._w(gross - net, 2) + ' 万元', 'bad', '因考核系数小于 1 而少拿的部分'));
  rows_.push(tr('单 kW 年收益', DTC._w(perKw, 1) + ' 元/kW', net > 0 ? 'ok' : 'mid', '考核后实际收益 ÷ 可削减负荷'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:需求响应收益是两块拼起来的——<b>容量补贴</b>按「你能承诺让出多少可调容量」给,一年固定拿;<b>度电补贴</b>按「每次实际响应了多少电量」给,取决于参与次数与单次时长。<br>量纲要分清:年响应电量 = 可削减负荷 × 单次时长 × 实现次数,再乘度电补贴;容量收益 = 可削减负荷 × 容量补贴单价,两者单位不同,不能相加后再统一乘补贴。<br>「考核系数」是把承诺变成现实的折扣:响应不及时、削减不到位都会打折。系数从 0.9 提到 1.0,往往比多参与几次更值钱。<br>「单 kW 年收益」把不同规模的项目拉到同一把尺子上,可以和每千瓦每年的固定成本直接比,是判断这件事值不值得做的起点。</p>';
};

/* ---- 6. 算电协同调节能力 ---- */
DTC.calcSynergyFlex = function() {
  var it = DTC._num('sf-it'), share = DTC._num('sf-share'), win = DTC._num('sf-window');
  var rng = DTC._num('sf-range');
  var sel = document.getElementById('sf-delay');
  var el = document.getElementById('sf-result');
  if (!el || !sel) return;
  var tol = DTC._num('sf-delay');
  if (it === null || share === null || win === null || tol === null || rng === null) {
    el.innerHTML = warn('请把五项都填上。'); return;
  }
  if (it <= 0) { el.innerHTML = warn('IT 总功率需大于 0。'); return; }
  if (share < 0 || share > 100) { el.innerHTML = warn('可迁移/可中断负载占比需在 0~100% 之间。'); return; }
  if (rng < 0 || rng > 100) { el.innerHTML = warn('算力功率调节上下限需在 0~100% 之间。'); return; }
  if (win < 0 || tol < 0) { el.innerHTML = warn('可调节时段与任务时延容忍度都不能为负数。'); return; }
  var pflex = it * share / 100;                  // 可调节负载功率(kW)
  var depth = rng / 100;
  var up = pflex * depth;                        // 可上调容量(kW)
  var down = pflex * depth;                      // 可下调容量(kW)
  var eff = Math.min(win, tol);                  // 有效调节时长(h)
  var energy = down * eff;                       // 可调电量(单次)(kWh)
  var equiv = (up + down) * eff;                 // 等效储能容量(双向)(kWh)
  var timesPerDay = eff > 0 ? Math.floor(24 / eff) : 0;   // 日可调节次数(理想值)
  var respCap = down;                            // 可申报辅助服务/需求响应容量(kW)
  var flexRatio = it > 0 ? pflex / it * 100 : 0;
  if (!isFinite(pflex) || !isFinite(up) || !isFinite(down) || !isFinite(energy) || !isFinite(equiv) || !isFinite(respCap)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var rows_ = [];
  rows_.push(tr('可调节负载功率', DTC._w(pflex, 1) + ' kW', 'mid', 'IT 总功率 × 可迁移/可中断占比 ' + DTC._w(share, 1) + '%'));
  rows_.push(tr('调节深度', '± ' + DTC._fix(rng, 1) + ' %', '', '算力功率的调节上下限'));
  rows_.push(tr('可上调容量', DTC._w(up, 1) + ' kW', 'ok', '可调节负载 × 调节深度(电网需要多用电时增加算力)'));
  rows_.push(tr('可下调容量', DTC._w(down, 1) + ' kW', 'ok', '可调节负载 × 调节深度(削峰与需求响应时削减算力)'));
  rows_.push(tr('有效调节时长', DTC._w(eff, 1) + ' h', '', '可调节时段 ' + DTC._w(win, 1) + ' h 与时延容忍度 ' + DTC._w(tol, 0) + ' h 取小'));
  rows_.push(tr('可调电量(单次)', DTC._w(energy, 0) + ' kWh', 'mid', '可下调容量 × 有效调节时长'));
  rows_.push(tr('等效储能容量', DTC._w(equiv, 0) + ' kWh', 'mid', '(可上调 + 可下调)× 有效调节时长,相当于双向可用的一块电池'));
  rows_.push(tr('日可调节次数', DTC._w(timesPerDay, 0) + ' 次', '', '按每段调节后即回到原状、24 h ÷ 有效时长估算的理想值'));
  rows_.push(tr('可申报辅助服务/需求响应容量', DTC._w(respCap, 1) + ' kW', 'ok', '以可下调容量作为可申报能力,仍须满足响应时间与持续时长要求'));
  rows_.push(tr('可调节率', DTC._fix(flexRatio, 1) + ' %', '', '可调节负载功率 ÷ IT 总功率'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:算电协同可调能力的上限,取决于三件事——<b>有多少负载真能挪、能停</b>(占比)、<b>能停多久</b>(可调节时段与时延容忍度取小)、<b>功率能在多大范围内上下调</b>(±%)。<br>「可调电量」按单次调节算:可下调容量 × 有效调节时长;再乘上一天里的可用调节次数,才是理论上一天能让出的总量。「等效储能容量」把上调与下调两向合起来看,相当于在机房里放了一块既能充、又能放的电池,这也是数据中心能参与电力市场的物理基础。<br>要参与辅助服务或需求响应,真正要申报的是「可下调容量」这一行,而且必须满足规则要求的响应时间与持续时长——时延容忍度越宽松,可申报的容量才越稳。<br>别把「可中断」全押上:批处理与训练任务可以停,在线推理停了就是事故,可调节占比必须按业务性质老老实实地填。</p>';
};

/* ---- 7. 数据中心用电成本 ---- */
DTC.calcDcCost = function() {
  var use = DTC._num('dc-use'), avg = DTC._num('dc-avg');
  var pPct = DTC._num('dc-peak-pct'), pPrice = DTC._num('dc-peak-price');
  var vPct = DTC._num('dc-valley-pct'), vPrice = DTC._num('dc-valley-price');
  var demKw = DTC._num('dc-demand'), demPrice = DTC._num('dc-demand-price');
  var shift = DTC._num('dc-shift');
  var el = document.getElementById('dc-cost-result');
  if (!el) return;
  if (use === null || avg === null || pPct === null || pPrice === null || vPct === null ||
      vPrice === null || demKw === null || demPrice === null || shift === null) {
    el.innerHTML = warn('请把九项都填上。'); return;
  }
  if (use <= 0) { el.innerHTML = warn('年用电量需大于 0。'); return; }
  if (pPct + vPct > 100) { el.innerHTML = warn('峰段与谷段电量占比之和不能超过 100%(剩下的是平段)。'); return; }
  if (pPct < 0 || vPct < 0 || shift < 0 || shift > 100) { el.innerHTML = warn('请检查输入:占比与可转移比例都应在 0~100% 之间。'); return; }
  if (pPrice < 0 || vPrice < 0 || demKw < 0 || demPrice < 0 || avg < 0) { el.innerHTML = warn('请检查输入:电价与需量都不能为负数。'); return; }
  var fPct = 100 - pPct - vPct;                  // 平段占比(%)
  var peakQty = use * pPct / 100;                // 峰段电量(万 kWh)
  var valleyQty = use * vPct / 100;              // 谷段电量(万 kWh)
  var flatQty = use * fPct / 100;                // 平段电量(万 kWh)
  var peakFee = peakQty * pPrice;                // 峰段电费(万元)
  var valleyFee = valleyQty * vPrice;            // 谷段电费(万元)
  var flatFee = avg * use - peakFee - valleyFee; // 平段电费(万元,由平均电价反算)
  var flatPrice = flatQty > 0 ? flatFee / flatQty : 0;   // 平段电价(元/kWh)
  var energyFee = peakFee + valleyFee + flatFee;         // 电量电费小计(万元)
  var demandFee = demKw * demPrice * 12 / 10000;         // 基本电费(万元)
  var totalFee = energyFee + demandFee;                  // 年电费(万元)
  var landed = totalFee / use;                           // 综合到户电价(元/kWh)
  var energyAvg = energyFee / use;                       // 电量到户均价(元/kWh)
  // 峰谷优化:把峰段电量的一部分转移到谷段,需量不变
  var shiftQty = peakQty * shift / 100;                  // 转移电量(万 kWh)
  var peakQty2 = peakQty - shiftQty;
  var valleyQty2 = valleyQty + shiftQty;
  var peakFee2 = peakQty2 * pPrice;
  var valleyFee2 = valleyQty2 * vPrice;
  var totalFee2 = peakFee2 + valleyFee2 + flatFee + demandFee;
  var saveFee = totalFee - totalFee2;
  var landed2 = totalFee2 / use;
  if (!isFinite(flatFee) || !isFinite(totalFee) || !isFinite(landed) || !isFinite(saveFee)) {
    el.innerHTML = warn('请检查输入:数值需为可计算的有限数字。'); return;
  }
  var share = function(x) { return totalFee > 0 ? x / totalFee * 100 : 0; };
  var rows_ = [];
  rows_.push(tr('峰段电量 / 电价', DTC._w(peakQty, 1) + ' 万 kWh / ' + DTC._w(pPrice, 2) + ' 元/kWh', '', '占年用电量 ' + DTC._w(pPct, 1) + '%'));
  rows_.push(tr('平段电量 / 电价', DTC._w(flatQty, 1) + ' 万 kWh / ' + DTC._w(flatPrice, 2) + ' 元/kWh', '', '占比 ' + DTC._w(fPct, 1) + '%,电价由平均电价反算'));
  rows_.push(tr('谷段电量 / 电价', DTC._w(valleyQty, 1) + ' 万 kWh / ' + DTC._w(vPrice, 2) + ' 元/kWh', '', '占年用电量 ' + DTC._w(vPct, 1) + '%'));
  rows_.push(tr('峰段电费', DTC._w(peakFee, 2) + ' 万元', '', '峰段电量 × 峰段电价'));
  rows_.push(tr('平段电费', DTC._w(flatFee, 2) + ' 万元', '', '平段电量 × 平段电价'));
  rows_.push(tr('谷段电费', DTC._w(valleyFee, 2) + ' 万元', '', '谷段电量 × 谷段电价'));
  rows_.push(tr('电量电费小计', DTC._w(energyFee, 2) + ' 万元', 'mid', '峰 + 平 + 谷,÷ 年用电量应回到平均电价 ' + DTC._w(avg, 2) + ' 元/kWh'));
  rows_.push(tr('基本电费(最大需量)', DTC._w(demandFee, 2) + ' 万元', 'mid', DTC._w(demKw, 0) + ' kW × ' + DTC._w(demPrice, 0) + ' 元/kW·月 × 12'));
  rows_.push(tr('年电费合计', DTC._w(totalFee, 2) + ' 万元', 'ok', '电量电费 + 基本电费'));
  rows_.push(tr('综合到户电价', DTC._w(landed, 4) + ' 元/kWh', '', '年电费合计 ÷ 年用电量,其中电量部分均价 ' + DTC._w(energyAvg, 4) + ' 元/kWh'));
  rows_.push(tr('峰谷优化后年电费', DTC._w(totalFee2, 2) + ' 万元', 'ok', '把峰段电量 ' + DTC._w(shift, 1) + '%(即 ' + DTC._w(shiftQty, 1) + ' 万 kWh)转移到谷段,需量不变'));
  rows_.push(tr('峰谷优化节省', DTC._w(saveFee, 2) + ' 万元', saveFee > 0 ? 'ok' : 'mid', '优化前 − 优化后,占原年电费 ' + DTC._w(totalFee > 0 ? saveFee / totalFee * 100 : 0, 1) + '%'));
  rows_.push(tr('优化后综合到户电价', DTC._w(landed2, 4) + ' 元/kWh', 'ok', '优化后年电费 ÷ 年用电量'));
  rows_.push(tr('度电成本构成:峰段', DTC._w(peakFee / use, 4) + ' 元/kWh', '', '占综合到户电价 ' + DTC._fix(share(peakFee), 1) + '%'));
  rows_.push(tr('度电成本构成:平段', DTC._w(flatFee / use, 4) + ' 元/kWh', '', '占综合到户电价 ' + DTC._fix(share(flatFee), 1) + '%'));
  rows_.push(tr('度电成本构成:谷段', DTC._w(valleyFee / use, 4) + ' 元/kWh', '', '占综合到户电价 ' + DTC._fix(share(valleyFee), 1) + '%'));
  rows_.push(tr('度电成本构成:基本电费', DTC._w(demandFee / use, 4) + ' 元/kWh', 'mid', '占综合到户电价 ' + DTC._fix(share(demandFee), 1) + '%'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-note">读法:电费由三块组成——<b>峰/平/谷的电量电费</b>、<b>按最大需量收取的基本电费</b>,以及各类政府性基金与分摊(本工具未含)。这里先用平均电价反算出平段电价,再用「电量电费小计 ÷ 年用电量」做校核,应当正好回到你填的平均电价,可以用来检查峰谷口径是否自洽。<br>「综合到户电价」高于平均电价,差额正是基本电费摊进每一度电的部分——这也是为什么<b>降低最大需量</b>与<b>降低总电量</b>同样重要,削峰不只是省电量钱。<br>「峰谷优化」假设把峰段电量的一部分挪到谷段(需量不变),省下来的钱约等于价差 × 转移电量。能挪多少,取决于有多少负荷真的能从峰段移走(批处理、备份、可迁移算力),这也是算电协同最直接的收益来源。<br>注意本工具把峰谷电价当作固定值,而真实电价随季节、月份与市场波动,实际测算须以现行电价文件为准。</p>';
};

/* ===== 模块页 ===== */
DTC.views.module = function(id) {
  var mod = DTC.modules.find(function(m) { return m.id === id; });
  if (!mod) { DTC.views.home(); return; }
  var P = DTC.progress();
  var lessons = DTC.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + DTC.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + DTC.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = DTC.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + DTC.esc(title) + '</a>';
    else html += '<span class="title">' + DTC.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及能耗与 PUE 要求、供配电与制冷方案、绿电采购、需求响应与算力调度规则，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>，请以现行国家标准与行业规范、主管部门文件和市场规则为准。本站不构成工程设计、设备选型、采购、投资或合规依据。</p></div>';
  html += '</div>';
  DTC.render(html);
};

/* ===== 术语 ===== */
DTC.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>数据中心与算电协同名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 PUE / 供配电 / 冗余 / 液冷 / 绿电 / 碳排 / 需求响应 / 算电协同" oninput="DTC.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(DTC.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与国家标准、行业规范与政策文件中的正式定义可能存在简化差异。涉及具体适用时请查阅标准与文件原文及专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  DTC.render(html);
};
DTC.filterTerms = function(q) {
  var filtered = DTC.terms;
  if (q) { q = q.toLowerCase();
    filtered = DTC.terms.filter(function(t) {
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
    html += '<div class="term-name">' + DTC.esc(t.name) + ' <span class="term-en">' + DTC.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + DTC.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + DTC.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
DTC.views.myTerms = function() {
  var P = DTC.progress(); var collected = [];
  for (var i = 0; i < DTC.terms.length; i++) if (P.hasTerm(DTC.terms[i].id)) collected.push(DTC.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  DTC.render(html);
};

/* ===== 搜索 ===== */
DTC.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 PUE / 供配电 / 冗余 / 液冷 / 绿电 / 碳排 / 需求响应 / 算电协同" oninput="DTC.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  DTC.render(html);
};
DTC.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = DTC.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + DTC.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + DTC.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
DTC.views.settings = function() {
  var P = DTC.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="DTC.setTheme(\'dark\')">深色 · 天蓝</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="DTC.setTheme(\'light\')">浅色 · 深青蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="DTC.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="DTC.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="DTC.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = DTC.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/dtc-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/dtc-progress" value="' + DTC.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + DTC.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + DTC.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + DTC.esc(DTC.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="DTC.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="DTC.clearData()">清除数据</button></div>';
  html += '</div>';
  DTC.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    DTC.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!DTC.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    DTC.sync.pullNow().then(function () { return DTC.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + DTC.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    DTC.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : DTC.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    DTC.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
DTC.setTheme = function(t) { document.documentElement.dataset.theme = t; DTC.progress().setPref('theme', t); DTC.views.settings(); };
DTC.setFontSize = function(s) { document.documentElement.dataset.fs = s; DTC.progress().setPref('fontSize', s); DTC.views.settings(); };
DTC.exportData = function() {
  var data = DTC.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dtc-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
DTC.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('dtc.progress.v1');
    window.location.reload();
  }
};
