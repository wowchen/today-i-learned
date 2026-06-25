EBD.registerLesson({
  id: 'inspect-09-tag',
  module: 'inspect',
  order: 9,
  title: '巡检数据的时空标签:照片自带经纬度和时间',
  minutes: 4,
  keywords: ['时空标签', '照片', '经纬度', '时间戳', '可追溯'],
  sections: {
    what:
      '<p>巡检拍的每张照片、记的每条缺陷,都自动带上<gd data-term="shikongbiaoqian">时空标签</gd>:<strong>在哪拍的(经纬度)、什么时候拍的(时间)</strong>。这一步看着小,却是巡检数据"<strong>能用、可信</strong>"的关键。</p>',
    why:
      '<p>没有时空标签的巡检数据,几乎是"<strong>死</strong>"的:一堆照片不知道是哪基塔、哪个部件、哪天拍的,既没法定位整改,也没法和历史比对。打上标签后,数据立刻"活"起来——能归位、能排序、能纵向对比变化趋势,还能堆进<gd data-term="yizhangtu">电网一张图</gd>。</p>',
    how:
      '<ul>' +
      '<li><strong>位置</strong>:终端/无人机用北斗,把经纬度写进照片和记录。</li>' +
      '<li><strong>时间</strong>:用统一<gd data-term="shoushi">授时</gd>盖时间戳,保证不同设备记录的时间可比。</li>' +
      '<li><strong>用起来</strong>:系统按位置自动把数据归到对应设备,按时间排出"这处隐患怎么发展"的序列。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:时空标签只是给照片加个水印。</b>它是让数据"<strong>可归位、可追溯、可比较</strong>"的结构化信息,是后续 AI 识别缺陷、趋势分析、数字电网的数据基础,远不止水印那么浅。</div>',
    links:
      '<p>· 模块 6 结束。下一站模块 7《形变与安全监测》,从《为什么要"毫米级"盯着不动的设施》开始。<br>· 时空标签的通用价值,见模块 8《时空标签》、模块 10《时空数据底座》。'
  }
});
