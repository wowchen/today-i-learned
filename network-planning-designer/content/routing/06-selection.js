NPD.registerLesson({
  id: 'routing/06-selection',
  module: 'routing',
  order: 6,
  title: '路由选路与收敛对比',
  minutes: 4,
  keywords: ['路由选路', '收敛', '管理距离', '最长前缀匹配', '协议对比'],
  concept: '<p>当多个路由来源都声称"能到某目的",路由器靠<b>选路规则</b>决定用哪个;拓扑变化后还要尽快<b>收敛</b>。</p>' +
    '<div class="ex">三道筛子:先最长前缀匹配 → 再管理距离(谁更可信)→ 再度量值(谁更优)。</div>',
  exam: '<p><b>频度:高。</b>常考选路顺序、管理距离、各协议收敛快慢对比。</p>',
  core: '<p><b>路由选路三步:</b></p>' +
    '<ol>' +
    '<li><b>最长前缀匹配</b>:选掩码最长(最具体)的路由。</li>' +
    '<li><b>管理距离(AD)</b>:同前缀多来源时,按 AD 选最可信(直连 < 静态 < OSPF < RIP 等,具体值以厂商/教材为准)。</li>' +
    '<li><b>度量值(Metric)</b>:同协议多路径时,按度量选最优(跳数/cost/带宽…)。</li>' +
    '</ol>' +
    '<p><b>各协议收敛快慢:</b>链路状态(OSPF/IS-IS)快;距离矢量(RIP)慢。</p>' +
    '<table><tr><th>协议</th><th>类型</th><th>度量</th><th>收敛</th></tr>' +
    '<tr><td>RIP</td><td>距离矢量</td><td>跳数</td><td>慢</td></tr>' +
    '<tr><td>OSPF</td><td>链路状态</td><td>cost</td><td>快</td></tr>' +
    '<tr><td>IS-IS</td><td>链路状态</td><td>cost</td><td>快</td></tr>' +
    '<tr><td>BGP</td><td>路径矢量</td><td>AS路径/策略</td><td>较慢(策略复杂)</td></tr></table>' +
    '<p class="ex">具体管理距离数值各厂商/教材略有差异,以官方与现行标准为准;重点是<b>相对优先级</b>。</p>',
  pitfalls: '<div class="pit"><b>易错:先最长前缀,再管理距离。</b>不是"先看 AD"——再可信的路由,若前缀更短(更不具体)也不会优先。</div>' +
    '<div class="pit"><b>易混:管理距离 vs 度量值。</b>AD 比"谁更可信"(跨协议);度量比"谁更优"(同协议内)。</div>',
  quiz: [
    { type: 'choice', q: '路由选路首先依据?', options: ['管理距离', '最长前缀匹配', '度量值', '协议优先级'], answer: 1, source: '基础', explain: '先最长前缀匹配选最具体路由。' },
    { type: 'choice', q: '同协议内多条路径择优依据?', options: ['管理距离', '度量值', '前缀长度', '跳数总是'], answer: 1, source: '理解', explain: '同协议用度量值比较。' },
    { type: 'choice', q: '下列协议收敛最快的是?', options: ['RIP', 'OSPF', '静态', 'BGP'], answer: 1, source: '理解', explain: 'OSPF 链路状态,收敛快。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/05-isis">IS-IS</a> · 进入传输层:<a href="#/l/transport/01-tcp-udp">TCP/UDP</a> · 案例分析:<a href="#/l/case/03-routing-switch">路由交换案例</a></p>'
});
