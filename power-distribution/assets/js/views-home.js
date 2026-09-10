/* 首页视图(配电网馈线拓扑 + 电流流动脉冲 · 电力橙/石墨双主题) */
window.PDN = window.PDN || {};
PDN.views = PDN.views || {};

PDN.views.home = function() {
  var P = PDN.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = PDN.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < PDN.path.length ? PDN.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + pdnSVG() + '</div>';
  html += '<p class="gh-kicker">配电网 · 大白话讲透</p>';
  html += '<h1 class="gh-title">配电网<em>与</em>配电自动化</h1>';
  html += '<p class="gh-latin">Power Distribution · Distribution Automation</p>';
  html += '<p class="gh-lede">从变电站出线到用户电表之间这张网,才是绝大多数停电真正发生的地方。<b>本站讲清两件事:</b>配电网为什么要分成高压、中压、低压三层来搭,以及配电自动化怎么把「故障找半天」变成「几分钟定位、隔离、恢复送电」。</p>';
  if (nextLesson && PDN.lessons[nextLesson]) {
    var nl = PDN.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + PDN.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(PDN.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + PDN.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < PDN.modules.length; i++) {
    var m = PDN.modules[i];
    var mRead = 0;
    for (var j = 0; j < PDN.path.length; j++) {
      if (PDN.path[j].indexOf(m.id + '/') === 0 && P.isRead(PDN.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + PDN.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + PDN.esc(m.en || '') + '</div>';
    html += '<p>' + PDN.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>负荷预测与容载比、线损率测算、自动化覆盖与效益、故障处置推演、分布式光伏承载力。</p>';
  html += '<div class="prog">5 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '负荷预测与容载比', 'load and capacity');
  html += toolCell('≈', '线损率测算与降损', 'line loss');
  html += toolCell('▣', '自动化覆盖与效益', 'automation benefit');
  html += toolCell('⊗', '配网故障处置推演', 'fault restoration');
  html += toolCell('◐', '分布式光伏承载力', 'PV hosting capacity');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电网通识(已有 <b>电网通识站</b>),不讲新型电力系统与储能(已有 <b>新型电力系统站</b>),也不讲 AI 在电力怎么用(已有 <b>AI+电力站</b>),只聚焦配电这一层:<b>网怎么搭、设备怎么选、终端怎么采、通信怎么传、自动化怎么动、可靠性和线损怎么管</b>。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>高压、中压、低压配电网各管哪一段,为什么这么分;</li>' +
          '<li>FTU、DTU、TTU 分别装在哪、管什么,为什么容易搞混;</li>' +
          '<li>就地型、集中型、智能分布式三种配电自动化模式怎么选;</li>' +
          '<li>一条线路故障后,隔离范围与恢复时间到底由什么决定;</li>' +
          '<li>分布式光伏装多了,为什么电压会被顶高、承载力怎么算。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">内容基线 2026 年 9 月。涉配电网技术标准、供电监管要求与政策之处均以现行有效文件为准,并会随标准与政策更新而变化;本站为通识科普,不构成工程设计、施工或合规依据,具体工程须以正式设计文件、现行标准与现场实际为准。数字写量级与口径,不荐产品、不点名厂商。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>配电网与配电自动化 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  PDN.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:配电网单电源馈线拓扑,电流脉冲沿线路流动;
   变电站(双绕组变压器)→ 主馈线 → 分段开关 × 2 → 馈线末端,两条分支下接台区配变;
   描边/填色随主题取 --acc / --acc2 / --acc-soft
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function pdnSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  var feedD = 'M28 55 H176';
  var br1D = 'M88 55 V140';
  var br2D = 'M142 55 V140';

  // 基础线网(静态)
  svg += '<path d="' + feedD + '" fill="none" stroke="var(--acc2)" stroke-width="1.1" opacity=".3" stroke-linecap="round"/>';
  svg += '<path d="' + br1D + '" fill="none" stroke="var(--acc2)" stroke-width="1.1" opacity=".3" stroke-linecap="round"/>';
  svg += '<path d="' + br2D + '" fill="none" stroke="var(--acc2)" stroke-width="1.1" opacity=".3" stroke-linecap="round"/>';

  // 供脉冲运动的复用路径
  svg += '<path id="pdnfeed" d="' + feedD + '" fill="none" stroke="none"/>';
  svg += '<path id="pdnbr1" d="' + br1D + '" fill="none" stroke="none"/>';
  svg += '<path id="pdnbr2" d="' + br2D + '" fill="none" stroke="none"/>';

  // 电流脉冲:主馈线 3 枚同向流动 + 两条分支各 1 枚向下
  var k;
  for (k = 0; k < 3; k++) {
    svg += '<circle r="2.2" style="fill:var(--acc)">' +
           '<animateMotion dur="6s" repeatCount="indefinite" begin="' + (k * 2) + 's">' +
           '<mpath href="#pdnfeed"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="6s" repeatCount="indefinite" begin="' + (k * 2) + 's"/>' +
           '</circle>';
  }
  svg += '<circle r="2.2" style="fill:var(--acc2)">' +
         '<animateMotion dur="4s" repeatCount="indefinite" begin="0s"><mpath href="#pdnbr1"/></animateMotion>' +
         '<animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite" begin="0s"/></circle>';
  svg += '<circle r="2.2" style="fill:var(--acc2)">' +
         '<animateMotion dur="4s" repeatCount="indefinite" begin="1.6s"><mpath href="#pdnbr2"/></animateMotion>' +
         '<animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite" begin="1.6s"/></circle>';

  // 变电站节点(左端,双绕组变压器符号) + 呼吸光环
  svg += '<circle cx="28" cy="55" r="13" style="fill:var(--paper);stroke:var(--acc);stroke-width:1"/>';
  svg += '<circle cx="25" cy="55" r="4.6" fill="none" style="stroke:var(--acc);stroke-width:.9"/>';
  svg += '<circle cx="31" cy="55" r="4.6" fill="none" style="stroke:var(--acc);stroke-width:.9"/>';
  svg += '<circle cx="28" cy="55" r="13" fill="none" stroke="var(--acc)" stroke-width=".9" opacity="0">' +
         '<animate attributeName="r" values="13;13;34" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.4;0" dur="4s" repeatCount="indefinite"/></circle>';
  svg += '<circle cx="28" cy="55" r="13" fill="none" stroke="var(--acc2)" stroke-width=".9" opacity="0">' +
         '<animate attributeName="r" values="13;13;34" dur="4s" repeatCount="indefinite" begin="2s"/>' +
         '<animate attributeName="opacity" values="0;.28;0" dur="4s" repeatCount="indefinite" begin="2s"/></circle>';

  // 分段开关(方形,主馈线上)
  svg += swAt(88, 55);
  svg += swAt(142, 55);

  // 馈线末端节点
  svg += '<circle cx="176" cy="55" r="6.5" style="fill:var(--paper);stroke:var(--acc2);stroke-width:1"/>';

  // 台区配变(分支末端)
  svg += taAt(88, 148);
  svg += taAt(142, 148);

  // 标签(方位外置)
  svg += '<text x="28" y="31" font-size="8.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">变电站</text>';
  svg += '<text x="28" y="40" font-size="5.6" text-anchor="middle" style="fill:var(--note)">SUBSTATION</text>';
  svg += '<text x="88" y="43" font-size="7.5" text-anchor="middle" style="fill:var(--note)">分段开关</text>';
  svg += '<text x="142" y="43" font-size="7.5" text-anchor="middle" style="fill:var(--note)">分段开关</text>';
  svg += '<text x="176" y="74" font-size="7.5" text-anchor="middle" style="fill:var(--note)">馈线末端</text>';
  svg += '<text x="88" y="173" font-size="8.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">台区</text>';
  svg += '<text x="142" y="173" font-size="8.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">台区</text>';

  svg += '</svg>';
  return svg;
}

/* 分段开关:主馈线上的方形开关 + 上下短引线 */
function swAt(x, y) {
  var s = '';
  s += '<path d="M' + x + ' ' + (y - 9) + ' v3 M' + x + ' ' + (y + 6) + ' v3" style="stroke:var(--acc);stroke-width:1" fill="none"/>';
  s += '<rect x="' + (x - 5.5) + '" y="' + (y - 6) + '" width="11" height="12" rx="1.5" style="fill:var(--paper);stroke:var(--acc);stroke-width:1"/>';
  s += '<path d="M' + (x - 2.5) + ' ' + y + ' h5" style="stroke:var(--acc);stroke-width:1" fill="none"/>';
  return s;
}

/* 台区节点:配变箱体符号 */
function taAt(x, y) {
  var s = '';
  s += '<circle cx="' + x + '" cy="' + y + '" r="9.5" style="fill:var(--paper);stroke:var(--acc2);stroke-width:1"/>';
  s += '<rect x="' + (x - 4) + '" y="' + (y - 3.4) + '" width="8" height="6.8" rx="1" style="fill:none;stroke:var(--acc);stroke-width:.9"/>';
  s += '<path d="M' + (x - 4) + ' ' + y + ' h8" style="stroke:var(--acc);stroke-width:.9" fill="none"/>';
  return s;
}
