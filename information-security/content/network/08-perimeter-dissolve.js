/* network/08-perimeter-dissolve (自动生成) */
ISL.registerLesson({
  id:"network/08-perimeter-dissolve", module:"network", order:8,
  title:"边界正在消失:SASE 与零信任网络", minutes:3,
  keywords:["SASE","零信任"],
  concept:"<p>云、移动办公、SaaS 普及后,\"公司内网 vs 外网\"的清晰边界没了——数据和用户到处都是。</p>",
  core:"<p>应对思路是把安全能力上云、贴近用户:<gd data-term=\"sase\">SASE</gd>把网络与安全(防火墙、网关、零信任接入)整合成云服务,谁在哪上网都先过这层\"随身保安\"。底色仍是<gd data-term=\"zero-trust\">零信任</gd>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"上了云/用了 SASE 就不用管网络安全了\"是误解。架构变了,责任和配置反而更需要看清,尤其是云上的<gd data-term=\"cloud-shared-responsibility\">责任共担</gd>边界。</div>",
  links:"<p>网络之外,攻击最终要落到一台台设备上——进入<a href=\"#/m/endpoint\">终端安全</a>。</p>"
});
