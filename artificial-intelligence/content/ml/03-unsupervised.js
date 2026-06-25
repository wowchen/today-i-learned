/* ml/03-unsupervised (自动生成) */
AIX.registerLesson({
  id:"ml/03-unsupervised", module:"ml", order:3,
  title:"无监督学习", minutes:4,
  keywords:["无监督","聚类","降维"],
  concept:"<p><gd data-term=\"unsupervised\">无监督学习</gd>用的是<b>没有答案的数据</b>,让模型自己发现里面的结构和规律。</p>",
  core:"<p>典型任务有两种:<b>聚类</b>(把相似的自动归堆,如把用户分成几类人群)和<b>降维</b>(把又多又杂的特征压缩成几个关键维度,便于观察和计算)。</p><p>它的好处是<b>不需要昂贵的人工标注</b>。商家做用户分群、风控找异常交易,常用它。<b>大模型的</b><gd data-term=\"pretrain\">预训练</gd><b>也带很强的无监督味道</b>:让模型读海量没标注的文本,自己学语言规律。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>无监督学习分出来的\"堆\",机器并不知道每堆是什么含义,需要人来解读。它发现的是\"相似\",不是\"对错\"。</div>",
  links:"<p>还有一种靠\"试错+奖惩\"来学的,下一课讲强化学习。</p>"
});
