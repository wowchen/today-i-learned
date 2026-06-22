NPD.registerLesson({
  id: 'wireless/02-wifi-secure',
  module: 'wireless',
  order: 2,
  title: 'Wi-Fi 标准与安全',
  minutes: 4,
  keywords: ['Wi-Fi', '802.11', '代际', 'WEP', 'WPA', 'WPA2', 'WPA3', '加密'],
  concept: '<p>Wi-Fi 标准一代代升级(速率/频段);安全协议从 WEP→WPA→<b><gd data-term="wpa">WPA2</gd></b>→WPA3,越来越强。</p>' +
    '<div class="ex">WEP 是"旧锁易撬",WPA2 换"AES 新锁",WPA3 更抗暴力破解。</div>',
  exam: '<p><b>频度:中。</b>常考 802.11 代际速率、安全协议演进、WEP 不安全。</p>',
  core: '<p><b>802.11 主要代际(速率随标准演进,具体以标准为准):</b></p>' +
    '<table><tr><th>标准</th><th>频段</th><th>典型速率</th></tr>' +
    '<tr><td>802.11a</td><td>5 GHz</td><td>54 Mbps</td></tr>' +
    '<tr><td>802.11b</td><td>2.4 GHz</td><td>11 Mbps</td></tr>' +
    '<tr><td>802.11g</td><td>2.4 GHz</td><td>54 Mbps</td></tr>' +
    '<tr><td>802.11n</td><td>2.4/5 GHz</td><td>百兆–600 Mbps</td></tr>' +
    '<tr><td>802.11ac</td><td>5 GHz</td><td>Gbps 级</td></tr>' +
    '<tr><td>802.11ax(Wi-Fi 6)</td><td>2.4/5 GHz</td><td>更高、并发优化</td></tr></table>' +
    '<p><b>安全协议演进:</b></p>' +
    '<ul>' +
    '<li><b>WEP</b>:RC4、弱密钥,易破解,已淘汰。</li>' +
    '<li><b>WPA</b>:改进 WEP,TKIP 临时密钥,过渡方案。</li>' +
    '<li><b>WPA2</b>:AES 加密,目前主流安全标准。</li>' +
    '<li><b>WPA3</b>:强化抗暴力破解与前向保密,新一代。</li>' +
    '</ul>' +
    '<p class="ex">企业网用 WPA2/WPA3-企业版(802.1X 认证);家用用 WPA2/WPA3-个人版(预共享密钥 PSK)。</p>',
  pitfalls: '<div class="pit"><b>易错:WEP 不安全。</b>考试选"安全无线加密"别选 WEP,应选 WPA2/WPA3。</div>' +
    '<div class="pit"><b>易混:速率以标准为准。</b>具体速率随版本与调制变化,记忆重点在"代际递增、Wi-Fi 6 最新"。</div>',
  quiz: [
    { type: 'choice', q: '下列无线安全协议中已不安全、应避免的是?', options: ['WEP', 'WPA2', 'WPA3', '802.1X'], answer: 0, source: '基础', explain: 'WEP 已被破解淘汰。' },
    { type: 'choice', q: 'WPA2 采用的加密算法是?', options: ['RC4', 'AES', 'DES', '3DES'], answer: 1, source: '基础', explain: 'WPA2 用 AES。' },
    { type: 'choice', q: '当前最新一代 Wi-Fi 标准常指?', options: ['802.11b', '802.11g', '802.11ax(Wi-Fi 6)', '802.11a'], answer: 2, source: '基础', explain: 'Wi-Fi 6 即 802.11ax。' }
  ],
  links: '<p>上一课:<a href="#/l/wireless/01-wlan">WLAN 体系</a> · 下一课:<a href="#/l/wireless/03-cellular">蜂窝移动网络</a></p>'
});
