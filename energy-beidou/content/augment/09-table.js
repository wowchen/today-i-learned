EBD.registerLesson({
  id: 'augment-09-table',
  module: 'augment',
  order: 9,
  title: '一张表看懂:米、分米、厘米、毫米级各用在哪',
  minutes: 4,
  key: '精度选型',
  keywords: ['精度', '选型', '米级', '厘米级', '毫米级', '对照'],
  sections: {
    what:
      '<p>把前面几课收个网:不同精度、不同技术、不同电力场景,对上号就清楚了。<strong>不是越准越好,而是够用、合算</strong>。</p>',
    how:
      '<figure class="fig"><svg viewBox="0 0 460 160" width="100%" style="max-width:460px">' +
      '<line class="f-box" x1="40" y1="140" x2="420" y2="140"/>' +
      '<rect class="f-box2" x="40" y="110" width="90" height="30"/><text class="f-txt" x="85" y="129" text-anchor="middle">米级</text>' +
      '<rect class="f-box2" x="130" y="86" width="90" height="54"/><text class="f-txt" x="175" y="112" text-anchor="middle">分米级</text>' +
      '<rect class="f-box2" x="220" y="56" width="90" height="84"/><text class="f-txt" x="265" y="86" text-anchor="middle">厘米级</text>' +
      '<rect class="f-box2" x="310" y="24" width="90" height="116"/><text class="f-txt" x="355" y="56" text-anchor="middle">毫米级</text>' +
      '<text class="f-dim" x="85" y="156" text-anchor="middle">单点</text>' +
      '<text class="f-dim" x="175" y="156" text-anchor="middle">SBAS/PPP-B2b</text>' +
      '<text class="f-dim" x="265" y="156" text-anchor="middle">RTK/PPP</text>' +
      '<text class="f-dim" x="355" y="156" text-anchor="middle">静态长观测</text>' +
      '<text class="f-hot" x="40" y="18">精度越高 ↑ 越费劲、越贵</text>' +
      '</svg><figcaption>图 · 精度阶梯:技术与代价</figcaption></figure>' +
      '<table><tr><th>精度</th><th>主要技术</th><th>电力典型用途</th></tr>' +
      '<tr><td>米级</td><td><gd data-term="dandian">单点定位</gd></td><td>车辆/人员大致位置、资产盘点、导航到站</td></tr>' +
      '<tr><td>亚米~分米</td><td><gd data-term="dgnss">DGNSS</gd>/<gd data-term="sbas">SBAS</gd>/<gd data-term="ppp-b2b">PPP-B2b</gd></td><td>无人机航线、巡检定位、无网区域作业</td></tr>' +
      '<tr><td>厘米级</td><td><gd data-term="rtk">RTK</gd>/<gd data-term="ppp">PPP</gd>/<gd data-term="cors">地基增强</gd></td><td>杆塔精确坐标、线路勘测、施工放样</td></tr>' +
      '<tr><td>毫米级</td><td>静态长期观测 + 后处理</td><td><gd data-term="xingbianjiance">形变监测</gd>:杆塔、大坝、边坡</td></tr></table>',
    why:
      '<p>选型口诀:<strong>看大概用单点,要作业精度上 RTK/PPP-B2b,盯变形才上毫米级监测</strong>。精度每高一档,设备、流程、成本都上一个台阶,按需选才不浪费。</p>',
    pitfalls:
      '<div class="pit"><b>误解:所有应用都要厘米级。</b>多数巡检、调度、作业管理,分米甚至米级足矣。盲目追毫米级,既贵又没必要。</div>',
    links:
      '<p>· 模块 3 结束。下一站模块 4《能源北斗总览》,从《能源行业为什么离不开"时与空"》开始,把视角切到电力。'
  }
});
