EBD.registerLesson({
  id: 'inspect-06-repair',
  module: 'inspect',
  order: 6,
  title: '应急抢修导航:最快摸到故障点',
  minutes: 4,
  keywords: ['抢修', '导航', '故障定位', '应急', '到点'],
  sections: {
    what:
      '<p>线路跳闸停电,抢修讲究一个"<strong>快</strong>"字。北斗在这里干两件事:<strong>先大致定位故障在哪、再导航把人和车最快带过去</strong>。</p>',
    how:
      '<ul>' +
      '<li><strong>定故障段</strong>:结合保护、行波测距(依赖<gd data-term="shoushi">精准授时</gd>)等手段,先把故障缩小到某一段、某基<gd data-term="ganta">塔</gd>附近。</li>' +
      '<li><strong>导航到点</strong>:用故障点坐标和<gd data-term="ganta">杆塔坐标库</gd>,给抢修队规划最优路线,直奔现场,不在山里瞎找。</li>' +
      '<li><strong>到场协同</strong>:现场人员、车辆位置实时上图,指挥统一调度;无网处用<gd data-term="duanbaowen">短报文</gd>保持联络。</li>' +
      '</ul>' +
      '<div class="ex">行波测距能否精准,直接取决于授时——这也呼应模块 5:时间差 1 微秒,故障点就偏几百米。授时准,抢修才不白跑。</div>',
    why:
      '<p>停电时间就是损失和民生。把"找故障点"和"赶到现场"这两段大幅缩短,复电更快、影响更小。这是北斗"<strong>定位 + 授时 + 通信</strong>"三种能力在一个场景里的合演。</p>',
    pitfalls:
      '<div class="pit"><b>误解:抢修导航就是用地图 App。</b>关键差别是它接入了电网自己的<strong>故障定位结果和杆塔坐标库</strong>,导到的是"故障塔",而不是一个路边地址。</div>',
    links:
      '<p>· 配网侧的移动作业,下一课《配网巡检与移动作业终端》。<br>· 行波测距的授时基础,回看模块 5《同步要多准》。'
  }
});
