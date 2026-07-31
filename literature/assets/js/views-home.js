/* 首页视图(衬线优雅 · 翻开的书+朱砂印章 SVG · 两列模块格 · 朱砂红/暖米金双主题) */
window.LIT = window.LIT || {};
LIT.views = LIT.views || {};

LIT.views.home = function() {
  var P = LIT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = LIT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < LIT.path.length ? LIT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + bookSVG() + '</div>';
  html += '<p class="gh-kicker">科普通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">遇见<em>文学</em></h1>';
  html += '<p class="gh-latin">From · Word · to · the · World · it · Builds</p>';
  html += '<p class="gh-lede">从一句话的诗,到一座人造的漫长人生,文学用语言搭起一个又一个世界。本站把诗歌、小说、散文、戏剧四体,中外文学两脉,以及理论、批评与时代,拆成一条条能讲清的因果:为什么好,好在哪里,又如何被读、被传、被改写。<b>学会用语言与人心看文学,书就不再是装饰,而是一面能照见自己的镜子。</b></p>';
  if (nextLesson && LIT.lessons[nextLesson]) {
    var nl = LIT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + LIT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(LIT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + LIT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < LIT.modules.length; i++) {
    var m = LIT.modules[i];
    var mRead = 0;
    for (var j = 0; j < LIT.path.length; j++) {
      if (LIT.path[j].indexOf(m.id + '/') === 0 && P.isRead(LIT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + LIT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + LIT.esc(m.en || '') + '</div>';
    html += '<p>' + LIT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>体裁格律谱、叙事视角切换器、情节弧线绘制器、修辞赏析台。</p>';
  html += '<div class="prog">4 件 · 边读边玩</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('谱', '体裁格律谱', 'poetic forms');
  html += toolCell('视', '叙事视角切换器', 'viewpoint');
  html += toolCell('弧', '情节弧线绘制器', 'plot arc');
  html += toolCell('辞', '修辞赏析台', 'rhetoric');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不背书单、不炫术语、不故作高深。每节五分钟,用<b>大白话</b>把文学里那些真正重要、却常被讲成"名词堆砌"或"玄虚赞美"的道理讲清:<b>为什么</b>这样写好,好在哪里,而不是堆一串作家名字与流派标签。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>诗歌为何凝练、小说如何造人、散文凭什么"形散神聚";</li>' +
          '<li>从《诗经》到网络文学,中国文学怎样一路变来;</li>' +
          '<li>从荷马史诗到魔幻现实,西方文学又走过哪些关节;</li>' +
          '<li>理论、批评与时代,如何帮你把一本书读厚、读透。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为科普通识,重在直觉与赏析,不追求学术的精确与穷尽;文学评价见仁见智,本站取主流共识与编者一得之见,介绍脉络、不下定论,与历史站同守"不党同伐异"的口径。例句与赏析仅供入门参考。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>文学通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  LIT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 翻开的书:左右两页带文字行,书脊上朱砂印章脉动,背景墨点闪烁;
   描边/填色随主题取 --acc / --acc2 / --acc-soft / --paper,
   印章用 .sun-core(脉动)、墨点用 .star(闪烁),prefers-reduced-motion 由 CSS 守卫 */
function bookSVG() {
  var cx = 100;
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 背景墨点(闪烁,错峰)
  var dots = [[20,30],[180,28],[40,170],[170,172],[28,110],[176,108],[100,18],[100,186],[58,46],[144,46]];
  for (var i = 0; i < dots.length; i++) {
    var d = (i % 3) * 0.8;
    svg += '<circle class="star" cx="' + dots[i][0] + '" cy="' + dots[i][1] + '" r="1.1" style="fill:var(--acc2);animation-delay:' + d + 's"/>';
  }

  // 左页
  svg += '<g class="book-page">';
  svg += '<path d="M' + cx + ',58 L42,50 L42,150 L' + cx + ',158 Z" fill="var(--paper)" stroke="var(--acc)" stroke-width="1.2"/>';
  for (var r = 0; r < 5; r++) { var y = 70 + r * 16; svg += '<line x1="52" y1="' + y + '" x2="' + (cx - 8) + '" y2="' + (y + 2) + '" stroke="var(--acc2)" stroke-width="1" stroke-opacity=".45"/>'; }
  svg += '</g>';
  // 右页
  svg += '<g class="book-page">';
  svg += '<path d="M' + cx + ',58 L158,50 L158,150 L' + cx + ',158 Z" fill="var(--paper)" stroke="var(--acc)" stroke-width="1.2"/>';
  for (var r2 = 0; r2 < 5; r2++) { var y2 = 70 + r2 * 16; svg += '<line x1="' + (cx + 8) + '" y1="' + (y2 + 2) + '" x2="148" y2="' + y2 + '" stroke="var(--acc2)" stroke-width="1" stroke-opacity=".45"/>'; }
  svg += '</g>';
  // 书脊
  svg += '<line x1="' + cx + '" y1="58" x2="' + cx + '" y2="158" stroke="var(--acc)" stroke-width="1.4"/>';

  // 朱砂印章(书脊中部,脉动)
  svg += '<circle class="sun-core" cx="' + cx + '" cy="108" r="11" style="fill:var(--acc-soft)"/>';
  svg += '<circle class="sun-core" cx="' + cx + '" cy="108" r="7.5" style="fill:var(--acc)"/>';
  svg += '<text x="' + cx + '" y="112" text-anchor="middle" font-size="9" fill="var(--paper)" font-family="serif" font-weight="700">文</text>';

  svg += '</svg>';
  return svg;
}
