/* 旅行模块第 5 课:礼貌核心句 + 旅行版 Chinglish 避坑。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-05-polite',
  module: 'travel',
  order: 5,
  title: '礼貌核心句 + 旅行版 Chinglish 避坑',
  minutes: 5,
  keywords: ['礼貌', 'polite', 'please', 'could', 'Chinglish', '中式英语', '避坑', 'excuse me'],

  sections: {
    what: '\
<p><strong>一句话:在美国,礼貌不是翻译问题,是文化问题——同样的意思,用 please / could / would 包一层,就从"命令"变成"请求"。</strong></p>\
<p>这一课给你 10 句礼貌万能句,再把中国游客最常踩的几个 Chinglish 一次清掉。礼貌到位,口音再重也没人为难你。</p>',

    when: '\
<p>打断别人、求助、听不清、婉拒店员、问推荐……几乎每个场景的开口第一句。</p>',

    how: '\
<p><strong>① 礼貌万能 10 句(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>打扰一下(引起注意)</td><td><en>Excuse me.</en></td></tr>\
<tr><td>您能帮我吗?</td><td><en>Could you help me?</en></td></tr>\
<tr><td>能再说一遍吗?</td><td><en>Could you repeat that, please?</en></td></tr>\
<tr><td>能说慢一点吗?</td><td><en>Could you speak more slowly, please?</en></td></tr>\
<tr><td>抱歉,我没听懂。</td><td><en>I\'m sorry, I don\'t understand.</en></td></tr>\
<tr><td>非常感谢!</td><td><en>Thank you so much!</en></td></tr>\
<tr><td>这位子有人吗?</td><td><en>Excuse me, is this seat taken?</en></td></tr>\
<tr><td>我随便看看,谢谢。</td><td><en>I\'m just looking, thank you.</en></td></tr>\
<tr><td>附近有推荐的餐厅吗?</td><td><en>Could you recommend a good restaurant nearby?</en></td></tr>\
<tr><td>不好意思打扰您…</td><td><en>I\'m sorry to bother you, but…</en></td></tr>\
</table>\
<div class="ex">💡 <strong>Excuse me</strong> 用来"打断别人/引起注意";<strong>Sorry</strong> 用来"道歉或没听清"。两者别混。单说 <en>Sorry?</en> 升调 = 最简版"请再说一遍",比 What? 礼貌十倍。</div>\
<p><strong>② 一句话三档礼貌(场合越正式越往右):</strong></p>\
<table>\
<tr><th>直接(少用)</th><th>礼貌(常用)</th></tr>\
<tr><td><en>Give me water.</en></td><td><en>Could I get some water, please?</en></td></tr>\
<tr><td><en>Move!</en></td><td><en>Excuse me, could you move?</en></td></tr>\
<tr><td><en>Repeat.</en></td><td><en>Could you say that again?</en></td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:用问候"你吃了吗"。</b><en>Have you eaten?</en> 美国人会以为你要请客。打招呼就 <en>Hi!</en> / <en>How\'s it going?</en> / <en>Good morning!</en></div>\
<div class="pit"><b>坑 2:"多少钱"说成 How much money。</b>money 多余。正确:<en>How much is this?</en> 或店里直接 <en>How much?</en></div>\
<div class="pit"><b>坑 3:"我要一个汉堡"说成 I want…。</b>太冲。点餐标准句:<en>I\'d like a hamburger, please.</en> 或 <en>Can I get a hamburger?</en></div>\
<div class="pit"><b>坑 4:"我住 12 号房"说成 I live in room 12。</b>live 是永久居住,酒店住宿用 stay:<en>I\'m staying in room 12.</en></div>\
<div class="pit"><b>坑 5:"帮帮我"喊 Help me!。</b>非紧急场合太命令。用 <en>Excuse me, could you help me?</en>;<strong>真遇险</strong>才喊 Help!</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在店里被店员问要不要帮助,你只想随便看看,最佳婉拒是?',
      options: ['No!', 'I\'m just looking, thank you.', 'Go away.', 'I have no money.'],
      answer: 1,
      explain: '"I\'m just looking, thank you." 既礼貌又清楚,是美国店里婉拒的标准句。'
    },
    {
      type: 'choice',
      q: '"打断别人引起注意" 和 "没听清" 分别该用?',
      options: ['都用 Sorry', '都用 Excuse me', 'Excuse me / Sorry', 'Hello / Hello'],
      answer: 2,
      explain: 'Excuse me 用于打断、引起注意;Sorry(升调)用于道歉或没听清。两者分工不同。'
    },
    {
      type: 'fill',
      q: '点餐别说 "I want a burger",改成更礼貌的 "I\'d ____ a burger, please."',
      answer: ['like'],
      explain: 'I\'d like…(I would like)是点餐、办事最稳的礼貌句式;I want 偏命令。'
    }
  ]
});
