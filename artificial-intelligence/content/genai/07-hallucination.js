/* genai/07-hallucination (自动生成) */
AIX.registerLesson({
  id:"genai/07-hallucination", module:"genai", order:7,
  title:"幻觉:为什么会一本正经胡说", minutes:4,
  keywords:["幻觉","可靠性"],
  concept:"<p><gd data-term=\"hallucination\">幻觉</gd>指模型<b>流畅而自信地编出看似合理、实则错误或虚构的内容</b>——假的文献、不存在的条款、错的数字。</p>",
  core:"<p>根源在它的本质:模型在<gd data-term=\"language-model\">预测最像的下文</gd>,优化的是\"听起来对\",不是\"事实对\"。当它没见过、或记不清时,不会说\"不知道\",而是补一个最顺的答案出来。它没有\"我在编\"的自觉。</p><p>怎么减轻?给它<b>可靠资料</b>让它据此回答(<gd data-term=\"rag\">RAG</gd>)、让它<b>给出处</b>、要求它<b>不确定就说不知道</b>、用<gd data-term=\"chain-of-thought\">分步推理</gd>、以及你来交叉核对。但目前<b>无法根除</b>。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>幻觉最坑的地方是\"自信\"。它编得越像真的,越危险。凡是事实、法律、医疗、数字,默认它\"可能在编\",一律复核来源。</div>",
  links:"<p>当假内容足以乱真,社会层面的风险随之而来——深伪与版权。</p>"
});
