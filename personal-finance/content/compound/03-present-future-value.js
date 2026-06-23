PFIN.registerLesson({
  id: 'compound/03-present-future-value',
  module: 'compound',
  order: 3,
  title: '现值与未来值',
  minutes: 4,
  keywords: ['现值', '未来值', '折现', '时间价值'],
  concept: '<p>钱有<b>时间价值</b>:今天的 100 元 > 一年后的 100 元。把未来的钱折回今天叫<b><gd data-term="present-value">现值</gd></b>,把今天的钱推到未来叫<b><gd data-term="future-value">未来值</gd></b>。</p>' +
    '<div class="ex">"明年给你 100 万" 听着诱人,但折到今天可能只值 90 多万。</div>',
  core: '<p><b>未来值(钱滚大):</b> FV = PV × (1 + r)<sup>n</sup></p>' +
    '<ul><li>今天 1 万,年化 8%,10 年后 = 1万 × 1.08<sup>10</sup> ≈ <b>2.16 万</b>。</li></ul>' +
    '<p><b>现值(钱折回来):</b> PV = FV ÷ (1 + r)<sup>n</sup></p>' +
    '<ul><li>10 年后的 2.16 万,按 8% 折现到今天 = <b>1 万</b>。</li></ul>' +
    '<p><b>为什么有用:</b></p>' +
    '<ul>' +
    '<li>比较不同时间点的钱:分期 vs 一次付,哪个划算,要折到同一时点比。</li>' +
    '<li>看穿"未来大额承诺":年金险、返还型产品宣传的"几十年共领 XX 万",折现后往往平平。</li>' +
    '</ul>' +
    '<p class="ex">折现率(r)越高、时间越长,未来的钱在今天越"不值钱"。这正是复利的另一面。</p>',
  pitfalls: '<div class="pit"><b>误区:只看名义总额。</b>"30 年共返 50 万"要折现才知真实价值;被名义大数字吸引是常见销售套路。</div>' +
    '<div class="pit"><b>误区:忽略折现率的选取。</b>折现率不同结论可能反转;通常用你的合理投资回报或通胀率作参照。</div>',
  quiz: [
    { type: 'choice', q: '"今天的 100 元比一年后的 100 元更值钱",原因是?', options: ['通胀和钱的时间价值', '银行规定', '心理作用', '没有原因'], answer: 0, source: '理解', explain: '今天的钱能投资生息、且未来购买力会被通胀侵蚀。' },
    { type: 'choice', q: '折现率越高、时间越长,未来一笔钱的现值会?', options: ['越高', '越低', '不变', '先高后低'], answer: 1, source: '理解', explain: '折现分母 (1+r)^n 越大,现值越小。' }
  ],
  links: '<p>上一课:<a href="#/l/compound/02-rule-72">72 法则</a> · 下一课:<a href="#/l/compound/04-annuity">年金:定期现金流</a></p>'
});
