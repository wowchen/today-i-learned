/* serving/05-long-context (自动生成) */
AIX.registerLesson({
  id:"serving/05-long-context", module:"serving", order:5,
  title:"长上下文与注意力优化", minutes:4,
  keywords:["长上下文","FlashAttention","RoPE"],
  concept:"<p>上下文窗口越长越\"装得下\",但注意力是平方级计算——需要<gd data-term=\"flash-attention\">FlashAttention</gd>这类优化,长上下文才跑得动。</p>",
  core:"<p>标准注意力:每个 token 都要\"看\"所有 token,计算量随长度平方增长(O(n²)),一万 token 就是一亿次计算。几个解法:<b>FlashAttention</b>:分块计算+不存中间结果,省显存还更快;<b>稀疏/滑动窗口注意力</b>:只关心附近 token;<b>RoPE</b>:一种位置编码,让模型能把训练时的长度\"外推\"到更长。</p><p>长上下文(128K、1M)的意义:一次读一本书、分析整个代码仓库、让 Agent 记住很长的对话——是推理和 Agent 的关键能力。</p>",
  pitfalls:"<div class=\"ex\">\"把这份 300 页报告总结成 10 条要点\"——没有长上下文,只能分段喂,效果会差很多。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>上下文长≠全都记得住:模型有\"中间遗忘\"现象,长文的关键信息可能在中间被漏掉;而且越长越贵,能用短上下文就别硬上长的。</div>"
});
