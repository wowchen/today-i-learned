SAD.registerLesson({
  id: 'db/02-er',
  module: 'db',
  order: 2,
  title: 'ER 模型与概念设计',
  minutes: 5,
  keywords: ['ER模型', '实体', '联系', '属性', '一对多', '多对多', '概念设计'],
  concept: '<p><gd data-term="er-model">ER模型</gd>用<b>实体(矩形)、属性(椭圆)、联系(菱形)</b>画出现实世界,是数据库概念设计的主要工具,与具体DBMS无关。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例都考。重点:联系的类型(1:1/1:n/m:n)及转为关系表的规则。</p>',
  core: '<p><b>联系转关系表规则:</b></p>' +
    '<table><tr><th>联系类型</th><th>转换</th></tr>' +
    '<tr><td>1:1</td><td>并入任一方,或单独建表</td></tr>' +
    '<tr><td>1:n</td><td>把"1"方主键作外键放到"n"方</td></tr>' +
    '<tr><td>m:n</td><td><b>必须单独建一张联系表</b>,含双方主键</td></tr></table>' +
    '<div class="ex">学生选课:学生与课程是 m:n,需建"选课"表(学号+课号+成绩)。这是高频考点。</div>',
  pitfalls: '<div class="pit"><b>误解:m:n 联系也能并入实体表。</b>多对多<b>必须单独建联系表</b>,否则无法表达且产生大量冗余。</div>',
  quiz: [
    { type: 'choice', q: '将m:n联系转换为关系模式时,正确做法是?', options: ['并入任一实体', '并入m方', '单独建一个关系,包含双方主键', '无需转换'], answer: 2, source: '高频', explain: 'm:n联系必须单独建关系表,包含两端实体的主键。' }
  ],
  links: '<p>上一课:<a href="#/l/db/01-model">三级模式</a> · 下一课:<a href="#/l/db/03-relational">关系代数与SQL</a> · 案例:<a href="#/l/case/06-db-design">数据库设计案例</a></p>'
});
