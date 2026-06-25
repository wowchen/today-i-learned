EBD.registerLesson({
  id: 'message-05-vs-sat',
  module: 'message',
  order: 5,
  title: '短报文 vs 卫星电话:各管各的',
  minutes: 4,
  keywords: ['短报文', '卫星电话', '对比', '通信', '区别'],
  sections: {
    what:
      '<p>都能"无公网通信",<gd data-term="duanbaowen">短报文</gd>和卫星电话却是<strong>两种东西、两种用法</strong>:短报文发的是带位置的<strong>短消息</strong>;卫星电话打的是<strong>实时语音</strong>(部分也能上网)。</p>',
    how:
      '<table><tr><th></th><th>北斗短报文</th><th>卫星电话</th></tr>' +
      '<tr><td>形式</td><td>短文字消息(+位置)</td><td>实时语音/数据</td></tr>' +
      '<tr><td>带位置</td><td>天然自带</td><td>不一定</td></tr>' +
      '<tr><td>功耗/终端</td><td>省电、终端小</td><td>较费电、终端大</td></tr>' +
      '<tr><td>成本</td><td>低,适合海量小终端</td><td>较高</td></tr>' +
      '<tr><td>擅长</td><td>位置上报、监测回传、告警</td><td>现场实时通话</td></tr></table>',
    why:
      '<p>电力应急里两者常<strong>配合用</strong>:海量分散的监测点、巡线人员用短报文"各报一句、带上位置";现场指挥、复杂沟通需要说话时用卫星电话。一个管"广撒网式的状态/位置",一个管"点对点的实时交流",各司其职。</p>',
    pitfalls:
      '<div class="pit"><b>误解:有卫星电话就不用短报文了。</b>卫星电话不适合"成千上万个小设备定时自动报数据"——太贵太耗电。短报文的低成本、低功耗、自带位置,正好补这个场景。它俩不是替代关系。</div>',
    links:
      '<p>· 灾难场景里它怎么当"最后一条路":下一课《灾害应急》。<br>· 监测点为什么爱用它,见《监测终端用短报文回传数据》。'
  }
});
