PFIN.registerLesson({
  id: 'realestate/05-liquidity',
  module: 'realestate',
  order: 5,
  title: '流动性:急用钱时才知道',
  minutes: 3,
  keywords: ['流动性', '变现', '房产', '资产结构'],
  concept: '<p><b><gd data-term="liquidity">流动性</gd></b>指资产变成现金的快慢与代价。它平时不起眼,<b>一到急用钱时,就成了头等大事。</b></p>' +
    '<div class="ex">账面有千万房产,但孩子留学、家人看病要现金时,房子一时半会儿卖不掉,也救不了急。</div>',
  core: '<p><b>常见资产的流动性排序(从高到低):</b></p>' +
    '<table><tr><th>资产</th><th>变现速度</th></tr>' +
    '<tr><td>活期/货币基金</td><td>当天可用</td></tr>' +
    '<tr><td>股票/场内基金</td><td>几个交易日</td></tr>' +
    '<tr><td>普通开放式基金</td><td>数日</td></tr>' +
    '<tr><td>房产</td><td>数月,且成本高</td></tr></table>' +
    '<p><b>房产是典型的低流动性资产:</b>卖房要找买家、谈价、过户、交税费,顺利也要数月;行情差时可能更久或被迫降价。</p>' +
    '<p><b>对资产结构的启示:</b></p>' +
    '<ul>' +
    '<li>别让财富过度集中在房产,导致"纸面富有、手头紧张"。</li>' +
    '<li>始终保留足够的高流动性资产(<gd data-term="emergency-fund">应急金</gd> + 部分可快速变现的投资)。</li>' +
    '<li>规划大额支出(教育、医疗、养老)时,提前安排流动性,别临时卖房救急。</li>' +
    '</ul>' +
    '<p class="ex">流动性是一种"看不见的安全感":它让你在意外面前有选择权,而不是被迫贱卖资产。</p>',
  pitfalls: '<div class="pit"><b>误区:有房产就等于有钱。</b>房产流动性差、变现慢;急用钱时它帮不上忙,手头仍需现金类资产。</div>' +
    '<div class="pit"><b>误区:把几乎全部财富压在房产上。</b>资产结构过度集中且流动性差,一遇变故只能被迫低价处置。</div>',
  quiz: [
    { type: 'choice', q: '下列资产流动性最差的是?', options: ['货币基金', '股票', '房产', '活期存款'], answer: 2, source: '理解', explain: '房产变现慢、成本高,流动性最差。' },
    { type: 'choice', q: '良好的资产结构应?', options: ['全部买房', '保留足够高流动性资产应对急用', '全部锁定长期', '不留现金'], answer: 1, source: '理解', explain: '兼顾增值与流动性,留足应急与可变现部分。' }
  ],
  links: '<p>上一课:<a href="#/l/realestate/04-reits">REITs</a> · 进入保险模块:<a href="#/l/insurance/01-principle">保险的原理</a></p>'
});
