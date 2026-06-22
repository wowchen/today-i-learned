SAD.registerLesson({
  id: 'pattern/02-creational',
  module: 'pattern',
  order: 2,
  title: '创建型模式',
  minutes: 5,
  keywords: ['创建型', '单例', '工厂', '抽象工厂', '建造者', '原型'],
  concept: '<p>创建型模式解决"<b>怎么造对象</b>"的问题,把对象创建与使用解耦。常考 5 个:<gd data-term="singleton">单例</gd>、<gd data-term="factory">工厂方法</gd>、抽象工厂、建造者、原型。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:按意图认模式,尤其单例与工厂家族区别。</p>',
  core: '<table><tr><th>模式</th><th>意图(一句话)</th></tr>' +
    '<tr><td>单例</td><td>全局唯一实例</td></tr>' +
    '<tr><td>工厂方法</td><td>子类决定实例化哪个类</td></tr>' +
    '<tr><td>抽象工厂</td><td>创建一<b>族</b>相关对象</td></tr>' +
    '<tr><td>建造者</td><td>分步骤构造复杂对象</td></tr>' +
    '<tr><td>原型</td><td>克隆已有对象来创建</td></tr></table>' +
    '<div class="ex">区分:工厂方法造"一个产品",抽象工厂造"一整套配套产品"(如同一风格的按钮+文本框+窗口)。</div>',
  pitfalls: '<div class="pit"><b>误解:抽象工厂=多个工厂方法。</b>抽象工厂强调创建<b>一族相互配套</b>的产品,保证它们风格一致,而非简单堆叠工厂方法。</div>',
  quiz: [
    { type: 'choice', q: '"保证一个类仅有一个实例并提供全局访问点"是?', options: ['工厂方法', '单例', '建造者', '原型'], answer: 1, source: '高频', explain: '这是单例模式。' },
    { type: 'choice', q: '需要创建"一族相关或相互依赖对象"时,宜用?', options: ['单例', '工厂方法', '抽象工厂', '原型'], answer: 2, source: '高频', explain: '抽象工厂用于创建一族配套对象。' }
  ],
  links: '<p>上一课:<a href="#/l/pattern/01-overview">设计模式与原则</a> · 下一课:<a href="#/l/pattern/03-structural">结构型模式</a></p>'
});
