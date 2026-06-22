/* 第 17 课:语调(intonation)。架构点名"语调节奏"。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-17-intonation',
  module: 'pron',
  order: 17,
  title: '语调:同一句话,升调降调两个意思',
  minutes: 5,
  keywords: ['语调', 'intonation', '升调', '降调', '节奏', '语气'],

  sections: {
    what: '\
<p><strong>一句话:语调就是句子的"音高曲线"——句尾往上扬还是往下落,能让同样的词表达完全不同的意思和情绪。</strong></p>\
<p>中文用"吗/呢"这类字表疑问,英语很多时候靠语调。同样三个词 <en>You are sure</en>,降调是陈述(你确定),升调就成了反问(你确定吗?)。语调是发音模块的"最后一公里",让你从"音准"走到"地道"。</p>',

    when: '\
<p>每说一句话都带语调。掌握几条主线规律,口语立刻有"英语的味道",而不是平平的一条直线。</p>',

    how: '\
<p>四条最实用的规律,点击听(↘ 降 ↗ 升):</p>\
<table>\
<tr><th>句型</th><th>语调</th><th>例句(点击听)</th></tr>\
<tr><td>陈述句</td><td>句尾降 ↘</td><td><en>I live in New York.</en></td></tr>\
<tr><td>特殊疑问(wh-)</td><td>句尾降 ↘</td><td><en>Where are you from?</en></td></tr>\
<tr><td>一般疑问(yes/no)</td><td>句尾升 ↗</td><td><en>Are you ready?</en></td></tr>\
<tr><td>列举(未说完)</td><td>逐项升,最后降</td><td><en>I bought apples, bananas, and milk.</en></td></tr>\
</table>\
<div class="ex">🎯 同句不同调,体会差别:<br>\
<en>Really.</en><button class="say-all" data-say="Really.">▶ 降调</button>(原来如此 / 平淡)　vs　<en>Really?</en><button class="say-all" data-say="Really?">▶ 升调</button>(真的吗?惊讶)</div>\
<div class="ex">💡 记忆口诀:<strong>"问 yes/no 就上扬,其余基本往下落。"</strong>列举时像爬楼梯,最后一阶落地。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:全程一条平直线。</b>每个字一样高,是中式英语最大的"机器人感"来源。敢于让句尾起伏。</div>\
<div class="pit"><b>坑 2:wh- 问句也上扬。</b><en>Where are you going?</en> 该降调收尾。只有 yes/no 问句才升调。升错了听着怪。</div>\
<div class="pit"><b>坑 3:以为语调不重要。</b>同样的词,语调能传达怀疑、惊讶、礼貌、不耐烦。它承载的情绪,有时比词本身还多。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '一般疑问句(yes/no question)如 "Are you ready?" 句尾语调?',
      options: ['降调 ↘', '升调 ↗', '平调', '先升后降'],
      answer: 1,
      explain: 'yes/no 问句句尾升调。口诀:"问 yes/no 就上扬,其余基本往下落。"'
    },
    {
      type: 'choice',
      q: '"Where are you from?" 这种 wh- 特殊疑问句句尾应该?',
      options: ['升调,和 yes/no 一样', '降调', '不变化', '看心情'],
      answer: 1,
      explain: 'wh- 特殊疑问句句尾降调,和陈述句一样。只有 yes/no 问句才升调。'
    },
    {
      type: 'fill',
      q: '"Really" 用____调(升/降)表示惊讶的"真的吗?"。',
      answer: ['升', '升调'],
      explain: '升调 Really? = 惊讶反问;降调 Really. = 平淡的"原来如此"。语调改变了意思。'
    }
  ]
});
