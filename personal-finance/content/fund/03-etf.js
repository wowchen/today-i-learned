PFIN.registerLesson({
  id: 'fund/03-etf',
  module: 'fund',
  order: 3,
  title: 'ETF:能当股票买的基金',
  minutes: 4,
  keywords: ['ETF', '场内', '交易所', '指数'],
  concept: '<p><b><gd data-term="etf">ETF</gd></b>(交易型开放式指数基金)是"能像股票一样在交易所实时买卖的基金",绝大多数是指数型。</p>' +
    '<div class="ex">指数基金的内核 + 股票的买卖方式 = ETF。</div>',
  core: '<p><b>ETF vs 普通(场外)指数基金:</b></p>' +
    '<table><tr><th></th><th>ETF(场内)</th><th>场外指数基金</th></tr>' +
    '<tr><td>买卖</td><td>交易时段实时成交(像股票)</td><td>按当日收盘净值申赎</td></tr>' +
    '<tr><td>账户</td><td>需证券账户</td><td>基金App/银行即可</td></tr>' +
    '<tr><td>费率</td><td>通常更低</td><td>稍高</td></tr>' +
    '<tr><td>定投</td><td>需手动或设条件单</td><td>易设自动定投</td></tr></table>' +
    '<p><b>选谁?</b></p>' +
    '<ul>' +
    '<li>想<b>省心自动定投</b>、不开证券账户 → 场外指数基金更方便。</li>' +
    '<li>想<b>更低费率、盘中灵活买卖</b>、已有证券账户 → ETF。</li>' +
    '</ul>' +
    '<p><b>注意"联接基金":</b>很多 ETF 有对应的"ETF 联接基金",可在场外申购、间接持有该 ETF,方便定投。</p>' +
    '<p class="ex">ETF 能盘中实时交易是优点也是诱惑——别因为"能随时买卖"就频繁操作,违背了长期持有的初衷。</p>',
  pitfalls: '<div class="pit"><b>误区:ETF 比指数基金高级、收益更高。</b>两者内核相同,只是交易方式不同;收益取决于跟踪的指数,而非形式。</div>' +
    '<div class="pit"><b>误区:能盘中买卖=应该多操作。</b>实时交易便利反而易诱发频繁买卖,增加成本、伤害长期收益。</div>',
  quiz: [
    { type: 'choice', q: 'ETF 最主要的特点是?', options: ['保证收益', '可像股票一样在交易所实时买卖', '只能持有一天', '不含股票'], answer: 1, source: '理解', explain: 'ETF 可在交易所盘中实时交易。' },
    { type: 'choice', q: '想要省心自动定投、不开证券账户,更适合?', options: ['场内 ETF', '场外指数基金/ETF联接', '个股', '期货'], answer: 1, source: '理解', explain: '场外指数基金便于设置自动定投。' }
  ],
  links: '<p>上一课:<a href="#/l/fund/02-index-fund">指数基金</a> · 下一课:<a href="#/l/fund/04-fees">费率:沉默的成本</a></p>'
});
