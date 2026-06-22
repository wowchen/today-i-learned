SPM.registerLesson({
  id: 'net/03-addressing',
  module: 'net',
  order: 3,
  title: 'IP 地址与子网',
  minutes: 5,
  keywords: ['IPv4', 'IPv6', '子网掩码', '私有地址', 'NAT'],
  concept: '<p>IP 地址标识网络中的设备。<b>IPv4</b> 32 位将耗尽,<b>IPv6</b> 128 位接棒。子网掩码划分"网络号+主机号"。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,偶有简单子网计算。</p>',
  core: '<ul>' +
    '<li><b>私有地址</b>:10.x、172.16~31.x、192.168.x,内网用,经 <b>NAT</b> 转换上公网。</li>' +
    '<li><b>子网掩码</b>:如 /24 = 255.255.255.0,可用主机数约 2^主机位−2。</li>' +
    '<li><b>IPv6</b>:地址空间巨大,简化配置,逐步普及。</li>' +
    '</ul>' +
    '<div class="ex">/24 网段去掉网络号与广播,通常可用主机 254 个。</div>',
  pitfalls: '<div class="pit"><b>每个子网两端要扣除</b>:网络号和广播地址不能分给主机,所以是 2^n−2。</div>',
  quiz: [
    { type: 'choice', q: '子网掩码 /24 的网段,理论可用主机数约为?', options: ['256', '254', '128', '510'], answer: 1, source: '高频', explain: '2^8−2=254,扣网络号与广播。' }
  ],
  links: '<p>上一课:<a href="#/l/net/02-protocol">常见协议</a> · 下一课:<a href="#/l/net/04-devices">网络设备</a></p>'
});
