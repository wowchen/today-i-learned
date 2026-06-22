SAD.registerLesson({
  id: 'mid/05-microservice',
  module: 'mid',
  order: 5,
  title: '微服务架构',
  minutes: 5,
  key: true,
  keywords: ['微服务', '服务拆分', '独立部署', '服务注册发现', 'API网关', '服务治理'],
  concept: '<p><gd data-term="microservice">微服务</gd>把系统拆成一组<b>小而自治、独立部署、各自数据库</b>的服务,围绕业务能力组织,用轻量通信(REST/消息)协作。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文超高频。重点:微服务优缺点、关键支撑组件。</p>',
  core: '<table><tr><th>优点</th><th>挑战</th></tr>' +
    '<tr><td>独立部署/扩展、技术异构、故障隔离、易迭代</td><td>分布式复杂、运维成本高、数据一致性难、调用链长</td></tr></table>' +
    '<p><b>关键支撑组件:</b>服务注册与发现、API 网关、配置中心、负载均衡、熔断限流、链路追踪、分布式事务。</p>' +
    '<div class="ex">API 网关统一入口(鉴权、路由、限流);注册中心让服务互相"找得到";配合容器+K8s 实现弹性伸缩。</div>',
  pitfalls: '<div class="pit"><b>误解:微服务一定比单体好。</b>微服务带来<b>分布式复杂性与高运维成本</b>;小项目/初创用单体反而更高效。要按规模和团队能力权衡(论文常考这点)。</div>',
  quiz: [
    { type: 'choice', q: '微服务架构中,统一入口、负责鉴权与路由限流的是?', options: ['注册中心', 'API网关', '配置中心', 'ESB'], answer: 1, source: '高频', explain: 'API网关是微服务统一入口,做鉴权、路由、限流等。' },
    { type: 'choice', q: '关于微服务,下列说法正确的是?', options: ['一定优于单体', '各服务独立部署、独立数据库', '必须共享一个数据库', '不需要服务发现'], answer: 1, source: '高频', explain: '微服务强调独立部署与每服务独立数据库;是否优于单体需权衡。' }
  ],
  links: '<p>上一课:<a href="#/l/mid/04-esb">ESB</a> · 下一课:<a href="#/l/mid/06-cloud-native">云原生与容器</a> · 案例:<a href="#/l/case/08-microservice-case">微服务改造案例</a></p>'
});
