/* use/10-vibe-coding (自动生成) */
AIX.registerLesson({
  id:"use/10-vibe-coding", module:"use", order:10,
  title:"vibe coding 与 AI 工作流", minutes:4,
  keywords:["vibe coding","编程","工作流"],
  concept:"<p>用自然语言让 AI 写代码、人负责验证和迭代——<gd data-term=\"vibe-coding\">氛围编程</gd>正在改写\"会不会编程\"的定义。</p>",
  core:"<p><b>工具</b>:Claude Code、Cursor、Copilot 这类 AI 编程工具,已从\"补全几行\"进化到\"按需求生成整个文件、跑测试、改 bug\"。<b>姿势</b>:像指挥一个聪明的实习生——需求讲清楚、让它先出骨架、人 review 再让它改;不要让它\"一口气写完整个项目\"就撒手。</p><p><b>价值</b>:不会写代码的人也能快速做原型;开发者效率翻倍,把精力留给架构和评审。<b>边界</b>:生产代码、安全相关代码必须人审;DeepSeek 招聘里明确写\"会用 vibe coding、深度使用 Agent 工具是加分项\"——这是当前行业的真实信号。</p>",
  pitfalls:"<div class=\"ex\">一句话\"做一个带进度条和打卡统计的学习页\"→ AI 生成页面 → 人改样式、加数据 → 上线。原型阶段快得惊人。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>vibe coding 不是\"完全不用看代码\"。不读懂就上线,出问题时只会更糟;还要先向 AI 说清安全红线(别把密钥写进代码、别用不安全的库)。</div>"
});
