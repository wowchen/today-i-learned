SPM.registerLesson({
  id: 'case/06-team-case',
  module: 'case',
  order: 6,
  title: '案例:团队与人员管理',
  minutes: 4,
  keywords: ['团队案例', 'RACI', '一/二/三线', '培训', '绩效'],
  concept: '<p>团队类案例常给"职责不清/响应慢/人员流失"场景。答:<b>理清层级(一/二/三线)、用 <gd data-term="raci">RACI</gd> 明职责、技能矩阵找短板定培训、合理 KPI 防扭曲</b>。</p>',
  exam: '<p><b>考纲定位:</b>案例篇。</p>',
  core: '<ul>' +
    '<li><b>职责</b>:RACI 分清执行/批准/咨询/知会。</li>' +
    '<li><b>层级</b>:一线快、二线深、三线专,明确升级规则。</li>' +
    '<li><b>能力</b>:技能矩阵 + 培训 + 知识库传承。</li>' +
    '</ul>' +
    '<div class="ex">"响应慢"常因层级不清或职责扯皮——RACI + 升级规则是解药。</div>',
  pitfalls: '<div class="pit"><b>别只说"加强培训"。</b>要落到"用技能矩阵找短板 + 培训考核 + 知识沉淀"才具体。</div>',
  quiz: [
    { type: 'choice', q: '用于分清执行/批准/咨询/知会职责的工具是?', options: ['WBS', 'RACI', '甘特图', 'ER图'], answer: 1, source: '案例', explain: 'RACI 矩阵界定角色职责。' }
  ],
  links: '<p>上一课:<a href="#/l/case/05-improve-case">改进案例</a> · 下一篇:<a href="#/l/case/07-cost-staffing">成本与人力测算</a></p>'
});
