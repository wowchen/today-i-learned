PFIN.registerLesson({
  id: 'allocation/03-diversification',
  module: 'allocation',
  order: 3,
  title: '分散:唯一的免费午餐',
  minutes: 4,
  key: true,
  keywords: ['分散', '分散投资', '相关性', '鸡蛋篮子'],
  concept: '<p><b><gd data-term="diversification">分散</gd></b>被称为"投资中唯一的免费午餐":通过持有多种<b>不同步涨跌</b>的资产,在几乎不牺牲长期收益的前提下降低波动。</p>' +
    '<div class="ex">不把鸡蛋放一个篮子——更要紧的是,这些篮子别一起摔。</div>',
  core: '<p><b>关键不是"多",而是"低<gd data-term="correlation">相关性</gd>":</b></p>' +
    '<ul>' +
    '<li>买 20 只都是同一行业的股票 → 看着分散,实则一起涨跌,没真正分散。</li>' +
    '<li>股票 + 债券 + 黄金 → 涨跌节奏不同,一类跌时另一类可能扛住,整体更稳。</li>' +
    '</ul>' +
    '<p><b>分散的三个层次:</b></p>' +
    '<ul>' +
    '<li><b>跨资产类别</b>:股、债、现金、另类。</li>' +
    '<li><b>跨行业/地域</b>:别押单一行业、单一国家。</li>' +
    '<li><b>跨时间</b>:定投,分批买入摊平成本(见基金模块)。</li>' +
    '</ul>' +
    '<p><b>能消除的与不能消除的:</b>分散能去掉"个股/个别公司"的风险,但消不掉"整个市场系统性下跌"的风险——所以分散不等于不亏。</p>' +
    '<p class="ex">一只宽基指数基金,本身就持有几百只股票,是普通人最省事的分散工具(见 ETF 与指数基金)。</p>',
  pitfalls: '<div class="pit"><b>误区:股票数量多=分散好。</b>若都集中在同一行业/风格,相关性高,等于没分散。要看相关性,不是数量。</div>' +
    '<div class="pit"><b>误区:分散=不会亏。</b>分散降低的是个别资产风险;系统性大跌时各类资产可能同跌,分散不能保证不亏。</div>',
  quiz: [
    { type: 'choice', q: '有效分散的关键是?', options: ['持有的标的数量足够多', '所持资产之间相关性低(不同步涨跌)', '都买热门股', '全买同一行业龙头'], answer: 1, source: '理解', explain: '低相关才能真正平滑波动。' },
    { type: 'choice', q: '分散投资能消除以下哪种风险?', options: ['整个市场系统性下跌', '个别公司/个股的特有风险', '所有风险', '通胀风险'], answer: 1, source: '理解', explain: '分散去掉个别风险,系统性风险消不掉。' }
  ],
  links: '<p>上一课:<a href="#/l/allocation/02-risk-tolerance">风险承受度</a> · 下一课:<a href="#/l/allocation/04-rebalance">再平衡</a></p>'
});
