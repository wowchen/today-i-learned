/* 文化模块第 5 课:网络与短信缩略语。架构点名补的盲区。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-05-textspeak',
  module: 'culture',
  order: 5,
  title: '网络与短信缩略语:lol btw asap',
  minutes: 5,
  keywords: ['缩略语', 'abbreviation', '网络用语', 'lol', 'btw', 'asap', '短信', '文化'],

  sections: {
    what: '\
<p><strong>一句话:发短信、网上聊天时,美国人爱用一堆字母缩略语(lol、btw、asap)——看不懂就一脸懵,认得了聊天就跟得上。</strong></p>\
<p>这些缩略语在短信、社交媒体、群聊里铺天盖地,但课本几乎不教。这一课给你一份高频清单,重点"看懂",自己用时挑常见的。</p>',

    when: '\
<p>发短信、用社交媒体、网络聊天、看评论时。注意:正式邮件和正式写作里不用。</p>',

    how: '\
<p><strong>最高频缩略语清单:</strong></p>\
<table>\
<tr><th>缩略</th><th>全写 / 意思</th></tr>\
<tr><td>lol</td><td>laughing out loud(哈哈)</td></tr>\
<tr><td>btw</td><td>by the way(顺便说)</td></tr>\
<tr><td>asap</td><td>as soon as possible(尽快)</td></tr>\
<tr><td>idk</td><td>I don\'t know(不知道)</td></tr>\
<tr><td>omg</td><td>oh my god(天哪)</td></tr>\
<tr><td>thx / ty</td><td>thanks / thank you</td></tr>\
<tr><td>brb</td><td>be right back(马上回来)</td></tr>\
<tr><td>fyi</td><td>for your information(供参考)</td></tr>\
<tr><td>np</td><td>no problem(没问题)</td></tr>\
<tr><td>imo</td><td>in my opinion(我觉得)</td></tr>\
</table>\
<div class="ex">💡 还有数字/符号梗:<en>2</en>=to/too、<en>4</en>=for、<en>u</en>=you、<en>r</en>=are。"<en>see u l8r</en>" = see you later。看懂即可,正式场合别这么写。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:正式邮件里用 lol/u/thx。</b>这些只用于私人短信和网聊。给老板、老师、正式邮件要写完整词。</div>\
<div class="pit"><b>坑 2:fyi/asap 用错语气。</b>asap、fyi 在职场短讯里有时显得急或冷,看关系用。私人聊天没问题。</div>\
<div class="pit"><b>坑 3:乱用不熟的缩略。</b>有些缩略含义随群体变化,拿不准的别跟风用,先看懂再说。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '短信里的 "btw" 是什么意思?',
      options: ['between(在…之间)', 'by the way(顺便说)', 'be there with(和…一起)', 'back to work(回去工作)'],
      answer: 1,
      explain: 'btw = by the way(顺便说一句)。网络短信高频缩略。'
    },
    {
      type: 'choice',
      q: '关于网络缩略语(lol/u/thx),正确的是?',
      options: ['正式邮件也能用', '只用于私人短信/网聊,正式场合用完整词', '是错误英语', '只有老年人用'],
      answer: 1,
      explain: '缩略语用于私人短信和网聊;正式邮件、正式写作要用完整词。'
    },
    {
      type: 'fill',
      q: '"尽快"的缩略语是 ____(四个字母)。',
      answer: ['asap', 'ASAP'],
      explain: 'asap = as soon as possible(尽快)。'
    }
  ]
});
