/* appsec/02-devsecops (自动生成) */
ISL.registerLesson({
  id:"appsec/02-devsecops", module:"appsec", order:2,
  title:"DevSecOps", minutes:3,
  keywords:["DevSecOps"],
  concept:"<p><gd data-term=\"devsecops\">DevSecOps</gd>是在快速迭代的 DevOps 流水线里,自动化地融入安全检查——让安全跟得上发布节奏。</p>",
  core:"<p>典型做法:提交代码自动跑<gd data-term=\"sast\">SAST</gd>(扫源码)、扫依赖漏洞和<gd data-term=\"sbom\">SBOM</gd>、镜像扫描、上线前自动安全测试。有问题就卡住流水线。安全成了\"自动挡\",而非人工抽查。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>工具一开,告警成千上万,开发直接无视——这是 DevSecOps 最常见的失败。要先治\"高危可利用\"的,控制误报,把安全做成帮手而不是路障。</div>",
  links:"<p>具体要扫哪些风险?最权威的清单是 OWASP Top 10。</p>"
});
