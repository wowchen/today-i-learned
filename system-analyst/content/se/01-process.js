SAN.registerLesson({
  id: 'se/01-process',
  module: 'se',
  order: 1,
  title: '软件过程模型',
  minutes: 5,
  key: true,
  keywords: ['软件过程', '瀑布', '原型', '螺旋', '增量', '迭代', 'V模型'],
  concept: '<p>软件过程模型规定开发节奏:<b>瀑布 → 原型 → 增量/迭代 → 螺旋</b>,各有适用。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:各模型特点与适用、螺旋的风险驱动。</p>',
  core: '<table><tr><th>模型</th><th>特点</th><th>适用</th></tr>' +
    '<tr><td>瀑布</td><td>阶段顺序、文档驱动、后期改动贵</td><td>需求稳定</td></tr>' +
    '<tr><td>原型</td><td>先做样品确认需求</td><td>需求不清</td></tr>' +
    '<tr><td>增量</td><td>分批交付有用功能</td><td>希望尽早见成果</td></tr>' +
    '<tr><td>螺旋</td><td><b>风险驱动</b>,每圈做风险分析</td><td>大型高风险</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:螺旋=迭代。</b>螺旋是迭代的一种,核心区别是<b>风险驱动</b>。</div>',
  quiz: [
    { type: 'choice', q: '以"风险分析"为核心的过程模型是?', options: ['瀑布', '原型', '螺旋', 'V模型'], answer: 2, source: '高频', explain: '螺旋模型风险驱动。' },
    { type: 'choice', q: '需求不明确时最适合先采用?', options: ['瀑布', '原型', '大爆炸', 'V模型'], answer: 1, source: '高频', explain: '原型法澄清需求。' }
  ],
  links: '<p>下一课:<a href="#/l/se/02-cmmi">CMMI与过程改进</a></p>'
});
