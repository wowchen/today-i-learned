ISPM.registerLesson({
  id: 'case/02-calculation-evm',
  module: 'case',
  order: 2,
  title: '挣值计算专项',
  minutes: 5,
  key: true,
  keywords: ['挣值计算', 'EVM', 'PV', 'EV', 'AC', 'SV', 'CV', 'SPI', 'CPI', 'EAC'],
  concept: '<p>挣值是案例分析<b>最高频的计算题</b>，几乎每年必考。本课用一道完整例题，把挣值的全套计算（基本量→偏差→指数→预测）走一遍，形成答题模板。</p>',
  exam: '<p><b>考纲定位：</b>案例分析<b>必考</b>。掌握本课例题套路，挣值计算题基本满分。</p>',
  core: '<p><b>挣值公式速查表：</b></p>' +
    '<table><tr><th>指标</th><th>公式</th><th>判读</th></tr>' +
    '<tr><td>EV</td><td>BAC×完成%</td><td>实际完成价值</td></tr>' +
    '<tr><td>SV</td><td>EV−PV</td><td>>0超前</td></tr>' +
    '<tr><td>CV</td><td>EV−AC</td><td>>0节约</td></tr>' +
    '<tr><td>SPI</td><td>EV/PV</td><td>>1超前</td></tr>' +
    '<tr><td>CPI</td><td>EV/AC</td><td>>1节约</td></tr>' +
    '<tr><td>EAC</td><td>BAC/CPI</td><td>预计总成本</td></tr>' +
    '<tr><td>ETC</td><td>EAC−AC</td><td>还需成本</td></tr>' +
    '<tr><td>VAC</td><td>BAC−EAC</td><td>>0预计节约</td></tr></table>' +
    '<div class="ex"><b>完整例题：</b>某项目 BAC=100万，计划工期10个月。第4月末检查：计划完成40%，实际完成30%，已花费40万。<br><br>' +
    '<b>① 基本量：</b>PV=100×40%=<b>40万</b>；EV=100×30%=<b>30万</b>；AC=<b>40万</b>。<br>' +
    '<b>② 偏差：</b>SV=EV−PV=30−40=<b>−10万</b>（落后）；CV=EV−AC=30−40=<b>−10万</b>（超支）。<br>' +
    '<b>③ 指数：</b>SPI=30/40=<b>0.75</b>（落后）；CPI=30/40=<b>0.75</b>（超支）。<br>' +
    '<b>④ 预测：</b>EAC=BAC/CPI=100/0.75≈<b>133.3万</b>；ETC=EAC−AC≈<b>93.3万</b>；VAC=BAC−EAC≈<b>−33.3万</b>（预计超支）。<br>' +
    '<b>⑤ 结论：</b>项目既落后又超支，需采取纠偏措施。</div>',
  pitfalls: '<div class="pit"><b>误解 1：忘记写判读结论。</b> 案例不仅要算出数字，还要写出"落后/超支"等<em>判读结论</em>和<em>纠偏建议</em>，这些都是得分点。</div>' +
    '<div class="pit"><b>误解 2：EAC 公式用错情形。</b> 默认偏差持续用 BAC/CPI；若题目说偏差是一次性的，用 AC+(BAC−EV)。看清题目假设。</div>' +
    '<div class="pit"><b>误解 3：算完不写单位和过程。</b> 案例要写出<em>公式和计算过程</em>，只写答案可能不得full分。</div>',
  quiz: [
    {
      type: 'choice',
      q: '某项目BAC=200万，检查点PV=80万，EV=60万，AC=75万。其CPI为：',
      options: ['0.75', '0.80', '1.25', '0.90'],
      answer: 1,
      source: '案例必考',
      explain: 'CPI=EV/AC=60/75=0.80。小于1说明成本超支。'
    },
    {
      type: 'choice',
      q: '承上题（BAC=200万，EV=60万，AC=75万，CPI=0.8），若偏差持续，EAC为：',
      options: ['200万', '250万', '240万', '275万'],
      answer: 1,
      source: '案例必考',
      explain: 'EAC=BAC/CPI=200/0.8=250万。预计完工总成本250万，比BAC（200万）超支50万。'
    },
    {
      type: 'fill',
      q: '某项目BAC=300万，已完成60%，则EV=____万。',
      answer: ['180'],
      explain: 'EV=BAC×完成百分比=300×60%=180万。'
    }
  ],
  links: '<p>相关：<a href="#/l/pm-cost/04-evm-basics">挣值管理基础</a> · 上一课：<a href="#/l/case/01-case-overview">案例分析题型与策略</a> · 下一课：<a href="#/l/case/03-calculation-cpm">关键路径计算专项</a></p>'
});
