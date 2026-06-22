/* 词汇模块第 2 课:词根词缀入门。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-02-roots',
  module: 'vocab',
  order: 2,
  title: '词根词缀:把长单词拆成乐高',
  minutes: 5,
  keywords: ['词根', '词缀', 'roots', 'affixes', '拆词', '构词'],

  sections: {
    what: '\
<p><strong>一句话:长单词不是一串乱码,而是由"词根(意思核心)+ 词缀(前后零件)"拼出来的乐高——会拆,就能猜意思、记得牢。</strong></p>\
<p>看到 <en>unbelievable</en> 别慌:un(不)+ believe(相信)+ able(能够)= 不能相信的 = 难以置信的。一拆,11 个字母的"长词"瞬间透明。这是词汇量翻倍最省力的杠杆。</p>',

    when: '\
<p>遇到没见过的长单词,先别查词典,先拆。拆完八九不离十能猜个大概,再验证。</p>',

    how: '\
<p><strong>三个零件:前缀(改方向)+ 词根(给意思)+ 后缀(定词性)。</strong>看几个拆解(点击听整词):</p>\
<table>\
<tr><th>单词</th><th>拆解</th><th>意思</th></tr>\
<tr><td><en>import</en></td><td>im(向内)+ port(港口/搬运)</td><td>进口</td></tr>\
<tr><td><en>export</en></td><td>ex(向外)+ port</td><td>出口</td></tr>\
<tr><td><en>transport</en></td><td>trans(穿越)+ port</td><td>运输</td></tr>\
<tr><td><en>predict</en></td><td>pre(预先)+ dict(说)</td><td>预言</td></tr>\
<tr><td><en>visible</en></td><td>vis(看)+ ible(能)</td><td>看得见的</td></tr>\
</table>\
<div class="ex">🧱 感受"同根一串":学会词根 <strong>port(搬运)</strong>,一口气拿下 import / export / transport / portable / report。一个词根撬动一串词,这就是杠杆。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:拆得太死板。</b>词根词缀是"猜意思的助攻",不是铁律。少数词拆出来对不上,以词典为准,别钻牛角尖。</div>\
<div class="pit"><b>坑 2:只拆不记词根。</b>拆的前提是认识常见词根/词缀。接下来两课专门给你最高频的那批前缀、后缀,先攒"零件库"。</div>\
<div class="pit"><b>坑 3:见生词就想拆全。</b>先抓词根定大意,够用就行,不必每个字母都追根溯源。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'unbelievable 拆开是 un + believe + able,意思是?',
      options: ['可以相信的', '难以置信的', '相信的人', '正在相信'],
      answer: 1,
      explain: 'un(不)+ believe(相信)+ able(能)= 不能相信的 = 难以置信的。拆开就透明了。'
    },
    {
      type: 'choice',
      q: '词根 port 的核心意思是?学会它能带出 import/export/transport。',
      options: ['看', '说', '搬运/港口', '写'],
      answer: 2,
      explain: 'port = 搬运/港口。im(内)+port=进口,ex(外)+port=出口,trans(穿越)+port=运输。'
    },
    {
      type: 'fill',
      q: '一个长单词的三个零件:前缀、____、后缀。(填中间那个)',
      answer: ['词根'],
      explain: '前缀改方向、词根给核心意思、后缀定词性。词根是意思的核心。'
    }
  ]
});
