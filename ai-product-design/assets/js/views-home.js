/* 首页视图(「AI 产品循环」五节点环形流程 + 反馈脉冲 SVG · 洋红紫/冷白微粉 双主题) */
window.APD = window.APD || {};
APD.views = APD.views || {};

APD.views.home = function() {
  var P = APD.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = APD.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < APD.path.length ? APD.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + apdSVG() + '</div>';
  html += '<p class="gh-kicker">AI 产品 · 交互设计</p>';
  html += '<h1 class="gh-title">把 AI 做成<em>好产品</em></h1>';
  html += '<p class="gh-latin">AI Product &middot; Interaction Design</p>';
  html += '<p class="gh-lede">模型很强,不等于产品好用。从一个模糊的念头出发,到它真正被人用起来——中间隔着<b>用户研究、任务设计、交互范式、提示词、信任、原型验证、指标与伦理</b>一整条链。本站按这条链展开,讲清楚 AI 产品该不该做、给谁做、长什么样、怎么验证、又怎么才不跑偏。</p>';
  if (nextLesson && APD.lessons[nextLesson]) {
    var nl = APD.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + APD.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(APD.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线:2026 年 10 月。</b>本站涉及的模型能力、平台功能、设计规范与无障碍标准会持续演进;凡涉及能力边界、计费口径、数据合规与无障碍要求之处,一律以所用平台官方文档、现行 WCAG 标准与现行有效文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成产品决策、投资测算、无障碍认证或合规依据。</b>具体产品的方向取舍、定价与验收,请以真实用户研究、A/B 实验与企业口径为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + APD.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < APD.modules.length; i++) {
    var m = APD.modules[i];
    var mRead = 0;
    for (var j = 0; j < APD.path.length; j++) {
      if (APD.path[j].indexOf(m.id + '/') === 0 && P.isRead(APD.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + APD.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + APD.esc(m.en || '') + '</div>';
    html += '<p>' + APD.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>任务适配度评估、交互漏斗测算、对话轮次与完成率、人机协作审核负荷、无障碍对比度检查、原型测试样本量、价值与定价测算。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', '任务适配度评估器', 'task fit scoring');
  html += toolCell('▽', '交互漏斗测算器', 'interaction funnel');
  html += toolCell('⇄', '对话轮次与完成率测算器', 'dialog turns and completion');
  html += toolCell('⚖', '人机协作与审核负荷测算器', 'human review load');
  html += toolCell('◐', '无障碍对比度检查器', 'WCAG contrast check');
  html += toolCell('☺', '原型测试样本量测算器', 'usability test sample size');
  html += toolCell('¥', '价值与定价测算器', 'value and pricing');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲模型怎么训练(已有<b>人工智能站</b>与<b>机器学习站</b>),不讲后端怎么搭、怎么上线(已有<b>AI 应用工程站</b>),不讲智能体的技术实现(已有<b>AI 智能体站</b>),也不讲数据分析方法(已有<b>数据分析通识站</b>)。本站只讲一件事:<b>把一个 AI 能力,做成用户愿意用、用得顺、信得过的产品</b>——从理解人到定义任务,从交互范式到信任建设,从原型验证到指标与伦理。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>AI 产品和传统软件到底差在哪,为什么不能照抄老套路;</li>' +
          '<li>怎么判断一件活适不适合交给 AI,人机分工的边界划在哪;</li>' +
          '<li>对话式、生成式、智能体式、多模态这几种交互范式分别适合什么场景;</li>' +
          '<li>提示词为什么是产品资产,系统提示、结构化输出与微文案怎么写;</li>' +
          '<li>用户不信任 AI 的三个原因,以及不确定性表达、引用溯源与可撤销怎么设计;</li>' +
          '<li>不写代码怎么快速验证,绿野仙踪法与可用性测试怎么用;</li>' +
          '<li>智能体产品的权限、编排、失败处理与自主性等级怎么把握;</li>' +
          '<li>个性化与记忆的边界,隐私与冷启动怎么处理;</li>' +
          '<li>采纳率、任务完成率与北极星指标怎么选,如何不被虚荣指标骗;</li>' +
          '<li>无障碍、偏见与责任边界这些「不做会出事」的底线;</li>' +
          '<li>如何与研发、业务、合规协作,把想法干净地交到实现那一步。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重产品判断与交互设计逻辑,不替代任何用户研究报告、设计规范与工程方案。涉模型能力、平台功能与无障碍标准之处写的是机制与口径,具体执行以官方文档与现行有效文件为准;涉及用户数据之处,强调最小必要、知情同意与隐私设计。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>AI 产品与交互设计 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  APD.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:「AI 产品循环」——五个节点沿一个圆环排布
   洞察用户 → 定义需求 → 设计方案 → 原型验证 → 上线迭代 →(回到洞察)
   外圈虚线圆为轨道;节点为小圆底盘 + 线条图标;
   脉冲小球沿 id="apdloop" 的整圆路径运动(取 --acc / --acc2),代表反馈回流;
   圆心标注「AI 产品循环」。
   描边/填色随主题取 --acc / --acc2 / --paper
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留) */
function apdSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var cx = 100, cy = 100, R = 62;
  var nodes = [
    { a: -90, label: '洞察', icon: gLens },
    { a: -18, label: '定义', icon: gDoc },
    { a: 54,  label: '设计', icon: gPen },
    { a: 126, label: '验证', icon: gCheck },
    { a: 198, label: '迭代', icon: gLoop }
  ];
  var k;
  // 外圈虚线轨道
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="var(--acc2)" stroke-width="1" stroke-dasharray="3 4" opacity=".38"/>';
  // 五个节点底盘 + 图标 + 标签
  for (k = 0; k < nodes.length; k++) {
    var nd = nodes[k];
    var rad = nd.a * Math.PI / 180;
    var x = cx + R * Math.cos(rad), y = cy + R * Math.sin(rad);
    svg += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="14" style="fill:var(--paper);stroke:var(--acc);stroke-width:1.1"/>';
    svg += nd.icon(x, y);
    // 标签放在节点外侧
    var lx = cx + (R + 26) * Math.cos(rad), ly = cy + (R + 26) * Math.sin(rad);
    svg += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 3).toFixed(1) + '" font-size="7.6" font-weight="700" text-anchor="middle" style="fill:var(--acc)">' + nd.label + '</text>';
  }
  // 整圆复用路径(供脉冲运动)
  svg += '<path id="apdloop" d="M' + cx + ' ' + (cy - R) + ' A' + R + ' ' + R + ' 0 1 1 ' + (cx - 0.1) + ' ' + (cy - R) + '" fill="none" stroke="none"/>';
  // 反馈脉冲:两枚小球沿环运动
  svg += pulseDot('apdloop', 'var(--acc)', 9, 0);
  svg += pulseDot('apdloop', 'var(--acc2)', 9, 4.5);
  // 圆心标注
  svg += '<text x="' + cx + '" y="' + (cy - 4) + '" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">AI 产品</text>';
  svg += '<text x="' + cx + '" y="' + (cy + 8) + '" font-size="9" font-weight="700" text-anchor="middle" style="fill:var(--acc)">循环</text>';
  svg += '<text x="' + cx + '" y="' + (cy + 22) + '" font-size="6.4" text-anchor="middle" style="fill:var(--note)">从想法到上线</text>';
  svg += '</svg>';
  return svg;
}

/* 通用脉冲小球:沿给定 path id 运动 */
function pulseDot(pathId, color, dur, delay) {
  return '<circle r="2" opacity="0" style="fill:' + color + '">' +
    '<animateMotion dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"><mpath href="#' + pathId + '"/></animateMotion>' +
    '<animate attributeName="opacity" values="0;1;1;1;0" dur="' + dur + 's" repeatCount="indefinite" begin="' + delay + 's"/></circle>';
}

/* 统一线条图标包裹:描边随主题取 --acc */
function apdG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 洞察:放大镜 */
function gLens(x, y) {
  return apdG('<circle cx="' + (x - 1.6) + '" cy="' + (y - 1.6) + '" r="4.2"/>' +
    '<path d="M' + (x + 1.4) + ' ' + (y + 1.4) + ' l3.4 3.4"/>');
}
/* 定义:需求清单 */
function gDoc(x, y) {
  return apdG('<rect x="' + (x - 3.6) + '" y="' + (y - 5) + '" width="7.2" height="10" rx="1.2"/>' +
    '<path d="M' + (x - 1.8) + ' ' + (y - 2.2) + ' h3.6 M' + (x - 1.8) + ' ' + (y + 0.2) + ' h3.6 M' + (x - 1.8) + ' ' + (y + 2.6) + ' h2"/>');
}
/* 设计:画笔 */
function gPen(x, y) {
  return apdG('<path d="M' + (x - 4.2) + ' ' + (y + 4.2) + ' l1.4-3.4 l6.2-6.2 l2 2 l-6.2 6.2 z"/>' +
    '<path d="M' + (x + 3.4) + ' ' + (y - 5.4) + ' l2 2"/>' +
    '<path d="M' + (x - 4.2) + ' ' + (y + 4.2) + ' l3.4-1.4"/>');
}
/* 验证:圆形 + 勾 */
function gCheck(x, y) {
  return apdG('<circle cx="' + x + '" cy="' + y + '" r="5.2"/>' +
    '<path d="M' + (x - 2.4) + ' ' + (y + 0.2) + ' l1.8 1.8 l3.2-3.6"/>');
}
/* 迭代:循环箭头 */
function gLoop(x, y) {
  return apdG('<path d="M' + (x - 3.4) + ' ' + (y - 2) + ' a4.4 4.4 0 0 1 7.4-1.4"/>' +
    '<path d="M' + (x + 3.4) + ' ' + (y + 2) + ' a4.4 4.4 0 0 1 -7.4 1.4"/>' +
    '<path d="M' + (x + 3.6) + ' ' + (y - 4.6) + ' l0.4 2.4 l-2.4 0.4"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y + 4.6) + ' l-0.4-2.4 l2.4-0.4"/>');
}
