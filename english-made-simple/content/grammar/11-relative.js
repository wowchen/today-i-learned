/* 语法模块第 11 课:定语从句。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-11-relative',
  module: 'grammar',
  order: 11,
  title: '定语从句:who which that',
  minutes: 5,
  keywords: ['定语从句', 'relative clause', 'who', 'which', 'that', '从句'],

  sections: {
    what: '\
<p><strong>一句话:定语从句就是"用一整句话去修饰一个名词"——把两句话用 who/which/that 接成一句,让表达更紧凑。</strong></p>\
<p>中文修饰语放名词前面("那个会说英语的人"),英语放<strong>后面</strong>("the person who speaks English")。语序相反,这是中国人最别扭的点。学会它,长句就能自己造。</p>',

    when: '\
<p>想在一个名词后面补充说明"是哪个/什么样的"时。书面和口语都极常用。</p>',

    how: '\
<p><strong>关系词怎么选:看修饰的是人还是物。</strong>(点击听)</p>\
<table>\
<tr><th>关系词</th><th>修饰</th><th>例句</th></tr>\
<tr><td>who</td><td>人</td><td><en>The man who called you is my dad.</en></td></tr>\
<tr><td>which</td><td>物</td><td><en>The book which I bought is good.</en></td></tr>\
<tr><td>that</td><td>人或物都行</td><td><en>The car that I want is red.</en></td></tr>\
</table>\
<div class="ex">🎯 两句变一句:<br>① The woman is a doctor. ② She lives next door.<br>→ <en>The woman who lives next door is a doctor.</en> 住隔壁的那位女士是医生。<button class="say-all" data-say="The woman who lives next door is a doctor.">▶ 听</button></div>\
<div class="ex">💡 当关系词在从句里作宾语时,常可省略:<en>The book (that) I bought</en> —— that 可省。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把修饰语放名词前。</b>受中文影响想说 "who speaks English person",错。英语定语从句放名词<strong>后</strong>:the person who speaks English。</div>\
<div class="pit"><b>坑 2:who/which 混用。</b>修饰人用 who,修饰物用 which。that 两者都行但更口语。"我买的书"是 the book which/that,不是 who。</div>\
<div class="pit"><b>坑 3:从句里重复宾语。</b>"the book that I bought it" 多了个 it。关系词已经代替了那个名词,别再重复:the book that I bought。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"给你打电话的那个男人" 用哪个关系词?',
      options: ['The man which called you', 'The man who called you', 'The man what called you', 'The man where called you'],
      answer: 1,
      explain: '修饰人用 who:The man who called you。which 修饰物,这里是人。'
    },
    {
      type: 'choice',
      q: '英语定语从句相对中文,位置上的最大不同是?',
      options: ['放名词前面', '放名词后面', '放句首', '放句尾'],
      answer: 1,
      explain: '中文修饰语在名词前("会英语的人"),英语定语从句在名词后(the person who...)。语序相反。'
    },
    {
      type: 'fill',
      q: '"我买的那本书" → The book ____ I bought.(填修饰物的关系词,that 也可)',
      answer: ['that', 'which'],
      explain: '修饰物用 which 或 that(作宾语时还可省略):The book (that) I bought。'
    }
  ]
});
