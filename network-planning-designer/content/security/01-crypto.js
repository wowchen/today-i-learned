NPD.registerLesson({
  id: 'security/01-crypto',
  module: 'security',
  order: 1,
  title: '加密基础:对称与非对称',
  minutes: 5,
  key: true,
  keywords: ['加密', '对称', '非对称', 'DES', 'AES', 'RSA', '密钥'],
  concept: '<p>加密分两大类:<b><gd data-term="symmetric">对称加密</gd></b>(加解密同钥)与<b><gd data-term="asymmetric">非对称加密</gd></b>(公钥加密、私钥解密)。</p>' +
    '<div class="ex">对称"一把钥匙锁开共用",快但钥匙难传;非对称"公开信箱人人投、私钥开箱",慢但解了分发难题。</div>',
  exam: '<p><b>频度:高。</b>常考两类算法代表、特点对比、混合加密(数字信封)原理。</p>',
  core: '<p><b>对称加密:</b></p>' +
    '<ul>' +
    '<li><b>算法</b>:DES(56位、已不安全)、3DES、AES(主流,128/192/256位)、国密 SM4。</li>' +
    '<li><b>优点</b>:速度快,适合大数据量。</li>' +
    '<li><b>缺点</b>:密钥分发难,大规模下密钥管理爆炸。</li>' +
    '</ul>' +
    '<p><b>非对称加密:</b></p>' +
    '<ul>' +
    '<li><b>算法</b>:<gd data-term="rsa">RSA</gd>(基于大数分解)、ECC(椭圆曲线,密钥短)、国密 SM2。</li>' +
    '<li><b>用途</b>:加密通信、数字签名、密钥交换。</li>' +
    '<li><b>缺点</b>:速度慢,不适合大数据量。</li>' +
    '</ul>' +
    '<p><b>混合加密(实用方案):</b>用非对称协商/传递对称密钥(数字信封),再用对称加密数据——兼顾安全与效率,HTTPS/TLS 即如此。</p>' +
    '<p class="ex">口诀:对称快管数据,非对称慢管密钥与签名。</p>',
  pitfalls: '<div class="pit"><b>易混:对称 vs 非对称用途。</b>对称加密"数据";非对称加密"密钥分发 + 数字签名"——别用 RSA 加密大文件。</div>' +
    '<div class="pit"><b>易错:DES 已不安全。</b>56 位密钥易被穷举,现用 3DES 或 AES;考试选"安全对称算法"别选 DES。</div>',
  quiz: [
    { type: 'choice', q: '下列属于对称加密算法的是?', options: ['RSA', 'ECC', 'AES', 'DSA'], answer: 2, source: '基础', explain: 'AES 是对称加密。' },
    { type: 'choice', q: '适合加密大量数据的是?', options: ['RSA', 'ECC', 'AES(对称)', 'SHA'], answer: 2, source: '理解', explain: '对称加密速度快,适合大数据。' },
    { type: 'choice', q: 'HTTPS 中"非对称加密"的主要作用是?', options: ['加密全部网页数据', '协商/传递对称密钥', '压缩数据', '分配 IP'], answer: 1, source: '理解', explain: '非对称用于协商对称密钥,数据靠对称加密。' }
  ],
  links: '<p>上一课:<a href="#/l/device/04-gateway-firewall">网关与防火墙</a> · 下一课:<a href="#/l/security/02-pki">PKI 与数字签名</a></p>'
});
