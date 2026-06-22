SAN.registerLesson({
  id: 'plan/05-legacy',
  module: 'plan',
  order: 5,
  title: '遗留系统演化策略',
  minutes: 4,
  keywords: ['遗留系统', '改造', '继承', '集成', '淘汰', '绞杀者'],
  concept: '<p>遗留系统(老旧但仍在用)按"<b>技术价值×业务价值</b>"二维矩阵决定:改造、集成、继承、淘汰。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:四象限策略选择。</p>',
  core: '<table><tr><th>业务价值\\技术</th><th>技术高</th><th>技术低</th></tr>' +
    '<tr><td>业务价值高</td><td>改造(继续投入)</td><td>继承(逐步重建保业务)</td></tr>' +
    '<tr><td>业务价值低</td><td>集成(纳入新系统)</td><td>淘汰</td></tr></table>' +
    '<div class="ex">渐进替换常用<b>绞杀者模式</b>:在旧系统外围逐步建新功能慢慢替换,避免一次性重写的高风险。</div>',
  pitfalls: '<div class="pit"><b>误解:遗留系统一律推倒重写。</b>大爆炸重写风险极高;业务价值高的多用渐进改造/继承。</div>',
  quiz: [
    { type: 'choice', q: '业务价值高但技术水平低的遗留系统宜?', options: ['淘汰', '继承(逐步重建)', '集成', '不管'], answer: 1, source: '高频', explain: '业务价值高、技术低宜"继承"逐步重建。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/04-scheme">方案比选</a> · 下一课:<a href="#/l/plan/06-bpr">业务流程重组</a></p>'
});
