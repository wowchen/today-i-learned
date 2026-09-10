/* 工具视图:五个新型电力系统与储能互动工具 + 术语/搜索/设置/模块 */
window.NPS = window.NPS || {};
NPS.views = NPS.views || {};

NPS._num = function(id) { var el = document.getElementById(id); if (!el) return null; var x = parseFloat(el.value); return isNaN(x) ? null : x; };
NPS._txt = function(id) { var el = document.getElementById(id); return el ? el.value : ''; };
NPS._fix = function(n, d) { if (!isFinite(n)) return '-'; return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula, cls) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val ' + (cls || 'cr-good') + '">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}
function barMeter(pctA, labelA, pctB, labelB) {
  var a = Math.max(0, Math.min(100, pctA));
  var b = Math.max(0, Math.min(100, pctB));
  var svg = '<svg viewBox="0 0 520 64" style="width:100%;background:var(--paper);border:1px solid var(--line)">';
  svg += '<rect x="40" y="20" width="440" height="18" rx="3" fill="var(--acc-soft)"/>';
  svg += '<rect x="40" y="20" width="' + (440 * a / 100) + '" height="18" rx="3" fill="var(--acc)"/>';
  svg += '<rect x="' + (40 + 440 * a / 100) + '" y="20" width="' + (440 * b / 100) + '" height="18" rx="3" fill="var(--note)" opacity=".45"/>';
  svg += '<text x="40" y="14" font-size="9" fill="var(--acc2)">' + labelA + ' ' + NPS._fix(pctA, 1) + '%</text>';
  svg += '<text x="480" y="14" font-size="9" fill="var(--note)" text-anchor="end">' + labelB + ' ' + NPS._fix(pctB, 1) + '%</text>';
  svg += '<text x="40" y="52" font-size="9" fill="var(--note)">左深色块为可利用部分,右侧灰色块为未能利用部分</text>';
  svg += '</svg>';
  return svg;
}

/* ===== 工具总页 ===== */
NPS.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">新型电力系统与储能的关键账,光看文字不容易有手感:到底要配多少储能、哪种技术路线合适、峰谷套利几年回本、电池还剩多少健康度。这五个小工具全部在本地浏览器实时运算,<b>边读边算,把概念变成手感</b>。结果均为概念性建模演示,用于建立量级直觉,不作为投资、配置或决策依据。</p>';

  // 1. 源网荷储平衡模拟器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>源网荷储平衡模拟器</h3>';
  html += '<p class="lab-desc">给定负荷规模,调节新能源装机与灵活性资源(储能、灵活电源、跨区互济),看新能源电量占比与弃电率如何变化。核心结论:灵活性跟不上,装机再高也换不来电量。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>最大负荷(MW) <input type="number" id="bs-load" value="2000"></label>';
  html += '<label>新能源装机(MW) <input type="number" id="bs-re" value="3000"></label>';
  html += '<label>储能功率(MW) <input type="number" id="bs-p" value="300"></label>';
  html += '<label>储能时长(h) <input type="number" id="bs-h" value="2"></label>';
  html += '<label>灵活电源调节深度(%) <input type="number" id="bs-flex" value="25"></label>';
  html += '<label>跨区互济(MW) <input type="number" id="bs-link" value="200"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NPS.calcBalance()">模拟平衡</button></div>';
  html += '<div id="bs-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 储能配置计算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◇</span>储能配置计算器</h3>';
  html += '<p class="lab-desc">给一个新能源电站配储能,目标是把弃电率压到设定水平。反推需要多大的功率与容量,并估算投资、年消纳增益与静态回收期。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>新能源装机(MW) <input type="number" id="sz-re" value="1000"></label>';
  html += '<label>年利用小时 <input type="number" id="sz-hours" value="1800"></label>';
  html += '<label>目标弃电率(%) <input type="number" id="sz-target" value="5"></label>';
  html += '<label>储能时长(h) <input type="number" id="sz-h" value="2"></label>';
  html += '<label>单位造价(元/kWh) <input type="number" id="sz-cost" value="800"></label>';
  html += '<label>消纳电价(元/kWh) <input type="number" id="sz-price" value="0.35"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NPS.calcSizing()">计算配置</button></div>';
  html += '<div id="sz-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 储能技术路线对比器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≡</span>储能技术路线对比器</h3>';
  html += '<p class="lab-desc">同样的需求,不同的技术路线匹配度差别很大。输入时长需求、功率规模、场地条件与日循环次数,看各路线匹配度评分与估算度电成本,并给出推荐。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>时长需求(h) <input type="number" id="tc-dur" value="4"></label>';
  html += '<label>功率规模(MW) <input type="number" id="tc-mw" value="100"></label>';
  html += '<label>场地条件 <select id="tc-site"><option value="plain">平原</option><option value="mountain">山区</option><option value="coast">沿海</option><option value="urban">城市园区</option><option value="salt">盐穴/矿洞</option></select></label>';
  html += '<label>日循环次数 <input type="number" id="tc-cyc" value="1"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NPS.calcTech()">对比路线</button></div>';
  html += '<div id="tc-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 峰谷套利收益测算器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">¥</span>峰谷套利收益测算器</h3>';
  html += '<p class="lab-desc">用户侧储能最常见的收益模式。输入容量、峰谷电价、循环效率与运行天数,算单次收益、年净收益与静态回收期,看价差与循环次数对回报的影响有多大。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>储能容量(MWh) <input type="number" id="ar-cap" value="10"></label>';
  html += '<label>额定功率(MW) <input type="number" id="ar-pow" value="5"></label>';
  html += '<label>峰段电价(元/kWh) <input type="number" id="ar-peak" value="1.2" step="0.01"></label>';
  html += '<label>谷段电价(元/kWh) <input type="number" id="ar-valley" value="0.35" step="0.01"></label>';
  html += '<label>循环效率(%) <input type="number" id="ar-eff" value="88"></label>';
  html += '<label>日循环次数 <input type="number" id="ar-cyc" value="1"></label>';
  html += '<label>年运行天数 <input type="number" id="ar-days" value="330"></label>';
  html += '<label>单位投资(元/kWh) <input type="number" id="ar-cost" value="800"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NPS.calcArbitrage()">测算收益</button></div>';
  html += '<div id="ar-result" class="calc-result"></div>';
  html += '</div>';

  // 5. SOH 与安全评估器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">✓</span>SOH 与安全评估器</h3>';
  html += '<p class="lab-desc">按运行工况估算电池健康度与安全风险等级。体会一件事:温度、放电深度与倍率对寿命的影响,远比多数人以为的大。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>额定容量(MWh) <input type="number" id="sh-cap" value="10"></label>';
  html += '<label>投运年限(年) <input type="number" id="sh-year" value="4"></label>';
  html += '<label>累计等效循环次数 <input type="number" id="sh-cyc" value="1200"></label>';
  html += '<label>仓内平均温度(度) <input type="number" id="sh-temp" value="28"></label>';
  html += '<label>平均放电深度(%) <input type="number" id="sh-dod" value="80"></label>';
  html += '<label>平均充放倍率(C) <input type="number" id="sh-crate" value="0.5" step="0.1"></label>';
  html += '<label>长期停留 SOC 区间 <select id="sh-soc"><option value="mid">20% 到 80%(推荐)</option><option value="fullrange">接近满充满放</option><option value="full">长期满充搁置</option><option value="low">长期低电量搁置</option></select></label>';
  html += '<label>近一年告警次数 <input type="number" id="sh-alarm" value="1"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="NPS.calcSoh()">评估状态</button></div>';
  html += '<div id="sh-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上模型均为教学用的简化建模,参数取自行业常见量级概数,并对政策与价格机制做了定型假设。<b>实际项目必须依据本地电价文件、市场规则、设备实测数据与详细财务模型单独测算</b>,本工具结果不作为投资、配置、交易或安全判定的依据。</p>';
  html += '</div>';
  NPS.render(html);
};

/* ---- 1. 源网荷储平衡模拟器 ---- */
NPS.calcBalance = function() {
  var load = NPS._num('bs-load'), re = NPS._num('bs-re'), p = NPS._num('bs-p');
  var h = NPS._num('bs-h'), flex = NPS._num('bs-flex'), link = NPS._num('bs-link');
  var el = document.getElementById('bs-result');
  if (load === null || re === null) { el.innerHTML = '<p class="calc-note">请填写最大负荷与新能源装机。</p>'; return; }

  var eLoad = load * 24 * 0.75;                    // 日用电量 MWh(负荷率 0.75)
  var eRe = re * 1800 / 365;                       // 新能源日发电量 MWh(综合年利用 1800h)
  var flexSpace = load * ((flex || 0) / 100) * 6;  // 灵活电源低谷下调空间 MWh
  var storeAbs = (p || 0) * (h || 0) * 1.8;        // 储能日吸收电量 MWh(约 1.8 次等效循环)
  var linkOut = (link || 0) * 6;                   // 跨区外送 MWh
  var reDirect = eLoad * 0.85;                     // 负荷直供上限(受负荷曲线约束)
  var absorb = Math.min(eRe, reDirect + flexSpace + storeAbs + linkOut);
  var curt = eRe > 0 ? Math.max(0, (eRe - absorb) / eRe * 100) : 0;
  var penRaw = eLoad > 0 ? eRe / eLoad * 100 : 0;
  var penReal = eLoad > 0 ? absorb / eLoad * 100 : 0;
  var flexNeed = eRe * 0.3;
  var flexHave = flexSpace + storeAbs + linkOut;
  var ratio = flexNeed > 0 ? flexHave / flexNeed : 0;

  var lvl, lvlCls, advice;
  if (curt < 3) { lvl = '良好'; lvlCls = 'cr-good'; advice = '灵活性资源与新能源规模基本匹配,系统可以较充分消纳。继续观察极端天气下的短时缺口。'; }
  else if (curt < 10) { lvl = '偏紧'; lvlCls = 'cr-warn'; advice = '出现明显弃电,说明灵活性不足。优先考虑增加储能时长或提升灵活电源调节深度,再评估跨区互济。'; }
  else { lvl = '不足'; lvlCls = 'cr-bad'; advice = '新能源规模已超出系统消纳能力,大量电量被弃。此时继续增加装机不会带来等比例电量收益,必须先补灵活性。'; }

  var rows = '';
  rows += crRow('新能源装机渗透率', NPS._fix(re / load * 100, 1) + '%', '装机 / 最大负荷');
  rows += crRow('新能源电量占比(未弃)', NPS._fix(penRaw, 1) + '%', '新能源日发电量 / 日用电量');
  rows += crRow('实际新能源电量占比', NPS._fix(penReal, 1) + '%', '实际消纳量 / 日用电量', 'cr-good');
  rows += crRow('弃电率', NPS._fix(curt, 1) + '%', '未能消纳 / 新能源发电量', curt < 3 ? 'cr-good' : (curt < 10 ? 'cr-warn' : 'cr-bad'));
  rows += crRow('灵活性供给 / 需求', NPS._fix(ratio * 100, 0) + '%', '灵活资源 / 新能源电量的 30%', ratio >= 1 ? 'cr-good' : (ratio >= 0.7 ? 'cr-warn' : 'cr-bad'));
  rows += crRow('储能日吸收电量', NPS._fix(storeAbs, 0) + ' MWh', '功率 × 时长 × 1.8');
  rows += crRow('单个储能电站覆盖尖峰时长', h ? NPS._fix(h, 1) + ' h' : '-', '储能时长');
  rows += crRow('系统匹配结论', lvl, '按弃电率分档', lvlCls);

  el.innerHTML = barMeter(penReal, '可消纳', curt, '弃电') +
    '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:新能源电量占比高不等于电力平衡没问题。傍晚尖峰时段光伏几乎不出力,仍需灵活电源、储能与需求响应来顶峰,这两笔账要分开算。</p>';
};

/* ---- 2. 储能配置计算器 ---- */
NPS.calcSizing = function() {
  var re = NPS._num('sz-re'), hours = NPS._num('sz-hours'), target = NPS._num('sz-target');
  var h = NPS._num('sz-h'), cost = NPS._num('sz-cost'), price = NPS._num('sz-price');
  var el = document.getElementById('sz-result');
  if (re === null || !h || h <= 0) { el.innerHTML = '<p class="calc-note">请填写新能源装机与储能时长(须大于 0)。</p>'; return; }

  var eYear = re * (hours || 1800);                       // MWh/年
  var baseCurt = 15;                                      // 无储能情形下的基准弃电率假设
  var cutGap = Math.max(0, baseCurt - (target || 0)) / 100;
  var needAbsorb = eYear * cutGap;                        // MWh/年 需由储能吸收
  var needDaily = needAbsorb / 365;                       // MWh/日
  var power = needDaily / h / 1.8;                        // MW
  var cap = power * h;                                    // MWh
  var invest = cap * 1000 * (cost || 800) / 10000;        // 万元
  var annualGain = needAbsorb;                            // MWh/年 增发消纳
  var annualRev = annualGain * 1000 * (price || 0) / 10000; // 万元/年
  var om = invest * 0.02;
  var netRev = annualRev - om;
  var payback = netRev > 0 ? invest / netRev : Infinity;

  var rows = '';
  rows += crRow('新能源年发电量', NPS._fix(eYear / 10000, 2) + ' 亿kWh', '装机 × 年利用小时');
  rows += crRow('需由储能吸收的增发消纳量', NPS._fix(needAbsorb / 10000, 3) + ' 亿kWh', '年发电量 × 弃电率降幅');
  rows += crRow('建议储能功率', NPS._fix(power, 1) + ' MW', '日吸收量 / 时长 / 1.8');
  rows += crRow('建议储能容量', NPS._fix(cap, 1) + ' MWh', '功率 × 时长');
  rows += crRow('投资估算', NPS._fix(invest, 0) + ' 万元', '容量 × 单位造价');
  rows += crRow('年消纳增益电量', NPS._fix(annualGain / 10000, 3) + ' 亿kWh', '即减少的弃电量');
  rows += crRow('年净收益', NPS._fix(netRev, 0) + ' 万元', '消纳收益 - 运维(投资 2%)', netRev > 0 ? 'cr-good' : 'cr-bad');
  rows += crRow('静态回收期', isFinite(payback) ? NPS._fix(payback, 1) + ' 年' : '无法回收', '投资 / 年净收益', isFinite(payback) && payback < 8 ? 'cr-good' : 'cr-warn');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">重要提示:该模型假设「无储能时弃电率 15%」。如果当地本来就没有弃电,储能就失去了这部分收益来源,这个结果会严重高估。真实项目还要计入容量衰减、辅助用电、检修停机与市场价格波动,并按当地电价与市场规则重算。</p>';
};

/* ---- 3. 储能技术路线对比器 ---- */
NPS.calcTech = function() {
  var dur = NPS._num('tc-dur'), mw = NPS._num('tc-mw');
  var site = NPS._txt('tc-site'), cyc = NPS._num('tc-cyc');
  var el = document.getElementById('tc-result');
  if (dur === null || mw === null) { el.innerHTML = '<p class="calc-note">请填写时长需求与功率规模。</p>'; return; }
  cyc = cyc || 1;

  var TECH = [
    { n: '抽水蓄能', d1: 4, d2: 12, sites: ['mountain', 'plain'], eff: 75, life: 50, cap: 1200, freq: 0.2, minMW: 300 },
    { n: '磷酸铁锂', d1: 0.5, d2: 4, sites: ['plain', 'mountain', 'coast', 'urban', 'salt'], eff: 88, life: 12, cap: 800, freq: 1.0, minMW: 0 },
    { n: '钠离子电池', d1: 0.5, d2: 4, sites: ['plain', 'mountain', 'coast', 'urban', 'salt'], eff: 85, life: 10, cap: 900, freq: 1.0, minMW: 0 },
    { n: '液流电池', d1: 3, d2: 12, sites: ['plain', 'mountain', 'coast', 'urban'], eff: 70, life: 20, cap: 1600, freq: 0.9, minMW: 0 },
    { n: '压缩空气', d1: 4, d2: 10, sites: ['plain', 'mountain', 'salt'], eff: 62, life: 30, cap: 1000, freq: 0.6, minMW: 50 },
    { n: '飞轮储能', d1: 0.01, d2: 0.4, sites: ['plain', 'mountain', 'coast', 'urban', 'salt'], eff: 88, life: 20, cap: 9000, freq: 1.0, minMW: 0, maxMW: 50 },
    { n: '氢储能', d1: 24, d2: 720, sites: ['plain', 'mountain', 'coast'], eff: 32, life: 25, cap: 3500, freq: 0.5, minMW: 0 }
  ];
  var siteName = { plain: '平原', mountain: '山区', coast: '沿海', urban: '城市园区', salt: '盐穴/矿洞' };

  var out = [];
  for (var i = 0; i < TECH.length; i++) {
    var t = TECH[i], sc = 40, notes = [];
    // 时长匹配(40)
    if (dur >= t.d1 && dur <= t.d2) { sc = 40; }
    else {
      var gap = dur < t.d1 ? (t.d1 - dur) : (dur - t.d2);
      sc = Math.max(0, 40 - gap * 7);
      if (dur < t.d1) notes.push('时长偏短,该路线更适合 ' + t.d1 + 'h 以上');
      else notes.push('时长超出该路线常用区间');
    }
    // 场地匹配(20)
    var siteOk = t.sites.indexOf(site) !== -1;
    sc += siteOk ? 20 : 4;
    if (!siteOk) notes.push('受 ' + siteName[site] + ' 场地条件限制');
    // 循环频率(20)
    var freqScore = 20 - Math.max(0, cyc - 1) * 8 * (1 - t.freq);
    sc += Math.max(0, freqScore);
    if (cyc >= 2 && t.freq < 0.7) notes.push('不适合每日多次循环的工况');
    // 规模匹配(20)
    var sizeOk = mw >= (t.minMW || 0) && (!t.maxMW || mw <= t.maxMW);
    sc += sizeOk ? 20 : 8;
    if (!sizeOk) notes.push('规模与典型应用区间不匹配');
    // 估算度电成本
    var lcos = t.cap / (t.life * 365 * cyc * t.eff / 100);
    out.push({ n: t.n, sc: Math.round(sc), lcos: lcos, notes: notes, eff: t.eff, life: t.life });
  }
  out.sort(function(a, b) { return b.sc - a.sc; });

  var rows = '';
  for (var k = 0; k < out.length; k++) {
    var o = out[k];
    var cls = o.sc >= 80 ? 'cr-good' : (o.sc >= 55 ? 'cr-warn' : 'cr-bad');
    rows += crRow((k + 1) + '. ' + o.n, o.sc + ' 分', '估算度电成本 ' + NPS._fix(o.lcos, 3) + ' 元/kWh · 效率 ' + o.eff + '% · 寿命约 ' + o.life + ' 年', cls);
  }
  var best = out[0], second = out[1];
  var tips = '<p class="calc-note"><b>推荐:优先评估 ' + best.n + '(匹配度 ' + best.sc + ' 分),备选 ' + second.n + '(' + second.sc + ' 分)。</b>匹配度由时长、场地、循环频率与规模四项加权得出,估算度电成本只计设备与寿命,未含运维、充电与残值,仅供横向比较。';
  if (best.notes.length) tips += '提示:' + best.notes.join(';') + '。';
  tips += '实际选型还要看接入条件、并网要求、消防与安全规范、当地政策与产业配套,建议对本地方案单独做技术与经济比选。</p>';

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' + tips;
};

/* ---- 4. 峰谷套利收益测算器 ---- */
NPS.calcArbitrage = function() {
  var cap = NPS._num('ar-cap'), pow = NPS._num('ar-pow'), peak = NPS._num('ar-peak');
  var valley = NPS._num('ar-valley'), eff = NPS._num('ar-eff'), cyc = NPS._num('ar-cyc');
  var days = NPS._num('ar-days'), cost = NPS._num('ar-cost');
  var el = document.getElementById('ar-result');
  if (cap === null || !eff || eff <= 0) { el.innerHTML = '<p class="calc-note">请填写储能容量与循环效率(须大于 0)。</p>'; return; }

  var dod = 0.9;
  var usable = cap * dod;                                  // MWh 单次可放电量
  var maxByPower = pow ? pow * (cap / pow) : usable;       // 时长约束下不额外限制
  if (maxByPower < usable) usable = maxByPower;
  var charge = usable / (eff / 100);                       // MWh 单次充电量
  var single = usable * 1000 * peak - charge * 1000 * valley;   // 元
  var yearGross = single * (cyc || 1) * (days || 330);     // 元
  var invest = cap * 1000 * (cost || 800);                 // 元
  var om = invest * 0.02;
  var yearNet = yearGross - om;
  var payback = yearNet > 0 ? invest / yearNet : Infinity;
  var spread = peak - valley;

  var rows = '';
  rows += crRow('峰谷价差', NPS._fix(spread, 3) + ' 元/kWh', '峰段 - 谷段');
  rows += crRow('单次放电量', NPS._fix(usable * 1000, 0) + ' kWh', '容量 × 放电深度 90%');
  rows += crRow('单次充电量', NPS._fix(charge * 1000, 0) + ' kWh', '放电量 / 循环效率', 'cr-bad');
  rows += crRow('单次套利收益', NPS._fix(single, 0) + ' 元', '放电收入 - 充电成本', single > 0 ? 'cr-good' : 'cr-bad');
  rows += crRow('年毛收益', NPS._fix(yearGross / 10000, 1) + ' 万元', '单次收益 × 日循环 × 年天数');
  rows += crRow('年净收益', NPS._fix(yearNet / 10000, 1) + ' 万元', '年毛收益 - 运维(投资 2%)', yearNet > 0 ? 'cr-good' : 'cr-bad');
  rows += crRow('投资总额', NPS._fix(invest / 10000, 1) + ' 万元', '容量 × 单位投资');
  rows += crRow('静态回收期', isFinite(payback) ? NPS._fix(payback, 1) + ' 年' : '无法回收', '投资 / 年净收益', isFinite(payback) && payback < 7 ? 'cr-good' : 'cr-warn');
  rows += crRow('单位度电价差收益', NPS._fix(peak - valley / (eff / 100), 3) + ' 元/kWh', '峰价 - 谷价 / 效率');

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">几个容易被忽略的点:一是<b>价差必须够大</b>,如果峰谷价差小于谷价除以效率的损耗,放电越多亏得越多;二是<b>循环次数是收益放大器</b>,一天两充两放几乎等于收益翻倍,但会加快容量衰减;三是这里没算容量衰减,实际年收益会逐年下降;四是必须确认当地峰谷时段划分与放电电量能否被本地负荷消纳。</p>';
};

/* ---- 5. SOH 与安全评估器 ---- */
NPS.calcSoh = function() {
  var rated = NPS._num('sh-cap'), year = NPS._num('sh-year'), cyc = NPS._num('sh-cyc');
  var temp = NPS._num('sh-temp'), dod = NPS._num('sh-dod'), crate = NPS._num('sh-crate');
  var soc = NPS._txt('sh-soc'), alarm = NPS._num('sh-alarm');
  var el = document.getElementById('sh-result');
  if (year === null || cyc === null || temp === null) { el.innerHTML = '<p class="calc-note">请填写投运年限、循环次数与平均温度。</p>'; return; }

  var tempF = Math.pow(2, (temp - 25) / 10);
  var dodF = (dod || 80) / 80;
  var crateF = Math.sqrt((crate || 0.5) / 0.5);
  var cycLoss = cyc / 6000 * 18 * dodF * crateF;
  var calLoss = year * 1.6 * tempF;
  var socExtra = soc === 'full' ? 4 : (soc === 'low' ? 3 : (soc === 'fullrange' ? 1.5 : 0));
  var soh = 100 - cycLoss - calLoss - socExtra;
  var clamped = Math.max(40, Math.min(100, soh));
  var yearLoss = year > 0 ? (100 - clamped) / year : 0;

  var risk = 0;
  if (temp > 35) risk += 3; else if (temp > 30) risk += 2; else if (temp < 5) risk += 1;
  if (alarm >= 3) risk += 3; else if (alarm >= 1) risk += 1;
  if ((crate || 0) > 1) risk += 2; else if ((crate || 0) > 0.8) risk += 1;
  if ((dod || 0) > 90) risk += 2; else if ((dod || 0) > 85) risk += 1;
  if (clamped < 80) risk += 2; else if (clamped < 88) risk += 1;
  if (soc === 'full' || soc === 'low') risk += 1;
  var level = risk >= 7 ? '高' : (risk >= 4 ? '中' : '低');
  var levelCls = risk >= 7 ? 'cr-bad' : (risk >= 4 ? 'cr-warn' : 'cr-good');
  var act = risk >= 7
    ? '建议立即安排专项检查:核对温控与通风、复测绝缘与内阻、核查告警记录;必要时限功率运行或下线检修。'
    : (risk >= 4
      ? '建议加密监测频次,重点跟踪温升速率、压差与内阻变化;核查热管理与消防联动是否有效。'
      : '状态正常,按既定计划开展状态监测与定期检验即可,保持温度与 SOC 区间管理。');

  var usable = (rated || 0) * clamped / 100 * 0.9;

  var rows = '';
  rows += crRow('估算 SOH', NPS._fix(clamped, 1) + '%', '100 - 循环衰减 - 日历衰减 - SOC 影响', clamped >= 88 ? 'cr-good' : (clamped >= 80 ? 'cr-warn' : 'cr-bad'));
  rows += crRow('循环衰减', '-' + NPS._fix(cycLoss, 2) + '%', '循环次数 / 6000 × 18 × 放电深度因子 × 倍率因子', 'cr-bad');
  rows += crRow('日历衰减', '-' + NPS._fix(calLoss, 2) + '%', '年限 × 1.6% × 温度因子(' + NPS._fix(tempF, 2) + ')', 'cr-bad');
  rows += crRow('温度因子', NPS._fix(tempF, 2) + ' 倍', '温度每升约 10 度,老化速率约翻倍', tempF > 1.2 ? 'cr-bad' : 'cr-good');
  rows += crRow('年均衰减率', NPS._fix(yearLoss, 2) + '% / 年', '总衰减 / 投运年限', yearLoss < 2.5 ? 'cr-good' : 'cr-warn');
  rows += crRow('剩余可用容量', NPS._fix(usable, 2) + ' MWh', '额定容量 × SOH × 可用系数 0.9');
  rows += crRow('安全风险等级', level, '温度 / 告警 / 倍率 / 放电深度 / SOH 综合', levelCls);

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + act + '说明:该模型为教学简化模型,衰减系数取行业概数量级,不能替代厂家衰减曲线与实测标定。<b>热失控等安全风险须以现场监测数据、厂家资料与专业人员判断为准</b>,本工具不用于安全判定。</p>';
};

/* ===== 模块页 ===== */
NPS.views.module = function(id) {
  var mod = NPS.modules.find(function(m) { return m.id === id; });
  if (!mod) { NPS.views.home(); return; }
  var P = NPS.progress();
  var lessons = NPS.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + NPS.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + NPS.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = NPS.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + NPS.esc(title) + '</a>';
    else html += '<span class="title">' + NPS.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  NPS.render(html);
};

/* ===== 术语 ===== */
NPS.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>新型电力系统与储能 名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 惯量 / 构网型 / 液流电池 / 峰谷套利" oninput="NPS.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(NPS.terms) + '</div></div>';
  NPS.render(html);
};
NPS.filterTerms = function(q) {
  var filtered = NPS.terms;
  if (q) { q = q.toLowerCase();
    filtered = NPS.terms.filter(function(t) {
      return t.name.toLowerCase().indexOf(q) !== -1 || t.en.toLowerCase().indexOf(q) !== -1 || t.def.toLowerCase().indexOf(q) !== -1;
    });
  }
  document.getElementById('term-list').innerHTML = renderTermList(filtered);
};
function renderTermList(terms) {
  var html = '<div class="term-grid">';
  for (var i = 0; i < terms.length; i++) {
    var t = terms[i];
    html += '<div class="term-item">';
    html += '<div class="term-name">' + NPS.esc(t.name) + ' <span class="term-en">' + NPS.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + NPS.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + NPS.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
NPS.views.myTerms = function() {
  var P = NPS.progress(); var collected = [];
  for (var i = 0; i < NPS.terms.length; i++) if (P.hasTerm(NPS.terms[i].id)) collected.push(NPS.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  NPS.render(html);
};

/* ===== 搜索 ===== */
NPS.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 惯量 / 抽水蓄能 / 容量电价" oninput="NPS.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  NPS.render(html);
};
NPS.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = NPS.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + NPS.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + NPS.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
NPS.views.settings = function() {
  var P = NPS.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="NPS.setTheme(\'dark\')">深色 · 琥珀</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="NPS.setTheme(\'light\')">浅色 · 靛蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="NPS.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="NPS.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="NPS.setFontSize(\'l\')">大</button></div>';

  /* ── GitHub 进度同步(可选) ── */
  var syncCfg = NPS.sync.config();
  html += '<h3>GitHub 进度同步（可选）</h3>';
  html += '<p class="calc-intro">用一个<b>自己的 private 仓库</b>存放进度（如 you/nps-progress），fine-grained PAT 仅授权该仓库的 Contents 读写。token 只存本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/repo" value="' + NPS.esc(syncCfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + NPS.esc(syncCfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + NPS.esc(syncCfg.token || '') + '"></div>';
  html += '<div class="setting-row"><button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-intro" id="syMsg">' + NPS.esc((NPS.sync && NPS.sync.statusText) || '仅本机') + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="NPS.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="NPS.clearData()">清除数据</button></div>';
  html += '</div>';
  NPS.render(html);

  // 同步(可选)
  function syncMsg(text, cls) {
    var el = document.getElementById('syMsg');
    if (!el) return;
    el.textContent = text;
    el.style.color = cls === 'ok' ? 'var(--ok)' : cls === 'bad' ? 'var(--bad, var(--red))' : '';
  }
  var sySaveEl = document.getElementById('sySave');
  if (sySaveEl) {
    sySaveEl.addEventListener('click', function () {
      NPS.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!NPS.sync.ready()) { syncMsg('仓库和 token 都要填。', 'bad'); return; }
      syncMsg('同步中…');
      NPS.sync.pullNow().then(function () { return NPS.sync.pushNow(); })
        .then(function (ok) { syncMsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + NPS.sync.statusText, ok ? 'ok' : 'bad'); });
    });
  }
  var syPullEl = document.getElementById('syPull');
  if (syPullEl) {
    syPullEl.addEventListener('click', function () {
      syncMsg('拉取中…');
      NPS.sync.pullNow().then(function (ok) { syncMsg(ok ? '已拉取并合并远端进度 ✓' : NPS.sync.statusText, ok ? 'ok' : ''); });
    });
  }
  var syClearEl = document.getElementById('syClear');
  if (syClearEl) {
    syClearEl.addEventListener('click', function () {
      NPS.sync.clearToken();
      document.getElementById('syToken').value = '';
      syncMsg('token 已从本机清除。');
    });
  }
};
NPS.setTheme = function(t) { document.documentElement.dataset.theme = t; NPS.progress().setPref('theme', t); NPS.views.settings(); };
NPS.setFontSize = function(s) { document.documentElement.dataset.fs = s; NPS.progress().setPref('fontSize', s); NPS.views.settings(); };
NPS.exportData = function() {
  var data = NPS.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'nps-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
NPS.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('nps.progress.v1');
    window.location.reload();
  }
};
