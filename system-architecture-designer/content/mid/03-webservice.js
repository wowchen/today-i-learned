SAD.registerLesson({
  id: 'mid/03-webservice',
  module: 'mid',
  order: 3,
  title: 'Web Service 与 SOAP / REST',
  minutes: 5,
  keywords: ['Web Service', 'SOAP', 'WSDL', 'UDDI', 'REST', 'API'],
  concept: '<p><gd data-term="web-service">Web Service</gd> 是 SOA 的常见实现,让异构系统跨平台互调。两大风格:重量级 <b>SOAP</b>(配 WSDL/UDDI)和轻量级 <b>REST</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:SOAP三件套(SOAP/WSDL/UDDI)、SOAP与REST对比。</p>',
  core: '<table><tr><th>SOAP三件套</th><th>作用</th></tr>' +
    '<tr><td>SOAP</td><td>消息封装协议(XML)</td></tr>' +
    '<tr><td>WSDL</td><td>服务描述(接口说明书)</td></tr>' +
    '<tr><td>UDDI</td><td>服务注册与发现(黄页)</td></tr></table>' +
    '<table><tr><th>对比</th><th>SOAP</th><th>REST</th></tr>' +
    '<tr><td>风格</td><td>重、规范严、XML</td><td>轻、用HTTP动词、多JSON</td></tr>' +
    '<tr><td>适合</td><td>企业级、强事务/安全</td><td>互联网、移动端</td></tr></table>' +
    '<div class="ex">REST 用 HTTP 的 GET/POST/PUT/DELETE 操作"资源",简单高效,是当前互联网 API 的主流。</div>',
  pitfalls: '<div class="pit"><b>误解:REST是一种协议。</b>REST 是一种<b>架构风格</b>(基于HTTP的资源操作约定),不是像SOAP那样的协议。</div>',
  quiz: [
    { type: 'choice', q: 'Web Service中用于"服务描述"的是?', options: ['SOAP', 'WSDL', 'UDDI', 'REST'], answer: 1, source: '高频', explain: 'WSDL描述服务接口;SOAP是消息协议,UDDI是注册发现。' }
  ],
  links: '<p>上一课:<a href="#/l/mid/02-soa">SOA</a> · 下一课:<a href="#/l/mid/04-esb">ESB企业服务总线</a></p>'
});
