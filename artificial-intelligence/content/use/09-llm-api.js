/* use/09-llm-api (自动生成) */
AIX.registerLesson({
  id:"use/09-llm-api", module:"use", order:9,
  title:"LLM API 应用开发", minutes:4,
  keywords:["API","应用开发","token"],
  concept:"<p>把大模型变成自己产品的\"大脑\":调<gd data-term=\"api\">API</gd>、管 <gd data-term=\"token\">token</gd>、要结构化输出——这是 AI 应用开发的基本功,也是产品/应用向岗位的日常。</p>",
  core:"<p><b>基本姿势</b>:给模型发请求(带系统提示+用户输入),拿回生成文本。计费按 token:输入+输出都算,长上下文和长输出都贵,所以\"少放无关内容\"就是省钱。<b>关键参数</b>:<gd data-term=\"temperature\">temperature</gd>(控制随机性)、max_tokens(限制输出长度)、system prompt(设定角色与规则)。</p><p><b>进阶</b>:结构化输出——让模型按 JSON 格式返回(或走 function calling),程序才能稳定解析;工程要点:超时重试、请求缓存、并发控制、成本监控。一个典型的应用:输入一段原始文本,输出\"摘要+要点+标签\"的结构化结果。</p>",
  pitfalls:"<div class=\"ex\">做一个\"工单摘要助手\":把工单原文丢进去,返回 {标题, 类别, 紧急度, 处理建议} 的 JSON,后续流程全靠它自动流转。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>最危险的用法是把模型输出直接当\"数据库或计算结果\"用。它可能编字段、格式走样、返回非法 JSON——前后端都要做校验与兜底;API 密钥绝不能写进前端代码。</div>"
});
