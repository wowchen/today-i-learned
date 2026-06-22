SAD.registerLesson({
  id: 'case/08-microservice-case',
  module: 'case',
  order: 8,
  title: '微服务改造案例',
  minutes: 5,
  keywords: ['微服务', '单体改造', '服务拆分', '案例', '权衡', '渐进迁移'],
  concept: '<p>常见案例:某单体系统遇到瓶颈,问"是否/如何改造成<gd data-term="microservice">微服务</gd>"。要答<b>动因、拆分原则、支撑组件、风险与渐进策略</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:拆分原则、微服务利弊权衡、迁移策略。</p>',
  core: '<table><tr><th>要点</th><th>答法</th></tr>' +
    '<tr><td>拆分原则</td><td>按业务能力/领域(DDD限界上下文)、高内聚低耦合、每服务独立数据库</td></tr>' +
    '<tr><td>支撑组件</td><td>API网关、注册发现、配置中心、熔断限流、链路追踪</td></tr>' +
    '<tr><td>风险</td><td>分布式复杂、一致性难、运维成本、调用链变长</td></tr>' +
    '<tr><td>迁移策略</td><td><b>绞杀者模式</b>渐进拆分,而非一次性重写</td></tr></table>' +
    '<div class="ex">答题必带"<b>权衡</b>":微服务不是银弹,要结合团队规模、业务复杂度判断;小系统保持单体可能更优。</div>',
  pitfalls: '<div class="pit"><b>误解:遇到性能问题就拆微服务。</b>很多性能问题靠缓存/读写分离/集群即可解决。微服务主要解<b>大团队协作与独立部署</b>的问题,盲目拆分反增复杂度。</div>',
  quiz: [
    { type: 'choice', q: '单体向微服务渐进迁移、逐步替换旧功能的常用模式是?', options: ['大爆炸重写', '绞杀者模式', '冷备份', '蓝绿部署'], answer: 1, source: '案例', explain: '绞杀者模式渐进替换,风险远低于大爆炸重写。' }
  ],
  links: '<p>上一课:<a href="#/l/case/07-web-arch">Web架构案例</a> · 下一课:<a href="#/l/case/09-cache-case">缓存与高并发案例</a> · 原理:<a href="#/l/mid/05-microservice">微服务架构</a></p>'
});
