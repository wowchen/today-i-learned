NPD.registerLesson({
  id: 'security/03-firewall',
  module: 'security',
  order: 3,
  title: '防火墙与 DMZ',
  minutes: 4,
  keywords: ['防火墙', '包过滤', '状态检测', '应用层', 'NGFW', 'DMZ', 'ACL'],
  concept: '<p><b><gd data-term="firewall">防火墙</gd></b>在内外网边界按安全策略过滤流量;<b><gd data-term="dmz">DMZ</gd></b>是放对外服务的隔离缓冲区。</p>' +
    '<div class="ex">防火墙是"门岗+安检";DMZ 是"前厅",对外开放但不让进办公区。</div>',
  exam: '<p><b>频度:高。</b>常考防火墙类型与原理、DMZ 作用、ACL。</p>',
  core: '<p><b>防火墙类型(按检测深度):</b></p>' +
    '<table><tr><th>类型</th><th>原理</th><th>特点</th></tr>' +
    '<tr><td>包过滤</td><td>看 IP/端口/协议按 ACL 放行</td><td>快、粗、不看状态</td></tr>' +
    '<tr><td>状态检测</td><td>跟踪会话状态</td><td>放行已建连回包,较安全</td></tr>' +
    '<tr><td>应用层/代理</td><td>深入应用层检查</td><td>最细、可识内容,开销大</td></tr>' +
    '<tr><td>NGFW</td><td>集成 IPS/应用识别等</td><td>一体化,主流</td></tr></table>' +
    '<p><b>DMZ 部署:</b>对外服务(Web/邮件/DNS)放 DMZ,内网与 DMZ 间、DMZ 与外网间都设防火墙策略。即使 DMZ 被攻破,内网仍受保护。</p>' +
    '<p><b>ACL(访问控制列表):</b>包过滤的核心,按"源/目 IP、端口、协议、动作(允许/拒绝)"匹配。</p>' +
    '<p class="ex">防火墙默认"最小开放":只放行必要端口,其余拒绝——白名单思路。</p>',
  pitfalls: '<div class="pit"><b>易混:包过滤 vs 状态检测。</b>包过滤无状态、逐包看 ACL;状态检测记会话,只放已建连回包。</div>' +
    '<div class="pit"><b>易错:DMZ 不是"无防护区"。</b>DMZ 仍有防火墙,只是策略比内网宽松;被攻破也不应直通内网。</div>',
  quiz: [
    { type: 'choice', q: '能跟踪连接状态的防火墙是?', options: ['包过滤', '状态检测', '中继器', '集线器'], answer: 1, source: '基础', explain: '状态检测防火墙跟踪会话。' },
    { type: 'choice', q: 'DMZ 中通常放置?', options: ['内部财务系统', '对外 Web/邮件服务', '员工电脑', '核心数据库'], answer: 1, source: '基础', explain: '对外服务放 DMZ。' },
    { type: 'choice', q: '防火墙的安全策略原则通常是?', options: ['默认全部允许', '最小开放、白名单', '只看源 IP', '不设 ACL'], answer: 1, source: '理解', explain: '默认拒绝、只放必要端口。' }
  ],
  links: '<p>上一课:<a href="#/l/security/02-pki">PKI 与签名</a> · 下一课:<a href="#/l/security/04-vpn">VPN/IPSec/SSL</a></p>'
});
