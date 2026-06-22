SPM.registerLesson({
  id: 'market/03-pricing',
  module: 'market',
  order: 3,
  title: 'IT 服务定价',
  minutes: 4,
  keywords: ['定价', '成本加成', '价值定价', '竞争定价', 'SLA'],
  concept: '<p>服务定价要覆盖成本、体现价值、兼顾竞争。常用<b>成本加成、价值定价、竞争定价</b>;高 SLA/高可用性因投入大,定价更高。</p>',
  exam: '<p><b>考纲定位:</b>营销篇,选择题考定价方法。</p>',
  core: '<ul>' +
    '<li><b>成本加成</b>:成本 + 利润率,简单透明。</li>' +
    '<li><b>价值定价</b>:按客户获得的价值定价,可高于成本。</li>' +
    '<li><b>竞争定价</b>:参考市场价。</li>' +
    '<li><b>SLA 与价格</b>:级别越高,资源/冗余投入越大,价格越高。</li>' +
    '</ul>' +
    '<div class="ex">99.99% 比 99.9% 贵得多——因为冗余、监控、灾备投入指数级增长。</div>',
  pitfalls: '<div class="pit"><b>别"低价抢单再亏损"。</b>低于成本的服务不可持续,反而拖垮质量与团队。</div>',
  quiz: [
    { type: 'choice', q: '"按客户获得的价值定价"属于?', options: ['成本加成', '价值定价', '竞争定价', '亏损定价'], answer: 1, source: '高频', explain: '价值定价以客户感知价值为依据。' }
  ],
  links: '<p>上一课:<a href="#/l/market/02-crm">客户关系</a> · 下一课:<a href="#/l/market/04-promotion">服务推广</a></p>'
});
