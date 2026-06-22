SPM.registerLesson({
  id: 'net/02-protocol',
  module: 'net',
  order: 2,
  title: '常见网络协议',
  minutes: 5,
  keywords: ['TCP', 'UDP', 'HTTP', 'DNS', 'DHCP'],
  concept: '<p>协议是通信双方的"共同语言"。运维高频:<b>TCP/UDP、HTTP/HTTPS、DNS、DHCP</b>。懂它们才能定位"打不开网页"类故障。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题考协议作用与端口。</p>',
  core: '<ul>' +
    '<li><b>TCP</b>:面向连接、可靠(三次握手);<b>UDP</b>:无连接、快但不保证,适合视频/语音。</li>' +
    '<li><b>HTTP/HTTPS</b>:Web 应用层协议,HTTPS 加 TLS 加密(端口 443)。</li>' +
    '<li><b>DNS</b>:域名解析为 IP;<b>DHCP</b>:自动分配 IP。</li>' +
    '</ul>' +
    '<div class="ex">"域名打不开但 IP 能通"——多半是 DNS 问题。</div>',
  pitfalls: '<div class="pit"><b>TCP 可靠≠永不丢。</b>它靠确认重传保证交付,代价是开销大于 UDP。</div>',
  quiz: [
    { type: 'choice', q: '负责把域名解析成 IP 地址的协议是?', options: ['DHCP', 'DNS', 'HTTP', 'FTP'], answer: 1, source: '高频', explain: 'DNS 提供域名到 IP 的解析。' }
  ],
  links: '<p>上一课:<a href="#/l/net/01-model">网络模型</a> · 下一课:<a href="#/l/net/03-addressing">IP 与子网</a></p>'
});
