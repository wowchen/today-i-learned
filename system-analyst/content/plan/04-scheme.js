SAN.registerLesson({
  id: 'plan/04-scheme',
  module: 'plan',
  order: 4,
  title: '方案论证与比选',
  minutes: 4,
  keywords: ['方案论证', '比选', '自研外购', '决策', '加权评分'],
  concept: '<p>同一目标常有多个实现方案(自研/外购/租用 SaaS),需<b>论证比选</b>给出推荐。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:自研vs外购权衡、加权评分法。</p>',
  core: '<table><tr><th>方案</th><th>优</th><th>劣</th></tr>' +
    '<tr><td>自研</td><td>贴合需求、可控</td><td>周期长、成本高、需团队</td></tr>' +
    '<tr><td>外购/定制</td><td>快、成熟</td><td>贴合度差、依赖厂商</td></tr>' +
    '<tr><td>SaaS租用</td><td>免运维、按需</td><td>定制受限、数据在外</td></tr></table>' +
    '<div class="ex">比选常用<b>加权评分法</b>:列评价指标(功能、成本、风险、可维护…)定权重,各方案打分加权求和取高者。</div>',
  pitfalls: '<div class="pit"><b>误解:自研一定最好(最可控)。</b>自研周期长成本高;成熟领域<b>外购/SaaS</b>往往更划算,要按场景权衡。</div>',
  quiz: [
    { type: 'choice', q: '多方案比选中,按指标权重打分求和的方法是?', options: ['关键路径法', '加权评分法', '蒙特卡洛', '德尔菲'], answer: 1, source: '高频', explain: '加权评分法按指标权重综合评分。' }
  ],
  links: '<p>上一课:<a href="#/l/plan/03-cost-benefit">成本效益</a> · 下一课:<a href="#/l/plan/05-legacy">遗留系统演化</a></p>'
});
