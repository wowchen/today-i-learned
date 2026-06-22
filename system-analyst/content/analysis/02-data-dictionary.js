SAN.registerLesson({
  id: 'analysis/02-data-dictionary',
  module: 'analysis',
  order: 2,
  title: '数据字典',
  minutes: 4,
  keywords: ['数据字典', '数据项', '数据结构', '加工逻辑', 'DFD配套'],
  concept: '<p><gd data-term="data-dictionary">数据字典</gd>是 DFD 的"配套词典":精确定义其中每个数据流、数据项、数据存储、加工的含义,消除歧义。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例。重点:数据字典条目、定义符号。</p>',
  core: '<table><tr><th>条目</th><th>说明</th></tr>' +
    '<tr><td>数据项</td><td>最小数据单位(名称、类型、取值)</td></tr>' +
    '<tr><td>数据结构</td><td>若干数据项的组合</td></tr>' +
    '<tr><td>数据流/数据存储</td><td>由哪些数据结构构成</td></tr>' +
    '<tr><td>加工逻辑</td><td>用判定表/判定树/结构化语言描述</td></tr></table>' +
    '<div class="ex">常用定义符号:= 定义为,+ 与,[|] 或(选择),{} 重复,() 可选。</div>',
  pitfalls: '<div class="pit"><b>误解:有了DFD就不需要数据字典。</b>DFD 只画结构,各数据/加工的<b>精确含义</b>靠数据字典补全,两者配套缺一不可。</div>',
  quiz: [
    { type: 'choice', q: '数据字典中描述加工内部逻辑常用?', options: ['类图', '判定表/判定树/结构化语言', '甘特图', 'ER图'], answer: 1, source: '高频', explain: '加工逻辑用判定表、判定树或结构化语言描述。' }
  ],
  links: '<p>上一课:<a href="#/l/analysis/01-structured-dfd">数据流图</a> · 下一课:<a href="#/l/analysis/03-decision-table">判定表</a></p>'
});
