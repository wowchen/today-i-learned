NPD.registerLesson({
  id: 'wan/01-pstn-isdn',
  module: 'wan',
  order: 1,
  title: 'PSTN/ISDN 与接入网',
  minutes: 4,
  keywords: ['PSTN', 'ISDN', '接入网', 'xDSL', 'PON', 'FTTH'],
  concept: '<p><b><gd data-term="pstn">PSTN/ISDN</gd></b>是传统话音/窄带网络;现代用户接入主要靠 xDSL、PON/FTTH 等宽带技术。</p>' +
    '<div class="ex">老式"拨号上网"已退场,光纤入户(FTTH)成主流。</div>',
  exam: '<p><b>频度:中。</b>常考接入技术分类、ISDN 通道、xDSL/PON 区分。</p>',
  core: '<p><b>传统与窄带:</b></p>' +
    '<ul>' +
    '<li><b>PSTN</b>:公共电话网,模拟话音,拨号上网速率低。</li>' +
    '<li><b>ISDN</b>:综合业务数字网,提供 2B+D(基本速率,2×64K 数据+16K 信令)或 30B+D(一次群)。</li>' +
    '<li><b>DDN</b>:数字数据网,提供点对点专线。</li>' +
    '</ul>' +
    '<p><b>宽带接入:</b></p>' +
    '<ul>' +
    '<li><b>xDSL</b>:用电话线传,非对称(ADSL 上行低下行高)、对称(HDSL/SDSL)。</li>' +
    '<li><b>PON(无源光网络)/FTTH</b>:光纤到户,分光器无源分光,主流 EPON/GPON。</li>' +
    '<li><b>HFC</b>:光纤+同轴混合,有线电视网络改宽带。</li>' +
    '</ul>' +
    '<p class="ex">ISDN 的 2B+D 是常考点:B 通道 64K 承载数据,D 通道 16K 载信令。</p>',
  pitfalls: '<div class="pit"><b>易混:ADSL 非对称。</b>上行速率低于下行,适合普通上网(下载多上传少);对称业务用 SDSL。</div>' +
    '<div class="pit"><b>易错:PON 是"无源"。</b>分光器不需电源,降低故障与运维成本——这是 PON 的关键优势。</div>',
  quiz: [
    { type: 'choice', q: 'ISDN 基本速率接口(BRI)提供的通道是?', options: ['2B+D', '30B+D', '1B+D', '23B+D'], answer: 0, source: '基础', explain: 'BRI 为 2B+D。' },
    { type: 'choice', q: '下列属于"无源"光接入技术的是?', options: ['ADSL', 'PON/GPON', 'DDN', 'ISDN'], answer: 1, source: '基础', explain: 'PON 用无源分光器。' },
    { type: 'choice', q: 'ADSL 的特点是?', options: ['上下行对称', '上下行非对称(下行高)', '只传话音', '无线接入'], answer: 1, source: '理解', explain: 'ADSL 非对称,下行高于上行。' }
  ],
  links: '<p>上一课:<a href="#/l/lan/05-l3-switch">三层交换</a> · 下一课:<a href="#/l/wan/02-fr-atm">帧中继/ATM</a></p>'
});
