SPM.registerLesson({
  id: 'improve/04-report',
  module: 'improve',
  order: 4,
  title: '服务报告',
  minutes: 4,
  keywords: ['服务报告', '趋势', '未达标说明', '沟通'],
  concept: '<p>服务报告把测量结果<b>结构化呈现</b>给管理层与客户:SLA 达成情况、事件趋势、容量与可用性、满意度、改进进展与下期计划。</p>',
  exam: '<p><b>考纲定位:</b>改进篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>内容</b>:目标 vs 实际、趋势图、未达标项及原因、改进措施。</li>' +
    '<b>受众</b>:管理层(决策)、客户(履约)、内部团队(改进)。</li>' +
    '<li><b>价值</b>:透明、可追溯、推动改进落地。</li>' +
    '</ul>' +
    '<div class="ex">服务报告是"成绩单+体检表";没报告,客户不知道你做得多好,改进也没抓手。</div>',
  pitfalls: '<div class="pit"><b>报告不是数据堆砌。</b>要点出趋势、问题与对策;只罗列数字等于没分析。</div>',
  quiz: [
    { type: 'choice', q: '服务报告最应包含的是?', options: ['只列原始日志', 'SLA达成、趋势、未达标原因与改进', '只报喜不报忧', '广告'], answer: 1, source: '高频', explain: '报告要含目标达成、趋势、问题与改进。' }
  ],
  links: '<p>上一课:<a href="#/l/improve/03-measurement">服务测量</a> · 下一课:<a href="#/l/improve/05-implement">改进实施</a></p>'
});
