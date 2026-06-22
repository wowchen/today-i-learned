/* 听力模块第 1 课:为什么听不懂。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'listen-01-why',
  module: 'listen',
  order: 1,
  title: '为什么学过的词也听不懂',
  minutes: 5,
  keywords: ['听力', '听不懂', 'listening', '连读', '弱读', '语速'],

  sections: {
    what: '\
<p><strong>一句话:听不懂往往不是词不认识,而是"耳朵里的样子"和"书上的样子"对不上——连读、弱读、浊化、缩读把单词揉变形了。</strong></p>\
<p>你认识 <en>not</en>、<en>at</en>、<en>all</en> 三个词,但连起来 <en>not at all</en> 听着像 "no-da-dall"(回顾发音第 12 课),大脑切不开,就懵了。听力的第一步,是承认"听到的"本来就和"写的"不一样。</p>',

    when: '\
<p>每次"每个词都认识但整句没听懂"时,就是这几个原因在作怪。先诊断,再对症。</p>',

    how: '\
<p><strong>听不懂的四大元凶(都在发音模块讲过,这里串起来):</strong></p>\
<table>\
<tr><th>元凶</th><th>现象</th><th>例</th></tr>\
<tr><td>连读</td><td>词与词粘一起</td><td><en>an apple</en> → a-napple</td></tr>\
<tr><td>弱读</td><td>虚词糊成 /ə/</td><td><en>a cup of tea</en> → cup-ə-tea</td></tr>\
<tr><td>浊化/失爆</td><td>t/d 变软或卡住</td><td><en>water</en> → wader</td></tr>\
<tr><td>缩读</td><td>词组压扁</td><td><en>going to</en> → gonna</td></tr>\
</table>\
<div class="ex">🎯 还有两个常被忽略:① <strong>语速</strong>——正常美语语速比教材快得多;② <strong>背景知识</strong>——不熟悉话题时更难听。这两个靠"多听+多了解"解决。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:以为是词汇量不够,猛背单词。</b>很多时候词都认识,是"听音"没跟上。该练的是耳朵适应连读弱读,不是再背 1000 个词。</div>\
<div class="pit"><b>坑 2:听不懂就反复听同一遍。</b>听三遍还不懂,要看文本(transcript)对照,找出"哪个音被吞了",这叫精听(下一课)。</div>\
<div class="pit"><b>坑 3:一上来挑战高难度。</b>听 CNN 新闻当起步只会挫败。从慢速、熟悉话题入手,循序渐进。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"每个词都认识,但整句没听懂",最可能的原因是?',
      options: ['词汇量太小', '连读弱读把单词揉变形了', '语法不会', '耳朵有问题'],
      answer: 1,
      explain: '多半是连读/弱读/浊化/缩读让"听到的样子"和"书上的样子"对不上,不是词不认识。'
    },
    {
      type: 'choice',
      q: '听一段材料三遍还听不懂,接下来最该做的是?',
      options: ['再听十遍', '对照文本找出被吞掉的音', '放弃这段', '调到两倍速'],
      answer: 1,
      explain: '反复听无效时,看 transcript 对照,定位"哪个音变形/被吞",这是精听的核心。'
    },
    {
      type: 'fill',
      q: '听力四大元凶里,把 going to 压成 gonna 的现象叫 ____。',
      answer: ['缩读', '缩读contractions'],
      explain: '缩读:going to→gonna、want to→wanna。回顾发音模块第 16 课。'
    }
  ]
});
