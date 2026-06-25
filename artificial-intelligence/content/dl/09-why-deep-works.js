/* dl/09-why-deep-works (自动生成) */
AIX.registerLesson({
  id:"dl/09-why-deep-works", module:"dl", order:9,
  title:"深度学习为什么有效", minutes:4,
  keywords:["深度学习","表示学习"],
  concept:"<p>一句话:深度学习把\"<b>人来设计特征</b>\"换成了\"<b>让网络自己从数据里层层学出特征</b>\",再加上大数据和大算力,于是在感知类任务上全面超越了老办法。</p>",
  core:"<p>传统机器学习的瓶颈在\"特征工程\"——靠人想清楚该看哪些<gd data-term=\"feature\">特征</gd>,费力又有天花板。深度学习的多层结构能<b>自动从原始数据(像素、字符)里学出由浅入深的表示</b>,把这件最难的事交给了数据和<gd data-term=\"gradient-descent\">梯度下降</gd>。</p><p>再叠加<gd data-term=\"scaling-law\">规模法则</gd>:数据更多、模型更大、算力更足,效果往往持续变好。三者共振,才有了这十几年的爆发。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>深度学习不是万能钥匙。数据少、要求强可解释、或需要严格逻辑推理的场景,它未必比简单方法或<gd data-term=\"symbolic-ai\">符号方法</gd>强。选工具看任务,别迷信\"深度\"。</div>",
  links:"<p>地基铺到这里,进入今天的主角:<a href=\"#/m/llm\">Transformer 与大模型</a>。</p>"
});
