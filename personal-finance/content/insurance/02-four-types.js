PFIN.registerLesson({
  id: 'insurance/02-four-types',
  module: 'insurance',
  order: 2,
  title: '必懂的四大险种',
  minutes: 5,
  key: true,
  keywords: ['重疾险', '医疗险', '寿险', '意外险'],
  concept: '<p>个人/家庭保障,主要靠四类商业险打底:<b>医疗险、重疾险、定期寿险、意外险</b>。各管一摊,别买混。</p>' +
    '<div class="ex">先把这四类的"分工"搞清楚,买保险就不会被销售带偏。</div>',
  core: '<p><b>四大险种分工:</b></p>' +
    '<table><tr><th>险种</th><th>解决什么</th><th>赔付方式</th></tr>' +
    '<tr><td><gd data-term="medical-ins">医疗险</gd></td><td>看病住院的实际花费</td><td>实报实销(有免赔额)</td></tr>' +
    '<tr><td><gd data-term="critical-illness">重疾险</gd></td><td>确诊大病后的收入损失、康复、护理</td><td>确诊即一次性赔付</td></tr>' +
    '<tr><td><gd data-term="term-life">定期寿险</gd></td><td>家庭顶梁柱身故,留给家人</td><td>身故/全残赔付</td></tr>' +
    '<tr><td>意外险</td><td>意外导致的伤残/身故/医疗</td><td>按意外伤残比例或实报</td></tr></table>' +
    '<p><b>关键区分:医疗险 vs 重疾险</b>(最常被搞混)</p>' +
    '<ul>' +
    '<li>医疗险是<b>报销制</b>:花多少报多少(在限额内),解决"治病的钱"。</li>' +
    '<li>重疾险是<b>给付制</b>:确诊就给一笔钱,你随便用——补"生病期间没法工作的收入损失"和康复开销。</li>' +
    '<li>两者互补,不是二选一。</li>' +
    '</ul>' +
    '<p><b>先社保后商保:</b>基本医保是地基(覆盖广、保基本),商业险是补充(补社保不报的、报不够的)。</p>' +
    '<p class="ex">这四类多为<b>消费型</b>保障险:钱花出去买"这段时间的安心",不出险不返钱——这恰恰说明保费便宜、杠杆高,是正常的。</p>',
  pitfalls: '<div class="pit"><b>误区:有了医疗险就不用重疾险。</b>医疗险只报销治病花费,不补收入损失;重疾确诊给付的钱可覆盖康复期不能工作的缺口。</div>' +
    '<div class="pit"><b>误区:重疾险/意外险是浪费,因为没返钱。</b>消费型保障"没事=平安",保费低、杠杆高;返还型往往更贵且摊薄保障(见后续课)。</div>',
  quiz: [
    { type: 'choice', q: '医疗险与重疾险的核心区别是?', options: ['没区别', '医疗险报销治病花费,重疾险确诊一次性给付', '重疾险只保意外', '医疗险给付现金'], answer: 1, source: '理解', explain: '一个实报实销,一个确诊给付,互补。' },
    { type: 'choice', q: '配置商业保险前,应先有?', options: ['年金险', '基本医保(社保)打底', '理财险', '储蓄险'], answer: 1, source: '理解', explain: '先社保后商保,商业险是补充。' }
  ],
  links: '<p>上一课:<a href="#/l/insurance/01-principle">保险原理</a> · 下一课:<a href="#/l/insurance/03-priority">谁先买、怎么排</a></p>'
});
