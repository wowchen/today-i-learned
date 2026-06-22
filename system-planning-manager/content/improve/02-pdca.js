SPM.registerLesson({
  id: 'improve/02-pdca',
  module: 'improve',
  order: 2,
  title: 'PDCA 戴明环',
  minutes: 5,
  key: true,
  keywords: ['PDCA', '计划', '执行', '检查', '处理', '戴明环'],
  concept: '<p><gd data-term="pdca">PDCA</gd>是持续改进的基本方法:<b>Plan 计划 → Do 执行 → Check 检查 → Act 处理</b>,循环往复、螺旋上升。</p>',
  exam: '<p><b>考纲定位:</b>改进篇高频,选择与案例都考。</p>',
  core: '<ul>' +
    '<li><b>Plan</b>:定目标、方案、资源、指标。</li>' +
    '<li><b>Do</b>:按计划实施(可小范围试点)。</li>' +
    '<li><b>Check</b>:对照指标测量,看是否达成。</li>' +
    '<li><b>Act</b>:达标则标准化推广;未达标则纠偏,进入下一轮。</li>' +
    '</ul>' +
    '<div class="ex">PDCA 不是一次跑完,而是"每轮把经验沉淀、把标准抬高",形成螺旋上升。</div>',
  pitfalls: '<div class="pit"><b>Check 容易被忽略。</b>做了不检查等于没闭环;Check 后若不 Act(标准化或纠偏),下一轮又从零开始。</div>',
  quiz: [
    { type: 'choice', q: 'PDCA 循环中"对照指标测量是否达成"的环节是?', options: ['Plan', 'Do', 'Check', 'Act'], answer: 2, source: '高频', explain: 'Check 负责测量对照,验证效果。' }
  ],
  links: '<p>上一课:<a href="#/l/improve/01-concept">改进概念</a> · 下一课:<a href="#/l/improve/03-measurement">服务测量</a></p>'
});
