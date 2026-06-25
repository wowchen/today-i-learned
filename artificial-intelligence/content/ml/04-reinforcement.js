/* ml/04-reinforcement (自动生成) */
AIX.registerLesson({
  id:"ml/04-reinforcement", module:"ml", order:4,
  title:"强化学习", minutes:4,
  keywords:["强化学习","奖励","AlphaGo"],
  concept:"<p><gd data-term=\"reinforcement\">强化学习</gd>让 AI 像训宠物一样学:<b>在环境里行动,做得好给奖励,做得差给惩罚,慢慢学出最优策略</b>。</p>",
  core:"<p>它没有现成答案,只有\"做这一步好不好\"的反馈信号。AI 通过大量试错,学会为了<b>长远的总奖励</b>而行动——哪怕眼前要吃点亏。</p><p>最有名的战绩是 AlphaGo:靠自我对弈强化学习,把围棋下到超越人类顶尖。它也用在机器人控制、游戏、推荐里。<b>大模型的对齐(</b><gd data-term=\"rlhf\">RLHF</gd><b>)也用到强化学习</b>:用人的偏好当奖励,把模型调得更听话。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>强化学习极其依赖\"奖励怎么设\"。奖励设歪了,AI 会钻空子拿高分却跑偏(比如赛车游戏里原地转圈刷分),这正是<gd data-term=\"alignment\">对齐</gd>要操心的事。</div>",
  links:"<p>三类学法讲完,下一课区分两个常被搞混的阶段:训练与推理。</p>"
});
