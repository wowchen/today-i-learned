/* 语法模块第 6 课:现在完成时。中国人最懵的时态。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-06-perfect',
  module: 'grammar',
  order: 6,
  title: '现在完成时:have done 到底在说什么',
  minutes: 5,
  keywords: ['现在完成时', 'present perfect', 'have done', '时态', 'have', 'has'],

  sections: {
    what: '\
<p><strong>一句话:现在完成时(have/has + 过去分词)讲的是"过去发生、但和现在有关联"的事——重点不在过去那一刻,而在它对现在的影响。</strong></p>\
<p>这是中国人最懵的时态,因为中文没有对应形式。诀窍:它是连接"过去"和"现在"的桥。<en>I have lost my key.</en>(我钥匙丢了)——重点不是"什么时候丢的",而是"现在没钥匙"这个后果。</p>',

    when: '\
<p>三种典型场景:① 过去的事影响现在;② 从过去持续到现在;③ 人生经历(去没去过、做没做过)。</p>',

    how: '\
<p><strong>结构:have/has + 过去分词(done)。</strong>(点击听)</p>\
<table>\
<tr><th>用法</th><th>例句</th><th>言外之意</th></tr>\
<tr><td>影响现在</td><td><en>I have finished my work.</en></td><td>所以现在我有空了</td></tr>\
<tr><td>持续至今</td><td><en>I have lived here for ten years.</en></td><td>十年前到现在一直住</td></tr>\
<tr><td>人生经历</td><td><en>Have you ever been to America?</en></td><td>到目前为止去过没</td></tr>\
</table>\
<p><strong>对比一般过去时(关键区别):</strong></p>\
<div class="ex"><en>I lost my key yesterday.</en>(过去时:只陈述昨天丢了这件事,可能已找到)<br>\
<en>I have lost my key.</en>(完成时:现在还没找到,正没钥匙)<br>\
标志词:already, yet, ever, never, just, for, since 常配完成时。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:和具体过去时间连用。</b>完成时不能跟 yesterday、last week 这种明确过去时间点。"昨天丢的"用过去时 lost,不用 have lost。</div>\
<div class="pit"><b>坑 2:过去分词用错。</b>have 后面是过去分词(done/gone/seen),不规则动词要记第三形:go→gone,see→seen,do→done。</div>\
<div class="pit"><b>坑 3:has/have 不分。</b>he/she/it 用 has,其余用 have:<en>She has finished</en> / <en>They have finished</en>。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"I have lost my key" 强调的是?',
      options: ['钥匙昨天丢的', '现在还没找到、正没钥匙的状态', '钥匙已找到', '钥匙是什么时候买的'],
      answer: 1,
      explain: '现在完成时强调过去动作对现在的影响:丢了→现在没钥匙。重点在当下后果。'
    },
    {
      type: 'choice',
      q: '下面哪个时间词不能和现在完成时连用?',
      options: ['already', 'yet', 'yesterday', 'ever'],
      answer: 2,
      explain: 'yesterday 是明确的过去时间点,要用一般过去时。完成时配 already/yet/ever 等。'
    },
    {
      type: 'fill',
      q: 'She ____ finished her homework.(she 做主语,填 have/has)',
      answer: ['has'],
      explain: '第三人称单数 she 用 has:She has finished。其余人称用 have。'
    }
  ]
});
