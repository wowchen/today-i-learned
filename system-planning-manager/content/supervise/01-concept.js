SPM.registerLesson({
  id: 'supervise/01-concept',
  module: 'supervise',
  order: 1,
  title: 'IT 服务监督管理概念',
  minutes: 4,
  keywords: ['监督管理', '质量', '独立', '合规'],
  concept: '<p><gd data-term="audit">监督管理</gd>从独立视角对服务过程与结果进行<b>质量评价、满意度测评、审计与合规</b>检查,确保服务"既有效又合规"。它区别于内部 PDCA 改进,是外部审视。</p>',
  exam: '<p><b>考纲定位:</b>监督篇,选择题考"监督 vs 改进"。</p>',
  core: '<ul>' +
    '<li><b>质量评价</b>:对照 SLA/标准评服务质量。</li>' +
    '<li><b>满意度</b>:测客户感知,补"客观指标"看不到的体验。</li>' +
    '<li><b>审计合规</b>:查是否符合标准/合同/法规(如等保)。</li>' +
    '</ul>' +
    '<div class="ex">改进是"自己提升",监督是"有人来查";两者互补,共同保证服务质量。</div>',
  pitfalls: '<div class="pit"><b>监督 ≠ 找茬。</b>它是独立、客观的质量与合规保障,结果用于改进而非惩罚。</div>',
  quiz: [
    { type: 'choice', q: '监督管理与持续改进的区别是?', options: ['改进是外部审视、监督是内部PDCA', '改进是内部PDCA、监督是独立外部审视', '两者相同', '监督只看技术'], answer: 1, source: '高频', explain: '改进偏内部 PDCA,监督偏独立外部审视。' }
  ],
  links: '<p>下一篇:<a href="#/l/supervise/02-quality">服务质量评价</a></p>'
});
