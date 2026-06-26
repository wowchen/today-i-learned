/* soc/03-vuln-management (自动生成) */
ISL.registerLesson({
  id:"soc/03-vuln-management", module:"soc", order:3,
  title:"漏洞管理:CVE 与 CVSS", minutes:3,
  keywords:["漏洞","CVE","CVSS"],
  concept:"<p>漏洞太多、修不过来,所以要管理。<gd data-term=\"cve\">CVE</gd>给每个公开漏洞一个统一编号(\"身份证号\"),<gd data-term=\"cvss\">CVSS</gd>给它打严重性分(0–10),帮你排优先级。</p>",
  core:"<p>流程:扫描发现 → 用 CVSS + 资产重要性 + 是否有现成利用,综合定优先级 → 修复或缓解 → 复测闭环。重点永远是\"高危 + 暴露在外 + 有人在打\"的那批。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>只看 CVSS 分数排序会误事。一个 9 分漏洞如果在没联网的内部系统,可能没有一个 7 分但暴露在公网、已被大规模利用的漏洞紧急。要结合实际暴露面。</div>",
  links:"<p>想知道防线到底扛不扛得住,就请人来真打一次。</p>"
});
