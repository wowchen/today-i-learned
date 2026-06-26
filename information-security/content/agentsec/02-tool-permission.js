/* agentsec/02-tool-permission (自动生成) */
ISL.registerLesson({
  id:"agentsec/02-tool-permission", module:"agentsec", order:2,
  title:"工具调用与权限", minutes:4,
  keywords:["工具调用","权限"],
  concept:"<p>智能体靠<gd data-term=\"tool-use\">工具调用</gd>去执行真实操作。它能造成多大破坏,直接取决于你给了它哪些工具、多大权限——这正是最该收口的地方。</p>",
  core:"<p>原则还是<gd data-term=\"least-privilege\">最小权限</gd>:默认不给,按任务最小授予;危险操作(删除、外发、转账)走人工确认;给只读优先于给读写;能用受限沙箱就别给真环境。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>某些权限<b>组合</b>会拼出完整攻击链:\"读密钥 + 联网\" = 凭据外泄,\"执行命令 + 写文件\" = 落地后门。单看每项还好,组合起来致命。去<a href=\"#/lab/mcp\">MCP 权限可视化</a>体会一下。</div>",
  links:"<p>给智能体接工具的主流方式,是 MCP。</p>"
});
