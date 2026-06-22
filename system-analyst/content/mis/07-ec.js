SAN.registerLesson({
  id: 'mis/07-ec',
  module: 'mis',
  order: 7,
  title: '电子商务',
  minutes: 4,
  keywords: ['电子商务', 'B2B', 'B2C', 'C2C', 'O2O', '第三方支付'],
  concept: '<p>电子商务用网络完成商品/服务交易,按交易主体分 B2B、B2C、C2C、O2O 等模式。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:电商模式分类。</p>',
  core: '<table><tr><th>模式</th><th>含义</th><th>例</th></tr>' +
    '<tr><td>B2B</td><td>企业对企业</td><td>阿里巴巴</td></tr>' +
    '<tr><td>B2C</td><td>企业对消费者</td><td>京东自营</td></tr>' +
    '<tr><td>C2C</td><td>消费者对消费者</td><td>二手平台</td></tr>' +
    '<tr><td>O2O</td><td>线上到线下</td><td>外卖、到店核销</td></tr></table>',
  pitfalls: '<div class="pit"><b>误解:平台让买卖双方交易就是B2C。</b>要看<b>交易主体</b>:个人对个人是C2C,企业对个人才是B2C。</div>',
  quiz: [
    { type: 'choice', q: '个人卖家对个人买家的电商模式是?', options: ['B2B', 'B2C', 'C2C', 'O2O'], answer: 2, source: '高频', explain: '消费者对消费者是C2C。' }
  ],
  links: '<p>信息系统综合模块完。下一模块:<a href="#/l/emerging/01-cloud">云计算</a></p>'
});
