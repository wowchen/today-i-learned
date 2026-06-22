SAN.registerLesson({
  id: 'guide/02-learning-path',
  module: 'guide',
  order: 2,
  title: '学习路线:这站怎么走',
  minutes: 3,
  keywords: ['学习路线', '路径', '模块', '基础', '核心', '进阶', '实战'],
  concept: '<p>本站把知识拆成 <b>18 个模块、约 122 节五分钟微课</b>,按"基础→核心→进阶→实战"排成路线,跟着走就行。</p>',
  exam: '<p><b>考纲定位:</b>路线不是考点,但对应了综合知识覆盖面与案例/论文重点,照着学不漏。</p>',
  core: '<table><tr><th>阶段</th><th>模块</th><th>作用</th></tr>' +
    '<tr><td>基础</td><td>计算机系统·操作系统·数据库·网络与安全</td><td>综合知识地基</td></tr>' +
    '<tr><td>核心</td><td>软件工程·需求工程·结构化与面向对象分析设计·系统架构</td><td>系分看家本领</td></tr>' +
    '<tr><td>进阶</td><td>系统规划·可靠性·测试维护·信息系统综合·新技术·数学运筹·标准化</td><td>拓宽与计算</td></tr>' +
    '<tr><td>实战</td><td>案例分析专题·论文写作专题</td><td>直接对应下午两科</td></tr></table>' +
    '<div class="ex">时间紧的打法:基础快速过 → 死磕<b>需求工程、分析设计、数学运筹</b> → 攻<b>案例与论文专题</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:必须按顺序学完才能做题。</b>建议边学边练:学完核心模块就去对应案例课练手。</div>',
  quiz: [
    { type: 'choice', q: '下列哪组模块直接对应下午两科(案例、论文)?', options: ['基础篇', '核心篇', '实战篇', '进阶篇'], answer: 2, source: '理解', explain: '实战篇的案例与论文专题直接对应下午两科。' }
  ],
  links: '<p>上一课:<a href="#/l/guide/01-exam-intro">考试介绍</a> · 下一课:<a href="#/l/guide/03-strategy">备考策略</a></p>'
});
