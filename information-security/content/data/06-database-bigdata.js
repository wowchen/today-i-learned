/* data/06-database-bigdata (自动生成) */
ISL.registerLesson({
  id:"data/06-database-bigdata", module:"data", order:6,
  title:"数据库与大数据安全", minutes:3,
  keywords:["数据库","大数据"],
  concept:"<p>数据库是数据最集中的地方,也是 <gd data-term=\"sql-injection\">SQL 注入</gd>、拖库、越权查询的首要目标;大数据平台则把海量数据聚到一起,一旦失守损失巨大。</p>",
  core:"<p>基本功:最小权限账号、加密存储、敏感字段脱敏、操作审计、备份、限制批量导出。大数据平台还要管好多组件的认证授权(常因默认开放、无认证而出事)。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>开发图方便用高权限账号连数据库、把数据库直接暴露在公网且弱口令——这是被拖库的经典姿势。数据库永远不该直接对公网开放。</div>",
  links:"<p>万一还是出了事,能不能恢复,看备份。</p>"
});
