/* crypto/08-key-management (自动生成) */
ISL.registerLesson({
  id:"crypto/08-key-management", module:"crypto", order:8,
  title:"密钥管理:真正的难点", minutes:4,
  keywords:["密钥管理"],
  concept:"<p>密码学里算法很少被攻破,出事的几乎都是<gd data-term=\"key-management\">密钥管理</gd>:密钥怎么生成、分发、保存、轮换、销毁。</p>",
  core:"<p>原则:密钥要随机、要分级、不能硬编码在代码里、要定期轮换、用专门的密钥库或硬件(HSM/KMS)保管,且与被加密的数据分开存放。</p><div class=\"ex\">把保险柜钥匙贴在保险柜上,柜子再厚也没用——密钥和密文存一起就是这个道理。</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>最常见的真实事故:把 API Key、私钥提交到 Git 仓库。扫描机器人几分钟就能发现并利用。一旦泄露,立刻吊销+轮换,别心存侥幸。</div>",
  links:"<p>密码学打好底,接下来看它守护的第一道场:<a href=\"#/m/network\">网络</a>。</p>"
});
