/* 工具视图:五个AI+电力互动工具 + 术语/搜索/设置/模块 */
window.AIP = window.AIP || {};
AIP.views = AIP.views || {};

AIP._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
AIP._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };
function crRow(name, val, formula) {
  return '<tr><td class="cr-name">' + name + '</td><td class="cr-val cr-good">' + val + '</td><td class="cr-formula">' + (formula || '') + '</td></tr>';
}

/* ===== 工具总页 ===== */
AIP.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">AI 在电力不是只看曲线,得动手算一算:预测偏差差多少、设备健康度怎么评、算力怎么追着绿电跑。这五个小工具全部在本地浏览器实时运算,<b>边读边算,把概念变成手感</b>。结果均为概念性演示,用于建立直觉。</p>';

  // 1. 负荷预测可视化
  html += '<div class="calc-card">';
  html += '<h3><span class="g">~</span>负荷预测可视化</h3>';
  html += '<p class="lab-desc">负荷预测是调度的基础。选一个场景(工作日/周末/极寒),看 AI 预测曲线和"真实"曲线的偏差——差 1% 对电网意味着什么。可切换预测方法对比精度。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>场景 <select id="lf-scene"><option value="weekday">工作日</option><option value="weekend">周末</option><option value="cold">极寒日</option></select></label>';
  html += '<label>预测方法 <select id="lf-method"><option value="naive">朴素法(昨日复刻)</option><option value="avg">移动平均(近7日)</option><option value="ai">AI 模型(LSTM模拟)</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AIP.calcLoadForecast()">生成预测</button></div>';
  html += '<div id="lf-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 设备健康度评估器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">♥</span>设备健康度评估器</h3>';
  html += '<p class="lab-desc">输入变压器关键参数,AI 从多源数据综合评估健康度。评分 0-100,建议措施从"继续运行"到"立即检修"。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>运行年限 <input type="number" id="eh-year" placeholder="如 12"></label>';
  html += '<label>平均负荷率(%) <input type="number" id="eh-load" placeholder="如 65"></label>';
  html += '<label>油温(°C) <input type="number" id="eh-oil" placeholder="如 75"></label>';
  html += '<label>振动值(mm/s) <input type="number" id="eh-vib" placeholder="如 3.5"></label>';
  html += '<label>历史故障次数 <input type="number" id="eh-fault" placeholder="如 2"></label>';
  html += '<label>油色谱异常 <select id="eh-gas"><option value="0">正常</option><option value="1">轻微</option><option value="2">明显</option><option value="3">严重</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AIP.calcEquipmentHealth()">评估健康度</button></div>';
  html += '<div id="eh-result" class="calc-result"></div>';
  html += '</div>';

  // 3. 功率预测精度对比
  html += '<div class="calc-card">';
  html += '<h3><span class="g">↔</span>功率预测精度对比</h3>';
  html += '<p class="lab-desc">风电/光伏出力预测,不同方法精度差异很大。输入装机容量,看持续法/统计模型/AI 模型的预测误差对比。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>装机容量(MW) <input type="number" id="pf-cap" placeholder="如 100"></label>';
  html += '<label>电站类型 <select id="pf-type"><option value="wind">风电</option><option value="solar">光伏</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AIP.calcPowerForecast()">对比精度</button></div>';
  html += '<div id="pf-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 巡检缺陷识别演示
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◎</span>巡检缺陷识别演示</h3>';
  html += '<p class="lab-desc">无人机巡线拍了照片,AI 用 CV 识别缺陷。选一张图片"识别",看 AI 怎么标注缺陷位置与置信度。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>巡检图片 <select id="cv-img"><option value="insulator">绝缘子串</option><option value="transformer">变压器外观</option><option value="line">输电线路</option><option value="tower">杆塔</option></select></label>';
  html += '<label>识别模式 <select id="cv-mode"><option value="defect">缺陷检测</option><option value="normal">正常状态</option></select></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AIP.calcInspection()">开始识别</button></div>';
  html += '<div id="cv-result" class="calc-result"></div>';
  html += '</div>';

  // 5. 算电协同调度模拟器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⚡</span>算电协同调度模拟器</h3>';
  html += '<p class="lab-desc">某地区 24 小时风光出力曲线,有可调度的算力任务。选择算力调度策略,看绿电利用率、弃风弃光率、碳排放的变化。</p>';
  html += '<div class="calc-inputs">';
  html += '<label>调度策略 <select id="cp-strat"><option value="flat">均匀分配(基线)</option><option value="follow">跟随绿电(AI优化)</option><option value="night">夜间集中(谷电)</option></select></label>';
  html += '<label>算力负荷(MW) <input type="number" id="cp-load" placeholder="如 50"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="AIP.calcComputePower()">模拟调度</button></div>';
  html += '<div id="cp-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为简化模型与概念性演示。负荷曲线、设备评分、预测精度取行业典型概数;算电协同为教学示意,实际调度需考虑时延约束、网络带宽等多重因素。</p>';
  html += '</div>';
  AIP.render(html);
};

/* ---- 1. 负荷预测可视化 ---- */
AIP.calcLoadForecast = function() {
  var scene = document.getElementById('lf-scene').value;
  var method = document.getElementById('lf-method').value;
  var el = document.getElementById('lf-result');
  var actual = [], predicted = [];
  var baseLoad = scene === 'weekday' ? 800 : (scene === 'weekend' ? 600 : 1100);
  for (var h = 0; h < 24; h++) {
    var peak = scene === 'cold' ? 1.3 : 1.0;
    var morningPeak = h >= 7 && h <= 10 ? 1.25 * peak : 1.0;
    var eveningPeak = h >= 18 && h <= 21 ? 1.35 * peak : 1.0;
    var val = baseLoad * morningPeak * eveningPeak + (Math.random() - 0.5) * 40;
    actual.push(Math.round(val));
    var err;
    if (method === 'naive') err = (Math.random() - 0.5) * 80;
    else if (method === 'avg') err = (Math.random() - 0.5) * 40;
    else err = (Math.random() - 0.5) * 15;
    predicted.push(Math.round(val + err));
  }
  var rmse = 0;
  for (var i = 0; i < 24; i++) { var d = predicted[i] - actual[i]; rmse += d * d; }
  rmse = Math.round(Math.sqrt(rmse / 24));
  var maxActual = Math.max.apply(null, actual);
  var scale = 180 / maxActual;
  var svg = '<svg viewBox="0 0 520 220" style="width:100%;background:var(--paper);border:1px solid var(--line)">';
  svg += '<line x1="40" y1="200" x2="500" y2="200" stroke="var(--line-2)" stroke-width=".5"/>';
  svg += '<line x1="40" y1="20" x2="40" y2="200" stroke="var(--line-2)" stroke-width=".5"/>';
  for (var a = 0; a < 24; a += 4) svg += '<text x="' + (40 + a * 19) + '" y="216" font-size="8" fill="var(--note)" text-anchor="middle">' + a + ':00</text>';
  var actPath = '', predPath = '';
  for (var p = 0; p < 24; p++) {
    var x = 40 + p * 19;
    var yA = 200 - actual[p] * scale;
    var yP = 200 - predicted[p] * scale;
    actPath += (p === 0 ? 'M' : 'L') + x + ' ' + yA;
    predPath += (p === 0 ? 'M' : 'L') + x + ' ' + yP;
  }
  svg += '<path d="' + actPath + '" fill="none" stroke="var(--acc2)" stroke-width="1.5"/>';
  svg += '<path d="' + predPath + '" fill="none" stroke="var(--acc)" stroke-width="1.5" stroke-dasharray="4 2"/>';
  svg += '<text x="470" y="30" font-size="8" fill="var(--acc2)">— 实际</text>';
  svg += '<text x="470" y="42" font-size="8" fill="var(--acc)">-- 预测</text>';
  svg += '</svg>';
  var methodLabel = method === 'naive' ? '朴素法' : (method === 'avg' ? '移动平均' : 'AI 模型(LSTM)');
  var rows = '';
  rows += crRow('场景', scene === 'weekday' ? '工作日' : (scene === 'weekend' ? '周末' : '极寒日'), '所选');
  rows += crRow('预测方法', methodLabel, '所选');
  rows += crRow('RMSE', rmse + ' MW', '均方根误差');
  rows += crRow('最大偏差', Math.abs(Math.max.apply(null, predicted.map(function(p, i) { return p - actual[i]; }))) + ' MW', '单点最大');
  var pct = Math.round(rmse / maxActual * 100);
  rows += crRow('相对误差', pct + '%', 'RMSE / 峰值负荷');
  el.innerHTML = svg + '<table class="cr-table">' + rows + '</table><p class="calc-note">朴素法直接用昨日数据,误差大;移动平均平滑了波动但跟不上突变;AI 模型能学到天气/节假日模式,误差最小。实际调度中,RMSE 每降 1% 都意味着少调一台机组或少弃一度绿电。</p>';
};

/* ---- 2. 设备健康度评估器 ---- */
AIP.calcEquipmentHealth = function() {
  var year = AIP._num('eh-year'), load = AIP._num('eh-load'), oil = AIP._num('eh-oil');
  var vib = AIP._num('eh-vib'), fault = AIP._num('eh-fault');
  var gas = parseInt(document.getElementById('eh-gas').value);
  var el = document.getElementById('eh-result');
  if (year === null || load === null || oil === null || vib === null) {
    el.innerHTML = '<div class="calc-warn">请填写运行年限、负荷率、油温、振动值</div>'; return;
  }
  var score = 100;
  score -= Math.max(0, year - 15) * 2;
  score -= Math.max(0, load - 80) * 0.3;
  score -= Math.max(0, oil - 70) * 0.8;
  score -= Math.max(0, vib - 2.8) * 5;
  score -= fault * 4;
  score -= gas * 8;
  score = Math.max(0, Math.min(100, Math.round(score)));
  var action, level;
  if (score >= 80) { action = '继续运行'; level = '健康'; }
  else if (score >= 60) { action = '加强监测'; level = '亚健康'; }
  else if (score >= 40) { action = '计划检修'; level = '退化'; }
  else { action = '立即检修'; level = '危险'; }
  var rows = '';
  rows += crRow('运行年限', year + ' 年', '设计寿命 ~30 年');
  rows += crRow('平均负荷率', load + '%', '正常 40-80%');
  rows += crRow('油温', oil + ' °C', '警戒 85°C');
  rows += crRow('振动值', vib + ' mm/s', '警戒 4.5 mm/s');
  rows += crRow('历史故障', fault + ' 次', '累计');
  rows += crRow('油色谱', ['正常','轻微','明显','严重'][gas], '产气速率');
  rows += crRow('健康度评分', score + ' / 100', '多源融合评分');
  rows += crRow('健康等级', level, 'AI 评估');
  rows += crRow('建议措施', action, '运维决策');
  var bar = '<div style="width:100%;height:24px;background:var(--bg);border:1px solid var(--line);margin:8px 0"><div style="width:' + score + '%;height:100%;background:' + (score >= 80 ? 'var(--ok)' : (score >= 60 ? 'var(--acc)' : (score >= 40 ? '#e07020' : '#cc3333'))) + ';transition:width .5s"></div></div>';
  el.innerHTML = bar + '<table class="cr-table">' + rows + '</table><p class="calc-note">这不是神秘黑箱:每个参数扣多少分有规则依据。实际系统会更复杂——融合振动频谱、油色谱全组分、局部放电、温度趋势等多维数据,用机器学习模型给出综合评分。关键是把"定期检修"升级为"该修才修"的状态检修(CBM)。</p>';
};

/* ---- 3. 功率预测精度对比 ---- */
AIP.calcPowerForecast = function() {
  var cap = AIP._num('pf-cap');
  var type = document.getElementById('pf-type').value;
  var el = document.getElementById('pf-result');
  if (cap === null) { el.innerHTML = '<div class="calc-warn">请填写装机容量</div>'; return; }
  if (cap <= 0) { el.innerHTML = '<div class="calc-warn">容量应为正数</div>'; return; }
  var baseErr = type === 'wind' ? 15 : 12;
  var methods = [
    { name: '持续法', rmsePct: baseErr * 1.8, desc: '用当前出力直接外推' },
    { name: '统计模型(ARIMA)', rmsePct: baseErr * 1.2, desc: '时间序列回归' },
    { name: 'NWP+ML 混合', rmsePct: baseErr * 0.8, desc: '气象预报+机器学习' },
    { name: 'AI 深度学习(LSTM)', rmsePct: baseErr * 0.55, desc: '端到端学习时空特征' }
  ];
  var rows = '';
  for (var i = 0; i < methods.length; i++) {
    var rmseMW = Math.round(cap * methods[i].rmsePct / 100);
    rows += crRow(methods[i].name, rmseMW + ' MW (' + methods[i].rmsePct.toFixed(1) + '%)', methods[i].desc);
  }
  var improvement = Math.round((1 - methods[3].rmsePct / methods[0].rmsePct) * 100);
  el.innerHTML = '<table class="cr-table">' + rows + '</table><p class="calc-note">' + (type === 'wind' ? '风电' : '光伏') + '出力受气象影响大,持续法误差最高。AI 深度学习通过学习 NWP 气象数据、历史出力曲线、地形特征等多维输入,比持续法精度提升约 ' + improvement + '%。实际考核中,光伏预测通常比风电略好(白天规律性强)。精度每提升 1%,电网可少安排 ' + Math.round(cap * 0.01) + ' MW 备用容量。</p>';
};

/* ---- 4. 巡检缺陷识别演示 ---- */
AIP.calcInspection = function() {
  var img = document.getElementById('cv-img').value;
  var mode = document.getElementById('cv-mode').value;
  var el = document.getElementById('cv-result');
  var images = {
    insulator: { name: '绝缘子串', defects: ['自爆片(缺失)', '表面污秽', '钢帽锈蚀'] },
    transformer: { name: '变压器外观', defects: ['渗油', '硅胶变色', '散热器异温'] },
    line: { name: '输电线路', defects: ['断股', '覆冰', '树障接近'] },
    tower: { name: '杆塔', defects: ['螺栓松动', '锈蚀', '鸟巢'] }
  };
  var info = images[img];
  if (mode === 'normal') {
    el.innerHTML = '<div style="padding:20px;border:1px solid var(--line);background:var(--paper);text-align:center"><p style="font-size:1.1rem;color:var(--ok)">✓ 未检出缺陷</p><p class="calc-note">' + info.name + ' · AI 置信度 96.3% · 判定为正常状态</p></div><p class="calc-note">AI 用目标检测模型(如 YOLO)扫描图像,逐区域分析是否有异常。正常状态也要留档,用于对比和趋势分析。</p>';
    return;
  }
  var defectIdx = Math.floor(Math.random() * info.defects.length);
  var confidence = (85 + Math.random() * 12).toFixed(1);
  var x = 20 + Math.random() * 60, y = 20 + Math.random() * 50;
  var svg = '<svg viewBox="0 0 200 120" style="width:100%;max-width:400px;background:var(--paper);border:1px solid var(--line);display:block;margin:0 auto">';
  svg += '<rect x="10" y="10" width="180" height="100" fill="var(--bg)" stroke="var(--line)"/>';
  svg += '<text x="100" y="60" font-size="10" fill="var(--note)" text-anchor="middle">' + info.name + ' · 模拟图像</text>';
  svg += '<rect x="' + x + '" y="' + y + '" width="40" height="30" fill="none" stroke="var(--acc)" stroke-width="1.5" stroke-dasharray="3 2"/>';
  svg += '<text x="' + (x + 44) + '" y="' + (y + 12) + '" font-size="7" fill="var(--acc)">' + info.defects[defectIdx] + '</text>';
  svg += '<text x="' + (x + 44) + '" y="' + (y + 22) + '" font-size="6" fill="var(--note)">置信度 ' + confidence + '%</text>';
  svg += '</svg>';
  var rows = '';
  rows += crRow('巡检对象', info.name, '无人机拍摄');
  rows += crRow('检出缺陷', info.defects[defectIdx], 'AI 目标检测');
  rows += crRow('置信度', confidence + '%', '模型输出概率');
  rows += crRow('严重等级', confidence > 92 ? '中' : '低', '需人工复核');
  rows += crRow('建议', '自动录入缺陷库 · 派工复核', '闭环流程');
  el.innerHTML = svg + '<table class="cr-table">' + rows + '</table><p class="calc-note">实际系统中,AI 会在一张照片上框选多个区域,每个区域标注缺陷类型和置信度。置信度低的标记为"待复核",由人工确认;置信度高的直接录入缺陷库派工处理。这就是"无人机自动巡线+CV缺陷识别"替代人工翻山越岭的核心逻辑。</p>';
};

/* ---- 5. 算电协同调度模拟器 ---- */
AIP.calcComputePower = function() {
  var strat = document.getElementById('cp-strat').value;
  var load = AIP._num('cp-load');
  var el = document.getElementById('cp-result');
  if (load === null) { el.innerHTML = '<div class="calc-warn">请填写算力负荷</div>'; return; }
  if (load <= 0) { el.innerHTML = '<div class="calc-warn">负荷应为正数</div>'; return; }
  var wind = [], solar = [], compute = [];
  for (var h = 0; h < 24; h++) {
    var w = Math.max(0, 40 + 30 * Math.sin((h - 3) * 0.35) + (Math.random() - 0.5) * 15);
    var s = h >= 6 && h <= 18 ? Math.max(0, 60 * Math.sin((h - 6) * 0.26) + (Math.random() - 0.5) * 10) : 0;
    wind.push(Math.round(w));
    solar.push(Math.round(s));
    var c;
    if (strat === 'flat') c = load;
    else if (strat === 'follow') c = load * (0.5 + 0.5 * (w + s) / 80);
    else c = h >= 22 || h <= 6 ? load * 1.5 : load * 0.5;
    compute.push(Math.round(c));
  }
  var greenUsed = 0, greenTotal = 0, computeTotal = 0;
  for (var i = 0; i < 24; i++) {
    var green = wind[i] + solar[i];
    greenTotal += green;
    var used = Math.min(green, compute[i]);
    greenUsed += used;
    computeTotal += compute[i];
  }
  var greenRate = Math.round(greenUsed / greenTotal * 100);
  var curtailRate = 100 - greenRate;
  var carbonPerMW = 0.8;
  var greenPower = computeTotal - greenUsed;
  var carbon = Math.round(Math.max(0, greenPower) * carbonPerMW);
  var cost = 0;
  for (var j = 0; j < 24; j++) {
    var price = (j >= 8 && j <= 22) ? 0.7 : 0.3;
    cost += compute[j] * price;
  }
  cost = Math.round(cost);
  var maxVal = Math.max(Math.max.apply(null, wind), Math.max.apply(null, solar), Math.max.apply(null, compute), load * 1.5);
  var scale = 160 / maxVal;
  var svg = '<svg viewBox="0 0 520 220" style="width:100%;background:var(--paper);border:1px solid var(--line)">';
  svg += '<line x1="40" y1="190" x2="500" y2="190" stroke="var(--line-2)" stroke-width=".5"/>';
  for (var a = 0; a < 24; a += 4) svg += '<text x="' + (40 + a * 19) + '" y="206" font-size="8" fill="var(--note)" text-anchor="middle">' + a + ':00</text>';
  var windPath = '', solarPath = '', computePath = '';
  for (var p = 0; p < 24; p++) {
    var x = 40 + p * 19;
    windPath += (p === 0 ? 'M' : 'L') + x + ' ' + (190 - wind[p] * scale);
    solarPath += (p === 0 ? 'M' : 'L') + x + ' ' + (190 - solar[p] * scale);
    computePath += (p === 0 ? 'M' : 'L') + x + ' ' + (190 - compute[p] * scale);
  }
  svg += '<path d="' + windPath + '" fill="none" stroke="var(--acc2)" stroke-width="1.5"/>';
  svg += '<path d="' + solarPath + '" fill="none" stroke="#e0a020" stroke-width="1.5"/>';
  svg += '<path d="' + computePath + '" fill="none" stroke="var(--acc)" stroke-width="1.5" stroke-dasharray="4 2"/>';
  svg += '<text x="460" y="24" font-size="7" fill="var(--acc2)">— 风电</text>';
  svg += '<text x="460" y="36" font-size="7" fill="#e0a020">— 光伏</text>';
  svg += '<text x="460" y="48" font-size="7" fill="var(--acc)">-- 算力</text>';
  svg += '</svg>';
  var stratLabel = strat === 'flat' ? '均匀分配(基线)' : (strat === 'follow' ? '跟随绿电(AI优化)' : '夜间集中(谷电)');
  var rows = '';
  rows += crRow('调度策略', stratLabel, '所选');
  rows += crRow('算力总负荷', computeTotal + ' MWh', '24小时累计');
  rows += crRow('绿电利用率', greenRate + '%', '算力用绿电占比');
  rows += crRow('弃风弃光率', curtailRate + '%', '绿电未被消纳');
  rows += crRow('碳排放', carbon + ' kg CO₂', '非绿电部分 × 0.8');
  rows += crRow('电费成本', cost + ' 元', '峰谷电价加权');
  el.innerHTML = svg + '<table class="cr-table">' + rows + '</table><p class="calc-note">"跟随绿电"策略让算力负荷在风光充足时段加大、在低谷时段降低,绿电利用率最高、弃风弃光最少。实际还需考虑:训练任务的时延约束(能否等)、跨省网络带宽、数据中心散热能力、电力市场结算规则等。"算力追着绿电跑"是算电协同的核心理念。</p>';
};

/* ===== 模块页 ===== */
AIP.views.module = function(id) {
  var mod = AIP.modules.find(function(m) { return m.id === id; });
  if (!mod) { AIP.views.home(); return; }
  var P = AIP.progress();
  var lessons = AIP.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + AIP.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + AIP.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = AIP.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + AIP.esc(title) + '</a>';
    else html += '<span class="title">' + AIP.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  AIP.render(html);
};

/* ===== 术语 ===== */
AIP.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>AI+电力 名词速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 功率预测 / SCADA / 算电协同" oninput="AIP.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(AIP.terms) + '</div></div>';
  AIP.render(html);
};
AIP.filterTerms = function(q) {
  var filtered = AIP.terms;
  if (q) { q = q.toLowerCase();
    filtered = AIP.terms.filter(function(t) {
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
    html += '<div class="term-name">' + AIP.esc(t.name) + ' <span class="term-en">' + AIP.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + AIP.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + AIP.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
AIP.views.myTerms = function() {
  var P = AIP.progress(); var collected = [];
  for (var i = 0; i < AIP.terms.length; i++) if (P.hasTerm(AIP.terms[i].id)) collected.push(AIP.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  AIP.render(html);
};

/* ===== 搜索 ===== */
AIP.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 功率预测 / 巡检 / 算电协同" oninput="AIP.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  AIP.render(html);
};
AIP.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = AIP.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + AIP.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + AIP.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
AIP.views.settings = function() {
  var P = AIP.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="AIP.setTheme(\'dark\')">深色 · 琥珀</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="AIP.setTheme(\'light\')">浅色 · 靛蓝</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="AIP.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="AIP.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="AIP.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="AIP.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="AIP.clearData()">清除数据</button></div>';
  // 云端同步(可选)
  var sc = AIP.sync.getCfg();
  html += '<div class="setting-row sync-row"><label>云端同步</label>';
  html += '<div class="sync-box">';
  html += '<span id="sync-status" class="sync-badge" data-state="off">未同步</span>';
  html += '<input id="sync-repo" class="sync-input" type="text" placeholder="仓库名,如 you/grid-progress" value="' + escAttr(sc.repo || '') + '">';
  html += '<input id="sync-token" class="sync-input" type="password" placeholder="Fine-grained PAT(仅存本机,不上传代码)" autocomplete="off">';
  html += '<div class="sync-actions">';
  html += '<button class="setting-btn" onclick="AIP.saveSync()">保存并同步</button>';
  html += '<button class="setting-btn" onclick="AIP.testSync()">立即同步</button>';
  html += '<button class="setting-btn danger" onclick="AIP.disconnectSync()">断开</button>';
  html += '</div>';
  html += '<p class="sync-note">进度仅备份到你自己的私有仓库(文件 progress/aip.json)。Token 只存在本机浏览器,不会写入站点代码。未配置则进度仅存本机,不影响学习。</p>';
  html += '</div></div>';
  html += '</div>';
  AIP.render(html);
  if (AIP.sync && AIP.sync.setStatusEl) AIP.sync.setStatusEl(document.getElementById('sync-status'));
};
function escAttr(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
AIP.saveSync = function () {
  var repo = document.getElementById('sync-repo').value;
  var token = document.getElementById('sync-token').value;
  if (!repo || !repo.trim()) { alert('请填写仓库名,例如 you/grid-progress'); return; }
  var cur = AIP.sync.getCfg();
  if ((!token || !token.trim()) && !cur.token) { alert('请填写 Token(从 GitHub 生成的 fine-grained PAT)'); return; }
  AIP.sync.saveCfg(repo, token);
  AIP.sync.push().then(function (ok) {
    if (ok) AIP.views.settings();
    else alert('同步失败:请检查仓库名是否准确、PAT 是否对该仓库有 Contents 读写权限、以及网络是否可访问 api.github.com。');
  });
};
AIP.testSync = function () { AIP.sync.push(); };
AIP.disconnectSync = function () {
  if (confirm('断开云端同步?本机进度会保留,之后不再自动备份到仓库。')) {
    AIP.sync.clearCfg();
    AIP.views.settings();
  }
};
AIP.setTheme = function(t) { document.documentElement.dataset.theme = t; AIP.progress().setPref('theme', t); AIP.views.settings(); };
AIP.setFontSize = function(s) { document.documentElement.dataset.fs = s; AIP.progress().setPref('fontSize', s); AIP.views.settings(); };
AIP.exportData = function() {
  var data = AIP.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'aip-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
AIP.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('aip.progress.v1');
    window.location.reload();
  }
};
