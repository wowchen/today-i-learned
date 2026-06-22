SPM.registerLesson({
  id: 'net/01-model',
  module: 'net',
  order: 1,
  title: '网络模型:OSI 与 TCP/IP',
  minutes: 5,
  keywords: ['OSI', 'TCP/IP', '七层', '四层', '封装'],
  concept: '<p>网络分层便于理解与排障。<b>OSI 七层</b>(物理/数据链路/网络/传输/会话/表示/应用)是参考模型,<b>TCP/IP 四层</b>(网络接口/网际/传输/应用)是事实标准。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题常考层次与对应协议。</p>',
  core: '<ul>' +
    '<li><b>记忆</b>:物-数-网-传-会-表-应(自下而上)。</li>' +
    '<li><b>层次与设备</b>:物理层→中继器/集线器;数据链路层→交换机;网络层→路由器。</li>' +
    '<li><b>排障思路</b>:从下往上分层定位(网线→IP→端口→应用)。</li>' +
    '</ul>' +
    '<div class="ex">运维定位故障常用"分层法":先看物理连通,再看 IP,再看服务端口。</div>',
  pitfalls: '<div class="pit"><b>OSI 是参考模型,实际用的是 TCP/IP。</b>考试两者都问,别混层数。</div>',
  quiz: [
    { type: 'choice', q: '路由器主要工作在 OSI 的哪一层?', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 2, source: '高频', explain: '路由器基于 IP 选路,工作在网络层。' }
  ],
  links: '<p>下一课:<a href="#/l/net/02-protocol">常见协议</a></p>'
});
