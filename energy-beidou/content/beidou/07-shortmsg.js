EBD.registerLesson({
  id: 'beidou-07-shortmsg',
  module: 'beidou',
  order: 7,
  title: '短报文:北斗独有的"既能定位又能发消息"',
  minutes: 4,
  key: '北斗特色',
  keywords: ['短报文', '通信', '无网络', 'RDSS', '应急'],
  sections: {
    what:
      '<p><gd data-term="duanbaowen">短报文</gd>是北斗的独门绝技:在定位的同时,还能<strong>收发一小段文字消息</strong>,全程不靠手机基站、不靠互联网,只靠卫星。GPS、伽利略都没有这个本事。</p>' +
      '<div class="ex">普通导航只能告诉"你自己"在哪;北斗短报文能把"我在哪、我这儿出了什么事"<strong>发给别人</strong>,哪怕周围一格手机信号都没有。</div>',
    why:
      '<p>这正是电力行业偏爱北斗的关键之一。输电线路、监测点常在<strong>深山、戈壁、海岛</strong>,那里根本没有公网。要把现场的位置、状态、监测数据传回来,短报文往往是<strong>唯一的路</strong>。灾害把基站和电力都打没了时,它更是"最后一条通信通道"。</p>',
    how:
      '<ul>' +
      '<li><strong>走的是有源体制</strong>(<gd data-term="rdss">RDSS</gd>):消息经 <gd data-term="geo">GEO</gd> 卫星中转,所以北斗的 3 颗 GEO 在这里挑大梁。</li>' +
      '<li><strong>一次能发多少</strong>:区域短报文一次约一两百个汉字量级;北斗三号还把短报文升级为<strong>区域 + 全球</strong>两档,容量和覆盖都更强。</li>' +
      '<li><strong>怎么用</strong>:配北斗短报文模块的终端、专用手持机,甚至支持的手机,就能发收。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:短报文 = 免费卫星微信,能随便聊。</b>它是<strong>短消息</strong>,有长度和频次限制,适合发位置、报状态、传少量监测数据,不是用来煲电话粥或传图片视频的。</div>' +
      '<div class="pit"><b>误解:短报文和卫星电话一回事。</b>不是。短报文是"发短消息 + 带位置",省电、低成本;卫星电话是实时语音,另一套系统(见模块 9 对比)。</div>',
    links:
      '<p>· 没有公网的地方怎么传数据,见模块 9《短报文与应急通信》。<br>· 监测数据用短报文回传,见《监测终端用短报文回传数据》。'
  }
});
