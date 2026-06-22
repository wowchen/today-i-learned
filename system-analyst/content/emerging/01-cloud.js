SAN.registerLesson({
  id: 'emerging/01-cloud',
  module: 'emerging',
  order: 1,
  title: '云计算',
  minutes: 4,
  key: true,
  keywords: ['云计算', 'IaaS', 'PaaS', 'SaaS', '弹性', '公有云'],
  concept: '<p><gd data-term="cloud-computing">云计算</gd>按需获取弹性计算资源,分 <b>IaaS/PaaS/SaaS</b>,部署分公有/私有/混合云。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:三种服务模式边界。</p>',
  core: '<table><tr><th>模式</th><th>提供</th><th>类比</th></tr>' +
    '<tr><td>IaaS</td><td>虚拟机/存储/网络</td><td>租毛坯房</td></tr>' +
    '<tr><td>PaaS</td><td>开发运行平台</td><td>租精装房</td></tr>' +
    '<tr><td>SaaS</td><td>开箱即用软件</td><td>住酒店</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:上云一定更便宜更安全。</b>需评估长期成本、数据合规与厂商锁定。</div>',
  quiz: [
    { type: 'choice', q: '提供"开箱即用软件"的云服务模式是?', options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'], answer: 2, source: '高频', explain: 'SaaS直接提供软件。' }
  ],
  links: '<p>下一课:<a href="#/l/emerging/02-bigdata">大数据</a></p>'
});
