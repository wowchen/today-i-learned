SAD.registerLesson({
  id: 'essay/09-topic-data',
  module: 'essay',
  order: 9,
  title: '常考主题:数据库与大数据',
  minutes: 4,
  keywords: ['论文主题', '数据库', '大数据', '高可用', '一致性', '提纲', '论文'],
  concept: '<p>数据相关主题(数据库设计、大数据架构、数据一致性/高可用)也常出现。本课给提纲与要点。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:数据类主题的论述要点。</p>',
  core: '<div class="ex"><b>主题:论数据库/大数据架构设计</b><br>主体三点:① 数据特征与挑战(数据量、并发、实时性);② 方案:建模与规范化、读写分离/分库分表、缓存、或<gd data-term="big-data">大数据</gd>批流处理与<gd data-term="data-warehouse">数仓</gd>;③ 一致性与高可用:主从复制、<gd data-term="distributed-db">分布式</gd>事务或最终一致(CAP取舍)、备份容灾。</div>' +
    '<p>亮点:能讲清<b>CAP/一致性取舍</b>和<b>容量增长应对(分库分表)</b>,显架构深度。</p>',
  pitfalls: '<div class="pit"><b>误解:数据主题只写建表。</b>架构师论文要上升到<b>容量、性能、一致性、高可用</b>的架构级方案与取舍,而非停留在表设计。</div>',
  quiz: [
    { type: 'choice', q: '论数据架构时,体现架构深度的关键论点是?', options: ['字段命名规范', 'CAP取舍与高可用/扩展方案', '界面布局', '注释风格'], answer: 1, source: '实操', explain: 'CAP取舍、分库分表、容灾高可用等是架构级深度论点。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/08-topic-microservice">中间件与微服务</a> · 下一课:<a href="#/l/essay/10-scoring">范文分析与评分细则</a></p>'
});
