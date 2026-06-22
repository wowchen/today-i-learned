ISPM.registerLesson({
  id: 'pm-hr/08-raci-matrix',
  module: 'pm-hr',
  order: 8,
  title: 'RACI 责任分配矩阵',
  minutes: 4,
  key: true,
  keywords: ['RACI', '责任分配矩阵', 'RAM', '执行', '负责', '咨询', '知会'],
  concept: '<p>项目里最怕"这事归谁管说不清"。<gd data-term="raci">RACI 矩阵</gd>是一张表，把每项工作和每个角色对应起来，明确"谁干、谁拍板、问谁、告诉谁"。它是责任分配矩阵（RAM）最常见的形式。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。RACI 四个字母的含义必须记牢，尤其 R 和 A 的区别。</p>',
  core: '<p><b>RACI 四个角色：</b></p>' +
    '<ul><li><b>R（Responsible，执行者）</b>：实际<em>干活</em>的人。可以有多个。</li>' +
    '<li><b>A（Accountable，负责者）</b>：对结果<em>负总责、拍板</em>的人。<b>每项工作只能有一个 A</b>。</li>' +
    '<li><b>C（Consulted，被咨询者）</b>：提供意见、需要双向沟通的人。</li>' +
    '<li><b>I（Informed，被知会者）</b>：需要被单向告知结果的人。</li></ul>' +
    '<div class="ex"><b>例：</b>"系统上线"这项工作——运维工程师执行(R)、项目经理负总责(A)、安全专家被咨询(C)、各部门主管被知会(I)。</div>' +
    '<p><b>关键规则：每行（每项工作）有且只有一个 A</b>，避免责任不清或多头负责；R 可以有多个（多人协作执行）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：R 和 A 是一回事。</b> R 是<em>干活的人</em>（执行），A 是<em>担责拍板的人</em>（负责）。一项工作 R 可多个，但 <b>A 必须唯一</b>。</div>' +
    '<div class="pit"><b>误解 2：C 和 I 一样。</b> C（被咨询）是<em>双向</em>沟通——征求其意见；I（被知会）是<em>单向</em>告知——只通报结果。</div>' +
    '<div class="pit"><b>误解 3：一项工作可以没有 A 或有多个 A。</b> 每项工作必须有且仅有一个 A，否则责任不清。</div>',
  quiz: [
    {
      type: 'choice',
      q: 'RACI 矩阵中，对某项工作"负总责、最终拍板"的角色是：',
      options: ['R（执行）', 'A（负责）', 'C（咨询）', 'I（知会）'],
      answer: 1,
      source: '高频考点',
      explain: 'A（Accountable）对工作结果负总责、有最终决定权，每项工作有且只有一个 A。R（Responsible）是实际执行者，可以有多个。'
    },
    {
      type: 'choice',
      q: '关于 RACI 矩阵，下列说法正确的是：',
      options: [
        '每项工作可以有多个 A',
        '每项工作有且只有一个 A，R 可以有多个',
        'C 和 I 都是单向告知',
        'R 是负总责的人'
      ],
      answer: 1,
      source: '高频考点',
      explain: '每项工作有且仅有一个 A（负责/拍板），R（执行）可以有多个。C 是双向咨询，I 是单向知会。'
    }
  ],
  links: '<p>相关术语：<gd data-term="raci">RACI矩阵</gd></p><p>上一课：<a href="#/l/pm-hr/07-stakeholder-management">干系人管理</a> · 进入下一模块：<a href="#/l/pm-proc/01-procurement-overview">采购管理概述</a></p>'
});
