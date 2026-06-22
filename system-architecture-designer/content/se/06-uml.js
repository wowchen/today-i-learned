SAD.registerLesson({
  id: 'se/06-uml',
  module: 'se',
  order: 6,
  title: 'UML 建模',
  minutes: 5,
  key: true,
  keywords: ['UML', '用例图', '类图', '时序图', '状态图', '活动图', '静态', '动态'],
  concept: '<p><gd data-term="uml">UML</gd> 用一组标准图给系统建模,分<b>静态结构图</b>(类图、对象图、构件图、部署图)和<b>动态行为图</b>(用例、时序、活动、状态、协作)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例高频。重点:各图用途、静态/动态归类、类图关系。</p>',
  core: '<table><tr><th>图</th><th>表达什么</th></tr>' +
    '<tr><td>用例图</td><td>系统功能与参与者(需求)</td></tr>' +
    '<tr><td>类图</td><td>类及其关系(静态结构,最常考)</td></tr>' +
    '<tr><td>时序图</td><td>对象间按时间的消息交互(动态)</td></tr>' +
    '<tr><td>状态图</td><td>一个对象的状态变迁(动态)</td></tr>' +
    '<tr><td>活动图</td><td>业务/流程的活动流转</td></tr></table>' +
    '<div class="ex"><b>类图关系强弱:</b>依赖 < 关联 < 聚合 < 组合 < 继承。组合是"同生共死"的强整体-部分(如人和心脏),聚合是"可分离"(如球队和球员)。</div>',
  pitfalls: '<div class="pit"><b>误解:时序图是静态图。</b>时序图描述随时间的消息交互,属<b>动态行为图</b>;类图、构件图、部署图才是静态结构图。</div>' +
    '<div class="pit"><b>误解:聚合=组合。</b>聚合部分可独立存在(球员离队仍在);组合部分与整体<b>同生共死</b>(心脏离开人无意义)。</div>',
  quiz: [
    { type: 'choice', q: '下列属于UML动态行为图的是?', options: ['类图', '部署图', '时序图', '构件图'], answer: 2, source: '高频', explain: '时序图描述对象随时间的交互,属动态图;其余为静态结构图。' },
    { type: 'choice', q: '表示"整体与部分同生共死"的类关系是?', options: ['关联', '聚合', '组合', '依赖'], answer: 2, source: '高频', explain: '组合是强整体-部分关系,部分随整体消亡。' }
  ],
  links: '<p>上一课:<a href="#/l/se/05-oo">面向对象</a> · 下一课:<a href="#/l/se/07-testing">软件测试</a> · 架构视图:<a href="#/l/arch/02-views">4+1视图</a></p>'
});
