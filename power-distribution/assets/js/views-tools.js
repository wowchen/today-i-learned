/* 工具视图:五个新型电力系统与储能互动工具 + 术语/搜索/设置/模块 */
window.PDN = window.PDN || {};
PDN.views = PDN.views || {};

PDN._num = function(id) { var el = document.getElementById(id); if (!el) return null; var x = parseFloat(el.value); return isNaN(x) ? null : x; };
PDN._txt = function(id) { var el = document.getElementById(id); return el ? el.value : ''; };
PDN._fix = function(n, d) { if (!isFinite(n)) return '-'; return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
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
  svg += '<text x="40" y="14" font-size="9" fill="var(--acc2)">' + labelA + ' ' + PDN._fix(pctA, 1) + '%</text>';
  svg += '<text x="480" y="14" font-size="9" fill="var(--note)" text-anchor="end">' + labelB + ' ' + PDN._fix(pctB, 1) + '%</text>';
  svg += '<text x="40" y="52" font-size="9" fill="var(--note)">左深色块为测算所得占比,右侧灰色块为剩余部分</text>';
  svg += '</svg>';
  return svg;
}

/* ===== 工具总页 ===== */
PDN.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">配电网的账,光看文字不容易有手感:负荷还要涨多少、变电容量够不够、线损到底高在哪一段、自动化投下去值不值、光伏还能不能再装。这五个小工具全部在本地浏览器实时运算,<b>边读边算,把概念变成手感</b>。结果均为概念性建模演示,用于建立量级直觉,不作为工程设计、投资或合规依据。</p>';

  // 1. 负荷预测与容载比
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◈</span>负荷预测与容载比测算器</h3>';
  html += '<p class="lab-desc">按年均增长率把现状负荷外推到规划年,再按目标容载比反推需要多少变电容量,看现状够不够、还差几台主变。核心结论:容载比定低了容易重载,定高了投资浪费。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>现状最大负荷(MW) <input type="number" id="ld-now" value="80"></label>';
  html += '<label>年均负荷增长率(%) <input type="number" id="ld-grow" value="6" step="0.1"></label>';
  html += '<label>规划年限(年) <input type="number" id="ld-year" value="5"></label>';
  html += '<label>现有变电容量(MVA) <input type="number" id="ld-cap" value="150"></label>';
  html += '<label>目标容载比 <input type="number" id="ld-ratio" value="1.9" step="0.1"></label>';
  html += '<label>单台主变容量(MVA) <input type="number" id="ld-unit" value="50"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PDN.calcLoad()">测算容量</button></div>';
  html += '<div id="ld-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 线损率测算与降损
  html += '<div class="calc-card">';
  html += '<h3><span class="g">≈</span>线损率测算与降损效益</h3>';
  html += '<p class="lab-desc">用供电量与售电量的差算出综合线损率,和常见管理目标作对比,估算把线损压下来一年能省多少电费。线损是配网最直接的效益账,也是最容易看出管理水平的指标。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>年供电量(万kWh) <input type="number" id="ls-sup" value="10000"></label>';
  html += '<label>年售电量(万kWh) <input type="number" id="ls-sold" value="9400"></label>';
  html += '<label>中压线路总长(km) <input type="number" id="ls-len" value="200"></label>';
  html += '<label>配变总台数(台) <input type="number" id="ls-tr" value="300"></label>';
  html += '<label>综合电价(元/kWh) <input type="number" id="ls-price" value="0.62" step="0.01"></label>';
  html += '<label>线损管理目标(%) <input type="number" id="ls-target" value="5" step="0.1"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PDN.calcLoss()">测算线损</button></div>';
  html += '<div id="ls-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 自动化覆盖与效益
  html += '<div class="calc-card">';
  html += '<h3><span class="g">▣</span>配电自动化覆盖与效益评估器</h3>';
  html += '<p class="lab-desc">给定线路规模与故障特征,看当前自动化覆盖率、每年能少停多少电、可靠性指标改善多少,以及把剩余线路铺完还要投多少。核心结论:自动化的价值主要在可靠性和人工成本,不在账面电费。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>中压线路总数(条) <input type="number" id="da-total" value="120"></label>';
  html += '<label>已实现自动化线路(条) <input type="number" id="da-done" value="72"></label>';
  html += '<label>线路年均故障率(次/条·年) <input type="number" id="da-fault" value="1.2" step="0.1"></label>';
  html += '<label>自动化前故障处理时长(h) <input type="number" id="da-t1" value="2.5" step="0.1"></label>';
  html += '<label>自动化后故障处理时长(h) <input type="number" id="da-t2" value="0.4" step="0.1"></label>';
  html += '<label>单次故障平均停电户数 <input type="number" id="da-users" value="800"></label>';
  html += '<label>供电总户数(户) <input type="number" id="da-all" value="200000"></label>';
  html += '<label>自动化单位投资(万元/条) <input type="number" id="da-unit" value="45"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PDN.calcDa()">评估效益</button></div>';
  html += '<div id="da-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 配网故障处置推演
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊗</span>配网故障处置推演器</h3>';
  html += '<p class="lab-desc">同一条线路、同一个故障点,装不装自动化、用哪种模式,结果差很远。指定分段开关数量与故障位置,看隔离范围、停电比例与恢复时间怎么变。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>线路总长(km) <input type="number" id="ft-len" value="8" step="0.1"></label>';
  html += '<label>分段开关数量(台) <input type="number" id="ft-sw" value="3"></label>';
  html += '<label>联络开关 <select id="ft-tie"><option value="yes">有(可转供)</option><option value="no">无(单辐射)</option></select></label>';
  html += '<label>自动化模式 <select id="ft-mode"><option value="none">无自动化(人工处置)</option><option value="local">就地型</option><option value="central">集中型</option><option value="dist">智能分布式</option></select></label>';
  html += '<label>故障点位置(距首端 %) <input type="number" id="ft-pos" value="60"></label>';
  html += '<label>故障段修复耗时(h) <input type="number" id="ft-fix" value="3" step="0.5"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PDN.calcFault()">推演处置</button></div>';
  html += '<div id="ft-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 分布式光伏承载力
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◐</span>分布式光伏接入承载力评估器</h3>';
  html += '<p class="lab-desc">屋顶光伏装到一定程度,中午就会往上倒送电,把并网点电压顶高。给出配变容量、负荷水平与光伏规模,评估反向潮流与越限风险,并给出还能不能再装。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>配变容量(kVA) <input type="number" id="pv-cap" value="400"></label>';
  html += '<label>台区最大负荷(kW) <input type="number" id="pv-load" value="200"></label>';
  html += '<label>已有光伏(kW) <input type="number" id="pv-exist" value="120"></label>';
  html += '<label>拟新增光伏(kW) <input type="number" id="pv-new" value="150"></label>';
  html += '<label>午间最小负荷占最大负荷(%) <input type="number" id="pv-min" value="30"></label>';
  html += '<label>光伏同时出力系数(%) <input type="number" id="pv-coef" value="85"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="PDN.calcPv()">评估承载力</button></div>';
  html += '<div id="pv-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上模型均为教学用的简化建模,参数取自行业常见量级概数。真实工程必须依据本地负荷实测曲线、配变与线路参数、接入系统方案与现行标准单独计算,本工具结果不作为工程设计、投资或安全判定依据。</p>';
  html += '</div>';
  PDN.render(html);
  if (typeof setTimeout === 'function') {
    setTimeout(function() { PDN.calcLoad(); PDN.calcLoss(); PDN.calcDa(); PDN.calcFault(); PDN.calcPv(); }, 0);
  }
};

/* ---- 1. 负荷预测与容载比 ---- */
PDN.calcLoad = function() {
  var now = PDN._num('ld-now'), grow = PDN._num('ld-grow'), year = PDN._num('ld-year');
  var cap = PDN._num('ld-cap'), ratio = PDN._num('ld-ratio'), unit = PDN._num('ld-unit');
  var el = document.getElementById('ld-result');
  if (!el) return;
  if (now === null || grow === null || year === null || cap === null || ratio === null || unit === null) {
    el.innerHTML = '<p class="calc-note">请把六个参数都填完整。</p>'; return;
  }

  var fut = now * Math.pow(1 + grow / 100, year);
  var need = fut * ratio;
  var nowRatio = now > 0 ? cap / now : 0;
  var futRatio = fut > 0 ? cap / fut : 0;
  var gap = need - cap;
  var units = (gap > 0 && unit > 0) ? Math.ceil(gap / unit) : 0;
  var afterCap = cap + units * unit;
  var afterRatio = fut > 0 ? afterCap / fut : 0;

  var lvl, lvlCls, advice;
  if (futRatio >= ratio) {
    lvl = '容量充足'; lvlCls = 'cr-good';
    advice = '现有变电容量已经能覆盖规划年负荷,规划期内不必新增主变,可以把投资留到负荷真正上来之后,避免设备长期轻载。';
  } else if (futRatio >= 1.5) {
    lvl = '基本够用'; lvlCls = 'cr-warn';
    advice = '规划年容载比会低于目标值,但还不至于失稳。建议安排 ' + units + ' 台主变增容,过渡期优先用负荷转供和需求侧管理来缓解重载。';
  } else {
    lvl = '容量不足'; lvlCls = 'cr-bad';
    advice = '规划年将明显缺容量,至少需要新增 ' + units + ' 台主变。在增容落地前,必须评估重载与 N-1 风险,并准备错峰与转供预案。';
  }

  var rows = '';
  rows += crRow('规划年最大负荷', PDN._fix(fut, 1) + ' MW', '现状 × (1 + 增长率) ^ 年限');
  rows += crRow('目标变电容量', PDN._fix(need, 1) + ' MVA', '规划年负荷 × 目标容载比');
  rows += crRow('现状容载比', PDN._fix(nowRatio, 2), '现有容量 ÷ 现状负荷');
  rows += crRow('规划年容载比(不新增)', PDN._fix(futRatio, 2), '现有容量 ÷ 规划年负荷', lvlCls);
  rows += crRow('容量缺口', gap > 0 ? PDN._fix(gap, 1) + ' MVA' : '无缺口', '目标容量 − 现有容量');
  rows += crRow('建议新增主变', units + ' 台', '缺口 ÷ 单台容量,向上取整');
  rows += crRow('扩容后容载比', PDN._fix(afterRatio, 2), '扩容后容量 ÷ 规划年负荷');
  rows += crRow('容量评估结论', lvl, '按规划年容载比分档', lvlCls);

  el.innerHTML = '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:负荷预测的不确定性很大,一个大型工业用户落地就能把曲线抬起来。实际规划通常要做高、中、低三套方案,并按地块做空间负荷预测,而不是简单按增长率外推。</p>';
};

/* ---- 2. 线损率测算与降损效益 ---- */
PDN.calcLoss = function() {
  var sup = PDN._num('ls-sup'), sold = PDN._num('ls-sold'), len = PDN._num('ls-len');
  var tr = PDN._num('ls-tr'), price = PDN._num('ls-price'), target = PDN._num('ls-target');
  var el = document.getElementById('ls-result');
  if (!el) return;
  if (sup === null || sold === null || sup <= 0) {
    el.innerHTML = '<p class="calc-note">请填写有效的供电量与售电量。</p>'; return;
  }

  var lossRate = (sup - sold) / sup * 100;
  var lossEnergy = sup - sold;
  var overRate = Math.max(0, lossRate - (target || 0));
  var overEnergy = overRate / 100 * sup;
  var saveMoney = overEnergy * (price || 0) / 100;
  var perKm = len > 0 ? lossEnergy / len : 0;
  var perTr = tr > 0 ? lossEnergy * 10000 / tr : 0;

  var lvl, lvlCls, advice;
  if (lossRate <= target) {
    lvl = '优于目标'; lvlCls = 'cr-good';
    advice = '综合线损率已经低于管理目标,说明网架结构、计量与管理基本到位。下一步可以把注意力放到分线路、分台区的线损异常排查上,守住不反弹。';
  } else if (lossRate <= target + 2) {
    lvl = '略高于目标'; lvlCls = 'cr-warn';
    advice = '线损率略高于目标,通常来自低压侧老化线路、三相不平衡与计量管理漏洞。建议先做分台区线损对比,把明显偏高的台区挑出来逐一排查,成本低、见效快。';
  } else {
    lvl = '明显偏高'; lvlCls = 'cr-bad';
    advice = '线损率明显偏高,技术线损与管理线损可能同时存在问题。建议按分线、分台区、分压三级线损同步开展,先查计量装置与抄表质量,再评估线路老化与无功不足。';
  }

  var rows = '';
  rows += crRow('综合线损率', PDN._fix(lossRate, 2) + '%', '(供电量 − 售电量) ÷ 供电量', lvlCls);
  rows += crRow('线损电量', PDN._fix(lossEnergy, 1) + ' 万kWh', '供电量 − 售电量');
  rows += crRow('线损水平判读', lvl, '与线损管理目标对比', lvlCls);
  rows += crRow('高于目标的百分点', PDN._fix(overRate, 2) + ' pts', '综合线损率 − 管理目标');
  rows += crRow('可压降电量(至目标)', PDN._fix(overEnergy, 1) + ' 万kWh', '超出比例 × 供电量');
  rows += crRow('年降损电费效益', PDN._fix(saveMoney, 1) + ' 万元', '可压降电量 × 综合电价');
  rows += crRow('单位线路长度线损', PDN._fix(perKm, 2) + ' 万kWh/km', '线损电量 ÷ 线路总长');
  rows += crRow('单台配变线损', PDN._fix(perTr, 0) + ' kWh/台', '线损电量 ÷ 配变台数');

  el.innerHTML = barMeter(Math.max(0, Math.min(100, lossRate * 10)), '线损率(放大 10 倍示意)', Math.max(0, 100 - lossRate * 10), '其余供电量') +
    '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:线损率不是越低越好——计量口径、无损电量、相邻供电区互带都会影响账面数字。比较线损要先保证口径一致,再看趋势,不要只盯着单月数值。</p>';
};

/* ---- 3. 配电自动化覆盖与效益 ---- */
PDN.calcDa = function() {
  var total = PDN._num('da-total'), done = PDN._num('da-done'), fault = PDN._num('da-fault');
  var t1 = PDN._num('da-t1'), t2 = PDN._num('da-t2'), users = PDN._num('da-users');
  var all = PDN._num('da-all'), unit = PDN._num('da-unit');
  var el = document.getElementById('da-result');
  if (!el) return;
  if (total === null || done === null || total <= 0) {
    el.innerHTML = '<p class="calc-note">请填写线路总数与已覆盖线路数。</p>'; return;
  }

  var cover = done / total * 100;
  var fDone = done * (fault || 0);
  var saveH = fDone * Math.max(0, (t1 || 0) - (t2 || 0));
  var saveU = saveH * (users || 0);
  var saidi = all > 0 ? saveU / all : 0;
  var money = saveU * 2 / 10000;
  var rest = Math.max(0, total - done);
  var restInv = rest * (unit || 0);
  var doneInv = done * (unit || 0);
  var perUnit = done > 0 ? doneInv / saveH : 0;

  var lvl, lvlCls, advice;
  if (cover >= 90) {
    lvl = '高水平'; lvlCls = 'cr-good';
    advice = '自动化覆盖已经很高,收益重心应从继续铺设备转向实用化:把遥控使用率、图模准确率与故障处置正确率提上去,并减少误动。';
  } else if (cover >= 60) {
    lvl = '中等水平'; lvlCls = 'cr-warn';
    advice = '覆盖过半,剩下的通常是地形复杂、效益偏低的线路。建议按故障频次排序,优先覆盖故障高发线路与重要用户供电线路,而不是平均用力。';
  } else {
    lvl = '覆盖偏低'; lvlCls = 'cr-bad';
    advice = '覆盖偏低,故障处置仍主要靠人工。建议先把故障频次最高的骨干线路和具备转供条件的线路纳入自动化,以最短时间拿到可靠性改善。';
  }

  var rows = '';
  rows += crRow('自动化覆盖率', PDN._fix(cover, 1) + '%', '已覆盖线路 ÷ 线路总数', lvlCls);
  rows += crRow('覆盖水平判读', lvl, '按覆盖率分档', lvlCls);
  rows += crRow('已覆盖线路年故障次数', PDN._fix(fDone, 1) + ' 次', '已覆盖线路数 × 故障率');
  rows += crRow('每次故障节约时长', PDN._fix(Math.max(0, (t1 || 0) - (t2 || 0)), 2) + ' h', '自动化前 − 自动化后');
  rows += crRow('年减少停电时长', PDN._fix(saveH, 1) + ' 小时', '故障次数 × 每次节约时长');
  rows += crRow('年减少停电户时', PDN._fix(saveU, 0) + ' 户·小时', '减少时长 × 平均停电户数');
  rows += crRow('户均停电时间改善', PDN._fix(saidi, 2) + ' h/户·年', '减少户时 ÷ 供电总户数');
  rows += crRow('年减少停电损失(估)', PDN._fix(money, 1) + ' 万元', '户时 × 2 元/户·小时');
  rows += crRow('已投自动化投资(估)', PDN._fix(doneInv, 0) + ' 万元', '已覆盖线路数 × 单位投资');
  rows += crRow('剩余线路投资需求', PDN._fix(restInv, 0) + ' 万元', '未覆盖线路数 × 单位投资');

  el.innerHTML = barMeter(cover, '已实现自动化', 100 - cover, '尚未覆盖') +
    '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:自动化的价值不能只算减少的电费损失,还要算人工巡检与抢修的工时节约、故障定位时间缩短带来的用户满意度提升,以及为分布式电源接入预留的可观测可调控能力。这些往往比电费更大。</p>';
};

/* ---- 4. 配网故障处置推演 ---- */
PDN.calcFault = function() {
  var len = PDN._num('ft-len'), sw = PDN._num('ft-sw'), pos = PDN._num('ft-pos');
  var fix = PDN._num('ft-fix');
  var tie = PDN._txt('ft-tie'), mode = PDN._txt('ft-mode');
  var el = document.getElementById('ft-result');
  if (!el) return;
  if (len === null || sw === null || pos === null) {
    el.innerHTML = '<p class="calc-note">请填写线路长度、分段开关数量与故障位置。</p>'; return;
  }

  var segs = (sw || 0) + 1;
  var segLen = len / segs;
  var p = Math.max(0, Math.min(100, pos)) / 100;
  var segIdx = Math.min(segs - 1, Math.floor(p * segs));
  var isoLen = segLen;
  var hasTie = tie === 'yes';

  var modeName, isoMin, noteMode;
  if (mode === 'none') { modeName = '无自动化'; isoMin = 150; noteMode = '人工巡线查找故障点,逐个试送'; }
  else if (mode === 'local') { modeName = '就地型'; isoMin = 1; noteMode = '开关就地判据自动分闸,无需主站参与'; }
  else if (mode === 'central') { modeName = '集中型'; isoMin = 3; noteMode = '主站研判后遥控隔离,依赖通信与主站'; }
  else { modeName = '智能分布式'; isoMin = 0.2; noteMode = '终端之间对等通信,毫秒级协同隔离'; }

  var noAuto = (mode === 'none');
  var outageRatio = noAuto ? 100 : (hasTie ? 100 / segs * 0.3 : 100 / segs);
  var restoreMin = noAuto ? 150 : isoMin + (hasTie ? 0 : 150 - isoMin);
  var fullHour = (noAuto ? 2.5 : isoMin / 60) + (fix || 0);

  var lvl, lvlCls, advice;
  if (noAuto) {
    lvl = '处置最慢'; lvlCls = 'cr-bad';
    advice = '无自动化时,故障查找完全依赖人工巡线,全线用户一起等。这种情况下最有效的改进不是加设备,而是先把分段开关补足,缩小一次停电的范围。';
  } else if (!hasTie) {
    lvl = '隔离快但无法转供'; lvlCls = 'cr-warn';
    advice = '自动化把非故障段隔离出来了,但因为单辐射没有联络,非故障段仍然没电。建议同步补联络通道,否则自动化的可靠性收益只能拿到一半。';
  } else {
    lvl = '处置高效'; lvlCls = 'cr-good';
    advice = '故障段被快速隔离,非故障段通过联络转供恢复,只有故障段用户等修复。这正是配电自动化追求的效果:把大范围停电压缩成小范围停电。';
  }

  var rows = '';
  rows += crRow('线路分段数', segs + ' 段', '分段开关数 + 1');
  rows += crRow('平均每段长度', PDN._fix(segLen, 2) + ' km', '线路总长 ÷ 分段数');
  rows += crRow('故障所在区段', '第 ' + (segIdx + 1) + ' 段', '按故障位置百分比定位');
  rows += crRow('停电范围(隔离段)', PDN._fix(isoLen, 2) + ' km', noAuto ? '无自动化时无法分段隔离' : '仅隔离故障所在段');
  rows += crRow('停电用户比例', PDN._fix(outageRatio, 1) + '%', hasTie && !noAuto ? '故障段停电,其余转供' : (noAuto ? '全线停电' : '故障段停电'));
  rows += crRow('自动化模式', modeName, noteMode);
  rows += crRow('隔离耗时', (noAuto ? '约 150 min' : (isoMin < 1 ? '约 ' + isoMin + ' min' : '约 ' + isoMin + ' min')), '模式决定');
  rows += crRow('非故障段恢复耗时', (noAuto || !hasTie) ? '与修复同步' : '隔离后立即转供', hasTie ? '有联络开关可转供' : '无联络,不可转供');
  rows += crRow('全部用户恢复耗时', PDN._fix(fullHour, 2) + ' h', '隔离时间 + 故障段修复时间');
  rows += crRow('处置效果判读', lvl, '按模式与联络条件分档', lvlCls);

  el.innerHTML = barMeter(outageRatio, '停电用户比例', 100 - outageRatio, '未受影响') +
    '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:隔离范围由分段开关的数量与位置决定——开关装得越密,一段越短,但投资与运维成本也越高。实际选址要结合线路长度、用户分布与故障历史来定,不是越多越好。</p>';
};

/* ---- 5. 分布式光伏接入承载力 ---- */
PDN.calcPv = function() {
  var cap = PDN._num('pv-cap'), load = PDN._num('pv-load'), exist = PDN._num('pv-exist');
  var add = PDN._num('pv-new'), minPct = PDN._num('pv-min'), coef = PDN._num('pv-coef');
  var el = document.getElementById('pv-result');
  if (!el) return;
  if (cap === null || load === null || cap <= 0) {
    el.innerHTML = '<p class="calc-note">请填写配变容量与台区最大负荷。</p>'; return;
  }

  var pvTotal = (exist || 0) + (add || 0);
  var capRatio = pvTotal / cap * 100;
  var loadRatio = load > 0 ? pvTotal / load * 100 : 0;
  var minLoad = load * (minPct || 30) / 100;
  var pvOut = pvTotal * (coef || 85) / 100;
  var reverse = Math.max(0, pvOut - minLoad);
  var reverseRatio = reverse / cap * 100;
  var upPct = reverseRatio * 0.12;

  var lvl, lvlCls, advice;
  if (reverseRatio < 30) {
    lvl = '承载力充足'; lvlCls = 'cr-good';
    advice = '反向潮流不大,电压抬升在可控范围。可以继续受理新增接入,但要保留负荷实测数据,并关注午间最小负荷的变化。';
  } else if (reverseRatio < 60) {
    lvl = '接近上限'; lvlCls = 'cr-warn';
    advice = '反向潮流已经比较明显,建议开展接入复核:核对并网点电压、配变分接头位置与三相平衡情况,并考虑把新增光伏分散到不同台区。';
  } else if (reverseRatio < 80) {
    lvl = '需要采取措施'; lvlCls = 'cr-warn';
    advice = '反向潮流偏高,直接接入可能出现电压越限。建议同步配置储能或加装无功补偿装置,也可采用柔性并网控制限制倒送功率。';
  } else {
    lvl = '越限风险高'; lvlCls = 'cr-bad';
    advice = '反向潮流已经很大,继续接入很可能造成并网点电压超上限与配变过载。建议先做配变增容或负荷转移,再分批放行新增接入。';
  }

  var rows = '';
  rows += crRow('光伏总装机(含新增)', PDN._fix(pvTotal, 0) + ' kW', '已有 + 拟新增');
  rows += crRow('光伏 / 配变容量比', PDN._fix(capRatio, 1) + '%', '光伏装机 ÷ 配变容量');
  rows += crRow('光伏 / 最大负荷比', PDN._fix(loadRatio, 1) + '%', '光伏装机 ÷ 台区最大负荷');
  rows += crRow('午间最小负荷', PDN._fix(minLoad, 1) + ' kW', '最大负荷 × 最小负荷占比');
  rows += crRow('光伏午间出力(估)', PDN._fix(pvOut, 1) + ' kW', '装机 × 同时出力系数');
  rows += crRow('最大反向功率', PDN._fix(reverse, 1) + ' kW', '光伏出力 − 午间最小负荷');
  rows += crRow('反向功率占配变容量', PDN._fix(reverseRatio, 1) + '%', '反向功率 ÷ 配变容量', lvlCls);
  rows += crRow('并网点电压抬升(估)', PDN._fix(upPct, 2) + ' %', '概念性估算,仅作量级参考');
  rows += crRow('承载力判读', lvl, '按反向功率占比分档', lvlCls);

  el.innerHTML = barMeter(Math.min(100, reverseRatio), '反向潮流占比', Math.max(0, 100 - Math.min(100, reverseRatio)), '剩余裕度') +
    '<table class="cr-table">' + rows + '</table>' +
    '<p class="calc-note">' + advice + '注意:承载力不是只看容量比,还与馈线长度、导线截面、配变分接头位置和负荷曲线形状密切相关。同样是 60% 的容量比,线路末端和首端的电压表现可能完全不同,所以实际接入必须做潮流与电压校核。</p>';
};

/* ===== 模块页 ===== */
PDN.views.module = function(id) {
  var mod = PDN.modules.find(function(m) { return m.id === id; });
  if (!mod) { PDN.views.home(); return; }
  var P = PDN.progress();
  var lessons = PDN.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + PDN.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + PDN.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = PDN.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + PDN.esc(title) + '</a>';
    else html += '<span class="title">' + PDN.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  PDN.render(html);
};

/* ===== 术语 ===== */
PDN.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>新型电力系统与储能 名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 惯量 / 构网型 / 液流电池 / 峰谷套利" oninput="PDN.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(PDN.terms) + '</div></div>';
  PDN.render(html);
};
PDN.filterTerms = function(q) {
  var filtered = PDN.terms;
  if (q) { q = q.toLowerCase();
    filtered = PDN.terms.filter(function(t) {
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
    html += '<div class="term-name">' + PDN.esc(t.name) + ' <span class="term-en">' + PDN.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + PDN.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + PDN.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
PDN.views.myTerms = function() {
  var P = PDN.progress(); var collected = [];
  for (var i = 0; i < PDN.terms.length; i++) if (P.hasTerm(PDN.terms[i].id)) collected.push(PDN.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  PDN.render(html);
};

/* ===== 搜索 ===== */
PDN.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 惯量 / 抽水蓄能 / 容量电价" oninput="PDN.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  PDN.render(html);
};
PDN.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = PDN.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + PDN.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + PDN.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
PDN.views.settings = function() {
  var P = PDN.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="PDN.setTheme(\'dark\')">深色 · 琥珀</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="PDN.setTheme(\'light\')">浅色 · 靛蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="PDN.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="PDN.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="PDN.setFontSize(\'l\')">大</button></div>';

  /* ── GitHub 进度同步(可选) ── */
  var syncCfg = PDN.sync.config();
  html += '<h3>GitHub 进度同步（可选）</h3>';
  html += '<p class="calc-intro">用一个<b>自己的 private 仓库</b>存放进度（如 you/pdn-progress），fine-grained PAT 仅授权该仓库的 Contents 读写。token 只存本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/repo" value="' + PDN.esc(syncCfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + PDN.esc(syncCfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_…" value="' + PDN.esc(syncCfg.token || '') + '"></div>';
  html += '<div class="setting-row"><button class="setting-btn" id="sySave">保存并立即同步</button>';
  html += '<button class="setting-btn" id="syPull">只拉取一次</button>';
  html += '<button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-intro" id="syMsg">' + PDN.esc((PDN.sync && PDN.sync.statusText) || '仅本机') + '</p>';

  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="PDN.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="PDN.clearData()">清除数据</button></div>';
  html += '</div>';
  PDN.render(html);

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
      PDN.sync.setConfig({
        repo: document.getElementById('syRepo').value,
        branch: document.getElementById('syBranch').value,
        token: document.getElementById('syToken').value
      });
      if (!PDN.sync.ready()) { syncMsg('仓库和 token 都要填。', 'bad'); return; }
      syncMsg('同步中…');
      PDN.sync.pullNow().then(function () { return PDN.sync.pushNow(); })
        .then(function (ok) { syncMsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + PDN.sync.statusText, ok ? 'ok' : 'bad'); });
    });
  }
  var syPullEl = document.getElementById('syPull');
  if (syPullEl) {
    syPullEl.addEventListener('click', function () {
      syncMsg('拉取中…');
      PDN.sync.pullNow().then(function (ok) { syncMsg(ok ? '已拉取并合并远端进度 ✓' : PDN.sync.statusText, ok ? 'ok' : ''); });
    });
  }
  var syClearEl = document.getElementById('syClear');
  if (syClearEl) {
    syClearEl.addEventListener('click', function () {
      PDN.sync.clearToken();
      document.getElementById('syToken').value = '';
      syncMsg('token 已从本机清除。');
    });
  }
};
PDN.setTheme = function(t) { document.documentElement.dataset.theme = t; PDN.progress().setPref('theme', t); PDN.views.settings(); };
PDN.setFontSize = function(s) { document.documentElement.dataset.fs = s; PDN.progress().setPref('fontSize', s); PDN.views.settings(); };
PDN.exportData = function() {
  var data = PDN.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pdn-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
PDN.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('pdn.progress.v1');
    window.location.reload();
  }
};
