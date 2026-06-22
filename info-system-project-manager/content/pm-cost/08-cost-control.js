ISPM.registerLesson({
  id: 'pm-cost/08-cost-control',
  module: 'pm-cost',
  order: 8,
  title: '控制成本',
  minutes: 4,
  keywords: ['控制成本', 'TCPI', '完工尚需绩效指数', '偏差分析', '纠偏'],
  concept: '<p><b>控制成本</b>就是监督项目成本状态、管理成本基准变更，并在出现偏差时采取纠偏措施。核心工具就是<gd data-term="evm">挣值分析</gd>。本课补一个常考指标：TCPI。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考 TCPI。案例分析综合运用挣值做诊断和纠偏建议。</p>',
  core: '<p><b>TCPI（完工尚需绩效指数）：</b>为了达成目标，剩余工作必须达到的成本效率。</p>' +
    '<ul><li>以 <b>BAC</b> 为目标：TCPI = (BAC − EV) / (BAC − AC)</li>' +
    '<li>以 <b>EAC</b> 为目标：TCPI = (BAC − EV) / (EAC − AC)</li></ul>' +
    '<p>含义：分子是"剩余要完成的工作价值"，分母是"剩余可用的钱"。<b>TCPI>1</b> 说明剩余工作必须比之前更高效才能达标（压力大）；<b>TCPI<1</b> 说明有余地。</p>' +
    '<p><b>挣值分析在控制成本中的完整应用：</b>测量当前绩效（SV/CV/SPI/CPI）→ 预测未来（EAC/ETC/VAC）→ 判断达标压力（TCPI）→ 提出纠偏措施。</p>' +
    '<div class="ex"><b>纠偏措施示例：</b>成本超支（CPI<1）→ 优化资源配置、削减非关键开支、走变更控制申请追加预算；进度落后（SPI<1）→ 赶工或快速跟进（注意赶工增成本）。</div>',
  pitfalls: '<div class="pit"><b>误解 1：TCPI 越大越好。</b> 恰恰相反。TCPI>1 意味着剩余工作必须比过去更高效才能达标，压力更大；TCPI 越接近或小于 1 越轻松。</div>' +
    '<div class="pit"><b>误解 2：发现超支就直接追加预算。</b> 应先分析偏差原因，优先用管理手段纠偏（优化资源、压缩开支）；追加预算（动用管理储备/变更成本基准）需走变更控制审批。</div>',
  quiz: [
    {
      type: 'choice',
      q: '以 BAC 为目标的 TCPI 计算公式是：',
      options: [
        '(BAC − EV) / (BAC − AC)',
        '(BAC − AC) / (BAC − EV)',
        'EV / AC',
        'BAC / EAC'
      ],
      answer: 0,
      explain: '以 BAC 为目标：TCPI = (BAC−EV)/(BAC−AC)，即剩余工作价值 ÷ 剩余可用资金。TCPI>1 说明剩余工作必须更高效才能达标。'
    },
    {
      type: 'choice',
      q: '挣值分析显示某项目 CPI=0.85、SPI=0.9，项目经理应：',
      options: [
        '不用管，继续按原计划',
        '分析偏差原因并采取纠偏措施（如优化资源、赶工等）',
        '立即终止项目',
        '只关注进度，忽略成本'
      ],
      answer: 1,
      explain: 'CPI<1 超支、SPI<1 落后，项目既超支又落后。应分析原因并纠偏：成本上优化资源配置，进度上考虑赶工或快速跟进，必要时走变更控制。'
    }
  ],
  links: '<p>相关术语：<gd data-term="evm">挣值管理</gd>、<gd data-term="cpi">CPI</gd></p>' +
    '<p>上一课：<a href="#/l/pm-cost/07-s-curve">S 曲线与挣值图</a> · 进入下一模块：<a href="#/l/pm-quality/01-quality-overview">质量管理概述</a></p>'
});
