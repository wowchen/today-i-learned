EBD.registerLesson({
  id: 'beidou-02-four-systems',
  module: 'beidou',
  order: 2,
  title: '四大全球系统:GPS、格洛纳斯、伽利略、北斗',
  minutes: 4,
  keywords: ['GPS', '格洛纳斯', '伽利略', '北斗', 'GLONASS', 'Galileo', '四大'],
  sections: {
    what:
      '<p>目前能<strong>全球</strong>提供服务的卫星导航系统有四套:美国 GPS、俄罗斯格洛纳斯(GLONASS)、欧洲伽利略(Galileo)、中国<gd data-term="beidou">北斗</gd>(BDS)。它们都属于<gd data-term="gnss">GNSS</gd>,原理相通,可以混着用。</p>',
    why:
      '<p>为什么要有四套?因为卫星导航是<strong>国家级基础设施</strong>:它喂养着交通、金融、通信、电力的位置与时间。一旦只依赖别人家的系统,关键时刻被关掉或下调精度,整个国家的命脉都受制于人。这就是中国要自建北斗的根本原因。</p>',
    how:
      '<p>四套横向一看:</p>' +
      '<table><tr><th>系统</th><th>国家/地区</th><th>建成全球</th><th>特色</th></tr>' +
      '<tr><td>GPS</td><td>美国</td><td>最早,1990 年代</td><td>用得最广、生态最成熟</td></tr>' +
      '<tr><td>GLONASS</td><td>俄罗斯</td><td>较早</td><td>高纬度地区表现好</td></tr>' +
      '<tr><td>Galileo</td><td>欧盟</td><td>2010 年代</td><td>民用主导、强调高精度</td></tr>' +
      '<tr><td>北斗 BDS</td><td>中国</td><td>2020 年</td><td>混合星座 + 独有<gd data-term="duanbaowen">短报文</gd></td></tr></table>' +
      '<p>现在的手机和专业接收机大多是"多系统"的,同时收四家信号,可见卫星更多、定位更稳。</p>',
    pitfalls:
      '<div class="pit"><b>误解:北斗是"中国版 GPS,功能一样"。</b>定位授时确实类似,但北斗有两样别人没有的看家本领:<strong>混合星座</strong>和<strong>短报文(能发消息)</strong>。这恰恰是电力等行业最看重的。</div>' +
      '<div class="pit"><b>误解:用了北斗就不能用 GPS。</b>它们能共用。专业设备同时收多家信号反而更好,北斗的意义在于"关键时刻有自己的、不被人卡脖子",而不是排斥别家。</div>',
    links:
      '<p>· 北斗怎么一步步建起来的?下一课《北斗"三步走"》。<br>· 北斗到底和 GPS 差在哪?见本模块末课《北斗和 GPS 差在哪》。</p>'
  }
});
