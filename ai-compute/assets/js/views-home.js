/* 首页视图(电力→算力→Token 能量-算力转换链主图 · 电光青/冷白双主题) */
window.AIC = window.AIC || {};
AIC.views = AIC.views || {};

AIC.views.home = function() {
  var P = AIC.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = AIC.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < AIC.path.length ? AIC.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + aicSVG() + '</div>';
  html += '<p class="gh-kicker">AI 算力基础设施 · 算电协同</p>';
  html += '<h1 class="gh-title">让算力<em>跟着电走</em></h1>';
  html += '<p class="gh-latin">AI Compute Infrastructure &middot; Compute-Power Synergy</p>';
  html += '<p class="gh-lede">从一张加速卡、一台机柜出发,算力怎么产生、网络怎么把它连成集群、电力怎么把它供起来、热量又怎么被带走——<b>AI 算力基础设施就是「电 → 算 → Token」这条能量与算力的转换链。</b>本站按芯片与互联、集群与并行、训练与推理、Token 成本、数据中心电气与散热、AI 负荷与电网、算力网络、算电协同、政策标准展开,并落到选址建设与实战展望。</p>';
  if (nextLesson && AIC.lessons[nextLesson]) {
    var nl = AIC.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + AIC.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(AIC.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 10 月。</b>本站涉及的芯片与互联规格、数据中心能效与散热路线、算力与电价口径、相关政策与标准会持续演进;凡涉及技术选型、能效要求、政策依据与价格之处,一律以现行有效的国家标准、行业标准、主管部门文件与厂商正式资料为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、设备选型、采购、投资或合规依据。</b>具体项目的方案论证、选型、报价与验收,请以设计文件、厂商方案、现行标准与企业规程为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + AIC.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < AIC.modules.length; i++) {
    var m = AIC.modules[i];
    var mRead = 0;
    for (var j = 0; j < AIC.path.length; j++) {
      if (AIC.path[j].indexOf(m.id + '/') === 0 && P.isRead(AIC.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + AIC.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + AIC.esc(m.en || '') + '</div>';
    html += '<p>' + AIC.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>Token 成本测算、PUE 与电费测算、机柜功率密度与散热选型、智算中心选址评分、绿电直供经济性、算电协同收益、算力 TCO 测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', 'Token 成本测算器', 'cost per million tokens');
  html += toolCell('%', 'PUE 与电费测算器', 'efficiency and power bill');
  html += toolCell('▤', '机柜功率密度与散热选型器', 'rack density and cooling');
  html += toolCell('⊞', '智算中心选址评分器', 'site scoring');
  html += toolCell('◎', '绿电直供经济性测算器', 'green power direct supply');
  html += toolCell('⌁', '算电协同收益测算器', 'compute-power synergy');
  html += toolCell('⊹', '算力 TCO 测算器', 'total cost of ownership');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电力系统原理(已有<b>电网通识站</b>),不讲发电厂与锅炉汽机(已有<b>发电技术站</b>),不讲电子器件与电路(已有<b>电子技术站</b>),也不重复讲云原生方法论(已有<b>云计算与云原生站</b>)。本站只讲一件事:<b>支撑 AI 的这套算力底座是怎么建、怎么供、怎么算、又怎么和电打交道的</b>——芯片怎么算、集群怎么连、训练与推理怎么跑、成本怎么摊、电从哪来、热往哪走、算力怎么跟着电走。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>算力用什么度量,FLOPS 与精度之间的关系是什么;</li>' +
          '<li>GPU、NPU 与超节点各自解决什么问题,HBM 与卡间互联为何关键;</li>' +
          '<li>算力集群里网络为什么决定效率,RDMA、RoCE 与 InfiniBand 差在哪;</li>' +
          '<li>训练与推理是两种完全不同的负载,各自优化什么;</li>' +
          '<li>每百万 token 的成本由哪些因素决定,利用率和电价各占多少;</li>' +
          '<li>数据中心的供电与制冷架构长什么样,机柜功率密度为何逼出液冷;</li>' +
          '<li>AI 负荷对电网意味着什么,如何参与需求响应;</li>' +
          '<li>算力网络与东数西算是什么,算力怎么调度与交易;</li>' +
          '<li>算电协同怎么把算力的弹性变成钱,绿电消纳与碳感知计算怎么做;</li>' +
          '<li>相关政策与能效标准有哪些口径,项目选址与建设要算哪几笔账。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重机制逻辑与选型判断,不替代任何设计文件、标准规范与工程方案。涉芯片规格、标准编号、政策口径与价格之处写的是机制与量级,具体执行以现行有效文件与厂商资料为准。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>AI 算力基础设施与算电协同 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  AIC.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:电力 → 算力 → Token 能量-算力转换链
   自上而下三条带:电(能源输入) / 算(算力转换) / 值(Token 输出),
   左侧竖排层名标注,每条带内 3 个代表元素的简化线条图标;
   层间竖线上向下的能量脉冲:电→算 取 --acc,算→值 取 --acc2;
   底部另给三类图例:电力 / 芯片 / Token。
   描边/填色随主题取 --acc / --acc2 / --paper
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function aicSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xi = [62, 106, 150];   // 每条带内元素图标横坐标
  var xl = [84, 128];        // 层间连接与脉冲通道横坐标
  var k;

  // 顶部标名
  svg += '<text x="106" y="16" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">电 → 算 → Token</text>';

  // 三条横向带(自上而下:电 / 算 / 值)
  var bands = [
    { y: 26,  h: 24, label: '电', icons: [gTower, gBattery, gBusbar] },
    { y: 68,  h: 24, label: '算', icons: [gRack, gChipS, gNodeNet] },
    { y: 110, h: 24, label: '值', icons: [gBubble, gCoins, gTrend] }
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
    svg += '<path id="aicup' + k + '" d="M' + xl[k] + ' 134 V31" fill="none" stroke="none"/>';
    svg += '<path id="aicdn' + k + '" d="M' + xl[k] + ' 31 V134" fill="none" stroke="none"/>';
  }

  // 能量/价值脉冲:电→算 沿路径向上取 acc,算→值 取 acc2
  // 基态 opacity="0" 避免动画 begin 前小球滞留在原点
  for (k = 0; k < xl.length; k++) {
    svg += '<circle r="2" opacity="0" style="fill:var(--acc)">' +
           '<animateMotion dur="5s" repeatCount="indefinite" begin="' + (k * 1.4) + 's"><mpath href="#aicdn' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5s" repeatCount="indefinite" begin="' + (k * 1.4) + 's"/></circle>';
    svg += '<circle r="2" opacity="0" style="fill:var(--acc2)">' +
           '<animateMotion dur="5s" repeatCount="indefinite" begin="' + (k * 1.4 + 2.5) + 's"><mpath href="#aicdn' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;1;0" dur="5s" repeatCount="indefinite" begin="' + (k * 1.4 + 2.5) + 's"/></circle>';
  }

  // 算力层呼吸光环:转换核心的脉搏
  svg += '<circle cx="106" cy="80" r="12" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="12;12;26" dur="4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.32;0" dur="4s" repeatCount="indefinite"/></circle>';

  // 底部:三类图例(电力 / 芯片 / Token)
  var legend = [gTower, gChipS, gBubble];
  var names = ['电力', '算力', 'Token'];
  for (k = 0; k < 3; k++) {
    svg += legend[k](xi[k], 152);
    svg += '<text x="' + xi[k] + '" y="168" font-size="6.6" text-anchor="middle" style="fill:var(--note)">' + names[k] + '</text>';
  }

  // 底部说明
  svg += '<text x="106" y="189" font-size="7.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">算电协同 · 让算力跟着电走</text>';

  svg += '</svg>';
  return svg;
}

/* 统一线条图标包裹:描边随主题取 --acc */
function ioG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 电力层:输电塔 / 储能电池 / 母线槽 */
function gTower(x, y) {
  return ioG('<path d="M' + (x - 4) + ' ' + (y + 5) + ' l4 -10 l4 10"/>' +
    '<path d="M' + (x - 2) + ' ' + (y + 0.8) + ' h4"/>' +
    '<path d="M' + (x - 5.4) + ' ' + (y - 3.4) + ' h10.8"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y - 6) + ' h7.2"/>');
}
function gBattery(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 3.4) + '" width="12" height="6.8" rx="1.3"/>' +
    '<path d="M' + (x - 3.4) + ' ' + (y - 6) + ' v2.6 M' + (x + 3.4) + ' ' + (y - 6) + ' v2.6"/>' +
    '<path d="M' + (x - 2.6) + ' ' + y + ' h2 M' + (x + 0.6) + ' ' + y + ' h2"/>');
}
function gBusbar(x, y) {
  return ioG('<path d="M' + (x - 6) + ' ' + (y - 3) + ' h12 M' + (x - 6) + ' ' + (y + 1) + ' h12"/>' +
    '<path d="M' + (x - 3) + ' ' + (y - 3) + ' v4 M' + (x + 3) + ' ' + (y - 3) + ' v4"/>' +
    '<circle cx="' + (x - 3) + '" cy="' + (y + 4) + '" r="1" style="fill:var(--acc);stroke:none"/>' +
    '<circle cx="' + (x + 3) + '" cy="' + (y + 4) + '" r="1" style="fill:var(--acc);stroke:none"/>');
}

/* 算力层:机柜 / 芯片 / 超节点 */
function gRack(x, y) {
  return ioG('<rect x="' + (x - 5) + '" y="' + (y - 6) + '" width="10" height="12" rx="1.3"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - 2) + ' h10 M' + (x - 5) + ' ' + (y + 2) + ' h10"/>' +
    '<path d="M' + (x - 3.3) + ' ' + (y - 4) + ' h1.6 M' + (x - 3.3) + ' ' + (y + 0.2) + ' h1.6 M' + (x - 3.3) + ' ' + (y + 4) + ' h1.6"/>');
}
function gChipS(x, y) {
  return ioG('<rect x="' + (x - 4.6) + '" y="' + (y - 4.6) + '" width="9.2" height="9.2" rx="1.3"/>' +
    '<rect x="' + (x - 1.8) + '" y="' + (y - 1.8) + '" width="3.6" height="3.6" rx=".6"/>' +
    '<path d="M' + (x - 6.6) + ' ' + (y - 2) + ' h2 M' + (x - 6.6) + ' ' + (y + 2) + ' h2 M' + (x + 4.6) + ' ' + (y - 2) + ' h2 M' + (x + 4.6) + ' ' + (y + 2) + ' h2"/>' +
    '<path d="M' + (x - 2) + ' ' + (y - 6.6) + ' v2 M' + (x + 2) + ' ' + (y - 6.6) + ' v2 M' + (x - 2) + ' ' + (y + 4.6) + ' v2 M' + (x + 2) + ' ' + (y + 4.6) + ' v2"/>');
}
function gNodeNet(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + (y - 4.6) + '" r="1.6"/>' +
    '<circle cx="' + (x - 4.6) + '" cy="' + (y + 2.6) + '" r="1.6"/>' +
    '<circle cx="' + (x + 4.6) + '" cy="' + (y + 2.6) + '" r="1.6"/>' +
    '<path d="M' + (x - 1.2) + ' ' + (y - 3.4) + ' l-2.2 4.4 M' + (x + 1.2) + ' ' + (y - 3.4) + ' l2.2 4.4 M' + (x - 3) + ' ' + (y + 2.6) + ' h6"/>');
}

/* 值层 / 底部图例:对话气泡(Token) / 价值币 / 趋势 */
function gBubble(x, y) {
  return ioG('<rect x="' + (x - 6) + '" y="' + (y - 5) + '" width="12" height="8.4" rx="2"/>' +
    '<path d="M' + (x - 2.4) + ' ' + (y + 3.4) + ' l0 2.4 l2.8 -2.4"/>' +
    '<path d="M' + (x - 3.4) + ' ' + (y - 1.4) + ' h6.8 M' + (x - 3.4) + ' ' + (y + 1) + ' h4"/>');
}
function gCoins(x, y) {
  return ioG('<ellipse cx="' + x + '" cy="' + (y - 2.4) + '" rx="5" ry="2.2"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - 2.4) + ' v3 a5 2.2 0 0 0 10 0 v-3"/>' +
    '<path d="M' + (x - 5) + ' ' + (y + 0.6) + ' v3 a5 2.2 0 0 0 10 0 v-3"/>');
}
function gTrend(x, y) {
  return ioG('<path d="M' + (x - 6) + ' ' + (y + 4) + ' l4 -4 l3 2.4 l5 -5.4"/>' +
    '<path d="M' + (x + 6) + ' ' + (y - 3) + ' v3 h-3"/>' +
    '<path d="M' + (x - 6) + ' ' + (y + 4) + ' h12"/>');
}
