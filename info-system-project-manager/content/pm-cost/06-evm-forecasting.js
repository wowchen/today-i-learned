ISPM.registerLesson({
  id: 'pm-cost/06-evm-forecasting',
  module: 'pm-cost',
  order: 6,
  title: '挣值预测（EAC/ETC/VAC）',
  minutes: 5,
  key: true,
  keywords: ['EAC', 'ETC', 'VAC', 'TCPI', '完工估算', '完工尚需估算'],
  concept: '<p>知道了当前进度成本，还要预测"<em>照这样下去，最后要花多少钱</em>"。这就是挣值的预测指标：EAC（完工估算）、ETC（完工尚需估算）、VAC（完工偏差）。',
  exam: '<p><b>考纲定位：</b>案例分析常考预测计算，尤其 EAC 的几种情形。需理解不同假设下用哪个公式。</p>',
  core: '<p><b>核心预测公式：</b></p>' +
    '<ul><li><b>EAC（完工估算）</b>：预计完工时的总成本。最常用假设——按当前成本绩效（CPI）继续：<b>EAC = BAC / CPI</b>。</li>' +
    '<li><b>ETC（完工尚需估算）</b>：从现在到完工还要花多少。<b>ETC = EAC − AC</b>。</li>' +
    '<li><b>VAC（完工偏差）</b>：预计最后是省了还是超了。<b>VAC = BAC − EAC</b>。VAC>0 预计节约，VAC<0 预计超支。</li></ul>' +
    '<p><b>EAC 的四种典型情形（案例需判断）：</b></p>' +
    '<ul><li>偏差是<b>典型的</b>（会持续）：EAC = BAC / CPI</li>' +
    '<li>偏差是<b>非典型的</b>（一次性，未来恢复正常）：EAC = AC + (BAC − EV)</li>' +
    '<li>同时考虑进度和成本影响：EAC = AC + (BAC − EV)/(CPI × SPI)</li>' +
    '<li>重新估算：EAC = AC + 自下而上重新估算的 ETC</li></ul>' +
    '<div class="ex"><b>例：</b>BAC=100万，当前 CPI=0.8，AC=40万。<br>' +
    'EAC = BAC/CPI = 100/0.8 = <b>125万</b>（预计总共要花125万）<br>' +
    'ETC = EAC−AC = 125−40 = <b>85万</b>（还要花85万）<br>' +
    'VAC = BAC−EAC = 100−125 = <b>−25万</b>（预计超支25万）</div>',
  pitfalls: '<div class="pit"><b>误解 1：EAC 总是 BAC/CPI。</b> 这只是"偏差会持续"的典型情形。如果偏差是一次性的（非典型），用 EAC = AC + (BAC−EV)。看题目对未来的假设。</div>' +
    '<div class="pit"><b>误解 2：VAC = EAC − BAC。</b> 是 <b>VAC = BAC − EAC</b>。正数表示预计节约，负数表示预计超支（和其他偏差"正为好"一致）。</div>' +
    '<div class="pit"><b>误解 3：ETC 和 EAC 混用。</b> EAC 是"完工时总共要花"（含已花的 AC），ETC 是"从现在起还要花"。ETC = EAC − AC。</div>',
  quiz: [
    {
      type: 'choice',
      q: '某项目 BAC=200万，AC=60万，CPI=0.75，且偏差会持续。则完工估算 EAC 约为：',
      options: ['150万', '200万', '267万', '60万'],
      answer: 2,
      source: '案例高频',
      explain: '偏差持续（典型）时 EAC = BAC/CPI = 200/0.75 ≈ 266.7 ≈ 267万。表示按当前效率，完工总成本约267万，超支约67万。'
    },
    {
      type: 'choice',
      q: 'VAC（完工偏差）的计算公式是：',
      options: ['VAC = EAC − BAC', 'VAC = BAC − EAC', 'VAC = EV − AC', 'VAC = BAC − AC'],
      answer: 1,
      source: '高频考点',
      explain: 'VAC = BAC − EAC。VAC>0 预计完工时节约，VAC<0 预计超支。与SV/CV"正数为好"的方向一致。'
    },
    {
      type: 'fill',
      q: '完工尚需估算 ETC = EAC − ____。',
      answer: ['AC', 'ac'],
      explain: 'ETC = EAC − AC，即从当前时点到完工还需要花费的成本（EAC 是完工总成本，减去已花的 AC）。'
    }
  ],
  links: '<p>上一课：<a href="#/l/pm-cost/05-evm-indicators">挣值偏差与绩效指标</a> · 下一课：<a href="#/l/pm-cost/07-s-curve">S 曲线与时间偏差</a></p>'
});
