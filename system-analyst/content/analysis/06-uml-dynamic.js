SAN.registerLesson({
  id: 'analysis/06-uml-dynamic',
  module: 'analysis',
  order: 6,
  title: 'UML 动态行为图',
  minutes: 5,
  key: true,
  keywords: ['UML', '用例图', '时序图', '状态图', '活动图', '协作图', '动态'],
  concept: '<p>UML 动态图描述行为:用例图(功能)、时序图(交互)、状态图(状态变迁)、活动图(流程)、协作图。</p>',
  exam: '<p><b>考纲定位:</b>系分案例高频(补时序/状态/活动图)。重点:各图用途、静态vs动态归类。</p>',
  core: '<table><tr><th>图</th><th>表达</th></tr>' +
    '<tr><td>用例图</td><td>系统功能与参与者(需求)</td></tr>' +
    '<tr><td>时序图</td><td>对象间按时间顺序的消息交互</td></tr>' +
    '<tr><td>状态图</td><td>单个对象的状态变迁</td></tr>' +
    '<tr><td>活动图</td><td>业务/算法的活动流转(类似流程图)</td></tr></table>' +
    '<div class="ex">记:类图/构件图/部署图是<b>静态</b>;用例/时序/状态/活动/协作是<b>动态</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:时序图是静态图。</b>时序图描述随时间的交互,属<b>动态行为图</b>;类图、部署图才是静态。</div>',
  quiz: [
    { type: 'choice', q: '下列属于UML动态行为图的是?', options: ['类图', '部署图', '时序图', '构件图'], answer: 2, source: '高频', explain: '时序图属动态图。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/05-uml-static">UML静态图</a> · 下一课:<a href="#/l/analysis/07-design-principle">设计原则</a></p>'
});
