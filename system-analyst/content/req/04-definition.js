SAN.registerLesson({
  id: 'req/04-definition',
  module: 'req',
  order: 4,
  title: '需求定义(SRS)',
  minutes: 4,
  keywords: ['需求定义', '需求规格说明书', 'SRS', '可验证', '无歧义'],
  concept: '<p>需求定义把分析结果写成正式的<b>软件需求规格说明书(SRS)</b>,作为开发与验收的依据。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:好需求的特性、SRS作用。</p>',
  core: '<p><b>好需求的特性:</b></p>' +
    '<table><tr><th>特性</th><th>含义</th></tr>' +
    '<tr><td>正确、完整</td><td>反映真实需要、不缺项</td></tr>' +
    '<tr><td>无歧义</td><td>只有一种理解</td></tr>' +
    '<tr><td>可验证</td><td>能设计测试来检验(忌"快、好用"这类模糊词)</td></tr>' +
    '<tr><td>一致、可追踪</td><td>不矛盾、能溯源</td></tr></table>' +
    '<div class="ex">SRS 是甲乙双方的"合同附件":写清楚才不会扯皮,也是后续设计、测试、验收的基准。</div>',
  pitfalls: '<div class="pit"><b>误解:需求写得越笼统越灵活。</b>笼统=不可验证、易扯皮。需求必须<b>具体、可测量、可验证</b>。</div>',
  quiz: [
    { type: 'choice', q: '下列哪项不是好需求应具备的特性?', options: ['无歧义', '可验证', '模糊灵活', '一致'], answer: 2, source: '高频', explain: '需求应具体可验证,模糊是缺陷。' }
  ],
  links: '<p>上一课:<a href="#/l/req/03-analysis">需求分析</a> · 下一课:<a href="#/l/req/05-validation">需求验证</a></p>'
});
