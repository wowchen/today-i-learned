SAD.registerLesson({
  id: 'pattern/05-exam',
  module: 'pattern',
  order: 5,
  title: '常考模式辨析',
  minutes: 5,
  keywords: ['设计模式', '辨析', '场景', '选型', '真题', '意图'],
  concept: '<p>考试不会问"单例定义",而是给一个<b>场景</b>让你选模式。诀窍:抓住"意图关键词"对号入座。</p>',
  exam: '<p><b>考纲定位:</b>综合知识必考1~3题、案例可能涉及。本课是"按场景选模式"的速查。</p>',
  core: '<table><tr><th>场景关键词</th><th>对应模式</th></tr>' +
    '<tr><td>全局唯一</td><td>单例</td></tr>' +
    '<tr><td>接口不兼容、做转换</td><td>适配器</td></tr>' +
    '<tr><td>控制访问/远程代理/权限</td><td>代理</td></tr>' +
    '<tr><td>动态加功能、不想继承爆炸</td><td>装饰</td></tr>' +
    '<tr><td>统一入口、屏蔽子系统复杂</td><td>外观</td></tr>' +
    '<tr><td>一变多、自动通知</td><td>观察者</td></tr>' +
    '<tr><td>算法可换</td><td>策略</td></tr>' +
    '<tr><td>请求层层传递找处理者</td><td>责任链</td></tr></table>' +
    '<div class="ex">答题套路:先读题找"意图动词"(转换/通知/切换算法/控制访问…),再映射模式,最后一句话说清为什么。</div>',
  pitfalls: '<div class="pit"><b>误解:背名字就能做对。</b>考的是<b>场景到模式的映射</b>。务必练"读场景→认意图→选模式",而不是死记定义。</div>',
  quiz: [
    { type: 'choice', q: '系统需对接多个第三方支付,接口各不相同但要统一调用,宜用?', options: ['单例', '适配器', '观察者', '模板方法'], answer: 1, source: '场景', explain: '接口不兼容需转换统一,用适配器模式。' },
    { type: 'choice', q: '订单状态变化要同时通知库存、物流、短信服务,宜用?', options: ['策略', '观察者', '代理', '建造者'], answer: 1, source: '场景', explain: '一变多、自动通知多个订阅者,用观察者模式。' }
  ],
  links: '<p>设计模式模块完。下一模块:<a href="#/l/sec/01-overview">信息安全基础:CIA</a></p>'
});
