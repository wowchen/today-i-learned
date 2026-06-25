/* use/05-finetune-when (自动生成) */
AIX.registerLesson({
  id:"use/05-finetune-when", module:"use", order:5,
  title:"要不要微调", minutes:4,
  keywords:["微调","选择"],
  concept:"<p><gd data-term=\"finetune\">微调</gd>是用你自己的数据再训练模型。但对大多数人,<b>它往往不是第一选择</b>——先试提示词和 RAG,不行再考虑微调。</p>",
  core:"<p>一个实用的优先级:<b>① 写好提示词</b>(最便宜快)→ <b>② 上 RAG</b>(要用私有/最新知识)→ <b>③ 微调</b>(要固定风格/格式,或有大量高质量专有示范数据)。</p><p>微调擅长\"教它说话的<b>方式</b>和<b>格式</b>\"(语气、行业行文、固定结构),不擅长\"往它脑子里灌<b>新知识</b>\"——灌知识用 RAG 更划算、更易更新。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>微调要准备大量高质量数据、要算力、还得防<gd data-term=\"overfitting\">过拟合</gd>和\"灾难性遗忘\"(学了新的忘了旧的)。成本不低,且模型一升级你可能得重做。别一上来就微调。</div>",
  links:"<p>多轮对话里,模型怎么\"记住\"前面?聊聊记忆。</p>"
});
