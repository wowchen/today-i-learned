SAN.registerLesson({
  id: 'se/02-cmmi',
  module: 'se',
  order: 2,
  title: 'CMMI 与过程改进',
  minutes: 4,
  keywords: ['CMMI', '能力成熟度', '五级', '量化管理', '过程改进'],
  concept: '<p><gd data-term="cmmi">CMMI</gd> 衡量组织软件过程成熟度,分 5 级逐级提升可预测性。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:5 级名称与顺序。</p>',
  core: '<table><tr><th>级</th><th>名称</th><th>特征</th></tr>' +
    '<tr><td>1</td><td>初始级</td><td>混乱、靠个人</td></tr>' +
    '<tr><td>2</td><td>已管理级</td><td>项目级有计划跟踪</td></tr>' +
    '<tr><td>3</td><td>已定义级</td><td>组织级标准过程</td></tr>' +
    '<tr><td>4</td><td>量化管理级</td><td>用数据量化控制</td></tr>' +
    '<tr><td>5</td><td>优化级</td><td>持续改进、防缺陷</td></tr></table>' +
    '<div class="ex">口诀:初、管、定、量、优。</div>',
  pitfalls: '<div class="pit"><b>误解:CMMI等级越高开发越快。</b>它保证过程可预测、质量稳定,不等于速度快。</div>',
  quiz: [
    { type: 'choice', q: '"用统计等量化手段管理过程"对应哪级?', options: ['已管理(2)', '已定义(3)', '量化管理(4)', '优化(5)'], answer: 2, source: '高频', explain: '4级量化管理级。' }
  ],
  links: '<p>上一课:<a href="#/l/se/01-process">过程模型</a> · 下一课:<a href="#/l/se/03-quality">软件质量</a></p>'
});
