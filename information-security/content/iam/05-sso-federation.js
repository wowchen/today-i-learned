/* iam/05-sso-federation (自动生成) */
ISL.registerLesson({
  id:"iam/05-sso-federation", module:"iam", order:5,
  title:"单点登录与联合身份", minutes:3,
  keywords:["SSO","联合身份"],
  concept:"<p><gd data-term=\"sso\">单点登录(SSO)</gd>:登录一次,畅通访问多个系统;企业里常用,体验好也便于统一管控(配合 <gd data-term=\"mfa\">MFA</gd> 在入口处一次性加固)。</p>",
  core:"<p>跨组织时则用\"联合身份\"(如 OAuth/OIDC、SAML):用你在某身份提供方的账号去登录第三方应用,就是\"用微信/Google 登录\"的企业版。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>SSO 是把双刃剑:一处加固全盘受益,但那个主账号一旦失守,所有系统跟着沦陷。所以 SSO 主账号必须最高级别保护 + 强 MFA。</div>",
  links:"<p>登录之后,你能干什么由授权模型决定。</p>"
});
