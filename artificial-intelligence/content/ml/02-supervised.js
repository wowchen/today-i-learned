/* ml/02-supervised (自动生成) */
AIX.registerLesson({
  id:"ml/02-supervised", module:"ml", order:2,
  title:"监督学习", minutes:4,
  keywords:["监督学习","分类","回归"],
  concept:"<p><gd data-term=\"supervised\">监督学习</gd>就是<b>给了标准答案的学习</b>:每条数据都带<gd data-term=\"label\">标签</gd>,模型学的是\"从输入猜对答案\"。</p>",
  core:"<p>它解决两类问题:<b>分类</b>(答案是类别,如猫/狗、垃圾/正常)和<b>回归</b>(答案是数值,如预测房价、气温)。</p><p>过程像做带答案的练习册:模型先猜,对照<gd data-term=\"label\">标签</gd>看错多少(<gd data-term=\"loss\">损失</gd>),再回去微调,反复多轮,越做越准。今天的人脸识别、信用评分、机器翻译大多基于它。</p><p>它的命门是<b>标签</b>:得有人把大量数据一条条标好,既贵又慢。标签的质量直接决定效果。</p>",
  pitfalls:"<div class=\"ex\">给模型看十万张标了\"猫/狗\"的照片,它就能学会区分;但如果标签里混进很多标错的,它也会跟着学歪。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>监督学习只会重复它在标签里见过的模式。训练数据里没有的、或带偏见的情况,它大概率答不好甚至答歪。</div>"
});
