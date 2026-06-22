SAN.registerLesson({
  id: 'arch/07-soa-microservice',
  module: 'arch',
  order: 7,
  title: 'SOA 与微服务',
  minutes: 5,
  key: true,
  keywords: ['SOA', '微服务', 'Web Service', 'ESB', 'API网关', '服务拆分'],
  concept: '<p><gd data-term="soa">SOA</gd> 把能力拆成松耦合、可复用、标准接口的服务(常用 ESB 集成);<gd data-term="microservice">微服务</gd>是其更细粒度、去中心化的演进。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:SOA特征、微服务利弊、两者区别。</p>',
  core: '<table><tr><th>对比</th><th>SOA</th><th>微服务</th></tr>' +
    '<tr><td>粒度</td><td>较粗</td><td>更细</td></tr>' +
    '<tr><td>集成</td><td>中心化ESB</td><td>去中心化(API/消息)</td></tr>' +
    '<tr><td>数据</td><td>常共享</td><td>每服务独立数据库</td></tr></table>' +
    '<div class="ex">微服务优点:独立部署/扩展、故障隔离;代价:分布式复杂、一致性难、运维成本高。要按规模权衡,非银弹。</div>',
  pitfalls: '<div class="pit"><b>误解:微服务一定优于单体。</b>带来分布式复杂性与高运维成本;小项目单体更高效。</div>',
  quiz: [
    { type: 'choice', q: '微服务相比SOA的特点是?', options: ['粒度更粗', '中心化ESB', '每服务独立数据库、去中心化', '必须共享数据库'], answer: 2, source: '高频', explain: '微服务更细粒度、去中心化、每服务独立数据库。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/06-middleware">中间件</a> · 下一课:<a href="#/l/arch/08-doc">架构文档</a></p>'
});
