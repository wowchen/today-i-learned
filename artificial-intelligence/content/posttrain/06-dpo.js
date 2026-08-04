/* posttrain/06-dpo (自动生成) */
AIX.registerLesson({
  id:"posttrain/06-dpo", module:"posttrain", order:6,
  title:"DPO 等轻量对齐", minutes:4,
  keywords:["DPO","对齐","轻量"],
  concept:"<p>不用强化学习也能对齐:直接拿\"好答案 vs 差答案\"优化模型,让它学会偏好好答案——这就是<gd data-term=\"dpo\">DPO</gd>。</p>",
  core:"<p>RLHF 的流程重:奖励模型+PPO,工程复杂、训练不稳。DPO 的思路更直接:把\"这个回答比那个好\"的偏好<b>直接写进损失函数</b>,一步到位地让模型提高\"喜欢好答案\"的概率。</p><p>优点:训练便宜、稳定、社区大量开源实现。适用:风格对齐(回答要有礼貌)、拒答(不该答的不答)、简单偏好。局限:复杂推理、长程任务上,DPO 往往不如 RLVR/GRPO 这类真正的强化学习路线强。</p>",
  pitfalls:"<div class=\"ex\">\"回答要简洁、不啰嗦\"这种风格偏好,DPO 几天就能训好;而\"数学推理更准\"这种能力,还得靠 RLVR 慢慢磨。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>DPO 的效果上限受偏好数据质量限制;也别指望用 DPO 替代 RLVR 来练推理——工具选型要匹配目标。</div>"
});
