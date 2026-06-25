/* dl/01-neuron (自动生成) */
AIX.registerLesson({
  id:"dl/01-neuron", module:"dl", order:1,
  title:"神经元与感知机", minutes:4,
  keywords:["神经元","感知机"],
  concept:"<p><gd data-term=\"neural-network\">神经网络</gd>的最小零件是<gd data-term=\"neuron\">神经元</gd>:把各路输入<b>按权重相乘、求和、加偏置,再过一个</b><gd data-term=\"activation\">激活函数</gd><b>决定输出</b>。</p>",
  core:"<p>最早的单个神经元模型叫<gd data-term=\"perceptron\">感知机</gd>(1958)。它做的事极朴素:给每个输入一个<gd data-term=\"weight\">权重</gd>(重要程度),加权求和后,超过门槛就输出\"是\",否则\"否\"。</p><figure class=\"fig\"><svg viewBox=\"0 0 320 160\" width=\"100%\"><circle cx=\"40\" cy=\"40\" r=\"12\" class=\"f-box2\"/><circle cx=\"40\" cy=\"80\" r=\"12\" class=\"f-box2\"/><circle cx=\"40\" cy=\"120\" r=\"12\" class=\"f-box2\"/><circle cx=\"200\" cy=\"80\" r=\"20\" class=\"f-arr\"/><line class=\"f-line\" x1=\"52\" y1=\"40\" x2=\"182\" y2=\"74\"/><line class=\"f-line\" x1=\"52\" y1=\"80\" x2=\"180\" y2=\"80\"/><line class=\"f-line\" x1=\"52\" y1=\"120\" x2=\"182\" y2=\"86\"/><line class=\"f-line\" x1=\"220\" y1=\"80\" x2=\"290\" y2=\"80\" stroke-width=\"2\"/><text x=\"40\" y=\"44\" class=\"f-dim\" text-anchor=\"middle\">x1</text><text x=\"40\" y=\"84\" class=\"f-dim\" text-anchor=\"middle\">x2</text><text x=\"40\" y=\"124\" class=\"f-dim\" text-anchor=\"middle\">x3</text><text x=\"120\" y=\"55\" class=\"f-dim\" text-anchor=\"middle\">w</text><text x=\"300\" y=\"84\" class=\"f-ok\">输出</text><text x=\"200\" y=\"84\" class=\"f-inv\" text-anchor=\"middle\" style=\"font-size:11px\">Σ→激活</text></svg><figcaption>一个神经元:加权求和 → 激活 → 输出</figcaption></figure><p>这就是后来一切的基本砖块。你可以去<a href=\"#/lab/perceptron\">实验室·感知机</a>亲手拖权重,看它怎么把点分成两类。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>单个感知机只能画<b>一条直线</b>分类,连\"异或\"这种简单情况都搞不定。明斯基 1969 年点破这一点,直接催冷了第一次浪潮。破局之道是把神经元叠成多层。</div>",
  links:"<p>那就把它们叠起来——下一课讲多层神经网络。</p>"
});
