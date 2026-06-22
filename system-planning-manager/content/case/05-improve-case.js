SPM.registerLesson({
  id: 'case/05-improve-case',
  module: 'case',
  order: 5,
  title: '案例:持续改进与 PDCA',
  minutes: 5,
  keywords: ['改进案例', 'PDCA', '基线', 'KPI', '闭环'],
  concept: '<p>改进类案例给"SLA 未达标/投诉多/效率低"场景,考如何用 <gd data-term="pdca">PDCA</gd> 改进。答题:<b>立基线与目标 → 测量找差距 → 分析根因 → 改进实施 → 验证标准化</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例篇高频。</p>',
  core: '<ul>' +
    '<li><b>Plan</b>:定目标与 KPI、立基线。</li>' +
    '<li><b>Do</b>:小范围试点改进。</li>' +
    '<li><b>Check</b>:测量对照,看是否达成。</li>' +
    '<li><b>Act</b>:达标则标准化,未达标纠偏再循环。</li>' +
    '</ul>' +
    '<div class="ex">改进题万能答:先 PDCA 四步铺开,每步结合场景举一例(如 Check 用 SLI 对比 SLO)。</div>',
  pitfalls: '<div class="pit"><b>改进不是"拍脑袋定措施"。</b>必须先有基线与测量,否则无法证明改进有效。</div>',
  quiz: [
    { type: 'choice', q: 'PDCA 改进中"先立基线再设目标"属于哪个环节?', options: ['Plan', 'Do', 'Check', 'Act'], answer: 0, source: '案例', explain: '定目标、立基线属 Plan 阶段。' }
  ],
  links: '<p>上一课:<a href="#/l/case/04-sla-availability">SLA 与可用性</a> · 下一篇:<a href="#/l/case/06-team-case">团队管理案例</a></p>'
});
