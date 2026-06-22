/* 口语模块第 8 课:填充词。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-08-fillers',
  module: 'speak',
  order: 8,
  title: '口头禅与填充词:like, you know, well',
  minutes: 5,
  keywords: ['填充词', 'fillers', 'like', 'you know', 'well', '口语', '口头禅'],

  sections: {
    what: '\
<p><strong>一句话:填充词是说话时的"缓冲气口"——well、you know、I mean、like,给你思考时间,也让英语听起来更自然、不结巴。</strong></p>\
<p>母语者满嘴都是这些"废词",但它们不废:既争取了思考时间,又让对话不冷场。中国人一卡就沉默,学会用填充词,就能"边想边说"地圆下去。</p>',

    when: '\
<p>想词、转换话题、缓和语气、争取时间时。它们是流利度的"润滑油"。</p>',

    how: '\
<p><strong>最常用的填充词(点击听):</strong></p>\
<table>\
<tr><th>填充词</th><th>作用</th><th>例</th></tr>\
<tr><td><en>Well,</en></td><td>开口缓冲/斟酌</td><td><en>Well, it depends.</en></td></tr>\
<tr><td><en>You know,</en></td><td>拉近距离/找共鸣</td><td><en>It was, you know, kind of weird.</en></td></tr>\
<tr><td><en>I mean,</en></td><td>解释/补充/纠正</td><td><en>I mean, it\'s fine, but…</en></td></tr>\
<tr><td><en>Like,</en></td><td>举例/缓冲(很口语)</td><td><en>It was like, really big.</en></td></tr>\
<tr><td><en>Let me see…</en></td><td>争取思考时间</td><td><en>Let me see… maybe Friday.</en></td></tr>\
<tr><td><en>Actually,</en></td><td>引出(小)转折</td><td><en>Actually, I changed my mind.</en></td></tr>\
</table>\
<div class="ex">🎯 卡壳时别沉默,用填充词接住:想不出下一句,说 "Well…" 或 "Let me think…",大脑就有了喘息,对话也不断。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:一句话塞五个 like。</b>填充词适量是润滑,过量像口头禅毛病。用来缓冲,不是凑字。</div>\
<div class="pit"><b>坑 2:卡住就彻底沉默。</b>沉默最尴尬。哪怕 "Um, well…" 也比静默好,给自己和对方一个过渡。</div>\
<div class="pit"><b>坑 3:正式场合滥用 like/you know。</b>面试、演讲里太多填充词显得不专业。随意聊天用得开,正式场合收着点。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '填充词(well, you know, I mean)的主要作用是?',
      options: ['纯属废话应该去掉', '争取思考时间、让对话自然不冷场', '表示生气', '正式场合专用'],
      answer: 1,
      explain: '填充词给思考留气口、让表达自然,卡壳时用它们接住,比沉默强得多。'
    },
    {
      type: 'choice',
      q: '关于填充词的使用,正确的是?',
      options: ['越多越地道', '适量是润滑,过量像毛病', '正式场合要多用', '只能用一个'],
      answer: 1,
      explain: '适量填充词让口语自然;过量(满嘴 like)则成毛病,正式场合更要收着。'
    }
  ]
});
