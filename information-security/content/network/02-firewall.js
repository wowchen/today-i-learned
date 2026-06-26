/* network/02-firewall (自动生成) */
ISL.registerLesson({
  id:"network/02-firewall", module:"network", order:2,
  title:"防火墙", minutes:3,
  keywords:["防火墙"],
  concept:"<p><gd data-term=\"firewall\">防火墙</gd>是按规则放行/拦截网络流量的关卡,决定\"谁能和谁通信、走哪个端口\"。</p>",
  core:"<p>从早期只看 IP 和端口,发展到能看应用内容的\"下一代防火墙\"(NGFW),还能识别应用、过滤恶意网址。它是边界防御的基石,但只是<b>一层</b>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>防火墙挡的是\"不该进来的连接\",挡不住\"你主动连出去的坏东西\"(比如点开恶意链接)。也别在防火墙上图省事开一堆\"any-any\"放行规则,那等于没装。</div>",
  links:"<p>防火墙管放行,谁来发现\"放进来的是坏人\"?IDS/IPS。</p>"
});
