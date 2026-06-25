EBD.registerLesson({
  id: 'monitor-06-station',
  module: 'monitor',
  order: 6,
  title: '一个 GNSS 形变监测站是怎么工作的',
  minutes: 5,
  key: '监测原理',
  keywords: ['监测站', '基准站', '监测站', '解算', '位移', '工作原理'],
  sections: {
    what:
      '<p>一套北斗<gd data-term="xingbianjiance">形变监测</gd>系统,基本由三部分组成:<strong>监测点 + 稳定基准点 + 后台平台</strong>。监测点装在会动的设施上,基准点装在不动的稳固处,两者一比较,毫米级位移就出来了。</p>',
    how:
      '<figure class="fig"><svg viewBox="0 0 460 170" width="100%" style="max-width:460px">' +
      '<circle class="f-arr" cx="70" cy="20" r="4"/><circle class="f-arr" cx="160" cy="14" r="4"/><circle class="f-arr" cx="300" cy="18" r="4"/><text class="f-dim" x="350" y="22">北斗卫星</text>' +
      '<rect class="f-box2" x="40" y="70" width="90" height="34"/><text class="f-txt" x="85" y="91" text-anchor="middle">监测点</text><text class="f-dim" x="85" y="120" text-anchor="middle">装在塔/坝/坡上</text>' +
      '<rect class="f-box2" x="180" y="70" width="90" height="34"/><text class="f-txt" x="225" y="91" text-anchor="middle">基准点</text><text class="f-dim" x="225" y="120" text-anchor="middle">装在稳固处</text>' +
      '<rect class="f-box" x="330" y="70" width="100" height="34"/><text class="f-txt" x="380" y="91" text-anchor="middle">后台平台</text><text class="f-dim" x="380" y="120" text-anchor="middle">解算·报警</text>' +
      '<line class="f-line" x1="70" y1="26" x2="80" y2="68" marker-end="url(#arM6)"/>' +
      '<line class="f-line" x1="160" y1="20" x2="220" y2="68" marker-end="url(#arM6)"/>' +
      '<line class="f-line" x1="130" y1="88" x2="178" y2="88" marker-end="url(#arM6)"/>' +
      '<line class="f-line" x1="270" y1="88" x2="328" y2="88" marker-end="url(#arM6)"/>' +
      '<text class="f-hot" x="148" y="150" text-anchor="middle">相对解算 → 毫米级位移序列</text>' +
      '<defs><marker id="arM6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 监测点 + 基准点 + 平台,解出毫米级位移</figcaption></figure>' +
      '<ul>' +
      '<li><strong>监测点</strong>:固定在被监测体上,长期连续接收北斗信号。</li>' +
      '<li><strong>基准点</strong>:放在确定不动的稳固位置,提供"零点"参照。</li>' +
      '<li><strong>相对解算</strong>:平台拿两者数据相减,扣掉共有误差,得到监测点相对基准的<strong>毫米级位移</strong>,并随时间画成曲线。</li>' +
      '<li><strong>报警</strong>:位移或速率超阈值即告警(下一课)。</li>' +
      '</ul>',
    why:
      '<p>关键就在"<strong>相对</strong>"二字:不追求绝对坐标多准,而是看"监测点相对基准点动了多少"。共有的卫星误差、大气误差被两边一减抵消掉,剩下的就是真实位移——这正是模块 3《毫米级》和差分思想的落地。</p>',
    pitfalls:
      '<div class="pit"><b>误解:基准点随便找个地方就行。</b>基准点必须<strong>确实稳定</strong>(远离变形区、地基牢固)。基准自己在动,算出来的"位移"就全是假的。选基准点是监测成败的关键。</div>',
    links:
      '<p>· 位移怎么变成报警:下一课《从监测到预警》。<br>· 毫米级精度还依赖什么,见《监测精度从哪来:离不开地基增强网》。'
  }
});
