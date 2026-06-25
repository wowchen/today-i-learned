EBD.registerLesson({
  id: 'inspect-01-pain',
  module: 'inspect',
  order: 1,
  title: '传统巡检有多难:几十万基杆塔靠腿走',
  minutes: 4,
  keywords: ['巡检', '痛点', '杆塔', '人工', '效率'],
  sections: {
    what:
      '<p><gd data-term="xunjian">巡检</gd>就是定期检查线路、<gd data-term="ganta">杆塔</gd>、设备有没有隐患。难点在规模:全国架空线路上百万公里、杆塔数以百万计,很多还在深山、跨江、过戈壁。传统做法是<strong>人扛着望远镜爬山头、登铁塔</strong>,又慢、又累、又危险。</p>',
    why:
      '<p>痛点集中在四个字:<strong>找、到、记、险</strong>。</p>' +
      '<ul>' +
      '<li><strong>找不准</strong>:茫茫山里,这基塔到底在哪、隐患点在哪个位置,全凭经验和模糊记录。</li>' +
      '<li><strong>到得慢</strong>:没有精确坐标和导航,光是走到点位就耗掉大半天。</li>' +
      '<li><strong>记不清</strong>:发现的缺陷靠手写,位置说不准,下次复查又得重新找。</li>' +
      '<li><strong>太危险</strong>:爬高、涉水、野外作业,安全风险高。</li>' +
      '</ul>',
    how:
      '<p>北斗正好对症:用精准<strong>位置</strong>给每基塔建坐标、给无人机规划航线、给抢修导航直达;用<strong>时间</strong>给巡检记录盖时标;无公网处用<gd data-term="duanbaowen">短报文</gd>把信息传出来。本模块就讲这些怎么落地。</p>',
    pitfalls:
      '<div class="pit"><b>误解:北斗巡检就是给手机装个定位。</b>真正的提效来自"<strong>精确坐标库 + 无人机自主航线 + 数据时空标签</strong>"的组合,把"找、到、记"全部数字化,而不只是看个手机蓝点。</div>',
    links:
      '<p>· 先看怎么管"线"和"通道":下一课《输电通道巡检》。<br>· 无人机怎么自己飞:《无人机自主巡检》。'
  }
});
