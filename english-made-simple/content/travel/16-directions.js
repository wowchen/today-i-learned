/* 旅行模块第 16 课:问路 + GPS 失灵救命句。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-16-directions',
  module: 'travel',
  order: 16,
  title: '交通④:问路 + GPS 失灵救命句',
  minutes: 5,
  keywords: ['问路', 'directions', '迷路', 'lost', '左转', 'turn left', '直走', 'straight', '街区', 'block', 'GPS'],

  sections: {
    what: '\
<p><strong>一句话:就算有导航,也会遇到没信号、手机没电、地图对不上的时候。问路要简洁,关键是<strong>听懂指路</strong>:直走、左右转、几个街区、在转角。</strong></p>\
<p>场景地图:你拦住路人,先说"我迷路了/手机没电",再说目的地,对方会用 straight / turn left / two blocks 给你指路。</p>',

    when: '\
<p>手机没信号或没电、走错路、找不到入口时,向路人或店员问路。</p>',

    how: '\
<p><strong>GPS 失灵救命句(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>不好意思,我迷路了,手机没电了。</td><td><en>Excuse me, I\'m lost. My phone died.</en></td></tr>\
<tr><td>您能帮我找自然历史博物馆吗?</td><td><en>Could you help me find the Natural History Museum?</en></td></tr>\
<tr><td>抱歉,能再说一遍吗?在哪条街左转?</td><td><en>Sorry, could you say that again? Left on which street?</en></td></tr>\
<tr><td>从那里还有多远?</td><td><en>How far is it from there?</en></td></tr>\
<tr><td>走路要多久?</td><td><en>How long does it take on foot?</en></td></tr>\
</table>\
<p><strong>听懂指路的方向词(点读):</strong></p>\
<table>\
<tr><th>英文(点读)</th><th>意思</th></tr>\
<tr><td><en>Go straight ahead.</en></td><td>一直往前走</td></tr>\
<tr><td><en>Turn left / Turn right.</en></td><td>左转 / 右转</td></tr>\
<tr><td><en>two blocks down</en></td><td>往前两个街区</td></tr>\
<tr><td><en>at the corner</en></td><td>在转角处</td></tr>\
<tr><td><en>across from the bank</en></td><td>在银行对面</td></tr>\
<tr><td><en>next to the station</en></td><td>在车站旁边</td></tr>\
<tr><td><en>It\'s a five-minute walk.</en></td><td>走路五分钟</td></tr>\
</table>\
<div class="ex">💡 <strong>问路最高效的姿势</strong>:先承认状态(I\'m lost / My phone died),再说目的地,对方更愿意帮。听不全就<strong>复述你听到的、只问没听清的那段</strong>:<en>Straight, then left on which street?</en> 比直接说 "I don\'t understand" 高效得多。听不懂街名就请对方拼:<en>Could you spell that?</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:right 听成"右转"还是"对的"分不清。</b><en>right</en> 既是"右"也是"对的/好的"。靠语境判断:<en>Turn right at the corner</en> 是右转;<en>That\'s right</en> 是"没错"。</div>\
<div class="pit"><b>坑 2:听不懂就反复说 "I don\'t understand"。</b>太笼统,对方不知从哪重说。复述听到的部分 + 精准追问:<en>Straight two blocks, then left on which street?</en></div>\
<div class="pit"><b>坑 3:不会美式街区概念 block。</b>美国指路爱用 <strong>block(街区)</strong>:"two blocks down" = 过两个路口。记住一个 block 就是相邻两条横街之间的一段。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '问路时,先说哪句能让路人更愿意帮你?',
      options: ['Give me directions.', 'Excuse me, I\'m lost. My phone died.', 'Where am I?', 'You must help me.'],
      answer: 1,
      explain: '先承认"我迷路了/手机没电",再说目的地,对方更容易共情、愿意帮忙。'
    },
    {
      type: 'choice',
      q: '"two blocks down" 是什么意思?',
      options: ['楼下两层', '往前两个街区', '两个路口左转', '两公里外'],
      answer: 1,
      explain: 'block 是街区,two blocks down = 沿这条路往前过两个街区(两个路口)。'
    },
    {
      type: 'fill',
      q: '没听清街名,请对方拼出来:"Could you ____ that?"',
      answer: ['spell'],
      explain: 'Could you spell that? 请对方逐字母拼出街名,听街名最可靠的办法。'
    }
  ]
});
