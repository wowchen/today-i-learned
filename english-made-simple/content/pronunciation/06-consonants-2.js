/* 第 6 课:辅音(下)——中国人专属难点。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-06-consonants-2',
  module: 'pron',
  order: 6,
  title: '辅音(下):中国人最容易错的 8 个',
  minutes: 5,
  keywords: ['辅音', 'consonants', 'r', 'l', 'th', 'ng', '难点'],

  sections: {
    what: '\
<p><strong>一句话:这 8 个辅音中文里没有完全对应的,是中国人口音的"重灾区"——但每个都有一句话就能记住的诀窍。</strong></p>\
<p>上一课的 16 个是送分题,这一课是"提分项"。把这几个练顺,你的发音立刻不像"中式英语"。其中咬舌音 /θ/ /ð/ 太重要,下一课单独讲,这里先认个脸。</p>',

    when: '\
<p>这些音出现频率极高(<en>r</en>、<en>l</en> 几乎每句话都有),练好了整体语感都变。建议这一课多停留,反复点读模仿。</p>',

    how: '\
<p>逐个攻破,每个配一句诀窍 + 例词(点击听):</p>\
<table>\
<tr><th>辅音</th><th>一句话诀窍</th><th>例词</th></tr>\
<tr><td>r</td><td>舌头卷起来悬空,不碰上颚,像含了口水</td><td><en>red</en> · <en>car</en> · <en>right</en></td></tr>\
<tr><td>l</td><td>舌尖顶住上门牙后方,清清楚楚</td><td><en>light</en> · <en>love</en> · <en>milk</en></td></tr>\
<tr><td>th(清)</td><td>舌尖轻咬牙缝送气,/θ/</td><td><en>think</en> · <en>three</en></td></tr>\
<tr><td>th(浊)</td><td>同样咬牙缝,但喉咙振动,/ð/</td><td><en>this</en> · <en>that</en></td></tr>\
<tr><td>ng</td><td>鼻音收尾,舌根抬起,别加 g</td><td><en>sing</en> · <en>long</en></td></tr>\
<tr><td>j /dʒ/</td><td>"知"加振动,像"举"</td><td><en>job</en> · <en>juice</en></td></tr>\
<tr><td>ch /tʃ/</td><td>"吃"但更靠前</td><td><en>chair</en> · <en>lunch</en></td></tr>\
<tr><td>z /ʒ/</td><td>"日"的摩擦感</td><td><en>vision</en> · <en>measure</en></td></tr>\
</table>\
<div class="ex">🎯 r 和 l 对比专练:<en>right</en> / <en>light</en> · <en>red</en> / <en>led</en> · <en>rice</en> / <en>lice</en>。点着听,体会舌头碰不碰上颚的区别。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:r 和 l 不分。</b>这是头号中式发音特征。记死:<en>l</en> 舌尖<strong>顶住</strong>门牙后,<en>r</en> 舌头<strong>悬空</strong>卷起。<en>rice</en>(米饭)念成 <en>lice</en>(虱子)会很尴尬。</div>\
<div class="pit"><b>坑 2:ng 后面加个 g。</b><en>sing</en> 是鼻音收住,不是"sing-格"。<en>singer</en> 里也别蹦出 g。</div>\
<div class="pit"><b>坑 3:词尾 r 吞掉。</b>美式是"卷舌音",<en>car</en>、<en>here</en>、<en>teacher</en> 的 r 要卷,这恰恰是美音区别于英音的招牌。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '发 l 的时候,舌头应该?',
      options: ['悬空卷起不碰任何地方', '舌尖顶住上门牙后方', '贴住下牙', '舌根抬起'],
      answer: 1,
      explain: 'l 是舌尖顶住上门牙后方;悬空卷起的是 r。这一顶一悬,就是 r/l 的分水岭。'
    },
    {
      type: 'choice',
      q: '美式英语里,car 末尾的 r 应该?',
      options: ['完全不发，像英音', '卷舌发出来', '发成 l', '发成元音 a'],
      answer: 1,
      explain: '美式是卷舌音(rhotic),词尾 r 要卷出来。这是美音和英音最明显的招牌区别之一。'
    },
    {
      type: 'fill',
      q: 'rice(米饭)如果 r/l 不分,会被听成另一个词 ____(一种虫子)。',
      answer: ['lice', 'lice虱子'],
      explain: 'rice → lice(虱子)。r/l 不分是中式发音头号特征,值得专门练。'
    }
  ]
});
