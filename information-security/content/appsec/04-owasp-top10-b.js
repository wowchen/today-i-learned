/* appsec/04-owasp-top10-b (自动生成) */
ISL.registerLesson({
  id:"appsec/04-owasp-top10-b", module:"appsec", order:4,
  title:"OWASP Top 10(下)", minutes:4,
  keywords:["OWASP","Web安全"],
  concept:"<p><gd data-term=\"owasp-top10\">OWASP Top 10</gd>后半:</p>",
  core:"<ul><li><b>易受攻击的组件</b>:用了带漏洞的第三方库(见<gd data-term=\"supply-chain\">供应链</gd>)。</li><li><b>认证与会话失效</b>:弱口令、会话可被劫持。</li><li><b>软件和数据完整性失败</b>:更新/依赖未校验,可被投毒。</li><li><b>日志与监控不足</b>:出了事都不知道。</li><li><b>服务端请求伪造 SSRF</b>:诱使服务器去访问内部资源。</li></ul>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>清单会按版本更新,别死记条目。要抓住背后的共性:不可信输入、缺失校验、配置疏忽、可见性不足——理解病理比背名词管用。</div>",
  links:"<p>应用之间靠 API 相连,API 安全单独要讲。</p>"
});
