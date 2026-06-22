NPD.registerLesson({
  id: 'transport/01-tcp-udp',
  module: 'transport',
  order: 1,
  title: 'TCP 与 UDP:可靠 vs 高效',
  minutes: 4,
  key: true,
  keywords: ['TCP', 'UDP', '面向连接', '可靠', '无连接', '对比'],
  concept: '<p>传输层在端到端提供进程间通信,两大主角:<b><gd data-term="tcp">TCP</gd></b>(可靠面向连接)与 <b><gd data-term="udp">UDP</gd></b>(无连接高效)。</p>' +
    '<div class="ex">TCP 像"挂号信",保证送达、顺序不错;UDP 像"明信片",快但丢了自己负责。</div>',
  exam: '<p><b>频度:高。</b>必考两者区别、适用协议归属。</p>',
  core: '<p><b>TCP vs UDP 对比:</b></p>' +
    '<table><tr><th>维度</th><th>TCP</th><th>UDP</th></tr>' +
    '<tr><td>连接</td><td>面向连接(三次握手)</td><td>无连接</td></tr>' +
    '<tr><td>可靠性</td><td>可靠(确认/重传/排序)</td><td>不可靠</td></tr>' +
    '<tr><td>流量/拥塞控制</td><td>有</td><td>无</td></tr>' +
    '<tr><td>首部开销</td><td>20 字节</td><td>8 字节</td></tr>' +
    '<tr><td>传输形式</td><td>字节流</td><td>数据报</td></tr>' +
    '<tr><td>典型协议</td><td>HTTP/FTP/SMTP/SSH</td><td>DNS/DHCP/视频/语音</td></tr></table>' +
    '<p class="ex">选择依据:要可靠用 TCP(网页/邮件/文件);要实时/低开销用 UDP(查询/流媒体/语音)。</p>',
  pitfalls: '<div class="pit"><b>易错:DNS 既用 UDP 也用 TCP。</b>常规查询用 UDP(快),区域传送或大响应用 TCP——别一刀切。</div>' +
    '<div class="pit"><b>易混:TCP 字节流 vs UDP 数据报。</b>TCP 是字节流(无消息边界),UDP 保留报文边界。</div>',
  quiz: [
    { type: 'choice', q: '下列协议使用 TCP 的是?', options: ['DNS 查询', 'DHCP', 'HTTP', 'SNMP'], answer: 2, source: '基础', explain: 'HTTP 基于 TCP。' },
    { type: 'choice', q: '关于 TCP 与 UDP 正确的是?', options: ['UDP 面向连接', 'TCP 首部 8 字节', 'TCP 可靠、UDP 不可靠', '两者都做拥塞控制'], answer: 2, source: '基础', explain: 'TCP 可靠、UDP 不可靠。' },
    { type: 'choice', q: '下列最适合用 UDP 的是?', options: ['文件传输', '电子邮件', '实时语音通话', '银行转账'], answer: 2, source: '场景', explain: '实时语音优先低延迟,用 UDP。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/06-selection">路由选路</a> · 下一课:<a href="#/l/transport/02-handshake">三次握手</a></p>'
});
