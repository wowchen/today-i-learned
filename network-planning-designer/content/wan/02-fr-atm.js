NPD.registerLesson({
  id: 'wan/02-fr-atm',
  module: 'wan',
  order: 2,
  title: '帧中继与 ATM',
  minutes: 4,
  keywords: ['帧中继', 'ATM', '信元', '虚电路', '分组交换', 'QoS'],
  concept: '<p><b><gd data-term="frame-relay">帧中继</gd></b>与 <b><gd data-term="atm">ATM</gd></b>是两种分组交换广域网技术,曾广泛用于骨干与专线。</p>' +
    '<div class="ex">帧中继"变长帧、简化差错";ATM"定长信元、硬实时 QoS"。</div>',
  exam: '<p><b>频度:中。</b>常考帧中继与 ATM 特征对比、信元长度、虚电路。</p>',
  core: '<p><b>帧中继:</b></p>' +
    '<ul>' +
    '<li>面向连接,变长帧,简化差错控制(出错丢弃、由端重传)。</li>' +
    '<li>用虚电路(PVC/SVC)复用,适合数据传输。</li>' +
    '<li>开销小、效率较高,但不保证实时。</li>' +
    '</ul>' +
    '<p><b>ATM(异步传输模式):</b></p>' +
    '<ul>' +
    '<li><b>定长信元 53 字节</b>(5 头 + 48 数据),便于硬件快速交换。</li>' +
    '<li>面向连接,虚通道/虚信道两级。</li>' +
    '<li>支持 QoS,曾用于骨干、语音/视频实时业务。</li>' +
    '</ul>' +
    '<p class="ex">ATM 信元 53 字节是高频考点:5 字节信元头 + 48 字节载荷。</p>',
  pitfalls: '<div class="pit"><b>易错:ATM 信元长度 53 字节。</b>5 头 + 48 载荷——这个数务必记牢。</div>' +
    '<div class="pit"><b>易混:帧中继变长 vs ATM 定长。</b>帧中继帧可变长(效率高、硬件交换慢);ATM 定长(硬件交换快、适合实时)。</div>' +
    '<div class="pit"><b>易错:帧中继不纠错。</b>它简化差错控制,出错丢弃由高层重传——"精简快递"思路。</div>',
  quiz: [
    { type: 'fill', q: 'ATM 信元长度为 ____ 字节(5 头 + 48 载荷)。(数字)', answer: ['53'], source: '基础', explain: 'ATM 信元 53 字节。' },
    { type: 'choice', q: '下列关于帧中继正确的是?', options: ['定长信元', '简化差错、出错丢弃', '只传语音', '无连接'], answer: 1, source: '基础', explain: '帧中继简化差错,出错丢弃由端重传。' },
    { type: 'choice', q: 'ATM 适合承载语音/视频的原因是?', options: ['变长帧', '定长信元+QoS 保证', '不面向连接', '无差错控制'], answer: 1, source: '理解', explain: '定长信元便于硬件交换,QoS 保证实时。' }
  ],
  links: '<p>上一课:<a href="#/l/wan/01-pstn-isdn">PSTN/ISDN</a> · 下一课:<a href="#/l/wan/03-mpls">MPLS</a></p>'
});
