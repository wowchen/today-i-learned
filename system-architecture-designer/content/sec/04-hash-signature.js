SAD.registerLesson({
  id: 'sec/04-hash-signature',
  module: 'sec',
  order: 4,
  title: '散列与数字签名',
  minutes: 5,
  key: true,
  keywords: ['散列', '摘要', 'SHA', 'MD5', '数字签名', '完整性', '不可否认'],
  concept: '<p><gd data-term="hash">散列</gd>把数据压成定长摘要(不可逆、防篡改)。<gd data-term="digital-signature">数字签名</gd> = 对摘要用私钥加密,同时保证<b>完整性、身份认证、不可否认</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:签名流程、散列算法举例、签名为何要先做摘要。</p>',
  core: '<p><b>数字签名流程:</b></p>' +
    '<div class="ex">发送方:原文 →(散列)→ 摘要 →(<b>发送方私钥</b>加密)→ 签名,连同原文发出。<br>' +
    '接收方:原文 →(同样散列)→ 摘要A;签名 →(<b>发送方公钥</b>解密)→ 摘要B;<b>A=B 则验证通过</b>(未被改且确为发送方所发)。</div>' +
    '<p>常见散列:MD5(已不安全)、SHA-1(淘汰中)、SHA-256(推荐)。</p>',
  pitfalls: '<div class="pit"><b>误解1:数字签名保证保密性。</b>签名保证<b>完整性、认证、不可否认</b>,不保证保密(原文常是明文);要保密需另加加密。</div>' +
    '<div class="pit"><b>误解2:直接对全文加密就是签名。</b>签名是对<b>摘要</b>用私钥加密(高效),并依赖散列检测篡改。</div>',
  quiz: [
    { type: 'choice', q: '数字签名不能提供下列哪种保证?', options: ['完整性', '不可否认性', '身份认证', '保密性'], answer: 3, source: '高频', explain: '数字签名不保证保密性,保密需另外加密。' },
    { type: 'choice', q: '验证数字签名时,接收方用?', options: ['自己的私钥', '自己的公钥', '发送方的公钥', '发送方的私钥'], answer: 2, source: '高频', explain: '用发送方的公钥解密签名得到摘要进行比对。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/03-asymmetric">非对称加密</a> · 下一课:<a href="#/l/sec/05-pki">PKI与数字证书</a></p>'
});
