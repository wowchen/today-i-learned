EBD.registerLesson({
  id: 'timing-03-soe',
  module: 'timing',
  order: 3,
  title: '故障录波与 SOE:谁先谁后差几微秒',
  minutes: 4,
  keywords: ['SOE', '故障录波', '事件顺序', '时标', '复盘'],
  sections: {
    what:
      '<p>电网出事后要"复盘破案",靠两类记录:<gd data-term="guzhangluobo">故障录波</gd>(记录电压电流波形,像"行车记录仪")和 <gd data-term="soe">SOE 事件顺序记录</gd>(给每个开关动作、信号变位盖上精确时标)。复盘的关键,是把它们<strong>按真实时间顺序拼起来</strong>。</p>',
    why:
      '<p>事故是连锁反应:可能是"A 跳闸 → 引起 B 过载 → C 才动作"。如果各装置时标对不齐,顺序就拼错,可能把"被牵连的"当成"元凶",整改方向全错。<strong>统一授时,是事故分析能还原真相的前提。</strong></p>',
    how:
      '<ul>' +
      '<li><strong>统一时标</strong>:各录波器、测控装置都接同一个<gd data-term="shoushi">授时</gd>源(北斗),记录的时间才可比。</li>' +
      '<li><strong>SOE 精度</strong>:常要求毫秒级,才能分清紧挨着发生的事件先后。</li>' +
      '<li><strong>拼时间线</strong>:把全站、跨站的记录按统一时标排序,还原"第一推动力"。</li>' +
      '</ul>' +
      '<div class="ex">没有统一授时,就像几个目击者各看各的表做笔录,时间对不上,警察永远理不清案发顺序。</div>',
    pitfalls:
      '<div class="pit"><b>误解:每台装置自带时钟就够了。</b>各自的晶振会慢慢走偏(漂移),几小时就能差出毫秒甚至更多。必须靠外部授时<strong>定期校准</strong>,大家才一直对得齐。</div>',
    links:
      '<p>· 比 SOE 更高精度的同步:下一课《PMU 与 WAMS》。<br>· 时钟会漂、信号会断怎么办,见《守时与驯钟》。'
  }
});
