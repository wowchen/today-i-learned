NPD.registerLesson({
  id: 'storage/01-das-nas',
  module: 'storage',
  order: 1,
  title: 'DAS 与 NAS:直连与网络存储',
  minutes: 3,
  keywords: ['DAS', 'NAS', '直连存储', '网络存储', '文件级', '对比'],
  concept: '<p><b><gd data-term="das">DAS</gd></b>直连服务器(个人外接硬盘);<b><gd data-term="nas">NAS</gd></b>以文件级经局域网共享存储。</p>' +
    '<div class="ex">DAS"每人一个外接硬盘各管各的";NAS"局域网上大家共用的网络硬盘"。</div>',
  exam: '<p><b>频度:中。</b>常考 DAS/NAS/SAN 区别、文件级 vs 块级。</p>',
  core: '<p><b>DAS(直连式存储):</b></p>' +
    '<ul>' +
    '<li>磁盘直接连服务器(SCSI/SAS/FC),不独立成网。</li>' +
    '<li>部署简单、成本低,但难共享、难扩展。</li>' +
    '<li>适合单机/小规模。</li>' +
    '</ul>' +
    '<p><b>NAS(网络附加存储):</b></p>' +
    '<ul>' +
    '<li>以<b>文件级</b>经局域网共享(常 NFS/CIFS/SMB)。</li>' +
    '<li>易部署、多机共享,自带文件系统。</li>' +
    '<li>适合办公文件共享、中小规模。</li>' +
    '</ul>' +
    '<p class="ex">关键区分:DAS 不入网;NAS 入网但文件级(自带文件系统);SAN 入网且块级(裸盘给服务器管文件系统)。</p>',
  pitfalls: '<div class="pit"><b>易混:NAS vs SAN。</b>NAS 文件级(自带文件系统、易共享);SAN 块级(裸块、高性能)。见 <a href="#/l/storage/02-san">SAN</a>。</div>' +
    '<div class="pit"><b>易错:DAS 不共享。</b>DAS 直连单机,其他机访问须经该机——这是它相对 NAS/SAN 的短板。</div>',
  quiz: [
    { type: 'choice', q: 'NAS 提供的访问方式是?', options: ['块级', '文件级', '对象级', '字符级'], answer: 1, source: '基础', explain: 'NAS 文件级共享。' },
    { type: 'choice', q: '磁盘直连服务器、不独立成网的是?', options: ['DAS', 'NAS', 'SAN', 'iSCSI'], answer: 0, source: '基础', explain: 'DAS 直连服务器。' },
    { type: 'choice', q: 'NAS 相比 DAS 的优势是?', options: ['更高性能', '多机共享、易部署', '更低成本', '块级访问'], answer: 1, source: '理解', explain: 'NAS 入网可多机共享。' }
  ],
  links: '<p>上一课:<a href="#/l/wireless/04-iot">物联网</a> · 下一课:<a href="#/l/storage/02-san">SAN</a></p>'
});
