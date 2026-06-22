NPD.registerLesson({
  id: 'lan/03-stp',
  module: 'lan',
  order: 3,
  title: '生成树协议 STP/RSTP',
  minutes: 5,
  keywords: ['STP', '生成树', 'RSTP', '根桥', '环路', '端口状态', 'BPDU'],
  concept: '<p>冗余链路易成环,广播帧会无限循环酿成<b>广播风暴</b>。<b><gd data-term="stp">STP</gd></b> 把带环拓扑"剪"成无环树。</p>' +
    '<div class="ex">把绕成圈的线剪成树,断了再自动接上——既防环又留冗余备份。</div>',
  exam: '<p><b>频度:高。</b>常考 STP 作用、根桥选举、端口角色与状态、RSTP 改进。</p>',
  core: '<p><b>STP 工作机制:</b></p>' +
    '<ol>' +
    '<li><b>选根桥</b>:桥 ID 最小(优先级+MAC)的交换机当根。</li>' +
    '<li><b>每个非根桥选根端口</b>:到根代价最小的端口。</li>' +
    '<li><b>每段链路选指定端口</b>:该段到根代价较小的一端。</li>' +
    '<li>其余端口<b>阻塞</b>,形成无环树。</li>' +
    '</ol>' +
    '<p><b>端口状态(STP):</b>禁用→阻塞→侦听→学习→转发。</p>' +
    '<p><b>RSTP(快速生成树)改进:</b>端口状态简化为丢弃/学习/转发;增加替代端口,收敛由约 30–50 秒降到秒级。</p>' +
    '<p class="ex">BPDU(桥协议数据单元)是 STP 的"心跳与选举报文";根桥周期发送,拓扑变化时触发重算。</p>',
  pitfalls: '<div class="pit"><b>易混:根端口 vs 指定端口。</b>根端口在非根桥上(到根最优);指定端口在每段链路上(负责转发该段流量)。</div>' +
    '<div class="pit"><b>易错:STP 收敛慢。</b>传统 STP 侦听+学习各 15 秒,收敛约 30–50 秒;RSTP 大幅提速——这是 RSTP 的卖点。</div>',
  quiz: [
    { type: 'choice', q: 'STP 的主要作用是?', options: ['加快转发', '防止二层环路/广播风暴', '加密流量', '划分 VLAN'], answer: 1, source: '基础', explain: 'STP 防环、防广播风暴。' },
    { type: 'choice', q: 'STP 中"桥 ID 最小"的交换机被选为?', options: ['指定桥', '根桥', '备份桥', '边缘桥'], answer: 1, source: '基础', explain: '桥 ID 最小者为根桥。' },
    { type: 'choice', q: '相比 STP,RSTP 的主要改进是?', options: ['支持更多 VLAN', '大幅缩短收敛时间', '加密 BPDU', '取消根桥'], answer: 1, source: '理解', explain: 'RSTP 收敛由数十秒降到秒级。' }
  ],
  links: '<p>上一课:<a href="#/l/lan/02-vlan">VLAN</a> · 下一课:<a href="#/l/lan/04-aggregation">链路聚合</a></p>'
});
