/* starter/02-what-is-data (自动生成) */
AIX.registerLesson({
  id:"starter/02-what-is-data", module:"starter", order:2,
  title:"数据长什么样", minutes:4,
  keywords:["数据","张量","标注"],
  concept:"<p>模型不\"理解\"任何东西,它只处理数字。所以一切输入——表格、文字、图片、声音——都要先变成数字,最常见的形态叫<gd data-term=\"tensor\">张量</gd>。</p>",
  core:"<p>几种常见数据的\"变身\":<b>表格</b>就是行列数字;<b>文字</b>先切成 token 再变成向量;<b>图片</b>是像素矩阵(一张 28×28 的灰度图 = 784 个数字);<b>声音</b>是波形采样点。</p><p>还要认识两个词:<b>标注</b>——给数据贴上\"标准答案\"(这张图是猫),<gd data-term=\"supervised\">监督学习</gd>就靠它;<b><gd data-term=\"data-quality\">数据质量</gd></b>——脏数据进去,垃圾结果出来,数据决定模型的天花板。</p>",
  pitfalls:"<div class=\"ex\">MNIST 手写数字数据集:7 万张 28×28 的灰度图,每张标着它是 0-9 里的哪个数字——它是深度学习最经典的\"教材\"。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>最容易产生的错觉是\"模型懂这张图/这段话的意思\"。它只是在高维数字空间里找到了统计规律。理解这一点,就不会对\"它为什么犯错\"大惊小怪。</div>"
});
