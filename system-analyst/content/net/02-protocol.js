SAN.registerLesson({
  id: 'net/02-protocol',
  module: 'net',
  order: 2,
  title: '常见协议与端口',
  minutes: 4,
  keywords: ['协议', '端口', 'HTTP', 'DNS', 'TCP', 'UDP', 'DHCP'],
  concept: '<p>协议是通信双方的约定。常考各协议的作用、所属层、端口、用 TCP 还是 UDP。</p>',
  exam: '<p><b>考纲定位:</b>综合知识送分。重点:端口号、TCP/UDP归属。</p>',
  core: '<table><tr><th>协议</th><th>端口</th><th>传输层</th></tr>' +
    '<tr><td>HTTP/HTTPS</td><td>80/443</td><td>TCP</td></tr>' +
    '<tr><td>FTP</td><td>20/21</td><td>TCP</td></tr>' +
    '<tr><td>DNS</td><td>53</td><td>UDP(查询)</td></tr>' +
    '<tr><td>DHCP</td><td>67/68</td><td>UDP</td></tr>' +
    '<tr><td>SMTP/POP3</td><td>25/110</td><td>TCP</td></tr></table>' +
    '<div class="ex">TCP可靠面向连接(三次握手),UDP快无连接(DNS/视频)。</div>',
  pitfalls: '<div class="pit"><b>误解:DNS只用TCP。</b>常规查询用<b>UDP(53)</b>;HTTPS端口是<b>443</b>不是80。</div>',
  quiz: [
    { type: 'choice', q: 'HTTPS默认端口是?', options: ['80', '443', '8080', '21'], answer: 1, source: '高频', explain: 'HTTPS默认443。' }
  ],
  links: '<p>上一课:<a href="#/l/net/01-model">OSI/TCP-IP</a> · 下一课:<a href="#/l/net/03-addressing">IP与子网</a></p>'
});
