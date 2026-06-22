SAD.registerLesson({
  id: 'future/07-new-tech',
  module: 'future',
  order: 7,
  title: '综合新技术辨析',
  minutes: 4,
  keywords: ['新技术', '辨析', '选型', '场景', '云大物智链', '综合'],
  concept: '<p>考试和论文常把新技术混在一起,关键是"<b>什么场景该上什么技术</b>"。本课把云大物智链做一次场景速查。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。本课是"按场景选新技术"的整合复习。</p>',
  core: '<table><tr><th>场景关键词</th><th>对应技术</th></tr>' +
    '<tr><td>弹性算力、按需付费</td><td><gd data-term="cloud-computing">云计算</gd></td></tr>' +
    '<tr><td>海量多样数据分析</td><td><gd data-term="big-data">大数据</gd></td></tr>' +
    '<tr><td>设备互联、采集控制</td><td><gd data-term="iot">物联网</gd></td></tr>' +
    '<tr><td>预测/识别/智能决策</td><td>人工智能</td></tr>' +
    '<tr><td>多方不互信、可信存证溯源</td><td><gd data-term="blockchain">区块链</gd></td></tr>' +
    '<tr><td>物理系统仿真优化</td><td><gd data-term="digital-twin">数字孪生</gd></td></tr></table>' +
    '<div class="ex">论文常见组合拳:<b>物联网采集 → 边缘初处理 → 云端大数据存算 → AI建模决策</b>,必要时用区块链做可信溯源。技术是为质量属性与业务目标服务的。</div>',
  pitfalls: '<div class="pit"><b>误解:新技术越多越先进越好。</b>技术选型要<b>服务业务与质量目标</b>,为用而用只会徒增复杂度和成本——这也是论文常考的"选型理由"。</div>',
  quiz: [
    { type: 'choice', q: '"多个互不信任的机构需要共享一份不可篡改的存证",最合适?', options: ['云计算', '区块链', '数字孪生', '大数据'], answer: 1, source: '场景', explain: '多方不互信、需可信不可篡改存证,适合区块链。' }
  ],
  links: '<p>未来技术模块完。下一模块:<a href="#/l/standard/01-ip">知识产权</a></p>'
});
