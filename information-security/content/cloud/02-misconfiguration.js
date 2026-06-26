/* cloud/02-misconfiguration (自动生成) */
ISL.registerLesson({
  id:"cloud/02-misconfiguration", module:"cloud", order:2,
  title:"配置错误:云上头号杀手", minutes:3,
  keywords:["配置错误"],
  concept:"<p><gd data-term=\"misconfiguration\">配置错误</gd>是云上数据泄露的头号原因:存储桶设成公开、数据库无认证暴露在公网、安全组放行 0.0.0.0、密钥写进代码。</p>",
  core:"<p>应对:安全基线 + 默认拒绝 + 用 IaC(基础设施即代码)管理配置并自动扫描 + 持续的云安全态势管理(CSPM)。把\"对不对\"交给自动化检查,而非人肉记忆。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>云控制台点几下就能把数据暴露给全世界,而且没有任何报错。\"能访问\"不代表\"该公开\",每个对外开放都要明确审批。</div>",
  links:"<p>云上的应用大量跑在容器编排里。</p>"
});
