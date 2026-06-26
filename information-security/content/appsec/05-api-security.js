/* appsec/05-api-security (自动生成) */
ISL.registerLesson({
  id:"appsec/05-api-security", module:"appsec", order:5,
  title:"API 安全", minutes:3,
  keywords:["API"],
  concept:"<p><gd data-term=\"api-security\">API</gd>是应用对外的\"服务窗口\"。前后端分离、微服务、开放平台让 API 暴增,也成了重灾区——很多数据泄露就是 API 越权造成的。</p>",
  core:"<p>重点防:认证授权(每个接口都要校验身份和权限)、越权(别只靠前端隐藏)、限流防滥用、参数校验、别在返回里多给字段。OWASP 还专门出了 API Top 10。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>最经典的 API 漏洞:改一下 URL 里的 ID(从 user/1 改成 user/2)就能看别人数据——这叫越权(IDOR)。每次访问都要在服务端校验\"这条数据是不是你的\"。</div>",
  links:"<p>你用的每个第三方库,都是别人的代码——供应链风险。</p>"
});
