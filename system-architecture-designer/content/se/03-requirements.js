SAD.registerLesson({
  id: 'se/03-requirements',
  module: 'se',
  order: 3,
  title: '需求工程',
  minutes: 5,
  key: true,
  keywords: ['需求工程', '功能需求', '非功能需求', '需求获取', '需求分析', '需求管理'],
  concept: '<p>需求工程把"用户想要什么"变成"能开发的规格"。分活动:<b>获取 → 分析 → 规格说明 → 验证 → 管理</b>。需求又分功能需求与<b>非功能需求(质量属性)</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:需求分类、需求活动、非功能需求与架构的关系。</p>',
  core: '<table><tr><th>需求层次</th><th>说明</th></tr>' +
    '<tr><td>业务需求</td><td>组织为什么做(目标)</td></tr>' +
    '<tr><td>用户需求</td><td>用户要完成的任务</td></tr>' +
    '<tr><td>系统需求</td><td>功能需求 + 非功能需求(性能、安全、可用性…)</td></tr></table>' +
    '<div class="ex"><b>对架构师最关键的是非功能需求</b>:它直接驱动架构设计与质量属性取舍(见质量属性模块)。功能需求决定"做什么",非功能决定"做得多好"。</div>',
  pitfalls: '<div class="pit"><b>误解:需求工程就是写功能清单。</b>架构成败往往取决于<b>非功能需求</b>(并发量、响应时间、可用性指标);只列功能、忽略质量属性是架构翻车的常见原因。</div>',
  quiz: [
    { type: 'choice', q: '下列属于非功能需求的是?', options: ['用户能下单', '系统支持1万并发且响应<2秒', '能查询订单', '能导出报表'], answer: 1, source: '高频', explain: '并发量、响应时间属于非功能需求(质量属性)。' },
    { type: 'choice', q: '最能驱动软件架构设计的是?', options: ['界面颜色', '非功能需求/质量属性', '变量命名', '注释规范'], answer: 1, source: '理解', explain: '非功能需求(质量属性)是架构设计的主要驱动力。' }
  ],
  links: '<p>上一课:<a href="#/l/se/02-capability">CMMI</a> · 下一课:<a href="#/l/se/04-structured">结构化分析与设计</a> · 质量属性:<a href="#/l/quality/01-attributes">质量属性总览</a></p>'
});
