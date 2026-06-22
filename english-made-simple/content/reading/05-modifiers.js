/* 阅读模块第 5 课:长难句拆解②剥修饰。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-05-modifiers',
  module: 'read',
  order: 5,
  title: '长难句拆解②:剥掉从句和修饰',
  minutes: 5,
  keywords: ['长难句', '从句', '修饰', '拆解', 'reading'],

  sections: {
    what: '\
<p><strong>一句话:找到主干后,把包在外面的"修饰层"一块块剥开看清——每一层都是在回答"哪个/什么样/什么时候/为什么"。</strong></p>\
<p>上一课抓主干,这一课处理"被盖住的部分"。长句的修饰无非几种:定语从句(哪个)、介词短语(在哪/何时)、状语从句(因为/如果)。认得每层在修饰谁,整句就透了。</p>',

    when: '\
<p>主干找到了、但想完整理解细节时。尤其读正式文章、合同、说明里的长句。</p>',

    how: '\
<p><strong>常见修饰层,逐层认(点击听例句):</strong></p>\
<table>\
<tr><th>修饰层</th><th>回答</th><th>标志</th></tr>\
<tr><td>定语从句</td><td>哪一个</td><td>who, which, that</td></tr>\
<tr><td>介词短语</td><td>在哪/何时/怎样</td><td>in, on, with, by</td></tr>\
<tr><td>状语从句</td><td>因为/如果/当…时</td><td>because, if, when</td></tr>\
<tr><td>分词修饰</td><td>正在/被…的</td><td>doing, done</td></tr>\
</table>\
<div class="ex">🎯 整句逐层剥(点击听):<br>\
<en>The students who study hard usually get good grades because they review often.</en><br>\
主干:<strong>The students get good grades</strong>(学生取得好成绩)<br>\
+ who study hard(哪些学生:用功的)+ because they review often(为什么:因为常复习)。三层拼起来,意思完整。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:分不清修饰谁。</b>定语从句紧跟它修饰的名词。"the man in the car who is smiling" —— who 修饰离它近的 man,不是 car。位置是线索。</div>\
<div class="pit"><b>坑 2:一次想吃透整句。</b>分层处理:先主干,再一层层加。别想一眼看穿三层嵌套。</div>\
<div class="pit"><b>坑 3:忽略标点提示。</b>逗号常隔开插入语/从句。两个逗号之间的内容往往可以先跳过,读完主干再回看。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '处理长难句修饰成分,推荐的方法是?',
      options: ['一眼看穿全部', '分层处理:先主干,再逐层加修饰', '只读修饰', '忽略所有从句'],
      answer: 1,
      explain: '先抓主干,再一层层把定语从句、状语从句、介词短语加回去,逐层理解。'
    },
    {
      type: 'choice',
      q: '"who study hard" 在 "The students who study hard get good grades" 里回答?',
      options: ['为什么', '哪些学生(用功的)', '什么时候', '在哪里'],
      answer: 1,
      explain: '定语从句 who study hard 回答"哪一个/哪些"——修饰 students,即"用功的学生"。'
    }
  ]
});
