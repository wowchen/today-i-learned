NPD.registerLesson({
  id: 'net/06-fragment-forward',
  module: 'net',
  order: 6,
  title: 'IP 分片与转发',
  minutes: 4,
  keywords: ['分片', 'MTU', '重组', '转发', 'TTL', '首部'],
  concept: '<p>IP 分组超过链路 <b><gd data-term="mtu">MTU</gd></b> 时要<b>分片</b>,到目标再<b>重组</b>;路由器按目的 IP 与路由表<b>转发</b>。</p>' +
    '<div class="ex">分片在源端或途中发生,重组只在<b>最终目的主机</b>进行。</div>',
  exam: '<p><b>频度:中。</b>常考分片计算、MTU、TTL 含义、IP 首部关键字段。</p>',
  core: '<p><b>分片相关字段:</b></p>' +
    '<ul>' +
    '<li><b>标识(Identification)</b>:同一数据报的分片共用一个标识。</li>' +
    '<li><b>标志(Flags)</b>:DF(不可分片)、MF(还有后续分片,最后一片 MF=0)。</li>' +
    '<li><b>片偏移(Fragment Offset)</b>:该片在原数据中的位置,以 8 字节为单位。</li>' +
    '</ul>' +
    '<p><b>分片计算要点:</b>每片数据长度须为 8 的倍数;每片含 IP 首部 20 字节。</p>' +
    '<p><b>转发流程:</b>路由器收分组 → 查目的 IP → 匹配路由表最长前缀 → 减 TTL → 重组首部校验 → 从出接口转发。</p>' +
    '<p><b>TTL:</b>每经一跳减 1,减到 0 则丢弃并回 ICMP 超时——防环路。</p>' +
    '<p class="ex">片偏移以 8 字节为单位,因此分片数据长度必须凑成 8 的倍数——常考点。</p>',
  pitfalls: '<div class="pit"><b>易错:重组只在目的主机。</b>途中路由器只分片不重组(否则性能灾难)。</div>' +
    '<div class="pit"><b>易错:片偏移单位是 8 字节。</b>不是字节也不是 4 字节;且数据长度须凑 8 倍数。</div>' +
    '<div class="pit"><b>易混:DF 与 MF。</b>DF=1 禁止分片(超 MTU 直接丢,回 ICMP 不可达);MF=1 表示"后面还有片"。</div>',
  quiz: [
    { type: 'choice', q: 'IP 分片的重组在哪里进行?', options: ['途中每个路由器', '最终目的主机', '源主机', '网关'], answer: 1, source: '基础', explain: '重组只在目的主机。' },
    { type: 'choice', q: 'IP 首部中"片偏移"的单位是?', options: ['1 字节', '4 字节', '8 字节', '16 字节'], answer: 2, source: '基础', explain: '片偏移以 8 字节为单位。' },
    { type: 'choice', q: 'TTL 的作用是?', options: ['加速转发', '防止分组无限环路', '加密', '分片控制'], answer: 1, source: '理解', explain: 'TTL 每跳减 1,到 0 丢弃,防环路。' }
  ],
  links: '<p>上一课:<a href="#/l/net/05-nat">NAT</a> · 进入路由协议:<a href="#/l/routing/01-static">静态路由</a> · 路由器设备:<a href="#/l/device/03-router">路由器</a></p>'
});
