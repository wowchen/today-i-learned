NPD.registerLesson({
  id: 'app/01-dns',
  module: 'app',
  order: 1,
  title: 'DNS:域名解析',
  minutes: 4,
  keywords: ['DNS', '域名', '解析', '层次', '根服务器', '递归迭代'],
  concept: '<p><b><gd data-term="dns">DNS</gd></b> 把域名(www.example.com)解析成 IP,是互联网的"查号台"。</p>' +
    '<div class="ex">层次化、分布式数据库:根→顶级域(.com)→权威→主机,逐级委托。</div>',
  exam: '<p><b>频度:高。</b>常考解析过程、记录类型、层次结构、端口与协议。</p>',
  core: '<p><b>DNS 层次:</b>根域名服务器(13 组)→顶级域(TLD,如 .com/.cn/.org)→权威域名服务器→本地/主机。</p>' +
    '<p><b>解析流程(典型):</b></p>' +
    '<ol>' +
    '<li>主机向<b>本地 DNS(递归解析器)</b>查。</li>' +
    '<li>本地 DNS 依次问:根→顶级域→权威服务器(迭代查询)。</li>' +
    '<li>拿到 IP 后返回主机,并缓存。</li>' +
    '</ol>' +
    '<p><b>常见记录类型:</b>A(IPv4)、AAAA(IPv6)、CNAME(别名)、MX(邮件)、NS(域名服务器)、PTR(反向)、TXT。</p>' +
    '<p class="ex">DNS 默认 UDP 53(查询快);响应过大或区域传送用 TCP 53。递归在客户端↔本地解析器之间,迭代在本地解析器↔各级服务器之间。</p>',
  pitfalls: '<div class="pit"><b>易混:递归 vs 迭代。</b>主机到本地 DNS 通常递归("帮我去问到底");本地 DNS 到根/TLD/权威是迭代("我问一个,你告诉我下一个去哪问")。</div>' +
    '<div class="pit"><b>易错:DNS 既 UDP 又 TCP。</b>常规查询 UDP 53;响应超 512 字节或区域传送用 TCP 53——端口都是 53。</div>',
  quiz: [
    { type: 'choice', q: 'DNS 默认使用的传输协议与端口是?', options: ['TCP 53', 'UDP 53', 'UDP 80', 'TCP 443'], answer: 1, source: '基础', explain: 'DNS 常规查询用 UDP 53。' },
    { type: 'choice', q: 'DNS 中用于"域名→IPv6 地址"的记录是?', options: ['A', 'AAAA', 'CNAME', 'MX'], answer: 1, source: '基础', explain: 'AAAA 记录对应 IPv6。' },
    { type: 'choice', q: '本地 DNS 服务器向根/TLD 查询的方式通常是?', options: ['递归', '迭代', '广播', '多播'], answer: 1, source: '理解', explain: '本地解析器与各级服务器间为迭代。' }
  ],
  links: '<p>上一课:<a href="#/l/transport/04-port-socket">端口与套接字</a> · 下一课:<a href="#/l/app/02-dhcp">DHCP</a></p>'
});
