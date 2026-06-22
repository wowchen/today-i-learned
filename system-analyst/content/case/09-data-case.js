SAN.registerLesson({
  id: 'case/09-data-case',
  module: 'case',
  order: 9,
  title: '数据库设计案例',
  minutes: 5,
  keywords: ['数据库设计', '范式', '反规范化', '读写分离', '分库分表', '案例'],
  concept: '<p>数据类案例:补关系模式、判<gd data-term="normal-form">范式</gd>、指出冗余异常、给优化方案(索引/读写分离/反规范化/分库分表)。</p>',
  exam: '<p><b>考纲定位:</b>案例常考。重点:范式判定与分解、性能优化取舍。</p>',
  core: '<div class="ex"><b>常见问法:</b><br>· "该表有什么问题"→冗余、更新/插入/删除异常,因有部分/传递依赖,未达3NF。<br>· "如何改进"→按函数依赖分解到 3NF/BCNF。<br>· "查询慢怎么办"→加索引、读写分离、必要时<b>反规范化</b>、数据量大则<b>分库分表</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:范式越高越好,一律拆到BCNF。</b>高范式多表连接拖慢查询;读多写少常做适度<b>反规范化</b>换性能。</div>',
  quiz: [
    { type: 'choice', q: '为提升报表查询而在3NF表中适当增加冗余,叫?', options: ['规范化', '反规范化', '分库', '加密'], answer: 1, source: '案例', explain: '为性能增加冗余是反规范化。' }
  ],
  links: '<p>上一课:<a href="#/l/case/08-arch-case">架构案例</a> · 下一课:<a href="#/l/case/10-answer-template">答题模板与评分</a> · 原理:<a href="#/l/db/04-normalization">规范化</a></p>'
});
