EBD.registerLesson({
  id: 'timing-02-levels',
  module: 'timing',
  order: 2,
  title: '同步要多准:从毫秒到纳秒',
  minutes: 4,
  keywords: ['授时精度', '毫秒', '微秒', '纳秒', '等级', '同步'],
  sections: {
    what:
      '<p>不是所有电力应用都要"纳秒级"。<gd data-term="shoushijingdu">授时精度</gd>按用途分档:有的毫秒够用,有的非微秒不可,极少数追到几十纳秒。搞清这个梯度,才知道哪儿该上高精度授时。</p>',
    how:
      '<table><tr><th>精度档</th><th>典型应用</th><th>说明</th></tr>' +
      '<tr><td>秒~毫秒</td><td>调度自动化、抄表、日志</td><td>知道大致时刻即可</td></tr>' +
      '<tr><td>1 毫秒左右</td><td><gd data-term="soe">SOE</gd> 事件顺序记录</td><td>分清事件先后</td></tr>' +
      '<tr><td>优于 1 微秒</td><td><gd data-term="pmu">PMU</gd>、行波测距、<gd data-term="chadong">差动保护</gd></td><td>电力授时的"硬指标"</td></tr>' +
      '<tr><td>几十纳秒</td><td>高端同步、科研观测</td><td>北斗单向授时即可达到</td></tr></table>' +
      '<div class="ex">一个直觉:电以接近光速传播,1 微秒对应约 300 米。行波测距要靠两端时间差定位故障点,时间差 1 微秒,定位就偏几百米——所以"优于 1 微秒"是道硬门槛。</div>',
    why:
      '<p>北斗单向授时本就能到<strong>几十纳秒</strong>,远超电力"优于 1 微秒"的常规要求。也就是说,授时精度上北斗<strong>绰绰有余</strong>;工程上更操心的反而是稳定性、可靠性和抗干扰(后面几课)。</p>',
    pitfalls:
      '<div class="pit"><b>误解:精度越高越好,全站都上纳秒。</b>按需选型才经济。给抄表系统上纳秒授时是浪费;给差动保护用毫秒级则是隐患。对症下药。</div>',
    links:
      '<p>· 毫秒级的代表:下一课《故障录波与 SOE》。<br>· 微秒级的代表:《PMU 与 WAMS》《线路差动保护》。'
  }
});
