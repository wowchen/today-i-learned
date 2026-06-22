SAD.registerLesson({
  id: 'net/05-storage',
  module: 'net',
  order: 5,
  title: '网络存储 DAS / NAS / SAN',
  minutes: 4,
  keywords: ['网络存储', 'DAS', 'NAS', 'SAN', '块级', '文件级'],
  concept: '<p>存储怎么连给服务器用,有三种模式:<b>DAS 直连、NAS 文件级共享、<gd data-term="san">SAN 块级专网</gd></b>。架构设计选存储时常考。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:三者访问方式与适用场景。</p>',
  core: '<table><tr><th>类型</th><th>连接</th><th>访问粒度</th><th>适用</th></tr>' +
    '<tr><td>DAS</td><td>直连服务器</td><td>块级</td><td>单机、简单</td></tr>' +
    '<tr><td>NAS</td><td>以太网</td><td>文件级(NFS/CIFS)</td><td>文件共享</td></tr>' +
    '<tr><td>SAN</td><td>专用高速网(FC/IP)</td><td>块级</td><td>数据库、高性能</td></tr></table>' +
    '<div class="ex">一句话:NAS 像"网络共享文件夹"(文件级),SAN 像"通过专网挂载的裸盘"(块级,性能高)。</div>',
  pitfalls: '<div class="pit"><b>误解:NAS 和 SAN 一样。</b>NAS 是<b>文件级</b>共享走普通以太网;SAN 是<b>块级</b>走专用高速网,性能与成本都更高。</div>',
  quiz: [
    { type: 'choice', q: '提供块级访问、性能高、适合数据库的网络存储是?', options: ['DAS', 'NAS', 'SAN', 'U盘'], answer: 2, source: '高频', explain: 'SAN提供块级访问、走专用高速网,适合数据库等高性能场景。' }
  ],
  links: '<p>上一课:<a href="#/l/net/04-networking">组网设备</a> · 下一课:<a href="#/l/net/06-planning">网络规划与设计</a> · 相关:<a href="#/l/comp/06-raid">RAID</a></p>'
});
