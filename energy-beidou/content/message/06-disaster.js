EBD.registerLesson({
  id: 'message-06-disaster',
  module: 'message',
  order: 6,
  title: '灾害应急:断网断电时的"最后一条路"',
  minutes: 4,
  key: '应急兜底',
  keywords: ['灾害', '应急', '断网', '保通信', '抢险'],
  sections: {
    what:
      '<p>地震、洪涝、台风等重大灾害会同时打掉<strong>电和网</strong>:基站没电停了、光缆断了,常规通信全瘫。这时<gd data-term="duanbaowen">短报文</gd>因为<strong>不依赖地面任何基础设施</strong>,成了灾区与外界联系的"最后一条路"。</p>',
    why:
      '<p>对电力,灾后第一要务是"<strong>摸清灾情、组织抢修、尽快复电</strong>"。但灾区往往一片失联,指挥部两眼一抹黑。短报文让抢险队进了灾区也能<strong>持续上报位置和灾情、接收指令</strong>,把"失联的黑洞"变成"看得见的战场",这正是它在多次重大灾害中被验证的价值。</p>',
    how:
      '<ul>' +
      '<li><strong>配备终端</strong>:应急队伍、重要变电站配北斗短报文设备,平时备用、灾时顶上。</li>' +
      '<li><strong>灾情上报</strong>:受灾点位、设备损毁、人员安全经短报文带位置回传。</li>' +
      '<li><strong>指挥协同</strong>:与卫星电话等配合,形成应急通信保底体系。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:平时用不上,等灾时再说。</b>应急能力必须<strong>平时配置、定期演练</strong>。终端没配、人不会用,真到灾时这条"最后的路"也用不起来。兜底能力是养兵千日。</div>',
    links:
      '<p>· 它在监测里的日常用法:下一课《监测终端用短报文回传数据》。<br>· 应急位置上报回看《应急指挥与位置上报》。'
  }
});
