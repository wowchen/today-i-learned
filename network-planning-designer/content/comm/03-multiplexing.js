NPD.registerLesson({
  id: 'comm/03-multiplexing',
  module: 'comm',
  order: 3,
  title: '多路复用:一条信道传多路信号',
  minutes: 4,
  keywords: ['多路复用', 'FDM', 'TDM', 'WDM', 'CDMA', 'STDM'],
  concept: '<p><b>多路复用</b>:在一条共享信道上同时/轮流传输多路信号,提高信道利用率。</p>' +
    '<div class="ex">好比一条高速公路划车道——按"频率、时间、波长、码"分车道。</div>',
  exam: '<p><b>频度:中高。</b>常考四种复用方式识别与适用场景,光纤/WDM、移动/CDM 是热点。</p>',
  core: '<p><b>四种基本复用:</b></p>' +
    '<table><tr><th>方式</th><th>划分依据</th><th>典型应用</th></tr>' +
    '<tr><td><gd data-term="fdm">FDM 频分</gd></td><td>不同频段</td><td>广播、模拟载波</td></tr>' +
    '<tr><td><gd data-term="tdm">TDM 时分</gd></td><td>不同时隙</td><td>E1、数字电话</td></tr>' +
    '<tr><td><gd data-term="wdm">WDM 波分</gd></td><td>不同光波长</td><td>光纤干线(DWDM)</td></tr>' +
    '<tr><td>CDM 码分</td><td>不同正交码</td><td>3G 移动通信</td></tr></table>' +
    '<p><b>同步 vs 统计 TDM:</b>同步 TDM 按固定时隙轮流(可能空转);统计 TDM(STDM)按需动态分配,利用率更高。</p>' +
    '<p class="ex">WDM 本质是光的频分复用,因光用"波长"描述而得名;DWDM 通道密、容量大。</p>',
  pitfalls: '<div class="pit"><b>易混:FDM 与 TDM。</b>FDM 各路"同时占不同频率",TDM 各路"轮流占全部带宽不同时隙"。</div>' +
    '<div class="pit"><b>易混:同步 TDM 时隙固定。</b>即使某路无数据,时隙也空转,造成浪费——这是统计 TDM 想解决的。</div>',
  quiz: [
    { type: 'choice', q: '光纤上用不同波长光同时传多路信号属于?', options: ['FDM', 'TDM', 'WDM', 'CDM'], answer: 2, source: '基础', explain: '波分复用 WDM,按光波长划分。' },
    { type: 'choice', q: '3G 移动通信采用的复用方式主要是?', options: ['FDM', 'TDM', 'WDM', 'CDM'], answer: 3, source: '基础', explain: '3G 用码分复用 CDM。' },
    { type: 'choice', q: '关于同步 TDM 正确的是?', options: ['按需动态分配时隙', '时隙固定,可能空转浪费', '只用于光纤', '各路用不同频率'], answer: 1, source: '理解', explain: '同步 TDM 时隙固定,无数据也占,可空转。' }
  ],
  links: '<p>上一课:<a href="#/l/comm/02-encoding-modulation">编码与调制</a> · 下一课:<a href="#/l/comm/04-nyquist-shannon">奈氏与香农</a></p>'
});
