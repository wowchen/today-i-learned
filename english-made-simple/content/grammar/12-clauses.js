/* 语法模块第 12 课:宾语从句 & 状语从句。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-12-clauses',
  module: 'grammar',
  order: 12,
  title: '宾语从句 & 状语从句',
  minutes: 5,
  keywords: ['宾语从句', '状语从句', 'object clause', 'adverbial clause', '从句', 'that', 'because'],

  sections: {
    what: '\
<p><strong>一句话:把"一整句话"塞进另一句里当成分——当宾语就是宾语从句(我知道<u>他来了</u>),当状语就是状语从句(<u>因为下雨</u>,我没去)。</strong></p>\
<p>这是"三大从句"里剩下的两个(定语从句上一课讲过)。它们让你能表达"我认为…""如果…就…""因为…所以…"这类复杂逻辑。</p>',

    when: '\
<p>表达想法、原因、条件、时间、让步等逻辑关系时。日常对话和写作都离不开。</p>',

    how: '\
<p><strong>宾语从句:放在动词后面当宾语,常用 that 引导(口语可省)。</strong>(点击听)</p>\
<div class="ex"><en>I think (that) he is right.</en> 我觉得他是对的。<br>\
<en>I know (that) you are busy.</en> 我知道你忙。<br>\
疑问做宾语要用陈述语序:<en>I don\'t know where he is.</en>(不是 "where is he")</div>\
<p><strong>状语从句:补充原因/条件/时间/让步,用连词引导。</strong></p>\
<table>\
<tr><th>类型</th><th>连词</th><th>例句</th></tr>\
<tr><td>原因</td><td>because</td><td><en>I stayed home because it rained.</en></td></tr>\
<tr><td>条件</td><td>if</td><td><en>If it rains, I will stay home.</en></td></tr>\
<tr><td>时间</td><td>when</td><td><en>When I arrived, he was sleeping.</en></td></tr>\
<tr><td>让步</td><td>although</td><td><en>Although it rained, we went out.</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:because 和 so 连用。</b>中文"因为…所以…"两个都说,英语只能选一个:<en>Because it rained, I stayed</en> 或 <en>It rained, so I stayed</en>,不能 "Because…, so…"。</div>\
<div class="pit"><b>坑 2:宾语从句用疑问语序。</b>"我不知道他在哪"是 <en>I don\'t know where he is</en>,从句里要陈述语序(he is),不是 "where is he"。</div>\
<div class="pit"><b>坑 3:if 条件句时态错。</b>表将来的条件,if 从句用现在时,主句用 will:<en>If it rains, I will stay</en>(不是 "If it will rain")。主将从现。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"我不知道他在哪" 正确的是?',
      options: ['I don\'t know where is he', 'I don\'t know where he is', 'I don\'t know where he', 'I don\'t know he where is'],
      answer: 1,
      explain: '宾语从句要用陈述语序:where he is(不是疑问语序 where is he)。'
    },
    {
      type: 'choice',
      q: '中文"因为下雨,所以我待在家"翻译成英语,关于 because 和 so?',
      options: ['两个都要用', '只能用其中一个', '都不能用', '必须用 and 连接'],
      answer: 1,
      explain: '英语 because 和 so 只能选一个用,不能像中文一样"因为…所以…"成对出现。'
    },
    {
      type: 'fill',
      q: '"如果明天下雨,我就待在家":If it ____ tomorrow, I will stay home.(填动词,注意时态)',
      answer: ['rains', 'rain'],
      explain: '"主将从现":主句用 will,if 条件从句用一般现在时 rains(第三人称单数加 s)。'
    }
  ]
});
