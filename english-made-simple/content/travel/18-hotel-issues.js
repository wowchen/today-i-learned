/* 旅行模块第 18 课:房间问题 + 客房服务。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-18-hotel-issues',
  module: 'travel',
  order: 18,
  title: '酒店②:房间问题 + 客房服务',
  minutes: 5,
  keywords: ['房间问题', 'room issue', '报修', '空调', 'AC', '客房服务', 'room service', '叫醒', 'wake-up call', '毛巾'],

  sections: {
    what: '\
<p><strong>一句话:房间有毛病,打前台电话比下楼排队快得多——说清"房间号 + 什么问题"就行;想点餐、加毛巾、订叫醒,也都一个电话搞定。</strong></p>\
<p>场景地图:房间内电话直拨 0 找前台,报房间号和问题,10–20 分钟内来人。客房送餐拨 Room Service 专线。</p>',

    when: '\
<p>入住后发现空调/热水/马桶/房卡等问题,或想点客房餐、加备品、订叫醒服务时。<strong>当场报比退房时投诉有效得多。</strong></p>',

    how: '\
<p><strong>报修:房间号 + 问题(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>这里是 1412 房,空调不工作,很热。</td><td><en>This is room 1412. The air conditioning isn\'t working — it\'s very hot in here.</en></td></tr>\
<tr><td>房间没有热水。</td><td><en>There\'s no hot water in my room.</en></td></tr>\
<tr><td>马桶冲不了水。</td><td><en>The toilet won\'t flush.</en></td></tr>\
<tr><td>我的房卡失效了。</td><td><en>My room key isn\'t working.</en></td></tr>\
<tr><td>隔壁太吵,能换房吗?</td><td><en>It\'s very noisy. Could I switch rooms?</en></td></tr>\
<tr><td>如果不能很快修好,能换间房吗?</td><td><en>If it can\'t be fixed quickly, could I be moved to a different room?</en></td></tr>\
</table>\
<p><strong>客房服务与请求(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>这是 1206 房,我想点一份总汇三明治和一罐健怡可乐。</td><td><en>This is room 1206. I\'d like to order a club sandwich and a Diet Coke, please.</en></td></tr>\
<tr><td>能多给些毛巾/枕头吗?</td><td><en>Could I get extra towels and pillows?</en></td></tr>\
<tr><td>能早上 6 点叫醒我吗?</td><td><en>Could I get a wake-up call at six AM?</en></td></tr>\
<tr><td>能帮我叫辆出租车吗?</td><td><en>Could you call a taxi for me?</en></td></tr>\
</table>\
<div class="ex">💡 报修后若影响入住,可礼貌问补偿:<en>Is there anything you can do for the inconvenience?</en> 酒店常给积分、免费升级或餐券。门牌:<strong>Do Not Disturb(DND)</strong>=勿扰,挂出不打扫;<strong>Make Up Room</strong>=请打扫。高端连锁(Marriott/Hilton/Hyatt)的 App 能直接下单要备品,不用开口。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"空调坏了"说成 The air condition is broken。</b>不能少 -ing。正确:<en>The air conditioning isn\'t working.</en> 或口语缩写 <en>The AC is broken.</en></div>\
<div class="pit"><b>坑 2:忍到退房才抱怨。</b>问题当场报、前台能换房或补偿;拖到退房早已无法补救。发现就打电话:房间号 + 问题。</div>\
<div class="pit"><b>坑 3:下楼排队报修。</b>房内直拨 0 找前台最快,说清房间号和问题,通常 10–20 分钟来人,省时又不怕听不懂排队叫号。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"空调不工作了" 哪种说法地道?',
      options: ['The air condition is broken.', 'The air conditioning isn\'t working.', 'Air not cold.', 'The wind machine die.'],
      answer: 1,
      explain: 'air conditioning 不能少 -ing;口语也可说 The AC is broken。'
    },
    {
      type: 'choice',
      q: '发现房间问题,最有效的处理方式是?',
      options: ['忍到退房再投诉', '当场打前台电话报房间号+问题', '自己想办法修', '写在评价里'],
      answer: 1,
      explain: '当场报,前台可换房/维修/补偿;拖到退房就无法补救。'
    },
    {
      type: 'fill',
      q: '订早上叫醒服务:"Could I get a ____-up call at six AM?"',
      answer: ['wake'],
      explain: 'wake-up call = 叫醒服务,酒店前台或电话即可预订。'
    }
  ]
});
