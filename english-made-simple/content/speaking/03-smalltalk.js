/* 口语模块第 3 课:small talk。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-03-smalltalk',
  module: 'speak',
  order: 3,
  title: 'Small talk:美国人的寒暄开场',
  minutes: 5,
  keywords: ['small talk', '寒暄', '闲聊', '开场', '口语', '社交'],

  sections: {
    what: '\
<p><strong>一句话:small talk 是美国社交的"润滑剂"——电梯里、排队时、见面开头那几句无关紧要的闲聊,不闲聊反而显得冷淡。</strong></p>\
<p>中国人常觉得"没事聊什么天",但在美国,小寒暄是礼貌和友好的信号。好消息:它高度套路化,记住几组开场和回应就能应付。</p>',

    when: '\
<p>见面打招呼、等电梯、收银台、同事走廊偶遇——任何短暂的社交接触。</p>',

    how: '\
<p><strong>万能开场(点击听):</strong></p>\
<div class="ex"><en>How\'s it going?</en> 最常用的"你好吗"<br>\
<en>How are you doing?</en> · <en>What\'s up?</en>(很随意)<br>\
<en>Nice weather today, isn\'t it?</en> 天气是万能话题</div>\
<p><strong>关键:这些"你好吗"不是真问候,是打招呼。标准回应:</strong></p>\
<div class="ex"><en>Good, thanks. You?</en>(回一句再反问)<br>\
<en>Pretty good, how about you?</en><br>\
<en>Not bad.</en> —— 然后<strong>一定要把球抛回去</strong>(You? / How about you?)</div>\
<p><strong>安全话题:</strong>天气、周末计划、运动、最近忙不忙。<strong>避开:</strong>收入、年龄、政治、宗教、体重。</p>',

    pitfalls: '\
<div class="pit"><b>坑 1:把 "How are you?" 当真问诊。</b>它就是"你好",回 "Good, thanks, you?" 即可,别真讲自己今天多惨。</div>\
<div class="pit"><b>坑 2:只答不反问。</b>对方问 How\'s it going,你答完要抛回 "You?"。只答不问会冷场。</div>\
<div class="pit"><b>坑 3:踩雷话题。</b>别上来问收入、年龄、有没有对象、为啥不结婚——这些在美国是隐私雷区。聊天气最安全。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国人见面说 "How\'s it going?" 通常是?',
      options: ['真的关心你近况细节', '就是打招呼,等同"你好"', '在问你去哪', '表示不满'],
      answer: 1,
      explain: '这是寒暄式打招呼,不是真问诊。回 "Good, thanks. You?" 即可。'
    },
    {
      type: 'choice',
      q: 'small talk 里下面哪个是该避开的话题?',
      options: ['天气', '周末计划', '收入和年龄', '最近忙不忙'],
      answer: 2,
      explain: '收入、年龄、政治、宗教是美国社交雷区。天气、周末、运动等才是安全话题。'
    },
    {
      type: 'fill',
      q: '回应寒暄后,一定要把话题"抛回去",最简单就加一个词:"Good, thanks. ____?"',
      answer: ['You', 'you'],
      explain: '答完反问 "You?" 或 "How about you?",让对话来回流动,只答不问会冷场。'
    }
  ]
});
