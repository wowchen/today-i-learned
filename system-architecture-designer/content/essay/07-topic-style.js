SAD.registerLesson({
  id: 'essay/07-topic-style',
  module: 'essay',
  order: 7,
  title: '常考主题:架构风格与质量属性',
  minutes: 5,
  keywords: ['论文主题', '架构风格', '质量属性', '架构评估', '提纲', '论文'],
  concept: '<p>架构风格与质量属性是论文<b>最高频</b>的两大主题。本课给可直接套用的提纲。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:两类主题的论述提纲。</p>',
  core: '<div class="ex"><b>主题A:论软件架构风格</b><br>主体三点:① 简述所选<gd data-term="arch-style">架构风格</gd>(如分层/事件驱动/微服务)及理由;② 在项目中如何落地该风格;③ 该风格满足了哪些质量属性、牺牲了什么。<br><br>' +
    '<b>主题B:论质量属性/架构评估</b><br>主体三点:① 项目关键<gd data-term="quality-attribute">质量属性</gd>及其<gd data-term="qa-scenario">场景</gd>;② 为达成各属性采用的<gd data-term="tactic">战术</gd>;③ 用 <gd data-term="atam">ATAM</gd> 评估、识别敏感点/权衡点。</div>' +
    '<p>这两个提纲覆盖面极广,把"风格 + 质量属性 + 评估"练熟,能应对相当比例的命题。</p>',
  pitfalls: '<div class="pit"><b>误解:把所有架构风格都写一遍。</b>论文要<b>聚焦项目实际所选</b>的风格并讲透取舍,而非罗列教科书;泛泛而谈不得分。</div>',
  quiz: [
    { type: 'choice', q: '写"质量属性"主题论文,主体最该包含?', options: ['只列质量属性定义', '质量属性场景+战术+评估并结合项目', '只写代码', '只画部署图'], answer: 1, source: '实操', explain: '应结合项目论述质量场景、战术与评估(如ATAM)。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/06-material">项目素材</a> · 下一课:<a href="#/l/essay/08-topic-microservice">常考主题:中间件与微服务</a></p>'
});
