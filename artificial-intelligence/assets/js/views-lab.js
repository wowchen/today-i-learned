/* 互动实验室:① 注意力可视化 ② 感知机互动 ③ 提示词演练器
   全部纯前端、离线、自包含;演示为教学示意,不调用任何真实模型。 */
window.AIX = window.AIX || {};
AIX.views = AIX.views || {};

AIX.views.lab = function(sub) {
  if (sub === 'attention') return labAttention();
  if (sub === 'perceptron') return labPerceptron();
  if (sub === 'prompt') return labPrompt();
  if (sub === 'training') return labTraining();
  return labIndex();
};

function labIndex() {
  var h = '<div class="tool-head"><h1 class="page">互动实验室</h1>' +
    '<p class="sub">动手玩,比读十遍更懂原理。下面的演示都在你浏览器里跑,离线、不联网、不调用真实模型——是帮助理解的<b>教学示意</b>,不是真实模型的输出。后续会持续增加更多工具。</p></div>';
  h += '<div class="lab-grid">';
  h += labCard('attention', '注意力可视化', 'A', '点一个词,看它在一句话里"看向"哪些词——直观理解 Transformer 的注意力,还能切换不同"注意力头"。');
  h += labCard('perceptron', '感知机互动', 'P', '拖动权重和偏置滑杆,实时看一个神经元如何把平面上的点一分为二,理解"加权求和 → 激活"。');
  h += labCard('prompt', '提示词演练器', 'T', '填角色、任务、上下文、格式、约束,自动拼出一条结构化提示词,并给启发式评分和改进建议。');
  h += labCard('training', '训练过程可视化', 'L', '拖动"训练进度"滑杆,看模型从欠拟合到过拟合:训练损失一直降,验证损失却可能先降后升。');
  h += '</div>';
  AIX.render(h);
}

function labCard(sub, title, ic, desc) {
  return '<a class="labcard" href="#/lab/' + sub + '"><div class="ic">' + ic + '</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}

function labBack() {
  return '<div class="crumb"><a href="#/lab">互动实验室</a> / 演示</div>';
}

/* ==================== ① 注意力可视化 ==================== */
var ATT = {
  tokens: ['猫', '喝', '了', '牛奶', '因为', '它', '饿', '了'],
  head: 1,
  q: 5,
  heads: [
    { name: '就近头', tip: '主要看紧挨着的前一个词——很多头确实学到这种"局部"模式。' },
    { name: '指代头', tip: '试着把代词"它"连回它指代的名词"猫"——示意性的语义关联。' },
    { name: '全局头', tip: '注意力比较均匀地铺开,离得近的略强——一种"看全局"的模式。' }
  ]
};

function attScore(head, q, k) {
  var n = ATT.tokens.length;
  if (head === 0) { // 就近
    if (k > q) return 0.02;
    return 1 / (1 + (q - k) * (q - k) * 1.6) + 0.02;
  }
  if (head === 1) { // 指代:它(5) -> 猫(0)
    if (q === 5) { return (k === 0) ? 1.0 : (k === q ? 0.25 : 0.05); }
    if (q === 3) { return (k === 1) ? 0.9 : (k === q ? 0.3 : 0.05); } // 牛奶<-喝
    return (k === q) ? 0.8 : (k === q - 1 ? 0.4 : 0.05);
  }
  // 全局
  return 1 / (1 + Math.abs(q - k)) + 0.05;
}

function attWeights(head, q) {
  var n = ATT.tokens.length, raw = [], sum = 0;
  for (var k = 0; k < n; k++) { raw[k] = attScore(head, q, k); sum += raw[k]; }
  for (var i = 0; i < n; i++) raw[i] = raw[i] / sum;
  return raw;
}

function labAttention() {
  var h = labBack();
  h += '<h1 class="page">注意力可视化</h1>';
  h += '<p class="sub">每个词在理解时,都会按不同强度"关注"句子里的其他词。点下面任意一个词作为<b>查询词</b>,弧线粗细代表它对各词的注意力强弱。</p>';
  h += '<div class="chips" id="att-heads"></div>';
  h += '<div class="panel"><div id="att-stage"></div></div>';
  h += '<div id="att-readout"></div>';
  h += '<p class="warnnote">这是教学示意:权重由简单规则生成,用来展示"注意力"这种机制长什么样,<b>不是任何真实模型</b>算出来的数值。真实模型有几十层、每层几十个头,模式复杂得多。</p>';
  AIX.render(h);
  attDraw();
}

AIX.attHead = function(h) { ATT.head = h; attDraw(); };
AIX.attSelect = function(q) { ATT.q = q; attDraw(); };

function attDraw() {
  var heads = document.getElementById('att-heads');
  if (heads) {
    var hh = '';
    for (var i = 0; i < ATT.heads.length; i++) {
      hh += '<button class="chip' + (ATT.head === i ? ' on' : '') + '" onclick="AIX.attHead(' + i + ')">' + ATT.heads[i].name + '</button>';
    }
    heads.innerHTML = hh;
  }

  var n = ATT.tokens.length;
  var W = 600, H = 170, padL = 30, gap = (W - padL * 2) / (n - 1), baseY = 132;
  var w = attWeights(ATT.head, ATT.q);

  var svg = '<figure class="fig" style="padding:8px 6px 4px"><svg viewBox="0 0 ' + W + ' ' + H + '" width="100%">';
  // 弧线
  for (var k = 0; k < n; k++) {
    if (k === ATT.q) continue;
    var x1 = padL + ATT.q * gap, x2 = padL + k * gap;
    var midx = (x1 + x2) / 2, lift = 30 + Math.abs(ATT.q - k) * 16;
    var op = Math.max(0.06, Math.min(0.95, w[k] * 1.6));
    var sw = Math.max(0.8, w[k] * 14);
    svg += '<path class="f-line" d="M' + x1 + ',' + baseY + ' Q' + midx + ',' + (baseY - lift) + ' ' + x2 + ',' + baseY + '" ' +
           'stroke-width="' + sw.toFixed(2) + '" opacity="' + op.toFixed(2) + '"/>';
  }
  // 词
  for (var t = 0; t < n; t++) {
    var x = padL + t * gap;
    var isQ = (t === ATT.q);
    svg += '<g style="cursor:pointer" onclick="AIX.attSelect(' + t + ')">';
    svg += '<circle cx="' + x + '" cy="' + baseY + '" r="6" class="' + (isQ ? 'f-arr' : 'f-line') + '"' + (isQ ? '' : ' fill="none"') + '/>';
    svg += '<text x="' + x + '" y="' + (baseY + 26) + '" text-anchor="middle" class="' + (isQ ? 'f-hot' : 'f-txt') + '" style="font-size:14px;font-weight:' + (isQ ? '700' : '400') + '">' + AIX.esc(ATT.tokens[t]) + '</text>';
    if (!isQ) svg += '<text x="' + x + '" y="' + (baseY - 10) + '" text-anchor="middle" class="f-dim">' + Math.round(w[t] * 100) + '</text>';
    svg += '</g>';
  }
  svg += '</svg><figcaption>查询词「' + AIX.esc(ATT.tokens[ATT.q]) + '」对各词的注意力(数字为示意百分比)</figcaption></figure>';

  var stage = document.getElementById('att-stage');
  if (stage) stage.innerHTML = svg;

  var ro = document.getElementById('att-readout');
  if (ro) {
    ro.innerHTML = '<div class="panel"><h3>' + ATT.heads[ATT.head].name + '</h3>' +
      '<p style="color:var(--ink-dim);font-size:14px">' + ATT.heads[ATT.head].tip + '</p>' +
      '<p style="font-size:13px;margin-top:8px">点上面不同的词当查询词,或切换上方的"注意力头",观察弧线分布怎么变。真实的多头注意力,就是很多这样的模式叠在一起。</p></div>';
  }
}

/* ==================== ② 感知机互动 ==================== */
var PERC = {
  w1: 1, w2: 1, b: -0.2,
  pts: [
    { x: -0.7, y: 0.6, c: 1 }, { x: -0.4, y: 0.9, c: 1 }, { x: -0.9, y: 0.2, c: 1 },
    { x: -0.5, y: 0.3, c: 1 }, { x: -0.2, y: 0.7, c: 1 }, { x: -0.8, y: -0.3, c: 1 },
    { x: 0.6, y: -0.5, c: 0 }, { x: 0.4, y: -0.9, c: 0 }, { x: 0.8, y: -0.2, c: 0 },
    { x: 0.3, y: -0.4, c: 0 }, { x: 0.7, y: -0.7, c: 0 }, { x: 0.9, y: 0.1, c: 0 }
  ]
};

function labPerceptron() {
  var h = labBack();
  h += '<h1 class="page">感知机互动</h1>';
  h += '<p class="sub">一个最简单的神经元:把输入按权重相乘求和,再加偏置,大于 0 就输出"是"。拖动下面三个滑杆,看那条<b>判定边界</b>怎么移动,能不能把两类点分开。</p>';
  h += '<div class="panel">';
  h += '<div class="ctrl"><label>权重 w₁</label><input type="range" min="-2" max="2" step="0.05" value="' + PERC.w1 + '" oninput="AIX.percSet(\'w1\',this.value)"><span class="val" id="v-w1"></span></div>';
  h += '<div class="ctrl"><label>权重 w₂</label><input type="range" min="-2" max="2" step="0.05" value="' + PERC.w2 + '" oninput="AIX.percSet(\'w2\',this.value)"><span class="val" id="v-w2"></span></div>';
  h += '<div class="ctrl"><label>偏置 b</label><input type="range" min="-1.5" max="1.5" step="0.05" value="' + PERC.b + '" oninput="AIX.percSet(\'b\',this.value)"><span class="val" id="v-b"></span></div>';
  h += '<div id="perc-stage"></div>';
  h += '<div id="perc-readout"></div>';
  h += '</div>';
  h += '<p class="warnnote">单个感知机只能画一条<b>直线</b>来分类,遇到不能用直线分开的数据(比如异或)就无能为力——历史上这正是第一次"AI 寒冬"的导火索之一。把很多神经元叠成多层,才有了今天的深度学习。</p>';
  AIX.render(h);
  percDraw();
}

AIX.percSet = function(k, v) { PERC[k] = parseFloat(v); percDraw(); };

function percDraw() {
  ['w1', 'w2', 'b'].forEach(function(k) {
    var el = document.getElementById('v-' + k);
    if (el) el.textContent = PERC[k].toFixed(2);
  });

  var S = 300, pad = 20, mid = S / 2, scale = (S / 2 - pad);
  function px(x) { return mid + x * scale; }
  function py(y) { return mid - y * scale; }

  var svg = '<figure class="fig"><svg viewBox="0 0 ' + S + ' ' + S + '" width="100%" style="max-width:320px">';
  // 坐标轴
  svg += '<line class="f-box" x1="' + pad + '" y1="' + mid + '" x2="' + (S - pad) + '" y2="' + mid + '"/>';
  svg += '<line class="f-box" x1="' + mid + '" y1="' + pad + '" x2="' + mid + '" y2="' + (S - pad) + '"/>';

  // 判定边界 w1*x + w2*y + b = 0  ->  y = -(w1*x + b)/w2
  var pts = [];
  if (Math.abs(PERC.w2) > 0.01) {
    var xa = -1, ya = -(PERC.w1 * xa + PERC.b) / PERC.w2;
    var xb = 1, yb = -(PERC.w1 * xb + PERC.b) / PERC.w2;
    pts = [[xa, ya], [xb, yb]];
  } else if (Math.abs(PERC.w1) > 0.01) {
    var xv = -PERC.b / PERC.w1;
    pts = [[xv, -1], [xv, 1]];
  }
  if (pts.length === 2) {
    svg += '<line class="f-line" x1="' + px(pts[0][0]) + '" y1="' + py(pts[0][1]) + '" x2="' + px(pts[1][0]) + '" y2="' + py(pts[1][1]) + '" stroke-width="2.5"/>';
  }

  // 点
  var correct = 0;
  for (var i = 0; i < PERC.pts.length; i++) {
    var p = PERC.pts[i];
    var sum = PERC.w1 * p.x + PERC.w2 * p.y + PERC.b;
    var pred = sum > 0 ? 1 : 0;
    var ok = (pred === p.c);
    if (ok) correct++;
    var cls = p.c === 1 ? 'f-arr' : 'f-ok';
    svg += '<circle cx="' + px(p.x) + '" cy="' + py(p.y) + '" r="6" class="' + cls + '"/>';
    if (!ok) svg += '<circle cx="' + px(p.x) + '" cy="' + py(p.y) + '" r="9.5" fill="none" class="f-line" stroke-width="1.8"/>';
  }
  svg += '</svg><figcaption>圆点=两类样本,直线=判定边界,带圈的点表示分错了</figcaption></figure>';

  var stage = document.getElementById('perc-stage');
  if (stage) stage.innerHTML = svg;

  var acc = Math.round(correct / PERC.pts.length * 100);
  var ro = document.getElementById('perc-readout');
  if (ro) {
    ro.innerHTML = '<p style="font-family:var(--mono);font-size:13.5px;margin-top:6px">' +
      '输出 = 激活( ' + PERC.w1.toFixed(2) + '·x₁ + ' + PERC.w2.toFixed(2) + '·x₂ + ' + PERC.b.toFixed(2) + ' )　|　' +
      '正确分类 <b style="color:var(--accent)">' + correct + '/' + PERC.pts.length + ' (' + acc + '%)</b></p>';
  }
}

/* ==================== ③ 提示词演练器 ==================== */
function labPrompt() {
  var h = labBack();
  h += '<h1 class="page">提示词演练器</h1>';
  h += '<p class="sub">好提示词通常说清五件事:你是谁、要它做什么、背景信息、想要什么格式、有什么限制。填一填,下面会拼出一条结构化提示词,并给出启发式评分与建议。</p>';
  h += '<div class="panel">';
  h += pf('role', '角色(让它扮演谁)', '例:资深英语老师 / 数据分析师', false);
  h += pf('task', '任务(要它做什么)', '例:帮我把这段中文润色成地道英文', true);
  h += pf('context', '上下文(背景与材料)', '例:读者是高中生,场景是课堂展示', true);
  h += '<div class="ctrl"><label>输出格式</label><select class="field" id="pf-format" onchange="AIX.promptBuild()">' +
       '<option value="">不指定</option><option>分点列表</option><option>表格</option><option>一段话</option><option>JSON</option><option>带标题的小节</option></select></div>';
  h += pf('constraint', '约束(限制与偏好)', '例:不超过 200 字,语气正式,不要编造', true);
  h += '</div>';
  h += '<div class="panel"><h3>拼出的提示词</h3><div class="out" id="pf-out">先在上面填写…</div>' +
       '<div id="pf-score" style="margin-top:12px"></div></div>';
  h += '<p class="warnnote">本站离线、<b>不会真的把提示词发给任何模型</b>。这里只演示"怎么把需求说清楚"这件事;评分是按是否说清五要素做的简单启发式,不代表真实效果。</p>';
  AIX.render(h);
  AIX.promptBuild();
}

function pf(id, label, ph, area) {
  var input = area
    ? '<textarea class="field" id="pf-' + id + '" placeholder="' + ph + '" oninput="AIX.promptBuild()"></textarea>'
    : '<input class="field" id="pf-' + id + '" placeholder="' + ph + '" oninput="AIX.promptBuild()">';
  return '<div style="margin:10px 0"><label style="font-size:13px;color:var(--ink-dim);display:block;margin-bottom:5px">' + label + '</label>' + input + '</div>';
}

AIX.promptBuild = function() {
  function val(id) { var el = document.getElementById('pf-' + id); return el ? el.value.trim() : ''; }
  var role = val('role'), task = val('task'), context = val('context'),
      constraint = val('constraint');
  var fmt = document.getElementById('pf-format') ? document.getElementById('pf-format').value : '';

  var lines = [];
  if (role) lines.push('你是' + role + '。');
  if (task) lines.push('任务:' + task);
  if (context) lines.push('背景:' + context);
  if (fmt) lines.push('请用「' + fmt + '」的形式输出。');
  if (constraint) lines.push('要求:' + constraint);

  var out = lines.length ? lines.join('\n') : '先在上面填写…';
  var el = document.getElementById('pf-out');
  if (el) el.textContent = out;

  // 启发式评分
  var checks = [
    { ok: !!role, tip: '加上角色(如"资深…")能让回答更专业、更聚焦。' },
    { ok: !!task, tip: '任务是核心,务必写清你具体要它做什么。' },
    { ok: !!context, tip: '补充背景/读者/材料,能大幅减少"答非所问"。' },
    { ok: !!fmt, tip: '指定输出格式(列表/表格/字数),拿到的结果更好用。' },
    { ok: !!constraint, tip: '写明约束(字数、语气、"不要编造")能控制跑偏。' }
  ];
  var score = 0;
  for (var i = 0; i < checks.length; i++) if (checks[i].ok) score++;

  var tips = '';
  for (var j = 0; j < checks.length; j++) if (!checks[j].ok) tips += '<li>' + checks[j].tip + '</li>';

  var sb = document.getElementById('pf-score');
  if (sb) {
    var label = score >= 5 ? '五要素齐全,很完整' : score >= 3 ? '基本够用,还能更好' : '信息偏少,容易答偏';
    sb.innerHTML = '<p style="font-size:14px"><b style="color:var(--accent)">提示词完整度 ' + score + '/5</b> · ' + label + '</p>' +
      (tips ? '<ul style="margin:8px 0 0 1.3em;font-size:13.5px;color:var(--ink-dim)">' + tips + '</ul>' : '<p style="font-size:13px;color:var(--ok);margin-top:6px">✓ 五个要素都说清了。实际使用时再根据返回结果微调即可。</p>');
  }
};

/* ==================== ④ 训练过程可视化 ==================== */
/* 真实最小二乘拟合(纯 JS 解正规方程),用"系数收缩"模拟训练进度,
   直观展示:损失下降、欠拟合、过拟合(验证损失 U 型回升)。 */
var TRN = { n: 20, deg: 3, p: 60, data: null, wfull: null };
var TRN_VAL_N = 40;

function trnGen(n) {
  var xs = [], ys = [];
  for (var i = 0; i < n; i++) {
    var x = (i / (n - 1)) * 2 - 1;
    var y = Math.sin(Math.PI * x * 1.5) + (Math.random() - 0.5) * 0.55;
    xs.push(x); ys.push(y);
  }
  return { xs: xs, ys: ys };
}

function trnFit(xs, ys, deg) {
  var m = deg + 1, n = xs.length;
  var A = [], b = [];
  for (var i = 0; i < m; i++) { A.push(new Array(m).fill(0)); b.push(0); }
  for (var i = 0; i < n; i++) {
    var pows = [1];
    for (var j = 1; j < m; j++) pows.push(pows[j - 1] * xs[i]);
    for (var j = 0; j < m; j++) {
      b[j] += pows[j] * ys[i];
      for (var k = 0; k < m; k++) A[j][k] += pows[j] * pows[k];
    }
  }
  for (var col = 0; col < m; col++) {
    var best = col;
    for (var r = col + 1; r < m; r++) if (Math.abs(A[r][col]) > Math.abs(A[best][col])) best = r;
    if (Math.abs(A[best][col]) < 1e-12) continue;
    var t = A[col]; A[col] = A[best]; A[best] = t;
    var tb = b[col]; b[col] = b[best]; b[best] = tb;
    var piv = A[col][col];
    for (var k = col; k < m; k++) A[col][k] /= piv;
    b[col] /= piv;
    for (var r = 0; r < m; r++) {
      if (r === col) continue;
      var f = A[r][col];
      if (Math.abs(f) < 1e-14) continue;
      for (var k = col; k < m; k++) A[r][k] -= f * A[col][k];
      b[r] -= f * b[col];
    }
  }
  return b;
}

function trnVal(w, x) {
  var s = 0, xp = 1;
  for (var j = 0; j < w.length; j++) { s += w[j] * xp; xp *= x; }
  return s;
}

function trnMse(w, xs, ys) {
  var s = 0;
  for (var i = 0; i < xs.length; i++) { var e = trnVal(w, xs[i]) - ys[i]; s += e * e; }
  return s / xs.length;
}

function trnPrepare() {
  if (!TRN.data || TRN.data.xs.length !== TRN.n) {
    TRN.data = trnGen(TRN.n);
    TRN.val = trnGen(TRN_VAL_N);
  }
  TRN.wfull = trnFit(TRN.data.xs, TRN.data.ys, TRN.deg);
}

function trnWAt(p) {
  var w = [];
  for (var j = 0; j < TRN.wfull.length; j++) w.push(p * TRN.wfull[j]);
  return w;
}

function labTraining() {
  var h = labBack();
  h += '<h1 class="page">训练过程可视化</h1>';
  h += '<p class="sub">数据来自一条带噪声的曲线,我们用<b>多项式拟合</b>去逼近它。拖动"训练进度"看:训练损失一路下降,但验证损失可能<b>先降后升</b>——升起来的那一刻,就是<b>过拟合</b>开始了。</p>';
  h += '<div class="panel">';
  h += '<div class="ctrl"><label>训练进度</label><input type="range" min="0" max="100" step="1" value="' + TRN.p + '" oninput="AIX.trnSet(\'p\',this.value)"><span class="val" id="v-p"></span></div>';
  h += '<div class="ctrl"><label>模型复杂度(多项式次数)</label><input type="range" min="1" max="9" step="1" value="' + TRN.deg + '" oninput="AIX.trnSet(\'deg\',this.value)"><span class="val" id="v-deg"></span></div>';
  h += '<div class="ctrl"><label>数据量(样本数)</label><input type="range" min="8" max="60" step="2" value="' + TRN.n + '" oninput="AIX.trnSet(\'n\',this.value)"><span class="val" id="v-n"></span></div>';
  h += '<div class="trn-grid">';
  h += '<div id="trn-fit"></div>';
  h += '<div id="trn-loss"></div>';
  h += '</div>';
  h += '<div id="trn-readout"></div>';
  h += '</div>';
  h += '<p class="warnnote">这个演示是<b>真实的最小二乘拟合</b>,不是示意:曲线和误差都来自真实计算。"训练进度"用系数向最优解收缩来模拟。试试"高复杂度 + 少量数据",你会看到最典型的过拟合;换成"低复杂度 + 大量数据",曲线就平稳多了。</p>';
  AIX.render(h);
  trnPrepare();
  trnDraw();
}

AIX.trnSet = function(k, v) {
  TRN[k] = k === 'deg' || k === 'n' ? parseInt(v, 10) : parseFloat(v);
  if (k === 'deg' || k === 'n') trnPrepare();
  trnDraw();
};

function trnDraw() {
  ['p', 'deg', 'n'].forEach(function(k) {
    var el = document.getElementById('v-' + k);
    if (el) el.textContent = k === 'deg' ? TRN.deg + ' 次' : k === 'n' ? TRN.n + ' 个' : TRN.p + '%';
  });
  if (!TRN.wfull) return;

  var p = TRN.p / 100;
  var w = trnWAt(p);
  var data = TRN.data, val = TRN.val;
  var lossT = trnMse(w, data.xs, data.ys);
  var lossV = trnMse(w, val.xs, val.ys);

  /* ---- 图1:拟合曲线 ---- */
  var W1 = 600, H1 = 240, padL = 36, padR = 14, padT = 16, padB = 30;
  var x0 = -1.15, x1 = 1.15, y0 = -1.7, y1 = 1.7;
  function px(x) { return padL + (x - x0) / (x1 - x0) * (W1 - padL - padR); }
  function py(y) { return padT + (y1 - y) / (y1 - y0) * (H1 - padT - padB); }
  var svg1 = '<figure class="fig"><svg viewBox="0 0 ' + W1 + ' ' + H1 + '" width="100%">';
  svg1 += '<line class="f-box" x1="' + px(x0) + '" y1="' + py(0) + '" x2="' + px(x1) + '" y2="' + py(0) + '"/>';
  svg1 += '<line class="f-box" x1="' + px(0) + '" y1="' + py(y0) + '" x2="' + px(0) + '" y2="' + py(y1) + '"/>';
  var curve = '';
  for (var i = 0; i <= 80; i++) {
    var cx = x0 + (x1 - x0) * i / 80;
    var cyy = trnVal(w, cx);
    curve += (i === 0 ? 'M' : 'L') + px(cx).toFixed(1) + ',' + py(Math.max(y0, Math.min(y1, cyy))).toFixed(1);
  }
  svg1 += '<path class="f-arr" d="' + curve + '" fill="none" stroke-width="2.2"/>';
  for (var k = 0; k < data.xs.length; k++) {
    svg1 += '<circle cx="' + px(data.xs[k]).toFixed(1) + '" cy="' + py(data.ys[k]).toFixed(1) + '" r="4" class="f-line"/>';
  }
  for (var v = 0; v < val.xs.length; v++) {
    svg1 += '<circle cx="' + px(val.xs[v]).toFixed(1) + '" cy="' + py(val.ys[v]).toFixed(1) + '" r="3" fill="none" class="f-txt" stroke-width="1"/>';
  }
  svg1 += '<text class="f-txt" x="' + (padL + 4) + '" y="' + (padT + 14) + '" style="font-size:12px">红线 = 当前模型</text>';
  svg1 += '<text class="f-dim" x="' + (W1 - padR - 130) + '" y="' + (padT + 14) + '" style="font-size:12px">实心=训练样本 空心=验证样本</text>';
  svg1 += '</svg><figcaption>模型在"训练进度 ' + TRN.p + '%"下的拟合效果</figcaption></figure>';

  /* ---- 图2:损失曲线 ---- */
  var W2 = 600, H2 = 240;
  var curvesT = [], curvesV = [];
  var maxL = 0.01;
  for (var s = 0; s <= 60; s++) {
    var pp = s / 60, ww = trnWAt(pp);
    var lt = trnMse(ww, data.xs, data.ys);
    var lv = trnMse(ww, val.xs, val.ys);
    curvesT.push([pp, lt]); curvesV.push([pp, lv]);
    if (lt > maxL) maxL = lt;
    if (lv > maxL) maxL = lv;
  }
  var yMax = maxL * 1.12;
  function qx(pp) { return padL + pp * (W2 - padL - padR); }
  function qy(l) { return padT + (1 - Math.min(1, l / yMax)) * (H2 - padT - padB); }
  var svg2 = '<figure class="fig"><svg viewBox="0 0 ' + W2 + ' ' + H2 + '" width="100%">';
  svg2 += '<line class="f-box" x1="' + padL + '" y1="' + (H2 - padB) + '" x2="' + (W2 - padR) + '" y2="' + (H2 - padB) + '"/>';
  svg2 += '<line class="f-box" x1="' + padL + '" y1="' + padT + '" x2="' + padL + '" y2="' + (H2 - padB) + '"/>';
  var cT = '', cV = '';
  for (var t = 0; t < curvesT.length; t++) {
    cT += (t === 0 ? 'M' : 'L') + qx(curvesT[t][0]).toFixed(1) + ',' + qy(curvesT[t][1]).toFixed(1);
    cV += (t === 0 ? 'M' : 'L') + qx(curvesV[t][0]).toFixed(1) + ',' + qy(curvesV[t][1]).toFixed(1);
  }
  svg2 += '<path class="f-line" d="' + cT + '" fill="none" stroke-width="2.2"/>';
  svg2 += '<path class="f-arr" d="' + cV + '" fill="none" stroke-width="2.2"/>';
  var cxNow = qx(p);
  svg2 += '<line class="f-dim" x1="' + cxNow.toFixed(1) + '" y1="' + padT + '" x2="' + cxNow.toFixed(1) + '" y2="' + (H2 - padB) + '" stroke-dasharray="3 3"/>';
  svg2 += '<circle cx="' + qx(p).toFixed(1) + '" cy="' + qy(lossT).toFixed(1) + '" r="3.5" class="f-line"/>';
  svg2 += '<circle cx="' + qx(p).toFixed(1) + '" cy="' + qy(lossV).toFixed(1) + '" r="3.5" class="f-arr"/>';
  svg2 += '<text class="f-txt" x="' + (padL + 4) + '" y="' + (padT + 14) + '" style="font-size:12px">训练损失(细)与验证损失(粗红)</text>';
  svg2 += '<text class="f-dim" x="' + (W2 - padR - 120) + '" y="' + (H2 - padB + 16) + '" style="font-size:12px">训练进度 →</text>';
  svg2 += '</svg><figcaption>验证损失若在右侧重新抬头 = 过拟合开始</figcaption></figure>';

  var fitEl = document.getElementById('trn-fit');
  if (fitEl) fitEl.innerHTML = svg1;
  var lossEl = document.getElementById('trn-loss');
  if (lossEl) lossEl.innerHTML = svg2;

  /* ---- 读数与判断 ---- */
  var verdict;
  if (TRN.deg <= 2) verdict = '<span style="color:var(--bad)">模型太简单(欠拟合):两条损失都偏高,加点复杂度。</span>';
  else if (lossV > lossT * 1.8 && TRN.deg >= 6) verdict = '<span style="color:var(--bad)">过拟合明显:验证损失已明显高于训练损失,模型在"背"训练数据。减小复杂度或增加数据。</span>';
  else if (lossV > lossT * 1.3) verdict = '<span style="color:var(--bad)">开始过拟合:验证损失高于训练损失,继续训练收益很小了。</span>';
  else verdict = '<span style="color:var(--ok)">状态健康:两条损失接近,泛化良好。</span>';

  var ro = document.getElementById('trn-readout');
  if (ro) {
    ro.innerHTML = '<p style="font-family:var(--mono);font-size:13.5px;margin-top:6px">' +
      '训练损失 <b style="color:var(--ink)">' + lossT.toFixed(4) + '</b> 　|　 验证损失 <b style="color:var(--ink)">' + lossV.toFixed(4) + '</b><br>' + verdict + '</p>';
  }
}
