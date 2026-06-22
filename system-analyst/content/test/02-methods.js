SAN.registerLesson({
  id: 'test/02-methods',
  module: 'test',
  order: 2,
  title: '测试方法',
  minutes: 4,
  keywords: ['黑盒', '白盒', '等价类', '边界值', '覆盖', '静态测试'],
  concept: '<p>测试方法分黑盒(看功能)、白盒(看代码),还有静态测试(评审、走查,不运行代码)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:黑白盒技术、静态vs动态。</p>',
  core: '<table><tr><th>方法</th><th>技术</th></tr>' +
    '<tr><td>黑盒</td><td>等价类、边界值、因果图、决策表</td></tr>' +
    '<tr><td>白盒</td><td>语句/判定/条件/路径覆盖</td></tr>' +
    '<tr><td>静态</td><td>代码评审、走查、静态分析(不运行)</td></tr></table>' +
    '<div class="ex">白盒覆盖由弱到强:语句<判定<条件<路径。静态测试能在不运行下发现大量缺陷,性价比高。</div>',
  pitfalls: '<div class="pit"><b>误解:测试都要运行程序。</b>静态测试(评审/走查)不运行代码,却是发现缺陷最早、最经济的手段之一。</div>',
  quiz: [
    { type: 'choice', q: '不运行程序就能发现缺陷的测试是?', options: ['黑盒动态测试', '静态测试(评审/走查)', '压力测试', '验收测试'], answer: 1, source: '高频', explain: '静态测试不运行代码。' }
  ],
  links: '<p>上一课:<a href="#/l/test/01-strategy">测试策略</a> · 下一课:<a href="#/l/test/03-levels">测试层次</a></p>'
});
