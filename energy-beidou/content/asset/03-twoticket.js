EBD.registerLesson({
  id: 'asset-03-twoticket',
  module: 'asset',
  order: 3,
  title: '两票合规:工作票和操作票绑上位置',
  minutes: 4,
  keywords: ['两票', '工作票', '操作票', '合规', '间隔', '防误'],
  sections: {
    what:
      '<p><gd data-term="liangpiao">两票</gd>是电力现场作业安全的核心凭证:<strong>工作票</strong>(批准在哪、干什么、注意什么)和<strong>操作票</strong>(一步步怎么操作开关)。把两票和北斗<gd data-term="shikongbiaoqian">时空标签</gd>绑定,合规就从"纸面签字"升级到"<strong>位置 + 时间</strong>核验"。</p>',
    why:
      '<p>两票最怕两类事故:<strong>走错间隔</strong>(在 B 设备上干了本该在 A 干的活)和<strong>代签、补签</strong>(没在现场就签了票)。把票绑上位置和时间:系统能核对"<strong>你是不是在票上指定的那个设备/间隔、在规定时间</strong>"执行,大幅降低走错、代签的风险。</p>',
    how:
      '<ul>' +
      '<li><strong>位置核验</strong>:执行操作时,终端定位与票上目标位置比对,错位置就告警。</li>' +
      '<li><strong>时间留痕</strong>:每步操作带统一时间戳,过程可回溯。</li>' +
      '<li><strong>结合室内定位</strong>:站内间隔密集,常配合<gd data-term="shineidingwei">室内定位</gd>精确到间隔。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:北斗能取代两票制度和防误闭锁。</b>不能。两票制度、防误闭锁(五防)是成熟的安全体系,北斗时空核验是<strong>增加一道客观校验</strong>,与之配合,而非替代专业安全规程。</div>',
    links:
      '<p>· 把车、物资也管起来:下一课《车辆、船只、物资的时空调度》。<br>· 间隔级室内定位,回看模块 6《变电站室内定位》。'
  }
});
