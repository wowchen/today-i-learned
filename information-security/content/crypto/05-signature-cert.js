/* crypto/05-signature-cert (自动生成) */
ISL.registerLesson({
  id:"crypto/05-signature-cert", module:"crypto", order:5,
  title:"数字签名与证书", minutes:4,
  keywords:["签名","证书"],
  concept:"<p><gd data-term=\"digital-signature\">数字签名</gd>:用<b>私钥</b>给数据的哈希加密,别人用你的<b>公钥</b>一验,就能确认\"确实是你发的,且没被改过\"。</p>",
  core:"<p>但问题来了:你怎么知道这个公钥真是\"他\"的、不是冒充的?这就需要<gd data-term=\"certificate\">数字证书</gd>——由权威机构(CA)签发,把公钥和身份绑定,相当于公钥的\"身份证\"。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>收到\"证书错误/不受信任\"的警告别习惯性点忽略——这可能正是有人在中间冒充。证书过期、自签、域名不符都会触发,要分清是配置问题还是攻击。</div>",
  links:"<p>管理这些证书和公钥的一整套体系,叫 PKI;它最常见的应用就是 HTTPS。</p>"
});
