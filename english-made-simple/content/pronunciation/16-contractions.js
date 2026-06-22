/* 第 16 课:缩读(contractions & reductions)。架构点名项。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-16-contractions',
  module: 'pron',
  order: 16,
  title: '缩读:gonna wanna gotta 的真面目',
  minutes: 5,
  keywords: ['缩读', 'contractions', 'reductions', 'gonna', 'wanna', 'gotta', '口语缩略'],

  sections: {
    what: '\
<p><strong>一句话:美国人在快速口语里把常用词组"压扁"——going to → gonna,want to → wanna。这不是俚语,是几乎所有母语者都这么说的正常口语。</strong></p>\
<p>这些缩读在课本里几乎不写,但在美剧、对话、歌词里铺天盖地。听不懂 gonna,不是词汇问题,是没人告诉过你它就是 going to。这一课把最高频的几个挑明。</p>',

    when: '\
<p><strong>只在口语听和说时用;正式写作里仍写完整形式。</strong>这是听力理解的关键拼图——认得它们,一大片"听不懂"瞬间清零。</p>',

    how: '\
<p>最高频的口语缩读(点击听完整 vs 缩读):</p>\
<table>\
<tr><th>完整</th><th>缩读</th><th>例句(点击听)</th></tr>\
<tr><td>going to</td><td>gonna</td><td><en>I am gonna call you.</en></td></tr>\
<tr><td>want to</td><td>wanna</td><td><en>Do you wanna go?</en></td></tr>\
<tr><td>got to / have got to</td><td>gotta</td><td><en>I gotta go now.</en></td></tr>\
<tr><td>have to</td><td>hafta</td><td><en>I hafta work.</en></td></tr>\
<tr><td>kind of</td><td>kinda</td><td><en>It is kinda cold.</en></td></tr>\
<tr><td>let me</td><td>lemme</td><td><en>Lemme see.</en></td></tr>\
<tr><td>give me</td><td>gimme</td><td><en>Gimme a minute.</en></td></tr>\
</table>\
<div class="ex">💡 还有缩写撇号那一类(这些可以写出来):<en>I am → I\'m</en> · <en>do not → don\'t</en> · <en>it is → it\'s</en> · <en>I will → I\'ll</en> · <en>can not → can\'t</en>。点击逐个听。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:在正式写作里写 gonna/wanna。</b>邮件、简历、论文要写完整的 going to / want to。gonna 类只用于口语或很随意的聊天。</div>\
<div class="pit"><b>坑 2:听到 gonna 以为是生词。</b>它就是 going to。把这张"对照表"记进脑子,听力会顺很多。</div>\
<div class="pit"><b>坑 3:can 和 can\'t 听不出。</b>美音里 <en>can</en> 弱读、<en>can\'t</en> 的 t 失爆,区别主要靠元音和重音:can\'t 更重更短。多听对比 <en>I can go</en> / <en>I can\'t go</en>。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '口语里的 "gonna" 其实是哪个词组?',
      options: ['gone to', 'going to', 'want to', 'got to'],
      answer: 1,
      explain: 'gonna = going to。这是母语者正常口语,不是俚语,但写作要写完整形式。'
    },
    {
      type: 'choice',
      q: '关于缩读 wanna / gotta,下面说法对的是?',
      options: ['正式邮件里也该这么写', '只用于口语,写作用完整形式', '是错误英语', '只有年轻人用'],
      answer: 1,
      explain: '缩读是普遍的口语现象,但正式写作必须用 want to / got to 完整形式。'
    },
    {
      type: 'fill',
      q: '"I hafta work" 里的 hafta,完整写法是 ____ ____(两个词)。',
      answer: ['have to', 'haveto'],
      explain: 'hafta = have to。have to 在口语里常被压成 "hafta"。'
    }
  ]
});
