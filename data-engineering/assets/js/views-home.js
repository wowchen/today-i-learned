/* 首页视图(「数据流水线」六站台双行管线 + 数据流脉冲 SVG · 深靛蓝/冷白 双主题) */
window.DEG = window.DEG || {};
DEG.views = DEG.views || {};

DEG.views.home = function() {
  var P = DEG.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = DEG.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < DEG.path.length ? DEG.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + degSVG() + '</div>';
  html += '<p class="gh-kicker">数据工程 · 数据治理</p>';
  html += '<h1 class="gh-title">让数据<em>可信可用</em></h1>';
  html += '<p class="gh-latin">Data Engineering &middot; Data Governance</p>';
  html += '<p class="gh-lede">数据不是天生就能用的。它从各个系统里流进来,要先<b>建模、落存储、走管道</b>,再经<b>质量校验、元数据登记、血缘追踪、标准统一、安全分级</b>,才轮得到分析和 AI 去用。本站按这条流水线展开,讲清楚一份数据从进厂到出厂,中间要过哪些关、每关在管什么。</p>';
  if (nextLesson && DEG.lessons[nextLesson]) {
    var nl = DEG.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + DEG.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(DEG.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及的数据标准、平台能力、合规要求与行业规范会持续演进;凡涉及数据安全、个人信息保护、行业监管与标准口径之处,一律以国家标准(GB)、现行法规与本单位数据管理制度的现行有效版本为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成平台选型、合规审计、投资测算或法律依据。</b>具体项目的架构取舍、治理范围与验收口径,请以真实数据探查、现行标准与企业制度为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + DEG.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < DEG.modules.length; i++) {
    var m = DEG.modules[i];
    var mRead = 0;
    for (var j = 0; j < DEG.path.length; j++) {
      if (DEG.path[j].indexOf(m.id + '/') === 0 && P.isRead(DEG.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + DEG.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + DEG.esc(m.en || '') + '</div>';
    html += '<p>' + DEG.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>数据量估算、数据质量评分、血缘影响分析、分级分类判定、主数据去重、指标口径校核、数据成本与价值测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('▦', '数据量估算器', 'data volume estimator');
  html += toolCell('◍', '数据质量评分器', 'data quality scoring');
  html += toolCell('⇶', '血缘影响分析器', 'lineage impact analysis');
  html += toolCell('▤', '数据分级分类判定器', 'data classification');
  html += toolCell('⊜', '主数据匹配与去重测算器', 'master data matching');
  html += toolCell('≟', '指标口径差异校核器', 'metric consistency');
  html += toolCell('¥', '数据成本与价值测算器', 'data cost and value');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲数据库内核原理与 SQL 语法细节(已有<b>数据分析通识站</b>),不讲机器学习算法(已有<b>机器学习站</b>),不讲 AI 应用的工程落地(已有<b>AI 应用工程站</b>),也不讲云平台怎么选型(已有<b>云计算与云原生站</b>)。本站只讲一件事:<b>把散落在各系统里的数据,变成可管理、可信任、可复用的资产</b>——从建模与存储,到采集与管道,再到质量、元数据、血缘、标准、安全与治理。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>数据工程和数据分析、数据科学到底分工在哪,各自的边界是什么;</li>' +
          '<li>维度建模、范式建模与宽表分别适合什么场景,为什么要先想清楚「怎么用」再决定「怎么存」;</li>' +
          '<li>数据湖、数据仓库、湖仓一体这些名词背后,到底在解决什么问题;</li>' +
          '<li>数据怎么进来:批量、增量、CDC(变更数据捕获)与流式采集各自的门槛;</li>' +
          '<li>ETL 与 ELT 差在哪,调度、依赖、幂等与重跑为什么是管道的生死线;</li>' +
          '<li>数据质量六个维度怎么量化,校验规则怎么设计,坏数据该拦在哪个环节;</li>' +
          '<li>元数据、数据目录与主数据分别管什么,「同一个客户三个名字」怎么治;</li>' +
          '<li>血缘关系怎么画出来,改一个上游字段怎么算清会牵动多少下游;</li>' +
          '<li>数据标准、编码规则与指标口径统一为什么是治理里最费劲也最见功力的活;</li>' +
          '<li>数据分级分类、脱敏与访问控制怎么落地,个人信息与敏感数据怎么守住底线;</li>' +
          '<li>数据治理的组织、制度与度量怎么搭,怎么不沦为「一堆没人看的规范文档」;</li>' +
          '<li>数据资产怎么估值,数据平台怎么算清成本与价值,AI 时代的数据供给又有什么新要求。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重工程判断与治理逻辑,不替代任何平台架构方案、数据标准文件与合规审计意见。涉标准、法规与制度之处写的是机制与口径,具体执行以现行有效文件为准;涉及个人信息与敏感数据之处,强调最小必要、分类分级与安全可控。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>数据工程与数据治理 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  DEG.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「数据流水线」——六个站台走一条连续双行管线
   上排(左→右):采集 → 存储 → 加工
   右端折下,下排(右→左):治理 → 服务 → 应用
   整条管线是一条 path,数据流脉冲小球沿它运动(取 --acc / --acc2);
   中间空白处标注「数据流水线」;
   描边/填色随主题取 --acc / --acc2 / --paper
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function degSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var r = 13;
  // 六个站台坐标:上排 L→R,下排 R→L
  var nodes = [
    { x: 46,  y: 48,  label: '采集', icon: gIngest },
    { x: 100, y: 48,  label: '存储', icon: gStore },
    { x: 154, y: 48,  label: '加工', icon: gTransform },
    { x: 154, y: 140, label: '治理', icon: gGovern },
    { x: 100, y: 140, label: '服务', icon: gServe },
    { x: 46,  y: 140, label: '应用', icon: gApply }
  ];
  // 连续管线路径(供描边与脉冲复用)
  var d = 'M46 48 H154 C174 48 174 140 154 140 H46';
  svg += '<path d="' + d + '" fill="none" stroke="var(--acc2)" stroke-width="1" stroke-dasharray="3 4" opacity=".42"/>';
  // 六站台:底盘 + 图标
  var k;
  for (k = 0; k < nodes.length; k++) {
    var nd = nodes[k];
    svg += '<circle cx="' + nd.x + '" cy="' + nd.y + '" r="' + r + '" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.1"/>';
    svg += nd.icon(nd.x, nd.y);
  }
  // 站台标签:上排在上方,下排在下方,避开管线
  svg += '<text x="46"  y="26"  font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">采集</text>';
  svg += '<text x="100" y="26"  font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">存储</text>';
  svg += '<text x="154" y="26"  font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">加工</text>';
  svg += '<text x="154" y="166" font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">治理</text>';
  svg += '<text x="100" y="166" font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">服务</text>';
  svg += '<text x="46"  y="166" font-size="7.4" font-weight="700" text-anchor="middle" style="fill:var(--acc)">应用</text>';
  // 复用路径(供脉冲运动)
  svg += '<path id="degflow" d="' + d + '" fill="none" stroke="none"/>';
  // 数据流脉冲:三枚小球沿管线运动
  svg += degPulse('degflow', 'var(--acc)', 11, 0);
  svg += degPulse('degflow', 'var(--acc2)', 11, 3.7);
  svg += degPulse('degflow', 'var(--acc)', 11, 7.4);
  // 中间标注
  svg += '<text x="100" y="88" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">数据流水线</text>';
  svg += '<text x="100" y="104" font-size="6.4" text-anchor="middle" style="fill:var(--note)">从进厂到出厂</text>';
  svg += '</svg>';
  return svg;
}

/* 通用脉冲小球:沿给定 path id 运动 */
function degPulse(pathId, color, dur, delay) {
  return '<circle r="2.1" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}

/* 统一线条图标包裹:描边随主题取 --acc */
function degG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 采集:向下箭头入托盘 */
function gIngest(x, y) {
  return degG('<path d="M' + x + ' ' + (y - 5.4) + ' v7"/>' +
    '<path d="M' + (x - 2.8) + ' ' + (y - 1.2) + ' l2.8 2.8 l2.8 -2.8"/>' +
    '<path d="M' + (x - 5) + ' ' + (y + 3.8) + ' h10"/>');
}
/* 存储:数据库圆柱 */
function gStore(x, y) {
  return degG('<ellipse cx="' + x + '" cy="' + (y - 3.4) + '" rx="5" ry="1.8"/>' +
    '<path d="M' + (x - 5) + ' ' + (y - 3.4) + ' V' + (y + 3.4) + '"/>' +
    '<path d="M' + (x + 5) + ' ' + (y - 3.4) + ' V' + (y + 3.4) + '"/>' +
    '<path d="M' + (x - 5) + ' ' + (y + 3.4) + ' A5 1.8 0 0 0 ' + (x + 5) + ' ' + (y + 3.4) + '"/>' +
    '<path d="M' + (x - 5) + ' ' + (y + 0.2) + ' A5 1.8 0 0 0 ' + (x + 5) + ' ' + (y + 0.2) + '"/>');
}
/* 加工:漏斗 */
function gTransform(x, y) {
  return degG('<path d="M' + (x - 5) + ' ' + (y - 4.4) + ' H' + (x + 5) + ' L' + (x + 1.6) + ' ' + (y + 0.6) + ' V' + (y + 4.4) + ' L' + (x - 1.6) + ' ' + (y + 2.8) + ' V' + (y + 0.6) + ' Z"/>');
}
/* 治理:盾牌 + 勾 */
function gGovern(x, y) {
  return degG('<path d="M' + x + ' ' + (y - 5.4) + ' l4.6 1.8 v3.4 c0 3 -2 4.6 -4.6 5.6 c-2.6 -1 -4.6 -2.6 -4.6 -5.6 v-3.4 z"/>' +
    '<path d="M' + (x - 1.8) + ' ' + (y + 0.2) + ' l1.4 1.4 l2.8 -3"/>');
}
/* 服务:接口尖括号 <> */
function gServe(x, y) {
  return degG('<path d="M' + (x - 2) + ' ' + (y - 5) + ' l-3 5 l3 5"/>' +
    '<path d="M' + (x + 2) + ' ' + (y - 5) + ' l3 5 l-3 5"/>');
}
/* 应用:柱状图 */
function gApply(x, y) {
  return degG('<path d="M' + (x - 6) + ' ' + (y + 4.6) + ' h12"/>' +
    '<path d="M' + (x - 4.4) + ' ' + (y + 4.6) + ' v-4"/>' +
    '<path d="M' + (x - 1.4) + ' ' + (y + 4.6) + ' v-7.6"/>' +
    '<path d="M' + (x + 1.6) + ' ' + (y + 4.6) + ' v-5"/>' +
    '<path d="M' + (x + 4.4) + ' ' + (y + 4.6) + ' v-9"/>');
}
