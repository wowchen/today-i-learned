SAD.registerLesson({
  id: 'case/09-cache-case',
  module: 'case',
  order: 9,
  title: '缓存与高并发案例',
  minutes: 5,
  keywords: ['缓存', '高并发', '穿透', '击穿', '雪崩', '一致性', '案例'],
  concept: '<p>高并发案例常聚焦缓存:问"如何用缓存提升性能"以及"<b>缓存三大问题</b>怎么防、缓存与数据库一致性怎么保证"。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:三大缓存问题对策、一致性策略。</p>',
  core: '<table><tr><th>问题</th><th>对策(答题要点)</th></tr>' +
    '<tr><td>缓存穿透</td><td>布隆过滤器、缓存空值、参数校验</td></tr>' +
    '<tr><td>缓存击穿</td><td>热点key不过期/互斥锁重建</td></tr>' +
    '<tr><td>缓存雪崩</td><td>过期时间加随机、多级缓存、限流降级</td></tr></table>' +
    '<div class="ex"><b>一致性:</b>常用 Cache Aside(更新DB后删缓存);要求更强可用延迟双删或订阅binlog异步刷新。<br><b>高并发整体方案:</b>多级缓存(本地+分布式Redis)+ 热点探测 + 限流 + 异步写,层层挡住数据库。</div>',
  pitfalls: '<div class="pit"><b>误解:缓存和数据库能做到强一致。</b>缓存与库之间一般只能<b>最终一致</b>;追求强一致代价高,案例应说明所选一致性级别及理由。</div>',
  quiz: [
    { type: 'choice', q: '防止"查询大量不存在的key击穿到数据库"最有效的是?', options: ['布隆过滤器/缓存空值', '加大缓存', '关闭缓存', '提高数据库配置'], answer: 0, source: '案例', explain: '缓存穿透用布隆过滤器或缓存空值拦截不存在的key。' }
  ],
  links: '<p>上一课:<a href="#/l/case/08-microservice-case">微服务案例</a> · 下一课:<a href="#/l/case/10-answer-template">答题模板与评分</a> · 原理:<a href="#/l/perf/05-cache">缓存与性能优化</a></p>'
});
