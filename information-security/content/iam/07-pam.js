/* iam/07-pam (自动生成) */
ISL.registerLesson({
  id:"iam/07-pam", module:"iam", order:7,
  title:"特权访问管理(PAM)", minutes:3,
  keywords:["PAM","特权账号"],
  concept:"<p><gd data-term=\"pam\">特权访问管理(PAM)</gd>专门管控管理员、root、数据库超管这类\"金库钥匙\"级账号——它们一旦失守,等于全盘失守。</p>",
  core:"<p>核心手段:特权账号集中托管、按需临时申请(用完即收)、操作审批、全程录屏审计、密码定期自动轮换。把\"长期持有的万能钥匙\"变成\"一次性、可追溯的临时授权\"。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>共享的 admin 账号、多人共用一个 root 密码,是审计的黑洞——出了事谁也说不清是谁干的。特权操作必须能追溯到具体的人。</div>",
  links:"<p>守住了人和权限,核心要保护的对象其实是<a href=\"#/m/data\">数据</a>。</p>"
});
