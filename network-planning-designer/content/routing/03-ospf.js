NPD.registerLesson({
  id: 'routing/03-ospf',
  module: 'routing',
  order: 3,
  title: 'OSPF:链路状态路由协议',
  minutes: 5,
  key: true,
  keywords: ['OSPF', '链路状态', 'Dijkstra', '区域', 'LSA', '收敛', '成本'],
  concept: '<p><b><gd data-term="ospf">OSPF</gd></b> 是基于<b>链路状态</b>的内部网关协议,每台路由器掌握全网拓扑,用 Dijkstra 算最短路径。</p>' +
    '<div class="ex">RIP 像"问邻居要地图",OSPF 是"人手一份全境地图各自算"——收敛快、适合中大型。</div>',
  exam: '<p><b>频度:高。</b>常考链路状态原理、区域划分、与 RIP 对比、收敛快。</p>',
  core: '<p><b>OSPF 要点:</b></p>' +
    '<ul>' +
    '<li><b>度量</b>:成本(Cost),默认与带宽成反比(带宽越大 cost 越小)。</li>' +
    '<li><b>收敛快</b>:拓扑变化触发更新(触发更新 + LSA 泛洪),无需等周期。</li>' +
    '<li><b>无跳数限制</b>,适合中大型网络。</li>' +
    '<li><b>分层区域</b>:骨干区域 0 连接其他区域,减少 LSA 泛洪规模。</li>' +
    '</ul>' +
    '<p><b>LSA 类型</b>(常考):Router-LSA(1 类)、Network-LSA(2 类)、汇总(3/4 类)、外部(5 类 AS-external)。</p>' +
    '<p><b>邻居关系:</b>Hello 发现邻居→建立邻接→交换 LSA→同步 LSDB→各自算路由。</p>' +
    '<p class="ex">所有区域必须连到骨干区域 0;非骨干区域间不能直接交换路由,须经骨干中转。</p>',
  pitfalls: '<div class="pit"><b>易混:OSPF vs RIP。</b>OSPF 链路状态(收敛快、无跳数限制、可分区);RIP 距离矢量(收敛慢、15 跳上限、不分区)。</div>' +
    '<div class="pit"><b>易错:区域必须连骨干。</b>非骨干区域间通信必经 area 0,这是 OSPF 分层硬性要求。</div>',
  quiz: [
    { type: 'choice', q: 'OSPF 使用的路由算法是?', options: ['距离矢量', 'Dijkstra 最短路径', '扩散算法', '随机'], answer: 1, source: '基础', explain: 'OSPF 用 Dijkstra 算最短路径。' },
    { type: 'choice', q: 'OSPF 的度量基于?', options: ['跳数', '带宽(成本)', '延迟', '路径数'], answer: 1, source: '基础', explain: 'OSPF 成本默认与带宽成反比。' },
    { type: 'choice', q: '关于 OSPF 区域正确的是?', options: ['区域间可直接交换路由', '所有区域须连骨干区域0', '区域无需划分', '每个区域独立无联系'], answer: 1, source: '理解', explain: '非骨干区域须经 area 0 中转。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/02-rip">RIP</a> · 下一课:<a href="#/l/routing/04-bgp">BGP</a></p>'
});
