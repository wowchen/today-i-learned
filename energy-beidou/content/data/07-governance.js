EBD.registerLesson({
  id: 'data-07-governance',
  module: 'data',
  order: 7,
  title: '时空数据治理与标准',
  minutes: 4,
  keywords: ['数据治理', '标准', '质量', '统一', '编码'],
  sections: {
    what:
      '<p>数据多了,光"有"不够,还得"<strong>好用、可信</strong>"。时空数据治理,就是给这些带位置时间的数据立规矩:统一坐标系、统一时间、统一编码、保证质量,让它们真能融合互通。</p>',
    why:
      '<p>反面教训很常见:同一基塔,A 系统用老坐标、B 系统用 <gd data-term="cgcs2000">CGCS2000</gd>,编号还不一样,一融合就错位、重复、对不上。治理就是要消灭这些"<strong>脏数据、对不齐</strong>",否则<gd data-term="yizhangtu">一张图</gd>、<gd data-term="shuziluansheng">数字孪生</gd>都建在沙子上。</p>',
    how:
      '<ul>' +
      '<li><strong>基准统一</strong>:全部归到统一坐标系和统一时间(北斗)。</li>' +
      '<li><strong>编码规范</strong>:设备、线路编码统一,跨系统能对上同一个对象。</li>' +
      '<li><strong>质量管控</strong>:对坐标精度、时间准确性、完整性设标准并校核。</li>' +
      '<li><strong>标准先行</strong>:遵循国家/行业的时空数据相关标准,保证长期可用、可互通。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:先把数据堆起来,治理以后再说。</b>越堆越乱、越难收拾。统一基准和编码要<strong>从一开始</strong>就立规矩,否则后期清洗成本极高,甚至推倒重来。</div>',
    links:
      '<p>· 治理好的数据怎么"聪明地用":下一课《时空智能》。<br>· 统一基准回看模块 2《时空基准》《CGCS2000》。'
  }
});
