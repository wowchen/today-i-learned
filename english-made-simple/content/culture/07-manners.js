/* 文化模块第 7 课:餐桌与做客礼仪。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-07-manners',
  module: 'culture',
  order: 7,
  title: '餐桌与做客礼仪',
  minutes: 5,
  keywords: ['礼仪', 'manners', '餐桌', '做客', 'etiquette', '文化'],

  sections: {
    what: '\
<p><strong>一句话:美国的餐桌和做客礼仪有不少和中国不同的"潜规则"——懂了既不失礼,也让主人觉得你很得体。</strong></p>\
<p>被邀请去美国人家做客是融入的好机会,但礼节差异不小:几点到、带什么、怎么夸、什么时候走,都有讲究。这一课给你一份"做客指南"。</p>',

    when: '\
<p>受邀到美国人家吃饭、参加聚会、和美国人共餐时。</p>',

    how: '\
<p><strong>做客 / 餐桌要点:</strong></p>\
<table>\
<tr><th>场合</th><th>得体做法</th></tr>\
<tr><td>到达时间</td><td>准时或晚 5–10 分钟,别早到(主人还在准备)</td></tr>\
<tr><td>带点东西</td><td>一瓶酒、甜点或花,空手略失礼</td></tr>\
<tr><td>餐桌</td><td>等主人开动、或说完话再吃;餐巾放腿上</td></tr>\
<tr><td>夸赞</td><td>主动夸食物 <en>This is delicious!</en></td></tr>\
<tr><td>餐具</td><td>美式常一手叉一手刀,吃完刀叉并拢放盘上</td></tr>\
<tr><td>告辞</td><td>聚会别待太晚,走前道谢 <en>Thanks for having me!</en></td></tr>\
</table>\
<div class="ex">🎯 两句必备(点击听):赴宴道谢 <en>Thanks for having me!</en>(谢谢招待);夸食物 <en>This is really good!</en>。简单但很受用。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:提前很久到。</b>比约定时间早到会让主人措手不及。准时或晚 5–10 分钟刚好。</div>\
<div class="pit"><b>坑 2:空手赴宴。</b>带瓶酒或甜点是基本礼貌,哪怕主人说"不用带"。</div>\
<div class="pit"><b>坑 3:不出声夹菜/吃太急。</b>美式餐桌讲究小口、不出声、等主人示意。也别一声不吭,主动夸食物、聊天才热络。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '受邀到美国人家吃饭,合适的到达时间是?',
      options: ['提前半小时', '准时或晚5–10分钟', '晚一小时', '随便什么时候'],
      answer: 1,
      explain: '准时或略晚5–10分钟最得体。早到会让还在准备的主人措手不及。'
    },
    {
      type: 'choice',
      q: '去美国人家做客,带什么比较得体?',
      options: ['什么都不带', '一瓶酒/甜点/花', '一大堆礼物炫耀', '带自己的饭'],
      answer: 1,
      explain: '带一瓶酒、甜点或花是基本礼貌,空手赴宴略失礼。'
    },
    {
      type: 'fill',
      q: '离开主人家时道谢:"Thanks for ____ me!"(谢谢招待)',
      answer: ['having'],
      explain: '"Thanks for having me!" 是做客告辞时的标准道谢语。'
    }
  ]
});
