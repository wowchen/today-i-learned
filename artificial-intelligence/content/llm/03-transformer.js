/* llm/03-transformer (自动生成) */
AIX.registerLesson({
  id:"llm/03-transformer", module:"llm", order:3,
  title:"Transformer 架构", minutes:4,
  keywords:["Transformer","架构"],
  concept:"<p><gd data-term=\"transformer\">Transformer</gd>是 2017 年提出的网络架构,它<b>以注意力为核心、能并行处理整段文本</b>,是此后几乎所有大模型的底座。</p>",
  core:"<p>论文标题就是宣言:《Attention Is All You Need》(注意力就是你需要的一切)。它彻底甩开 RNN 的逐字循环,改成<b>整段一起算</b>:既能捕捉任意距离的依赖,又能把 GPU 的并行能力吃满,于是模型可以堆得又大又训得动。</p><figure class=\"fig\"><svg viewBox=\"0 0 300 150\" width=\"100%\"><rect x=\"60\" y=\"20\" width=\"180\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"150\" y=\"37\" class=\"f-txt\" text-anchor=\"middle\">自注意力</text><rect x=\"60\" y=\"62\" width=\"180\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"150\" y=\"79\" class=\"f-txt\" text-anchor=\"middle\">前馈网络</text><rect x=\"60\" y=\"104\" width=\"180\" height=\"26\" rx=\"5\" class=\"f-box\"/><text x=\"150\" y=\"121\" class=\"f-dim\" text-anchor=\"middle\">× N 层 堆叠</text><line class=\"f-line\" x1=\"150\" y1=\"46\" x2=\"150\" y2=\"62\" stroke-width=\"2\"/></svg><figcaption>Transformer 一层:注意力 + 前馈,叠很多层</figcaption></figure><p>瓦斯瓦尼等人提出它时,大概也没料到它会撑起整个大模型时代。GPT 的 T,就是 Transformer。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>Transformer 是\"架构\"(网络的骨架设计),不是某个具体模型。GPT、文心、Llama 用的都是它的变体,就像很多车都用同一种发动机原理。</div>",
  links:"<p>模型读文字前要先\"切块\",这就是 token。</p>"
});
