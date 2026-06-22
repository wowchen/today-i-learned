NPD.registerLesson({
  id: 'emerging/03-sdwan',
  module: 'emerging',
  order: 3,
  title: 'SD-WAN:软件定义广域网',
  minutes: 3,
  keywords: ['SD-WAN', '广域网', '多链路', '策略选路', '降本', 'Overlay'],
  concept: '<p><b><gd data-term="sdwan">SD-WAN</gd></b>把 SDN 思想用于广域网,集中调度多条链路,按策略选路、降本提速。</p>' +
    '<div class="ex">"广域网也能软件调度"——把专线、宽带、LTE 混用,智能分流。</div>',
  exam: '<p><b>频度:中。</b>常考 SD-WAN 价值、多链路、与 MPLS 对比。</p>',
  core: '<p><b>SD-WAN 要点:</b></p>' +
    '<ul>' +
    '<li><b>多链路混合</b>:把专线(MPLS)、互联网宽带、LTE/5G 等统一纳管。</li>' +
    '<li><b>应用感知选路</b>:按应用类型(语音/视频/普通)与链路质量动态选最优路径。</li>' +
    '<li><b>集中管控</b>:控制器统一下发策略,边缘设备执行。</li>' +
    '<li><b>Overlay</b>:在底层网络上建虚拟隧道,解耦物理链路。</li>' +
    '</ul>' +
    '<p><b>价值:</b>降低对昂贵 MPLS 的依赖、提升带宽与弹性、快速部署分支。</p>' +
    '<p><b>SD-WAN vs 传统专线:</b>传统专线贵且僵化;SD-WAN 混用廉价宽带+智能选路,兼顾成本与体验。</p>' +
    '<p class="ex">典型场景:企业分支机构用 SD-WAN 把门店的宽带与专线智能混用,关键业务走专线、普通走宽带。</p>',
  pitfalls: '<div class="pit"><b>易混:SD-WAN vs MPLS VPN。</b>MPLS 是运营商提供的固定隧道;SD-WAN 是用户侧多链路智能调度,可含 MPLS 但不限于。</div>' +
    '<div class="pit"><b>易错:SD-WAN 是 Overlay。</b>在物理网络之上建虚拟隧道,与底层解耦——这是它能混用多链路的基础。</div>',
  quiz: [
    { type: 'choice', q: 'SD-WAN 的主要价值是?', options: ['提高单链路速率', '多链路智能选路、降本提速', '加密所有流量', '替代局域网'], answer: 1, source: '基础', explain: 'SD-WAN 多链路智能调度。' },
    { type: 'choice', q: 'SD-WAN 相比传统专线 MPLS 的优势是?', options: ['更贵', '可混用廉价宽带、智能选路', '只支持单链路', '无需策略'], answer: 1, source: '理解', explain: '混用多链路降本。' },
    { type: 'choice', q: 'SD-WAN 的网络形态通常是?', options: ['Underlay 改造', 'Overlay 虚拟隧道', '物理直连', '无线广播'], answer: 1, source: '基础', explain: 'SD-WAN 多为 Overlay。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/02-nfv">NFV</a> · 下一课:<a href="#/l/emerging/04-cloud-network">云计算网络</a></p>'
});
