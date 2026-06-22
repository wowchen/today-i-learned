/* 听力模块第 6 课:听力资源分级。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'listen-06-resources',
  module: 'listen',
  order: 6,
  title: '听力资源怎么选:分级不踩坑',
  minutes: 5,
  keywords: ['听力资源', 'resources', '播客', 'podcast', '分级', '材料'],

  sections: {
    what: '\
<p><strong>一句话:选对难度的材料,比用什么材料更重要——按自己的水平分级挑,从慢速、带文本的入手,逐级上爬。</strong></p>\
<p>同样花一小时,选对材料事半功倍,选难了只剩挫败。这一课给你一个"由易到难"的台阶,对号入座。</p>',

    when: '\
<p>不知道该听什么时。先定位自己在哪一级,选略高于当前水平的材料。</p>',

    how: '\
<p><strong>听力材料分级台阶(由易到难):</strong></p>\
<table>\
<tr><th>级别</th><th>适合</th><th>类型举例</th></tr>\
<tr><td>入门</td><td>零基础</td><td>慢速英语、儿童动画、分级听力 App</td></tr>\
<tr><td>初级</td><td>能听简单对话</td><td>慢速新闻、英语学习播客(带文本)</td></tr>\
<tr><td>中级</td><td>能跟上日常对话</td><td>访谈类播客、生活类 YouTube、情景喜剧</td></tr>\
<tr><td>高级</td><td>接近自如</td><td>常速新闻、脱口秀、电影、原声播客</td></tr>\
</table>\
<div class="ex">🎯 三个选材黄金标准:① <strong>带文本/字幕</strong>(能对照精听);② <strong>话题你感兴趣</strong>(坚持得下去);③ <strong>能懂 60-80%</strong>(略高于当前水平,最利成长)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:盲目跟风听高难度。</b>别人听 TED 你也听,但若只懂 30%,纯属折磨。按自己水平选,不攀比。</div>\
<div class="pit"><b>坑 2:只用一种材料。</b>口音、话题单一会让耳朵"偏科"。混着听不同口音、不同话题。</div>\
<div class="pit"><b>坑 3:没文本的材料用来精听。</b>精听必须有文本对照,否则无法归因。挑材料先看有没有 transcript/字幕。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '选听力材料,最重要的标准是?',
      options: ['越权威越好', '难度对号入座,能懂60-80%', '越长越好', '名气越大越好'],
      answer: 1,
      explain: '选略高于当前水平、能懂大部分(60-80%)的材料,成长最快;太难只剩挫败。'
    },
    {
      type: 'choice',
      q: '用来"精听"的材料必须具备?',
      options: ['名人录制', '有文本/字幕可对照', '时长超过一小时', '没有字幕'],
      answer: 1,
      explain: '精听要对照文本归因,所以材料必须带 transcript/字幕,否则无法定位听不出的地方。'
    }
  ]
});
