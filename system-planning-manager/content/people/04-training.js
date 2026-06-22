SPM.registerLesson({
  id: 'people/04-training',
  module: 'people',
  order: 4,
  title: '培训与能力发展',
  minutes: 4,
  keywords: ['培训', '技能矩阵', '知识传承', '认证'],
  concept: '<p>服务要持续提升人员能力。用<b>技能矩阵</b>摸清现状、定培训计划:岗前培训、在岗轮训、专项提升,并鼓励 ITSS 等认证。知识沉淀到知识库防"人走技失"。</p>',
  exam: '<p><b>考纲定位:</b>团队篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>技能矩阵</b>:按角色×技能标"会/熟/精",找短板。</li>' +
    '<li><b>培训类型</b>:岗前、在岗、专项、认证培训。</li>' +
    '<li><b>知识传承</b>:知识库 + 导师制 + 文档化。</li>' +
    '</ul>' +
    '<div class="ex">人员流动不可避免;知识库与文档化是把"个人经验"变成"组织资产"的关键。</div>',
  pitfalls: '<div class="pit"><b>培训不是"听了就行"。</b>要考核+实战应用+知识沉淀,否则培训费打水漂。</div>',
  quiz: [
    { type: 'choice', q: '用于摸清团队各角色技能水平、找短板的工具是?', options: ['技能矩阵', '甘特图', 'ER图', '燃尽图'], answer: 0, source: '高频', explain: '技能矩阵按角色×技能标水平,定位短板。' }
  ],
  links: '<p>上一课:<a href="#/l/people/03-performance">绩效管理</a> · 下一课:<a href="#/l/people/05-communication">沟通激励</a></p>'
});
