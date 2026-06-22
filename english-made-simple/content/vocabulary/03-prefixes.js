/* 词汇模块第 3 课:高频前缀。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-03-prefixes',
  module: 'vocab',
  order: 3,
  title: '高频前缀:un re pre dis mis',
  minutes: 5,
  keywords: ['前缀', 'prefix', 'un', 're', 'pre', 'dis', 'mis', '构词'],

  sections: {
    what: '\
<p><strong>一句话:前缀加在词根前面,主要改"方向"或"正负"——记住十来个高频前缀,你就能给认识的词"批量扩容"。</strong></p>\
<p>前缀像开关:<en>happy</en>(开心)前面加 un,变 <en>unhappy</en>(不开心);<en>do</en>(做)前加 re,变 <en>redo</en>(重做)。开关一拨,新词到手。</p>',

    when: '\
<p>认识一个词后,试试给它加前缀,常能"白送"几个相关词;遇到带前缀的生词,先剥掉前缀看词根。</p>',

    how: '\
<p><strong>最高频的几个前缀,点击听例词:</strong></p>\
<table>\
<tr><th>前缀</th><th>意思</th><th>例词(点击听)</th></tr>\
<tr><td>un-</td><td>不 / 相反</td><td><en>unhappy</en> · <en>unlock</en> · <en>unfair</en></td></tr>\
<tr><td>re-</td><td>再 / 重新</td><td><en>redo</en> · <en>return</en> · <en>rewrite</en></td></tr>\
<tr><td>pre-</td><td>预先 / 之前</td><td><en>preview</en> · <en>prepay</en> · <en>predict</en></td></tr>\
<tr><td>dis-</td><td>不 / 否定 / 分开</td><td><en>dislike</en> · <en>disagree</en> · <en>disappear</en></td></tr>\
<tr><td>mis-</td><td>错误地</td><td><en>mistake</en> · <en>misunderstand</en> · <en>misspell</en></td></tr>\
<tr><td>over-</td><td>过度 / 上方</td><td><en>oversleep</en> · <en>overwork</en></td></tr>\
</table>\
<div class="ex">🎯 一词扩多个:<en>agree</en>(同意)→ <en>disagree</en>(不同意);<en>view</en>(看)→ <en>preview</en>(预览)+ <en>review</en>(回顾)。一个词根,前缀一换就是一组。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:un- 和 dis- 乱套。</b>哪个词配哪个前缀是固定的:是 <en>unhappy</en> 不是 "dishappy",是 <en>disagree</en> 不是 "unagree"。靠多见、记搭配,不能自己造。</div>\
<div class="pit"><b>坑 2:in-/im- 不全是否定。</b>im 在 <en>important</en> 里不表示"不"。前缀是助攻,拿不准查词典。</div>\
<div class="pit"><b>坑 3:re- 的两种读法。</b><en>record</en>(名词 RE-cord)和动词重音不同,re- 有时弱读。结合第 8 课重音一起体会。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '前缀 re- 的核心意思是?',
      options: ['不 / 否定', '再 / 重新', '预先', '错误地'],
      answer: 1,
      explain: 're- 表示"再/重新":redo(重做)、return(返回)、rewrite(重写)。'
    },
    {
      type: 'choice',
      q: 'misunderstand 里的 mis- 表示?',
      options: ['再一次', '不/相反', '错误地', '过度'],
      answer: 2,
      explain: 'mis- = 错误地。misunderstand = 误解,mistake = 错误,misspell = 拼错。'
    },
    {
      type: 'fill',
      q: 'agree(同意)加前缀变成"不同意",是 ____agree。',
      answer: ['dis', 'disagree'],
      explain: 'disagree(不同意)。注意是 dis- 不是 un-,前缀搭配是固定的,要记不能造。'
    }
  ]
});
