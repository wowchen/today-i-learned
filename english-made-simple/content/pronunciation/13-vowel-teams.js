/* 第 13 课:元音组合(vowel teams)。自然拼读进阶。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-13-vowel-teams',
  module: 'pron',
  order: 13,
  title: '元音组合:ee oo ai oa,两个字母一个音',
  minutes: 5,
  keywords: ['元音组合', 'vowel teams', '元音字母组合', 'ee', 'oo', 'ai', 'oa', '自然拼读'],

  sections: {
    what: '\
<p><strong>一句话:很多单词里两个元音字母手拉手,只发一个音——而且常常发"前一个字母的名字"。老规矩叫:当两个元音一起走,第一个说话。</strong></p>\
<p>类比第 4 课的神奇 e:那是 e 在远处施法,这是两个元音贴着站。<en>see</en>、<en>rain</en>、<en>boat</en> 全是这套。认得这几组,一大批高频词当场会读。</p>',

    when: '\
<p>看到 ee、ea、ai、ay、oa、oo 这类相邻元音字母,先按"组合音"读,别拆成两个音节。</p>',

    how: '\
<p>最常用的几组,点击听:</p>\
<table>\
<tr><th>组合</th><th>发音</th><th>例词(点击听)</th></tr>\
<tr><td>ee / ea</td><td>/iː/ 长"衣"(字母 e 的名)</td><td><en>see</en> · <en>tree</en> · <en>eat</en> · <en>tea</en></td></tr>\
<tr><td>ai / ay</td><td>/eɪ/ "诶"(字母 a 的名)</td><td><en>rain</en> · <en>wait</en> · <en>day</en> · <en>play</en></td></tr>\
<tr><td>oa</td><td>/oʊ/ "欧"(字母 o 的名)</td><td><en>boat</en> · <en>road</en> · <en>coat</en></td></tr>\
<tr><td>oo(长)</td><td>/uː/ 长"乌"</td><td><en>moon</en> · <en>food</en> · <en>school</en></td></tr>\
<tr><td>oo(短)</td><td>/ʊ/ 短"乌"</td><td><en>book</en> · <en>good</en> · <en>foot</en></td></tr>\
</table>\
<div class="ex">🎯 串一句:<en>I see a green boat on the road.</en><button class="say-all" data-say="I see a green boat on the road.">▶ 听整句</button> see、green、boat、road 全是元音组合。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把组合拆成两个音节。</b><en>rain</en> 是一个音节"瑞恩",不是"瑞-阿-因"。两个元音只发一个音。</div>\
<div class="pit"><b>坑 2:oo 长短不分。</b><en>food</en>(长 /uː/)和 <en>good</en>(短 /ʊ/)是两种音。多点几次对比,没有死规则,高频词先记住。</div>\
<div class="pit"><b>坑 3:ea 也有例外。</b>多数 ea 念 /iː/(<en>eat</en>),但 <en>bread</en>、<en>head</en> 念短 /e/。规则覆盖大头,例外单记。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"当两个元音一起走"的规律是?',
      options: ['两个都发音', '通常发第一个字母的名字,只一个音', '都不发音', '发第二个字母的音'],
      answer: 1,
      explain: 'rain 发 /eɪ/(a 的名)、boat 发 /oʊ/(o 的名)、see 发 /iː/(e 的名)。第一个字母"说话"。'
    },
    {
      type: 'choice',
      q: 'food 和 good 里的 oo,关系是?',
      options: ['完全一样', '一个长 /uː/ 一个短 /ʊ/', '一个发音一个不发', 'good 的 oo 念 /aʊ/'],
      answer: 1,
      explain: 'food 是长 /uː/,good 是短 /ʊ/。oo 有长短两种,高频词先记住听感。'
    }
  ]
});
