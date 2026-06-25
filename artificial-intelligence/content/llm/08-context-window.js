/* llm/08-context-window (自动生成) */
AIX.registerLesson({
  id:"llm/08-context-window", module:"llm", order:8,
  title:"上下文窗口", minutes:3,
  keywords:["上下文窗口","长文本"],
  concept:"<p><gd data-term=\"context-window\">上下文窗口</gd>是模型一次能\"读进去\"的最大<gd data-term=\"token\">token</gd>数。<b>包括你的提问、给的资料、对话历史和它的回答</b>——全都挤在这个窗口里。</p>",
  core:"<p>就像桌面大小:窗口越大,能一次摊开的资料越多,越能处理长文档、长对话。窗口从早期的几千 token,发展到如今部分模型号称几十万乃至上百万 token。</p><p>关键点:<b>超出窗口的内容会被丢掉或截断</b>。聊太久,模型会\"忘记\"开头说过的话;塞超长文档,前面可能根本没进窗口。这正是后面<gd data-term=\"rag\">RAG</gd>和<gd data-term=\"context-engineering\">上下文工程</gd>要解决的问题。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>窗口大 ≠ 用得好。窗口里塞太多无关内容,模型会\"分心\",抓不住重点(所谓\"迷失在中间\")。给得准,比给得多重要。</div>",
  links:"<p>市面上的模型,有的开放有的封闭,下一课讲开源与闭源。</p>"
});
