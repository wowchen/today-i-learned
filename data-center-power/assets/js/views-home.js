/* 首页视图(「算电协同链路」——电 → 算 → 调度反馈的闭环 + 沿链路脉冲 SVG · 深青蓝/冷白 双主题) */
window.DTC = window.DTC || {};
DTC.views = DTC.views || {};

DTC.views.home = function() {
  var P = DTC.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = DTC.totalLessons;
  var nextLesson = step < DTC.path.length ? DTC.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + dtcSVG() + '</div>';
  html += '<p class="gh-kicker">数据中心 · 算电协同</p>';
  html += '<h1 class="gh-title">电与算<span>本是一件事</span></h1>';
  html += '<p class="gh-latin">Data Center &middot; Compute-Power Synergy</p>';
  html += '<p class="gh-lede">数据中心吃电,也吃冷;它既是电网眼里的大负荷,又是一块能挪时间、能挪地点、能中断的灵活资源 —— <b>把「电怎么进来」和「算怎么安排」放在一起看,就是算电协同</b>。本站沿着这条链讲:电怎么供、冷怎么散、功耗怎么算,再讲到算力怎么参与需求响应、辅助服务与虚拟电厂。</p>';
  if (nextLesson && DTC.lessons[nextLesson]) {
    var nl = DTC.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + DTC.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(DTC.modules.length, '模块');
  html += metaCell('0', '运行依赖');
  html += metaCell(total, '课时');
  html += metaCell('0%', '商业化');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及供电架构、制冷方案、能耗与 PUE 要求、绿电采购、需求响应与算力调度规则之处,均标注依据与适用期;凡涉具体口径、限值、比例、补偿方式与时间节点之处,一律以现行有效的国家标准、行业标准、价格与市场规则及主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、设备选型、采购、投资或结算依据。</b>具体项目的方案论证、选型、需求响应申报、收益测算与结算核算,请以设计文件、现行标准、真实市场数据与企业实际台账为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + DTC.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < DTC.modules.length; i++) {
    var m = DTC.modules[i];
    var mRead = 0;
    for (var j = 0; j < DTC.path.length; j++) {
      if (DTC.path[j].indexOf(m.id + '/') === 0 && P.isRead(DTC.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + DTC.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + DTC.esc(m.en || '') + '</div>';
    html += '<p>' + DTC.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">TOOL</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>供配电容量与冗余、制冷负荷与液冷选型、PUE 与能效、电费与需量管理、可调节容量与需求响应、储能配置与收益、绿电采购与碳排。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('01', 'PUE 与能效测算器', 'PUE and efficiency');
  html += toolCell('02', '供配电容量与冗余测算器', 'power capacity and redundancy');
  html += toolCell('03', '制冷负荷与液冷选型测算器', 'cooling load and liquid cooling');
  html += toolCell('04', '电费与需量管理测算器', 'bill and demand management');
  html += toolCell('05', '可调节容量与需求响应测算器', 'flexible load and demand response');
  html += toolCell('06', '储能配置与收益测算器', 'storage sizing and revenue');
  html += toolCell('07', '绿电采购与碳排测算器', 'green power and carbon');
  html += '</div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>数据中心与算电协同 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  DTC.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「算电协同链路」——电 → 算 → 调度反馈的闭环
   主回路是一条圆角矩形闭合路径(id="dtclink"):
     上边 = 前向链(电 → 算):电网与新能源 → 数据中心供配电 → IT/GPU 负载 → 制冷 → 算力任务调度,
            五段节点框骑在线上,框体不透明,遮住穿过的线段,只在框与框的缝隙露出连线;
     右侧 + 下边 + 左侧 = 反馈回路(算 → 电网):虚线取 --acc2,
            算力任务调度把「可迁移、可中断」的调节能力反向注入,参与电网需求响应与辅助服务。
   方向由箭头给出:上边向右(前向)、下边向左、右侧向下、左侧向上,合起来是顺时针闭合环。
   两枚脉冲小球沿主回路循环运动(取 --acc / --acc2,错开半个周期),表示电与算之间的持续互动;
   脉冲绘制在节点框之前,穿过框体时被遮住,只在缝隙与反馈段露出。
   关键节点标注:绿电直供 / PUE / 可迁移负载 / 需求响应。
   描边/填色一律取 CSS 变量 --acc / --acc2 / --ink / --note / --paper。
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留)。 */
function dtcSVG() {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" fill="none">';
  var k;

  // 主回路:圆角矩形闭合路径(上边前向,余下三边为反馈)
  var loopD = 'M28 118 Q28 106 40 106 H636 Q648 106 648 118 V204 Q648 216 636 216 H40 Q28 216 28 204 Z';
  // 反馈段:右侧 + 下边 + 左侧(与主回路同轨迹,改画为虚线强调色)
  var backD = 'M648 118 V204 Q648 216 636 216 H40 Q28 216 28 204 V118';

  // ===== 图内主标题 =====
  svg += '<text x="28" y="28" font-size="21" font-weight="700" style="fill:var(--ink)">算电协同链路</text>';
  svg += '<text x="28" y="48" font-size="12.5" style="fill:var(--note)">电能怎么变成算力,算力又怎么回过来调节电</text>';

  // ===== 右上角两行图例 =====
  svg += '<path d="M470 24 h22" style="stroke:var(--acc);stroke-width:2.6"/>';
  svg += '<text x="500" y="28" font-size="11.5" style="fill:var(--note)">前向:电 → 算</text>';
  svg += '<path d="M470 42 h22" style="stroke:var(--acc2);stroke-width:2.6" stroke-dasharray="5 4"/>';
  svg += '<text x="500" y="46" font-size="11.5" style="fill:var(--note)">反馈:算 → 电网</text>';

  // ===== 主回路(可见)+ 反馈段(虚线强调色) =====
  svg += '<path id="dtclink" d="' + loopD + '" style="stroke:var(--acc);stroke-width:2.6" stroke-linejoin="round"/>';
  svg += '<path d="' + backD + '" style="stroke:var(--acc2);stroke-width:2.6" stroke-linejoin="round" stroke-dasharray="6 5"/>';

  // ===== 与主回路同轨迹的隐形 path,供脉冲运动 =====
  svg += '<path id="dtclink" d="' + loopD + '" fill="none" stroke="none"/>';

  // ===== 沿主回路循环的两枚脉冲(错开半个周期) =====
  svg += dtcPulse('dtclink', 'var(--acc)', 9, 0);
  svg += dtcPulse('dtclink', 'var(--acc2)', 9, 4.5);

  // ===== 五个节点框(骑在主回路上边的前向链上,遮住穿过的线段) =====
  var boxes = [
    { x: 28,  label: '电网与新能源', sub: '绿电 · 市电' },
    { x: 157, label: '数据中心供配电', sub: '变压器 · UPS' },
    { x: 286, label: 'IT / GPU 负载', sub: '算力负载' },
    { x: 415, label: '制冷系统', sub: '风冷 · 液冷' },
    { x: 544, label: '算力任务调度', sub: '可迁移 · 可中断' }
  ];
  for (k = 0; k < boxes.length; k++) {
    var b = boxes[k];
    var cx = b.x + 52;
    svg += '<rect x="' + b.x + '" y="83" width="104" height="46" rx="8" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.6"/>';
    svg += '<text x="' + cx + '" y="104" font-size="12.5" font-weight="700" text-anchor="middle" style="fill:var(--ink)">' + b.label + '</text>';
    svg += '<text x="' + cx + '" y="120" font-size="10.5" text-anchor="middle" style="fill:var(--note)">' + b.sub + '</text>';
  }

  // ===== 方向箭头:上边向右(前向),下边向左 / 右侧向下 / 左侧向上(反馈) =====
  var fx = [144, 273, 402, 531];
  for (k = 0; k < fx.length; k++) svg += dtcArrowR(fx[k], 106, 'var(--acc)');
  var lx = [600, 470, 340, 210, 90];
  for (k = 0; k < lx.length; k++) svg += dtcArrowL(lx[k], 216, 'var(--acc2)');
  svg += dtcArrowD(648, 160, 'var(--acc2)');
  svg += dtcArrowU(28, 160, 'var(--acc2)');

  // ===== 调度 → 反馈回路的注入支线:可迁移、可中断的调节能力 =====
  svg += '<path d="M612 131 V204" style="stroke:var(--acc2);stroke-width:1.8" stroke-dasharray="4 4"/>';
  svg += dtcArrowD(612, 200, 'var(--acc2)');

  // ===== 关键节点标注 =====
  svg += '<text x="144" y="74" font-size="11.5" text-anchor="middle" style="fill:var(--acc2)">绿电直供</text>';
  svg += '<text x="467" y="74" font-size="11.5" text-anchor="middle" style="fill:var(--acc2)">PUE</text>';
  svg += '<text x="596" y="158" font-size="11.5" text-anchor="end" style="fill:var(--acc2)">可迁移负载</text>';
  svg += '<text x="596" y="176" font-size="11.5" text-anchor="end" style="fill:var(--acc2)">可中断负载</text>';
  svg += '<text x="300" y="200" font-size="12" text-anchor="middle" style="fill:var(--acc2)">需求响应 · 辅助服务</text>';

  // ===== 底部一句话收束 =====
  svg += '<text x="28" y="250" font-size="11.5" style="fill:var(--note)">闭环:电价与绿电引导算力的去处,算力的可调性再回过来支撑电网。</text>';

  svg += '</svg>';
  return svg;
}

/* 单向三角箭头:右 / 左 / 下 / 上 */
function dtcArrowR(x, y, c) {
  return '<polygon points="' + (x - 4) + ',' + (y - 4) + ' ' + (x - 4) + ',' + (y + 4) + ' ' + (x + 5) + ',' + y + '" style="fill:' + c + '"/>';
}
function dtcArrowL(x, y, c) {
  return '<polygon points="' + (x + 4) + ',' + (y - 4) + ' ' + (x + 4) + ',' + (y + 4) + ' ' + (x - 5) + ',' + y + '" style="fill:' + c + '"/>';
}
function dtcArrowD(x, y, c) {
  return '<polygon points="' + (x - 4) + ',' + (y - 5) + ' ' + (x + 4) + ',' + (y - 5) + ' ' + x + ',' + (y + 4) + '" style="fill:' + c + '"/>';
}
function dtcArrowU(x, y, c) {
  return '<polygon points="' + (x - 4) + ',' + (y + 5) + ' ' + (x + 4) + ',' + (y + 5) + ' ' + x + ',' + (y - 4) + '" style="fill:' + c + '"/>';
}

/* 通用脉冲小球:沿给定 path id 运动 */
function dtcPulse(pathId, color, dur, delay) {
  return '<circle r="2.4" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}
