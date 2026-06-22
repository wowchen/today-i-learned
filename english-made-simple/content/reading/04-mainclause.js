/* 阅读模块第 4 课:长难句拆解①找主干。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-04-mainclause',
  module: 'read',
  order: 4,
  title: '长难句拆解①:先揪出主干',
  minutes: 5,
  keywords: ['长难句', '主干', '主谓宾', 'reading', '句子分析'],

  sections: {
    what: '\
<p><strong>一句话:再长的英语句子,核心都只是一个简单的"主谓宾"——先找到这个主干,句子瞬间清晰,剩下的都是装饰。</strong></p>\
<p>长难句吓人,是因为主干被一堆修饰、从句包裹。回顾语法第 2 课的五大句型:不管多长,先问"谁 + 做了 + 什么"。抓住主干,长句就驯服了一半。</p>',

    when: '\
<p>读到一个长到看不懂的句子时。第一动作不是查词,是找主干。</p>',

    how: '\
<p><strong>找主干两步:</strong></p>\
<table>\
<tr><th>步骤</th><th>做什么</th></tr>\
<tr><td>① 找主语和谓语动词</td><td>谁(主语)+ 核心动作(谓语)</td></tr>\
<tr><td>② 暂时盖住修饰成分</td><td>从句、介词短语、插入语先不管</td></tr>\
</table>\
<div class="ex">🎯 实战拆解(点击听原句):<br>\
<en>The book that I bought yesterday is really interesting.</en><br>\
盖住修饰 "that I bought yesterday"(定语从句)→ 主干是 <strong>The book is interesting.</strong>(书很有趣)。一下就懂了。</div>\
<div class="ex">📌 主干永远是"谁怎么样/谁做什么"。先抓住它,再把盖住的修饰一块块加回去理解细节。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:从第一个词逐字啃到最后。</b>长句这样读必晕。先跳着找主谓宾,框架立住再补细节。</div>\
<div class="pit"><b>坑 2:被从句带跑。</b>看到 that/which/who 引导的从句,知道那是"修饰",不是主句核心,先放一边。</div>\
<div class="pit"><b>坑 3:把介词短语当主语。</b>"In the morning, the manager…" 的主语是 manager 不是 morning。介词短语 In the morning 只是状语。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '读长难句,第一步应该?',
      options: ['查所有生词', '找出主谓宾主干', '从头逐字翻译', '看最后一个词'],
      answer: 1,
      explain: '先找主干(谁+做+什么),盖住修饰成分,句子立刻清晰。这比逐字啃高效得多。'
    },
    {
      type: 'choice',
      q: '"The book that I bought yesterday is interesting" 的主干是?',
      options: ['I bought yesterday', 'The book is interesting', 'that I bought', 'yesterday is interesting'],
      answer: 1,
      explain: '盖住定语从句 "that I bought yesterday",主干是 The book is interesting。'
    },
    {
      type: 'fill',
      q: '"In the morning, the manager left" 这句的主语是 ____。',
      answer: ['manager', 'the manager'],
      explain: '主语是 manager。"In the morning" 是介词短语作状语,不是主语。'
    }
  ]
});
