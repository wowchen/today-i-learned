EBD.registerLesson({
  id: 'monitor-02-tower',
  module: 'monitor',
  order: 2,
  title: '杆塔倾斜与基础沉降监测',
  minutes: 4,
  keywords: ['杆塔', '倾斜', '沉降', '基础', '监测'],
  sections: {
    what:
      '<p>最典型的形变监测对象就是<gd data-term="ganta">杆塔</gd>。两类毛病要盯:<strong>基础沉降</strong>(地基往下陷或不均匀下沉)和<strong>塔身倾斜</strong>(整塔歪斜)。两者发展下去都可能导致倒塔、断线。</p>',
    why:
      '<p>处在采空区、软土、滑坡体、河岸边的杆塔,基础最容易出问题。这些塔往往又在偏远山区,人工巡检几个月才到一次,根本盯不住毫米级的渐变。装上北斗监测,就能<strong>24 小时连续盯着</strong>,异常早发现。</p>',
    how:
      '<ul>' +
      '<li><strong>布点</strong>:在塔基或塔身关键点装北斗监测终端,长期观测三维位移。</li>' +
      '<li><strong>看什么</strong>:水平位移看"倾斜",<gd data-term="dadigao">高程</gd>变化看"沉降",还能算不均匀沉降。</li>' +
      '<li><strong>传回</strong>:数据定时回传(无网区域用<gd data-term="duanbaowen">短报文</gd>),超阈值报警。</li>' +
      '</ul>' +
      '<div class="ex">注意:塔基沉降对"高"特别敏感,这里就要用上模块 2 讲的高程概念——卫星的<gd data-term="dadigao">大地高</gd>变化才是真位移,别和海拔混了。不过监测看的是"变化量",同一基准下相对比较即可。</div>',
    pitfalls:
      '<div class="pit"><b>误解:塔没倒就没事。</b>倒塔前往往有长期、微小的倾斜/沉降累积。监测的意义就是抓住"还没出事但已在变"的阶段,而不是等出事。</div>',
    links:
      '<p>· 让塔出问题的"地"——地质灾害,下一课讲。<br>· 一个监测点具体怎么搭,见《一个 GNSS 形变监测站是怎么工作的》。'
  }
});
