/* 第 3 课:五个短元音。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-03-short-vowels',
  module: 'pron',
  order: 3,
  title: '五个短元音:a e i o u 的本音',
  minutes: 5,
  keywords: ['短元音', 'short vowels', '元音', 'aeiou', 'cat', 'bed'],

  sections: {
    what: '\
<p><strong>一句话:a、e、i、o、u 这五个元音字母,各自有一个最常用的"短促本音"——记住这五个音,半本字典的单词都能拼出来。</strong></p>\
<p>类比一下:这五个音就像做菜的五种基础调料。后面再花哨的单词,十有八九都是在这五个音上变化。先把"本味"尝准,比一上来背 48 个音标轻松得多。</p>',

    when: '\
<p>读任何一个"辅音+元音+辅音"的小词时(就是上一课说的 CVC 结构),中间那个元音通常就发这个短促本音。</p>\
<div class="ex">📌 一个好记的口诀句,每个词正好示范一个短元音(点击听):<br>\
<en>cat</en> 猫 → a · <en>bed</en> 床 → e · <en>sit</en> 坐 → i · <en>hot</en> 热 → o · <en>cup</en> 杯 → u</div>',

    how: '\
<p>一个一个来,跟着点、跟着读,注意嘴型(后面括号是给中国人的近似提示,别当成精确等价):</p>\
<table>\
<tr><th>字母</th><th>音标</th><th>嘴型要领</th><th>例词(点击听)</th></tr>\
<tr><td>a</td><td>/æ/</td><td>咧开嘴,像被掐了一下的"ai"</td><td><en>cat</en> · <en>map</en> · <en>bad</en></td></tr>\
<tr><td>e</td><td>/ɛ/</td><td>嘴半开,短促的"ai→唉"</td><td><en>bed</en> · <en>red</en> · <en>pen</en></td></tr>\
<tr><td>i</td><td>/ɪ/</td><td>放松的短"衣",别拖长</td><td><en>sit</en> · <en>big</en> · <en>fish</en></td></tr>\
<tr><td>o</td><td>/ɑ/</td><td>嘴张大,像看医生说"啊"</td><td><en>hot</en> · <en>box</en> · <en>dog</en></td></tr>\
<tr><td>u</td><td>/ʌ/</td><td>放松的短"啊",喉咙发力</td><td><en>cup</en> · <en>sun</en> · <en>bus</en></td></tr>\
</table>\
<div class="ex">🎯 串一遍:<en>A fat cat sat on a red bed.</en>(一只胖猫坐在红床上。)<button class="say-all" data-say="A fat cat sat on a red bed.">▶ 听整句</button> 听听 a 和 e 反复出现的感觉。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把短 i 念成长"衣"。</b><en>sit</en>(坐)念成 <en>seat</en>(座位)就成了另一个词。短 i 要短、要松,别使劲。</div>\
<div class="pit"><b>坑 2:用中文"啊"硬套 /æ/。</b><en>cat</en> 不是"凯特"也不是"卡特",是咧嘴的 /æ/。多点几次 <en>cat</en>、<en>bad</en> 找感觉。</div>\
<div class="pit"><b>坑 3:o 念成中文"欧"。</b>美式短 o 是张大嘴的 /ɑ/,<en>hot</en> 接近"哈特"而不是"猴特"。这是美音和中式发音差别最大的元音之一。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '下面哪个词里的元音和 cat 是同一个短音?',
      options: ['cake', 'map', 'car', 'cake'],
      answer: 1,
      explain: 'map 的 a 和 cat 一样是咧嘴的 /æ/。cake 是长音 /eɪ/,car 的 a 被 r 拉长变了味。'
    },
    {
      type: 'choice',
      q: 'sit 和 seat 的区别主要在?',
      options: ['辅音不同', '元音长短和松紧', '重音位置', '完全一样'],
      answer: 1,
      explain: 'sit 是短而松的 /ɪ/,seat 是长而紧的 /iː/。念混了意思就变了(坐 vs 座位)。'
    },
    {
      type: 'fill',
      q: '美式英语里 hot 的元音,嘴型是张大的,音标写作 /__/(填一个符号)。',
      answer: ['ɑ', 'ɑ:', 'a'],
      explain: '美式短 o 发 /ɑ/,张大嘴的"啊",不是中文的"欧"。'
    }
  ]
});
