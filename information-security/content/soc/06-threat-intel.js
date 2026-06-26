/* soc/06-threat-intel (自动生成) */
ISL.registerLesson({
  id:"soc/06-threat-intel", module:"soc", order:6,
  title:"威胁情报", minutes:3,
  keywords:["威胁情报"],
  concept:"<p><gd data-term=\"threat-intel\">威胁情报</gd>是关于攻击者是谁、用什么手法、有哪些痕迹(IOC)的\"可行动情报\"——相当于敌情通报,让你提前布防、精准检测。</p>",
  core:"<p>它分战略级(行业面临什么威胁)和战术级(某恶意 IP/域名/样本特征)。好的情报能让 SOC 从\"被动救火\"转向\"提前预警\",但要结合自身环境用,不能照单全收。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>买一堆情报源、把 IOC 一股脑塞进设备,只会制造海量误报。情报要经过筛选、关联自身资产才有价值——情报多不等于安全。</div>",
  links:"<p>真出事了,靠应急响应止血。</p>"
});
