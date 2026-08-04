/* serving/02-kv-cache (自动生成) */
AIX.registerLesson({
  id:"serving/02-kv-cache", module:"serving", order:2,
  title:"KV Cache 是什么", minutes:4,
  keywords:["KV Cache","显存","优化"],
  concept:"<p>生成时把算过的注意力键值缓存下来、避免重复计算——<gd data-term=\"kv-cache\">KV 缓存</gd>是推理加速最基础也最有效的优化。</p>",
  core:"<p>原理:生成第 N 个 token 时,前 N-1 个 token 的注意力键值(K 和 V)其实和上一步完全一样,没必要重算。<b>把 KV 缓存进显存,每个新 token 只需算新的一步</b>——速度提升一个数量级。</p><p>代价:显存。KV 缓存随上下文<b>线性增长</b>,长上下文时可能占掉十几甚至几十 GB 显存,这也是\"长文本贵\"的根源。于是有了后续优化:KV 量化、缓存淘汰、磁盘缓存、共享前缀。</p>",
  pitfalls:"<div class=\"ex\">100k 上下文的对话,KV 缓存可能占 10GB+ 显存——比模型权重还占地方。工程上要精打细算。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>KV Cache 不是\"缓存答案\",是\"缓存中间计算\";上下文越长它越占显存,这也是为什么长上下文推理需要专门的显存管理(后面讲 vLLM 会再提)。</div>"
});
