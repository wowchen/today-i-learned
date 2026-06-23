PFIN.registerLesson({
  id: 'realestate/04-reits',
  module: 'realestate',
  order: 4,
  title: 'REITs:用小钱当房东',
  minutes: 4,
  keywords: ['REITs', '不动产基金', '收租', '分红'],
  concept: '<p><b><gd data-term="reits">REITs</gd></b>(不动产投资信托)把商场、写字楼、仓储、产业园等不动产<b>证券化</b>,让你用很小的钱"当房东"、按份额收租分红。</p>' +
    '<div class="ex">买不起整栋楼?REITs 把它切成小份卖,你买一份,就分一份租金。</div>',
  core: '<p><b>REITs 相比直接买房的优点:</b></p>' +
    '<ul>' +
    '<li><b>门槛低</b>:几百上千元即可参与,不用攒首付。</li>' +
    '<li><b>流动性好</b>:多数在交易所挂牌,可买卖,远比卖房快。</li>' +
    '<li><b>强制高分红</b>:REITs 通常要求把大部分可分配收益分给投资者,现金流稳定。</li>' +
    '<li><b>专业管理 + 分散</b>:一只 REIT 常持有多处物业,分散单一物业风险。</li>' +
    '</ul>' +
    '<p><b>也要注意的风险:</b></p>' +
    '<ul>' +
    '<li><b>价格会波动</b>:挂牌交易,价格随市场情绪、利率涨跌(利率上升常压制 REITs)。</li>' +
    '<li><b>底层资产风险</b>:出租率下降、租金下滑会影响分红。</li>' +
    '<li>不同市场的 REITs 规则、税务、底层资产差异较大,需看清产品。</li>' +
    '</ul>' +
    '<p class="ex">REITs 是把"房产的投资属性"单独拿出来、去掉了高门槛和差流动性的工具;作为组合里"另类/不动产"那一小块,有分散价值。</p>',
  pitfalls: '<div class="pit"><b>误区:REITs 是稳定无波动的"收租神器"。</b>它在交易所波动,受利率与出租率影响,价格会涨跌,并非类存款。</div>' +
    '<div class="pit"><b>误区:REITs 和买房一回事。</b>REITs 无需杠杆、流动性好、分散持有多处物业,风险收益特征与自购单套房很不同。</div>',
  quiz: [
    { type: 'choice', q: 'REITs 最主要的特点是?', options: ['必须全款买楼', '把不动产证券化,小钱即可参与并分红', '保证不亏', '等同存款'], answer: 1, source: '理解', explain: 'REITs 让普通人低门槛分享不动产租金收益。' },
    { type: 'choice', q: '关于 REITs 的风险,正确的是?', options: ['完全无风险', '价格会随市场与利率波动,出租率影响分红', '一定跑赢房价', '不能交易'], answer: 1, source: '理解', explain: 'REITs 有价格波动与底层资产风险。' }
  ],
  links: '<p>上一课:<a href="#/l/realestate/03-leverage">杠杆</a> · 下一课:<a href="#/l/realestate/05-liquidity">流动性这件事</a></p>'
});
