/* 工具视图:四件机器学习互动工具(线性回归拟合器 / 阈值与混淆矩阵 / K 均值聚类 / 过拟合演示)
   + 模块 / 术语 / 搜索 / 设置 视图。全部本地浏览器运算,无外部依赖。 */
window.ML = window.ML || {};
ML.views = ML.views || {};

ML._num = function(id) { var x = parseFloat(document.getElementById(id).value); return isNaN(x) ? null : x; };
ML._fix = function(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); };

/* ===== 工具总页 ===== */
ML.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动工具箱</h2>';
  html += '<p class="calc-intro">机器学习里那几个最核心的直觉——"损失怎么算""阈值一挪代价就换人""聚类是怎么迭代出来的""模型为什么会背答案"——用看的比用背的牢。这四个工具全部在本地浏览器运行，<b>拖一拖滑块，把概念变成手感</b>。</p>';

  // 1. 线性回归拟合器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⌒</span>线性回归拟合器</h3>';
  html += '<p class="lab-desc">拖动两个滑块，亲手决定这条直线的斜率和截距。看误差平方和（SSE）怎么变——训练模型干的事，就是把它压到最小。</p>';
  html += '<div id="lf-canvas" class="tool-canvas"></div>';
  html += '<div class="calc-inputs">';
  html += '<label>斜率 k <input type="range" id="lf-k" min="-1" max="2.4" step="0.05" value="0.2" oninput="ML.fitDraw()"></label>';
  html += '<label>截距 b <input type="range" id="lf-b" min="-3" max="6" step="0.1" value="1" oninput="ML.fitDraw()"></label>';
  html += '</div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="ML.fitBest()">跳到最小二乘最优解</button><button class="calc-btn" onclick="ML.fitReset()">复位</button></div>';
  html += '<div id="lf-result" class="calc-result"></div>';
  html += '</div>';

  // 2. 阈值与混淆矩阵
  html += '<div class="calc-card">';
  html += '<h3><span class="g">⊞</span>阈值与混淆矩阵</h3>';
  html += '<p class="lab-desc">同一批样本、同一个模型分数，只挪一下判定阈值，精确率与召回率就会此消彼长。拖动阈值，看混淆矩阵四格和指标怎么变。</p>';
  html += '<div id="cm-canvas" class="tool-canvas"></div>';
  html += '<div class="calc-inputs">';
  html += '<label>判定阈值 <input type="range" id="cm-thr" min="0.05" max="0.95" step="0.01" value="0.5" oninput="ML.cmDraw()"></label>';
  html += '</div>';
  html += '<div id="cm-result" class="calc-result"></div>';
  html += '</div>';

  // 3. K 均值聚类
  html += '<div class="calc-card">';
  html += '<h3><span class="g">◉</span>K 均值聚类演示器</h3>';
  html += '<p class="lab-desc">三簇数据、三个初始中心。点一次"迭代一步"看它怎么"就近归队、重算中心"，重复几轮就会稳定下来——聚类没有标准答案，只有一个会收敛的过程。</p>';
  html += '<div id="km-canvas" class="tool-canvas"></div>';
  html += '<div class="calc-row"><button class="calc-btn" onclick="ML.kmStep()">迭代一步</button><button class="calc-btn" onclick="ML.kmRun()">一直跑到收敛</button><button class="calc-btn" onclick="ML.kmReset()">重置初值</button></div>';
  html += '<div id="km-result" class="calc-result"></div>';
  html += '</div>';

  // 4. 过拟合演示器
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∿</span>过拟合演示器</h3>';
  html += '<p class="lab-desc">同一批训练点，用一个可调"弯曲程度"的模型去拟合。次数调大，训练误差一路下降，但验证误差会先降后升——那个拐点就是"背答案"的开始。</p>';
  html += '<div id="of-canvas" class="tool-canvas"></div>';
  html += '<div class="calc-inputs">';
  html += '<label>模型弯曲程度（多项式次数） <input type="range" id="of-deg" min="1" max="9" step="1" value="1" oninput="ML.ofDraw()"></label>';
  html += '</div>';
  html += '<div id="of-result" class="calc-result"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明：四件工具的数据均为教学演示（样本固定、可复现），机制真实、数字虚构。工具输出仅用于理解概念，不作为业务决策或建模依据。</p>';
  html += '</div>';
  ML.render(html);

  ML.fitReset(); ML.cmDraw(); ML.kmReset(); ML.ofDraw();
};

/* ================= 1. 线性回归拟合器 ================= */
var FIT_PTS = [[0.4, 1.2], [1.2, 1.9], [2.1, 3.1], [2.9, 3.0], [3.6, 4.4],
               [4.5, 4.1], [5.2, 5.6], [6.1, 5.9], [6.9, 6.4], [7.8, 7.9],
               [8.6, 7.6], [9.5, 9.2]];
var FIT_X0 = 40, FIT_X1 = 300, FIT_Y0 = 200, FIT_Y1 = 30;   // 绘图区
var FIT_XMAX = 10, FIT_YMAX = 10;

function fitMapX(x) { return FIT_X0 + (x / FIT_XMAX) * (FIT_X1 - FIT_X0); }
function fitMapY(y) { return FIT_Y0 - (y / FIT_YMAX) * (FIT_Y0 - FIT_Y1); }

function fitSSE(k, b) {
  var s = 0;
  for (var i = 0; i < FIT_PTS.length; i++) {
    var e = (k * FIT_PTS[i][0] + b) - FIT_PTS[i][1];
    s += e * e;
  }
  return s;
}
/* 最小二乘闭式解 */
function fitOptimal() {
  var n = FIT_PTS.length, sx = 0, sy = 0, sxx = 0, sxy = 0;
  for (var i = 0; i < n; i++) {
    sx += FIT_PTS[i][0]; sy += FIT_PTS[i][1];
    sxx += FIT_PTS[i][0] * FIT_PTS[i][0]; sxy += FIT_PTS[i][0] * FIT_PTS[i][1];
  }
  var k = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  var b = (sy - k * sx) / n;
  return [k, b];
}
ML.fitDraw = function() {
  var k = ML._num('lf-k'), b = ML._num('lf-b');
  var cv = document.getElementById('lf-canvas');
  if (!cv || k === null || b === null) return;

  var svg = '<svg viewBox="0 0 320 220" style="width:100%;height:auto;max-width:460px;display:block;margin:0 auto">';
  // 网格
  for (var gx = 0; gx <= 5; gx++) svg += '<line x1="' + fitMapX(gx * 2) + '" y1="' + FIT_Y1 + '" x2="' + fitMapX(gx * 2) + '" y2="' + FIT_Y0 + '" style="stroke:var(--grat);stroke-width:1"/>';
  for (var gy = 0; gy <= 5; gy++) svg += '<line x1="' + FIT_X0 + '" y1="' + fitMapY(gy * 2) + '" x2="' + FIT_X1 + '" y2="' + fitMapY(gy * 2) + '" style="stroke:var(--grat);stroke-width:1"/>';
  // 轴
  svg += '<line x1="' + FIT_X0 + '" y1="' + FIT_Y0 + '" x2="' + (FIT_X1 + 8) + '" y2="' + FIT_Y0 + '" style="stroke:var(--acc2);stroke-width:1.6"/>';
  svg += '<line x1="' + FIT_X0 + '" y1="' + FIT_Y0 + '" x2="' + FIT_X0 + '" y2="' + (FIT_Y1 - 8) + '" style="stroke:var(--acc2);stroke-width:1.6"/>';
  // 残差竖线(误差可视化)
  for (var i = 0; i < FIT_PTS.length; i++) {
    var px = FIT_PTS[i][0], py = FIT_PTS[i][1], ly = k * px + b;
    svg += '<line x1="' + fitMapX(px) + '" y1="' + fitMapY(py) + '" x2="' + fitMapX(px) + '" y2="' + fitMapY(ly) + '" style="stroke:var(--acc2);stroke-width:1;opacity:.45;stroke-dasharray:2 2"/>';
  }
  // 当前直线
  svg += '<line x1="' + fitMapX(0) + '" y1="' + fitMapY(b) + '" x2="' + fitMapX(FIT_XMAX) + '" y2="' + fitMapY(k * FIT_XMAX + b) + '" style="stroke:var(--acc);stroke-width:2.4" stroke-linecap="round"/>';
  // 散点
  for (var j = 0; j < FIT_PTS.length; j++) {
    svg += '<circle cx="' + fitMapX(FIT_PTS[j][0]) + '" cy="' + fitMapY(FIT_PTS[j][1]) + '" r="3.4" style="fill:var(--acc2);stroke:var(--paper);stroke-width:1.2"/>';
  }
  svg += '<text x="' + (FIT_X1 - 30) + '" y="' + (FIT_Y1 + 4) + '" style="fill:var(--note);font-size:9;font-family:monospace">x</text>';
  svg += '<text x="' + (FIT_X0 - 14) + '" y="' + (FIT_Y1 + 2) + '" style="fill:var(--note);font-size:9;font-family:monospace">y</text>';
  svg += '</svg>';
  cv.innerHTML = svg;

  // 结果
  var opt = fitOptimal(), sse = fitSSE(k, b), sseOpt = fitSSE(opt[0], opt[1]);
  var gap = sse - sseOpt;
  var cls = gap < 0.5 ? 'cr-good' : (gap < 6 ? 'cr-warn' : 'cr-bad');
  var verdict = gap < 0.5 ? '基本压到底了' : (gap < 6 ? '还差一点' : '离最优还远');
  document.getElementById('lf-result').innerHTML =
    '<table class="cr-table">' +
    '<tr><td class="cr-name">当前直线</td><td class="cr-val">y = ' + ML._fix(k, 2) + ' x + ' + ML._fix(b, 2) + '</td></tr>' +
    '<tr><td class="cr-name">误差平方和 SSE</td><td class="cr-val ' + cls + '">' + ML._fix(sse, 2) + '（' + verdict + '）</td></tr>' +
    '<tr><td class="cr-name">最小二乘最优解</td><td class="cr-val">y = ' + ML._fix(opt[0], 2) + ' x + ' + ML._fix(opt[1], 2) + '，SSE = ' + ML._fix(sseOpt, 2) + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">那一条条虚线就是<b>残差</b>，SSE 是它们长度的平方和。平方让正负不抵消、也放大了大误差——所以模型会优先去救那些偏得最狠的点。真实训练里 k 和 b 不是拖出来的，是靠梯度下降一步步逼近最优解的。</p>';
};
ML.fitBest = function() {
  var opt = fitOptimal();
  document.getElementById('lf-k').value = ML._fix(Math.max(-1, Math.min(2.4, opt[0])), 2);
  document.getElementById('lf-b').value = ML._fix(Math.max(-3, Math.min(6, opt[1])), 1);
  ML.fitDraw();
};
ML.fitReset = function() {
  var kk = document.getElementById('lf-k'), bb = document.getElementById('lf-b');
  if (kk) kk.value = 0.2;
  if (bb) bb.value = 1;
  ML.fitDraw();
};

/* ================= 2. 阈值与混淆矩阵 ================= */
var CM_SAMPLES = (function() {
  var a = [];
  // 负例 50 个(分数偏低),正例 25 个(分数偏高),用确定性函数生成以保证可复现
  for (var i = 0; i < 50; i++) a.push({ s: 0.28 + 0.44 * Math.abs(Math.sin(i * 12.9898 + 1.3)), y: 0 });
  for (var j = 0; j < 25; j++) a.push({ s: 0.52 + 0.42 * Math.abs(Math.sin(j * 78.233 + 0.7)), y: 1 });
  return a;
})();

ML.cmDraw = function() {
  var thr = ML._num('cm-thr');
  var cv = document.getElementById('cm-canvas');
  if (!cv || thr === null) return;

  var TP = 0, FP = 0, FN = 0, TN = 0;
  for (var i = 0; i < CM_SAMPLES.length; i++) {
    var pred = CM_SAMPLES[i].s >= thr ? 1 : 0;
    if (CM_SAMPLES[i].y === 1 && pred === 1) TP++;
    else if (CM_SAMPLES[i].y === 0 && pred === 1) FP++;
    else if (CM_SAMPLES[i].y === 1 && pred === 0) FN++;
    else TN++;
  }

  // 分数轴散点图(正例上排、负例下排),阈值竖线
  var X0 = 44, X1 = 300, yPos = 92, yNeg = 132;
  var svg = '<svg viewBox="0 0 320 190" style="width:100%;height:auto;max-width:460px;display:block;margin:0 auto">';
  svg += '<line x1="' + X0 + '" y1="40" x2="' + X0 + '" y2="168" style="stroke:var(--grat);stroke-width:1"/>';
  for (var gx = 0; gx <= 10; gx++) {
    var xx = X0 + (gx / 10) * (X1 - X0);
    svg += '<line x1="' + xx + '" y1="40" x2="' + xx + '" y2="168" style="stroke:var(--grat);stroke-width:1"/>';
    if (gx % 2 === 0) svg += '<text x="' + (xx - 8) + '" y="182" style="fill:var(--note);font-size:9;font-family:monospace">' + (gx / 10).toFixed(1) + '</text>';
  }
  svg += '<text x="8" y="96" style="fill:var(--acc);font-size:9">真实是</text>';
  svg += '<text x="8" y="136" style="fill:var(--note);font-size:9">真实否</text>';
  // 阈值线
  var thrX = X0 + thr * (X1 - X0);
  svg += '<line x1="' + thrX + '" y1="32" x2="' + thrX + '" y2="168" style="stroke:var(--acc);stroke-width:2;stroke-dasharray:4 3"/>';
  svg += '<text x="' + (thrX + 4) + '" y="30" style="fill:var(--acc);font-size:9;font-family:monospace">' + thr.toFixed(2) + '</text>';
  // 左侧/右侧底色提示
  svg += '<rect x="' + X0 + '" y="40" width="' + Math.max(0, thrX - X0) + '" height="128" style="fill:var(--note);opacity:.05"/>';
  svg += '<rect x="' + thrX + '" y="40" width="' + Math.max(0, X1 - thrX) + '" height="128" style="fill:var(--acc);opacity:.07"/>';
  // 样本点
  var off = {};
  for (var k = 0; k < CM_SAMPLES.length; k++) {
    var s = CM_SAMPLES[k].s, y = CM_SAMPLES[k].y;
    var x = X0 + s * (X1 - X0);
    var key = (y ? 'p' : 'n') + Math.round(s * 100);
    off[key] = (off[key] || 0) + 1;
    var yy = (y ? yPos : yNeg) + (off[key] - 1) * 3.4;
    var correct = (s >= thr) === (y === 1);
    svg += '<circle cx="' + x + '" cy="' + yy + '" r="2.6" style="fill:' + (correct ? 'var(--acc)' : 'var(--acc2)') + ';opacity:' + (correct ? '.85' : '.55') + '"/>';
  }
  svg += '</svg>';
  cv.innerHTML = svg;

  var prec = (TP + FP) > 0 ? TP / (TP + FP) : 0;
  var rec = (TP + FN) > 0 ? TP / (TP + FN) : 0;
  var f1 = (prec + rec) > 0 ? 2 * prec * rec / (prec + rec) : 0;
  var acc = (TP + TN) / CM_SAMPLES.length;
  var baseAcc = (TN + FN) / CM_SAMPLES.length;   // 全判负例的准确率

  document.getElementById('cm-result').innerHTML =
    '<table class="cr-table" style="text-align:center">' +
    '<tr><td class="cr-name"></td><td class="cr-name">预测：是</td><td class="cr-name">预测：否</td></tr>' +
    '<tr><td class="cr-name">真的是</td><td class="cr-val cr-good">TP ' + TP + '</td><td class="cr-val cr-bad">FN ' + FN + '（漏报）</td></tr>' +
    '<tr><td class="cr-name">真的否</td><td class="cr-val cr-bad">FP ' + FP + '（误报）</td><td class="cr-val cr-good">TN ' + TN + '</td></tr>' +
    '</table>' +
    '<table class="cr-table">' +
    '<tr><td class="cr-name">精确率</td><td class="cr-val">' + ML._fix(prec * 100, 1) + '%<span style="color:var(--note);font-weight:400">（报出来的里有多少是真的）</span></td></tr>' +
    '<tr><td class="cr-name">召回率</td><td class="cr-val">' + ML._fix(rec * 100, 1) + '%<span style="color:var(--note);font-weight:400">（真的里抓到了多少）</span></td></tr>' +
    '<tr><td class="cr-name">F1 分数</td><td class="cr-val cr-warn">' + ML._fix(f1 * 100, 1) + '%</td></tr>' +
    '<tr><td class="cr-name">准确率</td><td class="cr-val">' + ML._fix(acc * 100, 1) + '%<span style="color:var(--note);font-weight:400">（对比：全判"否"也有 ' + ML._fix(baseAcc * 100, 1) + '%）</span></td></tr>' +
    '</table>' +
    '<p class="calc-note">阈值往右挪：报得更谨慎，精确率上升、召回率下降（怕冤枉）；往左挪：报得更积极，召回率上升、精确率下降（怕漏掉）。<b>准确率几乎不动，恰恰说明它在这类问题上没有指导价值。</b>而那个"全判否"的对照数字，就是为什么必须先立基线。</p>';
};

/* ================= 3. K 均值聚类演示器 ================= */
var KM_PTS = [
  [1.6, 2.2], [2.2, 2.9], [1.1, 3.1], [2.7, 2.0], [2.0, 1.5],
  [6.6, 2.4], [7.4, 3.0], [6.2, 3.3], [7.8, 2.1], [7.0, 1.6],
  [4.4, 7.2], [5.2, 7.9], [3.9, 8.0], [5.8, 7.1], [4.8, 6.4]
];
var KM_INIT = [[1.0, 9.0], [9.0, 9.0], [5.0, 5.0]];
var KM_COLORS = ['var(--acc)', 'var(--acc2)', 'var(--note)'];

function kmDistance(a, b) { return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])); }

ML.kmReset = function() {
  ML._km = { centers: [[KM_INIT[0][0], KM_INIT[0][1]], [KM_INIT[1][0], KM_INIT[1][1]], [KM_INIT[2][0], KM_INIT[2][1]]], iter: 0 };
  ML.kmDraw('已重置到初始位置：三个中心分别落在左上、右上、中央。点"迭代一步"开始。');
};
ML.kmStep = function() {
  var st = ML._km;
  if (!st) { ML.kmReset(); return; }
  // 1) 就近归队
  var groups = [[], [], []];
  for (var i = 0; i < KM_PTS.length; i++) {
    var best = 0, bd = Infinity;
    for (var c = 0; c < 3; c++) { var d = kmDistance(KM_PTS[i], st.centers[c]); if (d < bd) { bd = d; best = c; } }
    groups[best].push(KM_PTS[i]);
  }
  // 2) 重算中心
  var moved = 0;
  for (var g = 0; g < 3; g++) {
    if (groups[g].length === 0) continue;
    var sx = 0, sy = 0;
    for (var p = 0; p < groups[g].length; p++) { sx += groups[g][p][0]; sy += groups[g][p][1]; }
    var ncx = sx / groups[g].length, ncy = sy / groups[g].length;
    moved += kmDistance([ncx, ncy], st.centers[g]);
    st.centers[g] = [ncx, ncy];
  }
  st.iter++;
  var msg = '第 ' + st.iter + ' 轮：归队后重算中心，中心总移动距离 ' + ML._fix(moved, 2) + '。' +
    (moved < 0.05 ? '<b>已收敛，中心不再移动。</b>' : '继续迭代。');
  ML.kmDraw(msg);
};
ML.kmRun = function() {
  var st = ML._km;
  if (!st) { ML.kmReset(); return; }
  var guard = 0;
  var prev = st.iter;
  while (guard++ < 30) {
    var before = st.centers.map(function(c) { return c.slice(); });
    ML.kmStep();
    var moved = 0;
    for (var c = 0; c < 3; c++) moved += kmDistance(before[c], st.centers[c]);
    if (moved < 0.05) break;
  }
  ML.kmDraw('<b>已跑完 ' + (st.iter - prev) + ' 轮并收敛</b>（共 ' + st.iter + ' 轮）。聚类结果与初始位置有关——换个初值可能得到不同的分组，这就是"聚类没有唯一正确答案"的含义。');
};
ML.kmDraw = function(msg) {
  var st = ML._km;
  var cv = document.getElementById('km-canvas');
  if (!cv || !st) return;
  var X0 = 30, X1 = 300, Y0 = 210, Y1 = 24, MAXV = 10;
  function mx(v) { return X0 + (v / MAXV) * (X1 - X0); }
  function my(v) { return Y0 - (v / MAXV) * (Y0 - Y1); }

  var svg = '<svg viewBox="0 0 320 230" style="width:100%;height:auto;max-width:460px;display:block;margin:0 auto">';
  // 网格
  for (var g = 0; g <= 5; g++) {
    svg += '<line x1="' + mx(g * 2) + '" y1="' + Y1 + '" x2="' + mx(g * 2) + '" y2="' + Y0 + '" style="stroke:var(--grat);stroke-width:1"/>';
    svg += '<line x1="' + X0 + '" y1="' + my(g * 2) + '" x2="' + X1 + '" y2="' + my(g * 2) + '" style="stroke:var(--grat);stroke-width:1"/>';
  }
  // 归组着色
  for (var i = 0; i < KM_PTS.length; i++) {
    var best = 0, bd = Infinity;
    for (var c = 0; c < 3; c++) { var d = kmDistance(KM_PTS[i], st.centers[c]); if (d < bd) { bd = d; best = c; } }
    svg += '<circle cx="' + mx(KM_PTS[i][0]) + '" cy="' + my(KM_PTS[i][1]) + '" r="4" style="fill:' + KM_COLORS[best] + ';opacity:.75"/>';
  }
  // 中心(十字标记)
  for (var q = 0; q < 3; q++) {
    var cx = mx(st.centers[q][0]), cy = my(st.centers[q][1]);
    svg += '<line x1="' + (cx - 7) + '" y1="' + cy + '" x2="' + (cx + 7) + '" y2="' + cy + '" style="stroke:' + KM_COLORS[q] + ';stroke-width:2.4"/>';
    svg += '<line x1="' + cx + '" y1="' + (cy - 7) + '" x2="' + cx + '" y2="' + (cy + 7) + '" style="stroke:' + KM_COLORS[q] + ';stroke-width:2.4"/>';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="9" style="fill:none;stroke:' + KM_COLORS[q] + ';stroke-width:1.4;stroke-dasharray:3 3"/>';
  }
  svg += '</svg>';
  cv.innerHTML = svg;
  document.getElementById('km-result').innerHTML =
    '<p class="calc-note">' + (msg || '') + '</p>';
};

/* ================= 4. 过拟合演示器 ================= */
var OF_TRAIN = [[0.0, -0.2], [1.0, 0.9], [2.0, 1.6], [3.0, 1.2], [4.0, 2.1],
                [5.0, 1.9], [6.0, 2.6], [7.0, 2.4], [8.0, 2.9], [9.0, 3.1]];
var OF_VALID = [[1.5, 1.0], [3.5, 1.9], [5.5, 2.3], [7.5, 2.2], [8.5, 3.2], [9.5, 3.0]];

/* 归一化到 [-1,1],避免高次幂导致数值病态 */
function ofNorm(x) { return (x - 4.75) / 4.75; }
/* 解线性方程组(高斯消元 + 部分主元) */
function ofSolve(A, b) {
  var n = b.length;
  for (var i = 0; i < n; i++) {
    var p = i;
    for (var r = i + 1; r < n; r++) if (Math.abs(A[r][i]) > Math.abs(A[p][i])) p = r;
    var ta = A[i]; A[i] = A[p]; A[p] = ta;
    var tb = b[i]; b[i] = b[p]; b[p] = tb;
    if (Math.abs(A[i][i]) < 1e-12) continue;
    for (var r2 = i + 1; r2 < n; r2++) {
      var f = A[r2][i] / A[i][i];
      if (!f) continue;
      for (var c = i; c < n; c++) A[r2][c] -= f * A[i][c];
      b[r2] -= f * b[i];
    }
  }
  var x = [];
  for (var q = 0; q < n; q++) x.push(0);
  for (var i2 = n - 1; i2 >= 0; i2--) {
    var s = b[i2];
    for (var c2 = i2 + 1; c2 < n; c2++) s -= A[i2][c2] * x[c2];
    x[i2] = Math.abs(A[i2][i2]) < 1e-12 ? 0 : s / A[i2][i2];
  }
  return x;
}
/* 多项式最小二乘拟合,返回系数数组(基于归一化 x) */
function ofFit(deg) {
  var n = deg + 1, A = [], b = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      var s = 0;
      for (var k = 0; k < OF_TRAIN.length; k++) s += Math.pow(ofNorm(OF_TRAIN[k][0]), i + j);
      row.push(s);
    }
    A.push(row);
    var t = 0;
    for (var k2 = 0; k2 < OF_TRAIN.length; k2++) t += Math.pow(ofNorm(OF_TRAIN[k][0]), i) * OF_TRAIN[k2][1];
    b.push(t);
  }
  return ofSolve(A, b);
}
function ofPredict(coef, x) {
  var xn = ofNorm(x), s = 0;
  for (var i = 0; i < coef.length; i++) s += coef[i] * Math.pow(xn, i);
  return s;
}
function ofRMSE(coef, pts) {
  var s = 0;
  for (var i = 0; i < pts.length; i++) {
    var e = ofPredict(coef, pts[i][0]) - pts[i][1];
    s += e * e;
  }
  return Math.sqrt(s / pts.length);
}
ML.ofDraw = function() {
  var deg = parseInt((document.getElementById('of-deg') || {}).value || '1', 10);
  var cv = document.getElementById('of-canvas');
  if (!cv) return;
  var coef = ofFit(deg);

  var X0 = 34, X1 = 302, Y0 = 190, Y1 = 24, YMIN = -1.5, YMAX = 4.5;
  function mx(v) { return X0 + (v / 10) * (X1 - X0); }
  function my(v) { var t = (v - YMIN) / (YMAX - YMIN); t = Math.max(-0.6, Math.min(1.6, t)); return Y0 - t * (Y0 - Y1); }

  var svg = '<svg viewBox="0 0 320 210" style="width:100%;height:auto;max-width:460px;display:block;margin:0 auto">';
  for (var g = 0; g <= 5; g++) svg += '<line x1="' + mx(g * 2) + '" y1="' + Y1 + '" x2="' + mx(g * 2) + '" y2="' + Y0 + '" style="stroke:var(--grat);stroke-width:1"/>';
  for (var g2 = 0; g2 <= 5; g2++) svg += '<line x1="' + X0 + '" y1="' + my(g2 - 1) + '" x2="' + X1 + '" y2="' + my(g2 - 1) + '" style="stroke:var(--grat);stroke-width:1"/>';
  svg += '<line x1="' + X0 + '" y1="' + my(0) + '" x2="' + X1 + '" y2="' + my(0) + '" style="stroke:var(--grat);stroke-width:1;stroke-dasharray:3 3"/>';

  // 拟合曲线
  var d = '';
  for (var t = 0; t <= 100; t++) {
    var xv = t / 10;
    var yv = ofPredict(coef, xv);
    d += (t === 0 ? 'M' : ' L') + ML._fix(mx(xv), 1) + ' ' + ML._fix(my(yv), 1);
  }
  svg += '<path d="' + d + '" style="stroke:var(--acc);stroke-width:2.2;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';

  // 训练点 / 验证点
  for (var i = 0; i < OF_TRAIN.length; i++) svg += '<circle cx="' + mx(OF_TRAIN[i][0]) + '" cy="' + my(OF_TRAIN[i][1]) + '" r="3.4" style="fill:var(--acc2)"/>';
  for (var j = 0; j < OF_VALID.length; j++) svg += '<rect x="' + (mx(OF_VALID[j][0]) - 3) + '" y="' + (my(OF_VALID[j][1]) - 3) + '" width="6" height="6" style="fill:none;stroke:var(--note);stroke-width:1.6"/>';
  svg += '<text x="' + (X0 + 4) + '" y="' + (Y1 + 12) + '" style="fill:var(--acc2);font-size:9">圆点 = 训练数据</text>';
  svg += '<text x="' + (X0 + 130) + '" y="' + (Y1 + 12) + '" style="fill:var(--note);font-size:9">方框 = 验证数据</text>';
  svg += '</svg>';
  cv.innerHTML = svg;

  var tr = ofRMSE(coef, OF_TRAIN), va = ofRMSE(coef, OF_VALID);
  var cls = 'cr-good', verdict;
  if (deg <= 2) { verdict = '模型太简单（欠拟合）：训练和验证误差都不低，规律没学到。'; cls = 'cr-warn'; }
  else if (deg <= 5) { verdict = '比较合适：训练误差不高，验证误差也在低位。'; cls = 'cr-good'; }
  else { verdict = '过度弯曲（过拟合）：训练误差还在降，验证误差却开始抬头——它在背训练点的噪声了。'; cls = 'cr-bad'; }

  document.getElementById('of-result').innerHTML =
    '<table class="cr-table">' +
    '<tr><td class="cr-name">多项式次数</td><td class="cr-val">' + deg + '</td></tr>' +
    '<tr><td class="cr-name">训练误差 RMSE</td><td class="cr-val cr-good">' + ML._fix(tr, 3) + '</td></tr>' +
    '<tr><td class="cr-name">验证误差 RMSE</td><td class="cr-val ' + (va > tr * 1.6 ? 'cr-bad' : 'cr-warn') + '">' + ML._fix(va, 3) + '</td></tr>' +
    '<tr><td class="cr-name">判断</td><td class="cr-val ' + cls + '" style="font-weight:400">' + verdict + '</td></tr>' +
    '</table>' +
    '<p class="calc-note">注意"训练误差"几乎是一路下降的——<b>它下降不代表模型变好了</b>。真正该盯的是验证误差，它的最低点才是模型泛化能力最好的位置，也通常是该停手的位置。这就是正则化与早停存在的理由。</p>';
};

/* ===== 模块页 ===== */
ML.views.module = function(id) {
  var mod = ML.modules.find(function(m) { return m.id === id; });
  if (!mod) { ML.views.home(); return; }
  var P = ML.progress();
  var lessons = ML.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + ML.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + ML.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = ML.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + ML.esc(title) + '</a>';
    else html += '<span class="title">' + ML.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  ML.render(html);
};

/* ===== 术语 ===== */
ML.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>机器学习术语速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语，如 过拟合 / 召回率 / 数据泄漏 / 梯度下降" oninput="ML.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(ML.terms) + '</div></div>';
  ML.render(html);
};
ML.filterTerms = function(q) {
  var filtered = ML.terms;
  if (q) { q = q.toLowerCase();
    filtered = ML.terms.filter(function(t) {
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
    html += '<div class="term-name">' + ML.esc(t.name) + ' <span class="term-en">' + ML.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + ML.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + ML.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
ML.views.myTerms = function() {
  var P = ML.progress(); var collected = [];
  for (var i = 0; i < ML.terms.length; i++) if (P.hasTerm(ML.terms[i].id)) collected.push(ML.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  ML.render(html);
};

/* ===== 搜索 ===== */
ML.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词，如 过拟合 / 召回率 / 数据泄漏" oninput="ML.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  ML.render(html);
};
ML.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = ML.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + ML.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + ML.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
ML.views.settings = function() {
  var P = ML.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="ML.setTheme(\'dark\')">深色 · 墨绿夜</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="ML.setTheme(\'light\')">浅色 · 翠玉绿</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="ML.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="ML.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="ML.setFontSize(\'l\')">大</button></div>';
  // GitHub 进度同步(可选)
  var gcfg = ML.sync.config();
  html += '<div class="setting-row"><label>GitHub 进度同步(可选)</label></div>';
  html += '<p class="calc-note">用一个<b>自己的 private 仓库</b>存进度(如 you/ml-progress)，fine-grained PAT 只授权该仓库的 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>';
  html += '<div class="setting-row"><label>仓库</label><input id="syRepo" placeholder="owner/ml-progress" value="' + ML.esc(gcfg.repo || '') + '"></div>';
  html += '<div class="setting-row"><label>分支</label><input id="syBranch" placeholder="main" value="' + ML.esc(gcfg.branch || 'main') + '"></div>';
  html += '<div class="setting-row"><label>Token</label><input id="syToken" type="password" placeholder="github_pat_..." value="' + ML.esc(gcfg.token || '') + '"></div>';
  html += '<div class="setting-row" style="margin-top:14px"><button class="setting-btn" id="sySave">保存并立即同步</button><button class="setting-btn" id="syPull">只拉取一次</button><button class="setting-btn danger" id="syClear">清除 token</button></div>';
  html += '<p class="calc-note" id="syMsg">' + ML.esc(ML.sync.statusText) + '</p>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="ML.exportData()">导出进度</button>';
  html +=        '<button class="setting-btn danger" onclick="ML.clearData()">清除数据</button></div>';
  html += '</div>';
  ML.render(html);

  // GitHub 同步
  function gmsg(text, cls) {
    var el = document.getElementById('syMsg');
    el.textContent = text; el.className = 'calc-note ' + (cls || '');
  }
  document.getElementById('sySave').addEventListener('click', function () {
    ML.sync.setConfig({
      repo: document.getElementById('syRepo').value,
      branch: document.getElementById('syBranch').value,
      token: document.getElementById('syToken').value
    });
    if (!ML.sync.ready()) { gmsg('仓库和 token 都要填。', 'bad'); return; }
    gmsg('同步中...');
    ML.sync.pullNow().then(function () { return ML.sync.pushNow(); })
      .then(function (ok) { gmsg(ok ? '已同步 ✓ 两台设备现在看到同一份进度。' : '同步失败：' + ML.sync.statusText, ok ? 'ok' : 'bad'); });
  });
  document.getElementById('syPull').addEventListener('click', function () {
    gmsg('拉取中...');
    ML.sync.pullNow().then(function (ok) { gmsg(ok ? '已拉取并合并远端进度 ✓' : ML.sync.statusText, ok ? 'ok' : ''); });
  });
  document.getElementById('syClear').addEventListener('click', function () {
    ML.sync.clearToken();
    document.getElementById('syToken').value = '';
    gmsg('token 已从本机清除。');
  });
};
ML.setTheme = function(t) { document.documentElement.dataset.theme = t; ML.progress().setPref('theme', t); ML.views.settings(); };
ML.setFontSize = function(s) { document.documentElement.dataset.fs = s; ML.progress().setPref('fontSize', s); ML.views.settings(); };
ML.exportData = function() {
  var data = ML.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ml-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
ML.clearData = function() {
  if (confirm('确定要清除所有学习数据吗？此操作不可恢复。')) {
    localStorage.removeItem('ml.progress.v1');
    window.location.reload();
  }
};
