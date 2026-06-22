SAN.registerLesson({
  id: 'req/06-management',
  module: 'req',
  order: 6,
  title: '需求管理与变更',
  minutes: 5,
  key: true,
  keywords: ['需求管理', '需求基线', '需求变更', '需求跟踪', '变更控制', '追踪矩阵'],
  concept: '<p>需求会变,需求管理负责<b>基线化、变更控制、双向跟踪</b>,防止"需求蔓延"。确认后的需求纳入<gd data-term="req-baseline">需求基线</gd>。</p>',
  exam: '<p><b>考纲定位:</b>系分高频(综合+论文)。重点:变更控制流程、需求跟踪矩阵、需求蔓延。</p>',
  core: '<p><b>需求变更流程:</b>提出 → 影响分析 → CCB 评审 → 批准/拒绝 → 实施并更新基线。</p>' +
    '<div class="ex"><b>需求跟踪矩阵</b>双向关联"需求↔设计↔代码↔测试",改一处能查到牵连。<b>需求蔓延</b>:未经控制的需求扩大,是项目失败常见原因,靠基线+变更控制压住。</div>',
  pitfalls: '<div class="pit"><b>误解:小改动不用走变更流程。</b>积少成多就是需求蔓延。<b>任何对基线的修改都应走变更控制</b>,评估影响后再定。</div>',
  quiz: [
    { type: 'choice', q: '防止"需求蔓延"的核心手段是?', options: ['不让用户提需求', '需求基线+变更控制', '加班赶工', '砍掉所有变更'], answer: 1, source: '高频', explain: '基线化并对变更走控制流程,防止失控蔓延。' },
    { type: 'choice', q: '双向关联需求与设计、代码、测试的工具是?', options: ['甘特图', '需求跟踪矩阵', '鱼骨图', 'WBS'], answer: 1, source: '高频', explain: '需求跟踪矩阵实现双向追踪。' }
  ],
  links: '<p>上一课:<a href="#/l/req/05-validation">需求验证</a> · 下一课:<a href="#/l/req/07-usecase">用例建模</a></p>'
});
