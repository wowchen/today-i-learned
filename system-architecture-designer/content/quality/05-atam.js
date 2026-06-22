SAD.registerLesson({
  id: 'quality/05-atam',
  module: 'quality',
  order: 5,
  title: 'ATAM 架构权衡分析法',
  minutes: 5,
  key: true,
  keywords: ['ATAM', '架构评估', '质量属性效用树', '权衡', '敏感点', '风险点', '步骤'],
  concept: '<p><gd data-term="atam">ATAM</gd>(架构权衡分析法)是最主流的架构评估方法,以<b>质量属性场景</b>为驱动,系统地找出敏感点、权衡点、风险点,判断架构能否满足质量目标。</p>',
  exam: '<p><b>考纲定位:</b>案例与论文高频。重点:ATAM 关注多质量属性的权衡、效用树、产出物。</p>',
  core: '<p><b>ATAM 关键产出:</b>效用树(把质量属性细化成带优先级的场景)、敏感点、权衡点、风险点与非风险点。</p>' +
    '<p><b>四个阶段(简记):</b></p>' +
    '<table><tr><th>阶段</th><th>做什么</th></tr>' +
    '<tr><td>① 展示</td><td>介绍 ATAM、业务动机、架构</td></tr>' +
    '<tr><td>② 调查分析</td><td>确定架构方法、生成质量属性效用树、分析架构方法</td></tr>' +
    '<tr><td>③ 测试</td><td>头脑风暴并排序场景、再分析架构方法</td></tr>' +
    '<tr><td>④ 报告</td><td>给出评估结果</td></tr></table>' +
    '<div class="ex">ATAM 最大特点是<b>显式处理多个质量属性之间的权衡</b>(名字里就有 Tradeoff),这也是它区别于只看可修改性的 SAAM 之处。</div>',
  pitfalls: '<div class="pit"><b>误解:ATAM 给出"通过/不通过"的分数。</b>ATAM 不打分,它<b>识别风险、敏感点与权衡点</b>,暴露架构对质量目标的满足程度与隐患,供决策参考。</div>',
  quiz: [
    { type: 'choice', q: 'ATAM区别于SAAM的最大特点是?', options: ['只评估可修改性', '显式分析多质量属性间的权衡', '只用于编码阶段', '需要运行系统'], answer: 1, source: '高频', explain: 'ATAM(权衡分析法)强调多质量属性之间的权衡分析。' },
    { type: 'choice', q: 'ATAM中把质量属性细化为带优先级场景的工具是?', options: ['用例图', '质量属性效用树', '甘特图', 'WBS'], answer: 1, source: '高频', explain: '效用树把质量属性逐层细化为带优先级的具体场景。' }
  ],
  links: '<p>上一课:<a href="#/l/quality/04-sensitivity">敏感点与权衡点</a> · 下一课:<a href="#/l/quality/06-saam">SAAM</a> · 案例:<a href="#/l/case/03-atam-case">ATAM案例</a></p>'
});
