SAD.registerLesson({
  id: 'sec/08-zero-trust',
  module: 'sec',
  order: 8,
  title: '零信任架构',
  minutes: 4,
  keywords: ['零信任', 'Zero Trust', '持续验证', '微隔离', 'SDP', '身份'],
  concept: '<p><gd data-term="zero-trust">零信任</gd>颠覆"内网即可信"的旧假设,主张<b>"从不信任,始终验证"</b>:无论内外,每次访问都要鉴权、按最小权限放行。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(新趋势)。重点:零信任核心理念与传统边界防御的区别。</p>',
  core: '<table><tr><th>对比</th><th>传统边界防御</th><th>零信任</th></tr>' +
    '<tr><td>信任假设</td><td>内网可信、外网不可信</td><td>默认都不可信</td></tr>' +
    '<tr><td>验证</td><td>进门验一次</td><td>每次访问持续验证</td></tr>' +
    '<tr><td>授权</td><td>较粗</td><td>最小权限、动态、按身份+设备+上下文</td></tr></table>' +
    '<div class="ex">关键能力:<b>强身份认证 + 持续评估 + 微隔离</b>(把网络切成很多小区,限制横向移动)。一台机器被攻陷,也难以在内网"横着走"。</div>',
  pitfalls: '<div class="pit"><b>误解:零信任就是不用防火墙、不要边界。</b>零信任不是取消边界,而是<b>不再默认信任边界内部</b>,在每个访问点都做验证与最小授权。</div>',
  quiz: [
    { type: 'choice', q: '零信任架构的核心理念是?', options: ['内网默认可信', '从不信任、始终验证', '只防外部攻击', '取消所有认证'], answer: 1, source: '理解', explain: '零信任主张"从不信任,始终验证"。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/07-security-arch">安全架构与纵深防御</a> · 下一课:<a href="#/l/sec/09-web-security">Web与网络安全防护</a></p>'
});
