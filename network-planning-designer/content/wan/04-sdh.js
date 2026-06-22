NPD.registerLesson({
  id: 'wan/04-sdh',
  module: 'wan',
  order: 4,
  title: 'SDH/OTN 光传输',
  minutes: 3,
  keywords: ['SDH', 'OTN', 'STM', '同步复用', '光传输', '自愈环'],
  concept: '<p><b><gd data-term="sdh">SDH</gd></b>(同步数字体系)在光纤上以固定帧结构同步复用传输,可靠性高,是光传输骨干技术。</p>' +
    '<div class="ex">光传输的"标准化货运列车时刻表"——同步、成帧、可自愈。</div>',
  exam: '<p><b>频度:中。</b>常考 SDH 速率等级(STM-N)、同步特性、自愈环。</p>',
  core: '<p><b>SDH 速率等级:</b></p>' +
    '<table><tr><th>等级</th><th>速率</th></tr>' +
    '<tr><td>STM-1</td><td>155 Mbps</td></tr>' +
    '<tr><td>STM-4</td><td>622 Mbps</td></tr>' +
    '<tr><td>STM-16</td><td>2.5 Gbps</td></tr>' +
    '<tr><td>STM-64</td><td>10 Gbps</td></tr></table>' +
    '<p><b>SDH 特点:</b></p>' +
    '<ul>' +
    '<li><b>同步复用</b>:全网同步,直接上下支路,不必全部分接(PDH 的痛点)。</li>' +
    '<li><b>标准化帧结构</b>:开销丰富,网管能力强。</li>' +
    '<li><b>自愈环</b>:光纤故障时自动切换保护环,可靠性高。</li>' +
    '</ul>' +
    '<p><b>OTN(光传送网):</b>面向波分复用的大容量光传输,SDH 之后的演进,适配超大带宽。</p>' +
    '<p class="ex">具体速率以现行标准为准;STM-1=155M 是高频记忆点(STM-1 为基本速率单位)。</p>',
  pitfalls: '<div class="pit"><b>易混:SDH(同步) vs PDH(准同步)。</b>SDH 全网同步、可直接上下支路;PDH 准同步、上下支路需逐级分接复接。</div>' +
    '<div class="pit"><b>易错:STM-1=155M。</b>别与 SONET 的 OC-1(约 51M)混;SONET 是北美制式,STM-1≈OC-3。</div>',
  quiz: [
    { type: 'choice', q: 'STM-1 的速率约为?', options: ['2 Mbps', '155 Mbps', '622 Mbps', '2.5 Gbps'], answer: 1, source: '基础', explain: 'STM-1≈155 Mbps。' },
    { type: 'choice', q: 'SDH 相比 PDH 的优势是?', options: ['准同步', '可直接上下支路、网管强', '不支持自愈', '只传模拟'], answer: 1, source: '理解', explain: 'SDH 同步、可上下支路、开销管理强。' },
    { type: 'choice', q: 'SDH 自愈环的作用是?', options: ['增加带宽', '光纤故障时自动切换保护', '加密传输', '划分 VLAN'], answer: 1, source: '理解', explain: '自愈环在故障时自动倒换,保障可靠。' }
  ],
  links: '<p>上一课:<a href="#/l/wan/03-mpls">MPLS</a> · 进入网络设备:<a href="#/l/device/01-overview">互连设备总览</a></p>'
});
