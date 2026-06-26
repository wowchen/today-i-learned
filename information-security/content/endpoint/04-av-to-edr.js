/* endpoint/04-av-to-edr (自动生成) */
ISL.registerLesson({
  id:"endpoint/04-av-to-edr", module:"endpoint", order:4,
  title:"从杀毒到 EDR/XDR", minutes:3,
  keywords:["杀毒","EDR","XDR"],
  concept:"<p>传统杀毒靠\"特征库\"比对已知病毒,挡不住新变种。<gd data-term=\"edr\">EDR</gd>换了思路:盯<b>行为</b>——这个进程为什么在加密大量文件、为什么连境外地址?可疑就告警/处置。</p>",
  core:"<p><gd data-term=\"xdr\">XDR</gd>再把终端、网络、邮件、云的信号打通统一分析,看清攻击全貌。这也是\"假设会被攻破、重在检测响应\"思路的落地。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>EDR 不是装上就完事,它会产生大量告警,需要人去运营和调查(这正是 <gd data-term=\"soc\">SOC</gd> 的活)。买了不看,等于装了报警器没人值守。</div>",
  links:"<p>很多攻击其实利用的是早该修的老漏洞——补丁管理。</p>"
});
