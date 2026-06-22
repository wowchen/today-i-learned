/* 写作模块第 6 课:连接词。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-06-connectors',
  module: 'write',
  order: 6,
  title: '连接词:让文章有逻辑流',
  minutes: 5,
  keywords: ['连接词', 'connectors', 'transitions', '过渡词', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:连接词是文章的"路标"——告诉读者句子之间是递进、转折、举例还是总结,逻辑一下就清楚了。</strong></p>\
<p>同样的几句话,加了连接词就有"流动感",没有就像零散的句子堆。它们是写作从"能看懂"到"通顺专业"的关键一跳。</p>',

    when: '\
<p>连接句子和段落时。尤其议论、说明类文章,逻辑越复杂越需要路标。</p>',

    how: '\
<p><strong>按功能分类的连接词(点击听):</strong></p>\
<table>\
<tr><th>功能</th><th>连接词</th></tr>\
<tr><td>递进/并列</td><td><en>also</en> · <en>in addition</en> · <en>moreover</en></td></tr>\
<tr><td>转折</td><td><en>however</en> · <en>but</en> · <en>on the other hand</en></td></tr>\
<tr><td>举例</td><td><en>for example</en> · <en>such as</en> · <en>for instance</en></td></tr>\
<tr><td>因果</td><td><en>because</en> · <en>so</en> · <en>therefore</en> · <en>as a result</en></td></tr>\
<tr><td>顺序</td><td><en>first</en> · <en>then</en> · <en>finally</en></td></tr>\
<tr><td>总结</td><td><en>in conclusion</en> · <en>in short</en> · <en>overall</en></td></tr>\
</table>\
<div class="ex">🎯 对比效果:<br>无连接词:<en>It rained. We stayed home. We watched a movie.</en>(干巴)<br>有连接词:<en>Because it rained, we stayed home. So we watched a movie.</en>(有逻辑流)</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:however 当 but 直接连两句。</b>however 后要逗号,且常另起句:✔ <en>It was late. However, we kept working.</en> 不是 "It was late however we kept working."</div>\
<div class="pit"><b>坑 2:连接词堆太多。</b>每句都 moreover/furthermore 反而累赘。该转折/该举例时才用,不滥用。</div>\
<div class="pit"><b>坑 3:because 和 so 连用。</b>回顾语法第12课:中文"因为…所以…"成对,英文只能选一个。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '连接词在写作里的作用是?',
      options: ['凑字数', '当"路标"标明句子间的逻辑关系', '增加难度', '装饰'],
      answer: 1,
      explain: '连接词标明递进/转折/举例/因果等逻辑,让文章有流动感、读者易跟。'
    },
    {
      type: 'choice',
      q: '"for example" 这个连接词用于?',
      options: ['转折', '举例', '总结', '因果'],
      answer: 1,
      explain: 'for example / such as / for instance 用于举例。'
    },
    {
      type: 'fill',
      q: '表示总结,文章结尾常用 "In ____."(填一个词,意为"总之")',
      answer: ['conclusion', 'short'],
      explain: 'In conclusion / In short / Overall 都可引出总结,用在结尾段。'
    }
  ]
});
