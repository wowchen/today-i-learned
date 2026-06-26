/* crypto/07-sm-crypto (自动生成) */
ISL.registerLesson({
  id:"crypto/07-sm-crypto", module:"crypto", order:7,
  title:"国密算法 SM 系列", minutes:3,
  keywords:["国密","SM2","SM3","SM4"],
  concept:"<p><gd data-term=\"sm-crypto\">国密算法</gd>是中国自主的商用密码标准,核心三件套:<b>SM2</b>(非对称,对标 RSA/ECC)、<b>SM3</b>(哈希,对标 SHA-256)、<b>SM4</b>(对称,对标 AES)。</p>",
  core:"<p>在政务、金融、关键信息基础设施等领域,<gd data-term=\"compliance\">合规</gd>要求使用国密。《密码法》(2020)进一步把密码应用纳入法律框架。从原理上,SM 系列与国际算法同类、强度相当。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"国密\"不是把国际算法换个名字,而是独立设计的标准;但用法上的坑一样:再好的算法,密钥管理拉胯也白搭。</div>",
  links:"<p>说到密钥管理——这才是密码学真正的难点。</p>"
});
