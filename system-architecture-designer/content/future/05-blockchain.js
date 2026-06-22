SAD.registerLesson({
  id: 'future/05-blockchain',
  module: 'future',
  order: 5,
  title: '区块链',
  minutes: 4,
  keywords: ['区块链', '去中心化', '不可篡改', '共识机制', '智能合约', '哈希链'],
  concept: '<p><gd data-term="blockchain">区块链</gd>是去中心化、不可篡改的分布式账本:数据按区块链式相连,靠密码学(哈希)和<b>共识机制</b>保证一致与可信。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(新技术)。重点:核心特征、共识机制、智能合约。</p>',
  core: '<table><tr><th>特征</th><th>说明</th></tr>' +
    '<tr><td>去中心化</td><td>无单一控制方,节点共维护</td></tr>' +
    '<tr><td>不可篡改</td><td>区块含前块哈希,改一处需改其后全部</td></tr>' +
    '<tr><td>共识机制</td><td>PoW(工作量)、PoS(权益)等,让分布式节点就账本达成一致</td></tr>' +
    '<tr><td>智能合约</td><td>可自动执行的链上程序</td></tr></table>' +
    '<div class="ex">分类:公有链(完全开放)、联盟链(若干机构共管,企业级常用)、私有链。可信但<b>性能/吞吐有限</b>,要看场景。</div>',
  pitfalls: '<div class="pit"><b>误解:区块链适合所有场景、性能很高。</b>区块链吞吐与时延受共识制约,<b>只在"多方不互信、需可信存证/溯源"</b>时才划算;高性能事务用传统数据库更合适。</div>',
  quiz: [
    { type: 'choice', q: '区块链"不可篡改"主要依靠?', options: ['防火墙', '区块间的哈希链 + 共识机制', '加密狗', '人工审核'], answer: 1, source: '高频', explain: '前后区块用哈希相连且需共识,篡改成本极高。' }
  ],
  links: '<p>上一课:<a href="#/l/future/04-ai">人工智能</a> · 下一课:<a href="#/l/future/06-digital-twin">数字孪生与边缘计算</a> · 散列:<a href="#/l/sec/04-hash-signature">散列与数字签名</a></p>'
});
