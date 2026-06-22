NPD.registerLesson({
  id: 'arch/01-osi',
  module: 'arch',
  order: 1,
  title: 'OSI 七层模型',
  minutes: 5,
  key: true,
  keywords: ['OSI', '七层模型', '物理层', '数据链路层', '网络层', '传输层', '会话层', '表示层', '应用层'],
  concept: '<p><b>OSI 参考模型</b>把网络通信分成七层,自下而上:</p>' +
    '<p><b>物、链、网、传、会、表、应</b>(物理、数据链路、网络、传输、会话、表示、应用)。</p>' +
    '<div class="ex">口诀:"物链网传会表应"。下三层管"怎么传到",上四层管"传什么、给谁"。</div>',
  exam: '<p><b>频度:高。</b>必考七层名称、各层功能与设备/协议归属。属基础送分题。</p>',
  core: '<p><b>七层职责:</b></p>' +
    '<table><tr><th>层</th><th>名称</th><th>职责</th><th>典型设备/协议</th></tr>' +
    '<tr><td>1</td><td>物理</td><td>比特流传输</td><td>中继器、集线器、线缆</td></tr>' +
    '<tr><td>2</td><td>数据链路</td><td>成帧、差错、MAC 寻址</td><td>网桥、交换机</td></tr>' +
    '<tr><td>3</td><td>网络</td><td>寻址与路由</td><td>路由器、IP</td></tr>' +
    '<tr><td>4</td><td>传输</td><td>端到端可靠/不可靠</td><td>TCP/UDP</td></tr>' +
    '<tr><td>5</td><td>会话</td><td>建立/管理会话</td><td>—</td></tr>' +
    '<tr><td>6</td><td>表示</td><td>数据格式转换、加密压缩</td><td>—</td></tr>' +
    '<tr><td>7</td><td>应用</td><td>为应用提供网络服务</td><td>HTTP/DNS/SMTP</td></tr></table>' +
    '<p class="ex">交换机在<b>二层</b>(按 MAC 转发),路由器在<b>三层</b>(按 IP 路由)——常考分界点。</p>',
  pitfalls: '<div class="pit"><b>易混:交换机 vs 路由器层次。</b>普通交换机=二层(MAC),路由器=三层(IP);三层交换机兼具。</div>' +
    '<div class="pit"><b>易混:会话层 vs 表示层。</b>会话层管"会话的建立与同步",表示层管"数据怎么表示(编码/加密/压缩)"。</div>',
  quiz: [
    { type: 'choice', q: 'OSI 模型中路由器工作在?', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 2, source: '基础', explain: '路由器按 IP 路由,工作在网络层。' },
    { type: 'choice', q: '下列哪个属于传输层协议?', options: ['IP', 'TCP', 'HTTP', 'ARP'], answer: 1, source: '基础', explain: 'TCP/UDP 是传输层;IP 网络层,HTTP 应用层。' },
    { type: 'fill', q: 'OSI 七层自下而上:物理、____、网络、传输、会话、表示、应用。(四字)', answer: ['数据链路', '链路'], source: '基础', explain: '第二层为数据链路层。' }
  ],
  links: '<p>上一课:<a href="#/l/comm/05-transmission-media">传输介质</a> · 下一课:<a href="#/l/arch/02-tcpip">TCP/IP 模型</a></p>'
});
