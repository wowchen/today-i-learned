SAN.registerLesson({
  id: 'essay/04-body',
  module: 'essay',
  order: 4,
  title: '主体论述框架',
  minutes: 5,
  key: true,
  keywords: ['主体', '论述', '理论结合实践', '分点', '效果', '论文'],
  concept: '<p>主体是得分大头:把主题拆成 3~4 个要点,每个要点都"<b>理论 + 我项目怎么做 + 效果</b>"地写。</p>',
  exam: '<p><b>考纲定位:</b>论文核心。重点:理论与实践结合、分点论述。</p>',
  core: '<div class="ex"><b>每个要点段落公式:</b>① 点理论(概念/方法);② 讲实践(我项目里具体决策、技术、取舍);③ 说效果(量化结果)。<br>如主题"需求工程",拆成:需求获取方法、需求分析建模、需求验证、需求变更控制——每点按①②③写。</div>',
  pitfalls: '<div class="pit"><b>误解:主体只讲做了什么。</b>只讲实践=流水账,只讲理论=空谈。要<b>理论与实践交织+给效果</b>。</div>',
  quiz: [
    { type: 'choice', q: '论文主体每个要点的理想写法?', options: ['只写理论', '只写做了什么', '理论+项目实践+效果三结合', '复制题目'], answer: 2, source: '实操', explain: '三结合最得分。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/03-opening">摘要开头</a> · 下一课:<a href="#/l/essay/05-closing">结尾模板</a></p>'
});
