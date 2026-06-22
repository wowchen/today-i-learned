ISPM.registerLesson({
  id: 'infra/03-storage-tech',
  module: 'infra',
  order: 3,
  title: '存储技术',
  minutes: 4,
  keywords: ['存储', 'DAS', 'NAS', 'SAN', 'RAID', '数据备份', '容灾'],
  concept: '<p>数据要存在哪、怎么存得安全，是 IT 基础设施的重要部分。本课讲三种存储架构（DAS/NAS/SAN）和数据保护技术（RAID、备份、容灾）。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。DAS/NAS/SAN 区别、RAID 和容灾概念常考。</p>',
  core: '<p><b>三种存储架构：</b></p>' +
    '<ul><li><b>DAS（直连存储）</b>：存储直接连到服务器（如本地硬盘）。简单但不易共享。</li>' +
    '<li><b>NAS（网络附加存储）</b>：通过网络提供<em>文件级</em>共享（如共享文件夹）。基于 TCP/IP。</li>' +
    '<li><b>SAN（存储区域网络）</b>：通过专用网络提供<em>块级</em>存储，性能高，适合数据库等高要求场景。</li></ul>' +
    '<p><b>RAID（磁盘阵列）：</b>把多个磁盘组合，提高性能和可靠性。RAID 0（条带，快但无冗余）、RAID 1（镜像，冗余）、RAID 5（分布式奇偶校验，平衡性能和冗余）。</p>' +
    '<p><b>数据保护：</b></p>' +
    '<ul><li><b>备份</b>：完全备份、增量备份、差异备份。</li>' +
    '<li><b>容灾</b>：异地建立备份系统，保证灾难时业务连续。<b>RTO</b>（恢复时间目标，多久恢复）、<b>RPO</b>（恢复点目标，能容忍丢多少数据）是两个关键指标。</li></ul>',
  pitfalls: '<div class="pit"><b>误解 1：NAS 和 SAN 一样。</b> NAS 提供<em>文件级</em>共享（走普通网络，像共享文件夹）；SAN 提供<em>块级</em>存储（走专用网络，性能高）。SAN 更适合数据库等高性能场景。</div>' +
    '<div class="pit"><b>误解 2：RTO 和 RPO 分不清。</b> RTO 是"多久能<em>恢复</em>"（时间）；RPO 是"能容忍<em>丢多少数据</em>"（数据量/时间点）。RPO=0 表示不能丢任何数据。</div>',
  quiz: [
    {
      type: 'choice',
      q: '容灾指标中，表示"灾难发生后系统需要在多长时间内恢复"的是：',
      options: ['RPO', 'RTO', 'RAID', 'SLA'],
      answer: 1,
      source: '高频考点',
      explain: 'RTO（恢复时间目标）指灾难后系统恢复所需的时间。RPO（恢复点目标）指能容忍的数据丢失量（恢复到哪个时间点）。'
    },
    {
      type: 'choice',
      q: '通过专用网络提供块级存储、性能高、适合数据库的存储架构是：',
      options: ['DAS', 'NAS', 'SAN', 'U盘'],
      answer: 2,
      explain: 'SAN（存储区域网络）通过专用高速网络提供块级存储，性能高，适合数据库等高要求场景。NAS提供文件级共享，走普通网络。'
    }
  ],
  links: '<p>上一课：<a href="#/l/infra/02-network-architecture">网络架构与组网</a> · 下一课：<a href="#/l/infra/04-cloud-service-models">云服务模型详解</a></p>'
});
