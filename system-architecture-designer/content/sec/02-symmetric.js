SAD.registerLesson({
  id: 'sec/02-symmetric',
  module: 'sec',
  order: 2,
  title: '对称加密',
  minutes: 4,
  keywords: ['对称加密', 'DES', 'AES', '密钥', '分组密码', '流密码'],
  concept: '<p><gd data-term="symmetric">对称加密</gd>加解密用<b>同一把密钥</b>,速度快、适合加密大量数据,代表 DES、3DES、AES、IDEA。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:对称算法举例、优缺点、与非对称对比。</p>',
  core: '<table><tr><th>方面</th><th>对称加密</th></tr>' +
    '<tr><td>密钥</td><td>加解密同一把</td></tr>' +
    '<tr><td>速度</td><td>快,适合大数据</td></tr>' +
    '<tr><td>难点</td><td><b>密钥分发与管理</b>(n人需 n(n−1)/2 把密钥)</td></tr>' +
    '<tr><td>代表</td><td>DES、3DES、AES、IDEA、RC4</td></tr></table>' +
    '<div class="ex">实际常用<b>混合加密</b>:用非对称加密传"对称密钥",再用对称密钥加密正文——兼顾安全分发与高速。</div>',
  pitfalls: '<div class="pit"><b>误解:RSA是对称加密。</b>RSA是<b>非对称</b>加密。常见对称算法是 DES/AES/IDEA;别记混。</div>',
  quiz: [
    { type: 'choice', q: '下列属于对称加密算法的是?', options: ['RSA', 'AES', 'ECC', 'DSA'], answer: 1, source: '高频', explain: 'AES是对称加密;RSA/ECC/DSA属非对称或签名算法。' },
    { type: 'choice', q: '对称加密最主要的困难是?', options: ['速度太慢', '密钥分发与管理', '不能加密大文件', '无法解密'], answer: 1, source: '高频', explain: '对称加密快,但密钥分发与管理是主要难题。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/01-overview">CIA</a> · 下一课:<a href="#/l/sec/03-asymmetric">非对称加密</a></p>'
});
