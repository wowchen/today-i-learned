/* 首页视图(柱状图+折线 SVG · 两列模块格 · 琥珀金/亮琥珀双主题) */
window.DAT = window.DAT || {};
DAT.views = DAT.views || {};

DAT.views.home = function() {
  var P = DAT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = DAT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < DAT.path.length ? DAT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + dataChartSVG() + '</div>';
  html += '<p class="gh-kicker">数据分析通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">跟数据<em>打交道</em></h1>';
  html += '<p class="gh-latin">Measure · Compare · Question</p>';
  html += '<p class="gh-lede">从平均数和分母，到图表怎么选、相关为什么不是因果，再到指标口径、分析叙事与营销实战，把"怎么跟数据打交道"拆成 49 节能讲清的微课。<b>懂数字背后的分母，就懂了数据分析的地基。</b></p>';
  if (nextLesson && DAT.lessons[nextLesson]) {
    var nl = DAT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + DAT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(DAT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + DAT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < DAT.modules.length; i++) {
    var m = DAT.modules[i];
    var mRead = 0;
    for (var j = 0; j < DAT.path.length; j++) {
      if (DAT.path[j].indexOf(m.id + '/') === 0 && P.isRead(DAT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + DAT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + DAT.esc(m.en || '') + '</div>';
    html += '<p>' + DAT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>图表选择器、指标口径体检、样本量计算、统计陷阱演示。</p>';
  html += '<div class="prog">4 件 · 边学边玩</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◫', '图表类型选择器', 'chart picker');
  html += toolCell('✎', '指标口径体检', 'metric check');
  html += toolCell('N', '样本量计算器', 'sample size');
  html += toolCell('⇄', '统计陷阱演示器', 'trap demo');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不堆公式、不教软件操作、不贩卖"大数据焦虑"。每节五分钟，用<b>大白话</b>把数据分析里那些真正重要、却常被讲成"玄学"的道理讲清：<b>为什么</b>这个数这么算、这张图这么画、这句话这么写。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>平均数、分母、抽样——统计直觉的地基怎么打；</li>' +
          '<li>图表是放大镜不是装饰：什么数据配什么图，别人怎么用图骗你；</li>' +
          '<li>相关不等于因果，混杂因子、辛普森悖论长什么样；</li>' +
          '<li>指标口径、北极星、古德哈特定律——怎么定一个不会打架的指标；</li>' +
          '<li>怎么把一列数字写成一份能说服人的分析报告。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为数据分析科普通识，重直觉与实战案例，不追求教科书式穷尽。所有案例数字均为教学演示，方法比工具名更长寿。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>数据分析通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  DAT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 数据生长:方格纸底纹 + 五根柱(依次生长)+ 上升折线(dash 流动)
   + 端点光点(呼吸)。描边/填色随主题取 --acc / --acc2 / --acc-soft,
   复用 CSS sphere / grat / wave / core-flow / photon 动画类 */
function dataChartSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var bx = 38, by = 152;   // 坐标轴原点(左下)
  var axisW = 128, axisH = 96;

  // 背景波纹(向外扩散)
  for (var wr = 40; wr <= 82; wr += 14) {
    svg += '<circle class="wave" cx="100" cy="100" r="' + wr + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((wr - 40) * 0.08) + 's"/>';
  }

  // 方格纸底纹(淡网格)
  var grid = '';
  for (var gx = 0; gx <= 4; gx++) grid += '<line x1="' + (bx + gx * axisW / 4) + '" y1="' + (by - axisH) + '" x2="' + (bx + gx * axisW / 4) + '" y2="' + by + '" style="stroke:var(--grat);stroke-width:1"/>';
  for (var gy = 0; gy <= 3; gy++) grid += '<line x1="' + bx + '" y1="' + (by - gy * axisH / 3) + '" x2="' + (bx + axisW) + '" y2="' + (by - gy * axisH / 3) + '" style="stroke:var(--grat);stroke-width:1"/>';
  svg += '<g class="grat">' + grid + '</g>';

  // 坐标轴
  svg += '<line x1="' + bx + '" y1="' + by + '" x2="' + (bx + axisW + 8) + '" y2="' + by + '" style="stroke:var(--acc2);stroke-width:2" stroke-linecap="round"/>';
  svg += '<line x1="' + bx + '" y1="' + by + '" x2="' + bx + '" y2="' + (by - axisH - 8) + '" style="stroke:var(--acc2);stroke-width:2" stroke-linecap="round"/>';

  // 五根柱(依次升高,最后一根实心强调)
  var bars = [34, 52, 44, 70, 86];
  for (var i = 0; i < bars.length; i++) {
    var bw = 16, gap = 8;
    var x = bx + 12 + i * (bw + gap);
    var h = bars[i];
    svg += '<rect class="sphere" x="' + x + '" y="' + (by - h) + '" width="' + bw + '" height="' + h + '" rx="3" style="fill:' + (i === bars.length - 1 ? 'var(--acc)' : 'var(--acc-soft)') + ';stroke:var(--acc);stroke-width:1.2;animation-delay:' + (i * 0.12) + 's"/>';
  }

  // 上升折线(穿过柱顶,dash 流动)
  var pts = [[46, 128], [70, 110], [94, 118], [118, 92], [142, 74], [158, 60]];
  var path = 'M';
  for (var p = 0; p < pts.length; p++) {
    path += (p > 0 ? ' L' : '') + pts[p][0] + ' ' + pts[p][1];
  }
  svg += '<path class="core-flow" d="' + path + '" style="stroke:var(--acc);stroke-width:2.2;fill:none" stroke-linejoin="round" stroke-linecap="round"/>';

  // 折线节点光点
  for (var q = 0; q < pts.length; q++) {
    svg += '<circle class="photon" cx="' + pts[q][0] + '" cy="' + pts[q][1] + '" r="2.2" style="fill:var(--acc2);animation-delay:' + (q * 0.25) + 's"/>';
  }

  // 装饰字符
  svg += '<text x="160" y="36" style="fill:var(--acc);font-size:12;font-family:serif;opacity:.55">Σ</text>';
  svg += '<text x="26" y="176" style="fill:var(--acc2);font-size:10;font-family:monospace;opacity:.45">n=49</text>';

  svg += '</svg>';
  return svg;
}
