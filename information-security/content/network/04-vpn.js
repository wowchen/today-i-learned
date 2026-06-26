/* network/04-vpn (自动生成) */
ISL.registerLesson({
  id:"network/04-vpn", module:"network", order:4,
  title:"VPN 与加密隧道", minutes:3,
  keywords:["VPN","隧道"],
  concept:"<p><gd data-term=\"vpn\">VPN</gd>在不可信的公网上,建一条加密隧道,让远程用户/分支像在内网一样安全访问。</p>",
  core:"<p>它解决了\"在外面也能安全连回来\"的问题,曾是远程办公标配。但 VPN 一旦接入往往给的是\"大范围内网通行证\",和<gd data-term=\"zero-trust\">零信任</gd>\"按需最小授权\"的理念相悖,正逐步被零信任接入取代。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>企业 VPN 与市面上\"翻墙/匿名 VPN\"是两码事。后者把你的全部流量交给一个陌生服务商,可能比不用更危险。</div>",
  links:"<p>有人不偷不抢,只想把你搞瘫——这就是 DDoS。</p>"
});
