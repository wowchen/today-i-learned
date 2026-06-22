/* 第 8 课:重音。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-08-stress',
  module: 'pron',
  order: 8,
  title: '重音:美语的灵魂节拍',
  minutes: 5,
  keywords: ['重音', 'stress', '轻重音', '节奏', '单词重音', '句子重音'],

  sections: {
    what: '\
<p><strong>一句话:英语不是每个音节平均用力,而是有的重读、有的轻读——重音放错,母语者可能听不懂你在说哪个词。</strong></p>\
<p>中文基本每个字一样重(单字一拍),英语却是"轻重轻重"地起伏。这是中国人听起来"一个字一个字蹦"的根本原因。掌握重音,比纠正某个单音收益更大。</p>',

    when: '\
<p>每一个多音节单词都有重音;每一句话也有重音。读单词、开口说句子时都用得上。查字典时,音标里那个 ˈ 小竖线就标在重读音节前面。</p>',

    how: '\
<p><strong>规律一:单词重音。</strong>重读音节读得更响、更长、更清楚;非重读音节读得轻、短、含糊。点击听,故意夸张地感受(大写代表重读):</p>\
<table>\
<tr><th>单词</th><th>重音在</th><th>听感</th></tr>\
<tr><td><en>banana</en></td><td>第二个 → ba-NA-na</td><td>中间最响</td></tr>\
<tr><td><en>computer</en></td><td>第二个 → com-PU-ter</td><td>PU 最响</td></tr>\
<tr><td><en>important</en></td><td>第二个 → im-POR-tant</td><td>POR 最响</td></tr>\
<tr><td><en>photograph</en></td><td>第一个 → PHO-to-graph</td><td>开头最响</td></tr>\
</table>\
<p><strong>规律二:重音变,词性甚至词义都变。</strong>点击对比:</p>\
<div class="ex"><en>present</en>:重音在前 PRE-sent = 礼物(名词);重音在后 pre-SENT = 赠送(动词)。<br>\
<en>record</en>:RE-cord = 记录(名词);re-CORD = 录制(动词)。</div>\
<p><strong>规律三:句子重音。</strong>实词(名/动/形)重读,虚词(冠词/介词/代词)轻读。</p>\
<div class="ex">🎯 <en>I want to go to the store.</en><button class="say-all" data-say="I want to go to the store.">▶ 听整句</button> 重音落在 WANT、GO、STORE,中间的 to、the 一带而过。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:每个音节平均用力。</b>把 <en>banana</en> 念成"巴-拿-拿"三个一样重,就是典型中式节奏。要敢于把非重读音节"吞轻"。</div>\
<div class="pit"><b>坑 2:重音放错位置。</b><en>HO-tel</en> 还是 <en>ho-TEL</en>?放错了对方要愣一下。拿不准就查字典看 ˈ 的位置。</div>\
<div class="pit"><b>坑 3:句子里每个词都重读。</b>那样听起来像机器人。学会让虚词"让路",句子才有英语的流动感——这正是下一课"弱读"的主题。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'banana 这个词的重音在第几个音节?',
      options: ['第一个 BA', '第二个 NA', '第三个 NA', '没有重音'],
      answer: 1,
      explain: 'ba-NA-na,重音在中间。重读音节更响、更长、更清楚。'
    },
    {
      type: 'choice',
      q: 'present 重音放在前面(PRE-sent)时,它是?',
      options: ['动词:赠送', '名词:礼物', '形容词', '副词'],
      answer: 1,
      explain: '重音在前 = 名词"礼物";重音在后 pre-SENT = 动词"赠送"。重音位置能改变词性。'
    },
    {
      type: 'fill',
      q: '句子 "I want to go" 里,go 和 to 哪个该重读?(填一个词)',
      answer: ['go'],
      explain: '实词(go)重读,虚词(to)轻读。这是英语句子节奏的核心规律。'
    }
  ]
});
