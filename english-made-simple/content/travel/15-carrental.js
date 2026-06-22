/* 旅行模块第 15 课:租车 car rental。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-15-carrental',
  module: 'travel',
  order: 15,
  title: '交通③:租车 car rental',
  minutes: 5,
  keywords: ['租车', 'car rental', '自驾', '驾照', 'license', '保险', 'insurance', '加油', 'gas', '划痕'],

  sections: {
    what: '\
<p><strong>一句话:美国地广,很多景点公交到不了,自驾是必备项。取车要出示驾照 + 信用卡,柜台会推销保险和升舱,你只需会礼貌拒绝。</strong></p>\
<p>场景地图:柜台先核对预订、查驾照和信用卡,然后问 <en>Would you like to add insurance or prepay gas?</en>(加保险/预付油费吗),最后给你钥匙和车位号。</p>',

    when: '\
<p>跨城自驾、去公共交通覆盖不到的国家公园/小镇。需要:有效驾照(国际驾照或翻译公证)+ 信用卡(借记卡常不被接受)+ 通常年满 25 岁。</p>',

    how: '\
<p><strong>取车对话(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>你好,我有预订,名字张威。</td><td><en>Hi, I have a reservation under Zhang Wei.</en></td></tr>\
<tr><td>给您。我订了紧凑型车租三天。</td><td><en>Here you are. I booked a compact car for three days.</en></td></tr>\
<tr><td>我信用卡有租车险,不用了,谢谢。</td><td><en>My credit card has rental insurance, so no thank you.</en></td></tr>\
<tr><td>油我会加满还车。</td><td><en>I\'ll return the car with a full tank.</en></td></tr>\
</table>\
<p><strong>取车前要问清(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>有 GPS 导航吗?</td><td><en>Does it come with GPS?</en></td></tr>\
<tr><td>还车要加满油吗?</td><td><en>Do I need to return it with a full tank?</en></td></tr>\
<tr><td>里程有限制吗?</td><td><en>Is there a mileage limit?</en></td></tr>\
<tr><td>可以异地还车吗?</td><td><en>Can I drop off the car in a different city?</en></td></tr>\
<tr><td>有需要记录的划痕吗?</td><td><en>Are there any scratches I should note?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>取车铁律</strong>:开走前用手机<strong>拍下车辆四面已有的划痕和损伤</strong>(带时间戳),还车时是你的护身符。柜台大力推销保险/升舱,说 <en>No thank you, I\'m all set.</en> 即可,不用解释。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用借记卡租车。</b>美国租车几乎都要<strong>信用卡</strong>,借记卡常被拒或要高额押金 + 信用审查。出发前备好一张信用卡。</div>\
<div class="pit"><b>坑 2:取车不拍照、不查车况。</b>已有划痕不记录,还车可能被赖。开走前拍四面照片,或当面问 <en>Are there any scratches I should note?</en></div>\
<div class="pit"><b>坑 3:被推销保险不好意思拒绝。</b>很多白金信用卡自带租车险。确认后直接 <en>No thank you, I\'m all set.</en>,礼貌拒绝不必给理由。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国租车,关于付款方式哪项正确?',
      options: ['借记卡最方便', '通常需要信用卡,借记卡常被拒', '只收现金', '不需要任何卡'],
      answer: 1,
      explain: '美国租车几乎都要信用卡;借记卡常被拒或需高额押金和信用审查。'
    },
    {
      type: 'choice',
      q: '取车开走前最该做的一件事是?',
      options: ['先加满油', '拍下车辆已有划痕损伤', '试试音响', '买全险'],
      answer: 1,
      explain: '用手机拍下四面已有划痕(带时间戳),还车时可证明不是你造成的。'
    },
    {
      type: 'fill',
      q: '礼貌拒绝推销:"No thank you, I\'m all ____."',
      answer: ['set'],
      explain: 'I\'m all set = 我都搞定了/不需要了,礼貌拒绝推销的万能句。'
    }
  ]
});
