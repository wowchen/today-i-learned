NPD.registerLesson({
  id: 'standard/01-ip',
  module: 'standard',
  order: 1,
  title: '知识产权与标准化',
  minutes: 4,
  keywords: ['知识产权', '著作权', '专利权', '商标权', '标准化', '标准分级', '软件保护'],
  concept: '<p><b><gd data-term="ip-right">知识产权</gd></b>保护智力成果(著作权/专利/商标);<b><gd data-term="standardization">标准化</gd></b>为重复事物定统一规则。</p>' +
    '<div class="ex">脑力成果有"产权证";大家约定"按同一把尺子来"。</div>',
  exam: '<p><b>频度:中。</b>常考知识产权类型、软件著作权、标准分级、保护期。</p>',
  core: '<p><b>知识产权主要类型:</b></p>' +
    '<ul>' +
    '<li><b>著作权(版权)</b>:作品完成即自动产生,无需登记;软件著作权属此类。</li>' +
    '<li><b>专利权</b>:需申请授权(发明、实用新型、外观设计)。</li>' +
    '<li><b>商标权</b>:经注册取得,保护商品/服务标识。</li>' +
    '</ul>' +
    '<p><b>软件著作权要点:</b></p>' +
    '<ul>' +
    '<li>软件作品<b>开发完成即自动产生</b>著作权(登记非取得条件,但便于举证)。</li>' +
    '<li>职务作品与委托开发作品的权属需依约定/法律规定。</li>' +
    '</ul>' +
    '<p><b>标准分级:</b>国际(ISO/IEC/ITU)、国家(GB)、行业、地方、团体、企业。强制性标准与推荐性标准。</p>' +
    '<p><b>网络相关国际组织:</b><gd data-term="ieee">IEEE</gd>(802 系列)、<gd data-term="ietf">IETF/RFC</gd>(TCP/IP)、ISO(OSI)、ITU(电信)。</p>' +
    '<p class="ex">著作权保护期、专利权年限等以<b>现行法律为准</b>(如著作权作者终身及死后若干年)。</p>',
  pitfalls: '<div class="pit"><b>易错:著作权自动产生。</b>作品完成即享有,无需登记——别以为"没登记就没版权"。</div>' +
    '<div class="pit"><b>易混:专利需申请,商标需注册。</b>与著作权"自动取得"不同,专利/商标须经法定程序授权/注册。</div>' +
    '<div class="pit"><b>易错:具体年限以现行法律为准。</b>考试涉及年限时按现行法律规定作答,不确定处标注。</div>',
  quiz: [
    { type: 'choice', q: '软件著作权何时取得?', options: ['登记后', '开发完成即自动产生', '发表后', '审批后'], answer: 1, source: '基础', explain: '著作权自动取得,登记仅为举证。' },
    { type: 'choice', q: '下列需经申请授权才取得的是?', options: ['著作权', '专利权', '软件版权', '商业秘密'], answer: 1, source: '基础', explain: '专利需申请授权。' },
    { type: 'choice', q: 'TCP/IP 体系的技术规范来源是?', options: ['IEEE', 'IETF/RFC', 'ISO', 'ITU'], answer: 1, source: '基础', explain: 'IETF/RFC 定义 TCP/IP。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/04-fault">故障管理</a> · 下一课:<a href="#/l/standard/02-standardization">标准与代号</a></p>'
});
