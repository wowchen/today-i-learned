/* data/03-encryption-states (自动生成) */
ISL.registerLesson({
  id:"data/03-encryption-states", module:"data", order:3,
  title:"数据三态加密", minutes:4,
  keywords:["加密","三态"],
  concept:"<p>数据有三种状态,都要保护:<b>静态</b>(存盘)、<b>传输中</b>(在网上跑)、<b>使用中</b>(在内存里被处理)。</p>",
  core:"<ul><li><gd data-term=\"encryption-at-rest\">静态加密</gd>:硬盘/数据库加密,丢了设备也读不出。</li><li>传输加密:用 <gd data-term=\"tls\">TLS</gd> 等,防窃听篡改。</li><li>使用中:较难,靠机密计算/可信执行环境等新技术。</li></ul>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>很多人只做了传输加密(HTTPS)就以为万事大吉,数据库却是明文存的——一旦被拖库,等于门口加密、屋里裸奔。三态要一起看。</div>",
  links:"<p>有时数据要用、又不能暴露真值,这就靠脱敏。</p>"
});
