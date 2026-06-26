/* appsec/06-supply-chain (自动生成) */
ISL.registerLesson({
  id:"appsec/06-supply-chain", module:"appsec", order:6,
  title:"软件供应链安全", minutes:4,
  keywords:["供应链","SBOM"],
  concept:"<p><gd data-term=\"supply-chain\">供应链攻击</gd>不直接打你,而是攻你信任的上游:开源库、依赖、构建工具、软件更新。一处被污染,所有用它的人遭殃(SolarWinds、Log4Shell 即是)。</p>",
  core:"<p>现代软件 80% 以上是第三方代码。应对:维护<gd data-term=\"sbom\">SBOM</gd>(配料表,知道自己用了啥)、扫依赖漏洞、校验来源与签名、锁定版本、减少不必要的依赖。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"我们自己代码很干净\"不代表安全——你引入的某个不起眼的小依赖,可能正藏着后门。看不见的依赖,才是最大的风险。</div>",
  links:"<p>现代应用大多跑在容器和云原生环境里。</p>"
});
