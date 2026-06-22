NPD.registerLesson({
  id: 'lan/01-ethernet',
  module: 'lan',
  order: 1,
  title: '以太网与 IEEE 802.3',
  minutes: 4,
  keywords: ['以太网', '802.3', 'CSMA/CD', '帧格式', '速率', '最小最大帧长'],
  concept: '<p><b><gd data-term="ethernet">以太网</gd></b>(IEEE 802.3)是局域网事实标准,基于 CSMA/CD,速率从 10M 到 100G+。</p>' +
    '<div class="ex">一句话:办公室联网的"通用母语",几乎所有有线局域网都是它。</div>',
  exam: '<p><b>频度:中高。</b>常考帧格式、最小/最大帧长、速率命名、CSMA/CD 关系。</p>',
  core: '<p><b>以太网帧结构:</b>目的MAC(6)·源MAC(6)·类型/长度(2)·数据·FCS(4)。前导码 7+ 帧起始 1 在帧外。</p>' +
    '<p><b>帧长限制:</b></p>' +
    '<ul>' +
    '<li><b>最小帧长 64 字节</b>:保证冲突检测(发完前能听到冲突)。不足补填充(PAD)。</li>' +
    '<li><b>最大帧长 1518 字节</b>(不含 VLAN 标签);数据 MTU 默认 1500。</li>' +
    '</ul>' +
    '<p><b>速率命名:</b>10Base-T、100Base-TX、1000Base-T(千兆)、1000Base-SX/LX(光纤)、10G/40G/100G。</p>' +
    '<p class="ex">最小帧长 64 字节与 CSMA/CD 的冲突检测窗口相关——这是"为何最小帧长 64"的根源。</p>',
  pitfalls: '<div class="pit"><b>易错:最小帧长 64、最大 1518。</b>带 802.1Q 标签时最大 1522;别与 MTU 1500(数据部分)混。</div>' +
    '<div class="pit"><b>易混:以太网 vs IEEE 802.3。</b>以太网是商用概念,802.3 是其标准化;考题常互换使用。</div>',
  quiz: [
    { type: 'choice', q: '以太网最小帧长为?', options: ['46 字节', '64 字节', '1500 字节', '1518 字节'], answer: 1, source: '基础', explain: '最小 64 字节,保证冲突检测。' },
    { type: 'choice', q: '以太网数据 MTU 默认为?', options: ['64', '1500', '1518', '9000'], answer: 1, source: '基础', explain: '数据部分 MTU 默认 1500。' },
    { type: 'choice', q: '以太网最小帧长 64 字节的设计目的是?', options: ['减少开销', '保证冲突检测窗口', '提高速率', '加密需要'], answer: 1, source: '理解', explain: '保证发完前能检测到冲突。' }
  ],
  links: '<p>上一课:<a href="#/l/app/05-other">FTP/SNMP/Telnet</a> · 下一课:<a href="#/l/lan/02-vlan">VLAN</a> · MAC 子层:<a href="#/l/link/04-mac">MAC 子层</a></p>'
});
