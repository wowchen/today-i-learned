/* aisec/06-jailbreak-adversarial (自动生成) */
ISL.registerLesson({
  id:"aisec/06-jailbreak-adversarial", module:"aisec", order:6,
  title:"越狱与对抗样本", minutes:4,
  keywords:["越狱","对抗样本"],
  concept:"<p><gd data-term=\"jailbreak\">越狱</gd>针对的是\"安全限制\"(诱导说出有害内容);<gd data-term=\"adversarial\">对抗样本</gd>针对的是\"判断\"(精心构造的微小扰动让模型出错)。两者都利用了模型的统计本质。</p>",
  core:"<p>对抗样本在图像/语音里尤其经典:给路牌贴个小贴纸,就能让自动驾驶认错;改几个像素,分类器就翻车。对大模型,则有对抗性提示、隐藏指令等变体。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>对抗攻击说明:AI 的\"看懂/听懂\"和人不一样,它可能被人类完全无感的扰动骗到。把 AI 判断用在高风险决策时,必须有人工复核或多重校验兜底。</div>",
  links:"<p>就算没人攻击,模型自己也会\"说瞎话\"——幻觉。</p>"
});
