NPD.registerLesson({
  id: 'transport/04-port-socket',
  module: 'transport',
  order: 4,
  title: '端口、套接字与连接',
  minutes: 4,
  keywords: ['端口', '套接字', '知名端口', '注册端口', '动态端口', '四元组'],
  concept: '<p>IP 定位主机,<b><gd data-term="port">端口</gd></b>定位主机上的进程。<b>套接字(Socket)</b>= IP + 端口,是端到端通信的端点。</p>' +
    '<div class="ex">一条 TCP 连接由"四元组"唯一标识:源IP、源端口、目的IP、目的端口。</div>',
  exam: '<p><b>频度:高。</b>常考端口分类、知名端口与协议对应、套接字概念。</p>',
  core: '<p><b>端口分类(16 位,0–65535):</b></p>' +
    '<ul>' +
    '<li><b>知名端口(0–1023)</b>:固定分配给服务。</li>' +
    '<li><b>注册端口(1024–49151)</b>:登记给特定应用。</li>' +
    '<li><b>动态/临时端口(49152–65535)</b>:客户端临时用。</li>' +
    '</ul>' +
    '<p><b>常见知名端口:</b></p>' +
    '<table><tr><th>端口</th><th>协议</th></tr>' +
    '<tr><td>20/21</td><td>FTP(数据/控制)</td></tr>' +
    '<tr><td>22</td><td>SSH</td></tr>' +
    '<tr><td>23</td><td>Telnet</td></tr>' +
    '<tr><td>25</td><td>SMTP</td></tr>' +
    '<tr><td>53</td><td>DNS</td></tr>' +
    '<tr><td>67/68</td><td>DHCP(服务器/客户端)</td></tr>' +
    '<tr><td>80</td><td>HTTP</td></tr>' +
    '<tr><td>110</td><td>POP3</td></tr>' +
    '<tr><td>161/162</td><td>SNMP(查询/告警)</td></tr>' +
    '<tr><td>443</td><td>HTTPS</td></tr></table>' +
    '<p class="ex">具体端口分配以 IANA 官方为准;上述为常见值,记忆时可按"控制口"分组。</p>',
  pitfalls: '<div class="pit"><b>易混:FTP 两个端口。</b>21 是控制连接,20 是数据连接(主动模式);被动模式数据端口动态。</div>' +
    '<div class="pit"><b>易错:DNS 端口 53。</b>既用 UDP(常规查询)也用 TCP(大响应/区域传送),但端口都是 53。</div>' +
    '<div class="pit"><b>易混:套接字 vs 四元组。</b>套接字是单端点(IP:端口);TCP 连接是两端点的组合(四元组)。</div>',
  quiz: [
    { type: 'choice', q: 'HTTPS 使用的知名端口是?', options: ['80', '443', '8080', '22'], answer: 1, source: '基础', explain: 'HTTPS 默认 443。' },
    { type: 'fill', q: 'DNS 使用的端口是 ____。(数字)', answer: ['53'], source: '基础', explain: 'DNS 端口 53(UDP/TCP)。' },
    { type: 'choice', q: '一条 TCP 连接由什么唯一标识?', options: ['源IP+源端口', '目的IP+目的端口', '四元组(源/目的IP与端口)', '端口号'], answer: 2, source: '理解', explain: '四元组唯一标识一条连接。' }
  ],
  links: '<p>上一课:<a href="#/l/transport/03-flow-congestion">流量与拥塞控制</a> · 进入应用层:<a href="#/l/app/01-dns">DNS</a></p>'
});
