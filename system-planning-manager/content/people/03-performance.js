SPM.registerLesson({
  id: 'people/03-performance',
  module: 'people',
  order: 3,
  title: '绩效管理',
  minutes: 4,
  keywords: ['绩效', 'KPI', '考核', '激励', '反馈'],
  concept: '<p>绩效管理用<b>指标 + 反馈 + 激励</b>牵引员工行为。服务岗位的 KPI 常含 SLA 达成、事件解决时效、客户满意度、工单质量等,与个人/团队目标对齐。</p>',
  exam: '<p><b>考纲定位:</b>团队篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>原则</b>:SMART(具体/可衡量/可达成/相关/有时限)。</li>' +
    '<li><b>服务岗常见 KPI</b>:响应/解决时效、一次解决率、满意度、SLA 达成率。</li>' +
    '<li><b>反馈</b>:定期沟通、辅导改进,非"年底算总账"。</li>' +
    '</ul>' +
    '<div class="ex">KPI 是"指挥棒"——考核什么就得到什么;别只考"工单数",否则会刷量不求质。</div>',
  pitfalls: '<div class="pit"><b>单一指标会扭曲行为。</b>只考解决时效会催生"草草关闭工单";要时效与质量、满意度组合考核。</div>',
  quiz: [
    { type: 'choice', q: '目标设定遵循的 SMART 原则指?', options: ['只管具体', '具体/可衡量/可达成/相关/有时限', '越严越好', '由员工自定'], answer: 1, source: '高频', explain: 'SMART=Specific/Measurable/Achievable/Relevant/Time-bound。' }
  ],
  links: '<p>上一课:<a href="#/l/people/02-role">角色岗位</a> · 下一课:<a href="#/l/people/04-training">培训发展</a></p>'
});
