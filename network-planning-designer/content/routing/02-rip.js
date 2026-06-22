NPD.registerLesson({
  id: 'routing/02-rip',
  module: 'routing',
  order: 2,
  title: 'RIP:距离矢量路由协议',
  minutes: 4,
  keywords: ['RIP', '距离矢量', '跳数', '16跳', '收敛', '水平分割'],
  concept: '<p><b><gd data-term="rip">RIP</gd></b> 是基于<b>距离矢量</b>的内部网关协议,以<b>跳数</b>为度量,适合小型网络。</p>' +
    '<div class="ex">只数"过几站",不看路宽;16 跳即不可达,所以只适合小网。</div>',
  exam: '<p><b>频度:高。</b>常考度量、跳数上限、防环机制、与 OSPF 对比。</p>',
  core: '<p><b>RIP 要点:</b></p>' +
    '<ul>' +
    '<li><b>度量</b>:跳数,每经一跳 +1;最大 15 跳,16 跳视为不可达。</li>' +
    '<li><b>更新方式</b>:周期性(约 30 秒)把整张路由表发给邻居。</li>' +
    '<li><b>版本</b>:RIPv1(有类、不支持 VLSM)、RIPv2(无类、支持 VLSM/认证)、RIPng(IPv6)。</li>' +
    '</ul>' +
    '<p><b>防环机制:</b>水平分割、毒性逆转、触发更新、抑制计时器。</p>' +
    '<p class="ex">水平分割="从一个接口学到的路由不再从该接口发回",避免两邻居互相学到对方又转发回去形成环。</p>',
  pitfalls: '<div class="pit"><b>易错:16 跳不可达。</b>所以 RIP 最大有效路径 15 跳,超出无法承载——这是它只能用于小网的根本原因。</div>' +
    '<div class="pit"><b>易混:RIPv1 vs RIPv2。</b>RIPv1 有类、不支持 VLSM 与认证;RIPv2 无类、支持 VLSM、可带认证。</div>' +
    '<div class="pit"><b>考点:RIP 收敛慢。</b>周期整表更新 + 计时器,拓扑变化后收敛较 OSPF 慢。</div>',
  quiz: [
    { type: 'choice', q: 'RIP 的度量值是?', options: ['带宽', '跳数', '延迟', '成本'], answer: 1, source: '基础', explain: 'RIP 以跳数为度量。' },
    { type: 'fill', q: 'RIP 中被视为"不可达"的跳数是 ____ 跳。(数字)', answer: ['16'], source: '基础', explain: '16 跳即不可达,最大有效 15 跳。' },
    { type: 'choice', q: '下列哪个是 RIP 的防环机制?', options: ['最短路径优先', '水平分割', '链路状态泛洪', '区域划分'], answer: 1, source: '基础', explain: '水平分割防环。' }
  ],
  links: '<p>上一课:<a href="#/l/routing/01-static">静态路由</a> · 下一课:<a href="#/l/routing/03-ospf">OSPF</a></p>'
});
