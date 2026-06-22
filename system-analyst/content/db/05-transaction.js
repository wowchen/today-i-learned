SAN.registerLesson({
  id: 'db/05-transaction',
  module: 'db',
  order: 5,
  title: '事务与并发控制',
  minutes: 5,
  key: true,
  keywords: ['事务', 'ACID', '并发控制', '封锁', '隔离级别', '脏读'],
  concept: '<p><gd data-term="transaction">事务</gd>是要么全做要么全不做的一组操作,满足 <b>ACID</b>。<gd data-term="concurrency-control">并发控制</gd>保证多事务同时跑也正确。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:ACID、并发问题、隔离级别。</p>',
  core: '<p><b>并发问题:</b>丢失修改、脏读(读未提交)、不可重复读、幻读。</p>' +
    '<table><tr><th>隔离级别</th><th>能防</th></tr>' +
    '<tr><td>读未提交</td><td>几乎不防</td></tr>' +
    '<tr><td>读已提交</td><td>防脏读</td></tr>' +
    '<tr><td>可重复读</td><td>防脏读+不可重复读</td></tr>' +
    '<tr><td>串行化</td><td>全防,性能最低</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:隔离级别越高越好。</b>越高越安全但并发性能越差,需按业务权衡。</div>',
  quiz: [
    { type: 'choice', q: '读取了另一事务"尚未提交"的数据,称为?', options: ['丢失修改', '脏读', '不可重复读', '幻读'], answer: 1, source: '高频', explain: '读到未提交数据是脏读。' }
  ],
  links: '<p>上一课:<a href="#/l/db/04-normalization">规范化</a> · 下一课:<a href="#/l/db/06-distributed">分布式数据库</a></p>'
});
