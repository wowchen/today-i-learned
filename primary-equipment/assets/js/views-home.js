/* 首页视图(变电站一次接线单线图:杆塔→隔离开关→断路器→电流互感器→母线→出线/变压器/避雷器
   · 深铜褐/亮铜双主题) */
window.PEQ = window.PEQ || {};
PEQ.views = PEQ.views || {};

PEQ.views.home = function() {
  var P = PEQ.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = PEQ.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < PEQ.path.length ? PEQ.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + peqSVG() + '</div>';
  html += '<p class="gh-kicker">输变电 · 一次设备</p>';
  html += '<h1 class="gh-title">电从这儿<em>走过去</em></h1>';
  html += '<p class="gh-latin">Primary Equipment &middot; Transformer to Busbar</p>';
  html += '<p class="gh-lede">发电站发出的电,得先升压、再输送、到站再降压,这一路上"真正干活"的电气设备——<b>变压器、断路器、隔离开关、互感器、避雷器、绝缘子、母线、导线电缆</b>,就是一次设备。本站从一次与二次的分工讲起,把每类设备的原理、结构、选型与校核讲清楚,再落到主接线怎么组、设备怎么试验、状态怎么评价、全寿命周期成本怎么算。</p>';
  if (nextLesson && PEQ.lessons[nextLesson]) {
    var nl = PEQ.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + PEQ.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(PEQ.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 10 月。</b>本站涉及的设备参数、技术标准、试验规程、反措要求与选型口径会持续演进;凡涉及设备选型、绝缘配合、短路校核、试验项目与运维要求之处,一律以现行有效的国家标准、行业标准、企业技术规定与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、设备选型、投标报价或运维作业依据。</b>具体工程的方案论证、选型计算、试验方案与检修作业,请以设计文件、现行标准与企业规程为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + PEQ.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < PEQ.modules.length; i++) {
    var m = PEQ.modules[i];
    var mRead = 0;
    for (var j = 0; j < PEQ.path.length; j++) {
      if (PEQ.path[j].indexOf(m.id + '/') === 0 && P.isRead(PEQ.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + PEQ.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + PEQ.esc(m.en || '') + '</div>';
    html += '<p>' + PEQ.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>变压器负载率与损耗测算、短路电流与开断能力校核、避雷器与绝缘配合校核、绝缘子片数与爬距校核、载流量与截面选型、导线弧垂与张力测算、设备全寿命成本(LCC)测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '变压器负载率与损耗测算器', 'loading rate and losses');
  html += toolCell('▤', '短路电流与开断能力校核器', 'short-circuit and breaking');
  html += toolCell('⊞', '避雷器与绝缘配合校核器', 'arrester and insulation coordination');
  html += toolCell('◐', '绝缘子片数与爬距校核器', 'creepage and disc number');
  html += toolCell('⊟', '载流量与截面选型器', 'ampacity and conductor sizing');
  html += toolCell('⌁', '导线弧垂与张力测算器', 'sag and tension');
  html += toolCell('◇', '设备全寿命成本(LCC)测算器', 'life cycle cost');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电力系统原理与网架结构(已有<b>电网通识站</b>),不讲配电网与配电自动化(已有<b>配电网与配电自动化站</b>),不讲发电技术本体(已有<b>发电技术通识站</b>),不讲调度与二次系统(已有<b>电力调度与二次系统站</b>),也不讲感知层与通信链路(已有<b>电力物联网与感知层站</b>)。本站只讲一件事:<b>变电站与线路里那些"真正过电"的设备</b>——它是什么、怎么工作、怎么选、怎么试、怎么管。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>一次设备与二次设备怎么分工,变电站里谁管谁;</li>' +
          '<li>额定电压、额定电流、绝缘水平这些"铭牌数字"分别约束什么,短路电流与动热稳定怎么校核;</li>' +
          '<li>变压器怎么变压、分接开关为什么能调压、空载损耗与负载损耗差在哪、负载率怎么算;</li>' +
          '<li>断路器怎么灭弧、SF6 与真空各适合什么场合、开断能力怎么看;</li>' +
          '<li>GIS 为什么把开关装进金属罐,AIS / GIS / HGIS 怎么选;</li>' +
          '<li>隔离开关为什么不能带负荷拉合,防误闭锁与"五防"到底是哪五防;</li>' +
          '<li>电流互感器与电压互感器的变比、准确级、极性怎么看,二次侧为什么不能开路 / 短路;</li>' +
          '<li>避雷器怎么限制过电压,绝缘配合是怎么"配"出来的;</li>' +
          '<li>绝缘子为什么要爬距、污闪是怎么回事、片数怎么定、金具起什么作用;</li>' +
          '<li>导线为什么有弧垂、张力怎么控制,载流量受什么限制、电晕是什么;</li>' +
          '<li>电气主接线有哪几种、为什么超高压用一个半断路器;设备怎么试验、状态怎么评价、全寿命周期成本怎么算。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重原理逻辑与选型判断,不替代任何设计文件、标准规范与工程方案。涉设备参数、试验项目与标准限值之处写的是机制与口径,具体执行以现行有效文件为准。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>输变电一次设备通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  PEQ.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:变电站一次接线(单线图)
   主线自下而上为:输电杆塔 → 隔离开关 → 断路器 → 电流互感器 → 母线;
   母线下方分三路:左=出线间隔(箭头送出),中=主变压器(双线圈)→低压出线,
   右=避雷器 → 接地符号。电流脉冲沿主线自杆塔流向母线,再分别流向三条支路:
   主线与变压器支路取 --acc,出线 / 避雷器支路取 --acc2,母线节点带呼吸光环。
   描边/填色随主题取 --acc / --acc2 / --paper;
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留)。 */
function peqSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';

  // 顶部标名
  svg += '<text x="100" y="13" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">变电站 · 输变电一次设备</text>';

  // ---- 主线(杆塔 → 母线):在隔离开关处断开,以示分 / 合 ----
  svg += '<path d="M100 34 V37.5 M100 52.5 V55.4 M100 68.6 V73.6 M100 86.4 V94" style="stroke:var(--acc2);stroke-width:1.1" opacity=".55"/>';

  // ---- 母线(加粗横线,水平主汇流) ----
  svg += '<line x1="44" y1="94" x2="156" y2="94" style="stroke:var(--acc);stroke-width:2.8" stroke-linecap="round"/>';

  // ---- 支路竖线(母线 → 出线 / 变压器 / 避雷器) ----
  svg += '<line x1="62" y1="94" x2="62" y2="114" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';
  svg += '<line x1="100" y1="94" x2="100" y2="107" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';
  svg += '<line x1="100" y1="135" x2="100" y2="148" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';
  svg += '<line x1="138" y1="94" x2="138" y2="104" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';
  svg += '<line x1="138" y1="118" x2="138" y2="126" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';

  // ---- 主线设备(自上而下排布在竖直主线上) ----
  svg += gPylon(100, 24);
  svg += gDisc(100, 45);
  svg += gBreaker(100, 62);
  svg += gCT(100, 80);

  // ---- 支路设备 ----
  svg += gArrow(62, 116);            // 出线
  svg += gTransformer(100, 121);     // 主变压器(双线圈)
  svg += gArrow(100, 150);           // 低压出线
  svg += gArrester(138, 111);        // 避雷器
  svg += gGround(138, 126);          // 接地

  // ---- 供脉冲运动的复用路径(不可见) ----
  svg += '<path id="peqflow0" d="M100 34 V92" fill="none" stroke="none"/>';
  svg += '<path id="peqflow1" d="M100 94 V146" fill="none" stroke="none"/>';
  svg += '<path id="peqflow2" d="M62 94 V113" fill="none" stroke="none"/>';
  svg += '<path id="peqflow3" d="M138 94 V125" fill="none" stroke="none"/>';

  // ---- 电流脉冲:主线取 acc,支路取 acc2;基态 opacity=0 防动画开始前滞留在原点 ----
  svg += pulseDot('peqflow0', 'var(--acc)', 3.2, 0);
  svg += pulseDot('peqflow0', 'var(--acc)', 3.2, 1.6);
  svg += pulseDot('peqflow1', 'var(--acc)', 3.6, 0.8);
  svg += pulseDot('peqflow2', 'var(--acc2)', 2.6, 0.4);
  svg += pulseDot('peqflow3', 'var(--acc2)', 2.6, 1.1);

  // ---- 母线节点呼吸光环(汇流点) ----
  svg += '<circle cx="100" cy="94" r="7" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="7;7;19" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.30;0" dur="4s" repeatCount="indefinite"/></circle>';

  // ---- 节点标注 ----
  svg += '<text x="112" y="42" font-size="6.4" text-anchor="start" style="fill:var(--note)">隔离开关</text>';
  svg += '<text x="112" y="59" font-size="6.4" text-anchor="start" style="fill:var(--note)">断路器</text>';
  svg += '<text x="112" y="77" font-size="6.4" text-anchor="start" style="fill:var(--note)">电流互感器</text>';
  svg += '<text x="60" y="130" font-size="6.6" text-anchor="middle" style="fill:var(--acc)">出线</text>';
  svg += '<text x="100" y="168" font-size="6.6" text-anchor="middle" style="fill:var(--acc)">低压出线</text>';
  svg += '<text x="138" y="148" font-size="6.6" text-anchor="middle" style="fill:var(--acc)">接地</text>';

  // ---- 底部说明 ----
  svg += '<text x="100" y="190" font-size="7.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">高压侧 → 母线 → 低压侧</text>';

  svg += '</svg>';
  return svg;
}

/* 脉冲小球:沿 pathId 运动 + 淡入淡出 */
function pulseDot(pathId, color, dur, delay) {
  return '<circle r="2" opacity="0" style="fill:' + color + '">' +
         '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
         '<animate attributeName="opacity" values="0;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}

/* 统一线条图标包裹 */
function peqG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 输电杆塔 */
function gPylon(x, y) {
  return peqG('<path d="M' + (x - 5) + ' ' + (y + 8) + ' L' + x + ' ' + (y - 8) + ' L' + (x + 5) + ' ' + (y + 8) + '"/>' +
    '<path d="M' + (x - 6.6) + ' ' + (y - 2.4) + ' H' + (x + 6.6) + '"/>' +
    '<path d="M' + (x - 4) + ' ' + (y + 3) + ' H' + (x + 4) + '"/>' +
    '<path d="M' + (x - 6.6) + ' ' + (y - 2.4) + ' l1.5 2.6 M' + (x + 6.6) + ' ' + (y - 2.4) + ' l-1.5 2.6"/>');
}

/* 隔离开关(竖向导体:上下触头 + 斜开的刀闸,示"可明显断开点") */
function gDisc(x, y) {
  return peqG('<path d="M' + x + ' ' + (y - 7.5) + ' v4.6 M' + x + ' ' + (y + 2.9) + ' v4.6"/>' +
    '<path d="M' + x + ' ' + (y - 2.4) + ' l5 5.3"/>' +
    '<circle cx="' + x + '" cy="' + (y - 7.5) + '" r="1.2" style="fill:var(--acc);stroke:none"/>' +
    '<circle cx="' + x + '" cy="' + (y + 7.5) + '" r="1.2" style="fill:var(--acc);stroke:none"/>');
}

/* 断路器(方框 + 上下引线) */
function gBreaker(x, y) {
  return peqG('<rect x="' + (x - 3.4) + '" y="' + (y - 3.4) + '" width="6.8" height="6.8" rx=".9"/>' +
    '<path d="M' + x + ' ' + (y - 6.6) + ' v3.2 M' + x + ' ' + (y + 3.4) + ' v3.2"/>');
}

/* 电流互感器(圆环 = 套装在导体上的互感器) */
function gCT(x, y) {
  return peqG('<circle cx="' + x + '" cy="' + y + '" r="4.1"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="1.4"/>' +
    '<path d="M' + x + ' ' + (y - 6.4) + ' V' + (y - 4.1) + ' M' + x + ' ' + (y + 4.1) + ' V' + (y + 6.4) + '"/>');
}

/* 变压器(双线圈:两圆相切) */
function gTransformer(x, cy) {
  return peqG('<circle cx="' + x + '" cy="' + (cy - 7) + '" r="7"/>' +
    '<circle cx="' + x + '" cy="' + (cy + 7) + '" r="7"/>' +
    '<path d="M' + (x - 3) + ' ' + (cy - 9) + ' h6 M' + (x - 3) + ' ' + (cy + 9) + ' h6"/>');
}

/* 避雷器(矩形 + 斜线) */
function gArrester(x, y) {
  return peqG('<rect x="' + (x - 2.8) + '" y="' + (y - 6.4) + '" width="5.6" height="12.8" rx="1"/>' +
    '<path d="M' + (x - 2.8) + ' ' + (y + 4.4) + ' l5.6 -8.8"/>');
}

/* 接地符号 */
function gGround(x, y) {
  return peqG('<path d="M' + x + ' ' + (y - 4) + ' v4"/>' +
    '<path d="M' + (x - 6.4) + ' ' + y + ' h12.8"/>' +
    '<path d="M' + (x - 4.2) + ' ' + (y + 3) + ' h8.4"/>' +
    '<path d="M' + (x - 1.9) + ' ' + (y + 6) + ' h3.8"/>');
}

/* 出线箭头(向下) */
function gArrow(x, y) {
  return peqG('<path d="M' + x + ' ' + (y - 6) + ' v9"/>' +
    '<path d="M' + (x - 2.6) + ' ' + (y + 0.4) + ' l2.6 3.2 l2.6 -3.2"/>');
}
