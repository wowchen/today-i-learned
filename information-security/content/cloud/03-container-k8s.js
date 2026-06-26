/* cloud/03-container-k8s (自动生成) */
ISL.registerLesson({
  id:"cloud/03-container-k8s", module:"cloud", order:3,
  title:"容器与 K8s 安全(云上视角)", minutes:3,
  keywords:["容器","Kubernetes"],
  concept:"<p>在云上,<gd data-term=\"kubernetes\">Kubernetes</gd>几乎是标配,但它组件多、配置复杂,默认配置往往不安全,是云原生攻击的高频入口。</p>",
  core:"<p>关键收口:收紧 RBAC(别给 cluster-admin 满天飞)、开启网络策略隔离 Pod、用密钥管理而非明文 Secret、限制容器权限、扫描镜像。与应用安全模块的容器课互为补充。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>K8s 的 Dashboard 或 API Server 暴露在公网且无认证,等于把整个集群拱手让人——这类事故屡见不鲜。管理面必须严格收口。</div>",
  links:"<p>除了云,海量联网小设备也在扩大攻击面。</p>"
});
