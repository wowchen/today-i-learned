/* 写作模块第 2 课:标点符号。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-02-punctuation',
  module: 'write',
  order: 2,
  title: '标点符号:英文的规矩和中文不同',
  minutes: 5,
  keywords: ['标点', 'punctuation', '逗号', '句号', '撇号', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:英文标点和中文长得像、用法却不同——而且英文标点是"半角"的,后面要跟一个空格。</strong></p>\
<p>标点错误是中国人英文写作的隐形扣分项。中文的"，。"和英文的 ", ." 不是一回事。这一课把高频差异讲清。</p>',

    when: '\
<p>写任何英文时,每个标点都涉及。养成正确习惯,文章立刻显得专业。</p>',

    how: '\
<p><strong>关键规则:</strong></p>\
<table>\
<tr><th>规则</th><th>正确</th><th>常见错</th></tr>\
<tr><td>用半角标点 + 后跟空格</td><td>I like tea, coffee, and milk.</td><td>I like tea，coffee(中文逗号)</td></tr>\
<tr><td>句末一个空格接下句</td><td>Hi. How are you?</td><td>Hi.How are you?(没空格)</td></tr>\
<tr><td>撇号表缩写/所有格</td><td>I\'m · it\'s · Tom\'s book</td><td>Im · its(该缩写时)</td></tr>\
<tr><td>句首和专名大写</td><td>I live in New York.</td><td>i live in new york</td></tr>\
</table>\
<div class="ex">🎯 高频混淆:<en>it\'s</en> = it is(有撇号);<en>its</en> = 它的(无撇号,所有格)。<en>It\'s a dog. Its tail is long.</en> 两个都对,别搞反。</div>\
<div class="ex">💡 美式特有:句末引号里,句号逗号放<strong>引号内</strong>:She said, "Hello." (句号在引号里,这是美式规矩)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用中文全角标点。</b>"，。！？" 是中文的,英文要用半角 ", . ! ?"。中英混排时尤其容易漏。</div>\
<div class="pit"><b>坑 2:标点后不空格。</b>英文每个句末标点、逗号后要跟一个空格:"Hi, there" 不是 "Hi,there"。</div>\
<div class="pit"><b>坑 3:its 和 it\'s 混。</b>it\'s=it is;its=它的。这是英语母语者都常错的,写完检查一遍。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '英文写作中,逗号后面应该?',
      options: ['紧贴下一个词', '跟一个空格', '换行', '加两个空格'],
      answer: 1,
      explain: '英文标点是半角的,逗号、句号后要跟一个空格:"tea, coffee" 不是 "tea,coffee"。'
    },
    {
      type: 'choice',
      q: '"它的尾巴很长" 中"它的"应该用?',
      options: ["it's", 'its', 'its\'', 'it is'],
      answer: 1,
      explain: 'its(无撇号)=它的(所有格);it\'s(有撇号)=it is。Its tail is long.'
    },
    {
      type: 'fill',
      q: '英文句首字母和专有名词要____写。(填:大 或 小)',
      answer: ['大'],
      explain: '句首字母、专有名词(人名地名 I New York)、星期月份都要大写。'
    }
  ]
});
