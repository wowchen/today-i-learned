SAN.registerLesson({
  id: 'arch/06-middleware',
  module: 'arch',
  order: 6,
  title: '中间件',
  minutes: 4,
  keywords: ['中间件', '消息中间件', '事务中间件', 'RPC', '解耦'],
  concept: '<p><gd data-term="middleware">中间件</gd>位于 OS 与应用之间,屏蔽底层差异、提供通信/事务/消息等公共服务,让分布式应用更易开发集成。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:中间件分类与用途。</p>',
  core: '<table><tr><th>类型</th><th>用途</th></tr>' +
    '<tr><td>消息中间件</td><td>异步消息、解耦、削峰(Kafka)</td></tr>' +
    '<tr><td>事务中间件</td><td>分布式事务协调</td></tr>' +
    '<tr><td>RPC/对象中间件</td><td>跨进程调用</td></tr>' +
    '<tr><td>数据库访问中间件</td><td>统一访问异构数据库(JDBC)</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:中间件就是消息队列。</b>消息中间件只是其一,还有事务、RPC、数据库访问等多类。</div>',
  quiz: [
    { type: 'choice', q: 'Kafka属于哪类中间件?', options: ['事务中间件', '消息中间件', '数据库中间件', '安全中间件'], answer: 1, source: '高频', explain: 'Kafka是消息中间件。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/05-evaluation">架构评估</a> · 下一课:<a href="#/l/arch/07-soa-microservice">SOA与微服务</a></p>'
});
