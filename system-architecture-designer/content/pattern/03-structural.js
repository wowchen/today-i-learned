SAD.registerLesson({
  id: 'pattern/03-structural',
  module: 'pattern',
  order: 3,
  title: '结构型模式',
  minutes: 5,
  keywords: ['结构型', '适配器', '代理', '装饰', '外观', '桥接', '组合', '享元'],
  concept: '<p>结构型模式解决"<b>怎么把类/对象组合成更大结构</b>",共 7 个。高频:适配器、代理、装饰、外观。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:适配器vs桥接、代理vs装饰、外观的作用。</p>',
  core: '<table><tr><th>模式</th><th>意图</th></tr>' +
    '<tr><td>适配器</td><td>转换接口,让不兼容的能协作</td></tr>' +
    '<tr><td>代理</td><td>为对象提供替身,控制访问(如远程/权限/延迟)</td></tr>' +
    '<tr><td>装饰</td><td>动态给对象<b>叠加</b>职责,替代继承</td></tr>' +
    '<tr><td>外观</td><td>给子系统提供统一简化入口</td></tr>' +
    '<tr><td>桥接</td><td>把抽象与实现分离,各自独立变化</td></tr>' +
    '<tr><td>组合</td><td>树形结构,统一对待整体与部分</td></tr>' +
    '<tr><td>享元</td><td>共享大量细粒度对象省内存</td></tr></table>' +
    '<div class="ex">外观(Facade)就像"前台":你只跟前台说需求,它去协调内部各部门,降低你与子系统的耦合。</div>',
  pitfalls: '<div class="pit"><b>误解:代理和装饰一样。</b>代理重在<b>控制访问</b>(替身,接口不变、不加功能);装饰重在<b>增强功能</b>(动态叠加职责)。意图不同。</div>',
  quiz: [
    { type: 'choice', q: '为子系统提供统一高层接口、简化客户使用的是?', options: ['适配器', '外观', '代理', '装饰'], answer: 1, source: '高频', explain: '外观模式提供统一入口,简化子系统使用。' },
    { type: 'choice', q: '想动态地给对象增加职责而不改其类,宜用?', options: ['代理', '装饰', '桥接', '组合'], answer: 1, source: '高频', explain: '装饰模式动态叠加职责,是继承的灵活替代。' }
  ],
  links: '<p>上一课:<a href="#/l/pattern/02-creational">创建型</a> · 下一课:<a href="#/l/pattern/04-behavioral">行为型模式</a></p>'
});
