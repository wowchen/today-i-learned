EBD.registerLesson({
  id: 'message-01-what',
  module: 'message',
  order: 1,
  title: '短报文是什么:北斗能"发短信"',
  minutes: 4,
  key: '通信入口',
  keywords: ['短报文', '通信', '发消息', 'RDSS', '北斗'],
  sections: {
    what:
      '<p>再强调一遍这个北斗独门绝技:<gd data-term="duanbaowen">短报文</gd>——<strong>定位的同时还能收发一小段文字消息,全靠卫星,不需要手机基站和互联网</strong>。它走的是有源体制(<gd data-term="rdss">RDSS</gd>),消息经<gd data-term="geo">GEO</gd> 卫星中转。</p>',
    why:
      '<p>对电力,短报文补的是一块别的技术补不了的盲区:<strong>没有公网信号的地方,怎么把数据传出来、怎么联络</strong>。深山输电线、海上风电、无人值守监测点、灾后断网区——这些场景里,短报文常常是唯一能用的通道。它把"定位"和"通信"合在了一台终端里。</p>',
    how:
      '<ul>' +
      '<li><strong>发</strong>:终端把消息(位置、状态、监测值)经卫星发给中心或指定用户。</li>' +
      '<li><strong>收</strong>:也能接收下行指令或确认。</li>' +
      '<li><strong>带位置</strong>:消息天然可附带自身坐标,"在哪 + 说什么"一起送出。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:短报文能当卫星宽带,传图片视频。</b>它是<strong>短消息</strong>,容量有限、有频次约束,适合发位置、报状态、传少量数据,不是用来传大文件或实时语音的。</div>',
    links:
      '<p>· 它到底怎么补"无公网"这个洞:下一课《没有公网信号的地方,怎么把数据传出来》。<br>· 原理回看模块 1《短报文》《RNSS 与 RDSS》。'
  }
});
