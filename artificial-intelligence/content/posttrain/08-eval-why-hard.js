/* posttrain/08-eval-why-hard (自动生成) */
AIX.registerLesson({
  id:"posttrain/08-eval-why-hard", module:"posttrain", order:8,
  title:"评测为什么难", minutes:4,
  keywords:["评测","benchmark","方法论"],
  concept:"<p>刷 benchmark 分数高,不等于模型真的好用——评测正面临\"分数通胀\"和\"与真实能力脱节\"的困境。</p>",
  core:"<p>benchmark 的三大问题:<b>① 数据污染</b>:训练数据里混进了测试题,模型\"背答案\"也能得高分;<b>② 饱和</b>:大家都在 90 分以上,拉不开差距,说明题目已经太简单;<b>③ 与真实脱节</b>:选择题考得好,不等于真实任务干得好。</p><p>所以好评测难在\"设计出能反映真实短板的任务\"。DeepSeek 招聘后训练研究员时明确写:\"不满足于刷 benchmark,能设计真正反映模型能力边界的评测方案\"——这是行业对评测的共识在转向。</p>",
  pitfalls:"<div class=\"ex\">一个模型在选择题 benchmark 上 99 分,但让它实际写代码时经常漏边界条件——考试和实战是两回事。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>看到\"某某模型登顶某榜\"的新闻,先问三句:评测集有没有被污染?任务难度如何?跑同样任务要多少成本?三条都过关,才值得信。</div>"
});
