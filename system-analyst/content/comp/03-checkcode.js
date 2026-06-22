SAN.registerLesson({
  id: 'comp/03-checkcode',
  module: 'comp',
  order: 3,
  title: '校验码:奇偶 / CRC / 海明',
  minutes: 5,
  key: true,
  keywords: ['校验码', '奇偶', 'CRC', '海明码', '码距', '纠错'],
  concept: '<p>校验码靠加冗余位<b>检错甚至纠错</b>,能力由<b>码距</b>决定:检 e 个错需 d≥e+1,纠 t 个错需 d≥2t+1。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频计算。重点:三种码能力对比、<gd data-term="hamming">海明码</gd>校验位数。</p>',
  core: '<table><tr><th>校验码</th><th>能力</th></tr>' +
    '<tr><td><gd data-term="parity">奇偶校验</gd></td><td>检1位错,不能纠(码距2)</td></tr>' +
    '<tr><td><gd data-term="crc">CRC</gd></td><td>检错强,一般不纠</td></tr>' +
    '<tr><td><gd data-term="hamming">海明码</gd></td><td>检错并纠1位错</td></tr></table>' +
    '<div class="ex"><b>海明位数:</b>满足 2^r ≥ m+r+1 的最小 r。m=8 时 r=4(2⁴=16≥13)。可用顶部计算器思路验证。</div>',
  pitfalls: '<div class="pit"><b>误解:CRC能纠错。</b>CRC检错强但<b>通常只检错不纠错</b>,发现错就重传。</div>',
  quiz: [
    { type: 'choice', q: '数据位m=16,海明码至少需校验位?', options: ['4', '5', '6', '8'], answer: 1, source: '高频计算', explain: '2⁵=32≥16+5+1=22成立,r=5。' },
    { type: 'choice', q: '能纠正一位错误的是?', options: ['奇偶校验', 'CRC', '海明码', '都不能'], answer: 2, source: '高频', explain: '海明码可纠一位错。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/02-storage">存储体系</a> · 下一课:<a href="#/l/comp/04-io">IO方式</a></p>'
});
