SAD.registerLesson({
  id: 'net/01-model',
  module: 'net',
  order: 1,
  title: '网络体系结构 OSI / TCP-IP',
  minutes: 5,
  key: true,
  keywords: ['OSI', 'TCP/IP', '七层', '四层', '分层', '协议'],
  concept: '<p>网络通信用<b>分层</b>把复杂问题拆开。理论参考是 <gd data-term="osi">OSI 七层</gd>,实际跑的是 <gd data-term="tcpip">TCP/IP 四层</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:七层顺序、各层典型协议与设备。</p>',
  core: '<table><tr><th>OSI层</th><th>典型协议/设备</th></tr>' +
    '<tr><td>应用/表示/会话</td><td>HTTP、FTP、DNS</td></tr>' +
    '<tr><td>传输</td><td>TCP、UDP</td></tr>' +
    '<tr><td>网络</td><td>IP、路由器</td></tr>' +
    '<tr><td>数据链路</td><td>以太网、交换机</td></tr>' +
    '<tr><td>物理</td><td>网线、集线器</td></tr></table>' +
    '<div class="ex">记七层口诀:"物链网传会表应"。设备对应:物理层集线器、链路层交换机、网络层路由器。</div>',
  pitfalls: '<div class="pit"><b>误解:交换机工作在网络层。</b>普通交换机在<b>数据链路层</b>(按MAC转发);路由器才在网络层(按IP转发)。三层交换机例外。</div>',
  quiz: [
    { type: 'choice', q: '路由器主要工作在OSI的哪一层?', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 2, source: '高频', explain: '路由器按IP转发,工作在网络层。' },
    { type: 'choice', q: 'TCP与UDP同属OSI的?', options: ['网络层', '传输层', '会话层', '应用层'], answer: 1, source: '高频', explain: 'TCP/UDP是传输层协议。' }
  ],
  links: '<p>下一课:<a href="#/l/net/02-protocol">常见协议与端口</a></p>'
});
