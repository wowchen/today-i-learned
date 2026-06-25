EBD.registerLesson({
  id: 'message-08-capacity',
  module: 'message',
  order: 8,
  title: '能发多长:容量与区域到全球的升级',
  minutes: 4,
  keywords: ['容量', '区域短报文', '全球短报文', '升级', '代际'],
  sections: {
    what:
      '<p>短报文一次能发多少、覆盖多大,随北斗升级一直在涨。大致两档:<strong>区域短报文</strong>(覆盖中国及周边,单次容量较大,约百余汉字量级)和<strong>全球短报文</strong>(覆盖全球,单次较短)。</p>',
    why:
      '<p>这关系到电力能把它用到多大范围:</p>' +
      '<ul>' +
      '<li><strong>区域短报文</strong>:容量较大,够传一批监测值或较完整的状态,国内深山海岛设施够用。</li>' +
      '<li><strong>全球短报文</strong>:北斗三号新增,让"走出国门"的工程(海外项目、远洋)也有了基本的卫星消息通道。</li>' +
      '</ul>',
    how:
      '<ul>' +
      '<li><strong>区域</strong>:靠 <gd data-term="geo">GEO</gd> 等,覆盖中国周边,容量与频次相对宽裕。</li>' +
      '<li><strong>全球</strong>:借助 <gd data-term="meo">MEO</gd> 等实现全球收发,单条偏短,适合位置和简短状态。</li>' +
      '<li><strong>趋势</strong>:容量、时效、终端普及度持续提升(见模块 11《短报文全球化》)。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>不要记死具体字数。</b>容量随系统演进和终端不同而变,记住"<strong>区域容量大、全球覆盖广但单条短</strong>"这个量级关系即可,别把某个具体数字当成永远不变的硬指标。</div>',
    links:
      '<p>· 模块 9 结束。下一站模块 10《时空数据与数字电网》,从《时空数据底座》开始。<br>· 全球化趋势,见模块 11《短报文全球化:从区域到全球》。'
  }
});
