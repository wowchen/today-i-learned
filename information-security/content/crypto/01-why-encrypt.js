/* crypto/01-why-encrypt (自动生成) */
ISL.registerLesson({
  id:"crypto/01-why-encrypt", module:"crypto", order:1,
  title:"加密到底在保护什么", minutes:4,
  keywords:["加密","密码学"],
  concept:"<p><gd data-term=\"crypto\">密码学</gd>不只是\"加密看不懂\",它用数学同时撑起 <gd data-term=\"cia\">CIA</gd> 里的多项目标:保密、防篡改、证身份、防抵赖。</p>",
  core:"<p>三大基本工具:<gd data-term=\"symmetric\">对称加密</gd>和<gd data-term=\"asymmetric\">非对称加密</gd>管<b>机密性</b>,<gd data-term=\"hash\">哈希</gd>管<b>完整性</b>,<gd data-term=\"digital-signature\">数字签名</gd>管<b>身份与不可抵赖</b>。后面几课逐个拆开。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>别自己发明加密算法。\"看起来很乱\"不等于安全,业余算法几乎都能被破。永远用经过公开审查的标准算法(AES、RSA、SM 系列)。</div>",
  links:"<p>先看最直观的一种:对称加密。</p>"
});
