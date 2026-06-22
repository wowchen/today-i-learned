SPM.registerLesson({
  id: 'sec/02-auth',
  module: 'sec',
  order: 2,
  title: '认证、数字签名与证书',
  minutes: 5,
  keywords: ['数字签名', '数字证书', 'PKI', 'CA', '哈希'],
  concept: '<p><b>数字签名</b>=私钥签、公钥验,保证<gd data-term="cia">完整性</gd>与防抵赖;<b>数字证书</b>由 <gd data-term="pki">CA</gd> 签发,绑定身份与公钥,解决"公钥是谁的"。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题高频。</p>',
  core: '<ul>' +
    '<li><b>哈希(摘要)</b>:把数据压成定长指纹(MD5/SHA),改一点指纹全变,用于验完整性。</li>' +
    '<li><b>签名流程</b>:对摘要用私钥加密=签名;收方用公钥解出摘要并比对。</li>' +
    '<li><b>PKI</b>:CA、证书、CRL 等构成的信任体系。</li>' +
    '</ul>' +
    '<div class="ex">签名同时保证"没被改"(完整性)和"确实是他发的"(防抵赖)。</div>',
  pitfalls: '<div class="pit"><b>签名不等于加密。</b>签名保完整与防抵赖,不保密;要保密需另行加密。</div>',
  quiz: [
    { type: 'choice', q: '数字签名主要保证?', options: ['只保密', '完整性与防抵赖', '提高速度', '压缩数据'], answer: 1, source: '高频', explain: '签名验证数据未被篡改且来源可认,不提供保密。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/01-crypto">加密技术</a> · 下一课:<a href="#/l/sec/03-defense">安全防护</a></p>'
});
