NPD.registerLesson({
  id: 'wireless/01-wlan',
  module: 'wireless',
  order: 1,
  title: 'WLAN 与 802.11 体系',
  minutes: 4,
  keywords: ['WLAN', '802.11', 'AP', 'AC', 'BSS', 'ESS', 'CSMA/CA'],
  concept: '<p><b><gd data-term="wlan">WLAN</gd></b>(无线局域网)用无线电替代线缆,标准是 <b><gd data-term="wifi">IEEE 802.11</gd></b>,商用品牌即 Wi-Fi。</p>' +
    '<div class="ex">AP 是"无线接入点"(把无线桥到有线);AC 是"无线控制器"(集中管一堆 AP)。</div>',
  exam: '<p><b>频度:中高。</b>常考 802.11 体系、AP/AC、BSS/ESS、CSMA/CA。</p>',
  core: '<p><b>802.11 体系结构:</b></p>' +
    '<ul>' +
    '<li><b>STA(站点)</b>:无线终端(手机/笔记本)。</li>' +
    '<li><b>AP(接入点)</b>:无线↔有线桥接,提供 BSS。</li>' +
    '<li><b>BSS/ESS</b>:基本服务集(单 AP 覆盖)/扩展服务集(多 AP 经分布式系统连成大网)。</li>' +
    '<li><b>AC(无线控制器)</b>:集中管理多个 AP(瘦 AP 架构),下发配置与漫游策略。</li>' +
    '</ul>' +
    '<p><b>接入方式:</b>802.11 用 <gd data-term="csma-ca">CSMA/CA</gd>(发前预约+退避避免冲突),因无线难"边发边检测冲突"。</p>' +
    '<p><b>频段:</b>2.4 GHz(覆盖好、信道少、干扰多)与 5 GHz(速率高、信道多、穿墙弱)。</p>' +
    '<p class="ex">胖 AP(自带配置与管理)vs 瘦 AP(配置由 AC 下发,适合大规模部署)——企业网多用瘦 AP+AC。</p>',
  pitfalls: '<div class="pit"><b>易混:CSMA/CA(无线) vs CSMA/CD(有线)。</b>无线用 CA 避免(因难检测);有线用 CD 检测。</div>' +
    '<div class="pit"><b>易混:胖 AP vs 瘦 AP。</b>胖 AP 独立工作;瘦 AP 受 AC 统一管理,便于大规模与漫游。</div>',
  quiz: [
    { type: 'choice', q: 'WLAN 使用的介质访问方式是?', options: ['CSMA/CD', 'CSMA/CA', '令牌环', 'TDM'], answer: 1, source: '基础', explain: '无线用 CSMA/CA 避免冲突。' },
    { type: 'choice', q: '集中管理多个 AP 的设备是?', options: ['AP', 'AC', 'STA', 'DSLAM'], answer: 1, source: '基础', explain: 'AC 集中管理 AP。' },
    { type: 'choice', q: '关于 5 GHz 频段正确的是?', options: ['穿墙强、干扰多', '速率高、信道多、穿墙弱', '与 2.4G 完全相同', '只用于蓝牙'], answer: 1, source: '理解', explain: '5G 速率高、信道多、穿墙弱。' }
  ],
  links: '<p>上一课:<a href="#/l/security/06-aaa">AAA 与隔离</a> · 下一课:<a href="#/l/wireless/02-wifi-secure">Wi-Fi 安全</a></p>'
});
