/* 首页视图(电力网络节点骨架 + AI脉冲波纹激活 · 靛蓝/琥珀双主题) */
window.AIP = window.AIP || {};
AIP.views = AIP.views || {};

AIP.views.home = function() {
  var P = AIP.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = AIP.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < AIP.path.length ? AIP.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + gridSVG() + '</div>';
  html += '<p class="gh-kicker">AI + 电力 · 大白话讲透</p>';
  html += '<h1 class="gh-title">AI<em>遇上</em>电网</h1>';
  html += '<p class="gh-latin">Artificial · Intelligence · in · Power</p>';
  html += '<p class="gh-lede">从发电厂的功率预测,到变电站的无人机巡检;从调度中心的负荷优化,到数据中心的算电协同——<b>AI 正在渗透电力行业的每一个环节。</b>本站用大白话讲清楚:AI 在电力各专业到底怎么用、用了什么、效果如何、有什么坑。</b></p>';
  if (nextLesson && AIP.lessons[nextLesson]) {
    var nl = AIP.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + AIP.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(AIP.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + AIP.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < AIP.modules.length; i++) {
    var m = AIP.modules[i];
    var mRead = 0;
    for (var j = 0; j < AIP.path.length; j++) {
      if (AIP.path[j].indexOf(m.id + '/') === 0 && P.isRead(AIP.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + AIP.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + AIP.esc(m.en || '') + '</div>';
    html += '<p>' + AIP.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>负荷预测可视化、设备健康度评估器、功率预测精度对比、巡检缺陷识别演示、算电协同调度模拟器。</p>';
  html += '<div class="prog">5 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('~', '负荷预测可视化', 'load forecast');
  html += toolCell('♥', '设备健康度评估', 'equipment health');
  html += toolCell('↔', '功率预测精度对比', 'forecast accuracy');
  html += toolCell('◎', '巡检缺陷识别', 'CV inspection');
  html += toolCell('⚡', '算电协同调度', 'compute-power');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲 AI 原理(已有 <b>人工智能站</b>),不讲电网通识(已有 <b>电网通识站</b>),只讲<b>两者的交叉应用</b>:AI 在电力发、输、变、配、用、调各环节怎么落地、解决什么问题、效果如何、有什么坑。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>功率预测为什么是 AI 在电力的第一战场;</li>' +
          '<li>无人机+CV 巡检怎么替代人工翻山越岭;</li>' +
          '<li>调度 AI 为什么只能建议不能拍板;</li>' +
          '<li>算力负荷怎么当可调资源参与电网调节。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为科普通识,重在应用场景与因果直觉。涉及电网安全处强调"AI 辅助决策,人做最终判断"。数字写量级+年份口径,不荐产品不点名供应商。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>AI+电力 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  AIP.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:中心 AI 芯片(方块+引脚),四周电力传输线(折线)连接变电站节点;
   电流脉冲沿线路流向中心芯片,芯片脉动发光,AI 波纹(圆环)向外扩散激活节点;
   描边/填色随主题取 --acc / --acc2 / --acc-soft
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function gridSVG() {
  var cx = 100, cy = 100;
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 变电站节点 [x, y]
  var nodes = [
    [36, 44], [100, 30], [164, 44],
    [30, 100], [170, 100],
    [36, 156], [100, 170], [164, 156]
  ];

  // 输电线:从外围节点到中心芯片(折线,模拟输电塔架路线)
  var lines = [];
  for (var i = 0; i < nodes.length; i++) {
    lines.push([nodes[i], [cx, cy]]);
  }

  // 输电线路(折线,先画)
  for (var l = 0; l < lines.length; l++) {
    var a = lines[l][0], b = lines[l][1];
    // 中间点做弯折,模拟输电塔架
    var mx = (a[0] + b[0]) / 2 + (a[1] - cy) * 0.1;
    var my = (a[1] + b[1]) / 2 + (a[0] - cx) * 0.1;
    svg += '<path d="M' + a[0] + ' ' + a[1] + ' Q' + mx + ' ' + my + ' ' + b[0] + ' ' + b[1] + '" fill="none" stroke="var(--acc2)" stroke-width=".7" opacity=".35"/>';
    // 存路径用于电流脉冲
    var pid = 'pw' + l;
    svg += '<path id="' + pid + '" d="M' + a[0] + ' ' + a[1] + ' Q' + mx + ' ' + my + ' ' + b[0] + ' ' + b[1] + '" fill="none" stroke="none"/>';
  }

  // 电流脉冲沿输电线流向中心芯片
  for (var p = 0; p < lines.length; p++) {
    var dur = 2.5 + p * 0.25;
    var delay = p * 0.3;
    svg += '<circle r="1.8" style="fill:var(--acc)">' +
           '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's">' +
           '<mpath href="#pw' + p + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/>' +
           '</circle>';
  }

  // 变电站节点(外围)
  for (var n = 0; n < nodes.length; n++) {
    var nd = nodes[n];
    svg += '<circle cx="' + nd[0] + '" cy="' + nd[1] + '" r="4" style="fill:var(--acc-soft);stroke:var(--acc2);stroke-width:.8"/>';
    svg += '<circle cx="' + nd[0] + '" cy="' + nd[1] + '" r="2" style="fill:var(--acc2)"/>';
  }

  // AI 芯片(中心方块 + 引脚)
  var chipSize = 16;
  var chipX = cx - chipSize, chipY = cy - chipSize;
  // 引脚(四边各2根)
  var pins = [
    [chipX, cy - 5, chipX - 4, cy - 5], [chipX, cy + 5, chipX - 4, cy + 5],
    [cx + chipSize, cy - 5, cx + chipSize + 4, cy - 5], [cx + chipSize, cy + 5, cx + chipSize + 4, cy + 5],
    [cx - 5, chipY, cx - 5, chipY - 4], [cx + 5, chipY, cx + 5, chipY - 4],
    [cx - 5, cy + chipSize, cx - 5, cy + chipSize + 4], [cx + 5, cy + chipSize, cx + 5, cy + chipSize + 4]
  ];
  for (var pi = 0; pi < pins.length; pi++) {
    svg += '<line x1="' + pins[pi][0] + '" y1="' + pins[pi][1] + '" x2="' + pins[pi][2] + '" y2="' + pins[pi][3] + '" stroke="var(--acc)" stroke-width=".8"/>';
  }
  // 芯片本体(脉动)
  svg += '<rect class="sun-core" x="' + chipX + '" y="' + chipY + '" width="' + (chipSize * 2) + '" height="' + (chipSize * 2) + '" rx="3" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1"/>';
  // 芯片内核(AI 标识)
  svg += '<rect class="sun-core" x="' + (cx - 8) + '" y="' + (cy - 8) + '" width="16" height="16" rx="2" style="fill:var(--acc)"/>';
  svg += '<text x="' + cx + '" y="' + (cy + 4) + '" font-size="9" font-weight="700" text-anchor="middle" fill="var(--bg)" font-family="var(--mono)">AI</text>';

  // AI 波纹(从芯片向外扩散的圆环)
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + chipSize + '" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="' + chipSize + ';' + chipSize + ';85" dur="3s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.6;0" dur="3s" repeatCount="indefinite"/>' +
         '</circle>';
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + chipSize + '" fill="none" stroke="var(--acc2)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="' + chipSize + ';' + chipSize + ';85" dur="3s" repeatCount="indefinite" begin="1.5s"/>' +
         '<animate attributeName="opacity" values="0;.4;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>' +
         '</circle>';

  svg += '</svg>';
  return svg;
}
