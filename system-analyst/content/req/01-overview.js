SAN.registerLesson({
  id: 'req/01-overview',
  module: 'req',
  order: 1,
  title: '需求工程概述',
  minutes: 5,
  key: true,
  keywords: ['需求工程', '功能需求', '非功能需求', '需求层次', '业务需求', '系统需求'],
  concept: '<p>需求工程把"用户想要什么"变成"能开发的规格",是系分的<b>看家本领</b>。<gd data-term="requirement">需求</gd>分功能需求与<gd data-term="nonfunctional-req">非功能需求</gd>。</p>',
  exam: '<p><b>考纲定位:</b>系分核心,综合知识+案例+论文全考。重点:需求分类、五大活动。</p>',
  core: '<table><tr><th>层次</th><th>说明</th></tr>' +
    '<tr><td>业务需求</td><td>组织为什么做(目标)</td></tr>' +
    '<tr><td>用户需求</td><td>用户要完成的任务</td></tr>' +
    '<tr><td>系统需求</td><td>功能需求 + 非功能需求</td></tr></table>' +
    '<p><b>五大活动:</b>获取 → 分析 → 定义(规格说明)→ 验证 → 管理。</p>' +
    '<div class="ex">非功能需求(性能、安全、可用性)往往是<b>系统设计与架构的主要驱动</b>,系分尤其重视。</div>',
  pitfalls: '<div class="pit"><b>误解:需求工程就是写功能清单。</b>非功能需求(质量属性)同样关键,且常决定系统成败。</div>',
  quiz: [
    { type: 'choice', q: '下列属于非功能需求的是?', options: ['用户能下单', '系统支持1万并发响应<2秒', '能查询订单', '能导出报表'], answer: 1, source: '高频', explain: '并发量、响应时间是非功能需求。' },
    { type: 'choice', q: '需求工程的五大活动不包括?', options: ['获取', '分析', '编码', '验证'], answer: 2, source: '高频', explain: '五大活动是获取、分析、定义、验证、管理,不含编码。' }
  ],
  links: '<p>下一课:<a href="#/l/req/02-elicitation">需求获取</a></p>'
});
