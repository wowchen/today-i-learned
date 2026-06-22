SAD.registerLesson({
  id: 'sec/03-asymmetric',
  module: 'sec',
  order: 3,
  title: '非对称加密',
  minutes: 5,
  key: true,
  keywords: ['非对称加密', '公钥', '私钥', 'RSA', 'ECC', '密钥分发'],
  concept: '<p><gd data-term="asymmetric">非对称加密</gd>用一对密钥:<b>公钥公开、私钥保密</b>。公钥加密只有私钥能解(保密),私钥加密公钥能验(签名)。代表 RSA、ECC。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:公私钥用法、"加密用谁的钥、签名用谁的钥"。</p>',
  core: '<table><tr><th>目的</th><th>用谁的什么钥</th></tr>' +
    '<tr><td>保密发给A</td><td>用 <b>A的公钥</b>加密,A用私钥解</td></tr>' +
    '<tr><td>签名(我发的)</td><td>用 <b>我的私钥</b>签,别人用我的公钥验</td></tr></table>' +
    '<div class="ex">口诀:<b>加密用对方公钥,签名用自己私钥</b>。非对称解决了对称的密钥分发难题,但速度慢,故常只用来传对称密钥。</div>',
  pitfalls: '<div class="pit"><b>误解:公钥加密、公钥解密。</b>公钥加密必须<b>私钥</b>解;若用私钥"加密"那是为了<b>签名</b>(让人用公钥验证来源),不是为了保密。</div>',
  quiz: [
    { type: 'choice', q: '要把机密文件安全发给张三,应使用?', options: ['张三的公钥加密', '张三的私钥加密', '自己的公钥加密', '自己的私钥加密'], answer: 0, source: '高频', explain: '保密传输用接收方(张三)的公钥加密,只有他的私钥能解。' },
    { type: 'choice', q: '非对称加密相比对称加密的主要优势是?', options: ['速度更快', '解决密钥分发问题', '加密强度一定更高', '不需要密钥'], answer: 1, source: '高频', explain: '非对称加密公钥可公开,解决了密钥分发难题。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/02-symmetric">对称加密</a> · 下一课:<a href="#/l/sec/04-hash-signature">散列与数字签名</a></p>'
});
