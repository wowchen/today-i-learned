NPD.registerLesson({
  id: 'ops/04-fault',
  module: 'ops',
  order: 4,
  title: '故障管理与排错',
  minutes: 4,
  keywords: ['故障管理', '排错', '分层排障', 'MTBF', 'MTTR', '可用性', '自愈'],
  concept: '<p><b>故障管理</b>管告警发现→定位→恢复;排错讲究<b>分层、分段、由简到繁</b>。</p>' +
    '<div class="ex">先看物理层(线/电)再看链路/网络层,先查最常见原因再深挖——别一上来抓包。</div>',
  exam: '<p><b>频度:中。</b>常考排错思路、可用性指标 MTBF/MTTR、自愈。</p>',
  core: '<p><b>故障管理流程:</b>发现(告警)→定位(分段隔离)→恢复(切换/修复)→总结(根因与改进)。</p>' +
    '<p><b>排错思路(由底向上):</b></p>' +
    '<ol>' +
    '<li><b>物理层</b>:线缆、接口、电源、指示灯。</li>' +
    '<li><b>链路层</b>:VLAN、STP、端口状态、双工。</li>' +
    '<li><b>网络层</b>:IP/掩码/网关、路由表、ARP。</li>' +
    '<li><b>传输/应用层</b>:端口、ACL、服务状态。</li>' +
    '</ol>' +
    '<p><b>可用性指标:</b></p>' +
    '<ul>' +
    '<li><b><gd data-term="mtbf">MTBF</gd></b>:平均故障间隔,越大越可靠。</li>' +
    '<li><b><gd data-term="mttr">MTTR</gd></b>:平均修复时间,越小越好。</li>' +
    '<li><b>可用性 A = MTBF/(MTBF+MTTR)</b>。</li>' +
    '</ul>' +
    '<p><b>自愈:</b>冗余链路/设备+协议(STP、路由收敛、VRRP)自动切换,缩短 MTTR。</p>' +
    '<p class="ex">ping/traceroute、抓包、查日志是排错三板斧;先分段定位再针对性深入。</p>',
  pitfalls: '<div class="pit"><b>易错:排错先看物理层。</b>很多"网络不通"其实是线松、口 down——别跳过物理直接抓包。</div>' +
    '<div class="pit"><b>易混:MTBF 与 MTTR 对可用性的方向。</b>MTBF 越大、MTTR 越小,可用性越高。</div>',
  quiz: [
    { type: 'choice', q: '网络排错通常遵循的思路是?', options: ['从应用层开始', '由底向上、由简到繁', '直接抓包', '重启所有设备'], answer: 1, source: '理解', explain: '先物理后高层、先简单后复杂。' },
    { type: 'choice', q: '可用性 A 的计算式是?', options: ['MTTR/MTBF', 'MTBF/(MTBF+MTTR)', 'MTBF×MTTR', '(MTBF+MTTR)/MTBF'], answer: 1, source: '基础', explain: 'A=MTBF/(MTBF+MTTR)。' },
    { type: 'choice', q: '缩短 MTTR 的有效手段是?', options: ['减少设备', '冗余自愈+快速排障', '增加带宽', '取消监控'], answer: 1, source: '理解', explain: '冗余自愈加快恢复。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/03-performance">性能监控</a> · 下一课:<a href="#/l/standard/01-ip">知识产权</a> · 案例排错:<a href="#/l/case/06-real">真题精解</a></p>'
});
