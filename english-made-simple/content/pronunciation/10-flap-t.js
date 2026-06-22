/* 第 10 课:浊化 flap T。美式英语招牌特征。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'pron-10-flap-t',
  module: 'pron',
  order: 10,
  title: '浊化 flap T:water 为什么像 wader',
  minutes: 5,
  keywords: ['浊化', 'flap t', 'flap', 'water', '弹舌t', '美音', 'd音'],

  sections: {
    what: '\
<p><strong>一句话:在美式英语里,当 t 夹在两个元音之间、且后面是非重读音节时,它常常变成一个轻快的 d 音——这叫 flap T(弹舌 t)。</strong></p>\
<p>这就是为什么 <en>water</en> 美国人听起来像 "wader"、<en>better</en> 像 "bedder"。这不是懒,是地道美音的标志,英音里没有。学会它,你的耳朵和嘴都会"很美国"。</p>',

    when: '\
<p>触发条件好记:<strong>t(或 tt)前后都是元音,且 t 不在重读音节开头。</strong>满足就倾向浊化。美剧、日常对话里铺天盖地。</p>',

    how: '\
<p>点击下面每组,先听整词,体会那个 t 怎么变软的:</p>\
<table>\
<tr><th>单词</th><th>听起来像</th><th>点击</th></tr>\
<tr><td>water</td><td>wader</td><td><en>water</en></td></tr>\
<tr><td>better</td><td>bedder</td><td><en>better</en></td></tr>\
<tr><td>city</td><td>ciddy</td><td><en>city</en></td></tr>\
<tr><td>little</td><td>liddle</td><td><en>little</en></td></tr>\
<tr><td>party</td><td>pardy</td><td><en>party</en></td></tr>\
</table>\
<div class="ex">🎯 整句感受:<en>I had a little water at the party.</en><button class="say-all" data-say="I had a little water at the party.">▶ 听整句</button> 里面 little、water、party 三个 t 都浊化了。</div>\
<div class="ex">💡 反例:重读音节开头的 t <strong>不</strong>浊化。<en>attend</en>(重音在 tend)、<en>table</en>(开头)里的 t 还是清清楚楚的 t。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:所有 t 都硬念。</b>把 <en>water</en> 念成清脆的 "wa-ter",立刻有"教科书腔"。地道美音里它是软的。</div>\
<div class="pit"><b>坑 2:以为听错了。</b>初学者听到 "I godda go"(I got to go)以为对方说错,其实是 got to 浊化+连读。知道规则,听力障碍就消了。</div>\
<div class="pit"><b>坑 3:过度浊化。</b>不是每个 t 都变。重读音节开头(table、ten、attack)的 t 保持清晰。只在"元音夹击 + 非重读"时才软。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'water 在美式英语里那个 t 通常?',
      options: ['念成清脆的 t', '浊化成轻快的 d 音', '完全不发音', '念成 th'],
      answer: 1,
      explain: 't 夹在两元音间、后接非重读音节时浊化成 d 音,water 听起来像 "wader"。这是美音招牌。'
    },
    {
      type: 'choice',
      q: '下面哪个词的 t 不会浊化?',
      options: ['better', 'city', 'table', 'little'],
      answer: 2,
      explain: 'table 的 t 在重读音节开头,保持清晰。better/city/little 的 t 都在两元音间且非重读,会浊化。'
    }
  ]
});
