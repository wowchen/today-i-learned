SPM.registerLesson({
  id: 'pm/04-quality',
  module: 'pm',
  order: 4,
  title: '质量管理',
  minutes: 4,
  keywords: ['质量', '质量计划', 'QA', 'QC', 'PDCA'],
  concept: '<p>质量管理含<b>质量计划、质量保证(QA)、质量控制(QC)</b>。QA 偏过程(防患)、QC 偏结果(检验);配合 PDCA 持续改进。</p>',
  exam: '<p><b>考纲定位:</b>项目篇,选择题考 QA/QC 区别。</p>',
  core: '<ul>' +
    '<li><b>质量计划</b>:定标准与指标。</li>' +
    '<li><b>QA(质量保证)</b>:面向过程,确保流程正确。</li>' +
    '<li><b>QC(质量控制)</b>:面向产品,检验是否符合标准。</li>' +
    '</ul>' +
    '<div class="ex">QA 是"防病",QC 是"体检";服务项目两者都要,缺一不可。</div>',
  pitfalls: '<div class="pit"><b>QA ≠ QC。</b>QA 管过程合规,QC 管结果达标;混为一谈会让质量体系失效。</div>',
  quiz: [
    { type: 'choice', q: '面向过程、确保流程正确的是?', options: ['QC', 'QA', 'WBS', 'SLA'], answer: 1, source: '高频', explain: 'QA 面向过程做质量保证;QC 面向结果做控制。' }
  ],
  links: '<p>上一课:<a href="#/l/pm/03-cost">成本管理</a> · 下一课:<a href="#/l/pm/05-risk">风险管理</a></p>'
});
