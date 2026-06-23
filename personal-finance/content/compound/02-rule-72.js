PFIN.registerLesson({
  id: 'compound/02-rule-72',
  module: 'compound',
  order: 2,
  title: '72 法则:心算翻倍',
  minutes: 3,
  key: true,
  keywords: ['72法则', '翻倍', '心算', '收益率'],
  concept: '<p><b><gd data-term="rule-72">72 法则</gd></b>:本金翻倍所需年数 ≈ <b>72 ÷ 年化收益率(%)</b>。一个不用计算器的估算神器。</p>' +
    '<div class="ex">年化 8%,约 9 年翻倍(72÷8);年化 6%,12 年翻倍(72÷6)。</div>',
  core: '<p><b>怎么用:</b></p>' +
    '<table><tr><th>年化收益率</th><th>翻倍约需</th></tr>' +
    '<tr><td>3%</td><td>24 年</td></tr>' +
    '<tr><td>6%</td><td>12 年</td></tr>' +
    '<tr><td>8%</td><td>9 年</td></tr>' +
    '<tr><td>12%</td><td>6 年</td></tr></table>' +
    '<p><b>反过来也能用</b>:想 10 年翻倍,需要的年化 ≈ 72÷10 = 7.2%。立刻知道目标合不合理。</p>' +
    '<p><b>它也能算"亏":</b>通胀 3%,购买力约 24 年腰斩——你的现金放着不动,价值在被悄悄对半砍。</p>' +
    '<p class="ex">72 法则是估算,不是精确公式;在常见收益率(6%–10%)区间最准。精确计算用<a href="#/calc">复利计算器</a>。</p>',
  pitfalls: '<div class="pit"><b>误区:把它当精确公式。</b>它是口算近似;高收益率(如 30%+)误差变大,精确值要用对数计算。</div>' +
    '<div class="pit"><b>误区:只想着翻倍收益,忘了通胀也翻"贬"。</b>评估真实回报要用"收益率 − 通胀率"。</div>',
  quiz: [
    { type: 'fill', q: '年化收益率 6%,本金约 ____ 年翻倍?(填数字)', answer: ['12'], source: '计算', explain: '72 ÷ 6 = 12 年。' },
    { type: 'choice', q: '想让本金 8 年翻倍,大约需要的年化收益率是?', options: ['约 3%', '约 6%', '约 9%', '约 15%'], answer: 2, source: '计算', explain: '72 ÷ 8 = 9%。' }
  ],
  links: '<p>上一课:<a href="#/l/compound/01-simple-vs-compound">单利与复利</a> · 下一课:<a href="#/l/compound/03-present-future-value">现值与未来值</a></p>'
});
