/* basics/01-cia (自动生成) */
ISL.registerLesson({
  id:"basics/01-cia", module:"basics", order:1,
  title:"CIA 三要素", minutes:4,
  keywords:["CIA","机密性","完整性","可用性"],
  concept:"<p>信息安全万变不离其宗,目标就三个,合称 <gd data-term=\"cia\">CIA 三要素</gd>。</p>",
  core:"<ul><li><gd data-term=\"confidentiality\">机密性</gd>:不该看的人看不到(靠加密、访问控制)。</li><li><gd data-term=\"integrity\">完整性</gd>:信息不被偷偷篡改,且改了能发现(靠<gd data-term=\"hash\">哈希</gd>、<gd data-term=\"digital-signature\">签名</gd>)。</li><li><gd data-term=\"availability\">可用性</gd>:需要时用得上(靠备份、抗 <gd data-term=\"ddos\">DDoS</gd>、冗余)。</li></ul><p>很多安全措施,本质都是在这三个维度里做取舍。",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>三者常常互相拉扯:为了机密性把系统锁得太死,可用性就受损。安全不是把门焊死,而是在三者间找平衡。</div>",
  links:"<p>明确了目标,下一课看安全的\"算账公式\":风险。</p>"
});
