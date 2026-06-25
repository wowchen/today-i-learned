EBD.registerLesson({
  id: 'inspect-05-people',
  module: 'inspect',
  order: 5,
  title: '现场人员定位:作业人在哪、安不安全',
  minutes: 4,
  keywords: ['人员定位', '安全', '作业', '单兵', '管控'],
  sections: {
    what:
      '<p>野外和站内作业,管理者最想知道两件事:<strong>人在哪、安不安全</strong>。给作业人员配带北斗定位的终端(手持机、智能安全帽、单兵设备),位置就实时上图。</p>',
    why:
      '<p>价值在"<strong>看得见的安全</strong>":</p>' +
      '<ul>' +
      '<li><strong>应急</strong>:有人受伤、走失,能立刻知道在哪、就近施救。</li>' +
      '<li><strong>合规</strong>:确认作业人是否到了该到的位置、有没有误入带电的<gd data-term="dianziweilan">危险区域</gd>。</li>' +
      '<li><strong>协同</strong>:多班组作业时,指挥能统观全场人员分布。</li>' +
      '</ul>',
    how:
      '<ul>' +
      '<li><strong>室外</strong>:北斗定位,精度按需(米级管"在哪",高精度管"在不在精确范围")。</li>' +
      '<li><strong>无公网</strong>:位置可用<gd data-term="duanbaowen">短报文</gd>回传,深山也能上报。</li>' +
      '<li><strong>室内</strong>:进了变电站建筑、隧道,卫星照不到,接力到<gd data-term="shineidingwei">室内定位</gd>(见本模块《室内定位》)。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>人员定位要把握分寸。</b>它的正当目的是<strong>安全保障和作业合规</strong>,应用中需遵守相关规定、尊重员工权益,聚焦"安全 + 到位",而非无边界监控。</div>',
    links:
      '<p>· 出事了怎么最快赶到:下一课《应急抢修导航》。<br>· 到位与越界的管控,见模块 8《到位管控》《电子围栏》。'
  }
});
