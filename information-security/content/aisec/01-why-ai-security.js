/* aisec/01-why-ai-security (自动生成) */
ISL.registerLesson({
  id:"aisec/01-why-ai-security", module:"aisec", order:1,
  title:"AI 安全为什么不一样", minutes:4,
  keywords:["AI安全","大模型"],
  concept:"<p><gd data-term=\"ai-security\">AI 安全</gd>不是\"给 AI 装个杀毒软件\"。<gd data-term=\"llm\">大模型</gd>带来了传统安全没有的新问题:它的\"程序逻辑\"藏在权重里说不清、它分不清指令和数据、它会一本正经地编造。</p>",
  core:"<p>而且风险贯穿<b>全生命周期</b>:训练数据 → 预训练 → 后训练对齐 → 部署推理 → 接入工具变成智能体。每一环都有独特的攻击面。本模块顺着这条链讲。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>既不要神化(\"AI 不可控,完了\"),也别轻视(\"不就是个聊天机器人\")。它是能力强但会犯错、且能被诱导的新型系统,要用工程化的安全思路对待。</div>",
  links:"<p>顺着生命周期,先看最上游:训练数据。</p>"
});
