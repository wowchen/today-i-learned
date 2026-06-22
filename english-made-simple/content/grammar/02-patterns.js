/* 语法模块第 2 课:五大基本句型。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-02-patterns',
  module: 'grammar',
  order: 2,
  title: '五大基本句型:英语句子的骨架',
  minutes: 5,
  keywords: ['句型', '五大句型', 'sentence patterns', '主谓宾', 'SVO', '句子结构'],

  sections: {
    what: '\
<p><strong>一句话:再长再复杂的英语句子,骨架都跑不出这五种基本句型——认得骨架,长难句就拆得开,自己造句也不乱。</strong></p>\
<p>英语和中文一个最大的不同:英语句子<strong>语序很固定</strong>(基本是"谁 + 做 + 什么")。先把五个骨架记牢,等于拿到了所有句子的"地图"。</p>',

    when: '\
<p>读句子拆结构、自己写句子搭框架时。判断一句话对不对,先看它符不符合某个基本句型。</p>',

    how: '\
<p><strong>五大基本句型(S 主语 V 谓语 O 宾语 C 补语,点击听例句):</strong></p>\
<table>\
<tr><th>句型</th><th>结构</th><th>例句</th></tr>\
<tr><td>① 主+谓</td><td>S + V</td><td><en>Birds fly.</en> 鸟飞。</td></tr>\
<tr><td>② 主+谓+宾</td><td>S + V + O</td><td><en>I like coffee.</en> 我喜欢咖啡。</td></tr>\
<tr><td>③ 主+系+表</td><td>S + V + C</td><td><en>She is happy.</en> 她很开心。</td></tr>\
<tr><td>④ 主+谓+双宾</td><td>S + V + O + O</td><td><en>He gave me a book.</en> 他给我一本书。</td></tr>\
<tr><td>⑤ 主+谓+宾+补</td><td>S + V + O + C</td><td><en>We call him Tom.</en> 我们叫他汤姆。</td></tr>\
</table>\
<div class="ex">🎯 关键认知:英语<strong>主语 + 动词</strong>几乎不能省、顺序不能乱。中文"下雨了"没主语,英语必须 <en>It is raining.</en> 补一个 it。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:照搬中文语序。</b>中文"这本书我看过",英文不能 "This book I have read",要按 SVO:<en>I have read this book.</en></div>\
<div class="pit"><b>坑 2:漏掉主语。</b>英语句子几乎都得有主语。"很高兴见到你"要说 <en>It is nice to meet you</en> 或 <en>Nice to meet you</en>(省略也是固定说法),不能直译漏主语。</div>\
<div class="pit"><b>坑 3:漏掉 be 动词。</b>"她很开心"是 <en>She is happy</en>,不能 "She happy"。形容词当表语,前面必须有系动词 is/are/am。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"I like coffee" 属于哪种基本句型?',
      options: ['主+谓', '主+谓+宾(SVO)', '主+系+表', '主+谓+双宾'],
      answer: 1,
      explain: 'I(主)+ like(谓)+ coffee(宾)= 主谓宾(SVO),英语最常见的句型。'
    },
    {
      type: 'choice',
      q: '"She happy" 错在哪?',
      options: ['少了宾语', '少了 be 动词(应为 She is happy)', '主语错', '语序错'],
      answer: 1,
      explain: '形容词 happy 当表语,前面必须有系动词:She is happy。这是中国人高频错误。'
    },
    {
      type: 'fill',
      q: '中文"下雨了"没有主语,英语必须补一个主语:____ is raining.',
      answer: ['It', 'it'],
      explain: '英语句子几乎都要有主语,天气、时间等用 it 占位:It is raining.'
    }
  ]
});
