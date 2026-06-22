SAD.registerLesson({
  id: 'net/04-networking',
  module: 'net',
  order: 4,
  title: '组网与网络设备',
  minutes: 4,
  keywords: ['交换机', '路由器', '防火墙', 'VLAN', '网关', '网络设备'],
  concept: '<p>把主机连成网,靠各类网络设备各司其职:交换机管局域、路由器管互联、防火墙管安全边界。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:设备所在层与作用、VLAN作用。</p>',
  core: '<table><tr><th>设备</th><th>层</th><th>作用</th></tr>' +
    '<tr><td>集线器Hub</td><td>物理层</td><td>广播转发,已淘汰</td></tr>' +
    '<tr><td>交换机</td><td>数据链路层</td><td>按MAC转发,划分冲突域</td></tr>' +
    '<tr><td>路由器</td><td>网络层</td><td>按IP路由、连接不同网络</td></tr>' +
    '<tr><td>防火墙</td><td>多层</td><td>访问控制、安全边界</td></tr></table>' +
    '<div class="ex"><b>VLAN</b>(虚拟局域网)在交换机上把一个物理网络逻辑隔离成多个广播域,提升安全与可管理性,不必重新布线。</div>',
  pitfalls: '<div class="pit"><b>误解:交换机能隔离广播域。</b>普通交换机隔离的是<b>冲突域</b>,广播域由<b>路由器或VLAN</b>隔离。</div>',
  quiz: [
    { type: 'choice', q: '划分广播域通常使用?', options: ['集线器', '普通交换机端口', 'VLAN或路由器', '网线'], answer: 2, source: '高频', explain: '广播域由路由器或VLAN划分,交换机仅隔离冲突域。' }
  ],
  links: '<p>上一课:<a href="#/l/net/03-addressing">IP与子网</a> · 下一课:<a href="#/l/net/05-storage">网络存储</a></p>'
});
