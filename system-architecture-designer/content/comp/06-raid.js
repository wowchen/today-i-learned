SAD.registerLesson({
  id: 'comp/06-raid',
  module: 'comp',
  order: 6,
  title: '磁盘阵列 RAID 与存储可靠性',
  minutes: 5,
  keywords: ['RAID', '条带', '镜像', '校验', '磁盘阵列', '冗余', '存储'],
  concept: '<p><gd data-term="raid">RAID</gd> 把多块磁盘组成一个逻辑卷,用<b>条带(提速)、镜像(备份)、校验(纠错)</b>三种手段,在性能与可靠性之间取舍。</p>',
  exam: '<p><b>考纲定位:</b>综合知识常考。重点:RAID0/1/5/10 的特点、容量与容错能力。</p>',
  core: '<table><tr><th>级别</th><th>机制</th><th>容错</th><th>有效容量(n块)</th></tr>' +
    '<tr><td>RAID0</td><td>条带,无冗余</td><td>不容错(快)</td><td>n</td></tr>' +
    '<tr><td>RAID1</td><td>镜像</td><td>容错强</td><td>n/2</td></tr>' +
    '<tr><td>RAID5</td><td>分布式奇偶校验</td><td>容1块坏</td><td>n−1</td></tr>' +
    '<tr><td>RAID6</td><td>双校验</td><td>容2块坏</td><td>n−2</td></tr>' +
    '<tr><td>RAID10</td><td>先镜像再条带</td><td>容错强且快</td><td>n/2</td></tr></table>' +
    '<div class="ex">选型口诀:要纯速度→0;要安全→1;<b>容量与安全兼顾→5</b>;又快又稳(预算够)→10。</div>',
  pitfalls: '<div class="pit"><b>误解1:RAID 等于备份。</b>RAID 防的是<b>磁盘硬件故障</b>,挡不住误删、病毒、机房灾难。RAID ≠ 备份,异地备份仍必需。</div>' +
    '<div class="pit"><b>误解2:RAID5 能容两块盘同时坏。</b>RAID5 只容<b>1</b>块;要容2块用 RAID6。</div>',
  quiz: [
    { type: 'choice', q: '关于RAID5,正确的是?', options: ['无冗余速度最快', '镜像,容量减半', '分布式校验,可容1块磁盘故障', '可容2块磁盘故障'], answer: 2, source: '高频', explain: 'RAID5用分布式奇偶校验,可容1块盘故障,有效容量n−1。' },
    { type: 'choice', q: '4块同容量磁盘做RAID1,有效容量约为?', options: ['4块', '3块', '2块', '1块'], answer: 2, source: '高频', explain: 'RAID1镜像,有效容量为n/2,4块即约2块。' }
  ],
  links: '<p>上一课:<a href="#/l/comp/05-bus-pipeline">流水线</a> · 网络存储:<a href="#/l/net/05-storage">DAS/NAS/SAN</a> · 可靠性:<a href="#/l/rel/04-design">可靠性设计与冗余</a></p>'
});
