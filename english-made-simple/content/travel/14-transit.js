/* 旅行模块第 14 课:地铁·公交·长途火车。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-14-transit',
  module: 'travel',
  order: 14,
  title: '交通②:地铁·公交·长途火车',
  minutes: 5,
  keywords: ['地铁', 'subway', '公交', 'bus', '火车', 'train', 'Amtrak', '换乘', 'transfer', '车票', 'fare'],

  sections: {
    what: '\
<p><strong>一句话:大城市地铁公交发达,城际靠 Amtrak 火车。买票方式各城不同,但"坐哪条线、哪个方向、几站到、在哪换乘"这套问路英语全国通用。</strong></p>\
<p>场景地图:地铁里向路人/工作人员问线路方向;火车站向售票员买单程/往返票。</p>',

    when: '\
<p>市内坐地铁公交、城市之间坐火车。出发前用 Google Maps 规划,App 会直接告诉你坐几号线、哪个方向、几站。</p>',

    how: '\
<p><strong>地铁/公交问路(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>去时代广场坐哪条线?</td><td><en>Which line should I take to get to Times Square?</en></td></tr>\
<tr><td>我该坐哪个方向?</td><td><en>Which direction should I go?</en></td></tr>\
<tr><td>需要换乘吗?在哪换?</td><td><en>Do I need to transfer? Where?</en></td></tr>\
<tr><td>这班车停某站吗?</td><td><en>Does this train stop at Union Station?</en></td></tr>\
<tr><td>下一站是什么?</td><td><en>What\'s the next stop?</en></td></tr>\
<tr><td>在哪买票/充值?</td><td><en>Where can I buy a ticket or top up my card?</en></td></tr>\
</table>\
<p><strong>火车站买票(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我想买一张去华盛顿 DC 的票。</td><td><en>I\'d like to buy a ticket to Washington DC, please.</en></td></tr>\
<tr><td>(单程还是往返)单程,谢谢。</td><td><en>One-way, please.</en></td></tr>\
<tr><td>下一班什么时候?</td><td><en>When\'s the next train?</en></td></tr>\
<tr><td>有便宜点的选择吗?</td><td><en>Is there a cheaper option?</en></td></tr>\
<tr><td>票价多少?</td><td><en>How much is the fare?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>方向词</strong>:美国地铁用 <strong>uptown(北行)</strong> 和 <strong>downtown(南行)</strong> 表方向,不报终点站。纽约人会一串说 "Take the 1 train uptown to 72nd Street"。火车 Amtrak 东北走廊里 Acela(高铁)比 Regional(普通)快约 1 小时但贵一倍,提前几周买最便宜。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:只报终点站、不懂 uptown/downtown。</b>上错方向最常见。先确认 <en>Which direction — uptown or downtown?</en> 再上车。</div>\
<div class="pit"><b>坑 2:"在哪下车"说成 Where to get off?。</b>缺主语很生硬。用完整句 <en>Which stop is the museum?</en> 或 <en>Where should I get off for the museum?</en></div>\
<div class="pit"><b>坑 3:火车当天到站买票。</b>Amtrak 提前数周买便宜很多,当天常贵一倍。非东北走廊线路常延误,出发前用 App 查实时状态。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国地铁里 "downtown" 通常表示?',
      options: ['某个终点站名', '南行方向', '市政府', '快车'],
      answer: 1,
      explain: '美国地铁用 uptown(北行)/downtown(南行)表方向,而不是具体终点站名。'
    },
    {
      type: 'choice',
      q: '想买 Amtrak 便宜票,最有效的做法是?',
      options: ['当天到车站买', '提前数周在 App 上买', '只坐 Acela 高铁', '上车补票'],
      answer: 1,
      explain: 'Amtrak 提前数周购票最便宜,当天买常贵一倍以上。'
    },
    {
      type: 'fill',
      q: '问"需要换乘吗":"Do I need to ____?"',
      answer: ['transfer'],
      explain: 'transfer = 换乘。"Where do I transfer?" 问在哪换乘。'
    }
  ]
});
