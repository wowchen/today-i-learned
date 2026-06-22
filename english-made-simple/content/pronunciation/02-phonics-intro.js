/* 第二课样板:展示"上一课/下一课"路线推进。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-02-phonics-intro',
  module: 'pron',
  order: 2,
  title: '自然拼读:看见单词就会读的秘密',
  minutes: 5,
  keywords: ['自然拼读', 'phonics', '拼读', '见词能读'],

  sections: {
    what: '\
<p><strong>一句话:自然拼读(phonics)就是"看字母组合,直接拼出读音"的能力——美国小孩就是这么学认字的。</strong></p>\
<p>类比汉语拼音:你看到"zhāng"不需要查字典就能读出来。英语里,字母和字母组合也有一套"拼音规则",掌握它,<strong>大约 80% 的常用单词看一眼就能读</strong>,不用死记音标。</p>',

    when: '\
<p>遇到生词想开口读的时候;背单词想"音形绑定"记得牢的时候。</p>\
<div class="ex">📚 顺序建议:先拼读、后音标。拼读管"大多数情况",音标是兜底的"精确字典"。先学拼读不会被符号劝退,这正是本路线的安排。</div>',

    how: '\
<p>感受一下拼读的威力。规则:<strong>辅音 + 短元音 + 辅音(CVC 结构),一个字母一个音,直接连读。</strong>点击听:</p>\
<div class="ex">\
<p><en>c</en> + <en>a</en> + <en>t</en> → <en>cat</en>(猫)</p>\
<p><en>d</en> + <en>o</en> + <en>g</en> → <en>dog</en>(狗)</p>\
<p><en>b</en> + <en>e</en> + <en>d</en> → <en>bed</en>(床)</p>\
</div>\
<p>就这么直接。接下来几课,我们把五个短元音、长元音、辅音一组组吃透,每课 5 分钟。</p>',

    pitfalls: '\
<div class="pit"><b>坑 1:以为拼读是万能的。</b>英语约 20% 的高频词不守规则(如 <en>one</en>、<en>two</en>),这些"违章户"后面单独收拾,先别慌。</div>\
<div class="pit"><b>坑 2:跳过拼读直接背音标。</b>音标是好工具,但 48 个符号对零基础太陡。先用拼读建立"见词能读"的信心,音标课自然水到渠成。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '自然拼读最像汉语里的什么?',
      options: ['偏旁部首', '汉语拼音', '笔画顺序', '四声调'],
      answer: 1,
      explain: '都是"看符号直接读出音"的系统。拼音之于汉字,正如 phonics 之于英文单词。'
    },
    {
      type: 'choice',
      q: '大约多大比例的常用英语单词符合拼读规则?',
      options: ['30%', '50%', '80%', '100%'],
      answer: 2,
      explain: '约 80% 守规则;剩下 20% 的"违章户"(one、two 等)需要单独记,后续课程会专门处理。'
    }
  ]
});
