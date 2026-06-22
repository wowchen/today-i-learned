ISPM.registerLesson({
  id: 'pm-cost/03-budget-determination',
  module: 'pm-cost',
  order: 3,
  title: '制定预算',
  minutes: 4,
  keywords: ['制定预算', '成本基准', 'BAC', '储备', '资金需求'],
  concept: '<p>把各活动的成本估算汇总起来，加上储备，形成项目的<b>成本基准</b>，这就是<b>制定预算</b>。成本基准是后续衡量成本绩效（挣值）的标尺。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考成本基准的构成、BAC 的含义。是挣值分析的前置概念。</p>',
  core: '<p><b>预算的逐层构成（从下往上加）：</b></p>' +
    '<ul><li>活动成本估算 + 活动应急储备 = 工作包成本</li>' +
    '<li>工作包成本汇总 = 控制账户成本</li>' +
    '<li>控制账户成本 + 项目应急储备 = <b>成本基准（Cost Baseline）</b></li>' +
    '<li>成本基准 + 管理储备 = <b>项目总预算</b></li></ul>' +
    '<figure class="fig"><svg width="300" height="180" viewBox="0 0 300 180">' +
    '<rect x="60" y="150" width="180" height="24" fill="none" stroke="var(--ink2)" stroke-width="1"/>' +
    '<text x="150" y="166" text-anchor="middle" fill="var(--ink)" font-size="11">活动成本估算</text>' +
    '<rect x="60" y="120" width="180" height="24" fill="none" stroke="var(--ink2)" stroke-width="1"/>' +
    '<text x="150" y="136" text-anchor="middle" fill="var(--ink)" font-size="11">+ 应急储备 = 工作包</text>' +
    '<rect x="60" y="90" width="180" height="24" fill="none" stroke="var(--ok)" stroke-width="1.5"/>' +
    '<text x="150" y="106" text-anchor="middle" fill="var(--ink)" font-size="11">汇总 = 控制账户</text>' +
    '<rect x="40" y="55" width="220" height="28" fill="none" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="150" y="73" text-anchor="middle" fill="var(--ink)" font-size="11">+ 项目应急储备 = 成本基准</text>' +
    '<rect x="20" y="15" width="260" height="32" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>' +
    '<text x="150" y="35" text-anchor="middle" fill="var(--ink)" font-size="11">+ 管理储备 = 项目总预算</text>' +
    '</svg><figcaption>图 · 预算的逐层构成</figcaption></figure>' +
    '<p><b>BAC（Budget At Completion，完工预算）</b> = 成本基准的总额，即项目计划总花费。后面挣值分析全靠它。</p>' +
    '<p>成本基准通常表现为 <b>S 曲线</b>（累计成本随时间的曲线）。',
  pitfalls: '<div class="pit"><b>误解 1：成本基准 = 项目总预算。</b> 成本基准<em>不含</em>管理储备；成本基准 + 管理储备 = 项目总预算。动用管理储备需审批，并会改变成本基准。</div>' +
    '<div class="pit"><b>误解 2：BAC 是实际花的钱。</b> BAC 是<em>计划</em>的完工总预算（成本基准总额），不是实际成本（AC）。</div>',
  quiz: [
    {
      type: 'choice',
      q: '关于成本基准和项目总预算，正确的是：',
      options: [
        '成本基准 = 项目总预算',
        '成本基准 + 管理储备 = 项目总预算',
        '成本基准 = 项目总预算 + 管理储备',
        '两者无关'
      ],
      answer: 1,
      source: '高频考点',
      explain: '成本基准包含活动估算和应急储备，但不含管理储备。成本基准 + 管理储备 = 项目总预算。'
    },
    {
      type: 'fill',
      q: '完工预算的英文缩写是____，指项目计划的总花费。',
      answer: ['BAC'],
      explain: 'BAC（Budget At Completion）即完工预算，等于成本基准总额，是挣值分析的基础。'
    }
  ],
  links: '<p>上一课：<a href="#/l/pm-cost/02-estimation-methods">成本估算方法</a> · 下一课：<a href="#/l/pm-cost/04-evm-basics">挣值管理基础</a></p>'
});
