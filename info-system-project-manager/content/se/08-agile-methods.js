ISPM.registerLesson({
  id: 'se/08-agile-methods',
  module: 'se',
  order: 8,
  title: '敏捷开发方法',
  minutes: 5,
  key: true,
  keywords: ['敏捷', 'Scrum', 'XP', '极限编程', '看板', '迭代', '冲刺', '敏捷宣言'],
  concept: '<p><gd data-term="agile">敏捷开发</gd>是应对需求频繁变化的主流方法。核心理念：<em>快速交付、拥抱变化、客户协作、持续迭代</em>。本课讲敏捷宣言和最常考的 Scrum。</p>',
  exam: '<p><b>考纲定位：</b>综合知识<b>高频必考</b>。敏捷宣言四条价值观、Scrum 的角色和事件常考。</p>',
  core: '<p><b>敏捷宣言四条价值观（左项优先于右项）：</b></p>' +
    '<ul><li><b>个体和互动</b> 高于 流程和工具</li>' +
    '<li><b>可工作的软件</b> 高于 详尽的文档</li>' +
    '<li><b>客户合作</b> 高于 合同谈判</li>' +
    '<li><b>响应变化</b> 高于 遵循计划</li></ul>' +
    '<p><b>Scrum 框架（最常用）：</b></p>' +
    '<ul><li><b>三个角色</b>：产品负责人（PO，负责产品待办列表和价值）、Scrum Master（服务团队、移除障碍）、开发团队。</li>' +
    '<li><b>核心事件</b>：冲刺（Sprint，1-4 周的固定迭代）、冲刺计划会、每日站会、冲刺评审会、冲刺回顾会。</li>' +
    '<li><b>三个工件</b>：产品待办列表、冲刺待办列表、增量。</li></ul>' +
    '<p><b>极限编程（XP）：</b>强调结对编程、测试驱动开发（TDD）、持续集成、小步快跑。<b>看板（Kanban）：</b>可视化工作流、限制在制品（WIP）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：敏捷不要文档、不要计划。</b> 敏捷是"可工作软件<em>高于</em>详尽文档""响应变化<em>高于</em>遵循计划"——是优先级，不是完全否定。敏捷仍有必要的文档和计划，只是更轻量灵活。</div>' +
    '<div class="pit"><b>误解 2：Scrum Master 是团队领导/项目经理。</b> Scrum Master 是<em>服务型</em>角色，职责是服务团队、移除障碍、维护流程，不是发号施令的领导。</div>' +
    '<div class="pit"><b>误解 3：敏捷适合所有项目。</b> 敏捷适合需求多变、不确定性高的项目。需求明确稳定、合规严格的项目（如航天）可能更适合预测型。</div>',
  quiz: [
    {
      type: 'choice',
      q: '敏捷宣言的四条价值观中，正确的一项是：',
      options: [
        '流程和工具高于个体和互动',
        '详尽的文档高于可工作的软件',
        '响应变化高于遵循计划',
        '合同谈判高于客户合作'
      ],
      answer: 2,
      source: '高频必考',
      explain: '敏捷宣言：个体和互动高于流程工具、可工作软件高于详尽文档、客户合作高于合同谈判、响应变化高于遵循计划。'
    },
    {
      type: 'choice',
      q: 'Scrum 中，负责服务团队、移除障碍、维护 Scrum 流程的角色是：',
      options: ['产品负责人（PO）', 'Scrum Master', '项目经理', '开发团队'],
      answer: 1,
      explain: 'Scrum Master 是服务型角色，负责帮助团队遵循 Scrum、移除障碍、保护团队。产品负责人（PO）负责产品价值和待办列表。'
    },
    {
      type: 'choice',
      q: 'Scrum 中固定时长（如2周）的迭代周期称为：',
      options: ['里程碑', '冲刺（Sprint）', '阶段', '基线'],
      answer: 1,
      explain: '冲刺（Sprint）是 Scrum 中固定时长（通常1-4周）的迭代周期，每个冲刺产出一个可工作的产品增量。'
    }
  ],
  links: '<p>相关术语：<gd data-term="agile">敏捷方法</gd></p><p>上一课：<a href="#/l/se/07-cmmi">CMMI 能力成熟度</a> · 下一课：<a href="#/l/se/09-devops">DevOps 与持续交付</a></p>'
});
