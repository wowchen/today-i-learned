ISPM.registerLesson({
  id: 'pm-quality/06-six-sigma',
  module: 'pm-quality',
  order: 6,
  title: '六西格玛与质量体系',
  minutes: 4,
  keywords: ['六西格玛', 'DMAIC', '全面质量管理', 'TQM', 'ISO9000', '质量管理体系'],
  concept: '<p>除了七工具，还有几个常考的质量管理"大框架"：六西格玛、全面质量管理（TQM）、ISO9000。本课快速过一遍它们的核心思想。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。常考六西格玛的含义和 DMAIC 步骤、TQM 的全员理念。</p>',
  core: '<p><b>六西格玛（6σ）：</b></p>' +
    '<ul><li>追求极低缺陷率的质量管理方法，6σ 水平意味着每百万次机会缺陷数（DPMO）约 3.4。</li>' +
    '<li>核心方法 <b>DMAIC</b>：定义（Define）→ 测量（Measure）→ 分析（Analyze）→ 改进（Improve）→ 控制（Control）。</li></ul>' +
    '<p><b>全面质量管理（TQM）：</b>全员参与、全过程、以顾客为中心、持续改进的质量管理理念。强调"质量是全员的责任"。</p>' +
    '<p><b>ISO 9000 族标准：</b>质量管理体系标准，提供质量管理的规范框架。八项质量管理原则（以顾客为关注焦点、领导作用、全员参与、过程方法等）。</p>' +
    '<p><b>PDCA 循环</b>（戴明环）：计划-执行-检查-处理，持续改进的基本模式，贯穿所有质量体系。</p>',
  pitfalls: '<div class="pit"><b>误解 1：六西格玛就是用统计工具。</b> 六西格玛是一套以 DMAIC 为骨架的系统改进方法，统计工具只是其中手段，核心是数据驱动的持续改进。</div>' +
    '<div class="pit"><b>误解 2：质量是质量部门的事。</b> TQM 强调质量是<em>全员</em>责任，管理层承担主要责任，每个环节都对质量负责。</div>',
  quiz: [
    {
      type: 'choice',
      q: '六西格玛改进过程 DMAIC 的正确顺序是：',
      options: [
        '定义→测量→分析→改进→控制',
        '定义→分析→测量→控制→改进',
        '测量→定义→分析→改进→控制',
        '分析→定义→测量→改进→控制'
      ],
      answer: 0,
      source: '高频考点',
      explain: 'DMAIC：Define（定义）→ Measure（测量）→ Analyze（分析）→ Improve（改进）→ Control（控制），是六西格玛的核心改进流程。'
    },
    {
      type: 'fill',
      q: '持续改进的基本循环 PDCA 指：计划、执行、检查、____。',
      answer: ['处理', '行动', '改进', 'Act'],
      explain: 'PDCA（戴明环）：Plan计划、Do执行、Check检查、Act处理/改进。是质量持续改进的基本模式。'
    }
  ],
  links: '<p>相关术语：<gd data-term="pdca">PDCA循环</gd></p><p>上一课：<a href="#/l/pm-quality/05-seven-tools">质量七工具</a> · 进入下一模块：<a href="#/l/pm-risk/01-risk-overview">风险管理概述</a></p>'
});
