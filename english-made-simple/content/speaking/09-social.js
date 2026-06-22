/* 口语模块第 9 课:场景对话·社交破冰。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-09-social',
  module: 'speak',
  order: 9,
  title: '场景对话·社交破冰',
  minutes: 5,
  keywords: ['社交', '破冰', '认识新朋友', 'social', '介绍', '场景对话'],

  sections: {
    what: '\
<p><strong>一句话:认识新朋友有一套固定流程——打招呼、自我介绍、找共同话题、结束。把这条线走熟,社交场不慌。</strong></p>\
<p>聚会、活动、第一次见面,最难的是"开第一句"。其实美国人的破冰高度套路化,记住几句模板,谁都能自然接上。</p>',

    when: '\
<p>参加聚会、认识同事/朋友的朋友、活动现场社交时。</p>',

    how: '\
<p><strong>破冰对话流程(点击听每句):</strong></p>\
<table>\
<tr><th>环节</th><th>说什么</th></tr>\
<tr><td>打招呼+自我介绍</td><td><en>Hi, I\'m Chen. Nice to meet you.</en></td></tr>\
<tr><td>接话</td><td><en>So, how do you know the host?</en> 你怎么认识主人的?</td></tr>\
<tr><td>找话题</td><td><en>What do you do?</en> 你做什么工作?/ <en>Where are you from?</en></td></tr>\
<tr><td>延续</td><td><en>Oh nice! How do you like it?</en> 那挺好!感觉怎么样?</td></tr>\
<tr><td>礼貌收尾</td><td><en>It was great talking to you.</en> 跟你聊得很开心</td></tr>\
</table>\
<div class="ex">🎯 回应 "Nice to meet you" 的标准接法:<en>Nice to meet you, too.</en>(加个 too)。结束时说 <en>It was nice meeting you</en>(注意结束用 meeting,过去式语感)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"What do you do?" 听成"你在干嘛"。</b>它是问"你做什么工作",社交标准问题,不是问此刻动作。</div>\
<div class="pit"><b>坑 2:不会礼貌结束对话。</b>聊完别尴尬走开。一句 <en>It was great talking to you, I\'ll catch you later</en> 自然收尾。</div>\
<div class="pit"><b>坑 3:问太私人。</b>初次见面别问工资、婚否、年龄。聊工作、来历、怎么认识主人,安全又能展开。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '社交场合 "What do you do?" 通常是在问?',
      options: ['你现在在做什么动作', '你做什么工作', '你要做什么', '你会做饭吗'],
      answer: 1,
      explain: '"What do you do?" 是社交标准问题,问职业("你做什么工作"),不是问此刻动作。'
    },
    {
      type: 'choice',
      q: '想礼貌地结束一段社交对话,最自然的是?',
      options: ['转身就走', 'It was great talking to you.', 'Goodbye forever.', 'I have to go now, bye!(略生硬)'],
      answer: 1,
      explain: '"It was great talking to you" 是得体的收尾,既友好又给对话画上句号。'
    },
    {
      type: 'fill',
      q: '对方说 "Nice to meet you",你回 "Nice to meet you, ____."',
      answer: ['too'],
      explain: '加 too 回应:"Nice to meet you, too."'
    }
  ]
});
