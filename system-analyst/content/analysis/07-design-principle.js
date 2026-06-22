SAN.registerLesson({
  id: 'analysis/07-design-principle',
  module: 'analysis',
  order: 7,
  title: '设计原则(SOLID)',
  minutes: 4,
  keywords: ['设计原则', 'SOLID', '开闭原则', '单一职责', '依赖倒置', '里氏替换'],
  concept: '<p>好的面向对象设计遵循 <gd data-term="solid">SOLID</gd> 五原则,核心是<b>开闭原则</b>:对扩展开放、对修改封闭。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:五原则含义,尤其开闭、依赖倒置。</p>',
  core: '<table><tr><th>原则</th><th>含义</th></tr>' +
    '<tr><td>S 单一职责</td><td>一个类只做一件事</td></tr>' +
    '<tr><td>O 开闭</td><td>对扩展开放、对修改封闭</td></tr>' +
    '<tr><td>L 里氏替换</td><td>子类可替换父类</td></tr>' +
    '<tr><td>I 接口隔离</td><td>接口小而专</td></tr>' +
    '<tr><td>D 依赖倒置</td><td>依赖抽象而非具体</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:开闭原则要求代码永不改。</b>它强调通过<b>扩展(加新类)</b>而非改老代码应对变化,靠抽象与多态实现。</div>',
  quiz: [
    { type: 'choice', q: '"对扩展开放、对修改封闭"是?', options: ['单一职责', '开闭原则', '里氏替换', '接口隔离'], answer: 1, source: '高频', explain: '这是开闭原则。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/06-uml-dynamic">UML动态图</a> · 下一课:<a href="#/l/analysis/08-pattern">设计模式</a></p>'
});
