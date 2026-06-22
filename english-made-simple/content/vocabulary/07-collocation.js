/* 词汇模块第 7 课:搭配 collocation。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-07-collocation',
  module: 'vocab',
  order: 7,
  title: '搭配:make do take have 怎么配',
  minutes: 5,
  keywords: ['搭配', 'collocation', 'make', 'do', 'take', 'have', '固定搭配'],

  sections: {
    what: '\
<p><strong>一句话:搭配就是"哪些词习惯凑一起用"——英语里是 <en>make a decision</en>(做决定),不是 "do a decision"。词对了搭配错了,照样是中式英语。</strong></p>\
<p>母语者不是逐词翻译,而是整块整块地说。把搭配当"词组套餐"记,既地道又省脑子。这一课专攻最易混的 make / do / take / have。</p>',

    when: '\
<p>说话写句子时,动词配名词的瞬间。记住搭配,就不会逐字硬翻"做作业"该用 do 还是 make。</p>',

    how: '\
<p><strong>四个"万能动词"各有地盘,点击听:</strong></p>\
<table>\
<tr><th>动词</th><th>大致地盘</th><th>常见搭配(点击听)</th></tr>\
<tr><td>make</td><td>"创造出"一个结果</td><td><en>make a decision</en> · <en>make money</en> · <en>make a mistake</en></td></tr>\
<tr><td>do</td><td>泛指"做"事务/工作</td><td><en>do homework</en> · <en>do the dishes</en> · <en>do business</en></td></tr>\
<tr><td>take</td><td>"拿取/花费/进行"</td><td><en>take a shower</en> · <en>take a break</en> · <en>take time</en></td></tr>\
<tr><td>have</td><td>"拥有/经历"一段</td><td><en>have lunch</en> · <en>have fun</en> · <en>have a meeting</en></td></tr>\
</table>\
<div class="ex">🎯 高频对比记牢:<en>make a decision</en> ✔ / do a decision ✗;<en>do homework</en> ✔ / make homework ✗;<en>take a shower</en> ✔ / make a shower ✗。整块背,别拆。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用中文思路配动词。</b>中文"做决定/做作业"都用"做",英文却分 make a decision / do homework。别套中文,记英文整块。</div>\
<div class="pit"><b>坑 2:背了单词不背搭配。</b>知道 decision 这个词没用,要知道它配 make。查词典时多看例句里的搭配。</div>\
<div class="pit"><b>坑 3:以为搭配能推理。</b>搭配大多是约定俗成,没那么多道理。<en>have a shower</en>(英)/ <en>take a shower</en>(美)甚至英美都不同。记常用的就好。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"做决定"地道的英语搭配是?',
      options: ['do a decision', 'make a decision', 'take a decision', 'have a decision'],
      answer: 1,
      explain: 'make a decision。make 表示"创造出一个结果",决定是被"做出来"的。'
    },
    {
      type: 'choice',
      q: '"做作业"用哪个动词?',
      options: ['make homework', 'do homework', 'take homework', 'have homework'],
      answer: 1,
      explain: 'do homework。do 泛指做事务性的事;注意不能用 make。'
    },
    {
      type: 'fill',
      q: '"洗澡"(美式)的搭配是 ____ a shower。',
      answer: ['take'],
      explain: '美式 take a shower(英式常说 have a shower)。take 表示"进行某活动"。'
    }
  ]
});
