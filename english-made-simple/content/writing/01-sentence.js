/* 写作模块第 1 课:写对句子。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-01-sentence',
  module: 'write',
  order: 1,
  title: '从写对一个句子开始',
  minutes: 5,
  keywords: ['写作', '句子', 'sentence', '完整句', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:写作的最小单位是句子——一个完整的英文句子必须有主语和谓语动词,这是写对的底线。</strong></p>\
<p>写文章前,先确保每句话是"完整句子"。中国人写作最常见的不是用词难,而是句子残缺或黏连。这一课守住"一句话要完整"这条底线。</p>',

    when: '\
<p>写任何英文——邮件、作业、留言——的每一句话。</p>',

    how: '\
<p><strong>合格句子的两个必备件:</strong></p>\
<table>\
<tr><th>必备</th><th>例</th></tr>\
<tr><td>主语(谁)</td><td><en>The cat</en> sleeps.</td></tr>\
<tr><td>谓语动词(做/是)</td><td>The cat <en>sleeps</en>.</td></tr>\
</table>\
<div class="ex">✔ 完整句:<en>She works hard.</en>(有主语 She、有动词 works)<br>\
✗ 残句:<en>Because she works hard.</en>(只是从句,不能单独成句)<br>\
✗ 残句:<en>Working hard every day.</en>(没有主语和谓语)</div>\
<div class="ex">🎯 三种基本句子长度,先会写简单句:<br>简单句:<en>I like coffee.</en><br>并列句:<en>I like coffee, and she likes tea.</en>(and 连两个完整句)<br>复合句:<en>I like coffee because it wakes me up.</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:残句当完整句。</b>"Because it rained." 不能单独成句,它是从句,需要主句:<en>I stayed home because it rained.</en></div>\
<div class="pit"><b>坑 2:逗号黏连(comma splice)。</b>两个完整句不能只用逗号连:✗ "I like tea, she likes coffee"。要用句号、分号或 and:<en>I like tea, and she likes coffee.</en></div>\
<div class="pit"><b>坑 3:漏谓语动词。</b>"She very happy" 漏了 is。形容词当表语必须有 be:<en>She is very happy.</en>(回顾语法第2课)。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '一个完整的英文句子,最起码必须有?',
      options: ['形容词', '主语和谓语动词', '介词', '从句'],
      answer: 1,
      explain: '完整句的底线是有主语(谁)和谓语动词(做/是)。缺一个就是残句。'
    },
    {
      type: 'choice',
      q: '"Because she works hard." 这句的问题是?',
      options: ['完全正确', '是从句,不能单独成句', '缺少形容词', '太长'],
      answer: 1,
      explain: 'Because 引导从句,需要搭配主句:I admire her because she works hard. 单独是残句。'
    },
    {
      type: 'fill',
      q: '两个完整句只用逗号连接的错误,叫"逗号____连"。(填一个字)',
      answer: ['黏', '粘'],
      explain: '逗号黏连(comma splice):两个完整句不能只用逗号,要用句号/分号/and 等连接。'
    }
  ]
});
