SAD.registerLesson({
  id: 'sec/01-overview',
  module: 'sec',
  order: 1,
  title: '信息安全基础:CIA',
  minutes: 4,
  key: true,
  keywords: ['信息安全', 'CIA', '保密性', '完整性', '可用性', '不可否认性'],
  concept: '<p>信息安全的三大基本目标是 <gd data-term="cia">CIA</gd>:<b>保密性、完整性、可用性</b>,后扩展可控性、不可否认性。所有安全技术都围绕它们。</p>',
  exam: '<p><b>考纲定位:</b>综合知识基础。重点:CIA各自含义、对应威胁与措施。</p>',
  core: '<table><tr><th>目标</th><th>含义</th><th>典型措施</th></tr>' +
    '<tr><td>保密性 C</td><td>不被未授权者看到</td><td>加密、访问控制</td></tr>' +
    '<tr><td>完整性 I</td><td>不被非法篡改</td><td>散列、数字签名</td></tr>' +
    '<tr><td>可用性 A</td><td>需要时能用</td><td>冗余、防DoS、备份</td></tr>' +
    '<tr><td>不可否认性</td><td>做过的事抵赖不了</td><td>数字签名</td></tr></table>' +
    '<div class="ex">对号入座:被偷看→破坏保密性;被改→破坏完整性;被打瘫(DoS)→破坏可用性。</div>',
  pitfalls: '<div class="pit"><b>误解:加密能解决所有安全问题。</b>加密主要保<b>保密性</b>,完整性靠散列/签名、可用性靠冗余防护,目标不同手段不同。</div>',
  quiz: [
    { type: 'choice', q: 'DDoS攻击主要破坏信息安全的哪个属性?', options: ['保密性', '完整性', '可用性', '不可否认性'], answer: 2, source: '高频', explain: 'DDoS让系统无法服务,破坏可用性。' },
    { type: 'choice', q: '数字签名主要保证?', options: ['保密性', '完整性与不可否认性', '可用性', '可扩展性'], answer: 1, source: '高频', explain: '数字签名保证完整性、身份认证与不可否认性。' }
  ],
  links: '<p>下一课:<a href="#/l/sec/02-symmetric">对称加密</a></p>'
});
