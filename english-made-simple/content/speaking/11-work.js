/* 口语模块第 11 课:场景对话·工作沟通。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-11-work',
  module: 'speak',
  order: 11,
  title: '场景对话·工作沟通',
  minutes: 5,
  keywords: ['工作', '职场', 'work', '开会', 'meeting', '场景对话', '商务'],

  sections: {
    what: '\
<p><strong>一句话:职场英语讲究"专业又得体"——开会发言、表达意见、请求帮助都有约定俗成的说法,比日常更正式一点。</strong></p>\
<p>工作场合用错语气,要么显得没礼貌,要么显得不专业。这一课给你开会、协作、汇报里最常用的几组职场句,直接套用。</p>',

    when: '\
<p>开会、跟同事协作、向上汇报、写工作邮件的口语版时。</p>',

    how: '\
<p><strong>职场高频句(点击听):</strong></p>\
<table>\
<tr><th>场合</th><th>说什么</th></tr>\
<tr><td>会上发言</td><td><en>I\'d like to add something here.</en> 我想补充一点</td></tr>\
<tr><td>表达意见</td><td><en>From my perspective…</en> 在我看来…</td></tr>\
<tr><td>请求</td><td><en>Could you give me a hand with this?</en> 能帮我个忙吗?</td></tr>\
<tr><td>确认任务</td><td><en>Just to make sure, you want me to…?</en> 确认一下,你是要我…?</td></tr>\
<tr><td>给进度</td><td><en>I\'ll keep you posted.</en> 我会随时向你汇报进展</td></tr>\
<tr><td>不同意(委婉)</td><td><en>That\'s a good point, but have we considered…?</en></td></tr>\
</table>\
<div class="ex">🎯 职场邮件高频收尾:<en>Looking forward to your reply.</en> · <en>Let me know if you have any questions.</en> · <en>Best regards,</en>(签名前)。写作模块会细讲邮件。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:职场用太随意的口语。</b>跟老板别满嘴 "yeah""gonna""my bad"。职场比日常正式一档,用 yes、going to。</div>\
<div class="pit"><b>坑 2:直接命令同事。</b>"Do this" 太冲。用 "Could you…?" 或 "Would you mind…?",协作更顺。</div>\
<div class="pit"><b>坑 3:不确认就开干。</b>任务听个大概就动手易出错。用 "Just to make sure…?" 复述确认,职场显得靠谱。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '职场英语相比日常口语,应该?',
      options: ['更随意', '更正式得体一档', '完全一样', '只说俚语'],
      answer: 1,
      explain: '职场比日常正式一档:用 yes 不用 yeah,用 going to 不用 gonna,请求用 Could you。'
    },
    {
      type: 'choice',
      q: '"I\'ll keep you posted" 意思是?',
      options: ['我会寄信给你', '我会随时向你汇报进展', '我会发帖', '我贴在墙上'],
      answer: 1,
      explain: '"keep someone posted" = 随时告知某人最新进展,职场高频。'
    },
    {
      type: 'fill',
      q: '想委婉确认任务:"Just to make ____, you want me to…?"',
      answer: ['sure'],
      explain: '"Just to make sure, you want me to…?" 复述确认任务,职场显得靠谱、减少出错。'
    }
  ]
});
