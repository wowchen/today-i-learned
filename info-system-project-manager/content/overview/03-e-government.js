ISPM.registerLesson({
  id: 'overview/03-e-government',
  module: 'overview',
  order: 3,
  title: '电子政务',
  minutes: 4,
  keywords: ['电子政务', 'G2G', 'G2B', 'G2C', 'G2E', '一网通办'],
  concept: '<p><b>电子政务</b>是政府运用信息技术，向社会提供服务、提升治理效率。考点主要是它的几种<b>应用模式</b>（按服务对象划分）。</p>',
  exam: '<p><b>考纲定位：</b>综合知识常考。重点是 G2G/G2B/G2C/G2E 四种模式的含义。</p>',
  core: '<p><b>电子政务的四种应用模式（按服务对象）：</b></p>' +
    '<ul><li><b>G2G（政府对政府）</b>：政府部门之间的电子化协作（如公文流转、信息共享）。</li>' +
    '<li><b>G2B（政府对企业）</b>：政府面向企业的服务（如网上报税、电子采购、工商登记）。</li>' +
    '<li><b>G2C（政府对公民）</b>：政府面向公民的服务（如社保查询、户籍办理、一网通办）。</li>' +
    '<li><b>G2E（政府对公务员）</b>：政府内部面向公务员的管理（如办公自动化、培训）。</li></ul>' +
    '<div class="ex"><b>记忆：</b>G = Government（政府），后面的字母是服务对象——G(overnment)、B(usiness 企业)、C(itizen 公民)、E(mployee 雇员/公务员)。</div>' +
    '<p><b>"一网通办""最多跑一次"</b>是电子政务以公民为中心、优化服务的典型实践（属 G2C/G2B）。</p>',
  pitfalls: '<div class="pit"><b>误解 1：G2B 的 B 指银行。</b> B 是 Business（企业）。G2B 是政府面向企业的服务，如网上报税、电子招标采购。</div>' +
    '<div class="pit"><b>误解 2：政府内部办公也算 G2C。</b> 政府内部面向公务员的是 G2E（Employee）。G2C 是面向普通公民（Citizen）。</div>',
  quiz: [
    {
      type: 'choice',
      q: '企业通过政府平台在线办理纳税申报，这属于电子政务的哪种模式？',
      options: ['G2G', 'G2B', 'G2C', 'G2E'],
      answer: 1,
      source: '高频考点',
      explain: 'G2B（Government to Business）是政府面向企业提供的服务，如网上报税、电子采购、工商登记。'
    },
    {
      type: 'choice',
      q: '公民通过政务平台查询社保、办理户籍，这属于：',
      options: ['G2E', 'G2G', 'G2C', 'G2B'],
      answer: 2,
      explain: 'G2C（Government to Citizen）是政府面向公民提供的服务，如社保查询、户籍办理、"一网通办"等。'
    }
  ],
  links: '<p>上一课：<a href="#/l/overview/02-national-info-system">国家信息化战略</a> · 下一课：<a href="#/l/overview/04-enterprise-info">企业信息化</a></p>'
});
