ISPM.registerLesson({
  id: 'infra/02-network-architecture',
  module: 'infra',
  order: 2,
  title: '网络架构与组网',
  minutes: 4,
  keywords: ['局域网', '广域网', 'SDN', '网络拓扑', 'VPN', '5G'],
  concept: '<p>网络按覆盖范围分局域网、广域网；按管理方式有传统网络和软件定义网络（SDN）。本课了解常见网络类型和新型组网技术。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解 LAN/WAN、SDN、VPN 概念。</p>',
  core: '<p><b>按覆盖范围分类：</b></p>' +
    '<ul><li><b>局域网（LAN）</b>：小范围（一栋楼、一个园区），速度快。</li>' +
    '<li><b>城域网（MAN）</b>：城市范围。</li>' +
    '<li><b>广域网（WAN）</b>：大范围（跨城市、跨国），如互联网。</li></ul>' +
    '<p><b>SDN（软件定义网络）：</b>把网络的<em>控制平面</em>（决策）和<em>数据平面</em>（转发）分离，用软件集中控制网络，灵活可编程。是网络发展的重要方向。</p>' +
    '<p><b>VPN（虚拟专用网络）：</b>在公共网络上建立加密的"专用隧道"，安全地连接远程用户或分支机构。</p>' +
    '<p><b>5G 三大场景：</b>eMBB（增强移动宽带，高速率）、uRLLC（超可靠低时延，如自动驾驶）、mMTC（海量机器通信，如物联网）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：SDN 就是无线网络。</b> SDN 是<em>软件定义网络</em>——核心是控制与转发分离、集中可编程控制，与有线无线无关。</div>' +
    '<div class="pit"><b>误解 2：VPN 只是翻墙工具。</b> VPN 的本质是在公网上建立加密隧道，实现安全的远程接入和专网互联，企业广泛用于远程办公和分支互联。</div>',
  quiz: [
    {
      type: 'choice',
      q: '将网络的控制平面与数据转发平面分离、通过软件集中控制网络的技术是：',
      options: ['VPN', 'SDN', 'VLAN', 'NAT'],
      answer: 1,
      explain: 'SDN（软件定义网络）将控制平面与数据平面分离，实现网络的集中化、可编程控制，提高网络的灵活性和可管理性。'
    },
    {
      type: 'choice',
      q: '5G 的三大应用场景中，面向自动驾驶等对时延和可靠性要求极高的场景是：',
      options: ['eMBB（增强移动宽带）', 'uRLLC（超可靠低时延）', 'mMTC（海量机器通信）', 'VPN'],
      answer: 1,
      explain: 'uRLLC（超可靠低时延通信）面向自动驾驶、工业控制等对时延和可靠性要求极高的场景。eMBB面向高速率，mMTC面向海量物联网连接。'
    }
  ],
  links: '<p>上一课：<a href="#/l/infra/01-network-basics">网络基础与 OSI 模型</a> · 下一课：<a href="#/l/infra/03-storage-tech">存储技术</a></p>'
});
