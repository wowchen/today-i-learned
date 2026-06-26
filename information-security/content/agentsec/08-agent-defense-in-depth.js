/* agentsec/08-agent-defense-in-depth (自动生成) */
ISL.registerLesson({
  id:"agentsec/08-agent-defense-in-depth", module:"agentsec", order:8,
  title:"智能体纵深防御", minutes:4,
  keywords:["纵深防御","智能体"],
  concept:"<p>智能体安全没有银弹,要把前面各招叠成<gd data-term=\"defense-in-depth\">纵深防御</gd>。把它当成\"一个会被话术诱导、但拿着真实权限的新员工\"来设计防线。</p>",
  core:"<ul><li><b>权限</b>:<gd data-term=\"least-privilege\">最小权限</gd>,危险操作要审批。</li><li><b>隔离</b>:不可信内容当数据不当指令;在沙箱里跑。</li><li><b>人在环</b>:不可逆操作留人工闸。</li><li><b>校验与审计</b>:输入输出过滤、出站白名单、全程留痕。</li><li><b>供应链</b>:工具/MCP/插件来源可信、权限受控。</li></ul>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>任何单独一道都能被绕过——只靠对齐、只靠提示词防护、只靠人工确认都不够。把它们叠起来,让攻击者必须同时击穿多层,这才是 AI 时代安全的正解。</div>",
  links:"<p>恭喜读到这里。回<a href=\"#/\">首页</a>看看进度,或去<a href=\"#/lab\">实验室</a>把几个演示都玩一遍。安全是持续的功课,常来复习。</p>"
});
