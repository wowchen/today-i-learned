NPD.registerLesson({
  id: 'emerging/01-sdn',
  module: 'emerging',
  order: 1,
  title: 'SDN:软件定义网络',
  minutes: 4,
  key: true,
  keywords: ['SDN', '控制面', '数据面', '分离', '控制器', 'OpenFlow', '南向', '北向'],
  concept: '<p><b><gd data-term="sdn">SDN</gd></b>把网络<b>控制面(大脑)</b>与<b>数据面(手脚)</b>分离,集中控制器用软件统管转发。</p>' +
    '<div class="ex">传统网络"每台设备自带脑";SDN"大脑集中、手脚分散",软件统管全网。</div>',
  exam: '<p><b>频度:高。</b>常考 SDN 三层架构、控制/数据分离、OpenFlow。</p>',
  core: '<p><b>SDN 三层架构:</b></p>' +
    '<ul>' +
    '<li><b>应用层</b>:网络应用(路由、安全、负载均衡),通过北向 API 调控制器。</li>' +
    '<li><b>控制层</b>:集中控制器,掌握全网视图,编程下发转发策略。</li>' +
    '<li><b>基础设施层(数据面)</b>:交换机只管按流表转发。</li>' +
    '</ul>' +
    '<p><b>南向接口</b>:控制器↔交换机,典型 <gd data-term="openflow">OpenFlow</gd> 下发流表。</p>' +
    '<p><b>北向接口</b>:应用↔控制器,RESTful 等供应用编程。</p>' +
    '<p><b>SDN 价值:</b>集中管控、全局视图、可编程、快速创新、流量工程灵活。</p>' +
    '<p class="ex">传统设备控制面与数据面耦合;SDN 解耦后,交换机变"傻快",智能在控制器。</p>',
  pitfalls: '<div class="pit"><b>易混:南向 vs 北向。</b>南向=控制器↓交换机(OpenFlow);北向=应用↑控制器(RESTful)——按"谁在上"记。</div>' +
    '<div class="pit"><b>易错:SDN 是"分离"。</b>核心是控制面与数据面分离,不是"更快转发"或"新协议"。</div>',
  quiz: [
    { type: 'choice', q: 'SDN 的核心思想是?', options: ['全用光纤', '控制面与数据面分离、集中控制', '取消路由', '全部无线化'], answer: 1, source: '基础', explain: 'SDN 控制面与数据面分离。' },
    { type: 'choice', q: 'SDN 控制器与交换机之间的南向协议典型是?', options: ['RESTful', 'OpenFlow', 'HTTP', 'SNMP'], answer: 1, source: '基础', explain: 'OpenFlow 是南向协议。' },
    { type: 'choice', q: 'SDN 应用层访问控制器的接口称为?', options: ['南向接口', '北向接口', '东西向接口', '管理接口'], answer: 1, source: '基础', explain: '应用↔控制器为北向接口。' }
  ],
  links: '<p>上一课:<a href="#/l/storage/03-iscsi">iSCSI</a> · 下一课:<a href="#/l/emerging/02-nfv">NFV</a></p>'
});
