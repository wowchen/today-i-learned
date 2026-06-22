SAN.registerLesson({
  id: 'db/02-er',
  module: 'db',
  order: 2,
  title: 'ER 模型与概念设计',
  minutes: 5,
  key: true,
  keywords: ['ER模型', '实体', '联系', '一对多', '多对多', '概念设计'],
  concept: '<p><gd data-term="er-model">ER模型</gd>用实体(矩形)、属性(椭圆)、联系(菱形)描述现实,是概念设计主要工具,也是<b>系分案例高频画图题</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识 + 案例必考。重点:联系类型(1:1/1:n/m:n)转关系表规则。</p>',
  core: '<table><tr><th>联系</th><th>转换</th></tr>' +
    '<tr><td>1:1</td><td>并入任一方或单独建表</td></tr>' +
    '<tr><td>1:n</td><td>"1"方主键作外键放到"n"方</td></tr>' +
    '<tr><td>m:n</td><td><b>必须单独建联系表</b>,含双方主键</td></tr></table>' +
    '<div class="ex">学生选课是 m:n,需建"选课"表(学号+课号+成绩)。案例中要会看图补联系、补属性、判基数。</div>',
  pitfalls: '<div class="pit"><b>误解:m:n也能并入实体表。</b>多对多<b>必须单独建联系表</b>,否则无法表达。</div>',
  quiz: [
    { type: 'choice', q: 'm:n联系转关系模式的正确做法?', options: ['并入任一实体', '并入m方', '单独建表含双方主键', '无需转换'], answer: 2, source: '高频', explain: 'm:n必须单独建联系表。' }
  ],
  links: '<p>上一课:<a href="#/l/db/01-model">三级模式</a> · 下一课:<a href="#/l/db/03-relational">关系代数与SQL</a> · 案例:<a href="#/l/case/03-er-case">ER案例</a></p>'
});
