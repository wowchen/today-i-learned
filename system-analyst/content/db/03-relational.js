SAN.registerLesson({
  id: 'db/03-relational',
  module: 'db',
  order: 3,
  title: '关系代数与 SQL',
  minutes: 5,
  keywords: ['关系代数', 'SQL', '选择', '投影', '连接', '并交差'],
  concept: '<p>关系模型把数据看成表。<b>关系代数</b>是理论基础,SQL 是工程实现。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:五种基本运算、选择/投影/连接区分。</p>',
  core: '<table><tr><th>运算</th><th>符号</th><th>作用</th></tr>' +
    '<tr><td>选择</td><td>σ</td><td>按条件挑<b>行</b>(where)</td></tr>' +
    '<tr><td>投影</td><td>π</td><td>挑<b>列</b>(select字段)</td></tr>' +
    '<tr><td>连接</td><td>⋈</td><td>按条件拼接两表</td></tr>' +
    '<tr><td>并交差</td><td>∪∩−</td><td>集合运算(需同结构)</td></tr></table>' +
    '<div class="ex">记:选择挑行(σ横切)、投影挑列(π竖切)。</div>',
  pitfalls: '<div class="pit"><b>误解:选择和投影一回事。</b>选择取行、投影取列,方向不同,常被对调出题。</div>',
  quiz: [
    { type: 'choice', q: '按条件筛选元组(行)的关系运算是?', options: ['投影π', '选择σ', '连接⋈', '笛卡尔积'], answer: 1, source: '高频', explain: '选择σ取行;投影π取列。' }
  ],
  links: '<p>上一课:<a href="#/l/db/02-er">ER模型</a> · 下一课:<a href="#/l/db/04-normalization">规范化</a></p>'
});
