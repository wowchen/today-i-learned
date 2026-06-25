/* ml/08-gradient-descent (自动生成) */
AIX.registerLesson({
  id:"ml/08-gradient-descent", module:"ml", order:8,
  title:"梯度下降:模型怎么\"学\"", minutes:4,
  keywords:["梯度下降","优化","损失"],
  concept:"<p><gd data-term=\"gradient-descent\">梯度下降</gd>是模型学习的基本动作:<b>看当前错了多少,顺着\"让错误下降最快\"的方向,把参数挪一小步,反复挪,直到错误足够小</b>。</p>",
  core:"<p>想象你蒙着眼睛站在山坡上,要走到山谷最低处。办法是:用脚感受哪边最陡,朝下坡迈一小步,再感受、再迈……<gd data-term=\"loss\">损失</gd>(错误分)就是\"海拔\",参数就是你的位置,<gd data-term=\"gradient-descent\">梯度下降</gd>就是这套下山法。</p><figure class=\"fig\"><svg viewBox=\"0 0 360 150\" width=\"100%\"><path class=\"f-line\" d=\"M20,30 Q120,170 200,110 Q260,70 340,40\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"78\" r=\"5\" class=\"f-arr\"/><circle cx=\"110\" cy=\"120\" r=\"5\" class=\"f-arr\" opacity=\"0.6\"/><circle cx=\"175\" cy=\"118\" r=\"5\" class=\"f-arr\" opacity=\"0.4\"/><text x=\"60\" y=\"68\" class=\"f-dim\" text-anchor=\"middle\">起点</text><text x=\"195\" y=\"135\" class=\"f-ok\" text-anchor=\"middle\">最低点</text><text x=\"330\" y=\"30\" class=\"f-dim\" text-anchor=\"end\">损失曲面</text></svg><figcaption>顺着坡度一步步下到损失最低处(示意)</figcaption></figure><p>每步迈多大,叫\"学习率\":太大容易越过谷底来回乱蹦,太小则学得龟速。<gd data-term=\"backprop\">反向传播</gd>负责算出每个参数该往哪挪,梯度下降负责挪。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>真实的\"损失曲面\"坑坑洼洼,有很多局部低谷,不保证能到全局最低。但实践中,到达一个\"足够低\"的谷底往往就够用了。</div>",
  links:"<p>机器学习的地基打好了。接着进入它最强的分支:<a href=\"#/m/dl\">神经网络与深度学习</a>。</p>"
});
