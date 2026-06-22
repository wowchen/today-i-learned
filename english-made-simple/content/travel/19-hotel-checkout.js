/* 旅行模块第 19 课:退房 + 投诉升级。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-19-hotel-checkout',
  module: 'travel',
  order: 19,
  title: '酒店③:退房 + 投诉升级',
  minutes: 5,
  keywords: ['退房', 'check-out', '账单', 'bill', '收据', 'receipt', '行李寄存', '投诉', 'complaint', '经理', 'manager'],

  sections: {
    what: '\
<p><strong>一句话:退房时要核对账单、要电子收据、问押金何时释放;要游玩可寄存行李。遇到没解决的问题,用"冷静+具体+要求"三步升级,而不是发火。</strong></p>\
<p>场景地图:前台调出账单问你有没有用 minibar,你核对每笔费用、发现不明项就当场问、要收据、确认押金释放时间。</p>',

    when: '\
<p>离店退房(标准 11:00–12:00,可申请 late check-out);以及任何正常请求没被解决、需要升级投诉时。</p>',

    how: '\
<p><strong>退房(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>你好,我要退房,1412 房。</td><td><en>Hi, I\'d like to check out, please. Room 1412.</en></td></tr>\
<tr><td>账单上有一笔费用我不清楚。</td><td><en>There\'s a charge I don\'t recognize.</en></td></tr>\
<tr><td>能把收据发我邮箱吗?</td><td><en>Could I get a receipt by email?</en></td></tr>\
<tr><td>押金什么时候释放?</td><td><en>When will the hold be released?</en></td></tr>\
<tr><td>能帮我寄存行李到下午吗?</td><td><en>Could you hold my luggage until this afternoon?</en></td></tr>\
<tr><td>能延迟退房吗?</td><td><en>Is a late check-out possible?</en></td></tr>\
</table>\
<p><strong>投诉升级三步(冷静→具体→要求,点读):</strong></p>\
<table>\
<tr><th>步骤</th><th>English(点读)</th></tr>\
<tr><td>① 陈述事实+时间线</td><td><en>I reported this two hours ago, but it still isn\'t resolved.</en></td></tr>\
<tr><td>② 提出要求,把球踢回去</td><td><en>I\'d like this resolved today. What can you do for me?</en></td></tr>\
<tr><td>③ 要求见经理</td><td><en>Could I speak to the manager, please?</en></td></tr>\
<tr><td>④ 问补偿(万能句)</td><td><en>Is there a discount or compensation for the inconvenience?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>技巧</strong>:对方给了方案(如免费升套房),先接受、再顺势加问 <en>Could I also get a discount for the inconvenience?</en>——先收后加,成功率高。美国酒店对<strong>真诚而非无理</strong>的投诉很积极:升级、餐券、积分都常见。前台搞不定,礼貌要 duty manager 完全正当。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"你们服务太差了!"。</b><en>Your service is terrible!</en> 让对方防御、更难帮你。换成 <en>I\'m quite disappointed. I\'d like this resolved, please.</en>——表达不满 + 具体要求。</div>\
<div class="pit"><b>坑 2:退房不核对账单。</b>minibar、停车、电话等费用容易多记。逐笔看,发现不明项当场问 <en>Could you explain what this charge is for?</en>,离店后再争很难。</div>\
<div class="pit"><b>坑 3:"我要退房"写成 I want to checkout。</b>动词是 <strong>check out</strong>(有空格),checkout 连写是名词。口语说 <en>I\'d like to check out, please.</en></div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '酒店投诉时,哪种说法更可能让你得到补偿?',
      options: ['Your service is terrible!', 'I reported this two hours ago and it still isn\'t resolved. What can you do for me?', 'You are all useless.', 'I will never come back!'],
      answer: 1,
      explain: '冷静陈述事实 + 具体要求,比情绪化指责有效;后者只会让员工防御。'
    },
    {
      type: 'choice',
      q: '退房时该养成的习惯,不包括哪项?',
      options: ['逐笔核对账单', '索取电子收据', '问押金释放时间', '把房卡带走当纪念'],
      answer: 3,
      explain: '退房应核对账单、要收据、问押金释放、确认行李寄存;房卡应归还。'
    },
    {
      type: 'fill',
      q: '问补偿的万能句:"Is there a discount or ____ for the inconvenience?"',
      answer: ['compensation'],
      explain: 'compensation = 补偿。这句礼貌询问酒店能否对不便给予补偿。'
    }
  ]
});
