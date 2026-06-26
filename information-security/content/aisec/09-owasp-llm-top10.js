/* aisec/09-owasp-llm-top10 (自动生成) */
ISL.registerLesson({
  id:"aisec/09-owasp-llm-top10", module:"aisec", order:9,
  title:"OWASP LLM Top 10", minutes:4,
  keywords:["OWASP","LLM","清单"],
  concept:"<p><gd data-term=\"owasp-llm\">OWASP LLM Top 10</gd>是 OWASP 专门为大模型应用整理的十大安全风险,是做 AI 应用安全的通用框架,值得脸熟。</p>",
  core:"<p>它涵盖:<gd data-term=\"prompt-injection\">提示词注入</gd>、敏感信息泄露、供应链、<gd data-term=\"data-poisoning\">数据/模型投毒</gd>、不当输出处理、过度授权(给智能体太多权限)、系统提示泄露、向量/嵌入风险、错误信息(幻觉)、无限消耗(被刷爆成本)等。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>会发现:很多\"新风险\"其实是老问题在新场景的变体——注入、供应链、过度授权、输入输出校验。把传统安全功底迁移过来,事半功倍,别从零焦虑。</div>",
  links:"<p>最后看模型本身的供应链与可信溯源。</p>"
});
