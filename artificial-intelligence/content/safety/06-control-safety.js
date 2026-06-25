/* safety/06-control-safety (自动生成) */
AIX.registerLesson({
  id:"safety/06-control-safety", module:"safety", order:6,
  title:"可控与安全", minutes:3,
  keywords:["可控","安全"],
  concept:"<p>可控性问的是:出问题时,我们<b>能不能及时发现、踩下刹车、并撤销影响</b>?AI 越自主、越嵌入关键系统,这件事越重要。</p>",
  core:"<p>工程上的\"安全栏\":最小权限、危险动作需人工确认、沙箱隔离、操作可审计、设花费与步数上限、以及随时可关停的开关。研究上则关注可解释性(看懂它为何这么做)和红队测试(主动找漏洞)。</p><p>这和<gd data-term=\"loop-engineering\">循环工程</gd>、智能体风险一脉相承:<b>能力越强,栏杆要越牢</b>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>\"出事了关掉就行\"在复杂自主系统里没那么简单:它可能已经发出了邮件、改了数据、影响扩散开来。安全要<b>事前设计</b>,不能指望事后一键回滚。</div>",
  links:"<p>个体和工程之外,还需要社会层面的规则。</p>"
});
