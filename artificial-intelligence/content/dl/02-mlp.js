/* dl/02-mlp (自动生成) */
AIX.registerLesson({
  id:"dl/02-mlp", module:"dl", order:2,
  title:"多层神经网络", minutes:4,
  keywords:["多层","隐藏层","MLP"],
  concept:"<p>把很多<gd data-term=\"neuron\">神经元</gd>分成一层层、前一层连后一层,就成了多层神经网络。中间那些层叫\"隐藏层\",\"深\"指的就是层多。</p>",
  core:"<p>为什么要多层?<b>每一层在前一层基础上提取更抽象的特征</b>。以认人脸为例:第一层看边缘,第二层拼出眼睛鼻子,第三层组合成脸。低层管细节,高层管整体。</p><figure class=\"fig\"><svg viewBox=\"0 0 320 150\" width=\"100%\"><g class=\"f-arr\"><circle cx=\"40\" cy=\"45\" r=\"8\"/><circle cx=\"40\" cy=\"105\" r=\"8\"/><circle cx=\"140\" cy=\"30\" r=\"8\"/><circle cx=\"140\" cy=\"75\" r=\"8\"/><circle cx=\"140\" cy=\"120\" r=\"8\"/><circle cx=\"240\" cy=\"45\" r=\"8\"/><circle cx=\"240\" cy=\"105\" r=\"8\"/><circle cx=\"300\" cy=\"75\" r=\"8\"/></g><g class=\"f-line\" opacity=\"0.5\"><line x1=\"48\" y1=\"45\" x2=\"132\" y2=\"30\"/><line x1=\"48\" y1=\"45\" x2=\"132\" y2=\"75\"/><line x1=\"48\" y1=\"45\" x2=\"132\" y2=\"120\"/><line x1=\"48\" y1=\"105\" x2=\"132\" y2=\"30\"/><line x1=\"48\" y1=\"105\" x2=\"132\" y2=\"75\"/><line x1=\"48\" y1=\"105\" x2=\"132\" y2=\"120\"/><line x1=\"148\" y1=\"30\" x2=\"232\" y2=\"45\"/><line x1=\"148\" y1=\"75\" x2=\"232\" y2=\"45\"/><line x1=\"148\" y1=\"120\" x2=\"232\" y2=\"105\"/><line x1=\"148\" y1=\"30\" x2=\"232\" y2=\"105\"/><line x1=\"148\" y1=\"120\" x2=\"232\" y2=\"45\"/><line x1=\"248\" y1=\"45\" x2=\"294\" y2=\"75\"/><line x1=\"248\" y1=\"105\" x2=\"294\" y2=\"75\"/></g><text x=\"40\" y=\"135\" class=\"f-dim\" text-anchor=\"middle\">输入层</text><text x=\"140\" y=\"145\" class=\"f-dim\" text-anchor=\"middle\">隐藏层</text><text x=\"290\" y=\"135\" class=\"f-dim\" text-anchor=\"middle\">输出</text></svg><figcaption>层层向前传递,逐层提取更抽象的特征</figcaption></figure><p>层数和神经元一多,<gd data-term=\"parameter\">参数</gd>就成千上万乃至上亿——这正是大模型动辄\"百亿千亿参数\"的由来。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>不是层越多越好。太深会难训练、易<gd data-term=\"overfitting\">过拟合</gd>、还吃算力。\"深度\"真正能用起来,靠的是后面几课讲的激活函数、反向传播和大算力一起到位。</div>",
  links:"<p>每个神经元里那个\"要不要往下传\"的开关,就是激活函数,下一课讲。</p>"
});
