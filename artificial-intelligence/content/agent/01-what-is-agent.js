/* agent/01-what-is-agent (自动生成) */
AIX.registerLesson({
  id:"agent/01-what-is-agent", module:"agent", order:1,
  title:"智能体是什么", minutes:4,
  keywords:["智能体","agent"],
  concept:"<p><gd data-term=\"agent\">智能体</gd>是<b>会自己规划步骤、调用工具、执行多步任务来达成目标</b>的 AI,而不只是被动答话。一句话:从\"会聊天\"升级成\"会动手干活\"。</p>",
  core:"<p>普通对话:你问一句,它答一句。智能体:你给个<b>目标</b>(\"帮我订下周去上海最便宜的高铁并加进日历\"),它自己拆成步骤——查车次、比价、下单、写日历——一步步做完。</p><p>它的底气来自前面几课:大模型负责\"想\",<gd data-term=\"tool-use\">工具调用</gd>给它\"手脚\",<gd data-term=\"loop-engineering\">循环</gd>让它能边做边纠错。这三样凑齐,聊天机器人就进化成了智能体。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>\"智能体\"目前是个热词,被滥用得厉害。很多号称 Agent 的产品,其实只是\"提示词+一两个工具\"的简单流程,远没到能自主搞定复杂长任务的程度。看实质,别看噱头。</div>",
  links:"<p>它内部到底怎么运转?下一课拆开看。</p>"
});
