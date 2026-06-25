/* 首页(文档手册首页:概览 + 模块目录 + 工具) */
window.AIX = window.AIX || {};
AIX.views = AIX.views || {};

AIX.views.home = function() {
  var P = AIX.progress();
  var esc = AIX.esc;
  var readCount = P.readCount();
  var total = AIX.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextId = step < AIX.path.length ? AIX.path[step] : null;

  function countOf(mid) {
    var c = 0;
    for (var i = 0; i < AIX.path.length; i++) if (AIX.path[i].indexOf(mid + '/') === 0) c++;
    return c;
  }

  var h = '';

  // Hero
  h += '<section class="hero">';
  h += '<div class="eye">A I · 通识手册</div>';
  h += '<h1>看懂<em>人工智能</em><br>从神经元到大模型与智能体</h1>';
  h += '<p>不堆术语、不贩卖焦虑。用大白话把 AI 的来龙去脉讲清楚:它怎么学、' +
       '<mark>大模型</mark>为什么突然变强、生成式 AI 与<mark>智能体</mark>能做什么、' +
       '以及怎么把它用好、用得安全。' + total + ' 节微课,一课一个点,五分钟读完。</p>';
  h += '<div class="cta">';
  if (nextId && AIX.lessons[nextId]) {
    h += '<a class="btn solid" href="#/l/' + nextId + '">' +
         (readCount > 0 ? '继续学习 · ' + esc(AIX.lessons[nextId].title) : '从第 1 课开始 →') + '</a>';
  }
  h += '<a class="btn" href="#/lab">打开互动实验室</a>';
  h += '<a class="btn" href="#/timeline">AI 发展史</a>';
  h += '</div>';
  h += '</section>';

  // Stats
  h += '<div class="statrow">';
  h += stat('模块', '<em>' + AIX.modules.length + '</em>');
  h += stat('微课', readCount + ' <em>/</em> ' + total);
  h += stat('已读', '<em>' + percent + '</em>%');
  h += stat('费用', '¥ <em>0</em>');
  h += '</div>';

  // Modules
  h += '<div class="sec-head"><h2><span class="s">#</span>课程模块</h2>' +
       '<span class="r">' + AIX.modules.length + ' 章 · 按顺序读最顺</span></div>';
  h += '<div class="mod-grid">';
  for (var i = 0; i < AIX.modules.length; i++) {
    var m = AIX.modules[i];
    var ord = m.order < 10 ? '0' + m.order : '' + m.order;
    h += '<a class="mcard" href="#/m/' + m.id + '">' +
         '<span class="gh">' + ord + '</span>' +
         '<div class="n">MODULE ' + ord + '</div>' +
         '<h3>' + esc(m.title) + '</h3>' +
         '<p>' + esc(m.desc || '') + '</p>' +
         '<div class="cnt">' + countOf(m.id) + ' 节</div>' +
         '</a>';
  }
  h += '</div>';

  // Tools
  h += '<div class="sec-head"><h2><span class="s">#</span>工具与实验室</h2>' +
       '<span class="r">边读边查 · 边玩边懂</span></div>';
  h += '<div class="tool-grid">';
  h += tool('#/timeline', '发展史时间轴', '从 1950 图灵之问到当下,把 AI 七十年的关键节点串成一条线。');
  h += tool('#/figures', '人物图鉴', '中外关键人物:图灵、麦卡锡、Hinton、李飞飞、梁文锋…点开看贡献。');
  h += tool('#/lab', '互动实验室', '注意力可视化、感知机手玩、提示词演练器——动手理解原理。');
  h += tool('#/cheatsheet', '大模型速查', '主流模型横向对比:厂商、定位、上下文、开源闭源、一句话。');
  h += tool('#/compare', '中外 AI 对照', '同一时间线上,左看全球、右看中国,建立坐标感。');
  h += tool('#/terms', '术语表', '七十多条 AI 术语随手查;课文里点带下划线的词也能弹出解释。');
  h += '</div>';

  // About
  h += '<div class="note-box">';
  h += '<b>这站怎么读</b>';
  h += '<ul>' +
       '<li>顺着模块从上往下读最省力;也可以直接挑感兴趣的章。</li>' +
       '<li>正文里<b>带下划线的词</b>是术语,点一下弹出大白话解释,可收藏到术语本。</li>' +
       '<li>会过时的数字都标了<b>年份口径(截至 2026 年初)</b>和量级,记住趋势比记住具体数字重要。</li>' +
       '<li>本站纯静态、离线可用、不联网、不调用任何真实模型;实验室里的演示都是<b>教学示意</b>。</li>' +
       '</ul>';
  h += '</div>';

  AIX.render(h);
};

function stat(k, v) { return '<div class="c"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>'; }
function tool(hash, title, desc) {
  return '<a class="tcard2" href="' + hash + '"><div class="n">TOOL</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}
