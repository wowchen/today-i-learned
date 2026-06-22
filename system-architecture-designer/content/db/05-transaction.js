SAD.registerLesson({
  id: 'db/05-transaction',
  module: 'db',
  order: 5,
  title: '事务与并发控制',
  minutes: 5,
  key: true,
  keywords: ['事务', 'ACID', '并发控制', '封锁', '隔离级别', '脏读', '两段锁'],
  concept: '<p><gd data-term="transaction">事务</gd>是一组"要么全做要么全不做"的操作,满足 <b>ACID</b>:原子性、一致性、隔离性、持久性。<gd data-term="concurrency-control">并发控制</gd>保证多事务同时跑也正确。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:ACID含义、并发问题、封锁与隔离级别。</p>',
  core: '<p><b>并发三大问题:</b>丢失修改、脏读(读到未提交)、不可重复读/幻读。</p>' +
    '<table><tr><th>隔离级别</th><th>能防</th></tr>' +
    '<tr><td>读未提交</td><td>几乎不防</td></tr>' +
    '<tr><td>读已提交</td><td>防脏读</td></tr>' +
    '<tr><td>可重复读</td><td>防脏读+不可重复读</td></tr>' +
    '<tr><td>串行化</td><td>全防,性能最低</td></tr></table>' +
    '<div class="ex"><b>两段锁(2PL):</b>事务分"扩展段(只加锁)"和"收缩段(只解锁)"两个阶段,可保证并发调度<b>可串行化</b>。</div>',
  pitfalls: '<div class="pit"><b>误解1:两段锁能避免死锁。</b>2PL 保证<b>可串行化</b>,但<b>不能避免死锁</b>,死锁需另行处理。</div>' +
    '<div class="pit"><b>误解2:隔离级别越高越好。</b>越高越安全但<b>并发性能越差</b>,需按业务权衡(如金融用高、报表可低)。</div>',
  quiz: [
    { type: 'choice', q: '事务读取了另一事务"尚未提交"的数据,这种问题称为?', options: ['丢失修改', '脏读', '不可重复读', '幻读'], answer: 1, source: '高频', explain: '读到未提交数据是脏读。' },
    { type: 'choice', q: '两段锁协议(2PL)能保证?', options: ['不死锁', '调度可串行化', '高性能', '强一致网络'], answer: 1, source: '高频', explain: '2PL保证可串行化,但不能避免死锁。' }
  ],
  links: '<p>上一课:<a href="#/l/db/04-normalization">规范化</a> · 下一课:<a href="#/l/db/06-backup-recovery">备份与恢复</a></p>'
});
