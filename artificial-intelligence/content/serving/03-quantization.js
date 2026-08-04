/* serving/03-quantization (自动生成) */
AIX.registerLesson({
  id:"serving/03-quantization", module:"serving", order:3,
  title:"量化:把模型\"压瘦\"", minutes:4,
  keywords:["量化","INT8","INT4"],
  concept:"<p>把模型权重从 32/16 位压到 8 位甚至 4 位,体积更小、速度更快、成本更低,精度损失通常可控——这就是<gd data-term=\"quantization\">量化</gd>。</p>",
  core:"<p>为什么能压:模型的权重数值大多集中在很小的范围内,用低精度也能大致表达。做法分两种:<b>训练后量化(PTQ)</b>:训好的模型直接压,省事;<b>量化感知训练(QAT)</b>:训练时就把量化考虑进去,精度更好但更费工。常见方案:GPTQ、AWQ(4bit)、INT8。</p><p>效果:显存直接减半以上、推理更快、单卡能跑更大的模型。但要注意:任务越难、模型越小,量化损失越明显;也要确认推理框架对量化格式的兼容性。</p>",
  pitfalls:"<div class=\"ex\">70B 模型 FP16 要约 140GB 显存,INT4 量化后约 35GB——一张 48GB 的卡就能跑起来,这就是量化让\"本地跑大模型\"成为可能。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>量化不是免费午餐:小模型被压得狠了会明显变笨;不同框架对量化支持不一,别压完发现部署不了。</div>"
});
