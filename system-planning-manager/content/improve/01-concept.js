SPM.registerLesson({
  id: 'improve/01-concept',
  module: 'improve',
  order: 1,
  title: '持续改进的概念',
  minutes: 4,
  keywords: ['持续改进', 'CSI', '闭环', '基线', '目标'],
  concept: '<p><gd data-term="csi">持续服务改进(CSI)</gd>让服务"越用越好":对照<b>基线</b>与目标,发现差距,实施改进,再测量验证——形成闭环。改进不是一次性,是常态。</p>',
  exam: '<p><b>考纲定位:</b>改进篇核心,案例常考"如何持续改进"。</p>',
  core: '<ul>' +
    '<li><b>改进闭环</b>:定义目标 → 现状基线 → 差距分析 → 改进方案 → 实施 → 验证。</li>' +
    '<li><b>驱动</b>:SLA 未达标、事件重复、客户投诉、新技术机会。</li>' +
    '<li><b>方法</b>:PDCA、基准对标、根本原因分析。</li>' +
    '</ul>' +
    '<div class="ex">改进口诀:"先量基线、再找差距、定方案、做了再量"——不测量就没法说"改进了"。</div>',
  pitfalls: '<div class="pit"><b>没有基线的改进是"自我感觉"。</b>必须先有可量化的起点和目标,否则无法证明提升。</div>',
  quiz: [
    { type: 'choice', q: '持续改进要证明"提升了",前提是要有?', options: ['更多人员', '可量化的基线与目标', '更高预算', '新工具'], answer: 1, source: '高频', explain: '改进需基线对照,否则无法证明提升。' }
  ],
  links: '<p>下一篇:<a href="#/l/improve/02-pdca">PDCA 循环</a></p>'
});
