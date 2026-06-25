EBD.registerLesson({
  id: 'message-04-report',
  module: 'message',
  order: 4,
  title: '应急指挥与位置上报',
  minutes: 4,
  keywords: ['应急', '指挥', '位置上报', '调度', '协同'],
  sections: {
    what:
      '<p><gd data-term="duanbaowen">短报文</gd>有个天然优势:消息<strong>自带位置</strong>。这让它特别适合应急指挥——前方人员发一条短报文,后方就同时知道"<strong>谁、在哪、什么情况</strong>"。</p>',
    why:
      '<p>应急抢险最怕"<strong>失联</strong>":队伍进了无网的灾区或深山,指挥部看不到他们在哪、进展如何,既难调度又有安全风险。短报文位置上报让前后方<strong>始终连着线</strong>:人员位置实时回传、险情即时上报、指令下达可达,大大提升协同效率和人员安全。</p>',
    how:
      '<ul>' +
      '<li><strong>位置回传</strong>:抢险队、巡线员定时或按需发位置,指挥部一张图掌握全局。</li>' +
      '<li><strong>险情上报</strong>:发现险情,一条短报文带位置发回,后方快速研判调度。</li>' +
      '<li><strong>指令下达</strong>:后方可下行指令或确认,形成双向联络。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:有手机定位共享就够了,何必短报文。</b>手机定位共享<strong>要有公网</strong>。一旦进了无网区或灾后断网,它就失灵——而那恰恰是最需要位置上报的时候。短报文不靠公网,这是它不可替代的地方。</div>',
    links:
      '<p>· 和实时语音的卫星电话怎么配合:下一课《短报文 vs 卫星电话》。<br>· 灾害整体应急,见《灾害应急》。'
  }
});
