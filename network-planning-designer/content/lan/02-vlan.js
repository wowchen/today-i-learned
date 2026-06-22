NPD.registerLesson({
  id: 'lan/02-vlan',
  module: 'lan',
  order: 2,
  title: 'VLAN:虚拟局域网',
  minutes: 5,
  key: true,
  keywords: ['VLAN', '虚拟局域网', '802.1Q', '广播域', '接入中继', 'Trunk'],
  concept: '<p><b><gd data-term="vlan">VLAN</gd></b> 在一台(或多台)交换机上按逻辑划分广播域,而非按物理位置。</p>' +
    '<div class="ex">把一台交换机"虚拟切成几个互不相干的房间"——隔离广播、提升安全与灵活。</div>',
  exam: '<p><b>频度:高。</b>常考 VLAN 作用、802.1Q、接入/中继端口、VLAN 间路由。</p>',
  core: '<p><b>VLAN 价值:</b></p>' +
    '<ul>' +
    '<li><b>隔离广播域</b>:广播只在 VLAN 内,抑制广播风暴。</li>' +
    '<li><b>灵活分组</b>:按部门/业务而非物理端口分组。</li>' +
    '<li><b>安全</b>:VLAN 间默认隔离,需经路由/三层设备才通。</li>' +
    '</ul>' +
    '<p><b>端口类型:</b></p>' +
    '<ul>' +
    '<li><b>Access(接入)</b>:只属一个 VLAN,连终端,去掉标签后发主机。</li>' +
    '<li><b>Trunk(中继)</b>:承载多个 VLAN,用 <gd data-term="tag-8021q">802.1Q</gd> 标签区分,连交换机/路由器。</li>' +
    '</ul>' +
    '<p><b>802.1Q:</b>在以太网帧插入 4 字节标签(含 VLAN ID 12 位,理论 4096 个)。</p>' +
    '<p><b>VLAN 间通信</b>需三层设备:单臂路由或三层交换机。</p>' +
    '<p class="ex">VLAN ID 范围 1–4094(0 与 4095 保留);VLAN 1 通常是默认管理 VLAN。</p>',
  pitfalls: '<div class="pit"><b>易混:VLAN 隔离的是广播域,不是冲突域。</b>冲突域由交换机端口隔离;VLAN 在此之上再切广播域。</div>' +
    '<div class="pit"><b>易错:VLAN 间默认不通。</b>必须经路由器或三层交换机;这是考"为何要三层交换"的根因。</div>' +
    '<div class="pit"><b>易错:Access 与 Trunk。</b>Access 连终端(单 VLAN、去标签);Trunk 连交换机(多 VLAN、带标签)。</div>',
  quiz: [
    { type: 'choice', q: 'VLAN 的主要作用不包括?', options: ['隔离广播域', '灵活按逻辑分组', '提升安全', '增加带宽上限'], answer: 3, source: '理解', explain: 'VLAN 不直接增加带宽上限。' },
    { type: 'choice', q: '承载多个 VLAN 流量、带 802.1Q 标签的端口类型是?', options: ['Access', 'Trunk', 'Console', 'Loopback'], answer: 1, source: '基础', explain: 'Trunk 承载多 VLAN。' },
    { type: 'choice', q: '不同 VLAN 间通信需要?', options: ['集线器', '二层交换机', '三层设备(路由器/三层交换)', '中继器'], answer: 2, source: '基础', explain: 'VLAN 间需三层转发。' }
  ],
  links: '<p>上一课:<a href="#/l/lan/01-ethernet">以太网</a> · 下一课:<a href="#/l/lan/03-stp">生成树</a> · 三层交换:<a href="#/l/lan/05-l3-switch">三层交换</a></p>'
});
