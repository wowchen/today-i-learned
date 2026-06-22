/* 文化模块第 1 课:美式 vs 英式。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-01-us-uk',
  module: 'culture',
  order: 1,
  title: '美式 vs 英式:到底差在哪',
  minutes: 5,
  keywords: ['美式英语', '英式英语', 'American', 'British', '差异', '文化'],

  sections: {
    what: '\
<p><strong>一句话:美式和英式英语在拼写、词汇、发音上都有差异——本站全程以美式为准,这一课帮你认清差异,听到英式也不蒙。</strong></p>\
<p>两者能互相听懂,但混用会让人觉得"不统一"。前面各模块零散提过(color/colour、check/bill),这一课系统归纳,让你心里有数:该跟哪套。</p>',

    when: '\
<p>选学习材料、写作选词、听到不同口音时。原则:一致性最重要,认准一套(本站=美式)。</p>',

    how: '\
<p><strong>三大差异维度(点击听美式):</strong></p>\
<table>\
<tr><th>维度</th><th>美式 ✔</th><th>英式</th></tr>\
<tr><td>拼写 -or/-our</td><td><en>color</en></td><td>colour</td></tr>\
<tr><td>拼写 -er/-re</td><td><en>center</en></td><td>centre</td></tr>\
<tr><td>词汇·秋天</td><td><en>fall</en></td><td>autumn</td></tr>\
<tr><td>词汇·公寓</td><td><en>apartment</en></td><td>flat</td></tr>\
<tr><td>词汇·电梯</td><td><en>elevator</en></td><td>lift</td></tr>\
<tr><td>词汇·薯条</td><td><en>fries</en></td><td>chips</td></tr>\
<tr><td>发音·卷舌 r</td><td>卷(<en>car</en>)</td><td>不卷</td></tr>\
</table>\
<div class="ex">🎯 发音最大区别就是卷舌(回顾发音第14课):美音 <en>car</en>、<en>water</en> 的 r 要卷,英音不卷。这是一耳朵就能分辨的招牌。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:英美混用。</b>一篇里 color 和 colour、fall 和 autumn 混着来,显得不专业。认准一套(本站美式),全程统一。</div>\
<div class="pit"><b>坑 2:以为只有口音不同。</b>词汇差异也很大:同一个东西 elevator/lift、fries/chips。点餐购物时尤其要注意。</div>\
<div class="pit"><b>坑 3:觉得英式更"高级"。</b>没有高下,只是不同。在美国就用美式,入乡随俗,沟通最顺。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美式英语里"秋天"是?',
      options: ['autumn', 'fall', 'harvest', 'cold'],
      answer: 1,
      explain: '美式用 fall,英式用 autumn(两者美国人也都懂,但 fall 更地道美式)。'
    },
    {
      type: 'choice',
      q: '一耳朵分辨美音和英音,最明显的线索是?',
      options: ['语速', '词尾 r 卷不卷舌', '音量', '语法'],
      answer: 1,
      explain: '美音是卷舌的(car/water 的 r 要卷),英音不卷。这是最明显的发音招牌。'
    },
    {
      type: 'fill',
      q: '"电梯"美式说 ____,英式说 lift。',
      answer: ['elevator'],
      explain: 'elevator(美)/ lift(英)。类似的还有 apartment/flat、fries/chips。'
    }
  ]
});
