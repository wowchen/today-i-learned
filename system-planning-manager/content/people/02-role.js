SPM.registerLesson({
  id: 'people/02-role',
  module: 'people',
  order: 2,
  title: '角色、岗位与职责',
  minutes: 5,
  keywords: ['角色', '岗位', '一线二线三线', '服务台', 'RACI'],
  concept: '<p>服务按支持层级分工:<b>服务台/一线</b>受理与简单处置、<b>二线</b>专业深入、<b>三线</b>厂商/研发;另有服务经理、变更经理等管理角色。职责用 <gd data-term="raci">RACI</gd> 明确。</p>',
  exam: '<p><b>考纲定位:</b>团队篇,案例常考"如何分工"。</p>',
  core: '<ul>' +
    '<li><b>一线</b>:受理、分类、简单处置、升级。</li>' +
    '<li><b>二线</b>:复杂问题诊断与修复。</li>' +
    '<li><b>三线</b>:厂商/研发/专家支持。</li>' +
    '<li><b>RACI</b>:执行(R)/批准(A)/咨询(C)/知会(I),避免扯皮。</li>' +
    '</ul>' +
    '<div class="ex">一线重"快",二线重"深",三线重"专";层级清晰才能既快又准。</div>',
  pitfalls: '<div class="pit"><b>层级不分=全员救火。</b>没有清晰的一/二/三线与升级规则,事件会在人堆里转圈。</div>',
  quiz: [
    { type: 'choice', q: '负责复杂问题深入诊断与修复的通常是?', options: ['一线', '二线', '前台保安', '财务'], answer: 1, source: '高频', explain: '二线负责专业深入诊断与修复。' }
  ],
  links: '<p>上一课:<a href="#/l/people/01-team">团队建设</a> · 下一课:<a href="#/l/people/03-performance">绩效管理</a></p>'
});
