SAD.registerLesson({
  id: 'quality/03-tactics',
  module: 'quality',
  order: 3,
  title: '架构战术',
  minutes: 5,
  key: true,
  keywords: ['架构战术', '性能战术', '可用性战术', '可修改性战术', '安全性战术', '冗余', '缓存'],
  concept: '<p><gd data-term="tactic">架构战术</gd>是为达成某个质量属性而采取的具体设计手段。哪项质量弱,就上对应战术——案例答"措施"时直接调用。</p>',
  exam: '<p><b>考纲定位:</b>案例必考。重点:各质量属性对应的常用战术,能据场景开"措施清单"。</p>',
  core: '<table><tr><th>质量属性</th><th>常用战术</th></tr>' +
    '<tr><td>性能</td><td>缓存、并发、负载均衡、资源池、异步</td></tr>' +
    '<tr><td>可用性</td><td><gd data-term="redundancy">冗余</gd>、心跳检测、故障转移、重试</td></tr>' +
    '<tr><td>可修改性</td><td>高内聚低耦合、分层、接口抽象、信息隐藏</td></tr>' +
    '<tr><td>安全性</td><td>认证授权、加密、审计日志、入侵检测</td></tr>' +
    '<tr><td>可测试性</td><td>降低耦合、内建测试接口、记录回放</td></tr></table>' +
    '<div class="ex">案例标准答法:先识别题目要的质量属性 → 从对应战术里挑 3~5 条 → 结合本系统说怎么落地。例如"高并发慢"→缓存+负载均衡+读写分离+异步削峰。</div>',
  pitfalls: '<div class="pit"><b>误解:战术之间互不影响。</b>很多战术会<b>损害其他质量属性</b>(如加密提升安全但损性能、冗余提升可用但增成本),这正是后面"权衡点"要分析的。</div>',
  quiz: [
    { type: 'choice', q: '提升系统"可用性"最常用的战术是?', options: ['缓存', '冗余与故障转移', '接口抽象', '加密'], answer: 1, source: '高频', explain: '冗余、心跳、故障转移是可用性的核心战术。' },
    { type: 'choice', q: '"读写分离 + 缓存 + 负载均衡"主要改善哪个质量属性?', options: ['安全性', '性能', '可测试性', '可移植性'], answer: 1, source: '高频', explain: '这些是典型的性能战术。' }
  ],
  links: '<p>上一课:<a href="#/l/quality/02-scenario">质量属性场景</a> · 下一课:<a href="#/l/quality/04-sensitivity">敏感点与权衡点</a> · 性能:<a href="#/l/perf/04-design">性能设计</a></p>'
});
