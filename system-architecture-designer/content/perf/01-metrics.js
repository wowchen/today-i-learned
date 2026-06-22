SAD.registerLesson({
  id: 'perf/01-metrics',
  module: 'perf',
  order: 1,
  title: '性能指标',
  minutes: 4,
  key: true,
  keywords: ['性能指标', '响应时间', '吞吐量', '并发', 'TPS', 'QPS', '资源利用率'],
  concept: '<p>性能要"说得清、量得出"。核心指标:<gd data-term="response-time">响应时间</gd>、<gd data-term="throughput">吞吐量</gd>、并发数、资源利用率。</p>',
  exam: '<p><b>考纲定位:</b>案例与综合知识。重点:各指标含义、之间的关系。</p>',
  core: '<table><tr><th>指标</th><th>含义</th></tr>' +
    '<tr><td>响应时间</td><td>单个请求从发出到返回的耗时</td></tr>' +
    '<tr><td>吞吐量</td><td>单位时间处理量(TPS/QPS)</td></tr>' +
    '<tr><td>并发数</td><td>同时处理的请求数</td></tr>' +
    '<tr><td>资源利用率</td><td>CPU/内存/IO/带宽的占用</td></tr></table>' +
    '<div class="ex">关系:并发上升,吞吐先升后到瓶颈、响应时间随之恶化。性能优化就是在三者间找"高吞吐 + 可接受响应时间"的平衡点。</div>',
  pitfalls: '<div class="pit"><b>误解:吞吐量越高一定越好。</b>追求高吞吐若导致响应时间飙升、超出SLA,用户体验反而崩。要<b>综合看响应时间约束下的吞吐</b>。</div>',
  quiz: [
    { type: 'choice', q: 'TPS/QPS衡量的是?', options: ['响应时间', '吞吐量', '并发数', '利用率'], answer: 1, source: '高频', explain: 'TPS/QPS是每秒事务/查询数,衡量吞吐量。' }
  ],
  links: '<p>下一课:<a href="#/l/perf/02-amdahl">性能计算与Amdahl定律</a> · 性能战术:<a href="#/l/quality/03-tactics">架构战术</a></p>'
});
