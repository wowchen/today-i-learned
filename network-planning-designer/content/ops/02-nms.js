NPD.registerLesson({
  id: 'ops/02-nms',
  module: 'ops',
  order: 2,
  title: '网管系统与功能域',
  minutes: 3,
  keywords: ['网管系统', 'FCAPS', '配置管理', '性能管理', '故障管理', '安全管理', '计费'],
  concept: '<p><b>网管系统</b>基于 SNMP 等协议集中管理网络,经典按 <b>FCAPS</b> 五大功能域组织。</p>' +
    '<div class="ex">"配置、性能、故障、安全、计费"——网管管的就是这五件事。</div>',
  exam: '<p><b>频度:中。</b>常考 FCAPS 五域、各域职责。</p>',
  core: '<p><b>FCAPS 五大功能域:</b></p>' +
    '<table><tr><th>域</th><th>职责</th></tr>' +
    '<tr><td>配置管理(F)</td><td>设备配置、拓扑发现、版本/资产</td></tr>' +
    '<tr><td>性能管理(P)</td><td>带宽/吞吐/时延监控与分析</td></tr>' +
    '<tr><td>故障管理(F)</td><td>告警发现、定位、恢复</td></tr>' +
    '<tr><td>安全管理(S)</td><td>访问控制、审计、安全策略</td></tr>' +
    '<tr><td>计费管理(A)</td><td>使用量统计与计费(运营商为主)</td></tr></table>' +
    '<p><b>拓扑自动发现:</b>网管通过 SNMP 轮询、ARP 表、路由表等自动绘制网络拓扑。</p>' +
    '<p class="ex">企业网计费管理常弱化,重在配置/性能/故障/安全四域;运营商才重计费。</p>',
  pitfalls: '<div class="pit"><b>易混:故障 vs 性能管理。</b>性能管"指标趋势"(是否达标);故障管"告警事件"(坏了怎么修)。</div>' +
    '<div class="pit"><b>易漏:配置管理是基础。</b>没有准确的设备/拓扑配置,其他四域都难做好——配置先行。</div>',
  quiz: [
    { type: 'choice', q: 'FCAPS 中负责"告警发现、定位、恢复"的是?', options: ['配置管理', '故障管理', '计费管理', '安全管理'], answer: 1, source: '基础', explain: '故障管理管告警与恢复。' },
    { type: 'choice', q: '网管系统自动绘制拓扑依赖?', options: ['DNS', 'SNMP 轮询/ARP/路由表', 'DHCP', 'HTTP'], answer: 1, source: '基础', explain: '拓扑发现靠 SNMP 等。' },
    { type: 'choice', q: 'FCAPS 五大功能域不含?', options: ['配置', '性能', '故障', '设计'], answer: 3, source: '理解', explain: '设计不在 FCAPS 五域内。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/01-snmp">SNMP</a> · 下一课:<a href="#/l/ops/03-performance">性能监控</a></p>'
});
