NPD.registerLesson({
  id: 'device/04-gateway-firewall',
  module: 'device',
  order: 4,
  title: '网关与防火墙',
  minutes: 4,
  keywords: ['网关', '防火墙', '包过滤', '状态检测', '应用层', 'DMZ', '安全'],
  concept: '<p><b><gd data-term="gateway">网关</gd></b>连接不同协议体系并做翻译;<b><gd data-term="firewall">防火墙</gd></b>在内外网边界按策略过滤流量。</p>' +
    '<div class="ex">网关是"懂两种话的翻译官";防火墙是"门岗+安检",按名单放行。</div>',
  exam: '<p><b>频度:中高。</b>常考网关概念、防火墙类型、DMZ。</p>',
  core: '<p><b>网关:</b>连接不同体系(协议/地址)网络的节点,可工作在多层,兼协议转换。日常"默认网关"指主机出网的下一跳路由器地址。</p>' +
    '<p><b>防火墙类型(按检测深度):</b></p>' +
    '<ul>' +
    '<li><b>包过滤</b>:看 IP/端口/协议,按 ACL 放行。快但粗(不看状态)。</li>' +
    '<li><b>状态检测</b>:跟踪连接状态,允许"已建立连接的回包",更安全。</li>' +
    '<li><b>应用层/代理</b>:深入应用层检查(可识别应用内容),最细但性能开销大。</li>' +
    '<li><b>下一代防火墙(NGFW)</b>:集成入侵防护、应用识别、IPS 等于一体。</li>' +
    '</ul>' +
    '<p><b>DMZ(非军事区):</b>介于内外网间的隔离区,放对外服务(Web/邮件),限制被攻破后的暴露面。</p>' +
    '<p class="ex">"默认网关"是主机跨网段的出口;此处的"网关"与协议翻译网关概念略有侧重,语境区分。</p>',
  pitfalls: '<div class="pit"><b>易混:网关的两种含义。</b>一是协议转换设备(网际网关);二是主机配置的"默认网关"(出网下一跳 IP)——日常多指后者。</div>' +
    '<div class="pit"><b>易混:包过滤 vs 状态检测。</b>包过滤逐包看 ACL 不记状态;状态检测跟踪会话,只放行已建连的回包——更安全。</div>',
  quiz: [
    { type: 'choice', q: '能跟踪连接状态、放行已建连回包的防火墙是?', options: ['包过滤', '状态检测', '中继器', '集线器'], answer: 1, source: '基础', explain: '状态检测防火墙跟踪会话。' },
    { type: 'choice', q: 'DMZ 的作用是?', options: ['加速内网访问', '放对外服务、限制被攻破暴露面', '加密传输', '分配 IP'], answer: 1, source: '理解', explain: 'DMZ 隔离对外服务,缩小暴露面。' },
    { type: 'choice', q: '主机配置的"默认网关"通常指?', options: ['DNS 服务器', '出网的下一跳地址', 'DHCP 服务器', '广播地址'], answer: 1, source: '基础', explain: '默认网关是主机跨网段出口。' }
  ],
  links: '<p>上一课:<a href="#/l/device/03-router">路由器</a> · 进入网络安全:<a href="#/l/security/01-crypto">加密基础</a> · 防火墙深入:<a href="#/l/security/03-firewall">防火墙与 DMZ</a></p>'
});
