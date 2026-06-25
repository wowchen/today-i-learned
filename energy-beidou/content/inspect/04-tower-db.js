EBD.registerLesson({
  id: 'inspect-04-tower-db',
  module: 'inspect',
  order: 4,
  title: '杆塔精准坐标库:给每基塔一个时空身份证',
  minutes: 4,
  keywords: ['杆塔', '坐标库', '台账', '身份证', '数字化'],
  sections: {
    what:
      '<p>很多巡检数字化的<strong>第一步</strong>,是给每一基<gd data-term="ganta">杆塔</gd>建一个精准坐标——相当于发一张"<strong>时空身份证</strong>":它在哪(厘米级坐标)、是什么型号、属于哪条线路。这就是杆塔坐标库。</p>',
    why:
      '<p>有了它,后面一切才好办:无人机按它规划航线、巡检员按它导航到点、缺陷按它精确归位、监测点按它布设。<strong>坐标库是巡检、监测、抢修共用的"地基数据"</strong>;没有它,各应用都得各找各的点,效率全无。</p>',
    how:
      '<ul>' +
      '<li><strong>采集</strong>:用 <gd data-term="rtk">RTK</gd> 等高精度手段实地采每基塔坐标,统一到 <gd data-term="cgcs2000">CGCS2000</gd>。</li>' +
      '<li><strong>关联</strong>:坐标和台账(型号、投运年份、所属线路)绑定,落到<gd data-term="yizhangtu">电网一张图</gd>。</li>' +
      '<li><strong>维护</strong>:新建、改造后及时更新,保证"图上的塔"和"地上的塔"一致。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:坐标库有个大概位置就够。</b>差几米,无人机航点就可能偏到危险距离、巡检员就得现场找半天。坐标库的价值正在于"<strong>准</strong>",所以要用高精度采集。</div>',
    links:
      '<p>· 人在现场怎么定位、保安全,下一课《现场人员定位》。<br>· 坐标库怎么进"一张图",见模块 10《电网一张图》。'
  }
});
