PFIN.registerLesson({
  id: 'compound/05-irr',
  module: 'compound',
  order: 5,
  title: 'IRR:看穿真实回报',
  minutes: 4,
  keywords: ['IRR', '内部收益率', '年化', '真实回报'],
  concept: '<p><b><gd data-term="irr">内部收益率(IRR)</gd></b>把一笔有多次进出的投资,折算成一个统一的<b>年化收益率</b>,方便横向比较。</p>' +
    '<div class="ex">它能把"分期投入、不定时取出"这种乱账,换算成"相当于年化百分之几"。</div>',
  core: '<p><b>为什么需要 IRR:</b></p>' +
    '<ul>' +
    '<li>很多产品只报"总收益"或"累计领取额",掩盖了真实年化。</li>' +
    '<li>例:某保险"交 10 年、20 年后共领回本金的 1.5 倍"。听着不错,但 IRR 一算可能只有 <b>2%–3%</b>,跑不赢通胀。</li>' +
    '</ul>' +
    '<p><b>IRR 的判断基准:</b></p>' +
    '<ul>' +
    '<li>低于通胀(约 3%):购买力实际在缩水。</li>' +
    '<li>接近国债收益:仅算保本级。</li>' +
    '<li>明显高于股市长期回报又"保本",几乎一定有诈。</li>' +
    '</ul>' +
    '<p class="ex">看任何"长期返还/分红"产品,别看总额,问一句:<b>它的 IRR 是多少?</b>这一问能挡掉大量包装。</p>',
  pitfalls: '<div class="pit"><b>误区:总收益高=划算。</b>"20 年返你 1.5 倍"年化可能仅 2%;时间拉长,任何低收益的总额看着都唬人。</div>' +
    '<div class="pit"><b>误区:把演示利率当真实 IRR。</b>保险/理财演示常用"中高档假设收益",非保证;真实 IRR 要按保证部分算。</div>',
  quiz: [
    { type: 'choice', q: 'IRR 主要解决什么问题?', options: ['预测股价', '把多次进出的投资折算成统一年化收益率', '计算税款', '挑选股票'], answer: 1, source: '理解', explain: 'IRR 把复杂现金流统一成可比的年化回报。' },
    { type: 'choice', q: '某产品"20 年返本金 1.5 倍",其 IRR 大致?', options: ['很高,约 15%', '较低,约 2%–3%', '一定保本高息', '无法判断,肯定划算'], answer: 1, source: '理解', explain: '时间拉长,1.5 倍总额对应的年化其实很低。' }
  ],
  links: '<p>上一课:<a href="#/l/compound/04-annuity">年金</a> · 下一课:<a href="#/l/compound/06-inflation">通胀:隐形的小偷</a> · 相关:<a href="#/l/insurance/04-protect-vs-invest">保障与理财之争</a></p>'
});
