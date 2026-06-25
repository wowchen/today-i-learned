EBD.registerLesson({
  id: 'pnt-09-integrity',
  module: 'pnt',
  order: 9,
  title: '完好性与连续性:能不能"信得过"',
  minutes: 4,
  keywords: ['完好性', '连续性', '可用性', '告警', 'integrity'],
  sections: {
    what:
      '<p>对关键行业,定位不光要"准",还要"<strong>信得过</strong>"。这就引出三个常被并提的指标:</p>' +
      '<ul>' +
      '<li><gd data-term="wanhaoxing">完好性</gd>:系统在<strong>不可信的时候能及时告警</strong>的能力。</li>' +
      '<li><strong>连续性</strong>:一段任务里服务不中断的能力。</li>' +
      '<li><strong>可用性</strong>:需要时服务在线、满足精度要求的比例。</li>' +
      '</ul>',
    why:
      '<p>"会告警"有时比"很准"还重要。设想给电力授时:偶尔精度差点尚可,但如果它<strong>悄悄出错却不吭声</strong>,把错误时间喂给保护和录波,后果可能是误动作、误判故障。完好性的价值就在于:不行的时候它会喊一声"<strong>别信我</strong>",让系统及时切到备用。</p>',
    how:
      '<ul>' +
      '<li><strong>系统侧</strong>:监测站盯着卫星健康,异常时通过电文或增强服务发出告警。</li>' +
      '<li><strong>用户侧</strong>:接收机自检(如用多余的卫星互相核对),发现矛盾就报警或剔除坏星。</li>' +
      '<li><strong>几何冗余</strong>:可见星多、<gd data-term="pdop">分布好(PDOP 小)</gd>时,既定位更准,也更容易查出坏值——这又是北斗多星座的好处。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:精度高就等于可靠。</b>精度是"平时多准",完好性是"出错时会不会骗你"。关键应用要的是后者:宁可它说"我不行了",也不要它"错了还装作没事"。</div>',
    links:
      '<p>· 模块 2 到此结束。下一站模块 3《高精度增强》,从《为什么单点只能到米级》开始,看精度怎么一级级做上去。'
  }
});
