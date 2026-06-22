SAN.registerLesson({
  id: 'req/05-validation',
  module: 'req',
  order: 5,
  title: '需求验证',
  minutes: 4,
  keywords: ['需求验证', '需求评审', '需求确认', '原型验证', '一致性检查'],
  concept: '<p>需求验证确认"需求写对了、写全了、能被各方接受"。手段:需求评审、原型确认、测试用例反推。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:验证手段、验证 vs 确认。</p>',
  core: '<table><tr><th>手段</th><th>作用</th></tr>' +
    '<tr><td>需求评审</td><td>正式走查,查歧义/遗漏/矛盾</td></tr>' +
    '<tr><td>原型确认</td><td>给用户看样品确认理解一致</td></tr>' +
    '<tr><td>编写验收测试</td><td>能写出测试=需求可验证</td></tr></table>' +
    '<div class="ex">验证(Verification)="做得对吗"(符合规格);确认(Validation)="做对的东西吗"(符合用户真实需要)。两者都要。</div>',
  pitfalls: '<div class="pit"><b>误解:验证就是测试。</b>需求阶段还没代码,验证靠<b>评审、原型确认</b>等,把错误挡在编码前最划算。</div>',
  quiz: [
    { type: 'choice', q: '需求阶段发现并纠正错误的主要手段是?', options: ['单元测试', '需求评审', '压力测试', '上线观察'], answer: 1, source: '高频', explain: '需求阶段靠评审等及早查错。' }
  ],
  links: '<p>上一课:<a href="#/l/req/04-definition">需求定义</a> · 下一课:<a href="#/l/req/06-management">需求管理</a></p>'
});
