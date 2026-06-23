PFIN.registerLesson({
  id: 'compound/04-annuity',
  module: 'compound',
  order: 4,
  title: '年金:定期现金流的力量',
  minutes: 4,
  keywords: ['年金', '定投', '定期', '现金流'],
  concept: '<p><b><gd data-term="annuity">年金</gd></b>就是"每隔固定期投入或领取的等额钱"。月供、定投、退休金,本质都是年金。</p>' +
    '<div class="ex">不必有一大笔本金;每月一点点持续投入,靠复利也能滚成大数目。</div>',
  core: '<p><b>定投正是"投入型年金"。每月 2000、年化 8%:</b></p>' +
    '<table><tr><th>坚持年数</th><th>累计投入</th><th>账户估值</th></tr>' +
    '<tr><td>10 年</td><td>24 万</td><td>约 36 万</td></tr>' +
    '<tr><td>20 年</td><td>48 万</td><td>约 118 万</td></tr>' +
    '<tr><td>30 年</td><td>72 万</td><td>约 300 万</td></tr></table>' +
    '<p>注意:投入只翻了 3 倍(24→72 万),估值却翻了 8 倍多——多出来的全是复利,且越往后越猛。</p>' +
    '<p><b>两点启示:</b></p>' +
    '<ul>' +
    '<li><b>定期投入 + 长期</b> = 普通人最现实的财富路径,不需要本金多、也不需要择时。</li>' +
    '<li><b>早开始 &gt; 多投入</b>:25 岁起每月 1000,常胜过 35 岁起每月 2000。</li>' +
    '</ul>' +
    '<p class="ex">想试不同金额和年限,用<a href="#/calc">定投估算</a>动手算一遍,感受最直观。</p>',
  pitfalls: '<div class="pit"><b>误区:定投的数字是"保证收益"。</b>上面假设年化恒定 8%;真实市场有涨有跌,这是平均概念,某些年份会亏。</div>' +
    '<div class="pit"><b>误区:等攒够大本金再投。</b>等待中错过的复利时间,往往比那点本金更贵。开始,比金额重要。</div>',
  quiz: [
    { type: 'choice', q: '定投在本质上属于?', options: ['一次性投资', '投入型年金(定期等额投入)', '投机', '存定期'], answer: 1, source: '理解', explain: '定期等额投入正是年金的形式。' },
    { type: 'choice', q: '"早开始 10 年每月少投" vs "晚开始多投",通常?', options: ['晚开始更好', '早开始常因复利更久而胜出', '完全一样', '取决于运气'], answer: 1, source: '理解', explain: '时间是复利最强的杠杆,早开始优势巨大。' }
  ],
  links: '<p>上一课:<a href="#/l/compound/03-present-future-value">现值与未来值</a> · 下一课:<a href="#/l/compound/05-irr">用 IRR 看真实回报</a> · 相关:<a href="#/l/fund/06-dca">基金定投</a></p>'
});
