/* posttrain/11-synthetic-data (自动生成) */
AIX.registerLesson({
  id:"posttrain/11-synthetic-data", module:"posttrain", order:11,
  title:"合成数据", minutes:4,
  keywords:["合成数据","蒸馏","自举"],
  concept:"<p>让模型生成数据来训练模型——<gd data-term=\"synthetic-data\">合成数据</gd>正在成为补数据缺口的重要解法,但用不好也会\"自我污染\"。</p>",
  core:"<p>三种常见用法:<b>① 扩充</b>:让模型生成原数据的变体,补稀有场景;<b>② 蒸馏</b>:大模型生成高质量问答,教小模型(见<gd data-term=\"distillation\">蒸馏</gd>);<b>③ 自举</b>:模型自我对弈、自我生成训练数据(如 R1 的\"拒绝采样\":用训练好的模型生成推理数据,再训一轮)。</p><p>风险:纯合成数据的自我循环会导致<b>多样性坍缩</b>(模型越来越\"同质\")和<b>错误放大</b>(一个错被复制成一片错)。所以实践里通常是\"合成+真实+人工审核\"组合使用。</p>",
  pitfalls:"<div class=\"ex\">R1 的拒绝采样:让 R1 生成海量带思考过程的解题数据,筛选出答对的,再拿去训练 V2——\"用自己教自己\"。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>合成数据不是免费数据。用不好,模型会在自己的\"回声\"里退化(学术上叫模型坍缩)。质量把关和真实数据混用是底线。</div>"
});
