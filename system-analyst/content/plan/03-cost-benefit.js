SAN.registerLesson({
  id: 'plan/03-cost-benefit',
  module: 'plan',
  order: 3,
  title: '成本效益分析',
  minutes: 5,
  keywords: ['成本效益', 'ROI', '净现值', 'NPV', '回收期', '投资回报'],
  concept: '<p>经济可行性靠成本效益分析量化。常用指标:<gd data-term="roi">投资回报率 ROI</gd>、净现值 NPV、投资回收期。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算。重点:NPV/回收期概念、货币时间价值。</p>',
  core: '<table><tr><th>指标</th><th>含义</th></tr>' +
    '<tr><td>ROI</td><td>净收益/投资,越高越划算</td></tr>' +
    '<tr><td>净现值 NPV</td><td>把未来现金流折现后减去投资,>0 才值得</td></tr>' +
    '<tr><td>回收期</td><td>多久能收回投资,越短越好</td></tr></table>' +
    '<div class="ex"><b>货币时间价值:</b>今天的1元比明年的1元值钱,故未来收益要<b>折现</b>后再比较。NPV>0 表示项目在考虑折现后仍盈利。</div>',
  pitfalls: '<div class="pit"><b>误解:直接把各年收益相加比投资。</b>必须考虑<b>货币时间价值</b>,把未来收益折现(NPV),否则高估收益。</div>',
  quiz: [
    { type: 'choice', q: '净现值NPV大于0通常意味着?', options: ['项目亏损', '项目在折现后仍盈利、值得投资', '无法判断', '回收期为0'], answer: 1, source: '高频', explain: 'NPV>0表示折现后仍盈利,值得投资。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/02-feasibility">可行性研究</a> · 下一课:<a href="#/l/plan/04-scheme">方案论证与比选</a></p>'
});
