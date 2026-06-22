PGF.registerLesson({
  id: 'carbon-08-green',
  module: 'carbon',
  order: 8,
  title: '碳配额、CCER、绿证、绿电:四个概念一次分清',
  minutes: 5,
  keywords: ['碳配额', 'CCER', '绿证', '绿电', '区别', '环境权益'],
  sections: {
    what:
      '<p>这四个概念经常混淆,一张表讲清:</p>' +
      '<table><tr><th>概念</th><th>单位</th><th>代表什么</th><th>谁用</th></tr>' +
      '<tr><td><strong>碳配额</strong></td><td>吨 CO₂</td><td>可排放 1 吨碳的许可</td><td>纳入碳市场的企业(强制)</td></tr>' +
      '<tr><td><strong>CCER</strong></td><td>吨 CO₂</td><td>已减排 1 吨碳的信用</td><td>减排项目开发者 → 碳市场企业抵消</td></tr>' +
      '<tr><td><strong>绿证</strong></td><td>MWh</td><td>1 MWh 电来自可再生能源</td><td>企业证明"用了绿电"(ESG、消纳考核)</td></tr>' +
      '<tr><td><strong>绿电</strong></td><td>kWh</td><td>直接购买可再生能源电力</td><td>企业通过绿电交易直接采购风光电</td></tr></table>',
    why:
      '<p>碳配额和 CCER 衡量的是"碳"(吨 CO₂),' +
      '绿证和绿电衡量的是"电"(MWh/kWh)——两套体系、两个市场,但目标相关(都是促进减排)。</p>' +
      '<p>企业做 ESG 报告、应对"碳关税"(欧盟 CBAM)时,这四个工具各有用处。</p>',
    how:
      '<p>它们之间的关系:</p>' +
      '<ul>' +
      '<li><strong>绿电交易 = 电 + 绿证</strong>:买绿电时自动获得绿证(环境权益捆绑);</li>' +
      '<li><strong>绿证可以单独交易</strong>:不买电,只买"绿色属性"(如外省风电的绿证);</li>' +
      '<li><strong>CCER 与绿证的关系</strong>:同一个项目不能同时签发 CCER 又卖绿证(防双重计算);</li>' +
      '<li><strong>碳配额与绿证无关</strong>:买绿证不能替代碳配额履约(两套体系独立)。</li>' +
      '</ul>' +
      '<div class="ex">一家外贸企业的选择:如果欧盟客户要求"碳足迹"→ 需要碳配额/CCER;' +
      '如果客户要求"100% 可再生能源"→ 需要绿证/绿电。搞错了工具,合规不达标。</div>',
    pitfalls:
      '<div class="pit"><b>误解:"买了绿电就不用管碳排放了。"</b>' +
      '绿电可以降低"范围二"(外购电力)碳排放,但企业自身的"范围一"' +
      '(直接排放,如烧天然气)仍需碳配额/CCER 来管。两套体系互补,不能替代。</div>',
    links:
      '<p>· 双碳模块到此结束。下一站:模块 14《能源数字化》。<br>' +
      '· 模块 15《能源金融》讲碳金融衍生品——碳期货等。</p>'
  }
});
