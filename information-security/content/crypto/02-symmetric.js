/* crypto/02-symmetric (自动生成) */
ISL.registerLesson({
  id:"crypto/02-symmetric", module:"crypto", order:2,
  title:"对称加密", minutes:4,
  keywords:["对称","AES"],
  concept:"<p><gd data-term=\"symmetric\">对称加密</gd>:加密和解密用<b>同一把密钥</b>。代表是 AES(国密对应 SM4)。</p>",
  core:"<p>优点是快,适合加密大量数据(硬盘、数据库、流量)。难点在<b>密钥怎么安全地给对方</b>——总不能把钥匙和锁一起寄。这正是下一课非对称加密要解决的。</p><div class=\"ex\">同一把钥匙既能锁门也能开门:你和对方都得有,可怎么把这把钥匙安全交到对方手里?</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>密钥一旦泄露,加密就形同虚设;而且很多事故不是算法被破,是密钥被硬编码在代码里、传到了公开仓库。</div>",
  links:"<p>密钥分发的世纪难题,被公钥密码优雅解决了。</p>"
});
