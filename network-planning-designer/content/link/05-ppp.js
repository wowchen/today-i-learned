NPD.registerLesson({
  id: 'link/05-ppp',
  module: 'link',
  order: 5,
  title: 'PPP 与 HDLC:广域网链路层协议',
  minutes: 4,
  keywords: ['PPP', 'HDLC', '广域网', '链路层', 'LCP', 'NCP', 'PAP/CHAP'],
  concept: '<p>广域网点对点链路上,两端用什么协议通信?最常用 <b><gd data-term="ppp">PPP</gd></b> 与 <b>HDLC</b>。</p>' +
    '<div class="ex">PPP 功能全(多协议、认证、差错检测);HDLC 简洁高效,常用于专线。</div>',
  exam: '<p><b>频度:中。</b>常考 PPP 组件(LCP/NCP)、认证方式(PAP/CHAP)、与 HDLC 区别。</p>',
  core: '<p><b>PPP 三大组件:</b></p>' +
    '<ul>' +
    '<li><b>HDLC-like 封装</b>:成帧,用 0x7E 标志、位填充透明传输。</li>' +
    '<li><b>LCP(链路控制协议)</b>:建链、维护、拆除,协商参数(MRU、认证)。</li>' +
    '<li><b>NCP(网络控制协议)</b>:协商网络层协议,如 IPCP 协商 IP 地址。</li>' +
    '</ul>' +
    '<p><b>PPP 认证:</b>PAP(两次握手、明文传密码,弱);CHAP(三次握手、挑战-应答、不传密码、更安全)。</p>' +
    '<p><b>PPP 阶段:</b>链路不可用→建立(LCP)→认证→网络层协商(NCP)→数据传输→终止。</p>' +
    '<p class="ex">HDLC 是 ISO 标准、面向比特;PPP 在其上增加了认证与多协议支持,更适合拨号/宽带接入。</p>',
  pitfalls: '<div class="pit"><b>易混:PAP vs CHAP。</b>PAP 明文、两次握手;CHAP 加密挑战、三次握手、不传密码。安全选 CHAP。</div>' +
    '<div class="pit"><b>易混:LCP vs NCP。</b>LCP 管"链路本身"(建链/参数/认证);NCP 管"网络层"(如分配 IP)。</div>',
  quiz: [
    { type: 'choice', q: 'PPP 中负责建立与维护链路、协商认证的协议是?', options: ['NCP', 'LCP', 'IPCP', 'HDLC'], answer: 1, source: '基础', explain: 'LCP 负责链路建立、维护、认证协商。' },
    { type: 'choice', q: '下列认证方式更安全、不直接传密码的是?', options: ['PAP', 'CHAP', '明文', '无认证'], answer: 1, source: '基础', explain: 'CHAP 用挑战-应答、不传密码,比 PAP 安全。' },
    { type: 'choice', q: 'PPP 与 HDLC 相比,增加的主要特性是?', options: ['支持认证与多协议', '更快转发', '无需成帧', '无差错检测'], answer: 0, source: '理解', explain: 'PPP 增加认证(PAP/CHAP)与多协议支持。' }
  ],
  links: '<p>上一课:<a href="#/l/link/04-mac">MAC 子层</a> · 进入网络层:<a href="#/l/net/01-ipv4">IPv4</a> · 广域网协议:<a href="#/l/wan/02-fr-atm">帧中继/ATM</a></p>'
});
