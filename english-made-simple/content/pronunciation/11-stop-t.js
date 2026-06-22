/* 第 11 课:失爆(不完全爆破)。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-11-stop-t',
  module: 'pron',
  order: 11,
  title: '失爆:that day 的 t 去哪了',
  minutes: 5,
  keywords: ['失爆', '不完全爆破', 'stop t', 'glottal', 'that day', '吞音'],

  sections: {
    what: '\
<p><strong>一句话:当一个爆破音(t、d、p、b、k、g)后面紧跟另一个辅音时,前一个往往"只摆姿势不出声"——听起来像被吞掉了,这叫失爆(不完全爆破)。</strong></p>\
<p>上一课 t 变软(浊化),这一课 t 直接"卡住不放"。<en>that day</en> 里第一个 t 几乎听不见,只剩一个短暂的停顿。知道这个,你就不会再觉得美国人"把音吃了"。</p>',

    when: '\
<p>两个辅音相邻时高频发生,尤其 t/d/p/k 后面接辅音。词内、词与词之间都会出现。</p>',

    how: '\
<p>嘴型做出那个音、但<strong>不送气爆破</strong>,直接滑向下一个音。点击听,注意那个"卡顿":</p>\
<table>\
<tr><th>词组</th><th>现象</th><th>点击</th></tr>\
<tr><td>that day</td><td>第一个 t 卡住不放</td><td><en>that day</en></td></tr>\
<tr><td>good night</td><td>d 失爆</td><td><en>good night</en></td></tr>\
<tr><td>hot dog</td><td>t 失爆,接 d</td><td><en>hot dog</en></td></tr>\
<tr><td>football</td><td>t 失爆,接 b</td><td><en>football</en></td></tr>\
<tr><td>basketball</td><td>t 失爆</td><td><en>basketball</en></td></tr>\
</table>\
<div class="ex">🎯 整句:<en>I had a great night.</en><button class="say-all" data-say="I had a great night.">▶ 听整句</button> great 的 t 接 night,几乎只剩一个停顿。</div>\
<div class="ex">💡 美音里还常见"喉塞音"版本:<en>button</en>、<en>kitten</en> 中间的 t 变成喉咙里一卡——button 像 "bu-(卡)-n"。<button class="say-all" data-say="button kitten">▶ 听</button></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:硬把每个爆破音都"砰"出来。</b><en>good night</en> 念成两声清脆的 d、t,反而不自然。让前一个卡住就行。</div>\
<div class="pit"><b>坑 2:把失爆当"吞音/省略"。</b>音没省,只是没爆破出来,那个短停顿仍在,正是它让节奏地道。</div>\
<div class="pit"><b>坑 3:和浊化搞混。</b>浊化(上一课)是 t 变软成 d,失爆是 t 卡住不出声。区别看后面跟的是元音(→浊化)还是辅音(→失爆)。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '失爆(不完全爆破)通常发生在什么时候?',
      options: ['爆破音后面跟元音', '爆破音后面紧跟另一个辅音', '词首', '重读音节'],
      answer: 1,
      explain: '爆破音(t/d/p/b/k/g)后面紧跟辅音时,前一个常常只摆姿势不爆破。后面跟元音则倾向浊化或连读。'
    },
    {
      type: 'choice',
      q: '"hot dog" 里第一个 t 的处理是?',
      options: ['清脆爆破', '失爆,卡住不放直接接 d', '浊化成 d 再爆破', '完全省略不留痕迹'],
      answer: 1,
      explain: 't 后面紧跟辅音 d,发生失爆:嘴做 t 的姿势但不爆破,留一个短停顿后接 d。'
    }
  ]
});
