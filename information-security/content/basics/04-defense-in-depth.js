/* basics/04-defense-in-depth (自动生成) */
ISL.registerLesson({
  id:"basics/04-defense-in-depth", module:"basics", order:4,
  title:"纵深防御", minutes:4,
  keywords:["纵深防御","分层"],
  concept:"<p><gd data-term=\"defense-in-depth\">纵深防御</gd>的核心一句话:<b>不靠单一防线,层层设防,一层被破还有下一层</b>。</p>",
  core:"<p>像古代城池:护城河、城墙、卫兵、内城、金库,一层套一层。对应到 IT:边界<gd data-term=\"firewall\">防火墙</gd>、网络分段、主机加固、<gd data-term=\"edr\">EDR</gd>、应用鉴权、数据加密、备份兜底。攻击者就算突破外层,也很难一路打到核心。</p><p>这正是本站设计图里那一圈圈\"防御环\"的含义。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>纵深防御不是把同一种产品买三遍。三台同型号防火墙叠一起,有同一个漏洞就一起破。要的是\"不同机理、不同层面\"的防线互补。</div>",
  links:"<p>层层设防的每一层,都遵循同一条原则:最小权限。</p>"
});
