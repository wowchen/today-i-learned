SAN.registerLesson({
  id: 'essay/02-structure',
  module: 'essay',
  order: 2,
  title: '论文结构与字数分配',
  minutes: 5,
  key: true,
  keywords: ['论文结构', '摘要', '正文', '字数', '项目背景', '模板'],
  concept: '<p>论文结构固定,背成肌肉记忆,考场往里填项目内容。</p>',
  exam: '<p><b>考纲定位:</b>论文通用框架。<b>字数以官方要求为准</b>,下为经验分配。</p>',
  core: '<table><tr><th>部分</th><th>内容</th><th>约字数</th></tr>' +
    '<tr><td>摘要</td><td>项目一句话+角色+论点+结果</td><td>300~400</td></tr>' +
    '<tr><td>项目背景</td><td>规模、背景、职责、技术概况</td><td>400~500</td></tr>' +
    '<tr><td>主体论述</td><td>紧扣主题:理论+实践(核心)</td><td>1200~1500</td></tr>' +
    '<tr><td>结尾</td><td>效果、不足、改进</td><td>300~400</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:摘要随便写。</b>摘要是第一印象,须含<b>项目、角色、论点、结果</b>且字数达标。</div>',
  quiz: [
    { type: 'choice', q: '论文摘要通常不包含?', options: ['项目简述', '作者角色', '论点与结果', '完整源代码'], answer: 3, source: '高频', explain: '摘要不放源代码。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/01-overview">论文全解</a> · 下一课:<a href="#/l/essay/03-opening">摘要与开头模板</a></p>'
});
