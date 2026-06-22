NPD.registerLesson({
  id: 'security/02-pki',
  module: 'security',
  order: 2,
  title: 'PKI、数字签名与哈希',
  minutes: 5,
  keywords: ['PKI', 'CA', '数字签名', '哈希', 'MD5', 'SHA', '证书'],
  concept: '<p><b><gd data-term="hash">哈希</gd></b>算摘要、<b><gd data-term="digital-signature">数字签名</gd></b>防篡改抗否认、<b><gd data-term="pki">PKI</gd></b> 用 <gd data-term="ca">CA</gd> 签发证书背书身份——三者协作实现可信通信。</p>' +
    '<div class="ex">哈希算"指纹",签名盖"私章",CA 当"公证处"。</div>',
  exam: '<p><b>频度:高。</b>常考签名流程、哈希特性、PKI 组成、证书作用。</p>',
  core: '<p><b>哈希(散列):</b></p>' +
    '<ul>' +
    '<li>把任意长数据映射为<b>定长摘要</b>,单向、防篡改。</li>' +
    '<li>算法:MD5(128位、已不推荐)、SHA-1(已弱)、SHA-256(主流)、国密 SM3。</li>' +
    '<li>用途:完整性校验、数字签名前置。</li>' +
    '</ul>' +
    '<p><b>数字签名流程(发送方):</b></p>' +
    '<ol>' +
    '<li>对原文算<b>哈希摘要</b>。</li>' +
    '<li>用<b>发送方私钥</b>加密摘要 → 数字签名。</li>' +
    '<li>原文 + 签名一起发出。</li>' +
    '</ol>' +
    '<p><b>验证(接收方):</b>用发送方公钥解密签名得摘要,再对原文算哈希比对——一致则未篡改且确为对方。</p>' +
    '<p><b>PKI 组成:</b>CA(证书机构)、RA(注册)、证书库、CRL/OCSP(吊销检查)、密钥管理。</p>' +
    '<p class="ex">签名用<b>私钥</b>签、<b>公钥</b>验;加密用<b>对方公钥</b>加、<b>对方私钥</b>解——别记反。</p>',
  pitfalls: '<div class="pit"><b>易错:签名与加密的密钥用反。</b>签名:私钥签、公钥验;加密:对方公钥加、对方私钥解。</div>' +
    '<div class="pit"><b>易混:哈希 vs 加密。</b>哈希单向不可逆(只校验),加密可逆(能还原);哈希不保密,只防篡改。</div>' +
    '<div class="pit"><b>易错:MD5 已不安全。</b>存在碰撞,安全场景用 SHA-256;考试选摘要算法优先 SHA-2 系列。</div>',
  quiz: [
    { type: 'choice', q: '数字签名使用的密钥是?', options: ['发送方公钥', '发送方私钥', '接收方公钥', '对称密钥'], answer: 1, source: '基础', explain: '签名用发送方私钥,对方用公钥验。' },
    { type: 'choice', q: '哈希函数的特点是?', options: ['可逆', '单向、定长摘要', '需要密钥', '加密数据'], answer: 1, source: '基础', explain: '哈希单向、输出定长摘要。' },
    { type: 'choice', q: 'PKI 中负责签发并管理数字证书的是?', options: ['RA', 'CA', 'CRL', 'LSA'], answer: 1, source: '基础', explain: 'CA 签发证书。' }
  ],
  links: '<p>上一课:<a href="#/l/security/01-crypto">加密基础</a> · 下一课:<a href="#/l/security/03-firewall">防火墙与 DMZ</a></p>'
});
