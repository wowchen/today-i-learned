NPD.registerLesson({
  id: 'net/03-ipv6',
  module: 'net',
  order: 3,
  title: 'IPv6:更大、更简、更安全',
  minutes: 4,
  keywords: ['IPv6', '128位', '地址表示', '首部', '无状态自动配置', '过渡'],
  concept: '<p><b><gd data-term="ipv6">IPv6</gd></b> 地址 128 位、冒号十六进制,空间近乎无限,且简化了首部、内置安全。</p>' +
    '<div class="ex">不只是"地址更多",还顺手解决了自动配置、QoS、端到端安全等 IPv4 的历史包袱。</div>',
  exam: '<p><b>频度:中高。</b>常考表示法、地址类型、与 IPv4 对比、过渡技术。</p>',
  core: '<p><b>表示法要点:</b></p>' +
    '<ul>' +
    '<li>8 组 16 位十六进制,冒号分隔,如 2001:0db8:0000:0000:0000:0000:0000:0001。</li>' +
    '<li><b>每组前导 0 可省</b>:0db8→db8。</li>' +
    '<li><b>连续全 0 组可用 :: 压缩一次</b>:上式 → 2001:db8::1。</li>' +
    '</ul>' +
    '<p><b>地址类型:</b>单播(全球/链路本地/唯一本地)、组播、任播。无广播。</p>' +
    '<p><b>链路本地地址</b>以 FE80::/10 开头,仅本链路有效,用于邻居发现。</p>' +
    '<p><b>过渡技术:</b>双栈(同时跑 v4/v6)、隧道(6to4、ISATAP)、翻译(NAT64/DNS64)。</p>' +
    '<p class="ex">IPv6 首部固定 40 字节(IPv4 可变),中间设备不再分片,由源端用 PMTUD 控制分片。</p>',
  pitfalls: '<div class="pit"><b>易错::: 只能压缩一次。</b>一个地址中连续全 0 段只能用一次 ::,不能出现两个。</div>' +
    '<div class="pit"><b>易混:IPv6 无广播地址。</b>用组播替代广播功能;不再有 IPv4 的全 1 广播。</div>',
  quiz: [
    { type: 'choice', q: 'IPv6 地址的位数是?', options: ['32 位', '64 位', '128 位', '256 位'], answer: 2, source: '基础', explain: 'IPv6 为 128 位。' },
    { type: 'choice', q: '下列 IPv6 地址压缩合法的是?', options: ['2001::db8::1', '2001:0:0:0:0:0:0:1 → 2001::1', ':::1', '2001::::1'], answer: 1, source: '基础', explain: ':: 只能压缩一次连续 0。' },
    { type: 'choice', q: 'IPv6 链路本地地址前缀是?', options: ['FE80::/10', 'FF00::/8', '2001::/16', '::1/128'], answer: 0, source: '基础', explain: '链路本地为 FE80::/10。' }
  ],
  links: '<p>上一课:<a href="#/l/net/02-subnet">子网划分</a> · 下一课:<a href="#/l/net/04-arp-icmp">ARP 与 ICMP</a> · IPv6 过渡:<a href="#/l/emerging/04-cloud-network">云网络</a></p>'
});
