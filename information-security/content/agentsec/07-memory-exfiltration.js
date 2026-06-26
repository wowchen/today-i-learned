/* agentsec/07-memory-exfiltration (自动生成) */
ISL.registerLesson({
  id:"agentsec/07-memory-exfiltration", module:"agentsec", order:7,
  title:"记忆与数据外泄", minutes:3,
  keywords:["记忆","数据外泄"],
  concept:"<p>智能体常带\"记忆\"(历史对话、检索到的文档、长期记忆库)。这些上下文里可能有敏感数据,而它们会被带进每一次推理和工具调用——成了新的外泄通道。</p>",
  core:"<p>典型风险:<gd data-term=\"prompt-injection\">注入</gd>诱导智能体把记忆里的密钥/隐私\"总结\"后外发;不同用户/会话的记忆隔离不当导致串数据;敏感信息被写进长期记忆又被检索出来。应对:记忆最小化、按敏感度隔离、出站做<gd data-term=\"dlp\">DLP</gd>与校验。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"上下文窗口/记忆里的东西只有模型看得到\"是错觉。任何能影响模型、又能联网/调工具的内容,都可能被诱导外发。敏感数据别随便塞进上下文。</div>",
  links:"<p>最后,把所有这些收拢成一套智能体纵深防御。</p>"
});
