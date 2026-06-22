NPD.registerLesson({
  id: 'arch/03-layering-encap',
  module: 'arch',
  order: 3,
  title: '分层思想与封装/解封装',
  minutes: 4,
  keywords: ['分层', '封装', '解封装', 'PDU', '对等层', '服务访问点'],
  concept: '<p><b>分层</b>把复杂通信拆成独立模块,每层只管自己的事,通过接口为上层服务。</p>' +
    '<div class="ex">发数据时<b>层层加头(封装)</b>,收数据时<b>层层去头(解封装)</b>。</div>',
  exam: '<p><b>频度:中。</b>常考封装顺序、各层 PDU 名称、对等层概念。</p>',
  core: '<p><b>封装流程(发送方,自上而下):</b></p>' +
    '<ol>' +
    '<li>应用层生成<b>报文(Message)</b>。</li>' +
    '<li>传输层加 TCP/UDP 头 → <b>报文段(Segment)</b>。</li>' +
    '<li>网络层加 IP 头 → <b>分组/数据报(Packet)</b>。</li>' +
    '<li>数据链路层加帧头帧尾 → <b><gd data-term="frame">帧</gd>(Frame)</b>。</li>' +
    '<li>物理层转为<b>比特流(Bit)</b>上线。</li>' +
    '</ol>' +
    '<p><b>对等层通信:</b>两端的同层(如双方网络层)看似直接对话,实际通过下层服务逐跳传递——这是分层的精髓。</p>' +
    '<p class="ex">每层加的头就是给"对等层"看的指令;接收方同层据此处理并剥除。</p>',
  pitfalls: '<div class="pit"><b>易混:PDU 名称随层变。</b>应用=报文,传输=报文段,网络=分组/数据报,链路=帧,物理=比特。</div>' +
    '<div class="pit"><b>易混:对等层"直接通信"是逻辑概念。</b>实际数据要逐层下传经物理介质传输,不是真的跨层直传。</div>',
  quiz: [
    { type: 'choice', q: '网络层的 PDU 称为?', options: ['帧', '分组(数据报)', '报文段', '比特'], answer: 1, source: '基础', explain: '网络层 PDU 是分组/数据报。' },
    { type: 'choice', q: '发送方封装的正确顺序是?', options: ['帧→分组→报文段→报文', '报文→报文段→分组→帧→比特', '比特→帧→分组', '报文→分组→帧→报文段'], answer: 1, source: '理解', explain: '自上而下:报文→报文段→分组→帧→比特。' },
    { type: 'choice', q: '"对等层"是指?', options: ['同一主机相邻两层', '两端相同序号的层', '物理层与链路层', '任意两层'], answer: 1, source: '理解', explain: '对等层是通信两端相同序号的层。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/02-tcpip">TCP/IP 模型</a> · 下一课:<a href="#/l/arch/04-compare">两模型对比</a></p>'
});
