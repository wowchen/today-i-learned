EBD.registerLesson({
  id: 'asset-02-onsite',
  module: 'asset',
  order: 2,
  title: '到位管控:作业到没到、在不在该在的地方',
  minutes: 4,
  keywords: ['到位管控', '打卡', '作业', '合规', '留痕'],
  sections: {
    what:
      '<p>到位管控要解决一个老问题:<strong>作业人员有没有真的到现场、在不在正确的位置干活</strong>。用北斗定位 + <gd data-term="shikongbiaoqian">时空标签</gd>,"到位"这件事就从"靠自觉、靠填表"变成"<strong>有位置、有时间、可追溯</strong>"。</p>',
    why:
      '<p>过去靠人工填到岗记录,存在"<strong>没到却签到、在 A 处却报 B 处</strong>"的漏洞,既是管理难题,更是安全隐患(比如没真去检查就签了"已巡")。北斗到位管控让记录变得客观:系统知道你几点、到了哪个设备位置,假不了。</p>',
    how:
      '<ul>' +
      '<li><strong>到位校验</strong>:终端定位与目标设备坐标比对,确认确实到达。</li>' +
      '<li><strong>过程留痕</strong>:作业轨迹、停留时间自动记录,带时空标签。</li>' +
      '<li><strong>异常提醒</strong>:该到没到、到错地方,系统提醒或拦截。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>把握目的与边界。</b>到位管控是为<strong>安全与作业质量</strong>服务的,应在合规、尊重员工的前提下使用,聚焦"该到的到了、该做的做了",而非演变为对人的过度监控。</div>',
    links:
      '<p>· 把作业凭证也绑上位置:下一课《两票合规》。<br>· 高风险区怎么自动拦:《高风险区电子围栏》。'
  }
});
