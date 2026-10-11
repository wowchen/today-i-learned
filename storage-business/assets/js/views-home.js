/* 首页视图(「储能收益构成与充放循环」——一天的电价曲线与储能充放 + 收益构成堆叠条 + 沿曲线脉冲 SVG · 深青绿/冷白 双主题) */
window.ESB = window.ESB || {};
ESB.views = ESB.views || {};

ESB.views.home = function() {
  var P = ESB.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = ESB.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < ESB.path.length ? ESB.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + esbSVG() + '</div>';
  html += '<p class="gh-kicker">储能 · 商业模式</p>';
  html += '<h1 class="gh-title">把储能的<span>账算明白</span></h1>';
  html += '<p class="gh-latin">Energy Storage Business</p>';
  html += '<p class="gh-lede">储能不能只靠一个收入活着 —— <b>峰谷套利、需量管理、容量租赁、辅助服务、现货套利要叠在一起看</b>。这座站不讲电池怎么造,讲的是储能靠什么赚钱、账怎么算、风险在哪、钱从谁口袋里出。</p>';
  if (nextLesson && ESB.lessons[nextLesson]) {
    var nl = ESB.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + ESB.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(ESB.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及电价机制、辅助服务补偿、容量租赁与补贴政策之处,均标注依据与适用期;凡涉具体口径、限值、比例、结算方式与时间节点之处,一律以现行有效的价格文件、市场规则、主管部门文件与结算办法为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成投资测算、项目决策、报价、财务或结算依据。</b>具体项目的收益测算、投资决策与结算核算,请以现行价格文件、真实市场数据与企业实际台账为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + ESB.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < ESB.modules.length; i++) {
    var m = ESB.modules[i];
    var mRead = 0;
    for (var j = 0; j < ESB.path.length; j++) {
      if (ESB.path[j].indexOf(m.id + '/') === 0 && P.isRead(ESB.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + ESB.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + ESB.esc(m.en || '') + '</div>';
    html += '<p>' + ESB.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">TOOL</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>储能收益测算、峰谷套利、容量与功率配置、辅助服务收益、LCOS 度电成本、共享储能分摊、投资回报测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('01', '储能收益测算器', 'storage revenue');
  html += toolCell('02', '峰谷套利测算器', 'peak-valley arbitrage');
  html += toolCell('03', '储能容量与功率配置器', 'capacity and power sizing');
  html += toolCell('04', '辅助服务收益测算器', 'ancillary service revenue');
  html += toolCell('05', 'LCOS 度电成本测算器', 'levelized cost of storage');
  html += toolCell('06', '共享储能分摊测算器', 'shared storage allocation');
  html += toolCell('07', '储能投资回报测算器', 'investment return');
  html += '</div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>储能商业模式 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  ESB.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「储能收益构成与充放循环」——左 2/3 是一天的电价曲线,右 1/3 是收益构成堆叠条
   左图:横轴 = 一天 24 小时,纵轴 = 电价;实线为双峰电价曲线(谷段低 / 午间小峰 / 晚间大峰),
         谷段画向下箭头块标「充」,峰段画向上箭头块标「放」,两者之间一条带箭头的连线表示
         能量转移,标「低充高放」;一条竖向虚线把谷价与峰价连起来,中间标「峰谷价差」;
         两枚脉冲小球沿电价曲线运动,取 --acc / --acc2,表示一天里电池的充放循环。
   右图:四段横向堆叠条(峰谷套利 / 需量管理 / 容量租赁 / 辅助服务),深浅与描边区分,
         下方小字标「收益叠加」与「一份投资,几份收入」;右下角两行小图例。
   描边/填色一律取 CSS 变量 --acc / --acc2 / --acc-soft / --ink / --note / --line。
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留)。 */
function esbSVG() {
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" fill="none">';
  var k;

  // 双峰日电价曲线的轨迹(谷段低,午间小峰,晚间大峰)
  var priceD = 'M62 132' +
    ' C76.3 132 81.7 174 96 174' +
    ' C117 174 125 180 146 180' +
    ' C160.3 180 165.7 148 180 148' +
    ' C194.3 148 199.7 118 214 118' +
    ' C228.3 118 233.7 102 248 102' +
    ' C255.1 102 257.9 94 265 94' +
    ' C278.9 94 284.1 118 298 118' +
    ' C312.3 118 317.7 140 332 140' +
    ' C346.3 140 351.7 108 366 108' +
    ' C380.3 108 385.7 86 400 86' +
    ' C414.3 86 419.7 80 434 80' +
    ' C441.6 80 444.4 124 452 124' +
    ' C458.7 124 461.3 134 468 134';

  // ===== 坐标轴:纵轴 = 电价,横轴 = 一天 24 小时 =====
  var axes = '';
  axes += '<line x1="62" y1="72" x2="62" y2="206"/>';
  axes += '<line x1="62" y1="206" x2="468" y2="206"/>';
  var hrs = [62, 129.7, 197.3, 265, 332.7, 400.3, 468];
  for (k = 0; k < hrs.length; k++) axes += '<line x1="' + hrs[k] + '" y1="206" x2="' + hrs[k] + '" y2="212"/>';
  var levels = [80, 130, 180];
  for (k = 0; k < levels.length; k++) axes += '<line x1="56" y1="' + levels[k] + '" x2="62" y2="' + levels[k] + '"/>';
  svg += esbG(axes);
  svg += '<text x="54" y="66" font-size="13" text-anchor="end" style="fill:var(--note)">电价</text>';
  svg += '<text x="468" y="240" font-size="13" text-anchor="end" style="fill:var(--note)">时刻</text>';
  var ticks = ['0', '4', '8', '12', '16', '20', '24'];
  for (k = 0; k < ticks.length; k++) {
    svg += '<text x="' + hrs[k] + '" y="228" font-size="12" text-anchor="middle" style="fill:var(--note)">' + ticks[k] + '</text>';
  }

  // ===== 峰谷价差:把谷价与峰价连起来的竖向虚线(画在曲线之下,不遮挡主曲线) =====
  svg += '<path d="M146 180 H478" style="stroke:var(--note);stroke-width:1.2" stroke-dasharray="4 5" opacity=".5"/>';
  svg += '<path d="M434 80 H478" style="stroke:var(--note);stroke-width:1.2" stroke-dasharray="4 5" opacity=".5"/>';
  svg += '<path d="M478 88 V172" style="stroke:var(--note);stroke-width:1.4" stroke-dasharray="4 5" opacity=".75"/>';
  svg += '<polygon points="473,92 483,92 478,79" style="fill:var(--note)"/>';
  svg += '<polygon points="473,168 483,168 478,181" style="fill:var(--note)"/>';
  svg += '<text x="478" y="130" font-size="13" text-anchor="middle" transform="rotate(-90 478 130)" style="fill:var(--note)">峰谷价差</text>';

  // ===== 能量转移连线:从谷段(充)指向峰段(放) =====
  svg += '<path d="M100 190 C220 196 330 190 410 140" style="stroke:var(--acc2);stroke-width:2.4" stroke-dasharray="6 5" opacity=".85"/>';
  svg += '<polygon points="410,140 402.2,152 395.8,141.8" style="fill:var(--acc2)"/>';
  svg += '<text x="205" y="170" font-size="14" text-anchor="middle" style="fill:var(--acc2)">低充高放</text>';

  // ===== 曲线下方的淡色面积 + 电价曲线 =====
  svg += '<path d="' + priceD + ' L468 206 L62 206 Z" style="fill:var(--acc)" opacity=".07"/>';
  svg += '<path id="esbprice" d="' + priceD + '" style="stroke:var(--acc);stroke-width:3.2" stroke-linecap="round" stroke-linejoin="round"/>';

  // ===== 谷段「充」:向下的箭头块 =====
  svg += '<line x1="92" y1="118" x2="92" y2="152" style="stroke:var(--acc);stroke-width:5" stroke-linecap="round"/>';
  svg += '<polygon points="86,150 98,150 92,164" style="fill:var(--acc)"/>';
  svg += '<text x="108" y="146" font-size="16" font-weight="700" style="fill:var(--acc)">充</text>';
  svg += '<text x="146" y="196" font-size="13" text-anchor="middle" style="fill:var(--note)">谷段</text>';

  // ===== 峰段「放」:向上的箭头块 =====
  svg += '<line x1="434" y1="158" x2="434" y2="124" style="stroke:var(--acc2);stroke-width:5" stroke-linecap="round"/>';
  svg += '<polygon points="428,126 440,126 434,112" style="fill:var(--acc2)"/>';
  svg += '<text x="444" y="152" font-size="16" font-weight="700" style="fill:var(--acc2)">放</text>';
  svg += '<text x="434" y="66" font-size="13" text-anchor="middle" style="fill:var(--acc2)">峰段</text>';

  // ===== 与电价曲线同轨迹的隐形 path,供脉冲小球运动 =====
  svg += '<path id="esbprice" d="' + priceD + '" fill="none" stroke="none"/>';

  // ===== 沿电价曲线运动的脉冲:一天里电池的充放循环 =====
  svg += esbPulse('esbprice', 'var(--acc)', 9, 0);
  svg += esbPulse('esbprice', 'var(--acc2)', 9, 4.5);

  // ===== 右侧 1/3:收益构成堆叠条(四段) =====
  svg += '<text x="496" y="88" font-size="15" font-weight="700" style="fill:var(--ink)">收益构成</text>';
  var segs = [
    { x: 496, w: 40, fill: 'var(--acc)', stroke: '' },
    { x: 536, w: 40, fill: 'var(--acc2)', stroke: '' },
    { x: 576, w: 40, fill: 'var(--acc-soft)', stroke: 'var(--line)' },
    { x: 616, w: 40, fill: 'none', stroke: 'var(--note)' }
  ];
  for (k = 0; k < segs.length; k++) {
    var s = segs[k];
    svg += '<rect x="' + s.x + '" y="96" width="' + s.w + '" height="30" style="fill:' + s.fill +
           (s.stroke ? ';stroke:' + s.stroke + ';stroke-width:1.4' : '') + '"/>';
  }
  svg += '<rect x="496" y="96" width="160" height="30" style="stroke:var(--line);stroke-width:1.2;fill:none"/>';

  // 四段图例(两行两列)
  svg += '<rect x="496" y="142" width="12" height="9" style="fill:var(--acc)"/>';
  svg += '<text x="514" y="151" font-size="13" style="fill:var(--ink)">峰谷套利</text>';
  svg += '<rect x="578" y="142" width="12" height="9" style="fill:var(--acc-soft);stroke:var(--line)"/>';
  svg += '<text x="596" y="151" font-size="13" style="fill:var(--ink)">容量租赁</text>';
  svg += '<rect x="496" y="162" width="12" height="9" style="fill:var(--acc2)"/>';
  svg += '<text x="514" y="171" font-size="13" style="fill:var(--ink)">需量管理</text>';
  svg += '<rect x="578" y="162" width="12" height="9" style="fill:none;stroke:var(--note);stroke-width:1.4"/>';
  svg += '<text x="596" y="171" font-size="13" style="fill:var(--ink)">辅助服务</text>';

  // 收益叠加说明
  svg += '<text x="496" y="198" font-size="15" font-weight="700" style="fill:var(--acc2)">收益叠加</text>';
  svg += '<text x="496" y="216" font-size="12.5" style="fill:var(--note)">一份投资,几份收入</text>';

  // ===== 右下角两行小图例 =====
  svg += '<path d="M496 236 h24" style="stroke:var(--acc);stroke-width:3.2" stroke-linecap="round"/>';
  svg += '<text x="528" y="240" font-size="13" style="fill:var(--note)">日电价曲线</text>';
  svg += '<rect x="496" y="246" width="24" height="10" style="fill:var(--acc)"/>';
  svg += '<text x="528" y="255" font-size="13" style="fill:var(--note)">收益来源</text>';

  // ===== 图内主标题 =====
  svg += '<text x="62" y="26" font-size="24" font-weight="700" style="fill:var(--ink)">储能收益构成与充放循环</text>';
  svg += '<text x="62" y="46" font-size="14" style="fill:var(--note)">低充高放 + 收益叠加</text>';

  svg += '</svg>';
  return svg;
}

/* 统一描边分组:浅色坐标轴与刻度 */
function esbG(inner) {
  return '<g style="stroke:var(--note);stroke-width:1.4;fill:none" opacity=".55">' + inner + '</g>';
}

/* 通用脉冲小球:沿给定 path id 运动 */
function esbPulse(pathId, color, dur, delay) {
  return '<circle r="2.1" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}
