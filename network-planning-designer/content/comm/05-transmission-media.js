NPD.registerLesson({
  id: 'comm/05-transmission-media',
  module: 'comm',
  order: 5,
  title: '传输介质:有线与无线',
  minutes: 4,
  keywords: ['传输介质', '双绞线', '同轴', '光纤', '无线', '分类'],
  concept: '<p>传输介质分<b>导引型(有线)</b>与<b>非导引型(无线)</b>两大类。选介质看距离、速率、成本与抗干扰。</p>' +
    '<div class="ex">网线进办公室,光纤跑骨干,无线覆盖移动——各管一段。</div>',
  exam: '<p><b>频度:中。</b>常考介质分类、光纤单/多模区分、各类线缆适用场景。</p>',
  core: '<p><b>有线介质:</b></p>' +
    '<ul>' +
    '<li><b><gd data-term="twisted-pair">双绞线</gd></b>:UTP(非屏蔽)常用网线,分类 Cat5e/6/6a 等;STP 抗干扰强。百米内主流。</li>' +
    '<li><b>同轴电缆</b>:曾用于以太网与有线电视,现渐少。</li>' +
    '<li><b><gd data-term="fiber">光纤</gd></b>:带宽极大、抗干扰、远距。单模远距干线,多模短距楼宇。</li>' +
    '</ul>' +
    '<p><b>无线介质:</b>无线电、微波、红外、激光、卫星。灵活但易受干扰、安全性需加密。</p>' +
    '<p class="ex">单模芯细传单一模式光,色散小、传得远;多模芯粗传多模式,色散大、距离近。</p>',
  pitfalls: '<div class="pit"><b>易混:单模 vs 多模。</b>单模"一条直线射到底"传得远,多模"多路反射"传得近。</div>' +
    '<div class="pit"><b>易混:双绞线分类。</b>Cat 数字越大支持速率越高(Cat5e 千兆、Cat6 更高),不是"几类线就是几兆"。</div>',
  quiz: [
    { type: 'choice', q: '下列介质中带宽最大、抗干扰最强的是?', options: ['非屏蔽双绞线', '同轴电缆', '光纤', '无线电'], answer: 2, source: '基础', explain: '光纤带宽大、抗电磁干扰、传得远。' },
    { type: 'choice', q: '长途干线光纤通常采用?', options: ['多模光纤', '单模光纤', '屏蔽双绞线', '同轴电缆'], answer: 1, source: '基础', explain: '单模色散小、距离远,用于长途干线。' },
    { type: 'choice', q: '关于双绞线"绞合"的作用,正确的是?', options: ['增加强度', '抵消外部电磁干扰', '提高速率上限', '减少成本'], answer: 1, source: '理解', explain: '两线绞合抵消外界干扰。' }
  ],
  links: '<p>上一课:<a href="#/l/comm/04-nyquist-shannon">奈氏与香农</a> · 进入体系结构:<a href="#/l/arch/01-osi">OSI 模型</a></p>'
});
