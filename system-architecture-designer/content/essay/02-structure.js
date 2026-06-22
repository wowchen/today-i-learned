SAD.registerLesson({
  id: 'essay/02-structure',
  module: 'essay',
  order: 2,
  title: '论文结构与字数分配',
  minutes: 5,
  key: true,
  keywords: ['论文结构', '摘要', '正文', '字数分配', '项目背景', '模板'],
  concept: '<p>论文是"命题作文",结构固定。把结构和字数分配背成肌肉记忆,考场只需往里填项目内容。</p>',
  exam: '<p><b>考纲定位:</b>论文通用框架。<b>具体字数以官方要求为准</b>,下表为常见经验分配。</p>',
  core: '<table><tr><th>部分</th><th>内容</th><th>约占字数(经验)</th></tr>' +
    '<tr><td>摘要</td><td>项目一句话+你的角色+本文论点+结果</td><td>约300~400字</td></tr>' +
    '<tr><td>正文·项目背景</td><td>项目规模、背景、你的职责、技术概况</td><td>约400~500字</td></tr>' +
    '<tr><td>正文·主体论述</td><td>紧扣主题展开理论+你的实践(核心)</td><td>约1200~1500字</td></tr>' +
    '<tr><td>正文·结尾</td><td>效果、不足与改进、展望</td><td>约300~400字</td></tr></table>' +
    '<div class="ex">摘要单独成段、约定字数;正文"<b>背景→展开→效果</b>"三段式。主体是大头,要把主题的几个要点逐条结合项目讲透。</div>',
  pitfalls: '<div class="pit"><b>误解:摘要随便写。</b>摘要是阅卷第一印象,必须含<b>项目、角色、论点、结果</b>四要素且字数达标,写砸直接压分。</div>',
  quiz: [
    { type: 'choice', q: '论文摘要中通常必须包含的要素不含?', options: ['项目简述', '作者角色', '核心论点与结果', '完整源代码'], answer: 3, source: '高频', explain: '摘要含项目、角色、论点、结果,不放源代码。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/01-overview">论文全解</a> · 下一课:<a href="#/l/essay/03-opening">摘要与开头模板</a></p>'
});
