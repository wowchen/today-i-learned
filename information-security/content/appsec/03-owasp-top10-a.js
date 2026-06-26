/* appsec/03-owasp-top10-a (自动生成) */
ISL.registerLesson({
  id:"appsec/03-owasp-top10-a", module:"appsec", order:3,
  title:"OWASP Top 10(上)", minutes:4,
  keywords:["OWASP","Web安全"],
  concept:"<p><gd data-term=\"owasp-top10\">OWASP Top 10</gd>是公认的 Web 应用十大风险清单,做应用安全的通用语言。先看前半:</p>",
  core:"<ul><li><b>失效的访问控制</b>:越权访问别人数据,常年第一。</li><li><b>加密失败</b>:该加密没加密、用了弱算法。</li><li><b>注入</b>:<gd data-term=\"sql-injection\">SQL 注入</gd>、命令注入等。</li><li><b>不安全设计</b>:架构层面就没考虑安全。</li><li><b>安全配置错误</b>:默认口令、开了调试接口。</li></ul>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"访问控制\"高居榜首说明:很多漏洞不是高深技术,而是\"忘了检查这个人有没有权限看这条数据\"。功能测了,权限边界却没测。</div>",
  links:"<p>接着看后半部分。</p>"
});
