/* 旅行模块第 26 课:拨 911 + 防骗拒推销。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-26-emergency',
  module: 'travel',
  order: 26,
  title: '应急②:拨 911 + 防骗拒推销',
  minutes: 5,
  keywords: ['911', '紧急', 'emergency', '报警', 'police', '救护车', 'ambulance', '诈骗', 'scam', '推销', '拒绝'],

  sections: {
    what: '\
<p><strong>一句话:911 是美国统一急救号(警察/消防/救护)。拨通后<strong>先报位置</strong>再说情况。日常遇到强推销、假募捐、假警察,礼貌但坚定地拒绝。</strong></p>\
<p>场景地图:接线员问 <en>911, what\'s your emergency?</en>,你先给地址/地标,再说发生了什么、有没有人受伤;听不懂就要中文翻译。</p>',

    when: '\
<p>遇到事故、火灾、有人昏迷/大出血等真正紧急情况(打 911);以及被街头推销、诈骗、假警察纠缠时。</p>',

    how: '\
<p><strong>拨 911 必说信息(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>101 公路橡树街出口附近出车祸了。</td><td><en>There\'s been a car accident on Highway 101 near the Oak Street exit.</en></td></tr>\
<tr><td>有人受伤,一人似乎失去意识。</td><td><en>One person seems to be unconscious.</en></td></tr>\
<tr><td>有人没有呼吸了。</td><td><en>Someone has stopped breathing.</en></td></tr>\
<tr><td>我英语不好,有中文翻译吗?</td><td><en>I don\'t speak English well. Do you have a Chinese interpreter?</en></td></tr>\
<tr><td>请快来,情况很严重。</td><td><en>Please hurry — it\'s serious.</en></td></tr>\
<tr><td>我被抢劫了。</td><td><en>I\'ve been robbed.</en></td></tr>\
</table>\
<p><strong>防骗与拒推销(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>不用了,谢谢。(不接东西、快步走)</td><td><en>No thank you.</en></td></tr>\
<tr><td>我不感兴趣。</td><td><en>I\'m not interested.</en></td></tr>\
<tr><td>(假警察)我想看您的正式证件。</td><td><en>I\'d like to see your official ID.</en></td></tr>\
<tr><td>(多收费)能给我看一下收据吗?</td><td><en>Could I see the receipt?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>911 要点</strong>:<strong>位置永远是第一信息</strong>——接线员有地址才能派人;保持通话(stay on the line),他会指导你。提前把酒店地址存手机随时能读。非紧急小案(被偷、剐蹭)打当地非紧急警号,<strong>滥用 911 违法</strong>。出发前用原手机测试能否拨 911(部分旅游 SIM 卡打不通)。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:打 911 先讲事情、忘了报位置。</b>没有位置救援无法出发。开口先给 <en>My location is…</en> 或最近的地标,再说情况。</div>\
<div class="pit"><b>坑 2:街头有人塞东西(CD/玫瑰)就接。</b>一接就被索高价。<strong>不接触、不停留</strong>,<en>No thank you.</en> 快步走开最有效。</div>\
<div class="pit"><b>坑 3:便装"警察"要查护照就乖乖掏。</b>可能是骗子。要求 <en>I\'d like to see your official ID.</en> 或说 <en>I\'ll call the police.</en>,真警察不怕你核实。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '拨打 911,开口最该先说什么?',
      options: ['你叫什么名字', '自己的位置/地址', '保险信息', '中国身份证号'],
      answer: 1,
      explain: '位置是第一信息——接线员有了地址才能派救援,之后再说发生了什么。'
    },
    {
      type: 'choice',
      q: '街头有人主动塞给你一支玫瑰,最佳应对是?',
      options: ['接过来道谢', '不接触、说 No thank you 快步走开', '掏钱买下', '停下争论'],
      answer: 1,
      explain: '这是常见套路:接了就被索高价。不接触、不停留,No thank you 走开最有效。'
    },
    {
      type: 'fill',
      q: '需要中文翻译:"Do you have a Chinese ____?"',
      answer: ['interpreter'],
      explain: '911 系统有语言服务,说 I need a Chinese interpreter 即可接入翻译。'
    }
  ]
});
