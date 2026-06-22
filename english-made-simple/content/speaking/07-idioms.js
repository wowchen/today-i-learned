/* 口语模块第 7 课:俚语与习语。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-07-idioms',
  module: 'speak',
  order: 7,
  title: '俚语与习语:听懂美国人的"黑话"',
  minutes: 5,
  keywords: ['俚语', '习语', 'slang', 'idioms', '口语', '地道'],

  sections: {
    what: '\
<p><strong>一句话:习语(idiom)是"字面看不懂、整体有固定意思"的表达——美国人天天用,不懂就一脸懵,懂了瞬间地道。</strong></p>\
<p><en>It\'s raining cats and dogs</en> 不是天上掉猫狗,是"下大雨"。这类表达没法逐字翻,得整块记。先认得最高频的一批,听懂为主,用为辅。</p>',

    when: '\
<p>看美剧、和美国人聊天时高频出现。重点先做到"听懂",自己用时挑有把握的,别硬塞。</p>',

    how: '\
<p><strong>最高频的日常习语(点击听,整块记意思):</strong></p>\
<table>\
<tr><th>习语</th><th>意思</th></tr>\
<tr><td><en>What\'s up?</en></td><td>最随意的"怎么样/有事吗"</td></tr>\
<tr><td><en>No worries.</en></td><td>没事/别担心</td></tr>\
<tr><td><en>It\'s a piece of cake.</en></td><td>小菜一碟,很简单</td></tr>\
<tr><td><en>Break a leg!</en></td><td>祝好运(尤其演出/考试前)</td></tr>\
<tr><td><en>Hang out</en></td><td>一起玩、消磨时间</td></tr>\
<tr><td><en>I\'m beat.</en></td><td>我累坏了</td></tr>\
<tr><td><en>That\'s cool.</en></td><td>不错/可以(万能赞同)</td></tr>\
<tr><td><en>My bad.</en></td><td>我的错(随意道歉)</td></tr>\
</table>\
<div class="ex">🎯 学法:习语整块当一个"词"记,别拆开理解。看到不懂的习语,收藏进生词本,听够几次自然就内化了。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:逐字翻译。</b><en>Break a leg</en> 是祝好运,不是"折断腿"。习语必须整体记意思,拆开必错。</div>\
<div class="pit"><b>坑 2:滥用俚语显地道。</b>俚语有场合和时效,用不对反而尴尬。先求听懂,自己用时挑稳妥常见的。</div>\
<div class="pit"><b>坑 3:把粗俗俚语当口头禅。</b>有些 slang 不礼貌或很随便,正式场合别用。拿不准的先只听不说。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"It\'s a piece of cake" 意思是?',
      options: ['一块蛋糕', '很简单,小菜一碟', '我想吃蛋糕', '很贵'],
      answer: 1,
      explain: '习语整体意思是"非常容易/小菜一碟",和蛋糕没关系。习语不能逐字翻。'
    },
    {
      type: 'choice',
      q: '考试前朋友对你说 "Break a leg!",他是在?',
      options: ['诅咒你', '祝你好运', '叫你小心', '开玩笑骂你'],
      answer: 1,
      explain: '"Break a leg" 是祝好运的习语,尤其用在演出、考试等重要时刻前。'
    },
    {
      type: 'fill',
      q: '随意承认小失误,美国人常说 "My ____."',
      answer: ['bad'],
      explain: '"My bad." = 我的错,是很随意的道歉用语。'
    }
  ]
});
