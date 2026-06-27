/* 工具视图:四个互动实验(黄金螺旋 / π蒙特卡洛 / 函数绘图 / 素数筛)+ 术语/搜索/设置/模块 */
window.MATH = window.MATH || {};
MATH.views = MATH.views || {};

/* ---- 取当前主题颜色(让画布跟随深浅色) ---- */
function labColors() {
  var cs = getComputedStyle(document.documentElement);
  function v(n) { return cs.getPropertyValue(n).trim(); }
  return { acc: v('--acc'), acc2: v('--acc2'), ink: v('--ink'), note: v('--note'),
           line: v('--line'), paper: v('--paper'), bg: v('--bg') };
}
function hiDPI(canvas, w, h) {
  var dpr = window.devicePixelRatio || 1;
  canvas.width = w * dpr; canvas.height = h * dpr;
  canvas.style.width = '100%'; canvas.style.height = 'auto';
  var ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

/* ===== 实验总页 ===== */
MATH.views.calc = function() {
  var html = '<div class="tools-page">';
  html += '<h2>互动实验台</h2>';
  html += '<p class="calc-intro">数学讲求"动手才懂"。这里四个小实验全部在你本地浏览器里实时运算,没有任何后端。<b>边玩边看概念长出来</b>:黄金比怎么从兔子数列里冒出来、随机撒点怎么算出 π、函数长什么样、素数怎么被筛出来。</p>';

  // 1. 黄金螺旋
  html += '<div class="calc-card">';
  html += '<h3><span class="g">φ</span>黄金螺旋与斐波那契</h3>';
  html += '<p class="lab-desc">斐波那契数列 1,1,2,3,5,8,13… 每一项是前两项之和。用这些数当边长拼正方形,再连成弧,就是<b>黄金螺旋</b>;相邻两项之比会越来越接近黄金比 φ ≈ 1.618。</p>';
  html += '<div class="range-row"><label>项数 n</label><input type="range" id="gs-n" min="4" max="12" value="9" oninput="MATH.drawGolden()"><span class="rv" id="gs-n-v">9</span></div>';
  html += '<div class="lab-canvas-wrap"><canvas id="gs-canvas"></canvas></div>';
  html += '<div class="lab-readout" id="gs-readout"></div>';
  html += '</div>';

  // 2. π 蒙特卡洛
  html += '<div class="calc-card">';
  html += '<h3><span class="g">π</span>蒙特卡洛估算 π</h3>';
  html += '<p class="lab-desc">往正方形里随机撒点,落进内切四分之一圆的比例 ≈ 圆面积/方面积 = π/4。撒得越多,估得越准 —— 这就是用随机算确定的"蒙特卡洛方法"。</p>';
  html += '<div class="calc-row" style="margin-bottom:12px">';
  html += '<label style="font-size:.84rem;color:var(--note)">每次撒点 <input type="number" id="mc-batch" value="2000" style="width:90px;padding:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink)"></label>';
  html += '<button class="calc-btn" onclick="MATH.dropPoints()">撒点</button>';
  html += '<button class="calc-btn ghost" onclick="MATH.resetMC()">重置</button>';
  html += '</div>';
  html += '<div class="lab-canvas-wrap"><canvas id="mc-canvas"></canvas></div>';
  html += '<div class="lab-readout" id="mc-readout"></div>';
  html += '</div>';

  // 3. 函数绘图
  html += '<div class="calc-card">';
  html += '<h3><span class="g">∫</span>函数绘图器</h3>';
  html += '<p class="lab-desc">输入一个 f(x),实时画出它的样子。支持 + − * / ^、括号,以及 sin cos tan sqrt abs exp log(自然对数) 和常数 pi、e。试试 <code>sin(x)</code>、<code>x^2</code>、<code>sin(x)/x</code>、<code>exp(-x*x)</code>。</p>';
  html += '<div class="calc-inputs">';
  html += '<label style="grid-column:1/-1">f(x) = <input type="text" id="fp-expr" value="sin(x)"></label>';
  html += '<label>x 最小 <input type="number" id="fp-xmin" value="-6.5"></label>';
  html += '<label>x 最大 <input type="number" id="fp-xmax" value="6.5"></label>';
  html += '</div>';
  html += '<div class="calc-row" style="margin-bottom:8px"><button class="calc-btn" onclick="MATH.plot()">绘制</button></div>';
  html += '<div class="lab-canvas-wrap"><canvas id="fp-canvas"></canvas></div>';
  html += '<div class="lab-readout" id="fp-readout"></div>';
  html += '</div>';

  // 4. 素数筛
  html += '<div class="calc-card">';
  html += '<h3><span class="g">℘</span>埃拉托色尼筛法</h3>';
  html += '<p class="lab-desc">从 2 开始,每找到一个素数,就把它的倍数都划掉,剩下的还是素数。两千年前的古老算法,至今仍是找素数的基础。素数个数 π(N) 大致随 N/ln N 增长。</p>';
  html += '<div class="calc-row" style="margin-bottom:12px">';
  html += '<label style="font-size:.84rem;color:var(--note)">上限 N <input type="number" id="sv-n" value="120" style="width:90px;padding:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink)"></label>';
  html += '<button class="calc-btn" onclick="MATH.sieve()">开筛</button>';
  html += '</div>';
  html += '<div class="lab-canvas-wrap"><canvas id="sv-canvas"></canvas></div>';
  html += '<div class="lab-readout" id="sv-readout"></div>';
  html += '</div>';

  html += '<p class="calc-note">说明:以上均为概念演示与近似估算,用于建立直觉,不追求数值精度或严格证明。</p>';
  html += '</div>';
  MATH.render(html);

  // 初始化
  MATH.drawGolden();
  MATH.resetMC();
  MATH.plot();
  MATH.sieve();
};

/* ===== 1. 黄金螺旋 ===== */
MATH.drawGolden = function() {
  var n = parseInt(document.getElementById('gs-n').value, 10);
  document.getElementById('gs-n-v').textContent = n;
  var canvas = document.getElementById('gs-canvas');
  var W = 720, H = 400;
  var ctx = hiDPI(canvas, W, H);
  var col = labColors();
  ctx.clearRect(0, 0, W, H);

  // 斐波那契
  var fib = [1, 1];
  for (var i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);

  // 用 U,L,D,R 顺序拼正方形(y 向上的布局坐标)
  var sq = [{ x: 0, y: 0, s: 1 }, { x: 1, y: 0, s: 1 }];
  var bb = { x0: 0, y0: 0, x1: 2, y1: 1 };
  var dirs = ['U', 'L', 'D', 'R'];
  for (var k = 2; k < n; k++) {
    var s = fib[k], d = dirs[(k - 2) % 4], nx, ny;
    if (d === 'U') { nx = bb.x0; ny = bb.y1; bb.y1 += s; }
    else if (d === 'L') { nx = bb.x0 - s; ny = bb.y0; bb.x0 -= s; }
    else if (d === 'D') { nx = bb.x0; ny = bb.y0 - s; bb.y0 -= s; }
    else { nx = bb.x1; ny = bb.y0; bb.x1 += s; }
    sq.push({ x: nx, y: ny, s: s });
  }

  // 适配画布
  var bw = bb.x1 - bb.x0, bh = bb.y1 - bb.y0;
  var pad = 30;
  var sc = Math.min((W - 2 * pad) / bw, (H - 2 * pad) / bh);
  var offx = pad + (W - 2 * pad - bw * sc) / 2;
  var offy = pad + (H - 2 * pad - bh * sc) / 2;
  function PX(lx) { return offx + (lx - bb.x0) * sc; }
  function PY(ly) { return H - offy - (ly - bb.y0) * sc; } // y 翻转

  // 画正方形
  ctx.lineWidth = 1;
  ctx.strokeStyle = col.acc;
  ctx.fillStyle = col.note;
  ctx.font = '12px ' + 'monospace';
  for (var q = 0; q < sq.length; q++) {
    var X = PX(sq[q].x), Y = PY(sq[q].y + sq[q].s), side = sq[q].s * sc;
    ctx.globalAlpha = 0.9;
    ctx.strokeRect(X, Y, side, side);
    if (side > 26) {
      ctx.globalAlpha = 0.55;
      ctx.fillText(String(sq[q].s), X + 5, Y + 15);
    }
  }
  ctx.globalAlpha = 1;

  // 画黄金螺旋(对数螺旋,极点取大矩形对角线与去掉最大正方形后内矩形对角线的交点)
  var last = sq[sq.length - 1];
  var inner = { x0: bb.x0, y0: bb.y0, x1: bb.x1, y1: bb.y1 };
  // 还原去掉最后一个正方形前的内矩形
  var d2 = dirs[(n - 1 - 2) % 4];
  if (d2 === 'U') inner.y1 -= last.s;
  else if (d2 === 'L') inner.x0 += last.s;
  else if (d2 === 'D') inner.y0 += last.s;
  else inner.x1 -= last.s;
  // 两条对角线求交(布局坐标)
  function inter(ax, ay, bx, by, cx, cy, dx, dy) {
    var d = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
    if (Math.abs(d) < 1e-9) return null;
    var t = ((cx - ax) * (dy - cy) - (cy - ay) * (dx - cx)) / d;
    return { x: ax + t * (bx - ax), y: ay + t * (by - ay) };
  }
  var pole = inter(bb.x0, bb.y0, bb.x1, bb.y1, inner.x0, inner.y1, inner.x1, inner.y0)
          || { x: (bb.x0 + bb.x1) / 2, y: (bb.y0 + bb.y1) / 2 };

  var PHI = (1 + Math.sqrt(5)) / 2;
  var b = Math.log(PHI) / (Math.PI / 2); // r = a e^{bθ}
  ctx.strokeStyle = col.acc2;
  ctx.lineWidth = 2;
  ctx.beginPath();
  var started = false, a = sc * 0.04;
  for (var deg = 0; deg <= 360 * (n - 1); deg += 4) {
    var th = deg * Math.PI / 180;
    var r = a * Math.exp(b * th);
    if (r > Math.max(bw, bh) * sc) break;
    var lx = pole.x + (r / sc) * Math.cos(th);
    var ly = pole.y + (r / sc) * Math.sin(th);
    var px = PX(lx), py = PY(ly);
    if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
  }
  ctx.stroke();

  var ratio = fib[n - 1] / fib[n - 2];
  document.getElementById('gs-readout').innerHTML =
    '<span>F(n) =</span> <b>' + fib[n - 1] + '</b>' +
    '<span>F(n)/F(n−1) =</span> <b>' + ratio.toFixed(6) + '</b>' +
    '<span>φ =</span> <b>1.618034</b>' +
    '<span>差 =</span> <b>' + Math.abs(ratio - PHI).toFixed(6) + '</b>';
};

/* ===== 2. π 蒙特卡洛 ===== */
MATH._mc = { total: 0, inside: 0 };
MATH.resetMC = function() {
  MATH._mc = { total: 0, inside: 0 };
  var canvas = document.getElementById('mc-canvas');
  var S = 400; var ctx = hiDPI(canvas, S, S);
  var col = labColors();
  ctx.clearRect(0, 0, S, S);
  ctx.strokeStyle = col.line; ctx.lineWidth = 1; ctx.strokeRect(0.5, 0.5, S - 1, S - 1);
  ctx.strokeStyle = col.note; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(0, S, S, -Math.PI / 2, 0); ctx.stroke(); // 四分之一圆
  MATH._mcCtx = ctx; MATH._mcS = S;
  updateMCReadout();
};
MATH.dropPoints = function() {
  var batch = parseInt(document.getElementById('mc-batch').value, 10);
  if (isNaN(batch) || batch < 1) batch = 1000;
  if (batch > 50000) batch = 50000;
  var ctx = MATH._mcCtx, S = MATH._mcS, col = labColors();
  for (var i = 0; i < batch; i++) {
    var x = Math.random(), y = Math.random();
    var inC = (x * x + y * y) <= 1;
    MATH._mc.total++; if (inC) MATH._mc.inside++;
    ctx.fillStyle = inC ? col.acc2 : col.note;
    ctx.globalAlpha = inC ? 0.7 : 0.4;
    var px = x * S, py = S - y * S;
    ctx.fillRect(px, py, 1.6, 1.6);
  }
  ctx.globalAlpha = 1;
  updateMCReadout();
};
function updateMCReadout() {
  var t = MATH._mc.total, ins = MATH._mc.inside;
  var est = t > 0 ? 4 * ins / t : 0;
  document.getElementById('mc-readout').innerHTML =
    '<span>总点数</span> <b>' + t + '</b>' +
    '<span>圆内</span> <b>' + ins + '</b>' +
    '<span>π ≈ 4×圆内/总数 =</span> <b>' + (t > 0 ? est.toFixed(5) : '—') + '</b>' +
    '<span>真值</span> <b>3.14159</b>' +
    (t > 0 ? '<span>误差</span> <b>' + Math.abs(est - Math.PI).toFixed(5) + '</b>' : '');
}

/* ===== 3. 函数绘图(自带安全表达式解析,不用 eval) ===== */
MATH.plot = function() {
  var canvas = document.getElementById('fp-canvas');
  var W = 720, H = 420; var ctx = hiDPI(canvas, W, H);
  var col = labColors();
  ctx.clearRect(0, 0, W, H);
  var rd = document.getElementById('fp-readout');

  var xmin = parseFloat(document.getElementById('fp-xmin').value);
  var xmax = parseFloat(document.getElementById('fp-xmax').value);
  if (isNaN(xmin) || isNaN(xmax) || xmax <= xmin) { rd.innerHTML = '<b style="color:var(--acc)">x 范围无效</b>'; return; }
  var src = document.getElementById('fp-expr').value;
  var fn;
  try { fn = MATH._compile(src); } catch (e) { rd.innerHTML = '<b style="color:var(--acc)">表达式看不懂:' + MATH.esc(String(e.message || e)) + '</b>'; return; }

  // 采样,定 y 范围
  var N = 600, xs = [], ys = [], ymin = Infinity, ymax = -Infinity;
  for (var i = 0; i <= N; i++) {
    var x = xmin + (xmax - xmin) * i / N;
    var y;
    try { y = fn(x); } catch (e2) { y = NaN; }
    xs.push(x); ys.push(y);
    if (isFinite(y)) { if (y < ymin) ymin = y; if (y > ymax) ymax = y; }
  }
  if (!isFinite(ymin) || !isFinite(ymax)) { rd.innerHTML = '<b style="color:var(--acc)">这个函数在该区间没有有限取值</b>'; return; }
  if (ymin === ymax) { ymin -= 1; ymax += 1; }
  var ypad = (ymax - ymin) * 0.1; ymin -= ypad; ymax += ypad;

  var pad = 28;
  function PX(x) { return pad + (x - xmin) / (xmax - xmin) * (W - 2 * pad); }
  function PY(y) { return H - pad - (y - ymin) / (ymax - ymin) * (H - 2 * pad); }

  // 网格 + 坐标轴
  ctx.strokeStyle = col.line; ctx.lineWidth = 1; ctx.beginPath();
  for (var gx = 0; gx <= 8; gx++) { var X = pad + gx / 8 * (W - 2 * pad); ctx.moveTo(X, pad); ctx.lineTo(X, H - pad); }
  for (var gy = 0; gy <= 6; gy++) { var Y = pad + gy / 6 * (H - 2 * pad); ctx.moveTo(pad, Y); ctx.lineTo(W - pad, Y); }
  ctx.stroke();
  ctx.strokeStyle = col.note; ctx.lineWidth = 1.4; ctx.beginPath();
  if (ymin < 0 && ymax > 0) { ctx.moveTo(pad, PY(0)); ctx.lineTo(W - pad, PY(0)); }
  if (xmin < 0 && xmax > 0) { ctx.moveTo(PX(0), pad); ctx.lineTo(PX(0), H - pad); }
  ctx.stroke();

  // 曲线
  ctx.strokeStyle = col.acc2; ctx.lineWidth = 2; ctx.beginPath();
  var pen = false;
  for (var j = 0; j <= N; j++) {
    if (!isFinite(ys[j])) { pen = false; continue; }
    var px = PX(xs[j]), py = PY(ys[j]);
    if (py < pad - 60 || py > H - pad + 60) { pen = false; continue; }
    if (!pen) { ctx.moveTo(px, py); pen = true; } else ctx.lineTo(px, py);
  }
  ctx.stroke();
  rd.innerHTML = '<span>f(x) =</span> <b>' + MATH.esc(src) + '</b>' +
    '<span>x ∈</span> <b>[' + xmin + ', ' + xmax + ']</b>' +
    '<span>y ∈</span> <b>[' + ymin.toFixed(2) + ', ' + ymax.toFixed(2) + ']</b>';
};

/* 极简递归下降解析:expr→term→factor→power→base */
MATH._compile = function(src) {
  var s = src.toLowerCase().replace(/\s+/g, '');
  var pos = 0;
  var FUN = { sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos,
    atan: Math.atan, sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp, log: Math.log, ln: Math.log,
    log10: function(v){return Math.log(v)/Math.LN10;}, sign: Math.sign, floor: Math.floor, round: Math.round };
  function peek() { return s[pos]; }
  function eat(c) { if (s[pos] === c) { pos++; return true; } return false; }
  function expr() {
    var v = term();
    while (peek() === '+' || peek() === '-') { var op = s[pos++]; var r = term(); v = bin(op, v, r); }
    return v;
  }
  function term() {
    var v = power();
    while (peek() === '*' || peek() === '/') { var op = s[pos++]; var r = power(); v = bin(op, v, r); }
    return v;
  }
  function power() {
    var v = unary();
    if (peek() === '^') { pos++; var r = power(); var a = v; v = function(x){ return Math.pow(a(x), r(x)); }; }
    return v;
  }
  function unary() {
    if (eat('-')) { var u = unary(); return function(x){ return -u(x); }; }
    if (eat('+')) return unary();
    return base();
  }
  function base() {
    if (eat('(')) { var v = expr(); if (!eat(')')) throw new Error('缺少右括号'); return v; }
    // 数字
    var m = /^[0-9]*\.?[0-9]+/.exec(s.slice(pos));
    if (m) { pos += m[0].length; var num = parseFloat(m[0]); return function(){ return num; }; }
    // 标识符
    var id = /^[a-z_][a-z0-9_]*/.exec(s.slice(pos));
    if (id) {
      var name = id[0]; pos += name.length;
      if (name === 'x') return function(x){ return x; };
      if (name === 'pi') return function(){ return Math.PI; };
      if (name === 'e') return function(){ return Math.E; };
      if (FUN[name]) {
        if (!eat('(')) throw new Error(name + ' 后要加括号');
        var arg = expr(); if (!eat(')')) throw new Error('缺少右括号');
        var f = FUN[name]; return function(x){ return f(arg(x)); };
      }
      throw new Error('未知符号 ' + name);
    }
    throw new Error('无法解析');
  }
  function bin(op, a, b) {
    if (op === '+') return function(x){ return a(x) + b(x); };
    if (op === '-') return function(x){ return a(x) - b(x); };
    if (op === '*') return function(x){ return a(x) * b(x); };
    return function(x){ var d = b(x); return d === 0 ? NaN : a(x) / d; };
  }
  var ast = expr();
  if (pos < s.length) throw new Error('多余字符 "' + s.slice(pos) + '"');
  return ast;
};

/* ===== 4. 素数筛 ===== */
MATH.sieve = function() {
  var N = parseInt(document.getElementById('sv-n').value, 10);
  if (isNaN(N) || N < 2) N = 2;
  if (N > 1000) N = 1000;
  document.getElementById('sv-n').value = N;
  var isC = new Array(N + 1).fill(false);
  for (var p = 2; p * p <= N; p++) if (!isC[p]) for (var m = p * p; m <= N; m += p) isC[m] = true;
  var primes = [];
  for (var i = 2; i <= N; i++) if (!isC[i]) primes.push(i);

  var canvas = document.getElementById('sv-canvas');
  var cols = Math.ceil(Math.sqrt(N * 720 / 360));
  cols = Math.min(Math.max(cols, 10), 30);
  var rows = Math.ceil((N - 1) / cols);
  var W = 720, cell = W / cols, H = Math.max(rows * cell, 40);
  var ctx = hiDPI(canvas, W, H);
  var col = labColors();
  ctx.clearRect(0, 0, W, H);
  ctx.font = (cell < 26 ? 9 : 11) + 'px monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (var v = 2; v <= N; v++) {
    var idx = v - 2, cx = (idx % cols) * cell, cy = Math.floor(idx / cols) * cell;
    var prime = !isC[v];
    ctx.fillStyle = prime ? col.acc2 : col.paper;
    ctx.globalAlpha = prime ? 0.16 : 1;
    ctx.fillRect(cx + 1, cy + 1, cell - 2, cell - 2);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = col.line; ctx.lineWidth = 1; ctx.strokeRect(cx + 0.5, cy + 0.5, cell - 1, cell - 1);
    if (cell >= 18) { ctx.fillStyle = prime ? col.acc2 : col.note;
      ctx.globalAlpha = prime ? 1 : 0.5; ctx.fillText(String(v), cx + cell / 2, cy + cell / 2 + 1); ctx.globalAlpha = 1; }
  }
  var approx = N / Math.log(N);
  document.getElementById('sv-readout').innerHTML =
    '<span>N =</span> <b>' + N + '</b>' +
    '<span>素数个数 π(N) =</span> <b>' + primes.length + '</b>' +
    '<span>最大素数</span> <b>' + primes[primes.length - 1] + '</b>' +
    '<span>N/ln N ≈</span> <b>' + approx.toFixed(1) + '</b>';
};

/* ===== 模块页 ===== */
MATH.views.module = function(id) {
  var mod = MATH.modules.find(function(m) { return m.id === id; });
  if (!mod) { MATH.views.home(); return; }
  var P = MATH.progress();
  var lessons = MATH.path.filter(function(p) { return p.indexOf(id + '/') === 0; });
  var html = '<div class="module-page">';
  html += '<a class="back" href="#/">← 返回首页</a>';
  html += '<h2>' + MATH.esc(mod.title) + '</h2>';
  html += '<p class="module-desc">' + MATH.esc(mod.desc) + '</p>';
  html += '<ul class="lesson-list">';
  for (var i = 0; i < lessons.length; i++) {
    var lid = lessons[i], l = MATH.lessons[lid];
    var title = l ? l.title : lid.split('/')[1];
    var read = P.isRead(lid), available = !!l;
    html += '<li class="' + (read ? 'read' : '') + (available ? '' : ' locked') + '">';
    html += '<span class="num">' + (i + 1) + '</span>';
    if (available) html += '<a href="#/l/' + lid + '">' + MATH.esc(title) + '</a>';
    else html += '<span class="title">' + MATH.esc(title) + '</span>';
    if (read) html += '<span class="done-mark">✓</span>';
    html += '</li>';
  }
  html += '</ul></div>';
  MATH.render(html);
};

/* ===== 术语 ===== */
MATH.views.terms = function() {
  var html = '<div class="tools-page">';
  html += '<h2>公式 / 概念速查</h2>';
  html += '<input type="text" class="term-search" placeholder="搜索术语,如 极限 / 导数 / 黄金比 / 素数" oninput="MATH.filterTerms(this.value)">';
  html += '<div id="term-list">' + renderTermList(MATH.terms) + '</div></div>';
  MATH.render(html);
};
MATH.filterTerms = function(q) {
  var filtered = MATH.terms;
  if (q) { q = q.toLowerCase();
    filtered = MATH.terms.filter(function(t) {
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
    html += '<div class="term-name">' + MATH.esc(t.name) + ' <span class="term-en">' + MATH.esc(t.en) + '</span></div>';
    html += '<div class="term-def">' + MATH.esc(t.def) + '</div>';
    if (t.analogy) html += '<div class="term-analogy">' + MATH.esc(t.analogy) + '</div>';
    html += '</div>';
  }
  return html + '</div>';
}
MATH.views.myTerms = function() {
  var P = MATH.progress(); var collected = [];
  for (var i = 0; i < MATH.terms.length; i++) if (P.hasTerm(MATH.terms[i].id)) collected.push(MATH.terms[i]);
  var html = '<div class="tools-page">';
  html += '<h2>我的收藏 (' + collected.length + ')</h2>';
  if (collected.length === 0) html += '<p class="empty-hint">还没有收藏。在课时里点击带虚线的术语即可收藏。</p>';
  else html += renderTermList(collected);
  html += '</div>';
  MATH.render(html);
};

/* ===== 搜索 ===== */
MATH.views.search = function() {
  var html = '<div class="tools-page">';
  html += '<h2>搜索</h2>';
  html += '<input type="text" class="search-input" placeholder="输入关键词,如 极限 / 概率 / 矩阵 / 无穷" oninput="MATH.doSearch(this.value)" autofocus>';
  html += '<div id="search-results"></div></div>';
  MATH.render(html);
};
MATH.doSearch = function(q) {
  var el = document.getElementById('search-results');
  if (!q || q.length < 1) { el.innerHTML = ''; return; }
  var results = MATH.search(q);
  if (results.length === 0) { el.innerHTML = '<p class="empty-hint">未找到匹配内容</p>'; return; }
  var html = '<ul class="search-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    if (r.type === 'lesson') html += '<li><a href="#/l/' + r.id + '">' + MATH.esc(r.title) + '</a> <span class="search-type">课时</span></li>';
    else html += '<li><span class="search-term">' + MATH.esc(r.title) + '</span> <span class="search-type">术语</span></li>';
  }
  el.innerHTML = html + '</ul>';
};

/* ===== 设置 ===== */
MATH.views.settings = function() {
  var P = MATH.progress(); var prefs = P.getPrefs();
  var theme = prefs.theme || (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  var fs = prefs.fontSize || 'm';
  var html = '<div class="tools-page"><h2>设置</h2>';
  html += '<div class="setting-row"><label>主题</label>';
  html += '<button class="setting-btn' + (theme === 'dark' ? ' active' : '') + '" onclick="MATH.setTheme(\'dark\')">深色 · 金</button>';
  html += '<button class="setting-btn' + (theme === 'light' ? ' active' : '') + '" onclick="MATH.setTheme(\'light\')">浅色 · 朱红</button></div>';
  html += '<div class="setting-row"><label>字号</label>';
  html += '<button class="setting-btn' + (fs === 's' ? ' active' : '') + '" onclick="MATH.setFontSize(\'s\')">小</button>';
  html += '<button class="setting-btn' + (fs === 'm' ? ' active' : '') + '" onclick="MATH.setFontSize(\'m\')">中</button>';
  html += '<button class="setting-btn' + (fs === 'l' ? ' active' : '') + '" onclick="MATH.setFontSize(\'l\')">大</button></div>';
  html += '<div class="setting-row"><label>数据</label>';
  html += '<button class="setting-btn" onclick="MATH.exportData()">导出进度</button>';
  html += '<button class="setting-btn danger" onclick="MATH.clearData()">清除数据</button></div>';
  html += '</div>';
  MATH.render(html);
};
MATH.setTheme = function(t) { document.documentElement.dataset.theme = t; MATH.progress().setPref('theme', t); MATH.views.settings(); };
MATH.setFontSize = function(s) { document.documentElement.dataset.fs = s; MATH.progress().setPref('fontSize', s); MATH.views.settings(); };
MATH.exportData = function() {
  var data = MATH.progress().export();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'math-progress-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
};
MATH.clearData = function() {
  if (confirm('确定要清除所有学习数据吗?此操作不可恢复。')) {
    localStorage.removeItem('math.progress.v1');
    window.location.reload();
  }
};
