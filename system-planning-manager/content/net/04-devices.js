SPM.registerLesson({
  id: 'net/04-devices',
  module: 'net',
  order: 4,
  title: '网络设备与组网',
  minutes: 4,
  keywords: ['交换机', '路由器', '防火墙', '负载均衡', 'VLAN'],
  concept: '<p>组网常见设备:<b>交换机</b>(局域网内转发)、<b>路由器</b>(网间选路)、<b>防火墙</b>(边界安全)、<b>负载均衡</b>(分摊流量提升可用性)。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,设备作用辨析。</p>',
  core: '<ul>' +
    '<li><b>VLAN</b>:在交换机上逻辑划分广播域,隔离与安全。</li>' +
    '<li><b>负载均衡(LB)</b>:把请求分发到多台服务器,既提性能又提<gd data-term="availability">可用性</gd>(单点故障可摘除)。</li>' +
    '<li><b>防火墙/WAF</b>:边界与应用层防护。</li>' +
    '</ul>' +
    '<div class="ex">负载均衡 + 多实例是实现高可用最常见的组合。</div>',
  pitfalls: '<div class="pit"><b>负载均衡本身也可能成单点。</b>关键场景要给 LB 做主备/集群。</div>',
  quiz: [
    { type: 'choice', q: '把用户请求分发到多台服务器、兼顾性能与可用性的设备是?', options: ['交换机', '负载均衡', '防火墙', '集线器'], answer: 1, source: '高频', explain: '负载均衡分摊流量并可摘除故障节点。' }
  ],
  links: '<p>上一课:<a href="#/l/net/03-addressing">IP 与子网</a> · 下一课:<a href="#/l/net/05-new-network">新型网络</a></p>'
});
