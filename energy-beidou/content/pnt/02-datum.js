EBD.registerLesson({
  id: 'pnt-02-datum',
  module: 'pnt',
  order: 2,
  title: '时空基准:一切位置和时间的"尺子"',
  minutes: 4,
  key: '统一基准',
  keywords: ['时空基准', '坐标系', '时间系统', '基准', '统一'],
  sections: {
    what:
      '<p>说"你在东经 116 度",得先讲清"从哪算起、按什么尺子量";说"3 点整对时",得先约定"谁的 3 点"。这套<strong>统一的空间坐标系 + 统一的时间系统</strong>,合起来就是<gd data-term="shikongjizhun">时空基准</gd>——一切位置和时间的"零点和尺子"。</p>',
    why:
      '<p>没有统一基准,数据就<strong>对不上</strong>。两个部门各用各的坐标,同一基杆塔标到两个地方;两套装置各用各的钟,故障先后顺序就排错。<strong>"对齐"是数字电网的命根子,而对齐的前提就是大家共用同一套时空基准。</strong></p>',
    how:
      '<ul>' +
      '<li><strong>空间这一半</strong>:用大地坐标系,中国用 <gd data-term="cgcs2000">CGCS2000</gd>。北斗算出的经纬度就以它为准。</li>' +
      '<li><strong>时间这一半</strong>:用统一时间系统,北斗有自己的 <gd data-term="bdt">北斗时(BDT)</gd>,并与国际标准时间挂钩。</li>' +
      '</ul>' +
      '<div class="ex">北斗的厉害之处,是它同时是这两把尺子的"<strong>源头</strong>":卫星既播位置基准,又播时间基准。全国设备都来对它,自然就对齐了。</div>',
    pitfalls:
      '<div class="pit"><b>误解:坐标就是经纬度,全世界一套。</b>经纬度还得说清"基于哪个坐标系"。不同坐标系下,同一地点的经纬度能差出几十米到上百米,跨系统不转换就会错位。</div>',
    links:
      '<p>· 空间基准细说:《CGCS2000》《高程基准》。<br>· 时间基准细说:《BDT》《授时原理》。'
  }
});
