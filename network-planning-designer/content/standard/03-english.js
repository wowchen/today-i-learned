NPD.registerLesson({
  id: 'standard/03-english',
  module: 'standard',
  order: 3,
  title: '网络专业英语',
  minutes: 4,
  keywords: ['专业英语', '网络术语', '英文', '阅读', '缩写'],
  concept: '<p>综合知识含专业英语,常给一段网络技术英文,要求选词填空——核心是<b>熟悉网络术语英文与缩写</b>。</p>' +
    '<div class="ex">把术语表里的 en(英文)当复习重点;考的是"见英文知含义"。</div>',
  exam: '<p><b>频度:中。</b>综合知识固定题型,占比不大但稳拿分。靠术语积累。</p>',
  core: '<p><b>高频网络英文术语(节选,完整见术语表):</b></p>' +
    '<table><tr><th>缩写</th><th>英文</th><th>中文</th></tr>' +
    '<tr><td>OSI</td><td>Open Systems Interconnection</td><td>开放系统互连</td></tr>' +
    '<tr><td>TCP/IP</td><td>Transmission Control Protocol/Internet Protocol</td><td>传输控制/网际协议</td></tr>' +
    '<tr><td>VLAN</td><td>Virtual LAN</td><td>虚拟局域网</td></tr>' +
    '<tr><td>STP</td><td>Spanning Tree Protocol</td><td>生成树协议</td></tr>' +
    '<tr><td>OSPF</td><td>Open Shortest Path First</td><td>开放最短路径优先</td></tr>' +
    '<tr><td>CIDR</td><td>Classless Inter-Domain Routing</td><td>无类别域间路由</td></tr>' +
    '<tr><td>VPN</td><td>Virtual Private Network</td><td>虚拟专用网</td></tr>' +
    '<tr><td>SDN</td><td>Software-Defined Networking</td><td>软件定义网络</td></tr>' +
    '<tr><td>NAT</td><td>Network Address Translation</td><td>网络地址转换</td></tr>' +
    '<tr><td>DNS</td><td>Domain Name System</td><td>域名系统</td></tr></table>' +
    '<p><b>阅读技巧:</b>抓主谓宾与转折;技术英文多为定义/流程描述,先定位关键词(协议名/动词)再通读。</p>' +
    '<p class="ex">建议把术语表按 en 列过一遍;真题英语题多为"协议原理描述选词",熟悉术语即可应对。</p>',
  pitfalls: '<div class="pit"><b>易错:缩写与中文对不上。</b>如 OSPF 不是"距离矢量";阅读时先确认术语含义再选词。</div>' +
    '<div class="pit"><b>易混:形近缩写。</b>如 CIDR(无类别域间路由)vs CDMA(码分多址)——别看走眼。</div>',
  quiz: [
    { type: 'choice', q: 'OSPF 的英文全称是?', options: ['Open Shortest Path First', 'Open Systems Interconnection', 'Open Source Path', 'Open Service Platform'], answer: 0, source: '英语', explain: 'OSPF=Open Shortest Path First。' },
    { type: 'choice', q: 'VPN 的中文是?', options: ['虚拟局域网', '虚拟专用网', '网络地址转换', '域名系统'], answer: 1, source: '英语', explain: 'VPN=Virtual Private Network。' },
    { type: 'choice', q: 'CIDR 指?', options: ['无类别域间路由', '码分多址', '生成树协议', '软件定义网络'], answer: 0, source: '英语', explain: 'CIDR=Classless Inter-Domain Routing。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/02-standardization">标准与代号</a> · 进入案例分析:<a href="#/l/case/01-overview">案例总览</a> · 术语表:<a href="#/terms">术语</a></p>'
});
