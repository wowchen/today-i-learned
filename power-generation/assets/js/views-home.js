/* 首页视图(多能互补:火/水/核/风/光 五源 → 升压站 → 电网 SVG · 炉火橙红/暖白双主题) */
window.GEN = window.GEN || {};
GEN.views = GEN.views || {};

GEN.views.home = function() {
  var P = GEN.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = GEN.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < GEN.path.length ? GEN.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + genSVG() + '</div>';
  html += '<p class="gh-kicker">发电技术 · 从源头到电网</p>';
  html += '<h1 class="gh-title">电从哪来,<em>怎么来的</em></h1>';
  html += '<p class="gh-latin">Power Generation &middot; From Source to Grid</p>';
  html += '<p class="gh-lede">插上插座就有电,可这一度电要先在锅炉里烧出来、在水轮机里转出来、在反应堆里放出来,或在风机与光伏板里等出来——<b>「发电」就是把各种一次能源转成电的那一步。</b>本站从基础概念讲到主流电源:火电(锅炉 / 汽轮机 / 发电机三大主机)、水电、核电、风电、光伏怎么发电,煤耗与碳排放怎么算,调峰与灵活性为什么越来越重要,以及发电机怎样把电送进电网。</p>';
  if (nextLesson && GEN.lessons[nextLesson]) {
    var nl = GEN.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + GEN.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(GEN.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 10 月。</b>本站涉及的机组参数、设计指标、环保限值、标准规范与电价政策会持续演进;凡涉及设备选型、技术标准、环保要求与实际参数之处,一律以现行有效的国家标准、行业标准、企业技术规定与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程设计、设备选型、投标报价或合规依据。</b>具体项目的方案论证、选型与验收,请以设计文件、现行标准与企业规程为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + GEN.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < GEN.modules.length; i++) {
    var m = GEN.modules[i];
    var mRead = 0;
    for (var j = 0; j < GEN.path.length; j++) {
      if (GEN.path[j].indexOf(m.id + '/') === 0 && P.isRead(GEN.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + GEN.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + GEN.esc(m.en || '') + '</div>';
    html += '<p>' + GEN.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>发电度电成本测算、供电煤耗与碳排放测算、厂用电率与上网电量测算、风电光伏发电量测算、抽水蓄能效率与收益测算、调峰深度与收益测算、环保排放达标校核。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '发电度电成本测算器', 'levelized cost of electricity');
  html += toolCell('▤', '供电煤耗与碳排放测算器', 'coal rate and CO₂');
  html += toolCell('⊞', '厂用电率与上网电量测算器', 'auxiliary power and net output');
  html += toolCell('◐', '风电光伏发电量测算器', 'wind and solar yield');
  html += toolCell('⊟', '抽水蓄能效率与收益测算器', 'pumped storage economics');
  html += toolCell('⌁', '调峰深度与收益测算器', 'peaking depth and revenue');
  html += toolCell('◇', '环保排放达标校核器', 'emission compliance check');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲电网怎么运行(已有<b>电力调度与二次系统站</b>),不讲配电侧网架(已有<b>配电网与配电自动化站</b>),也不讲设备本体(一次设备另设专站)。本站只讲一件事:<b>电是怎么发出来的</b>——各种一次能源分别靠什么原理、什么主机、什么流程转成电,以及发电环节最关心的那几个数(煤耗、度电成本、厂用电率、利用小时、排放强度)到底怎么算。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>发电在整个电力系统里处在哪一环,电源结构为什么决定一切;</li>' +
          '<li>煤电、气电怎么烧,锅炉 / 汽轮机 / 发电机三大主机各干什么活;</li>' +
          '<li>朗肯循环、蒸汽参数与超超临界是怎么把煤耗一点点压下去的;</li>' +
          '<li>除尘、脱硫、脱硝怎么把烟尘、SO₂、NOx 压到超低排放;</li>' +
          '<li>水电靠什么原理发电,抽水蓄能为什么是电网的「充电宝」;</li>' +
          '<li>核电站怎么把核能变成电,压水堆与安全壳起什么作用;</li>' +
          '<li>风电机组和光伏板如何工作,利用小时与容量系数怎么看;</li>' +
          '<li>调峰与灵活性为什么越来越重要,深度调峰难在哪;</li>' +
          '<li>发电机怎样把电送进电网,厂用电、上网电量与线损怎么算;</li>' +
          '<li>度电成本(LCOE)怎么算,为什么风光核的账和煤电完全不同;</li>' +
          '<li>碳市场、绿电绿证、生物质与 CCUS 这些新变量会怎么改变发电。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重原理逻辑与工程判断,不替代任何设计文件、标准规范与工程方案。涉设备参数、技术标准与环保限值之处写的是机制与口径,具体执行以现行有效文件为准。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>发电技术通识 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  GEN.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:多能互补(火 / 水 / 核 / 风 / 光 五源 → 升压站 → 电网)
   顶部一行五个电源图标(火电锅炉 / 水电 / 核电原子 / 风电叶轮 / 光伏),
   各源向下汇入一条母线,母线居中接入升压站(主变),
   再经虚线送出至电网(输电塔);源→母线为上行脉冲(取 --acc),
   变→网为送出脉冲(取 --acc2);电网中心带呼吸光环。
   描边/填色随主题取 --acc / --acc2 / --paper
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function genSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xs = [30, 65, 100, 135, 170];   // 五源横坐标
  var k;

  // 顶部标名
  svg += '<text x="100" y="15" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">多能互补 · 五源协同</text>';

  // 五源图标 + 名称
  var srcs = [gFlame, gWater, gAtom, gWind, gSun];
  var names = ['火电', '水电', '核电', '风电', '光伏'];
  for (k = 0; k < 5; k++) {
    svg += srcs[k](xs[k], 42);
    svg += '<text x="' + xs[k] + '" y="63" font-size="6.6" text-anchor="middle" style="fill:var(--note)">' + names[k] + '</text>';
  }

  // 汇流母线
  svg += '<line x1="22" y1="80" x2="178" y2="80" style="stroke:var(--acc2);stroke-width:1.4" opacity=".55"/>';
  svg += '<circle cx="22" cy="80" r="1.6" style="fill:var(--acc2)"/>';
  svg += '<circle cx="178" cy="80" r="1.6" style="fill:var(--acc2)"/>';

  // 各源到母线的竖直连线 + 复用路径
  for (k = 0; k < 5; k++) {
    svg += '<line x1="' + xs[k] + '" y1="70" x2="' + xs[k] + '" y2="80" style="stroke:var(--acc);stroke-width:1" opacity=".3"/>';
    svg += '<path id="genup' + k + '" d="M' + xs[k] + ' 70 V80" fill="none" stroke="none"/>';
  }
  // 源→母线 上行脉冲(五源并流)
  for (k = 0; k < 5; k++) {
    svg += '<circle r="1.8" opacity="0" style="fill:var(--acc)">' +
           '<animateMotion dur="2.6s" repeatCount="indefinite" begin="' + (k * 0.5) + 's"><mpath href="#genup' + k + '"/></animateMotion>' +
           '<animate attributeName="opacity" values="0;1;1;0" dur="2.6s" repeatCount="indefinite" begin="' + (k * 0.5) + 's"/></circle>';
  }

  // 母线 → 升压站(主变)
  svg += '<line x1="100" y1="80" x2="100" y2="96" style="stroke:var(--acc2);stroke-width:1" opacity=".5"/>';
  svg += gTransformer(100, 110);
  svg += '<text x="112" y="113" font-size="6.2" style="fill:var(--note)">升压站</text>';

  // 升压站 → 电网(送出)
  svg += '<line x1="100" y1="128" x2="100" y2="142" style="stroke:var(--acc);stroke-width:1;stroke-dasharray:2.4 2.4" opacity=".5"/>';
  svg += '<path id="gendn0" d="M100 128 V142" fill="none" stroke="none"/>';
  svg += '<circle r="1.8" opacity="0" style="fill:var(--acc2)">' +
         '<animateMotion dur="1.8s" repeatCount="indefinite"><mpath href="#gendn0"/></animateMotion>' +
         '<animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite"/></circle>';

  // 电网(输电塔) + 呼吸光环
  svg += gPylon(100, 160);
  svg += '<text x="112" y="163" font-size="6.2" style="fill:var(--note)">电网</text>';
  svg += '<circle cx="100" cy="160" r="6" fill="none" stroke="var(--acc)" stroke-width="1" opacity="0">' +
         '<animate attributeName="r" values="6;6;17" dur="3.4s" repeatCount="indefinite"/>' +
         '<animate attributeName="opacity" values="0;.3;0" dur="3.4s" repeatCount="indefinite"/></circle>';

  // 底部说明
  svg += '<text x="100" y="188" font-size="7.5" font-weight="700" text-anchor="middle" style="fill:var(--acc)">升压上网 · 源网协同</text>';

  svg += '</svg>';
  return svg;
}

/* 统一线条图标包裹:描边随主题取 --acc */
function ioG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 五源:火电(锅炉+火焰) / 水电(水轮) / 核电(原子) / 风电(叶轮) / 光伏(日+板) */
function gFlame(x, y) {
  return ioG('<rect x="' + (x - 3.6) + '" y="' + (y - 9) + '" width="7.2" height="8.4" rx="1.2"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y - 5.4) + ' h7.2"/>' +
    '<path d="M' + x + ' ' + (y + 4.6) + ' c-1.8-1.6-2.6-2.8-2.2-4.2 c.3-1 1.2-1.6 2.2-2.2 c1 .6 1.9 1.2 2.2 2.2 c.4 1.4-.4 2.6-2.2 4.2z"/>');
}
function gWater(x, y) {
  return ioG('<path d="M' + x + ' ' + (y - 8.4) + ' c-3.4 4-5.4 6.6-5.4 9 a5.4 5.4 0 0 0 10.8 0 c0-2.4-2-5-5.4-9z"/>' +
    '<path d="M' + (x - 5) + ' ' + (y + 6.6) + ' h10 M' + (x - 4.2) + ' ' + (y + 9.2) + ' h8.4"/>');
}
function gAtom(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + y + '" r="1.7" style="fill:var(--acc);stroke:none"/>' +
    '<ellipse cx="' + x + '" cy="' + y + '" rx="8" ry="3.4"/>' +
    '<ellipse cx="' + x + '" cy="' + y + '" rx="8" ry="3.4" transform="rotate(60 ' + x + ' ' + y + ')"/>' +
    '<ellipse cx="' + x + '" cy="' + y + '" rx="8" ry="3.4" transform="rotate(120 ' + x + ' ' + y + ')"/>');
}
function gWind(x, y) {
  return ioG('<circle cx="' + x + '" cy="' + (y - 6.5) + '" r="1.6"/>' +
    '<path d="M' + x + ' ' + (y - 6.5) + ' v-6.2 M' + x + ' ' + (y - 6.5) + ' l5.4 3.1 M' + x + ' ' + (y - 6.5) + ' l-5.4 3.1"/>' +
    '<path d="M' + x + ' ' + (y - 4.9) + ' l-2.4 13 M' + x + ' ' + (y - 4.9) + ' l2.4 13"/>');
}
function gSun(x, y) {
  var s = '<circle cx="' + x + '" cy="' + (y - 4.6) + '" r="3.2"/>';
  for (var a = 0; a < 8; a++) {
    var ang = a * Math.PI / 4;
    var x1 = x + Math.cos(ang) * 4.8, y1 = (y - 4.6) + Math.sin(ang) * 4.8;
    var x2 = x + Math.cos(ang) * 6.5, y2 = (y - 4.6) + Math.sin(ang) * 6.5;
    s += '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' L' + x2.toFixed(1) + ' ' + y2.toFixed(1) + '"/>';
  }
  s += '<path d="M' + (x - 6) + ' ' + (y + 7.6) + ' l2.4-4.4 h8.2 l-2.4 4.4 z"/>';
  return ioG(s);
}

/* 升压站(主变:两个耦合线圈) */
function gTransformer(x, y) {
  return ioG('<circle cx="' + (x - 3) + '" cy="' + y + '" r="4.2"/>' +
    '<circle cx="' + (x + 3) + '" cy="' + y + '" r="4.2"/>' +
    '<path d="M' + (x - 3) + ' ' + (y - 4.2) + ' v-3.6 M' + (x + 3) + ' ' + (y - 4.2) + ' v-1.8"/>' +
    '<path d="M' + (x - 3) + ' ' + (y + 4.2) + ' v1.8 M' + (x + 3) + ' ' + (y + 4.2) + ' v3.6"/>' +
    '<path d="M' + (x - 7.2) + ' ' + (y - 1.6) + ' h-2.2 M' + (x + 7.2) + ' ' + (y - 1.6) + ' h2.2"/>');
}

/* 电网(输电塔) */
function gPylon(x, y) {
  return ioG('<path d="M' + (x - 5.4) + ' ' + (y + 8) + ' l4-13 h2.8 l4 13"/>' +
    '<path d="M' + (x - 3.4) + ' ' + (y - 3) + ' h6.8 M' + (x - 4.4) + ' ' + (y - 0.2) + ' h8.8 M' + (x - 2.4) + ' ' + (y + 3.6) + ' h4.8"/>' +
    '<path d="M' + (x - 5.4) + ' ' + (y - 3) + ' h-2.4 M' + (x + 5.4) + ' ' + (y - 3) + ' h2.4"/>');
}
