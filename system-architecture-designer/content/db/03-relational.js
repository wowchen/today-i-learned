SAD.registerLesson({
  id: 'db/03-relational',
  module: 'db',
  order: 3,
  title: '关系代数与 SQL',
  minutes: 5,
  keywords: ['关系代数', 'SQL', '选择', '投影', '连接', '并交差', '查询'],
  concept: '<p>关系模型把数据看成"表"。<b>关系代数</b>是其理论基础(查询的数学描述),SQL 是其工程实现。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:五种基本运算、选择/投影/连接的区分。</p>',
  core: '<table><tr><th>运算</th><th>符号</th><th>作用</th></tr>' +
    '<tr><td>选择</td><td>σ</td><td>按条件<b>挑行</b>(where)</td></tr>' +
    '<tr><td>投影</td><td>π</td><td>挑<b>列</b>(select 字段)</td></tr>' +
    '<tr><td>连接</td><td>⋈</td><td>按条件拼接两表</td></tr>' +
    '<tr><td>并/交/差</td><td>∪ ∩ −</td><td>集合运算(需同结构)</td></tr></table>' +
    '<div class="ex">记忆:<b>选择挑行(σ横着切)、投影挑列(π竖着切)</b>。SQL 的 WHERE≈选择,SELECT 列≈投影,JOIN≈连接。</div>',
  pitfalls: '<div class="pit"><b>误解:选择和投影一回事。</b>选择(σ)按条件取<b>行</b>,投影(π)取<b>列</b>并去重,方向不同,常被对调出题。</div>',
  quiz: [
    { type: 'choice', q: '关系代数中按条件筛选元组(行)的运算是?', options: ['投影π', '选择σ', '连接⋈', '笛卡尔积'], answer: 1, source: '高频', explain: '选择σ按条件取行;投影π取列。' },
    { type: 'choice', q: 'SQL中SELECT指定字段列表,对应关系代数的?', options: ['选择', '投影', '连接', '差'], answer: 1, source: '高频', explain: 'SELECT挑列对应投影π。' }
  ],
  links: '<p>上一课:<a href="#/l/db/02-er">ER模型</a> · 下一课:<a href="#/l/db/04-normalization">规范化与范式</a></p>'
});
