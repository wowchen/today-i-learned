SAN.registerLesson({
  id: 'essay/09-topic-pm',
  module: 'essay',
  order: 9,
  title: '常考主题:项目管理与数据',
  minutes: 4,
  keywords: ['论文主题', '项目管理', '进度', '质量', '风险', '数据治理', '论文'],
  concept: '<p>项目管理(进度/质量/风险)与数据治理也是论文常见主题。本课给提纲与要点。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:管理类与数据类主题论述。</p>',
  core: '<div class="ex"><b>项目管理主题:</b>结合项目讲进度(关键路径/<gd data-term="evm">挣值</gd>)、质量(评审/测试)、风险(识别-应对)的实践与效果。<br><b>数据主题:</b>讲<gd data-term="data-governance">数据治理</gd>/数据库设计/大数据架构,突出标准、质量、一致性与价值。</div>',
  pitfalls: '<div class="pit"><b>误解:管理主题只写流程套话。</b>要有<b>项目里真实的数据与取舍</b>(如怎么压工期、怎么控风险),空喊流程不得分。</div>',
  quiz: [
    { type: 'choice', q: '写项目进度管理主题,可用的量化工具是?', options: ['关键路径/挣值', 'UI配色', '正则表达式', '加密算法'], answer: 0, source: '实操', explain: '关键路径、挣值是进度管理的量化论据。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/08-topic-design">系统设计主题</a> · 下一课:<a href="#/l/essay/10-scoring">范文分析与评分</a></p>'
});
