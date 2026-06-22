NPD.registerLesson({
  id: 'device/03-router',
  module: 'device',
  order: 3,
  title: '路由器:选路与跨网转发',
  minutes: 4,
  keywords: ['路由器', '路由表', '选路', '广播域', '异构互联', '三层'],
  concept: '<p><b><gd data-term="router">路由器</gd></b>工作在网络层,按路由表在异构网络间转发分组,隔离广播域。</p>' +
    '<div class="ex">网际间的"导航员"——跨网指路,顺带把广播关在网内。</div>',
  exam: '<p><b>频度:高。</b>常考路由器层次、路由表构成、与交换机对比、广播域隔离。</p>',
  core: '<p><b>路由器核心功能:</b></p>' +
    '<ul>' +
    '<li><b>路由选路</b>:按目的 IP 与路由表(最长前缀匹配)选下一跳。</li>' +
    '<li><b>分组转发</b>:减 TTL、重算首部校验、从出接口转发。</li>' +
    '<li><b>异构互联</b>:连接不同链路层/不同网段的网络(以太网、PPP…)。</li>' +
    '<li><b>隔离广播域</b>:不转发广播,抑制广播风暴扩散。</li>' +
    '</ul>' +
    '<p><b>路由表条目:</b>目的网络、掩码、下一跳/出接口、度量、来源(直连/静态/动态)。</p>' +
    '<p><b>路由器 vs 交换机:</b>交换机二层(MAC)、不隔离广播域;路由器三层(IP)、隔离广播域、可异构互联。</p>' +
    '<p class="ex">路由器转发靠"查表+减TTL+转发",不关心 MAC 表(但出接口仍需 ARP 解析下一跳 MAC)。</p>',
  pitfalls: '<div class="pit"><b>易错:路由器仍要用 ARP。</b>选好下一跳 IP 后,需 ARP 解析下一跳的 MAC 才能封装帧——ARP 在路由器每跳都发生。</div>' +
    '<div class="pit"><b>易混:路由器 vs 三层交换。</b>路由器主打异构互联与广域接口;三层交换主打园区内 VLAN 间高速路由(以太网为主)。</div>',
  quiz: [
    { type: 'choice', q: '路由器工作在 OSI 哪一层?', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 2, source: '基础', explain: '路由器是网络层设备。' },
    { type: 'choice', q: '路由器选下一跳依据?', options: ['源 MAC', '目的 IP + 路由表(最长前缀)', '端口号', 'VLAN ID'], answer: 1, source: '基础', explain: '按目的 IP 最长前缀匹配路由表。' },
    { type: 'choice', q: '路由器对广播帧的处理是?', options: ['泛洪', '转发到所有端口', '不转发(隔离广播域)', '加密'], answer: 2, source: '理解', explain: '路由器隔离广播域,不转发广播。' }
  ],
  links: '<p>上一课:<a href="#/l/device/02-switch">交换机</a> · 下一课:<a href="#/l/device/04-gateway-firewall">网关与防火墙</a> · 路由协议:<a href="#/l/routing/01-static">静态路由</a></p>'
});
