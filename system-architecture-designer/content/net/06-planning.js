SAD.registerLesson({
  id: 'net/06-planning',
  module: 'net',
  order: 6,
  title: '网络规划与设计',
  minutes: 4,
  keywords: ['网络规划', '分层设计', '核心层', '汇聚层', '接入层', '冗余'],
  concept: '<p>企业网常用<b>三层架构设计</b>:核心层、汇聚层、接入层,职责分明、易扩展、便于排障。这是网络架构题的经典框架。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例(网络架构)。重点:三层模型职责、冗余设计。</p>',
  core: '<table><tr><th>层</th><th>职责</th></tr>' +
    '<tr><td>核心层</td><td>高速骨干转发,只求快、不做策略</td></tr>' +
    '<tr><td>汇聚层</td><td>策略、路由、访问控制、汇聚接入</td></tr>' +
    '<tr><td>接入层</td><td>终端接入,端口密度高</td></tr></table>' +
    '<div class="ex">可用性设计:核心/汇聚常做<b>双机冗余 + 链路冗余</b>,避免单点故障(呼应可靠性模块)。</div>',
  pitfalls: '<div class="pit"><b>误解:核心层要做复杂访问控制。</b>核心层<b>只求高速转发</b>,复杂策略放在汇聚层,以免拖慢骨干。</div>',
  quiz: [
    { type: 'choice', q: '企业网三层架构中,负责策略、路由与访问控制的是?', options: ['核心层', '汇聚层', '接入层', '物理层'], answer: 1, source: '高频', explain: '汇聚层负责策略、路由与访问控制;核心层只求高速转发。' }
  ],
  links: '<p>基础篇全部完成!进入核心篇:<a href="#/l/se/01-process">软件过程模型</a> · 可用性:<a href="#/l/rel/01-concept">可靠性概念</a></p>'
});
