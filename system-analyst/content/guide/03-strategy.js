SAN.registerLesson({
  id: 'guide/03-strategy',
  module: 'guide',
  order: 3,
  title: '备考策略:三科怎么打',
  minutes: 4,
  key: true,
  keywords: ['备考策略', '复习', '综合知识', '案例', '论文', '时间分配'],
  concept: '<p>三科性质不同,打法不同:<b>选择题广度取胜、案例画图与计算取胜、论文项目素材取胜</b>。</p>',
  exam: '<p><b>考纲定位:</b>合理分配精力本身就是高分关键——很多人挂在论文和案例画图,而非选择题。</p>',
  core: '<table><tr><th>科目</th><th>策略</th></tr>' +
    '<tr><td>综合知识</td><td>覆盖高频考点+刷历年真题,错题进错题本反复过</td></tr>' +
    '<tr><td>案例分析</td><td>练熟 <b>DFD/ER/UML 画图与补全</b>、数学计算套路,按答题模板写</td></tr>' +
    '<tr><td>论文</td><td>提前备 <b>1~2 个真实项目</b>,练熟"摘要+正文"结构,卡字数卡时间</td></tr></table>' +
    '<div class="ex">案例的"画图与补全"(数据流图加工/数据流、ER联系、用例/类图)是系分<b>送分大题</b>,务必练到形成肌肉记忆。</div>',
  pitfalls: '<div class="pit"><b>误解1:论文考前突击就行。</b>论文要手写约2000字、结合项目,没练过时间根本不够,务必<b>提前计时手写</b>。</div>' +
    '<div class="pit"><b>误解2:案例画图凭感觉。</b>DFD 的"父图子图平衡""数据守恒"、ER 联系基数都有硬规则,错了直接扣分。</div>',
  quiz: [
    { type: 'choice', q: '系分案例最该提前练熟的是?', options: ['背英文', 'DFD/ER/UML画图与补全+数学计算', '只看理论', '练打字'], answer: 1, source: '策略', explain: '案例高频是画图补全与数学计算,需反复练。' }
  ],
  links: '<p>下一课:<a href="#/l/guide/04-features">题库·错题本·计算器怎么用</a> · 论文细节:<a href="#/l/essay/06-material">项目素材与选题</a></p>'
});
