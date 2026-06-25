/* agent/03-tool-use-mcp (自动生成) */
AIX.registerLesson({
  id:"agent/03-tool-use-mcp", module:"agent", order:3,
  title:"工具调用与 MCP", minutes:4,
  keywords:["工具调用","MCP"],
  concept:"<p>智能体靠<gd data-term=\"tool-use\">工具调用</gd>来突破\"只会生成文字\"的局限:需要算就调计算器,需要查就调搜索,需要改文件就调文件接口。<gd data-term=\"mcp\">MCP</gd>则是让这些工具能<b>标准化接入</b>的开放协议。</p>",
  core:"<p>没有统一标准时,每接一个工具都要单独适配,又乱又重复。MCP(模型上下文协议)就像给 AI 定了个\"<b>万能插座标准</b>\":工具按这个标准做好接口,任何支持 MCP 的模型都能即插即用——查数据库、读文档、控浏览器、连企业系统。</p><p>这让智能体的能力可以像装插件一样不断扩展,也是当前生态快速繁荣的原因之一。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>每多给一个工具权限,就多一分风险。一个能\"删文件\"\"发邮件\"\"花钱\"的智能体,一旦被<gd data-term=\"hallucination\">误判</gd>或被恶意网页里的指令带偏,后果是真实的。权限要按需最小化,危险动作要人工确认。</div>",
  links:"<p>智能体最成熟的落地场景,是写代码。</p>"
});
