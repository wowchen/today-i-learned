PFIN.registerLesson({
  id: 'bond/01-what-is-bond',
  module: 'bond',
  order: 1,
  title: '债券:一张有息的借条',
  minutes: 4,
  key: true,
  keywords: ['债券', '借条', '票面利率', '到期'],
  concept: '<p>买<b><gd data-term="bond">债券</gd></b>就是把钱借给政府或企业,对方承诺<b>按期付息、到期还本</b>。本质是一张有息的借条。</p>' +
    '<div class="ex">买股票=当股东(共担盈亏);买债券=当债主(收固定利息)。</div>',
  core: '<p><b>债券的关键要素:</b></p>' +
    '<ul>' +
    '<li><b>面值</b>:到期归还的本金(如 100 元)。</li>' +
    '<li><b><gd data-term="coupon">票面利率</gd></b>:每年按面值付的利息率。</li>' +
    '<li><b>期限</b>:多久到期还本。</li>' +
    '<li><b>发行人</b>:谁借的钱——国家(国债)、地方、企业(信用债)。</li>' +
    '</ul>' +
    '<p><b>债券 vs 股票:</b></p>' +
    '<table><tr><th></th><th>债券</th><th>股票</th></tr>' +
    '<tr><td>身份</td><td>债主</td><td>股东</td></tr>' +
    '<tr><td>回报</td><td>约定利息(较确定)</td><td>分红+价差(不确定)</td></tr>' +
    '<tr><td>风险</td><td>较低</td><td>较高</td></tr>' +
    '<tr><td>清偿顺序</td><td>公司破产时先还债主</td><td>股东排最后</td></tr></table>' +
    '<p class="ex">债券不是"绝对安全":发行人可能违约(还不出钱),且价格也会波动(下一课)。但整体风险通常低于股票。</p>',
  pitfalls: '<div class="pit"><b>误区:债券=保本。</b>国债违约风险极低,但企业债可能违约;且债券价格会随利率波动,中途卖出可能亏。</div>' +
    '<div class="pit"><b>误区:债券和存款一样。</b>债券可交易、有价格波动,信用债还有违约风险,不等同于银行存款。</div>',
  quiz: [
    { type: 'choice', q: '买债券,你的身份是?', options: ['股东', '债主(把钱借出去)', '老板', '员工'], answer: 1, source: '理解', explain: '债券是借钱凭证,持有人是债权人。' },
    { type: 'choice', q: '公司破产清算时,谁通常先获偿?', options: ['股东', '债券持有人', '两者同时', '都拿不到'], answer: 1, source: '理解', explain: '债主清偿顺序优先于股东。' }
  ],
  links: '<p>下一课:<a href="#/l/bond/02-price-yield">价格与利率的跷跷板</a> · 对比:<a href="#/l/stock/01-what-is-stock">股票</a></p>'
});
