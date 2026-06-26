/* soc/02-siem-logging (自动生成) */
ISL.registerLesson({
  id:"soc/02-siem-logging", module:"soc", order:2,
  title:"日志、SIEM 与态势感知", minutes:3,
  keywords:["SIEM","日志"],
  concept:"<p><gd data-term=\"siem\">SIEM</gd>把分散在各处的日志(终端、网络、应用、云)汇到一起做关联分析与告警——相当于把所有监控录像接到一个大屏。</p>",
  core:"<p>日志是安全的\"记忆\":没有日志,既发现不了正在发生的攻击,也无法事后溯源。难点在于海量数据里找出真正的威胁(降噪、关联、定规则),近年靠 UEBA、AI 辅助分析提升。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"日志全留着\"不等于安全。日志不集中、不分析、出事时才去翻,价值极低;而且关键日志如果没留够时间或被攻击者删了,溯源就断了线。</div>",
  links:"<p>SOC 日常最大的工作量之一,是管漏洞。</p>"
});
