NPD.registerLesson({
  id: 'planning/02-logical',
  module: 'planning',
  order: 2,
  title: '逻辑网络设计',
  minutes: 5,
  keywords: ['逻辑设计', '拓扑', '分层模型', '核心汇聚接入', 'IP规划', 'VLAN规划', '路由协议选择'],
  concept: '<p><b>逻辑设计</b>把需求转成抽象拓扑与地址规划:分几层、IP 怎么分、VLAN 怎么划、路由用什么协议。</p>' +
    '<div class="ex">不谈具体设备型号,先定"骨架":分层拓扑 + IP/VLAN 规划 + 路由策略。</div>',
  exam: '<p><b>频度:高(案例/论文)。</b>常考三层架构、IP/VLAN 规划原则、路由协议选择。</p>',
  core: '<p><b>经典三层架构(园区/企业网):</b></p>' +
    '<ul>' +
    '<li><b>核心层</b>:高速转发、可靠冗余,不做策略。</li>' +
    '<li><b>汇聚层</b>:策略边界、VLAN 间路由、流量汇总。</li>' +
    '<li><b>接入层</b>:终端接入、二层交换、端口安全。</li>' +
    '</ul>' +
    '<p><b>IP 地址规划原则:</b></p>' +
    '<ul>' +
    '<li>按部门/区域/业务连续分配,便于汇总。</li>' +
    '<li>用 CIDR/VLSM 提高利用率,留扩展余量。</li>' +
    '<li>核心/汇聚/接入分段,与 VLAN 对应。</li>' +
    '</ul>' +
    '<p><b>VLAN 规划:</b>按部门/业务划分,隔离广播;管理 VLAN 与业务 VLAN 分离。</p>' +
    '<p><b>路由协议选择:</b>内部用 OSPF(中大)/IS-IS(运营商);静态用于末梢出口;BGP 用于 AS 间。</p>' +
    '<p class="ex">小型网络可简化为两层(核心+接入);数据中心常用 Leaf-Spine(叶脊)架构取代传统三层。</p>',
  pitfalls: '<div class="pit"><b>易混:核心层职责。</b>核心层只高速转发与冗余,不应做访问控制/路由策略——策略放汇聚层。</div>' +
    '<div class="pit"><b>易错:IP 规划要"可汇总"。</b>连续分配便于路由汇总,减少路由表规模——这是规划原则,非可有可无。</div>',
  quiz: [
    { type: 'choice', q: '传统园区三层架构中,负责策略与 VLAN 间路由的是?', options: ['核心层', '汇聚层', '接入层', '互联网层'], answer: 1, source: '基础', explain: '汇聚层做策略边界与 VLAN 间路由。' },
    { type: 'choice', q: '核心层的主要职责是?', options: ['访问控制', '高速转发与冗余', '终端接入', '地址分配'], answer: 1, source: '基础', explain: '核心层高速转发、不做策略。' },
    { type: 'choice', q: 'IP 地址规划应遵循的原则是?', options: ['随机分配', '连续分配便于汇总、留余量', '按字母序', '尽量分散'], answer: 1, source: '理解', explain: '连续分配便于路由汇总。' }
  ],
  links: '<p>上一课:<a href="#/l/planning/01-requirement">需求分析</a> · 下一课:<a href="#/l/planning/03-physical">物理设计</a></p>'
});
