/* 首页视图(衬线优雅 · 太阳系轨道 SVG · 两列模块格 · 靛蓝/金琥珀双主题) */
window.AST = window.AST || {};
AST.views = AST.views || {};

AST.views.home = function() {
  var P = AST.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = AST.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < AST.path.length ? AST.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + cosmosSVG() + '</div>';
  html += '<p class="gh-kicker">科普通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">仰望<em>星河</em></h1>';
  html += '<p class="gh-latin">From · Earth · to · the · Edge · of · Time</p>';
  html += '<p class="gh-lede">从脚下这颗行星,到可观测宇宙的边缘,天文与宇宙学把"我们身在何处"这个最宏大的问题,拆成了一条条能讲清的因果:行星为何绕日、恒星如何发光、星系怎样聚集、宇宙从何而来。<b>学会用尺度与光看天,星空就不再是浪漫背景,而是一部能读懂的物理。</b></p>';
  if (nextLesson && AST.lessons[nextLesson]) {
    var nl = AST.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + AST.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(AST.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + AST.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < AST.modules.length; i++) {
    var m = AST.modules[i];
    var mRead = 0;
    for (var j = 0; j < AST.path.length; j++) {
      if (AST.path[j].indexOf(m.id + '/') === 0 && P.isRead(AST.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + AST.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + AST.esc(m.en || '') + '</div>';
    html += '<p>' + AST.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>行星体重秤、宇宙距离换算、开普勒第三定律、史瓦西半径。</p>';
  html += '<div class="prog">4 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('○', '行星体重秤', 'weight on planets');
  html += toolCell('↔', '宇宙距离换算', 'AU · ly · pc');
  html += toolCell('∿', '开普勒第三定律', 'orbital period');
  html += toolCell('●', '史瓦西半径', 'black hole radius');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不背公式、不刷题、不故弄玄虚。每节五分钟,用<b>大白话</b>把天文与宇宙里那些真正重要、却常被讲成"名词堆砌"或"玄学浪漫"的道理讲清:<b>为什么</b>是这样,而不是背下一串名字。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>行星为何绕日、恒星如何发光;</li>' +
          '<li>从视差到红移,宇宙距离怎样一步步量出来;</li>' +
          '<li>大爆炸与宇宙膨胀留下了哪些证据;</li>' +
          '<li>暗物质、暗能量与系外生命为何仍是前沿。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为科普通识,重在直觉与因果,不追求参数的精确与穷尽;涉及前沿(暗物质、暗能量、暴胀、地外生命)的内容,会标注其不确定性与争议,给主流共识而非定论。距离与质量等数值为常用教学概数。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>天文与宇宙 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  AST.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 太阳系:中心太阳脉动金光,八大行星沿椭圆轨道绕行(水金地火内圈、木土天海外圈),
   背景星点随机闪烁;描边/填色随主题取 --acc / --acc2 / --acc-soft,
   轨道与星点用 SMIL animateTransform/animate,prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function cosmosSVG() {
  // 八大行星:[轨道半长轴, 行星半径, 颜色令牌, 公转周期(s,视觉比例,非真实)]
  var planets = [
    [22, 1.6, 'var(--acc2)', 4],
    [30, 2.2, 'var(--acc)', 7],
    [38, 2.3, 'var(--acc2)', 10],
    [46, 1.9, 'var(--acc)', 14],
    [62, 4.6, 'var(--acc2)', 22],
    [76, 4.0, 'var(--acc)', 30],
    [90, 3.0, 'var(--acc2)', 42],
    [104, 3.0, 'var(--acc)', 56]
  ];
  var cx = 100, cy = 104;
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景星点(闪烁,错峰)
  var stars = [[14,22],[28,40],[176,30],[150,52],[40,170],[170,168],[24,120],[186,118],[108,18],[92,190],[60,30],[140,178]];
  for (var i = 0; i < stars.length; i++) {
    var d = (i % 3) * 0.8;
    svg += '<circle class="star" cx="' + stars[i][0] + '" cy="' + stars[i][1] + '" r="0.9" style="fill:var(--acc2);animation-delay:' + d + 's"/>';
  }

  // 轨道(椭圆,压扁俯视感)
  for (var o = 0; o < planets.length; o++) {
    var a = planets[o][0], b = a * 0.42;
    svg += '<ellipse class="orbit" cx="' + cx + '" cy="' + cy + '" rx="' + a + '" ry="' + b + '" style="stroke:var(--acc2)" stroke-width=".5" fill="none"/>';
  }

  // 太阳(中心,脉动)
  svg += '<circle class="sun-core" cx="' + cx + '" cy="' + cy + '" r="11" style="fill:var(--acc-soft)"/>';
  svg += '<circle class="sun-core" cx="' + cx + '" cy="' + cy + '" r="6.5" style="fill:var(--acc)"/>';
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="3.4" style="fill:var(--acc2)"/>';

  // 行星沿椭圆轨道绕行(animateMotion 沿椭圆路径,贴合绘制轨道;各行星速度不同,内圈快外圈慢)
  for (var p = 0; p < planets.length; p++) {
    var pa = planets[p][0], pb = pa * 0.42, pr = planets[p][1], pc = planets[p][2], dur = planets[p][3];
    // 椭圆路径(中心 cx,cy,半轴 pa,pb)
    var ep = 'M ' + (cx - pa) + ' ' + cy +
             ' a ' + pa + ' ' + pb + ' 0 1 0 ' + (2 * pa) + ' 0' +
             ' a ' + pa + ' ' + pb + ' 0 1 0 ' + (-2 * pa) + ' 0';
    svg += '<path id="orb' + p + '" d="' + ep + '" fill="none" stroke="none"/>';
    svg += '<g>';
    svg += '<circle cx="0" cy="0" r="' + pr + '" style="fill:' + pc + '"/>';
    svg += '<animateMotion dur="' + dur + 's" repeatCount="indefinite"><mpath href="#orb' + p + '"/></animateMotion>';
    svg += '</g>';
  }

  svg += '</svg>';
  return svg;
}
