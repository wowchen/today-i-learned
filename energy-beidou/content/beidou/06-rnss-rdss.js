EBD.registerLesson({
  id: 'beidou-06-rnss-rdss',
  module: 'beidou',
  order: 6,
  title: 'RNSS 与 RDSS:两种"定位"不是一回事',
  minutes: 4,
  keywords: ['RNSS', 'RDSS', '有源', '无源', '定位体制'],
  sections: {
    what:
      '<p>北斗有两种定位"体制",名字像绕口令,但分清很简单:</p>' +
      '<ul>' +
      '<li><gd data-term="rnss">RNSS(无源)</gd>:你只<strong>收</strong>卫星信号,自己闷头算位置。卫星不知道你在。</li>' +
      '<li><gd data-term="rdss">RDSS(有源)</gd>:你得<strong>主动发</strong>一下信号,经卫星转给地面中心算好位置再回传给你,顺带能捎一段消息。</li>' +
      '</ul>',
    why:
      '<p>两者各有不可替代的用处:</p>' +
      '<ul>' +
      '<li>RNSS 像日常导航,用户数<strong>无上限</strong>、不暴露自己,手机、车机都用它。</li>' +
      '<li>RDSS 因为"要发信号、地面参与",能顺带做成<gd data-term="duanbaowen">短报文</gd>——这就是北斗"既能定位又能发消息"的来历,在没有手机信号的地方独此一家。</li>' +
      '</ul>',
    how:
      '<table><tr><th></th><th>RNSS 无源</th><th>RDSS 有源</th></tr>' +
      '<tr><td>谁来算</td><td>用户自己算</td><td>地面中心算后回传</td></tr>' +
      '<tr><td>要不要发信号</td><td>只收不发</td><td>要发</td></tr>' +
      '<tr><td>用户数</td><td>无限</td><td>有容量上限</td></tr>' +
      '<tr><td>能不能传消息</td><td>不能</td><td>能(短报文)</td></tr>' +
      '<tr><td>典型用途</td><td>日常导航定位</td><td>位置上报 + 通信</td></tr></table>' +
      '<div class="ex">打个比方:RNSS 是你听灯塔的光自己估位置,灯塔毫不知情;RDSS 是你朝指挥塔喊一嗓子,塔帮你算好位置再喊回来,还能替你带句话。</div>',
    pitfalls:
      '<div class="pit"><b>误解:北斗定位都要"发信号上传"。</b>日常用的是 RNSS,只收不发,和 GPS 一样不暴露位置。只有用短报文这类功能时才走 RDSS。</div>',
    links:
      '<p>· 短报文到底怎么用、能发多少字?下一课《短报文》。<br>· 无源定位的几何原理,见《三球交会一次讲清》。'
  }
});
