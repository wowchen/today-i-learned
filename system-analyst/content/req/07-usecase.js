SAN.registerLesson({
  id: 'req/07-usecase',
  module: 'req',
  order: 7,
  title: '用例建模',
  minutes: 5,
  key: true,
  keywords: ['用例', '用例图', '参与者', 'include', 'extend', '泛化', '需求建模'],
  concept: '<p><gd data-term="use-case">用例</gd>从参与者视角描述系统功能,是面向对象需求建模的核心。用例图 = 参与者 + 用例 + 关系。</p>',
  exam: '<p><b>考纲定位:</b>系分案例高频(画/补用例图)。重点:include/extend/泛化区分。</p>',
  core: '<table><tr><th>关系</th><th>含义</th></tr>' +
    '<tr><td>包含 include</td><td>多个用例共用的<b>必然</b>公共步骤抽出来(如"登录")</td></tr>' +
    '<tr><td>扩展 extend</td><td><b>可选</b>的附加行为,满足条件才发生</td></tr>' +
    '<tr><td>泛化</td><td>用例/参与者的一般-特殊关系</td></tr></table>' +
    '<div class="ex">"下单"必然要"验证库存"→ include;"下单"在金额大时可能触发"风控审核"→ extend。考试常让你判断该用哪种。</div>',
  pitfalls: '<div class="pit"><b>误解:include和extend可互换。</b>include是<b>必然</b>的公共复用;extend是<b>有条件的可选</b>扩展,方向和语义都不同。</div>',
  quiz: [
    { type: 'choice', q: '多个用例都要执行的公共步骤,应使用?', options: ['include包含', 'extend扩展', '泛化', '关联'], answer: 0, source: '高频', explain: '公共必然步骤用include抽取复用。' }
  ],
  links: '<p>上一课:<a href="#/l/req/06-management">需求管理</a> · 下一课:<a href="#/l/req/08-prototype">原型法</a> · UML:<a href="#/l/analysis/06-uml-dynamic">UML动态图</a></p>'
});
