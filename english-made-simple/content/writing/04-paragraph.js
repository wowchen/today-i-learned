/* 写作模块第 4 课:段落。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-04-paragraph',
  module: 'write',
  order: 4,
  title: '把句子连成段落:主题句+展开',
  minutes: 5,
  keywords: ['段落', 'paragraph', '主题句', 'topic sentence', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:一个英文段落讲一个意思,结构是"主题句开头 + 展开句支撑"——这种"先说结论再解释"的顺序,和中文常见的铺垫式相反。</strong></p>\
<p>回顾阅读第2课:英文段落多为主题句开头。写作时反过来用这个规律:先一句话亮出本段中心,再用细节展开。读者一眼就知道你要说什么。</p>',

    when: '\
<p>写任何超过一句话的内容时。邮件正文、作文段落都按这个结构。</p>',

    how: '\
<p><strong>英文段落标准结构:</strong></p>\
<table>\
<tr><th>部分</th><th>作用</th></tr>\
<tr><td>主题句(topic sentence)</td><td>开头一句,亮出本段中心</td></tr>\
<tr><td>展开句(supporting)</td><td>用例子/理由/细节支撑</td></tr>\
<tr><td>(可选)收尾句</td><td>小结或过渡</td></tr>\
</table>\
<div class="ex">🎯 一个范例段:<br>\
<strong>主题句:</strong><en>Reading every day has many benefits.</en>(每天阅读好处多)<br>\
<strong>展开:</strong><en>It builds your vocabulary. It also improves your grammar naturally. Most importantly, it makes you a better writer.</en><br>\
结构清楚:先结论,后三条支撑。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:中文式层层铺垫后才点题。</b>英文习惯开门见山,主题句放段首。把结论先说,读者更易跟。</div>\
<div class="pit"><b>坑 2:一段塞多个中心。</b>一段一个意思。讲到新意思就另起一段,别一段到底。</div>\
<div class="pit"><b>坑 3:展开句跑题。</b>每个展开句都要支撑主题句。和中心无关的句子,删掉或挪走。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '英文段落的典型结构是?',
      options: ['层层铺垫,结尾才点题', '主题句开头,展开句支撑', '没有结构', '只有一句话'],
      answer: 1,
      explain: '英文段落多"先结论后解释":主题句(topic sentence)开头亮中心,展开句支撑。'
    },
    {
      type: 'choice',
      q: '一个段落应该?',
      options: ['讲尽量多的意思', '只讲一个中心意思', '不要主题句', '越长越好'],
      answer: 1,
      explain: '一段一个中心意思。出现新意思就另起一段,保持每段聚焦。'
    },
    {
      type: 'fill',
      q: '段落开头那句亮明中心的话,英文叫 ____ sentence。',
      answer: ['topic'],
      explain: 'topic sentence(主题句),英文段落通常以它开头。'
    }
  ]
});
