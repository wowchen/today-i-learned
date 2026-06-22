/* 口语模块第 12 课:卡壳救场。口语模块收官。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-12-rescue',
  module: 'speak',
  order: 12,
  title: '卡壳救场:不会的词怎么绕过去',
  minutes: 5,
  keywords: ['卡壳', '救场', '不会说', 'paraphrase', '绕过', '口语'],

  sections: {
    what: '\
<p><strong>一句话:说话时突然想不起某个词,别卡死——用"绕着说"(paraphrase)的本事把意思描述出来,母语者照样懂。</strong></p>\
<p>这是口语模块的收官课,也是最实用的"保命技能"。词汇量再大也总有想不起的时候。会绕,就永远不会被一个词卡住整场对话。</p>',

    when: '\
<p>任何"那个词到嘴边却想不起来"的瞬间。这是流利度的安全网。</p>',

    how: '\
<p><strong>绕着说的四招(点击听例句):</strong></p>\
<table>\
<tr><th>招</th><th>怎么用</th><th>例(忘了 "umbrella")</th></tr>\
<tr><td>说功能</td><td>它是干嘛的</td><td><en>the thing you use when it rains</en></td></tr>\
<tr><td>说样子</td><td>它什么样</td><td><en>it\'s like a small roof you hold</en></td></tr>\
<tr><td>用上义词</td><td>用大类词代替</td><td><en>some kind of tool</en></td></tr>\
<tr><td>直接问</td><td>请对方帮你说</td><td><en>What do you call the thing for rain?</en></td></tr>\
</table>\
<div class="ex">🎯 救场万能句,背熟随时用:<br>\
<en>How do you say… you know, the thing that…?</en><br>\
<en>I forgot the word, but it\'s like…</en><br>\
<en>What\'s the word for…?</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:想不起来就卡死沉默。</b>沉默最糟。立刻切换"绕着说",用 the thing that… 描述功能,对话就活了。</div>\
<div class="pit"><b>坑 2:非要等想起那个词。</b>没必要。能让对方懂就行,事后再查那个词。沟通成功 > 用词精确。</div>\
<div class="pit"><b>坑 3:不敢求助。</b>大方问 "What\'s the word for…?",对方往往乐意帮你补上,还顺便学到了词。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '说话时突然想不起某个词,最好的应对是?',
      options: ['沉默直到想起来', '用"绕着说"描述它的功能或样子', '马上结束对话', '换成中文'],
      answer: 1,
      explain: '用 paraphrase(绕着说)描述功能/样子,母语者照样懂,对话不中断。这是关键保命技能。'
    },
    {
      type: 'choice',
      q: '忘了 "umbrella" 这个词,下面哪种绕法有效?',
      options: ['the thing you use when it rains', '沉默', '说中文"伞"', '放弃这句话'],
      answer: 0,
      explain: '描述功能 "the thing you use when it rains",对方立刻能懂,还可能帮你补出 umbrella。'
    },
    {
      type: 'fill',
      q: '直接求助的万能句:"What\'s the ____ for…?"(问某物怎么说)',
      answer: ['word'],
      explain: '"What\'s the word for…?" 直接请对方帮你说出那个词,大方又有效。'
    }
  ]
});
