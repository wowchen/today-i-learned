/* eng/04-harness-engineering (自动生成) */
AIX.registerLesson({
  id:"eng/04-harness-engineering", module:"eng", order:4,
  title:"框架工程 Harness Engineering", minutes:4,
  keywords:["框架工程","harness","工具"],
  concept:"<p><gd data-term=\"harness-engineering\">框架工程</gd>是给模型搭好外面的\"脚手架/底盘\":<b>能调的</b><gd data-term=\"tool-use\">工具</gd><b>、执行环境、输入输出校验、权限和安全栏</b>,让它稳定可靠地干活。</p>",
  core:"<p>模型本身只会\"出主意\"(生成文本)。要它真办事,得有一套系统在外面接住:把它的输出解析成动作、调用相应工具、检查结果格式对不对、挡住危险操作、出错了兜底。这套\"发动机外面的整辆车\",就是 harness。</p><p>编程智能体就是典型:模型负责想怎么改代码,harness 负责真正读写文件、跑测试、把报错回传。<gd data-term=\"mcp\">MCP</gd>这类协议,正是为了让工具能标准化地接进这套框架。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>框架工程是\"可靠性\"的主战场,也最容易被低估。很多\"模型不行\"的体验,其实是 harness 没做好:没校验、没重试、没安全栏,导致它一出错就全盘崩。</div>",
  links:"<p>把\"行动→看结果→再行动\"接成闭环,就是最后一层:循环工程。</p>"
});
