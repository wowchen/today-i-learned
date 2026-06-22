SAD.registerLesson({
  id: 'mid/04-esb',
  module: 'mid',
  order: 4,
  title: 'ESB 企业服务总线',
  minutes: 4,
  keywords: ['ESB', '企业服务总线', '路由', '协议转换', '消息中转', 'SOA集成'],
  concept: '<p><gd data-term="esb">ESB</gd> 是 SOA 的集成枢纽:各服务都接到这条"总线"上,由它负责<b>消息路由、协议转换、数据格式转换、中转</b>,实现服务解耦集成。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:ESB核心功能、其"中心化"的利弊。</p>',
  core: '<p><b>ESB 主要能力:</b>路由、协议转换(如 SOAP↔REST)、消息转换、消息中转、服务编排、监控。</p>' +
    '<div class="ex">有了 ESB,服务 A 不必知道服务 B 的位置和协议,只管把消息丢上总线;总线负责送达并做必要转换。降低了"点对点"集成的复杂度(N² → N)。</div>',
  pitfalls: '<div class="pit"><b>误解:ESB没有缺点。</b>ESB 是<b>中心化</b>枢纽,可能成为<b>性能瓶颈和单点</b>;微服务因此倾向去中心化的轻量通信替代重 ESB。</div>',
  quiz: [
    { type: 'choice', q: 'ESB的核心作用不包括?', options: ['消息路由', '协议/数据格式转换', '服务集成中转', '编写业务代码'], answer: 3, source: '高频', explain: 'ESB负责路由、转换、中转集成,不负责业务逻辑实现。' }
  ],
  links: '<p>上一课:<a href="#/l/mid/03-webservice">Web Service</a> · 下一课:<a href="#/l/mid/05-microservice">微服务架构</a></p>'
});
