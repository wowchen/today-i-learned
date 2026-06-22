/* 口语模块第 1 课:开口心理关。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-01-mindset',
  module: 'speak',
  order: 1,
  title: '开口关:从不敢说到敢说',
  minutes: 5,
  keywords: ['口语', '开口', '不敢说', 'mindset', '心理', '哑巴英语'],

  sections: {
    what: '\
<p><strong>一句话:很多人卡在口语,不是不会,是不敢——怕出错、怕口音、怕被笑。先过了这道心理关,后面的句型表达才用得上。</strong></p>\
<p>"哑巴英语"的根子,常是追求完美:憋着想说出完整正确的句子,结果一句没说出口。真相是:<strong>母语者根本不在乎你的语法小错和口音,他们只想听懂你的意思。</strong></p>',

    when: '\
<p>每次想开口又咽回去的瞬间。这一课是整个口语模块的地基:观念不转,技巧白学。</p>',

    how: '\
<p><strong>四个松绑的认知:</strong></p>\
<table>\
<tr><th>别再…</th><th>改成…</th></tr>\
<tr><td>追求完美句子</td><td>先把意思说出去,错了再补</td></tr>\
<tr><td>怕口音</td><td>口音没关系,能听懂就行(全世界都有口音)</td></tr>\
<tr><td>在脑子里翻译完才说</td><td>用学过的简单句直接说</td></tr>\
<tr><td>等"准备好了"再开口</td><td>开口本身就是准备,边说边进步</td></tr>\
</table>\
<div class="ex">🎯 救命三句,先背熟,卡住时随时用(点击听):<br>\
<en>Sorry, my English is not perfect.</en>(对方立刻会更耐心)<br>\
<en>How do you say this in English?</en>(直接问)<br>\
<en>Could you say that again?</en>(没听懂就请重复)</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:错一个词就重来。</b>母语者也会说错、改口。说错了顺势补一句就行,别推倒重说,更别因此闭嘴。</div>\
<div class="pit"><b>坑 2:憋长难句。</b>想用从句、虚拟语气一鸣惊人,反而卡死。先用最简单的句子把意思传到,简单不丢人。</div>\
<div class="pit"><b>坑 3:怕冷场不敢问。</b>没听懂就说 "Sorry?" 或 "Could you repeat that?"。问比假装懂强一百倍。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"哑巴英语"最常见的根源是?',
      options: ['词汇量太小', '怕出错、追求完美而不敢开口', '语法没学', '没有外教'],
      answer: 1,
      explain: '多数人是不敢说,不是不会说。怕错、怕口音、追求完美句子,把话憋回去了。'
    },
    {
      type: 'choice',
      q: '说话时说错了一个词,最好的处理是?',
      options: ['整句推倒重说', '顺势补一句改过来,继续说', '闭嘴不说了', '道歉很久'],
      answer: 1,
      explain: '母语者也会改口。顺势纠正继续说即可,别因小错闭嘴或推翻重来。'
    },
    {
      type: 'fill',
      q: '没听清对方的话,可以礼貌地说 "Could you ____ that again?"',
      answer: ['say', 'repeat'],
      explain: '"Could you say/repeat that again?" 请对方重复。问比假装懂好得多。'
    }
  ]
});
