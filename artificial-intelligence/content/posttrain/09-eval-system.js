/* posttrain/09-eval-system (自动生成) */
AIX.registerLesson({
  id:"posttrain/09-eval-system", module:"posttrain", order:9,
  title:"评测体系怎么搭", minutes:4,
  keywords:["评测","评估","badcase"],
  concept:"<p>好评测像\"能力体检\":拆维度、设计任务、跑 badcase 闭环,让每一次迭代都有依据,而不是靠感觉。</p>",
  core:"<p>搭评测体系的步骤:<b>① 拆维度</b>:知识、推理、编程、写作、指令遵循、Agent 场景等分项考;<b>② 自动化+人工结合</b>:数学代码用自动判分,写作风格用人工抽检+规则;<b>③ Agent 场景专门评</b>:看<gd data-term=\"trajectory\">轨迹</gd>、看任务完成率,不只看单步对错;<b>④ badcase 闭环</b>:把线上失败案例回流进评测集,让模型\"每次修 bug 都变得更抗造\";<b>⑤ 防应试</b>:定期换题、留对抗样本。</p>",
  pitfalls:"<div class=\"ex\">一个生产级做法:数学题跑 1000 道自动判分,客服回复抽 200 条人工评分,Agent 任务跑 100 次看成功率——三个维度合起来才是全貌。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>评测集本身会过时、会被污染;指标定得太死,模型就会\"专刷你的评测集\"。评测要持续运营,不是一次性工程。</div>"
});
