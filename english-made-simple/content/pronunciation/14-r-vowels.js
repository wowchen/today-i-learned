/* 第 14 课:r 控元音(r-controlled vowels)。美式卷舌核心。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-14-r-vowels',
  module: 'pron',
  order: 14,
  title: 'r 控元音:ar or er,美式卷舌的家',
  minutes: 5,
  keywords: ['r控元音', 'r-controlled', '卷舌', 'ar', 'or', 'er', 'ir', 'ur', '美音'],

  sections: {
    what: '\
<p><strong>一句话:元音后面跟个 r,这个元音就被 r "带跑"了,发出美式特有的卷舌音——这是美音听起来"很美国"的最大功臣。</strong></p>\
<p>英国人 <en>car</en> 不卷 r,美国人卷得明明白白。<en>er / ir / ur</en> 三个长得不一样,在美音里却几乎念成同一个卷舌音 /ɝ/。掌握它,你的整体音色立刻"过关"。</p>',

    when: '\
<p>含 ar、or、er、ir、ur 的词极多(<en>car</en>、<en>more</en>、<en>her</en>、<en>bird</en>、<en>turn</en>)。这一课练好,美音的"底色"就有了。</p>',

    how: '\
<p>四组,点击听,重点感受舌头卷起来:</p>\
<table>\
<tr><th>组合</th><th>美音发音</th><th>例词(点击听)</th></tr>\
<tr><td>ar</td><td>/ɑr/ "啊"+卷舌</td><td><en>car</en> · <en>far</en> · <en>star</en> · <en>park</en></td></tr>\
<tr><td>or</td><td>/ɔr/ "哦"+卷舌</td><td><en>more</en> · <en>for</en> · <en>corn</en> · <en>short</en></td></tr>\
<tr><td>er / ir / ur</td><td>都念 /ɝ/ "厄"+卷舌</td><td><en>her</en> · <en>bird</en> · <en>turn</en> · <en>nurse</en></td></tr>\
<tr><td>词尾 -er</td><td>轻读 /ɚ/(弱卷舌)</td><td><en>teacher</en> · <en>water</en> · <en>better</en></td></tr>\
</table>\
<div class="ex">🎯 招牌长句:<en>The early bird gets the first worm.</en><button class="say-all" data-say="The early bird gets the first worm.">▶ 听整句</button> early、bird、first、worm 全是 /ɝ/ 卷舌音,一句练到底。</div>\
<div class="ex">💡 注意 er/ir/ur 念法几乎一样:<en>her</en> / <en>sir</en> / <en>fur</en> 韵母一致,只是拼写不同。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:词尾 r 不卷。</b>把 <en>car</en> 念成英音的"卡"、<en>teacher</en> 念成"踢侠",就丢了美音招牌。词尾 r 一定要卷。</div>\
<div class="pit"><b>坑 2:er/ir/ur 念成三个不同音。</b>它们在美音里都是 /ɝ/。<en>bird</en> 不是"逼尔德",是一个卷舌的"berd"。</div>\
<div class="pit"><b>坑 3:卷过头。</b>卷舌是自然带过,不是使劲打卷。舌根微微后缩抬起即可,别夸张到僵硬。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美式英语里,car 末尾的 r 应该?',
      options: ['像英音一样不发', '自然卷舌发出来', '发成 l', '发成元音'],
      answer: 1,
      explain: '美音是卷舌的(rhotic),ar 念 /ɑr/,舌头要卷。这是美音区别于英音的最大招牌。'
    },
    {
      type: 'choice',
      q: 'her、bird、turn 这三个词的"元音+r"部分?',
      options: ['三个完全不同', '在美音里都念 /ɝ/ 卷舌音', '都不卷舌', '只有 bird 卷舌'],
      answer: 1,
      explain: 'er/ir/ur 在美音里都念成同一个卷舌 /ɝ/,拼写不同但听感一致。'
    },
    {
      type: 'fill',
      q: 'teacher 词尾的 -er 是轻读的弱卷舌音,音标写作 /__/。',
      answer: ['ɚ', 'ə˞', 'ɝ'],
      explain: '词尾轻读 -er 是 /ɚ/(schwa + 卷舌),比重读的 /ɝ/ 更轻更短。'
    }
  ]
});
