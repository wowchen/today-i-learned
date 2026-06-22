SAD.registerLesson({
  id: 'case/07-web-arch',
  module: 'case',
  order: 7,
  title: 'Web 系统架构案例',
  minutes: 5,
  key: true,
  keywords: ['Web架构', '高并发', '负载均衡', '缓存', '集群', '安全', '案例'],
  concept: '<p>Web 架构是案例常客:给一个网站,要你针对<b>高并发、高可用、安全</b>给出架构方案。本课给一套"万能答题骨架"。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文超高频。重点:分层方案 + 各质量属性对应措施。</p>',
  core: '<p><b>Web 架构答题骨架(按质量属性给措施):</b></p>' +
    '<table><tr><th>目标</th><th>措施</th></tr>' +
    '<tr><td>高性能/高并发</td><td>CDN、<gd data-term="load-balance">负载均衡</gd>+应用集群、缓存、读写分离、异步/消息队列</td></tr>' +
    '<tr><td>高可用</td><td>多机冗余、故障转移、限流熔断降级、多机房</td></tr>' +
    '<tr><td>可扩展</td><td>无状态化、水平扩展、<gd data-term="microservice">微服务</gd>拆分</td></tr>' +
    '<tr><td>安全</td><td>WAF、HTTPS、鉴权、防注入/XSS、DDoS清洗</td></tr></table>' +
    '<div class="ex">答题模板:先按"接入层→应用层→服务层→数据层"分层画/述,再逐层挂上述措施,并说明各措施解决哪个质量属性。</div>',
  pitfalls: '<div class="pit"><b>误解:堆上所有技术就是好架构。</b>要<b>结合题目的并发量/预算/团队</b>取舍,说明每个决策"解决什么、代价是什么"(权衡),否则像背词典不得分。</div>',
  quiz: [
    { type: 'choice', q: '应对Web系统"突发高并发读"的首选组合是?', options: ['加密+签名', 'CDN+缓存+负载均衡', '分库分表+加锁', '关闭日志'], answer: 1, source: '案例', explain: '高并发读用CDN、缓存、负载均衡集群最直接有效。' }
  ],
  links: '<p>上一课:<a href="#/l/case/06-db-design">数据库设计案例</a> · 下一课:<a href="#/l/case/08-microservice-case">微服务改造案例</a> · 演进:<a href="#/l/evo/03-web-evolution">网站架构演进</a></p>'
});
