/* 旅行模块第 12 课:海关申报 + 提取行李。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-12-customs',
  module: 'travel',
  order: 12,
  title: '入境②:海关申报 + 提取行李',
  minutes: 5,
  keywords: ['海关', 'customs', '申报', 'declare', '提取行李', 'baggage claim', '转盘', 'carousel', '现金'],

  sections: {
    what: '\
<p><strong>一句话:过完边检去取行李,再走海关。海关只问一句 <en>Anything to declare?</en>——带了规定物品就如实说、说"自用",没带就 <en>Nothing to declare.</en></strong></p>\
<p>场景地图:先到 <strong>baggage claim</strong> 找对应转盘(carousel)取箱子,再走绿色/红色通道过海关。诚实申报几乎都放行,瞒报被查才麻烦。</p>',

    when: '\
<p>入境查验后取托运行李、通过海关检查时。</p>',

    how: '\
<p><strong>取行李(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>CA981 的行李在几号转盘?</td><td><en>Which carousel is for flight CA 981?</en></td></tr>\
<tr><td>行李提取处怎么走?</td><td><en>Where is baggage claim?</en></td></tr>\
<tr><td>推车免费吗?</td><td><en>Are the luggage carts free?</en></td></tr>\
<tr><td>我的箱子坏了,轮子断了。</td><td><en>My suitcase is damaged — the wheel is broken.</en></td></tr>\
</table>\
<p><strong>过海关(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>没有要申报的。</td><td><en>Nothing to declare.</en></td></tr>\
<tr><td>我带了中药和干蘑菇,自用。</td><td><en>I have some Chinese medicine and dried mushrooms, for personal use.</en></td></tr>\
<tr><td>都是包装好的。</td><td><en>They\'re all packaged.</en></td></tr>\
<tr><td>没有肉、新鲜水果或动物制品。</td><td><en>No meat, fresh fruit, or animal products.</en></td></tr>\
<tr><td>(让开箱)当然,给您。</td><td><en>Of course. Here you are.</en></td></tr>\
</table>\
<div class="ex">💡 <strong>必申报 / 禁带</strong>:超过 <strong>$10,000</strong> 现金、所有食品都要申报;肉/蛋/新鲜果蔬/种子/无英文说明的散装中药几乎全禁。<strong>“for personal use”(自用)</strong>是关键词,能避开商业嫌疑。疑似就主动丢,瞒报被查罚 $300+ 起。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:带了食品却答 "Nothing to declare"。</b>所有食品都要申报。包装茶、饼干如实说基本放行;瞒报被开箱查到,罚款 + 没收 + 记录在案,得不偿失。</div>\
<div class="pit"><b>坑 2:以为牛肉干、月饼能带。</b>未加工肉制品(牛肉干、香肠)、蛋黄月饼、新鲜果蔬几乎全禁。拿不准的食品,过海关前主动丢弃。</div>\
<div class="pit"><b>坑 3:现金超 $10,000 不申报。</b>无论谁的钱,超过 1 万美元(含等值)必须填表申报,否则可被全额没收。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '海关申报里,哪种东西几乎一定禁止带入美国?',
      options: ['未开封的包装饼干', '牛肉干等未加工肉制品', '带英文说明的成药', '密封的茶叶'],
      answer: 1,
      explain: '未加工肉制品(牛肉干、香肠等)、新鲜果蔬、种子几乎全禁;包装食品如实申报多能放行。'
    },
    {
      type: 'choice',
      q: '入境携带现金超过多少美元必须申报?',
      options: ['$1,000', '$3,000', '$10,000', '没有限制'],
      answer: 2,
      explain: '携带现金(含等值)超过 $10,000 必须申报,瞒报可被全额没收。'
    },
    {
      type: 'fill',
      q: '强调"自用"以避开商业嫌疑:"…for ____ use."',
      answer: ['personal'],
      explain: 'for personal use = 自用,是给海关的重要信号,避免被当成商业进口。'
    }
  ]
});
