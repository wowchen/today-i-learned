SAD.registerLesson({
  id: 'perf/05-cache',
  module: 'perf',
  order: 5,
  title: '缓存与性能优化',
  minutes: 5,
  keywords: ['缓存', '命中率', '缓存穿透', '缓存击穿', '缓存雪崩', '一致性', 'CDN'],
  concept: '<p>缓存是性价比最高的性能手段:把热点数据放快层(内存/Redis/CDN),挡住对慢层(数据库)的重复访问。但要防三大缓存问题。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:缓存三大问题及对策、缓存一致性。</p>',
  core: '<table><tr><th>问题</th><th>含义</th><th>对策</th></tr>' +
    '<tr><td>缓存穿透</td><td>查不存在的数据,次次打到库</td><td>空值缓存、布隆过滤器</td></tr>' +
    '<tr><td>缓存击穿</td><td>热点key过期瞬间大量请求压库</td><td>互斥锁重建、热点不过期</td></tr>' +
    '<tr><td>缓存雪崩</td><td>大量key同时失效,库被压垮</td><td>过期时间打散、多级缓存、限流</td></tr></table>' +
    '<div class="ex">缓存一致性常用"<b>更新数据库 + 删除缓存(Cache Aside)</b>";CDN 把静态资源缓存到离用户近的边缘节点,降时延。</div>',
  pitfalls: '<div class="pit"><b>误解:缓存穿透和击穿一样。</b><b>穿透</b>是查"根本不存在"的数据;<b>击穿</b>是某个"存在的热点key"过期瞬间被打爆。对策不同。</div>',
  quiz: [
    { type: 'choice', q: '大量缓存key在同一时刻集中失效导致数据库被压垮,称为?', options: ['缓存穿透', '缓存击穿', '缓存雪崩', '缓存预热'], answer: 2, source: '高频', explain: '大量key同时失效是缓存雪崩,对策是过期时间打散等。' }
  ],
  links: '<p>系统性能模块完。下一模块:<a href="#/l/mid/01-middleware">中间件概念与分类</a> · 存储体系:<a href="#/l/comp/02-storage-hierarchy">Cache到外存</a></p>'
});
