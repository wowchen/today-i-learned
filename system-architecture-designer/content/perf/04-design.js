SAD.registerLesson({
  id: 'perf/04-design',
  module: 'perf',
  order: 4,
  title: '性能设计:负载均衡与集群',
  minutes: 5,
  key: true,
  keywords: ['性能设计', '负载均衡', '集群', '读写分离', '异步', '分库分表', '水平扩展'],
  concept: '<p>高性能架构靠"分摊"和"并行"。核心招式:<gd data-term="load-balance">负载均衡</gd> + 集群、读写分离、缓存、异步削峰、分库分表。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文(高性能/高并发)。重点:常用性能手段、垂直vs水平扩展。</p>',
  core: '<table><tr><th>手段</th><th>作用</th></tr>' +
    '<tr><td>负载均衡+集群</td><td>请求分摊到多机,水平扩展</td></tr>' +
    '<tr><td>缓存</td><td>挡住重复读,减库压力</td></tr>' +
    '<tr><td>读写分离</td><td>主写从读,分担数据库</td></tr>' +
    '<tr><td>异步/消息队列</td><td>削峰填谷,解耦</td></tr>' +
    '<tr><td>分库分表</td><td>数据量大时水平拆分</td></tr></table>' +
    '<div class="ex"><b>垂直扩展</b>(升级单机)有上限且贵;<b>水平扩展</b>(加机器)更可持续,是互联网高并发的主路线。案例答高并发常组合:LB+集群+缓存+读写分离+异步。</div>',
  pitfalls: '<div class="pit"><b>误解:性能不够就加机器(水平扩展)总有效。</b>有<b>状态/共享资源</b>(如单点数据库、分布式锁)会成为瓶颈;水平扩展需先做好无状态化与数据拆分。</div>',
  quiz: [
    { type: 'choice', q: '通过增加服务器数量来提升处理能力,属于?', options: ['垂直扩展', '水平扩展', '降级', '熔断'], answer: 1, source: '高频', explain: '加机器是水平扩展(scale out)。' },
    { type: 'choice', q: '用消息队列"削峰填谷"主要解决?', options: ['数据一致性', '突发流量冲击与解耦', '加密', '权限'], answer: 1, source: '高频', explain: '消息队列异步削峰,缓冲突发流量并解耦。' }
  ],
  links: '<p>上一课:<a href="#/l/perf/03-evaluation">性能评估</a> · 下一课:<a href="#/l/perf/05-cache">缓存与性能优化</a> · 案例:<a href="#/l/case/09-cache-case">缓存与高并发案例</a></p>'
});
