/* 旅行模块第 27 课:银行与通讯。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-27-money-comms',
  module: 'travel',
  order: 27,
  title: '银行通讯:ATM·换汇·信用卡·SIM 卡',
  minutes: 5,
  keywords: ['ATM', '取款', '换汇', 'exchange', '信用卡', 'credit card', 'declined', 'SIM', 'Wi-Fi', 'ZIP code'],

  sections: {
    what: '\
<p><strong>一句话:钱和网是旅行的两条命脉。要会用 ATM 取现、换汇、处理刷卡被拒、买 SIM 卡连网。</strong></p>\
<p>场景地图:ATM 界面英文(Insert card → Enter PIN → Withdrawal);刷卡被拒别慌,换张卡或感应支付;美国 POS 常要 ZIP code,外国卡按 Enter 跳过。</p>',

    when: '\
<p>取现金、把人民币换美元、刷卡出问题、买美国 SIM 卡或连 Wi-Fi 时。</p>',

    how: '\
<p><strong>ATM 与换汇(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>最近的 ATM 在哪?</td><td><en>Where is the nearest ATM?</en></td></tr>\
<tr><td>这台 ATM 接受银联吗?</td><td><en>Does this ATM accept UnionPay?</en></td></tr>\
<tr><td>ATM 把我的卡扣住了。</td><td><en>The ATM kept my card.</en></td></tr>\
<tr><td>今天汇率是多少?手续费多少?</td><td><en>What\'s the exchange rate today? How much is the commission?</en></td></tr>\
<tr><td>能给我一些小面额的吗?主要是 20 的。</td><td><en>Could I get smaller bills? Mostly twenties.</en></td></tr>\
</table>\
<p><strong>信用卡与通讯(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我的卡被拒了,能再试一次吗?</td><td><en>My card was declined. Could you try it again?</en></td></tr>\
<tr><td>我是中国卡,没有美国邮编,我按回车。</td><td><en>I have a Chinese card — it doesn\'t have a US ZIP code. I\'ll press Enter.</en></td></tr>\
<tr><td>你们接受银联/现金吗?</td><td><en>Do you accept UnionPay?</en> · <en>Do you accept cash?</en></td></tr>\
<tr><td>我想买一张预付 SIM 卡。</td><td><en>I\'d like to buy a prepaid SIM card.</en></td></tr>\
<tr><td>Wi-Fi 密码是什么?</td><td><en>What\'s the Wi-Fi password?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>省钱攻略</strong>:取现优先用<strong>银行大厅</strong>的 ATM(Chase/BofA/Wells Fargo,手续费低),避开机场/便利店独立机($5–8);看到 <en>Fee: $4.50, Continue?</en> 可选 Cancel 换一台,不收费。出发前<strong>通知银行即将出境</strong>,否则刷卡易被冻结。美国流行<strong>感应支付(tap)</strong>,刷卡(swipe)反而易出错。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:在机场/便利店独立 ATM 取现。</b>手续费高达 $5–8。优先去银行网点 ATM,看到高额 Fee 提示选 Cancel(不收费)再换一台。</div>\
<div class="pit"><b>坑 2:刷卡被要 ZIP code 就卡死。</b>美国 POS 常要邮编,外国卡没有。直接说 <en>I have a Chinese card, no US ZIP.</en> 然后按 Enter 跳过,或换感应支付(tap)。</div>\
<div class="pit"><b>坑 3:没通知银行就出境刷卡。</b>异地大额消费易被风控冻结。出发前在 App/客服报备出境,并开境外短信通知。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国取现金,手续费最低的通常是?',
      options: ['机场的独立 ATM', '便利店 ATM', '银行大厅内的 ATM', '酒店换汇柜台'],
      answer: 2,
      explain: '银行网点(Chase/BofA/Wells Fargo)的 ATM 手续费最低;机场/便利店独立机最贵。'
    },
    {
      type: 'choice',
      q: '刷卡时 POS 机要 ZIP code,你的中国卡没有,怎么办?',
      options: ['放弃不买了', '说明是外国卡并按 Enter 跳过/改用感应支付', '随便编一个有效美国邮编', '报警'],
      answer: 1,
      explain: '外国卡无美国 ZIP,告知收银员后按 Enter 跳过,或用 tap 感应支付。'
    },
    {
      type: 'fill',
      q: '"我的卡被拒了":"My card was ____."',
      answer: ['declined'],
      explain: 'declined = (卡)被拒。可接着说 Could you try it again? 或换卡。'
    }
  ]
});
