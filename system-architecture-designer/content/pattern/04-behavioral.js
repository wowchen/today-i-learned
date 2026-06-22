SAD.registerLesson({
  id: 'pattern/04-behavioral',
  module: 'pattern',
  order: 4,
  title: '行为型模式',
  minutes: 5,
  keywords: ['行为型', '观察者', '策略', '模板方法', '责任链', '状态', '迭代器', '命令'],
  concept: '<p>行为型模式解决"<b>对象间怎么交互、分配职责</b>",共 11 个。高频:<gd data-term="observer">观察者</gd>、策略、模板方法、责任链、状态。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:观察者/策略/状态/责任链的意图区分。</p>',
  core: '<table><tr><th>模式</th><th>意图</th></tr>' +
    '<tr><td>观察者</td><td>一对多,状态变化自动通知订阅者(发布-订阅)</td></tr>' +
    '<tr><td>策略</td><td>把可互换的算法封装起来,运行时切换</td></tr>' +
    '<tr><td>模板方法</td><td>父类定骨架,子类填步骤</td></tr>' +
    '<tr><td>责任链</td><td>请求沿链传递,直到有人处理</td></tr>' +
    '<tr><td>状态</td><td>对象行为随内部状态改变</td></tr>' +
    '<tr><td>命令</td><td>把请求封装成对象,可排队/撤销</td></tr></table>' +
    '<div class="ex">观察者是<b>发布-订阅、事件驱动</b>的基础,呼应"事件驱动"架构风格;策略让你"换算法不改调用方"。</div>',
  pitfalls: '<div class="pit"><b>误解:策略模式和状态模式一样。</b>策略是<b>由客户主动选算法</b>;状态是<b>对象随自身状态自动切换行为</b>,且状态间会相互转移。</div>',
  quiz: [
    { type: 'choice', q: '"对象状态改变时自动通知所有依赖者"的模式是?', options: ['策略', '观察者', '命令', '适配器'], answer: 1, source: '高频', explain: '观察者模式实现一对多的自动通知。' },
    { type: 'choice', q: '把一组可互换算法封装、运行时切换,用?', options: ['模板方法', '策略', '状态', '责任链'], answer: 1, source: '高频', explain: '策略模式封装可互换算法供运行时选择。' }
  ],
  links: '<p>上一课:<a href="#/l/pattern/03-structural">结构型</a> · 下一课:<a href="#/l/pattern/05-exam">常考模式辨析</a> · 事件驱动:<a href="#/l/style/04-independent">独立构件风格</a></p>'
});
