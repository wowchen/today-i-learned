/* agent/02-how-it-works (自动生成) */
AIX.registerLesson({
  id:"agent/02-how-it-works", module:"agent", order:2,
  title:"智能体怎么工作:感知-决策-行动", minutes:4,
  keywords:["工作机制","循环"],
  concept:"<p>智能体的运转是个循环:<b>看现状(感知)→ 想下一步(决策)→ 做(行动)→ 看结果 → 再想……</b>直到目标达成。</p>",
  core:"<figure class=\"fig\"><svg viewBox=\"0 0 300 130\" width=\"100%\"><rect x=\"105\" y=\"12\" width=\"90\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"150\" y=\"29\" class=\"f-txt\" text-anchor=\"middle\">想下一步</text><rect x=\"215\" y=\"52\" width=\"80\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"255\" y=\"69\" class=\"f-txt\" text-anchor=\"middle\">调用工具</text><rect x=\"105\" y=\"92\" width=\"90\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"150\" y=\"109\" class=\"f-txt\" text-anchor=\"middle\">看结果</text><rect x=\"5\" y=\"52\" width=\"80\" height=\"26\" rx=\"5\" class=\"f-box\"/><text x=\"45\" y=\"69\" class=\"f-dim\" text-anchor=\"middle\">目标</text><path class=\"f-line\" d=\"M195,25 Q255,30 255,50\" /><polygon class=\"f-arr\" points=\"251,50 255,58 259,50\"/><path class=\"f-line\" d=\"M255,78 Q255,105 197,105\"/><polygon class=\"f-arr\" points=\"201,101 193,105 201,109\"/><path class=\"f-line\" d=\"M105,105 Q45,105 45,80\"/><polygon class=\"f-arr\" points=\"41,80 45,72 49,80\"/><path class=\"f-line\" d=\"M85,62 Q150,55 150,40\" opacity=\"0.4\"/></svg><figcaption>感知—决策—行动的闭环,反复迭代</figcaption></figure><p>很多智能体还会先\"做计划\"(把大目标拆成子任务清单),再逐项推进,过程中用<gd data-term=\"chain-of-thought\">思维链</gd>边想边记。复杂任务则交给\"记忆\"和外部笔记来托住。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>循环是双刃剑:跑顺了能自主完成长任务,跑歪了会在错误路上\"勤奋\"地空转、反复试错烧掉大量<gd data-term=\"token\">token</gd>和时间。所以必须设步数上限和检查点。</div>",
  links:"<p>智能体的\"手脚\"怎么接上去?关键是工具调用与 MCP。</p>"
});
