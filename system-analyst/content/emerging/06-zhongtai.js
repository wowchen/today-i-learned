SAN.registerLesson({
  id: 'emerging/06-zhongtai',
  module: 'emerging',
  order: 6,
  title: '中台',
  minutes: 4,
  keywords: ['中台', '业务中台', '数据中台', '能力复用', '前台', '后台'],
  concept: '<p><gd data-term="zhongtai">中台</gd>把可复用的业务/数据能力沉淀成共享平台,支撑前台快速创新,后台稳定支撑。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(新趋势)。重点:中台定位、与微服务关系。</p>',
  core: '<table><tr><th>层</th><th>角色</th></tr>' +
    '<tr><td>前台</td><td>直接面向用户的应用,要快、要变</td></tr>' +
    '<tr><td>中台</td><td>沉淀共享的业务/数据能力,供前台复用</td></tr>' +
    '<tr><td>后台</td><td>稳定的核心系统与资源</td></tr></table>' +
    '<div class="ex">中台常以微服务实现"能力复用",避免各前台重复造轮子。但建中台成本高,小企业未必划算。</div>',
  pitfalls: '<div class="pit"><b>误解:中台是必备的先进架构。</b>中台适合<b>多业务线、需大量复用</b>的大型组织;盲目建中台可能增加复杂度而无收益。</div>',
  quiz: [
    { type: 'choice', q: '中台的核心价值是?', options: ['替代数据库', '沉淀共享能力供前台复用', '加密通信', '取代后台'], answer: 1, source: '理解', explain: '中台沉淀可复用能力,支撑前台快速创新。' }
  ],
  links: '<p>新技术模块完。下一模块:<a href="#/l/math/01-graph">图论基础</a></p>'
});
