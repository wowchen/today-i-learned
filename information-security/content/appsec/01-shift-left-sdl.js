/* appsec/01-shift-left-sdl (自动生成) */
ISL.registerLesson({
  id:"appsec/01-shift-left-sdl", module:"appsec", order:1,
  title:"安全左移与 SDL", minutes:3,
  keywords:["SDL","安全左移"],
  concept:"<p><gd data-term=\"sdl\">安全开发生命周期(SDL)</gd>把安全活动嵌入需求、设计、编码、测试、上线全过程,而不是等上线了再\"挑漏洞补窟窿\"。</p>",
  core:"<p>这就是\"安全左移\":越早发现问题,修起来越便宜。需求阶段做<gd data-term=\"threat-modeling\">威胁建模</gd>、编码阶段做代码审查、上线前做安全测试,层层把关。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>把安全当成上线前最后一道\"过检\"环节,是最贵的做法:此时改架构成本极高,往往只能打补丁带病上线。安全要从第一行代码之前就开始。</div>",
  links:"<p>把这套思路自动化进流水线,就是 DevSecOps。</p>"
});
