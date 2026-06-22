SAD.registerLesson({
  id: 'mid/01-middleware',
  module: 'mid',
  order: 1,
  title: '中间件概念与分类',
  minutes: 4,
  key: true,
  keywords: ['中间件', '消息中间件', '事务中间件', '对象中间件', '分类', '解耦'],
  concept: '<p><gd data-term="middleware">中间件</gd>位于操作系统与应用之间,屏蔽底层差异、提供通信/事务/消息等公共服务,让分布式应用更易开发与集成。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:中间件分类、各类典型用途。</p>',
  core: '<table><tr><th>类型</th><th>作用</th><th>例</th></tr>' +
    '<tr><td>消息中间件(MOM)</td><td>异步消息、解耦、削峰</td><td>Kafka、RabbitMQ</td></tr>' +
    '<tr><td>事务中间件</td><td>分布式事务协调</td><td>Tuxedo</td></tr>' +
    '<tr><td>远程调用/对象中间件</td><td>跨进程调用</td><td>RPC、CORBA</td></tr>' +
    '<tr><td>数据库访问中间件</td><td>统一访问异构数据库</td><td>ODBC/JDBC</td></tr></table>' +
    '<div class="ex">一句话:中间件是分布式系统的"通用底座",把重复的通信/事务/消息能力沉淀下来供应用复用。</div>',
  pitfalls: '<div class="pit"><b>误解:中间件就是消息队列。</b>消息中间件只是其中一类;中间件还包括事务、RPC、数据库访问等多种。</div>',
  quiz: [
    { type: 'choice', q: 'Kafka、RabbitMQ属于哪类中间件?', options: ['事务中间件', '消息中间件', '数据库中间件', '安全中间件'], answer: 1, source: '高频', explain: '它们是消息中间件(MOM),用于异步消息与解耦。' }
  ],
  links: '<p>下一课:<a href="#/l/mid/02-soa">SOA面向服务架构</a> · 复用:<a href="#/l/arch/05-reuse">架构复用与构件</a></p>'
});
