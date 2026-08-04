/* posttrain/05-grpo (自动生成) */
AIX.registerLesson({
  id:"posttrain/05-grpo", module:"posttrain", order:5,
  title:"GRPO:DeepSeek 的创新", minutes:4,
  keywords:["GRPO","强化学习","DeepSeek"],
  concept:"<p><gd data-term=\"grpo\">GRPO</gd>是 DeepSeek 提出的强化学习算法:同一问题生成一组答案,按\"组内相对好坏\"给奖励,省掉独立的裁判(奖励)模型。</p>",
  core:"<p>PPO 的问题:需要一个额外的 Critic 模型来估计\"状态价值\",显存和训练成本几乎翻倍,训练还不稳。GRPO 的巧思:对同一个问题,采样一组(比如 8 个)答案,直接<b>组内互比</b>——这组的平均分当基线,比平均好的给正奖励、差的给负奖励,根本不需要 Critic 模型。</p><p>好处:<b>省显存、更稳、更适合大规模强化学习</b>。DeepSeek-R1 用 GRPO 在数学/代码上把推理能力练到了顶级,也让 GRPO 成了开源 RL 社区的标配,招聘 JD 里\"熟悉 GRPO\"就是这么来的。</p>",
  pitfalls:"<div class=\"ex\">同一个数学题生成 8 个解答,机器判分后:比平均分高的 +1,低的 -1。模型学会\"向组内更好的答案看齐\"。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>组内比较是\"相对\"的:如果一整组都答错了,相对最好的那个也不一定对。对可验证任务能兜底(判分可查),对开放任务要谨慎。</div>"
});
