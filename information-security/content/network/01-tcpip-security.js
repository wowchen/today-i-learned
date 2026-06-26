/* network/01-tcpip-security (自动生成) */
ISL.registerLesson({
  id:"network/01-tcpip-security", module:"network", order:1,
  title:"TCP/IP 为什么天生不安全", minutes:4,
  keywords:["TCP/IP","协议"],
  concept:"<p>互联网的底层协议(TCP/IP)设计于\"大家都是好人\"的年代,默认<b>不加密、不验身份</b>——这是很多网络攻击的根源。</p>",
  core:"<p>于是数据可能被窃听、被伪造来源(IP 欺骗)、被中间人篡改。后来的补丁就是在上面加一层:用 <gd data-term=\"tls\">TLS</gd> 加密、用 <gd data-term=\"vpn\">VPN</gd> 建隧道、用各种机制验真。理解\"底层不可信\"是网络安全的起点。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>在公共 Wi-Fi 上访问没有 HTTPS 的网站,等于把账号密码喊给全场听。\"能上网\"不代表\"安全上网\"。</div>",
  links:"<p>守住网络的第一道经典关卡,是防火墙。</p>"
});
