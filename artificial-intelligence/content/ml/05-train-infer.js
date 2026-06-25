/* ml/05-train-infer (自动生成) */
AIX.registerLesson({
  id:"ml/05-train-infer", module:"ml", order:5,
  title:"训练与推理", minutes:3,
  keywords:["训练","推理","成本"],
  concept:"<p>模型的一生分两段:<gd data-term=\"training\">训练</gd>是\"上学\",反复调参数把本事练出来;<gd data-term=\"inference\">推理</gd>是\"上岗\",拿练好的本事处理新任务。</p>",
  core:"<p><b>训练</b>:用大量数据反复迭代,极耗算力和时间,大模型训练一次可能要成千上万张<gd data-term=\"gpu\">GPU</gd>跑上几周,成本惊人。但通常只做有限几次。</p><p><b>推理</b>:训练完成后,你每次提问、它每次回答,都是一次推理。单次便宜,但用户多了、调用频繁,推理的总成本也很可观。</p><p>理解这条分界,你就明白:为什么训练大模型是巨头的游戏,而用大模型(推理)却人人可及。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>你和 ChatGPT 聊天<b>不会\"训练\"它</b>——它的本事在出厂前就固定了。除非厂商专门拿数据再<gd data-term=\"finetune\">微调</gd>,否则你的对话不会改变模型本身。</div>",
  links:"<p>训练靠数据,而数据要先变成模型看得懂的\"特征\"。下一课讲特征与数据。</p>"
});
