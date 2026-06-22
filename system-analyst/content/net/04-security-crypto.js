SAN.registerLesson({
  id: 'net/04-security-crypto',
  module: 'net',
  order: 4,
  title: '加密、签名与 PKI',
  minutes: 5,
  key: true,
  keywords: ['对称加密', '非对称加密', '散列', '数字签名', 'PKI', 'CIA'],
  concept: '<p>信息安全三目标 CIA(保密、完整、可用)。手段:<gd data-term="symmetric">对称加密</gd>(快)、<gd data-term="asymmetric">非对称加密</gd>(解决密钥分发)、<gd data-term="hash">散列</gd>(完整性)、<gd data-term="digital-signature">数字签名</gd>(完整+认证+不可否认)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:加密用谁的钥、签名用谁的钥、PKI作用。</p>',
  core: '<table><tr><th>目的</th><th>用谁的钥</th></tr>' +
    '<tr><td>保密发给A</td><td>A的<b>公钥</b>加密,A私钥解</td></tr>' +
    '<tr><td>签名(我发的)</td><td>我的<b>私钥</b>签,别人用我公钥验</td></tr></table>' +
    '<div class="ex">口诀:加密用对方公钥,签名用自己私钥。<gd data-term="pki">PKI</gd> 靠 CA 签发数字证书,把公钥与身份绑定。</div>',
  pitfalls: '<div class="pit"><b>误解:数字签名保证保密。</b>签名保证完整性、认证、不可否认,<b>不保证保密</b>;要保密需另加密。</div>',
  quiz: [
    { type: 'choice', q: '要把机密文件安全发给张三,应使用?', options: ['张三公钥加密', '张三私钥加密', '自己公钥加密', '自己私钥加密'], answer: 0, source: '高频', explain: '保密传输用接收方公钥加密。' },
    { type: 'choice', q: 'PKI中签发数字证书的是?', options: ['CA', '防火墙', 'DNS', '客户端'], answer: 0, source: '高频', explain: 'CA认证中心签发管理数字证书。' }
  ],
  links: '<p>上一课:<a href="#/l/net/03-addressing">IP与子网</a> · 下一课:<a href="#/l/net/05-security-defense">安全防护与攻击</a></p>'
});
