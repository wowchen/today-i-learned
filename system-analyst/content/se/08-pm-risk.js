SAN.registerLesson({
  id: 'se/08-pm-risk',
  module: 'se',
  order: 8,
  title: '项目风险管理',
  minutes: 4,
  keywords: ['风险管理', '风险识别', '定性分析', '定量分析', '应对策略', '概率影响'],
  concept: '<p>风险管理识别并应对不确定性。流程:识别 → 定性分析 → 定量分析 → 应对 → 监控。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:应对策略、定性vs定量。</p>',
  core: '<table><tr><th>对象</th><th>应对策略</th></tr>' +
    '<tr><td>威胁(负面)</td><td>规避、转移、减轻、接受</td></tr>' +
    '<tr><td>机会(正面)</td><td>开拓、分享、提高、接受</td></tr></table>' +
    '<div class="ex">定性分析用概率-影响矩阵排序;定量分析用期望货币值(EMV=概率×影响)、决策树等量化。</div>',
  pitfalls: '<div class="pit"><b>误解:风险都是坏事。</b>风险含<b>威胁与机会</b>两面,机会也要主动应对(开拓、提高)。</div>',
  quiz: [
    { type: 'choice', q: '购买保险应对风险属于哪种策略?', options: ['规避', '转移', '减轻', '接受'], answer: 1, source: '高频', explain: '买保险把风险后果转移给第三方。' }
  ],
  links: '<p>软件工程模块完。下一模块:<a href="#/l/req/01-overview">需求工程概述</a> · 决策树:<a href="#/l/math/03-decision">决策论</a></p>'
});
