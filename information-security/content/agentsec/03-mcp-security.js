/* agentsec/03-mcp-security (自动生成) */
ISL.registerLesson({
  id:"agentsec/03-mcp-security", module:"agentsec", order:3,
  title:"MCP 安全", minutes:5,
  keywords:["MCP","协议"],
  concept:"<p><gd data-term=\"mcp\">MCP</gd>(模型上下文协议)是让智能体标准化连接外部工具和数据的\"统一插座\"。它极大降低了接工具的成本,也因此成了新的攻击面。</p>",
  core:"<p>主要风险:① 恶意或被攻陷的 MCP 服务器(你接入的工具本身就是坏的);② 工具描述里藏<gd data-term=\"prompt-injection\">提示词注入</gd>(模型读工具说明时被劫持);③ 过度授权;④ 凭据经 MCP 泄露;⑤ 来源不明的 MCP 像不明 App 一样有<gd data-term=\"supply-chain\">供应链</gd>风险。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>从网上随手接一个 MCP 服务器,等于把一个第三方插进了你的工具链和数据流。接入前要核实来源、读懂它要的权限、在隔离环境里先验证——别看着方便就一键接入。</div>",
  links:"<p>多个智能体协作时,风险又会传染。</p>"
});
