/* appsec/07-container-cloud-native (自动生成) */
ISL.registerLesson({
  id:"appsec/07-container-cloud-native", module:"appsec", order:7,
  title:"容器与云原生安全", minutes:3,
  keywords:["容器","K8s"],
  concept:"<p><gd data-term=\"container\">容器</gd>(Docker)和编排系统 <gd data-term=\"kubernetes\">Kubernetes</gd>让部署高效,但也带来新攻击面:镜像里的漏洞、配置不当、容器逃逸、K8s 权限失控。</p>",
  core:"<p>要点:用可信的最小镜像、扫描镜像漏洞、不以 root 跑容器、收紧 K8s 的 RBAC 和网络策略、管好密钥(别塞进镜像)。本质还是最小权限 + 减少攻击面。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>从公开仓库随手 pull 一个镜像就上生产,等于把别人的代码连同潜在后门一起请进来。镜像必须来源可信并扫描。</div>",
  links:"<p>这些防护怎么落到代码层面?靠代码审计与扫描。</p>"
});
