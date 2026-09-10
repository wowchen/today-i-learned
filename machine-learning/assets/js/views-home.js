/* 首页视图(散点云+拟合曲线 SVG · 两列模块格 · 翠玉绿/墨绿夜双主题) */
window.ML = window.ML || {};
ML.views = ML.views || {};

ML.views.home = function() {
  var P = ML.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = ML.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < ML.path.length ? ML.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + scatterFitSVG() + '</div>';
  html += '<p class="gh-kicker">机器学习入门 · 大白话讲透</p>';
  html += '<h1 class="gh-title">让机器<em>从数据里学</em></h1>';
  html += '<p class="gh-latin">Data · Learn · Predict</p>';
  html += '<p class="gh-lede">从"人写规则"到"机器学规律"，把机器学习拆成 80 节能讲清的微课：回归与分类、聚类、评估为什么骗人、特征里最隐蔽的坑、神经网络与大模型，最后用完整案例走一遍。<b>算法只是零件，问题定义、数据质量、评估方式才决定成败。</b></p>';
  if (nextLesson && ML.lessons[nextLesson]) {
    var nl = ML.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + ML.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(ML.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + ML.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < ML.modules.length; i++) {
    var m = ML.modules[i];
    var mRead = 0;
    for (var j = 0; j < ML.path.length; j++) {
      if (ML.path[j].indexOf(m.id + '/') === 0 && P.isRead(ML.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + ML.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + ML.esc(m.en || '') + '</div>';
    html += '<p>' + ML.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>回归拟合器、阈值与混淆矩阵、K 均值聚类、过拟合演示。</p>';
  html += '<div class="prog">4 件 · 边学边玩</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('⌒', '线性回归拟合器', 'linear fit');
  html += toolCell('⊞', '阈值与混淆矩阵', 'confusion matrix');
  html += toolCell('◉', 'K 均值聚类演示器', 'k-means');
  html += toolCell('∿', '过拟合演示器', 'overfitting');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不推公式墙、不做算法应试、不教软件操作，也不贩卖"AI 焦虑"。每节五到七分钟，用<b>大白话</b>把机器学习里那些真正重要、却常被讲成"玄学"的东西说清：<b>这个算法适合什么场景、什么时候不该用它、以及怎么判断它到底有没有用。</b></p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>机器学习到底在做什么——以及哪几种情况下它还不如一条简单规则；</li>' +
          '<li>一个模型从问题定义、切分数据、立基线到上线的完整流程；</li>' +
          '<li>回归、分类、聚类各有哪几件代表兵器，分别适合什么场景；</li>' +
          '<li>准确率为什么会骗人、精确率与召回率该怎么权衡、阈值该定在哪；</li>' +
          '<li>特征工程与数据泄漏——那些真正决定成败、却最不出彩的环节。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为机器学习的科普通识，重直觉、判断与流程，不追求算法推导的完整性，也不提供可直接照搬的调参方案。案例数字均为教学演示，工具输出仅用于理解概念，不作为业务决策依据。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>机器学习入门 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  ML.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(gl, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + gl + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 模型在学习:坐标网格 + 散点云(依次生长,训练样本)
   + 拟合曲线(dash 流动,模型学到的规律)+ 曲线上的光点(呼吸)
   描边/填色随主题取 --acc / --acc2 / --acc-soft,
   复用 CSS sphere / grat / wave / core-flow / photon 动画类 */
function scatterFitSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景波纹(向外扩散)
  for (var wr = 40; wr <= 82; wr += 14) {
    svg += '<circle class="wave" cx="100" cy="100" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 40) * 0.08) + 's"/>';
  }

  // 坐标网格
  var grid = '';
  for (var gx = 0; gx <= 4; gx++) grid += '<line x1="' + (36 + gx * 30) + '" y1="44" x2="' + (36 + gx * 30) + '" y2="164" style="stroke:var(--grat);stroke-width:1"/>';
  for (var gy = 0; gy <= 4; gy++) grid += '<line x1="36" y1="' + (44 + gy * 30) + '" x2="156" y2="' + (44 + gy * 30) + '" style="stroke:var(--grat);stroke-width:1"/>';
  svg += '<g class="grat">' + grid + '</g>';

  // 坐标轴
  svg += '<line x1="36" y1="164" x2="166" y2="164" style="stroke:var(--acc2);stroke-width:2" stroke-linecap="round"/>';
  svg += '<line x1="36" y1="164" x2="36" y2="36" style="stroke:var(--acc2);stroke-width:2" stroke-linecap="round"/>';

  // 散点云(训练样本,左下密集 → 右上,依次生长)
  var pts = [[46, 152], [55, 144], [63, 149], [71, 136], [79, 141], [87, 128],
             [95, 133], [103, 118], [111, 123], [119, 108], [127, 113], [135, 98],
             [143, 102], [151, 88]];
  for (var i = 0; i < pts.length; i++) {
    var solid = i % 4 === 0;   // 每四个点做实心强调
    svg += '<circle class="sphere" cx="' + pts[i][0] + '" cy="' + pts[i][1] + '" r="2.6" style="fill:' +
      (solid ? 'var(--acc)' : 'var(--acc-soft)') + ';stroke:var(--acc);stroke-width:1;animation-delay:' +
      (i * 0.07) + 's"/>';
  }

  // 拟合曲线(模型学到的规律,dash 流动)
  svg += '<path class="core-flow" d="M42 157 C 78 142, 102 126, 126 106 S 152 84, 162 74" style="stroke:var(--acc);stroke-width:2.4;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';

  // 曲线上的光点(呼吸)
  svg += '<circle class="photon" cx="90" cy="133" r="2.2" style="fill:var(--acc2);animation-delay:.2s"/>';
  svg += '<circle class="photon" cx="138" cy="96" r="2.2" style="fill:var(--acc2);animation-delay:.7s"/>';

  // 装饰字符
  svg += '<text x="144" y="40" style="fill:var(--acc);font-size:12;font-family:serif;opacity:.55">y</text>';
  svg += '<text x="30" y="182" style="fill:var(--acc2);font-size:10;font-family:monospace;opacity:.45">n=80</text>';

  svg += '</svg>';
  return svg;
}
