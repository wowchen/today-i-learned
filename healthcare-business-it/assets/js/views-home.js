/* 首页(互联互通蓝图 + 临床病历配色) */
window.HIT = window.HIT || {};
HIT.views = HIT.views || {};

HIT.views.home = function() {
  var P = HIT.progress();
  var esc = HIT.esc;
  var readCount = P.readCount();
  var total = HIT.totalLessons;
  var step = P.currentStep();
  var percent = total > 0 ? Math.round(readCount / total * 100) : 0;
  var nextId = step < HIT.path.length ? HIT.path[step] : null;

  function countOf(mid) {
    var c = 0;
    for (var i = 0; i < HIT.path.length; i++) if (HIT.path[i].indexOf(mid + '/') === 0) c++;
    return c;
  }

  var h = '';
  h += '<section class="hero blueprint-hero">';
  h += '<div class="eye">HIT · INTEROPERABILITY BLUEPRINT</div>';
  h += '<h1>看懂<em>医疗业务与信息化</em><br>从就诊流程到系统互联</h1>';
  h += '<p>用临床病历的清爽配色,配合互联互通蓝图的结构感,把医院业务、医保支付、质量安全、HIS/EMR/LIS/PACS、数据标准与安全合规放在一张图里讲清楚。全站仅供学习参考,不构成医疗建议。</p>';
  h += '<div class="cta">';
  if (nextId && HIT.lessons[nextId]) {
    h += '<a class="btn solid" href="#/l/' + nextId + '">' +
         (readCount > 0 ? '继续学习 · ' + esc(HIT.lessons[nextId].title) : '从第 1 课开始 →') + '</a>';
  }
  h += '<a class="btn" href="#/lab">打开互动实验室</a>';
  h += '<a class="btn" href="#/cheatsheet">缩略语速查</a>';
  h += '</div>';
  h += '<div class="blueprint-map" aria-label="系统蓝图示意"><svg viewBox="0 0 720 260">' +
    '<defs><marker id="hit-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="f-arr" d="M0 0 L10 5 L0 10 Z"/></marker></defs>' +
    '<rect class="lane" x="30" y="36" width="660" height="190" rx="22"/>' +
    '<text class="f-dim" x="52" y="66">虚构门诊闭环 · 业务动作与系统联动</text>' +
    '<path class="f-line" marker-end="url(#hit-arr)" d="M152 126 H254"/>' +
    '<path class="f-line" marker-end="url(#hit-arr)" d="M346 126 H448"/>' +
    '<path class="f-line" marker-end="url(#hit-arr)" d="M538 126 C610 126 610 190 540 190"/>' +
    '<path class="f-okln" marker-end="url(#hit-arr)" d="M450 190 H346"/>' +
    '<path class="f-okln" marker-end="url(#hit-arr)" d="M254 190 C184 190 184 126 254 126"/>' +
    '<rect class="f-node primary" x="58" y="88" width="94" height="76" rx="18"/>' +
    '<text class="f-num" x="105" y="114" text-anchor="middle">01</text><text class="f-hot" x="105" y="138" text-anchor="middle">挂号收费</text>' +
    '<rect class="f-node primary" x="254" y="88" width="94" height="76" rx="18"/>' +
    '<text class="f-num" x="301" y="114" text-anchor="middle">02</text><text class="f-hot" x="301" y="138" text-anchor="middle">医生工作站</text>' +
    '<rect class="f-node primary" x="450" y="88" width="94" height="76" rx="18"/>' +
    '<text class="f-num" x="497" y="114" text-anchor="middle">03</text><text class="f-hot" x="497" y="138" text-anchor="middle">医保结算</text>' +
    '<rect class="f-node" x="450" y="174" width="94" height="42" rx="14"/>' +
    '<text class="f-txt" x="497" y="201" text-anchor="middle">检验影像</text>' +
    '<rect class="f-node" x="254" y="174" width="94" height="42" rx="14"/>' +
    '<text class="f-txt" x="301" y="201" text-anchor="middle">集成平台</text>' +
    '<rect class="f-node" x="58" y="174" width="94" height="42" rx="14"/>' +
    '<text class="f-txt" x="105" y="201" text-anchor="middle">数据质控</text>' +
    '<g class="legend"><circle cx="604" cy="92" r="4"/><text class="f-dim" x="616" y="97">业务流</text><circle class="ok" cx="604" cy="122" r="4"/><text class="f-dim" x="616" y="127">报告/质控回流</text></g>' +
    '</svg></div>';
  h += '</section>';

  h += '<div class="statrow">';
  h += stat('模块', '<em>' + HIT.modules.length + '</em>');
  h += stat('微课', readCount + ' <em>/</em> ' + total);
  h += stat('已读', '<em>' + percent + '</em>%');
  h += stat('真实患者数据', '<em>0</em>');
  h += '</div>';

  h += '<div class="sec-head"><h2><span class="s">#</span>课程模块</h2>' +
       '<span class="r">业务 · 支付 · 系统 · 合规 三线并读</span></div>';
  h += '<div class="mod-grid">';
  for (var i = 0; i < HIT.modules.length; i++) {
    var m = HIT.modules[i];
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

  h += '<div class="sec-head"><h2><span class="s">#</span>工具与实验室</h2>' +
       '<span class="r">边读边查 · 边点边懂</span></div>';
  h += '<div class="tool-grid">';
  h += tool('#/timeline', '行业时间轴', '从新医改、电子病历评级、DRG/DIP 到数据安全和智慧医院,看清政策与技术节奏。');
  h += tool('#/figures', '角色/机构图鉴', '医生、护士、药师、医保办、信息科、卫健和医保等角色一张张拆开看。');
  h += tool('#/lab', '互动实验室', '就诊流程模拟、DRG/DIP 教学示意、医疗缩略语速配,全部离线虚构样例。');
  h += tool('#/cheatsheet', '缩略语速查', 'HIS、EMR、LIS、PACS、DRG、FHIR、DICOM 等常见缩写快速定位。');
  h += tool('#/compare', '流程对照表', '传统纸质流程 vs 数字化流程,看信息化到底改变了什么。');
  h += tool('#/terms', '术语表', '医疗业务与信息化术语随手查;课文里点带下划线的词也能弹出解释。');
  h += '</div>';

  h += '<div class="note-box med-note">';
  h += '<b>这站怎么读</b>';
  h += '<ul>' +
       '<li>先按模块读一遍业务全景和医院核心流程,再读系统和数据标准。</li>' +
       '<li>正文里<b>带下划线的词</b>是术语,点一下弹出大白话解释,可收藏到术语本。</li>' +
       '<li>DRG/DIP、评级、医保等内容只讲入门逻辑,具体规则以正式政策和机构制度为准。</li>' +
       '<li>本站纯静态、离线可用、不联网;所有案例均为<b>虚构教学示意</b>,不包含真实患者信息。</li>' +
       '</ul>';
  h += '</div>';

  HIT.render(h);
};

function stat(k, v) { return '<div class="c"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>'; }
function tool(hash, title, desc) {
  return '<a class="tcard2" href="' + hash + '"><div class="n">TOOL</div>' +
    '<h3>' + title + '</h3><p>' + desc + '</p></a>';
}
