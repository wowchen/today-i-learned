/* 首页(文档手册首页:概览 + 模块目录 + 工具) */
window.PSY = window.PSY || {};
PSY.views = PSY.views || {};

PSY.views.home = function() {
  var P = PSY.progress();
  var esc = PSY.esc;
  var readCount = P.readCount();
  var total = PSY.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextId = step < PSY.path.length ? PSY.path[step] : null;

  function countOf(mid) {
    var c = 0;
    for (var i = 0; i < PSY.path.length; i++) if (PSY.path[i].indexOf(mid + '/') === 0) c++;
    return c;
  }

  var h = '';

  // Hero
  h += '<section class="hero">';
  h += '<div class="eye">PSYCHOLOGY · 通识手册</div>';
  h += '<h1>看懂<em>心理学</em><br>从大脑、记忆到情绪、人格与社会</h1>';
  h += '<p>不玄学、不贴标签、不灌鸡汤。用大白话把心理学讲清楚:它<mark>怎么做科学</mark>、' +
       '人怎么感知、学习、记忆、决策,情绪与<mark>人格</mark>从何而来、' +
       '人在群体里为何会变,以及怎样维护心理健康。' + total + ' 节微课,一课一个点,五分钟读完。</p>';
  h += '<div class="cta">';
  if (nextId && PSY.lessons[nextId]) {
    h += '<a class="btn solid" href="#/l/' + nextId + '">' +
         (readCount > 0 ? '继续学习 · ' + esc(PSY.lessons[nextId].title) : '从第 1 课开始 →') + '</a>';
  }
  h += '<a class="btn" href="#/lab">打开互动实验室</a>';
  h += '<a class="btn" href="#/timeline">心理学大事记</a>';
  h += '</div>';
  h += '</section>';

  // Stats
  h += '<div class="statrow">';
  h += stat('模块', '<em>' + PSY.modules.length + '</em>');
  h += stat('微课', readCount + ' <em>/</em> ' + total);
  h += stat('已读', '<em>' + percent + '</em>%');
  h += stat('费用', '¥ <em>0</em>');
  h += '</div>';

  // Modules
  h += '<div class="sec-head"><h2><span class="s">#</span>课程模块</h2>' +
       '<span class="r">' + PSY.modules.length + ' 章 · 按顺序读最顺</span></div>';
  h += '<div class="mod-grid">';
  for (var i = 0; i < PSY.modules.length; i++) {
    var m = PSY.modules[i];
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
  h += tool('#/timeline', '心理学大事记', '从 1879 冯特建立第一个心理学实验室,到认知革命与当代,把关键节点串成一条线。');
  h += tool('#/figures', '人物图鉴', '关键人物:冯特、弗洛伊德、巴甫洛夫、斯金纳、皮亚杰、马斯洛、米尔格拉姆、卡尼曼…点开看贡献。');
  h += tool('#/lab', '互动实验室', '斯特鲁普效应、视错觉画廊、锚定偏差演示、记忆序列位置——亲身体验经典实验。');
  h += tool('#/cheatsheet', '效应速查', '常见心理效应与认知偏差横向对比:类别、一句话、生活例子与提醒。');
  h += tool('#/compare', '流派对照', '主要学派并列:核心主张、代表人物与贡献,建立"谁主张什么"的坐标。');
  h += tool('#/terms', '术语表', '上百条心理学术语随手查;课文里点带下划线的词也能弹出解释。');
  h += '</div>';

  // About
  h += '<div class="note-box">';
  h += '<b>这站怎么读</b>';
  h += '<ul>' +
       '<li>顺着模块从上往下读最省力;也可以直接挑感兴趣的章。</li>' +
       '<li>正文里<b>带下划线的词</b>是术语,点一下弹出大白话解释,可收藏到术语本。</li>' +
       '<li>本站是<b>科普通识</b>,不是诊断或治疗工具;涉及心理困扰请寻求专业帮助。</li>' +
       '<li>纯静态、离线可用、不联网;实验室是可亲身体验的<b>经典实验演示</b>,结果仅供自我观察。</li>' +
       '</ul>';
  h += '</div>';

  PSY.render(h);
};

function stat(k, v) { return '<div class="c"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>'; }
function tool(hash, title, desc) {
  return '<a class="tcard2" href="' + hash + '"><div class="n">TOOL</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}
