/* 口语模块第 6 课:礼貌与语气。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-06-polite',
  module: 'speak',
  order: 6,
  title: '礼貌与语气:委婉的艺术',
  minutes: 5,
  keywords: ['礼貌', '语气', 'polite', '委婉', '请求', '口语'],

  sections: {
    what: '\
<p><strong>一句话:同样的意思,直说可能很冲,加几个"软化词"就礼貌了——英语的客气主要靠句式和措辞,不是靠"请"一个词。</strong></p>\
<p>中国人常以为加个 please 就礼貌,其实英语的委婉藏在 could/would、a little、maybe、I was wondering 这些"缓冲垫"里。用对了,显得既得体又有教养。</p>',

    when: '\
<p>请求帮助、提要求、拒绝、提意见时——任何可能让对方为难的场合,都需要软化语气。</p>',

    how: '\
<p><strong>把"直冲"变"委婉"的几个开关(点击听):</strong></p>\
<table>\
<tr><th>直冲</th><th>委婉</th></tr>\
<tr><td>Give me the salt.</td><td><en>Could you pass me the salt?</en></td></tr>\
<tr><td>I want to leave.</td><td><en>I think I should get going.</en></td></tr>\
<tr><td>Help me.</td><td><en>I was wondering if you could help.</en></td></tr>\
<tr><td>No.</td><td><en>I\'d love to, but I can\'t right now.</en></td></tr>\
<tr><td>You\'re wrong.</td><td><en>I\'m not sure that\'s quite right.</en></td></tr>\
</table>\
<div class="ex">🎯 三个"软化神器":① <strong>could/would</strong> 代替 can/will;② <strong>a little / a bit / maybe</strong> 减弱语气("有点");③ <strong>I think / I guess</strong> 当缓冲。叠加越多越委婉。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:以为加 please 就够礼貌。</b>"Give me that, please" 还是偏命令。要换句式:"Could you…?"。please 是锦上添花,不是核心。</div>\
<div class="pit"><b>坑 2:拒绝太直接。</b>直接 "No" 很伤人。用 "I\'d love to, but…" 给个台阶,既拒绝又不失礼。</div>\
<div class="pit"><b>坑 3:过度委婉绕圈。</b>也别堆太多缓冲到对方听不懂你要啥。委婉适度即可,清楚仍是第一位。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '英语礼貌请求的核心主要靠?',
      options: ['只加 please', 'could/would 等句式和软化措辞', '说大声点', '说快一点'],
      answer: 1,
      explain: '英语客气主要靠 could/would 句式 + a bit/maybe/I think 等缓冲词,please 只是锦上添花。'
    },
    {
      type: 'choice',
      q: '想委婉拒绝邀请,最得体的是?',
      options: ['No.', 'I don\'t want to.', "I'd love to, but I can't right now.", 'Never.'],
      answer: 2,
      explain: '"I\'d love to, but I can\'t right now." 先表达意愿再拒绝,给对方台阶,礼貌不失。'
    },
    {
      type: 'fill',
      q: '把 "Give me the salt" 变礼貌:"____ you pass me the salt?"',
      answer: ['Could', 'could', 'Would', 'would'],
      explain: 'Could/Would you pass me the salt? 换成请求句式,比命令式礼貌得多。'
    }
  ]
});
