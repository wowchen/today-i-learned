/* posttrain/07-reasoning (自动生成) */
AIX.registerLesson({
  id:"posttrain/07-reasoning", module:"posttrain", order:7,
  title:"推理能力从哪来", minutes:4,
  keywords:["推理","思维链","R1"],
  concept:"<p>模型\"会思考\"不是天生的,靠的是<gd data-term=\"chain-of-thought\">思维链</gd>提示 + 专门的推理训练(如 DeepSeek-R1 的两阶段路线)。</p>",
  core:"<p>第一层,提示层面:<b>让模型先把思考过程写出来再给答案</b>(思维链),复杂问题的准确率显著提升——这是零成本就能用的技巧。</p><p>第二层,训练层面:把\"多想想\"练成肌肉记忆。R1 路线大致四步:<b>① 冷启动 SFT</b>(喂少量推理样例);<b>② 大规模 RLVR</b>(用可验证奖励强化,模型学会\"长思考\");<b>③ 拒绝采样+第二轮 SFT</b>(把强化出来的好推理沉淀成数据再学一遍);<b>④ 再 RL</b>(覆盖全场景)。结果是<gd data-term=\"reasoning-model\">推理模型</gd>学会了\"思考长度随难度增长\"。</p>",
  pitfalls:"<div class=\"ex\">R1 在数学竞赛题上达到接近顶尖人类的水平,而支撑它的核心就是\"思考过程+RLVR 训练\"。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>推理模型会\"想太多\":简单问题也长篇大论,又慢又贵;思考过程也可能是\"编理由\"(伪推理)。按需选择普通模型或推理模型,别一刀切。</div>"
});
