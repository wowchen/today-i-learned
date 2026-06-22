/* 课程样板:严格遵守五段模板(what/when/how/pitfalls + quiz)。
   写作规范见 CLAUDE.md。英文一律用 <en>…</en> 包裹 → 引擎自动变成"点击可发音"。 */
EMS.registerLesson({
  id: 'pron-01-alphabet',
  module: 'pron',
  order: 1,
  title: '26 个字母:字母名 ≠ 字母音',
  minutes: 5,
  keywords: ['字母', 'alphabet', '字母名', '字母音', 'ABC', '零基础'],

  sections: {
    what: '\
<p><strong>一句话:每个字母都有两个"身份"——它叫什么(字母名),和它在单词里发什么音(字母音)。</strong></p>\
<p>就像一个人,身份证上叫"张伟",朋友都喊他"小张"。字母 <en>B</en> 的名字念 <en>bee</en>(必),但它在单词里干活时只发 <en>b</en>(布,很轻的一声)。<strong>背字母表背的是名字,读单词用的是发音</strong>——零基础最容易把这两件事混成一件。</p>',

    when: '\
<p>什么时候用<strong>字母名</strong>?报拼写的时候。比如美国人问你名字怎么拼,你说 <en>C-H-E-N</en>,念的是四个字母的"名字"。</p>\
<p>什么时候用<strong>字母音</strong>?读单词的时候。<en>cat</en> 不念"西-诶-提",而是 c、a、t 三个音"拼"出来的 <en>cat</en>。</p>\
<div class="ex">🛂 真实场景:在美国办事报姓名、订位置留电话,全程都在用"字母名"。这是落地第一天就要用的技能。</div>',

    how: '\
<p>规则只有一条:<strong>读单词时,忘掉字母的名字,用它的"工作音"。</strong>下面挑 6 个最常用的感受一下(点击即可听):</p>\
<table>\
<tr><th>字母</th><th>名字(报拼写时)</th><th>工作音(读单词时)</th><th>例词</th></tr>\
<tr><td>A</td><td><en>A</en>(诶)</td><td><en>a</en> 如 /æ/</td><td><en>apple</en> 苹果</td></tr>\
<tr><td>B</td><td><en>B</en>(必)</td><td>轻轻的 b</td><td><en>bag</en> 包</td></tr>\
<tr><td>C</td><td><en>C</en>(西)</td><td>多数时候是 k</td><td><en>cat</en> 猫</td></tr>\
<tr><td>E</td><td><en>E</en>(衣)</td><td>短促的 /e/</td><td><en>egg</en> 鸡蛋</td></tr>\
<tr><td>G</td><td><en>G</en>(挤)</td><td>喉咙里的 g</td><td><en>go</en> 走</td></tr>\
<tr><td>H</td><td><en>H</en>(诶吃)</td><td>哈气的 h</td><td><en>hat</en> 帽子</td></tr>\
</table>\
<div class="ex">🎯 练一下:先点 <en>B</en> 听它的名字,再点 <en>bag</en>——听出来了吗?单词里根本没有"必"这个音。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:用字母名拼读单词。</b>把 <en>dog</en> 念成"迪-欧-挤"。记住:字母名只在报拼写时用。</div>\
<div class="pit"><b>坑 2:Z 的美式名字。</b>美国人念 <en>Z</en> 为 <en>zee</en>(汁-衣),英国人念 zed(zed)。本站全程美式:<en>zee</en>。</div>\
<div class="pit"><b>坑 3:把 W 念成"达不留"。</b>它的美式名字是 <en>double u</en>,连起来轻快地说,不是三个重重的汉字。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '读单词 cat 的时候,应该用字母的哪个"身份"?',
      options: ['字母名(西-诶-提)', '字母音(c、a、t 拼出来)', '两个都行', '看心情'],
      answer: 1,
      explain: '读单词永远用"工作音"(字母音)。字母名只在报拼写时用,比如拼自己的名字。'
    },
    {
      type: 'choice',
      q: '美国人怎么念字母 Z 的名字?',
      options: ['zed', 'zee', 'zi', 'zeta'],
      answer: 1,
      explain: '美式是 zee,英式才是 zed。本站全程以美式为准。'
    },
    {
      type: 'fill',
      q: '在美国电话里报名字拼写时,你用的是字母的"____"(填:名 或 音)。',
      answer: ['名', '字母名'],
      explain: '报拼写用字母名(B 念 bee);读单词才用字母音。'
    }
  ]
});
