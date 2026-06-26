/* iam/06-rbac-abac (自动生成) */
ISL.registerLesson({
  id:"iam/06-rbac-abac", module:"iam", order:6,
  title:"RBAC 与 ABAC", minutes:3,
  keywords:["RBAC","ABAC","授权"],
  concept:"<p>两种主流授权模型:<gd data-term=\"rbac\">RBAC</gd>按<b>角色</b>给权限(人入角色,角色定权限),简单好管;<gd data-term=\"abac\">ABAC</gd>按<b>属性</b>动态判断(谁、什么资源、何时、何地),更细更灵活。</p>",
  core:"<p>多数组织以 RBAC 为主干、用 ABAC 处理细粒度场景。共同目标都是落实<gd data-term=\"least-privilege\">最小权限</gd>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>角色设计久了会\"权限膨胀\":人换岗位却没退旧角色,角色越叠越大。要定期做权限复核(access review),清理冗余授权。</div>",
  links:"<p>权限金字塔顶端那些\"超级账号\",要单独重点看管。</p>"
});
