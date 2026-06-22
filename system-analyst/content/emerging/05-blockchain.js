SAN.registerLesson({
  id: 'emerging/05-blockchain',
  module: 'emerging',
  order: 5,
  title: '区块链',
  minutes: 4,
  keywords: ['区块链', '去中心化', '不可篡改', '共识机制', '智能合约', '联盟链'],
  concept: '<p><gd data-term="blockchain">区块链</gd>是去中心化、不可篡改的分布式账本,靠哈希链与<b>共识机制</b>保证可信。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文。重点:核心特征、共识、适用场景。</p>',
  core: '<table><tr><th>特征</th><th>说明</th></tr>' +
    '<tr><td>去中心化</td><td>节点共维护,无单一控制方</td></tr>' +
    '<tr><td>不可篡改</td><td>区块含前块哈希,改一处需改其后全部</td></tr>' +
    '<tr><td>共识机制</td><td>PoW/PoS等让节点达成账本一致</td></tr>' +
    '<tr><td>智能合约</td><td>自动执行的链上程序</td></tr></table>' +
    '<div class="ex">企业级常用<b>联盟链</b>(多机构共管)。但吞吐有限,只在"多方不互信、需可信存证溯源"时划算。</div>',
  pitfalls: '<div class="pit"><b>误解:区块链适合所有场景、性能高。</b>吞吐受共识制约;高性能事务用传统数据库更合适。</div>',
  quiz: [
    { type: 'choice', q: '区块链"不可篡改"主要依靠?', options: ['防火墙', '哈希链+共识机制', '加密狗', '人工审核'], answer: 1, source: '高频', explain: '前后区块哈希相连且需共识,篡改成本极高。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/04-iot">物联网</a> · 下一课:<a href="#/l/emerging/06-zhongtai">中台</a></p>'
});
