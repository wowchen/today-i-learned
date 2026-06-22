SAD.registerLesson({
  id: 'se/05-oo',
  module: 'se',
  order: 5,
  title: '面向对象分析与设计',
  minutes: 5,
  key: true,
  keywords: ['面向对象', '封装', '继承', '多态', '类', '对象', 'OOA', 'OOD'],
  concept: '<p>面向对象用"对象"模拟现实。三大特性:<b>封装(隐藏内部)、继承(复用扩展)、多态(同一调用不同表现)</b>。流程:OOA分析→OOD设计→OOP编程。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:三大特性、类与对象、多态/重载/覆盖辨析。</p>',
  core: '<table><tr><th>特性</th><th>含义</th></tr>' +
    '<tr><td>封装</td><td>把数据和操作包在对象内,对外只露接口</td></tr>' +
    '<tr><td>继承</td><td>子类复用并扩展父类</td></tr>' +
    '<tr><td>多态</td><td>同一消息,不同对象不同响应</td></tr></table>' +
    '<div class="ex"><b>多态</b>让代码面向接口而非具体实现,是设计模式与可扩展架构的基础——加新类型不用改老代码(呼应开闭原则)。</div>',
  pitfalls: '<div class="pit"><b>误解:重载(overload)就是多态。</b>重载是同名不同参的<b>静态</b>选择;<b>覆盖(override)+ 动态绑定</b>才是运行时多态。考试常对调。</div>',
  quiz: [
    { type: 'choice', q: '"同一消息被不同对象接收时产生不同行为"指的是?', options: ['封装', '继承', '多态', '抽象'], answer: 2, source: '高频', explain: '这是多态的定义。' },
    { type: 'choice', q: '面向对象三大基本特性是?', options: ['封装、继承、多态', '抽象、聚合、组合', '高内聚、低耦合、复用', '分析、设计、编程'], answer: 0, source: '高频', explain: '封装、继承、多态是面向对象三大特性。' }
  ],
  links: '<p>上一课:<a href="#/l/se/04-structured">结构化方法</a> · 下一课:<a href="#/l/se/06-uml">UML建模</a> · 设计模式:<a href="#/l/pattern/01-overview">设计模式与原则</a></p>'
});
