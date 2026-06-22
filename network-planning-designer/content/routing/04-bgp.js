NPD.registerLesson({
  id: 'routing/04-bgp',
  module: 'routing',
  order: 4,
  title: 'BGP:自治系统间路由',
  minutes: 4,
  keywords: ['BGP', '边界网关', '自治系统', '路径矢量', 'eBGP', 'iBGP', '策略'],
  concept: '<p><b><gd data-term="bgp">BGP</gd></b> 是<b>外部网关协议</b>,在<b><gd data-term="as">自治系统(AS)</gd></b>之间交换可达性,承载互联网骨干路由。</p>' +
    '<div class="ex">OSPF/RIP 管"AS 内部怎么走",BGP 管"AS 之间怎么走"——互联网的"国境线协议"。</div>',
  exam: '<p><b>频度:高。</b>常考 BGP 类型(路径矢量)、eBGP/iBGP、与 OSPF 区别、AS 概念。</p>',
  core: '<p><b>BGP 要点:</b></p>' +
    '<ul>' +
    '<li><b>类型</b>:路径矢量协议,度量是一串经过的 AS 列表(AS_PATH),而非单数值。</li>' +
    '<li><b>选路依据策略</b>:可用本地策略选路(不仅看最短),适合运营商间基于商业关系选路。</li>' +
    '<li><b>承载规模大</b>:用 TCP(179)可靠传输,支持海量路由。</li>' +
    '<li><b>eBGP vs iBGP</b>:eBGP 跨 AS、iBGP 同 AS 内;AS 间用 eBGP,AS 内用 iBGP 同步。</li>' +
    '</ul>' +
    '<p><b>BGP 与 OSPF 对比:</b>OSPF 是 IGP(内部)、链路状态、算最短路径;BGP 是 EGP(外部)、路径矢量、按策略选路。</p>' +
    '<p class="ex">BGP 不追求"最短",而追求"符合策略"——运营商可基于商业关系决定走哪条 AS 路径。</p>',
  pitfalls: '<div class="pit"><b>易混:BGP vs OSPF。</b>BGP=EGP、外部、路径矢量、按策略;OSPF=IGP、内部、链路状态、按最短路径。</div>' +
    '<div class="pit"><b>易混:eBGP vs iBGP。</b>eBGP 跑在 AS 之间;iBGP 跑在同一 AS 内部,用于把外部路由在 AS 内同步。</div>',
  quiz: [
    { type: 'choice', q: 'BGP 属于哪类协议?', options: ['内部网关协议(IGP)', '外部网关协议(EGP)', '链路层协议', '传输层协议'], answer: 1, source: '基础', explain: 'BGP 是 EGP,AS 间路由。' },
    { type: 'choice', q: 'BGP 选路主要依据?', options: ['最短路径', '带宽最大', '策略与 AS 路径', '跳数最少'], answer: 2, source: '理解', explain: 'BGP 按策略与 AS_PATH 选路。' },
    { type: 'choice', q: 'BGP 使用的传输层协议与端口是?', options: ['UDP 520', 'TCP 179', 'TCP 80', 'UDP 161'], answer: 1, source: '基础', explain: 'BGP 用 TCP 端口 179。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/03-ospf">OSPF</a> · 下一课:<a href="#/l/routing/05-isis">IS-IS</a></p>'
});
