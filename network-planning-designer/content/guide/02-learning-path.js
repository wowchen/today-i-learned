NPD.registerLesson({
  id: 'guide/02-learning-path',
  module: 'guide',
  order: 2,
  title: '学习路线:从信号到一张完整网络',
  minutes: 4,
  keywords: ['学习路线', '自底向上', '基础→核心→进阶→实战'],
  concept: '<p>网络知识天然<b>分层</b>:下层是上层的地基。所以本站按"<b>自底向上 + 规划收口</b>"组织,四段递进。</p>' +
    '<div class="ex">主线:信号怎么传 → 分层怎么包 → 各层协议 → 设备连成网 → 规划设计一张网。</div>',
  exam: '<p>本课帮你建立<b>知识地图</b>,不直接出题,但决定你答题时能否快速定位知识点。</p>',
  core: '<p><b>四段路线:</b></p>' +
    '<ol>' +
    '<li><b>基础(信号/体系/物理/链路):</b>数据通信、<gd data-term="osi">OSI</gd> 与 <gd data-term="tcpip">TCP/IP</gd>、传输介质、成帧差错。打地基。</li>' +
    '<li><b>核心(IP/路由/传输/应用/局域网/广域网/设备):</b>这是<b>考试主体</b>。<gd data-term="ipv4">IPv4</gd>/<gd data-term="subnet">子网划分</gd>、<gd data-term="ospf">OSPF</gd>/<gd data-term="bgp">BGP</gd>、TCP/UDP、DNS/DHCP、交换机路由器。</li>' +
    '<li><b>进阶(安全/无线/存储/新一代/规划/运维/标准):</b>网络规划与设计是<b>案例论文主战场</b>,安全与 SDN/NFV 为高频考点。</li>' +
    '<li><b>实战(案例 + 论文):</b>子网计算、路由交换分析、网络规划设计大题、论文模板。</li>' +
    '</ol>' +
    '<div class="ex">若时间紧,优先吃透"核心 + 规划设计 + 案例计算",这三块决定通过率。</div>',
  pitfalls: '<div class="pit"><b>误区:从头啃到尾平均用力。</b>网络内容极广,应把<b>七成时间</b>给"IP与子网、路由、规划设计、安全"。</div>' +
    '<div class="pit"><b>误区:重理论轻计算。</b>子网划分、信道容量、可靠度计算是<b>案例必考计算</b>,要手算熟练。</div>',
  quiz: [
    { type: 'choice', q: '下列哪组同属"核心"且为考试主体?', options: ['OSI、信号、布线', 'IPv4子网、OSPF、交换机路由器', 'SDN、NFV、机房电源', '知识产权、专业英语'], answer: 1, source: '理解', explain: 'IP/子网、路由协议、互连设备是核心主体。' },
    { type: 'fill', q: '本站主线最后由"规划与设计"____一张完整网络。(两字动词)', answer: ['收口', '收拢'], source: '理解', explain: '规划与设计把前面所有知识"收口"成一张可落地的网络。' }
  ],
  links: '<p>下一课:<a href="#/l/guide/03-strategy">备考策略</a> · 开始基础:<a href="#/l/comm/01-signal">信号</a></p>'
});
