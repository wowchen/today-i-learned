/* endpoint/03-ransomware (自动生成) */
ISL.registerLesson({
  id:"endpoint/03-ransomware", module:"endpoint", order:3,
  title:"勒索软件", minutes:4,
  keywords:["勒索软件"],
  concept:"<p><gd data-term=\"ransomware\">勒索软件</gd>加密你的文件,再勒索赎金换解密钥匙;近年还流行\"双重勒索\"——先偷一份再加密,不给钱就公开。</p>",
  core:"<p>它已是企业头号灾难之一,能让医院、工厂直接停摆。最有效的底牌是<b>可靠的离线备份</b>:能恢复,就不必交赎金。再配合补丁、最小权限、<gd data-term=\"edr\">EDR</gd>、网络分段限制扩散。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>备份如果和生产系统连在一起、能被同一把账号删除,勒索软件会顺手把备份也加密。备份必须离线或不可篡改,并定期演练恢复——没演练过的备份等于没有。</div>",
  links:"<p>对付这些恶意软件,防护工具也在进化。</p>"
});
