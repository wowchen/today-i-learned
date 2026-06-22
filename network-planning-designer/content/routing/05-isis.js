NPD.registerLesson({
  id: 'routing/05-isis',
  module: 'routing',
  order: 5,
  title: 'IS-IS:运营商级链路状态协议',
  minutes: 4,
  keywords: ['IS-IS', '链路状态', '中间系统', '运营商', 'OSPF 对比'],
  concept: '<p><b><gd data-term="is-is">IS-IS</gd></b> 是另一种链路状态内部网关协议,工作在数据链路层之上,常用于运营商骨干。</p>' +
    '<div class="ex">和 OSPF 同属"链路状态"阵营,但在运营商骨干更常见——电信级、扩展性好。</div>',
  exam: '<p><b>频度:中。</b>常考与 OSPF 异同、所属层次、适用场景。</p>',
  core: '<p><b>IS-IS 要点:</b></p>' +
    '<ul>' +
    '<li><b>类型</b>:链路状态、内部网关协议(IGP),与 OSPF 同类。</li>' +
    '<li><b>承载</b>:直接跑在数据链路层之上(不依赖 IP),与 OSPF 用 IP 不同。</li>' +
    '<li><b>区域</b>:路由器分 Level-1(区域内)/Level-2(区域间)/Level-1-2。</li>' +
    '<li><b>适用</b>:运营商骨干、大规模网络,扩展性与稳定性好。</li>' +
    '</ul>' +
    '<p><b>与 OSPF 对比:</b>都链路状态、都用 SPF;但 IS-IS 直接封装于链路层、区域以路由器为界,OSPF 封装于 IP、区域以接口为界。</p>' +
    '<p class="ex">IS-IS 的"中间系统"就是路由器;它源自 OSI 体系,后扩展支持 IP(Integrated IS-IS)。</p>',
  pitfalls: '<div class="pit"><b>易混:IS-IS vs OSPF。</b>同属链路状态 IGP;关键区别是承载层(IS-IS 在链路层之上、OSPF 在 IP 之上)与区域划分方式。</div>' +
    '<div class="pit"><b>考点:IS-IS 不依赖 IP。</b>它直接由链路层承载,所以即使无 IP 也能跑——这是与 OSPF 的本质差异之一。</div>',
  quiz: [
    { type: 'choice', q: 'IS-IS 属于哪类协议?', options: ['距离矢量 IGP', '链路状态 IGP', '外部网关协议', '链路层协议'], answer: 1, source: '基础', explain: 'IS-IS 是链路状态内部网关协议。' },
    { type: 'choice', q: 'IS-IS 与 OSPF 的本质差异之一是?', options: ['IS-IS 用跳数', 'IS-IS 不依赖 IP、由链路层承载', 'IS-IS 是外部协议', 'IS-IS 不算最短路径'], answer: 1, source: '理解', explain: 'IS-IS 直接跑在链路层之上,不依赖 IP。' },
    { type: 'choice', q: 'IS-IS 在哪类网络最常见?', options: ['家庭网络', '运营商骨干', '小型办公室', '无线传感网'], answer: 1, source: '场景', explain: 'IS-IS 常用于运营商骨干。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/04-bgp">BGP</a> · 下一课:<a href="#/l/routing/06-selection">路由选路与收敛</a></p>'
});
