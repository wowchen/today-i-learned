SAN.registerLesson({
  id: 'comp/06-embedded',
  module: 'comp',
  order: 6,
  title: '嵌入式与多媒体基础',
  minutes: 4,
  keywords: ['嵌入式', '实时系统', '多媒体', '数据压缩', 'RTOS'],
  concept: '<p>嵌入式系统是为特定任务定制、嵌入设备的专用计算机,强调<b>实时、可靠、低功耗</b>;多媒体涉及音视频的表示与压缩。两者是综合知识的零散考点。</p>',
  exam: '<p><b>考纲定位:</b>综合知识小题。重点:实时系统(硬/软)、数据压缩(有损/无损)。</p>',
  core: '<table><tr><th>概念</th><th>要点</th></tr>' +
    '<tr><td>硬实时</td><td>超时即失败(刹车、飞控)</td></tr>' +
    '<tr><td>软实时</td><td>偶尔超时可容忍(视频)</td></tr>' +
    '<tr><td>无损压缩</td><td>可完全还原(ZIP、PNG)</td></tr>' +
    '<tr><td>有损压缩</td><td>不可完全还原但压缩比高(JPEG、MP3)</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:实时系统就是速度快。</b>实时强调<b>时间确定性(按时完成)</b>,不是平均速度快。</div>',
  quiz: [
    { type: 'choice', q: 'JPEG图像压缩属于?', options: ['无损压缩', '有损压缩', '不压缩', '加密'], answer: 1, source: '高频', explain: 'JPEG是有损压缩,压缩比高但不可完全还原。' }
  ],
  links: '<p>计算机系统模块完。下一模块:<a href="#/l/os/01-overview">操作系统概述</a></p>'
});
