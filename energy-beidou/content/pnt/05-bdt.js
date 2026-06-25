EBD.registerLesson({
  id: 'pnt-05-bdt',
  module: 'pnt',
  order: 5,
  title: 'BDT:北斗时和你手机上的时间差多少',
  minutes: 4,
  keywords: ['BDT', '北斗时', 'UTC', '闰秒', '时间系统'],
  sections: {
    what:
      '<p><gd data-term="bdt">北斗时(BDT)</gd>是北斗系统自己的时间基准,由一组高精度<gd data-term="yuanzizhong">原子钟</gd>维持。它从 <strong>2006 年初</strong>起算,而且<strong>不跳闰秒</strong>——一秒一秒匀速往前走,从不"插秒"。</p>',
    why:
      '<p>"不跳闰秒"对电力很重要。民用的协调世界时(UTC)隔几年会人为加一个闰秒来迁就地球自转,这一跳对需要连续、稳定时间的系统(如<gd data-term="pmu">同步测量</gd>、时序数据库)是个麻烦。BDT 连续不跳,作为授时源更"省心"。</p>',
    how:
      '<ul>' +
      '<li><strong>和 UTC 的关系</strong>:BDT 与 UTC 相差一个<strong>已知的整秒数</strong>(因为 BDT 起算后 UTC 又加过若干闰秒),外加纳秒级的微小偏差。设备里都内置了换算,日常看到的还是正常时间。</li>' +
      '<li><strong>怎么用</strong>:卫星把时间信息播下来,地面授时设备接收后输出标准时间和秒脉冲(1PPS),供全站设备对齐。</li>' +
      '</ul>' +
      '<div class="ex">所以你手机显示的时间和 BDT 并不是同一个"数",但差多少是确定的、已被换算好。对你无感,对授时设备则要分得清清楚楚。</div>',
    pitfalls:
      '<div class="pit"><b>误解:北斗时间和北京时间一样。</b>北京时间是 UTC+8 的民用时间;BDT 是系统内部基准,和 UTC 差着整数秒。设备会换算,但做精密授时时不能把它们混为一谈。</div>',
    links:
      '<p>· 这个时间怎么"送"到地面设备?下一课《授时原理》。<br>· 闰秒、连续时间对电力的影响,见模块 5《授时与同步》。'
  }
});
