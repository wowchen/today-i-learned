EBD.registerLesson({
  id: 'asset-01-tag',
  module: 'asset',
  order: 1,
  title: '时空标签:让每台设备都"知道自己在哪"',
  minutes: 4,
  key: '作业基石',
  keywords: ['时空标签', '资产', '数字化', '设备', '台账'],
  sections: {
    what:
      '<p><gd data-term="shikongbiaoqian">时空标签</gd>就是给每台设备、每条数据、每次作业,都打上"<strong>在哪(位置)+ 何时(时间)</strong>"两个标记。它是资产数字化和精细作业管理的"<strong>地基</strong>"。</p>',
    why:
      '<p>没有时空标签,资产台账就是一堆"<strong>飘着的名字</strong>":知道有这台变压器,却说不准它精确在哪、上次动它是什么时候。打上标签后,设备、作业、数据全都能<strong>对齐到统一时空</strong>——查得到、对得上、管得细。这正是模块 6《巡检时空标签》价值的通用化。</p>',
    how:
      '<ul>' +
      '<li><strong>位置</strong>:用北斗给设备和作业现场赋予精确坐标(必要时用 <gd data-term="rtk">RTK</gd> 高精度)。</li>' +
      '<li><strong>时间</strong>:用统一<gd data-term="shoushi">授时</gd>给每条记录盖时间戳。</li>' +
      '<li><strong>关联</strong>:把"位置 + 时间"和设备台账、作业工单绑定,落到统一平台。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:有了设备编号就不需要时空标签。</b>编号回答"是哪台",时空标签回答"在哪、何时"。两者结合,才能实现到位管控、轨迹追溯、按位置自动归集数据——光有编号做不到。</div>',
    links:
      '<p>· 第一个直接应用:下一课《到位管控》。<br>· 时空标签汇成数据底座,见模块 10《时空数据底座》。'
  }
});
