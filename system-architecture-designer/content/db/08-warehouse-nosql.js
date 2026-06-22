SAD.registerLesson({
  id: 'db/08-warehouse-nosql',
  module: 'db',
  order: 8,
  title: '数据仓库与 NoSQL',
  minutes: 5,
  keywords: ['数据仓库', 'OLAP', 'OLTP', 'ETL', 'NoSQL', '数据湖', '星型模型'],
  concept: '<p><gd data-term="data-warehouse">数据仓库</gd>面向分析(OLAP),与面向交易的数据库(OLTP)分工不同;NoSQL 则为高并发、海量、灵活结构而生。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(大数据主题)。重点:OLTP vs OLAP、ETL、NoSQL四类。</p>',
  core: '<table><tr><th>对比</th><th>OLTP</th><th>OLAP</th></tr>' +
    '<tr><td>面向</td><td>日常交易</td><td>分析决策</td></tr>' +
    '<tr><td>操作</td><td>增删改、短事务</td><td>复杂查询、聚合</td></tr>' +
    '<tr><td>数据</td><td>当前、细粒度</td><td>历史、汇总</td></tr></table>' +
    '<div class="ex"><b>ETL</b>(抽取-转换-加载)把各业务库数据汇入数仓;建模常用<b>星型/雪花模型</b>(事实表+维表)。<br><b>NoSQL 四类:</b>键值(Redis)、文档(MongoDB)、列族(HBase)、图(Neo4j)。</div>',
  pitfalls: '<div class="pit"><b>误解1:NoSQL 没有事务、不可靠。</b>很多 NoSQL 提供不同级别一致性与事务;它牺牲的是严格关系模型与强一致,换<b>扩展性与灵活性</b>。</div>' +
    '<div class="pit"><b>误解2:数据仓库就是大号数据库。</b>数仓面向<b>主题、集成、历史、分析</b>,与 OLTP 设计目标根本不同,不能混用。</div>',
  quiz: [
    { type: 'choice', q: '面向分析决策、以历史汇总数据和复杂查询为主的是?', options: ['OLTP', 'OLAP数据仓库', '消息队列', '缓存'], answer: 1, source: '高频', explain: 'OLAP/数据仓库面向分析,处理历史与汇总数据。' },
    { type: 'choice', q: 'MongoDB属于哪类NoSQL?', options: ['键值', '文档', '列族', '图'], answer: 1, source: '高频', explain: 'MongoDB是文档型数据库。' }
  ],
  links: '<p>数据库模块完。下一模块:<a href="#/l/net/01-model">网络体系结构</a> · 大数据:<a href="#/l/future/02-bigdata">大数据架构</a></p>'
});
