/* aisec/03-pretraining-risk (自动生成) */
ISL.registerLesson({
  id:"aisec/03-pretraining-risk", module:"aisec", order:3,
  title:"预训练阶段的风险", minutes:3,
  keywords:["预训练"],
  concept:"<p><gd data-term=\"pretraining\">预训练</gd>是用海量数据训出基础能力的阶段。它的风险有两类:<b>训练过程本身</b>(算力供应链、被篡改的训练代码/检查点)和<b>结果固化</b>(偏见、有害知识、后门一旦学进去就很难清除)。</p>",
  core:"<p>预训练成本极高、不可能反复重来,所以问题往往要靠后续的\"后训练/对齐\"来缓解,而不是推倒重练。基础模型的来源是否可信,因此非常关键。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>用了开源基础模型,就继承了它的一切——包括你看不见的偏见和潜在后门。\"开源\"不等于\"安全可信\",来源与社区信誉要纳入评估。</div>",
  links:"<p>预训练打好底,靠后训练把模型\"掰正\"。</p>"
});
