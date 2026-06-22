SAN.registerLesson({
  id: 'test/03-levels',
  module: 'test',
  order: 3,
  title: '测试层次',
  minutes: 4,
  keywords: ['单元测试', '集成测试', '系统测试', '验收测试', '回归测试'],
  concept: '<p>测试按粒度分层:<b>单元 → 集成 → 系统 → 验收</b>,逐层放大验证范围。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:各层目标、回归测试。</p>',
  core: '<table><tr><th>层次</th><th>验证</th></tr>' +
    '<tr><td>单元测试</td><td>单个模块(白盒为主)</td></tr>' +
    '<tr><td>集成测试</td><td>模块间接口(自顶向下/自底向上)</td></tr>' +
    '<tr><td>系统测试</td><td>整体功能与非功能</td></tr>' +
    '<tr><td>验收测试</td><td>用户视角确认是否满足需求</td></tr></table>' +
    '<div class="ex"><b>回归测试:</b>改动后重跑相关用例,确保没引入新问题、没破坏老功能。</div>',
  pitfalls: '<div class="pit"><b>误解:集成测试就是把所有模块一起测。</b>"一次性大爆炸集成"难定位错误;推荐<b>渐进式(自顶向下/自底向上)</b>集成。</div>',
  quiz: [
    { type: 'choice', q: '修改代码后重跑用例、确保未破坏原功能的测试是?', options: ['单元测试', '回归测试', '验收测试', '冒烟测试'], answer: 1, source: '高频', explain: '回归测试防止改动引入新问题。' }
  ],
  links: '<p>上一课:<a href="#/l/test/02-methods">测试方法</a> · 下一课:<a href="#/l/test/04-conversion">系统转换</a></p>'
});
