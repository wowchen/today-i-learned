/* iam/04-mfa (自动生成) */
ISL.registerLesson({
  id:"iam/04-mfa", module:"iam", order:4,
  title:"多因素认证(MFA)", minutes:3,
  keywords:["MFA","双因素"],
  concept:"<p><gd data-term=\"mfa\">多因素认证</gd>要求两种以上凭证:你<b>知道的</b>(密码)、你<b>拥有的</b>(手机/硬件密钥)、你<b>本身的</b>(指纹/人脸)。即使密码被偷,缺了第二因子也进不来。</p>",
  core:"<p>它是性价比最高的账号保护措施,能挡住绝大多数撞库和钓鱼。优先级:硬件密钥(FIDO2)> 认证器 App > 短信验证码。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>短信验证码可被 SIM 劫持或钓鱼实时转发,是最弱的一种 MFA——聊胜于无,但关键账号请用认证器或硬件密钥。</div>",
  links:"<p>账号多了,逐个登录太烦,于是有了单点登录。</p>"
});
