NPD.registerLesson({
  id: 'net/05-nat',
  module: 'net',
  order: 5,
  title: 'NAT:网络地址转换',
  minutes: 4,
  keywords: ['NAT', '地址转换', 'SNAT', 'DNAT', '端口转换', '私网', '公网'],
  concept: '<p><b><gd data-term="nat">NAT</gd></b> 在内/外网边界把私网地址转换成公网地址,缓解 IPv4 不足并隐藏内网结构。</p>' +
    '<div class="ex">典型场景:家庭/企业内网用私网地址,经 NAT 用少量公网地址上网。</div>',
  exam: '<p><b>频度:中高。</b>常考 NAT 类型、PAT(端口转换)、优缺点。</p>',
  core: '<p><b>NAT 主要形式:</b></p>' +
    '<ul>' +
    '<li><b>静态 NAT</b>:一对一固定映射(内网某机 ↔ 某公网地址),用于对外发布服务。</li>' +
    '<li><b>动态 NAT</b>:从公网地址池动态分配,用完即还。</li>' +
    '<li><b>PAT(端口地址转换/NAPT)</b>:多内网机共享<b>一个公网 IP</b>,靠不同端口区分——最常见。</li>' +
    '</ul>' +
    '<p><b>优点:</b>缓解地址枯竭、隐藏内网、灵活部署。</p>' +
    '<p><b>缺点:</b>破坏端到端、增加延迟、影响部分协议(需 ALG 辅助)、审计与端到端安全受影响。</p>' +
    '<p class="ex">PAT 是"一个总机号代全公司打出去"——多对一靠端口区分,家用路由器就是这么上网的。</p>',
  pitfalls: '<div class="pit"><b>易混:NAT vs PAT。</b>PAT 是 NAT 的子集,靠端口多路复用一个公网 IP;严格 NAT 是地址映射,PAT 是"地址+端口"映射。</div>' +
    '<div class="pit"><b>考点:NAT 破坏端到端。</b>某些端到端应用(IPSec、某些 P2P)受影响,需 NAT 穿越(ALG)。</div>',
  quiz: [
    { type: 'choice', q: '多台内网主机共享一个公网 IP 上网,采用的 NAT 方式是?', options: ['静态 NAT', '动态 NAT', 'PAT(端口转换)', '双向 NAT'], answer: 2, source: '基础', explain: 'PAT/NAPT 多对一,靠端口区分。' },
    { type: 'choice', q: 'NAT 的主要缺点是?', options: ['增加地址消耗', '破坏端到端', '暴露内网结构', '无法上网'], answer: 1, source: '理解', explain: 'NAT 破坏端到端通信特性。' },
    { type: 'choice', q: '静态 NAT 的典型用途是?', options: ['多机共享上网', '内网服务器对外发布', '加速转发', '加密传输'], answer: 1, source: '场景', explain: '固定映射用于对外发布服务。' }
  ],
  links: '<p>上一课:<a href="#/l/net/04-arp-icmp">ARP 与 ICMP</a> · 下一课:<a href="#/l/net/06-fragment-forward">分片与转发</a></p>'
});
