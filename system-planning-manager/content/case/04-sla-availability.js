SPM.registerLesson({
  id: 'case/04-sla-availability',
  module: 'case',
  order: 4,
  title: '案例:SLA 与可用性计算',
  minutes: 5,
  key: true,
  keywords: ['可用性计算', 'MTBF', 'MTTR', 'SLA', '几个9'],
  concept: '<p>计算类案例高频考<b>可用性</b>:A = MTBF/(MTBF+MTTR),换算"几个 9"与年停机。常结合 SLA 判断"是否达标"。</p>',
  exam: '<p><b>考纲定位:</b>案例篇必考计算。</p>',
  core: '<ul>' +
    '<li><b>公式</b>:A = MTBF/(MTBF+MTTR)。</li>' +
    '<li><b>换算</b>:99.9%≈年停机 8.76h;99.99%≈52.6min;99.999%≈5.3min。</li>' +
    '<li><b>达标判断</b>:实测 A ≥ SLA 承诺则达标,否则违约需改进。</li>' +
    '</ul>' +
    '<div class="ex">用本站"服务可用性计算器"验证:MTBF=720、MTTR=4 → A≈99.45%,未达 99.9%,需提升(加冗余/降 MTTR)。</div>',
  pitfalls: '<div class="pit"><b>别把 MTBF 和 MTTR 填反。</b>MTBF 是"两次故障间隔"(正常时间),MTTR 是"修复时间";反了可用性就全错。</div>',
  quiz: [
    { type: 'choice', q: '某服务承诺 99.9% 可用性,约合年停机约?', options: ['8.76 小时', '52 分钟', '5 分钟', '87 小时'], answer: 0, source: '高频', explain: '99.9%→(1−0.999)×8760≈8.76h。' }
  ],
  links: '<p>上一课:<a href="#/l/case/03-ops-case">运营案例</a> · 下一篇:<a href="#/l/case/05-improve-case">持续改进案例</a></p>'
});
