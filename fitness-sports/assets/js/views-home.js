/* 首页视图(山脊+太阳+跑步弧线 SVG · 两列模块格 · 草地森绿/深林暖绿双主题) */
window.FIT = window.FIT || {};
FIT.views = FIT.views || {};

FIT.views.home = function() {
  var P = FIT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = FIT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < FIT.path.length ? FIT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + wildSVG() + '</div>';
  html += '<p class="gh-kicker">科普通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">迈出<em>那一步</em></h1>';
  html += '<p class="gh-latin">Run · Climb · Breathe</p>';
  html += '<p class="gh-lede">从为什么该动、身体怎么运转，到力量、有氧、拉伸、核心、间歇，再到营养、恢复、减脂增肌和运动心理--把"练就一副好用耐用的身体"这件事拆成 ' + total + ' 节能讲清的微课。<b>学会用最省力的方式练对、吃对、歇对，运动不再是苦差，而是能持续一辈子的习惯。</b></p>';
  if (nextLesson && FIT.lessons[nextLesson]) {
    var nl = FIT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + FIT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(FIT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + FIT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < FIT.modules.length; i++) {
    var m = FIT.modules[i];
    var mRead = 0;
    for (var j = 0; j < FIT.path.length; j++) {
      if (FIT.path[j].indexOf(m.id + '/') === 0 && P.isRead(FIT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + FIT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + FIT.esc(m.en || '') + '</div>';
    html += '<p>' + FIT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>BMI 体成分、1RM 最大重量、心率区间、热量消耗、间歇计时器。</p>';
  html += '<div class="prog">5 件 · 边练边用</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('○', 'BMI 体成分', 'body composition');
  html += toolCell('↑', '1RM 最大重量', 'one-rep max');
  html += toolCell('♥', '心率区间', 'heart rate zones');
  html += toolCell('※', '热量消耗', 'calorie burn');
  html += toolCell('⏱', '间歇计时器', 'HIIT timer');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不贩卖焦虑、不堆术语、不故弄玄虚。每节五分钟，用<b>大白话</b>把健身与运动里那些真正重要、却常被讲成"黑话天书"或"玄学励志"的道理讲清：<b>为什么</b>这么练，而不是背下一串动作名。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>身体怎么产能、为什么力量和有氧缺一不可；</li>' +
          '<li>深蹲、硬拉、卧推等基础动作的标准与常见错误；</li>' +
          '<li>怎么用渐进超负荷持续进步，怎么吃、怎么歇、怎么避免过度训练；</li>' +
          '<li>减脂不等于节食、增肌不等于猛吃--以及如何让运动成为可持续的习惯。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为科普通识，重在直觉与原理，不替代医疗与专业教练指导；涉及伤病请遵医嘱，动作请在能力范围内循序渐进。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>健身与运动 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  FIT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 户外主视觉:远山近山山脊 + 太阳 + 蜿蜒跑步弧线(一个小点沿路径行进),
   描边/填色随主题取 --acc / --acc2 / --acc-soft,
   太阳脉动与路径行进用 SMIL animate, prefers-reduced-motion 由 CSS 守护 */
function wildSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  // 背景同心圆(地平线感)
  svg += '<circle cx="100" cy="108" r="86" style="stroke:var(--acc-soft);stroke-width:1;fill:none"/>';
  svg += '<circle cx="100" cy="108" r="60" style="stroke:var(--line);stroke-width:1;fill:none;stroke-dasharray:2 6"/>';
  // 太阳(右上,带脉动)
  svg += '<circle cx="142" cy="58" r="16" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.5">';
  svg += '<animate attributeName="opacity" values=".7;1;.7" dur="4s" repeatCount="indefinite"/></circle>';
  svg += '<circle cx="142" cy="58" r="9" style="fill:var(--acc2);opacity:.5"/>';
  // 远山(浅)
  svg += '<path d="M16 120 L52 78 L82 104 L112 70 L150 100 L184 84 L184 150 L16 150 Z" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.2"/>';
  // 近山(深)
  svg += '<path d="M10 150 L44 108 L74 138 L108 96 L142 132 L190 110 L190 162 L10 162 Z" style="fill:var(--acc);opacity:.18;stroke:var(--acc2);stroke-width:1.2"/>';
  // 几棵小树
  var trees = [[34,150],[58,156],[128,148],[160,156]];
  for (var t = 0; t < trees.length; t++) {
    var tx = trees[t][0], ty = trees[t][1];
    svg += '<path d="M' + tx + ' ' + (ty-12) + ' L' + (tx-5) + ' ' + ty + ' L' + (tx+5) + ' ' + ty + ' Z" style="fill:var(--acc2);opacity:.7"/>';
    svg += '<line x1="' + tx + '" y1="' + ty + '" x2="' + tx + '" y2="' + (ty+3) + '" style="stroke:var(--ink);stroke-width:1.2"/>';
  }
  // 蜿蜒跑步弧线(虚线)
  var trail = 'M24 176 Q66 120 98 140 T172 96';
  svg += '<path d="' + trail + '" style="stroke:var(--acc);stroke-width:1.8;fill:none;stroke-dasharray:3 5;stroke-linecap:round"/>';
  // 跑步者(沿弧线行进的小点)
  svg += '<circle r="3.6" style="fill:var(--acc2)">';
  svg += '<animateMotion dur="6s" repeatCount="indefinite" path="' + trail + '"/></circle>';
  // 终点旗
  svg += '<line x1="172" y1="96" x2="172" y2="84" style="stroke:var(--acc);stroke-width:1.2"/>';
  svg += '<path d="M172 84 L182 88 L172 92 Z" style="fill:var(--acc)"/>';
  svg += '</svg>';
  return svg;
}
