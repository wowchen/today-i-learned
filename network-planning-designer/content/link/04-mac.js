NPD.registerLesson({
  id: 'link/04-mac',
  module: 'link',
  order: 4,
  title: 'MAC 子层:谁先用信道',
  minutes: 4,
  keywords: ['MAC', 'CSMA/CD', 'CSMA/CA', '争用', '以太网', '无线'],
  concept: '<p>多台设备共享一条信道,得定"谁先发"的规矩——这就是 <b>MAC 子层</b>(介质访问控制)。</p>' +
    '<div class="ex">有线以太网用 <gd data-term="csma-cd">CSMA/CD</gd>(检测冲突),无线用 <gd data-term="csma-ca">CSMA/CA</gd>(避免冲突)。</div>',
  exam: '<p><b>频度:高。</b>常考 CSMA/CD 流程、二者区别、冲突域。</p>',
  core: '<p><b>CSMA/CD(有线以太网):</b></p>' +
    '<ol><li><b>发前先听</b>(载波监听),信道空才发。</li>' +
    '<li><b>边发边听</b>(冲突检测),发现冲突立即停发。</li>' +
    '<li><b>发干扰信号</b>,强化冲突让各方都知。</li>' +
    '<li><b>二进制指数退避</b>随机等待后重发。</li></ol>' +
    '<p><b>CSMA/CA(无线):</b>因无线难"边发边听",改用<b>发前预约+退避尽量避免</b>冲突(RTS/CTS、IFS、退避)。</p>' +
    '<p><b>冲突域:</b>共享同一信道、可能互相冲突的范围;交换机每个端口一个冲突域,集线器整网一个冲突域。</p>' +
    '<p class="ex">CSMA/CD 要求<b>帧足够长</b>能在发完前检测到冲突——这与最小帧长、网络直径相关。</p>',
  pitfalls: '<div class="pit"><b>易混:CD 检测 vs CA 避免。</b>有线能检测冲突(发时听),无线做不到,只能提前避免。</div>' +
    '<div class="pit"><b>易混:冲突域 vs 广播域。</b>冲突域是"二层共享信道范围";广播域是"广播帧可达范围",路由器分割广播域。</div>',
  quiz: [
    { type: 'choice', q: '以太网 CSMA/CD 发生冲突后的处理是?', options: ['继续发完', '立即停发并二进制指数退避', '切换信道', '请求重传'], answer: 1, source: '基础', explain: '检测到冲突即停发、发干扰、退避重发。' },
    { type: 'choice', q: '无线局域网为何用 CSMA/CA 而非 CD?', options: ['无线无冲突', '无线难以边发边检测冲突', '无线速度慢', '无线无需监听'], answer: 1, source: '理解', explain: '无线难在发送时检测冲突,故改避免冲突。' },
    { type: 'choice', q: '下列设备中,每个端口构成一个独立冲突域的是?', options: ['集线器', '中继器', '交换机', '网桥(单口)'], answer: 2, source: '基础', explain: '交换机每个端口隔离冲突域。' }
  ],
  links: '<p>上一课:<a href="#/l/link/03-flow-control">流量控制</a> · 下一课:<a href="#/l/link/05-ppp">PPP/HDLC</a> · 以太网细节:<a href="#/l/lan/01-ethernet">以太网</a></p>'
});
