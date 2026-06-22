SAN.registerLesson({
  id: 'case/01-overview',
  module: 'case',
  order: 1,
  title: '案例分析题型与策略',
  minutes: 5,
  key: true,
  keywords: ['案例分析', '题型', '画图', '计算', '答题策略', '选做'],
  concept: '<p>系分案例(下午一)考"把分析设计用起来"。题型:<b>画图/补全(DFD、ER、UML)、需求分析、数学计算</b>,以及架构/数据方案题。</p>',
  exam: '<p><b>考纲定位:</b>下午科目。<b>题量、必答/选做以官方最新通知为准</b>。</p>',
  core: '<p><b>通用策略:</b></p>' +
    '<ul><li>先扫题挑有把握的(画图、计算优先拿分)。</li>' +
    '<li>按采分点作答、分点清晰。</li>' +
    '<li>画图守规则(DFD平衡守恒、ER基数、UML关系)。</li>' +
    '<li>计算写公式+过程+结论。</li></ul>' +
    '<div class="ex">系分送分大题:<b>DFD/ER/UML 补全、数学计算(决策/网络计划/可靠性)</b>,套路固定务必练熟。</div>',
  pitfalls: '<div class="pit"><b>误解:案例靠现场发挥。</b>系分案例<b>套路性强</b>:画图规则、计算公式都固定,平时练熟考场直接套。</div>',
  quiz: [
    { type: 'choice', q: '系分案例最该提前练熟的是?', options: ['英文写作', 'DFD/ER/UML画图补全+数学计算', '背范文', '打字'], answer: 1, source: '策略', explain: '画图补全与数学计算是案例高频送分。' }
  ],
  links: '<p>下一课:<a href="#/l/case/02-dfd-case">DFD案例</a></p>'
});
