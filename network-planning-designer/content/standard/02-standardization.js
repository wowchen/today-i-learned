NPD.registerLesson({
  id: 'standard/02-standardization',
  module: 'standard',
  order: 2,
  title: '标准分级与代号',
  minutes: 3,
  keywords: ['标准', '代号', 'GB', '国际标准', '强制', '推荐', '802系列'],
  concept: '<p>标准按层级分国际/国家/行业等,用代号标识;我国国家标 GB 分强制(GB)与推荐(GB/T)。</p>' +
    '<div class="ex">代号是标准的"身份证号"——看代号知层级与属性。</div>',
  exam: '<p><b>频度:中。</b>常考标准分级、代号含义、强制性 vs 推荐性。</p>',
  core: '<p><b>标准分级与代号:</b></p>' +
    '<table><tr><th>层级</th><th>代号</th><th>说明</th></tr>' +
    '<tr><td>国际</td><td>ISO/IEC/ITU</td><td>国际标准化组织/电工委员会/电信联盟</td></tr>' +
    '<tr><td>国家</td><td>GB</td><td>中国国家标准,GB 强制、GB/T 推荐</td></tr>' +
    '<tr><td>行业</td><td>如 YD(通信)</td><td>行业标准代号</td></tr>' +
    '<tr><td>地方/团体/企业</td><td>DB/T/ Q</td><td>地方/团体/企业标准</td></tr></table>' +
    '<p><b>强制性 vs 推荐性:</b></p>' +
    '<ul>' +
    '<li><b>强制性标准(GB)</b>:必须执行,多为安全/健康/环保等。</li>' +
    '<li><b>推荐性标准(GB/T)</b>:鼓励采用,非强制。</li>' +
    '</ul>' +
    '<p><b>网络常用标准:</b>IEEE 802.3(以太网)、802.11(无线)、802.1Q(VLAN);RFC(TCP/IP)。</p>' +
    '<p class="ex">具体标准代号与现行版本以国家标准信息平台为准;重点是"看代号知层级属性"。</p>',
  pitfalls: '<div class="pit"><b>易混:GB vs GB/T。</b>GB 强制执行,GB/T 推荐;网络相关国标多为推荐性。</div>' +
    '<div class="pit"><b>易错:802 系列。</b>802.3 以太网、802.11 无线、802.1Q VLAN、802.1X 接入认证——代号别混。</div>',
  quiz: [
    { type: 'choice', q: '我国"推荐性国家标准"的代号是?', options: ['GB', 'GB/T', 'YD', 'ISO'], answer: 1, source: '基础', explain: 'GB/T 为推荐性国标。' },
    { type: 'choice', q: '无线局域网标准是?', options: ['IEEE 802.3', 'IEEE 802.11', 'IEEE 802.1Q', 'RFC 1918'], answer: 1, source: '基础', explain: '802.11 是无线局域网。' },
    { type: 'choice', q: '关于强制性标准正确的是?', options: ['可选择性执行', '必须执行', '仅参考', '已被废止'], answer: 1, source: '基础', explain: '强制性标准必须执行。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/01-ip">知识产权</a> · 下一课:<a href="#/l/standard/03-english">专业英语</a></p>'
});
