SAN.registerLesson({
  id: 'case/03-er-case',
  module: 'case',
  order: 3,
  title: 'ER 模型案例',
  minutes: 5,
  key: true,
  keywords: ['ER图', '联系', '基数', '补全', '关系模式', '案例'],
  concept: '<p>ER 案例:给一段业务描述,要你<b>补全实体/联系/属性、标注基数(1:1/1:n/m:n)、转成关系模式</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例高频。重点:判联系基数、m:n 建联系表、补主外键。</p>',
  core: '<div class="ex"><b>答题套路:</b><br>① 从描述里找名词→实体,找动词→联系。<br>② 判基数:一个 A 对应几个 B、一个 B 对应几个 A → 定 1:1 / 1:n / m:n。<br>③ 转关系模式:1:n 把"1"方主键作外键放"n"方;<b>m:n 单独建联系表</b>(含双方主键+联系属性如成绩)。</div>',
  pitfalls: '<div class="pit"><b>误解:m:n 联系能并入某个实体表。</b>多对多<b>必须单独建联系表</b>,这是 ER 案例最常见考点和扣分点。</div>',
  quiz: [
    { type: 'choice', q: '"一个学生选多门课、一门课被多个学生选",学生-课程是?', options: ['1:1', '1:n', 'm:n', 'n:1'], answer: 2, source: '案例高频', explain: '双向都是多,是m:n,需建选课联系表。' }
  ],
  links: '<p>上一课:<a href="#/l/case/02-dfd-case">DFD案例</a> · 下一课:<a href="#/l/case/04-uml-case">UML案例</a> · 原理:<a href="#/l/db/02-er">ER模型</a></p>'
});
