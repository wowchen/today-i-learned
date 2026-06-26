/* soc/08-forensics (自动生成) */
ISL.registerLesson({
  id:"soc/08-forensics", module:"soc", order:8,
  title:"数字取证", minutes:3,
  keywords:["取证","forensics"],
  concept:"<p><gd data-term=\"forensics\">数字取证</gd>是合规地收集、保全、分析电子证据,还原\"发生了什么、怎么发生的、损失多大\",并能用于追责或诉讼。</p>",
  core:"<p>核心原则:保持证据完整、不被污染,全程可追溯(证据链)。常分析磁盘镜像、内存、日志、流量。它既服务于应急复盘,也服务于法律。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>直接在原机器上操作、用错工具,会改变时间戳和数据,导致证据失效。取证要先做只读镜像、在副本上分析——\"动了原件\"在法庭上可能一票否决。</div>",
  links:"<p>想把这些能力系统化、并证明给雇主,就需要认证——进入<a href=\"#/m/cisp\">CISP/CISSP 专题</a>。</p>"
});
