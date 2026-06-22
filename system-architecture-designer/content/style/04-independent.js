SAD.registerLesson({
  id: 'style/04-independent',
  module: 'style',
  order: 4,
  title: '独立构件风格(事件驱动)',
  minutes: 4,
  keywords: ['独立构件', '事件驱动', '隐式调用', '发布订阅', '消息', '松耦合'],
  concept: '<p>独立构件风格里,构件各自独立、通过<b>消息或事件</b>交互。代表是<gd data-term="event-driven">事件驱动(隐式调用)</gd>:构件发布事件,关心的构件自动响应。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识高频。重点:事件驱动的优缺点、与显式调用区别。</p>',
  core: '<table><tr><th>优点</th><th>缺点</th></tr>' +
    '<tr><td>松耦合、易增删构件、利于复用与扩展</td><td>控制流难预测/调试难;不保证谁一定处理、处理顺序</td></tr></table>' +
    '<div class="ex">"隐式调用":发布者不直接点名调用谁,只广播事件,由系统把事件分发给订阅者(呼应观察者模式)。典型:GUI 事件、消息中间件、微服务事件总线。</div>',
  pitfalls: '<div class="pit"><b>误解:事件驱动控制流清晰好调试。</b>恰恰相反——因为是隐式调用,<b>控制流难以预测、调试困难、不保证处理顺序</b>,这是它的主要代价。</div>',
  quiz: [
    { type: 'choice', q: '事件驱动(隐式调用)风格的主要缺点是?', options: ['构件耦合太紧', '控制流难以预测、调试困难', '不能扩展', '必须同步执行'], answer: 1, source: '高频', explain: '隐式调用使控制流难预测、调试难,且不保证处理顺序。' }
  ],
  links: '<p>上一课:<a href="#/l/style/03-call-return">调用-返回</a> · 下一课:<a href="#/l/style/05-vm-repo">虚拟机与仓库风格</a> · 观察者:<a href="#/l/pattern/04-behavioral">行为型模式</a></p>'
});
