SAN.registerLesson({
  id: 'math/06-forecast',
  module: 'math',
  order: 6,
  title: '预测技术',
  minutes: 4,
  keywords: ['预测', '移动平均', '指数平滑', '回归', '德尔菲', '定性定量'],
  concept: '<p>预测分定性(德尔菲、专家)与定量(时间序列、回归)两类,系分综合知识与案例偶考定量计算。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:移动平均、指数平滑、德尔菲法。</p>',
  core: '<table><tr><th>方法</th><th>思路</th></tr>' +
    '<tr><td>移动平均</td><td>取近 n 期平均作为下期预测</td></tr>' +
    '<tr><td>指数平滑</td><td>新预测=α×本期实际+(1−α)×本期预测,近期权重更大</td></tr>' +
    '<tr><td>回归分析</td><td>找自变量与因变量的关系式</td></tr>' +
    '<tr><td>德尔菲法</td><td>匿名多轮征询专家意见趋于一致(定性)</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:指数平滑各期权重相同。</b>指数平滑<b>近期权重更大</b>、远期按指数衰减,这正是它区别于简单平均之处。</div>',
  quiz: [
    { type: 'choice', q: '匿名多轮征询专家意见的定性预测法是?', options: ['移动平均', '指数平滑', '德尔菲法', '回归分析'], answer: 2, source: '高频', explain: '德尔菲法是匿名多轮专家征询。' }
  ],
  links: '<p>上一课:<a href="#/l/math/05-network-plan">网络计划</a> · 下一课:<a href="#/l/math/07-prob-stat">概率统计基础</a></p>'
});
