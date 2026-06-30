/* 首页视图(衬线优雅 · 三级阶梯+大江东流 SVG · 两列模块格 · 海蓝/暗夜绿双主题) */
window.CG = window.CG || {};
CG.views = CG.views || {};

CG.views.home = function() {
  var P = CG.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = CG.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < CG.path.length ? CG.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + chinaSVG() + '</div>';
  html += '<p class="gh-kicker">科普通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">中国之<em>势</em></h1>';
  html += '<p class="gh-latin">Three · Steps · to · the · Sea</p>';
  html += '<p class="gh-lede">西高东低,三级阶梯把大地一阶阶引向大海;季风带来雨热同期的丰饶,长江黄河自高原奔流入海。<b>读懂这个"势",就读懂了中国大半的自然与命运</b>——从疆域地形到气候水文,从母亲河到人口、城市与人地关系。</p>';
  if (nextLesson && CG.lessons[nextLesson]) {
    var nl = CG.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + CG.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(CG.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + CG.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < CG.modules.length; i++) {
    var m = CG.modules[i];
    var mRead = 0;
    for (var j = 0; j < CG.path.length; j++) {
      if (CG.path[j].indexOf(m.id + '/') === 0 && P.isRead(CG.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + CG.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + CG.esc(m.en || '') + '</div>';
    html += '<p>' + CG.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>横跨五时区、胡焕庸线、河流流域、正午太阳高度与昼长。</p>';
  html += '<div class="prog">4 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◴', '横跨五时区', 'time zones');
  html += toolCell('◐', '胡焕庸线', 'hu line');
  html += toolCell('∿', '河流流域', 'river basin');
  html += toolCell('☼', '太阳高度·昼长', 'sun & daylight');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不背省会、不刷题、不应试。每节五分钟,用<b>大白话</b>把中国地理里那些真正重要、却常被讲成"记忆负担"的道理讲清:<b>为什么</b>这里有高原、那里起城市,而不是它叫什么名字。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>三级阶梯如何决定大河东流与水能分布;</li>' +
          '<li>季风与秦岭—淮河怎样划开南北;</li>' +
          '<li>长江、黄河为何一条温润一条多沙;</li>' +
          '<li>人口、产业为何聚在胡焕庸线东南。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站重空间视角与因果直觉,数据会过时处标注年份;涉及行政区划与边界以国家权威表述为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>中国地理 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  CG.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 三级阶梯 + 大江东流:远山(青藏)→中阶(高原盆地)→东部平原入海,光点沿江东流(SMIL animateMotion),青藏顶点脉动;描边/填色随主题取 --acc / --acc2 / --acc-soft */
function chinaSVG() {
  return '<svg viewBox="0 0 200 200" fill="none">' +
    // 第一级 青藏高原(远,最高)
    '<path d="M0 122 L24 80 L46 108 L70 64 L96 102 L122 74 L150 100 L176 82 L200 92 L200 200 L0 200 Z" style="fill:var(--acc-soft);stroke:var(--acc2)" stroke-width="1" opacity=".95"/>' +
    // 第二级 高原盆地
    '<path d="M0 150 L26 120 L52 138 L80 112 L110 136 L138 118 L168 136 L200 124 L200 200 L0 200 Z" style="fill:var(--acc2)" opacity=".3"/>' +
    // 第三级 东部平原 + 海
    '<path d="M0 170 L40 162 L82 165 L124 160 L166 163 L200 161 L200 200 L0 200 Z" style="fill:var(--acc)" opacity=".55"/>' +
    // 海平面
    '<path d="M0 184 L200 184" style="stroke:var(--acc2)" stroke-width=".8" opacity=".3"/>' +
    // 大江东流(主流)
    '<path id="cn-riv1" d="M22 156 C62 146,100 156,138 144 S190 154,198 150" style="stroke:var(--acc)" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    // 大江东流(支流)
    '<path id="cn-riv2" d="M30 166 C66 162,98 170,132 164 S176 170,196 166" style="stroke:var(--acc)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".55"/>' +
    // 流水光点(沿江东流入海)
    '<g class="sat">' +
      '<circle class="sat-halo" cx="0" cy="0" r="4" style="fill:var(--acc)"/>' +
      '<circle cx="0" cy="0" r="1.8" style="fill:var(--acc2)"/>' +
      '<animateMotion dur="9s" repeatCount="indefinite"><mpath href="#cn-riv1"/></animateMotion>' +
    '</g>' +
    '<g>' +
      '<circle cx="0" cy="0" r="1.6" style="fill:var(--acc2)" opacity=".7"/>' +
      '<animateMotion dur="9s" repeatCount="indefinite" begin="4s"><mpath href="#cn-riv1"/></animateMotion>' +
    '</g>' +
    '<g>' +
      '<circle cx="0" cy="0" r="1.3" style="fill:var(--acc2)" opacity=".6"/>' +
      '<animateMotion dur="11s" repeatCount="indefinite" begin="2s"><mpath href="#cn-riv2"/></animateMotion>' +
    '</g>' +
    // 青藏第一阶梯顶点标记(脉动)
    '<circle class="sat-halo" cx="70" cy="64" r="5.5" style="fill:none;stroke:var(--acc2)" stroke-width="1" opacity=".5"/>' +
    '<circle cx="70" cy="64" r="2.4" style="fill:var(--acc2)"/>' +
    '</svg>';
}
