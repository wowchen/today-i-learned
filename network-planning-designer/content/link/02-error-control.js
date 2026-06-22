NPD.registerLesson({
  id: 'link/02-error-control',
  module: 'link',
  order: 2,
  title: '差错控制:检错与纠错',
  minutes: 5,
  keywords: ['差错控制', 'CRC', '海明码', '奇偶校验', '检错', '纠错'],
  concept: '<p>信道有噪声,帧可能出错。差错控制分两类:<b>检错</b>(发现错,要求重传)与<b>纠错</b>(直接改对)。</p>' +
    '<div class="ex">链路层普遍用 <gd data-term="crc">CRC</gd> 检错+重传;要求高的场景用 <gd data-term="hamming">海明码</gd> 纠错。</div>',
  exam: '<p><b>频度:高。</b>常考 CRC 原理、海明码校验位公式、检错/纠错区别。</p>',
  core: '<p><b>常用校验:</b></p>' +
    '<table><tr><th>方法</th><th>能力</th><th>特点</th></tr>' +
    '<tr><td>奇偶校验</td><td>检奇数位错</td><td>简单,漏偶数位错</td></tr>' +
    '<tr><td>CRC</td><td>检错强</td><td>多项式除法生成校验码,开销小,链路层主流</td></tr>' +
    '<tr><td>海明码</td><td>检错+纠错</td><td>插入校验位定位单比特错</td></tr></table>' +
    '<p><b>海明码核心公式:</b>为纠正单比特错,校验位 r 需满足 <b>2^r ≥ m + r + 1</b>(m 为数据位)。</p>' +
    '<p class="ex"><b>例:</b>m=4 数据位,需 2^r≥4+r+1 → r=3(8≥8)。校验位放在 2 的幂次位置(1,2,4…)。</p>',
  pitfalls: '<div class="pit"><b>易错:海明码公式。</b>2^r ≥ m+r+1,别漏 "+1";r 是校验位数不是数据位。</div>' +
    '<div class="pit"><b>易混:检错 vs 纠错。</b>CRC 只检错(靠重传纠正);海明码能定位并纠正单比特错,但多比特错仍有限。</div>',
  quiz: [
    { type: 'choice', q: '要纠正单比特错,4 位数据需多少位海明校验位?', options: ['2', '3', '4', '5'], answer: 1, source: '计算', explain: '2^r≥4+r+1,r=3 时 8≥8 成立。' },
    { type: 'choice', q: '以太网帧的 FCS 采用的校验是?', options: ['奇偶校验', 'CRC', '海明码', '校验和'], answer: 1, source: '基础', explain: '以太网 FCS 用 CRC-32。' },
    { type: 'fill', q: '海明码校验位数 r 需满足 2^r ≥ m + r + ____。(数字)', answer: ['1'], source: '公式', explain: '2^r ≥ m+r+1。' }
  ],
  links: '<p>上一课:<a href="#/l/link/01-framing">成帧</a> · 下一课:<a href="#/l/link/03-flow-control">流量控制</a></p>'
});
