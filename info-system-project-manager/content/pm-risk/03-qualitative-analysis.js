ISPM.registerLesson({
  id: 'pm-risk/03-qualitative-analysis',
  module: 'pm-risk',
  order: 3,
  title: '定性风险分析',
  minutes: 4,
  key: true,
  keywords: ['定性风险分析', '概率影响矩阵', '风险排序', '优先级'],
  concept: '<p>风险识别出一大堆，但精力有限，要分轻重缓急。<b>定性风险分析</b>就是评估每个风险的<em>发生概率</em>和<em>影响程度</em>，给风险<b>排优先级</b>，挑出值得重点关注的。它是<b>快速、主观</b>的初步筛选。</p>',
  exam: '<p><b>考纲定位：</b>综合知识高频。核心工具是<gd data-term="probability-impact">概率影响矩阵</gd>。常考定性 vs 定量的区别。</p>',
  core: '<p><b>核心工具：概率和影响矩阵</b></p>' +
    '<ul><li>横轴：影响程度；纵轴：发生概率。</li>' +
    '<li>概率 × 影响 = 风险值，据此把风险分为高/中/低优先级（红黄绿区）。</li>' +
    '<li>高优先级风险进入定量分析或优先制定应对措施。</li></ul>' +
    '<figure class="fig"><svg width="240" height="160" viewBox="0 0 240 160">' +
    '<text x="120" y="14" text-anchor="middle" fill="var(--ink2)" font-size="10">影响 →</text>' +
    '<text x="12" y="85" text-anchor="middle" fill="var(--ink2)" font-size="10" transform="rotate(-90 12 85)">概率 →</text>' +
    '<rect x="30" y="25" width="60" height="35" fill="rgba(243,156,18,.15)" stroke="var(--line2)"/>' +
    '<rect x="90" y="25" width="60" height="35" fill="rgba(211,32,32,.18)" stroke="var(--line2)"/>' +
    '<rect x="150" y="25" width="60" height="35" fill="rgba(211,32,32,.25)" stroke="var(--line2)"/>' +
    '<rect x="30" y="60" width="60" height="35" fill="rgba(26,122,74,.12)" stroke="var(--line2)"/>' +
    '<rect x="90" y="60" width="60" height="35" fill="rgba(243,156,18,.15)" stroke="var(--line2)"/>' +
    '<rect x="150" y="60" width="60" height="35" fill="rgba(211,32,32,.18)" stroke="var(--line2)"/>' +
    '<rect x="30" y="95" width="60" height="35" fill="rgba(26,122,74,.18)" stroke="var(--line2)"/>' +
    '<rect x="90" y="95" width="60" height="35" fill="rgba(26,122,74,.12)" stroke="var(--line2)"/>' +
    '<rect x="150" y="95" width="60" height="35" fill="rgba(243,156,18,.15)" stroke="var(--line2)"/>' +
    '<text x="180" y="46" text-anchor="middle" fill="var(--bad)" font-size="9">高</text>' +
    '<text x="60" y="116" text-anchor="middle" fill="var(--ok)" font-size="9">低</text>' +
    '</svg><figcaption>图 · 概率影响矩阵（右上角高优先级）</figcaption></figure>' +
    '<p><b>定性分析特点：</b>快速、成本低、主观判断。是定量分析前的筛选。</p>',
  pitfalls: '<div class="pit"><b>误解 1：定性分析给出精确的数字结论。</b> 定性分析是<em>主观</em>评估和排序（高/中/低），不算具体数值。算具体数值（如对工期/成本的量化影响）是定量分析。</div>' +
    '<div class="pit"><b>误解 2：所有风险都要做定量分析。</b> 一般先定性筛选，只对高优先级风险做定量分析（定量耗时、成本高）。定量分析不是必做过程。</div>',
  quiz: [
    {
      type: 'choice',
      q: '定性风险分析的核心工具是：',
      options: ['蒙特卡洛模拟', '概率和影响矩阵', '决策树', '敏感性分析'],
      answer: 1,
      source: '高频考点',
      explain: '定性风险分析用概率和影响矩阵，根据风险的发生概率和影响程度对风险排优先级。蒙特卡洛、决策树、敏感性分析属于定量分析。'
    },
    {
      type: 'choice',
      q: '关于定性风险分析，正确的是：',
      options: [
        '需要精确的数值计算',
        '是快速、主观的风险优先级排序',
        '必须对所有风险逐一进行',
        '是定量分析之后的步骤'
      ],
      answer: 1,
      explain: '定性风险分析快速、成本低、基于主观判断，对风险排优先级，是定量分析之前的筛选步骤。'
    }
  ],
  links: '<p>上一课：<a href="#/l/pm-risk/02-risk-identification">识别风险</a> · 下一课：<a href="#/l/pm-risk/04-quantitative-analysis">定量风险分析</a></p>'
});
