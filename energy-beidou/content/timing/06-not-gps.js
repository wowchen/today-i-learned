EBD.registerLesson({
  id: 'timing-06-not-gps',
  module: 'timing',
  order: 6,
  title: '为什么不能把授时全押在 GPS 上',
  minutes: 4,
  key: '替代逻辑',
  keywords: ['GPS', '授时', '替代', '北斗', '单源', '风险'],
  sections: {
    what:
      '<p>过去电力授时高度依赖 GPS。问题在于:它是<strong>别国掌控的单一来源</strong>。把保护、录波、<gd data-term="pmu">同步测量</gd>这些命脉,全押在一个不受自己控制的系统上,风险太大。</p>',
    why:
      '<p>风险有三层:</p>' +
      '<ul>' +
      '<li><strong>受制于人</strong>:GPS 民用信号可被对方在特定时空降精度或关闭,关键时刻"断供"。</li>' +
      '<li><strong>单点故障</strong>:只有一个授时源,一旦它出问题或被干扰,全网一起失准。</li>' +
      '<li><strong>安全攻击面</strong>:授时若被干扰或<gd data-term="qipian">欺骗</gd>,错误时间会顺着喂给保护和录波,后果严重。</li>' +
      '</ul>',
    how:
      '<p>解法是"<gd data-term="zizhukekong">自主可控</gd> + 多源互备":</p>' +
      '<ul>' +
      '<li><strong>北斗为主</strong>:授时主源换成北斗,把可信基准握在自己手里。</li>' +
      '<li><strong>多源备份</strong>:北斗 + GPS 等多系统互为备份,任一受扰也不至于全失。</li>' +
      '<li><strong>本地守时兜底</strong>:配高稳时钟,卫星短暂丢失时靠它维持(见下一课《守时与驯钟》)。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:换成北斗就一劳永逸、绝对安全。</b>北斗解决了"自主"问题,但卫星授时本身仍可能被干扰/遮挡。所以还要<strong>多源 + 守时 + 抗干扰</strong>一起上,这是后两课的内容。</div>',
    links:
      '<p>· 卫星信号丢了怎么扛:下一课《守时与驯钟》。<br>· 抗干扰防欺骗:《授时安全》。'
  }
});
