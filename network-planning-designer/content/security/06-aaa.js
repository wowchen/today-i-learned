NPD.registerLesson({
  id: 'security/06-aaa',
  module: 'security',
  order: 6,
  title: 'AAA、访问控制与网络隔离',
  minutes: 4,
  keywords: ['AAA', 'RADIUS', 'TACACS+', '访问控制', '网络隔离', '802.1X'],
  concept: '<p><b><gd data-term="aaa">AAA</gd></b>(认证、授权、计费)统一身份与访问管理;配合访问控制与网络隔离做纵深防御。</p>' +
    '<div class="ex">"你是谁、能干啥、用了多少"三连管——AAA 是网络访问的"门禁+考勤"。</div>',
  exam: '<p><b>频度:中。</b>常考 AAA 三要素、RADIUS/TACACS+ 对比、802.1X。</p>',
  core: '<p><b>AAA 三要素:</b></p>' +
    '<ul>' +
    '<li><b>认证(Authentication)</b>:验明"你是谁"(用户名密码/证书)。</li>' +
    '<li><b>授权(Authorization)</b>:决定"能干啥"(可访问哪些资源)。</li>' +
    '<li><b>计费(Accounting)</b>:记录"用了多少"(时长/流量,审计计费)。</li>' +
    '</ul>' +
    '<p><b>常见协议:</b></p>' +
    '<ul>' +
    '<li><b>RADIUS</b>:UDP、认证+授权合并、计费分离;广泛用于网络接入。</li>' +
    '<li><b>TACACS+</b>:TCP、认证/授权/计费分离、更细粒度,思科体系常用。</li>' +
    '</ul>' +
    '<p><b>802.1X:</b>基于端口的接入认证,接入交换机端口对接入终端认证(常用 EAP),未认证不让上网。</p>' +
    '<p><b>网络隔离:</b>物理隔离(内外网物理断开)、逻辑隔离(VLAN/防火墙/网闸)。涉密网络常用物理隔离。</p>' +
    '<p class="ex">涉密内网与互联网应"物理隔离";一般企业可用防火墙+VLAN 逻辑隔离。</p>',
  pitfalls: '<div class="pit"><b>易混:RADIUS vs TACACS+。</b>RADIUS 认证授权合并、UDP;TACACS+ 三者分离、TCP、更细——选细粒度用 TACACS+。</div>' +
    '<div class="pit"><b>易错:802.1X 是"基于端口的认证"。</b>不是 WiFi 专属,有线端口也用;未认证设备端口不通。</div>',
  quiz: [
    { type: 'choice', q: 'AAA 的三要素是?', options: ['认证/授权/计费', '加密/签名/校验', '路由/交换/转发', '发现/提供/确认'], answer: 0, source: '基础', explain: '认证、授权、计费。' },
    { type: 'choice', q: '认证/授权/计费分离、更细粒度的是?', options: ['RADIUS', 'TACACS+', 'DHCP', 'SNMP'], answer: 1, source: '基础', explain: 'TACACS+ 三者分离、更细。' },
    { type: 'choice', q: '涉密内网与互联网通常应?', options: ['逻辑隔离即可', '物理隔离', '共用一台交换机', '仅用密码'], answer: 1, source: '场景', explain: '涉密网与互联网物理隔离。' }
  ],
  links: '<p>上一课:<a href="#/l/security/05-ids-ips">IDS/IPS</a> · 进入无线:<a href="#/l/wireless/01-wlan">WLAN</a></p>'
});
