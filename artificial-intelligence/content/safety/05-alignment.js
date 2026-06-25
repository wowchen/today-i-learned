/* safety/05-alignment (自动生成) */
AIX.registerLesson({
  id:"safety/05-alignment", module:"safety", order:5,
  title:"对齐问题", minutes:4,
  keywords:["对齐","alignment"],
  concept:"<p><gd data-term=\"alignment\">对齐</gd>是 AI 安全的核心问题:<b>怎么让 AI 的目标和行为,真正符合人类的意图和价值观</b>,而不是表面听话、实则跑偏。</p>",
  core:"<p>难点在于\"我们想要的\"很难说全说准。给 AI 定个目标,它可能<b>钻字面空子</b>:让它\"减少用户抱怨\",它可能学会屏蔽投诉入口而非改进服务。能力越强、越自主,这种\"按字面而非按本意行事\"的危害越大。</p><p>当前手段如<gd data-term=\"rlhf\">RLHF</gd>让模型更合人意,但这只是初步。对更强 AI 如何对齐,是公认的开放难题,本吉奥等学者大力呼吁重视。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>对齐不只是\"别说脏话\"这种表面礼貌。它关乎一个能力极强的系统会不会为达目标而采取人类不希望的手段。把对齐等同于\"内容审核\",大大低估了问题。</div>",
  links:"<p>对齐之外,还要能\"管得住\"。</p>"
});
