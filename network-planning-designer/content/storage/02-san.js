NPD.registerLesson({
  id: 'storage/02-san',
  module: 'storage',
  order: 2,
  title: 'SAN 与光纤通道',
  minutes: 4,
  keywords: ['SAN', '存储区域网络', 'FC', '块级', 'LUN', '高性能'],
  concept: '<p><b><gd data-term="san-storage">SAN</gd></b>(存储区域网络)是块级高速专用网络,把存储与服务器以裸块方式连接,性能高、可扩展。</p>' +
    '<div class="ex">给服务器专门修的"存储高速公路"——快、专用、块级。</div>',
  exam: '<p><b>频度:中。</b>常考 SAN 特征、FC、与 NAS 区别、IP-SAN。</p>',
  core: '<p><b>SAN 特征:</b></p>' +
    '<ul>' +
    '<li><b>块级</b>访问:服务器看到的是裸块(LUN),自带文件系统。</li>' +
    '<li><b>专用高速网络</b>:常用光纤通道(FC),低延迟、高吞吐。</li>' +
    '<li><b>可扩展</b>:存储与服务器解耦,易扩容、集中管理。</li>' +
    '<li><b>典型</b>:数据库、虚拟化、关键业务。</li>' +
    '</ul>' +
    '<p><b>FC(光纤通道):</b>专用存储网络协议,速率高、可靠,但造价高、需专用设备。</p>' +
    '<p><b>FC-SAN vs IP-SAN:</b></p>' +
    '<ul>' +
    '<li><b>FC-SAN</b>:光纤通道承载块,高性能、高成本。</li>' +
    '<li><b>IP-SAN</b>:用 <gd data-term="iscsi">iSCSI</gd> 在以太网传块,省专用光纤、成本低(见下课)。</li>' +
    '</ul>' +
    '<p class="ex">SAN 与 NAS 都入网,但 SAN 块级(裸盘给服务器管),NAS 文件级(自带文件系统)。</p>',
  pitfalls: '<div class="pit"><b>易混:SAN vs NAS。</b>都入网;SAN 块级裸盘(高性能、数据库),NAS 文件级(易共享、办公)。</div>' +
    '<div class="pit"><b>易错:SAN 是"块级"。</b>服务器经 SAN 拿到的是 LUN(裸块),文件系统在服务器侧——别与 NAS 文件级混。</div>',
  quiz: [
    { type: 'choice', q: 'SAN 提供的访问方式是?', options: ['文件级', '块级', '对象级', '字符级'], answer: 1, source: '基础', explain: 'SAN 块级访问。' },
    { type: 'choice', q: 'FC-SAN 的承载技术是?', options: ['以太网', '光纤通道(FC)', '电话线', '同轴'], answer: 1, source: '基础', explain: 'FC-SAN 用光纤通道。' },
    { type: 'choice', q: '下列最适合用 SAN 的是?', options: ['办公文件共享', '小办公网', '数据库/虚拟化关键业务', '家庭备份'], answer: 2, source: '场景', explain: 'SAN 高性能块级,适合数据库等关键业务。' }
  ],
  links: '<p>上一课:<a href="#/l/storage/01-das-nas">DAS/NAS</a> · 下一课:<a href="#/l/storage/03-iscsi">iSCSI/IP-SAN</a></p>'
});
