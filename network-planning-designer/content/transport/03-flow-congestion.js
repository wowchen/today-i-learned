NPD.registerLesson({
  id: 'transport/03-flow-congestion',
  module: 'transport',
  order: 3,
  title: '流量控制与拥塞控制',
  minutes: 5,
  keywords: ['流量控制', '拥塞控制', '滑动窗口', '慢启动', '拥塞避免', '快重传快恢复'],
  concept: '<p>TCP 有两个"控速":<b>流量控制</b>(别压垮接收方)与<b><gd data-term="congestion-control">拥塞控制</gd></b>(别压垮网络)。</p>' +
    '<div class="ex">前者由接收方"说了算"(通告窗口),后者由发送方"自觉"(感知网络拥塞后退避)。</div>',
  exam: '<p><b>频度:高。</b>常考滑动窗口、拥塞控制四算法、窗口大小变化。</p>',
  core: '<p><b>流量控制——滑动窗口:</b></p>' +
    '<ul>' +
    '<li>接收方在 ACK 中通告"接收窗口 rwnd",发送方据此限速。</li>' +
    '<li>窗口滑动:收到确认后窗口前移,可发数据推进。</li>' +
    '</ul>' +
    '<p><b>拥塞控制——四算法:</b></p>' +
    '<ul>' +
    '<li><b>慢启动</b>:cwnd 从 1 指数增长(每 RTT 翻倍),到阈值 ssthresh 转拥塞避免。</li>' +
    '<li><b>拥塞避免</b>:cwnd 线性增长(每 RTT +1),缓慢试探。</li>' +
    '<li><b>快重传</b>:收到 3 个重复 ACK 立即重传,不等超时。</li>' +
    '<li><b>快恢复</b>:快重传后 cwnd 减半(不到 1),线性恢复,而非回到慢启动。</li>' +
    '</ul>' +
    '<p class="ex">实际发送窗口 = min(rwnd, cwnd)——接收能力与网络能力,取较紧者。</p>',
  pitfalls: '<div class="pit"><b>易混:流量控制 vs 拥塞控制。</b>流量控制是端到端、保护接收方(通告窗口);拥塞控制是网络感知、保护网络(cwnd)。</div>' +
    '<div class="pit"><b>易错:慢启动是"指数增长"不是"慢"。</b>"慢"指起点小(从 1 开始),但增长很快(指数)。</div>' +
    '<div class="pit"><b>易错:快重传触发条件。</b>三个重复 ACK 触发快重传;超时才回到慢启动(cwnd=1)。</div>',
  quiz: [
    { type: 'choice', q: 'TCP 流量控制采用的机制是?', options: ['慢启动', '滑动窗口(接收方通告)', '快重传', '超时重传'], answer: 1, source: '基础', explain: '流量控制靠接收方通告窗口。' },
    { type: 'choice', q: '慢启动阶段拥塞窗口的增长方式是?', options: ['线性增长', '指数增长', '不变', '随机'], answer: 1, source: '基础', explain: '慢启动指数增长(每 RTT 翻倍)。' },
    { type: 'choice', q: '触发"快重传"的条件是?', options: ['超时', '收到 3 个重复 ACK', '窗口为 0', '收到 FIN'], answer: 1, source: '基础', explain: '3 个重复 ACK 触发快重传。' }
  ],
  links: '<p>上一课:<a href="#/l/transport/02-handshake">三次握手</a> · 下一课:<a href="#/l/transport/04-port-socket">端口与套接字</a></p>'
});
