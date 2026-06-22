PGF.registerLesson({
  id: 'dist-06-da',
  module: 'dist',
  order: 6,
  title: '配电自动化:故障自愈 FLISR',
  minutes: 4,
  keywords: ['配电自动化', 'FLISR', '故障定位', '隔离', '恢复', '自愈'],
  sections: {
    what:
      '<p>配电自动化的核心功能叫 <strong>FLISR</strong>:故障定位(Fault Location)→ ' +
      '隔离(Isolation)→ 恢复(Service Restoration)。</p>' +
      '<p>翻译成大白话:哪里断了?把断的那段切开!其余部分从别的路供上!</p>' +
      '<div class="ex">类比:身体受伤后的自愈:①找到伤口(定位) ②止血隔离(隔离) ③其他血管代偿(恢复)。</div>',
    why:
      '<p>传统配电网出了故障,要靠人骑车巡线找故障点,耗时几十分钟到几小时。' +
      '有了 FLISR,系统可以在<strong>秒级~分钟级</strong>自动完成:' +
      '故障段两侧开关跳开隔离,非故障段从联络线路倒送恢复。</p>' +
      '<p>这是提升供电可靠性最有效的技术手段。</p>',
    how:
      '<table><tr><th>步骤</th><th>传统方式</th><th>FLISR</th></tr>' +
      '<tr><td>故障定位</td><td>人工巡线(30min~2h)</td><td>传感器 + 算法(&lt;1s)</td></tr>' +
      '<tr><td>隔离</td><td>人工操作开关(到现场)</td><td>远程遥控(秒级)</td></tr>' +
      '<tr><td>恢复</td><td>等故障修完才恢复</td><td>非故障段立刻从其他线路供电</td></tr>' +
      '<tr><td>总停电时长</td><td>1~3 小时</td><td>故障段外 &lt;3 分钟</td></tr></table>' +
      '<div class="ex">关键:FLISR 不能修故障本身(还是要人去修),但它能让<strong>没坏的用户不受影响</strong>。' +
      '比如一条线上有 5 段,坏了第 3 段,传统做法整条线停;FLISR 只停第 3 段,其余 4 段从别的路供。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"配电自动化 = 不停电。"</b>' +
      '故障段的用户还是要停(直到修好),自动化减少的是"非故障段的连带停电"和"定位隔离的等待时间"。</div>',
    links:
      '<p>· 下一课讲有源配电网:屋顶光伏和充电桩带来的新难题。<br>' +
      '· 模块 14《数字化》的 DMS 一课会从 IT 系统角度讲配电自动化。</p>'
  }
});
