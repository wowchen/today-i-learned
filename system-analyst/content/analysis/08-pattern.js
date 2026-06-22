SAN.registerLesson({
  id: 'analysis/08-pattern',
  module: 'analysis',
  order: 8,
  title: '设计模式',
  minutes: 5,
  key: true,
  keywords: ['设计模式', '创建型', '结构型', '行为型', '单例', '工厂', '观察者', '适配器'],
  concept: '<p><gd data-term="design-pattern">设计模式</gd>是常见设计问题的成熟解法,共 23 个,分<b>创建型、结构型、行为型</b>三类。</p>',
  exam: '<p><b>考纲定位:</b>综合知识必考。重点:三类划分、按场景认模式。</p>',
  core: '<table><tr><th>类别</th><th>管什么</th><th>例</th></tr>' +
    '<tr><td>创建型</td><td>怎么造对象</td><td>单例、工厂、建造者、原型</td></tr>' +
    '<tr><td>结构型</td><td>怎么组合类/对象</td><td>适配器、代理、装饰、外观</td></tr>' +
    '<tr><td>行为型</td><td>对象间怎么交互</td><td>观察者、策略、模板方法、责任链</td></tr></table>' +
    '<div class="ex">按场景选:接口不兼容→适配器;一变多通知→观察者;算法可换→策略;全局唯一→单例。</div>',
  pitfalls: '<div class="pit"><b>误解:设计模式和架构风格一回事。</b>模式是<b>局部</b>类/对象级解法;架构风格是<b>系统级</b>整体组织,粒度不同。</div>',
  quiz: [
    { type: 'choice', q: '"对象状态变化时自动通知依赖者"的模式是?', options: ['策略', '观察者', '单例', '适配器'], answer: 1, source: '高频', explain: '观察者模式。' },
    { type: 'choice', q: '设计模式的三大类是?', options: ['创建型、结构型、行为型', '单例、工厂、代理', '静态、动态、混合', '高内聚、低耦合、复用'], answer: 0, source: '高频', explain: '创建型、结构型、行为型。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/07-design-principle">设计原则</a> · 下一课:<a href="#/l/analysis/09-sd-detail">概要设计与详细设计</a></p>'
});
