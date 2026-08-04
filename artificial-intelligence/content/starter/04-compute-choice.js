/* starter/04-compute-choice (自动生成) */
AIX.registerLesson({
  id:"starter/04-compute-choice", module:"starter", order:4,
  title:"算力怎么选", minutes:4,
  keywords:["算力","GPU","API"],
  concept:"<p>模型训练和推理都要算力。怎么选:本地 CPU、本地 GPU、云 GPU、还是直接用 API?按需求和预算来,入门阶段有免费方案就够了。</p>",
  core:"<p><b>GPU 为什么快</b>:它擅长并行计算,适合神经网络这种\"海量小运算\";<b>显存</b>是它\"一次能端多少东西\"的盘子,决定能跑多大的模型。</p><p>四种选择:<b>① API</b>——用别人训好的模型,按 token 付费,最省事,适合应用开发;<b>② 云 GPU</b>(Colab、算力平台)——租机器自己训,按小时计费;<b>③ 本地 GPU</b>——自己买卡,适合长期、私有化;<b>④ 本地 CPU</b>——只能跑极小模型,学概念够用。</p>",
  pitfalls:"<div class=\"ex\">量级感受:一张消费级显卡的算力是入门云 GPU 的零头,而云端 A100/H100 又高出几个数量级。但学习和实验用 Colab 免费额度完全够。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>\"没有顶级显卡就学不了 AI\"是最大误解。应用开发用 API、学习用 Colab、真要训练也有租卡平台。先别急着花几万买卡,想清楚用途再下单。</div>"
});
