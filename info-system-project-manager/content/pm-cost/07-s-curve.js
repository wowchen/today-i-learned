ISPM.registerLesson({
  id: 'pm-cost/07-s-curve',
  module: 'pm-cost',
  order: 7,
  title: 'S 曲线与挣值图',
  minutes: 4,
  keywords: ['S曲线', '挣值图', 'PV曲线', 'EV曲线', 'AC曲线', '成本基准'],
  concept: '<p>把 PV、EV、AC 三个量随时间画成累计曲线，就是<b>挣值图</b>。因为项目初期和末期花钱慢、中期花钱快，累计曲线呈"S"形，所以成本基准曲线也叫 <b>S 曲线</b>。',
  exam: '<p><b>考纲定位：</b>综合知识偶考。常考从挣值图中读出三条曲线的相对位置，判断项目状态。</p>',
  core: '<p><b>挣值图三条曲线：</b></p>' +
    '<figure class="fig"><svg width="320" height="200" viewBox="0 0 320 200">' +
    '<line x1="40" y1="170" x2="300" y2="170" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="40" y1="20" x2="40" y2="170" stroke="var(--ink2)" stroke-width="1"/>' +
    '<text x="170" y="192" text-anchor="middle" fill="var(--ink2)" font-size="10">时间</text>' +
    '<text x="20" y="95" text-anchor="middle" fill="var(--ink2)" font-size="10" transform="rotate(-90 20 95)">累计成本</text>' +
    '<path d="M40,170 Q120,150 180,90 T300,30" fill="none" stroke="var(--ink2)" stroke-width="2"/>' +
    '<text x="305" y="30" fill="var(--ink2)" font-size="11">PV</text>' +
    '<path d="M40,170 Q110,158 160,120 T240,70" fill="none" stroke="var(--accent)" stroke-width="2"/>' +
    '<text x="245" y="68" fill="var(--accent)" font-size="11">EV</text>' +
    '<path d="M40,170 Q105,150 155,100 T235,45" fill="none" stroke="var(--bad)" stroke-width="2"/>' +
    '<text x="240" y="43" fill="var(--bad)" font-size="11">AC</text>' +
    '<line x1="235" y1="45" x2="235" y2="170" stroke="var(--line2)" stroke-width="1" stroke-dasharray="3 2"/>' +
    '<text x="235" y="183" text-anchor="middle" fill="var(--ink2)" font-size="9">检查点</text>' +
    '</svg><figcaption>图 · 挣值图（EV 低于 PV 且低于 AC：落后且超支）</figcaption></figure>' +
    '<p><b>读图判断：</b>在检查点画一条竖线——</p>' +
    '<ul><li>EV 在 PV <b>下方</b> → 进度落后（EV<PV）</li>' +
    '<li>EV 在 AC <b>下方</b> → 成本超支（EV<AC）</li>' +
    '<li>三条线的垂直间距就是偏差：PV 与 EV 的差是 SV，EV 与 AC 的差是 CV。</li></ul>' +
    '<p><b>BAC 点：</b>PV 曲线的终点（项目计划完工时的累计值）就是 BAC。</p>',
  pitfalls: '<div class="pit"><b>误解 1：曲线越高越好。</b> 要看相对位置。AC 高于 EV 是超支（坏），不是"进展快"。关键看 EV 相对 PV 和 AC 的位置。</div>' +
    '<div class="pit"><b>误解 2：S 曲线是进度曲线。</b> S 曲线是<em>累计成本</em>随时间的曲线（成本基准）。形状呈 S 是因为中期投入大、首末期投入小。</div>',
  quiz: [
    {
      type: 'choice',
      q: '在挣值图中，若检查点处 EV 曲线同时低于 PV 曲线和 AC 曲线，说明项目：',
      options: ['进度超前、成本节约', '进度落后、成本超支', '进度落后、成本节约', '一切正常'],
      answer: 1,
      source: '高频考点',
      explain: 'EV<PV 说明进度落后；EV<AC 说明成本超支。这是项目状态最差的情形，需要纠偏。'
    }
  ],
  links: '<p>上一课：<a href="#/l/pm-cost/06-evm-forecasting">挣值预测</a> · 下一课：<a href="#/l/pm-cost/08-cost-control">控制成本</a></p>'
});
