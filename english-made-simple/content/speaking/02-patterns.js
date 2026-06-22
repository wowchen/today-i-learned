/* 口语模块第 2 课:万能高频口语句型。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-02-patterns',
  module: 'speak',
  order: 2,
  title: '万能高频口语句型,先背这些',
  minutes: 5,
  keywords: ['口语句型', '高频句型', 'sentence patterns', '万能句型', '口语'],

  sections: {
    what: '\
<p><strong>一句话:口语不靠现场造句,靠"句型模板"——背熟十来个万能框架,换个词就能表达无数意思。</strong></p>\
<p>母语者说话也是大量复用固定框架。<en>Can I…?</en>、<en>I\'d like to…</en>、<en>How about…?</en> 这些模板,填进不同的词就是不同的话。先把框架背成肌肉记忆,开口就有"现成的话"。</p>',

    when: '\
<p>日常几乎所有场景。这是口语的"万能工具箱",越早背熟越早能开口。</p>',

    how: '\
<p><strong>十个最万能的口语句型(点击听,记住框架):</strong></p>\
<table>\
<tr><th>句型</th><th>用途</th><th>例</th></tr>\
<tr><td><en>Can I…?</en></td><td>请求</td><td><en>Can I get a coffee?</en></td></tr>\
<tr><td><en>Could you…?</en></td><td>礼貌请别人做</td><td><en>Could you help me?</en></td></tr>\
<tr><td><en>I\'d like to…</en></td><td>表达想要(礼貌)</td><td><en>I\'d like to order.</en></td></tr>\
<tr><td><en>How about…?</en></td><td>提议</td><td><en>How about Friday?</en></td></tr>\
<tr><td><en>I\'m not sure if…</en></td><td>不确定</td><td><en>I\'m not sure if it\'s open.</en></td></tr>\
<tr><td><en>Do you mind if…?</en></td><td>征求同意</td><td><en>Do you mind if I sit here?</en></td></tr>\
<tr><td><en>It depends on…</en></td><td>看情况</td><td><en>It depends on the weather.</en></td></tr>\
<tr><td><en>I was wondering if…</en></td><td>委婉请求</td><td><en>I was wondering if you could help.</en></td></tr>\
</table>\
<div class="ex">🎯 学法:每个框架先点读听熟,再用自己的生活造 3 个句子。框架熟了,开口就是"填空"而非"造句"。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:只背不替换练。</b>光记 "Can I…?" 没用,要练 "Can I get… / Can I use… / Can I ask…",换词成习惯。</div>\
<div class="pit"><b>坑 2:I\'d like 念错。</b><en>I\'d</en> = I would,比 "I want" 礼貌。读 /aɪd/,别拆成 "I would" 那么生硬。</div>\
<div class="pit"><b>坑 3:句型混搭出错。</b>如 "Could you to help" 多了 to。Could you + 动词原形。框架要记准结构。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '口语流利的关键之一是?',
      options: ['每次现场造新句子', '背熟万能句型框架,换词即用', '只用长难句', '说得越快越好'],
      answer: 1,
      explain: '母语者也复用固定框架。背熟模板、换词填空,比现场造句快得多、稳得多。'
    },
    {
      type: 'choice',
      q: '"I\'d like to order" 里的 I\'d 是?',
      options: ['I did', 'I would(更礼貌的"我想")', 'I had', 'I do'],
      answer: 1,
      explain: "I'd = I would。\"I'd like to\" 比 \"I want to\" 礼貌自然,是高频口语框架。"
    },
    {
      type: 'fill',
      q: '礼貌请别人帮忙:"____ you help me?"(填情态动词,比 can 更客气)',
      answer: ['Could', 'could'],
      explain: 'Could you help me? 比 Can you 更礼貌委婉。Could you + 动词原形。'
    }
  ]
});
