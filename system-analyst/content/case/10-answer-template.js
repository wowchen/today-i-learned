SAN.registerLesson({
  id: 'case/10-answer-template',
  module: 'case',
  order: 10,
  title: '答题模板与评分',
  minutes: 5,
  key: true,
  keywords: ['答题模板', '评分', '采分点', '画图规范', '时间分配'],
  concept: '<p>案例分高低,差在"按采分点表达"。本课给可套用的答题模板与评分认知。</p>',
  exam: '<p><b>考纲定位:</b>案例通用方法,贯穿全部题型。</p>',
  core: '<table><tr><th>题型</th><th>模板</th></tr>' +
    '<tr><td>画图(DFD/ER/UML)</td><td>守规则补全(平衡/守恒/基数/关系)+ 一句话说明理由</td></tr>' +
    '<tr><td>需求/方案文字题</td><td>分点列措施,结合题干场景,忌空话</td></tr>' +
    '<tr><td>计算题</td><td>公式 → 代入 → 结果+单位 → 结论</td></tr></table>' +
    '<div class="ex"><b>提分细节:</b>分点作答、关键词加粗、画图守规则、计算写过程、紧扣题干。时间:先做有把握的画图与计算,再啃文字论述。</div>',
  pitfalls: '<div class="pit"><b>误解:答得越多越好。</b>阅卷按<b>采分点</b>给分,精准命中关键词比长篇大论有效。</div>',
  quiz: [
    { type: 'choice', q: '案例答题最关键的得分原则是?', options: ['字数多', '命中采分点、分点清晰、计算/画图守规范', '只画图', '抄题干'], answer: 1, source: '策略', explain: '按采分点给分,精准、规范、有过程最得分。' }
  ],
  links: '<p>案例专题完成!进入论文专题:<a href="#/l/essay/01-overview">论文考试全解</a></p>'
});
