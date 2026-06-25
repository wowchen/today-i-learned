/* eng/05-loop-engineering (自动生成) */
AIX.registerLesson({
  id:"eng/05-loop-engineering", module:"eng", order:5,
  title:"循环工程 Loop Engineering", minutes:4,
  keywords:["循环工程","loop","自主"],
  concept:"<p><gd data-term=\"loop-engineering\">循环工程</gd>设计的是闭环:<b>模型行动 → 观察结果 → 反思 → 再行动</b>,如此反复,直到任务完成。这让它能自我纠错、啃下长程任务。</p>",
  core:"<p>单次问答是\"一锤子买卖\",错了就错了。循环工程则像人做项目:做一步、看反馈(测试报错、检索结果、用户意见)、调整、再做。模型因此能完成\"写代码→跑→见报错→改→再跑\"这种需要很多步的活。</p><p>这是<gd data-term=\"agent\">智能体</gd>之所以\"智能\"的关键一环,也带来<gd data-term=\"autonomous\">自主性</gd>:循环跑得越久越独立,人介入越少。Claude Code 那种\"给个目标,它自己改到测试通过\"的体验,核心就是这一层。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>循环放任不管很危险:它可能在错误方向上\"努力\"很久、空转烧钱、或越改越糟。好的循环必须有<b>停止条件、步数上限、和关键节点的人工检查</b>。</div>",
  links:"<p>四层都讲完了,最后看它们怎么配合成一个整体。</p>"
});
