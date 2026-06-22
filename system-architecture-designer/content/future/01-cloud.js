SAD.registerLesson({
  id: 'future/01-cloud',
  module: 'future',
  order: 1,
  title: '云计算',
  minutes: 5,
  key: true,
  keywords: ['云计算', 'IaaS', 'PaaS', 'SaaS', '公有云', '私有云', '弹性'],
  concept: '<p><gd data-term="cloud-computing">云计算</gd>按需通过网络获取可弹性伸缩的计算资源。按服务层次分 <b>IaaS / PaaS / SaaS</b>,按部署分公有/私有/混合云。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文高频。重点:三种服务模式的边界、各自用户。</p>',
  core: '<table><tr><th>模式</th><th>提供</th><th>类比</th></tr>' +
    '<tr><td>IaaS</td><td>虚拟机/存储/网络等基础设施</td><td>租毛坯房自己装修</td></tr>' +
    '<tr><td>PaaS</td><td>开发运行平台(免运维底层)</td><td>租精装房直接住</td></tr>' +
    '<tr><td>SaaS</td><td>直接可用的软件</td><td>住酒店,什么都备好</td></tr></table>' +
    '<div class="ex">越往上(SaaS)用户管得越少、越省心;越往下(IaaS)越灵活可控。选型看"想自己管多少"。</div>',
  pitfalls: '<div class="pit"><b>误解:上云一定更便宜更安全。</b>云带来弹性与免运维,但<b>长期大规模成本、数据合规与厂商锁定</b>都需评估,不是无脑省钱。</div>',
  quiz: [
    { type: 'choice', q: '提供"开箱即用软件"(如在线邮箱)的云服务模式是?', options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'], answer: 2, source: '高频', explain: 'SaaS直接提供可用软件。' },
    { type: 'choice', q: '只提供虚拟机、存储、网络等基础设施的是?', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], answer: 0, source: '高频', explain: 'IaaS提供基础设施资源。' }
  ],
  links: '<p>下一课:<a href="#/l/future/02-bigdata">大数据架构</a> · 云原生:<a href="#/l/mid/06-cloud-native">云原生与容器</a></p>'
});
