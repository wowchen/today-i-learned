SAD.registerLesson({
  id: 'net/02-protocol',
  module: 'net',
  order: 2,
  title: '常见协议与端口',
  minutes: 5,
  keywords: ['协议', '端口', 'HTTP', 'DNS', 'TCP', 'UDP', 'DHCP'],
  concept: '<p>协议是通信双方的"约定"。综合知识常考各协议的<b>作用、所属层、默认端口、用 TCP 还是 UDP</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频送分。重点:端口号、TCP/UDP归属、DNS/DHCP作用。</p>',
  core: '<table><tr><th>协议</th><th>作用</th><th>端口</th><th>传输层</th></tr>' +
    '<tr><td>HTTP/HTTPS</td><td>网页</td><td>80 / 443</td><td>TCP</td></tr>' +
    '<tr><td>FTP</td><td>文件传输</td><td>20/21</td><td>TCP</td></tr>' +
    '<tr><td>DNS</td><td>域名解析</td><td>53</td><td>UDP(查询)/TCP</td></tr>' +
    '<tr><td>DHCP</td><td>自动分配IP</td><td>67/68</td><td>UDP</td></tr>' +
    '<tr><td>SMTP/POP3</td><td>邮件发/收</td><td>25 / 110</td><td>TCP</td></tr></table>' +
    '<div class="ex"><b>TCP</b>可靠、面向连接(三次握手)、有序、重传,适合网页/文件;<b>UDP</b>无连接、快、不保证可达,适合DNS/视频/直播。</div>',
  pitfalls: '<div class="pit"><b>误解:DNS只用TCP。</b>DNS常规查询用<b>UDP(53)</b>,区域传送等大数据才用TCP。HTTPS默认端口是<b>443</b>不是80。</div>',
  quiz: [
    { type: 'choice', q: 'HTTPS的默认端口是?', options: ['80', '443', '8080', '21'], answer: 1, source: '高频', explain: 'HTTPS默认443,HTTP默认80。' },
    { type: 'choice', q: '下列通常基于UDP的协议是?', options: ['HTTP', 'FTP', 'DNS常规查询', 'SMTP'], answer: 2, source: '高频', explain: 'DNS常规查询用UDP,效率高。' }
  ],
  links: '<p>上一课:<a href="#/l/net/01-model">OSI/TCP-IP</a> · 下一课:<a href="#/l/net/03-addressing">IP地址与子网划分</a></p>'
});
