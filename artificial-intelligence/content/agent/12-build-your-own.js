/* agent/12-build-your-own (自动生成) */
AIX.registerLesson({
  id:"agent/12-build-your-own", module:"agent", order:12,
  title:"自己动手搭第一个 Agent", minutes:5,
  keywords:["实践","工具调用","循环"],
  concept:"<p>把概念落地:写一个能调 API、读文件、自我反思的最小 Agent,你才能真正理解\"循环\"是怎么回事。</p>",
  core:"<p>最小实现四件套:<b>① LLM 调用</b>(调<gd data-term=\"api\">API</gd>);<b>② 工具</b>(读文件、算数、搜索——把能力补全);<b>③ 循环</b>(思考→行动→观察结果→再思考);<b>④ 停止条件</b>(完成或超限)。</p><p>一个 20-50 行的例子:让它\"统计某目录下所有文件的行数并生成报告\"——它会自己决定读哪些文件、算总数、格式化输出。进阶玩法:加上记忆(把中间结果存起来)、自我反思(检查上一步结果再继续)、接入 MCP 工具、多 Agent 分工。</p>",
  pitfalls:"<div class=\"ex\">先手写这个循环理解原理,再上 LangGraph、OpenAI Agents 这类框架——顺序反了,你会被框架绕晕。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>别一上来就上复杂框架;一定要测边界:工具报错怎么办、循环卡死怎么办、遇到恶意输入怎么办。能把这三个问题接住,你的 Agent 才算\"能干活\"。</div>"
});
