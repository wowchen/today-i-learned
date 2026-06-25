EBD.registerLesson({
  id: 'energy-08-panorama',
  module: 'energy',
  order: 8,
  title: '全景图:一张图看懂能源北斗',
  minutes: 4,
  key: '模块总览',
  keywords: ['全景', '总览', '架构', '能源北斗', '一张图'],
  sections: {
    what:
      '<p>把模块 1–4 的东西摞成一张"竖图":<strong>天上的北斗能力,经过增强,变成电力的五大应用,最后沉到一个时空数据底座上</strong>。这张图就是全站的骨架。</p>',
    how:
      '<figure class="fig"><svg viewBox="0 0 480 220" width="100%" style="max-width:480px">' +
      '<rect class="f-box2" x="120" y="6" width="240" height="28"/><text class="f-hot" x="240" y="24" text-anchor="middle">北斗:定位 · 授时 · 短报文</text>' +
      '<line class="f-line" x1="240" y1="34" x2="240" y2="52" marker-end="url(#arE8)"/>' +
      '<rect class="f-box" x="120" y="54" width="240" height="26"/><text class="f-txt" x="240" y="72" text-anchor="middle">增强:地基增强 / PPP-B2b(高精度)</text>' +
      '<line class="f-line" x1="240" y1="80" x2="240" y2="98" marker-end="url(#arE8)"/>' +
      '<rect class="f-box" x="20" y="100" width="84" height="30"/><text class="f-txt" x="62" y="119" text-anchor="middle">授时同步</text>' +
      '<rect class="f-box" x="112" y="100" width="84" height="30"/><text class="f-txt" x="154" y="119" text-anchor="middle">巡检运维</text>' +
      '<rect class="f-box" x="204" y="100" width="72" height="30"/><text class="f-txt" x="240" y="119" text-anchor="middle">形变监测</text>' +
      '<rect class="f-box" x="284" y="100" width="84" height="30"/><text class="f-txt" x="326" y="119" text-anchor="middle">资产作业</text>' +
      '<rect class="f-box" x="376" y="100" width="84" height="30"/><text class="f-txt" x="418" y="119" text-anchor="middle">应急通信</text>' +
      '<line class="f-line" x1="240" y1="130" x2="240" y2="150" marker-end="url(#arE8)"/>' +
      '<rect class="f-box2" x="120" y="152" width="240" height="28"/><text class="f-hot" x="240" y="170" text-anchor="middle">时空数据底座 · 数字电网</text>' +
      '<text class="f-dim" x="240" y="200" text-anchor="middle">统一时空基准:让一切对得齐、连得通</text>' +
      '<defs><marker id="arE8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 能源北斗全景:能力 → 增强 → 应用 → 数据底座</figcaption></figure>',
    why:
      '<p>带着这张图往下读最省力:模块 5–9 是中间那排"五大应用",模块 10 是底部"时空数据底座",模块 11 是给整张图"上保险"(安全自主)和"看未来"。</p>',
    pitfalls:
      '<div class="pit"><b>别把各层割裂看。</b>授时、定位、通信常常在一个场景里<strong>同时上阵</strong>(比如一个监测点:北斗定位测形变、短报文回传数据、还要时间戳对齐)。分层是为讲清,实战是融合。</div>',
    links:
      '<p>· 模块 4 结束,进入应用域。下一站模块 5《授时与同步》,从《电网为什么对"时间"这么较真》开始。'
  }
});
