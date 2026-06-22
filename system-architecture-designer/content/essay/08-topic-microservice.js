SAD.registerLesson({
  id: 'essay/08-topic-microservice',
  module: 'essay',
  order: 8,
  title: '常考主题:中间件与微服务',
  minutes: 5,
  keywords: ['论文主题', '微服务', '中间件', 'SOA', '消息', '提纲', '论文'],
  concept: '<p>中间件、SOA/微服务也是论文高频主题,尤其"<b>单体到微服务的演进</b>"。本课给提纲。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:微服务/中间件论述提纲与权衡论证。</p>',
  core: '<div class="ex"><b>主题:论微服务架构(或SOA、消息中间件应用)</b><br>主体可选三点:① 为何拆:单体瓶颈与<gd data-term="microservice">微服务</gd>动因;② 怎么拆与治理:拆分原则 + API网关/注册发现/熔断限流 + <gd data-term="middleware">中间件</gd>(如消息队列削峰);③ 带来的收益与代价:独立部署/弹性 vs 分布式复杂、一致性,如何应对。<br><br>' +
    '若主题是 <gd data-term="soa">SOA</gd>/消息中间件,把②替换为 ESB/服务编排 或 消息解耦的具体应用即可。</div>' +
    '<p>务必带<b>权衡论证</b>(微服务非银弹),这是评卷看专业度的关键。</p>',
  pitfalls: '<div class="pit"><b>误解:论微服务只讲优点。</b>不谈分布式复杂性、一致性、运维成本等代价,会显得不成熟。<b>有取舍的论述才高分。</b></div>',
  quiz: [
    { type: 'choice', q: '论"微服务"主题时,容易被扣分的写法是?', options: ['结合项目', '论述拆分与治理', '只讲优点不谈代价与权衡', '给出量化效果'], answer: 2, source: '实操', explain: '只讲优点、不谈代价与权衡会显得不成熟,易扣分。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/07-topic-style">架构风格与质量属性</a> · 下一课:<a href="#/l/essay/09-topic-data">常考主题:数据库与大数据</a></p>'
});
