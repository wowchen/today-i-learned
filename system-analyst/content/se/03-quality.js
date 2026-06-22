SAN.registerLesson({
  id: 'se/03-quality',
  module: 'se',
  order: 3,
  title: '软件质量与质量模型',
  minutes: 4,
  keywords: ['软件质量', '质量模型', 'ISO25010', '质量保证', 'SQA', '耦合', '内聚'],
  concept: '<p>软件质量是"满足需求的程度"。质量模型(ISO 25010)把质量拆成功能性、可靠性、易用性、效率、可维护性、可移植性等。设计上追求<gd data-term="cohesion">高内聚</gd>、<gd data-term="coupling">低耦合</gd>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:质量特性、QA与QC区别、内聚耦合等级。</p>',
  core: '<table><tr><th>概念</th><th>含义</th></tr>' +
    '<tr><td>质量保证QA</td><td>面向过程,预防为主(评审、规范)</td></tr>' +
    '<tr><td>质量控制QC</td><td>面向产品,检验为主(测试)</td></tr></table>' +
    '<div class="ex">耦合由差到好:内容→公共→外部→控制→标记→数据;内聚由差到好:偶然→…→功能内聚。目标:高内聚低耦合。</div>',
  pitfalls: '<div class="pit"><b>误解:QA就是测试。</b>QA偏<b>过程预防</b>(评审、标准);测试属QC偏<b>产品检验</b>。</div>',
  quiz: [
    { type: 'choice', q: '软件设计追求的目标是?', options: ['高耦合高内聚', '低耦合低内聚', '高内聚低耦合', '低内聚高耦合'], answer: 2, source: '高频', explain: '高内聚低耦合。' }
  ],
  links: '<p>上一课:<a href="#/l/se/02-cmmi">CMMI</a> · 下一课:<a href="#/l/se/04-testing">软件测试</a></p>'
});
