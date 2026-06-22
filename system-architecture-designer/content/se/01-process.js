SAD.registerLesson({
  id: 'se/01-process',
  module: 'se',
  order: 1,
  title: '软件过程模型',
  minutes: 5,
  key: true,
  keywords: ['软件过程', '瀑布', '原型', '螺旋', '增量', '迭代', 'V模型'],
  concept: '<p>软件过程模型规定"按什么节奏开发"。从最传统到更灵活:<b>瀑布 → 原型 → 增量/迭代 → 螺旋</b>,各有适用场景。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:各模型特点与适用、螺旋模型的风险驱动。</p>',
  core: '<table><tr><th>模型</th><th>特点</th><th>适用</th></tr>' +
    '<tr><td>瀑布</td><td>阶段严格顺序,文档驱动,后期改动代价大</td><td>需求稳定明确</td></tr>' +
    '<tr><td>原型</td><td>先做样品确认需求</td><td>需求不清</td></tr>' +
    '<tr><td>增量</td><td>分批交付有用功能</td><td>希望尽早见到成果</td></tr>' +
    '<tr><td>螺旋</td><td><b>风险驱动</b>,每圈做风险分析</td><td>大型高风险项目</td></tr>' +
    '<tr><td>V模型</td><td>强调测试与开发阶段对应</td><td>重测试验证</td></tr></table>' +
    '<div class="ex">螺旋模型最大特色是<b>把风险分析显式纳入每一轮迭代</b>,适合规模大、不确定性高的项目。</div>',
  pitfalls: '<div class="pit"><b>误解1:瀑布模型一无是处。</b>需求非常稳定时瀑布清晰可控仍适用;它的弱点是<b>难以应对需求变更</b>。</div>' +
    '<div class="pit"><b>误解2:螺旋=迭代。</b>螺旋是迭代的一种,但核心区别是<b>风险驱动</b>,每圈先评估风险再决定是否继续。</div>',
  quiz: [
    { type: 'choice', q: '以"风险分析"为核心、适合大型高风险项目的过程模型是?', options: ['瀑布模型', '原型模型', '螺旋模型', 'V模型'], answer: 2, source: '高频', explain: '螺旋模型是风险驱动的,每轮迭代进行风险分析。' },
    { type: 'choice', q: '需求不明确时,最适合先采用的是?', options: ['瀑布', '原型', '大爆炸', 'V模型'], answer: 1, source: '高频', explain: '原型法通过快速样品澄清需求,适合需求不清的情况。' }
  ],
  links: '<p>下一课:<a href="#/l/se/02-capability">CMMI与过程改进</a> · 敏捷见:<a href="#/l/mid/07-devops">DevOps</a></p>'
});
