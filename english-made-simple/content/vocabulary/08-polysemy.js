/* 词汇模块第 8 课:一词多义。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-08-polysemy',
  module: 'vocab',
  order: 8,
  title: '一词多义:get 和 run 的十张面孔',
  minutes: 5,
  keywords: ['一词多义', 'polysemy', 'get', 'run', '多义词', '语境'],

  sections: {
    what: '\
<p><strong>一句话:越高频的词,意思越多——get、run 这种词有十几种用法。诀窍不是背全部释义,而是抓"核心意象"再随语境延伸。</strong></p>\
<p><en>run</en> 的核心是"跑/运转",于是:人 run(跑步)、机器 run(运转)、公司 run(经营)、鼻子 run(流鼻涕)。一个核心意象,长出一串意思。抓住核心,比背十条释义省力得多。</p>',

    when: '\
<p>读到一个认识的词却"在这句里讲不通"时——多半是它的另一个义项。别慌,顺着核心意象+上下文猜。</p>',

    how: '\
<p><strong>看 get 的几张面孔(核心意象:"得到 / 变成 / 到达"),点击听:</strong></p>\
<table>\
<tr><th>例句(点击听)</th><th>这里的意思</th></tr>\
<tr><td><en>I got a gift.</en></td><td>得到</td></tr>\
<tr><td><en>It is getting cold.</en></td><td>变得(变冷)</td></tr>\
<tr><td><en>I get it.</en></td><td>明白</td></tr>\
<tr><td><en>How do I get there?</en></td><td>到达</td></tr>\
</table>\
<p><strong>run 的几张面孔(核心:"跑 / 运转"):</strong></p>\
<table>\
<tr><td><en>I run every morning.</en></td><td>跑步</td></tr>\
<tr><td><en>The engine runs well.</en></td><td>运转</td></tr>\
<tr><td><en>She runs a company.</en></td><td>经营</td></tr>\
<tr><td><en>My nose is running.</en></td><td>流(鼻涕)</td></tr>\
</table>',

    pitfalls: '\
<div class="pit"><b>坑 1:认死第一个意思。</b>学了 "get=得到",看到 "get cold" 就懵。记住高频词都是多义的,要顺语境换义项。</div>\
<div class="pit"><b>坑 2:想背全部释义。</b>词典列十几条,别硬背。抓核心意象(run=跑/转),其余靠上下文推。</div>\
<div class="pit"><b>坑 3:忽略短语动词。</b><en>get up</en>(起床)、<en>get over</en>(克服)、<en>run out</en>(用完)——加个介词意思全变,这些要当独立词组记。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"It is getting cold" 里的 get 意思是?',
      options: ['得到', '变得(变冷)', '到达', '明白'],
      answer: 1,
      explain: 'get + 形容词 = "变得…"。getting cold = 变冷。这是 get 的常见义项之一。'
    },
    {
      type: 'choice',
      q: '处理高频多义词,最省力的策略是?',
      options: ['背下词典所有释义', '抓核心意象,再顺语境延伸', '只记第一个意思', '回避不用'],
      answer: 1,
      explain: '抓核心意象(如 run=跑/转),其余义项顺着上下文推,比死背十几条释义高效得多。'
    },
    {
      type: 'fill',
      q: '"She runs a company" 里 run 的意思是 ____。',
      answer: ['经营', '管理', '经营管理'],
      explain: 'run a company = 经营/管理公司。从核心意象"运转"延伸:让公司运转起来=经营。'
    }
  ]
});
