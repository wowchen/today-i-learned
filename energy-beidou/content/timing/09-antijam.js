EBD.registerLesson({
  id: 'timing-09-antijam',
  module: 'timing',
  order: 9,
  title: '授时安全:抗干扰与防欺骗',
  minutes: 4,
  keywords: ['抗干扰', '防欺骗', 'spoofing', '授时安全', '压制'],
  sections: {
    what:
      '<p>卫星信号到地面非常微弱,容易被两类攻击盯上:<strong>压制干扰</strong>(发强噪声把信号盖住,让你收不到)和<gd data-term="qipian">欺骗干扰</gd>(发伪造的"假卫星信号",骗你算出错误的时间或位置)。后者更阴险——你以为一切正常,其实时间已经被带偏。</p>',
    why:
      '<p>对电力,授时被骗比被压制更可怕:压制了你"收不到"还知道出问题(可切守时),欺骗了你"收到了假的"却毫不知情,错误时间会被当真喂给<gd data-term="chadong">差动保护</gd>、录波、<gd data-term="pmu">PMU</gd>,可能引发误动作和错误判断。所以授时安全是<gd data-term="zizhukekong">自主可控</gd>的下半篇。</p>',
    how:
      '<ul>' +
      '<li><strong>多源交叉验证</strong>:北斗 + 多系统 + 本地<gd data-term="shoushi-hold">守时</gd>互相核对,某一路异常就识别、剔除。</li>' +
      '<li><strong>异常检测</strong>:监测信号强度、时间跳变是否异常,发现可疑就告警并切守时。</li>' +
      '<li><strong>抗干扰天线/接收机</strong>:用抗干扰天线、加密授权信号等提高门槛。</li>' +
      '<li><strong>合理布防</strong>:天线选址、屏蔽、物理防护,减少被干扰的机会。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:卫星授时绝对可信,不会出错。</b>它可能被压制、被欺骗。真正稳健的电力授时,是"<strong>多源 + 守时 + 异常检测</strong>"的组合,而不是盲目相信单一卫星信号。</div>',
    links:
      '<p>· 模块 5 结束。下一站模块 6《巡检与运维》,从《传统巡检有多难》开始。<br>· 防欺骗的更多展开,见模块 11《抗干扰与防欺骗》。'
  }
});
