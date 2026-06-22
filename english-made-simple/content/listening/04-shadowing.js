/* 听力模块第 4 课:影子跟读法。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'listen-04-shadowing',
  module: 'listen',
  order: 4,
  title: '影子跟读法:听说一起练',
  minutes: 5,
  keywords: ['影子跟读', 'shadowing', '跟读', '听力', '口语', '方法'],

  sections: {
    what: '\
<p><strong>一句话:影子跟读(shadowing)就是音频响起、你像影子一样紧跟着同步复述——听力和口语一起练,还能内化连读、节奏、语调。</strong></p>\
<p>为什么有效?当你必须"跟上"母语者的速度和节奏,大脑被迫去捕捉那些连读、弱读、重音——这正是听不懂的根源。能跟着说出来,就更能听出来。这是听说双修的王牌方法。</p>',

    when: '\
<p>有了一点基础后用。它比单纯听更主动、更累,但进步也更快,尤其改善"中式节奏"。</p>',

    how: '\
<p><strong>影子跟读四步:</strong></p>\
<table>\
<tr><th>步骤</th><th>做什么</th></tr>\
<tr><td>① 先听懂</td><td>挑一小段,先看文本听懂、扫清生词</td></tr>\
<tr><td>② 同步跟</td><td>播放音频,延迟半句紧跟着说,模仿语音语调</td></tr>\
<tr><td>③ 抠节奏</td><td>重点模仿重音、连读、停顿,不只是念字</td></tr>\
<tr><td>④ 脱稿跟</td><td>不看文本也能跟下来,就内化了</td></tr>\
</table>\
<div class="ex">🎯 用本站的点读练微型 shadowing:点 <en>What are you up to this weekend?</en><button class="say-all" data-say="What are you up to this weekend?">▶ 听</button> 然后立刻模仿它的连读和语调复述一遍。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:只念字不模仿节奏。</b>shadowing 的精华是复制重音、连读、语调,不是把单词念对就行。要"像"。</div>\
<div class="pit"><b>坑 2:材料太长太难。</b>选 30 秒到 1 分钟、能听懂的短材料,反复跟,比硬跟长难材料有效。</div>\
<div class="pit"><b>坑 3:不出声"默跟"。</b>必须出声!嘴部肌肉的训练正是它区别于普通听力的价值。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '影子跟读(shadowing)为什么同时提升听力?',
      options: ['因为要背单词', '为了跟上,大脑被迫捕捉连读/弱读/重音', '因为速度慢', '因为有字幕'],
      answer: 1,
      explain: '被迫跟上母语者节奏,就得捕捉那些"听不懂的根源"——连读弱读重音,能说出就更能听出。'
    },
    {
      type: 'choice',
      q: '做 shadowing 时最重要的是?',
      options: ['念对每个单词就行', '出声并模仿重音、连读、语调', '默默在心里跟', '速度越慢越好'],
      answer: 1,
      explain: '必须出声,且重点模仿节奏(重音/连读/语调),而不只是把字念对。'
    }
  ]
});
