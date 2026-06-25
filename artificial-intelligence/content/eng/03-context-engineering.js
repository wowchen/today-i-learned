/* eng/03-context-engineering (自动生成) */
AIX.registerLesson({
  id:"eng/03-context-engineering", module:"eng", order:3,
  title:"上下文工程 Context Engineering", minutes:4,
  keywords:["上下文工程","context"],
  concept:"<p><gd data-term=\"context-engineering\">上下文工程</gd>解决的是:<b>该往模型的</b><gd data-term=\"context-window\">上下文窗口</gd><b>里放什么</b>——哪些资料、哪段历史、哪些工具说明,放多少、怎么排。</p>",
  core:"<p>模型只能基于\"眼前看到的\"作答。上下文工程就是当好这个\"资料管家\":用<gd data-term=\"rag\">检索</gd>调来相关文档、把长对话<b>摘要压缩</b>、把最关键的信息放在显眼位置、剔除噪声。</p><p>它为什么重要?因为窗口有限且\"塞太多会分心\"。<b>给得准,比给得多重要</b>——这正是上下文工程的核心手艺。它是 RAG、记忆、长文档处理背后的统一视角。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>常见错误是\"把所有能找到的资料一股脑全塞进去\"。无关内容会稀释重点、抬高成本、还可能引入冲突信息。精选,而非堆量。</div>",
  links:"<p>光有信息还不够,得给模型配上能动手的工具和规矩——框架工程。</p>"
});
