SAD.registerLesson({
  id: 'db/07-distributed',
  module: 'db',
  order: 7,
  title: '分布式数据库',
  minutes: 5,
  key: true,
  keywords: ['分布式数据库', 'CAP', 'BASE', '分片', '复制', '两阶段提交', '透明性'],
  concept: '<p><gd data-term="distributed-db">分布式数据库</gd>把数据分散到多节点又逻辑统一。设计绕不开 <b>CAP 定理</b>:一致性C、可用性A、分区容错P,<b>三者最多保二</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文都涉及。重点:CAP取舍、BASE、两阶段提交、分布透明性。</p>',
  core: '<p><b>CAP:</b>网络分区(P)在分布式中必然存在,所以实际是在 <b>C 与 A 之间取舍</b>:</p>' +
    '<table><tr><th>取向</th><th>含义</th><th>例</th></tr>' +
    '<tr><td>CP</td><td>保一致,分区时牺牲可用</td><td>金融、强一致场景</td></tr>' +
    '<tr><td>AP</td><td>保可用,允许暂时不一致</td><td>互联网、最终一致</td></tr></table>' +
    '<div class="ex"><b>BASE</b>(基本可用、软状态、最终一致)是 AP 取向的工程化:用"最终一致"换高可用,是大型互联网常用思路。<b>两阶段提交(2PC)</b>则保证分布式事务的强一致,但有阻塞风险。</div>',
  pitfalls: '<div class="pit"><b>误解1:CAP 可以三者兼得。</b>分区容错 P 在分布式里必须保,真正的选择是 <b>CP 还是 AP</b>。</div>' +
    '<div class="pit"><b>误解2:BASE 与 ACID 对立、谁好谁坏。</b>两者是不同取向:ACID 强一致(单库/CP),BASE 高可用最终一致(AP),按业务选,不是优劣。</div>',
  quiz: [
    { type: 'choice', q: 'CAP定理中,分布式系统通常必须保证的是?', options: ['一致性C', '可用性A', '分区容错P', '三者都能保'], answer: 2, source: '高频', explain: '分区不可避免,P必须保,实际在C与A间取舍。' },
    { type: 'choice', q: 'BASE理论的核心取向是?', options: ['强一致', '最终一致+高可用', '禁止复制', '单机事务'], answer: 1, source: '高频', explain: 'BASE以最终一致换取高可用,属AP取向。' }
  ],
  links: '<p>上一课:<a href="#/l/db/06-backup-recovery">备份与恢复</a> · 下一课:<a href="#/l/db/08-warehouse-nosql">数据仓库与NoSQL</a></p>'
});
