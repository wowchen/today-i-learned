NPD.registerLesson({
  id: 'arch/02-tcpip',
  module: 'arch',
  order: 2,
  title: 'TCP/IP 四层模型',
  minutes: 4,
  keywords: ['TCP/IP', '四层模型', '网络接口层', '网际层', '传输层', '应用层'],
  concept: '<p><b>TCP/IP 模型</b>是互联网事实标准,四层:</p>' +
    '<p><b>网络接口 → 网际(IP) → 传输(TCP/UDP) → 应用</b>。</p>' +
    '<div class="ex">OSI 七层偏理论,TCP/IP 四层是"真正跑起来的";二者可对应。</div>',
  exam: '<p><b>频度:高。</b>常考与 OSI 的层次对应、各层代表协议。</p>',
  core: '<p><b>TCP/IP 四层与对应 OSI、协议:</b></p>' +
    '<table><tr><th>TCP/IP</th><th>对应 OSI</th><th>代表协议</th></tr>' +
    '<tr><td>应用层</td><td>5/6/7</td><td>HTTP/HTTPS/DNS/DHCP/SMTP/FTP/SNMP</td></tr>' +
    '<tr><td>传输层</td><td>4</td><td>TCP / UDP</td></tr>' +
    '<tr><td>网际层</td><td>3</td><td>IP / ICMP / ARP</td></tr>' +
    '<tr><td>网络接口层</td><td>1/2</td><td>以太网、PPP、Wi-Fi</td></tr></table>' +
    '<p class="ex">注意:ARP 介于 2/3 层,TCP/IP 通常归入网际层;ICMP、ARP 都围绕 IP 工作。</p>',
  pitfalls: '<div class="pit"><b>易混:ARP/ICMP 的归属。</b>它们是 IP 的辅助协议,通常归网际层(网络层),不是传输层。</div>' +
    '<div class="pit"><b>易混:网络接口层 ≠ 单一物理层。</b>TCP/IP 把 OSI 的物理+链路合并为"网络接口层"。</div>',
  quiz: [
    { type: 'choice', q: '在 TCP/IP 模型中,IP 属于?', options: ['网络接口层', '网际层', '传输层', '应用层'], answer: 1, source: '基础', explain: 'IP 属网际层。' },
    { type: 'choice', q: '下列协议同属 TCP/IP 应用层的是?', options: ['IP、ICMP', 'TCP、UDP', 'HTTP、DNS、SMTP', 'ARP、以太网'], answer: 2, source: '基础', explain: 'HTTP/DNS/SMTP 均应用层。' },
    { type: 'choice', q: 'OSI 的物理层与数据链路层在 TCP/IP 中合并为?', options: ['网际层', '网络接口层', '传输层', '会话层'], answer: 1, source: '理解', explain: 'TCP/IP 把物理+链路合并为网络接口层。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/01-osi">OSI 七层</a> · 下一课:<a href="#/l/arch/03-layering-encap">分层与封装</a></p>'
});
