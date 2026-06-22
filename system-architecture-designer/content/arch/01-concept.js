SAD.registerLesson({
  id: 'arch/01-concept',
  module: 'arch',
  order: 1,
  title: '软件架构是什么',
  minutes: 5,
  key: true,
  keywords: ['软件架构', '构件', '连接件', '约束', '架构定义', '关注点'],
  concept: '<p><gd data-term="software-architecture">软件架构</gd>是系统的<b>整体结构</b>:由哪些<gd data-term="component">构件</gd>组成、构件的外部可见属性、以及它们之间的关系(连接件)与约束。它决定系统的"骨架"和能否满足质量属性。</p>',
  exam: '<p><b>考纲定位:</b>本模块是全考试核心。重点:架构定义三要素、架构的作用、与详细设计的区别。</p>',
  core: '<p><b>架构 = 构件 + 连接件 + 约束:</b></p>' +
    '<ul>' +
    '<li><b>构件</b>:计算或数据存储单元(如模块、服务)。</li>' +
    '<li><b>连接件</b>:构件间的交互(如调用、消息、管道)。</li>' +
    '<li><b>约束</b>:配置规则与设计决策。</li>' +
    '</ul>' +
    '<div class="ex">架构关注<b>全局结构与质量属性</b>(性能、可用、可改),不纠结某个函数怎么写——那是详细设计的事。架构是"早做且难改"的决策。</div>',
  pitfalls: '<div class="pit"><b>误解:架构=详细设计/技术选型清单。</b>架构关注<b>整体结构与质量属性</b>的高层决策;详细设计才落到类与算法。把架构等同于"用什么框架"是窄化。</div>',
  quiz: [
    { type: 'choice', q: '通常认为软件架构由哪三部分构成?', options: ['类、对象、方法', '构件、连接件、约束', '需求、设计、测试', '前端、后端、数据库'], answer: 1, source: '高频', explain: '软件架构 = 构件 + 连接件 + 约束(配置)。' },
    { type: 'choice', q: '下列最属于"架构级"决策的是?', options: ['某函数的循环写法', '系统采用微服务还是单体', '变量命名', '某SQL的索引'], answer: 1, source: '理解', explain: '架构关注整体结构(如单体vs微服务)等高层决策。' }
  ],
  links: '<p>下一课:<a href="#/l/arch/02-views">4+1视图模型</a> · 质量属性:<a href="#/l/quality/01-attributes">质量属性总览</a></p>'
});
