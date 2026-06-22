SPM.registerLesson({
  id: 'improve/03-measurement',
  module: 'improve',
  order: 3,
  title: '服务测量与指标体系',
  minutes: 5,
  keywords: ['服务测量', 'KPI', 'CSF', '指标', '基线'],
  concept: '<p>改进靠数据说话。<b>关键成功因素(CSF)</b>定"成败看哪几条",<b>KPI</b>把这几条变成可量化指标。测量要先立<gd data-term="baseline">基线</gd>、再设目标、持续采集。</p>',
  exam: '<p><b>考纲定位:</b>改进篇,选择题考 CSF/KPI 关系。</p>',
  core: '<ul>' +
    '<li><b>CSF</b>:必须做到的关键条件(定性)。</li>' +
    '<li><b>KPI</b>:对应 CSF 的量化指标(定量),如"事件解决率≥95%"。</li>' +
    '<li><b>测量维度</b>:合规度、SLA 达成、效率(解决时效)、客户满意度。</li>' +
    '</ul>' +
    '<div class="ex">先定 CSF(成败看哪几条)→ 再设 KPI(怎么量)→ 采集 → 对照基线 → 改进。</div>',
  pitfalls: '<div class="pit"><b>KPI 不是越多越好。</b>指标过滥会分散注意力;聚焦少数关键指标才有牵引力。</div>',
  quiz: [
    { type: 'choice', q: 'KPI 与 CSF 的关系是?', options: ['互不相关', 'KPI 是 CSF 的量化体现', 'CSF 是 KPI 的子集', '两者相同'], answer: 1, source: '高频', explain: 'CSF 定关键条件,KPI 是其量化指标。' }
  ],
  links: '<p>上一课:<a href="#/l/improve/02-pdca">PDCA</a> · 下一课:<a href="#/l/improve/04-report">服务报告</a></p>'
});
