/* 阅读模块第 6 课:猜词。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-06-guessing',
  module: 'read',
  order: 6,
  title: '猜词:不查字典也能读下去',
  minutes: 5,
  keywords: ['猜词', '词义猜测', 'context', '上下文', 'reading'],

  sections: {
    what: '\
<p><strong>一句话:遇到生词先别急着查——靠上下文、词根词缀、常识,八成能猜个八九不离十,阅读流畅度才保得住。</strong></p>\
<p>每个生词都查,阅读会被打断得支离破碎。母语者读到没见过的词也是连猜带蒙过去。学会猜词,既读得快,又顺便锻炼语感。</p>',

    when: '\
<p>泛读时遇到生词;考试不能查词典时;读到一个不影响大意的词时。</p>',

    how: '\
<p><strong>猜词四条线索:</strong></p>\
<table>\
<tr><th>线索</th><th>怎么用</th></tr>\
<tr><td>上下文</td><td>看前后句,意思往往呼之欲出</td></tr>\
<tr><td>词根词缀</td><td>拆开猜(回顾词汇第2-4课)</td></tr>\
<tr><td>同位/解释</td><td>破折号、or、即…后常跟着解释</td></tr>\
<tr><td>常识逻辑</td><td>结合话题和生活经验推</td></tr>\
</table>\
<div class="ex">🎯 实战:<en>The arid desert had almost no water for miles.</en> 不认识 arid?后面说"沙漠几乎没水"——arid 就是"干旱的"。上下文直接送答案。</div>\
<div class="ex">💡 什么时候该查:这个词<strong>反复出现</strong>、或<strong>卡住了关键句的理解</strong>时,才值得停下来查并收藏。其余猜过去即可。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:逢词必查。</b>阅读被切碎,速度和兴致全毁。先猜,只查反复出现或卡关键的。</div>\
<div class="pit"><b>坑 2:猜完不验证关键词。</b>影响大意的关键词,猜完最好查一下确认,别把错义带下去。</div>\
<div class="pit"><b>坑 3:钻牛角尖。</b>一个不影响理解的小词,猜不出就跳过,别在它上面耗住整段。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '泛读遇到生词,第一反应最好是?',
      options: ['立刻查字典', '先用上下文/词根猜', '跳过整段', '放弃阅读'],
      answer: 1,
      explain: '先靠上下文、词根词缀、常识猜,保持流畅;只在反复出现或卡关键时才查。'
    },
    {
      type: 'choice',
      q: '"The arid desert had almost no water" 里 arid 大概意思是?',
      options: ['潮湿的', '干旱的', '寒冷的', '美丽的'],
      answer: 1,
      explain: '上下文说沙漠"几乎没水",arid 即"干旱的"。上下文常常直接送出词义。'
    },
    {
      type: 'fill',
      q: '一个生词如果"____出现"或卡住关键句,才值得停下来查。(填一个词)',
      answer: ['反复', '多次', '重复'],
      explain: '反复出现或影响关键理解的词才值得查并收藏,其余猜过去保持流畅。'
    }
  ]
});
