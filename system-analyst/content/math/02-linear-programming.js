SAN.registerLesson({
  id: 'math/02-linear-programming',
  module: 'math',
  order: 2,
  title: '线性规划',
  minutes: 4,
  keywords: ['线性规划', '目标函数', '约束条件', '可行域', '最优解'],
  concept: '<p><gd data-term="linear-programming">线性规划</gd>在线性约束下求线性目标的最优(最大利润/最小成本)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算。重点:建模(目标函数+约束)、可行域顶点。</p>',
  core: '<div class="ex"><b>建模三要素:</b>① 决策变量(生产多少A、B);② 目标函数(max 利润);③ 约束条件(资源、工时上限,变量≥0)。<br>最优解通常在<b>可行域的顶点</b>取得,小规模可图解或单纯形法求。</div>',
  pitfalls: '<div class="pit"><b>误解:最优解在可行域内部。</b>线性规划最优解必在<b>可行域顶点(边界)</b>取得,不在内部。</div>',
  quiz: [
    { type: 'choice', q: '线性规划的最优解通常出现在?', options: ['可行域内部', '可行域的顶点', '原点', '无穷远'], answer: 1, source: '高频', explain: '最优解在可行域顶点取得。' }
  ],
  links: '<p>上一课:<a href="#/l/math/01-graph">图论</a> · 下一课:<a href="#/l/math/03-decision">决策论</a></p>'
});
