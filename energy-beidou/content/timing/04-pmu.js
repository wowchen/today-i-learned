EBD.registerLesson({
  id: 'timing-04-pmu',
  module: 'timing',
  order: 4,
  title: 'PMU 与 WAMS:给电网做"同步心电图"',
  minutes: 5,
  key: '同步测量',
  keywords: ['PMU', 'WAMS', '同步相量', '广域测量', '心电图'],
  sections: {
    what:
      '<p><gd data-term="pmu">PMU(同步相量测量装置)</gd>装在各厂站,把当地的电压、电流等量测出来,<strong>每一个数都打上统一的精准时标</strong>。许多 PMU 联网,就组成 <gd data-term="wams">WAMS(广域测量系统)</gd>——相当于给整张电网同时做一份"同步心电图"。</p>',
    why:
      '<p>传统监测各点"各拍各的",时间对不齐,没法直接比较。PMU 的革命性在于<strong>"同一时刻"</strong>:因为全网都对准北斗的时间,相隔上千公里的两个点,其电气量可以放在同一时间轴上比较,从而看清全网的动态、振荡、稳定性。这对新能源大量接入后的电网尤其关键。</p>',
    how:
      '<ul>' +
      '<li><strong>同步靠授时</strong>:每台 PMU 接<gd data-term="shoushi">北斗授时</gd>(优于 1 微秒),保证全网时标统一。</li>' +
      '<li><strong>高频上报</strong>:每秒几十次把带时标的相量送到主站。</li>' +
      '<li><strong>广域分析</strong>:主站汇集全网 PMU 数据,实时看潮流、振荡、扰动传播。</li>' +
      '</ul>' +
      '<div class="ex">没有统一授时,WAMS 就成了一堆"各对各表的心电图",根本拼不出全网的同步节律。授时是它的命根子。</div>',
    pitfalls:
      '<div class="pit"><b>误解:PMU 就是个更快的测量表。</b>它的灵魂是"<strong>同步</strong>"二字——带统一时标的相量才有跨站可比性。没有微秒级授时,PMU 就退化成普通遥测。</div>',
    links:
      '<p>· 另一个微秒级刚需:下一课《线路差动保护》。<br>· 这套同步为什么不敢只靠 GPS,见《为什么不能把授时全押在 GPS 上》。'
  }
});
