NPD.registerLesson({
  id: 'essay/05-topic-ops',
  module: 'essay',
  order: 5,
  title: '选题三:网络运维与安全',
  minutes: 4,
  keywords: ['选题', '网络运维', '安全', '监控', '故障', '改进', '素材'],
  concept: '<p>"网络运维"或"网络安全"主题聚焦<b>运维体系或安全方案</b>:监控、故障、性能改进或纵深防御。</p>' +
    '<div class="ex">运维主线:建监控→管故障→优性能;安全主线:边界+DMZ+VPN+隔离+审计。</div>',
  exam: '<p><b>频度:中高。</b>运维、安全都是论文常考方向。</p>',
  core: '<p><b>运维主题论点(示例):</b></p>' +
    '<ol>' +
    '<li><b>监控体系</b>:基于 SNMP 建网管(轮询+Trap),监控带宽/时延/丢包;关键链路阈值告警。</li>' +
    '<li><b>故障管理</b>:告警分级→由底向上排错→根因分析→冗余自愈缩短 MTTR。</li>' +
    '<li><b>性能优化</b>:QoS 保障语音/视频优先;瓶颈段扩容(链路聚合);优化后可用性提升。</li>' +
    '<li><b>持续改进</b>:基于数据复盘,引入自动化运维、AIOps 预警。</li>' +
    '</ol>' +
    '<p><b>安全主题论点(示例):</b></p>' +
    '<ol>' +
    '<li><b>边界防护</b>:NGFW 出口、默认拒绝、最小开放。</li>' +
    '<li><b>DMZ</b>:对外服务进 DMZ,与内网策略隔离。</li>' +
    '<li><b>接入安全</b>:远程用 SSL VPN、802.1X 端口认证、AAA 统一管理。</li>' +
    '<li><b>纵深防御</b>:IDS/IPS + 主机防护 + 数据加密 + 审计日志。</li>' +
    '<li><b>效果</b>:安全事件下降、合规达标;不足是策略维护成本高。</li>' +
    '</ol>' +
    '<p class="ex">运维/安全类要<b>有数据有过程</b>(指标前后对比、故障处置流程),体现闭环改进。</p>',
  pitfalls: '<div class="pit"><b>陷阱:运维只讲"怎么做"不讲"效果"。</b>要有前后对比数据(可用性/MTTR 变化),体现改进闭环。</div>' +
    '<div class="pit"><b>陷阱:安全只堆设备。</b>要讲策略与纵深(默认拒绝、最小开放),不是"装了防火墙就安全"。</div>',
  quiz: [
    { type: 'choice', q: '运维类论文体现改进闭环的关键是?', options: ['堆设备', '前后对比数据与处置流程', '字数', '口号'], answer: 1, source: '理解', explain: '有数据对比显闭环改进。' },
    { type: 'choice', q: '安全类论文应强调?', options: ['只装防火墙', '纵深防御+策略(默认拒绝)', '开放所有端口', '取消监控'], answer: 1, source: '理解', explain: '纵深防御与最小开放策略。' },
    { type: 'choice', q: '基于 SNMP 的网管采用的工作方式是?', options: ['只轮询', '只告警', '轮询+Trap 告警', '广播'], answer: 2, source: '基础', explain: 'SNMP 网管轮询+Trap 结合。' }
  ],
  links: '<p>上一课:<a href="#/l/essay/04-topic-design">选题:设计实现</a> · 下一课:<a href="#/l/essay/06-material">素材与范文要点</a> · 运维模块:<a href="#/l/ops/01-snmp">SNMP</a> · 安全模块:<a href="#/l/security/03-firewall">防火墙</a></p>'
});
