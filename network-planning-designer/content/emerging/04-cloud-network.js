NPD.registerLesson({
  id: 'emerging/04-cloud-network',
  module: 'emerging',
  order: 4,
  title: '云计算网络与 Overlay',
  minutes: 4,
  keywords: ['云计算', 'Overlay', 'VXLAN', '大二层', '虚拟化', '租户隔离', 'IPv6过渡'],
  concept: '<p>云计算让虚拟机/容器跨服务器漂移,网络需"大二层"与多租户隔离,催生 Overlay(如 <gd data-term="vxlan">VXLAN</gd>)。</p>' +
    '<div class="ex">在三层网络上"搭一条虚拟二层桥",虚拟机随便搬、租户互隔离。</div>',
  exam: '<p><b>频度:中。</b>常考 Overlay/Underlay、VXLAN、大二层、IPv6 过渡。</p>',
  core: '<p><b>Overlay vs Underlay:</b></p>' +
    '<ul>' +
    '<li><b>Underlay</b>:底层物理网络(IP 互联)。</li>' +
    '<li><b>Overlay</b>:在 Underlay 上用隧道建虚拟网络(逻辑拓扑独立于物理)。</li>' +
    '</ul>' +
    '<p><b>VXLAN:</b></p>' +
    '<ul>' +
    '<li>用 UDP 封装,构建<b>大二层 Overlay</b>。</li>' +
    '<li>24 位 VNI,支持 1600 万租户/网段(突破 VLAN 4096 上限)。</li>' +
    '<li>使虚拟机可跨三层物理网迁移,不改变 IP。</li>' +
    '</ul>' +
    '<p><b>IPv6 过渡(常考):</b></p>' +
    '<ul>' +
    '<li><b>双栈</b>:设备同时跑 v4/v6。</li>' +
    '<li><b>隧道</b>:6to4、ISATAP(把 v6 包封装进 v4 传)。</li>' +
    '<li><b>翻译</b>:NAT64/DNS64(v6↔v4 转换)。</li>' +
    '</ul>' +
    '<p class="ex">云数据中心普遍用 Overlay 大二层:VXLAN/GENEVE 让虚拟机跨机架漂移、租户隔离。</p>',
  pitfalls: '<div class="pit"><b>易混:Overlay vs Underlay。</b>Underlay 物理网;Overlay 在其上用隧道建的虚拟网——两层概念。</div>' +
    '<div class="pit"><b>易错:VXLAN 突破的是 VLAN 数量上限。</b>24 位 VNI 支持 1600 万,远超 VLAN 4096——这是它被云采用的根因。</div>' +
    '<div class="pit"><b>易混:IPv6 过渡三技术。</b>双栈(同跑)、隧道(封装)、翻译(转换)——别混用途。</div>',
  quiz: [
    { type: 'choice', q: 'VXLAN 主要解决的问题是?', options: ['带宽不足', 'VLAN 数量上限(4096)', '加密传输', 'IP 地址枯竭'], answer: 1, source: '基础', explain: 'VXLAN 24 位 VNI 突破 VLAN 4096 上限。' },
    { type: 'choice', q: '在物理 IP 网上用隧道建虚拟网络称为?', options: ['Underlay', 'Overlay', '直连', '中继'], answer: 1, source: '基础', explain: 'Overlay 建在 Underlay 之上。' },
    { type: 'choice', q: 'IPv6 过渡中"设备同时跑 v4/v6"的技术是?', options: ['隧道', '翻译', '双栈', 'NAT'], answer: 2, source: '基础', explain: '双栈同跑 v4/v6。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/03-sdwan">SD-WAN</a> · 进入网络规划:<a href="#/l/planning/01-requirement">需求分析</a> · IPv6 基础:<a href="#/l/net/03-ipv6">IPv6</a></p>'
});
