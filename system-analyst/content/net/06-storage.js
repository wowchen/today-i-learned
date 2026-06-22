SAN.registerLesson({
  id: 'net/06-storage',
  module: 'net',
  order: 6,
  title: '网络存储与新型网络',
  minutes: 4,
  keywords: ['DAS', 'NAS', 'SAN', '块级', '文件级', '软件定义网络', 'SDN'],
  concept: '<p>存储连给服务器有三种:<b>DAS 直连、NAS 文件级共享、SAN 块级专网</b>。新型网络有 SDN(软件定义网络,控制与转发分离)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:三种存储访问方式、SDN 思想。</p>',
  core: '<table><tr><th>类型</th><th>访问粒度</th><th>适用</th></tr>' +
    '<tr><td>DAS</td><td>块级直连</td><td>单机</td></tr>' +
    '<tr><td>NAS</td><td>文件级(走以太网)</td><td>文件共享</td></tr>' +
    '<tr><td>SAN</td><td>块级(专用高速网)</td><td>数据库、高性能</td></tr></table>' +
    '<div class="ex">NAS像网络共享文件夹,SAN像通过专网挂载的裸盘。SDN把网络的"控制平面"与"转发平面"分离,集中可编程管理。</div>',
  pitfalls: '<div class="pit"><b>误解:NAS和SAN一样。</b>NAS是文件级走普通以太网;SAN是块级走专用高速网,性能成本更高。</div>',
  quiz: [
    { type: 'choice', q: '提供块级访问、适合数据库的网络存储是?', options: ['DAS', 'NAS', 'SAN', 'U盘'], answer: 2, source: '高频', explain: 'SAN块级、走专网,适合高性能。' }
  ],
  links: '<p>基础篇全部完成!进入核心篇:<a href="#/l/se/01-process">软件过程模型</a></p>'
});
