NPD.registerLesson({
  id: 'storage/03-iscsi',
  module: 'storage',
  order: 3,
  title: 'iSCSI 与 IP-SAN',
  minutes: 3,
  keywords: ['iSCSI', 'IP-SAN', 'SCSI', 'TCP/IP', '块级', '成本'],
  concept: '<p><b><gd data-term="iscsi">iSCSI</gd></b>在 TCP/IP 上承载 SCSI 块存储命令,用普通以太网组建 IP-SAN,省掉专用光纤。</p>' +
    '<div class="ex">"用网线传硬盘指令"——拿现成以太网当 SAN,成本大降。</div>',
  exam: '<p><b>频度:中。</b>常考 iSCSI 原理、IP-SAN 优势、与 FC-SAN 对比。</p>',
  core: '<p><b>iSCSI 要点:</b></p>' +
    '<ul>' +
    '<li><b>本质</b>:把 SCSI 块命令封装在 TCP/IP 中传输。</li>' +
    '<li><b>组件</b>:Initiator(发起端,服务器)↔ Target(目标端,存储)。</li>' +
    '<li><b>承载</b>:走标准以太网/IP,无需专用 FC 设备。</li>' +
    '<li><b>结果</b>:构成 IP-SAN,块级访问、成本低。</li>' +
    '</ul>' +
    '<p><b>FC-SAN vs IP-SAN(iSCSI):</b></p>' +
    '<table><tr><th>维度</th><th>FC-SAN</th><th>IP-SAN(iSCSI)</th></tr>' +
    '<tr><td>承载</td><td>光纤通道</td><td>以太网/TCP/IP</td></tr>' +
    '<tr><td>性能</td><td>高、低延迟</td><td>中(依赖以太网质量)</td></tr>' +
    '<tr><td>成本</td><td>高(专用设备)</td><td>低(复用以太网)</td></tr>' +
    '<tr><td>部署</td><td>需 FC 专长</td><td>复用 IP 网络运维</td></tr></table>' +
    '<p class="ex">对性能要求极高用 FC-SAN;预算有限、想复用以太网用 iSCSI/IP-SAN。</p>',
  pitfalls: '<div class="pit"><b>易混:iSCSI 仍是块级。</b>虽然走 IP,但本质是块命令(SCSI),不是文件级——别与 NAS 混。</div>' +
    '<div class="pit"><b>易错:iSCSI 走 TCP。</b>承载在 TCP/IP 之上(可靠传输),不是 UDP。</div>',
  quiz: [
    { type: 'choice', q: 'iSCSI 承载的协议栈是?', options: ['TCP/IP', '光纤通道', 'UDP', 'PPP'], answer: 0, source: '基础', explain: 'iSCSI 跑在 TCP/IP 上。' },
    { type: 'choice', q: 'iSCSI 提供的访问级别是?', options: ['文件级', '块级', '对象级', '记录级'], answer: 1, source: '基础', explain: 'iSCSI 仍是块级。' },
    { type: 'choice', q: 'IP-SAN 相比 FC-SAN 的主要优势是?', options: ['更高性能', '成本低、复用以太网', '更低延迟', '更安全'], answer: 1, source: '理解', explain: 'IP-SAN 复用以太网、成本低。' }
  ],
  links: '<p>上一课:<a href="#/l/storage/02-san">SAN</a> · 进入新一代网络:<a href="#/l/emerging/01-sdn">SDN</a></p>'
});
