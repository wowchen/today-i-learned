/* agent/04-coding-agents (自动生成) */
AIX.registerLesson({
  id:"agent/04-coding-agents", module:"agent", order:4,
  title:"编程智能体", minutes:4,
  keywords:["编程智能体","coding"],
  concept:"<p>编程是智能体目前<b>最成熟、最能打</b>的战场:因为代码有\"客观裁判\"——能不能运行、测试过不过——天然适合<gd data-term=\"loop-engineering\">循环纠错</gd>。</p>",
  core:"<p>典型工作方式:你提需求(\"加个登录功能\"\"修这个 bug\"),它读代码库、定位相关文件、动手改、跑测试,见到报错再改,直到通过。它把\"想方案\"和\"动手敲+验证\"合在一起,大幅提速。</p><p>这正是<gd data-term=\"harness-engineering\">框架</gd>和<gd data-term=\"loop-engineering\">循环</gd>两层工程的集中体现:模型出主意,外围系统负责真正读写文件、执行、回传结果。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>编程智能体很强,但<b>不能放养</b>。它可能改坏没覆盖到的地方、引入隐蔽 bug、或自信地用了过时写法。人要做代码审查和把关,尤其在生产代码上。</div>",
  links:"<p>市面上的编程智能体各有特点,下一课横向对比。</p>"
});
