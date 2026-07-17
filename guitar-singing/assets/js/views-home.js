/* 首页视图(吉他+声波 SVG · 两列模块格 · 琥珀/暖金双主题) */
window.GTR = window.GTR || {};
GTR.views = GTR.views || {};

GTR.views.home = function() {
  var P = GTR.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = GTR.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < GTR.path.length ? GTR.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + guitarSVG() + '</div>';
  html += '<p class="gh-kicker">弹唱入门 · 大白话讲透</p>';
  html += '<h1 class="gh-title">一把<em>吉他</em></h1>';
  html += '<p class="gh-latin">Play · Sing · Everywhere</p>';
  html += '<p class="gh-lede">从认识吉他、定弦、持琴，到和弦、扫弦、指弹，再到弹唱配合、变调夹、技巧和编配——把"一个人就是一支乐队"这件事拆成 74 节能讲清的微课。<b>学会用六根弦给自己伴奏，任何歌都能随时随地弹唱。</b></p>';
  if (nextLesson && GTR.lessons[nextLesson]) {
    var nl = GTR.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + GTR.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(GTR.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + GTR.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < GTR.modules.length; i++) {
    var m = GTR.modules[i];
    var mRead = 0;
    for (var j = 0; j < GTR.path.length; j++) {
      if (GTR.path[j].indexOf(m.id + '/') === 0 && P.isRead(GTR.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + GTR.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + GTR.esc(m.en || '') + '</div>';
    html += '<p>' + GTR.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>和弦指板图、节拍器、标准音调音、变调夹计算器。</p>';
  html += '<div class="prog">4 件 · 边弹边用</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('♪', '和弦指板图', 'chord finder');
  html += toolCell('♩', '节拍器', 'metronome');
  html += toolCell('♫', '标准音调音', 'tuning reference');
  html += toolCell('≡', '变调夹计算器', 'capo calculator');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不炫技、不堆术语、不故弄玄虚。每节五分钟，用<b>大白话</b>把吉他弹唱里那些真正重要、却常被讲成"黑话天书"的道理讲清：<b>为什么</b>这么弹，而不是背下一串谱子。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>吉他的构造、定弦、持琴姿势和左右手基本动作；</li>' +
          '<li>从三个开放和弦到万能和弦进行，伴奏一首歌只需四个和弦；</li>' +
          '<li>扫弦、指弹、闷音等节奏手法，以及击弦、推弦、泛音等表现技巧；</li>' +
          '<li>弹唱如何协调手嘴、如何用变调夹找到适合你的调、如何编配一首完整的歌。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为弹唱入门通识，重在直觉与实操，不追求演奏技法的穷尽。涉及具体曲目仅供学习参考，和弦编配以常见版本为准，可根据自己音域和喜好调整。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>吉他弹唱 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  GTR.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 吉他:琴体轮廓+音孔+琴弦+声波扩散,琴弦微微振动,声波向外脉动;
   描边/填色随主题取 --acc / --acc2 / --acc-soft,
   振动与脉动用 SMIL animate, prefers-reduced-motion 由 CSS 守护 */
function guitarSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var cx = 100, cy = 100;

  // 背景声波(向外扩散脉动)
  for (var r = 28; r <= 70; r += 14) {
    svg += '<circle class="wave" cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((r - 28) * 0.08) + 's"/>';
  }

  // 琴体(8字形/葫芦形轮廓,上下两个圆弧相切)
  svg += '<g style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.5">';
  // 下半身(大圆)
  svg += '<ellipse cx="' + cx + '" cy="' + (cy + 28) + '" rx="42" ry="38"/>';
  // 上半身(小圆)
  svg += '<ellipse cx="' + cx + '" cy="' + (cy - 22) + '" rx="32" ry="30"/>';
  // 腰部连接
  svg += '<path d="M ' + (cx - 32) + ' ' + (cy - 2) + ' Q ' + (cx - 22) + ' ' + cy + ' ' + (cx - 32) + ' ' + (cy + 8) + '" stroke="var(--acc)" stroke-width="1.5" fill="none"/>';
  svg += '<path d="M ' + (cx + 32) + ' ' + (cy - 2) + ' Q ' + (cx + 22) + ' ' + cy + ' ' + (cx + 32) + ' ' + (cy + 8) + '" stroke="var(--acc)" stroke-width="1.5" fill="none"/>';
  svg += '</g>';

  // 琴颈(向上延伸)
  svg += '<rect x="' + (cx - 7) + '" y="6" width="14" height="58" rx="3" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.2"/>';
  // 琴头(顶端)
  svg += '<rect x="' + (cx - 9) + '" y="2" width="18" height="10" rx="2" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.2"/>';

  // 品丝(琴颈上的横线)
  for (var f = 1; f <= 4; f++) {
    var fy = 12 + f * 11;
    svg += '<line x1="' + (cx - 6) + '" y1="' + fy + '" x2="' + (cx + 6) + '" y2="' + fy + '" style="stroke:var(--acc2);stroke-width:.6"/>';
  }

  // 音孔(圆形,带内圈装饰)
  svg += '<circle cx="' + cx + '" cy="' + (cy + 24) + '" r="11" style="fill:var(--bg);stroke:var(--acc);stroke-width:1.2"/>';
  svg += '<circle cx="' + cx + '" cy="' + (cy + 24) + '" r="8" style="fill:none;stroke:var(--acc2);stroke-width:.5;opacity:.6"/>';

  // 琴弦(6 根,从琴头到琴桥,带微振动动画)
  var stringX = [cx - 5, cx - 3, cx - 1, cx + 1, cx + 3, cx + 5];
  for (var s = 0; s < 6; s++) {
    var sx = stringX[s];
    var sw = s < 3 ? 0.8 : 0.5;
    var delay = s * 0.12;
    svg += '<line class="string" x1="' + sx + '" y1="8" x2="' + sx + '" y2="' + (cy + 50) + '" style="stroke:var(--acc2);stroke-width:' + sw + ';animation-delay:' + delay + 's"/>';
  }

  // 琴桥(弦的底端固定点)
  svg += '<rect x="' + (cx - 14) + '" y="' + (cy + 48) + '" width="28" height="3" rx="1" style="fill:var(--acc);stroke:none"/>';

  // 右上角音符装饰
  svg += '<text x="168" y="34" style="fill:var(--acc);font-size:16;font-family:serif;opacity:.5">♪</text>';
  svg += '<text x="178" y="50" style="fill:var(--acc2);font-size:12;font-family:serif;opacity:.4">♫</text>';

  svg += '</svg>';
  return svg;
}
