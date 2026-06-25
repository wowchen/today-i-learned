/* genai/06-multimodal (自动生成) */
AIX.registerLesson({
  id:"genai/06-multimodal", module:"genai", order:6,
  title:"多模态", minutes:4,
  keywords:["多模态","跨模态"],
  concept:"<p><gd data-term=\"multimodal\">多模态</gd>模型能<b>同时处理多种信息</b>:看图、读文、听声,并在它们之间打通。你发一张照片问\"这是什么菜、怎么做\",它能看图答字。</p>",
  core:"<p>关键在于把不同形态都映射进同一个<gd data-term=\"embedding\">向量</gd>空间,让\"一张猫的图\"和\"猫\"这个词在模型眼里对得上。于是它能图文问答、看图写代码、根据描述找图、给视频配解说。</p><p>多模态被视为通往更通用 AI 的重要一步——因为人类本就是多感官地理解世界。Gemini、GPT-4 等都主打原生多模态。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>多模态不等于\"全都很强\"。很多模型在某一模态(如纯文本)上仍最强,跨模态的精细理解(看懂复杂图表、读懂长视频细节)还在爬坡。</div>",
  links:"<p>生成能力越强,\"它会不会瞎编\"就越要紧——下一课讲幻觉。</p>"
});
