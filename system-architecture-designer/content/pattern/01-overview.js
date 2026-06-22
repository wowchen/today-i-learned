SAD.registerLesson({
  id: 'pattern/01-overview',
  module: 'pattern',
  order: 1,
  title: '设计模式与原则(GRASP / SOLID)',
  minutes: 5,
  key: true,
  keywords: ['设计模式', '设计原则', 'SOLID', '开闭原则', '三类', '创建型', '结构型', '行为型'],
  concept: '<p><gd data-term="design-pattern">设计模式</gd>是前人对常见设计问题的成熟解法,共 23 个,分<b>创建型、结构型、行为型</b>三类。其背后是设计原则,核心是 <gd data-term="solid">SOLID</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例高频。重点:三类划分、SOLID(尤其开闭原则)、按意图认模式。</p>',
  core: '<table><tr><th>SOLID</th><th>含义</th></tr>' +
    '<tr><td>S 单一职责</td><td>一个类只做一件事</td></tr>' +
    '<tr><td>O 开闭原则</td><td><b>对扩展开放、对修改封闭</b>(最常考)</td></tr>' +
    '<tr><td>L 里氏替换</td><td>子类可替换父类</td></tr>' +
    '<tr><td>I 接口隔离</td><td>接口要小而专</td></tr>' +
    '<tr><td>D 依赖倒置</td><td>依赖抽象而非具体</td></tr></table>' +
    '<div class="ex">三类一句话记:<b>创建型</b>管"怎么造对象"、<b>结构型</b>管"怎么组合类/对象"、<b>行为型</b>管"对象间怎么交互分工"。</div>',
  pitfalls: '<div class="pit"><b>误解:开闭原则要求代码永不修改。</b>它强调通过<b>扩展(加新类)</b>而非改老代码来应对变化,靠抽象与多态实现,不是字面"禁止改"。</div>',
  quiz: [
    { type: 'choice', q: '"对扩展开放、对修改封闭"是哪条原则?', options: ['单一职责', '开闭原则', '里氏替换', '接口隔离'], answer: 1, source: '高频', explain: '这是开闭原则(OCP)。' },
    { type: 'choice', q: '设计模式的三大类是?', options: ['创建型、结构型、行为型', '单例、工厂、代理', '高内聚、低耦合、复用', '静态、动态、混合'], answer: 0, source: '高频', explain: '设计模式分创建型、结构型、行为型三类。' }
  ],
  links: '<p>下一课:<a href="#/l/pattern/02-creational">创建型模式</a> · 原则源头:<a href="#/l/se/05-oo">面向对象</a></p>'
});
