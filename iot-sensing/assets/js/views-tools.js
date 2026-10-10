/* 工具视图:五件电力物联网与感知层互动工具(物联网卡流量池 / 链路可用率 / 通信方式选型 / 边缘数据量与带宽 / 感知层造价)
   + 模块页 / 术语 / 收藏 / 搜索 / 设置。
   注意:全部为本地简化教学测算,结果仅作理解机制之用,不构成工程设计、采购、招标或合规依据。 */
window.IOT = window.IOT || {};
IOT.views = IOT.views || {};

IOT._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
IOT._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
/* 数值格式化(千分位) */
IOT._w = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d }); };

/* ===== 工具总页 ===== */
IOT.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">感知层的问题,光看架构图不算懂。这五个小工具把课里的口径变成可拨动的数字:<b>卡费怎么省(流量池划不划算)、链路短板在哪(端到端可用率被谁拉低)、该选哪种通信(采集/控制/视频分别对应什么承载、边缘能省多少带宽(聚合与变化上报压缩了多少)、一个感知层项目大概什么造价构成(终端/通信/施工/平台各占多少)。</b>全部在本地浏览器实时运算。</p>';
  html += '<div class="disclaimer" style="margin-top:0">';
  html += '<h4>使用前必读</h4>';
  html += '<p>五件工具均为<b>极度简化的教学测算</b>:参数为便于理解的示例值,不体现真实的网络配置、厂商报价、频段许可与频谱政策、现场条件、终端功耗与协议差异、平台架构与运维组织等细节。<b>不作为工程设计、采购、招标或合规依据。</b>实际项目须以现场勘查、厂商方案、现行有效标准与企业技术规定为准。</p>';
  html += '</div>';

  // 1. 物联网卡流量池测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>物联网卡流量池测算器</h3>';
  html += '<p class="lab-desc">一堆卡各自买套餐,还是并进一个流量池共享?填入卡数与流量,看<b>池化前后每月差多少钱</b>,以及池里的用量是不是已经顶到上限。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>卡数量(张)<input type="number" id="tf-cards" step="10" value="500" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '<label>单卡月流量(MB)<input type="number" id="tf-per" step="10" value="100" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '<label>单卡套餐单价(元/月)<input type="number" id="tf-price" step="0.5" value="5" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '<label>池化后单价(元/MB)<input type="number" id="tf-pool" step="0.001" value="0.02" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '<label>流量池总容量(GB)<input type="number" id="tf-cap" step="1" value="60" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '<label>池内实际总用量(GB)<input type="number" id="tf-used" step="1" value="45" min="0" oninput="IOT.calcTraffic()"></label>';
  html += '</div>';
  html += '<div id="tf-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 链路可用率测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▤</span>链路可用率测算器</h3>';
  html += '<p class="lab-desc">端到端的可靠不是四段可靠的平均,而是四段相乘。填入卡/模组、无线网络、专线、平台四段可用率,看<b>整条链路被拉到什么水平、短板在哪一段</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>卡/模组可用率(%)<input type="number" id="av-card" step="0.01" value="99.90" min="0" max="100" oninput="IOT.calcAvailability()"></label>';
  html += '<label>无线网络可用率(%)<input type="number" id="av-net" step="0.01" value="99.50" min="0" max="100" oninput="IOT.calcAvailability()"></label>';
  html += '<label>专线可用率(%)<input type="number" id="av-line" step="0.01" value="99.80" min="0" max="100" oninput="IOT.calcAvailability()"></label>';
  html += '<label>平台可用率(%)<input type="number" id="av-plat" step="0.01" value="99.95" min="0" max="100" oninput="IOT.calcAvailability()"></label>';
  html += '</div>';
  html += '<div id="av-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 通信方式选型器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>通信方式选型器</h3>';
  html += '<p class="lab-desc">采集类、控制类、视频类,对带宽、时延与可靠性要的东西完全不同。填业务与要求,看<b>该走哪种承载,以及为什么不走另外几种</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>业务类型<select id="cc-biz" onchange="IOT.calcCommChoice()"><option value="collect" selected>采集类</option><option value="control">控制类</option><option value="video">视频类</option></select></label>';
  html += '<label>单点上行数据量(KB)<input type="number" id="cc-data" step="1" value="2" min="0" oninput="IOT.calcCommChoice()"></label>';
  html += '<label>上报频率<select id="cc-freq" onchange="IOT.calcCommChoice()"><option value="hourly" selected>小时级(≤ 24 次/天)</option><option value="minute">分钟级</option><option value="second">秒级</option></select></label>';
  html += '<label>时延要求(ms)<input type="number" id="cc-lat" step="10" value="100" min="0" oninput="IOT.calcCommChoice()"></label>';
  html += '<label>是否有自有频段 / 专网条件<select id="cc-spec" onchange="IOT.calcCommChoice()"><option value="no" selected>无</option><option value="yes">有</option></select></label>';
  html += '</div>';
  html += '<div id="cc-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 边缘数据量与带宽测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊟</span>边缘数据量与带宽测算器</h3>';
  html += '<p class="lab-desc">原始采样全量上传,带宽和流量都吃不消。填入点位与聚合策略,看<b>边缘处理把日数据量压掉了多少、压完还要多少上行带宽</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>点位数(个)<input type="number" id="ed-points" step="10" value="200" min="0" oninput="IOT.calcEdge()"></label>';
  html += '<label>采集频率(次/分钟)<input type="number" id="ed-freq" step="1" value="1" min="0" oninput="IOT.calcEdge()"></label>';
  html += '<label>单条数据包大小(字节)<input type="number" id="ed-bytes" step="10" value="200" min="0" oninput="IOT.calcEdge()"></label>';
  html += '<label>边缘聚合倍率(条并 1)<input type="number" id="ed-agg" step="1" value="10" min="1" oninput="IOT.calcEdge()"></label>';
  html += '<label>变化上报率(%)<input type="number" id="ed-rate" step="5" value="30" min="0" max="100" oninput="IOT.calcEdge()"></label>';
  html += '<label>站点数(个)<input type="number" id="ed-sites" step="1" value="20" min="1" oninput="IOT.calcEdge()"></label>';
  html += '</div>';
  html += '<div id="ed-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 感知层造价估算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◇</span>感知层造价估算器</h3>';
  html += '<p class="lab-desc">一个感知层项目的钱花在哪?按点位把终端、通信、施工与平台四项加出来,看<b>总投资、各项占比与单点综合造价</b>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>点位数量(个)<input type="number" id="ct-points" step="10" value="200" min="0" oninput="IOT.calcCost()"></label>';
  html += '<label>单点终端价(元)<input type="number" id="ct-term" step="100" value="1200" min="0" oninput="IOT.calcCost()"></label>';
  html += '<label>单点通信模块价(元)<input type="number" id="ct-comm" step="10" value="150" min="0" oninput="IOT.calcCost()"></label>';
  html += '<label>单点施工安装价(元)<input type="number" id="ct-inst" step="10" value="300" min="0" oninput="IOT.calcCost()"></label>';
  html += '<label>平台分摊(元)<input type="number" id="ct-plat" step="1000" value="80000" min="0" oninput="IOT.calcCost()"></label>';
  html += '<label>年运维系数(%)<input type="number" id="ct-om" step="1" value="6" min="0" oninput="IOT.calcCost()"></label>';
  html += '</div>';
  html += '<div id="ct-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:五件工具均为教学用简化建模,参数取行业常见量级概数,单价与比率为示例值。<b>实际项目必须依据现场勘查、厂商方案、现行有效标准与企业技术规定单独核算</b>,本工具结果不作为工程设计、采购、招标或合规依据。</p>';
  html += '</div>';
  IOT.render(html);
  IOT.calcTraffic(); IOT.calcAvailability(); IOT.calcCommChoice(); IOT.calcEdge(); IOT.calcCost();
};

function tr(name, val, cls, note) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || '') + '">' + val +
    (note ? ' <span style="color:var(--note);font-weight:400;font-size:.82em">（' + note + '）</span>' : '') + '</td></tr>';
}
function warn(t) { return '<div class="calc-warn">' + t + '</div>'; }

/* ---- 1. 物联网卡流量池 ---- */
IOT.calcTraffic = function() {
  var el = document.getElementById('tf-result');
  if (!el) return;
  var cards = IOT._num('tf-cards'), per = IOT._num('tf-per'), price = IOT._num('tf-price');
  var pool = IOT._num('tf-pool'), cap = IOT._num('tf-cap'), used = IOT._num('tf-used');
  if (cards === null || per === null || price === null || pool === null) {
    el.innerHTML = warn('请把卡数量、单卡月流量与两个单价填写完整。'); return;
  }
  if (cards < 0 || per < 0 || price < 0 || pool < 0 || (cap || 0) < 0 || (used || 0) < 0) {
    el.innerHTML = warn('数值不能为负。'); return;
  }

  var indep = cards * price;                 // 独立套餐月成本(元)
  var usedMb = (used || 0) * 1024;           // GB → MB
  var poolCost = usedMb * pool;              // 流量池月成本(元)
  var save = indep - poolCost;
  var savePct = indep > 0 ? save / indep * 100 : 0;
  var util = (cap || 0) > 0 ? (used || 0) / cap * 100 : 0;
  var idealGb = cards * per / 1024;          // 全部卡用满套餐的总量(GB)
  var indepUnit = per > 0 ? price / per : 0; // 独立套餐等效单价(元/MB)

  var saveCls = save > 0 ? 'cr-good' : (save < 0 ? 'cr-bad' : '');
  var out = '<table class="cr-table">';
  out += tr('独立套餐月成本', IOT._w(indep, 2) + ' 元', '', IOT._w(cards, 0) + ' 张 × ' + IOT._fix(price, 2) + ' 元/月');
  out += tr('流量池月成本', IOT._w(poolCost, 2) + ' 元', '', IOT._w(used || 0, 2) + ' GB × 1024 × ' + IOT._fix(pool, 4) + ' 元/MB');
  out += tr('月度节省', (save >= 0 ? '' : '−') + IOT._w(Math.abs(save), 2) + ' 元', saveCls, '独立套餐 − 流量池');
  out += tr('年度节省', (save >= 0 ? '' : '−') + IOT._w(Math.abs(save) * 12, 2) + ' 元', saveCls, '按月节省 × 12');
  out += tr('节省比例', IOT._fix(savePct, 1) + ' %', saveCls, '节省 ÷ 独立套餐成本');
  out += tr('独立套餐等效单价', IOT._fix(indepUnit, 4) + ' 元/MB', '', '单卡套餐价 ÷ 单卡流量,与池化单价对比');
  out += tr('池化单价', IOT._fix(pool, 4) + ' 元/MB', indepUnit > 0 && pool < indepUnit ? 'cr-good' : '', pool < indepUnit ? '低于独立等效单价,池化具备价格优势' : '不低于独立等效单价,池化未必划算');
  out += tr('套餐容量总量', IOT._w(idealGb, 2) + ' GB', '', '所有卡按套餐用满时的总容量,用于看池容量够不够覆盖');
  out += tr('池利用率', IOT._fix(util, 1) + ' %', util > 100 ? 'cr-bad' : (util >= 90 ? 'cr-bad' : ''), IOT._w(used || 0, 2) + ' GB ÷ ' + IOT._w(cap || 0, 2) + ' GB');
  out += '</table>';
  if ((cap || 0) > 0 && (used || 0) > cap) {
    out += warn('实际用量已超过流量池总容量,超池部分通常按更高单价计费或直接被停卡,需扩池或调降单卡用量。');
  } else if (util >= 90) {
    out += warn('池利用率已达 ' + IOT._fix(util, 1) + ' %,余量仅 ' + IOT._w(Math.abs((cap || 0) - (used || 0)), 2) + ' GB,建议预留 10% ~ 20% 冗余以应对业务增长与突发。');
  }
  if (save < 0) {
    out += warn('当前参数下流量池并不省钱,说明池化单价相对套餐单价偏高,或池内实际用量偏大,独立套餐反而更省。');
  }
  out += '<p class="calc-note">池化的价值来自「削峰填谷」:<b>许多卡用不满自己的套餐,而少数卡会超量,把额度并进一个池就能互通</b>——低用量卡让出的额度补给高用量卡,总支出因此下降。判断划不划算,一是比单价(池化单价 vs 独立等效单价),二是看利用率(留出冗余但别浪费),三是留意超池后的计费规则与结算周期,这些差异很大。以上为教学口径,实际资费以运营商合同为准。</p>';
  el.innerHTML = out;
};

/* ---- 2. 链路可用率 ---- */
IOT.calcAvailability = function() {
  var el = document.getElementById('av-result');
  if (!el) return;
  var card = IOT._num('av-card'), net = IOT._num('av-net');
  var line = IOT._num('av-line'), plat = IOT._num('av-plat');
  if (card === null || net === null || line === null || plat === null) {
    el.innerHTML = warn('请把四段可用率填写完整。'); return;
  }
  var segs = [
    { name: '卡/模组', v: card }, { name: '无线网络', v: net },
    { name: '专线', v: line }, { name: '平台', v: plat }
  ];
  for (var i = 0; i < segs.length; i++) {
    if (segs[i].v <= 0 || segs[i].v > 100) {
      el.innerHTML = warn('各段可用率需大于 0 且不超过 100(%)。'); return;
    }
  }

  var Afrac = 1, weakIdx = 0;
  for (var j = 0; j < segs.length; j++) {
    Afrac *= segs[j].v / 100;
    if (segs[j].v < segs[weakIdx].v) weakIdx = j;
  }
  var A = Afrac * 100;
  var weak = segs[weakIdx];
  var newWeak = Math.min(100, weak.v + 1);          // 假设把瓶颈段提升 1 个百分点
  var newAfrac = Afrac / (weak.v / 100) * (newWeak / 100);
  var newA = newAfrac * 100;
  var downH = (1 - Afrac) * 365 * 24;
  var downMin = downH * 60;
  var newDownH = (1 - newAfrac) * 365 * 24;
  var improveH = downH - newDownH;

  var out = '<table class="cr-table">';
  out += tr('卡/模组可用率', IOT._fix(card, 2) + ' %', card < 99 ? 'cr-bad' : '', '终端与模组自身在线率');
  out += tr('无线网络可用率', IOT._fix(net, 2) + ' %', net < 99 ? 'cr-bad' : '', '无线接入与回传');
  out += tr('专线可用率', IOT._fix(line, 2) + ' %', line < 99 ? 'cr-bad' : '', '汇聚侧有线通道');
  out += tr('平台可用率', IOT._fix(plat, 2) + ' %', plat < 99 ? 'cr-bad' : '', '主站与业务平台');
  out += tr('端到端可用率', IOT._fix(A, 3) + ' %', A < 99 ? 'cr-bad' : 'cr-good', '四段串联相乘,不是取平均');
  out += tr('年中断时长', IOT._w(downH, 2) + ' h', downH > 87.6 ? 'cr-bad' : '', '= (1 − 端到端可用率) × 365 天 × 24 h,约 ' + IOT._w(downMin, 0) + ' 分钟');
  out += tr('瓶颈段', weak.name, 'cr-bad', '可用率最低的一段(' + IOT._fix(weak.v, 2) + ' %),对端到端的拖累最大');
  out += tr('提升瓶颈段 +1 个百分点', IOT._fix(newWeak, 2) + ' %', '', '把「' + weak.name + '」由 ' + IOT._fix(weak.v, 2) + ' % 提到 ' + IOT._fix(newWeak, 2) + ' %');
  out += tr('改善后端到端可用率', IOT._fix(newA, 3) + ' %', 'cr-good', '其余三段不变');
  out += tr('改善后年中断时长', IOT._w(newDownH, 2) + ' h', 'cr-good', '年中断减少 ' + IOT._w(improveH, 2) + ' h,约 ' + IOT._w(improveH * 60, 0) + ' 分钟');
  out += '</table>';
  if (A < 99) {
    out += warn('端到端可用率偏低(' + IOT._fix(A, 2) + ' %),全年中断时长可观,应优先补齐瓶颈段。');
  }
  if (weak.v < 99) {
    out += warn('瓶颈在「' + weak.name + '」(' + IOT._fix(weak.v, 2) + ' %)。串联链路中任何一段都会等比例拉低端到端,补最弱一段的边际收益最大。');
  }
  out += '<p class="calc-note">这里的关键认知是:<b>串联系统的可用率是各段相乘,永远低于最差的那一段</b>。四段都做到 99.9% 才约 99.6%,离「五个九」还差得远;想把端到端提上去,与其把已经很好的平台再优化,不如先补最弱的一段。若要进一步提可靠,通常靠冗余(双路、双网、双机)把最弱环节做成并联。以上假设四段相互独立,且可用率不相关,真实系统还受相关性、切换时间与故障恢复影响,教学口径仅供参考。</p>';
  el.innerHTML = out;
};

/* ---- 3. 通信方式选型 ---- */
IOT.calcCommChoice = function() {
  var el = document.getElementById('cc-result');
  if (!el) return;
  var biz = document.getElementById('cc-biz').value;
  var freq = document.getElementById('cc-freq').value;
  var spectrum = document.getElementById('cc-spec').value;
  var dataKb = IOT._num('cc-data'), lat = IOT._num('cc-lat');
  if (dataKb === null || dataKb < 0 || lat === null || lat < 0) {
    el.innerHTML = warn('请填写有效的单点上行数据量与时延要求。'); return;
  }

  var timesPerDay = freq === 'second' ? 86400 : (freq === 'minute' ? 1440 : 24);
  var freqName = freq === 'second' ? '秒级' : (freq === 'minute' ? '分钟级' : '小时级(≤ 24 次/天)');
  var dayKb = dataKb * timesPerDay;
  var avgKbps = dataKb * 8 * timesPerDay / 86400;
  var bizName = biz === 'video' ? '视频类' : (biz === 'control' ? '控制类' : '采集类');

  var primary, reasons = [], nots = [];

  if (biz === 'video') {
    primary = '5G 切片';
    reasons.push('视频类上行数据量大且连续,需要稳定的大带宽上行通道。');
    reasons.push('切片可在公网上划出专用资源,保障上行带宽与时延,避免公网拥塞影响画面。');
    reasons.push(spectrum === 'yes' ? '若已有自有频段,电力无线专网可作为补充或备用回传通道。' : '无自有频段/专网条件时,依托运营商切片部署更快,无需自建网络。');
    nots.push(['NB-IoT', '带宽与速率过低,无法承载视频流。']);
    nots.push(['LoRa', '速率低,不适合连续大流量视频上传。']);
    nots.push(['HPLC 载波', '载波可用带宽有限且依赖电力线拓扑,不适合视频。']);
    nots.push(['公网 4G', '公网为共享带宽,高峰期难以稳定保障视频上行。']);
  } else if (biz === 'control') {
    if (spectrum === 'yes') {
      primary = '电力无线专网';
      reasons.push('控制类需要低时延与高可靠,自有频段专网可自主规划、隔离性强。');
      reasons.push('专网覆盖与业务可控,适合承载遥控、遥调等关键指令。');
      reasons.push(lat <= 50 ? '可满足 ' + IOT._fix(lat, 0) + ' ms 级的严格时延要求。' : '可满足 ' + IOT._fix(lat, 0) + ' ms 级时延要求。');
    } else {
      primary = '5G 切片';
      reasons.push('控制类需要低时延与高可靠,5G 切片可提供确定的时延与隔离。');
      reasons.push(lat <= 50 ? '切片可支撑 ' + IOT._fix(lat, 0) + ' ms 级严格时延。' : '切片时延通常在几十毫秒量级,满足 ' + IOT._fix(lat, 0) + ' ms 要求。');
      reasons.push('无自有频段时,依托运营商切片可避免自建网络的周期与投入。');
    }
    nots.push(['NB-IoT', '时延偏高、速率低,不适合实时控制。']);
    nots.push(['LoRa', '自建网络速率低、时延不确定,不适合实时控制回路。']);
    nots.push(['HPLC 载波', '受电力线拓扑与干扰影响,覆盖与时延受限,不适合广域控制。']);
    if (spectrum !== 'yes') nots.push(['公网 4G', '公网时延与拥塞不可控,难以保障控制类时延与可靠性。']);
  } else {
    if (freq === 'second' || dataKb >= 10) {
      primary = '公网 4G';
      reasons.push('采集类在秒级上报或较大单包时,需要持续上行带宽,公网 4G 覆盖成熟、部署快。');
      reasons.push('单点日均上行约 ' + IOT._w(dayKb, 0) + ' KB,公网 4G 余量充足。');
      reasons.push(spectrum === 'yes' ? '若对可靠性要求高且已有自有频段,可升级为电力无线专网。' : '无频段条件时优先公网,避免自建网络。');
      nots.push(['NB-IoT', '速率与时延受限,秒级或较大数据量上报难以承载。']);
      nots.push(['LoRa', '速率低,适合低频小数据,不适合高频上报。']);
      nots.push(['HPLC 载波', '仅适合台区近距离采集,不适合广域高频点位。']);
    } else if (spectrum === 'yes') {
      primary = 'LoRa';
      reasons.push('采集类低频、小数据且具备自有频段/专网条件,LoRa 可自建、低功耗、覆盖灵活。');
      reasons.push('自建网络便于自主管控与扩容,长期成本可控。');
      reasons.push('适合单点数据量小、上报间隔较长的场景。');
      nots.push(['NB-IoT', '无自有频段时才优先考虑,已有频段无需依赖蜂窝物联网。']);
      nots.push(['5G 切片', '采集类低频小数据用切片,成本与复杂度偏高。']);
      nots.push(['HPLC 载波', '依赖台区电力线拓扑,跨台区或广域不适用。']);
    } else {
      primary = 'NB-IoT';
      reasons.push('采集类低频、小数据且无自有频段,NB-IoT 广覆盖、低功耗、成本低。');
      reasons.push('单点日均上行仅约 ' + IOT._w(dayKb, 0) + ' KB,NB-IoT 完全可承载。');
      reasons.push('免自建网络,依托运营商广覆盖,适合海量分散点位。');
      nots.push(['LoRa', '需自建网关与自有频段,无频段条件时部署成本高。']);
      nots.push(['5G 切片', '低频小数据用切片性价比不高。']);
      nots.push(['HPLC 载波', '依赖电力线拓扑,仅适合台区近距离,不适合广域分散点位。']);
    }
  }

  var i, out = '<table class="cr-table">';
  out += tr('业务类型', bizName, '', '决定对带宽、时延与可靠性的基本要求');
  out += tr('单点上行数据量', IOT._w(dataKb, 1) + ' KB', '', '单次上报的报文大小');
  out += tr('上报频率', freqName, '', '折算约 ' + IOT._w(timesPerDay, 0) + ' 次/天');
  out += tr('时延要求', IOT._w(lat, 0) + ' ms', '', '业务可接受的最大时延');
  out += tr('自有频段 / 专网条件', spectrum === 'yes' ? '有' : '无', spectrum === 'yes' ? 'cr-good' : '', spectrum === 'yes' ? '可自建或使用专用频段承载' : '只能依托运营商网络或公共频段');
  out += tr('单点日均上行流量', IOT._w(dayKb, 1) + ' KB/天', '', '数据量 × 上报次数');
  out += tr('单点平均上行速率', (avgKbps < 1 ? IOT._fix(avgKbps, 4) : IOT._w(avgKbps, 2)) + ' kbps', '', '仅均值,实际还需考虑突发与峰值');
  out += tr('推荐通信方式', primary, 'cr-good', '综合业务、时延与频段条件给出');
  out += '</table>';

  var rp = [];
  for (i = 0; i < reasons.length; i++) rp.push('· ' + reasons[i]);
  out += '<p class="calc-note"><b>推荐理由</b><br>' + rp.join('<br>') + '</p>';

  var np = [];
  for (i = 0; i < nots.length; i++) np.push('· <b>' + nots[i][0] + '</b>:' + nots[i][1]);
  out += '<p class="calc-note"><b>不推荐的选项及原因</b><br>' + np.join('<br>') + '</p>';

  out += '<p class="calc-note">选型没有万能答案,本质是<b>用业务要求去匹配承载能力</b>:采集类看功耗与覆盖广度,控制类看时延与可靠,视频类看带宽。还有一类常被忽略——若点位集中在同一低压台区且具备电力线通道,HPLC 载波可作为一种就近采集的低成本补充,但它依赖拓扑、不适合广域。频段使用须遵守现行无线电管理规定,实际选型与频率许可以厂商方案与主管部门批复为准。以上为教学口径。</p>';
  el.innerHTML = out;
};

/* ---- 4. 边缘数据量与带宽 ---- */
IOT.calcEdge = function() {
  var el = document.getElementById('ed-result');
  if (!el) return;
  var points = IOT._num('ed-points'), freqMin = IOT._num('ed-freq'), bytes = IOT._num('ed-bytes');
  var agg = IOT._num('ed-agg'), rate = IOT._num('ed-rate'), sites = IOT._num('ed-sites');
  if (points === null || freqMin === null || bytes === null || agg === null || rate === null || sites === null) {
    el.innerHTML = warn('请把六项参数填写完整。'); return;
  }
  if (points < 0 || freqMin < 0 || bytes < 0 || agg <= 0 || rate < 0 || sites <= 0) {
    el.innerHTML = warn('点位数、频率、包大小、变化上报率不能为负;聚合倍率与站点数需大于 0。'); return;
  }

  var totalPoints = points * sites;
  var rawDay = totalPoints * freqMin * 1440 * bytes;            // 原始日数据量(字节)
  var procDay = rawDay / agg * (rate / 100);                    // 边缘处理后日数据量(字节)
  var savePct = rawDay > 0 ? (1 - procDay / rawDay) * 100 : 0;
  var avgKbps = procDay * 8 / 86400 / 1000;                     // 聚合后平均上行速率(kbps)
  var headroom = avgKbps * 3;                                   // 建议预留(按 3 倍突发)
  var siteMonth = sites > 0 ? procDay / sites * 30 : 0;         // 单站点月流量(字节)
  var totalMonth = procDay * 30;                                // 全部站点月流量(字节)

  function fmtB(b) {
    if (b < 1024) return IOT._w(b, 0) + ' B';
    if (b < 1048576) return IOT._w(b / 1024, 1) + ' KB';
    if (b < 1073741824) return IOT._w(b / 1048576, 2) + ' MB';
    return IOT._w(b / 1073741824, 2) + ' GB';
  }
  function fmtRate(v) { return (v < 1 ? IOT._fix(v, 4) : IOT._w(v, 2)) + ' kbps'; }

  var out = '<table class="cr-table">';
  out += tr('点位总数', IOT._w(totalPoints, 0) + ' 个', '', IOT._w(points, 0) + ' 点/站 × ' + IOT._w(sites, 0) + ' 个站点');
  out += tr('原始日数据量', fmtB(rawDay), '', '点位 × 采集次数 × 单包字节,未做任何处理');
  out += tr('边缘处理后日数据量', fmtB(procDay), 'cr-good', '先聚合(÷ ' + IOT._fix(agg, 0) + '),再按变化上报(× ' + IOT._fix(rate, 0) + ' %)');
  out += tr('节省比例', IOT._fix(savePct, 1) + ' %', 'cr-good', '边缘处理压掉的比例');
  out += tr('聚合后平均上行速率', fmtRate(avgKbps), '', '处理后日数据量 × 8 ÷ 86400 ÷ 1000');
  out += tr('建议预留上行带宽', fmtRate(headroom), '', '按 3 倍突发余量估算,供链路配置参考');
  out += tr('单站点月流量', fmtB(siteMonth), '', '单站点日处理后数据量 × 30 天');
  out += tr('全部站点月流量', fmtB(totalMonth), '', IOT._w(sites, 0) + ' 个站点合计 × 30 天');
  out += '</table>';
  if (rate > 100) {
    out += warn('变化上报率不应超过 100 %。');
  }
  if (avgKbps > 0 && headroom > 1000) {
    out += warn('建议预留带宽已达 ' + IOT._fix(headroom / 1000, 2) + ' Mbps,单站点上行需认真核算,必要时把部分聚合再下沉到边缘。');
  }
  out += '<p class="calc-note">边缘计算省的不是「存储」,而是<b>回传带宽与流量费</b>:原始采样全量上传,带宽和资费都会迅速膨胀;在边缘先做两件事就见效——<b>聚合</b>(把多条并一条,降采样率)与<b>变化上报</b>(状态没变就不传,只报变化)。两者叠加,压缩比往往是数量级的。但要记住:压缩得越狠,后端能看到的细节越少,所以「聚合倍率」和「变化上报率」要和业务对数据颗粒度的真实需求匹配,一味求省会让后续分析缺数据。以上为教学口径,平均速率不等于峰值,实际链路配置还要按峰值与并发留足余量。</p>';
  el.innerHTML = out;
};

/* ---- 5. 感知层造价估算 ---- */
IOT.calcCost = function() {
  var el = document.getElementById('ct-result');
  if (!el) return;
  var points = IOT._num('ct-points'), termP = IOT._num('ct-term'), commP = IOT._num('ct-comm');
  var instP = IOT._num('ct-inst'), plat = IOT._num('ct-plat'), om = IOT._num('ct-om');
  if (points === null || termP === null || commP === null || instP === null || plat === null || om === null) {
    el.innerHTML = warn('请把六项参数填写完整。'); return;
  }
  if (points <= 0) { el.innerHTML = warn('点位数量需大于 0。'); return; }
  if (termP < 0 || commP < 0 || instP < 0 || plat < 0 || om < 0) {
    el.innerHTML = warn('单价、分摊与运维系数不能为负。'); return;
  }

  var term = points * termP;
  var comm = points * commP;
  var inst = points * instP;
  var total = term + comm + inst + plat;
  var pct = function(x) { return total > 0 ? x / total * 100 : 0; };
  var omFee = total * om / 100;
  var firstYear = total + omFee;
  var perPoint = points > 0 ? total / points : 0;

  var out = '<table class="cr-table">';
  out += tr('终端合计', IOT._w(term, 2) + ' 元', '', IOT._w(points, 0) + ' 点 × ' + IOT._w(termP, 2) + ' 元,占 ' + IOT._fix(pct(term), 1) + ' %');
  out += tr('通信模块合计', IOT._w(comm, 2) + ' 元', '', IOT._w(points, 0) + ' 点 × ' + IOT._w(commP, 2) + ' 元,占 ' + IOT._fix(pct(comm), 1) + ' %');
  out += tr('施工安装合计', IOT._w(inst, 2) + ' 元', '', IOT._w(points, 0) + ' 点 × ' + IOT._w(instP, 2) + ' 元,占 ' + IOT._fix(pct(inst), 1) + ' %');
  out += tr('平台分摊', IOT._w(plat, 2) + ' 元', '', '一次性分摊,占 ' + IOT._fix(pct(plat), 1) + ' %');
  out += tr('总投资', IOT._w(total, 2) + ' 元', 'cr-good', '终端 + 通信 + 施工 + 平台');
  out += tr('年运维费', IOT._w(omFee, 2) + ' 元', '', '总投资 × ' + IOT._fix(om, 1) + ' %');
  out += tr('首年含运维总投入', IOT._w(firstYear, 2) + ' 元', '', '总投资 + 年运维费');
  out += tr('单点综合造价', IOT._w(perPoint, 2) + ' 元/点', '', '总投资 ÷ 点位数,用于横向比较不同方案');
  out += '</table>';
  if (om >= 15) {
    out += warn('年运维系数偏高(' + IOT._fix(om, 1) + ' %),长期运维支出会快速累积,选型时应把可维护性与生命周期成本一并考虑。');
  }
  out += '<p class="calc-note">造价构成里,<b>终端加通信模块通常是主体,而施工安装随点位分散度与现场条件变化最大</b>——同样数量的点,集中安装和野外分散安装,施工费可能差出数倍;平台费用是一次性分摊,点位越多,单点摊得越薄。别只看初始投资:<b>运维系数按年计,多年累计很可能超过初始投资本身</b>,所以「便宜的设备」和「便宜的总成本」常常不是一回事。以上为教学口径,不构成报价、预算或招标依据,实际以厂商报价与项目概算为准。</p>';
  el.innerHTML = out;
};

/* ===== 模块页 ===== */
IOT.views.module = function(id) {
  var mod = IOT.modules.find(function(m) { return m.id === id; });
  if (!mod) { IOT.views.home(); return; }
  var P = IOT.progress();
  var lessons = IOT.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + IOT.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + IOT.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = IOT.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + IOT.esc(title) + '</a>';
    else html += '<span class="title">' + IOT.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul>';
  html += '<div class="disclaimer"><h4>本模块提示</h4><p>本模块若涉及电价机制、市场规则、补贴政策或考核标准，正文均已标注政策依据与适用期，<b>内容基线为 2026 年 9 月</b>。请以国家发展改革委、国家能源局及各省主管部门发布的现行规则、办法与交易细则为准。本站不构成投资、交易、报价或法律意见。</p></div>';
  html += '</div>';
  IOT.render(html);
};

/* ===== 术语 ===== */
IOT.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>电力市场名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 节点电价 / 中长期 / 绿证 / CCER / 辅助服务 / 机制电价" oninput="IOT.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(IOT.terms) + '</div>';
  html += '<div class="disclaimer"><h4>声明</h4><p>术语解释为<b>通俗示意</b>，用于建立初步理解，与政策文件、市场规则中的正式定义可能存在简化差异。涉及具体适用时请查阅规则原文与专业文献。内容基线 2026 年 9 月。</p></div>';
  html += '</div>';
  IOT.render(html);
};
IOT.filterTerms = function(q) {
  var filtered = IOT.terms;
  if (q) { q = q.toLowerCase();
    filtered = IOT.terms.filter(function(t) {
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
    html += '<div class="term-name">' + IOT.esc(t.name) + ' <span class="term-en">' + IOT.esc(t.en || '') + '</span></div>';
    html += '<div class="term-def">' + IOT.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + IOT.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
IOT.views.myTerms = function() {
  var P = IOT.progress(); var collected = [];
  for (var i = 0; i < IOT.terms.length; i++) if (P.hasTerm(IOT.terms[i].id)) collected.push(IOT.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  IOT.render(html);
};

/* ===== 搜索 ===== */
IOT.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 现货 / 节点电价 / 机制电价 / 绿证 / 配额 / 偏差考核" oninput="IOT.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  IOT.render(html);
};
IOT.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = IOT.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + IOT.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + IOT.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
IOT.views.settings = function() {
  var P = IOT.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="IOT.setTheme(\'dark\')">深色 · 电光青金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="IOT.setTheme(\'light\')">浅色 · 电蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="IOT.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="IOT.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="IOT.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = IOT.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/iot-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/iot-progress" value="' + IOT.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + IOT.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + IOT.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + IOT.esc(IOT.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="IOT.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="IOT.clearData()">清除数据</button></div>';
  html += '</div>';
  IOT.render(html);

  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    IOT.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!IOT.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    IOT.sync.pullNow().then(function () { return IOT.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + IOT.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    IOT.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : IOT.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    IOT.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
IOT.setTheme = function(t) { document.documentElement.dataset.theme = t; IOT.progress().setPref('theme', t); IOT.views.settings(); };
IOT.setFontSize = function(s) { document.documentElement.dataset.fs = s; IOT.progress().setPref('fontSize', s); IOT.views.settings(); };
IOT.exportData = function() {
  var data = IOT.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'iot-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
IOT.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('iot.progress.v1');
    window.location.reload();
  }
};
