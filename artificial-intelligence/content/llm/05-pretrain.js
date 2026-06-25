/* llm/05-pretrain (自动生成) */
AIX.registerLesson({
  id:"llm/05-pretrain", module:"llm", order:5,
  title:"预训练:大模型怎么炼成", minutes:4,
  keywords:["预训练","底座"],
  concept:"<p><gd data-term=\"pretrain\">预训练</gd>是大模型的第一阶段:<b>用海量文本,让模型反复做\"预测下一个词\"的练习,练出一个通才底座</b>(<gd data-term=\"foundation-model\">基础模型</gd>)。</p>",
  core:"<p>这一步不需要人工标答案——文本本身就是答案(下一个词是什么,原文里写着)。喂进去的语料动辄是整个互联网级别的文本,模型在其中自学语言、知识与套路。</p><figure class=\"fig\"><svg viewBox=\"0 0 320 90\" width=\"100%\"><rect x=\"10\" y=\"32\" width=\"78\" height=\"26\" rx=\"5\" class=\"f-box\"/><text x=\"49\" y=\"49\" class=\"f-dim\" text-anchor=\"middle\">海量文本</text><rect x=\"120\" y=\"32\" width=\"78\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"159\" y=\"49\" class=\"f-txt\" text-anchor=\"middle\">预训练</text><rect x=\"230\" y=\"32\" width=\"80\" height=\"26\" rx=\"5\" class=\"f-box2\"/><text x=\"270\" y=\"49\" class=\"f-txt\" text-anchor=\"middle\">通才底座</text><line class=\"f-line\" x1=\"88\" y1=\"45\" x2=\"118\" y2=\"45\" stroke-width=\"2\"/><polygon class=\"f-arr\" points=\"118,41 126,45 118,49\"/><line class=\"f-line\" x1=\"198\" y1=\"45\" x2=\"228\" y2=\"45\" stroke-width=\"2\"/><polygon class=\"f-arr\" points=\"228,41 236,45 228,49\"/></svg><figcaption>预训练:把海量文本压成一个通用底座</figcaption></figure><p>这一步最烧钱烧算力(动辄千卡跑数周),也是规模法则发威的地方。练完的底座知识渊博,但还不太会\"听话办事\"——那要靠下一课的微调和对齐。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>预训练模型的知识<b>停在训练数据的时间点</b>(知识截止),它不会自动知道之后发生的事。要获取新信息,得靠联网工具或<gd data-term=\"rag\">检索</gd>,而不是它\"天生就知道\"。</div>",
  links:"<p>从\"博览群书\"到\"听话好用\",中间隔着微调与 RLHF。</p>"
});
