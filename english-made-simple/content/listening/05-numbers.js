/* 听力模块第 5 课:数字地名人名失分点。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'listen-05-numbers',
  module: 'listen',
  order: 5,
  title: '数字、地名、人名:听力失分重灾区',
  minutes: 5,
  keywords: ['听力', '数字', '地名', '人名', 'numbers', '失分'],

  sections: {
    what: '\
<p><strong>一句话:数字(尤其 -teen/-ty)、地名、人名是听力最容易卡壳的三类——它们没法靠语境猜,只能靠专门练耳。</strong></p>\
<p>别的内容听漏一两个词还能连蒙带猜,但电话号码、价格、航班号、人名地名错一个就全错。好在它们有规律可循,练熟就稳。</p>',

    when: '\
<p>听报价、报时间、订票、记地址、听通知公告时——这些场景数字人名密集,最考验。</p>',

    how: '\
<p><strong>难点一:-teen 和 -ty 难分(13 vs 30)。</strong>(点击对比听)</p>\
<div class="ex"><en>thirteen</en> vs <en>thirty</en> · <en>fourteen</en> vs <en>forty</en> · <en>fifteen</en> vs <en>fifty</en><br>\
诀窍:<strong>-teen 重音在后、尾音清晰(thir-TEEN);-ty 重音在前、结尾轻(THIR-ty)。</strong>听重音落哪!</div>\
<p><strong>难点二:数字串要"分块听"。</strong></p>\
<div class="ex">电话、年份回顾词汇第 9-10 课:号码一位位听,年份两位两位听。听到长串别慌,按块切。</div>\
<p><strong>难点三:人名地名——靠积累。</strong></p>\
<div class="ex">常见美国地名先眼熟耳熟:<en>Chicago</en>(发音 /ʃɪˈkɑːɡoʊ/,ch 读 sh!)· <en>Arkansas</en>(末尾 s 不发音)。这类"读音反直觉"的专名,见一个记一个。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:13 和 30 靠尾音猜。</b>语速快时尾音难分,要听<strong>重音位置</strong>:thirTEEN(后)vs THIRty(前)。这是最可靠的线索。</div>\
<div class="pit"><b>坑 2:专名硬拼读。</b><en>Chicago</en> 的 ch 读 sh 不读 ch;很多地名读音反直觉。专名单独记发音,别用拼读硬套。</div>\
<div class="pit"><b>坑 3:听数字想翻译。</b>听到 fifteen 先翻成"十五"再反应,太慢。练到听见 fifteen 直接反应数量,不经过中文。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '区分 thirteen(13)和 thirty(30)最可靠的线索是?',
      options: ['长度', '重音位置:-teen重音在后,-ty重音在前', '音量', '语速'],
      answer: 1,
      explain: 'thirTEEN 重音在后、尾音清晰;THIRty 重音在前、结尾轻。听重音比听尾音可靠。'
    },
    {
      type: 'choice',
      q: 'Chicago 这个地名,ch 读作?',
      options: ['ch(如 chair)', 'sh(如 she)', 'k', '不发音'],
      answer: 1,
      explain: 'Chicago 的 ch 读 /ʃ/(sh)。很多专名读音反直觉,要单独记。'
    }
  ]
});
