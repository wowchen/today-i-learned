/* 语法模块第 4 课:一般过去时 & 过去进行时。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-04-past',
  module: 'grammar',
  order: 4,
  title: '一般过去时 & 过去进行时',
  minutes: 5,
  keywords: ['过去时', '一般过去时', '过去进行时', 'past', '时态', '不规则动词'],

  sections: {
    what: '\
<p><strong>一句话:一般过去时讲"过去做完的事"(昨天去了公园),过去进行时讲"过去某刻正在做的事"(那时正下着雨)。</strong></p>\
<p>和现在时一个套路,只是动词换成过去式。难点在英语有一批<strong>不规则动词</strong>(go→went,不是 goed),得专门记。</p>',

    when: '\
<p>讲昨天、上周、小时候等已经过去的事。这是讲故事、聊经历最常用的时态。</p>',

    how: '\
<p><strong>一般过去时:规则动词加 -ed;不规则动词单独记。</strong>(点击听)</p>\
<div class="ex">规则:<en>I worked yesterday.</en> · <en>She played tennis.</en>(加 ed)<br>\
不规则:<en>I went to the park.</en>(go→went)· <en>He ate lunch.</en>(eat→ate)· <en>We saw a movie.</en>(see→saw)<br>否定/疑问用 did:<en>I did not go.</en> · <en>Did you see it?</en></div>\
<p><strong>过去进行时:was/were + 动词-ing。</strong></p>\
<div class="ex"><en>I was sleeping at 10 p.m.</en> 晚上十点我在睡觉。<br>\
常和过去时搭配:<en>I was cooking when she called.</en> 她打电话时我正在做饭。(背景在进行,某动作打断)</div>\
<div class="ex">📌 高频不规则动词(点击听):<en>go→went</en> · <en>have→had</en> · <en>do→did</en> · <en>get→got</en> · <en>make→made</en> · <en>take→took</en> · <en>come→came</en> · <en>see→saw</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:不规则动词加 ed。</b>go 的过去式是 went,不是 "goed";buy 是 bought,不是 "buyed"。这批没有捷径,高频的先记牢。</div>\
<div class="pit"><b>坑 2:用了 did 还把动词变过去式。</b>否定疑问用 did 后,主动词回原形:<en>Did you go?</en>(不是 "Did you went"),<en>I did not see</en>(不是 "did not saw")。</div>\
<div class="pit"><b>坑 3:该用过去时却用现在时。</b>"我昨天去了" → <en>I went yesterday</en>,有时间标志 yesterday 就别用现在时 go。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"我昨天去了公园" 正确的是?',
      options: ['I go to the park yesterday', 'I went to the park yesterday', 'I goed to the park', 'I am going yesterday'],
      answer: 1,
      explain: 'go 的过去式是不规则的 went。有 yesterday 标志,用一般过去时。'
    },
    {
      type: 'choice',
      q: '"Did you ___ it?" 横线该填?',
      options: ['saw', 'see', 'seen', 'seeing'],
      answer: 1,
      explain: '疑问句用了助动词 did,主动词回原形:Did you see it?(不是 saw)。'
    },
    {
      type: 'fill',
      q: '"她打电话时我正在做饭":I ____ cooking when she called.(填 be 动词过去式)',
      answer: ['was'],
      explain: '过去进行时 was/were + doing。主语 I 用 was:I was cooking when she called.'
    }
  ]
});
