/* crypto/03-asymmetric (自动生成) */
ISL.registerLesson({
  id:"crypto/03-asymmetric", module:"crypto", order:3,
  title:"非对称加密(公钥密码)", minutes:5,
  keywords:["非对称","公钥","RSA"],
  concept:"<p><gd data-term=\"asymmetric\">非对称加密</gd>用<b>一对</b>密钥:公钥可以公开,私钥自己藏好。公钥加密的只有私钥能解,反之亦然。代表是 RSA、ECC(国密 SM2)。</p>",
  core:"<p>它一举解决了密钥分发:别人用你<b>公开的</b>公钥加密发给你,只有你的私钥能解。1976 年的这个思想(Diffie-Hellman)是现代密码学的分水岭。</p><div class=\"ex\">公开的投信口谁都能投(公钥加密),但只有你有开信箱的钥匙(私钥解密)。</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>非对称运算慢,不适合加密大文件。真实做法是\"混合加密\":用非对称安全地传一把临时对称密钥,再用对称加密传数据——HTTPS 就是这么干的。</div>",
  links:"<p>加密管保密,那\"有没有被改过\"靠什么?哈希。</p>"
});
