NPD.registerLesson({
  id: 'case/03-routing-switch',
  module: 'case',
  order: 3,
  title: '案例:路由交换拓扑分析',
  minutes: 5,
  keywords: ['路由交换', '拓扑分析', 'VLAN', 'STP', '路由协议', '问题定位'],
  concept: '<p>给一张网络拓扑,要求<b>分析问题、补全配置、解释原理</b>——这是设计分析类常考。</p>' +
    '<div class="ex">看拓扑找问题:有无单点?VLAN/网关对不对?STP 是否成环?路由是否可达?</div>',
  exam: '<p><b>频度:高。</b>常考 VLAN 间路由、STP 防环、路由选路、冗余设计。</p>',
  core: '<p><b>常见考点与分析点:</b></p>' +
    '<ul>' +
    '<li><b>VLAN 间通信</b>:不同 VLAN 默认隔离,需三层设备(单臂路由/三层交换)。检查各 VLAN 是否有对应网关 SVI。</li>' +
    '<li><b>STP 防环</b>:冗余链路是否启 STP?根桥/根端口/指定端口是否合理?有无被阻塞端口。</li>' +
    '<li><b>链路聚合</b>:核心链路是否聚合扩容?两端参数是否一致。</li>' +
    '<li><b>路由选路</b>:静态/动态配置是否合理?默认路由是否指向正确出口?是否有环路或黑洞。</li>' +
    '<li><b>冗余</b>:核心双机?链路双归?网关冗余(VRRP/HSRP)?避免单点。</li>' +
    '</ul>' +
    '<p><b>答题套路:</b>指出问题(1)…→ 给出方案(1)…,一一对应,带原理依据。</p>' +
    '<p class="ex">常给"某段不通"的拓扑,让你定位:查物理→查 VLAN/网关→查路由/ACL,逐层排查写依据。</p>',
  pitfalls: '<div class="pit"><b>易漏:VLAN 间路由前提。</b>不同 VLAN 通信需三层,别假设"接同一交换机就通"。</div>' +
    '<div class="pit"><b>易错:STP 看根桥。</b>根桥选错会导致次优路径;检查桥 ID 与根端口合理性。</div>' +
    '<div class="pit"><b>易漏:冗余端到端。</b>只设备冗余但链路单归仍单点;答冗余题要"设备+链路+网关"全冗余。</div>',
  quiz: [
    { type: 'choice', q: '两台同 VLAN 主机接同一交换机却 ping 不通,首先应查?', options: ['路由表', 'VLAN 与端口配置/物理层', 'DNS', 'DHCP'], answer: 1, source: '排错', explain: '同 VLAN 不通先查 VLAN 端口与物理层。' },
    { type: 'choice', q: '不同 VLAN 间通信必须经过?', options: ['集线器', '三层设备(路由器/三层交换)', '中继器', '网桥'], answer: 1, source: '基础', explain: 'VLAN 间需三层转发。' },
    { type: 'choice', q: '冗余链路未启 STP 会导致?', options: ['广播风暴/环路', '加密失败', '地址耗尽', 'DNS 错误'], answer: 0, source: '理解', explain: '无 STP 的环路致广播风暴。' }
  ],
  links: '<p>上一课:<a href="#/l/case/02-subnet">子网案例</a> · 下一课:<a href="#/l/case/04-security">网络安全案例</a> · STP 原理:<a href="#/l/lan/03-stp">生成树</a></p>'
});
