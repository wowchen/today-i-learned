SAD.registerLesson({
  id: 'evo/03-web-evolution',
  module: 'evo',
  order: 3,
  title: '大型网站架构演进',
  minutes: 5,
  key: true,
  keywords: ['网站架构', '演进', '单体', '集群', '分布式', '微服务', '高并发'],
  concept: '<p>大型网站不是一开始就复杂,而是随流量增长<b>一步步演进</b>。这条演进路线是案例与论文的经典素材。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文超高频。重点:演进各阶段的瓶颈与对策。</p>',
  core: '<table><tr><th>阶段</th><th>瓶颈</th><th>对策</th></tr>' +
    '<tr><td>单体单机</td><td>资源不够</td><td>应用与数据库分离</td></tr>' +
    '<tr><td>读多写少</td><td>数据库读压力</td><td>缓存 + 读写分离</td></tr>' +
    '<tr><td>并发上升</td><td>单应用扛不住</td><td>负载均衡 + 应用集群</td></tr>' +
    '<tr><td>数据量大</td><td>单库瓶颈</td><td>分库分表 + 分布式存储</td></tr>' +
    '<tr><td>业务复杂</td><td>单体难维护</td><td>SOA/微服务拆分 + 消息解耦</td></tr></table>' +
    '<div class="ex">主线一句话:<b>分离 → 缓存 → 集群 → 拆分(数据/服务)</b>。每一步都是被某个瓶颈逼出来的,不要"一上来就微服务"。</div>',
  pitfalls: '<div class="pit"><b>误解:小网站也该一步到位上分布式微服务。</b>过早过度设计=高复杂度高成本。架构应<b>随业务量演进</b>,够用即可,留好演化空间。</div>',
  quiz: [
    { type: 'choice', q: '网站"读多写少、数据库读压力大"阶段,最优先的对策是?', options: ['上微服务', '加缓存+读写分离', '分库分表', '换语言'], answer: 1, source: '高频', explain: '读压力大优先用缓存和读写分离缓解。' }
  ],
  links: '<p>上一课:<a href="#/l/evo/02-maintenance">架构维护与腐化</a> · 下一课:<a href="#/l/evo/04-refactoring">架构重构</a> · 案例:<a href="#/l/case/07-web-arch">Web系统架构案例</a></p>'
});
