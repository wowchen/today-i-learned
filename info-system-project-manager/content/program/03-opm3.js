ISPM.registerLesson({
  id: 'program/03-opm3',
  module: 'program',
  order: 3,
  title: 'OPM3 成熟度模型',
  minutes: 3,
  keywords: ['OPM3', '组织级项目管理成熟度', '最佳实践', '能力', '成果'],
  concept: '<p><gd data-term="opm3">OPM3</gd>（组织级项目管理成熟度模型）是用来评估和提升<em>组织</em>在项目、项目集、项目组合管理方面整体成熟度的工具。类似 CMMI 之于软件，OPM3 是之于项目管理。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解 OPM3 的目的和构成。</p>',
  core: '<p><b>OPM3 的核心：</b>帮助组织评估当前项目管理成熟度，并指明提升路径，使项目管理能力与组织战略对齐。</p>' +
    '<p><b>OPM3 三个基本要素：</b></p>' +
    '<ul><li><b>知识</b>：了解组织级项目管理和成熟度的最佳实践。</li>' +
    '<li><b>评估</b>：评估组织当前的成熟度水平，识别优势和差距。</li>' +
    '<li><b>改进</b>：根据评估结果制定改进计划，逐步提升。</li></ul>' +
    '<p><b>成熟度提升路径：</b>标准化 → 测量 → 控制 → 持续改进（SMCI）。</p>' +
    '<p>OPM3 关注的是<em>组织整体</em>的项目管理能力，而非单个项目经理或单个项目。</p>',
  pitfalls: '<div class="pit"><b>误解 1：OPM3 评估单个项目的成熟度。</b> OPM3 评估的是<em>组织整体</em>的项目管理成熟度（涵盖项目、项目集、组合三个层面），不是单个项目。</div>' +
    '<div class="pit"><b>误解 2：OPM3 和 CMMI 一样。</b> CMMI 针对<em>软件开发过程</em>成熟度；OPM3 针对<em>组织级项目管理</em>成熟度。领域不同。</div>',
  quiz: [
    {
      type: 'choice',
      q: 'OPM3 评估的是：',
      options: [
        '单个项目的进度',
        '组织整体的项目管理成熟度',
        '软件代码质量',
        '单个项目经理的能力'
      ],
      answer: 1,
      source: '高频考点',
      explain: 'OPM3（组织级项目管理成熟度模型）评估组织在项目、项目集、项目组合管理方面的整体成熟度，而非单个项目或个人。'
    }
  ],
  links: '<p>相关术语：<gd data-term="opm3">OPM3</gd></p><p>上一课：<a href="#/l/program/02-portfolio-management">项目组合管理</a> · 下一课：<a href="#/l/program/04-strategic-alignment">战略对齐</a></p>'
});
