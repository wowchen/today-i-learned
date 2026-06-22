/* 语法模块第 5 课:将来时 will / be going to。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-05-future',
  module: 'grammar',
  order: 5,
  title: '将来时:will 和 be going to',
  minutes: 5,
  keywords: ['将来时', 'future', 'will', 'be going to', 'gonna', '时态'],

  sections: {
    what: '\
<p><strong>一句话:表示"将来要做"有两个常用工具——will(临时决定/预测)和 be going to(已有的计划/打算)。意思接近,语感有别。</strong></p>\
<p>好消息:将来时不用变动词,只在前面加 will 或 be going to。难点在<strong>什么时候用哪个</strong>。</p>',

    when: '\
<p>说计划、预测、承诺、临时起意时。日常口语里 be going to 常缩成 gonna(回顾发音第 16 课)。</p>',

    how: '\
<p><strong>will:说话当下临时决定、预测、承诺。</strong>(点击听)</p>\
<div class="ex"><en>I will help you.</en> 我来帮你(当场决定)。<br>\
<en>It will rain tomorrow.</en> 明天会下雨(预测)。<br>\
口语缩写 <en>I\'ll call you.</en></div>\
<p><strong>be going to:之前就有的计划、有迹象的预测。</strong></p>\
<div class="ex"><en>I am going to visit my parents this weekend.</en> 我这周末打算看父母(早计划好的)。<br>\
<en>Look at the clouds — it is going to rain.</en> 看那云,要下雨了(有迹象)。</div>\
<table>\
<tr><th></th><th>will</th><th>be going to</th></tr>\
<tr><td>语感</td><td>临时决定/纯预测/承诺</td><td>事先的计划/有迹象</td></tr>\
<tr><td>例</td><td><en>OK, I will do it.</en></td><td><en>I am going to do it.</en>(早想好)</td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:will 后面加 to 或变形。</b>will 后跟动词原形:<en>I will go</en>,不是 "will to go" 也不是 "will goes"。</div>\
<div class="pit"><b>坑 2:计划好的事用 will。</b>早定好的计划更自然用 be going to:"我要去旅行(早计划)" → <en>I am going to travel</en> 比 "I will travel" 贴切。</div>\
<div class="pit"><b>坑 3:写作里写 gonna。</b>gonna 是 going to 的口语缩读,正式写作要写完整。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '别人提到需要帮忙,你当场决定帮,最自然说?',
      options: ['I am going to help you', 'I will help you', 'I help you', 'I helping you'],
      answer: 1,
      explain: '说话当下的临时决定用 will:I will help you。be going to 更偏"早就计划好"。'
    },
    {
      type: 'choice',
      q: '"我这周末打算看父母"(早计划好)更自然用?',
      options: ['I will visit', 'I am going to visit', 'I visit', 'I visiting'],
      answer: 1,
      explain: '事先有的计划用 be going to:I am going to visit my parents this weekend.'
    },
    {
      type: 'fill',
      q: 'will 后面的动词要用____形(原形/过去式)。',
      answer: ['原', '原形'],
      explain: 'will + 动词原形:I will go(不是 will to go,也不是 will goes)。'
    }
  ]
});
