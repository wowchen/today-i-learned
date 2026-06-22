NPD.registerLesson({
  id: 'net/01-ipv4',
  module: 'net',
  order: 1,
  title: 'IPv4 地址:结构与分类',
  minutes: 5,
  key: true,
  keywords: ['IPv4', 'IP地址', 'A/B/C类', '网络号', '主机号', '特殊地址', '私有地址'],
  concept: '<p><b><gd data-term="ipv4">IPv4</gd></b> 地址 32 位,点分十进制(如 192.168.1.1),分<b>网络号</b>+<b>主机号</b>两部分。</p>' +
    '<div class="ex">传统分 A/B/C/D/E 五类;CIDR 出现后不再死守分类,但分类仍是基础。</div>',
  exam: '<p><b>频度:高。</b>必考地址分类、私有地址范围、特殊地址(网络/广播/环回)。</p>',
  core: '<p><b>IPv4 分类(按首字节):</b></p>' +
    '<table><tr><th>类</th><th>首字节范围</th><th>网络位</th><th>默认掩码</th><th>规模</th></tr>' +
    '<tr><td>A</td><td>1–126</td><td>8</td><td>/8 (255.0.0.0)</td><td>大型</td></tr>' +
    '<tr><td>B</td><td>128–191</td><td>16</td><td>/16 (255.255.0.0)</td><td>中型</td></tr>' +
    '<tr><td>C</td><td>192–223</td><td>24</td><td>/24 (255.255.255.0)</td><td>小型</td></tr>' +
    '<tr><td>D</td><td>224–239</td><td>—</td><td>组播</td><td>—</td></tr>' +
    '<tr><td>E</td><td>240–255</td><td>—</td><td>保留</td><td>—</td></tr></table>' +
    '<p><b>私有地址(RFC 1918):</b>10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。</p>' +
    '<p><b>特殊地址:</b>网络号(主机位全0)、广播地址(主机位全1)、环回 127.0.0.0/8、0.0.0.0、255.255.255.255。</p>' +
    '<p class="ex">A 类首字节 1–126(127 留给环回);126 是界限,别漏。</p>',
  pitfalls: '<div class="pit"><b>易错:127 不是 A 类。</b>127.0.0.0/8 是环回保留,实际可用 A 类到 126。</div>' +
    '<div class="pit"><b>易错:网络号 vs 广播地址。</b>主机位全 0 = 网络号(代表"本网"),全 1 = 广播地址(发给本网所有主机),二者都不可分配给主机。</div>',
  quiz: [
    { type: 'choice', q: '172.16.10.5 属于哪类地址?', options: ['A 类', 'B 类', 'C 类', 'D 类'], answer: 1, source: '基础', explain: '首字节 172 在 128–191,属 B 类。' },
    { type: 'choice', q: '下列哪个是私有地址?', options: ['8.8.8.8', '172.16.5.1', '202.96.128.86', '223.5.5.5'], answer: 1, source: '基础', explain: '172.16.0.0/12 是私有地址段。' },
    { type: 'choice', q: '192.168.1.0/24 的广播地址是?', options: ['192.168.1.0', '192.168.1.1', '192.168.1.255', '192.168.0.255'], answer: 2, source: '计算', explain: '主机位全 1 = 192.168.1.255。' }
  ],
  links: '<p>上一课:<a href="#/l/link/05-ppp">PPP/HDLC</a> · 下一课:<a href="#/l/net/02-subnet">子网划分</a> · <a href="#/calc">子网计算器</a></p>'
});
