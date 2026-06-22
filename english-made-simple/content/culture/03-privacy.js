/* 文化模块第 3 课:隐私与边界。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-03-privacy',
  module: 'culture',
  order: 3,
  title: '隐私与边界:这些别随便问',
  minutes: 5,
  keywords: ['隐私', '边界', 'privacy', '禁忌问题', '文化', '个人空间'],

  sections: {
    what: '\
<p><strong>一句话:美国人非常看重个人隐私和边界——一些在中国很正常的寒暄问题(年龄、收入、婚否),在美国会让人不舒服。</strong></p>\
<p>中文里"多大了?""结婚没?""工资多少?"是热情关心,在美国却可能被当成冒犯。了解这条"隐私红线",社交才不踩雷。</p>',

    when: '\
<p>和美国人初识、闲聊、社交时。尤其刚认识、不太熟的人。</p>',

    how: '\
<p><strong>初识阶段最好别问(✗ 雷区 → ✔ 安全替代):</strong></p>\
<table>\
<tr><th>✗ 别问</th><th>✔ 改聊</th></tr>\
<tr><td>How old are you?(年龄)</td><td>天气、周末计划</td></tr>\
<tr><td>How much do you make?(收入)</td><td>工作内容(What do you do?)</td></tr>\
<tr><td>Are you married? Why not?(婚否)</td><td>兴趣爱好</td></tr>\
<tr><td>How much was your rent?(房租)</td><td>这个城市/社区怎么样</td></tr>\
<tr><td>体重、宗教、政治倾向</td><td>电影、运动、美食</td></tr>\
</table>\
<div class="ex">🎯 另一条边界是<strong>身体距离</strong>:美国人交谈习惯保持约一臂的"个人空间",别站太近;打招呼多握手,熟人才拥抱。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用中式热情打探隐私。</b>"你多大?结婚没?挣多少?"在美国是冒犯,不是关心。改聊中性话题。</div>\
<div class="pit"><b>坑 2:站太近。</b>美国人个人空间约一臂宽,凑太近会让人本能后退。保持距离更舒服。</div>\
<div class="pit"><b>坑 3:随便评论别人外貌/体重。</b>"你胖了/瘦了"在美国很不礼貌,哪怕善意也别说。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '和刚认识的美国人聊天,下面哪个问题最不合适?',
      options: ['What do you do?', 'How much do you make?', '聊天气', '聊周末计划'],
      answer: 1,
      explain: '收入(How much do you make)是隐私雷区。问职业(What do you do)可以,问工资不行。'
    },
    {
      type: 'choice',
      q: '美国人交谈时习惯的身体距离大约是?',
      options: ['贴着站', '约一臂宽的个人空间', '越近越亲热', '十米开外'],
      answer: 1,
      explain: '美国人重视个人空间,交谈约保持一臂距离,站太近会让人不适。'
    },
    {
      type: 'fill',
      q: '在美国,问对方"____"(年龄/收入/婚否之一)被视为冒犯隐私。',
      answer: ['年龄', '收入', '婚否', '工资'],
      explain: '年龄、收入、婚姻状况都是隐私雷区。中式热情打探在美国会让人不适。'
    }
  ]
});
