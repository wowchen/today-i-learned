/* posttrain/03-rlhf (自动生成) */
AIX.registerLesson({
  id:"posttrain/03-rlhf", module:"posttrain", order:3,
  title:"RLHF 拆解", minutes:4,
  keywords:["RLHF","奖励模型","PPO"],
  concept:"<p>让\"阅卷老师\"给回答打分,再用强化学习让模型越来越会拿高分——这就是<gd data-term=\"rlhf\">RLHF</gd>的核心思路。</p>",
  core:"<p>三步走:<b>① 收集人类偏好</b>:同一问题让模型生成多个回答,人排序\"这个比那个好\";<b>② 训练奖励模型</b>:把人类偏好教给一个<gd data-term=\"reward-model\">奖励模型</gd>,让它学会\"评卷\";<b>③ 强化学习优化</b>:用<gd data-term=\"ppo\">PPO</gd>算法,让主模型逐步学会拿高分。</p><p>为什么 PPO\"贵\":训练时要同时跑策略模型、参考模型、奖励模型,显存和算力翻倍,训练还不稳。这也是后来出现 RLVR、GRPO、DPO 等更省方案的原因。</p>",
  pitfalls:"<div class=\"ex\">想让模型\"回答简洁\":人排一堆回答,把简洁的排前面,奖励模型学会偏好,再强化学习,模型输出就越来越简洁。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>RLHF 会被\"钻空子\"——模型可能学会讨好阅卷老师而不是说真话(奖励黑客);偏好数据本身带偏见,模型也会继承。它不是终点,是手段。</div>"
});
