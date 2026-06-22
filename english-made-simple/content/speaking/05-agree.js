/* 口语模块第 5 课:同意/反对/拿不准。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'speak-05-agree',
  module: 'speak',
  order: 5,
  title: '同意、反对、拿不准怎么自然说',
  minutes: 5,
  keywords: ['同意', '反对', '观点', 'agree', 'disagree', '口语'],

  sections: {
    what: '\
<p><strong>一句话:表态是对话的核心动作——同意、反对、保留意见各有一套自然说法,光会 "yes/no" 远远不够。</strong></p>\
<p>母语者表态很有层次:强烈同意、勉强同意、委婉反对……这些用对了,显得既真诚又得体。这一课给你一组可直接套用的表态句。</p>',

    when: '\
<p>讨论、聊天、开会、交换看法时。表态自然,对话才接得住、聊得开。</p>',

    how: '\
<p><strong>同意(从强到弱,点击听):</strong></p>\
<div class="ex"><en>Absolutely!</en> 完全同意 · <en>Exactly.</en> 正是 · <en>That makes sense.</en> 有道理 · <en>I guess so.</en> 大概吧(弱)</div>\
<p><strong>反对(美国人爱"先软后硬",更礼貌):</strong></p>\
<div class="ex"><en>I see your point, but…</en> 我懂你意思,不过…<br>\
<en>I\'m not so sure about that.</en> 我不太确定(委婉反对)<br>\
<en>Actually, I think…</en> 其实我觉得…(温和转折)</div>\
<p><strong>拿不准 / 保留:</strong></p>\
<div class="ex"><en>It depends.</en> 看情况 · <en>I can see both sides.</en> 两边都有道理 · <en>Let me think about it.</en> 我再想想</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:反对就直接 "No, you\'re wrong."</b>太冲。美国人习惯先认同一点再转折:"I see your point, but…"。直接说人错很伤人。</div>\
<div class="pit"><b>坑 2:只会 "Yes / I think so."</b>表态太单一显得敷衍。学几个有层次的(Absolutely / That makes sense),对话更生动。</div>\
<div class="pit"><b>坑 3:沉默当回应。</b>不表态在英语对话里=冷场或不感兴趣。哪怕 "Hmm, interesting" 也比沉默好。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '美国人委婉表达反对,常见的做法是?',
      options: ['直接说 You are wrong', '先认同一点再转折(I see your point, but…)', '保持沉默', '提高音量'],
      answer: 1,
      explain: '"I see your point, but…" 先软后硬更礼貌。直接说对方错在美国社交里很伤人。'
    },
    {
      type: 'choice',
      q: '"That makes sense" 表示?',
      options: ['强烈反对', '同意/觉得有道理', '没听懂', '不感兴趣'],
      answer: 1,
      explain: '"That makes sense"(有道理)是常见的认同表达。'
    },
    {
      type: 'fill',
      q: '想表达"看情况、不一定",一个万能短句是 "It ____."',
      answer: ['depends'],
      explain: '"It depends."(看情况)是表达保留/不确定最常用的短句。'
    }
  ]
});
