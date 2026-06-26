/* appsec/08-code-audit (自动生成) */
ISL.registerLesson({
  id:"appsec/08-code-audit", module:"appsec", order:8,
  title:"代码审计与 SAST/DAST", minutes:3,
  keywords:["代码审计","SAST","DAST"],
  concept:"<p>找代码漏洞有两条路:<gd data-term=\"sast\">SAST</gd>(静态,不运行直接扫源码,像审稿挑错)和 <gd data-term=\"dast\">DAST</gd>(动态,把程序跑起来从外部黑盒地测)。</p>",
  core:"<p>两者互补:SAST 早、覆盖全但误报多;DAST 贴近真实攻击但只能测到跑起来的部分。再加上人工代码审计与渗透测试,才比较全面。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>工具能发现\"模式化\"漏洞,但发现不了业务逻辑漏洞(比如\"优惠券可以无限叠加\")。这类问题只有懂业务的人审才能发现,工具替代不了脑子。</div>",
  links:"<p>应用越来越多跑在云上和新场景里,进入<a href=\"#/m/cloud\">云与新技术安全</a>。</p>"
});
