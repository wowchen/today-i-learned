NPD.registerLesson({
  id: 'wan/03-mpls',
  module: 'wan',
  order: 3,
  title: 'MPLS:多协议标签交换',
  minutes: 4,
  keywords: ['MPLS', '标签交换', 'LSP', '流量工程', 'MPLS VPN', '2.5层'],
  concept: '<p><b><gd data-term="mpls">MPLS</gd></b>在 IP 与链路层之间加一层"标签转发",提速并支持流量工程与 VPN。</p>' +
    '<div class="ex">给分组贴"快速通道条码",中途路由器不再逐跳查 IP 路由表,按标签直接转发。</div>',
  exam: '<p><b>频度:中高。</b>常考 MPLS 位置(2.5 层)、标签转发、VPN 与流量工程。</p>',
  core: '<p><b>MPLS 要点:</b></p>' +
    '<ul>' +
    '<li><b>位置</b>:介于链路层(2)与网络层(3)之间,常称"2.5 层"。</li>' +
    '<li><b>标签</b>:入口( ingress )打标签,中间(LSR)按标签转发,出口(egress)弹标签。</li>' +
    '<li><b>LSP(标签交换路径)</b>:标签转发形成的端到端路径。</li>' +
    '</ul>' +
    '<p><b>MPLS 价值:</b></p>' +
    '<ul>' +
    '<li><b>提速</b>:标签转发比逐跳查 IP 路由快(历史意义,现代硬件路由已快)。</li>' +
    '<li><b>流量工程(TE)</b>:可显式指定路径,优化带宽利用。</li>' +
    '<li><b>MPLS VPN</b>:用标签隔离不同租户/业务,运营商主流 VPN 方案。</li>' +
    '</ul>' +
    '<p class="ex">MPLS VPN 是运营商常见三层 VPN;VRF + 标签实现租户隔离,比传统 IP 隧道更高效。</p>',
  pitfalls: '<div class="pit"><b>易错:MPLS 是"2.5 层"。</b>它夹在二层与三层之间,既非纯链路层也非纯网络层。</div>' +
    '<div class="pit"><b>易混:MPLS vs IP 路由。</b>IP 逐跳查目的地址路由;MPLS 入口打标签后,中间按标签转发(不再查 IP),出口弹标签。</div>',
  quiz: [
    { type: 'choice', q: 'MPLS 工作的层次常称为?', options: ['一层', '2.5 层', '三层', '四层'], answer: 1, source: '基础', explain: 'MPLS 介于 2/3 层之间,称 2.5 层。' },
    { type: 'choice', q: 'MPLS 转发的依据是?', options: ['目的 IP', '标签', 'MAC 地址', '端口号'], answer: 1, source: '基础', explain: '中间 LSR 按标签转发。' },
    { type: 'choice', q: '下列属于 MPLS 应用的是?', options: ['广播抑制', '流量工程与 VPN', 'VLAN 划分', 'DHCP 分配'], answer: 1, source: '理解', explain: 'MPLS 支持流量工程与 VPN。' }
  ],
  links: '<p>上一课:<a href="#/l/wan/02-fr-atm">帧中继/ATM</a> · 下一课:<a href="#/l/wan/04-sdh">SDH 光传输</a></p>'
});
