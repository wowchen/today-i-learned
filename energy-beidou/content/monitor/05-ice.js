EBD.registerLesson({
  id: 'monitor-05-ice',
  module: 'monitor',
  order: 5,
  title: '覆冰与舞动:导线也会"跳舞"',
  minutes: 4,
  keywords: ['覆冰', '舞动', '导线', '弧垂', '监测'],
  sections: {
    what:
      '<p>除了不动的塔和坝,<strong>导线本身</strong>也要监测两种状态:<strong>覆冰</strong>(冬天导线上结冰、越积越重)和<strong>舞动</strong>(风吹得导线大幅度上下翻飞,像跳舞)。两者都可能压垮塔、扯断线。</p>',
    why:
      '<p>覆冰会让导线和杆塔承受远超设计的重量,严重时大面积倒塔断线;舞动则在短时间内剧烈拉扯,损坏金具、引发跳闸。这些都需要<strong>实时掌握现场状态</strong>才能及时除冰、预警,而很多重冰区线路恰恰在偏远高山。</p>',
    how:
      '<ul>' +
      '<li><strong>测位置变化</strong>:北斗可监测导线、杆塔关键点的位移与<strong>弧垂</strong>(导线下垂程度)变化——覆冰加重,弧垂就下沉;舞动时位置剧烈波动。</li>' +
      '<li><strong>多源结合</strong>:常与拉力(称重)、气象、视频等结合,综合判断覆冰量和舞动幅度。</li>' +
      '<li><strong>无网回传</strong>:高山现场用<gd data-term="duanbaowen">短报文</gd>把监测数据传出来。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>这里北斗是"配角之一"。</b>覆冰/舞动监测以专用传感器(称重、气象、视频)为主,北斗主要贡献"位置/弧垂变化"和无网区域的<strong>数据回传通道</strong>。别夸大成"全靠北斗"。</div>',
    links:
      '<p>· 监测点内部到底怎么工作:下一课《一个 GNSS 形变监测站是怎么工作的》。<br>· 数据怎么回传,见模块 9《监测终端用短报文回传数据》。'
  }
});
