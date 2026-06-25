EBD.registerLesson({
  id: 'timing-07-device',
  module: 'timing',
  order: 7,
  title: '北斗授时装置长什么样、怎么接进站',
  minutes: 4,
  keywords: ['授时装置', '时钟', '1PPS', 'IRIG-B', '主时钟', '对时'],
  sections: {
    what:
      '<p>站里把卫星时间变成全站统一时间的,是一台<strong>授时装置(主时钟)</strong>:天上接北斗天线,机柜里接各种设备,把精准时间"分发"给全站。</p>',
    how:
      '<ul>' +
      '<li><strong>接收</strong>:屋顶北斗天线收信号,主时钟解出标准时间和秒脉冲。</li>' +
      '<li><strong>分发</strong>:通过标准对时接口把时间送给保护、录波、<gd data-term="pmu">PMU</gd>、测控等。常见两种信号:<br>—— <strong>1PPS</strong>:每秒一个极准的脉冲,标记"整秒到"(管"准")。<br>—— <strong>IRIG-B / 网络对时</strong>:告诉设备"现在具体是几年几月几日几时几分几秒"(管"对")。</li>' +
      '<li><strong>多源 + 守时</strong>:好的主时钟同时收北斗(主)和 GPS(备),内置高稳晶振或铷钟<gd data-term="shoushi-hold">守时</gd>,卫星丢了也能撑一段。</li>' +
      '</ul>' +
      '<div class="ex">理解"两路信号"很关键:1PPS 给"<strong>准</strong>"(对齐到微秒的那一跳),IRIG-B 给"<strong>对</strong>"(这一跳是哪一秒)。准 + 对,设备才既知道现在几点、又对得极齐。</div>',
    why:
      '<p>这台不起眼的主时钟,是全站时间的"<strong>总开关</strong>"。它换成北斗,就意味着这座站的授时实现了<gd data-term="zizhukekong">自主可控</gd>;它要是出问题,全站设备的时间一起遭殃——所以它必须高可靠、能守时、能告警。</p>',
    pitfalls:
      '<div class="pit"><b>误解:接根网线对一下网络时间就行。</b>普通网络授时精度远不够。电力要的是硬件级的 1PPS + IRIG-B,精度到微秒,这才是站用主时钟干的活。</div>',
    links:
      '<p>· 卫星信号短时丢失靠什么扛:下一课《守时与驯钟》。<br>· 主时钟的安全防护,见《授时安全:抗干扰与防欺骗》。'
  }
});
