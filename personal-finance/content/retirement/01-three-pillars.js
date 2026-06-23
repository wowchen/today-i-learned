PFIN.registerLesson({
  id: 'retirement/01-three-pillars',
  module: 'retirement',
  order: 1,
  title: '养老三支柱',
  minutes: 4,
  key: true,
  keywords: ['养老', '三支柱', '社保', '企业年金'],
  concept: '<p>退休后的钱从哪来?靠<b><gd data-term="three-pillars">养老三支柱</gd></b>:基本养老保险、企业(职业)年金、个人养老金/个人储蓄。三条腿,缺一不稳。</p>' +
    '<div class="ex">只靠第一支柱(社保)的退休生活,往往只能"温饱",想体面得自己补后两根腿。</div>',
  core: '<p><b>三支柱分别是:</b></p>' +
    '<table><tr><th>支柱</th><th>是什么</th><th>谁出钱</th></tr>' +
    '<tr><td>第一支柱</td><td>基本养老保险(社保)</td><td>个人+单位,强制</td></tr>' +
    '<tr><td>第二支柱</td><td>企业年金/职业年金</td><td>单位+个人,看单位是否提供</td></tr>' +
    '<tr><td>第三支柱</td><td><gd data-term="personal-pension">个人养老金</gd>/个人储蓄投资</td><td>个人自愿</td></tr></table>' +
    '<p><b>关键认知:</b></p>' +
    '<ul>' +
    '<li><b>第一支柱保基本、难体面</b>:社保养老金替代率有限(下一课讲),只能覆盖基础生活。</li>' +
    '<li><b>第二支柱看运气</b>:不是每个单位都有企业年金。</li>' +
    '<li><b>第三支柱要靠自己</b>:个人养老金账户 + 自己的长期投资,是决定退休生活质量的关键变量。</li>' +
    '</ul>' +
    '<p class="ex">越早开始第三支柱越轻松——复利需要时间(回看复利模块)。养老不是退休前才操心的事,是 30 岁就该动手的事。</p>',
  pitfalls: '<div class="pit"><b>误区:有社保就够养老了。</b>第一支柱替代率有限,仅保基本;想体面退休需第二、三支柱补充。</div>' +
    '<div class="pit"><b>误区:养老等临退休再准备。</b>复利靠时间,越晚开始每月要存越多,负担越重。</div>',
  quiz: [
    { type: 'choice', q: '养老"第一支柱"指?', options: ['个人养老金', '基本养老保险(社保)', '企业年金', '炒股'], answer: 1, source: '记忆', explain: '第一支柱是基本养老保险。' },
    { type: 'choice', q: '决定退休生活质量、最需自己努力的是?', options: ['第一支柱', '第二支柱', '第三支柱(个人养老金+个人投资)', '彩票'], answer: 2, source: '理解', explain: '第三支柱靠个人自愿积累,差异最大。' }
  ],
  links: '<p>下一课:<a href="#/l/retirement/02-personal-pension">个人养老金账户</a> · 原理:<a href="#/l/compound/01-simple-vs-compound">复利</a></p>'
});
