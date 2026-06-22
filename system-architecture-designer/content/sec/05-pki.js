SAD.registerLesson({
  id: 'sec/05-pki',
  module: 'sec',
  order: 5,
  title: 'PKI 与数字证书',
  minutes: 5,
  keywords: ['PKI', '数字证书', 'CA', 'X.509', '公钥', '信任链', 'PMI'],
  concept: '<p><gd data-term="pki">PKI</gd> 解决"这把公钥到底是谁的"。靠权威 <b>CA(认证中心)</b> 签发<b>数字证书</b>,把公钥与身份绑定;证书格式标准是 X.509。</p>',
  exam: '<p><b>考纲定位:</b>综合知识高频。重点:CA作用、证书内容、信任链、PKI与PMI区别。</p>',
  core: '<ul>' +
    '<li><b>数字证书</b>含:持有者身份、其公钥、有效期、CA的签名等。CA用自己私钥签证书,大家用CA公钥验真伪。</li>' +
    '<li><b>信任链</b>:根CA → 中间CA → 终端证书,逐级签发、逐级验证。</li>' +
    '<li><b>PMI</b>(授权管理基础设施)管"你能做什么(权限)",PKI管"你是谁(身份)",两者互补。</li>' +
    '</ul>' +
    '<div class="ex">类比:PKI像"公安发身份证"(证明你是谁),PMI像"单位发的门禁权限卡"(证明你能进哪些门)。</div>',
  pitfalls: '<div class="pit"><b>误解:PKI 负责权限管理。</b>PKI 管<b>身份认证(你是谁)</b>;<b>权限(你能干什么)</b>由 PMI 负责。两者别混。</div>',
  quiz: [
    { type: 'choice', q: 'PKI体系中负责签发和管理数字证书的是?', options: ['CA认证中心', '防火墙', 'DNS', '客户端'], answer: 0, source: '高频', explain: 'CA(认证中心)负责签发、管理数字证书。' },
    { type: 'choice', q: '关于PKI与PMI,正确的是?', options: ['PKI管权限,PMI管身份', 'PKI管身份认证,PMI管授权', '两者完全相同', '都只做加密'], answer: 1, source: '高频', explain: 'PKI解决身份认证,PMI解决授权(能做什么)。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/04-hash-signature">散列与签名</a> · 下一课:<a href="#/l/sec/06-access-model">访问控制与安全模型</a></p>'
});
