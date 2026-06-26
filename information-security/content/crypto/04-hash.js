/* crypto/04-hash (自动生成) */
ISL.registerLesson({
  id:"crypto/04-hash", module:"crypto", order:4,
  title:"哈希:数据的指纹", minutes:4,
  keywords:["哈希","完整性"],
  concept:"<p><gd data-term=\"hash\">哈希</gd>把任意数据压成固定长度的\"指纹\",特点是:不可逆、改一个字指纹就大变、几乎不会两份不同数据撞成同一指纹。代表是 SHA-256(国密 SM3)。</p>",
  core:"<p>用途很广:校验文件有没有被篡改/传坏、存口令(存哈希不存明文)、<gd data-term=\"digital-signature\">数字签名</gd>的基础。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>MD5 和 SHA-1 已被攻破(中国学者王小云的工作),不能再用于安全场景。存口令也别只做一次哈希,要加盐再用专门的慢哈希(bcrypt/Argon2),否则挡不住彩虹表与暴力破解。</div>",
  links:"<p>哈希 + 非对称,合起来就是数字签名。</p>"
});
