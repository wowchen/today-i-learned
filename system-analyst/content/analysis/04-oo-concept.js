SAN.registerLesson({
  id: 'analysis/04-oo-concept',
  module: 'analysis',
  order: 4,
  title: '面向对象基础',
  minutes: 5,
  key: true,
  keywords: ['面向对象', '封装', '继承', '多态', '类', '对象', 'OOA', 'OOD'],
  concept: '<p><gd data-term="oo">面向对象</gd>用对象模拟现实,三大特性:<b>封装、继承、多态</b>;流程 OOA分析→OOD设计→OOP编程。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:三大特性、多态/重载/覆盖辨析。</p>',
  core: '<table><tr><th>特性</th><th>含义</th></tr>' +
    '<tr><td>封装</td><td>数据+操作包在对象内,对外只露接口</td></tr>' +
    '<tr><td>继承</td><td>子类复用并扩展父类</td></tr>' +
    '<tr><td>多态</td><td>同一消息不同对象不同响应</td></tr></table>' +
    '<div class="ex">多态让代码面向接口而非实现,是设计模式与可扩展设计的基础(呼应开闭原则)。</div>',
  pitfalls: '<div class="pit"><b>误解:重载就是多态。</b>重载(overload)是同名不同参的<b>静态</b>选择;<b>覆盖(override)+动态绑定</b>才是运行时多态。</div>',
  quiz: [
    { type: 'choice', q: '"同一消息被不同对象接收产生不同行为"是?', options: ['封装', '继承', '多态', '抽象'], answer: 2, source: '高频', explain: '这是多态。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/03-decision-table">判定表</a> · 下一课:<a href="#/l/analysis/05-uml-static">UML静态图</a></p>'
});
