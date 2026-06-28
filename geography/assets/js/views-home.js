/* 首页视图(衬线优雅 · 地球轨道 SVG · 两列模块格 · 海蓝/暗夜绿双主题) */
window.GEO = window.GEO || {};
GEO.views = GEO.views || {};

GEO.views.home = function() {
  var P = GEO.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = GEO.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < GEO.path.length ? GEO.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + globeSVG() + '</div>';
  html += '<p class="gh-kicker">科普非应试 · 大白话讲透</p>';
  html += '<h1 class="gh-title">地理之<em>球</em></h1>';
  html += '<p class="gh-latin">A · Pale · Blue · Dot</p>';
  html += '<p class="gh-lede">从太空回望,地球是一颗薄薄一层空气与水包裹的蓝色弹珠。地理就是读懂这层<b>家园薄膜</b>怎么运转:风从哪来、水往哪去、大地如何塑形、人类如何在上面繁衍与迁徙 —— 从地图与地球,到气候、水文、地貌,再到人口、经济与地缘。</p>';
  if (nextLesson && GEO.lessons[nextLesson]) {
    var nl = GEO.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + GEO.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(GEO.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + GEO.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < GEO.modules.length; i++) {
    var m = GEO.modules[i];
    var mRead = 0;
    for (var j = 0; j < GEO.path.length; j++) {
      if (GEO.path[j].indexOf(m.id + '/') === 0 && P.isRead(GEO.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + GEO.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + GEO.esc(m.en || '') + '</div>';
    html += '<p>' + GEO.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>时区换算、两点大圆距离、比例尺换算、正午太阳高度与昼长。</p>';
  html += '<div class="prog">4 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◷', '时区换算', 'time zones');
  html += toolCell('⊿', '大圆距离', 'haversine');
  html += toolCell('▦', '比例尺换算', 'map scale');
  html += toolCell('☼', '太阳高度·昼长', 'sun & daylight');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不背省会、不刷题、不应试。每节五分钟,用<b>大白话</b>把地理里那些真正重要、却常被讲成"记忆负担"的道理讲清:<b>为什么</b>这里有沙漠、那里起城市,而不是它们叫什么名字。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>地图为什么会"撒谎",怎么读懂经纬度;</li>' +
          '<li>季风、洋流、气候带是怎么来的;</li>' +
          '<li>板块、河流、风沙如何雕刻出山川;</li>' +
          '<li>人口、城市与产业为何落在这些地方。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站重空间视角与因果直觉,数据会过时处标注年份;涉及行政区划与边界以国家权威表述为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>地理通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  GEO.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 地球 + 倾斜轨道 + 绕行卫星(SMIL animateMotion 沿椭圆轨道),描边随主题取 --acc / --acc2 */
function globeSVG() {
  return '<svg viewBox="0 0 200 200" fill="none">' +
    '<g transform="rotate(-18 100 100)">' +
      '<ellipse class="orbit" cx="100" cy="100" rx="92" ry="40" style="stroke:var(--acc2)" stroke-width="1"/>' +
      '<g class="sat">' +
        '<circle class="sat-halo" cx="0" cy="0" r="6.5" style="fill:var(--acc)"/>' +
        '<circle cx="0" cy="0" r="3.2" style="fill:var(--acc2)"/>' +
        '<animateMotion dur="18s" repeatCount="indefinite" path="M192,100 A92,40 0 1,1 8,100 A92,40 0 1,1 192,100"/>' +
      '</g>' +
    '</g>' +
    '<circle class="sphere" cx="100" cy="100" r="56" style="stroke:var(--acc)" stroke-width="1.5"/>' +
    '<ellipse class="grat" cx="100" cy="100" rx="56" ry="19" style="stroke:var(--acc2)" stroke-width="1"/>' +
    '<ellipse class="grat" cx="100" cy="100" rx="56" ry="38" style="stroke:var(--acc2)" stroke-width="1"/>' +
    '<ellipse class="grat" cx="100" cy="100" rx="19" ry="56" style="stroke:var(--acc2)" stroke-width="1"/>' +
    '<ellipse class="grat" cx="100" cy="100" rx="38" ry="56" style="stroke:var(--acc2)" stroke-width="1"/>' +
    '<line class="equator" x1="44" y1="100" x2="156" y2="100" style="stroke:var(--acc2)" stroke-width="1"/>' +
    '</svg>';
}
