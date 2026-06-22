SPM.registerLesson({
  id: 'db/03-transaction',
  module: 'db',
  order: 3,
  title: '事务与备份恢复',
  minutes: 5,
  keywords: ['事务', 'ACID', '备份', '恢复', '主从'],
  concept: '<p><b>事务</b>是一组要么全成、要么全败的操作,满足 <b>ACID</b>(原子/一致/隔离/持久)。备份恢复直接决定服务的<gd data-term="rpo">RPO</gd>/<gd data-term="rto">RTO</gd>。</p>',
  exam: '<p><b>考纲定位:</b>基础常识 + 与连续性管理联动。</p>',
  core: '<ul>' +
    '<li><b>ACID</b>:原子性、一致性、隔离性、持久性。</li>' +
    '<li><b>备份</b>:完全/增量/差异;异地备份提升容灾能力。</li>' +
    '<li><b>高可用</b>:主从复制、双活;故障切换缩短 <gd data-term="rto">RTO</gd>。</li>' +
    '</ul>' +
    '<div class="ex">备份频率决定 RPO(能回到多久前),恢复速度决定 RTO(多快能用)。</div>',
  pitfalls: '<div class="pit"><b>有备份≠能恢复。</b>不做恢复演练,真出事可能发现备份不可用。</div>',
  quiz: [
    { type: 'choice', q: '事务的四个特性合称?', options: ['CRUD', 'ACID', 'CAP', 'BASE'], answer: 1, source: '高频', explain: 'ACID=原子性/一致性/隔离性/持久性。' }
  ],
  links: '<p>上一课:<a href="#/l/db/02-sql">SQL 基础</a> · 下一课:<a href="#/l/db/04-warehouse">数据仓库</a> · 关联:<a href="#/l/ops/08-continuity">连续性管理</a></p>'
});
