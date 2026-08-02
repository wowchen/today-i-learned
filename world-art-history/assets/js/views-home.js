/* 首页视图(画室调色板 + 画笔笔触 · 群青/赭石双主题) */
window.WAH = window.WAH || {};
WAH.views = WAH.views || {};

WAH.views.home = function() {
  var P = WAH.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = WAH.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < WAH.path.length ? WAH.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-palette">' + paletteSVG() + '</div>';
  html += '<p class="gh-kicker">世界艺术通史 · 大白话讲透</p>';
  html += '<h1 class="gh-title">世界<em>艺术</em>通史</h1>';
  html += '<p class="gh-latin">World · Art · History</p>';
  html += '<p class="gh-lede">从拉斯科洞穴的野牛,到雅典神庙的人体比例;从敦煌的飞天,到威尼斯的色彩;从印象派走出画室,到当代的装置与影像--<b>人类怎样一步步学会用图像说话。</b>本站沿加德纳通史脉络,用大白话讲清楚每个时代画什么、怎么画、为什么这么画,重直觉与赏析,不堆术语不故作高深。</p>';
  if (nextLesson && WAH.lessons[nextLesson]) {
    var nl = WAH.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + WAH.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(WAH.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + WAH.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < WAH.modules.length; i++) {
    var m = WAH.modules[i];
    var mRead = 0;
    for (var j = 0; j < WAH.path.length; j++) {
      if (WAH.path[j].indexOf(m.id + '/') === 0 && P.isRead(WAH.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + WAH.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + WAH.esc(m.en || '') + '</div>';
    html += '<p>' + WAH.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>艺术史时间轴、艺术家图鉴、流派速查、中外艺术对照。边读边查,把通史变成坐标。</p>';
  html += '<div class="prog">4 件 · 边读边查</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◐', '艺术史时间轴', 'art timeline', '#/timeline');
  html += toolCell('◑', '艺术家图鉴', 'artist gallery', '#/figures');
  html += toolCell('◉', '流派速查', 'styles ref', '#/styles');
  html += toolCell('◈', '中外艺术对照', 'east-west', '#/cross-ref');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站是<b>科普通识</b>,不是艺术院校教材:沿着加德纳《世界艺术通史》的脉络,从史前洞穴一直讲到当代,中间穿插中国、日本、印度、美洲、非洲、大洋洲的非西方传统。重点不在背年表,而在弄懂<b>每个时代为什么长那样</b>。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>古希腊雕塑为什么那么"准",中世纪又为什么变"扁";</li>' +
          '<li>透视是怎么被发明出来的,谁第一个用了它;</li>' +
          '<li>印象派到底在反什么,现代艺术为什么越来越"看不懂";</li>' +
          '<li>同一时期,西方在画油画时,中国和日本在画什么。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为科普通识,重在直觉与赏析。作品断代、归属存争议处取通说;图为示意,原作请到博物馆与画册中观赏。不带货不荐拍卖。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>世界艺术通史 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  WAH.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en, href) {
  return '<a class="gh-tool" href="' + href + '"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:画室调色板 -- 椭圆调色盘 + 六个颜料窝(红橙黄绿蓝紫,逐个跳动)
   + 一道画笔笔触扫过盘面(群青,stroke-dashoffset 描绘)
   描边/填色随主题取 --acc / --acc2 / --paper;prefers-reduced-motion 由 CSS 守卫 */
function paletteSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 调色盘盘体(倾斜)
  svg += '<g transform="rotate(-8 100 112)">';
  svg += '<ellipse cx="100" cy="112" rx="74" ry="58" style="fill:var(--paper);stroke:var(--acc2);stroke-width:2.2"/>';
  // 拇指孔
  svg += '<ellipse cx="58" cy="96" rx="9" ry="7" style="fill:var(--bg);stroke:var(--acc2);stroke-width:1.4"/>';

  // 六个颜料窝 [cx, cy, color, delay]
  var wells = [
    [70, 96, '#c0392b', 0],
    [96, 80, '#e08a1e', .15],
    [126, 84, '#f1c40f', .3],
    [142, 110, '#27ae60', .45],
    [122, 136, '#1d4e89', .6],
    [80, 134, '#6c3483', .75]
  ];
  for (var i = 0; i < wells.length; i++) {
    var w = wells[i];
    svg += '<circle class="pdot" cx="' + w[0] + '" cy="' + w[1] + '" r="9" fill="' + w[2] + '" style="animation-delay:' + w[3] + 's"/>';
  }
  svg += '</g>';

  // 画笔笔触(扫过盘面,群青,描绘动画)
  svg += '<path d="M30 168 Q100 92 175 152" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round" stroke-dasharray="210 210" stroke-dashoffset="210">';
  svg += '<animate attributeName="stroke-dashoffset" values="210;0;0;210" keyTimes="0;.45;.7;1" dur="3.6s" repeatCount="indefinite"/>';
  svg += '<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.7;1" dur="3.6s" repeatCount="indefinite"/>';
  svg += '</path>';
  // 笔尖小点
  svg += '<circle r="3.4" fill="var(--acc)" opacity="0">';
  svg += '<animateMotion dur="3.6s" repeatCount="indefinite" keyTimes="0;.45;.7;1" keyPoints="0;1;1;0" calcMode="linear"><mpath href="#brush-path"/></animateMotion>';
  svg += '</circle>';
  svg += '<path id="brush-path" d="M30 168 Q100 92 175 152" fill="none" stroke="none"/>';

  svg += '</svg>';
  return svg;
}
