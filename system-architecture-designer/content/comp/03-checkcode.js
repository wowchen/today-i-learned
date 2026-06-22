SAD.registerLesson({
  id: 'comp/03-checkcode',
  module: 'comp',
  order: 3,
  title: '校验码:奇偶 / CRC / 海明',
  minutes: 5,
  key: true,
  keywords: ['校验码', '奇偶校验', 'CRC', '海明码', '码距', '纠错', '检错'],
  concept: '<p>数据传输/存储可能出错,校验码靠"加冗余位"来<b>检错甚至纠错</b>。能力强弱由<b>码距</b>决定:码距越大,检/纠错能力越强。</p>' +
    '<div class="ex">码距 d:检 e 个错需 d≥e+1;纠 t 个错需 d≥2t+1。</div>',
  exam: '<p><b>考纲定位:</b>综合知识高频计算。重点:三种码的能力对比、<gd data-term="hamming">海明码</gd>校验位数计算。</p>',
  core: '<p><b>三种校验码:</b></p>' +
    '<table><tr><th>校验码</th><th>能力</th><th>说明</th></tr>' +
    '<tr><td><gd data-term="parity">奇偶校验</gd></td><td>检1位错,不能纠</td><td>码距2,最简单</td></tr>' +
    '<tr><td><gd data-term="crc">CRC</gd></td><td>检错强,一般不纠</td><td>多项式除法,网络/磁盘常用</td></tr>' +
    '<tr><td><gd data-term="hamming">海明码</gd></td><td>检错并纠1位错</td><td>校验位插在 2^k 位置</td></tr></table>' +
    '<div class="ex"><b>海明校验位数:</b>满足 <b>2^r ≥ m+r+1</b> 的最小 r(m为数据位)。<br>例 m=8:r=4 时 2^4=16 ≥ 8+4+1=13 成立,r=3 时 8<12 不成立 → <b>r=4</b>。可用顶部"计算器"验证。</div>',
  pitfalls: '<div class="pit"><b>误解1:CRC能纠错。</b>CRC检错能力很强,但通常<b>只检错不纠错</b>,发现错了重传。</div>' +
    '<div class="pit"><b>误解2:海明码能纠任意多位错。</b>标准海明码只能<b>纠1位、检2位</b>错,不是万能。</div>',
  quiz: [
    { type: 'choice', q: '数据位 m=16,海明码至少需要多少校验位?', options: ['4', '5', '6', '8'], answer: 1, source: '高频计算', explain: '2^5=32 ≥ 16+5+1=22 成立,2^4=16 < 16+4+1=21 不成立,故 r=5。' },
    { type: 'choice', q: '下列校验码能纠正一位错误的是?', options: ['奇偶校验', 'CRC', '海明码', '以上都不能'], answer: 2, source: '高频', explain: '海明码可纠正一位错误;奇偶只能检一位错,CRC一般只检错。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/02-storage-hierarchy">存储体系</a> · 可靠性计算:<a href="#/l/rel/03-series-parallel">串并联可靠度</a></p>'
});
