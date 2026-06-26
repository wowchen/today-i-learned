/* aisec/07-hallucination-trust (自动生成) */
ISL.registerLesson({
  id:"aisec/07-hallucination-trust", module:"aisec", order:7,
  title:"幻觉与可信", minutes:4,
  keywords:["幻觉","可信"],
  concept:"<p><gd data-term=\"hallucination\">幻觉</gd>是模型一本正经地编造看似可信、实则错误的内容(假的引用、不存在的法条、错的数字)。这是大模型的固有特性,不是偶发 bug。</p>",
  core:"<p>它带来的是\"可信性\"风险:在医疗、法律、金融、安全等场景,一个自信的错误答案可能造成实际伤害。缓解靠:检索增强(让它基于真实资料答)、要求给来源、关键结论人工核实。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>幻觉最危险之处在于\"它很自信\"。越是流畅笃定的回答,越容易让人放松核查。重要信息一律\"信任但要验证\",别把模型输出当权威。</div>",
  links:"<p>除了说错,还要防它生成违规有害内容。</p>"
});
