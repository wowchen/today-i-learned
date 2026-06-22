SPM.registerLesson({
  id: 'sec/04-mlps',
  module: 'sec',
  order: 4,
  title: '网络安全等级保护(等保 2.0)',
  minutes: 5,
  key: true,
  keywords: ['等级保护', '等保2.0', '定级', '五级', '合规'],
  concept: '<p><gd data-term="mlps">网络安全等级保护</gd>是我国法定制度:按系统受破坏后的危害程度<b>分级保护</b>,等保 2.0 覆盖云、大数据、物联网、工控等。</p>',
  exam: '<p><b>考纲定位:</b>合规高频,选择题常考级别与流程。</p>',
  core: '<ul>' +
    '<li><b>五个级别</b>:一级(自主)到五级(专控),级别越高要求越严。</li>' +
    '<li><b>基本流程</b>:定级 → 备案 → 建设整改 → 等级测评 → 监督检查。</li>' +
    '<li>《网络安全法》要求落实等保,服务商要协助客户合规。</li>' +
    '</ul>' +
    '<div class="ex">承接政企客户的 IT 服务,几乎都要面对等保测评。</div>',
  pitfalls: '<div class="pit"><b>具体定级标准、测评要求与级别细则以现行国家标准与监管要求为准</b>,本课只讲框架,勿背死数字。</div>',
  quiz: [
    { type: 'choice', q: '网络安全等级保护的第一步通常是?', options: ['等级测评', '定级', '建设整改', '备案'], answer: 1, source: '高频', explain: '先定级,再备案、整改、测评、监督。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/03-defense">安全防护</a> · 下一课:<a href="#/l/sec/05-attack">常见攻击</a></p>'
});
