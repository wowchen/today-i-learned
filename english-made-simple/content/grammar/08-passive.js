/* 语法模块第 8 课:被动语态。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-08-passive',
  module: 'grammar',
  order: 8,
  title: '被动语态:be + done',
  minutes: 5,
  keywords: ['被动语态', 'passive', 'be done', '被动', '过去分词'],

  sections: {
    what: '\
<p><strong>一句话:被动语态(be + 过去分词)用来说"某事被做了",当你更关心"动作对象"而不是"谁做的"时用它。</strong></p>\
<p>主动:<en>Tom broke the window.</en>(汤姆打破了窗户——关心汤姆)。被动:<en>The window was broken.</en>(窗户被打破了——关心窗户,不在乎谁干的)。英语里被动比中文常见得多,尤其在正式、客观的语境。</p>',

    when: '\
<p>① 不知道或不想说谁做的;② 动作对象比执行者更重要;③ 说明书、新闻、科技文里大量使用,显得客观。</p>',

    how: '\
<p><strong>结构:be 动词 + 过去分词。时态变化体现在 be 上。</strong>(点击听)</p>\
<table>\
<tr><th>时态</th><th>主动</th><th>被动</th></tr>\
<tr><td>现在</td><td>They make cars here.</td><td><en>Cars are made here.</en></td></tr>\
<tr><td>过去</td><td>Someone stole my bike.</td><td><en>My bike was stolen.</en></td></tr>\
<tr><td>完成</td><td>They have built it.</td><td><en>It has been built.</en></td></tr>\
</table>\
<div class="ex">🎯 要说出执行者时,用 by:<en>The book was written by him.</en> 这本书是他写的。<br>但很多时候正因为"不必说谁",才用被动:<en>English is spoken here.</en> 这里说英语(没人在乎具体谁说)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:忘了 be 动词。</b>被动一定有 be:是 <en>The window was broken</en>,不是 "The window broken"。be 不能省。</div>\
<div class="pit"><b>坑 2:用错过去分词。</b>be 后面必须是过去分词(done/made/written),不是原形或过去式:是 "was broken" 不是 "was broke"。</div>\
<div class="pit"><b>坑 3:滥用被动。</b>口语里多数还是主动更自然。被动用在"对象更重要/执行者不重要"时,别为被动而被动。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '被动语态的基本结构是?',
      options: ['be + 动词原形', 'be + 过去分词', 'have + 过去分词', 'be + 动词ing'],
      answer: 1,
      explain: '被动 = be 动词 + 过去分词(done)。时态变化体现在 be 上。'
    },
    {
      type: 'choice',
      q: '"我的自行车被偷了" 正确的是?',
      options: ['My bike stole', 'My bike was stole', 'My bike was stolen', 'My bike is steal'],
      answer: 2,
      explain: 'steal 的过去分词是 stolen:My bike was stolen。was(过去)+ stolen(过去分词)。'
    },
    {
      type: 'fill',
      q: '被动句里要说出"谁做的",用介词 ____。例:written ___ him。',
      answer: ['by'],
      explain: '用 by 引出执行者:The book was written by him。但很多被动句正因不必说谁而省略 by。'
    }
  ]
});
