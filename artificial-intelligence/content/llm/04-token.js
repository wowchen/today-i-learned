/* llm/04-token (自动生成) */
AIX.registerLesson({
  id:"llm/04-token", module:"llm", order:4,
  title:"token 与分词", minutes:3,
  keywords:["token","分词","计费"],
  concept:"<p>模型不是按\"字\"或\"词\"处理文本,而是按<gd data-term=\"token\">词元</gd>:由<gd data-term=\"tokenizer\">分词器</gd>把文字切成的一小块一小块,可能是一个词、半个词或一个汉字。</p>",
  core:"<p>英文里\"unhappy\"可能切成\"un\"\"happy\";中文常一字一个或几字一块。模型读进去、吐出来,算的都是 token。</p><p>为什么你要关心它?因为<b>token 是计量单位</b>:大模型按 token 收费,<gd data-term=\"context-window\">上下文窗口</gd>也按 token 算长度。中文通常比英文更费 token。一个粗略换算:几百字的中文,大约对应几百到上千 token。</p>",
  pitfalls:"<div class=\"ex\">\"今天天气不错\"大约切成 5~7 个 token。你发的提示词越长、要它写得越多,消耗的 token 就越多,花的钱也越多。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>别把 token 当成\"字数\"精确换算。不同模型分词法不同,中英文差异也大;心里有\"越长越贵、有上限\"的概念即可。</div>"
});
