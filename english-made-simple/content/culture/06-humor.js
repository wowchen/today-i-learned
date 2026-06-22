/* 文化模块第 6 课:美式幽默。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-06-humor',
  module: 'culture',
  order: 6,
  title: '美式幽默与玩笑的分寸',
  minutes: 5,
  keywords: ['幽默', 'humor', '玩笑', 'joke', '文化', '讽刺'],

  sections: {
    what: '\
<p><strong>一句话:美式幽默爱用"自嘲、夸张、反讽(sarcasm)"——听懂语气比听懂字面更重要,不然容易把玩笑当真。</strong></p>\
<p>美国人聊天爱开玩笑、爱自嘲,反讽尤其常见:说反话表达真意。听不出"他在开玩笑",容易误会。这一课帮你识别幽默信号。</p>',

    when: '\
<p>和美国人轻松交往、看脱口秀/喜剧、群聊时。识别幽默是融入对话的关键。</p>',

    how: '\
<p><strong>几种常见的美式幽默:</strong></p>\
<table>\
<tr><th>类型</th><th>例</th></tr>\
<tr><td>自嘲(self-deprecating)</td><td>拿自己开玩笑,显得亲和</td></tr>\
<tr><td>反讽(sarcasm)</td><td>下大雨时说 <en>"Great weather, huh?"</en>(其实嫌糟)</td></tr>\
<tr><td>夸张(hyperbole)</td><td><en>"I\'ve told you a million times."</en></td></tr>\
<tr><td>俏皮回应</td><td>用 <en>"Tell me about it."</en>(可不是嘛)接梗</td></tr>\
</table>\
<div class="ex">🎯 识别反讽的信号:语气和字面相反、配合挑眉/拖长音/翻白眼。听到夸张的赞美但语境明明很糟,大概率是反讽。回一句轻松的话接住就好。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:把反讽当真。</b>堵车时朋友说 "Perfect, just perfect.",他是在抱怨不是夸。听语气,别只听字面。</div>\
<div class="pit"><b>坑 2:玩笑开过界。</b>美式幽默也有红线:别拿种族、宗教、外貌、身材开玩笑,容易冒犯。自嘲最安全。</div>\
<div class="pit"><b>坑 3:听不懂硬装笑。</b>没get到梗可以大方说 "I don\'t get it" 或问一句,比尬笑自然。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '下大雨时美国人说 "Great weather, huh?",通常是?',
      options: ['真的觉得天气好', '反讽,其实在抱怨天气糟', '在问你天气', '没有意思'],
      answer: 1,
      explain: '这是 sarcasm(反讽):说反话表达真意。语气和字面相反,听语气别只听字面。'
    },
    {
      type: 'choice',
      q: '美式幽默里最安全、不易冒犯的是?',
      options: ['拿别人外貌开玩笑', '自嘲(拿自己开玩笑)', '种族玩笑', '宗教玩笑'],
      answer: 1,
      explain: '自嘲最安全、显亲和。种族/宗教/外貌/身材都是红线,别碰。'
    }
  ]
});
