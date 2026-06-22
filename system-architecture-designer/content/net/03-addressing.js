SAD.registerLesson({
  id: 'net/03-addressing',
  module: 'net',
  order: 3,
  title: 'IP 地址与子网划分',
  minutes: 5,
  key: true,
  keywords: ['IP地址', '子网划分', '子网掩码', 'CIDR', '网络位', '主机位'],
  concept: '<p>IPv4 地址 32 位,分网络位和主机位。<gd data-term="subnet">子网划分</gd>用掩码"借主机位当网络位",把一个网络切成多个子网。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频计算。重点:可用主机数、子网数、掩码换算。</p>',
  core: '<p><b>核心公式(主机位 n):</b></p>' +
    '<div class="ex">每个子网可用主机数 = <b>2ⁿ − 2</b>(去掉网络地址和广播地址)。<br>' +
    '例:掩码 /26 → 主机位 = 32−26 = 6 → 可用主机 = 2⁶−2 = <b>62</b> 台。<br>' +
    'CIDR 记法 /x 表示前 x 位是网络位。</div>' +
    '<p>私有地址段(不上公网):10.x、172.16~31.x、192.168.x。</p>',
  pitfalls: '<div class="pit"><b>误解:可用主机数是 2ⁿ。</b>要<b>减 2</b>:全0是网络地址、全1是广播地址,都不能分给主机。</div>',
  quiz: [
    { type: 'fill', q: '子网掩码为/27时,每个子网可用主机数为____台。', answer: ['30'], source: '高频计算', explain: '主机位=32−27=5,2⁵−2=30。' },
    { type: 'choice', q: '下列属于私有IP地址的是?', options: ['8.8.8.8', '192.168.1.1', '114.114.114.114', '1.1.1.1'], answer: 1, source: '高频', explain: '192.168.x.x为私有地址段。' }
  ],
  links: '<p>上一课:<a href="#/l/net/02-protocol">协议与端口</a> · 下一课:<a href="#/l/net/04-networking">组网与网络设备</a></p>'
});
