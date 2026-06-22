NPD.registerLesson({
  id: 'app/05-other',
  module: 'app',
  order: 5,
  title: 'FTP / SNMP / Telnet 等',
  minutes: 4,
  keywords: ['FTP', 'SNMP', 'Telnet', 'TFTP', '应用层', '端口'],
  concept: '<p>除 Web/邮件/DNS 外,还有文件传输(FTP/TFTP)、远程登录(Telnet/SSH)、网管(SNMP)等常用应用层协议。</p>' +
    '<div class="ex">FTP 用两条连接(控制+数据),Telnet 明文不安全已被 SSH 取代,SNMP 是网管的"巡更协议"。</div>',
  exam: '<p><b>频度:中。</b>常考 FTP 双连接、Telnet 不安全、SNMP 端口。</p>',
  core: '<p><b>常见应用层协议:</b></p>' +
    '<table><tr><th>协议</th><th>端口</th><th>特点</th></tr>' +
    '<tr><td><gd data-term="ftp">FTP</gd></td><td>20(数据)/21(控制)</td><td>双 TCP 连接;主动/被动模式</td></tr>' +
    '<tr><td>TFTP</td><td>UDP 69</td><td>简单轻量,无认证,常用于启动加载</td></tr>' +
    '<tr><td>Telnet</td><td>TCP 23</td><td>远程登录,明文传输,不安全</td></tr>' +
    '<tr><td>SSH</td><td>TCP 22</td><td>加密远程登录,替代 Telnet</td></tr>' +
    '<tr><td><gd data-term="snmp">SNMP</gd></td><td>UDP 161(查询)/162(告警)</td><td>网络管理:轮询+告警</td></tr></table>' +
    '<p><b>FTP 双连接:</b>控制连接(21)传命令贯穿全程;数据连接(20)传数据,用完即拆。主动模式服务器连客户端,被动模式客户端连服务器。</p>' +
    '<p class="ex">SNMP 是网络管理的核心协议;后续运维模块会深入(见 <a href="#/l/ops/01-snmp">SNMP 详解</a>)。</p>',
  pitfalls: '<div class="pit"><b>易错:FTP 两个端口、两条连接。</b>21 控制、20 数据;TFTP 只有 UDP 69、无连接控制——别混。</div>' +
    '<div class="pit"><b>考点:Telnet 不安全。</b>明文传口令,应被 SSH 取代;这是安全题常考点。</div>' +
    '<div class="pit"><b>易混:SNMP 161 vs 162。</b>161 是管理站轮询设备(查询);162 是设备主动上报告警(Trap)。</div>',
  quiz: [
    { type: 'choice', q: 'FTP 的控制连接与数据连接端口分别是?', options: ['21 与 20', '20 与 21', '都是 21', '都是 20'], answer: 0, source: '基础', explain: '控制 21、数据 20。' },
    { type: 'choice', q: '下列协议传输"明文不安全"、应被 SSH 取代的是?', options: ['FTP', 'Telnet', 'TFTP', 'DNS'], answer: 1, source: '基础', explain: 'Telnet 明文,应换 SSH。' },
    { type: 'choice', q: 'SNMP 接收设备告警(Trap)的端口是?', options: ['161', '162', '53', '80'], answer: 1, source: '基础', explain: 'Trap 上报用 UDP 162。' }
  ],
  links: '<p>上一课:<a href="#/l/app/04-email">邮件协议</a> · 进入局域网:<a href="#/l/lan/01-ethernet">以太网</a> · 网管深入:<a href="#/l/ops/01-snmp">SNMP 详解</a></p>'
});
