/* 旅行模块第 1 课:导览 + 万能保命 10 句。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-01-survival',
  module: 'travel',
  order: 1,
  title: '旅行模块导览 + 万能保命 10 句',
  minutes: 5,
  keywords: ['旅行', 'travel', '保命', 'lifesaver', '导览', '救急', '听不懂', '出国'],

  sections: {
    what: '\
<p><strong>一句话:这个模块把一次完整出国旅程拆成 29 个场景——从出发前到回家,你会遇到的每个柜台、每段对话都配好关键句,点读就能听、照着说就能用。</strong></p>\
<p>它不是按"语法/词汇"分,而是按<strong>你脚下的位置</strong>分:机场 → 入境 → 打车 → 酒店 → 餐厅 → 商店 → 景点 → 看病 → 取钱 → 闲聊。顺着学一遍,等于把整趟旅行在脑子里预演了一遍。</p>\
<p>这一课是地基:先背熟下面 10 句<strong>保命句</strong>。任何场景里你听不懂、说不出、出意外,先用这 10 句兜底,不会冷场。</p>',

    when: '\
<p><strong>出发前 3 天突击:</strong>每天 1 小时,先过这一课和第 2 课(黄金句型),再按行程挑场景。</p>\
<p><strong>路上随时翻:</strong>遇到卡壳,直接打开对应场景课,把手机递给对方看也行。</p>\
<p>本模块所有英文都能<strong>点一下听发音</strong>(美音),看到喜欢的句子点 ⭐ 收进生词本反复练。</p>',

    how: '\
<p><strong>① 万能保命 10 句(点句子听整句,背到张口就来):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>能再说一遍吗?</td><td><en>Could you say that again, please?</en></td></tr>\
<tr><td>能说慢一点吗?</td><td><en>Could you speak more slowly, please?</en></td></tr>\
<tr><td>抱歉没懂,能换个说法吗?</td><td><en>Sorry, I don\'t understand. Could you say it differently?</en></td></tr>\
<tr><td>能写下来吗?</td><td><en>Could you write it down, please?</en></td></tr>\
<tr><td>请稍等一下。</td><td><en>Just a moment, please.</en></td></tr>\
<tr><td>您会说中文吗?</td><td><en>Excuse me, do you speak Chinese?</en></td></tr>\
<tr><td>请问洗手间在哪?</td><td><en>Where is the restroom, please?</en></td></tr>\
<tr><td>多少钱?</td><td><en>How much is it?</en></td></tr>\
<tr><td>我想联系中国大使馆。</td><td><en>I\'d like to call the Chinese embassy.</en></td></tr>\
<tr><td>救命!打 911!</td><td><en>Help! Call nine one one!</en></td></tr>\
</table>\
<div class="ex">💡 <strong>救命级</strong>:最后两句关乎安全。<en>embassy</en> 读 /ˈembəsi/(重音在前);美国报警是 <strong>911</strong>,一个数字一个数字念 "nine-one-one",别念成 "nine eleven"。</div>\
<p><strong>② 怎么用点读练发音(本模块通用方法):</strong></p>\
<ol>\
<li>先点一遍,只听,不看字;</li>\
<li>看着英文再点一遍,注意美国人哪里连读、哪里偷懒不发清楚;</li>\
<li>跟读 3 遍,模仿节奏;</li>\
<li>合上看中文,自己说出英文——能脱口而出这句就过关。</li>\
</ol>',

    pitfalls: '\
<div class="pit"><b>坑 1:每个字母都发清楚,反而不像。</b>美国人说话像水流,词和词连在一起、虚词一带而过。逐字蹦反而最"中式"。点读时重点听<strong>连读</strong>和<strong>节奏</strong>,别追求每个音都清晰。</div>\
<div class="pit"><b>坑 2:听不懂硬撑、点头装懂。</b>装懂往往把事情搞砸(上错车、拿错餐、误了航班)。第一时间用保命句 1、2 句:<en>Could you say that again, please?</en> 母语者也常这么问,完全不丢人。</div>\
<div class="pit"><b>坑 3:开口不带 please。</b>同样一句话,加不加 please 在美国人耳里是"礼貌"和"命令"的差别。索取、求助一律 <en>Could you…, please?</en>,这是全模块第一礼貌习惯。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '在美国报警,"911" 正确的念法是?',
      options: ['nine eleven', 'nine one one', 'ninety-one one', 'nine hundred eleven'],
      answer: 1,
      explain: '一个数字一个数字念:nine-one-one。念成 "nine eleven" 容易让接线员困惑。'
    },
    {
      type: 'choice',
      q: '没听清对方说什么,最该先说哪句?',
      options: ['点头说 yes', 'Could you say that again, please?', '掉头就走', 'No no no'],
      answer: 1,
      explain: '装懂最危险。礼貌请对方重说一遍,母语者也常这么做,完全不失礼。'
    },
    {
      type: 'fill',
      q: '在美国问"洗手间"用的词是 the ____(不是 toilet/WC)。',
      answer: ['restroom', 'bathroom'],
      explain: '美式最自然说 restroom 或 bathroom;toilet 指马桶本身,直接问略生硬。'
    }
  ]
});
