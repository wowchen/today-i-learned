NPD.registerLesson({
  id: 'security/04-vpn',
  module: 'security',
  order: 4,
  title: 'VPN、IPSec 与 SSL/TLS',
  minutes: 5,
  key: true,
  keywords: ['VPN', 'IPSec', 'SSL', 'TLS', '隧道', 'IKE', 'HTTPS'],
  concept: '<p><b><gd data-term="vpn">VPN</gd></b>在公网上建加密隧道,实现异地/移动安全接入;两大技术:<b><gd data-term="ipsec">IPSec</gd></b>(网络层)与<b><gd data-term="ssl-tls">SSL/TLS</gd></b>(传输/会话层)。</p>' +
    '<div class="ex">VPN 是"在公开公路上挖加密专用隧道";IPSec 在 IP 层穿防弹衣,SSL/TLS 先握手对暗号再加密。</div>',
  exam: '<p><b>频度:高。</b>常考 IPSec 组成(AH/ESP/IKE)、工作模式、SSL/TLS 与 HTTPS 关系。</p>',
  core: '<p><b>IPSec(网络层)组成:</b></p>' +
    '<ul>' +
    '<li><b>AH(认证头)</b>:提供数据完整性认证与防重放,不加密。</li>' +
    '<li><b>ESP(封装安全载荷)</b>:提供加密 + 认证,最常用。</li>' +
    '<li><b>IKE</b>:密钥交换(基于 IKE/ISAKMP),协商安全关联(SA)。</li>' +
    '</ul>' +
    '<p><b>IPSec 工作模式:</b></p>' +
    '<ul>' +
    '<li><b>传输模式</b>:只保护 IP 载荷,原 IP 头保留——主机到主机。</li>' +
    '<li><b>隧道模式</b>:加密整个原 IP 包并加新头——站点到站点 VPN 主流。</li>' +
    '</ul>' +
    '<p><b>SSL/TLS(传输/会话层):</b>握手协商密钥(用非对称)→ 验证书 → 对称加密数据。HTTPS=HTTP over TLS。</p>' +
    '<p><b>对比:</b>IPSec 保护 IP 层一切流量(站点间);SSL/TLS 保护应用(如 HTTPS、SSL VPN 接入),客户端零部署更灵活。</p>' +
    '<p class="ex">SSL VPN 常用于移动办公:浏览器即可接入,无需装客户端(或轻量客户端);IPSec 多用于站点间固定隧道。</p>',
  pitfalls: '<div class="pit"><b>易混:AH vs ESP。</b>AH 只认证不加密;ESP 既加密又认证——要加密必选 ESP。</div>' +
    '<div class="pit"><b>易错:传输 vs 隧道模式。</b>传输模式只保护载荷(原头保留);隧道模式整个包加密加新头(站点间常用)。</div>' +
    '<div class="pit"><b>易混:IPSec vs SSL VPN。</b>IPSec 网络层、适合站点间;SSL VPN 应用层、适合移动/远程接入。</div>',
  quiz: [
    { type: 'choice', q: 'IPSec 中提供"加密 + 认证"的协议是?', options: ['AH', 'ESP', 'IKE', 'SSL'], answer: 1, source: '基础', explain: 'ESP 提供加密与认证。' },
    { type: 'choice', q: '站点到站点 VPN 常用的 IPSec 模式是?', options: ['传输模式', '隧道模式', '透明模式', '直通模式'], answer: 1, source: '基础', explain: '隧道模式加密整个原包,站点间常用。' },
    { type: 'choice', q: 'HTTPS 依赖的安全协议是?', options: ['IPSec', 'SSL/TLS', 'AH', 'IKE'], answer: 1, source: '基础', explain: 'HTTPS=HTTP over TLS。' }
  ],
  links: '<p>上一课:<a href="#/l/security/03-firewall">防火墙与 DMZ</a> · 下一课:<a href="#/l/security/05-ids-ips">IDS/IPS</a> · HTTP 安全:<a href="#/l/app/03-http">HTTP/HTTPS</a></p>'
});
