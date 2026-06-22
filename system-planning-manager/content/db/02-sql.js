SPM.registerLesson({
  id: 'db/02-sql',
  module: 'db',
  order: 2,
  title: 'SQL 与数据操作',
  minutes: 4,
  keywords: ['SQL', 'DDL', 'DML', '索引', '视图'],
  concept: '<p><b>SQL</b> 是关系数据库的标准语言:<b>DDL</b>(建表改表)、<b>DML</b>(增删改查)、<b>DCL</b>(权限)。运维常用查询统计与权限管理。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,概念题。</p>',
  core: '<ul>' +
    '<li><b>SELECT</b> 查询,<b>INSERT/UPDATE/DELETE</b> 改数据;<b>CREATE/ALTER/DROP</b> 改结构。</li>' +
    '<li><b>索引</b>:加速查询,代价是占空间、降低写入速度。</li>' +
    '<li><b>视图</b>:虚拟表,简化复杂查询、控制权限。</li>' +
    '</ul>' +
    '<div class="ex">慢查询多与缺索引有关,但索引并非越多越好。</div>',
  pitfalls: '<div class="pit"><b>DELETE 删数据、DROP 删结构。</b>运维操作前务必区分,DROP 不可轻易执行。</div>',
  quiz: [
    { type: 'choice', q: '用于删除整张表结构的 SQL 是?', options: ['DELETE', 'DROP', 'TRUNCATE', 'UPDATE'], answer: 1, source: '高频', explain: 'DROP TABLE 删除表及其结构;DELETE 只删行。' }
  ],
  links: '<p>上一课:<a href="#/l/db/01-model">数据库模型</a> · 下一课:<a href="#/l/db/03-transaction">事务并发</a></p>'
});
