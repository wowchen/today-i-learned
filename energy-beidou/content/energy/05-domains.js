EBD.registerLesson({
  id: 'energy-05-domains',
  module: 'energy',
  order: 5,
  title: '五大应用域:授时、巡检、监测、作业、通信',
  minutes: 5,
  key: '应用地图',
  keywords: ['应用域', '授时', '巡检', '监测', '作业', '通信', '五大'],
  sections: {
    what:
      '<p>北斗在电力的用法五花八门,但归拢起来就<strong>五大应用域</strong>。记住这五个,后面模块 5–9 正好一域一模块,对号入座。</p>',
    how:
      '<figure class="fig"><svg viewBox="0 0 480 130" width="100%" style="max-width:480px">' +
      '<rect class="f-box2" x="180" y="6" width="120" height="26"/><text class="f-hot" x="240" y="24" text-anchor="middle">北斗时空服务</text>' +
      '<line class="f-line" x1="240" y1="32" x2="60" y2="64" marker-end="url(#arE5)"/>' +
      '<line class="f-line" x1="240" y1="32" x2="150" y2="64" marker-end="url(#arE5)"/>' +
      '<line class="f-line" x1="240" y1="32" x2="240" y2="64" marker-end="url(#arE5)"/>' +
      '<line class="f-line" x1="240" y1="32" x2="330" y2="64" marker-end="url(#arE5)"/>' +
      '<line class="f-line" x1="240" y1="32" x2="420" y2="64" marker-end="url(#arE5)"/>' +
      '<rect class="f-box" x="18" y="66" width="84" height="28"/><text class="f-txt" x="60" y="85" text-anchor="middle">授时同步</text>' +
      '<rect class="f-box" x="108" y="66" width="84" height="28"/><text class="f-txt" x="150" y="85" text-anchor="middle">巡检运维</text>' +
      '<rect class="f-box" x="198" y="66" width="84" height="28"/><text class="f-txt" x="240" y="85" text-anchor="middle">形变监测</text>' +
      '<rect class="f-box" x="288" y="66" width="84" height="28"/><text class="f-txt" x="330" y="85" text-anchor="middle">资产作业</text>' +
      '<rect class="f-box" x="378" y="66" width="84" height="28"/><text class="f-txt" x="420" y="85" text-anchor="middle">应急通信</text>' +
      '<text class="f-dim" x="60" y="112" text-anchor="middle">用 T</text>' +
      '<text class="f-dim" x="150" y="112" text-anchor="middle">用 P/N</text>' +
      '<text class="f-dim" x="240" y="112" text-anchor="middle">用 P(毫米)</text>' +
      '<text class="f-dim" x="330" y="112" text-anchor="middle">用 P</text>' +
      '<text class="f-dim" x="420" y="112" text-anchor="middle">用短报文</text>' +
      '<defs><marker id="arE5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 五大应用域,各自吃北斗的哪项能力</figcaption></figure>' +
      '<ul>' +
      '<li><strong>授时同步</strong>:给保护、录波、<gd data-term="pmu">PMU</gd> 等提供统一精准时间。(模块 5)</li>' +
      '<li><strong>巡检运维</strong>:无人机/人员巡检、杆塔定位、抢修导航。(模块 6)</li>' +
      '<li><strong>形变监测</strong>:杆塔、大坝、边坡毫米级变形监测。(模块 7)</li>' +
      '<li><strong>资产作业</strong>:设备时空标签、到位管控、车辆物资调度。(模块 8)</li>' +
      '<li><strong>应急通信</strong>:无公网区域用<gd data-term="duanbaowen">短报文</gd>传数据、保通信。(模块 9)</li>' +
      '</ul>',
    why:
      '<p>这张图也回答了"北斗到底给电力带来啥":<strong>授时保安全、巡检监测提效率降风险、作业管得更细、通信补盲区</strong>。每一域都对应实打实的痛点。</p>',
    pitfalls:
      '<div class="pit"><b>误解:五大域同等依赖"高精度定位"。</b>其实各取所需:授时只用时间、应急只用短报文、监测才追毫米级定位。别把"北斗 = 高精度定位"套到所有场景。</div>',
    links:
      '<p>· 接着看《北斗 + 电力的价值逻辑》总结收益。<br>· 之后逐域深入,从模块 5《授时与同步》开始。'
  }
});
