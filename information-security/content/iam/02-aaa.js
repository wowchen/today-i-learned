/* iam/02-aaa (自动生成) */
ISL.registerLesson({
  id:"iam/02-aaa", module:"iam", order:2,
  title:"认证、授权、审计(AAA)", minutes:3,
  keywords:["AAA","认证","授权"],
  concept:"<p>访问控制三件套 <gd data-term=\"aaa\">AAA</gd>:<gd data-term=\"authentication\">认证</gd>(你是谁)、<gd data-term=\"authorization\">授权</gd>(你能干什么)、审计(你干了什么,留痕)。</p>",
  core:"<p>三者缺一不可:只认证不授权,人人进来为所欲为;只授权不审计,出了事查不到谁干的。安全的访问 = 验明身份 + 给最小权限 + 全程留痕。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>很多系统认证做得很严,审计却近乎空白。没有完整日志,事后既无法溯源也无法举证——<gd data-term=\"audit\">审计</gd>不是可选项。</div>",
  links:"<p>认证的第一关,是大家又爱又恨的口令。</p>"
});
