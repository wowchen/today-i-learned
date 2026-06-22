SAD.registerLesson({
  id: 'sec/09-web-security',
  module: 'sec',
  order: 9,
  title: 'Web 与网络安全防护',
  minutes: 5,
  keywords: ['Web安全', 'SQL注入', 'XSS', 'CSRF', 'DDoS', '防火墙', 'WAF', 'IDS'],
  concept: '<p>Web 系统面临一批"经典攻击",架构师要知道它们是什么、怎么防。考试常给场景问"这是什么攻击/该上什么防护"。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例(安全架构)高频。重点:常见攻击识别与对应防护、安全设备作用。</p>',
  core: '<table><tr><th>攻击</th><th>原理</th><th>防护</th></tr>' +
    '<tr><td>SQL注入</td><td>恶意SQL拼进输入</td><td>参数化查询、输入校验、WAF</td></tr>' +
    '<tr><td>XSS跨站脚本</td><td>注入恶意脚本到页面</td><td>输出转义、CSP</td></tr>' +
    '<tr><td>CSRF跨站请求伪造</td><td>借用户身份发请求</td><td>Token校验、同源策略</td></tr>' +
    '<tr><td>DDoS</td><td>海量请求打瘫服务</td><td>限流、清洗、CDN、冗余</td></tr></table>' +
    '<div class="ex">安全设备:<b>防火墙</b>(访问控制)、<b>IDS</b>(入侵检测,只报警)、<b>IPS</b>(入侵防御,能阻断)、<b>WAF</b>(专护Web应用)。</div>',
  pitfalls: '<div class="pit"><b>误解:IDS能主动阻断攻击。</b>IDS只<b>检测并报警</b>;能主动<b>阻断</b>的是 IPS。这是高频区分点。</div>',
  quiz: [
    { type: 'choice', q: '通过在输入中拼接恶意SQL获取数据的攻击是?', options: ['XSS', 'CSRF', 'SQL注入', 'DDoS'], answer: 2, source: '高频', explain: 'SQL注入把恶意SQL拼入输入,防护用参数化查询等。' },
    { type: 'choice', q: '能够主动阻断入侵行为的设备是?', options: ['IDS', 'IPS', '集线器', 'DNS'], answer: 1, source: '高频', explain: 'IPS可主动阻断;IDS只检测报警。' }
  ],
  links: '<p>信息安全模块完。下一模块:<a href="#/l/arch/01-concept">软件架构是什么</a> · 安全案例:<a href="#/l/case/07-web-arch">Web系统架构案例</a></p>'
});
