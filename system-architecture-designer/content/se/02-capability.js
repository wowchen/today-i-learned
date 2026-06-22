SAD.registerLesson({
  id: 'se/02-capability',
  module: 'se',
  order: 2,
  title: 'CMMI 与软件过程改进',
  minutes: 4,
  keywords: ['CMMI', '能力成熟度', '过程改进', '五级', '量化管理'],
  concept: '<p><gd data-term="cmmi">CMMI</gd> 衡量一个组织软件过程的成熟度,分 5 级,逐级提升可预测性与质量。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:5 级名称与顺序、各级特征。</p>',
  core: '<table><tr><th>级别</th><th>名称</th><th>特征</th></tr>' +
    '<tr><td>1</td><td>初始级</td><td>混乱、靠个人英雄</td></tr>' +
    '<tr><td>2</td><td>已管理级</td><td>项目级有计划有跟踪</td></tr>' +
    '<tr><td>3</td><td>已定义级</td><td>组织级标准过程</td></tr>' +
    '<tr><td>4</td><td>量化管理级</td><td>用数据量化控制过程</td></tr>' +
    '<tr><td>5</td><td>优化级</td><td>持续改进、防缺陷</td></tr></table>' +
    '<div class="ex">口诀:初、管、定、量、优。3级是"组织级标准化"的分水岭,4级开始"用数字说话"。</div>',
  pitfalls: '<div class="pit"><b>误解:CMMI等级越高开发越快。</b>高等级保证的是<b>过程可预测、质量稳定</b>,不等于开发速度快;过度流程化反而可能变慢。</div>',
  quiz: [
    { type: 'choice', q: 'CMMI中,"用统计等量化手段管理过程"对应哪一级?', options: ['已管理级(2)', '已定义级(3)', '量化管理级(4)', '优化级(5)'], answer: 2, source: '高频', explain: '4级量化管理级,用数据量化控制过程。' }
  ],
  links: '<p>上一课:<a href="#/l/se/01-process">软件过程模型</a> · 下一课:<a href="#/l/se/03-requirements">需求工程</a></p>'
});
