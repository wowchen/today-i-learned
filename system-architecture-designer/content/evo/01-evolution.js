SAD.registerLesson({
  id: 'evo/01-evolution',
  module: 'evo',
  order: 1,
  title: '软件架构演化',
  minutes: 4,
  key: true,
  keywords: ['架构演化', '演化', '可演化性', '需求变化', '迭代'],
  concept: '<p><gd data-term="arch-evolution">架构演化</gd>是系统随需求/技术/环境变化对架构持续调整的过程。好架构的标志之一就是<b>能优雅地演化</b>而不崩。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:演化的动因、演化与可修改性的关系。</p>',
  core: '<p><b>演化的常见动因:</b>需求新增/变更、技术升级、性能/容量增长、合规变化、缺陷修复。</p>' +
    '<div class="ex">支撑演化的设计:<b>高内聚低耦合、分层、接口抽象、依赖倒置、模块化</b>——这些"可修改性战术"决定了演化的难易。架构设计时为演化留余地,比事后大改划算得多。</div>',
  pitfalls: '<div class="pit"><b>误解:架构一旦定好就不该变。</b>需求必然变,<b>不能演化的架构会很快被淘汰</b>;关键是让演化代价可控,而非追求"一次定终身"。</div>',
  quiz: [
    { type: 'choice', q: '最有利于架构平滑演化的设计特征是?', options: ['高耦合', '高内聚低耦合、接口抽象', '硬编码', '全局变量', ], answer: 1, source: '理解', explain: '高内聚低耦合、接口抽象等可修改性战术利于演化。' }
  ],
  links: '<p>下一课:<a href="#/l/evo/02-maintenance">架构维护与腐化</a> · 可修改性:<a href="#/l/quality/03-tactics">架构战术</a></p>'
});
