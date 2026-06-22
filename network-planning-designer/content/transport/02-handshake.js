NPD.registerLesson({
  id: 'transport/02-handshake',
  module: 'transport',
  order: 2,
  title: '三次握手与四次挥手',
  minutes: 5,
  key: true,
  keywords: ['三次握手', '四次挥手', 'SYN', 'ACK', 'FIN', '连接建立', '连接释放'],
  concept: '<p>TCP 建连接用<b><gd data-term="three-handshake">三次握手</gd></b>,断连接用<b>四次挥手</b>——都是状态机式的可靠协商。</p>' +
    '<div class="ex">建连"三步对暗号",断连"四步确认双方都没数据了"。</div>',
  exam: '<p><b>频度:高。</b>必考握手/挥手流程、各报文标志位、为何三次/四次。</p>',
  core: '<p><b>三次握手(建连):</b></p>' +
    '<ol>' +
    '<li>客户端→服务端:<b>SYN</b>,seq=x(请求建立)。</li>' +
    '<li>服务端→客户端:<b>SYN+ACK</b>,seq=y,ack=x+1(确认并请求)。</li>' +
    '<li>客户端→服务端:<b>ACK</b>,ack=y+1(确认),连接建立。</li>' +
    '</ol>' +
    '<p><b>四次挥手(断连):</b></p>' +
    '<ol>' +
    '<li>主动方→被动方:<b>FIN</b>(我发完了)。</li>' +
    '<li>被动方→主动方:<b>ACK</b>(收到;但我可能还有数据)。</li>' +
    '<li>被动方→主动方:<b>FIN</b>(我也发完了)。</li>' +
    '<li>主动方→被动方:<b>ACK</b>(确认),经 TIME_WAIT 后关闭。</li>' +
    '</ol>' +
    '<p class="ex">为何建连三次、断连四次?断连时被动方收到 FIN 后可能还有数据要发,所以 ACK 与 FIN 分两次——故四次。</p>',
  pitfalls: '<div class="pit"><b>易错:第三次握手是 ACK 不是 SYN。</b>且 seq 与 ack 别混:第三步 ack=y+1。</div>' +
    '<div class="pit"><b>易混:为何三次而非两次。</b>两次无法确认"服务端的 SYN 客户端收到了";三次确保双向收发能力都确认。</div>' +
    '<div class="pit"><b>考点:TIME_WAIT。</b>主动关闭方发最后 ACK 后等一段时间(2MSL),确保对方收到 ACK 且旧报文消亡。</div>',
  quiz: [
    { type: 'choice', q: 'TCP 三次握手第二步发送的报文是?', options: ['SYN', 'ACK', 'SYN+ACK', 'FIN'], answer: 2, source: '基础', explain: '第二步 SYN+ACK。' },
    { type: 'choice', q: 'TCP 断连通常采用几次挥手?', options: ['两次', '三次', '四次', '五次'], answer: 2, source: '基础', explain: '四次挥手。' },
    { type: 'choice', q: 'TCP 采用三次握手而非两次的主要原因是?', options: ['节省一次报文', '确认双方收发能力均正常', '加密需要', '减少延迟'], answer: 1, source: '理解', explain: '三次确保双向收发能力都确认,防止失效连接请求。' }
  ],
  links: '<p>上一课:<a href="#/l/transport/01-tcp-udp">TCP/UDP</a> · 下一课:<a href="#/l/transport/03-flow-congestion">流量与拥塞控制</a></p>'
});
