/* 首页(文档手册首页:概览 + 模块目录 + 工具) */
window.ISL = window.ISL || {};
ISL.views = ISL.views || {};

ISL.views.home = function() {
  var P = ISL.progress();
  var esc = ISL.esc;
  var readCount = P.readCount();
  var total = ISL.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextId = step < ISL.path.length ? ISL.path[step] : null;

  function countOf(mid) {
    var c = 0;
    for (var i = 0; i < ISL.path.length; i++) if (ISL.path[i].indexOf(mid + '/') === 0) c++;
    return c;
  }

  var h = '';

  // Hero
  h += '<section class="hero">';
  h += '<div class="eye">INFOSEC · 通识手册</div>';
  h += '<h1>看懂<em>信息安全</em><br>从 CIA 三要素到大模型与智能体安全</h1>';
  h += '<p>不堆术语、不贩卖焦虑。用大白话把信息安全讲清楚:密码学、' +
       '<mark>网络与终端</mark>、数据安全、合规等保、安全运营与攻防,' +
       '再到<mark>大模型全生命周期</mark>与 MCP/A2A/Skill 脚手架安全。' + total + ' 节微课,一课一个点,五分钟读完。</p>';
  h += '<div class="cta">';
  if (nextId && ISL.lessons[nextId]) {
    h += '<a class="btn solid" href="#/l/' + nextId + '">' +
         (readCount > 0 ? '继续学习 · ' + esc(ISL.lessons[nextId].title) : '从第 1 课开始 →') + '</a>';
  }
  h += '<a class="btn" href="#/lab">打开互动实验室</a>';
  h += '<a class="btn" href="#/timeline">安全大事记</a>';
  h += '</div>';
  h += '</section>';

  // Stats
  h += '<div class="statrow">';
  h += stat('模块', '<em>' + ISL.modules.length + '</em>');
  h += stat('微课', readCount + ' <em>/</em> ' + total);
  h += stat('已读', '<em>' + percent + '</em>%');
  h += stat('费用', '¥ <em>0</em>');
  h += '</div>';

  // Modules
  h += '<div class="sec-head"><h2><span class="s">#</span>课程模块</h2>' +
       '<span class="r">' + ISL.modules.length + ' 章 · 按顺序读最顺</span></div>';
  h += '<div class="mod-grid">';
  for (var i = 0; i < ISL.modules.length; i++) {
    var m = ISL.modules[i];
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
  h += tool('#/timeline', '安全大事记', '从莫里斯蠕虫到震网、勒索软件与大模型时代,把安全史的关键节点串成一条线。');
  h += tool('#/figures', '人物图鉴', '密码学与安全先驱:Diffie、Hellman、RSA 三人组、Schneier、Mitnick…点开看贡献。');
  h += tool('#/lab', '互动实验室', '口令强度估算、提示词注入演练、MCP 权限可视化、风险评估计算——动手理解。');
  h += tool('#/cheatsheet', '威胁速查', '常见攻击与威胁横向对比:类别、所处层面、危害与一句话防御。');
  h += tool('#/compare', '法规与标准速查', '中国与国际安全法规/标准并列:网安法、数安法、个保法、等保、ISO、GDPR…');
  h += tool('#/terms', '术语表', '上百条安全术语随手查;课文里点带下划线的词也能弹出解释。');
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

  ISL.render(h);
};

function stat(k, v) { return '<div class="c"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>'; }
function tool(hash, title, desc) {
  return '<a class="tcard2" href="' + hash + '"><div class="n">TOOL</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}
