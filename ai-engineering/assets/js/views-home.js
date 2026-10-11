/* 首页视图(AI 应用工程流水线:原型 → 评测 → 灰度 → 生产 + 数据飞轮反馈闭环 SVG
   · 墨蓝/电光青柠双主题) */
window.AIPE = window.AIPE || {};
AIPE.views = AIPE.views || {};

AIPE.views.home = function() {
  var P = AIPE.progress();
  var step = P.currentStep();
  var readCount = P.readCount();
  var total = AIPE.totalLessons;
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextLesson = step < AIPE.path.length ? AIPE.path[step] : null;

  var html = '';

  // ===== Hero =====
  html += '<header class="gh-hero">';
  html += '<div class="gh-globe">' + aipeSVG() + '</div>';
  html += '<p class="gh-kicker">AI 应用工程 · 从原型到生产</p>';
  html += '<h1 class="gh-title">让 AI <em>真能用</em></h1>';
  html += '<p class="gh-latin">AI Application Engineering &middot; Demo to Production</p>';
  html += '<p class="gh-lede">演示里跑通一次不难,难的是明天、下周、换一批输入之后它还能用。模型之外的这一层——<b>数据怎么喂、流程怎么编排、效果怎么测、线上怎么看、发布怎么放、钱怎么算、风险怎么守</b>——才决定一个 AI 能力到底能不能上岗。本站就讲这一层:从 Demo 到生产的每一步工程问题。</p>';
  if (nextLesson && AIPE.lessons[nextLesson]) {
    var nl = AIPE.lessons[nextLesson];
    html += '<a class="gh-cta" href="#/l/' + nextLesson + '">' +
            (readCount > 0 ? '继续学习 · 第 ' + (step + 1) + ' 步' : '从第 1 课开始') +
            ' <span class="nm-t">' + AIPE.esc(nl.title) + '</span></a>';
  }
  html += '<div class="gh-meta">';
  html += metaCell(AIPE.modules.length, '模块');
  html += metaCell(readCount + ' / ' + total, '已学 / 微课');
  html += metaCell(percent + '%', '进度');
  html += metaCell('7', '互动工具');
  html += '</div>';
  html += '</header>';

  // ===== 技术与合规声明(首页常驻) =====
  html += '<div class="disclaimer">';
  html += '<h4>技术与合规声明</h4>';
  html += '<p><b>内容基线：2026 年 10 月。</b>本站涉及的模型能力、平台功能、计费方式、评测方法与合规要求会持续演进;凡涉及具体实现、参数限值、成本口径与监管要求之处,一律以所用平台的官方文档、企业技术规范、现行有效的国家标准与主管部门文件为准,并随其更新而变化。</p>';
  html += '<p><b>本站为通识科普,不构成工程方案、采购决策、投资测算或合规依据。</b>具体项目的技术选型、预算测算与上线评审,请以设计文档、商务报价、企业制度与法务意见为准。</p>';
  html += '</div>';

  // ===== Modules =====
  html += '<div class="gh-rule"><h2>模块索引</h2><span class="ln"></span><small>' + AIPE.modules.length + ' Modules</small></div>';
  html += '<div class="gh-mods">';
  for (var i = 0; i < AIPE.modules.length; i++) {
    var m = AIPE.modules[i];
    var mRead = 0;
    for (var j = 0; j < AIPE.path.length; j++) {
      if (AIPE.path[j].indexOf(m.id + '/') === 0 && P.isRead(AIPE.path[j])) mRead++;
    }
    var done = mRead >= m.lessons && m.lessons > 0;
    html += '<a class="gh-mod" href="#/m/' + m.id + '">';
    html += '<div class="row"><span class="no">' + pad(i + 1) + '</span><h3>' + AIPE.esc(m.title) + '</h3></div>';
    html += '<div class="en">' + AIPE.esc(m.en || '') + '</div>';
    html += '<p>' + AIPE.esc(m.desc) + '</p>';
    html += '<div class="prog' + (done ? ' done' : '') + '">' + mRead + ' / ' + m.lessons + ' 课' + (done ? ' · 已读完' : '') + '</div>';
    html += '</a>';
  }
  html += '<a class="gh-mod" href="#/calc" style="background:linear-gradient(120deg,var(--acc-soft),transparent)">';
  html += '<div class="row"><span class="no">★</span><h3>互动工具箱</h3></div>';
  html += '<div class="en">Toolbox</div>';
  html += '<p>Token 成本与调用量测算、RAG 检索质量与上下文预算、评测集与指标设计、灰度分流与效果显著性、AI 项目 ROI、人工替代与效率增益、失败模式自诊。</p>';
  html += '<div class="prog">7 件 · 边读边算</div>';
  html += '</a>';
  html += '</div>';

  // ===== Tools =====
  html += '<div class="gh-rule"><h2>互动工具</h2><span class="ln"></span><small>Toolbox</small></div>';
  html += '<div class="gh-tools">';
  html += toolCell('◈', 'Token 成本与调用量测算器', 'token cost and calls');
  html += toolCell('▤', 'RAG 检索质量与上下文预算测算器', 'retrieval quality and context budget');
  html += toolCell('⊞', '评测集与指标设计器', 'eval set and metrics');
  html += toolCell('◐', '灰度分流与效果显著性估算器', 'rollout and significance');
  html += toolCell('⊟', 'AI 项目 ROI 测算器', 'project ROI');
  html += toolCell('⌁', '人工替代与效率增益测算器', 'efficiency gain');
  html += toolCell('◇', '失败模式自诊器', 'failure mode self-check');
  html += '</div>';

  // ===== About =====
  html += '<div class="gh-about">';
  html += '<h3>关于本站</h3>';
  html += '<div class="body">';
  html += '<p>本站不讲 AI 通识与模型原理(已有<b>人工智能站</b>),不讲算法与训练(已有<b>机器学习站</b>),不讲智能体本身(已有<b>AI 智能体站</b>),不讲算力与算电协同(已有<b>AI 算力基础设施站</b>),不讲云上方法论(已有<b>云计算与云原生站</b>),也不讲安全通识(已有<b>信息安全站</b>)。本站只讲一件事:<b>把模型能力做成一个能上线、能评测、能运营、能算清账的业务系统</b>——这一步,业内叫 AI 应用工程。</p>';
  html += '<p>读完会知道:</p>';
  html += '<ul>' +
          '<li>为什么演示能跑通、上线就翻车,Demo 鸿沟到底鸿在哪;</li>' +
          '<li>什么样的活儿适合交给 AI,怎么把模糊诉求拆成能验收的工作单元;</li>' +
          '<li>Harness 到底包了哪些东西:提示词、工具调用、编排、校验与降级;</li>' +
          '<li>上下文这块"桌面"怎么分配,为什么"塞得准"比"塞得多"重要;</li>' +
          '<li>评测集怎么攒、黄金集是什么、模型裁判靠不靠谱、准确率与召回率怎么取舍;</li>' +
          '<li>怎么判断"提升了 3 个百分点"是真进步还是抽样噪声;</li>' +
          '<li>上线前该埋哪些监控,输入漂移与效果下滑怎么被及时发现;</li>' +
          '<li>影子模式、灰度、A/B 测试分别什么时候用,发布门禁卡的是哪几个数;</li>' +
          '<li>Token 成本怎么算,钱主要花在输入还是输出,从哪几处能压下来;</li>' +
          '<li>AI 项目怎么算账:ROI、回收期、净现值,以及收益口径怎么才不自欺;</li>' +
          '<li>人机分工怎么划、审核负荷有多大、失败之后怎么复盘成可复用的经验。</li>' +
          '</ul>';
  html += '<p style="color:var(--note);font-size:.88rem;margin-top:18px">说明:本站为通识科普,重工程逻辑与判断口径,不替代任何官方文档、企业规范与工程方案。涉模型能力、平台功能、计费与合规之处写的是机制与口径,具体执行以所用平台官方文档与现行有效文件为准。<b>内容基线 2026 年 10 月。</b></p>';
  html += '</div></div>';

  // ===== Footer =====
  html += '<div class="gh-foot"><span>AI 应用工程 · Today I Learned</span><span>纯静态 · 零依赖 · 离线可用 · 内容基线 2026-10</span></div>';

  AIPE.render(html);
};

function metaCell(v, k) {
  return '<div><b>' + v + '</b><span>' + k + '</span></div>';
}
function toolCell(g, title, en) {
  return '<a class="gh-tool" href="#/calc"><span class="g">' + g + '</span>' +
    '<div><b>' + title + '</b><span>' + en + '</span></div></a>';
}
function pad(n) { return n < 10 ? '0' + n : '' + n; }

/* 首页主图:AI 应用工程流水线
   四个阶段节点自左向右:原型 → 评测 → 灰度 → 生产(圆角方框 + 线条图标 + 阶段名),
   节点之间用带箭头的短横线相连;主轴上叠加自左向右的流动脉冲(取 --acc)。
   四节点下方一条回环箭头:生产 → 原型,标注「数据飞轮 · 反馈闭环」,取 --acc2;
   底部两行小字点出「模型之外的工程」与本站主张。
   描边/填色随主题取 --acc / --acc2 / --note;
   prefers-reduced-motion 由 CSS 守卫(动画停但图保留)。 */
function aipeSVG() {
  var svg = '<svg viewBox="0 0 200 200" fill="none">';
  var xs = [14, 60, 106, 152];     // 四个节点框左边界
  var cxs = [31, 77, 123, 169];    // 四个节点中心 x
  var by = 48, bh = 38, cy = by + bh / 2;   // 框 y / 高 / 图标中心 y
  var k;

  // 顶部标题
  svg += '<text x="100" y="14" font-size="8" font-weight="700" text-anchor="middle" style="fill:var(--acc)">从 Demo 到生产</text>';
  svg += '<text x="100" y="27" font-size="7" text-anchor="middle" style="fill:var(--note)">AI 应用工程流水线</text>';

  // 主轴连线(节点之间的短箭头)
  for (k = 0; k < 3; k++) {
    var x1 = xs[k] + 34, x2 = xs[k + 1];
    svg += '<line x1="' + x1 + '" y1="' + cy + '" x2="' + (x2 - 2.6) + '" y2="' + cy + '" style="stroke:var(--acc2);stroke-width:1.1"/>';
    svg += '<path d="M' + (x2 - 4.4) + ' ' + (cy - 2.2) + ' l2.2 2.2 l-2.2 2.2" style="stroke:var(--acc2);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  // 四个阶段节点
  for (k = 0; k < 4; k++) {
    svg += '<rect x="' + xs[k] + '" y="' + by + '" width="34" height="' + bh + '" rx="6" style="stroke:var(--acc2);stroke-width:1;fill:none" opacity=".55"/>';
  }
  svg += gFlask(cxs[0], cy);
  svg += gTarget(cxs[1], cy);
  svg += gSplit(cxs[2], cy);
  svg += gServer(cxs[3], cy);

  var names = ['原型', '评测', '灰度', '生产'];
  for (k = 0; k < 4; k++) {
    svg += '<text x="' + cxs[k] + '" y="' + (by + bh + 12) + '" font-size="7.6" font-weight="700" text-anchor="middle" style="fill:var(--acc)">' + names[k] + '</text>';
  }

  // 主轴流动脉冲(自左向右穿过四个节点)
  svg += '<path id="aipepipe" d="M' + (xs[0] + 34) + ' ' + cy + ' H' + xs[3] + '" fill="none" stroke="none"/>';
  for (k = 0; k < 3; k++) svg += pulseDot('aipepipe', 'var(--acc)', 3.6, k * 1.2);

  // 数据飞轮:从「生产」底部回环到「原型」底部
  var loopY = 112;
  svg += '<path d="M' + cxs[3] + ' ' + (by + bh + 16) + ' V' + (loopY - 8) +
         ' Q' + cxs[3] + ' ' + loopY + ' ' + (cxs[3] - 9) + ' ' + loopY +
         ' H' + (cxs[0] + 9) +
         ' Q' + cxs[0] + ' ' + loopY + ' ' + cxs[0] + ' ' + (loopY - 8) +
         ' V' + (by + bh + 18) + '" style="stroke:var(--acc2);stroke-width:1;fill:none" stroke-linecap="round" stroke-dasharray="3 2.6"/>';
  // 回环箭头(指回「原型」)
  svg += '<path d="M' + (cxs[0] - 2.3) + ' ' + (by + bh + 22) + ' l2.3 -3.4 l2.3 3.4" style="stroke:var(--acc2);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round"/>';
  // 回环上流动的脉冲(自右向左)
  svg += '<path id="aipefly" d="M' + cxs[3] + ' ' + (loopY - 10) + ' V' + loopY + ' H' + cxs[0] + ' V' + (loopY - 10) + '" fill="none" stroke="none"/>';
  svg += pulseDot('aipefly', 'var(--acc2)', 4.4, 0.6);
  svg += '<text x="100" y="' + (loopY + 15) + '" font-size="6.6" text-anchor="middle" style="fill:var(--acc2)">数据飞轮 · 反馈闭环</text>';

  // 底部:模型之外的工程层
  svg += '<text x="100" y="152" font-size="6.6" text-anchor="middle" style="fill:var(--note)">数据 · 编排 · 评测 · 监控 · 灰度 · 成本 · 治理</text>';
  svg += '<text x="100" y="186" font-size="7.6" font-weight="700" text-anchor="middle" style="fill:var(--acc)">模型是零件,工程是产线</text>';

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
function aipeG(inner) {
  return '<g style="stroke:var(--acc);stroke-width:1.1;fill:none" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g>';
}

/* 原型:锥形瓶 */
function gFlask(x, y) {
  return aipeG('<path d="M' + (x - 3.2) + ' ' + (y - 7) + ' h6.4"/>' +
    '<path d="M' + (x - 3.2) + ' ' + (y - 7) + ' V' + (y - 1) + ' L' + (x - 6.6) + ' ' + (y + 6) + ' H' + (x + 6.6) + ' L' + (x + 3.2) + ' ' + (y - 1) + ' V' + (y - 7) + '"/>' +
    '<path d="M' + (x - 5.2) + ' ' + (y + 2.8) + ' H' + (x + 5.2) + '"/>');
}

/* 评测:同心圆靶 */
function gTarget(x, y) {
  return aipeG('<circle cx="' + x + '" cy="' + y + '" r="7"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="4.1"/>' +
    '<circle cx="' + x + '" cy="' + y + '" r="1.4" style="fill:var(--acc);stroke:none"/>');
}

/* 灰度:一路进、两路分 */
function gSplit(x, y) {
  return aipeG('<path d="M' + x + ' ' + (y - 7.5) + ' V' + (y - 1.6) + '"/>' +
    '<path d="M' + (x - 5.6) + ' ' + (y + 2.2) + ' L' + x + ' ' + (y - 1.6) + ' L' + (x + 5.6) + ' ' + (y + 2.2) + '"/>' +
    '<path d="M' + (x - 5.6) + ' ' + (y + 2.2) + ' V' + (y + 7.5) + ' M' + (x + 5.6) + ' ' + (y + 2.2) + ' V' + (y + 7.5) + '"/>');
}

/* 生产:机架 */
function gServer(x, y) {
  return aipeG('<rect x="' + (x - 6) + '" y="' + (y - 7) + '" width="12" height="14" rx="1.4"/>' +
    '<path d="M' + (x - 6) + ' ' + (y - 2.3) + ' h12 M' + (x - 6) + ' ' + (y + 2.3) + ' h12"/>' +
    '<path d="M' + (x - 3.6) + ' ' + (y - 4.7) + ' h1.6 M' + (x - 3.6) + ' ' + y + ' h1.6"/>');
}
