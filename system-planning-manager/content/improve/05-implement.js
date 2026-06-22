SPM.registerLesson({
  id: 'improve/05-implement',
  module: 'improve',
  order: 5,
  title: '改进实施与持续优化',
  minutes: 5,
  keywords: ['改进实施', '优先级', '试点', '标准化', '变更'],
  concept: '<p>改进实施把"方案"变成"成果":按优先级排改进项,小范围试点验证,成功后标准化推广,失败的回到 PDCA 再迭代。改进本身也走变更受控。</p>',
  exam: '<p><b>考纲定位:</b>改进篇,案例常考"改进如何落地"。</p>',
  core: '<ul>' +
    '<li><b>优先级</b>:按业务影响 × 投入产出排序,先做高价值低风险。</li>' +
    '<li><b>试点</b>:小范围验证,降低全面铺开的风险。</li>' +
    '<li><b>标准化</b>:验证有效后固化为流程/文档/工具。</li>' +
    '<li><b>受控</b>:涉及环境的改进走 <gd data-term="change">变更管理</gd>。</li>' +
    '</ul>' +
    '<div class="ex">改进闭环:方案→试点→验证→标准化→再测量,下一轮 PDCA 接力。</div>',
  pitfalls: '<div class="pit"><b>别"一改进就大动干戈"。</b>未经试点的全面改动风险高,可能引入新问题。</div>',
  quiz: [
    { type: 'choice', q: '改进实施降低风险的做法是?', options: ['直接全面铺开', '小范围试点验证后再标准化', '不评估就改', '只改不改文档'], answer: 1, source: '高频', explain: '试点验证可降低全面推广风险。' }
  ],
  links: '<p>上一课:<a href="#/l/improve/04-report">服务报告</a> · 下一篇:<a href="#/l/supervise/01-concept">监督管理概念</a></p>'
});
