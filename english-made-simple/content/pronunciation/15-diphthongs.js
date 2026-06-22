/* 第 15 课:双元音(diphthongs)。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-15-diphthongs',
  module: 'pron',
  order: 15,
  title: '双元音:oi oy ou ow,嘴巴会滑动',
  minutes: 5,
  keywords: ['双元音', 'diphthongs', 'oi', 'oy', 'ou', 'ow', '滑动元音'],

  sections: {
    what: '\
<p><strong>一句话:双元音是"一个音里嘴巴从一个形状滑到另一个形状"——起点和终点不一样,中间是连续滑动。</strong></p>\
<p>前面学的短元音嘴型基本不动。双元音不同:发 <en>boy</en> 的时候,嘴从"哦"滑到"衣";发 <en>now</en> 的时候,从"啊"滑到"乌"。听起来圆润、有动感,正是英语好听的地方。</p>',

    when: '\
<p>oi/oy、ou/ow 这些拼写,以及第 4 课见过的 /aɪ/(bite)、/eɪ/(cake)、/oʊ/(go),都是双元音。日常词里到处都是。</p>',

    how: '\
<p>重点练两组新的(点击听,体会嘴巴的"滑动"):</p>\
<table>\
<tr><th>拼写</th><th>发音(嘴型滑动)</th><th>例词(点击听)</th></tr>\
<tr><td>oi / oy</td><td>/ɔɪ/ 哦→衣</td><td><en>boy</en> · <en>toy</en> · <en>coin</en> · <en>noise</en></td></tr>\
<tr><td>ou / ow</td><td>/aʊ/ 啊→乌</td><td><en>now</en> · <en>how</en> · <en>house</en> · <en>out</en></td></tr>\
</table>\
<p>复习前面学过的双元音:</p>\
<table>\
<tr><th>音标</th><th>滑动</th><th>例词</th></tr>\
<tr><td>/aɪ/</td><td>啊→衣</td><td><en>my</en> · <en>time</en> · <en>nice</en></td></tr>\
<tr><td>/eɪ/</td><td>诶→衣</td><td><en>day</en> · <en>make</en></td></tr>\
<tr><td>/oʊ/</td><td>哦→乌</td><td><en>go</en> · <en>home</en></td></tr>\
</table>\
<div class="ex">🎯 串句:<en>The boy found a coin in the house.</en><button class="say-all" data-say="The boy found a coin in the house.">▶ 听整句</button> boy、coin、found、house 全是双元音。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:发成单个短音,嘴不滑。</b><en>boy</en> 念成"波"就丢了后半截。一定要滑到"衣"收尾。</div>\
<div class="pit"><b>坑 2:ow 有两种读法。</b><en>now</en> 念 /aʊ/(啊→乌),但 <en>snow</en> 念 /oʊ/(哦→乌)。高频词靠语境记,别死套。</div>\
<div class="pit"><b>坑 3:收尾太用力。</b>双元音的第二个音是轻轻滑过去、点到为止,不是两个音都重重发。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '双元音和单元音最大的区别是?',
      options: ['更响', '嘴型从一个形状滑到另一个', '更短', '不卷舌'],
      answer: 1,
      explain: '双元音是连续滑动:起点和终点嘴型不同,如 boy 从"哦"滑到"衣"。'
    },
    {
      type: 'choice',
      q: 'now 和 snow 里的 ow,发音?',
      options: ['完全一样', 'now 是 /aʊ/,snow 是 /oʊ/', '都不发音', 'now 是单元音'],
      answer: 1,
      explain: 'ow 有两种:now /aʊ/(啊→乌)、snow /oʊ/(哦→乌)。高频词靠语境记。'
    }
  ]
});
