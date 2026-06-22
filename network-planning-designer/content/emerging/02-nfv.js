NPD.registerLesson({
  id: 'emerging/02-nfv',
  module: 'emerging',
  order: 2,
  title: 'NFV:网络功能虚拟化',
  minutes: 3,
  keywords: ['NFV', '虚拟化', 'VNF', '通用服务器', '专有设备', 'MANO'],
  concept: '<p><b><gd data-term="nfv">NFV</gd></b>用通用服务器+软件取代专用网络设备(防火墙/负载均衡/路由器)。</p>' +
    '<div class="ex">"专机变软件"——不再买专用盒子,在普通服务器上跑网元功能。</div>',
  exam: '<p><b>频度:中。</b>常考 NFV 概念、与 SDN 关系、VNF。</p>',
  core: '<p><b>NFV 要点:</b></p>' +
    '<ul>' +
    '<li><b>VNF(虚拟网络功能)</b>:以软件实例实现某网元(如虚拟防火墙、虚拟路由器)。</li>' +
    '<li><b>承载</b>:通用 x86/ARM 服务器,而非专用硬件。</li>' +
    '<li><b>管理</b>:NFV MANO(管理与编排)负责 VNF 的部署、弹性、生命周期。</li>' +
    '<li><b>价值</b>:降低专用硬件依赖、弹性扩缩、快速上线新业务。</li>' +
    '</ul>' +
    '<p><b>NFV vs SDN:</b></p>' +
    '<ul>' +
    '<li>NFV 把<b>设备功能</b>软件化(专机→软件)。</li>' +
    '<li>SDN 把<b>控制与转发</b>分离(集中控制)。</li>' +
    '<li>两者互补,常结合:NFV 提供网元,SDN 编排网络。</li>' +
    '</ul>' +
    '<p class="ex">口诀:NFV 换"设备",SDN 换"控制方式"——不同维度,可叠加。</p>',
  pitfalls: '<div class="pit"><b>易混:NFV vs SDN。</b>NFV=网元虚拟化(专机变软件);SDN=控制转发分离(集中控制)。不同维度。</div>' +
    '<div class="pit"><b>易错:NFV 跑在通用服务器。</b>不是专用硬件,这是它降低成本的核心。</div>',
  quiz: [
    { type: 'choice', q: 'NFV 的核心是?', options: ['控制转发分离', '用通用服务器+软件实现网元功能', '全用光纤', '取消网络'], answer: 1, source: '基础', explain: 'NFV 专机变软件。' },
    { type: 'choice', q: '下列关于 NFV 与 SDN 正确的是?', options: ['两者完全相同', 'NFV 换设备、SDN 换控制方式,互补', 'NFV 是 SDN 的一部分', 'SDN 是 NFV 的一部分'], answer: 1, source: '理解', explain: '两者不同维度、互补。' },
    { type: 'choice', q: 'VNF 指的是?', options: ['虚拟网络功能', '虚拟局域网', '虚拟存储', '虚拟机监控器'], answer: 0, source: '基础', explain: 'VNF=Virtual Network Function。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/01-sdn">SDN</a> · 下一课:<a href="#/l/emerging/03-sdwan">SD-WAN</a></p>'
});
