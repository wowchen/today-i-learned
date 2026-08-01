/* 首页视图(衬线优雅 · 山月主视觉 · 两列模块格 · 浅红/深金双主题) */
window.TSP = window.TSP || {};
TSP.views = TSP.views || {};

TSP.views.home = function() {
  var P = TSP.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = TSP.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < TSP.path.length ? TSP.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="mh-hero">';
  html += '<div class="mh-scene">' + sceneSVG() + '</div>';
  html += '<p class="mh-kicker">唐诗三百首 · 宋词一百五十首</p>';
  html += '<h1 class="mh-title">诗<em>韵</em>千载</h1>';
  html += '<p class="mh-latin">Tang · Song · Verses</p>';
  html += '<p class="mh-lede">从李白的月到苏轼的江,从王维的空山到易安的黄花。这里收<b>唐诗三百首、宋词一百五十首</b> -- 每首附原文、创作背景、字词注释、白话译白与赏析。一诗一读,常读常新。</p>';
  if (nextLesson && TSP.lessons[nextLesson]) {
    var nl = TSP.lessons[nextLesson];
    html += '<a class="mh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续阅读 · 第 ' + (step + 1) + ' 篇' : '从第一篇开始') +
            ' <span class="nm-t">' + TSP.esc(nl.title) + '</span></a>';
  }
  html += '<div class="mh-meta">';
  html += metaCell(TSP.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已读 / 诗篇');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="mh-rule"><h2>诗卷索引</h2><span class="ln"></span><small>' + TSP.modules.length + ' Volumes</small></div>';
  html += '<div class="mh-mods">';
  for (var i = 0; i < TSP.modules.length; i++) {
    var m = TSP.modules[i];
    var mRead = 0;
    for (var j = 0; j < TSP.path.length; j++) {
      if (TSP.path[j].indexOf(m.id + '/') === 0 && P.isRead(TSP.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="mh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + TSP.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + TSP.esc(m.en || '') + '</div>';
    html += '<p>' + TSP.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 篇' + (done ? ' · 已读毕' : '') + '</div>';
    html += '</a>';
  }
  // 工具台卡片
  html += '<a class="mh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>诗词工具台</h3></div>';
  html += '<div class="en">Playground</div>';
  html += '<p>查格律、识意象、览年表、玩飞花令。</p>';
  html += '<div class="prog">4 件 · 边读边用</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="mh-rule"><h2>互动工具</h2><span class="ln"></span><small>Playground</small></div>';
  html += '<div class="mh-tools">';
  html += toolCell('谱', '体裁格律', 'meter & form');
  html += toolCell('意', '意象寓意', 'imagery');
  html += toolCell('时', '朝代年表', 'timeline');
  html += toolCell('令', '飞花集句', 'word game');
  html += '</div>';

  // ===== About =====
  html += '<div class="mh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>读诗不是背诗,而是借古人的眼重新看一遍世界。本站选<b>唐诗三百首</b>(依蘅塘退士选本)与<b>宋词一百五十首</b>(豪放婉约兼收),每首七段:原文、背景、注释、译白、赏析、想一想、接着读。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>为什么"大漠孤烟直"十个字就是一幅边塞图;</li>' +
          '<li>词与诗的区别,豪放与婉约的分野;</li>' +
          '<li>月、柳、梅、雁这些意象背后藏着什么情思;</li>' +
          '<li>一首好诗好在哪里,如何说得清。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站原文以通行本为准,注释赏析重在直觉与赏析,学术细节以专书为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="mh-foot"><span>唐诗宋词 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  TSP.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="mh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 山月主视觉 SVG(远山轮廓 + 明月 + 飞鸟),描边随主题取 --acc / --acc2 */
function sceneSVG() {
  return '<svg viewBox="0 0 200 200" fill="none" stroke-width="1.2">' +
    '<circle class="moon" cx="142" cy="56" r="23" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="1.2"/>' +
    '<path class="ridge" d="M6 150 Q38 110 70 136 Q100 158 132 126 Q160 106 194 140" stroke="var(--acc2)" stroke-width="1.4"/>' +
    '<path class="ridge" d="M6 172 Q48 136 88 162 Q128 182 168 150 Q184 140 194 158" stroke="var(--acc)" stroke-width="1.4"/>' +
    '<path class="bird" d="M64 72 q5 -6 10 0 q5 -6 10 0" stroke="var(--acc2)" stroke-width="1.2"/>' +
    '<path class="bird" d="M96 54 q4 -4 8 0 q4 -4 8 0" stroke="var(--acc2)" stroke-width="1.1"/>' +
    '<path class="bird" d="M120 80 q3 -3 6 0 q3 -3 6 0" stroke="var(--acc)" stroke-width="1"/>' +
    '</svg>';
}
