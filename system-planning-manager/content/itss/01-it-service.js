SPM.registerLesson({
  id: 'itss/01-it-service',
  module: 'itss',
  order: 1,
  title: '什么是 IT 服务',
  minutes: 5,
  key: true,
  keywords: ['IT服务', '无形性', '不可分离', '服务特征', '价值'],
  concept: '<p><gd data-term="it-service">IT 服务</gd>是运用信息技术、依靠<b>人和流程</b>为客户创造价值的活动。客户买的不是设备,而是"业务能持续顺畅运转"这个结果。</p>',
  exam: '<p><b>考纲定位:</b>全书基石,选择必考、案例处处用。</p>',
  core: '<p><b>服务的四大特征(与实物商品不同):</b></p>' +
    '<ul>' +
    '<li><b>无形性</b>:看不见摸不着,质量靠感知。</li>' +
    '<li><b>不可分离性</b>:生产与消费同时发生(边提供边享用)。</li>' +
    '<li><b>不可存储性</b>:不能囤货,产能闲置就浪费。</li>' +
    '<li><b>差异性</b>:每次服务因人因境而异,难完全标准化。</li>' +
    '</ul>' +
    '<div class="ex">正因无形、难存储,IT 服务才特别需要 <gd data-term="sla">SLA</gd> 把"质量"写成可衡量的承诺。</div>',
  pitfalls: '<div class="pit"><b>IT 服务 ≠ IT 产品。</b>产品可库存、可分离;服务无形、即产即用,管理逻辑完全不同。</div>',
  quiz: [
    { type: 'choice', q: '下列哪项不是 IT 服务的基本特征?', options: ['无形性', '不可分离性', '可大量库存', '差异性'], answer: 2, source: '高频', explain: '服务具有不可存储性,不能像实物一样库存。' }
  ],
  links: '<p>下一课:<a href="#/l/itss/02-lifecycle">服务生命周期</a> · 关联:<a href="#/l/plan/04-sla">SLA 设计</a></p>'
});
