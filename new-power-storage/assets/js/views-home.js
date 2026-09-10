/* 首页视图(源网荷储四要素闭环 + 能量流动脉冲 · 能源绿/青绿双主题) */
window.NPS = window.NPS || {};
NPS.views = NPS.views || {};

NPS.views.home = function() {
  var P = NPS.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = NPS.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < NPS.path.length ? NPS.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + npsSVG() + '</div>';
  html += '<p class="gh-kicker">新型电力系统 · 大白话讲透</p>';
  html += '<h1 class="gh-title">新型电力系统<em>与</em>储能</h1>';
  html += '<p class="gh-latin">New-type Power System · Energy Storage</p>';
  html += '<p class="gh-lede">新能源成为供给主体之后,发电不再只跟着负荷走,而是源、网、荷、储一起追着电走。<b>本站讲清两件事:</b>新型电力系统为什么必须这么变,以及储能从技术路线、系统集成、应用场景到市场机制的全貌。</p>';
  if (nextLesson && NPS.lessons[nextLesson]) {
    var nl = NPS.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + NPS.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(NPS.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('5', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + NPS.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < NPS.modules.length; i++) {
    var m = NPS.modules[i];
    var mRead = 0;
    for (var j = 0; j < NPS.path.length; j++) {
      if (NPS.path[j].indexOf(m.id + '/') === 0 && P.isRead(NPS.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + NPS.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + NPS.esc(m.en || '') + '</div>';
    html += '<p>' + NPS.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>源网荷储平衡模拟、储能配置计算、技术路线对比、峰谷套利测算、SOH 与安全评估。</p>';
  html += '<div class="prog">5 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◎', '源网荷储平衡模拟器', 'balance simulator');
  html += toolCell('◇', '储能配置计算器', 'storage sizing');
  html += toolCell('≡', '储能技术路线对比器', 'tech comparison');
  html += toolCell('¥', '峰谷套利收益测算器', 'arbitrage calculator');
  html += toolCell('✓', 'SOH 与安全评估器', 'health and safety');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电网通识(已有 <b>电网通识站</b>),也不讲 AI 在电力怎么用(已有 <b>AI+电力站</b>),只聚焦新型电力系统这条主线:<b>电源、电网、稳定、储能、市场</b>五个环节到底怎么变,以及储能从抽水蓄能到锂电、从电芯到电站、从峰谷套利到容量补偿的完整图景。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>为什么新能源成为主体后,全网都要学会调节;</li>' +
          '<li>惯量下降为什么是新型系统最硬的技术约束;</li>' +
          '<li>抽蓄、锂电、液流、压缩空气各自适合什么场景;</li>' +
          '<li>储能电站的钱到底从哪几条线来,为什么不能简单相加。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">内容基线 2026 年 9 月。涉电价、市场规则与政策之处均以现行有效文件为准,并会随政策更新而变化;本站为通识科普,不构成投资、交易或合规依据,不提供任何规避或筹划方案。涉及电网安全处强调「技术辅助决策,人做最终判断」。数字写量级与口径,不荐产品、不点名供应商。</p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>新型电力系统与储能 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用</span></div>';

  NPS.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:源网荷储四要素沿闭环排列,能量脉冲顺时针流动;
   源(光伏) → 网(输电线塔) → 储(电池) → 荷(厂房),中央为新型电力系统标识;
   描边/填色随主题取 --acc / --acc2 / --acc-soft
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function npsSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 闭环路径:x 52..148, y 48..152, 圆角 20
  var loopD = 'M72 48 H128 a20 20 0 0 1 20 20 V132 a20 20 0 0 1 -20 20 H72 a20 20 0 0 1 -20 -20 V68 a20 20 0 0 1 20 -20 Z';

  // 底线(静态) + 复用路径(供脉冲沿其运动)
  svg += '<path d="' + loopD + '" fill="none" stroke="var(--acc2)" stroke-width=".9" opacity=".28"/>';
  svg += '<path id="npsloop" d="' + loopD + '" fill="none" stroke="none"/>';

  // 能量脉冲:4 枚沿闭环顺时针流动
  var pulseColors = ['var(--acc)', 'var(--acc2)', 'var(--acc)', 'var(--acc2)'];
  for (var p = 0; p < 4; p++) {
    var dur = 8;
    var delay = p * 2;
    svg += '<circle r="2.1" style="fill:' + pulseColors[p] + '">' +
           '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's" rotate="auto">' +
           '<mpath href="#npsloop"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/>' +
           '</circle>';
  }

  // 四要素节点(顶 源 / 右 网 / 底 储 / 左 荷)
  svg += nodeAt(100, 48, '源', 'GEN');
  svg += nodeAt(148, 100, '网', 'GRID');
  svg += nodeAt(100, 152, '储', 'ESS');
  svg += nodeAt(52, 100, '荷', 'LOAD');

  // 节点内图形
  svg += glyphSun(100, 48);
  svg += glyphTower(148, 100);
  svg += glyphBattery(100, 152);
  svg += glyphLoad(52, 100);

  // 中央标识:圆环 + 闪电
  svg += '<circle class="sun-core" cx="100" cy="100" r="24" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1"/>';
  svg += '<path d="M104 86 L92 102 h8 l-4 12 12 -16 h-8 z" style="fill:var(--acc)"/>';
  svg += '<circle cx="100" cy="100" r="24" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="24;24;72" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.45;0" dur="4s" repeatCount="indefinite"/>' +
         '</circle>';
  svg += '<circle cx="100" cy="100" r="24" fill="none" stroke="var(--acc2)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="24;24;72" dur="4s" repeatCount="indefinite" begin="2s"/>' +
         '<animate attributeName="opacity" values="0;.3;0" dur="4s" repeatCount="indefinite" begin="2s"/>' +
         '</circle>';

  svg += '</svg>';
  return svg;
}

/* 节点圆 + 中文标签(标签按方位外置,避免压线) */
function nodeAt(x, y, cn, en) {
  var s = '';
  s += '<circle cx="' + x + '" cy="' + y + '" r="13" style="fill:var(--paper);stroke:var(--acc2);stroke-width:.9"/>';
  if (y < 60) {
    s += '<text x="' + x + '" y="' + (y - 20) + '" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">' + cn + '</text>';
    s += '<text x="' + x + '" y="' + (y - 30) + '" font-size="6" text-anchor="middle" style="fill:var(--note)">' + en + '</text>';
  } else if (x > 120) {
    s += '<text x="' + (x + 19) + '" y="' + (y + 1) + '" font-size="9" font-weight="700" style="fill:var(--acc)">' + cn + '</text>';
    s += '<text x="' + (x + 19) + '" y="' + (y + 10) + '" font-size="6" style="fill:var(--note)">' + en + '</text>';
  } else if (y > 140) {
    s += '<text x="' + x + '" y="' + (y + 26) + '" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">' + cn + '</text>';
    s += '<text x="' + x + '" y="' + (y + 35) + '" font-size="6" text-anchor="middle" style="fill:var(--note)">' + en + '</text>';
  } else {
    s += '<text x="' + (x - 19) + '" y="' + (y + 1) + '" font-size="9" font-weight="700" text-anchor="end" style="fill:var(--acc)">' + cn + '</text>';
    s += '<text x="' + (x - 19) + '" y="' + (y + 10) + '" font-size="6" text-anchor="end" style="fill:var(--note)">' + en + '</text>';
  }
  return s;
}

/* 源:光伏组件(方格)+ 辐照光线 */
function glyphSun(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1;fill:none">';
  s += '<rect x="' + (x - 5) + '" y="' + (y - 4) + '" width="10" height="8" rx="1"/>';
  s += '<path d="M' + (x - 5) + ' ' + y + ' h10 M' + x + ' ' + (y - 4) + ' v8"/>';
  s += '<path d="M' + (x - 8) + ' ' + (y - 7) + ' l-2 -2 M' + (x + 8) + ' ' + (y - 7) + ' l2 -2 M' + x + ' ' + (y - 8) + ' v-3"/>';
  s += '</g>';
  return s;
}

/* 网:输电塔 */
function glyphTower(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1;fill:none">';
  s += '<path d="M' + (x - 6) + ' ' + (y + 5) + ' L' + x + ' ' + (y - 6) + ' L' + (x + 6) + ' ' + (y + 5) + '"/>';
  s += '<path d="M' + (x - 4) + ' ' + (y - 1) + ' h8 M' + (x - 5) + ' ' + (y + 2) + ' h10 M' + (x - 2) + ' ' + (y - 4) + ' h4"/>';
  s += '</g>';
  return s;
}

/* 储:电池(含电量条) */
function glyphBattery(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1;fill:none">';
  s += '<rect x="' + (x - 7) + '" y="' + (y - 4) + '" width="12" height="8" rx="1.5"/>';
  s += '<path d="M' + (x + 5) + ' ' + (y - 1.5) + ' h2.5 v3 h-2.5"/>';
  s += '<path d="M' + (x - 5) + ' ' + (y - 2) + ' v4 M' + (x - 2.5) + ' ' + (y - 2) + ' v4 M' + x + ' ' + (y - 2) + ' v4" style="stroke-width:1.6"/>';
  s += '</g>';
  return s;
}

/* 荷:厂房 */
function glyphLoad(x, y) {
  var s = '<g style="stroke:var(--acc);stroke-width:1;fill:none">';
  s += '<path d="M' + (x - 7) + ' ' + (y + 5) + ' v-6 l4 -4 v10"/>';
  s += '<path d="M' + (x - 3) + ' ' + (y + 5) + ' v-10 h10 v10 z"/>';
  s += '<path d="M' + (x + 1) + ' ' + (y - 2) + ' h4 M' + (x + 1) + ' ' + (y + 2) + ' h4"/>';
  s += '</g>';
  return s;
}
