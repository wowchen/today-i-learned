SAN.registerLesson({
  id: 'essay/08-topic-design',
  module: 'essay',
  order: 8,
  title: '常考主题:系统分析与设计',
  minutes: 5,
  keywords: ['论文主题', '系统设计', '架构', '数据库设计', '提纲', '论文'],
  concept: '<p>系统分析与设计(含架构、数据库、质量属性)是论文高频主题。本课给提纲。</p>',
  exam: '<p><b>考纲定位:</b>论文主题准备。重点:分析到设计的论述提纲。</p>',
  core: '<div class="ex"><b>主题:论系统设计/架构设计</b><br>主体可选:① 总体架构与风格选择(<gd data-term="arch-style">架构风格</gd>及理由);② 关键<gd data-term="quality-attribute">质量属性</gd>与实现措施;③ 数据库设计(ER、范式、性能取舍);④ 关键设计决策与权衡。结合项目讲清"为什么这样设计"。</div>',
  pitfalls: '<div class="pit"><b>误解:罗列用了什么技术。</b>论文要讲<b>设计决策与权衡理由</b>,而非技术清单。</div>',
  quiz: [
    { type: 'choice', q: '写系统设计主题,体现深度的是?', options: ['列技术清单', '关键设计决策及其权衡理由', 'UI配色', '变量命名'], answer: 1, source: '实操', explain: '决策与权衡理由是深度所在。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/07-topic-req">需求工程主题</a> · 下一课:<a href="#/l/essay/09-topic-pm">常考主题:项目管理</a></p>'
});
