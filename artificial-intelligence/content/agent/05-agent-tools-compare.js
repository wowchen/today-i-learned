/* agent/05-agent-tools-compare (自动生成) */
AIX.registerLesson({
  id:"agent/05-agent-tools-compare", module:"agent", order:5,
  title:"主流编程智能体对比", minutes:5,
  keywords:["对比","Claude Code","Codex"],
  concept:"<p>同是\"会写代码的智能体\",不同产品在<b>形态、自主程度、生态</b>上各有侧重。下面横向看几个代表(口径截至 2026 年初,产品演进很快)。</p>",
  core:"<table><thead><tr><th>工具</th><th>形态/出身</th><th>特点</th></tr></thead><tbody><tr><td><b>Claude Code</b></td><td>Anthropic 官方,命令行/IDE 终端</td><td>背靠 Claude,擅长在<b>真实代码库里多步自主修改</b>、跑测试闭环;偏\"给目标它自己干到好\"。</td></tr><tr><td><b>Codex</b></td><td>OpenAI 谱系的编程智能体</td><td>背靠 GPT 系模型,代码生成与补全能力强,生态和集成广。</td></tr><tr><td><b>OpenClaw</b></td><td>开放/可自托管路线</td><td>强调<b>开放与可定制</b>,可对接多种模型与工具链,适合想自己掌控栈的团队。</td></tr><tr><td><b>Hermes</b></td><td>偏轻量/可集成的智能体</td><td>主打<b>易接入与灵活编排</b>,适合嵌进已有工作流。</td></tr></tbody></table><p>共性都是\"模型 + 工具 + 循环\"那一套;差异主要在<b>背后用哪个模型、自主程度多高、开放还是封闭、生态多大</b>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>别迷信\"哪个最强\"的横评。它们都在飞速迭代,且强弱高度依赖<b>你的代码栈和任务类型</b>。务实做法:拿你真实的几个任务各试一遍,看哪个在你的项目里最顺手。</div>",
  links:"<p>多个智能体还能组队协作,下一课讲。</p>"
});
