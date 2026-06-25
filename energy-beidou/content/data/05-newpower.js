EBD.registerLesson({
  id: 'data-05-newpower',
  module: 'data',
  order: 5,
  title: '和新型电力系统怎么融合',
  minutes: 4,
  key: '转型关键',
  keywords: ['新型电力系统', '新能源', '融合', '时空', '波动'],
  sections: {
    what:
      '<p><gd data-term="xinxingdianli">新型电力系统</gd>是以新能源为主体的电力系统:风、光大量接入,电源变得<strong>又多、又分散、又波动</strong>。这对"时与空"的精细度提出了空前要求,北斗时空服务正是支撑这场转型的基础设施之一。</p>',
    why:
      '<p>为什么转型后更依赖时空?</p>' +
      '<ul>' +
      '<li><strong>更分散</strong>:从几座大电厂变成千万个分布式光伏、风机、充电桩,都要精确定位、纳入管理。</li>' +
      '<li><strong>更波动</strong>:出力随天气剧烈变化,需要全网<gd data-term="pmu">高精度同步测量</gd>才能看清、控住。</li>' +
      '<li><strong>更需协同</strong>:源、网、荷、储要踩着同一节拍配合(下一课)。</li>' +
      '</ul>',
    how:
      '<p>融合的落点:用统一<gd data-term="shoushi">授时</gd>支撑广域同步测量和控制;用精确定位管理海量分散电源;用<gd data-term="shikongshuju">时空数据底座</gd>把这些都对齐,支撑调度和数字孪生。可以说,<strong>新能源越多,北斗这套"时空底座"越不可或缺</strong>。</p>',
    pitfalls:
      '<div class="pit"><b>误解:新型电力系统是纯电力的事,跟北斗没关系。</b>恰恰相反:电源越分散、越波动,对"精准时间 + 精准位置 + 全局协同"的依赖越强,北斗的角色因此更重,而不是更轻。</div>',
    links:
      '<p>· 四端怎么协同:下一课《源网荷储的时空协同》。<br>· 同步测量回看模块 5《PMU 与 WAMS》。'
  }
});
