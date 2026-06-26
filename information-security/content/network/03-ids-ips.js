/* network/03-ids-ips (自动生成) */
ISL.registerLesson({
  id:"network/03-ids-ips", module:"network", order:3,
  title:"入侵检测与防御(IDS/IPS)", minutes:3,
  keywords:["IDS","IPS"],
  concept:"<p><gd data-term=\"ids\">入侵检测(IDS)</gd>发现可疑流量就<b>报警</b>;<gd data-term=\"ips\">入侵防御(IPS)</gd>更进一步,直接<b>拦截</b>。</p>",
  core:"<p>它们靠特征库(已知攻击的\"通缉令\")和异常检测(行为不对劲)工作。IDS 像报警器,IPS 像会顺手锁门的报警器。现代多融合进统一的网络安全平台。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>纯靠特征库只能挡\"已知\"攻击,对 <gd data-term=\"zero-day\">零日漏洞</gd>无能为力;而异常检测又容易误报。两者要结合,且需要人去运营,不是装上就万事大吉。</div>",
  links:"<p>要安全地把分支或远程连进来,靠 VPN。</p>"
});
