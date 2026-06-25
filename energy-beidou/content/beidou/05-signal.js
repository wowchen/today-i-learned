EBD.registerLesson({
  id: 'beidou-05-signal',
  module: 'beidou',
  order: 5,
  title: 'B1/B2/B3:卫星发的是什么信号',
  minutes: 4,
  keywords: ['信号', 'B1', 'B2', 'B3', '频段', '多频', '载波'],
  sections: {
    what:
      '<p>北斗卫星往下广播的不是声音,而是一串<strong>编码好的无线电信号</strong>,分别走 <gd data-term="signal-band">B1、B2、B3 几个频段</gd>(可以理解成几个不同的"电台频道")。信号里打包了三样东西:卫星是谁、卫星在哪(轨道)、现在几点(时间)。</p>',
    why:
      '<p>为什么要分好几个频段同时发?因为<strong>多频能大幅提精度</strong>。信号穿过高空的<gd data-term="dianliceng">电离层</gd>会被拖慢,而拖慢的程度跟频率有关——同时收两三个频段,就能把这部分误差算出来扣掉。专业接收机能用上 B1+B2+B3,就是这个道理。</p>',
    how:
      '<ul>' +
      '<li><strong>测距码</strong>:像每颗星独有的"指纹节拍",接收机靠对齐它算出信号飞了多久,从而得到<gd data-term="weizhi">距离</gd>。</li>' +
      '<li><strong>导航电文</strong>:卫星把自己的精确轨道、钟差、健康状态写进电文一起发下来。</li>' +
      '<li><strong>载波</strong>:承载上面这些的高频无线电波;高精度定位(如 <gd data-term="rtk">RTK</gd>)直接拿载波本身来量,精度能到厘米。</li>' +
      '</ul>' +
      '<div class="ex">B2b 这个频段还兼了个差事:北斗用它从 GEO 卫星直接播发高精度改正数(就是 PPP-B2b),让中国及周边不用联网也能做到分米级。</div>',
    pitfalls:
      '<div class="pit"><b>误解:信号越强定位越准。</b>北斗信号到地面其实非常微弱(比环境噪声还低),靠的是巧妙的编码"从噪声里捞出来",而不是靠功率大。这也是它<strong>容易被干扰</strong>的原因(见模块 5 抗干扰)。</div>' +
      '<div class="pit"><b>误解:单频也够用。</b>单频民用够日常导航,但要做高精度,多频几乎是必备——少了它,电离层这道大误差很难干净扣除。</div>',
    links:
      '<p>· 信号怎么变成位置?见《北斗为什么能定位:三球交会》。<br>· B2b 播发改正数的细节,见模块 3《北斗 PPP-B2b》。'
  }
});
