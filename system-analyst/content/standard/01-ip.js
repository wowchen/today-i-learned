SAN.registerLesson({
  id: 'standard/01-ip',
  module: 'standard',
  order: 1,
  title: '知识产权',
  minutes: 5,
  key: true,
  keywords: ['知识产权', '著作权', '专利权', '商标权', '职务作品', '先申请'],
  concept: '<p><gd data-term="ip-right">知识产权</gd>是对智力成果的专有权,常考三类:<b>著作权、专利权、商标权</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识必考。重点:三类对象与保护期、软件著作权归属、职务作品。</p>',
  core: '<table><tr><th>类型</th><th>对象</th><th>保护期(要点)</th></tr>' +
    '<tr><td>著作权</td><td>作品(含软件)</td><td>作者终生+死后50年;法人/软件50年</td></tr>' +
    '<tr><td>专利权</td><td>发明/实用新型/外观</td><td>发明20年(其余以现行法为准)</td></tr>' +
    '<tr><td>商标权</td><td>商标标识</td><td>注册后10年,可续展</td></tr></table>' +
    '<div class="ex"><span class="pit" style="display:inline">具体年限与归属以最新《著作权法》《专利法》为准。</span>软件主要受<b>著作权</b>保护;我国专利采<b>先申请原则</b>。</div>',
  pitfalls: '<div class="pit"><b>误解:专利"谁先发明谁拥有"。</b>我国采<b>先申请原则</b>:先申请者获权,而非先发明者。</div>',
  quiz: [
    { type: 'choice', q: '我国专利权取得遵循?', options: ['先发明原则', '先申请原则', '先使用原则', '先公开原则'], answer: 1, source: '高频', explain: '我国专利采先申请原则。' },
    { type: 'choice', q: '计算机软件主要受哪类知识产权保护?', options: ['商标权', '著作权', '专利权', '商业秘密'], answer: 1, source: '高频', explain: '软件主要受著作权保护。' }
  ],
  links: '<p>下一课:<a href="#/l/standard/02-standardization">标准化基础</a></p>'
});
