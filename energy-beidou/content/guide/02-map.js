EBD.registerLesson({
  id: 'guide-02-map',
  module: 'guide',
  order: 2,
  title: '一图看懂"能源北斗"全景',
  minutes: 4,
  key: '全站地图',
  keywords: ['全景', '地图', '架构', '天基', '地基', '应用'],
  sections: {
    what:
      '<p>"能源北斗"说白了就三层:<strong>天上有星 → 地面把精度做高 → 电力行业拿去干活</strong>。先把这张总图记在脑子里,后面每一课都是在往某一层里填细节。</p>',
    why:
      '<p>很多人一上来就被各种缩写绕晕(GEO、RTK、PPP-B2b、PMU……)。其实它们各归各层:有的属于"天基",有的属于"增强",有的属于"应用"。心里有这张分层图,就不会乱。</p>',
    how:
      '<p>三层从上到下:</p>' +
      '<figure class="fig"><svg viewBox="0 0 520 230" width="100%" style="max-width:520px">' +
      '<text class="f-hot" x="10" y="20">① 天基</text>' +
      '<rect class="f-box2" x="60" y="6" width="120" height="26"/><text class="f-txt" x="120" y="24" text-anchor="middle">GEO</text>' +
      '<rect class="f-box2" x="200" y="6" width="120" height="26"/><text class="f-txt" x="260" y="24" text-anchor="middle">IGSO</text>' +
      '<rect class="f-box2" x="340" y="6" width="160" height="26"/><text class="f-txt" x="420" y="24" text-anchor="middle">MEO(主力)</text>' +
      '<text class="f-dim" x="60" y="50">北斗卫星:发信号、发时间、发短报文</text>' +
      '<text class="f-hot" x="10" y="92">② 增强</text>' +
      '<rect class="f-box" x="60" y="74" width="200" height="30"/><text class="f-txt" x="160" y="93" text-anchor="middle">地基增强网(CORS/RTK)</text>' +
      '<rect class="f-box" x="280" y="74" width="220" height="30"/><text class="f-txt" x="390" y="93" text-anchor="middle">星基增强 / PPP-B2b</text>' +
      '<text class="f-dim" x="60" y="122">把定位从"米级"提到"厘米/毫米级"</text>' +
      '<text class="f-hot" x="10" y="170">③ 应用</text>' +
      '<rect class="f-box" x="60" y="150" width="84" height="30"/><text class="f-txt" x="102" y="169" text-anchor="middle">授时</text>' +
      '<rect class="f-box" x="152" y="150" width="84" height="30"/><text class="f-txt" x="194" y="169" text-anchor="middle">巡检</text>' +
      '<rect class="f-box" x="244" y="150" width="84" height="30"/><text class="f-txt" x="286" y="169" text-anchor="middle">监测</text>' +
      '<rect class="f-box" x="336" y="150" width="84" height="30"/><text class="f-txt" x="378" y="169" text-anchor="middle">作业</text>' +
      '<rect class="f-box" x="428" y="150" width="72" height="30"/><text class="f-txt" x="464" y="169" text-anchor="middle">通信</text>' +
      '<text class="f-dim" x="60" y="200">电力行业把"时与空"用起来</text>' +
      '<line class="f-line" x1="260" y1="58" x2="260" y2="72" marker-end="url(#arG2)"/>' +
      '<line class="f-line" x1="260" y1="106" x2="260" y2="148" marker-end="url(#arG2)"/>' +
      '<defs><marker id="arG2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 能源北斗三层全景:天基 → 增强 → 应用</figcaption></figure>',
    pitfalls:
      '<div class="pit"><b>误解:北斗只是"定位"。</b>对电力来说,北斗最关键的往往不是"在哪",而是<strong>"几点几分几秒"(授时)</strong>和<strong>"发条消息出来"(短报文)</strong>。定位只是其中一项。</div>',
    links:
      '<p>· 模块 1《北斗基础》讲第一层(天基)。<br>· 模块 3《高精度增强》讲第二层。<br>· 模块 4 起的多个模块讲第三层(应用)。'
  }
});
