SPM.registerLesson({
  id: 'supervise/03-satisfaction',
  module: 'supervise',
  order: 3,
  title: '客户满意度管理',
  minutes: 4,
  keywords: ['满意度', 'CSAT', 'NPS', '问卷', '闭环'],
  concept: '<p><gd data-term="satisfaction">客户满意度</gd>测客户感知与期望的差。常用 <gd data-term="nps">NPS(净推荐值)</b></gd>测忠诚度、CSAT 测单次满意。测完要分析、整改、回访闭环。</p>',
  exam: '<p><b>考纲定位:</b>监督篇,选择题考 NPS/CSAT。</p>',
  core: '<ul>' +
    '<li><b>CSAT</b>:单次服务后满意评分("这次满意吗")。</li>' +
    '<li><b>NPS</b>:"愿不愿推荐给他人",推荐者%−贬损者%。</li>' +
    '<li><b>闭环</b>:低分要追原因、整改、回访——否则测了也白测。</li>' +
    '</ul>' +
    '<div class="ex">满意度数据若只收集不行动,客户会更不满——"问了又不改"比不问更糟。</div>',
  pitfalls: '<div class="pit"><b>高满意度 ≠ 高忠诚度。</b>满意可能只是"没更好选择";NPS 测推荐意愿更贴近忠诚。</div>',
  quiz: [
    { type: 'choice', q: '用"是否愿意推荐"衡量客户忠诚度的指标是?', options: ['CSAT', 'NPS', 'MTBF', 'KPI'], answer: 1, source: '高频', explain: 'NPS 以推荐意愿测忠诚度。' }
  ],
  links: '<p>上一课:<a href="#/l/supervise/02-quality">服务质量评价</a> · 下一课:<a href="#/l/supervise/04-audit">审计与合规</a></p>'
});
