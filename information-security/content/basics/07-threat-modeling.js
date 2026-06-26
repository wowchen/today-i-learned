/* basics/07-threat-modeling (自动生成) */
ISL.registerLesson({
  id:"basics/07-threat-modeling", module:"basics", order:7,
  title:"威胁建模与 STRIDE", minutes:4,
  keywords:["威胁建模","STRIDE"],
  concept:"<p><gd data-term=\"threat-modeling\">威胁建模</gd>:在设计阶段就系统地问\"谁会怎么攻击我\",把风险提前找出来,而不是上线后被动挨打。</p>",
  core:"<p>常用的分类法是 <gd data-term=\"stride\">STRIDE</gd>,六类威胁各对应一个防御目标:仿冒(认证)、篡改(完整性)、抵赖(审计)、信息泄露(机密性)、拒绝服务(可用性)、权限提升(授权)。</p><div class=\"ex\">给一个登录功能建模:会不会被撞库(仿冒)?会不会被改包(篡改)?日志够不够追责(抵赖)?逐条过一遍。</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>威胁建模不是一次性文档。架构一变、加了新功能,威胁也变,要随之更新——否则就成了过期摆设。</div>",
  links:"<p>建好模型、定好措施,还得满足外部要求,这就引出合规。</p>"
});
