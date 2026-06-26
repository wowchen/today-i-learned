/* network/06-web-attacks (自动生成) */
ISL.registerLesson({
  id:"network/06-web-attacks", module:"network", order:6,
  title:"Web 三大经典攻击", minutes:5,
  keywords:["SQL注入","XSS","CSRF"],
  concept:"<p>Web 应用最常见的三类攻击,务必脸熟:</p>",
  core:"<ul><li><gd data-term=\"sql-injection\">SQL 注入</gd>:把恶意 SQL 混进输入,让数据库执行,可拖库或绕过登录。防御:参数化查询。</li><li><gd data-term=\"xss\">跨站脚本 XSS</gd>:把脚本注入网页,在别人浏览器里跑,可盗会话。防御:输出编码 + CSP。</li><li><gd data-term=\"csrf\">跨站请求伪造 CSRF</gd>:诱骗你已登录的浏览器去做你没想做的操作。防御:CSRF Token + SameSite Cookie。</li></ul><p>它们都属于 <gd data-term=\"owasp-top10\">OWASP Top 10</gd>,应用安全模块还会细讲。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>共同的病根是\"把用户输入当成可信的代码/指令\"。记住一句话:一切外部输入都不可信,必须校验和隔离。</div>",
  links:"<p>把这些手法组合起来、长期潜伏的,是 APT。</p>"
});
