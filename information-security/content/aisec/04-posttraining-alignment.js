/* aisec/04-posttraining-alignment (自动生成) */
ISL.registerLesson({
  id:"aisec/04-posttraining-alignment", module:"aisec", order:4,
  title:"后训练与对齐:RLHF 与越狱", minutes:4,
  keywords:["后训练","对齐","RLHF"],
  concept:"<p>预训练出的\"原始\"模型什么都说,需要<b>后训练</b>做<gd data-term=\"alignment\">对齐</gd>——用 <gd data-term=\"rlhf\">RLHF</gd>(人类反馈强化学习)等手段,让它更有用、更守规矩、不作恶。</p>",
  core:"<p>但对齐不是铁板一块:<gd data-term=\"jailbreak\">越狱</gd>就是用角色扮演、绕弯、特殊编码等话术,诱导模型绕过安全限制说出不该说的。对齐与越狱是一场持续的攻防。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"模型很安全,因为它会拒绝坏请求\"是脆弱的假设。对齐是概率性的护栏,不是硬性权限。换个说法、套层故事就可能绕过——安全不能只靠模型\"自觉\"。</div>",
  links:"<p>部署后,最典型的新型攻击是提示词注入。</p>"
});
