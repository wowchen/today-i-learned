SAD.registerLesson({
  id: 'mid/02-soa',
  module: 'mid',
  order: 2,
  title: 'SOA 面向服务架构',
  minutes: 5,
  key: true,
  keywords: ['SOA', '服务', '松耦合', '可复用', '标准接口', '服务治理'],
  concept: '<p><gd data-term="soa">SOA</gd> 把系统能力拆成一个个<b>松耦合、可复用、标准接口</b>的服务,通过组合服务来构建应用,常借 ESB 集成。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:SOA 特征、与微服务的区别。</p>',
  core: '<p><b>SOA 核心特征:</b>松耦合、粗粒度、标准化接口、可复用、可组合、自治。</p>' +
    '<table><tr><th>对比</th><th>SOA</th><th>微服务</th></tr>' +
    '<tr><td>粒度</td><td>较粗</td><td>更细</td></tr>' +
    '<tr><td>集成</td><td>常用ESB(中心化)</td><td>去中心化、轻量(API/消息)</td></tr>' +
    '<tr><td>数据</td><td>常共享</td><td>每服务独立数据库</td></tr></table>' +
    '<div class="ex">可以把微服务看作 SOA 思想的"更细粒度、更去中心化"的演进版。</div>',
  pitfalls: '<div class="pit"><b>误解:SOA=微服务。</b>两者都"面向服务",但微服务<b>粒度更细、去中心化、每服务独立数据库</b>,SOA 常用中心化 ESB 且服务较粗。</div>',
  quiz: [
    { type: 'choice', q: 'SOA中常用于服务集成、负责路由与协议转换的是?', options: ['CDN', 'ESB', 'RAID', 'DNS'], answer: 1, source: '高频', explain: 'ESB(企业服务总线)是SOA的集成枢纽。' }
  ],
  links: '<p>上一课:<a href="#/l/mid/01-middleware">中间件</a> · 下一课:<a href="#/l/mid/03-webservice">Web Service</a> · 论文主题:<a href="#/l/essay/08-topic-microservice">中间件与微服务</a></p>'
});
