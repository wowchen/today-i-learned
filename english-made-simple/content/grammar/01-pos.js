/* 语法模块第 1 课:八大词类。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-01-pos',
  module: 'grammar',
  order: 1,
  title: '八大词类:英语单词的"工种"',
  minutes: 5,
  keywords: ['词类', '词性', 'parts of speech', '名词', '动词', '形容词', '副词'],

  sections: {
    what: '\
<p><strong>一句话:每个英语单词都有一个"工种"(词类)——名词、动词、形容词……知道一个词是干哪行的,就知道它在句子里该站哪个位置。</strong></p>\
<p>学语法的第一步,是认识这些"工种"。它们像建筑工地上的不同工人:名词是"主角",动词是"动作",形容词给名词化妆,副词给动词化妆。认清分工,后面所有句型、时态都好懂。</p>',

    when: '\
<p>分析任何句子时,先看每个词是什么词类,句子结构立刻清晰。查词典时,词后的 n./v./adj./adv. 就是在标词类。</p>',

    how: '\
<p><strong>八大词类一览(点击听例词):</strong></p>\
<table>\
<tr><th>词类</th><th>干什么</th><th>例</th></tr>\
<tr><td>名词 n.</td><td>人/物/事的名字</td><td><en>dog</en> · <en>love</en> · <en>idea</en></td></tr>\
<tr><td>动词 v.</td><td>动作或状态</td><td><en>run</en> · <en>is</en> · <en>think</en></td></tr>\
<tr><td>形容词 adj.</td><td>修饰名词</td><td><en>happy</en> · <en>big</en> · <en>red</en></td></tr>\
<tr><td>副词 adv.</td><td>修饰动词/形容词</td><td><en>quickly</en> · <en>very</en></td></tr>\
<tr><td>代词 pron.</td><td>代替名词</td><td><en>I</en> · <en>you</en> · <en>it</en></td></tr>\
<tr><td>介词 prep.</td><td>表方位/关系</td><td><en>in</en> · <en>on</en> · <en>at</en></td></tr>\
<tr><td>连词 conj.</td><td>连接</td><td><en>and</en> · <en>but</en> · <en>because</en></td></tr>\
<tr><td>感叹词 interj.</td><td>表情绪</td><td><en>oh</en> · <en>wow</en></td></tr>\
</table>\
<div class="ex">🎯 一句话拆词类:<en>The happy dog runs quickly.</en><button class="say-all" data-say="The happy dog runs quickly.">▶ 听</button><br>the(冠词)+ happy(形)+ dog(名)+ runs(动)+ quickly(副)。每个词各司其职。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:以为一个词只有一个词类。</b>很多词身兼数职:<en>water</en> 可以是名词(水)也可以是动词(浇水)。看它在句中的位置判断。</div>\
<div class="pit"><b>坑 2:形容词副词不分。</b>形容词修饰名词(a quick car),副词修饰动词(run quickly)。位置和对象不同。</div>\
<div class="pit"><b>坑 3:把冠词漏掉。</b>a/an/the(冠词)在中文里没有对应,中国人最容易漏。它也是一类小词,后面有专课。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"The happy dog runs quickly" 里,quickly 是什么词类?',
      options: ['名词', '形容词', '副词', '动词'],
      answer: 2,
      explain: 'quickly 修饰动词 runs(怎么跑),是副词。形容词 happy 则修饰名词 dog。'
    },
    {
      type: 'choice',
      q: '形容词和副词的区别是?',
      options: ['没区别', '形容词修饰名词,副词修饰动词/形容词', '副词只能放句首', '形容词更长'],
      answer: 1,
      explain: '形容词修饰名词(a big house),副词修饰动词或形容词(run fast / very big)。'
    },
    {
      type: 'fill',
      q: 'in、on、at 这类表示方位关系的词,词类叫 ____词。',
      answer: ['介', '介词'],
      explain: '介词(preposition),表示方位/时间/关系。in/on/at 后面有专门一课。'
    }
  ]
});
