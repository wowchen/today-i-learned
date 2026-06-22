ISPM.registerLesson({
  id: 'pm-cost/05-evm-indicators',
  module: 'pm-cost',
  order: 5,
  title: '挣值偏差与绩效指标',
  minutes: 5,
  key: true,
  keywords: ['进度偏差', 'SV', '成本偏差', 'CV', 'SPI', 'CPI', '挣值指标'],
  concept: '<p>有了 PV、EV、AC 三个量，就能算出四个判断指标：两个<b>偏差</b>（差值，看差多少钱）和两个<b>绩效指数</b>（比值，看效率高低）。这是案例计算的核心公式。</p>',
  exam: '<p><b>考纲定位：</b>案例分析<b>必考计算</b>。四个公式必须背熟，并能据此判断项目状态。</p>',
  core: '<p><b>两个偏差（用减法，记"EV 打头"）：</b></p>' +
    '<ul><li><b>进度偏差 SV = EV − PV</b>。SV>0 进度超前，SV<0 进度落后。</li>' +
    '<li><b>成本偏差 CV = EV − AC</b>。CV>0 成本节约，CV<0 成本超支。</li></ul>' +
    '<p><b>两个绩效指数（用除法，记"EV 打头"）：</b></p>' +
    '<ul><li><b>进度绩效指数 <gd data-term="spi">SPI</gd> = EV / PV</b>。SPI>1 超前，SPI<1 落后。</li>' +
    '<li><b>成本绩效指数 <gd data-term="cpi">CPI</gd> = EV / AC</b>。CPI>1 节约，CPI<1 超支。</li></ul>' +
    '<div class="ex"><b>统一记忆：四个指标都是 EV 打头。</b>带 P（PV）的是进度，带 A（AC）的是成本。减法得偏差，除法得指数。<br>正数/大于1 = 好（超前/节约），负数/小于1 = 坏（落后/超支）。</div>' +
    '<div class="ex"><b>例：</b>PV=40万，EV=30万，AC=35万。<br>' +
    'SV = 30−40 = <b>−10万</b>（落后）　CV = 30−35 = <b>−5万</b>（超支）<br>' +
    'SPI = 30/40 = <b>0.75</b>（落后）　CPI = 30/35 ≈ <b>0.86</b>（超支）<br>' +
    '结论：该项目<b>既落后又超支</b>，需要纠偏。</div>',
  pitfalls: '<div class="pit"><b>误解 1：SV 用 PV−EV、CV 用 AC−EV。</b> 全部 <em>EV 打头</em>：SV = EV−PV，CV = EV−AC。记反了正负号就反了，结论全错。</div>' +
    '<div class="pit"><b>误解 2：SPI/CPI 大于 1 是坏事。</b> 指数 > 1 是好事（超前/节约），< 1 才是坏事（落后/超支）。和偏差正数为好一致。</div>' +
    '<div class="pit"><b>误解 3：CV 为负说明进度有问题。</b> CV（含 AC）反映成本，SV（含 PV）反映进度。别把成本偏差当进度问题。</div>',
  quiz: [
    {
      type: 'choice',
      q: '某项目检查点：PV=50万，EV=45万，AC=40万。下列判断正确的是：',
      options: [
        '进度超前，成本超支',
        '进度落后，成本节约',
        '进度超前，成本节约',
        '进度落后，成本超支'
      ],
      answer: 1,
      source: '案例必考',
      explain: 'SV=EV−PV=45−50=−5万<0 进度落后；CV=EV−AC=45−40=+5万>0 成本节约。所以"进度落后，成本节约"。'
    },
    {
      type: 'choice',
      q: 'PV=200，EV=160，AC=200。该项目的 SPI 和 CPI 分别是：',
      options: ['0.8 和 0.8', '0.8 和 1.0', '1.0 和 0.8', '1.25 和 1.0'],
      answer: 0,
      source: '案例高频',
      explain: 'SPI=EV/PV=160/200=0.8（落后）；CPI=EV/AC=160/200=0.8（超支）。两个指数都小于1，项目既落后又超支。'
    },
    {
      type: 'fill',
      q: '成本绩效指数的计算公式 CPI = EV / ____。',
      answer: ['AC', 'ac'],
      explain: 'CPI = EV / AC。CPI>1 表示成本节约（花得值），CPI<1 表示成本超支。'
    }
  ],
  links: '<p>相关术语：<gd data-term="spi">SPI</gd>、<gd data-term="cpi">CPI</gd></p>' +
    '<p>上一课：<a href="#/l/pm-cost/04-evm-basics">挣值管理基础</a> · 下一课：<a href="#/l/pm-cost/06-evm-forecasting">挣值预测（EAC/ETC）</a></p>'
});
