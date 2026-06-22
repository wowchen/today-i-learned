SPM.registerLesson({
  id: 'pm/01-scope',
  module: 'pm',
  order: 1,
  title: '项目范围管理',
  minutes: 4,
  keywords: ['范围', 'WBS', '范围蔓延', '验收'],
  concept: '<p>范围管理确保项目"做且只做该做的"。用 <gd data-term="wbs">WBS(工作分解结构)</gd>把可交付成果拆成工作包;防范"范围蔓延"(Scope Creep)——未受控地新增需求。</p>',
  exam: '<p><b>考纲定位:</b>项目篇,选择题。</p>',
  core: '<ul>' +
    '<li><b>范围定义</b>:收集需求 → 范围说明书 → WBS。</li>' +
    '<li><b>WBS</b>:逐层分解到可管理的工作包。</li>' +
    '<li><b>范围蔓延</b>:未经变更流程的"顺手加"是新需求,要走变更控制。</li>' +
    '</ul>' +
    '<div class="ex">"客户又加个小功能"——别直接做,走变更评估,否则工期成本失控。</div>',
  pitfalls: '<div class="pit"><b>范围蔓延是项目最常见的失控源。</b>不加控制的"加一点"最终会压垮工期与预算。</div>',
  quiz: [
    { type: 'choice', q: '把项目可交付成果逐层分解为工作包的工具是?', options: ['甘特图', 'WBS', 'ER图', '燃尽图'], answer: 1, source: '高频', explain: 'WBS 工作分解结构逐层分解可交付成果。' }
  ],
  links: '<p>下一篇:<a href="#/l/pm/02-schedule">进度管理</a></p>'
});
