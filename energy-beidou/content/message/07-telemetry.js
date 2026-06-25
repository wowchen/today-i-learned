EBD.registerLesson({
  id: 'message-07-telemetry',
  module: 'message',
  order: 7,
  title: '监测终端用短报文回传数据',
  minutes: 4,
  keywords: ['监测', '回传', '遥测', '短报文', '物联网'],
  sections: {
    what:
      '<p>把模块 7 的监测和短报文接上:深山里的<gd data-term="xingbianjiance">形变监测</gd>点、覆冰监测点,采到的数据怎么传回来?有网走网,<strong>没网就走<gd data-term="duanbaowen">短报文</gd></strong>。这是短报文在电力里最"日常"的用法之一。</p>',
    why:
      '<p>监测点恰恰最常处在无公网的偏远处(滑坡体、高山线路)。它们数量多、分散、靠电池或太阳能供电,需要的正是短报文这种"<strong>低功耗、低成本、自带位置、不依赖公网</strong>"的回传方式。没有它,这些点的数据根本出不来。</p>',
    how:
      '<ul>' +
      '<li><strong>压缩上报</strong>:终端把位移等关键值压缩成短消息定时发回。</li>' +
      '<li><strong>告警优先</strong>:数据异常时立即发告警,平时低频上报省电省通道。</li>' +
      '<li><strong>带位置</strong>:消息附带监测点坐标,后台一看就知道是哪个点报的。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:监测数据原封不动用短报文传。</b>短报文容量小,得<strong>精选、压缩</strong>:平时传关键指标和趋势,异常才加密上报。把"传什么、多久传一次"设计好,才能在有限通道里既省电又不漏关键信息。</div>',
    links:
      '<p>· 短报文能发多大、未来怎么升级:下一课《能发多长:容量与区域到全球的升级》。<br>· 监测预警闭环回看模块 7《从监测到预警》。'
  }
});
