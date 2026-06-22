SAN.registerLesson({
  id: 'db/06-distributed',
  module: 'db',
  order: 6,
  title: '分布式数据库',
  minutes: 5,
  keywords: ['分布式数据库', 'CAP', 'BASE', '分片', '两阶段提交', '透明性'],
  concept: '<p><gd data-term="distributed-db">分布式数据库</gd>数据分散多节点又逻辑统一。绕不开 <b>CAP 定理</b>:一致性C、可用性A、分区容错P,三者最多保二。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:CAP取舍、BASE、两阶段提交。</p>',
  core: '<table><tr><th>取向</th><th>含义</th></tr>' +
    '<tr><td>CP</td><td>保一致,分区时牺牲可用</td></tr>' +
    '<tr><td>AP</td><td>保可用,允许暂时不一致(最终一致)</td></tr></table>' +
    '<div class="ex">分区P不可避免,实际在 C 与 A 间取舍。BASE(基本可用、软状态、最终一致)是AP的工程化。</div>',
  pitfalls: '<div class="pit"><b>误解:CAP三者可兼得。</b>分区容错P必须保,真正选择是 CP 还是 AP。</div>',
  quiz: [
    { type: 'choice', q: 'CAP中分布式系统通常必须保证?', options: ['一致性C', '可用性A', '分区容错P', '三者都保'], answer: 2, source: '高频', explain: '分区不可避免,P必须保。' }
  ],
  links: '<p>上一课:<a href="#/l/db/05-transaction">事务并发</a> · 下一课:<a href="#/l/db/07-warehouse">数据仓库与NoSQL</a></p>'
});
