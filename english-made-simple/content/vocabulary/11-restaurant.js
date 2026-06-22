/* 词汇模块第 11 课:场景词包·餐厅。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-11-restaurant',
  module: 'vocab',
  order: 11,
  title: '场景词包·餐厅点餐',
  minutes: 5,
  keywords: ['餐厅', 'restaurant', '点餐', '点单', '吃饭', '场景词包', '小费'],

  sections: {
    what: '\
<p><strong>一句话:在美国餐厅吃一顿饭,从带位到买单有一套固定流程和高频词——记住这组"词包",点餐全程不慌。</strong></p>\
<p>场景词包就是"打包一个场景里要用的词和句"。这一课把餐厅从进门到离开的关键词、关键句配齐,可点读跟读。</p>',

    when: '\
<p>下馆子、点外卖、咖啡店、快餐店——美国生活最高频的场景之一。</p>',

    how: '\
<p><strong>关键词(点击听):</strong></p>\
<div class="ex"><en>menu</en> 菜单 · <en>appetizer</en> 前菜 · <en>main course</en> 主菜 · <en>dessert</en> 甜点 · <en>beverage</en> 饮料 · <en>check</en> 账单(美式)· <en>tip</en> 小费 · <en>to go</en> 打包带走 · <en>for here</en> 堂食</div>\
<p><strong>关键句,按流程走(点击听整句):</strong></p>\
<table>\
<tr><th>谁说</th><th>句子</th></tr>\
<tr><td>服务员</td><td><en>How many people?</en> 几位?</td></tr>\
<tr><td>服务员</td><td><en>Are you ready to order?</en> 可以点单了吗?</td></tr>\
<tr><td>你</td><td><en>Could I get the cheeseburger?</en> 我要一个芝士汉堡</td></tr>\
<tr><td>你</td><td><en>What do you recommend?</en> 有什么推荐?</td></tr>\
<tr><td>你</td><td><en>Can I have the check, please?</en> 麻烦结账</td></tr>\
</table>\
<div class="ex">💡 美国餐厅文化:堂食通常要给 <strong>15–20% 小费(tip)</strong>;账单美式叫 <en>check</en>(英式叫 bill);服务员会主动加水、问 "How is everything?"。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:忘了小费。</b>美国正餐堂食不给小费很失礼,通常 15–20%。快餐/自取一般不用。</div>\
<div class="pit"><b>坑 2:用 bill 要账单。</b>美式说 <en>check</en>("Can I have the check?")。bill 是英式,在美国也懂但 check 更地道。</div>\
<div class="pit"><b>坑 3:点单太生硬。</b>"I want a burger" 略冲。地道是 "<en>Could I get…</en>" 或 "<en>I\'ll have…</en>",更礼貌自然。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国餐厅,"账单"最地道的说法是?',
      options: ['bill', 'check', 'paper', 'money'],
      answer: 1,
      explain: '美式用 check("Can I have the check?")。bill 是英式说法。'
    },
    {
      type: 'choice',
      q: '美国正餐堂食的小费一般是多少?',
      options: ['不用给', '5% 左右', '15–20%', '50%'],
      answer: 2,
      explain: '美国正餐堂食通常给 15–20% 小费,这是重要的餐厅文化,不给会显得失礼。'
    },
    {
      type: 'fill',
      q: '点餐时比 "I want…" 更礼貌的开头是 "Could I ____…"。',
      answer: ['get', 'have'],
      explain: '"Could I get…" 或 "I\'ll have…" 比 "I want" 自然礼貌得多。'
    }
  ]
});
