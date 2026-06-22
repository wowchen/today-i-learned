SAN.registerLesson({
  id: 'arch/01-concept',
  module: 'arch',
  order: 1,
  title: '软件架构是什么',
  minutes: 4,
  key: true,
  keywords: ['软件架构', '构件', '连接件', '约束', '架构作用'],
  concept: '<p><gd data-term="software-architecture">软件架构</gd>是系统整体结构:<b>构件 + 连接件 + 约束</b>。它决定系统骨架与能否满足质量属性。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:架构定义三要素、与详细设计区别。</p>',
  core: '<ul><li><b>构件</b>:计算或数据存储单元。</li><li><b>连接件</b>:构件间交互。</li><li><b>约束</b>:配置规则与设计决策。</li></ul>' +
    '<div class="ex">架构关注全局结构与质量属性,是"早做且难改"的高层决策,不纠结某个函数怎么写。</div>',
  pitfalls: '<div class="pit"><b>误解:架构=技术选型清单。</b>架构关注整体结构与质量取舍的高层决策,不只是"用什么框架"。</div>',
  quiz: [
    { type: 'choice', q: '软件架构通常由哪三部分构成?', options: ['类/对象/方法', '构件/连接件/约束', '需求/设计/测试', '前端/后端/数据库'], answer: 1, source: '高频', explain: '架构=构件+连接件+约束。' }
  ],
  links: '<p>下一课:<a href="#/l/arch/02-views">4+1视图</a></p>'
});
