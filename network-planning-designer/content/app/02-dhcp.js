NPD.registerLesson({
  id: 'app/02-dhcp',
  module: 'app',
  order: 2,
  title: 'DHCP:动态主机配置',
  minutes: 4,
  keywords: ['DHCP', '动态配置', 'DORA', 'IP分配', '租约', '中继'],
  concept: '<p><b><gd data-term="dhcp">DHCP</gd></b> 自动给主机分配 IP、掩码、网关、DNS 等,免去手工配置,UDP 67/68。</p>' +
    '<div class="ex">新设备进门"自动领工牌和门禁卡"——IP、网关、DNS 一次配齐。</div>',
  exam: '<p><b>频度:高。</b>常考 DORA 四步、端口、租约与中继。</p>',
  core: '<p><b>DHCP 四步(DORA):</b></p>' +
    '<ol>' +
    '<li><b>Discover</b>:客户端<b>广播</b>找服务器(我需要 IP)。</li>' +
    '<li><b>Offer</b>:服务器<b>单播/广播</b>回应(给你这个 IP)。</li>' +
    '<li><b>Request</b>:客户端<b>广播</b>确认(我要这个,告知所有服务器)。</li>' +
    '<li><b>Acknowledge</b>:服务器确认,配齐参数,开始租约。</li>' +
    '</ol>' +
    '<p><b>租约(Lease):</b>IP 有有效期;过半续租,过 7/8 绑定重新申请,到期释放。</p>' +
    '<p><b>DHCP 中继(Relay):</b>跨网段时,中继代理把客户端广播转发给服务器,使集中部署成为可能。</p>' +
    '<p class="ex">因客户端一开始无 IP,首两步靠广播;DHCP 使用 UDP 67(服务器)/68(客户端)。</p>',
  pitfalls: '<div class="pit"><b>易错:Discover 是广播。</b>客户端尚无 IP 与服务器地址,只能广播发现;不是单播。</div>' +
    '<div class="pit"><b>易混:67 vs 68。</b>服务器监听 67,客户端用 68——别记反。</div>' +
    '<div class="pit"><b>考点:跨网段需中继。</b>广播不能跨路由器,DHCP 中继代理让客户端能从远端服务器获地址。</div>',
  quiz: [
    { type: 'choice', q: 'DHCP 客户端首次获取地址的第一步是?', options: ['Request', 'Discover(广播)', 'Offer', 'Ack'], answer: 1, source: '基础', explain: '先广播 Discover 找服务器。' },
    { type: 'choice', q: 'DHCP 服务器监听的端口是?', options: ['67', '68', '53', '80'], answer: 0, source: '基础', explain: '服务器监听 UDP 67。' },
    { type: 'choice', q: '跨网段获取 DHCP 地址需要?', options: ['增加 IP', 'DHCP 中继代理', '改用静态', '禁用广播'], answer: 1, source: '理解', explain: '中继代理转发,使跨网段可获地址。' }
  ],
  links: '<p>上一课:<a href="#/l/app/01-dns">DNS</a> · 下一课:<a href="#/l/app/03-http">HTTP/HTTPS</a></p>'
});
