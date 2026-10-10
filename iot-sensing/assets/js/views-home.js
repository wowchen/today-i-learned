/* 首页视图(端-边-网-云四层结构 + 双向数据脉冲 SVG · 石青蓝/冷白双主题) */
window.IOT = window.IOT || {};
IOT.views = IOT.views || {};

IOT.views.home = function() {
  var P = IOT.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = IOT.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < IOT.path.length ? IOT.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + iotSVG() + '</div>';
  html += '<p class="gh-kicker">电力物联网 · 感知层</p>';
  html += '<h1 class="gh-title">让每个设备<em>可感可测</em></h1>';
  html += '<p class="gh-latin">Power IoT &middot; Sensing Layer</p>';
  html += '<p class="gh-lede">从一块电表、一只传感器出发,数据怎么采、走哪条网、在哪算、存到哪、又被谁用——<b>电力物联网就是感知层到平台的这一整条链路。</b>本站按端边网云四层展开:讲通信模组与物联网卡、公网与专网选型、全链路监测与故障定界、传感器与终端、边缘计算、设备接入与平台、感知层安全,并落到典型场景与项目建设运营。</p>';
  if (nextLesson && IOT.lessons[nextLesson]) {
    var nl = IOT.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + IOT.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(IOT.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 9 月。</b>本站涉及的通信制式、频段、标准规范与政策文件会持续演进;凡涉及制式选择、频段使用、安全要求与建设标准之处,一律以现行有效的国家标准、行业标准与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、设备选型、采购或施工依据。</b>具体项目的方案论证、选型与验收,请以设计文件、现行标准与企业规程为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + IOT.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < IOT.modules.length; i++) {
    var m = IOT.modules[i];
    var mRead = 0;
    for (var j = 0; j < IOT.path.length; j++) {
      if (IOT.path[j].indexOf(m.id + '/') === 0 && P.isRead(IOT.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + IOT.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + IOT.esc(m.en || '') + '</div>';
    html += '<p>' + IOT.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>物联网卡流量池测算、链路可用率测算、通信方式选型、边缘数据量与带宽测算、终端功耗与电池寿命测算、点位与采集频度规划、感知层造价估算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '物联网卡流量池测算器', 'SIM traffic pool');
  html += toolCell('≈', '链路可用率测算器', 'end-to-end availability');
  html += toolCell('▣', '通信方式选型器', 'network selection');
  html += toolCell('⊗', '边缘数据量与带宽测算器', 'edge traffic and bandwidth');
  html += toolCell('⌁', '终端功耗与电池寿命测算器', 'battery life budget');
  html += toolCell('⊹', '点位与采集频度规划器', 'points and polling rate');
  html += toolCell('◎', '感知层造价估算器', 'sensing rollout cost');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电力系统原理(已有<b>电网通识站</b>),不讲配电网网架与自动化(已有<b>配电网与配电自动化站</b>),不讲传输光网络本身(已有<b>通信通识站</b>),也不讲云原生方法论(已有<b>云计算与云原生站</b>)。本站只讲一件事:<b>感知层到平台这一段怎么搭、怎么管、怎么用</b>——设备怎么接进来、数据怎么传上来、链路怎么监测、安全怎么守住。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>端边网云四层各是什么、边界怎么划分;</li>' +
          '<li>通信模组有哪几种形态,物联网卡怎么写号、机卡绑定怎么起作用;</li>' +
          '<li>公网、230MHz 与 1.8GHz 专网、5G 切片、NB-IoT 与 LoRa 各自适合什么场景;</li>' +
          '<li>物联网卡的全链路怎么分段监测、故障怎么分钟级定界;</li>' +
          '<li>传感器与终端按什么选型,台区融合终端到底管什么;</li>' +
          '<li>边缘网关做协议转换与本地算力的边界在哪;</li>' +
          '<li>设备怎么接入平台,物模型与设备影子是什么;</li>' +
          '<li>感知层为什么是最脆弱的一环,安全接入区与纵向加密怎么守;</li>' +
          '<li>电池供电的终端为什么能撑好几年,功耗该从哪里省;</li>' +
          '<li>一条上行通道能带多少点位、采集频度与点位规模怎么互相制约;</li>' +
          '<li>用采、配自、充电桩、光伏、动环这些典型场景怎么落地,项目怎么建、怎么运营。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重架构逻辑与选型判断,不替代任何设计文件、标准规范与工程方案。涉通信制式、频段与标准之处写的是机制与口径,具体执行以现行有效文件为准;涉及设备与数据之处,强调安全接入、最小必要与合规使用。<b>内容基线 2026 年 9 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>电力物联网与感知层 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-09</span></div>';

  IOT.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:端-边-网-云四层结构
   自上而下四条横向带:云(平台) / 网(网络) / 边(边缘网关) / 端(终端设备),
   左侧竖排层名标注,每条带内 2~3 个代表元素的简化线条图标;
   层间竖线上双向数据脉冲:上行(端→云,数据上报)取 --acc,
   下行(云→端,指令下发)取 --acc2;云层中心带呼吸光环。
   底部另给三类终端小图标图例:电表 / 传感器 / 门磁。
   描边/填色随主题取 --acc / --acc2 / --paper
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function iotSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xi = [62, 106, 150];   // 每条带内元素图标横坐标
  var xl = [84, 128];        // 层间连接与脉冲通道横坐标
  var k;

  // 顶部标名
  svg += '<text x="106" y="16" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">电力物联网 · 端边网云</text>';

  // 四条横向带(自上而下:云 / 网 / 边 / 端)
  var bands = [
    { y: 28,  h: 22, label: '云', icons: [gDash, gServer, gCloud] },
    { y: 56,  h: 22, label: '网', icons: [gTower, gSwitch, gSignal] },
    { y: 84,  h: 22, label: '边', icons: [gGateway, gChip, gHub] },
    { y: 112, h: 22, label: '端', icons: [gMeter, gSensor, gCamera] }
  ];
  for (var b = 0; b < bands.length; b++) {
    var bd = bands[b];
    var cy = bd.y + bd.h / 2;
    svg += '<rect x="24" y="' + bd.y + '" width="164" height="' + bd.h + '" rx="6" style="stroke:var(--acc2);stroke-width:1;fill:none" opacity=".38"/>';
    svg += '<text x="12" y="' + (cy + 3) + '" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">' + bd.label + '</text>';
    for (k = 0; k < 3; k++) svg += bd.icons[k](xi[k], cy);
  }

  // 层间竖直连线(静止底稿)
  for (k = 0; k < xl.length; k++) {
    svg += '<line x1="' + xl[k] + '" y1="50" x2="' + xl[k] + '" y2="134" style="stroke:var(--acc2);stroke-width:1" opacity=".2"/>';
  }

  // 供脉冲运动的复用路径
  for (k = 0; k < xl.length; k++) {
    svg += '<path id="iotup' + k + '" d="M' + xl[k] + ' 134 V31" fill="none" stroke="none"/>';
    svg += '<path id="iotdn' + k + '" d="M' + xl[k] + ' 31 V134" fill="none" stroke="none"/>';
  }

  // 双向脉冲:上行取 acc(端侧数据上报),下行取 acc2(平台指令下发)
  // 基态 opacity="0" 避免动画 begin 前小球滞留在原点
  for (k = 0; k < xl.length; k++) {
    svg += '<circle r="2" opacity="0" style="fill:var(--acc)">' +
           '<animateMotion dur="5s" repeatCount="indefinite" begin="' + (k * 1.4) + 's"><mpath href="#iotup' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5s" repeatCount="indefinite" begin="' + (k * 1.4) + 's"/></circle>';
    svg += '<circle r="2" opacity="0" style="fill:var(--acc2)">' +
           '<animateMotion dur="5s" repeatCount="indefinite" begin="' + (k * 1.4 + 2.5) + 's"><mpath href="#iotdn' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5s" repeatCount="indefinite" begin="' + (k * 1.4 + 2.5) + 's"/></circle>';
  }

  // 云(平台)呼吸光环:平台侧脉搏
  svg += '<circle cx="106" cy="39" r="11" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="11;11;24" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.32;0" dur="4s" repeatCount="indefinite"/></circle>';

  // 底部:三类终端图例(电表 / 传感器 / 门磁)
  var legend = [gMeter, gSensor, gDoor];
  var names = ['电表', '传感器', '门磁'];
  for (k = 0; k < 3; k++) {
    svg += legend[k](xi[k], 152);
    svg += '<text x="' + xi[k] + '" y="166" font-size="6.6" text-anchor="middle" style="fill:var(--note)">' + names[k] + '</text>';
  }

  // 底部说明
  svg += '<text x="106" y="189" font-size="7.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">感知层 → 平台</text>';

  svg += '</svg>';
  return svg;
}

/* 统一线条图标包裹:描边随主题取 --acc */
function ioG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 云层:平台看板 / 服务器机架 / 云 */
function gDash(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 4) + '" width="12" height="8" rx="1.5"/>' +
    '<path d="M' + (x - 3.4) + ' ' + (y + 2) + ' v-3.2 M' + x + ' ' + (y + 2) + ' v-5.4 M' + (x + 3.4) + ' ' + (y + 2) + ' v-2.2"/>');
}
function gServer(x, y) {
  return ioG('<rect x="' + (x - 5) + '" y="' + (y - 5) + '" width="10" height="10" rx="1.3"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - 1.7) + ' h10 M' + (x - 5) + ' ' + (y + 1.7) + ' h10"/>' +
    '<path d="M' + (x - 3.3) + ' ' + (y - 3.3) + ' h1.4 M' + (x - 3.3) + ' ' + (y + 0.2) + ' h1.4"/>');
}
function gCloud(x, y) {
  return ioG('<path d="M' + (x - 6) + ' ' + (y + 3) + ' c-2.4 0 -3.4-2.8 -1.4-4.1 c-.3-2.5 2.3-3.9 4.2-2.6 c1-2.1 4.2-2.3 5.4-.3 c2.1 .1 2.9 2.9 1 4.2 c.3 2.1 -1.7 2.8 -3.2 2.8 z"/>');
}

/* 网层:基站塔 / 交换机 / 无线信号 */
function gTower(x, y) {
  return ioG('<path d="M' + (x - 4) + ' ' + (y + 5) + ' l4 -10 l4 10"/>' +
    '<path d="M' + (x - 2) + ' ' + (y + 0.8) + ' h4"/>' +
    '<path d="M' + (x - 4.4) + ' ' + (y - 3.4) + ' a5.6 5.6 0 0 1 8.8 0"/>' +
    '<path d="M' + (x - 6.4) + ' ' + (y - 3.4) + ' a8.4 8.4 0 0 1 12.8 0"/>');
}
function gSwitch(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 0.8) + '" width="12" height="6" rx="1.3"/>' +
    '<path d="M' + (x - 4) + ' ' + (y - 0.8) + ' v-3 M' + (x + 4) + ' ' + (y - 0.8) + ' v-3"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y + 2.4) + ' h1.4 M' + (x - 0.6) + ' ' + (y + 2.4) + ' h1.4 M' + (x + 2.4) + ' ' + (y + 2.4) + ' h1.4"/>');
}
function gSignal(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + (y + 3.2) + '" r="1" style="fill:var(--acc);stroke:none"/>' +
    '<path d="M' + (x - 2.6) + ' ' + (y + 0.6) + ' a3.7 3.7 0 0 1 5.2 0"/>' +
    '<path d="M' + (x - 4.6) + ' ' + (y - 1.4) + ' a6.5 6.5 0 0 1 9.2 0"/>' +
    '<path d="M' + (x - 6.4) + ' ' + (y - 3.2) + ' a9 9 0 0 1 12.8 0"/>');
}

/* 边层:边缘网关 / 芯片 / 汇聚节点 */
function gGateway(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 1.4) + '" width="12" height="7" rx="1.5"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y - 1.4) + ' v-4.2 M' + (x + 3.6) + ' ' + (y - 1.4) + ' v-4.2"/>' +
    '<circle cx="' + (x - 3.2) + '" cy="' + (y + 2.2) + '" r=".8" style="fill:var(--acc);stroke:none"/>' +
    '<circle cx="' + x + '" cy="' + (y + 2.2) + '" r=".8" style="fill:var(--acc);stroke:none"/>' +
    '<circle cx="' + (x + 3.2) + '" cy="' + (y + 2.2) + '" r=".8" style="fill:var(--acc);stroke:none"/>');
}
function gChip(x, y) {
  return ioG('<rect x="' + (x - 4.6) + '" y="' + (y - 4.6) + '" width="9.2" height="9.2" rx="1.3"/>' +
    '<rect x="' + (x - 1.8) + '" y="' + (y - 1.8) + '" width="3.6" height="3.6" rx=".6"/>' +
    '<path d="M' + (x - 6.6) + ' ' + (y - 2) + ' h2 M' + (x - 6.6) + ' ' + (y + 2) + ' h2 M' + (x + 4.6) + ' ' + (y - 2) + ' h2 M' + (x + 4.6) + ' ' + (y + 2) + ' h2"/>' +
    '<path d="M' + (x - 2) + ' ' + (y - 6.6) + ' v2 M' + (x + 2) + ' ' + (y - 6.6) + ' v2 M' + (x - 2) + ' ' + (y + 4.6) + ' v2 M' + (x + 2) + ' ' + (y + 4.6) + ' v2"/>');
}
function gHub(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + y + '" r="2.2"/>' +
    '<path d="M' + x + ' ' + (y - 2.2) + ' v-2 M' + (x - 1.9) + ' ' + (y + 1.1) + ' l-1.9 1.9 M' + (x + 1.9) + ' ' + (y + 1.1) + ' l1.9 1.9"/>' +
    '<circle cx="' + x + '" cy="' + (y - 5.2) + '" r="1" style="fill:var(--paper)"/>' +
    '<circle cx="' + (x - 4.3) + '" cy="' + (y + 3.4) + '" r="1" style="fill:var(--paper)"/>' +
    '<circle cx="' + (x + 4.3) + '" cy="' + (y + 3.4) + '" r="1" style="fill:var(--paper)"/>');
}

/* 端层 / 底部图例:电表 / 传感器 / 摄像头 / 门磁 */
function gMeter(x, y) {
  return ioG('<rect x="' + (x - 4.6) + '" y="' + (y - 5.4) + '" width="9.2" height="11" rx="1.6"/>' +
    '<rect x="' + (x - 2.6) + '" y="' + (y - 3.4) + '" width="5.2" height="3.2" rx=".6"/>' +
    '<path d="M' + (x - 2) + ' ' + (y + 2.4) + ' h1.2 M' + (x + 0.8) + ' ' + (y + 2.4) + ' h1.2"/>');
}
function gSensor(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + (y + 2) + '" r="2.4"/>' +
    '<path d="M' + (x - 4.2) + ' ' + (y - 1.4) + ' a6 6 0 0 1 8.4 0"/>' +
    '<path d="M' + (x - 6.2) + ' ' + (y - 3.4) + ' a8.8 8.8 0 0 1 12.4 0"/>' +
    '<path d="M' + x + ' ' + (y + 4.4) + ' v1.2"/>');
}
function gCamera(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 3.4) + '" width="12" height="6.8" rx="1.6"/>' +
    '<circle cx="' + (x + 1.4) + '" cy="' + y + '" r="1.9"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y - 5) + ' h4.4"/>');
}
function gDoor(x, y) {
  return ioG('<rect x="' + (x - 3.2) + '" y="' + (y - 5) + '" width="6" height="10" rx="1"/>' +
    '<circle cx="' + (x + 1.2) + '" cy="' + y + '" r=".8" style="fill:var(--acc);stroke:none"/>' +
    '<rect x="' + (x + 4.2) + '" y="' + (y - 1.6) + '" width="2.4" height="3.2" rx=".6"/>' +
    '<path d="M' + (x + 2.8) + ' ' + y + ' h1.4"/>');
}
