NPD.registerLesson({
  id: 'phy/02-medium-fiber',
  module: 'phy',
  order: 2,
  title: '光纤介质:单模与多模',
  minutes: 4,
  keywords: ['光纤', '单模', '多模', '全反射', '光源', '光收发器'],
  concept: '<p><b><gd data-term="fiber">光纤</gd></b>用光信号传,靠<b>全反射</b>在纤芯中传输。带宽大、衰减小、抗电磁干扰、可远距。</p>' +
    '<div class="ex">单模"一条直线射到底"传得远;多模"多路反射"传得近。</div>',
  exam: '<p><b>频度:中高。</b>常考单/多模区分、光源、适用距离与场景。</p>',
  core: '<p><b>单模 vs 多模:</b></p>' +
    '<table><tr><th>维度</th><th>单模(SMF)</th><th>多模(MMF)</th></tr>' +
    '<tr><td>芯径</td><td>细(约 8–10 μm)</td><td>粗(50/62.5 μm)</td></tr>' +
    '<tr><td>光源</td><td>激光</td><td>LED/VCSEL</td></tr>' +
    '<tr><td>模式</td><td>单一模式</td><td>多模式</td></tr>' +
    '<tr><td>色散</td><td>小</td><td>大</td></tr>' +
    '<tr><td>距离</td><td>远(几十–上百 km)</td><td>近(几百米–2 km)</td></tr>' +
    '<tr><td>用途</td><td>长途干线、城域</td><td>楼宇内、数据中心短距</td></tr></table>' +
    '<p class="ex">光纤链路两端的<b>光收发器</b>(SFP/SFP+)把电信号与光信号互转。</p>',
  pitfalls: '<div class="pit"><b>易混:单模传得远是因为"色散小"。</b>别记成"单模贵所以远"——是物理上模式单一、色散小。</div>' +
    '<div class="pit"><b>易混:多模"多模式"≠ 多根光纤。</b>是指同一根粗纤芯里光有多种传播路径(模式)。</div>',
  quiz: [
    { type: 'choice', q: '下列说法正确的是?', options: ['多模光纤比单模传得远', '单模光纤用激光、传得远', '单模芯径比多模粗', '多模用于长途干线'], answer: 1, source: '基础', explain: '单模芯细、用激光、色散小、距离远。' },
    { type: 'choice', q: '光纤传输依赖的物理现象是?', options: ['电磁感应', '全反射', '衍射', '干涉'], answer: 1, source: '基础', explain: '光在纤芯靠全反射传播。' },
    { type: 'choice', q: '数据中心机房内部短距互连通常选?', options: ['单模光纤', '多模光纤', '同轴电缆', '电话线'], answer: 1, source: '场景', explain: '短距用多模光纤即可。' }
  ],
  links: '<p>上一课:<a href="#/l/phy/01-medium-copper">铜缆介质</a> · 下一课:<a href="#/l/phy/03-coding">物理层编码</a></p>'
});
