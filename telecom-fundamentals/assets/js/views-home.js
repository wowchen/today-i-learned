/* 首页视图(光纤+光脉冲 SVG · 两列模块格 · 蓝青/光青双主题) */
window.TCM = window.TCM || {};
TCM.views = TCM.views || {};

TCM.views.home = function() {
  var P = TCM.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = TCM.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < TCM.path.length ? TCM.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + fiberSVG() + '</div>';
  html += '<p class="gh-kicker">光传输通识 · 大白话讲透</p>';
  html += '<h1 class="gh-title">一根<em>光纤</em></h1>';
  html += '<p class="gh-latin">Light · Carries · Everything</p>';
  html += '<p class="gh-lede">从信号、带宽、协议分层，到光纤光缆、光模块、SDH 与波分 OTN，再到保护倒换、PON 接入、机房动环、防外破巡检——把一张传输网拆成 66 节能讲清的微课。<b>懂光，就懂了现代通信的骨架。</b></p>';
  if (nextLesson && TCM.lessons[nextLesson]) {
    var nl = TCM.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + TCM.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(TCM.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('4', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + TCM.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < TCM.modules.length; i++) {
    var m = TCM.modules[i];
    var mRead = 0;
    for (var j = 0; j < TCM.path.length; j++) {
      if (TCM.path[j].indexOf(m.id + '/') === 0 && P.isRead(TCM.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + TCM.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + TCM.esc(m.en || '') + '</div>';
    html += '<p>' + TCM.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>dBm 换算、光链路预算、速率等级速查、纤芯配色速查。</p>';
  html += '<div class="prog">4 件 · 边学边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('dB', 'dBm ↔ mW 换算', 'power converter');
  html += toolCell('λ', '光链路预算', 'link budget');
  html += toolCell('≡', '速率等级速查', 'rate ladder');
  html += toolCell('▦', '纤芯配色速查', 'fiber colors');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不堆公式、不背参数、不故弄玄虚。每节五分钟，用<b>大白话</b>把通信光传输里那些真正重要、却常被讲成"黑话天书"的道理讲清：<b>为什么</b>这样设计，而不是抄一串指标。</p>';
  html += '<p>读完会知道：</p>';
  html += '<ul>' +
          '<li>信号、带宽、协议、分层、时延——通信的 ABC 到底在说什么；</li>' +
          '<li>光纤为什么吊打铜缆，单模多模怎么选，光模块和 dBm 怎么算；</li>' +
          '<li>从 E1/PDH 到 SDH/OTN/波分，传输网三代技术的来龙去脉；</li>' +
          '<li>50ms 保护倒换、同沟教训、PON 光衰预算、机房动环与防外破——一线运维的实战常识。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明：本站为通信与光传输科普通识，重直觉与工程实战，不追求标准规范的穷尽。具体参数与操作以现行国标/行标和设备手册为准。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>通信通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  TCM.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 光纤:盘绕的纤芯曲线 + 光脉冲流动(dash 动画) + 光子呼吸点 + 背景光波扩散;
   描边/填色随主题取 --acc / --acc2 / --acc-soft,
   流动用 CSS stroke-dashoffset 动画(core-flow),脉动复用 wave/ghBreathe */
function fiberSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var cx = 100, cy = 100;

  // 背景光波(向外扩散脉动)
  for (var r = 28; r <= 70; r += 14) {
    svg += '<circle class="wave" cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="stroke:var(--acc-soft);stroke-width:1;fill:none;animation-delay:' + ((r - 28) * 0.08) + 's"/>';
  }

  // 光缆护套(外圈圆角矩形,斜置)
  svg += '<g transform="rotate(-18 ' + cx + ' ' + cy + ')">';
  svg += '<rect x="' + (cx - 16) + '" y="6" width="32" height="188" rx="14" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.5" opacity=".9"/>';
  // 加强芯(中心虚线)
  svg += '<line x1="' + cx + '" y1="14" x2="' + cx + '" y2="186" style="stroke:var(--acc2);stroke-width:.8;stroke-dasharray:3 4;opacity:.5"/>';

  // 若干松套管(纤芯所在,左右各一条弯曲纤芯)
  // 纤芯 A:蓝色通道,光脉冲流动(core-flow)
  svg += '<path class="core-flow" d="M ' + (cx - 8) + ' 10 C ' + (cx - 20) + ' 50, ' + (cx + 4) + ' 80, ' + (cx - 8) + ' 120 S ' + (cx + 2) + ' 180, ' + (cx - 6) + ' 192" style="stroke:var(--acc);stroke-width:2.2;fill:none"/>';
  // 纤芯 B:慢速流动
  svg += '<path class="core-flow slow" d="M ' + (cx + 8) + ' 10 C ' + (cx + 20) + ' 55, ' + (cx - 4) + ' 90, ' + (cx + 8) + ' 130 S ' + (cx - 2) + ' 175, ' + (cx + 6) + ' 192" style="stroke:var(--acc2);stroke-width:1.6;fill:none;opacity:.75"/>';

  // 光子(呼吸亮点,沿护套上下两处)
  svg += '<circle class="photon" cx="' + (cx - 8) + '" cy="62" r="3.2" style="fill:var(--acc);animation-delay:0s"/>';
  svg += '<circle class="photon" cx="' + (cx + 8) + '" cy="130" r="2.6" style="fill:var(--acc2);animation-delay:1s"/>';
  svg += '</g>';

  // 左右两端光模块(小矩形,连接纤芯)
  svg += '<g style="fill:var(--paper);stroke:var(--acc);stroke-width:1.4">';
  svg += '<rect x="8" y="' + (cy - 46) + '" width="22" height="14" rx="2"/>';
  svg += '<rect x="170" y="' + (cy + 32) + '" width="22" height="14" rx="2"/>';
  svg += '</g>';
  // 模块光口针脚
  svg += '<line x1="30" y1="' + (cy - 39) + '" x2="38" y2="' + (cy - 39) + '" style="stroke:var(--acc);stroke-width:1.4"/>';
  svg += '<line x1="162" y1="' + (cy + 39) + '" x2="170" y2="' + (cy + 39) + '" style="stroke:var(--acc);stroke-width:1.4"/>';

  // 波长符号装饰
  svg += '<text x="158" y="42" style="fill:var(--acc);font-size:14;font-family:serif;opacity:.55">λ</text>';
  svg += '<text x="170" y="58" style="fill:var(--acc2);font-size:11;font-family:serif;opacity:.45">dBm</text>';

  svg += '</svg>';
  return svg;
}
