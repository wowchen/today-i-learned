SPM.registerLesson({
  id: 'supervise/02-quality',
  module: 'supervise',
  order: 2,
  title: '服务质量评价',
  minutes: 5,
  keywords: ['服务质量', 'SERVQUAL', '有形性', '响应性', '可靠性'],
  concept: '<p>服务质量既看<b>客观指标</b>(SLA 达成、时效),也看<b>主观感知</b>。SERVQUAL 模型从五维度评价:有形性、可靠性、响应性、保证性、移情性。</p>',
  exam: '<p><b>考纲定位:</b>监督篇,选择题考 SERVQUAL 五维。</p>',
  core: '<ul>' +
    '<li><b>有形性</b>:设施、人员、沟通材料的外观。</li>' +
    '<li><b>可靠性</b>:可靠准确兑现承诺。</li>' +
    '<li><b>响应性</b>:主动迅速帮助。</li>' +
    '<li><b>保证性</b>:员工知识与礼节,唤起信任。</li>' +
    '<li><b>移情性</b>:关怀、个性化对待客户。</li>' +
    '</ul>' +
    '<div class="ex">服务"好不好"是期望与感知的差;SERVQUAL 量化这五个维度找短板。</div>',
  pitfalls: '<div class="pit"><b>质量评价不能只看 SLA 数字。</b>达标了客户仍可能不满意,主观感知(SERVQUAL/满意度)要一起测。</div>',
  quiz: [
    { type: 'choice', q: 'SERVQUAL 不包含下列哪个维度?', options: ['可靠性', '响应性', '价格最低', '移情性'], answer: 2, source: '高频', explain: 'SERVQUAL 五维:有形/可靠/响应/保证/移情,不含价格。' }
  ],
  links: '<p>上一课:<a href="#/l/supervise/01-concept">监督管理概念</a> · 下一课:<a href="#/l/supervise/03-satisfaction">满意度管理</a></p>'
});
