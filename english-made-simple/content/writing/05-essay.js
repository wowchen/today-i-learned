/* 写作模块第 5 课:文章结构。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-05-essay',
  module: 'write',
  order: 5,
  title: '把段落组成文章:开头-主体-结尾',
  minutes: 5,
  keywords: ['文章', 'essay', '结构', '开头', '结尾', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:一篇英文文章的经典骨架是"开头-主体-结尾"三段式——开头亮观点,主体分点论证,结尾收回观点。</strong></p>\
<p>段落会写了,把几段按逻辑组织起来就是文章。英文议论文最经典的是"汉堡结构":上下两片面包(开头/结尾)夹中间几层馅(主体段)。套路清晰,先学会它。</p>',

    when: '\
<p>写作文、表达观点的长文、正式说明时。</p>',

    how: '\
<p><strong>三段式(汉堡)结构:</strong></p>\
<table>\
<tr><th>部分</th><th>写什么</th></tr>\
<tr><td>开头段</td><td>引入话题 + 亮出你的观点(thesis)</td></tr>\
<tr><td>主体段 ×2-3</td><td>每段一个理由,主题句+展开(回顾上一课)</td></tr>\
<tr><td>结尾段</td><td>重申观点 + 总结,不引入新论点</td></tr>\
</table>\
<div class="ex">🎯 一个微型框架(谈"为什么学英语"):<br>\
<strong>开头:</strong>Learning English is worth the effort.(亮观点)<br>\
<strong>主体1:</strong>First, it opens job opportunities.<br>\
<strong>主体2:</strong>Second, it connects you to the world.<br>\
<strong>结尾:</strong>In short, English is a skill worth having.(重申)</div>\
<div class="ex">💡 善用"路标词":First / Second / Finally(主体)、In conclusion / In short(结尾),让读者一眼看出结构。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:开头不亮观点。</b>英文议论文开头就要让读者知道你的立场(thesis),别绕半天不表态。</div>\
<div class="pit"><b>坑 2:结尾引入新论点。</b>结尾是收口,只重申和总结,不要冒出新理由。</div>\
<div class="pit"><b>坑 3:段落之间没过渡。</b>用 First/Second/However 等路标词衔接,文章才有逻辑流(下一课专讲)。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '英文议论文经典的"汉堡结构"是?',
      options: ['只有主体', '开头-主体-结尾三段式', '开头放结尾', '没有结构'],
      answer: 1,
      explain: '开头亮观点、主体分点论证、结尾重申总结,像汉堡上下面包夹馅。'
    },
    {
      type: 'choice',
      q: '文章结尾段应该?',
      options: ['引入新的论点', '重申观点+总结,不加新论点', '另起话题', '只写一个词'],
      answer: 1,
      explain: '结尾是收口,只重申观点和总结。引入新论点会让文章散掉。'
    },
    {
      type: 'fill',
      q: '开头段里亮明你核心观点的那句话,英文叫 ____(论点句)。',
      answer: ['thesis', 'thesis statement'],
      explain: 'thesis(statement),即论点句,英文文章开头就该亮出立场。'
    }
  ]
});
