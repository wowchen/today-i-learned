SPM.registerLesson({
  id: 'standard/02-ip',
  module: 'standard',
  order: 2,
  title: '知识产权',
  minutes: 5,
  keywords: ['知识产权', '著作权', '专利权', '商标权', '保护期'],
  concept: '<p><gd data-term="ip">知识产权</gd>含<b>著作权、专利权、商标权</b>等。软件作品自完成起享著作权(登记非前提);专利需申请;商标需注册。各权保护期与取得方式不同。</p>',
  exam: '<p><b>考纲定位:</b>标准篇,选择题高频考保护期与取得方式。</p>',
  core: '<ul>' +
    '<li><b>著作权(版权)</b>:作品完成即产生(自动取得),软件可登记。</li>' +
    '<li><b>专利权</b>:需申请授权,发明保护期长于实用新型/外观。</li>' +
    '<li><b>商标权</b>:需注册,续展可延长。</li>' +
    '</ul>' +
    '<div class="ex">软件著作权是"完成即有",登记是增强证据力,不是取得权利的前提。</div>',
  pitfalls: '<div class="pit"><b>具体各类知识产权保护期与细则以现行《著作权法》《专利法》《商标法》为准</b>,本课只讲框架,勿背死年限。</div>',
  quiz: [
    { type: 'choice', q: '软件作品著作权取得的方式是?', options: ['需申请授权', '作品完成自动取得', '需注册', '需公证'], answer: 1, source: '高频', explain: '著作权自作品完成自动产生;登记非取得前提。' }
  ],
  links: '<p>上一课:<a href="#/l/standard/01-standardization">标准化</a> · 下一课:<a href="#/l/standard/03-law">法律法规</a></p>'
});
