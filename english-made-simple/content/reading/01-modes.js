/* 阅读模块第 1 课:精读 vs 泛读。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-01-modes',
  module: 'read',
  order: 1,
  title: '精读 vs 泛读:两种读法各管什么',
  minutes: 5,
  keywords: ['阅读', '精读', '泛读', 'intensive', 'extensive', 'reading'],

  sections: {
    what: '\
<p><strong>一句话:阅读分两种——精读"抠细节学语言",泛读"求量培语感"。用错了读法,要么累死要么白读。</strong></p>\
<p>和听力的精听/泛听是一个道理。一篇文章是该一句句抠,还是一目十行扫,取决于你的目的。这一课帮你分清,后面几课分别细讲。</p>',

    when: '\
<p>拿起任何英文材料前,先问自己:我是要"学透这篇的语言点"(精读),还是"快速获取信息/磨语感"(泛读)?</p>',

    how: '\
<p><strong>两种读法对比:</strong></p>\
<table>\
<tr><th></th><th>精读 intensive</th><th>泛读 extensive</th></tr>\
<tr><td>目的</td><td>学语言:词汇/句型/语法</td><td>获取信息 + 培养语感</td></tr>\
<tr><td>速度</td><td>慢,逐句</td><td>快,整体</td></tr>\
<tr><td>遇生词</td><td>查、记、收藏</td><td>能猜则猜,不打断</td></tr>\
<tr><td>材料量</td><td>短,一段到一篇</td><td>大,整本书/大量文章</td></tr>\
<tr><td>适合</td><td>教材课文、好范文</td><td>小说、新闻、感兴趣的内容</td></tr>\
</table>\
<div class="ex">🎯 最佳组合:精读练"能力上限",泛读练"阅读速度和语感"。同一篇可以先泛读抓大意,再挑精彩段落精读。两条腿走路。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:所有材料都精读。</b>每篇都逐句查词,读得慢又痛苦,很快放弃。大部分阅读应该是泛读。</div>\
<div class="pit"><b>坑 2:泛读时逢词必查。</b>泛读遇生词就停下查,破坏流畅、读不快。能猜就猜,实在关键再查。</div>\
<div class="pit"><b>坑 3:精读不输出。</b>精读完不记词、不收藏好句,等于没精读。配合生词本沉淀下来。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '泛读(extensive reading)的主要目的是?',
      options: ['抠每个语法点', '快速获取信息、培养语感', '背下全文', '查所有生词'],
      answer: 1,
      explain: '泛读求量和语感、快速获取信息;精读才是逐句抠语言点。两者目的不同。'
    },
    {
      type: 'choice',
      q: '泛读时遇到生词,正确做法通常是?',
      options: ['每个都立刻查', '能猜则猜,不打断阅读', '停下背下来', '放弃整篇'],
      answer: 1,
      explain: '泛读重流畅,遇生词能猜就猜,只在关键且影响理解时才查,保持阅读速度。'
    }
  ]
});
