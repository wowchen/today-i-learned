NPD.registerLesson({
  id: 'arch/04-compare',
  module: 'arch',
  order: 4,
  title: 'OSI 与 TCP/IP 对比',
  minutes: 3,
  keywords: ['OSI', 'TCP/IP', '对比', '异同'],
  concept: '<p>两套模型都分层,但 OSI 偏理论标准,TCP/IP 是工程实用、真正跑互联网的。</p>' +
    '<div class="ex">记核心差异:层数(7 vs 4)、服务(面向连接 vs 皆可)、地位(理论 vs 事实标准)。</div>',
  exam: '<p><b>频度:中。</b>常以选择题考两模型异同。</p>',
  core: '<p><b>主要异同:</b></p>' +
    '<table><tr><th>维度</th><th>OSI</th><th>TCP/IP</th></tr>' +
    '<tr><td>层数</td><td>7 层</td><td>4 层</td></tr>' +
    '<tr><td>出现</td><td>先有模型</td><td>先有协议再有模型</td></tr>' +
    '<tr><td>传输层</td><td>仅面向连接</td><td>TCP 连接 + UDP 无连接</td></tr>' +
    '<tr><td>网络层</td><td>无连接+面向连接两套</td><td>无连接(IP)</td></tr>' +
    '<tr><td>地位</td><td>理论参考</td><td>互联网事实标准</td></tr></table>' +
    '<p class="ex">对应关系:OSI 上三层(会话/表示/应用)→ TCP/IP 应用层;物理+链路 → 网络接口层。</p>',
  pitfalls: '<div class="pit"><b>易错:别记反。</b>OSI 传输层"只有面向连接"是教科书简化说法;TCP/IP 传输层同时有 TCP(连接)与 UDP(无连接)。</div>' +
    '<div class="pit"><b>易错:OSI 网络层支持两类服务</b>(无连接与面向连接),TCP/IP 网际层只有无连接的 IP。</div>',
  quiz: [
    { type: 'choice', q: '关于两模型正确的是?', options: ['OSI 是事实标准', 'TCP/IP 先有模型后有协议', 'OSI 7 层、TCP/IP 4 层', '两者层数相同'], answer: 2, source: '基础', explain: 'OSI 七层、TCP/IP 四层。' },
    { type: 'choice', q: 'TCP/IP 传输层同时支持的两种服务是?', options: ['面向连接与无连接', '电路交换与分组交换', '同步与异步', '有线与无线'], answer: 0, source: '理解', explain: 'TCP(连接)+UDP(无连接)。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/03-layering-encap">分层与封装</a> · 进入物理层:<a href="#/l/phy/01-medium-copper">铜缆介质</a></p>'
});
