EBD.registerLesson({
  id: 'energy-01-why',
  module: 'energy',
  order: 1,
  title: '能源行业为什么离不开"时与空"',
  minutes: 4,
  key: '价值起点',
  keywords: ['能源', '电力', '时间', '空间', '为什么', '需求'],
  sections: {
    what:
      '<p>电力系统是个<strong>横跨千里、争分夺秒</strong>的大机器:发电厂、线路、变电站、用户散布在辽阔国土上(空间),而发用电必须每一秒都平衡、各装置动作要对齐到微秒(时间)。<strong>"时"和"空"是它的两条命脉</strong>,而这恰恰是北斗最拿手的。</p>',
    why:
      '<p>具体说,电力对时空的刚需有三类:</p>' +
      '<ul>' +
      '<li><strong>要精准时间</strong>:继电保护、故障录波、<gd data-term="pmu">同步测量</gd>都靠"全网对同一块表"。</li>' +
      '<li><strong>要精准位置</strong>:几百万基杆塔、上百万公里线路的巡检、监测、作业,都得知道"在哪"。</li>' +
      '<li><strong>要兜底通信</strong>:大量设施在无公网的深山海岛,还要能把数据传出来(<gd data-term="duanbaowen">短报文</gd>)。</li>' +
      '</ul>',
    how:
      '<p>把这三类需求和北斗能力一对照,严丝合缝:</p>' +
      '<table><tr><th>电力刚需</th><th>北斗对应能力</th></tr>' +
      '<tr><td>全网精准对时</td><td>纳秒~微秒级<gd data-term="shoushi">授时</gd></td></tr>' +
      '<tr><td>设施精准定位</td><td>米到毫米级定位</td></tr>' +
      '<tr><td>无网区域传数据</td><td>短报文通信</td></tr></table>',
    pitfalls:
      '<div class="pit"><b>误解:电力用北斗主要是为了"导航定位"。</b>对电力,<strong>授时</strong>的分量往往重于定位;短报文又是定位之外的独立价值。把它简单理解成"给电网装导航",就小看了。</div>',
    links:
      '<p>· 把这些需求系统化,就有了"能源北斗",下一课讲。<br>· 五大应用域逐一展开,见《五大应用域》。'
  }
});
