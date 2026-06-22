SPM.registerLesson({
  id: 'sec/01-crypto',
  module: 'sec',
  order: 1,
  title: '加密技术:对称与非对称',
  minutes: 5,
  keywords: ['对称加密', '非对称加密', 'AES', 'RSA', '密钥'],
  concept: '<p>加密保护<gd data-term="cia">保密性</gd>。<b>对称加密</b>(AES)一把钥匙、快,但分发难;<b>非对称加密</b>(RSA)公钥加密私钥解密,解决密钥分发。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题高频。</p>',
  core: '<ul>' +
    '<li><b>对称</b>:加解密同一密钥,速度快,适合大数据量(AES、SM4)。</li>' +
    '<li><b>非对称</b>:公钥/私钥成对,慢,适合密钥交换与签名(RSA、SM2)。</li>' +
    '<li><b>实务</b>:常组合用——非对称传"会话密钥",再用对称加密正文(如 HTTPS)。</li>' +
    '</ul>' +
    '<div class="ex">公钥加密、私钥解密=保密;私钥签名、公钥验证=防抵赖(下一课)。</div>',
  pitfalls: '<div class="pit"><b>公钥是公开的。</b>用对方公钥加密只有对方私钥能解——这是保密,不是身份证明。</div>',
  quiz: [
    { type: 'choice', q: '适合加密大量数据、速度快的是?', options: ['RSA', '对称加密(如AES)', '哈希', '数字证书'], answer: 1, source: '高频', explain: '对称加密速度快,适合大数据量。' }
  ],
  links: '<p>下一课:<a href="#/l/sec/02-auth">认证与签名</a></p>'
});
