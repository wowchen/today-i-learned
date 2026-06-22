SAN.registerLesson({
  id: 'net/03-addressing',
  module: 'net',
  order: 3,
  title: 'IP 地址与子网划分',
  minutes: 5,
  keywords: ['IP地址', '子网划分', '子网掩码', 'CIDR', '主机数'],
  concept: '<p>IPv4 地址 32 位,分网络位和主机位。<gd data-term="subnet">子网划分</gd>用掩码借主机位当网络位,把一个网络切成多子网。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频计算。重点:可用主机数、掩码换算。</p>',
  core: '<div class="ex">每子网可用主机数 = <b>2ⁿ−2</b>(去网络地址和广播地址,n为主机位)。<br>例:/26 → 主机位6 → 2⁶−2=<b>62</b> 台。私有段:10.x、172.16~31.x、192.168.x。</div>',
  pitfalls: '<div class="pit"><b>误解:可用主机数是2ⁿ。</b>要减2:全0网络地址、全1广播地址不能分配。</div>',
  quiz: [
    { type: 'fill', q: '掩码/27时每子网可用主机数为____台。', answer: ['30'], source: '高频计算', explain: '主机位=5,2⁵−2=30。' }
  ],
  links: '<p>上一课:<a href="#/l/net/02-protocol">协议端口</a> · 下一课:<a href="#/l/net/04-security-crypto">加密与签名</a></p>'
});
