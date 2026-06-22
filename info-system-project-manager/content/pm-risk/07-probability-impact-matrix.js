ISPM.registerLesson({
  id: 'pm-risk/07-probability-impact-matrix',
  module: 'pm-risk',
  order: 7,
  title: '概率影响矩阵详解',
  minutes: 4,
  keywords: ['概率影响矩阵', '风险值', '风险分级', '风险紧迫性', '风险分解结构', 'RBS'],
  concept: '<p>本课深入讲定性分析的核心工具<gd data-term="probability-impact">概率影响矩阵</gd>，以及风险分类工具 RBS。这是把"一堆风险"变成"有序清单"的关键方法。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。会算风险值、按矩阵分级，理解 RBS。</p>',
  core: '<p><b>概率影响矩阵用法：</b></p>' +
    '<ul><li>给概率和影响分别赋值（如概率 0.1/0.3/0.5/0.7/0.9，影响 0.05/0.1/0.2/0.4/0.8）。</li>' +
    '<li><b>风险值 = 概率值 × 影响值</b>。</li>' +
    '<li>按风险值落入红（高）/黄（中）/绿（低）区，确定优先级。</li></ul>' +
    '<div class="ex"><b>例：</b>风险 A 概率 0.5、影响 0.4 → 风险值 = 0.20；风险 B 概率 0.9、影响 0.1 → 风险值 = 0.09。A 优先级高于 B，尽管 B 更可能发生。</div>' +
    '<p><b>风险紧迫性评估：</b>有些风险需要尽快应对（如即将到来的截止期），紧迫性高的优先处理。</p>' +
    '<p><b>风险分解结构（RBS）：</b>类似 WBS，把风险按类别分层组织（如技术风险、管理风险、商业风险、外部风险），帮助系统化识别和分类风险。</p>',
  pitfalls: '<div class="pit"><b>误解 1：概率高的风险一定优先。</b> 优先级看<em>风险值（概率×影响）</em>。一个低概率但高影响的风险，风险值可能高于高概率低影响的风险。</div>' +
    '<div class="pit"><b>误解 2：RBS 就是 WBS。</b> RBS 是风险分解结构（按风险类别分层），WBS 是工作分解结构（按可交付成果分层）。名字像，对象不同。</div>',
  quiz: [
    {
      type: 'choice',
      q: '风险A：概率0.3、影响0.8；风险B：概率0.7、影响0.2。关于优先级，正确的是：',
      options: [
        'B 优先，因为概率更高',
        'A 优先，风险值0.24 > B的0.14',
        '两者优先级相同',
        '无法判断'
      ],
      answer: 1,
      source: '高频考点',
      explain: '风险值=概率×影响。A=0.3×0.8=0.24，B=0.7×0.2=0.14。A的风险值更高，优先级更高，尽管B发生概率更大。'
    },
    {
      type: 'choice',
      q: '将风险按"技术、管理、商业、外部"等类别分层组织的工具是：',
      options: ['WBS', 'RBS（风险分解结构）', 'OBS', 'RACI'],
      answer: 1,
      explain: 'RBS（Risk Breakdown Structure，风险分解结构）按风险类别分层组织风险，帮助系统化识别和分类，类似 WBS 但对象是风险。'
    }
  ],
  links: '<p>相关术语：<gd data-term="probability-impact">概率影响矩阵</gd></p><p>上一课：<a href="#/l/pm-risk/06-risk-monitoring">实施与监督风险</a> · 下一课：<a href="#/l/pm-risk/08-risk-register">风险登记册与报告</a></p>'
});
