/* 旅行模块第 29 课:收尾闭环。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-29-appendix',
  module: 'travel',
  order: 29,
  title: '收尾闭环:美式vs英式·标志缩略·行前清单',
  minutes: 5,
  keywords: ['美式英式', 'American British', '标志', 'sign', '缩略语', 'abbreviation', '清单', 'checklist', '出发前', '总复习'],

  sections: {
    what: '\
<p><strong>一句话:旅程的最后一站——补三块能让整趟闭环更稳的东西:美式 vs 英式高频词差异、看得懂的标志缩略语、出发前一周必做清单。</strong></p>\
<p>把这一课当"登机前最后检查":前面 28 课教你怎么说,这一课确保你<strong>看得懂、备得齐、不掉链子</strong>。</p>',

    when: '\
<p>出发前一周做清单收尾;路上看不懂招牌缩写时回查;去英国/澳洲时对照用词差异。</p>',

    how: '\
<p><strong>① 美式 vs 英式高频词(去美国用左列,点读):</strong></p>\
<table>\
<tr><th>中文</th><th>美式(点读)</th><th>英式</th></tr>\
<tr><td>账单(餐厅)</td><td><en>check</en></td><td>bill</td></tr>\
<tr><td>洗手间</td><td><en>restroom</en></td><td>toilet</td></tr>\
<tr><td>电梯</td><td><en>elevator</en></td><td>lift</td></tr>\
<tr><td>一楼</td><td><en>first floor</en></td><td>ground floor</td></tr>\
<tr><td>薯条</td><td><en>French fries</en></td><td>chips</td></tr>\
<tr><td>后备箱</td><td><en>trunk</en></td><td>boot</td></tr>\
<tr><td>地铁</td><td><en>subway</en></td><td>underground / tube</td></tr>\
<tr><td>汽油</td><td><en>gas</en></td><td>petrol</td></tr>\
<tr><td>假期</td><td><en>vacation</en></td><td>holiday</td></tr>\
</table>\
<p><strong>② 常见标志缩略(看懂即可):</strong></p>\
<div class="ex">🪧 <strong>OTC</strong>=非处方药 · <strong>Rx</strong>=处方 · <strong>ER</strong>=急诊室 · <strong>TSA</strong>=机场安检 · <strong>ATM</strong>=取款机 · <strong>PIN</strong>=密码 · <strong>DND</strong>=勿扰(酒店门牌) · <strong>BYOB</strong>=自带酒水 · <strong>GF</strong>=无麸质 · <strong>ETA</strong>=预计到达 · <strong>St.</strong>=街 Street · <strong>Ave.</strong>=大道 Avenue · <strong>Blvd.</strong>=林荫大道 Boulevard</div>\
<p><strong>③ 出发前一周必做清单:</strong></p>\
<ol>\
<li>通知银行即将出境,避免刷卡被冻结;开境外短信通知。</li>\
<li>下载离线地图 + 翻译 App;下载 Uber/Lyft 并绑卡。</li>\
<li>护照信息页拍照存云端;记好酒店地址、保险热线、<strong>中国驻美大使馆 +1-202-495-2266</strong>。</li>\
<li>备美标转换插头(A 型两扁脚,电压 100–240V 兼容)。</li>\
<li>用原手机测试能否拨 911(部分旅游 SIM 打不通)。</li>\
</ol>',

    pitfalls: '\
<div class="pit"><b>坑 1:在美国张口就用英式词。</b>说 bill(账单)、toilet(洗手间)、lift(电梯)对方多半也懂,但 <en>check</en> / <en>restroom</en> / <en>elevator</en> 才地道。尤其美式"一楼"是 first floor,英式 first floor 其实是二楼,问路别搞错。</div>\
<div class="pit"><b>坑 2:把缩写标志当陌生词去查。</b>Rx、OTC、ER、DND 这些满街都是,记住一眼认出,省时省心。</div>\
<div class="pit"><b>坑 3:清单拖到出发当天。</b>通知银行、转换插头、离线地图、测 911 都要提前。出发前一周按清单逐项打钩,别临行慌乱。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国餐厅,"账单"用哪个词最地道?',
      options: ['bill', 'check', 'receipt', 'money'],
      answer: 1,
      explain: '美式用 check(Can I get the check?);bill 是英式,美国人也懂但不如 check 地道。'
    },
    {
      type: 'choice',
      q: '关于"一楼",下列哪项正确?',
      options: ['美式和英式都叫 first floor 指同一层', '美式 first floor=一楼,英式 first floor=二楼', '都指二楼', '美式叫 ground floor'],
      answer: 1,
      explain: '美式 first floor 就是一楼;英式 first floor 其实是二楼(英式一楼叫 ground floor)。问路要注意。'
    },
    {
      type: 'fill',
      q: '酒店门牌缩写 DND 意思是 "Do Not ____"(勿扰)。',
      answer: ['Disturb', 'disturb'],
      explain: 'DND = Do Not Disturb,挂在门外表示勿扰,工作人员不会敲门打扫。'
    }
  ]
});
