SAD.registerLesson({
  id: 'case/06-db-design',
  module: 'case',
  order: 6,
  title: '数据库设计案例',
  minutes: 5,
  keywords: ['数据库设计', 'ER', '范式', '反规范化', '读写分离', '分库分表', '案例'],
  concept: '<p>数据库类案例常考:补全 <gd data-term="er-model">ER 图</gd>/关系模式、判断<gd data-term="normal-form">范式</gd>、指出冗余异常、给优化方案(读写分离/分库分表/反规范化)。</p>',
  exam: '<p><b>考纲定位:</b>案例常考。重点:ER转关系、范式判定与改进、性能优化取舍。</p>',
  core: '<div class="ex"><b>典型问法与答法:</b><br>' +
    '· "指出该表存在的问题"→ 答<b>数据冗余、更新/插入/删除异常</b>,因存在部分/传递依赖,未达3NF。<br>' +
    '· "如何改进"→ 按函数依赖<b>分解到3NF/BCNF</b>,消除冗余。<br>' +
    '· "查询太慢怎么办"→ 加索引、<b>读写分离</b>、必要时<b>反规范化</b>(冗余字段换查询性能)、数据量大则<b>分库分表</b>。</div>' +
    '<p>关键平衡:<b>规范化减冗余 ↔ 反规范化提性能</b>,按读写比例与一致性要求权衡(呼应权衡点)。</p>',
  pitfalls: '<div class="pit"><b>误解:范式越高越好,一律拆到BCNF。</b>高范式多表连接拖慢查询;<b>读多写少</b>时常做适度<b>反规范化</b>(冗余换性能),这正是案例要你权衡的点。</div>',
  quiz: [
    { type: 'choice', q: '为提升报表查询性能,在已达3NF的表中适当增加冗余字段,这叫?', options: ['规范化', '反规范化', '分库', '加密'], answer: 1, source: '案例', explain: '为性能牺牲部分规范性、增加冗余,是反规范化。' }
  ],
  links: '<p>上一课:<a href="#/l/case/05-performance-calc">性能计算</a> · 下一课:<a href="#/l/case/07-web-arch">Web系统架构案例</a> · 原理:<a href="#/l/db/04-normalization">规范化</a></p>'
});
