SPM.registerLesson({
  id: 'comp/01-hardware',
  module: 'comp',
  order: 1,
  title: '计算机硬件基础',
  minutes: 5,
  keywords: ['CPU', '存储器', '总线', '冯诺依曼', 'RAID'],
  concept: '<p>计算机由<b>运算器、控制器、存储器、输入、输出</b>五大部件组成(冯·诺依曼结构);CPU = 运算器 + 控制器。服务运维要"看得懂硬件家底"。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,综合知识少量选择。理解即可,不深算。</p>',
  core: '<ul>' +
    '<li><b>存储层次</b>:寄存器→Cache→主存→外存,越上越快越贵越小。</li>' +
    '<li><b>RAID</b>:磁盘冗余阵列,RAID0 条带快但无冗余、RAID1 镜像、RAID5 校验、RAID10 兼顾——和服务<gd data-term="availability">可用性</gd>相关。</li>' +
    '<li><b>总线</b>:数据/地址/控制总线;接口如 SATA、PCIe。</li>' +
    '</ul>' +
    '<div class="ex">运维选盘:要可用性选 RAID1/5/10,纯求速度临时盘才用 RAID0。</div>',
  pitfalls: '<div class="pit"><b>RAID0 不是备份。</b>它只提速、无冗余,坏一块全没;别把它当容错手段。</div>',
  quiz: [
    { type: 'choice', q: '既要冗余又较经济、坏一块盘不丢数据的常见方案是?', options: ['RAID0', 'RAID1', 'RAID5', '不做RAID'], answer: 2, source: '高频', explain: 'RAID5 用校验提供冗余,空间利用率高于镜像。' }
  ],
  links: '<p>下一课:<a href="#/l/comp/02-software">软件基础</a> · 关联:<a href="#/l/ops/07-capacity-availability">容量与可用性</a></p>'
});
