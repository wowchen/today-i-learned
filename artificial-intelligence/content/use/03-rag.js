/* use/03-rag (自动生成) */
AIX.registerLesson({
  id:"use/03-rag", module:"use", order:3,
  title:"检索增强 RAG:给模型外挂知识库", minutes:4,
  keywords:["RAG","知识库"],
  concept:"<p><gd data-term=\"rag\">检索增强生成</gd>的思路是<b>开卷考试</b>:回答前,先去你的知识库里检索相关资料,再把资料连同问题一起交给模型,让它<b>据此作答</b>。</p>",
  core:"<p>它一举解决两个痛点:让模型能用<b>它没学过的私有/最新资料</b>(公司文档、个人笔记),并大幅<b>减少</b><gd data-term=\"hallucination\">幻觉</gd>(有据可依,还能给出处)。</p><figure class=\"fig\"><svg viewBox=\"0 0 330 80\" width=\"100%\"><rect x=\"8\" y=\"30\" width=\"52\" height=\"26\" rx=\"5\" class=\"f-box\"/><text x=\"34\" y=\"47\" class=\"f-dim\" text-anchor=\"middle\">提问</text><rect x=\"92\" y=\"30\" width=\"62\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"123\" y=\"47\" class=\"f-txt\" text-anchor=\"middle\">检索资料</text><rect x=\"186\" y=\"30\" width=\"62\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"217\" y=\"47\" class=\"f-txt\" text-anchor=\"middle\">拼进提示</text><rect x=\"280\" y=\"30\" width=\"44\" height=\"26\" rx=\"5\" class=\"f-arr\"/><text x=\"302\" y=\"47\" class=\"f-inv\" text-anchor=\"middle\" style=\"font-size:11px\">作答</text><polygon class=\"f-arr\" points=\"60,43 70,43 65,39\"/><polygon class=\"f-arr\" points=\"60,43 70,43 65,47\"/><polygon class=\"f-arr\" points=\"154,43 164,43 159,39\"/><polygon class=\"f-arr\" points=\"154,43 164,43 159,47\"/><polygon class=\"f-arr\" points=\"248,43 258,43 253,39\"/><polygon class=\"f-arr\" points=\"248,43 258,43 253,47\"/></svg><figcaption>RAG:先检索,再带着资料作答</figcaption></figure><p>检索靠<gd data-term=\"embedding\">向量</gd>找语义相近的片段。今天大量企业知识助手、文档问答都是 RAG。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>RAG 不是万能药。检索不到或检索错了,模型照样会编;它只能基于\"找到的资料\"作答。资料库的质量和检索效果,决定 RAG 的上限。</div>",
  links:"<p>除了查资料,还能让模型动手用工具、上网。</p>"
});
