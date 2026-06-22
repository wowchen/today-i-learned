/* 第 4 课:长元音与神奇 e。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-04-long-vowels',
  module: 'pron',
  order: 4,
  title: '长元音与神奇 e',
  minutes: 5,
  keywords: ['长元音', 'long vowels', '神奇e', 'magic e', 'silent e', 'cake', 'name'],

  sections: {
    what: '\
<p><strong>一句话:很多单词末尾有个不发音的 e,它像魔法师一样,让前面的元音"念出自己字母名"——这就是大名鼎鼎的"神奇 e"。</strong></p>\
<p>还记得第 1 课说的"字母名"吗?a 的名字是 <en>A</en>(诶)。当短音单词 <en>cap</en>(帽子)末尾加个 e 变成 <en>cape</en>(斗篷),那个 a 就从短促的 /æ/ 一跃念成它的名字 /eɪ/。e 自己不出声,却改变了整个词。</p>',

    when: '\
<p>看到"辅音 + 元音 + 辅音 + e"(CVCe 结构)结尾的单词,先假设它走"神奇 e"规则:中间元音念字母名,末尾 e 不发音。</p>\
<div class="ex">⚡ 同一组词,加不加 e 天差地别(点击对比):<br>\
<en>cap</en> 帽 → <en>cape</en> 斗篷　|　<en>kit</en> 工具包 → <en>kite</en> 风筝　|　<en>hop</en> 单脚跳 → <en>hope</en> 希望　|　<en>cut</en> 切 → <en>cute</en> 可爱</div>',

    how: '\
<p>五个元音在"神奇 e"作用下,都念回自己的字母名:</p>\
<table>\
<tr><th>字母</th><th>念作(字母名)</th><th>短音版 → 神奇 e 版(点击听)</th></tr>\
<tr><td>a</td><td>/eɪ/ 诶</td><td><en>mad</en> → <en>made</en></td></tr>\
<tr><td>e</td><td>/iː/ 衣</td><td><en>pet</en> → <en>Pete</en></td></tr>\
<tr><td>i</td><td>/aɪ/ 艾</td><td><en>bit</en> → <en>bite</en></td></tr>\
<tr><td>o</td><td>/oʊ/ 欧</td><td><en>not</en> → <en>note</en></td></tr>\
<tr><td>u</td><td>/juː/ 优</td><td><en>cub</en> → <en>cube</en></td></tr>\
</table>\
<div class="ex">🎯 串一句体会:<en>I hope this cute kite makes you smile.</en>(希望这个可爱的风筝能逗你笑。)<button class="say-all" data-say="I hope this cute kite makes you smile.">▶ 听整句</button> 里面 hope、cute、kite、smile 全是神奇 e。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把末尾 e 念出来。</b><en>name</en> 是"内姆"(一个音节),不是"内-么";<en>like</en> 是"莱克",不是"莱-克-呃"。神奇 e 永远沉默。</div>\
<div class="pit"><b>坑 2:忘了它会改词义。</b>少写或多写一个 e,<en>hop</en>(跳)和 <en>hope</en>(希望)、<en>cut</en>(切)和 <en>cute</en>(可爱)就彻底跑偏。</div>\
<div class="pit"><b>坑 3:以为所有 e 结尾都是神奇 e。</b>像 <en>have</en>、<en>give</en>、<en>come</en> 是常见"违章户",元音仍念短音。规则覆盖大多数,例外后面单独记。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'cap 加上神奇 e 变成 cape 后,a 的发音变成?',
      options: ['还是短音 /æ/', '字母名 /eɪ/', '不发音', '变成 /ɑ/'],
      answer: 1,
      explain: '神奇 e 让前面的元音念回自己的字母名,a 从 /æ/ 变成 /eɪ/(诶)。'
    },
    {
      type: 'choice',
      q: '下面哪个词的末尾 e 是要发音的"违章户"?',
      options: ['note', 'bite', 'have', 'cube'],
      answer: 2,
      explain: 'have 是常见例外,元音念短音、e 也没让它变长。note/bite/cube 都规规矩矩走神奇 e。'
    },
    {
      type: 'fill',
      q: 'kite 这个词里,末尾的 e 发不发音?(填:发 或 不发)',
      answer: ['不发', '不发音'],
      explain: '神奇 e 自己永远不发音,只负责把前面的 i 变成 /aɪ/(艾)。'
    }
  ]
});
