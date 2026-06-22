/* 口语模块第 10 课:场景对话·打电话。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-10-phone',
  module: 'speak',
  order: 10,
  title: '场景对话·打电话',
  minutes: 5,
  keywords: ['打电话', 'phone call', '电话', '场景对话', '口语'],

  sections: {
    what: '\
<p><strong>一句话:打电话比面对面难,因为看不到表情、口型——但它同样高度套路化,记住接通、说明来意、结束这几组固定句就稳了。</strong></p>\
<p>电话英语是很多人的噩梦:听不清、不知怎么开口、不知怎么挂。其实美国人打电话也是程式化的,几句模板走天下。</p>',

    when: '\
<p>打客服、预约、订位、工作来电时。听力压力大,模板能帮你撑住框架。</p>',

    how: '\
<p><strong>电话对话模板(点击听每句):</strong></p>\
<table>\
<tr><th>环节</th><th>说什么</th></tr>\
<tr><td>接电话</td><td><en>Hello, this is Chen.</en>(自报"这是…"用 this is,不是 I am)</td></tr>\
<tr><td>找人</td><td><en>May I speak to Mr. Smith?</en> 请问 Smith 先生在吗?</td></tr>\
<tr><td>说明来意</td><td><en>I\'m calling about my appointment.</en> 我打来是想问预约的事</td></tr>\
<tr><td>没听清</td><td><en>Sorry, could you speak up a little?</en> 能大声点吗?</td></tr>\
<tr><td>请等</td><td><en>Hold on a second, please.</en> 请稍等</td></tr>\
<tr><td>结束</td><td><en>Thanks for your help. Have a good day!</en></td></tr>\
</table>\
<div class="ex">🎯 电话黄金习惯:① 自报家门用 <en>This is…</en>;② 没听清立刻说,别硬撑;③ 重要信息(号码、时间)重复一遍确认:<en>Let me repeat that…</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:电话里自报姓名用 "I am"。</b>电话惯用 <en>This is Chen</en>;问对方是谁用 <en>Who\'s this?</en> 或 <en>Who\'s calling?</en>。</div>\
<div class="pit"><b>坑 2:听不清硬撑。</b>看不到口型本来就难,没听清马上说 "Sorry, could you repeat that?",别猜。</div>\
<div class="pit"><b>坑 3:不确认关键信息。</b>预约时间、电话号码一定复述确认,电话里听错代价大。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '打电话时自报姓名,地道说法是?',
      options: ['I am Chen', 'This is Chen', 'My name Chen', 'Here is Chen'],
      answer: 1,
      explain: '电话里自报家门用 "This is Chen",这是固定习惯,不用 "I am"。'
    },
    {
      type: 'choice',
      q: '电话里没听清对方说的,应该?',
      options: ['假装听懂', '马上说 Sorry, could you repeat that?', '直接挂掉', '保持沉默'],
      answer: 1,
      explain: '电话看不到口型,没听清立刻请对方重复,别猜别硬撑。'
    },
    {
      type: 'fill',
      q: '请对方稍等一下:"____ on a second, please."',
      answer: ['Hold', 'hold'],
      explain: '"Hold on a second, please." = 请稍等。Hold on 是电话里常用的"别挂/稍等"。'
    }
  ]
});
