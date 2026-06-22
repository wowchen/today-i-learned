/* 文化模块第 8 课:禁忌话题与政治正确。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'culture-08-taboo',
  module: 'culture',
  order: 8,
  title: '禁忌话题与政治正确',
  minutes: 5,
  keywords: ['禁忌', 'taboo', '政治正确', 'PC', '文化', '敏感话题'],

  sections: {
    what: '\
<p><strong>一句话:美国社会对某些话题和用词非常敏感(种族、性别、宗教、政治)——避开雷区、用对"政治正确"的词,是基本的尊重。</strong></p>\
<p>"政治正确"(political correctness)说白了就是"用不冒犯人的方式说话"。不了解,可能无心说错话伤了人。这一课帮你避开主要雷区。</p>',

    when: '\
<p>任何社交、职场、公开场合。尤其和不熟的人、多元背景的人交往时。</p>',

    how: '\
<p><strong>两条原则:避雷区 + 用得体词。</strong></p>\
<table>\
<tr><th>避开的话题</th><th>原因</th></tr>\
<tr><td>种族 / 肤色</td><td>极敏感,玩笑都不行</td></tr>\
<tr><td>政治立场</td><td>极易争吵,职场尤忌</td></tr>\
<tr><td>宗教信仰</td><td>私人领域,不评判</td></tr>\
<tr><td>体重 / 外貌 / 年龄</td><td>易冒犯</td></tr>\
</table>\
<table>\
<tr><th>得体用词(中性)</th><th>避免</th></tr>\
<tr><td><en>firefighter</en>(消防员)</td><td>fireman(带性别)</td></tr>\
<tr><td><en>flight attendant</en></td><td>stewardess</td></tr>\
<tr><td><en>they</en>(不确定性别时)</td><td>默认 he</td></tr>\
</table>\
<div class="ex">💡 不确定怎么称呼某群体时,最安全是"问对方偏好"或用最中性的词。诚意比用词完美更重要,真说错了道个歉即可。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:拿种族/宗教开玩笑。</b>在美国这是严重红线,哪怕"无恶意"也绝不可碰。</div>\
<div class="pit"><b>坑 2:职场聊政治。</b>美国政治分歧大,职场和初识场合避谈政治,以免引发冲突。</div>\
<div class="pit"><b>坑 3:用带性别/老旧的词。</b>policeman→police officer、stewardess→flight attendant。用中性职业词更得体。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"政治正确"(political correctness)的核心是?',
      options: ['谈论政治', '用不冒犯人的方式说话', '支持某个党派', '一种语法'],
      answer: 1,
      explain: '政治正确就是"用尊重、不冒犯人的方式表达",尤其涉及种族、性别等敏感领域。'
    },
    {
      type: 'choice',
      q: '下面哪个是更得体的中性职业称呼?',
      options: ['fireman', 'firefighter', 'stewardess', 'policeman'],
      answer: 1,
      explain: 'firefighter(不带性别)比 fireman 得体。类似:flight attendant、police officer。'
    },
    {
      type: 'fill',
      q: '在美国职场和初识场合,应尽量避谈 ____ 立场,以免引发冲突。',
      answer: ['政治', '党派'],
      explain: '政治立场在美国分歧大,职场和不熟的人之间避谈,以免争吵。'
    }
  ]
});
