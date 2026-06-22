/* 写作模块第 8 课:写邮件。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-08-email',
  module: 'write',
  order: 8,
  title: '写邮件:正式与非正式',
  minutes: 5,
  keywords: ['邮件', 'email', '正式', '非正式', '商务邮件', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:英文邮件有固定的"开头-正文-结尾"套路,关键是根据收件人选对正式程度——给老板和给朋友,措辞天差地别。</strong></p>\
<p>邮件是职场和留学最高频的写作。好消息:它高度模板化。记住正式和非正式两套"骨架",填进内容就行。</p>',

    when: '\
<p>给老师、雇主、客服、同事、朋友写邮件时。先判断关系,再选语气。</p>',

    how: '\
<p><strong>邮件结构 + 正式/非正式对照(点击听):</strong></p>\
<table>\
<tr><th>部分</th><th>正式</th><th>非正式</th></tr>\
<tr><td>称呼</td><td><en>Dear Mr. Smith,</en></td><td><en>Hi Tom,</en></td></tr>\
<tr><td>开场</td><td><en>I am writing to ask about…</en></td><td><en>Just a quick question about…</en></td></tr>\
<tr><td>结尾语</td><td><en>Thank you for your time.</en></td><td><en>Thanks!</en></td></tr>\
<tr><td>签名</td><td><en>Best regards,</en> / <en>Sincerely,</en></td><td><en>Cheers,</en> / <en>Best,</en></td></tr>\
</table>\
<div class="ex">🎯 一封简短正式邮件骨架:<br>\
<en>Dear Ms. Lee,</en><br>\
<en>I am writing to ask about the schedule. Could you let me know the time?</en><br>\
<en>Thank you for your help.</en><br>\
<en>Best regards,</en><br>Chen</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:正式邮件用口语缩读。</b>给老板别写 "gonna""wanna""Hey"。正式邮件用完整词、用 Dear。</div>\
<div class="pit"><b>坑 2:没有主题行或太含糊。</b>主题行(subject)要具体:"Question about Monday\'s meeting" 好过 "Hi"。</div>\
<div class="pit"><b>坑 3:开门不见山。</b>英文邮件第一句就说明来意(I am writing to…),别绕一大圈寒暄。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '给不熟悉的雇主写正式邮件,合适的称呼是?',
      options: ['Hey!', 'Dear Mr. Smith,', 'Yo Smith', 'Hi buddy'],
      answer: 1,
      explain: '正式邮件用 "Dear + 姓氏/头衔":Dear Mr. Smith。Hi/Hey 偏非正式。'
    },
    {
      type: 'choice',
      q: '正式邮件的结尾签名,下面哪个合适?',
      options: ['Cheers', 'Best regards,', 'Later!', 'Bye bye'],
      answer: 1,
      explain: '正式用 Best regards / Sincerely;Cheers/Best 偏非正式,用于熟人。'
    },
    {
      type: 'fill',
      q: '英文邮件第一句通常就说明来意:"I am ____ to ask about…"',
      answer: ['writing'],
      explain: '"I am writing to…" 是正式邮件开门见山说明目的的固定开场。'
    }
  ]
});
