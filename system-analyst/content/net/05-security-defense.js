SAN.registerLesson({
  id: 'net/05-security-defense',
  module: 'net',
  order: 5,
  title: '安全防护与攻击',
  minutes: 5,
  keywords: ['防火墙', 'IDS', 'IPS', 'WAF', 'SQL注入', 'XSS', 'DDoS', '纵深防御'],
  concept: '<p>系分要懂常见攻击与防护,以及安全架构思想<b>纵深防御</b>(多层设防、层层兜底)。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例(安全)。重点:常见攻击识别、安全设备区分。</p>',
  core: '<table><tr><th>攻击</th><th>防护</th></tr>' +
    '<tr><td>SQL注入</td><td>参数化查询、输入校验、WAF</td></tr>' +
    '<tr><td>XSS</td><td>输出转义、CSP</td></tr>' +
    '<tr><td>CSRF</td><td>Token校验、同源策略</td></tr>' +
    '<tr><td>DDoS</td><td>限流、清洗、CDN、冗余</td></tr></table>' +
    '<div class="ex">设备:防火墙(访问控制)、IDS(检测报警)、<b>IPS(可阻断)</b>、WAF(护Web)。纵深防御:网络→主机→应用→数据层层设防。</div>',
  pitfalls: '<div class="pit"><b>误解:IDS能主动阻断。</b>IDS只<b>检测报警</b>;能阻断的是 IPS。</div>',
  quiz: [
    { type: 'choice', q: '能主动阻断入侵的设备是?', options: ['IDS', 'IPS', '集线器', 'DNS'], answer: 1, source: '高频', explain: 'IPS可主动阻断,IDS只检测报警。' },
    { type: 'choice', q: '在输入中拼接恶意SQL的攻击是?', options: ['XSS', 'CSRF', 'SQL注入', 'DDoS'], answer: 2, source: '高频', explain: 'SQL注入,防护用参数化查询。' }
  ],
  links: '<p>上一课:<a href="#/l/net/04-security-crypto">加密与签名</a> · 下一课:<a href="#/l/net/06-storage">网络存储</a></p>'
});
