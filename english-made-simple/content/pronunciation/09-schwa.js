/* 第 9 课:弱读与 schwa /ə/。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-09-schwa',
  module: 'pron',
  order: 9,
  title: '弱读与 /ə/:美国人偷懒的艺术',
  minutes: 5,
  keywords: ['弱读', 'schwa', 'ə', '中央元音', 'reduction', '偷懒'],

  sections: {
    what: '\
<p><strong>一句话:英语里最常见的元音不是 a 也不是 e,而是一个含糊、放松的"呃"——音标写作 /ə/,叫 schwa。非重读音节几乎都会"偷懒"成它。</strong></p>\
<p>上一课说重读音节要清楚响亮。这一课说反面:<strong>非重读音节要含糊偷懒。</strong>美国人不是把每个字母都念准,而是把不重要的音都"揉"成一个 /ə/。听懂这一点,你才听得懂正常语速的美语。</p>',

    when: '\
<p>几乎所有多音节单词的非重读部分,以及句子里的虚词(a、the、to、of、for…),都会弱读成 /ə/。这是听力"听不清"的最大元凶。</p>',

    how: '\
<p><strong>看单词里的 schwa</strong>(标红的字母其实都念 /ə/,点击听):</p>\
<table>\
<tr><th>单词</th><th>你以为</th><th>实际(非重读 → /ə/)</th></tr>\
<tr><td><en>banana</en></td><td>巴-娜-娜</td><td>b<strong>ə</strong>-NA-n<strong>ə</strong></td></tr>\
<tr><td><en>about</en></td><td>啊-包特</td><td><strong>ə</strong>-BOUT</td></tr>\
<tr><td><en>problem</en></td><td>普拉-布勒姆</td><td>PROB-l<strong>ə</strong>m</td></tr>\
<tr><td><en>support</en></td><td>萨-坡特</td><td>s<strong>ə</strong>-PORT</td></tr>\
</table>\
<p><strong>看句子里的弱读。</strong>虚词在句中几乎都变 /ə/:</p>\
<div class="ex"><en>a cup of tea</en><button class="say-all" data-say="a cup of tea">▶ 听</button>:of 不念"奥夫",而是轻轻的 "əv",整句像 "a cup-ə-tea"。<br>\
<en>I have to go</en><button class="say-all" data-say="I have to go">▶ 听</button>:have to 连起来像 "hafta"。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把每个元音都念足。</b>把 <en>about</en> 的第一个 a 念成清楚的"啊",就暴露了中式口音。它该是含糊的 /ə/。</div>\
<div class="pit"><b>坑 2:虚词念太重。</b>把 <en>of</en>、<en>to</en>、<en>for</en> 念得清清楚楚,句子就僵了。让它们弱下去、糊过去,才地道。</div>\
<div class="pit"><b>坑 3:听力跟不上,以为对方"吞音"。</b>其实没吞,是弱读了。知道虚词会变 /ə/,你的耳朵就能"脑补"回来。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'schwa(/ə/)这个音的特点是?',
      options: ['又长又清楚', '含糊、放松、轻短', '只出现在重读音节', '中文里很常见'],
      answer: 1,
      explain: 'schwa 是含糊放松的"呃",专门出现在非重读音节,是英语里最高频的元音。'
    },
    {
      type: 'choice',
      q: '"a cup of tea" 里的 of 实际怎么念?',
      options: ['清楚的"奥夫"', '轻轻的 "əv",几乎糊过去', '完全不发音', '念成 "off"'],
      answer: 1,
      explain: 'of 作虚词时弱读成 "əv",整句听起来像 "a cup-ə-tea"。虚词弱读是地道语感的关键。'
    }
  ]
});
