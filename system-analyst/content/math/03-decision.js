SAN.registerLesson({
  id: 'math/03-decision',
  module: 'math',
  order: 3,
  title: '决策论',
  minutes: 5,
  key: true,
  keywords: ['决策论', '决策树', '期望值', 'EMV', '风险型决策', '不确定型'],
  concept: '<p>决策论帮你在不确定下选方案。风险型决策(已知概率)用<b>期望值 EMV</b> 比较;<gd data-term="decision-tree">决策树</gd>把多阶段决策画成树来算。可用顶部"决策树期望值"计算器。</p>',
  exam: '<p><b>考纲定位:</b>系分案例高频计算。重点:EMV计算、决策树、不确定型准则。</p>',
  core: '<div class="ex"><b>EMV(期望货币值)= Σ(概率×收益)</b>。<br>例:方案A:0.6×500+0.4×(−100)=300−40=<b>260</b>;方案B:1×200=<b>200</b>。选 EMV 大的 → <b>方案A</b>。<br><b>不确定型</b>(概率未知)用乐观(maximax)、悲观(maximin)、后悔值(minimax regret)等准则。</div>',
  pitfalls: '<div class="pit"><b>误解:决策树只看最终收益。</b>要按<b>概率加权(期望值)</b>比较,并在多阶段时从右向左"剪枝"回推。</div>',
  quiz: [
    { type: 'fill', q: '方案概率收益为0.5×800与0.5×(−200),其期望值EMV=____。', answer: ['300'], source: '高频计算', explain: '0.5×800+0.5×(−200)=400−100=300。' },
    { type: 'choice', q: '已知各结果概率、按期望值选方案,属于?', options: ['确定型决策', '风险型决策', '不确定型决策', '随机决策'], answer: 1, source: '高频', explain: '已知概率用期望值是风险型决策。' }
  ],
  links: '<p>上一课:<a href="#/l/math/02-linear-programming">线性规划</a> · 下一课:<a href="#/l/math/04-queuing">排队论</a> · 风险:<a href="#/l/se/08-pm-risk">项目风险管理</a></p>'
});
