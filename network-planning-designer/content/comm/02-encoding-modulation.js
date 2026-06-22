NPD.registerLesson({
  id: 'comm/02-encoding-modulation',
  module: 'comm',
  order: 2,
  title: '编码与调制:数字信号怎么上路',
  minutes: 5,
  keywords: ['编码', '调制', 'NRZ', '曼彻斯特', 'ASK/FSK/PSK', 'PCM'],
  concept: '<p>"编码"和"调制"都把比特变成能在信道上跑的波形,但场景不同:</p>' +
    '<ul><li><b>编码(基带)</b>:数字→数字波形,用于有线基带传输。</li>' +
    '<li><b>调制(频带)</b>:数字→模拟载波,用于无线/频带信道。</li>' +
    '<li><b>PCM</b>:模拟→数字,把话音数字化。</li></ul>' +
    '<div class="ex">一句话:编码管"0/1 长什么样",调制管"0/1 搭到哪段载波上"。</div>',
  exam: '<p><b>频度:中高。</b>常考编码方式是否自同步、调制方式名称、PCM 三步。</p>',
  core: '<p><b>常见数字编码(基带):</b></p>' +
    '<table><tr><th>编码</th><th>特点</th><th>自同步</th></tr>' +
    '<tr><td>NRZ</td><td>高=1 低=0,简单</td><td>否(长串1/0丢时钟)</td></tr>' +
    '<tr><td>曼彻斯特</td><td>每位中间跳变:上跳=1/下跳=0</td><td>是</td></tr>' +
    '<tr><td>差分曼彻斯特</td><td>每位中间跳变+位边界跳变表0</td><td>是</td></tr></table>' +
    '<p><b>调制(数字→模拟):</b>ASK 调幅、FSK 调频、PSK 调相、QAM 幅相组合。</p>' +
    '<p><b>PCM(模拟→数字)三步:</b>抽样(奈奎斯特抽样)→量化→编码。</p>' +
    '<div class="ex">曼彻斯特虽自同步,但每个码元需两次跳变、占用带宽约为 NRZ 的两倍。</div>',
  pitfalls: '<div class="pit"><b>易混:编码 vs 调制 vs PCM。</b>编码是数字→数字基带;调制是数字→模拟载波;PCM 是模拟→数字(抽样量化编码)。</div>' +
    '<div class="pit"><b>考点:曼彻斯特编码能自同步</b>但带宽效率低;NRZ 简单但无自同步——常作为对比出题。</div>',
  quiz: [
    { type: 'choice', q: '下列编码能"自同步"(自带时钟)的是?', options: ['NRZ', '曼彻斯特编码', '单极性不归零', 'AMI'], answer: 1, source: '基础', explain: '曼彻斯特每位中间跳变,可自同步。' },
    { type: 'choice', q: 'PCM 把模拟信号数字化的三步是?', options: ['加密/解密/签名', '抽样/量化/编码', '调制/解调/纠错', '复用/交换/路由'], answer: 1, source: '基础', explain: 'PCM = 抽样→量化→编码。' },
    { type: 'choice', q: '把数字信号搬移到载波频段属于?', options: ['编码', '调制', '复用', '校验'], answer: 1, source: '基础', explain: '搬移到载波即调制(频带传输)。' }
  ],
  links: '<p>上一课:<a href="#/l/comm/01-signal">信号</a> · 下一课:<a href="#/l/comm/03-multiplexing">多路复用</a></p>'
});
