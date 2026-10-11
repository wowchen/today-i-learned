/* 首页视图(「资源聚合图」——分散资源 → 聚合平台 → 统一参与市场 + 沿主干脉冲 SVG · 深紫罗兰/冷白 双主题) */
window.VPP = window.VPP || {};
VPP.views = VPP.views || {};

VPP.views.home = function() {
  var P = VPP.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = VPP.totalLessons;
  var nextLesson = step < VPP.path.length ? VPP.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + vppSVG() + '</div>';
  html += '<p class="gh-kicker">虚拟电厂 · 资源聚合</p>';
  html += '<h1 class="gh-title">散落的电<span>聚成电厂</span></h1>';
  html += '<p class="gh-latin">Virtual Power Plant · Aggregation</p>';
  html += '<p class="gh-lede">一堆散在各处的负荷、空调、储能、光伏和电动车,单看谁都小得没法进场 —— <b>把它们聚起来、统一调控、像一个电厂那样去参与需求响应、辅助服务与现货交易,就是虚拟电厂</b>。本站沿着这条链讲:资源怎么盘、平台怎么搭、可调能力怎么算、市场怎么进、钱怎么分、项目怎么落。</p>';
  if (nextLesson && VPP.lessons[nextLesson]) {
    var nl = VPP.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + VPP.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(VPP.modules.length, '模块');
  html += metaCell('0', '纯静态');
  html += metaCell(total, '课时');
  html += metaCell('0%', '商业化');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及聚合商准入、资源接入规范、需求响应补偿标准、辅助服务与现货市场参与规则之处,均标注依据与适用期;凡涉具体口径、限值、比例、考核方式与时间节点之处,一律以现行有效的国家标准、市场规则、价格文件与主管部门规定为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、投标、投资测算、报价或结算依据。</b>具体项目的方案论证、聚合商准入申报、资源签约、收益测算与结算核算,请以现行标准、市场规则、合同文本与企业实际台账为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + VPP.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < VPP.modules.length; i++) {
    var m = VPP.modules[i];
    var mRead = 0;
    for (var j = 0; j < VPP.path.length; j++) {
      if (VPP.path[j].indexOf(m.id + '/') === 0 && P.isRead(VPP.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + VPP.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + VPP.esc(m.en || '') + ' · ' + VPP.esc(m.tag || '') + '</div>';
    html += '<p>' + VPP.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">TOOL</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox · 边读边算</div>';
  html += '<p>可调容量聚合测算、需求响应收益测算、基线负荷与核减测算、聚合商分成测算、辅助服务收益测算、车网互动收益测算、项目投资测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('01', '可调容量聚合测算器', 'aggregated adjustable capacity');
  html += toolCell('02', '需求响应收益测算器', 'demand response revenue');
  html += toolCell('03', '基线负荷与核减测算器', 'baseline load and reduction');
  html += toolCell('04', '聚合商分成测算器', 'aggregator revenue split');
  html += toolCell('05', '参与辅助服务收益测算器', 'ancillary service revenue');
  html += toolCell('06', '车网互动收益测算器', 'vehicle-to-grid revenue');
  html += toolCell('07', '虚拟电厂项目投资测算器', 'project investment return');
  html += '</div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>虚拟电厂 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  VPP.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「资源聚合图」——左半部分是六类分散的可调节资源(可中断负荷 / 分布式光伏 /
   电动汽车 / 空调 / 储能 / 柴发),每类是一个圆角小方块 + 中文标注;
   所有资源用虚线(量测与控制链路)水平汇入中间的聚合平台/主站;
   平台右侧三路实线出线(能量与结算流向)指向需求响应 / 辅助服务 / 现货市场,
   出线末端带箭头,表示「统一参与市场」;
   主干为一条从资源簇穿过平台、汇入辅助服务市场的曲线(id="vppnet",实线),
   两枚脉冲小球沿主干运动(取 --acc / --acc2),错开半个周期;
   另有一条与主干同轨迹的隐形 path,同样取 id="vppnet",供 animateMotion 引用;
   左上角图内标题,右上角两行图例(虚线 = 量测与控制 / 实线 = 能量与结算)。
   描边/填色一律取 CSS 变量 --acc / --acc2 / --acc-soft / --paper / --ink / --note。
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留)。 */
function vppSVG() {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" fill="none">';
  var k;

  // 主干轨迹:从左侧资源簇出发,穿过聚合平台,汇入辅助服务市场
  var trunkD = 'M114 134 C180 134 240 144 300 146 C360 148 430 140 490 134';

  // 六类可调节资源(左半部分两列错落:每列三个圆角小方块)
  var res = [
    { x: 30, y: 49, w: 84, h: 26, t: '可中断负荷' },
    { x: 30, y: 113, w: 84, h: 26, t: '分布式光伏' },
    { x: 30, y: 177, w: 84, h: 26, t: '电动汽车' },
    { x: 146, y: 86, w: 84, h: 26, t: '空调' },
    { x: 146, y: 150, w: 84, h: 26, t: '储能' },
    { x: 146, y: 214, w: 84, h: 26, t: '柴发' }
  ];

  // ===== 右上角图例(两行:虚线 / 实线) =====
  svg += '<path d="M492 28 h22" style="stroke:var(--note);stroke-width:1.6" stroke-dasharray="4 4"/>';
  svg += '<text x="522" y="32" font-size="12" style="fill:var(--note)">量测与控制</text>';
  svg += '<path d="M492 46 h22" style="stroke:var(--acc);stroke-width:3" stroke-linecap="round"/>';
  svg += '<text x="522" y="50" font-size="12" style="fill:var(--note)">能量与结算</text>';

  // ===== 各资源汇入平台的虚线链路(先画,再由平台矩形收口) =====
  var links = '';
  for (k = 0; k < res.length; k++) {
    links += '<path d="M' + (res[k].x + res[k].w) + ' ' + (res[k].y + res[k].h / 2) + ' H306"/>';
  }
  svg += vppG(links);

  // ===== 中间:聚合平台 / 主站 =====
  svg += '<rect x="306" y="90" width="120" height="90" rx="8" style="fill:var(--paper);stroke:var(--acc);stroke-width:2"/>';

  // ===== 主干(可见):实线,表示能量与结算流向 =====
  svg += '<path id="vppnet" d="' + trunkD + '" style="stroke:var(--acc);stroke-width:3.2" stroke-linecap="round"/>';

  // ===== 与主干同轨迹的隐形 path,供脉冲小球运动 =====
  svg += '<path id="vppnet" d="' + trunkD + '" fill="none" stroke="none"/>';

  // ===== 沿主干运动的脉冲:资源侧汇聚、平台侧出清 =====
  svg += vppPulse('vppnet', 'var(--acc)', 8, 0);
  svg += vppPulse('vppnet', 'var(--acc2)', 8, 4);

  // ===== 六类资源:小方块 + 中文标注 =====
  for (k = 0; k < res.length; k++) {
    var r = res[k];
    svg += '<rect x="' + r.x + '" y="' + r.y + '" width="' + r.w + '" height="' + r.h +
           '" rx="5" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.4"/>';
    svg += '<text x="' + (r.x + r.w / 2) + '" y="' + (r.y + 17.5) +
           '" font-size="12.5" text-anchor="middle" style="fill:var(--ink)">' + r.t + '</text>';
  }

  // ===== 平台标注 =====
  svg += '<text x="366" y="112" font-size="17" font-weight="700" text-anchor="middle" style="fill:var(--acc)">聚合平台</text>';
  svg += '<text x="366" y="134" font-size="12" text-anchor="middle" style="fill:var(--note)">主站</text>';

  // ===== 三路出线:实线 + 箭头,指向三个市场 =====
  svg += '<path d="M426 118 C450 118 452 78 480 78" style="stroke:var(--acc2);stroke-width:2.2"/>';
  svg += '<polygon points="490,78 479,72.6 479,83.4" style="fill:var(--acc2)"/>';
  svg += '<path d="M426 158 C450 158 452 190 480 190" style="stroke:var(--acc2);stroke-width:2.2"/>';
  svg += '<polygon points="490,190 479,184.6 479,195.4" style="fill:var(--acc2)"/>';
  svg += '<polygon points="490,134 479,128.6 479,139.4" style="fill:var(--acc2)"/>';

  // ===== 右侧三个市场 =====
  var mkt = [
    { y: 62, t: '需求响应' },
    { y: 118, t: '辅助服务' },
    { y: 174, t: '现货市场' }
  ];
  for (k = 0; k < mkt.length; k++) {
    svg += '<rect x="490" y="' + mkt[k].y + '" width="150" height="32" rx="6" style="fill:var(--acc-soft);stroke:var(--acc);stroke-width:1.6"/>';
    svg += '<text x="565" y="' + (mkt[k].y + 21) + '" font-size="15" font-weight="600" text-anchor="middle" style="fill:var(--acc)">' + mkt[k].t + '</text>';
  }

  // ===== 图内主标题 =====
  svg += '<text x="34" y="24" font-size="22" font-weight="700" style="fill:var(--ink)">资源聚合图</text>';
  svg += '<text x="34" y="43" font-size="13" style="fill:var(--note)">分散资源 → 聚合平台 → 统一参与市场</text>';

  svg += '</svg>';
  return svg;
}

/* 统一虚线分组:资源到平台的量测与控制链路 */
function vppG(inner) {
  return '<g style="stroke:var(--note);stroke-width:1.3;fill:none" stroke-dasharray="4 5" opacity=".6">' + inner + '</g>';
}

/* 通用脉冲小球:沿给定 path id 运动 */
function vppPulse(pathId, color, dur, delay) {
  return '<circle r="2.1" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}
