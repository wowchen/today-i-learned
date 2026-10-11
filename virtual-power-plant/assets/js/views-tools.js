/* 工具视图:本站七件虚拟电厂互动工具(可调容量聚合测算 / 需求响应收益测算 / 基线负荷与核减测算 /
   聚合商分成测算 / 参与辅助服务收益测算 / 车网互动收益测算 / 虚拟电厂项目投资测算)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、采购、招标、投资或合规依据。 */
window.VPP = window.VPP || {};
VPP.views = VPP.views || {};

VPP._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
VPP._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
VPP._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
VPP.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">虚拟电厂这件事,很多账可以先算一算:<b>一堆散资源加起来到底能调多少、参加一次需求响应能挣多少、基线怎么算才被承认、聚合商和资源方怎么分、去辅助服务市场能挣多少、让电动车反向放电划不划算、这个项目几年回本</b>。全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>七件工具均为<b>极度简化的教学测算</b>:单价、分成比例、考核系数与基线口径为便于理解的示例概数,不体现真实的需求响应补偿标准、辅助服务市场规则、基线核定算法、结算细则与项目财务模型。<b>不作为工程设计、采购、招标、投资测算、报价或合规依据。</b>实际项目须以现行价格文件、市场规则、并网与接入规范、聚合商准入要求与企业台账为准。</p>';
  html += '</div>';

  // 1. 可调容量聚合测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>可调容量聚合测算器</h3>';
  html += '<p class="lab-desc">一堆分散资源加起来,到底能当多大的「电厂」用?填各类资源的数量与单体可调容量,再打上同时率与可用率的折扣,看<b>名义可调容量、有效可调容量、满足响应速度的资源占比,以及折合到单户的平均容量</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>可中断负荷 · 户数<input type="number" id="ac-il-count" step="1" value="50" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>可中断负荷 · 单体可调(kW)<input type="number" id="ac-il-cap" step="1" value="20" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>空调 · 台数<input type="number" id="ac-ac-count" step="10" value="200" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>空调 · 单体可调(kW)<input type="number" id="ac-ac-cap" step="0.5" value="3" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>储能 · 台数<input type="number" id="ac-es-count" step="1" value="10" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>储能 · 单体可调(kW)<input type="number" id="ac-es-cap" step="10" value="100" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>电动汽车 · 辆数<input type="number" id="ac-ev-count" step="10" value="100" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>电动汽车 · 单体可调(kW)<input type="number" id="ac-ev-cap" step="1" value="7" min="0" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>同时率(%)<input type="number" id="ac-coinc" step="5" value="80" min="0" max="100" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>可用率(%)<input type="number" id="ac-avail" step="5" value="90" min="0" max="100" oninput="VPP.calcAggCapacity()"></label>';
  html += '<label>响应速度要求<select id="ac-speed" onchange="VPP.calcAggCapacity()"><option value="second" selected>秒级(≤ 1 s)</option><option value="minute">分钟级(≤ 1 min)</option><option value="hour">小时级(≤ 1 h)</option></select></label>';
  html += '</div>';
  html += '<div id="ac-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 需求响应收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◧</span>需求响应收益测算器</h3>';
  html += '<p class="lab-desc">把可调容量拿去参加需求响应,一年能挣多少、最后到资源方手里还剩多少?填容量、次数与各项补贴,看<b>单次响应电量、年响应电量、容量收益、电量收益、考核后总收益,以及聚合商分成与资源方实得</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>有效响应容量(kW)<input type="number" id="dr-cap" step="100" value="2000" min="0" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>年参与次数(次/年)<input type="number" id="dr-times" step="1" value="30" min="0" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>单次时长(h/次)<input type="number" id="dr-hours" step="0.5" value="2" min="0" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>度电补贴(元/kWh)<input type="number" id="dr-energy" step="0.1" value="1" min="0" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>容量补贴(元/kW·年)<input type="number" id="dr-capprice" step="10" value="100" min="0" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>考核系数<input type="number" id="dr-score" step="0.01" value="0.95" min="0" max="1" oninput="VPP.calcDrIncome()"></label>';
  html += '<label>聚合商分成比例(%)<input type="number" id="dr-share" step="5" value="20" min="0" max="100" oninput="VPP.calcDrIncome()"></label>';
  html += '</div>';
  html += '<div id="dr-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 基线负荷与核减测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇥</span>基线负荷与核减测算器</h3>';
  html += '<p class="lab-desc">响应量怎么算才被电网承认?用「响应时段基线负荷」减去「实际负荷」得到响应量,再按基线核减方法打折,看<b>响应量、响应电量、核定响应量、是否达到门槛,以及核减量与核减率</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>日平均基线负荷(kW)<input type="number" id="bl-avg" step="10" value="500" min="0" oninput="VPP.calcBaseline()"></label>';
  html += '<label>响应时段基线负荷(kW)<input type="number" id="bl-peak" step="10" value="800" min="0" oninput="VPP.calcBaseline()"></label>';
  html += '<label>响应时段实际负荷(kW)<input type="number" id="bl-actual" step="10" value="500" min="0" oninput="VPP.calcBaseline()"></label>';
  html += '<label>响应时段长度(h)<input type="number" id="bl-hours" step="0.5" value="2" min="0" oninput="VPP.calcBaseline()"></label>';
  html += '<label>基线核减方法<select id="bl-method" onchange="VPP.calcBaseline()"><option value="avg">平均法(系数 1.00)</option><option value="maxn">前 N 日最大(系数 0.95)</option><option value="sim3" selected>前 3 日相似日(系数 0.90)</option></select></label>';
  html += '<label>最小响应门槛(kW)<input type="number" id="bl-threshold" step="10" value="200" min="0" oninput="VPP.calcBaseline()"></label>';
  html += '</div>';
  html += '<div id="bl-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 聚合商分成测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≣</span>聚合商分成测算器</h3>';
  html += '<p class="lab-desc">一个虚拟电厂项目挣了钱,聚合商拿多少、每户拿多少、平台养不养得起?填年总收益、分成比例与成本,看<b>聚合商毛收入、净收益、单户实得、平台单位资源成本与盈亏平衡所需资源数</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>项目年总收益(万元)<input type="number" id="as-total" step="10" value="200" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>聚合商分成比例(%)<input type="number" id="as-share" step="5" value="25" min="0" max="100" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>平台与运维成本(万元/年)<input type="number" id="as-cost" step="5" value="30" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>签约资源数(户)<input type="number" id="as-users" step="10" value="500" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>单户年均分成(万元)<input type="number" id="as-peruser" step="0.05" value="0.2" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>单户平均可调容量(kW)<input type="number" id="as-percap" step="1" value="5" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '<label>保底补贴(万元/年)<input type="number" id="as-floor" step="5" value="10" min="0" oninput="VPP.calcAggregatorSplit()"></label>';
  html += '</div>';
  html += '<div id="as-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 参与辅助服务收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>参与辅助服务收益测算器</h3>';
  html += '<p class="lab-desc">虚拟电厂去给电网打下手,一年能挣多少?填申报容量、补偿单价与调用情况,看<b>容量收益、里程收益、考核折减、合计收益与单位容量收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>申报容量(kW)<input type="number" id="av-cap" step="100" value="5000" min="0" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>服务类型<select id="av-type" onchange="VPP.calcAncillaryVpp()"><option value="freq" selected>调频</option><option value="peak">调峰</option><option value="reserve">备用</option></select></label>';
  html += '<label>容量补偿单价(元/kW)<input type="number" id="av-capprice" step="5" value="60" min="0" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>补偿计价周期<select id="av-period" onchange="VPP.calcAncillaryVpp()"><option value="year" selected>元/kW·年</option><option value="month">元/kW·月</option></select></label>';
  html += '<label>里程 / 电量补偿(元/kWh)<input type="number" id="av-mileprice" step="0.05" value="0.3" min="0" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>年调用次数(次/年)<input type="number" id="av-times" step="10" value="200" min="0" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>单次调用时长(h)<input type="number" id="av-hours" step="0.5" value="1" min="0" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>考核系数<input type="number" id="av-score" step="0.01" value="0.95" min="0" max="1" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '<label>性能折算(0~1)<input type="number" id="av-perf" step="0.05" value="0.9" min="0" max="1" oninput="VPP.calcAncillaryVpp()"></label>';
  html += '</div>';
  html += '<div id="av-result" class="calc-result"></div>';
  html += '</div>';

  // 6. 车网互动收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⇄</span>车网互动收益测算器</h3>';
  html += '<p class="lab-desc">让电动车在高峰反向放电,赚的价差够不够抵电池折损?填车辆、时长与三档电价,看<b>总可调容量、年放电量、毛收益、充电与折损成本、净收益,以及单车年收益</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>参与车辆数(辆)<input type="number" id="v2g-cars" step="10" value="500" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>单车平均可调容量(kW)<input type="number" id="v2g-percap" step="0.5" value="7" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>平均每天可参与时长(h)<input type="number" id="v2g-hours" step="0.5" value="2" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>年参与天数(天/年)<input type="number" id="v2g-days" step="10" value="300" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>放电电价(元/kWh)<input type="number" id="v2g-sell" step="0.05" value="0.9" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>充电成本(元/kWh)<input type="number" id="v2g-charge" step="0.05" value="0.4" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>电池折损成本(元/kWh)<input type="number" id="v2g-degrade" step="0.01" value="0.15" min="0" oninput="VPP.calcV2gIncome()"></label>';
  html += '<label>可参与率(%)<input type="number" id="v2g-rate" step="5" value="60" min="0" max="100" oninput="VPP.calcV2gIncome()"></label>';
  html += '</div>';
  html += '<div id="v2g-result" class="calc-result"></div>';
  html += '</div>';

  // 7. 虚拟电厂项目投资测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◍</span>虚拟电厂项目投资测算器</h3>';
  html += '<p class="lab-desc">投一座虚拟电厂(平台 + 聚合资源改造),几年回本、划不划算?填投资、运营成本、年收益与折现率,看<b>年净收益、静态回收期、NPV、IRR、投资回报倍数与可行性判定</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>项目初始投资(万元)<input type="number" id="vi-invest" step="100" value="3000" min="0" oninput="VPP.calcVppInvest()"></label>';
  html += '<label>年运营成本(万元)<input type="number" id="vi-om" step="10" value="120" min="0" oninput="VPP.calcVppInvest()"></label>';
  html += '<label>年收益(万元)<input type="number" id="vi-revenue" step="10" value="600" min="0" oninput="VPP.calcVppInvest()"></label>';
  html += '<label>运营年限(年)<input type="number" id="vi-years" step="1" value="10" min="1" oninput="VPP.calcVppInvest()"></label>';
  html += '<label>折现率(%)<input type="number" id="vi-rate" step="0.5" value="8" min="0" oninput="VPP.calcVppInvest()"></label>';
  html += '<label>项目残值(万元)<input type="number" id="vi-residual" step="10" value="200" min="0" oninput="VPP.calcVppInvest()"></label>';
  html += '</div>';
  html += '<div id="vi-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:七件工具均为教学用简化建模,单价、比例与系数取行业常见量级概数。<b>实际项目必须依据现行需求响应补偿标准、辅助服务市场规则、聚合商准入要求、结算办法与真实运行数据单独核算</b>,本工具结果不作为投资决策、报价、融资、招标或合规依据。</p>';
  html += '</div>';

  VPP.render(html);
  VPP.calcAggCapacity(); VPP.calcDrIncome(); VPP.calcBaseline(); VPP.calcAggregatorSplit();
  VPP.calcAncillaryVpp(); VPP.calcV2gIncome(); VPP.calcVppInvest();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }
function tbl(rows) { return '<table class="cr-table"><tbody>' + rows.join('') + '</tbody></table>'; }

/* ---- 1. 可调容量聚合测算 ---- */
VPP.calcAggCapacity = function() {
  var ilN = VPP._num('ac-il-count'), ilC = VPP._num('ac-il-cap');
  var acN = VPP._num('ac-ac-count'), acC = VPP._num('ac-ac-cap');
  var esN = VPP._num('ac-es-count'), esC = VPP._num('ac-es-cap');
  var evN = VPP._num('ac-ev-count'), evC = VPP._num('ac-ev-cap');
  var coinc = VPP._num('ac-coinc'), avail = VPP._num('ac-avail');
  var el = document.getElementById('ac-result');
  if (!el) return;
  if (ilN === null || ilC === null || acN === null || acC === null || esN === null || esC === null ||
      evN === null || evC === null || coinc === null || avail === null) {
    el.innerHTML = warn('请把各类资源的数量与单体可调容量,以及同时率、可用率都填上。'); return;
  }
  var ilP = ilN * ilC, acP = acN * acC, esP = esN * esC, evP = evN * evC;
  var nameplate = ilP + acP + esP + evP;                    // 名义可调容量(kW)
  if (nameplate <= 0) { el.innerHTML = warn('可调资源总容量为 0,请检查各类资源的数量与单体可调容量。'); return; }
  var units = ilN + acN + esN + evN;                        // 资源单元数(户/台/辆)
  var eff = nameplate * coinc / 100 * avail / 100;          // 有效可调容量(kW)
  var spEl = document.getElementById('ac-speed');
  var req = spEl ? spEl.value : 'second';
  var reqRank = req === 'second' ? 3 : (req === 'minute' ? 2 : 1);
  var reqName = req === 'second' ? '秒级' : (req === 'minute' ? '分钟级' : '小时级');
  // 各类资源的响应速度等级:可中断负荷=分钟级,空调/储能/电动汽车=秒级
  var items = [
    { n: '可中断负荷', p: ilP, rank: 2 },
    { n: '空调', p: acP, rank: 3 },
    { n: '储能', p: esP, rank: 3 },
    { n: '电动汽车', p: evP, rank: 3 }
  ];
  var meet = 0;
  for (var i = 0; i < items.length; i++) if (items[i].rank >= reqRank) meet += items[i].p;
  var meetPct = nameplate > 0 ? meet / nameplate * 100 : 0;
  var perUnit = units > 0 ? eff / units : 0;
  var rows_ = [];
  for (var j = 0; j < items.length; j++) {
    var okSpeed = items[j].rank >= reqRank;
    rows_.push(tr(items[j].n + '名义容量', VPP._w(items[j].p, 1) + ' kW', '',
      okSpeed ? '满足' + reqName + '要求' : '达不到' + reqName + '要求,不计入满足占比'));
  }
  rows_.push(tr('名义可调容量合计', VPP._w(nameplate, 1) + ' kW', 'cr-warn', '四类资源单体容量 × 数量的总和'));
  rows_.push(tr('同时率 / 可用率', VPP._w(coinc, 1) + ' % / ' + VPP._w(avail, 1) + ' %', '', '同时率刻画同一时刻能一起调出的比例;可用率刻画设备在线可调的比例'));
  rows_.push(tr('有效可调容量', VPP._w(eff, 1) + ' kW', 'cr-good', '名义容量 × 同时率 × 可用率'));
  rows_.push(tr('满足响应速度的资源容量', VPP._w(meet, 1) + ' kW', '', '本场景要求' + reqName + ',仅统计响应速度够快的资源'));
  rows_.push(tr('满足响应速度的资源占比', VPP._fix(meetPct, 2) + ' %', meetPct >= 99.99 ? 'cr-good' : 'cr-warn',
    '满足速度的资源容量 ÷ 名义可调容量'));
  rows_.push(tr('折合单户平均容量', (units > 0 ? VPP._w(perUnit, 2) + ' kW / 户' : '—'), 'cr-good',
    units > 0 ? '有效可调容量 ÷ 资源单元数(' + VPP._w(units, 0) + ' 户/台/辆)' : '资源单元数为 0'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:虚拟电厂的可调容量不是把各家容量简单相加,而是要连打两次折扣——<b>同时率</b>回答「同一时刻大家能不能一起动」,<b>可用率</b>回答「设备是不是真的在线」。所以「名义容量」往往好看,「有效可调容量」才是能拿去申报和结算的口径。<br>再看「满足响应速度的资源占比」:可中断负荷通常只能做到分钟级,而空调、储能、电动汽车可以做到秒级。<b>把要求从秒级放宽到分钟级,可调容量会立刻变大</b>——这说明了速度与容量之间的取舍:能调得快的那部分,往往是更贵、更稀缺的。<br>最后一行的「折合单户平均容量」是把总量摊到每个资源单元上,用来判断谈判和推广的边际价值:一个户均只有几 kW 的资源池,靠数量堆规模,签约和维护成本会成为主要矛盾。</p>';
};

/* ---- 2. 需求响应收益 ---- */
VPP.calcDrIncome = function() {
  var cap = VPP._num('dr-cap'), times = VPP._num('dr-times'), hours = VPP._num('dr-hours');
  var energyPrice = VPP._num('dr-energy'), capPrice = VPP._num('dr-capprice');
  var score = VPP._num('dr-score'), share = VPP._num('dr-share');
  var el = document.getElementById('dr-result');
  if (!el) return;
  if (cap === null || times === null || hours === null || energyPrice === null ||
      capPrice === null || score === null || share === null) {
    el.innerHTML = warn('请把七项都填上。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('有效响应容量要大于 0,否则没有可参与响应的容量。'); return; }
  var perEnergy = cap * hours;                                  // 单次响应电量(kWh)
  var yearEnergy = perEnergy * times;                           // 年响应电量(kWh)
  var yearEnergyW = yearEnergy / 10000;                         // 年响应电量(万 kWh)
  var capIncome = cap * capPrice / 10000;                       // 容量收益(万元)
  var energyIncome = yearEnergyW * energyPrice;                 // 电量收益(万元)
  var gross = capIncome + energyIncome;                         // 考核前毛收益(万元)
  var total = gross * score;                                    // 考核后总收益(万元)
  var aggShare = total * share / 100;                           // 聚合商分成(万元)
  var resShare = total - aggShare;                              // 资源方实得(万元)
  var rows_ = [];
  rows_.push(tr('单次响应电量', VPP._w(perEnergy, 2) + ' kWh', '', '有效响应容量 × 单次时长 ' + VPP._fix(hours, 1) + ' h'));
  rows_.push(tr('年响应电量', VPP._w(yearEnergyW, 2) + ' 万 kWh', '', '单次响应电量 × 年参与次数 ' + VPP._fix(times, 0) + ' 次'));
  rows_.push(tr('容量收益', VPP._w(capIncome, 2) + ' 万元', 'cr-warn', '有效响应容量 × 容量补贴单价'));
  rows_.push(tr('电量收益', VPP._w(energyIncome, 2) + ' 万元', 'cr-warn', '年响应电量 × 度电补贴'));
  rows_.push(tr('考核前毛收益', VPP._w(gross, 2) + ' 万元', '', '容量收益 + 电量收益'));
  rows_.push(tr('考核后总收益', VPP._w(total, 2) + ' 万元', 'cr-good', '毛收益 × 考核系数 ' + VPP._fix(score, 2)));
  rows_.push(tr('聚合商分成', VPP._w(aggShare, 2) + ' 万元', '', '考核后总收益 × 聚合商分成比例 ' + VPP._fix(share, 1) + '%'));
  rows_.push(tr('资源方实得', VPP._w(resShare, 2) + ' 万元', 'cr-good', '考核后总收益 − 聚合商分成'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:需求响应的收益由两块拼成——<b>容量补贴</b>按「你能提供多少可调能力」给,与调用多少次无关;<b>电量补贴</b>按「实际响应了多少电量」给,和次数、时长直接挂钩。所以同样 2000 kW,一年调 30 次和 60 次,容量收益一样,电量收益翻倍。<br>真正决定到手金额的是<b>考核系数</b>:响应不达标就按系数打折,它作用在总额上,是一次性的整体折减。最后两步是分配:聚合商按比例先抽走自己那一份,剩下的才是资源方实得——<b>分成比例谈的是总量,不是增量</b>,比例每提高一个百分点,资源方的动力就会明显变化。<br>别只看「考核后总收益」:它站在项目全体的角度;站在单个用户的角度,该看的是「资源方实得」摊到每户还剩多少。</p>';
};

/* ---- 3. 基线负荷与核减 ---- */
VPP.calcBaseline = function() {
  var avg = VPP._num('bl-avg'), peak = VPP._num('bl-peak'), actual = VPP._num('bl-actual');
  var hours = VPP._num('bl-hours'), threshold = VPP._num('bl-threshold');
  var el = document.getElementById('bl-result');
  if (!el) return;
  if (avg === null || peak === null || actual === null || hours === null || threshold === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  var mEl = document.getElementById('bl-method');
  var method = mEl ? mEl.value : 'sim3';
  var coef = method === 'avg' ? 1.00 : (method === 'maxn' ? 0.95 : 0.90);
  var methodName = method === 'avg' ? '平均法' : (method === 'maxn' ? '前 N 日最大' : '前 3 日相似日');
  var response = peak - actual;                                 // 响应量(kW)
  var responseEnergy = response * hours;                        // 响应电量(kWh)
  var approved = response * coef;                               // 核定响应量(kW)
  var meet = approved >= threshold;                             // 是否达到门槛
  var cut = response - approved;                                // 核减量(kW)
  var cutRate = response > 0 ? cut / response * 100 : 0;        // 核减率(%)
  var rows_ = [];
  rows_.push(tr('日平均基线负荷', VPP._w(avg, 1) + ' kW', '', '典型日全天平均,用于判断响应时段是否处于用电高位'));
  rows_.push(tr('响应时段基线负荷', VPP._w(peak, 1) + ' kW', 'cr-warn', '响应时段的负荷基准,响应量以它为起点'));
  rows_.push(tr('响应时段实际负荷', VPP._w(actual, 1) + ' kW', '', '响应时段实测的平均负荷'));
  rows_.push(tr('响应量', VPP._w(response, 1) + ' kW', response > 0 ? 'cr-good' : 'cr-bad',
    response > 0 ? '响应时段基线负荷 − 实际负荷' : '实际负荷不低于基线,视为未形成有效响应'));
  rows_.push(tr('响应电量', VPP._w(responseEnergy, 1) + ' kWh', response > 0 ? '' : 'cr-bad',
    '响应量 × 响应时段长度 ' + VPP._fix(hours, 1) + ' h'));
  rows_.push(tr('基线核减方法', methodName + '(系数 ' + VPP._fix(coef, 2) + ')', '', '不同基线口径对响应量的认定折扣不同'));
  rows_.push(tr('核定响应量', VPP._w(approved, 1) + ' kW', meet ? 'cr-good' : 'cr-bad', '响应量 × 核减系数'));
  rows_.push(tr('是否达到门槛', meet ? '达到(门槛 ' + VPP._w(threshold, 1) + ' kW)' : '未达到(门槛 ' + VPP._w(threshold, 1) + ' kW)',
    meet ? 'cr-good' : 'cr-bad', meet ? '核定响应量 ≥ 门槛' : '核定响应量 < 门槛,本次响应不计有效'));
  rows_.push(tr('核减量', VPP._w(cut, 1) + ' kW', '', '响应量 − 核定响应量'));
  rows_.push(tr('核减率', VPP._fix(cutRate, 2) + ' %', '', '核减量 ÷ 响应量;由基线方法直接决定'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:需求响应里最容易吵架的不是「你到底调了多少」,而是「基线怎么算」。这里先把响应量定义为<b>响应时段基线负荷 − 实际负荷</b>,再用一个<b>核减系数</b>把它折算成电网承认的「核定响应量」——平均法不打折,前 N 日最大与相似日法会打折,因为它们对基线的认定更保守。<br>「是否达到门槛」这一行是关键闸门:核定响应量低于门槛,这次响应就整单作废,前面的电量也算不进去。<b>门槛 × 核减系数,实际上抬高了你要做的真实响应量</b>。<br>所以同一份实际负荷数据,换一种基线方法,认定结果可能完全不同。这也是为什么做需求响应前必须先把基线口径谈清楚——它决定了你到底能拿到多少钱。</p>';
};

/* ---- 4. 聚合商分成 ---- */
VPP.calcAggregatorSplit = function() {
  var total = VPP._num('as-total'), share = VPP._num('as-share'), cost = VPP._num('as-cost');
  var users = VPP._num('as-users'), perUser = VPP._num('as-peruser'), perCap = VPP._num('as-percap');
  var floor = VPP._num('as-floor');
  var el = document.getElementById('as-result');
  if (!el) return;
  if (total === null || share === null || cost === null || users === null ||
      perUser === null || perCap === null || floor === null) {
    el.innerHTML = warn('请把七项都填上。'); return;
  }
  if (users <= 0) { el.innerHTML = warn('签约资源数要大于 0。'); return; }
  var gross = total * share / 100;                              // 聚合商毛收入(万元)
  var net = gross - cost - floor;                               // 聚合商净收益(万元)
  var resTotal = total - gross;                                 // 资源方分成总额(万元)
  var perUserGet = perUser * 10000 + floor * 10000 / users;     // 单户实得(元/户·年)
  var unitCost = perCap > 0 ? cost * 10000 / (users * perCap) : null; // 平台单位资源成本(元/kW·年)
  var perGross = gross / users;                                 // 单户毛贡献(万元)
  var breakEven = perGross > 0 ? cost / perGross : null;        // 盈亏平衡所需资源数(户)
  var rows_ = [];
  rows_.push(tr('聚合商毛收入', VPP._w(gross, 2) + ' 万元', 'cr-warn', '项目年总收益 × 聚合商分成比例 ' + VPP._fix(share, 1) + '%'));
  rows_.push(tr('平台与运维成本', VPP._w(cost, 2) + ' 万元 / 年', '', '平台开发运维、通信与人工等'));
  rows_.push(tr('保底补贴支出', VPP._w(floor, 2) + ' 万元 / 年', '', '聚合商向资源方承诺的最低补贴'));
  rows_.push(tr('聚合商净收益', VPP._w(net, 2) + ' 万元', net > 0 ? 'cr-good' : 'cr-bad', '毛收入 − 平台成本 − 保底补贴'));
  rows_.push(tr('资源方分成总额', VPP._w(resTotal, 2) + ' 万元', '', '项目年总收益 − 聚合商毛收入'));
  rows_.push(tr('单户实得', VPP._w(perUserGet, 2) + ' 元 / 户·年', 'cr-good',
    '单户年均分成 ' + VPP._w(perUser, 2) + ' 万元 + 保底补贴摊到每户'));
  rows_.push(tr('平台单位资源成本', (unitCost === null ? '—' : VPP._w(unitCost, 2) + ' 元 / kW·年'), 'cr-warn',
    unitCost === null ? '单户平均可调容量为 0,无法折算' : '平台成本 ÷ (资源数 × 单户可调容量)'));
  rows_.push(tr('单户毛贡献', VPP._w(perGross, 4) + ' 万元 / 户', '', '聚合商毛收入 ÷ 签约资源数'));
  rows_.push(tr('盈亏平衡所需资源数', (breakEven === null ? '无法求解' : VPP._w(Math.ceil(breakEven), 0) + ' 户'),
    breakEven === null ? 'cr-bad' : (users >= breakEven ? 'cr-good' : 'cr-warn'),
    breakEven === null ? '单户毛贡献不大于 0,靠扩规模无法覆盖成本' : '平台成本 ÷ 单户毛贡献,当前已签约 ' + VPP._w(users, 0) + ' 户'));
  var note = '';
  if (net <= 0) note += warn('按当前参数,聚合商净收益不大于 0(毛收入扣完成本与保底已无剩余),这个分成方案聚合商难以持续。');
  el.innerHTML = note + tbl(rows_) +
    '<p class="calc-hint">读法:聚合商的账要分两层看。<b>第一层是分蛋糕</b>:项目年总收益先按比例切成聚合商与资源方两块,分成比例越高,聚合商毛收入越大,但资源方的积极性越低。<b>第二层是过日子</b>:毛收入还要扣掉平台运维和保底补贴,剩下的才是净收益——很多聚合商亏就亏在这里,毛收入看着不错,扣完固定成本所剩无几。<br>「盈亏平衡所需资源数」是最实用的一个数:它把平台成本摊到单户毛贡献上,告诉你<b>至少要签多少户才开始赚钱</b>。低于这个数,规模再大也是赔本赚吆喝;高于它,每多签一户都是净增。<br>还要注意保底补贴的双刃剑作用:它能让资源方更愿意签约,但无论项目挣不挣钱都要付,直接压缩聚合商的净收益。</p>';
};

/* ---- 5. 参与辅助服务收益 ---- */
VPP.calcAncillaryVpp = function() {
  var cap = VPP._num('av-cap'), capPrice = VPP._num('av-capprice');
  var milePrice = VPP._num('av-mileprice'), times = VPP._num('av-times');
  var hours = VPP._num('av-hours'), score = VPP._num('av-score'), perf = VPP._num('av-perf');
  var el = document.getElementById('av-result');
  if (!el) return;
  if (cap === null || capPrice === null || milePrice === null || times === null ||
      hours === null || score === null || perf === null) {
    el.innerHTML = warn('请把九项都填上。'); return;
  }
  if (cap <= 0) { el.innerHTML = warn('申报容量要大于 0。'); return; }
  var tEl = document.getElementById('av-type');
  var pEl = document.getElementById('av-period');
  var type = tEl ? tEl.value : 'freq';
  var period = pEl ? pEl.value : 'year';
  var typeName = type === 'freq' ? '调频' : (type === 'peak' ? '调峰' : '备用');
  var monthFactor = period === 'month' ? 12 : 1;
  var periodName = period === 'month' ? '元/kW·月(折年)' : '元/kW·年';
  var mileEnergy = cap * times * hours;                         // 年里程/电量(kWh)
  var baseCapIncome = cap * capPrice * monthFactor / 10000;     // 容量基准收益(万元)
  var baseMileIncome = mileEnergy * milePrice / 10000;          // 里程基准收益(万元)
  var capIncome = baseCapIncome * perf;                         // 容量收益(万元,按性能折算)
  var mileIncome = baseMileIncome * score * perf;               // 里程收益(万元,按考核与性能折算)
  var total = capIncome + mileIncome;                           // 合计收益(万元)
  var cutLost = (baseCapIncome + baseMileIncome) - total;       // 考核与性能折减(万元)
  var perKw = total * 10000 / cap;                              // 单位容量收益(元/kW)
  var rows_ = [];
  rows_.push(tr('服务类型', typeName, '', '不同服务的补偿结构不同:调频看里程、调峰看电量、备用以容量为主'));
  rows_.push(tr('年里程 / 电量', VPP._w(mileEnergy, 0) + ' kWh', '', '申报容量 × 年调用次数 ' + VPP._fix(times, 0) + ' 次 × 单次 ' + VPP._fix(hours, 1) + ' h'));
  rows_.push(tr('容量基准收益', VPP._w(baseCapIncome, 2) + ' 万元', '', '申报容量 × 容量补偿单价 ' + VPP._w(capPrice, 2) + ' 元/kW(' + periodName + ')'));
  rows_.push(tr('里程基准收益', VPP._w(baseMileIncome, 2) + ' 万元', '', '年里程电量 × 里程单价'));
  rows_.push(tr('容量收益', VPP._w(capIncome, 2) + ' 万元', 'cr-good', '容量基准收益 × 性能折算 ' + VPP._fix(perf, 2)));
  rows_.push(tr('里程收益', VPP._w(mileIncome, 2) + ' 万元', 'cr-good', '里程基准收益 × 考核系数 ' + VPP._fix(score, 2) + ' × 性能折算 ' + VPP._fix(perf, 2)));
  rows_.push(tr('考核与性能折减', VPP._w(cutLost, 2) + ' 万元', cutLost > 0 ? 'cr-bad' : 'cr-good',
    cutLost > 0 ? '因考核系数与性能折算未达 1 而少收的部分' : '无折减'));
  rows_.push(tr('合计收益', VPP._w(total, 2) + ' 万元', 'cr-good', '容量收益 + 里程收益'));
  rows_.push(tr('单位容量收益', VPP._w(perKw, 2) + ' 元 / kW', total > 0 ? 'cr-good' : 'cr-warn', '合计收益 ÷ 申报容量'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:辅助服务收入由两条腿走路——<b>容量补偿</b>买的是「随时待命的能力」,和调用多少次无关,只要你的可调容量真实可靠,这笔钱就有底;<b>里程/电量补偿</b>买的是「真被调用了多少」,它随调用次数和时长线性放大,是收益弹性的来源。<br>但这两块都要先过两道折扣闸门:<b>考核系数</b>看你响应得准不准、快不快,<b>性能折算</b>看你的实际调节能力打了几折。它们通常作用在基准收益之上,系数从 0.95 掉到 0.85,一年可能就是一大笔钱。<br>「单位容量收益」把不同规模的项目拉到同一把尺子上,便于横向比较不同服务类型的性价比:调频单价高但调用不稳定,调峰电量收益大但要求持续时间,备用稳定但单价低——没有绝对最优,只有和自身资源特性最匹配的那一种。</p>';
};

/* ---- 6. 车网互动收益 ---- */
VPP.calcV2gIncome = function() {
  var cars = VPP._num('v2g-cars'), perCap = VPP._num('v2g-percap'), hours = VPP._num('v2g-hours');
  var days = VPP._num('v2g-days'), sell = VPP._num('v2g-sell'), charge = VPP._num('v2g-charge');
  var degrade = VPP._num('v2g-degrade'), rate = VPP._num('v2g-rate');
  var el = document.getElementById('v2g-result');
  if (!el) return;
  if (cars === null || perCap === null || hours === null || days === null ||
      sell === null || charge === null || degrade === null || rate === null) {
    el.innerHTML = warn('请把八项都填上。'); return;
  }
  if (cars <= 0) { el.innerHTML = warn('参与车辆数要大于 0。'); return; }
  var joinCars = cars * rate / 100;                             // 实际参与车辆数(辆)
  var totalCap = joinCars * perCap;                             // 总可调容量(kW)
  var yearDis = totalCap * hours * days;                        // 年放电量(kWh)
  var yearDisW = yearDis / 10000;                               // 年放电量(万 kWh)
  var grossIncome = yearDisW * sell;                            // 毛收益(万元)
  var chargeCost = yearDisW * charge;                           // 充电成本(万元)
  var degradeCost = yearDisW * degrade;                         // 电池折损成本(万元)
  var net = grossIncome - chargeCost - degradeCost;             // 净收益(万元)
  var perCar = joinCars > 0 ? net * 10000 / joinCars : null;    // 单车年收益(元/辆)
  var rows_ = [];
  rows_.push(tr('实际参与车辆数', VPP._w(joinCars, 0) + ' 辆', '', '参与车辆数 × 可参与率 ' + VPP._fix(rate, 1) + '%'));
  rows_.push(tr('总可调容量', VPP._w(totalCap, 1) + ' kW', 'cr-warn', '实际参与车辆数 × 单车平均可调容量'));
  rows_.push(tr('年放电量', VPP._w(yearDisW, 2) + ' 万 kWh', '', '总可调容量 × 每天时长 ' + VPP._fix(hours, 1) + ' h × 年参与天数 ' + VPP._fix(days, 0) + ' 天'));
  rows_.push(tr('毛收益', VPP._w(grossIncome, 2) + ' 万元', 'cr-good', '年放电量 × 放电电价 ' + VPP._w(sell, 2) + ' 元/kWh'));
  rows_.push(tr('充电成本', VPP._w(chargeCost, 2) + ' 万元', '', '年放电量 × 充电成本 ' + VPP._w(charge, 2) + ' 元/kWh'));
  rows_.push(tr('电池折损成本', VPP._w(degradeCost, 2) + ' 万元', 'cr-warn', '年放电量 × 电池折损成本 ' + VPP._w(degrade, 2) + ' 元/kWh'));
  rows_.push(tr('净收益', VPP._w(net, 2) + ' 万元', net > 0 ? 'cr-good' : 'cr-bad', '毛收益 − 充电成本 − 电池折损成本'));
  rows_.push(tr('单车年收益', (perCar === null ? '—' : VPP._w(perCar, 2) + ' 元 / 辆·年'),
    perCar === null ? 'cr-warn' : (perCar > 0 ? 'cr-good' : 'cr-bad'),
    perCar === null ? '实际参与车辆数为 0,无法折算' : '净收益 ÷ 实际参与车辆数'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:车网互动赚的是「<b>放电电价 − 充电成本 − 电池折损</b>」这条价差链。最容易漏掉的是最后一项:<b>电池折损成本</b>。每多放一度电,电池寿命就少一点,这笔钱必须摊进成本里,否则账面赚钱、实际亏本。<br>把「毛收益」和「净收益」对比着看,就能明白这门生意对价差有多敏感:放电电价与充电成本之间必须拉开足够大的口子,而且这个口子还要盖过电池折损,才真正划算。<br>「单车年收益」是打动车主的关键数字——它决定车主愿不愿意把车插上枪、让平台调度。<b>如果单车一年只多赚几百块,却要担心电池和续航,推广就会非常吃力</b>。这也解释了为什么车网互动能否规模化,取决于 V2G 桩的普及、峰谷价差的大小,以及电池厂商对质保条款的松绑。</p>';
};

/* ---- 7. 虚拟电厂项目投资 ---- */
VPP.calcVppInvest = function() {
  var invest = VPP._num('vi-invest'), om = VPP._num('vi-om'), revenue = VPP._num('vi-revenue');
  var years = VPP._num('vi-years'), rate = VPP._num('vi-rate'), residual = VPP._num('vi-residual');
  var el = document.getElementById('vi-result');
  if (!el) return;
  if (invest === null || om === null || revenue === null || years === null ||
      rate === null || residual === null) {
    el.innerHTML = warn('请把六项都填上。'); return;
  }
  if (invest <= 0) { el.innerHTML = warn('项目初始投资要大于 0。'); return; }
  var n = Math.round(years);
  if (n < 1) { el.innerHTML = warn('运营年限至少为 1 年。'); return; }
  var annualNet = revenue - om;                                 // 年净收益(万元)
  var payback = annualNet > 0 ? invest / annualNet : null;      // 静态回收期(年)
  function npvAt(rr) {
    var sum = 0, disc = 1;
    for (var t = 1; t <= n; t++) { disc *= (1 + rr); sum += annualNet / disc; }
    sum += residual / disc;                                     // 末年残值
    return sum - invest;
  }
  var npv = npvAt(rate / 100);
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
  var multiple = (annualNet * n + residual) / invest;           // 投资回报倍数
  var okNpv = npv > 0;
  var rows_ = [];
  rows_.push(tr('年净收益', VPP._w(annualNet, 2) + ' 万元', annualNet > 0 ? 'cr-good' : 'cr-bad', '年收益 − 年运营成本'));
  rows_.push(tr('静态回收期', (payback === null ? '—' : VPP._w(payback, 2) + ' 年'),
    payback === null ? 'cr-bad' : (payback <= n ? 'cr-good' : 'cr-warn'),
    payback === null ? '年净收益不大于 0,无法回收' : '项目初始投资 ÷ 年净收益'));
  rows_.push(tr('NPV 净现值', VPP._w(npv, 2) + ' 万元', okNpv ? 'cr-good' : 'cr-bad',
    '按折现率 ' + VPP._fix(rate, 1) + '%、年限 ' + n + ' 年、残值 ' + VPP._w(residual, 1) + ' 万元'));
  rows_.push(tr('IRR 内部收益率', (irr === null ? '无法求解' : VPP._w(irr * 100, 2) + ' %'),
    irr === null ? 'cr-bad' : (irr * 100 > rate ? 'cr-good' : 'cr-warn'),
    irr === null ? '区间两端 NPV 同号,现金流始终为正或始终为负,无法求解' : '使 NPV = 0 的折现率,可与资金成本直接比'));
  rows_.push(tr('投资回报倍数', VPP._w(multiple, 2) + ' 倍', multiple > 1 ? 'cr-good' : 'cr-bad',
    '(年净收益 × 年限 + 残值) ÷ 初始投资'));
  rows_.push(tr('是否可行', okNpv ? '投资可行' : '按当前参数不可行', okNpv ? 'cr-good' : 'cr-bad',
    okNpv ? 'NPV > 0,项目创造价值' : 'NPV ≤ 0,达不到折现率要求'));
  el.innerHTML = tbl(rows_) +
    '<p class="calc-hint">读法:三个指标看三件事——<b>回收期</b>看多久拿回本金(快慢),<b>NPV</b>看按你要求的回报率折算后是否还有剩余(值不值),<b>IRR</b>看项目本身能承受多高的资金成本(韧性)。<br>关键门槛是「<b>IRR 与折现率比一比</b>」:IRR 高于折现率(代表资金成本),项目才真正创造价值;NPV 则是同一件事的另一种说法——折现率取资金成本时,NPV 为正与 IRR 高于它是等价结论。<br>虚拟电厂项目的特殊性在于收益端不确定性大:需求响应补贴标准、辅助服务市场价格、用户签约率与响应达标率都会逐年变化,而且资源方分成会先切走一块。所以做这类投资测算时,<b>更该关心「年收益的悲观情形下 NPV 是否仍为正」</b>,而不是只算一个乐观的基准数。这里假设了每年净收益相同,真实项目应由专业财务模型逐年建模,本工具只用来建立直觉。</p>';
};

/* ===== 模块页 ===== */
VPP.views.module = function(id) {
  var mod = VPP.modules.find(function(m) { return m.id === id; });
  if (!mod) { VPP.views.home(); return; }
  var P = VPP.progress();
  var lessons = VPP.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + VPP.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + VPP.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = VPP.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + VPP.esc(title) + '</a>';
    else html += '<span class="title">' + VPP.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及聚合商准入条件、需求响应补偿标准、辅助服务补偿机制、基线核定方法、市场参与与结算规则，正文均已标注依据与适用期，<b>内容基线为 2026 年 10 月</b>，请以现行价格文件、市场规则、并网与接入规范、聚合商准入要求与主管部门文件为准。本站不构成工程设计、采购、招标、投资测算或合规依据。</p></div>';
  html += '</div>';
  VPP.render(html);
};

/* ===== 术语 ===== */
VPP.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>虚拟电厂名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 虚拟电厂 / 可调容量 / 基线负荷 / 需求响应 / 辅助服务 / 聚合商 / 车网互动 / 分成" oninput="VPP.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(VPP.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与政策文件、市场规则、国家标准与聚合商准入要求中的正式定义可能存在简化差异。涉及具体适用时请查阅文件原文与专业文献。内容基线 2026 年 10 月。</p></div>';
  html += '</div>';
  VPP.render(html);
};
VPP.filterTerms = function(q) {
  var filtered = VPP.terms;
  if (q) { q = q.toLowerCase();
    filtered = VPP.terms.filter(function(t) {
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
    html += '<div class="term-name">' + VPP.esc(t.name) + ' <span class="term-en">' + VPP.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + VPP.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + VPP.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
VPP.views.myTerms = function() {
  var P = VPP.progress(); var collected = [];
  for (var i = 0; i < VPP.terms.length; i++) if (P.hasTerm(VPP.terms[i].id)) collected.push(VPP.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  VPP.render(html);
};

/* ===== 搜索 ===== */
VPP.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 虚拟电厂 / 可调容量 / 基线负荷 / 需求响应 / 辅助服务 / 聚合商 / 车网互动 / 分成" oninput="VPP.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  VPP.render(html);
};
VPP.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = VPP.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + VPP.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + VPP.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
VPP.views.settings = function() {
  var P = VPP.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="VPP.setTheme(\'dark\')">深色 · 亮紫</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="VPP.setTheme(\'light\')">浅色 · 深紫</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="VPP.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="VPP.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="VPP.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = VPP.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/vpp-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/vpp-progress" value="' + VPP.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + VPP.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + VPP.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + VPP.esc(VPP.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="VPP.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="VPP.clearData()">清除数据</button></div>';
  html += '</div>';
  VPP.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    VPP.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!VPP.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    VPP.sync.pullNow().then(function () { return VPP.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + VPP.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    VPP.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : VPP.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    VPP.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
VPP.setTheme = function(t) { document.documentElement.dataset.theme = t; VPP.progress().setPref('theme', t); VPP.views.settings(); };
VPP.setFontSize = function(s) { document.documentElement.dataset.fs = s; VPP.progress().setPref('fontSize', s); VPP.views.settings(); };
VPP.exportData = function() {
  var data = VPP.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'vpp-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
VPP.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('vpp.progress.v1');
    window.location.reload();
  }
};
