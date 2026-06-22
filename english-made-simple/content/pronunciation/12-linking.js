/* 第 12 课:连读 linking。发音路线收官课,也是首页打头课。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-12-linking',
  module: 'pron',
  order: 12,
  title: '连读:not at all 为什么像 no-da-dall',
  minutes: 5,
  keywords: ['连读', 'linking', 'liaison', 'not at all', '听不懂', '连音'],

  sections: {
    what: '\
<p><strong>一句话:美国人说话时不是一个词一个词蹦,而是把相邻的词"粘"在一起读——上个词的尾巴接到下个词的脑袋上。</strong></p>\
<p>这就是为什么 <en>not at all</en> 听起来像 "no-da-dall":not 的 t 接上 at 的元音、浊化成 d,at 又接 all……三个词糊成一片。连读是听力"明明每个词都认识,连起来就懵"的最大元凶,也是发音路线的收官硬骨头。</p>',

    when: '\
<p>只要说一句完整的话,连读就无处不在。它和前几课(浊化、失爆、弱读)是一套组合拳:重音立骨架,弱读填缝隙,连读把它们粘成流水。</p>',

    how: '\
<p>三种最常见的"粘法",点击整句体会:</p>\
<table>\
<tr><th>规律</th><th>例子</th><th>听起来像</th><th>点击</th></tr>\
<tr><td>辅音 + 元音:辅音滑过去</td><td>an apple</td><td>a-napple</td><td><en>an apple</en></td></tr>\
<tr><td>辅音 + 元音</td><td>pick it up</td><td>pi-ki-tup</td><td><en>pick it up</en></td></tr>\
<tr><td>元音 + 元音:中间加滑音</td><td>go away</td><td>go-w-away</td><td><en>go away</en></td></tr>\
<tr><td>元音 + 元音</td><td>I am</td><td>I-y-am</td><td><en>I am</en></td></tr>\
<tr><td>相同/相近辅音:并成一个</td><td>this Sunday</td><td>thi-Sunday</td><td><en>this Sunday</en></td></tr>\
</table>\
<div class="ex">🎯 招牌句:<en>not at all</en><button class="say-all" data-say="not at all">▶ 听</button> → "no-da-dall"。<br>\
再来一句日常:<en>What are you up to?</en><button class="say-all" data-say="What are you up to?">▶ 听</button> → 像 "Wha-da-ya up-to"。</div>\
<div class="ex">💡 别急着自己连。先<strong>练耳</strong>:反复点读、跟读模仿,让耳朵习惯"粘"的感觉。说得多了,连读会自然发生,不用刻意拼接。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:逐词清晰地蹦。</b>把 <en>not at all</en> 一字一顿念成三个清楚的词,正是中式英语听感的来源。让它们粘起来。</div>\
<div class="pit"><b>坑 2:听力总想"切词"。</b>大脑非要把声音切成一个个独立单词就会卡壳。接受"它们本来就是连着的",反而听得懂。</div>\
<div class="pit"><b>坑 3:为连读而连读。</b>连读是说顺了自然产生的,不是硬把词挤在一起。先慢、先准、先跟读,流畅度会自己长出来。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"not at all" 听起来像 "no-da-dall" 主要是因为?',
      options: ['说话人发音不标准', '连读 + t 浊化把三个词粘在一起', '省略了 at', '美式拼写不同'],
      answer: 1,
      explain: 'not 的 t 接 at 的元音浊化成 d,词与词连读粘合,于是 "not at all" → "no-da-dall"。'
    },
    {
      type: 'choice',
      q: '"an apple" 为什么听起来像 "a-napple"?',
      options: ['n 被省略了', 'an 的辅音 n 滑接到 apple 的元音上', '重音变了', 'apple 少了一个 p'],
      answer: 1,
      explain: '辅音结尾(n)+ 元音开头(a)→ 辅音滑过去连读,an-apple 粘成 "a-napple"。'
    },
    {
      type: 'fill',
      q: '想练好连读,第一步应该先练"____"(填:耳 或 嘴),靠跟读模仿。',
      answer: ['耳', '耳朵'],
      explain: '先练耳:反复跟读模仿,让耳朵习惯"粘"的感觉,流畅的口语连读会自然长出来。'
    }
  ]
});
