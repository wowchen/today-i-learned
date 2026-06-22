SPM.registerLesson({
  id: 'ops/03-problem',
  module: 'ops',
  order: 3,
  title: '问题管理',
  minutes: 5,
  keywords: ['问题管理', '根本原因', 'RCA', '已知错误', '预防'],
  concept: '<p><gd data-term="problem">问题管理</gd>目标是<b>查明根本原因、消除或规避,防再次发生</b>。查明的根因登记为 <gd data-term="known-error">已知错误</gd>,可提供临时方案供事件管理快速处置。</p>',
  exam: '<p><b>考纲定位:</b>运营篇高频,案例常考"事件 vs 问题"。</p>',
  core: '<ul>' +
    '<li><b>问题 vs 事件</b>:事件重"快恢复",问题重"找根因、防复发"。</li>' +
    '<li><b>方法</b>:<gd data-term="rca">根本原因分析</gd>(5 个为什么、鱼骨图)。</li>' +
    '<li><b>产出</b>:已知错误库 + 永久修复或规避措施。</li>' +
    '</ul>' +
    '<div class="ex">事件是发烧(先退烧),问题是病因(找根源治)。两者配合:先恢复、再治本。</div>',
  pitfalls: '<div class="pit"><b>已知错误≠已解决。</b>它只是"查明了根因或有临时方案";永久修复仍需排期变更。</div>',
  quiz: [
    { type: 'choice', q: '问题管理的核心目标是?', options: ['快速恢复服务', '查明根因并防止复发', '发布新功能', '压缩成本'], answer: 1, source: '高频', explain: '问题管理重在治本与预防。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/02-incident">事件管理</a> · 下一课:<a href="#/l/ops/04-change">变更管理</a></p>'
});
