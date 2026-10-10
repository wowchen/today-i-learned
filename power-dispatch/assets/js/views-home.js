/* 首页视图(调度指挥链 + 双向脉冲 SVG · 电光紫/冷白双主题) */
window.DSP = window.DSP || {};
DSP.views = DSP.views || {};

DSP.views.home = function() {
  var P = DSP.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = DSP.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < DSP.path.length ? DSP.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + dspSVG() + '</div>';
  html += '<p class="gh-kicker">电力调度 · 二次系统</p>';
  html += '<h1 class="gh-title">让电网<em>可看可控</em></h1>';
  html += '<p class="gh-latin">Power Dispatching &middot; Secondary Systems</p>';
  html += '<p class="gh-lede">从调度台上的一块屏幕出发:指令怎么下达、保护怎么在几十毫秒内动作、稳控怎么在崩溃前切负荷、数据怎么一路回传——<b>二次系统就是电网的指挥链与免疫系统。</b>本站按「指挥链」展开:讲调度体系与职责、系统运行基础、二次系统总论、继电保护、安全稳定控制、调度自动化、调度通信与时钟、调度运行、新能源与有源调度、配网调度、二次安防,并落到项目实战与能力地图。</p>';
  if (nextLesson && DSP.lessons[nextLesson]) {
    var nl = DSP.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + DSP.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(DSP.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 9 月。</b>本站涉及的调度规程、继电保护配置与整定原则、安全稳定控制策略、自动化与通信技术规范、二次安防要求及相关政策文件会持续演进;凡涉及规程条款、保护定值、稳控策略、安全防护要求之处,一律以现行有效的国家标准、行业标准、企业技术规定与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、定值整定、设备选型、采购或施工依据。</b>具体项目的保护配置与整定、稳控策略、自动化与通信方案,请以设计文件、调度机构正式文件、现行标准与企业规程为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + DSP.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < DSP.modules.length; i++) {
    var m = DSP.modules[i];
    var mRead = 0;
    for (var j = 0; j < DSP.path.length; j++) {
      if (DSP.path[j].indexOf(m.id + '/') === 0 && P.isRead(DSP.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + DSP.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + DSP.esc(m.en || '') + '</div>';
    html += '<p>' + DSP.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>频率偏差与功率缺额估算、AGC 调频备用测算、继电保护定值校核、保护上下级配合校核、故障切除时间与稳定裕度估算、低频减载轮次配置、新能源消纳与弃电测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('∿', '频率偏差与功率缺额估算器', 'frequency deviation');
  html += toolCell('↻', 'AGC 调频备用测算器', 'AGC reserve requirement');
  html += toolCell('⊻', '继电保护定值校核器', 'relay setting check');
  html += toolCell('⇋', '保护上下级配合校核器', 'protection coordination');
  html += toolCell('⌛', '故障切除时间与稳定裕度估算器', 'clearing time and margin');
  html += toolCell('⊞', '低频减载轮次配置器', 'UFLS stage planning');
  html += toolCell('☀', '新能源消纳与弃电测算器', 'renewable curtailment');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电力系统原理本身(已有<b>电网通识站</b>),不讲配电网网架与设备构成(已有<b>配电网与配电自动化站</b>),不讲光传输设备原理(已有<b>通信通识站</b>),也不讲电力市场交易规则(已有<b>电力市场与能源交易站</b>)。本站只讲一件事:<b>电网靠什么被指挥、被保护、保持稳定</b>——也就是调度体系与它手上那套二次系统。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>五级调度各自管什么、调度管辖范围怎么划、调度指令为什么具有强制性;</li>' +
          '<li>有功决定频率、无功决定电压,三道防线分别防的是什么;</li>' +
          '<li>一次与二次怎么分工,二次回路、直流电源、互感器各起什么作用;</li>' +
          '<li>过流、距离、差动、零序、母线保护各自适合什么场景,定值由谁按什么依据定;</li>' +
          '<li>上下级保护为什么要同时守住电流、时间、灵敏三条配合线,越级跳闸是怎么发生的;</li>' +
          '<li>稳控系统为什么要在几十毫秒内切机切负荷,低频减载为什么是最后一道闸;</li>' +
          '<li>SCADA 与 EMS 怎么把厂站状态搬上调度台,四遥、状态估计与潮流计算各解决什么问题;</li>' +
          '<li>调度通信、保护通道与全网对时为什么是二次系统能工作的前提;</li>' +
          '<li>调度计划、实时调度、操作票、事故处理这些日常业务怎么运转;</li>' +
          '<li>新能源高占比与电力电子化给调度带来哪些新麻烦;</li>' +
          '<li>消纳空间由哪几块凑成、弃电率与利用率怎么算、想提利用率该往哪儿补。</li>' +
          '<li>二次系统为什么要做安全分区、横向隔离与纵向认证,项目从接入到投运要走哪些流程。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重机制逻辑与判断口径,不替代任何规程、设计文件与工程方案。涉调度规程、保护整定、稳控策略与安全防护之处写的是机制与思路,具体执行以现行有效文件、调度机构正式文件与现场实际为准。<b>内容基线 2026 年 9 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>电力调度与二次系统 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-09</span></div>';

  DSP.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:调度指挥链
   三段纵向结构 —— 上「调度中心」(大屏/调度台/对时) → 中「三条指挥通道」
   (遥测遥信上行、遥控遥调下行、保护与稳控信号) → 下「厂站」(断路器/变压器/互感器);
   通道上双向脉冲:上行取 --acc(厂站→调度,信息上传),
   下行取 --acc2(调度→厂站,指令下达);底部一条母线带潮流流动;
   调度中心带呼吸光环。描边/填色随主题取 --acc / --acc2 / --paper。
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function dspSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xi = [62, 106, 150];   // 三段内元素图标横坐标
  var xl = [62, 106, 150];   // 纵向指挥通道横坐标
  var k;

  // 顶部标名
  svg += '<text x="106" y="15" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">电力调度 · 指挥链</text>';

  // 调度中心带
  svg += '<rect x="22" y="25" width="166" height="28" rx="6" style="stroke:var(--acc2);stroke-width:1;fill:none" opacity=".42"/>';
  svg += '<text x="11" y="43" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">调</text>';
  svg += gWall(xi[0], 39);
  svg += gConsole(xi[1], 39);
  svg += gClock(xi[2], 39);

  // 三条纵向指挥通道(静止底稿)
  for (k = 0; k < xl.length; k++) {
    svg += '<line x1="' + xl[k] + '" y1="53" x2="' + xl[k] + '" y2="123" style="stroke:var(--acc2);stroke-width:1" opacity=".22"/>';
  }

  // 供脉冲运动的复用路径
  for (k = 0; k < xl.length; k++) {
    svg += '<path id="dspup' + k + '" d="M' + xl[k] + ' 123 V54" fill="none" stroke="none"/>';
    svg += '<path id="dspdn' + k + '" d="M' + xl[k] + ' 54 V123" fill="none" stroke="none"/>';
  }

  // 双向脉冲:上行取 acc(厂站信息上报),下行取 acc2(调度指令下达)
  // 基态 opacity="0" 避免动画 begin 前小球滞留在原点
  for (k = 0; k < xl.length; k++) {
    svg += '<circle r="2" opacity="0" style="fill:var(--acc)">' +
           '<animateMotion dur="4.6s" repeatCount="indefinite" begin="' + (k * 1.5) + 's"><mpath href="#dspup' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="4.6s" repeatCount="indefinite" begin="' + (k * 1.5) + 's"/></circle>';
    svg += '<circle r="2" opacity="0" style="fill:var(--acc2)">' +
           '<animateMotion dur="4.6s" repeatCount="indefinite" begin="' + (k * 1.5 + 2.3) + 's"><mpath href="#dspdn' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="4.6s" repeatCount="indefinite" begin="' + (k * 1.5 + 2.3) + 's"/></circle>';
  }

  // 厂站带
  svg += '<rect x="22" y="123" width="166" height="28" rx="6" style="stroke:var(--acc2);stroke-width:1;fill:none" opacity=".42"/>';
  svg += '<text x="11" y="141" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">站</text>';
  svg += gBreaker(xi[0], 137);
  svg += gTransformer(xi[1], 137);
  svg += gCurrentTransformer(xi[2], 137);

  // 底部母线 + 潮流流动
  svg += '<line x1="34" y1="163" x2="178" y2="163" style="stroke:var(--acc);stroke-width:1.8" stroke-linecap="round" opacity=".55"/>';
  for (k = 0; k < 3; k++) {
    svg += '<line x1="' + xi[k] + '" y1="152" x2="' + xi[k] + '" y2="163" style="stroke:var(--acc2);stroke-width:1" opacity=".4"/>';
  }
  svg += '<path id="dspflow" d="M34 163 H178" fill="none" stroke="none"/>';
  svg += '<circle r="2.2" opacity="0" style="fill:var(--acc2)">' +
         '<animateMotion dur="3.4s" repeatCount="indefinite"><mpath href="#dspflow"/></animateMotion>' +
         '<animate attributeName="opacity" values="0;1;1;1;0" dur="3.4s" repeatCount="indefinite"/></circle>';

  // 调度中心呼吸光环:指挥侧脉搏
  svg += '<circle cx="106" cy="39" r="11" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="11;11;25" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.3;0" dur="4s" repeatCount="indefinite"/></circle>';

  // 底部说明
  svg += '<text x="106" y="187" font-size="7.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">调度中心 ⇄ 厂站</text>';
  svg += '<text x="106" y="196" font-size="6.4" text-anchor="middle" style="fill:var(--note)">遥测遥信上行 · 遥控遥调下行</text>';

  svg += '</svg>';
  return svg;
}

/* 统一线条图标包裹:描边随主题取 --acc */
function ioG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 调度中心:大屏 / 调度台 / 对时钟 */
function gWall(x, y) {
  return ioG('<rect x="' + (x - 7) + '" y="' + (y - 4.6) + '" width="14" height="9.2" rx="1.3"/>' +
    '<path d="M' + (x - 2.3) + ' ' + (y - 4.6) + ' v9.2 M' + (x + 2.3) + ' ' + (y - 4.6) + ' v9.2"/>' +
    '<path d="M' + (x - 2.3) + ' ' + y + ' h4.6"/>');
}
function gConsole(x, y) {
  return ioG('<rect x="' + (x - 6.6) + '" y="' + (y - 5) + '" width="13.2" height="6.4" rx="1.2"/>' +
    '<path d="M' + (x - 4.2) + ' ' + (y - 1.8) + ' h5 M' + (x - 4.2) + ' ' + (y + 0.2) + ' h8.4"/>' +
    '<path d="M' + (x - 3.4) + ' ' + (y + 1.4) + ' h6.8"/>');
}
function gClock(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + y + '" r="5.2"/>' +
    '<path d="M' + x + ' ' + (y - 3.2) + ' v3.4 l2.4 1.4"/>' +
    '<path d="M' + (x - 7.4) + ' ' + (y - 3.6) + ' l1.6-1.6 M' + (x + 7.4) + ' ' + (y - 3.6) + ' l-1.6-1.6"/>');
}

/* 厂站:断路器 / 变压器 / 电流互感器 */
function gBreaker(x, y) {
  return ioG('<path d="M' + x + ' ' + (y - 6) + ' v3.4"/>' +
    '<rect x="' + (x - 2.6) + '" y="' + (y - 2.6) + '" width="5.2" height="5.2" rx=".8"/>' +
    '<path d="M' + x + ' ' + (y + 2.6) + ' v3.4"/>' +
    '<path d="M' + (x + 2.4) + ' ' + (y - 2.4) + ' l3.2-3.2"/>' +
    '<path d="M' + (x - 6) + ' ' + (y - 6) + ' h12 M' + (x - 6) + ' ' + (y + 6) + ' h12"/>');
}
function gTransformer(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + (y - 2) + '" r="3.6"/>' +
    '<circle cx="' + x + '" cy="' + (y + 2) + '" r="3.6"/>' +
    '<path d="M' + x + ' ' + (y - 6.4) + ' v1.2 M' + x + ' ' + (y + 4.4) + ' v1.6"/>');
}
function gCurrentTransformer(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + y + '" r="5.4"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="2"/>' +
    '<path d="M' + x + ' ' + (y - 7) + ' v14"/>' +
    '<path d="M' + (x - 7) + ' ' + (y - 3) + ' h3 M' + (x + 4) + ' ' + (y - 3) + ' h3"/>');
}
