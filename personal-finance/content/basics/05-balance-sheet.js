PFIN.registerLesson({
  id: 'basics/05-balance-sheet',
  module: 'basics',
  order: 5,
  title: '个人资产负债表',
  minutes: 4,
  keywords: ['资产', '负债', '净资产', '资产负债表'],
  concept: '<p>想知道自己"到底有多少钱",看的不是工资,是<b><gd data-term="net-worth">净资产</gd> = <gd data-term="asset">资产</gd> − <gd data-term="liability">负债</gd></b>。</p>' +
    '<div class="ex">月入再高,如果负债更高,净资产可能是负的——表面光鲜,实则在给银行打工。</div>',
  core: '<p><b>资产(你拥有的、能变现的):</b></p>' +
    '<ul>' +
    '<li>现金、存款、货币基金</li>' +
    '<li>股票、债券、基金等投资</li>' +
    '<li>房产、车(车通常贬值,算资产时要打折)</li>' +
    '</ul>' +
    '<p><b>负债(你欠的):</b></p>' +
    '<ul>' +
    '<li>房贷、车贷、消费贷</li>' +
    '<li>信用卡未还、花呗白条</li>' +
    '</ul>' +
    '<p><b>怎么用这张表?</b></p>' +
    '<ul>' +
    '<li>每季度算一次净资产,看趋势是涨是跌——这比单看某只股票涨跌重要得多。</li>' +
    '<li>区分<b>good debt</b>(低息、对应增值或生产性资产,如部分房贷)与<b>bad debt</b>(高息消费贷),优先消灭后者。</li>' +
    '</ul>' +
    '<p class="ex">净资产持续上升,才说明你真在变富,而不是收入高、花得也凶。</p>',
  pitfalls: '<div class="pit"><b>误区:把会贬值的东西当资产高估。</b>车、电子产品买入即贬值,记账时应按现值打折,别按买价算。</div>' +
    '<div class="pit"><b>误区:自住房算"纯资产"。</b>它同时绑着房贷负债,且不产生现金流、变现慢,详见房产模块。</div>',
  quiz: [
    { type: 'choice', q: '净资产的正确算法是?', options: ['收入 − 支出', '资产 − 负债', '资产 + 负债', '工资 × 12'], answer: 1, source: '记忆', explain: '净资产 = 资产 − 负债。' },
    { type: 'choice', q: '下列哪项最该优先偿还?', options: ['低息房贷', '高息消费贷/信用卡', '无息借给朋友的钱', '助学贷款'], answer: 1, source: '理解', explain: '高息"坏债"侵蚀最快,应优先消灭。' }
  ],
  links: '<p>上一课:<a href="#/l/basics/04-emergency-fund">应急基金</a> · 下一课:<a href="#/l/basics/06-goals">设定理财目标</a></p>'
});
