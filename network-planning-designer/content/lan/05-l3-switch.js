NPD.registerLesson({
  id: 'lan/05-l3-switch',
  module: 'lan',
  order: 5,
  title: '三层交换与 VLAN 间路由',
  minutes: 4,
  keywords: ['三层交换', 'VLAN间路由', '单臂路由', '硬件转发', 'CEF'],
  concept: '<p><b><gd data-term="l3-switch">三层交换</gd></b>兼具二层线速转发与三层路由,常用硬件实现 VLAN 间高速转发。</p>' +
    '<div class="ex">交换机的速度 + 路由器的脑子——VLAN 间通信不用绕路由器,本机就能路由。</div>',
  exam: '<p><b>频度:中高。</b>常考 VLAN 间路由方案、三层交换 vs 路由器、单臂路由。</p>',
  core: '<p><b>VLAN 间通信方案:</b></p>' +
    '<ul>' +
    '<li><b>单臂路由</b>:路由器单接口划子接口,各子接口对应一 VLAN,打 802.1Q 封装。省端口但路由器成瓶颈。</li>' +
    '<li><b>三层交换机</b>:SVI(交换虚拟接口)作为各 VLAN 网关,硬件路由转发,高性能。</li>' +
    '</ul>' +
    '<p><b>三层交换原理:</b>首包走软件路由(查路由表),后续流由硬件转发表(如 CEF)线速转发——"一次路由,多次交换"。</p>' +
    '<p><b>三层交换 vs 路由器:</b>三层交换主打局域网内 VLAN 间高速路由,接口多为以太网;路由器主打异构网络互联、广域网接口丰富。</p>' +
    '<p class="ex">现代园区网普遍用三层交换做核心/汇聚,既交换又路由,消除单臂路由瓶颈。</p>',
  pitfalls: '<div class="pit"><b>易混:三层交换 vs 路由器。</b>三层交换"以太网为主、硬件转发、园区核心";路由器"广域网接口、异构互联"。</div>' +
    '<div class="pit"><b>易错:单臂路由瓶颈。</b>所有 VLAN 间流量挤一个路由器接口,易成瓶颈;大规模用三层交换替代。</div>' +
    '<div class="pit"><b>易混:三层交换仍能做二层。</b>它同时有二层交换能力与三层路由能力,并非纯路由器。</div>',
  quiz: [
    { type: 'choice', q: '三层交换机相比单臂路由的优势是?', options: ['更便宜', '硬件高速转发、消除路由瓶颈', '支持更多 WAN 接口', '无需配置'], answer: 1, source: '理解', explain: '三层交换硬件转发,性能高。' },
    { type: 'choice', q: '单臂路由实现 VLAN 间通信依赖?', options: ['路由器子接口+802.1Q 封装', '集线器', '中继器', 'STP'], answer: 0, source: '基础', explain: '单臂路由用子接口对应 VLAN,打 802.1Q。' },
    { type: 'choice', q: '"一次路由,多次交换"描述的是?', options: ['集线器', '三层交换的硬件转发', '静态路由', 'NAT'], answer: 1, source: '理解', explain: '三层交换首包路由、后续硬件转发。' }
  ],
  links: '<p>上一课:<a href="#/l/lan/04-aggregation">链路聚合</a> · 进入广域网:<a href="#/l/wan/01-pstn-isdn">广域网与接入</a></p>'
});
