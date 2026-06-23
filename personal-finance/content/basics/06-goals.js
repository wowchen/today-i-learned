PFIN.registerLesson({
  id: 'basics/06-goals',
  module: 'basics',
  order: 6,
  title: '设定理财目标',
  minutes: 4,
  keywords: ['目标', '短期', '长期', '规划'],
  concept: '<p>钱该怎么放,取决于<b>什么时候要用</b>。先有目标和时间表,再选工具——不是反过来。</p>' +
    '<div class="ex">三个月后付的房租和三十年后的养老钱,绝不能放进同一个篮子。</div>',
  core: '<p><b>按时间分三类目标,匹配不同工具:</b></p>' +
    '<table><tr><th>期限</th><th>例子</th><th>适合放</th></tr>' +
    '<tr><td>短期(&lt;1年)</td><td>应急、旅行、年内大额消费</td><td>活期、货币基金(求稳)</td></tr>' +
    '<tr><td>中期(1–5年)</td><td>买车、首付、教育金</td><td>债券/稳健基金为主</td></tr>' +
    '<tr><td>长期(&gt;5年)</td><td>养老、子女远期教育</td><td>股票/指数基金为主(求增值)</td></tr></table>' +
    '<p><b>目标要具体可量化(SMART):</b>"我要变富"没法执行;"5 年内攒 30 万首付,每月定投 4000"才能落地。</p>' +
    '<p><b>时间越长,越能承受波动</b>:长期目标的钱可以多配股票,因为有足够时间熬过下跌、等待复利。</p>' +
    '<p class="ex">同一个人可以同时有多个目标账户:应急池、首付池、养老池,各按期限独立配置。</p>',
  pitfalls: '<div class="pit"><b>误区:把短期要用的钱投股市。</b>万一用钱时正赶上下跌,只能亏损割肉。短期目标求稳不求高。</div>' +
    '<div class="pit"><b>误区:长期养老钱全放活期。</b>跑不赢通胀,几十年后购买力大幅缩水,等于慢性亏损。</div>',
  quiz: [
    { type: 'choice', q: '一年后要付的购车款,最适合放?', options: ['股票', '货币基金等稳健工具', '加杠杆炒期货', '锁定 5 年的产品'], answer: 1, source: '理解', explain: '短期要用的钱求稳,不能承受波动。' },
    { type: 'choice', q: '为什么长期目标可以多配股票?', options: ['股票一定涨', '有足够时间熬过波动、等复利', '股票没有风险', '银行推荐'], answer: 1, source: '理解', explain: '时间越长越能平滑波动,享受长期增值。' }
  ],
  links: '<p>上一课:<a href="#/l/basics/05-balance-sheet">资产负债表</a> · 下一课:<a href="#/l/basics/07-mindset">理财心态</a> · 相关:<a href="#/l/allocation/05-lifecycle">生命周期配置</a></p>'
});
