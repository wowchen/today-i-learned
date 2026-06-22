NPD.registerLesson({
  id: 'phy/01-medium-copper',
  module: 'phy',
  order: 1,
  title: '铜缆介质:双绞线与同轴',
  minutes: 4,
  keywords: ['双绞线', 'UTP', 'STP', 'RJ-45', '同轴电缆', '线序'],
  concept: '<p>铜缆靠电信号传,最常见的是<b><gd data-term="twisted-pair">双绞线</gd></b>(网线)与<b>同轴电缆</b>。</p>' +
    '<div class="ex">两根铜线绞合抵消干扰——这就是双绞线"绞"的用处。</div>',
  exam: '<p><b>频度:中。</b>常考 UTP/STP 区分、双绞线分类(Cat5e/6)、RJ-45 线序。</p>',
  core: '<p><b>双绞线分类:</b></p>' +
    '<ul>' +
    '<li><b>UTP(非屏蔽)</b>:无金属屏蔽,便宜易布,主流网线。</li>' +
    '<li><b>STP(屏蔽)</b>:有金属屏蔽层,抗干扰强,造价高、接地要求严。</li>' +
    '<li><b>类别:</b>Cat5e 支持千兆,Cat6/6a 支持更高,数字越大性能越好。</li>' +
    '</ul>' +
    '<p><b>RJ-45 线序:</b>T568A 与 T568B 两种。直通线(两端同序,连异类设备)、交叉线(两端异序,连同类设备);现多靠 Auto-MDI/MDIX 自动适应。</p>' +
    '<p class="ex">同轴电缆曾用于早期以太网(10Base2/10Base5)与有线电视,现局域网基本被双绞线与光纤取代。</p>',
  pitfalls: '<div class="pit"><b>易混:Cat 类别 ≠ 速率直接等号。</b>Cat5e 是"千兆"起步,Cat6 更高,但实际速率还看长度与接头工艺。</div>' +
    '<div class="pit"><b>易混:直通线 vs 交叉线。</b>连 PC↔交换机用直通,PC↔PC(同类)用交叉;现在设备多自动翻转。</div>',
  quiz: [
    { type: 'choice', q: 'UTP 与 STP 的主要区别是?', options: ['线芯数量', '是否有金属屏蔽层', '传输速率固定值', '接头类型'], answer: 1, source: '基础', explain: 'STP 有屏蔽层,UTP 无。' },
    { type: 'choice', q: 'PC 直连 PC(同类设备)通常用?', options: ['直通线', '交叉线', '光纤', '同轴线'], answer: 1, source: '基础', explain: '同类设备用交叉线(现多自动适应)。' },
    { type: 'choice', q: '双绞线"绞合"的主要作用是?', options: ['增加柔韧度', '抵消电磁干扰', '提高带宽', '便于接头'], answer: 1, source: '理解', explain: '绞合抵消外部干扰。' }
  ],
  links: '<p>上一课:<a href="#/l/arch/04-compare">两模型对比</a> · 下一课:<a href="#/l/phy/02-medium-fiber">光纤介质</a></p>'
});
