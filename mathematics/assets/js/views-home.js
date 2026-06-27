/* 首页视图(衬线优雅 · 黄金螺旋 · 两列模块格 · 浅红/深金双主题) */
window.MATH = window.MATH || {};
MATH.views = MATH.views || {};

MATH.views.home = function() {
  var P = MATH.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = MATH.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < MATH.path.length ? MATH.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="mh-hero">';
  html += '<div class="mh-spiral">' + spiralSVG() + '</div>';
  html += '<p class="mh-kicker">科普非应试 · 大白话讲透</p>';
  html += '<h1 class="mh-title">数学之<em>美</em></h1>';
  html += '<p class="mh-latin">The · Beauty · of · Mathematics</p>';
  html += '<p class="mh-lede">数学不是一堆要背的公式,而是人类想清楚世界的一种方式。这里讲清每个概念<b>美在哪、用在哪</b> —— 从黄金分割到欧拉恒等式,从概率到无穷。每节五分钟,一课一概念。</p>';
  if (nextLesson && MATH.lessons[nextLesson]) {
    var nl = MATH.lessons[nextLesson];
    html += '<a class="mh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + MATH.esc(nl.title) + '</span></a>';
  }
  html += '<div class="mh-meta">';
  html += metaCell(MATH.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('φ', '4 互动实验');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="mh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + MATH.modules.length + ' Modules</small></div>';
  html += '<div class="mh-mods">';
  for (var i = 0; i < MATH.modules.length; i++) {
    var m = MATH.modules[i];
    var mRead = 0;
    for (var j = 0; j < MATH.path.length; j++) {
      if (MATH.path[j].indexOf(m.id + '/') === 0 && P.isRead(MATH.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="mh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + MATH.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + MATH.esc(m.en || '') + '</div>';
    html += '<p>' + MATH.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  // 实验台卡片
  html += '<a class="mh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动实验台</h3></div>';
  html += '<div class="en">Playground</div>';
  html += '<p>动手算 π、画函数、看黄金螺旋长出来、筛素数。</p>';
  html += '<div class="prog">4 件 · 边玩边懂</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="mh-rule"><h2>互动实验</h2><span class="ln"></span><small>Playground</small></div>';
  html += '<div class="mh-tools">';
  html += toolCell('φ', '黄金螺旋', 'fibonacci spiral');
  html += toolCell('π', '蒙特卡洛', 'estimate π');
  html += toolCell('∫', '函数绘图', 'function plotter');
  html += toolCell('℘', '素数筛', 'prime sieve');
  html += '</div>';

  // ===== About =====
  html += '<div class="mh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不刷题、不应试、不贩卖焦虑。每节五分钟,用<b>大白话</b>把数学里那些真正美、真正有用、却常被讲得很玄的道理讲清。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>无理数、虚数、无穷,当年到底"虚"在哪;</li>' +
          '<li>微积分研究的"变化"和"瞬间"是什么;</li>' +
          '<li>概率与统计怎么帮你不被数字骗;</li>' +
          '<li>为什么 e<sup>iπ</sup>+1=0 被称作最美的公式。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站重直觉与思想,不追求严格证明;公式以纯文本近似书写,细节以教材为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="mh-foot"><span>数学之美 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  MATH.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="mh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 黄金螺旋 SVG(斐波那契方块 + 四分圆弧),描边随主题取 --acc / --acc2 */
function spiralSVG() {
  return '<svg viewBox="0 0 200 200" fill="none" stroke-width="1">' +
    '<rect class="sq" x="76" y="76" width="48" height="48" style="stroke:var(--acc)"/>' +
    '<rect class="sq" x="124" y="76" width="48" height="48" style="stroke:var(--acc)"/>' +
    '<rect class="sq" x="76" y="124" width="48" height="48" style="stroke:var(--acc)"/>' +
    '<rect class="sq" x="28" y="28" width="96" height="96" style="stroke:var(--acc)"/>' +
    '<rect class="sq" x="124" y="28" width="48" height="48" style="stroke:var(--acc)"/>' +
    '<path class="ar" d="M124 76 A48 48 0 0 1 76 124" style="stroke:var(--acc2)" stroke-width="1.6"/>' +
    '<path class="ar" d="M28 124 A96 96 0 0 1 124 28" style="stroke:var(--acc2)" stroke-width="1.6"/>' +
    '<path class="ar" d="M124 124 A48 48 0 0 1 172 76" style="stroke:var(--acc2)" stroke-width="1.6"/>' +
    '</svg>';
}
