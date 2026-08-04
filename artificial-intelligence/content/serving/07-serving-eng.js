/* serving/07-serving-eng (自动生成) */
AIX.registerLesson({
  id:"serving/07-serving-eng", module:"serving", order:7,
  title:"推理服务工程", minutes:4,
  keywords:["vLLM","批处理","服务"],
  concept:"<p>把模型变成\"随时可用的服务\":<gd data-term=\"vllm\">vLLM</gd>这类推理引擎,用<gd data-term=\"continuous-batching\">连续批处理</gd>和高效率的 KV 管理,把吞吐拉满。</p>",
  core:"<p>朴素批处理的问题:要等人齐才开工,早到的人干等。连续批处理:谁算完谁走、新请求随时插队——吞吐提升数倍。<b>vLLM</b> 的核心是 PagedAttention:像操作系统管理内存一样分页管理 KV 缓存,显存利用率大幅提升。</p><p>再往上还有工程细节:<b>PD 分离</b>(预填充与生成分开部署,互不拖累)、负载均衡、限流、监控。看一个推理服务好不好,盯两个指标:<b>TTFT</b>(首 token 时延,用户\"第一字\"等待时间)和 <b>TPOT</b>(每个 token 的生成时延)。</p>",
  pitfalls:"<div class=\"ex\">同一块 GPU,朴素批处理可能每秒服务 10 个请求,换 vLLM+连续批处理能到 50-100 个——工程优化的收益是数量级的。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>服务工程的坑:显存碎片、长请求拖垮短请求、冷启动慢、并发尖峰打爆。上线前一定要压测,别只在 demo 里\"看起来很快\"。</div>"
});
