/* crypto/06-pki-tls (自动生成) */
ISL.registerLesson({
  id:"crypto/06-pki-tls", module:"crypto", order:6,
  title:"PKI 与 TLS/HTTPS", minutes:4,
  keywords:["PKI","TLS","HTTPS"],
  concept:"<p><gd data-term=\"pki\">PKI</gd>是发证书、管密钥、验身份的一整套基础设施;<gd data-term=\"tls\">TLS</gd>则是用它给通信加密的协议,浏览器地址栏的小锁就是它。</p>",
  core:"<p>你访问 HTTPS 网站时,TLS 干三件事:用证书<b>验明网站身份</b>、用非对称<b>协商出一把对称密钥</b>、之后用对称加密<b>高速传输</b>。三步合一,既安全又快。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>HTTPS 只保证\"传输过程\"加密,不保证\"网站本身\"可信——钓鱼网站也能有合法证书的小锁。看到锁,仍要核对域名。</div>",
  links:"<p>这些算法都有国产标准对应,下一课认识国密。</p>"
});
