NPD.registerLesson({
  id: 'ops/01-snmp',
  module: 'ops',
  order: 1,
  title: 'SNMP:简单网络管理协议',
  minutes: 4,
  keywords: ['SNMP', '网管', 'MIB', '轮询', 'Trap', '代理', '管理站'],
  concept: '<p><b><gd data-term="snmp">SNMP</gd></b>是网络管理的核心协议:管理站经 UDP 161 轮询设备,UDP 162 收告警。</p>' +
    '<div class="ex">网管的"巡更打卡+警铃"——平时轮询问状态,出事设备主动报。</div>',
  exam: '<p><b>频度:高。</b>常考 SNMP 架构、端口、轮询 vs Trap、MIB。</p>',
  core: '<p><b>SNMP 架构三要素:</b></p>' +
    '<ul>' +
    '<li><b>管理站(NMS)</b>:发起查询、接收告警、呈现网管界面。</li>' +
    '<li><b>代理(Agent)</b>:被管设备上运行的进程,响应查询、主动上报。</li>' +
    '<li><b>MIB(管理信息库)</b>:被管对象的层次化数据库,定义可管变量。</li>' +
    '</ul>' +
    '<p><b>两种工作方式:</b></p>' +
    '<ul>' +
    '<li><b>轮询(Polling)</b>:管理站主动查设备状态,UDP 161。</li>' +
    '<li><b>陷阱(Trap)</b>:设备异常时主动上报,UDP 162,无需等待轮询。</li>' +
    '</ul>' +
    '<p><b>版本:</b>SNMPv1/v2c(简单、社区字串认证、弱)、SNMPv3(认证加密、安全)。</p>' +
    '<p class="ex">161 管理站查询、162 设备告警——别记反;安全场景用 v3。</p>',
  pitfalls: '<div class="pit"><b>易混:161 vs 162。</b>161 是管理站→设备的查询;162 是设备→管理站的 Trap 告警。</div>' +
    '<div class="pit"><b>易错:v1/v2c 不安全。</b>用明文社区字串,应升级 v3(认证+加密)。</div>' +
    '<div class="pit"><b>易混:轮询 vs Trap。</b>轮询是"管理站主动问"(周期性);Trap 是"设备主动报"(事件驱动,实时)。</div>',
  quiz: [
    { type: 'choice', q: 'SNMP 管理站轮询设备使用的端口是?', options: ['161', '162', '53', '80'], answer: 0, source: '基础', explain: '查询用 UDP 161。' },
    { type: 'choice', q: 'SNMP 设备主动上报告警使用?', options: ['轮询', 'Trap(UDP 162)', '广播', 'TCP'], answer: 1, source: '基础', explain: 'Trap 用 UDP 162 主动上报。' },
    { type: 'choice', q: '下列 SNMP 版本提供认证与加密的是?', options: ['v1', 'v2c', 'v3', '均不提供'], answer: 2, source: '基础', explain: 'SNMPv3 提供认证加密。' }
  ],
  links: '<p>上一课:<a href="#/l/planning/06-room">机房工程</a> · 下一课:<a href="#/l/ops/02-nms">网管系统</a></p>'
});
