EBD.registerLesson({
  id: 'monitor-07-loop',
  module: 'monitor',
  order: 7,
  title: '从监测到预警:数据怎么变成报警',
  minutes: 4,
  key: '监测闭环',
  keywords: ['预警', '阈值', '闭环', '报警', '处置'],
  sections: {
    what:
      '<p>光采到位移数据没用,得形成<strong>闭环</strong>:<strong>感知 → 传输 → 解算 → 研判 → 预警 → 处置</strong>。每一环扣上,监测才真正"防得住事"。</p>',
    how:
      '<figure class="fig"><svg viewBox="0 0 480 80" width="100%" style="max-width:480px">' +
      '<rect class="f-box" x="6" y="26" width="74" height="30"/><text class="f-txt" x="43" y="45" text-anchor="middle">感知</text>' +
      '<rect class="f-box" x="100" y="26" width="74" height="30"/><text class="f-txt" x="137" y="45" text-anchor="middle">传输</text>' +
      '<rect class="f-box" x="194" y="26" width="74" height="30"/><text class="f-txt" x="231" y="45" text-anchor="middle">解算</text>' +
      '<rect class="f-box" x="288" y="26" width="74" height="30"/><text class="f-txt" x="325" y="45" text-anchor="middle">研判</text>' +
      '<rect class="f-box2" x="382" y="26" width="92" height="30"/><text class="f-hot" x="428" y="45" text-anchor="middle">预警·处置</text>' +
      '<line class="f-line" x1="80" y1="41" x2="98" y2="41" marker-end="url(#arM7)"/>' +
      '<line class="f-line" x1="174" y1="41" x2="192" y2="41" marker-end="url(#arM7)"/>' +
      '<line class="f-line" x1="268" y1="41" x2="286" y2="41" marker-end="url(#arM7)"/>' +
      '<line class="f-line" x1="362" y1="41" x2="380" y2="41" marker-end="url(#arM7)"/>' +
      '<defs><marker id="arM7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="f-arr"/></marker></defs>' +
      '</svg><figcaption>图 · 监测预警闭环</figcaption></figure>' +
      '<ul>' +
      '<li><strong>感知</strong>:监测点连续采位移数据。</li>' +
      '<li><strong>传输</strong>:有网走网络,无网走<gd data-term="duanbaowen">短报文</gd>。</li>' +
      '<li><strong>解算</strong>:平台相对解算出毫米级位移序列。</li>' +
      '<li><strong>研判</strong>:看是否超阈值、看变化速率是否在加速(加速往往比绝对量更危险)。</li>' +
      '<li><strong>预警 + 处置</strong>:分级报警,通知人员加固、避让、停电检修。</li>' +
      '</ul>',
    why:
      '<p>闭环的灵魂是"<strong>研判</strong>"那一步。不是位移一超线就拉满级警报(容易误报、被忽视),而是结合量值、速率、趋势和其它传感器综合判断,既不漏报、也少误报。预警的可信,系统才有人真当回事。</p>',
    pitfalls:
      '<div class="pit"><b>误解:装上监测点就等于有了预警。</b>没有"传输 + 解算 + 研判 + 响应"这条链,数据只是躺在终端里的数字。<strong>预警是一整套闭环和响应机制,不是一个传感器。</strong></div>',
    links:
      '<p>· 精度这条命脉靠谁:下一课《监测精度从哪来:离不开地基增强网》。<br>· 完整跑一遍,见《一个滑坡预警案例的全流程》。'
  }
});
