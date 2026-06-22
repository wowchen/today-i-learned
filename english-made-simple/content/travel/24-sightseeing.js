/* 旅行模块第 24 课:观光。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-24-sightseeing',
  module: 'travel',
  order: 24,
  title: '观光:门票·导览·拍照·景点应急',
  minutes: 5,
  keywords: ['观光', 'sightseeing', '门票', 'ticket', '博物馆', 'museum', '拍照', 'photo', '走散', 'lost', '导览'],

  sections: {
    what: '\
<p><strong>一句话:景点这一站,你要会买票(分成人/儿童/学生)、跟导览、请人拍照、以及万一走散/丢东西时求助。</strong></p>\
<p>场景地图:售票处报人数和票种、问折扣;请路人拍照用 <en>Would you mind…?</en>;走散立刻找工作人员,按"关系+年龄+衣着+最后位置"描述。</p>',

    when: '\
<p>去博物馆、主题公园、国家公园、地标拍照、参加导览团时。</p>',

    how: '\
<p><strong>门票与导览(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>两张成人票、一张儿童票。</td><td><en>Two adult tickets and one child ticket, please.</en></td></tr>\
<tr><td>有学生折扣吗?我有学生证。</td><td><en>Do you offer a student discount? I have my student ID.</en></td></tr>\
<tr><td>可以拍照吗?</td><td><en>Is photography allowed?</en></td></tr>\
<tr><td>有中文语音导览吗?</td><td><en>Do you have an audio guide in Chinese?</en></td></tr>\
<tr><td>您能说慢一点吗?我们不是母语者。</td><td><en>Could you speak a bit more slowly? Some of us are not native speakers.</en></td></tr>\
</table>\
<p><strong>拍照与走散应急(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>您介意帮我们拍张照吗?</td><td><en>Would you mind taking a photo of us?</en></td></tr>\
<tr><td>能把塔楼拍进背景吗?</td><td><en>Could you make sure the tower is in the background?</en></td></tr>\
<tr><td>第一张有点糊,能再拍一张吗?</td><td><en>The first one was a little blurry. Could we get one more?</en></td></tr>\
<tr><td>我找不到我女儿了,她六岁,穿红夹克。</td><td><en>I can\'t find my daughter. She\'s six, wearing a red jacket.</en></td></tr>\
<tr><td>能帮我联系失物招领吗?</td><td><en>Could you call the lost and found?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>省钱与礼貌</strong>:史密森尼(华盛顿 DC 19 馆)全免费;国家公园年票 America the Beautiful($80)两个园就回本。博物馆内多禁闪光灯(<en>no flash</en>),先确认 <en>Is photography allowed?</en>。拍人前先征得同意,拍警察/政府/军事设施要谨慎。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"帮我拍照"说成 Take a photo for me。</b>for me=替我拍(对方拿手机帮别人),意思模糊。拍你用 <en>of me</en>:<en>Could you take a photo of me?</en>;合影用 <en>with me</en>。</div>\
<div class="pit"><b>坑 2:在馆内随手开闪光灯拍。</b>多数博物馆禁 flash 甚至禁拍。先看标识或问 <en>Is photography allowed?</en>,被告知 no 就 <en>I\'ll put my camera away.</en></div>\
<div class="pit"><b>坑 3:走散后干等或瞎找。</b>立刻找工作人员,按<strong>关系+年龄+衣着颜色+最后出现位置</strong>描述,大型景点有走失儿童接待区,会广播 + 带孩子在那等。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '请路人"帮我们拍张照",哪句对?',
      options: ['Take a photo for us.', 'Would you mind taking a photo of us?', 'Photo me!', 'You photo us.'],
      answer: 1,
      explain: 'of us=拍我们;for us 含义模糊。Would you mind…? 比 Can you 更礼貌。'
    },
    {
      type: 'choice',
      q: '在美国博物馆拍照,通常的限制是?',
      options: ['完全不能拍', '多数禁闪光灯,部分禁拍,先确认', '随便拍随便闪', '只能拍自己'],
      answer: 1,
      explain: '多数博物馆禁闪光灯、部分展品禁拍。先看标识或问 "Is photography allowed?"。'
    },
    {
      type: 'fill',
      q: '联系失物招领:"Could you call the lost and ____?"',
      answer: ['found'],
      explain: 'lost and found = 失物招领处。丢东西第一时间找工作人员联系它。'
    }
  ]
});
