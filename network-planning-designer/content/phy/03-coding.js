NPD.registerLesson({
  id: 'phy/03-coding',
  module: 'phy',
  order: 3,
  title: '物理层编码方式',
  minutes: 4,
  keywords: ['编码', 'NRZ', '曼彻斯特', '4B/5B', '8B/10B', '扰码'],
  concept: '<p>物理层要把比特变成线路上的电平/光信号,需要<b>线路编码</b>。核心诉求:能传、能同步、抗干扰。</p>' +
    '<div class="ex">关键矛盾:NRZ 简单但长串 0/1 丢时钟;曼彻斯特自同步但带宽翻倍。</div>',
  exam: '<p><b>频度:中。</b>常考编码方式是否自同步、带宽效率、以太网用什么。</p>',
  core: '<p><b>常见编码:</b></p>' +
    '<table><tr><th>编码</th><th>规则</th><th>自同步</th><th>带宽效率</th></tr>' +
    '<tr><td>NRZ</td><td>高=1 低=0</td><td>否</td><td>高</td></tr>' +
    '<tr><td>曼彻斯特</td><td>位中间跳变</td><td>是</td><td>低(约为NRZ两倍带宽)</td></tr>' +
    '<tr><td>差分曼彻斯特</td><td>位中间跳+边界跳变表0</td><td>是</td><td>低</td></tr>' +
    '<tr><td>4B/5B</td><td>4 位映 5 位(多1保证跳变)</td><td>较好</td><td>较高</td></tr></table>' +
    '<p><b>用途:</b>经典以太网(10Base-T)用曼彻斯特;百兆/千兆以太网用 4B/5B、8B/10B 等高效编码加扰码,兼顾同步与效率。</p>' +
    '<p class="ex">扰码(scrambling)把长串 0/1 打乱,便于时钟恢复,常见于高速链路。</p>',
  pitfalls: '<div class="pit"><b>易错:曼彻斯特"带宽约为 NRZ 两倍"。</b>因每位两次跳变,编码效率低——这是它被高速以太网淘汰的原因。</div>' +
    '<div class="pit"><b>易混:4B/5B 不是调制。</b>它是把 4 比特映成 5 比特线路码,确保足够跳变以利同步,属编码。</div>',
  quiz: [
    { type: 'choice', q: '下列编码中带宽效率最低(约为 NRZ 两倍带宽)的是?', options: ['NRZ', '曼彻斯特', '4B/5B', '8B/10B'], answer: 1, source: '理解', explain: '曼彻斯特每位两次跳变,带宽约为 NRZ 两倍。' },
    { type: 'choice', q: '经典 10Base-T 以太网采用的编码是?', options: ['NRZ', '曼彻斯特编码', '4B/5B', '扰码'], answer: 1, source: '基础', explain: '10Base-T 用曼彻斯特编码。' },
    { type: 'choice', q: '4B/5B 编码的主要目的是?', options: ['加密数据', '保证足够跳变利于同步', '减少带宽', '压缩数据'], answer: 1, source: '理解', explain: '4 位映 5 位增加跳变密度,便于时钟同步。' }
  ],
  links: '<p>上一课:<a href="#/l/phy/02-medium-fiber">光纤介质</a> · 下一课:<a href="#/l/phy/04-cabling">综合布线</a> · 编码原理:<a href="#/l/comm/02-encoding-modulation">编码与调制</a></p>'
});
