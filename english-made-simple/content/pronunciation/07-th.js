/* 第 7 课:咬舌音 /θ/ /ð/。中式发音重灾区,单独成课。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-07-th',
  module: 'pron',
  order: 7,
  title: '咬舌音 /θ/ /ð/:think ≠ sink',
  minutes: 5,
  keywords: ['咬舌音', 'th', 'θ', 'ð', 'think', 'this', '齿间音'],

  sections: {
    what: '\
<p><strong>一句话:th 这两个音中文里完全没有——舌尖必须伸到上下牙中间送气,所以叫"咬舌音"。</strong></p>\
<p>正因为中文没有,我们本能地用最近的 s 或 d 去替代,于是 <en>think</en>(想)变成 <en>sink</en>(下沉),<en>they</en>(他们)变成 <en>day</en>(白天)。这一课就专门把舌头"伸出去"。</p>',

    when: '\
<p>th 是超高频字母组合:<en>the</en>、<en>this</en>、<en>that</en>、<en>think</en>、<en>thank</en>、<en>with</en>、<en>three</en>……几乎每句话都有。练好它,口音立马上一个台阶。</p>',

    how: '\
<p>动作只有一个:<strong>舌尖轻轻伸到上下门牙之间,然后送气或发声。</strong>分两种:</p>\
<table>\
<tr><th>音</th><th>怎么发</th><th>例词(点击听)</th></tr>\
<tr><td>/θ/ 清</td><td>舌尖咬牙缝,只送气、不出声</td><td><en>think</en> · <en>thank</en> · <en>three</en> · <en>mouth</en></td></tr>\
<tr><td>/ð/ 浊</td><td>舌尖咬牙缝,喉咙振动出声</td><td><en>this</en> · <en>that</en> · <en>they</en> · <en>mother</en></td></tr>\
</table>\
<div class="ex">🪞 照镜子练:发 th 时,你应该能<strong>看到舌尖</strong>从牙缝里露一点点。看不到,就是没伸出去。<br>对比专练(点击听):<en>think</en> / <en>sink</en> · <en>three</en> / <en>free</en> · <en>they</en> / <en>day</en></div>\
<div class="ex">🎯 经典绕口令:<en>I think this thing is thin.</en>(我觉得这东西很薄。)<button class="say-all" data-say="I think this thing is thin.">▶ 听整句</button> 一句里四个 th,慢慢来。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:/θ/ 发成 s。</b><en>think</en> → <en>sink</en>、<en>thick</en> → <en>sick</en>。关键:s 舌头在嘴里,th 舌头伸出牙缝。别偷懒。</div>\
<div class="pit"><b>坑 2:/ð/ 发成 d 或 z。</b><en>this</en> 不是 "dis" 也不是 "zis";<en>they</en> 不是 "day"。同样是把舌尖送到牙缝。</div>\
<div class="pit"><b>坑 3:怕"咬舌"不好看而缩回去。</b>母语者天天伸舌头,完全自然。大胆伸,这是发对的唯一办法。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'think 和 sink 的区别在于?',
      options: ['重音不同', 'think 的舌尖要伸到牙缝外', '元音不同', '没区别'],
      answer: 1,
      explain: 'think 是 /θ/,舌尖咬牙缝送气;sink 是 /s/,舌头在嘴里。舌头位置是关键。'
    },
    {
      type: 'choice',
      q: 'this 里的 th 是哪一种?',
      options: ['清音 /θ/,只送气', '浊音 /ð/,喉咙振动', '不发音', '发成 s'],
      answer: 1,
      explain: 'this、that、they、the 里的 th 都是浊音 /ð/,咬牙缝的同时喉咙要振动。'
    },
    {
      type: 'fill',
      q: '发 th 时,从镜子里你应该能看到舌____从牙缝露出来。',
      answer: ['尖', '头'],
      explain: '舌尖要伸到上下门牙之间。看不到舌尖,基本就是发成 s/d 了。'
    }
  ]
});
