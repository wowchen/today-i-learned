/* starter/03-first-model (自动生成) */
AIX.registerLesson({
  id:"starter/03-first-model", module:"starter", order:3,
  title:"第一次跑通模型", minutes:4,
  keywords:["训练","实践","入门"],
  concept:"<p>从下载数据集到看到<gd data-term=\"loss\">损失</gd>下降,最短路径只有几行代码——重点是<b>先跑通,再理解</b>。</p>",
  core:"<p>最小流程五步:<b>① 装环境</b>(Colab 或本地 pip);<b>② 加载数据</b>(MNIST 等现成数据集,一行代码);<b>③ 定义模型</b>(几行 PyTorch);<b>④ 训练循环</b>(喂数据→算损失→反向传播→更新参数,重复若干<gd data-term=\"epoch\">轮次</gd>);<b>⑤ 看结果</b>(损失下降→预测新样本)。</p><p>关键是理解第四步发生了什么:模型在<b>反复试错中让损失变小</b>,这就是<gd data-term=\"training\">训练</gd>。推荐用 Google Colab——免费 GPU、零配置、浏览器就能跑。</p>",
  pitfalls:"<div class=\"ex\">\"训练一个手写数字识别\"是机器学习界的 Hello World:跟着任何一篇 MNIST 教程,半小时内就能看到准确率爬到 90% 以上。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>不要一上来就想\"训个大模型\"。先用小模型把整个流程跑通;卡在环境问题太正常了——把报错原文贴给搜索引擎或大模型,比硬想快十倍。</div>"
});
