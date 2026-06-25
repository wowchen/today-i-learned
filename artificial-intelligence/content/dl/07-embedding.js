/* dl/07-embedding (自动生成) */
AIX.registerLesson({
  id:"dl/07-embedding", module:"dl", order:7,
  title:"嵌入:把万物变成向量", minutes:4,
  keywords:["嵌入","向量","语义"],
  concept:"<p><gd data-term=\"embedding\">嵌入</gd>把词、句子、图片等变成一串数字(<gd data-term=\"vector\">向量</gd>),放进一张\"语义地图\":<b>意思相近的,坐标就相近</b>。</p>",
  core:"<p>机器不认字,只会算数。嵌入就是给每个词一组坐标,让\"猫\"和\"狗\"离得近、\"猫\"和\"汽车\"离得远。更妙的是,这张地图还能做\"语义算术\":向量上\"国王 − 男 + 女 ≈ 女王\"。</p><figure class=\"fig\"><svg viewBox=\"0 0 300 150\" width=\"100%\"><line class=\"f-box\" x1=\"20\" y1=\"130\" x2=\"280\" y2=\"130\"/><line class=\"f-box\" x1=\"20\" y1=\"130\" x2=\"20\" y2=\"15\"/><circle cx=\"70\" cy=\"70\" r=\"5\" class=\"f-arr\"/><text x=\"80\" y=\"68\" class=\"f-txt\">猫</text><circle cx=\"95\" cy=\"55\" r=\"5\" class=\"f-arr\"/><text x=\"105\" y=\"53\" class=\"f-txt\">狗</text><circle cx=\"225\" cy=\"110\" r=\"5\" class=\"f-ok\"/><text x=\"180\" y=\"113\" class=\"f-txt\">汽车</text><text x=\"150\" y=\"148\" class=\"f-dim\" text-anchor=\"middle\">语义空间(示意)</text></svg><figcaption>相近的意思,在向量空间里离得近</figcaption></figure><p>嵌入是现代 NLP 和大模型的地基:有了它,机器才能\"计算\"语义的远近,<gd data-term=\"rag\">检索增强</gd>里\"找相关资料\"靠的也是它。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>嵌入反映的是\"统计上的相近\",不是人类理解的相近。它会把训练语料里的<gd data-term=\"bias-fairness\">偏见</gd>(比如某职业与某性别绑定)也编进坐标里。</div>",
  links:"<p>这么多层、这么大的网络,得有硬件撑着——下一课聊算力与 GPU。</p>"
});
