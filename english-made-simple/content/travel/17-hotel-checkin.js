/* 旅行模块第 17 课:酒店入住。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-17-hotel-checkin',
  module: 'travel',
  order: 17,
  title: '酒店①:入住 check-in',
  minutes: 5,
  keywords: ['酒店', 'hotel', '入住', 'check-in', '前台', 'front desk', '押金', 'hold', '房卡', '会员'],

  sections: {
    what: '\
<p><strong>一句话:入住就是到前台报预订名、出示证件和信用卡、拿房卡。美国酒店会用信用卡"预授权"一笔押金,退房后释放。</strong></p>\
<p>场景地图:前台说 <en>Could I see your ID and a credit card?</en>,告诉你会 <en>place a hold</en>(冻结押金),然后给房卡。这时正好把你想要的(高楼层/安静房)和高频问题(早餐、Wi-Fi)一起说了。</p>',

    when: '\
<p>到酒店办入住。标准入住时间是下午 3:00,可申请提前 early check-in。备好预订确认号截图(手机没信号也能看)。</p>',

    how: '\
<p><strong>入住对话(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>你好,我有预订,名字张威。</td><td><en>Hi, I have a reservation under the name Zhang Wei.</en></td></tr>\
<tr><td>好的,这是我的护照和信用卡。</td><td><en>Sure. Here\'s my passport and card.</en></td></tr>\
<tr><td>能安排高楼层的房间吗?</td><td><en>Is it possible to get a high-floor room?</en></td></tr>\
<tr><td>能要一间安静的房间吗?</td><td><en>Could I request a quiet room?</en></td></tr>\
<tr><td>早餐几点?Wi-Fi 密码是什么?</td><td><en>What time is breakfast? And what\'s the Wi-Fi password?</en></td></tr>\
<tr><td>能多给一张房卡吗?</td><td><en>Could I get an extra key card?</en></td></tr>\
</table>\
<p><strong>前台常说,这样接(点读):</strong></p>\
<table>\
<tr><th>前台说</th><th>你的回应</th></tr>\
<tr><td><en>May I see your ID?</en></td><td><en>Sure, here\'s my passport.</en></td></tr>\
<tr><td><en>We\'ll place a hold on your card.</en></td><td><en>How much is the hold?</en></td></tr>\
<tr><td><en>Your room isn\'t ready yet.</en></td><td><en>Could I leave my luggage here and come back?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>押金(hold)不是真扣款</strong>,是临时冻结额度,退房后 3–7 个工作日释放。用<strong>借记卡</strong>可能冻结金额大、释放慢,建议用<strong>信用卡</strong>。入住时主动报会员号(即使预订已绑),避免积分漏记。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:以为押金被扣了钱。</b>hold/authorization 只是冻结额度,退房后几个工作日自动释放。看到信用卡有这笔"待处理"别慌。</div>\
<div class="pit"><b>坑 2:想要更好房间却用生硬的 "Can I…"。</b>用 <en>Is it possible to get a high-floor room?</en> 或 <en>Could I request…</en> 更礼貌,前台更愿意帮你安排。</div>\
<div class="pit"><b>坑 3:用借记卡付押金。</b>借记卡冻结金额常更大、释放更慢,可能影响你后续刷卡额度。尽量用信用卡办入住。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国酒店在信用卡上 "place a hold" 是指?',
      options: ['永久扣款', '临时冻结押金,退房后释放', '收会员费', '换汇手续费'],
      answer: 1,
      explain: 'hold 是预授权,临时冻结一笔押金,退房后 3–7 个工作日释放,并非真正扣款。'
    },
    {
      type: 'choice',
      q: '想礼貌地要一间高楼层房间,最佳说法是?',
      options: ['Give me a high floor.', 'Is it possible to get a high-floor room?', 'I need high floor now.', 'High floor!'],
      answer: 1,
      explain: 'Is it possible to get…? / Could I request…? 比 Can I / Give me 更礼貌,前台更愿配合。'
    },
    {
      type: 'fill',
      q: '办理入住的动词短语是 "check ____"(退房则是 check out)。',
      answer: ['in'],
      explain: 'check in = 入住(动词);check-in 连写是名词。check out = 退房。'
    }
  ]
});
