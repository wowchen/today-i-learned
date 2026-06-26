/* aisec/02-training-data (自动生成) */
ISL.registerLesson({
  id:"aisec/02-training-data", module:"aisec", order:2,
  title:"训练数据:投毒与隐私", minutes:4,
  keywords:["数据投毒","隐私"],
  concept:"<p>大模型的能力来自海量训练数据,风险也从这里起步:<gd data-term=\"data-poisoning\">数据投毒</gd>(往数据里掺坏样本,植入后门或偏置)和<b>隐私</b>(训练数据里混入了个人信息、版权内容)。</p>",
  core:"<p>投毒可能让模型在特定触发词下做出异常行为;隐私问题则可能让模型\"背出\"训练时见过的敏感信息。应对:数据来源治理、清洗与去重、去隐私化、来源可追溯。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"数据越多越好\"在安全视角下要打折扣。从公网无差别抓取的数据,可能同时引入后门、偏见、隐私和版权问题。数据质量与来源,比数量更重要。</div>",
  links:"<p>数据进了模型,看预训练阶段的风险。</p>"
});
