EBD.registerLesson({
  id: 'beidou-09-why-four',
  module: 'beidou',
  order: 9,
  title: '为什么至少要四颗星',
  minutes: 4,
  keywords: ['四颗星', '钟差', '未知数', 'PDOP', '几何'],
  sections: {
    what:
      '<p>三颗星就能"三球交会"出位置,为什么实际要<strong>至少四颗</strong>?因为多了一个躲不掉的未知数:<strong>你接收机的钟差</strong>。</p>',
    how:
      '<p>要算的未知数其实有四个:位置的 X、Y、Z,再加"你的钟比卫星钟差了多少"。<strong>四个未知数,就得四个方程,也就是四颗星</strong>。</p>' +
      '<div class="ex">为什么钟差躲不掉?因为给接收机配个原子钟太贵太大。于是干脆把"钟差"当成第四个未知数一起解——多收一颗星,既定了位,又顺便把你这块"便宜表"对准了。这也是卫星授时能那么准的原因。</div>' +
      '<p>实际中,天上往往能看到十几颗星,接收机会挑<strong>分布好</strong>的一组来用。分布好不好,用 <gd data-term="pdop">PDOP</gd> 衡量:卫星四散在天空各方向,PDOP 小、定位准;都挤在头顶一小片,PDOP 大、定位差。</p>',
    why:
      '<p>这条解释了北斗<gd data-term="xingzuo">混合星座</gd>的妙处:中国上空有 <gd data-term="geo">GEO</gd>、<gd data-term="igso">IGSO</gd> 高高挂着,加上一堆 <gd data-term="meo">MEO</gd>,可见星又多、分布又好,PDOP 小,所以在国内定位又快又稳。</p>',
    pitfalls:
      '<div class="pit"><b>误解:看到的星越多越准。</b>数量帮忙,但<strong>分布</strong>更关键。十颗都挤在一个角落,不如四颗分散在四方。城市峡谷里定位差,常常就是楼挡得只剩一条"天缝",可见星全挤一块了。</div>',
    links:
      '<p>· 几何分布 PDOP 也关系到完好性,见《完好性与连续性》。<br>· 接着看《北斗和 GPS 差在哪》收个尾。'
  }
});
