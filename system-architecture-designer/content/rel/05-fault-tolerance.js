SAD.registerLesson({
  id: 'rel/05-fault-tolerance',
  module: 'rel',
  order: 5,
  title: '容错技术',
  minutes: 4,
  keywords: ['容错', '故障检测', '故障转移', '降级', '心跳', '看门狗', 'failover'],
  concept: '<p><gd data-term="fault-tolerance">容错</gd>是"部分组件失效,系统仍能(可能降级地)继续服务"的能力。三步:<b>检测故障 → 隔离/转移 → 恢复</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文(高可用)。重点:故障检测手段、故障转移、服务降级。</p>',
  core: '<table><tr><th>环节</th><th>手段</th></tr>' +
    '<tr><td>检测</td><td>心跳、看门狗、健康检查、超时</td></tr>' +
    '<tr><td>转移</td><td>故障转移(failover)到备节点、主从切换</td></tr>' +
    '<tr><td>降级</td><td>关闭非核心功能、保核心可用(熔断、限流)</td></tr></table>' +
    '<div class="ex">高并发系统常用"<b>熔断 + 降级 + 限流</b>"三件套:依赖出问题就熔断、保住核心功能降级运行、入口限流防雪崩。这是论文里高可用的常见论点。</div>',
  pitfalls: '<div class="pit"><b>误解:容错=永不失效。</b>容错是<b>失效时仍能继续(可能降级)服务</b>,不是保证不失效。能"优雅降级"也是容错的成功。</div>',
  quiz: [
    { type: 'choice', q: '依赖服务故障时,主动关闭对它的调用以防止故障扩散,这是?', options: ['限流', '熔断', '缓存', '加密'], answer: 1, source: '高频', explain: '熔断在依赖故障时切断调用,防止雪崩。' }
  ],
  links: '<p>上一课:<a href="#/l/rel/04-design">可靠性设计</a> · 下一课:<a href="#/l/rel/06-testing">可靠性测试与评估</a></p>'
});
