/* 旅行模块第 28 课:Small talk 闲聊模板。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-28-smalltalk',
  module: 'travel',
  order: 28,
  title: '社交:Small talk 闲聊模板',
  minutes: 5,
  keywords: ['闲聊', 'small talk', '社交', '寒暄', '天气', 'weather', '旅行', '破冰', '话题'],

  sections: {
    what: '\
<p><strong>一句话:Small talk 是美国社交的润滑剂——和邻座、店员、导游随口聊两句。话题要<strong>轻松、正面、开放</strong>:天气、旅行、本地推荐;避开政治、宗教、收入。</strong></p>\
<p>场景地图:对方搭话(<en>Long flight, isn\'t it?</en>),你接话题再<strong>把球踢回去</strong>(反问对方),30 秒到 2 分钟,目的是友好气氛,不是深聊。</p>',

    when: '\
<p>飞机/火车邻座、排队、咖啡店、跟团——任何需要打破沉默、建立善意的轻社交场合。</p>',

    how: '\
<p><strong>黄金开场 + 延伸(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>今天天气真好,是吧?</td><td><en>Beautiful weather today, isn\'t it?</en></td></tr>\
<tr><td>您是来工作还是度假?</td><td><en>Are you here for work or pleasure?</en></td></tr>\
<tr><td>我从中国来,有什么本地推荐吗?</td><td><en>I\'m visiting from China. Any local tips?</en></td></tr>\
<tr><td>挺长的飞行,是吧?您去哪儿?</td><td><en>Long flight, isn\'t it? Where are you headed?</en></td></tr>\
<tr><td>这是我第一次来美国。</td><td><en>This is my first time in the US.</en></td></tr>\
<tr><td>(听到推荐)听起来太棒了,谢谢你的建议!</td><td><en>That sounds great! Thanks for the tip!</en></td></tr>\
</table>\
<p><strong>被问到中国,这样答(点读):</strong></p>\
<table>\
<tr><th>对方问</th><th>地道回答方向</th></tr>\
<tr><td><en>What\'s it like in China?</en></td><td><en>Beijing feels like a mix of ancient history and modern tech.</en></td></tr>\
<tr><td><en>Do you miss China?</en></td><td><en>Sometimes! I miss the food most. But I\'m loving it here.</en></td></tr>\
</table>\
<div class="ex">💡 <strong>核心技巧</strong>:把对方的话题<strong>还回去</strong>——别人问你 "Where are you headed?",答完顺手反问 "How about you?"。万能延续句:<en>What do you think?</en> 被问到敏感话题,用 <en>That\'s a complex topic!</en> 礼貌岔开。<en>tip</en> 在这里是"建议",不是小费。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把闲聊当深聊,一问到底或只顾自己说。</b>Small talk 是来回轻接的"传球",答完记得反问 <en>How about you?</en>,30 秒到 2 分钟即可,别变审问或独白。</div>\
<div class="pit"><b>坑 2:聊到政治/宗教/收入/中美对比谁更好。</b>这些是雷区。守住天气、旅行、美食、本地推荐等正面话题;被追问敏感题就 <en>That\'s a complex topic!</en> 带过。</div>\
<div class="pit"><b>坑 3:用 "Have you eaten?" 当寒暄。</b>那是中式问候,美国人会以为你要请客。开场用 <en>How\'s it going?</en> 或评论天气。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'Small talk 的核心技巧是?',
      options: ['尽量多说显得热情', '把话题还回去,反问对方', '深入讨论严肃问题', '只谈中美差异'],
      answer: 1,
      explain: 'Small talk 像来回传球,答完顺手反问 "How about you?",维持轻松互动。'
    },
    {
      type: 'choice',
      q: '下面哪个话题适合和陌生人闲聊?',
      options: ['对方收入多少', '支持哪个政党', '天气和旅行推荐', '宗教信仰'],
      answer: 2,
      explain: 'Small talk 守正面、轻松、开放的话题:天气、旅行、美食、本地推荐;避开政治宗教收入。'
    },
    {
      type: 'fill',
      q: '对方给了好建议,地道感谢:"Thanks for the ____!"',
      answer: ['tip'],
      explain: '这里 tip 指"建议/提示"(不是小费)。Thanks for the tip! 是感谢建议的常用说法。'
    }
  ]
});
