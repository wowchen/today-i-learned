NPD.registerLesson({
  id: 'case/04-security',
  module: 'case',
  order: 4,
  title: '案例:网络安全方案设计',
  minutes: 5,
  keywords: ['网络安全', '案例', '防火墙', 'DMZ', 'VPN', '隔离', '方案设计'],
  concept: '<p>给场景要求<b>设计安全方案</b>:边界防护、DMZ 部署、远程接入、内外隔离——综合考安全模块。</p>' +
    '<div class="ex">思路:边界设防火墙、对外服务进 DMZ、移动用 VPN、内部 VLAN 隔离+AAA。</div>',
  exam: '<p><b>频度:高。</b>常考整体安全架构、DMZ、VPN、AAA 综合应用。</p>',
  core: '<p><b>典型企业网安全方案要点:</b></p>' +
    '<ul>' +
    '<li><b>边界防护</b>:互联网出口设防火墙(状态检测/NGFW),默认拒绝、最小开放必要端口。</li>' +
    '<li><b>DMZ</b>:对外服务(Web/邮件/DNS)放 DMZ,与内网间设策略;被攻破不直通内网。</li>' +
    '<li><b>远程接入</b>:移动办公用 SSL VPN(零部署、灵活);分支站点用 IPSec 隧道。</li>' +
    '<li><b>内部隔离</b>:VLAN 划分业务/管理网;关键系统加 IPS;接入用 802.1X 认证。</li>' +
    '<li><b>身份与审计</b>:AAA 统一认证授权计费;日志审计留存。</li>' +
    '<li><b>纵深防御</b>:多层防护(边界+主机+数据),不依赖单一设备。</li>' +
    '</ul>' +
    '<p><b>答题结构:</b>按"边界/DMZ/接入/内网/管理"分点,每点给措施 + 依据。</p>' +
    '<p class="ex">涉密内网与互联网<b>物理隔离</b>;一般企业用防火墙+VLAN<b>逻辑隔离</b>——按场景区分作答。</p>',
  pitfalls: '<div class="pit"><b>易错:DMZ 与内网无隔离。</b>DMZ 被攻破应不能直通内网——DMZ↔内网间必须设防火墙策略。</div>' +
    '<div class="pit"><b>易混:VPN 选择。</b>移动/远程接入选 SSL VPN(灵活);固定站点间选 IPSec——别一刀切。</div>' +
    '<div class="pit"><b>易漏:纵深防御。</b>只靠边界防火墙不够,主机防护、数据加密、审计要配合。</div>',
  quiz: [
    { type: 'choice', q: '对外 Web 服务器应部署在?', options: ['内网核心区', 'DMZ', '员工办公网', '管理网'], answer: 1, source: '基础', explain: '对外服务放 DMZ。' },
    { type: 'choice', q: '移动办公远程接入内网宜采用?', options: ['IPSec 站点间', 'SSL VPN', '集线器', 'NAT'], answer: 1, source: '场景', explain: 'SSL VPN 适合移动接入。' },
    { type: 'choice', q: '安全设计应遵循的原则是?', options: ['单点防护', '纵深防御、多层', '全部开放', '仅靠密码'], answer: 1, source: '理解', explain: '纵深防御不依赖单一设备。' }
  ],
  links: '<p>上一课:<a href="#/l/case/03-routing-switch">路由交换案例</a> · 下一课:<a href="#/l/case/05-planning">网络规划案例</a> · 安全模块:<a href="#/l/security/03-firewall">防火墙与 DMZ</a></p>'
});
