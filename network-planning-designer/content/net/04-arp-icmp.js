NPD.registerLesson({
  id: 'net/04-arp-icmp',
  module: 'net',
  order: 4,
  title: 'ARP 与 ICMP:地址解析与报错探路',
  minutes: 4,
  keywords: ['ARP', 'ICMP', '地址解析', 'ping', 'traceroute', 'RARP'],
  concept: '<p>IP 知道"去哪",但同一局域网内帧要靠 <b>MAC 地址</b>送达。<b><gd data-term="arp">ARP</gd></b> 把 IP 解析成 MAC;<b><gd data-term="icmp">ICMP</gd></b> 负责报错与探路。</p>' +
    '<div class="ex">ARP 是"查座位号",ICMP 是"报错与探路小信使"(ping/traceroute 靠它)。</div>',
  exam: '<p><b>频度:高。</b>常考 ARP 工作过程、ICMP 类型与 ping/traceroute 原理。</p>',
  core: '<p><b>ARP 工作过程:</b></p>' +
    '<ol>' +
    '<li>主机要发数据给同网某 IP,先查 ARP 缓存。</li>' +
    '<li>无缓存则<b>广播 ARP 请求</b>:"谁的 IP 是 X?请把 MAC 告诉我"。</li>' +
    '<li>目标主机<b>单播应答</b>自己的 MAC。</li>' +
    '<li>请求方缓存 IP↔MAC 映射,封装帧发送。</li>' +
    '</ol>' +
    '<p><b>ICMP 常用类型:</b>回送请求/应答(ping)、超时(traceroute 用 TTL 递减)、目标不可达、重定向。</p>' +
    '<p><b>ping</b> 用 ICMP 回送请求/应答测连通;<b>traceroute</b> 用 TTL 递增触发"超时"返回,逐跳绘出路径。</p>' +
    '<p class="ex">ARP 仅在同一网段内解析;跨网段时 ARP 解析的是<b>网关</b>的 MAC,由网关逐跳转发。</p>',
  pitfalls: '<div class="pit"><b>易混:ARP 请求是广播,应答是单播。</b>别记反;且 ARP 缓存有老化时间,非永久。</div>' +
    '<div class="pit"><b>易错:跨网段 ARP。</b>跨网时 ARP 解析的是默认网关的 MAC,不是最终目标主机的 MAC。</div>' +
    '<div class="pit"><b>易混:ARP vs RARP。</b>ARP 由 IP 查 MAC;RARP 反向(无盘工作站开机时由 MAC 求 IP),现已基本被 DHCP 取代。</div>',
  quiz: [
    { type: 'choice', q: 'ARP 请求与应答的发送方式是?', options: ['都广播', '都单播', '请求广播、应答单播', '请求单播、应答广播'], answer: 2, source: '基础', explain: '请求广播、应答单播给请求方。' },
    { type: 'choice', q: 'ping 命令依赖的协议是?', options: ['ARP', 'ICMP', 'TCP', 'DHCP'], answer: 1, source: '基础', explain: 'ping 用 ICMP 回送请求/应答。' },
    { type: 'choice', q: '跨网段通信时,ARP 解析的是谁的 MAC?', options: ['目标主机', '默认网关', 'DNS 服务器', '广播地址'], answer: 1, source: '理解', explain: '跨网段先解析网关 MAC,由网关转发。' }
  ],
  links: '<p>上一课:<a href="#/l/net/03-ipv6">IPv6</a> · 下一课:<a href="#/l/net/05-nat">NAT</a> · 下一课:<a href="#/l/net/06-fragment-forward">分片与转发</a></p>'
});
