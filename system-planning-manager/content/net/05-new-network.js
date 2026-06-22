SPM.registerLesson({
  id: 'net/05-new-network',
  module: 'net',
  order: 5,
  title: '新型网络:SDN、5G 与软件定义',
  minutes: 4,
  keywords: ['SDN', '5G', 'SD-WAN', '软件定义'],
  concept: '<p>网络正走向"软件定义":<b>SDN</b> 把控制与转发分离、集中编排;<b>5G</b> 带来高带宽低时延;<b>SD-WAN</b> 智能调度广域链路。</p>',
  exam: '<p><b>考纲定位:</b>新技术了解题。</p>',
  core: '<ul>' +
    '<li><b>SDN</b>:控制面与数据面解耦,网络可编程、易自动化。</li>' +
    '<li><b>5G 三大场景</b>:增强移动宽带(eMBB)、海量物联(mMTC)、低时延高可靠(uRLLC)。</li>' +
    '<li>这些新网络让服务对象更多样,运维更依赖<gd data-term="aiops">自动化与智能</gd>。</li>' +
    '</ul>' +
    '<div class="ex">软件定义的好处对运维很实在:配置可编程、可批量、可回滚。</div>',
  pitfalls: '<div class="pit"><b>SDN 的核心是"控制与转发分离"</b>,不是"无线网络",别和 5G 概念混。</div>',
  quiz: [
    { type: 'choice', q: 'SDN 的核心思想是?', options: ['无线传输', '控制面与转发面分离', '加密通信', '光纤入户'], answer: 1, source: '高频', explain: 'SDN 解耦控制与转发,实现集中可编程。' }
  ],
  links: '<p>上一课:<a href="#/l/net/04-devices">网络设备</a> · 下一篇:<a href="#/l/db/01-model">数据库模型</a></p>'
});
