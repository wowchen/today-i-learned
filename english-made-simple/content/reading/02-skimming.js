/* 阅读模块第 2 课:略读 skimming。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-02-skimming',
  module: 'read',
  order: 2,
  title: '略读 skimming:30 秒抓大意',
  minutes: 5,
  keywords: ['略读', 'skimming', '快速阅读', '抓大意', 'reading'],

  sections: {
    what: '\
<p><strong>一句话:略读(skimming)是"快速扫一遍抓整体大意"的技能——不读每个字,只抓骨架,30 秒知道这篇讲什么。</strong></p>\
<p>不是所有内容都值得细读。略读帮你先判断"这篇要不要细看""大概在说啥"。这是高效阅读的第一道筛子。</p>',

    when: '\
<p>面对长文章、决定要不要细读、快速了解一篇大意、考试时间紧时。</p>',

    how: '\
<p><strong>略读的"只看这些"清单:</strong></p>\
<table>\
<tr><th>看</th><th>因为</th></tr>\
<tr><td>标题 + 副标题</td><td>直接告诉你主题</td></tr>\
<tr><td>每段第一句</td><td>英文段落多为"主题句开头"</td></tr>\
<tr><td>首段和末段</td><td>引入和总结,信息密度高</td></tr>\
<tr><td>加粗/数字/专有名词</td><td>关键信息标记</td></tr>\
<tr><td>转折词(but, however)</td><td>作者态度的转折点</td></tr>\
</table>\
<div class="ex">🎯 英文写作习惯帮你略读:每段往往<strong>第一句就是中心句(topic sentence)</strong>,后面是展开。只读每段首句,大意就出来了八九成。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:略读还逐字读。</b>那不叫略读。略读要敢于"跳",眼睛扫过大片文字只抓关键词。</div>\
<div class="pit"><b>坑 2:略读求全。</b>略读只抓大意,不必懂每个细节。想懂细节那是精读的活,别混。</div>\
<div class="pit"><b>坑 3:忽略转折词。</b>but/however 后面常是作者真正想说的。略读可以跳很多,但别跳转折。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '略读(skimming)的目标是?',
      options: ['读懂每个细节', '快速抓住整体大意', '背下关键句', '查所有生词'],
      answer: 1,
      explain: '略读是快速扫读抓大意、判断要不要细读,不追求每个细节。'
    },
    {
      type: 'choice',
      q: '略读时最该优先读的是?',
      options: ['每段最后一句', '每段第一句(主题句)', '随便挑句子', '只读结尾'],
      answer: 1,
      explain: '英文段落多为"主题句开头",读每段第一句就能抓住大意的八九成。'
    },
    {
      type: 'fill',
      q: '英文每段开头那句概括全段的话,叫主题句,英文是 ____ sentence。',
      answer: ['topic'],
      explain: 'topic sentence(主题句),通常在段首,是略读的重点。'
    }
  ]
});
