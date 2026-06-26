/* basics/05-least-privilege (自动生成) */
ISL.registerLesson({
  id:"basics/05-least-privilege", module:"basics", order:5,
  title:"最小权限与职责分离", minutes:4,
  keywords:["最小权限","职责分离"],
  concept:"<p><gd data-term=\"least-privilege\">最小权限</gd>:只给完成工作所必需的最小权限,多一分都不给;默认拒绝,按需开通。</p>",
  core:"<p>配套的是<b>职责分离</b>:把关键动作拆给不同人,谁也不能一个人闭环作恶。比如\"申请采购\"和\"审批付款\"必须两个人。</p><div class=\"ex\">前台账号只能进大厅,没有金库钥匙;就算被钓走,损失也有限。这就是最小权限在\"控爆炸半径\"。</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>图省事给所有人开管理员、长期不回收离职/换岗人员的权限,是最常见的内部风险源。权限要定期复核、用完即收。</div>",
  links:"<p>当\"最小权限\"推到极致、连\"在内网\"都不默认信任,就是零信任。</p>"
});
